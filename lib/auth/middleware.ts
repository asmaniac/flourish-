import { auth } from "./auth";
import { redirect } from "next/navigation";

/**
 * Check if user has coach role
 * Use this in server components and API routes
 */
export async function requireCoach() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  if (session.user.role !== "coach") {
    redirect("/");
  }

  return session;
}

/**
 * Check if user is authenticated (any role)
 * Use this in server components and API routes
 */
export async function requireAuth() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return session;
}

/**
 * Get current session (returns null if not authenticated)
 * Use this when you need the session but don't want to redirect
 */
export async function getSession() {
  return await auth();
}

