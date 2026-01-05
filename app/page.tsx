import Link from "next/link";

export default function Home() {
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
        <div className="bubble bubble-9"></div>
        <div className="bubble bubble-10"></div>
        <div className="bubble bubble-11"></div>
        <div className="bubble bubble-12"></div>
        <div className="bubble bubble-13"></div>
        <div className="bubble bubble-14"></div>
        <div className="bubble bubble-15"></div>
        <div className="bubble bubble-16"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-[#F5E6D3] border-b border-[#D4A574] relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-[#8B6F47]">FLOURISH</h1>
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
            <Link 
              href="/login" 
              className="bg-[#E8D5B7] text-[#8B6F47] px-6 py-2 rounded-full hover:bg-[#D4A574] transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-10 text-center relative z-10">
        <h2 className="text-4xl font-bold text-[#8B6F47] mb-4">
          Wellness Made Simple
        </h2>
        <p className="text-lg text-[#8B6F47] max-w-3xl mx-auto mb-6">
          Track your mood, reflect on your day, and understand your stress patterns with AI-powered insights.
        </p>
        <Link 
          href="/product"
          className="inline-block bg-[#D4A574] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#C9A876] transition-colors"
        >
          Get Started
        </Link>
      </section>

      {/* Feature Cards */}
      <section className="max-w-7xl mx-auto px-6 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Mood Tracking Card */}
          <Link href="/mood-tracker" className="bg-[#F5E6D3] rounded-3xl p-6 text-center border border-[#D4A574] card-hover transition-all duration-300 cursor-pointer block">
            <div className="w-20 h-20 bg-[#E8D5B7] rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-10 h-10 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#8B6F47] mb-2">
              Mood Tracking
            </h3>
            <p className="text-[#8B6F47]">
              Log daily mood and stress levels
            </p>
          </Link>

          {/* Journaling Card */}
          <Link href="/journal" className="bg-[#F5E6D3] rounded-3xl p-6 text-center border border-[#D4A574] card-hover transition-all duration-300 cursor-pointer block">
            <div className="w-20 h-20 bg-[#E8D5B7] rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-10 h-10 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#8B6F47] mb-2">
              Journaling
            </h3>
            <p className="text-[#8B6F47]">
              Reflect and process your thoughts
            </p>
          </Link>

          {/* AI Insights Card */}
          <div className="bg-[#F5E6D3] rounded-3xl p-6 text-center border border-[#D4A574] card-hover transition-all duration-300 cursor-pointer">
            <div className="w-20 h-20 bg-[#E8D5B7] rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-10 h-10 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#8B6F47] mb-2">
              AI Insights
            </h3>
            <p className="text-[#8B6F47]">
              Understand patterns with AI analysis
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
