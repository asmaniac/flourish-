import Link from "next/link";
import { Nav } from "@/components/nav";

export default function Product() {
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

      {/* Foliage Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Top left foliage */}
        <div className="absolute top-20 left-10 opacity-30">
          <svg width="120" height="150" viewBox="0 0 120 150" fill="none">
            <path d="M60 150 Q40 120 30 100 Q20 80 25 60 Q30 40 45 30 Q60 20 75 25 Q90 30 95 50 Q100 70 90 90 Q80 110 60 120" stroke="#6B8E23" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <ellipse cx="50" cy="70" rx="12" ry="18" fill="#7CB342" transform="rotate(-25 50 70)"/>
            <ellipse cx="70" cy="80" rx="10" ry="15" fill="#8BC34A" transform="rotate(30 70 80)"/>
          </svg>
        </div>
        
        {/* Top right foliage */}
        <div className="absolute top-32 right-16 opacity-30">
          <svg width="100" height="130" viewBox="0 0 100 130" fill="none">
            <path d="M50 130 Q30 100 20 80 Q10 60 15 40 Q20 20 35 15 Q50 10 65 20 Q80 30 85 50 Q90 70 80 90 Q70 110 50 115" stroke="#6B8E23" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <ellipse cx="40" cy="60" rx="10" ry="16" fill="#7CB342" transform="rotate(-20 40 60)"/>
            <ellipse cx="60" cy="70" rx="9" ry="14" fill="#8BC34A" transform="rotate(35 60 70)"/>
          </svg>
        </div>

        {/* Bottom left foliage */}
        <div className="absolute bottom-24 left-20 opacity-30">
          <svg width="110" height="140" viewBox="0 0 110 140" fill="none">
            <path d="M55 140 Q35 110 25 90 Q15 70 20 50 Q25 30 40 20 Q55 10 70 18 Q85 26 90 46 Q95 66 85 86 Q75 106 55 116" stroke="#6B8E23" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <ellipse cx="45" cy="65" rx="11" ry="17" fill="#7CB342" transform="rotate(-30 45 65)"/>
            <ellipse cx="65" cy="75" rx="10" ry="15" fill="#8BC34A" transform="rotate(25 65 75)"/>
          </svg>
        </div>

        {/* Bottom right foliage */}
        <div className="absolute bottom-16 right-12 opacity-30">
          <svg width="130" height="160" viewBox="0 0 130 160" fill="none">
            <path d="M65 160 Q45 130 35 110 Q25 90 30 70 Q35 50 50 35 Q65 20 80 28 Q95 36 100 56 Q105 76 95 96 Q85 116 65 126" stroke="#6B8E23" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <ellipse cx="55" cy="75" rx="13" ry="19" fill="#7CB342" transform="rotate(-28 55 75)"/>
            <ellipse cx="75" cy="85" rx="11" ry="16" fill="#8BC34A" transform="rotate(32 75 85)"/>
          </svg>
        </div>

        {/* Middle left foliage */}
        <div className="absolute top-1/2 left-8 opacity-25 transform -translate-y-1/2">
          <svg width="90" height="120" viewBox="0 0 90 120" fill="none">
            <path d="M45 120 Q30 95 22 75 Q14 55 18 40 Q22 25 32 18 Q42 11 52 15 Q62 19 67 35 Q72 51 65 70 Q58 89 45 95" stroke="#6B8E23" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            <ellipse cx="38" cy="55" rx="9" ry="14" fill="#7CB342" transform="rotate(-22 38 55)"/>
            <ellipse cx="52" cy="65" rx="8" ry="12" fill="#8BC34A" transform="rotate(28 52 65)"/>
          </svg>
        </div>

        {/* Middle right foliage */}
        <div className="absolute top-1/2 right-8 opacity-25 transform -translate-y-1/2">
          <svg width="85" height="115" viewBox="0 0 85 115" fill="none">
            <path d="M42 115 Q28 90 20 70 Q12 50 16 35 Q20 20 30 13 Q40 6 50 10 Q60 14 65 30 Q70 46 63 65 Q56 84 42 90" stroke="#6B8E23" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            <ellipse cx="35" cy="52" rx="8" ry="13" fill="#7CB342" transform="rotate(-18 35 52)"/>
            <ellipse cx="49" cy="62" rx="7" ry="11" fill="#8BC34A" transform="rotate(32 49 62)"/>
          </svg>
        </div>

        {/* Top center small foliage */}
        <div className="absolute top-40 left-1/2 transform -translate-x-1/2 opacity-25">
          <svg width="70" height="90" viewBox="0 0 70 90" fill="none">
            <path d="M35 90 Q25 70 20 55 Q15 40 18 28 Q21 16 28 12 Q35 8 42 11 Q49 14 52 25 Q55 36 50 50 Q45 64 35 70" stroke="#6B8E23" strokeWidth="2" fill="none" strokeLinecap="round"/>
            <ellipse cx="30" cy="42" rx="7" ry="11" fill="#7CB342" transform="rotate(-20 30 42)"/>
            <ellipse cx="40" cy="50" rx="6" ry="10" fill="#8BC34A" transform="rotate(25 40 50)"/>
          </svg>
        </div>

        {/* Bottom center small foliage */}
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 opacity-25">
          <svg width="75" height="95" viewBox="0 0 75 95" fill="none">
            <path d="M37 95 Q27 75 22 60 Q17 45 20 33 Q23 21 30 17 Q37 13 44 16 Q51 19 54 30 Q57 41 52 55 Q47 69 37 75" stroke="#6B8E23" strokeWidth="2" fill="none" strokeLinecap="round"/>
            <ellipse cx="32" cy="45" rx="7" ry="12" fill="#7CB342" transform="rotate(-22 32 45)"/>
            <ellipse cx="42" cy="53" rx="6" ry="10" fill="#8BC34A" transform="rotate(27 42 53)"/>
          </svg>
        </div>

        {/* Additional small foliage elements */}
        <div className="absolute top-64 left-32 opacity-20">
          <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
            <path d="M30 80 Q20 60 15 45 Q10 30 13 20 Q16 10 22 8 Q28 6 34 9 Q40 12 42 20 Q44 28 40 38 Q36 48 30 52" stroke="#6B8E23" strokeWidth="2" fill="none" strokeLinecap="round"/>
            <ellipse cx="26" cy="35" rx="6" ry="9" fill="#7CB342" transform="rotate(-18 26 35)"/>
          </svg>
        </div>

        <div className="absolute top-80 right-40 opacity-20">
          <svg width="55" height="75" viewBox="0 0 55 75" fill="none">
            <path d="M27 75 Q18 58 14 44 Q10 30 12 20 Q14 10 19 8 Q24 6 29 9 Q34 12 36 20 Q38 28 34 38 Q30 48 27 52" stroke="#6B8E23" strokeWidth="2" fill="none" strokeLinecap="round"/>
            <ellipse cx="24" cy="33" rx="5" ry="8" fill="#8BC34A" transform="rotate(22 24 33)"/>
          </svg>
        </div>

        <div className="absolute bottom-40 left-40 opacity-20">
          <svg width="65" height="85" viewBox="0 0 65 85" fill="none">
            <path d="M32 85 Q22 65 17 50 Q12 35 15 23 Q18 11 24 9 Q30 7 36 10 Q42 13 44 22 Q46 31 42 42 Q38 53 32 57" stroke="#6B8E23" strokeWidth="2" fill="none" strokeLinecap="round"/>
            <ellipse cx="28" cy="38" rx="6" ry="10" fill="#7CB342" transform="rotate(-19 28 38)"/>
          </svg>
        </div>

        <div className="absolute bottom-56 right-32 opacity-20">
          <svg width="58" height="78" viewBox="0 0 58 78" fill="none">
            <path d="M29 78 Q20 60 16 46 Q12 32 14 22 Q16 12 21 10 Q26 8 31 11 Q36 14 38 22 Q40 30 36 40 Q32 50 29 54" stroke="#6B8E23" strokeWidth="2" fill="none" strokeLinecap="round"/>
            <ellipse cx="25" cy="36" rx="5" ry="9" fill="#8BC34A" transform="rotate(24 25 36)"/>
          </svg>
        </div>
      </div>

      <Nav />

      {/* Hero Section with Headline */}
      <div className="relative z-10 flex items-center justify-center min-h-[70vh] px-6">
        <div className="text-center max-w-5xl">
          <h1 className="text-6xl md:text-7xl font-bold text-[#8B6F47] mb-8 leading-tight">
            Your Day, Your Thoughts,<br />
            Your Space to <span className="text-[#6B8E23]">Flourish</span>
          </h1>
          <p className="text-2xl text-[#8B6F47] mb-10 max-w-3xl mx-auto leading-relaxed">
            A wellness platform designed for students who want to understand their emotions, 
            track their progress, and grow their mental wellness one day at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/mood-tracker"
              className="bg-gradient-to-r from-[#D4A574] to-[#C9A876] text-white px-12 py-5 rounded-full text-lg font-semibold hover:from-[#C9A876] hover:to-[#D4A574] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Start Tracking
            </Link>
            <Link
              href="/journal"
              className="bg-[#E8D5B7] text-[#8B6F47] px-12 py-5 rounded-full text-lg font-semibold hover:bg-gradient-to-r hover:from-[#D4A574] hover:to-[#C9A876] hover:text-white transition-all duration-300 border-2 border-[#D4A574] shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Begin Journaling
            </Link>
          </div>
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="max-w-6xl mx-auto px-6 pb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Quick Access Card */}
          <div className="bg-gradient-to-br from-[#F5E6D3] to-[#E8D5B7] rounded-3xl p-8 border-2 border-[#D4A574] text-center shadow-lg">
            <div className="w-20 h-20 bg-gradient-to-br from-[#E8D5B7] to-[#D4A574] rounded-full mx-auto mb-5 flex items-center justify-center shadow-md">
              <svg className="w-10 h-10 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#8B6F47] mb-4">Quick & Easy</h3>
            <p className="text-[#8B6F47] text-base leading-relaxed">
              Log your mood in seconds. No complicated setup, just simple tracking that fits into your day.
            </p>
          </div>

          {/* Visual Growth Card */}
          <div className="bg-gradient-to-br from-[#F5E6D3] to-[#E8D5B7] rounded-3xl p-8 border-2 border-[#D4A574] text-center shadow-lg">
            <div className="w-20 h-20 bg-gradient-to-br from-[#D4A574] to-[#C9A876] rounded-full mx-auto mb-5 flex items-center justify-center shadow-md">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#8B6F47] mb-4">Watch Yourself Grow</h3>
            <p className="text-[#8B6F47] text-base leading-relaxed">
              See your wellness plant flourish as you track your mood. A beautiful visual of your progress.
            </p>
          </div>

          {/* AI Insights Card */}
          <div className="bg-gradient-to-br from-[#F5E6D3] to-[#E8D5B7] rounded-3xl p-8 border-2 border-[#D4A574] text-center shadow-lg">
            <div className="w-20 h-20 bg-gradient-to-br from-[#E8D5B7] to-[#D4A574] rounded-full mx-auto mb-5 flex items-center justify-center shadow-md">
              <svg className="w-10 h-10 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#8B6F47] mb-4">Smart Insights</h3>
            <p className="text-[#8B6F47] text-base leading-relaxed">
              Get AI-powered analysis of your journal entries to understand patterns and improve your wellness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

