'use client';

import Link from "next/link";
import { useState } from "react";

export default function MoodTracker() {
  const [mood, setMood] = useState(5);
  const [notes, setNotes] = useState("");
  const [entries, setEntries] = useState<Array<{mood: number, notes: string, date: string}>>([]);

  // Calculate plant growth based on average mood (0-10 scale, plant grows 0-100%)
  // Limit max height to 200px to save space
  const averageMood = entries.length > 0 
    ? entries.reduce((sum, e) => sum + e.mood, 0) / entries.length 
    : 5;
  const plantGrowth = Math.min(100, (averageMood / 10) * 100);
  const maxPlantHeight = 200; // Limit plant height
  const plantHeight = (plantGrowth / 100) * maxPlantHeight;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEntry = {
      mood,
      notes,
      date: new Date().toLocaleDateString()
    };
    setEntries([...entries, newEntry]);
    setMood(5);
    setNotes("");
  };

  const handleRefresh = () => {
    setEntries([]);
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
        <div className="absolute top-40 right-16 opacity-20">
          <svg width="80" height="110" viewBox="0 0 80 110" fill="none">
            <path d="M40 110 Q28 88 22 72 Q16 56 19 44 Q22 32 29 26 Q36 20 43 23 Q50 26 54 36 Q58 46 53 58 Q48 70 40 76" stroke="#6B8E23" strokeWidth="2" fill="none" strokeLinecap="round"/>
            <ellipse cx="33" cy="50" rx="7" ry="11" fill="#7CB342" transform="rotate(-20 33 50)" opacity="0.5"/>
          </svg>
        </div>
        <div className="absolute bottom-32 left-12 opacity-20">
          <svg width="75" height="105" viewBox="0 0 75 105" fill="none">
            <path d="M37 105 Q26 85 20 70 Q14 55 17 43 Q20 31 26 25 Q32 19 38 22 Q44 25 48 34 Q52 43 48 54 Q44 65 37 71" stroke="#6B8E23" strokeWidth="2" fill="none" strokeLinecap="round"/>
            <ellipse cx="31" cy="48" rx="6" ry="10" fill="#8BC34A" transform="rotate(-18 31 48)" opacity="0.5"/>
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
              className="bg-[#E8D5B7] text-[#8B6F47] px-6 py-2 rounded-full hover:bg-[#D4A574] transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Plant Visualization */}
          <div className="bg-gradient-to-br from-[#F5E6D3] to-[#E8D5B7] rounded-3xl p-6 border-2 border-[#D4A574] flex flex-col relative shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-[#8B6F47] text-center flex-1">Your Wellness Plant</h2>
              {entries.length > 0 && (
                <button
                  onClick={handleRefresh}
                  className="ml-2 p-1.5 rounded-full bg-[#E8D5B7] hover:bg-[#D4A574] transition-colors"
                  title="Reset plant"
                >
                  <svg className="w-4 h-4 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
              )}
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center relative">
              {/* Plant Container - fills the box */}
              <div className="relative w-full flex flex-col items-center justify-end" style={{ height: '280px' }}>
                {/* Pot */}
                <div className="relative z-10" style={{ width: '100px', height: '80px' }}>
                  <svg viewBox="0 0 100 80" className="w-full h-full">
                    <path
                      d="M 25 15 Q 25 8 33 8 L 67 8 Q 75 8 75 15 L 75 65 L 25 65 Z"
                      fill="#D4A574"
                      stroke="#8B6F47"
                      strokeWidth="2"
                    />
                    <ellipse cx="50" cy="15" rx="21" ry="4" fill="#E8D5B7" />
                    <line
                      x1="33"
                      y1="40"
                      x2="67"
                      y2="40"
                      stroke="#8B6F47"
                      strokeWidth="1.5"
                      opacity="0.5"
                    />
                  </svg>
                </div>
                
                {/* Plant - grows based on mood, limited height */}
                <div 
                  className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
                  style={{ 
                    height: `${plantHeight}px`,
                    width: '150px',
                  }}
                >
                  <svg 
                    viewBox="0 0 150 200" 
                    className="w-full h-full"
                    preserveAspectRatio="xMidYBottom"
                  >
                    {/* Stem */}
                    <line
                      x1="75"
                      y1="200"
                      x2="75"
                      y2={200 - plantHeight}
                      stroke="#6B8E23"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    
                    {/* Leaves - appear as plant grows */}
                    {plantGrowth > 15 && (
                      <ellipse
                        cx="55"
                        cy={200 - (plantHeight * 0.5)}
                        rx="15"
                        ry="10"
                        fill="#7CB342"
                        transform={`rotate(-25 55 ${200 - (plantHeight * 0.5)})`}
                      />
                    )}
                    {plantGrowth > 30 && (
                      <ellipse
                        cx="95"
                        cy={200 - (plantHeight * 0.6)}
                        rx="15"
                        ry="10"
                        fill="#7CB342"
                        transform={`rotate(25 95 ${200 - (plantHeight * 0.6)})`}
                      />
                    )}
                    {plantGrowth > 45 && (
                      <ellipse
                        cx="65"
                        cy={200 - (plantHeight * 0.75)}
                        rx="13"
                        ry="9"
                        fill="#8BC34A"
                        transform={`rotate(-40 65 ${200 - (plantHeight * 0.75)})`}
                      />
                    )}
                    {plantGrowth > 60 && (
                      <ellipse
                        cx="85"
                        cy={200 - (plantHeight * 0.8)}
                        rx="13"
                        ry="9"
                        fill="#8BC34A"
                        transform={`rotate(40 85 ${200 - (plantHeight * 0.8)})`}
                      />
                    )}
                    {plantGrowth > 75 && (
                      <>
                        <ellipse
                          cx="60"
                          cy={200 - (plantHeight * 0.9)}
                          rx="12"
                          ry="8"
                          fill="#9CCC65"
                          transform={`rotate(-50 60 ${200 - (plantHeight * 0.9)})`}
                        />
                        <ellipse
                          cx="90"
                          cy={200 - (plantHeight * 0.9)}
                          rx="12"
                          ry="8"
                          fill="#9CCC65"
                          transform={`rotate(50 90 ${200 - (plantHeight * 0.9)})`}
                        />
                      </>
                    )}
                    {plantGrowth > 85 && (
                      <>
                        {/* Flower when plant is thriving */}
                        <circle
                          cx="75"
                          cy={200 - plantHeight}
                          r="10"
                          fill="#FFB74D"
                        />
                        <circle
                          cx="75"
                          cy={200 - plantHeight}
                          r="7"
                          fill="#FFF176"
                        />
                        {/* Petals */}
                        <circle
                          cx="75"
                          cy={200 - plantHeight - 12}
                          r="5"
                          fill="#FFB74D"
                          opacity="0.8"
                        />
                        <circle
                          cx="75"
                          cy={200 - plantHeight + 12}
                          r="5"
                          fill="#FFB74D"
                          opacity="0.8"
                        />
                        <circle
                          cx="65"
                          cy={200 - plantHeight}
                          r="5"
                          fill="#FFB74D"
                          opacity="0.8"
                        />
                        <circle
                          cx="85"
                          cy={200 - plantHeight}
                          r="5"
                          fill="#FFB74D"
                          opacity="0.8"
                        />
                      </>
                    )}
                  </svg>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <p className="text-base text-[#8B6F47] font-semibold">
                  {entries.length === 0 
                    ? "Start tracking your mood to help your plant grow!"
                    : `${Math.round(plantGrowth)}% grown`}
                </p>
                {entries.length > 0 && (
                  <p className="text-xs text-[#8B6F47] mt-1">
                    Avg mood: {averageMood.toFixed(1)}/10
                  </p>
                )}
                <Link
                  href="/journal"
                  className="inline-block mt-4 bg-gradient-to-r from-[#D4A574] to-[#C9A876] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:from-[#C9A876] hover:to-[#D4A574] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  Go to Journal
                </Link>
              </div>
            </div>
          </div>

          {/* Mood Entry Form */}
          <div className="bg-gradient-to-br from-[#F5E6D3] to-[#E8D5B7] rounded-3xl p-6 border-2 border-[#D4A574] flex flex-col shadow-lg">
            <h2 className="text-xl font-bold text-[#8B6F47] mb-4">Log Your Mood</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
              {/* Mood Slider */}
              <div>
                <label className="block text-[#8B6F47] font-semibold mb-2 text-sm">
                  How are you feeling? ({mood}/10)
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={mood}
                  onChange={(e) => setMood(Number(e.target.value))}
                  className="w-full h-2 bg-[#E8D5B7] rounded-lg appearance-none cursor-pointer accent-[#D4A574]"
                />
                <div className="flex justify-between text-xs text-[#8B6F47] mt-1">
                  <span>Low</span>
                  <span>Great</span>
                </div>
              </div>

              {/* Notes */}
              <div className="flex-1 flex flex-col">
                <label className="block text-[#8B6F47] font-semibold mb-2 text-sm">
                  Notes (optional)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="How was your day? What's on your mind?"
                  className="flex-1 min-h-[80px] px-3 py-2 bg-[#F9F5F0] border border-[#D4A574] rounded-lg text-sm text-[#8B6F47] placeholder-[#8B6F47]/50 focus:outline-none focus:ring-2 focus:ring-[#D4A574] resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#D4A574] to-[#C9A876] text-white px-6 py-3 rounded-full font-semibold hover:from-[#C9A876] hover:to-[#D4A574] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02] text-sm"
              >
                Save Entry
              </button>
            </form>

            {/* Recent Entries */}
            {entries.length > 0 && (
              <div className="mt-4">
                <h3 className="text-lg font-bold text-[#8B6F47] mb-3">Recent Entries</h3>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {entries.slice().reverse().slice(0, 3).map((entry, index) => (
                    <div key={index} className="bg-[#F9F5F0] rounded-xl p-3 border-2 border-[#D4A574] shadow-sm">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-[#8B6F47] font-semibold">{entry.date}</span>
                        <span className="text-xs text-[#8B6F47]">Mood: {entry.mood}/10</span>
                      </div>
                      {entry.notes && (
                        <p className="text-xs text-[#8B6F47] mt-1 line-clamp-2">{entry.notes}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
