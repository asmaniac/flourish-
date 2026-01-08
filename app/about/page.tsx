import Link from "next/link";
import { Nav } from "@/components/nav";

export default function About() {
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

      <div className="max-w-5xl mx-auto px-6 py-12 relative z-10">
        {/* Hero Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <svg className="w-16 h-16 text-[#8B6F47] opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-[#8B6F47] mb-4 leading-tight">
            Understanding the Problem
          </h1>
          <p className="text-xl text-[#8B6F47] opacity-80 max-w-2xl mx-auto">
            Why student wellness matters and why we built Flourish
          </p>
        </div>

        {/* Foliage Decorations - Enhanced */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-20 left-4 opacity-25">
            <svg width="110" height="140" viewBox="0 0 110 140" fill="none">
              <path d="M55 140 Q35 110 25 85 Q15 60 20 42 Q25 24 38 16 Q51 8 65 14 Q79 20 85 38 Q91 56 82 78 Q73 100 55 108" stroke="#6B8E23" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <ellipse cx="45" cy="65" rx="10" ry="15" fill="#7CB342" transform="rotate(-22 45 65)" opacity="0.6"/>
              <ellipse cx="65" cy="75" rx="9" ry="13" fill="#8BC34A" transform="rotate(35 65 75)" opacity="0.6"/>
            </svg>
          </div>
          <div className="absolute top-40 right-6 opacity-25">
            <svg width="100" height="130" viewBox="0 0 100 130" fill="none">
              <path d="M50 130 Q32 100 24 78 Q16 56 20 40 Q24 24 36 17 Q48 10 60 15 Q72 20 78 36 Q84 52 77 72 Q70 92 50 98" stroke="#6B8E23" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <ellipse cx="42" cy="58" rx="9" ry="13" fill="#7CB342" transform="rotate(-25 42 58)" opacity="0.6"/>
              <ellipse cx="58" cy="68" rx="8" ry="12" fill="#8BC34A" transform="rotate(30 58 68)" opacity="0.6"/>
            </svg>
          </div>
          <div className="absolute bottom-40 left-8 opacity-25">
            <svg width="95" height="125" viewBox="0 0 95 125" fill="none">
              <path d="M47 125 Q30 95 22 72 Q14 49 18 33 Q22 17 34 10 Q46 3 58 8 Q70 13 76 29 Q82 45 75 65 Q68 85 47 91" stroke="#6B8E23" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <ellipse cx="39" cy="55" rx="8" ry="12" fill="#7CB342" transform="rotate(-20 39 55)" opacity="0.6"/>
              <ellipse cx="55" cy="65" rx="7" ry="11" fill="#8BC34A" transform="rotate(28 55 65)" opacity="0.6"/>
            </svg>
          </div>
          <div className="absolute bottom-32 right-10 opacity-25">
            <svg width="90" height="120" viewBox="0 0 90 120" fill="none">
              <path d="M45 120 Q28 90 20 70 Q12 50 16 35 Q20 20 32 13 Q44 6 56 11 Q68 16 74 32 Q80 48 73 68 Q66 88 45 94" stroke="#6B8E23" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <ellipse cx="37" cy="54" rx="8" ry="12" fill="#7CB342" transform="rotate(-18 37 54)" opacity="0.6"/>
              <ellipse cx="53" cy="64" rx="7" ry="11" fill="#8BC34A" transform="rotate(32 53 64)" opacity="0.6"/>
            </svg>
          </div>
        </div>

        {/* The Problem Section */}
        <section className="bg-gradient-to-br from-[#F5E6D3] via-[#F0E0C9] to-[#E8D5B7] rounded-3xl p-10 border-2 border-[#D4A574] mb-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D4A574] to-transparent opacity-10 rounded-full -mr-16 -mt-16"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-gradient-to-br from-[#D4A574] to-[#C9A876] rounded-full flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#8B6F47]">Student Stress: A Growing Crisis</h2>
            </div>
            <div className="space-y-4 text-[#8B6F47] leading-relaxed text-lg">
              <p>
                Today's students face unprecedented levels of stress and anxiety. Between academic pressures, 
                social challenges, and the constant demands of modern life, many students struggle to maintain 
                their mental wellness. The problem isn't just about feeling overwhelmed. It's about the long-term 
                impact on academic performance, relationships, and overall quality of life.
              </p>
              <p>
                Without proper tools to track, understand, and manage their emotional well-being, students often 
                find themselves in a cycle of stress that affects every aspect of their lives. The need for a 
                simple, accessible solution has never been more urgent.
              </p>
            </div>
          </div>
        </section>

        {/* Personal Examples Section */}
        <section className="bg-gradient-to-br from-[#E8D5B7] via-[#F0E0C9] to-[#F5E6D3] rounded-3xl p-10 border-2 border-[#D4A574] mb-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#D4A574] to-transparent opacity-10 rounded-full -ml-20 -mb-20"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-gradient-to-br from-[#C9A876] to-[#D4A574] rounded-full flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#8B6F47]">Personal Experience</h2>
            </div>
            <div className="space-y-4 text-[#8B6F47] leading-relaxed text-lg">
              <p>
                During my time at LaunchPad Philly, I often felt pulled in a million directions: projects, workshops, 
                deadlines, and trying to learn new tech skills all at once. Some days I'd sit down to work on an 
                assignment and get stuck, not because I didn't know how to do it, but because I was stressed and 
                overwhelmed. I'd feel drained by the end of the day, even if I technically got some work done.
              </p>
              <p>
                I wanted a way to reflect on how I was feeling, track my stress over time, and see patterns, but there 
                wasn't a simple tool for that. Flourish is built for moments like that: a place where students and 
                young people can track mood, reflect through journaling, and get insights from AI to understand and 
                manage stress before it builds up.
              </p>
            </div>
          </div>
        </section>

        {/* Existing Solutions Section */}
        <section className="bg-gradient-to-br from-[#F5E6D3] via-[#F0E0C9] to-[#E8D5B7] rounded-3xl p-10 border-2 border-[#D4A574] mb-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-36 h-36 bg-gradient-to-br from-[#D4A574] to-transparent opacity-10 rounded-full -ml-18 -mt-18"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#D4A574] to-[#C9A876] rounded-full flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#8B6F47]">Existing Solutions</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-[#D4A574]/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#E8D5B7] to-[#D4A574] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[#8B6F47]">Meditation Apps</h3>
                </div>
                <p className="text-[#8B6F47] leading-relaxed text-lg">
                  While meditation apps like Headspace and Calm are helpful, they focus primarily on guided 
                  meditation and don't provide personalized insights based on your actual mood patterns. They 
                  also require a subscription and can feel disconnected from daily life.
                </p>
              </div>
              <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-[#D4A574]/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#E8D5B7] to-[#D4A574] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[#8B6F47]">Traditional Journaling</h3>
                </div>
                <p className="text-[#8B6F47] leading-relaxed text-lg">
                  Physical journals and basic note-taking apps are great for reflection, but they lack the 
                  ability to analyze patterns or provide actionable insights. Without structure or analysis, 
                  it's easy to write but hard to understand what your entries reveal about your wellness.
                </p>
              </div>
              <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-[#D4A574]/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#E8D5B7] to-[#D4A574] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[#8B6F47]">Mood Tracking Apps</h3>
                </div>
                <p className="text-[#8B6F47] leading-relaxed text-lg">
                  Many mood tracking apps exist, but they often feel clinical or overwhelming with too many 
                  features. They rarely integrate journaling with mood analysis, and most don't use AI to 
                  provide meaningful insights that help users understand their emotional patterns.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Consequences Section */}
        <section className="bg-gradient-to-br from-[#E8D5B7] via-[#F0E0C9] to-[#F5E6D3] rounded-3xl p-10 border-2 border-[#D4A574] shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#D4A574] to-transparent opacity-10 rounded-full -mr-16 -mb-16"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#C9A876] to-[#D4A574] rounded-full flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#8B6F47]">Consequences of Not Solving This</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-[#D4A574]/30">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-red-200 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[#8B6F47]">Academic Impact</h3>
                </div>
                <p className="text-[#8B6F47] leading-relaxed text-base">
                  Chronic stress leads to decreased focus, memory problems, and lower academic performance. Students who don't manage their wellness often see their grades suffer, creating a negative feedback loop.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-[#D4A574]/30">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-orange-200 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[#8B6F47]">Mental Health Decline</h3>
                </div>
                <p className="text-[#8B6F47] leading-relaxed text-base">
                  Unmanaged stress can lead to anxiety disorders, depression, and burnout. Without tools to recognize patterns early, students may not seek help until problems become severe.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-[#D4A574]/30">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-yellow-200 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[#8B6F47]">Social Isolation</h3>
                </div>
                <p className="text-[#8B6F47] leading-relaxed text-base">
                  High stress levels can strain relationships with friends and family. Students may withdraw socially, further exacerbating their mental health challenges.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-[#D4A574]/30">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-purple-200 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[#8B6F47]">Long-term Effects</h3>
                </div>
                <p className="text-[#8B6F47] leading-relaxed text-base">
                  The habits and coping mechanisms students develop during their academic years often carry into adulthood. Learning healthy wellness practices early is crucial for long-term mental health and success.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

