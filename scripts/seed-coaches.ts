// dotenv-cli loads .env.local before this script runs
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

// Verify DATABASE_URL is available (dotenv-cli should have loaded it)
if (!process.env.DATABASE_URL) {
  console.error('❌ DATABASE_URL is missing!');
  console.error('Make sure you run: npm run seed:coaches');
  process.exit(1);
}

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding coach accounts...');

  const coaches = [
    {
      email: 'rob@launchpadphilly.org',
      password: 'lpuser1',
      name: 'Rob',
      role: 'coach',
    },
    {
      email: 'sanaa@launchpadphilly.org',
      password: 'lpuser2',
      name: 'Sanaa',
      role: 'coach',
    },
    {
      email: 'taheera@launchpadphilly.org',
      password: 'lpuser3',
      name: 'Taheera',
      role: 'coach',
    },
  ];

  for (const coach of coaches) {
    // Check if coach already exists
    const existing = await prisma.user.findUnique({
      where: { email: coach.email },
    });

    if (existing) {
      console.log(`Coach ${coach.email} already exists, skipping...`);
      continue;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(coach.password, 10);

    // Create coach
    await prisma.user.create({
      data: {
        email: coach.email,
        password: hashedPassword,
        name: coach.name,
        role: coach.role,
      },
    });

    console.log(`Created coach account: ${coach.email}`);
  }

  console.log('Coach seeding completed!');
  
  await prisma.$disconnect();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });

