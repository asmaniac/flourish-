'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

/**
 * Hook to check if user is a coach
 * Use this in client components
 */
export function useRequireCoach() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    if (status === "unauthenticated" || !session?.user) {
      router.push("/login");
      return;
    }

    if (session.user.role !== "coach") {
      router.push("/");
      return;
    }
  }, [session, status, router]);

  return {
    session,
    isCoach: session?.user?.role === "coach",
    isLoading: status === "loading",
  };
}

/**
 * Hook to check if user is authenticated
 * Use this in client components
 */
export function useRequireAuth() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    if (status === "unauthenticated" || !session?.user) {
      router.push("/login");
    }
  }, [session, status, router]);

  return {
    session,
    isAuthenticated: !!session?.user,
    isLoading: status === "loading",
  };
}

/**
 * Hook to get user role information
 * Use this in client components when you need role info but don't want to redirect
 */
export function useRole() {
  const { data: session, status } = useSession();

  return {
    session,
    role: session?.user?.role || null,
    isCoach: session?.user?.role === "coach",
    isStudent: session?.user?.role === "student",
    isLoading: status === "loading",
  };
}

