// Check database state and users
import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

if (!process.env.DATABASE_URL) {
  console.error('❌ DATABASE_URL is missing from environment!');
  process.exit(1);
}

// Prisma 7 requires an adapter - create a PostgreSQL pool and adapter
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🔍 Checking database state...\n');

  try {
    // Test database connection
    await prisma.$connect();
    console.log('✅ Database connection successful\n');

    // Count users
    const userCount = await prisma.user.count();
    console.log(`📊 Total users in database: ${userCount}\n`);

    if (userCount > 0) {
      console.log('👥 Existing users:');
      const users = await prisma.user.findMany({
        select: {
          email: true,
          name: true,
          role: true,
          createdAt: true,
        },
      });
      users.forEach((user, index) => {
        console.log(`  ${index + 1}. ${user.email} (${user.role}) - ${user.name || 'No name'}`);
      });
    } else {
      console.log('⚠️  No users found in database!');
      console.log('   You need to run: npm run seed:coaches\n');
    }

    // Check if tables exist by trying to query them
    try {
      const tableCheck = await prisma.$queryRaw`
        SELECT table_name 
        FROM information_schema.tables 
        WHERE table_schema = 'public'
        ORDER BY table_name;
      `;
      console.log('\n📋 Database tables:');
      (tableCheck as any[]).forEach((table: any) => {
        console.log(`  - ${table.table_name}`);
      });
    } catch (e) {
      console.log('\n⚠️  Could not list tables (this is okay if migrations not run yet)');
    }

  } catch (error: any) {
    console.error('\n❌ Error checking database:');
    console.error(error.message);
    
    if (error.message.includes('does not exist')) {
      console.error('\n💡 Suggestion: Run database migrations first:');
      console.error('   npx prisma migrate dev');
    } else if (error.message.includes('authentication')) {
      console.error('\n💡 Suggestion: Check your DATABASE_URL in .env.local');
      console.error('   Make sure credentials are correct and remove channel_binding=require if present');
    }
  } finally {
    await prisma.$disconnect();
  }
}

main();

