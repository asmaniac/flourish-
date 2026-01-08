'use client';

import { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export function Nav() {
  const { data: session, status } = useSession();
  const [showMenu, setShowMenu] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#F5E6D3] via-[#F0E0C9] to-[#F5E6D3] border-b-2 border-[#D4A574] relative z-50 shadow-medium backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold text-gradient hover:scale-105 transition-transform duration-300">FLOURISH</Link>
        <div className="flex items-center gap-4">
          {status === "loading" ? (
            <div className="text-[#8B6F47]">Loading...</div>
          ) : session ? (
            <>
              {/* Main User Pages */}
              <div className="flex items-center gap-3">
                <Link 
                  href="/journal" 
                  className="text-[#8B6F47] hover:text-[#6B5435] transition-colors font-medium"
                >
                  Journal
                </Link>
                <Link 
                  href="/mood-tracker" 
                  className="text-[#8B6F47] hover:text-[#6B5435] transition-colors font-medium"
                >
                  Mood Tracker
                </Link>
                <Link 
                  href="/ai-insights" 
                  className="text-[#8B6F47] hover:text-[#6B5435] transition-colors font-medium flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  AI Insights
                </Link>
              </div>

              {/* Coach Pages */}
              {session.user?.role === "coach" && (
                <div className="relative z-[60]">
                  <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="text-[#8B6F47] hover:text-[#6B5435] transition-colors font-medium flex items-center gap-1"
                  >
                    Coach
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {showMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-[#F5E6D3] border-2 border-[#D4A574] rounded-lg shadow-lg py-2 z-[60]">
                      <Link 
                        href="/rubric-evidence" 
                        className="block px-4 py-2 text-[#8B6F47] hover:bg-[#E8D5B7] transition-colors"
                        onClick={() => setShowMenu(false)}
                      >
                        Rubric Evidence
                      </Link>
                      <Link 
                        href="/reflection" 
                        className="block px-4 py-2 text-[#8B6F47] hover:bg-[#E8D5B7] transition-colors"
                        onClick={() => setShowMenu(false)}
                      >
                        Reflection
                      </Link>
                    </div>
                  )}
                </div>
              )}

              {/* Info Dropdown */}
              <div className="relative z-[60]">
                <button
                  onClick={() => setShowInfo(!showInfo)}
                  className="text-[#8B6F47] hover:text-[#6B5435] transition-colors font-medium flex items-center gap-1"
                >
                  Info
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showInfo && (
                  <div className="absolute right-0 mt-2 w-40 bg-[#F5E6D3] border-2 border-[#D4A574] rounded-lg shadow-lg py-2 z-[60]">
                    <Link 
                      href="/about" 
                      className="block px-4 py-2 text-[#8B6F47] hover:bg-[#E8D5B7] transition-colors"
                      onClick={() => setShowInfo(false)}
                    >
                      About
                    </Link>
                    <Link 
                      href="/features" 
                      className="block px-4 py-2 text-[#8B6F47] hover:bg-[#E8D5B7] transition-colors"
                      onClick={() => setShowInfo(false)}
                    >
                      Features
                    </Link>
                    <Link 
                      href="/product" 
                      className="block px-4 py-2 text-[#8B6F47] hover:bg-[#E8D5B7] transition-colors"
                      onClick={() => setShowInfo(false)}
                    >
                      Product
                    </Link>
                  </div>
                )}
              </div>

              {/* User Menu */}
              <div className="flex items-center gap-3 border-l border-[#D4A574] pl-4">
                <span className="text-[#8B6F47] text-sm hidden md:block">
                  {session.user?.name || session.user?.email?.split('@')[0]}
                </span>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="bg-[#E8D5B7] text-[#8B6F47] px-4 py-2 rounded-full hover:bg-[#D4A574] transition-colors font-semibold text-sm"
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <Link href="/about" className="text-[#8B6F47] hover:text-[#6B5435] transition-colors">
                About
              </Link>
              <Link href="/features" className="text-[#8B6F47] hover:text-[#6B5435] transition-colors">
                Features
              </Link>
              <Link 
                href="/login" 
                className="bg-[#E8D5B7] text-[#8B6F47] px-6 py-2 rounded-full hover:bg-[#D4A574] transition-colors font-semibold"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
      {/* Close dropdowns when clicking outside */}
      {(showMenu || showInfo) && (
        <div 
          className="fixed inset-0 z-[55]" 
          onClick={() => {
            setShowMenu(false);
            setShowInfo(false);
          }}
        />
      )}
    </nav>
  );
}


