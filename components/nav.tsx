'use client';

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export function Nav() {
  const { data: session, status } = useSession();

  return (
    <nav className="bg-[#F5E6D3] border-b border-[#D4A574] relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold text-[#8B6F47]">FLOURISH</Link>
        <div className="flex items-center gap-8">
          <Link href="/about" className="text-[#8B6F47] hover:text-[#6B5435] transition-colors">
            About
          </Link>
          <Link href="/features" className="text-[#8B6F47] hover:text-[#6B5435] transition-colors">
            Features
          </Link>
          <Link href="/product" className="text-[#8B6F47] hover:text-[#6B5435] transition-colors">
            Product
          </Link>
          {status === "loading" ? (
            <div className="text-[#8B6F47]">Loading...</div>
          ) : session ? (
            <div className="flex items-center gap-4">
              <span className="text-[#8B6F47] text-sm">
                {session.user?.name || session.user?.email}
              </span>
              {session.user?.role === "coach" && (
                <>
                  <Link 
                    href="/rubric-evidence" 
                    className="text-[#8B6F47] hover:text-[#6B5435] transition-colors"
                  >
                    Rubric Evidence
                  </Link>
                  <Link 
                    href="/reflection" 
                    className="text-[#8B6F47] hover:text-[#6B5435] transition-colors"
                  >
                    Reflection
                  </Link>
                </>
              )}
              <Link 
                href="/journal" 
                className="text-[#8B6F47] hover:text-[#6B5435] transition-colors"
              >
                Journal
              </Link>
              <Link 
                href="/mood-tracker" 
                className="text-[#8B6F47] hover:text-[#6B5435] transition-colors"
              >
                Mood Tracker
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="bg-[#E8D5B7] text-[#8B6F47] px-6 py-2 rounded-full hover:bg-[#D4A574] transition-colors font-semibold"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link 
              href="/login" 
              className="bg-[#E8D5B7] text-[#8B6F47] px-6 py-2 rounded-full hover:bg-[#D4A574] transition-colors font-semibold"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}


