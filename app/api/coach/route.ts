import { NextResponse } from "next/server";
import { auth } from "@/lib/auth/auth";

/**
 * Example API route that requires coach access
 * Use this pattern for any coach-only API endpoints
 */
export async function GET() {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  if (session.user.role !== "coach") {
    return NextResponse.json(
      { error: "Forbidden - Coach access required" },
      { status: 403 }
    );
  }

  return NextResponse.json({
    message: "Coach-only endpoint",
    user: session.user,
  });
}




