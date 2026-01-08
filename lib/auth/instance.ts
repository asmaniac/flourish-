import NextAuth from "next-auth";
import { authOptions } from "./config";

// Validate NEXTAUTH_SECRET before initializing NextAuth
if (!process.env.NEXTAUTH_SECRET) {
  throw new Error(
    "NEXTAUTH_SECRET is missing. Please add it to your .env.local file."
  );
}

// Create NextAuth instance - this exports both handlers and auth function
export const nextAuth = NextAuth(authOptions);

// Export auth function for use in API routes and server components
export const auth = nextAuth.auth;

// Export handlers for the route
export const { handlers } = nextAuth;

