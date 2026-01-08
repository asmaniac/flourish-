import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth/auth";
import { prisma } from "@/lib/db/prisma";

// GET - Fetch all journal entries for the logged-in user
export async function GET() {
  try {
    const session = await auth();

    if (!session) {
      console.error("No session found in GET /api/journal");
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

    const entries = await prisma.journalEntry.findMany({
      where: {
        userId: session.user.id as string,
      },
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        content: true,
        aiAnalysis: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json(entries);
  } catch (error: any) {
    console.error("Error fetching journal entries:", error);
    return NextResponse.json(
      { error: `Failed to fetch journal entries: ${error.message}` },
      { status: 500 }
    );
  }
}

// POST - Create a new journal entry
export async function POST(request: NextRequest) {
  try {
    const session = await auth();

    if (!session) {
      console.error("No session found in POST /api/journal");
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
    const { content } = body;

    if (!content || typeof content !== "string" || content.trim().length === 0) {
      return NextResponse.json(
        { error: "Content is required" },
        { status: 400 }
      );
    }

    console.log("Creating journal entry for user:", session.user.id);

    const entry = await prisma.journalEntry.create({
      data: {
        content: content.trim(),
        userId: session.user.id as string,
      },
    });

    console.log("Journal entry created successfully:", entry.id);
    return NextResponse.json(entry, { status: 201 });
  } catch (error: any) {
    console.error("Error creating journal entry:", error);
    console.error("Error details:", {
      message: error.message,
      stack: error.stack,
    });
    return NextResponse.json(
      { error: `Failed to create journal entry: ${error.message}` },
      { status: 500 }
    );
  }
}


