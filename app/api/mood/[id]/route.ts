import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth/auth";
import { prisma } from "@/lib/db/prisma";

// DELETE - Delete a mood entry
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id } = await params;

    // Verify the entry belongs to the user
    const existingEntry = await prisma.moodEntry.findUnique({
      where: { id },
    });

    if (!existingEntry) {
      return NextResponse.json(
        { error: "Mood entry not found" },
        { status: 404 }
      );
    }

    if (existingEntry.userId !== session.user.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 403 }
      );
    }

    await prisma.moodEntry.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error deleting mood entry:", error);
    return NextResponse.json(
      { error: "Failed to delete mood entry" },
      { status: 500 }
    );
  }
}


