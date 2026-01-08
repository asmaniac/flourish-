'use client';

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Nav } from "@/components/nav";
import Link from "next/link";

interface AnalysisResult {
  summary: string;
  patterns: string[];
  triggers: string[];
  insights: string[];
  recommendations: string[];
}

interface JournalEntry {
  id: string;
  content: string;
  aiAnalysis?: string | null;
  createdAt: string;
  updatedAt: string;
}

export default function AIInsights() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedEntry, setSelectedEntry] = useState<string | null>(null);

  // Redirect if not logged in
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  // Fetch entries on load
  useEffect(() => {
    if (status === "authenticated") {
      fetchEntries();
    }
  }, [status]);

  const fetchEntries = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/journal");
      if (!response.ok) {
        throw new Error("Failed to fetch entries");
      }
      const data = await response.json();
      setEntries(data);
    } catch (err: any) {
      setError(err.message || "Failed to load journal entries");
    } finally {
      setLoading(false);
    }
  };

  const handleAnalyze = async (entryId: string) => {
    setError("");

    try {
      const response = await fetch(`/api/journal/${entryId}/analyze`, {
        method: "POST",
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to analyze entry");
      }

      const data = await response.json();
      
      // Update the entry in the list
      setEntries(entries.map(entry => 
        entry.id === entryId 
          ? { ...entry, aiAnalysis: JSON.stringify(data.analysis) }
          : entry
      ));
    } catch (err: any) {
      setError(err.message || "Failed to analyze entry");
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const parseAnalysis = (analysisString: string | null | undefined): AnalysisResult | null => {
    if (!analysisString) return null;
    try {
      return JSON.parse(analysisString);
    } catch {
      return null;
    }
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen bg-[#F9F5F0] flex items-center justify-center">
        <div className="text-[#8B6F47] text-xl">Loading...</div>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return null; // Will redirect
  }

  const analyzedEntries = entries.filter(e => e.aiAnalysis);
  const unanalyzedEntries = entries.filter(e => !e.aiAnalysis);

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
        {/* Header */}
        <div className="card-polished rounded-3xl p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <svg className="w-10 h-10 text-[#6B8E23]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <h1 className="text-4xl font-bold text-[#8B6F47]">AI Insights</h1>
          </div>
          <p className="text-xl text-[#8B6F47]">
            Discover patterns, understand triggers, and get personalized recommendations from your journal entries
          </p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="card-polished rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-gradient mb-2">{analyzedEntries.length}</div>
            <div className="text-[#8B6F47] font-medium">Analyzed Entries</div>
          </div>
          <div className="card-polished rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-gradient mb-2">{unanalyzedEntries.length}</div>
            <div className="text-[#8B6F47] font-medium">Ready to Analyze</div>
          </div>
          <div className="card-polished rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-gradient mb-2">{entries.length}</div>
            <div className="text-[#8B6F47] font-medium">Total Entries</div>
          </div>
        </div>

        {/* Unanalyzed Entries Section */}
        {unanalyzedEntries.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#8B6F47] mb-4">Entries Ready for Analysis</h2>
            <div className="space-y-4">
              {unanalyzedEntries.map((entry) => (
                  <div key={entry.id} className="card-polished rounded-3xl p-6 fade-in">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-sm text-[#8B6F47] font-semibold">{formatDate(entry.createdAt)}</span>
                      <button
                        onClick={() => handleAnalyze(entry.id)}
                        className="bg-gradient-to-r from-[#6B8E23] to-[#7CB342] text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-medium hover:shadow-strong transform hover:scale-105 flex items-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        Analyze with AI
                      </button>
                    </div>
                    <p className="text-[#8B6F47] whitespace-pre-wrap line-clamp-3">{entry.content}</p>
                  </div>
              ))}
            </div>
          </div>
        )}

        {/* Analyzed Entries Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#8B6F47] mb-4">Your AI Insights</h2>
          {analyzedEntries.length === 0 ? (
            <div className="card-polished rounded-3xl p-10 text-center">
              <svg className="w-16 h-16 text-[#8B6F47] mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <p className="text-[#8B6F47] text-lg mb-4">No analyzed entries yet.</p>
              <p className="text-[#8B6F47] mb-6">Write journal entries and analyze them to see insights here!</p>
              <Link
                href="/journal"
                className="inline-block btn-primary text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Go to Journal
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {analyzedEntries.map((entry) => {
                const analysis = parseAnalysis(entry.aiAnalysis);
                if (!analysis) return null;

                return (
                  <div key={entry.id} className="card-polished rounded-3xl p-6 fade-in">
                    <div className="mb-4">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-sm text-[#8B6F47] font-semibold">{formatDate(entry.createdAt)}</span>
                        <Link
                          href={`/journal#entry-${entry.id}`}
                          className="text-sm text-[#8B6F47] hover:text-[#6B5435] underline"
                        >
                          View Full Entry →
                        </Link>
                      </div>
                      <p className="text-[#8B6F47] whitespace-pre-wrap line-clamp-2 mb-4">{entry.content}</p>
                    </div>

                    {/* AI Analysis */}
                    <div className="bg-[#F9F5F0] rounded-2xl p-6 border-2 border-[#D4A574]">
                      <div className="flex items-center gap-2 mb-4">
                        <svg className="w-6 h-6 text-[#6B8E23]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        <h3 className="text-xl font-bold text-[#8B6F47]">AI Analysis</h3>
                      </div>

                      <div className="space-y-4">
                        {/* Summary */}
                        <div className="bg-white/50 rounded-xl p-4 border border-[#D4A574]/30">
                          <h4 className="font-semibold text-[#8B6F47] mb-2">Summary</h4>
                          <p className="text-[#8B6F47] text-sm">{analysis.summary}</p>
                        </div>

                        {/* Patterns */}
                        {analysis.patterns && analysis.patterns.length > 0 && (
                          <div className="bg-white/50 rounded-xl p-4 border border-[#D4A574]/30">
                            <h4 className="font-semibold text-[#8B6F47] mb-2">Patterns</h4>
                            <ul className="list-disc list-inside space-y-1 text-[#8B6F47] text-sm">
                              {analysis.patterns.map((pattern, idx) => (
                                <li key={idx}>{pattern}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Triggers */}
                        {analysis.triggers && analysis.triggers.length > 0 && (
                          <div className="bg-white/50 rounded-xl p-4 border border-[#D4A574]/30">
                            <h4 className="font-semibold text-[#8B6F47] mb-2">Potential Triggers</h4>
                            <ul className="list-disc list-inside space-y-1 text-[#8B6F47] text-sm">
                              {analysis.triggers.map((trigger, idx) => (
                                <li key={idx}>{trigger}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Insights */}
                        {analysis.insights && analysis.insights.length > 0 && (
                          <div className="bg-white/50 rounded-xl p-4 border border-[#D4A574]/30">
                            <h4 className="font-semibold text-[#8B6F47] mb-2">Insights</h4>
                            <ul className="list-disc list-inside space-y-1 text-[#8B6F47] text-sm">
                              {analysis.insights.map((insight, idx) => (
                                <li key={idx}>{insight}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Recommendations */}
                        {analysis.recommendations && analysis.recommendations.length > 0 && (
                          <div className="bg-gradient-to-r from-[#E8D5B7] to-[#F5E6D3] rounded-xl p-4 border-2 border-[#D4A574]">
                            <h4 className="font-semibold text-[#8B6F47] mb-2">Recommendations</h4>
                            <ul className="list-disc list-inside space-y-1 text-[#8B6F47] text-sm">
                              {analysis.recommendations.map((rec, idx) => (
                                <li key={idx}>{rec}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

