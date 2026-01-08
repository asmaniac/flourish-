'use client';

import { useRequireCoach } from "@/lib/auth/use-role";
import { Nav } from "@/components/nav";
import Link from "next/link";

export default function RubricEvidence() {
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
          <h1 className="text-4xl font-bold text-[#8B6F47] mb-4">Rubric Evidence</h1>
          <p className="text-xl text-[#8B6F47] mb-2">
            Help instructors rate you easily and fairly
          </p>
          <p className="text-sm text-[#8B6F47] opacity-75">
            [RBA for LP Staff Only]
          </p>
        </div>

        {/* CCC.1.1 */}
        <div className="bg-gradient-to-br from-[#F5E6D3] to-[#E8D5B7] rounded-3xl p-8 border-2 border-[#D4A574] shadow-lg mb-6">
          <h2 className="text-3xl font-bold text-[#8B6F47] mb-6">CCC.1.1</h2>
          
          <div className="bg-[#F9F5F0] rounded-2xl p-6 border-2 border-[#D4A574] mb-4">
            <h3 className="text-xl font-bold text-[#8B6F47] mb-3">Where to see it in my project:</h3>
            <p className="text-[#8B6F47] text-lg mb-4">
              CCC.1.1 is shown on the Problem Page + in README section 2
            </p>
            
            <div className="flex flex-wrap gap-3">
              <Link
                href="/about"
                className="bg-gradient-to-r from-[#D4A574] to-[#C9A876] text-white px-6 py-3 rounded-full font-semibold hover:from-[#C9A876] hover:to-[#D4A574] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                View Problem Page
              </Link>
              <a
                href="https://github.com/asmaniac/flourish-#readme"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E8D5B7] text-[#8B6F47] px-6 py-3 rounded-full font-semibold hover:bg-[#D4A574] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                View README Section 2
              </a>
            </div>
          </div>
        </div>

        {/* CCC.1.2 */}
        <div className="bg-gradient-to-br from-[#F5E6D3] to-[#E8D5B7] rounded-3xl p-8 border-2 border-[#D4A574] shadow-lg mb-6">
          <h2 className="text-3xl font-bold text-[#8B6F47] mb-6">CCC.1.2</h2>
          
          <div className="bg-[#F9F5F0] rounded-2xl p-6 border-2 border-[#D4A574] mb-4">
            <h3 className="text-xl font-bold text-[#8B6F47] mb-3">Where to see it in my project:</h3>
            <p className="text-[#8B6F47] text-lg mb-4">
              CCC.1.2 is shown in the uploaded/linked wireframes
            </p>
            
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/asmaniac/flourish-"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#D4A574] to-[#C9A876] text-white px-6 py-3 rounded-full font-semibold hover:from-[#C9A876] hover:to-[#D4A574] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                View Wireframes (GitHub)
              </a>
            </div>
          </div>
        </div>

        {/* CCC.1.3 */}
        <div className="bg-gradient-to-br from-[#F5E6D3] to-[#E8D5B7] rounded-3xl p-8 border-2 border-[#D4A574] shadow-lg mb-6">
          <h2 className="text-3xl font-bold text-[#8B6F47] mb-6">CCC.1.3</h2>
          
          <div className="bg-[#F9F5F0] rounded-2xl p-6 border-2 border-[#D4A574] mb-4">
            <h3 className="text-xl font-bold text-[#8B6F47] mb-3">Where to see it in my project:</h3>
            <p className="text-[#8B6F47] text-lg mb-4">
              CCC.1.3 evidence location (to be filled in)
            </p>
            
            <div className="flex flex-wrap gap-3">
              <Link
                href="/features"
                className="bg-gradient-to-r from-[#D4A574] to-[#C9A876] text-white px-6 py-3 rounded-full font-semibold hover:from-[#C9A876] hover:to-[#D4A574] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                View Features Page
              </Link>
              <Link
                href="/product"
                className="bg-[#E8D5B7] text-[#8B6F47] px-6 py-3 rounded-full font-semibold hover:bg-[#D4A574] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                View Product Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
