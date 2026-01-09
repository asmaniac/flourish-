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
              <p className="text-[#8B6F47] leading-relaxed">
                I got full-stack authentication working with NextAuth v5 and PostgreSQL, which made the app feel more real and secure, but what really drove the project was my own experience with mental health and motivation. I wanted something easy to access, especially on days when putting my feelings into words feels hard. I focused heavily on the UI, making sure everything was clean, intuitive, and consistent so users aren't overwhelmed or confused when they open the app. I also set up role-based access so coaches and students each have clear, separate experiences. On the backend, I made sure journal entries and mood tracking actually save and stick, because losing progress can be discouraging when you're already struggling. To help with motivation, I built a plant growth feature that visually shows progress and makes checking in with your mood feel rewarding instead of like a chore.
              </p>
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
              <p className="text-[#8B6F47] leading-relaxed">
                A lot of the friction came from working with NextAuth v5 while it was still in beta. The API changes, especially switching from getServerSession to auth(), caused confusion early on and slowed me down. I also ran into session persistence issues when moving between pages, which turned out to be a navigation problem that I fixed by refactoring everything to use a shared Nav component. On the backend, Neon gave me a few headaches, including a database connection string issue related to the channel_binding parameter. I also dealt with Prisma query engine conflicts when multiple instances were running, which took some trial and error to fully understand and resolve.
              </p>
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
              <p className="text-[#8B6F47] leading-relaxed">
                As the project evolved, I made several key changes to support scaling and real-world use. I switched the database from SQLite to PostgreSQL using Neon so the app could actually function in a production environment. I upgraded authentication to NextAuth v5 beta and adjusted my approach to match the new API patterns. I moved away from local state and stored journal entries and mood data in the database so user progress would persist across sessions. To fix session issues and keep things consistent, I created a shared navigation component across all pages. I also reworked the app's architecture to properly support role-based access, using middleware and hooks to clearly separate coach and student experiences.
              </p>
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
              <p className="text-[#8B6F47] leading-relaxed">
                If I had more time, I'd focus on features that help users better understand themselves over time. I'd add analytics with charts and visualizations to show mood trends, stress patterns, and how journaling connects to emotional changes. I'd also introduce notifications and reminders to encourage daily check-ins and weekly reflections. Another big addition would be export tools, letting users download their journal entries and mood data as PDFs or CSVs to keep for themselves or share with a therapist. Long-term, I'd love to build a mobile version using React Native for on-the-go journaling, and expand the AI features to give weekly summaries, spot patterns, and suggest personalized wellness activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
