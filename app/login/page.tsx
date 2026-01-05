'use client';

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error);
      } else {
        router.push("/");
        router.refresh();
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
        <div className="absolute top-32 left-10 opacity-20">
          <svg width="90" height="120" viewBox="0 0 90 120" fill="none">
            <path d="M45 120 Q30 95 22 75 Q14 55 18 40 Q22 25 32 18 Q42 11 52 15 Q62 19 67 35 Q72 51 65 70 Q58 89 45 95" stroke="#6B8E23" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            <ellipse cx="38" cy="55" rx="8" ry="12" fill="#7CB342" transform="rotate(-22 38 55)" opacity="0.5"/>
          </svg>
        </div>
        <div className="absolute bottom-32 right-12 opacity-20">
          <svg width="85" height="115" viewBox="0 0 85 115" fill="none">
            <path d="M42 115 Q28 90 20 70 Q12 50 16 35 Q20 20 30 13 Q40 6 50 10 Q60 14 65 30 Q70 46 63 65 Q56 84 42 90" stroke="#6B8E23" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            <ellipse cx="35" cy="52" rx="7" ry="11" fill="#8BC34A" transform="rotate(-18 35 52)" opacity="0.5"/>
          </svg>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-[#F5E6D3] border-b border-[#D4A574] relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="text-3xl font-bold text-[#8B6F47]">FLOURISH</Link>
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
              className="bg-[#E8D5B7] text-[#8B6F47] px-6 py-2 rounded-full hover:bg-[#D4A574] transition-colors font-semibold"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-md mx-auto px-6 py-12 relative z-10">
        <div className="bg-gradient-to-br from-[#F5E6D3] to-[#E8D5B7] rounded-3xl p-8 border-2 border-[#D4A574] shadow-lg">
          <h1 className="text-3xl font-bold text-[#8B6F47] mb-6 text-center">Login</h1>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-[#8B6F47] font-semibold mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-[#F9F5F0] border-2 border-[#D4A574] rounded-lg text-[#8B6F47] focus:outline-none focus:ring-2 focus:ring-[#D4A574]"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-[#8B6F47] font-semibold mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-[#F9F5F0] border-2 border-[#D4A574] rounded-lg text-[#8B6F47] focus:outline-none focus:ring-2 focus:ring-[#D4A574]"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#D4A574] to-[#C9A876] text-white px-6 py-3 rounded-full font-semibold hover:from-[#C9A876] hover:to-[#D4A574] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-[#8B6F47]">
              Don't have an account?{" "}
              <Link href="/register" className="text-[#D4A574] hover:text-[#8B6F47] font-semibold underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

