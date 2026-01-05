import Link from "next/link";

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

      {/* Navigation Bar */}
      <nav className="bg-[#F5E6D3] border-b border-[#D4A574] relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="text-3xl font-bold text-[#8B6F47]">FLOURISH</Link>
          <div className="flex items-center gap-8">
            <Link href="/about" className="text-[#8B6F47] hover:text-[#6B5435] transition-colors font-semibold">
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

      <div className="max-w-4xl mx-auto px-6 py-8 relative z-10">
        <h1 className="text-4xl font-bold text-[#8B6F47] mb-6">About the Problem</h1>

        {/* The Problem Section */}
        <section className="bg-[#F5E6D3] rounded-3xl p-6 border border-[#D4A574] mb-6">
          <h2 className="text-2xl font-bold text-[#8B6F47] mb-4">Student Stress: A Growing Crisis</h2>
          <p className="text-[#8B6F47] leading-relaxed mb-4">
            Today's students face unprecedented levels of stress and anxiety. Between academic pressures, 
            social challenges, and the constant demands of modern life, many students struggle to maintain 
            their mental wellness. The problem isn't just about feeling overwhelmed. It's about the long-term 
            impact on academic performance, relationships, and overall quality of life.
          </p>
          <p className="text-[#8B6F47] leading-relaxed">
            Without proper tools to track, understand, and manage their emotional well-being, students often 
            find themselves in a cycle of stress that affects every aspect of their lives. The need for a 
            simple, accessible solution has never been more urgent.
          </p>
        </section>

        {/* Personal Examples Section */}
        <section className="bg-[#F5E6D3] rounded-3xl p-6 border border-[#D4A574] mb-6">
          <h2 className="text-2xl font-bold text-[#8B6F47] mb-4">Personal Experience</h2>
          <p className="text-[#8B6F47] leading-relaxed mb-4">
            During my time at LaunchPad Philly, I often felt pulled in a million directions: projects, workshops, 
            deadlines, and trying to learn new tech skills all at once. Some days I'd sit down to work on an 
            assignment and get stuck, not because I didn't know how to do it, but because I was stressed and 
            overwhelmed. I'd feel drained by the end of the day, even if I technically got some work done.
          </p>
          <p className="text-[#8B6F47] leading-relaxed">
            I wanted a way to reflect on how I was feeling, track my stress over time, and see patterns, but there 
            wasn't a simple tool for that. Flourish is built for moments like that: a place where students and 
            young people can track mood, reflect through journaling, and get insights from AI to understand and 
            manage stress before it builds up.
          </p>
        </section>

        {/* Existing Solutions Section */}
        <section className="bg-[#F5E6D3] rounded-3xl p-6 border border-[#D4A574] mb-6">
          <h2 className="text-2xl font-bold text-[#8B6F47] mb-4">Existing Solutions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-[#8B6F47] mb-2">Meditation Apps</h3>
              <p className="text-[#8B6F47] leading-relaxed">
                While meditation apps like Headspace and Calm are helpful, they focus primarily on guided 
                meditation and don't provide personalized insights based on your actual mood patterns. They 
                also require a subscription and can feel disconnected from daily life.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#8B6F47] mb-2">Traditional Journaling</h3>
              <p className="text-[#8B6F47] leading-relaxed">
                Physical journals and basic note-taking apps are great for reflection, but they lack the 
                ability to analyze patterns or provide actionable insights. Without structure or analysis, 
                it's easy to write but hard to understand what your entries reveal about your wellness.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#8B6F47] mb-2">Mood Tracking Apps</h3>
              <p className="text-[#8B6F47] leading-relaxed">
                Many mood tracking apps exist, but they often feel clinical or overwhelming with too many 
                features. They rarely integrate journaling with mood analysis, and most don't use AI to 
                provide meaningful insights that help users understand their emotional patterns.
              </p>
            </div>
          </div>
        </section>

        {/* Consequences Section */}
        <section className="bg-[#F5E6D3] rounded-3xl p-6 border border-[#D4A574]">
          <h2 className="text-2xl font-bold text-[#8B6F47] mb-4">Consequences of Not Solving This</h2>
          <div className="space-y-3">
            <p className="text-[#8B6F47] leading-relaxed">
              <strong className="font-semibold">Academic Impact:</strong> Chronic stress leads to decreased 
              focus, memory problems, and lower academic performance. Students who don't manage their wellness 
              often see their grades suffer, creating a negative feedback loop.
            </p>
            <p className="text-[#8B6F47] leading-relaxed">
              <strong className="font-semibold">Mental Health Decline:</strong> Unmanaged stress can lead to 
              anxiety disorders, depression, and burnout. Without tools to recognize patterns early, students 
              may not seek help until problems become severe.
            </p>
            <p className="text-[#8B6F47] leading-relaxed">
              <strong className="font-semibold">Social Isolation:</strong> High stress levels can strain 
              relationships with friends and family. Students may withdraw socially, further exacerbating their 
              mental health challenges.
            </p>
            <p className="text-[#8B6F47] leading-relaxed">
              <strong className="font-semibold">Long-term Effects:</strong> The habits and coping mechanisms 
              students develop during their academic years often carry into adulthood. Learning healthy wellness 
              practices early is crucial for long-term mental health and success.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

