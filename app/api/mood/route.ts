import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth/auth";
import { prisma } from "@/lib/db/prisma";

// GET - Fetch all mood entries for the logged-in user
export async function GET() {
  try {
    const session = await auth();

    if (!session) {
      console.error("No session found in GET /api/mood");
      return NextResponse.json(
        { error: "Unauthorized - No session" },
        { status: 401 }
      );
    }

    if (!session.user?.id) {
      console.error("No user ID in session:", session);
      return NextResponse.json(
        { error: "Unauthorized - No user ID" },
        { status: 401 }
      );
    }

    console.log("Fetching mood entries for user:", session.user.id);

    const entries = await prisma.moodEntry.findMany({
      where: {
        userId: session.user.id as string,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    console.log(`Found ${entries.length} mood entries`);
    return NextResponse.json(entries);
  } catch (error: any) {
    console.error("Error fetching mood entries:", error);
    console.error("Error details:", {
      message: error.message,
      stack: error.stack,
    });
    return NextResponse.json(
      { error: `Failed to fetch mood entries: ${error.message}` },
      { status: 500 }
    );
  }
}

// POST - Create a new mood entry
export async function POST(request: NextRequest) {
  try {
    const session = await auth();

    if (!session) {
      console.error("No session found");
      return NextResponse.json(
        { error: "Unauthorized - No session" },
        { status: 401 }
      );
    }

    if (!session.user?.id) {
      console.error("No user ID in session:", session);
      return NextResponse.json(
        { error: "Unauthorized - No user ID" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { mood, stress, notes } = body;

    console.log("Creating mood entry:", { mood, stress, notes, userId: session.user.id });

    if (mood === undefined || mood === null || mood < 1 || mood > 10) {
      return NextResponse.json(
        { error: "Mood must be between 1 and 10" },
        { status: 400 }
      );
    }

    // Only validate stress if it's provided and not null
    if (stress !== undefined && stress !== null && (stress < 1 || stress > 10)) {
      return NextResponse.json(
        { error: "Stress must be between 1 and 10" },
        { status: 400 }
      );
    }

    const entry = await prisma.moodEntry.create({
      data: {
        mood: Number(mood),
        stress: stress ? Number(stress) : null,
        notes: notes || null,
        userId: session.user.id as string,
      },
    });

    console.log("Mood entry created successfully:", entry.id);
    return NextResponse.json(entry, { status: 201 });
  } catch (error: any) {
    console.error("Error creating mood entry:", error);
    console.error("Error details:", {
      message: error.message,
      stack: error.stack,
      name: error.name,
    });
    return NextResponse.json(
      { error: `Failed to create mood entry: ${error.message}` },
      { status: 500 }
    );
  }
}


