import Link from "next/link";

export default function Features() {
  const features = [
    {
      title: "Mood Tracking",
      description: "Log your daily mood on a simple 1-10 scale. Watch your wellness plant grow as you track your emotional patterns over time.",
      icon: (
        <svg className="w-12 h-12 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "bg-[#E8D5B7]"
    },
    {
      title: "Journaling",
      description: "Reflect on your day with a clean, distraction-free journal. Write freely and process your thoughts in a safe space.",
      icon: (
        <svg className="w-12 h-12 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      color: "bg-[#D4A574]"
    },
    {
      title: "AI-Powered Insights",
      description: "Get personalized analysis of your journal entries. Understand patterns, identify triggers, and receive actionable insights to improve your wellness.",
      icon: (
        <svg className="w-12 h-12 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "bg-[#E8D5B7]"
    },
    {
      title: "Wellness Plant",
      description: "Watch your plant grow based on your mood entries. A visual representation of your wellness journey that motivates you to keep tracking.",
      icon: (
        <svg className="w-12 h-12 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      color: "bg-[#D4A574]"
    },
    {
      title: "Simple & Accessible",
      description: "No complicated setup or overwhelming features. Flourish is designed to be intuitive and easy to use, so you can focus on your wellness.",
      icon: (
        <svg className="w-12 h-12 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      color: "bg-[#E8D5B7]"
    },
    {
      title: "Privacy First",
      description: "Your data stays yours. All entries are stored securely and only you have access to your personal reflections and insights.",
      icon: (
        <svg className="w-12 h-12 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      color: "bg-[#D4A574]"
    }
  ];

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

      {/* Navigation Bar */}
      <nav className="bg-[#F5E6D3] border-b border-[#D4A574] relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="text-3xl font-bold text-[#8B6F47]">FLOURISH</Link>
          <div className="flex items-center gap-8">
            <Link href="/about" className="text-[#8B6F47] hover:text-[#6B5435] transition-colors">
              About
            </Link>
            <Link href="/features" className="text-[#8B6F47] hover:text-[#6B5435] transition-colors font-semibold">
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

      <div className="max-w-7xl mx-auto px-6 py-10 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#8B6F47] mb-4">Features</h1>
          <p className="text-xl text-[#8B6F47] max-w-2xl mx-auto">
            Everything you need to track your mood, reflect on your journey, and understand your wellness patterns
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#F5E6D3] rounded-3xl p-6 border border-[#D4A574] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`${feature.color} w-20 h-20 rounded-full flex items-center justify-center mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#8B6F47] mb-3">{feature.title}</h3>
              <p className="text-[#8B6F47] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Link
            href="/product"
            className="inline-block bg-[#D4A574] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#C9A876] transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

