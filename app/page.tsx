import Link from "next/link";
import { Nav } from "@/components/nav";

export default function Home() {
  return (
    <div className="h-screen bg-[#F9F5F0] relative overflow-hidden flex flex-col">
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
        <div className="bubble bubble-9"></div>
        <div className="bubble bubble-10"></div>
        <div className="bubble bubble-11"></div>
        <div className="bubble bubble-12"></div>
        <div className="bubble bubble-13"></div>
        <div className="bubble bubble-14"></div>
        <div className="bubble bubble-15"></div>
        <div className="bubble bubble-16"></div>
      </div>

      <Nav />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-8 text-center relative z-10 flex-shrink-0">
        <h2 className="text-4xl md:text-5xl font-bold text-[#8B6F47] mb-4 leading-tight">
          Wellness Made Simple
        </h2>
        <p className="text-lg text-[#8B6F47] max-w-3xl mx-auto mb-6 leading-relaxed">
          Track your mood, reflect on your day, and understand your stress patterns with AI-powered insights.
        </p>
        <Link 
          href="/product"
          className="inline-block bg-gradient-to-r from-[#D4A574] to-[#C9A876] text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-[#C9A876] hover:to-[#D4A574] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Get Started
        </Link>
      </section>

      {/* Foliage Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Top left foliage */}
        <div className="absolute top-32 left-8 opacity-25">
          <svg width="100" height="130" viewBox="0 0 100 130" fill="none">
            <path d="M50 130 Q30 100 20 80 Q10 60 15 40 Q20 20 35 15 Q50 10 65 20 Q80 30 85 50 Q90 70 80 90 Q70 110 50 115" stroke="#6B8E23" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            <ellipse cx="40" cy="60" rx="9" ry="14" fill="#7CB342" transform="rotate(-20 40 60)" opacity="0.6"/>
            <ellipse cx="60" cy="70" rx="8" ry="12" fill="#8BC34A" transform="rotate(35 60 70)" opacity="0.6"/>
          </svg>
        </div>
        
        {/* Top right foliage */}
        <div className="absolute top-40 right-12 opacity-25">
          <svg width="90" height="120" viewBox="0 0 90 120" fill="none">
            <path d="M45 120 Q30 95 22 75 Q14 55 18 40 Q22 25 32 18 Q42 11 52 15 Q62 19 67 35 Q72 51 65 70 Q58 89 45 95" stroke="#6B8E23" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            <ellipse cx="38" cy="55" rx="8" ry="12" fill="#7CB342" transform="rotate(-22 38 55)" opacity="0.6"/>
            <ellipse cx="52" cy="65" rx="7" ry="11" fill="#8BC34A" transform="rotate(28 52 65)" opacity="0.6"/>
          </svg>
        </div>

        {/* Bottom left foliage */}
        <div className="absolute bottom-20 left-16 opacity-25">
          <svg width="85" height="115" viewBox="0 0 85 115" fill="none">
            <path d="M42 115 Q28 90 20 70 Q12 50 16 35 Q20 20 30 13 Q40 6 50 10 Q60 14 65 30 Q70 46 63 65 Q56 84 42 90" stroke="#6B8E23" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            <ellipse cx="35" cy="52" rx="7" ry="11" fill="#7CB342" transform="rotate(-18 35 52)" opacity="0.6"/>
            <ellipse cx="49" cy="62" rx="6" ry="10" fill="#8BC34A" transform="rotate(32 49 62)" opacity="0.6"/>
          </svg>
        </div>

        {/* Bottom right foliage */}
        <div className="absolute bottom-16 right-10 opacity-25">
          <svg width="95" height="125" viewBox="0 0 95 125" fill="none">
            <path d="M47 125 Q33 100 25 80 Q17 60 21 45 Q25 30 35 23 Q45 16 55 20 Q65 24 70 40 Q75 56 68 75 Q61 94 47 100" stroke="#6B8E23" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            <ellipse cx="40" cy="58" rx="8" ry="13" fill="#7CB342" transform="rotate(-21 40 58)" opacity="0.6"/>
            <ellipse cx="54" cy="68" rx="7" ry="11" fill="#8BC34A" transform="rotate(30 54 68)" opacity="0.6"/>
          </svg>
        </div>
      </div>

      {/* Feature Cards */}
      <section className="max-w-7xl mx-auto px-6 pb-8 relative z-10 flex-1 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {/* Mood Tracking Card */}
          <Link href="/mood-tracker" className="bg-gradient-to-br from-[#F5E6D3] to-[#E8D5B7] rounded-3xl p-8 text-center border-2 border-[#D4A574] card-hover transition-all duration-300 cursor-pointer block shadow-lg hover:shadow-2xl">
            <div className="w-24 h-24 bg-gradient-to-br from-[#E8D5B7] to-[#D4A574] rounded-full mx-auto mb-5 flex items-center justify-center shadow-md">
              <svg className="w-12 h-12 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#8B6F47] mb-3">
              Mood Tracking
            </h3>
            <p className="text-[#8B6F47] text-base leading-relaxed">
              Log daily mood and stress levels
            </p>
          </Link>

          {/* Journaling Card */}
          <Link href="/journal" className="bg-gradient-to-br from-[#F5E6D3] to-[#E8D5B7] rounded-3xl p-8 text-center border-2 border-[#D4A574] card-hover transition-all duration-300 cursor-pointer block shadow-lg hover:shadow-2xl">
            <div className="w-24 h-24 bg-gradient-to-br from-[#D4A574] to-[#C9A876] rounded-full mx-auto mb-5 flex items-center justify-center shadow-md">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#8B6F47] mb-3">
              Journaling
            </h3>
            <p className="text-[#8B6F47] text-base leading-relaxed">
              Reflect and process your thoughts
            </p>
          </Link>

          {/* AI Insights Card */}
          <div className="bg-gradient-to-br from-[#F5E6D3] to-[#E8D5B7] rounded-3xl p-8 text-center border-2 border-[#D4A574] shadow-lg">
            <div className="w-24 h-24 bg-gradient-to-br from-[#E8D5B7] to-[#D4A574] rounded-full mx-auto mb-5 flex items-center justify-center shadow-md">
              <svg className="w-12 h-12 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#8B6F47] mb-3">
              AI Insights
            </h3>
            <p className="text-[#8B6F47] text-base leading-relaxed">
              Understand patterns with AI analysis
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
