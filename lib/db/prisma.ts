// IMPORTANT: Load dotenv/config FIRST before importing PrismaClient
// Prisma 7 requires an adapter or accelerateUrl
import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Ensure DATABASE_URL is loaded
const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  console.error('\n❌ DATABASE_URL is missing from environment!\n');
  console.error('Debugging info:');
  console.error('- NODE_ENV:', process.env.NODE_ENV);
  console.error('- All env vars with "DATABASE":', Object.keys(process.env).filter(k => k.toUpperCase().includes('DATABASE')));
  console.error('\nPlease ensure your .env.local file contains:');
  console.error('DATABASE_URL="your-connection-string"\n');
  throw new Error('DATABASE_URL is required but not found in environment variables');
}

// Log for debugging (remove in production)
if (process.env.NODE_ENV === 'development') {
  // Only show first part of connection string for security
  const urlPreview = databaseUrl.includes('@') 
    ? databaseUrl.split('@')[0] + '@...' 
    : databaseUrl.substring(0, 30) + '...';
  console.log('✓ DATABASE_URL found:', urlPreview);
}

// Prisma 7 requires an adapter - create a PostgreSQL pool and adapter
const pool = new Pool({ connectionString: databaseUrl });
const adapter = new PrismaPg(pool);

// Create PrismaClient with the adapter
export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

