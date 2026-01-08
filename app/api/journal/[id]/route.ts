import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth/auth";
import { prisma } from "@/lib/db/prisma";

// PUT - Update a journal entry
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
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

    // Verify the entry belongs to the user
    const existingEntry = await prisma.journalEntry.findUnique({
      where: { id: params.id },
    });

    if (!existingEntry) {
      return NextResponse.json(
        { error: "Journal entry not found" },
        { status: 404 }
      );
    }

    if (existingEntry.userId !== session.user.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 403 }
      );
    }

    const entry = await prisma.journalEntry.update({
      where: { id: params.id },
      data: {
        content: content.trim(),
      },
    });

    return NextResponse.json(entry);
  } catch (error: any) {
    console.error("Error updating journal entry:", error);
    return NextResponse.json(
      { error: "Failed to update journal entry" },
      { status: 500 }
    );
  }
}

// DELETE - Delete a journal entry
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Verify the entry belongs to the user
    const existingEntry = await prisma.journalEntry.findUnique({
      where: { id: params.id },
    });

    if (!existingEntry) {
      return NextResponse.json(
        { error: "Journal entry not found" },
        { status: 404 }
      );
    }

    if (existingEntry.userId !== session.user.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 403 }
      );
    }

    await prisma.journalEntry.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error deleting journal entry:", error);
    return NextResponse.json(
      { error: "Failed to delete journal entry" },
      { status: 500 }
    );
  }
}


