import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/db/prisma';

export async function POST() {
  try {
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

    const results = [];

    for (const coach of coaches) {
      // Check if coach already exists
      const existing = await prisma.user.findUnique({
        where: { email: coach.email },
      });

      if (existing) {
        results.push(`Coach ${coach.email} already exists, skipping...`);
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

      results.push(`Created coach account: ${coach.email}`);
    }

    return NextResponse.json({
      success: true,
      message: 'Coach seeding completed!',
      results,
    });
  } catch (error) {
    console.error('Error seeding coaches:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

