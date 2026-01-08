'use client';

import { useRequireCoach } from "@/lib/auth/use-role";
import { Nav } from "@/components/nav";

export default function Reflection() {
  const { session, isCoach, isLoading } = useRequireCoach();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F9F5F0] flex items-center justify-center">
        <div className="text-[#8B6F47] text-xl">Loading...</div>
      </div>
    );
  }

  if (!isCoach) {
    return null; // Will redirect
  }

  return (
    <div className="min-h-screen bg-[#F9F5F0] relative overflow-hidden">
      {/* Floating Bubbles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
        <div className="bubble bubble-6"></div>
        <div className="bubble bubble-7"></div>
        <div className="bubble bubble-8"></div>
      </div>

      <Nav />

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="bg-gradient-to-br from-[#F5E6D3] to-[#E8D5B7] rounded-3xl p-8 border-2 border-[#D4A574] shadow-lg mb-6">
          <h1 className="text-4xl font-bold text-[#8B6F47] mb-4">Reflection</h1>
          <p className="text-xl text-[#8B6F47] mb-2">
            Helps you reach higher levels by showing future challenges, constraints, and smart decisions.
          </p>
          <p className="text-sm text-[#8B6F47] opacity-75">
            [RBA for LP Staff Only]
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* What Went Well */}
          <div className="bg-gradient-to-br from-[#F5E6D3] to-[#E8D5B7] rounded-3xl p-8 border-2 border-[#D4A574] shadow-lg">
            <h2 className="text-2xl font-bold text-[#8B6F47] mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-[#6B8E23]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              What Went Well
            </h2>
            <div className="bg-[#F9F5F0] rounded-2xl p-6 border-2 border-[#D4A574] min-h-[200px]">
              <ul className="space-y-3 text-[#8B6F47]">
                <li className="flex items-start gap-2">
                  <span className="text-[#6B8E23] font-bold">•</span>
                  <span>Successfully implemented full-stack authentication with NextAuth v5 and PostgreSQL</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6B8E23] font-bold">•</span>
                  <span>Created a beautiful, intuitive UI with consistent design language across all pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6B8E23] font-bold">•</span>
                  <span>Implemented role-based access control (RBA) for coach/student separation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6B8E23] font-bold">•</span>
                  <span>Built persistent data storage for journal entries and mood tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6B8E23] font-bold">•</span>
                  <span>Created a visual plant growth system that motivates users to track their mood</span>
                </li>
              </ul>
            </div>
          </div>

          {/* What Didn't Go Well */}
          <div className="bg-gradient-to-br from-[#F5E6D3] to-[#E8D5B7] rounded-3xl p-8 border-2 border-[#D4A574] shadow-lg">
            <h2 className="text-2xl font-bold text-[#8B6F47] mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-[#D32F2F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              What Didn't Go Well
            </h2>
            <div className="bg-[#F9F5F0] rounded-2xl p-6 border-2 border-[#D4A574] min-h-[200px]">
              <ul className="space-y-3 text-[#8B6F47]">
                <li className="flex items-start gap-2">
                  <span className="text-[#D32F2F] font-bold">•</span>
                  <span>Initial challenges with NextAuth v5 beta API changes (auth() vs getServerSession)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D32F2F] font-bold">•</span>
                  <span>Session persistence issues when navigating between pages (fixed by updating all pages to use Nav component)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D32F2F] font-bold">•</span>
                  <span>Database connection string format issues with Neon (channel_binding parameter)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D32F2F] font-bold">•</span>
                  <span>Prisma query engine conflicts when multiple instances were running</span>
                </li>
              </ul>
            </div>
          </div>

          {/* What You Changed */}
          <div className="bg-gradient-to-br from-[#F5E6D3] to-[#E8D5B7] rounded-3xl p-8 border-2 border-[#D4A574] shadow-lg">
            <h2 className="text-2xl font-bold text-[#8B6F47] mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-[#D4A574]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              What You Changed During the Project and Why
            </h2>
            <div className="bg-[#F9F5F0] rounded-2xl p-6 border-2 border-[#D4A574] min-h-[200px]">
              <ul className="space-y-3 text-[#8B6F47]">
                <li className="flex items-start gap-2">
                  <span className="text-[#D4A574] font-bold">•</span>
                  <span><strong>Database:</strong> Switched from SQLite to PostgreSQL (Neon) to support production deployment and better scalability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4A574] font-bold">•</span>
                  <span><strong>Authentication:</strong> Upgraded to NextAuth v5 beta and adapted to new API patterns (auth() function instead of getServerSession)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4A574] font-bold">•</span>
                  <span><strong>Data Persistence:</strong> Changed from local state to database storage so entries persist across sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4A574] font-bold">•</span>
                  <span><strong>Navigation:</strong> Created shared Nav component to ensure consistent session state across all pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4A574] font-bold">•</span>
                  <span><strong>Architecture:</strong> Implemented proper RBA system with middleware and hooks for coach/student separation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* What You'd Build Next */}
          <div className="bg-gradient-to-br from-[#F5E6D3] to-[#E8D5B7] rounded-3xl p-8 border-2 border-[#D4A574] shadow-lg">
            <h2 className="text-2xl font-bold text-[#8B6F47] mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-[#6B8E23]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              What You'd Build Next If You Had More Time
            </h2>
            <div className="bg-[#F9F5F0] rounded-2xl p-6 border-2 border-[#D4A574] min-h-[200px]">
              <ul className="space-y-3 text-[#8B6F47]">
                <li className="flex items-start gap-2">
                  <span className="text-[#6B8E23] font-bold">•</span>
                  <span><strong>AI Analysis:</strong> Implement OpenAI integration to analyze journal entries and provide personalized insights and recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6B8E23] font-bold">•</span>
                  <span><strong>Advanced Analytics:</strong> Add charts and graphs showing mood trends over time, stress patterns, and correlations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6B8E23] font-bold">•</span>
                  <span><strong>Coach Dashboard:</strong> Build a comprehensive dashboard for coaches to view all student progress, journal entries, and mood data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6B8E23] font-bold">•</span>
                  <span><strong>Notifications:</strong> Add reminders for daily mood tracking and weekly reflection prompts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6B8E23] font-bold">•</span>
                  <span><strong>Export Features:</strong> Allow users to export their data as PDF or CSV for personal records</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6B8E23] font-bold">•</span>
                  <span><strong>Mobile App:</strong> Create a React Native mobile app for on-the-go mood tracking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
