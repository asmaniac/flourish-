import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth/auth";
import { prisma } from "@/lib/db/prisma";
import { analyzeJournalEntry } from "@/lib/ai/openai";

export async function POST(
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

    const { id: entryId } = await params;

    // Fetch the journal entry
    const entry = await prisma.journalEntry.findUnique({
      where: { id: entryId },
    });

    if (!entry) {
      return NextResponse.json(
        { error: "Journal entry not found" },
        { status: 404 }
      );
    }

    // Verify ownership
    if (entry.userId !== session.user.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 403 }
      );
    }

    // Check if analysis already exists
    if (entry.aiAnalysis) {
      return NextResponse.json({
        analysis: JSON.parse(entry.aiAnalysis),
        cached: true,
      });
    }

    // Fetch recent entries for context (last 5)
    const recentEntries = await prisma.journalEntry.findMany({
      where: {
        userId: session.user.id,
        id: { not: entryId },
      },
      orderBy: { createdAt: 'desc' },
      take: 5,
      select: { content: true },
    });

    const previousContents = recentEntries.map(e => e.content);

    // Analyze the entry
    const analysis = await analyzeJournalEntry(entry.content, previousContents);

    // Save the analysis to the database
    const updatedEntry = await prisma.journalEntry.update({
      where: { id: entryId },
      data: {
        aiAnalysis: JSON.stringify(analysis),
      },
    });

    return NextResponse.json({
      analysis,
      cached: false,
    });
  } catch (error: any) {
    console.error("Error analyzing journal entry:", error);
    return NextResponse.json(
      { error: error.message || "Failed to analyze journal entry" },
      { status: 500 }
    );
  }
}

