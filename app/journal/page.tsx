'use client';

import Link from "next/link";
import { useState } from "react";

export default function Journal() {
  const [entries, setEntries] = useState<Array<{content: string, date: string, id: number}>>([]);
  const [currentEntry, setCurrentEntry] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentEntry.trim()) return;

    if (editingId !== null) {
      // Update existing entry
      setEntries(entries.map(entry => 
        entry.id === editingId 
          ? { ...entry, content: currentEntry, date: new Date().toLocaleDateString() }
          : entry
      ));
      setEditingId(null);
    } else {
      // Create new entry
      const newEntry = {
        content: currentEntry,
        date: new Date().toLocaleDateString(),
        id: Date.now()
      };
      setEntries([newEntry, ...entries]);
    }
    setCurrentEntry("");
  };

  const handleEdit = (entry: {content: string, date: string, id: number}) => {
    setCurrentEntry(entry.content);
    setEditingId(entry.id);
  };

  const handleDelete = (id: number) => {
    setEntries(entries.filter(entry => entry.id !== id));
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

      <div className="max-w-4xl mx-auto px-6 py-6 relative z-10">
        <h1 className="text-3xl font-bold text-[#8B6F47] mb-6">Journal</h1>

        {/* Journal Entry Form */}
        <div className="bg-[#F5E6D3] rounded-3xl p-6 border border-[#D4A574] mb-6">
          <h2 className="text-xl font-bold text-[#8B6F47] mb-4">
            {editingId !== null ? "Edit Entry" : "New Entry"}
          </h2>
          <form onSubmit={handleSubmit}>
            <textarea
              value={currentEntry}
              onChange={(e) => setCurrentEntry(e.target.value)}
              placeholder="What's on your mind? Reflect on your day, your thoughts, or anything you'd like to remember..."
              className="w-full h-40 px-4 py-3 bg-[#F9F5F0] border border-[#D4A574] rounded-lg text-[#8B6F47] placeholder-[#8B6F47]/50 focus:outline-none focus:ring-2 focus:ring-[#D4A574] resize-none mb-4"
            />
            <div className="flex gap-3">
              <button
                type="submit"
                className="bg-[#D4A574] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#C9A876] transition-colors"
              >
                {editingId !== null ? "Update Entry" : "Save Entry"}
              </button>
              {editingId !== null && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingId(null);
                    setCurrentEntry("");
                  }}
                  className="bg-[#E8D5B7] text-[#8B6F47] px-6 py-2.5 rounded-full font-semibold hover:bg-[#D4A574] transition-colors"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Journal Entries */}
        <div className="space-y-4">
          {entries.length === 0 ? (
            <div className="bg-[#F5E6D3] rounded-3xl p-8 border border-[#D4A574] text-center">
              <p className="text-[#8B6F47]">No journal entries yet. Start writing to reflect on your thoughts and experiences.</p>
            </div>
          ) : (
            entries.map((entry) => (
              <div key={entry.id} className="bg-[#F5E6D3] rounded-3xl p-6 border border-[#D4A574]">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-sm text-[#8B6F47] font-semibold">{entry.date}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(entry)}
                      className="p-1.5 rounded-full bg-[#E8D5B7] hover:bg-[#D4A574] transition-colors"
                      title="Edit entry"
                    >
                      <svg className="w-4 h-4 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleDelete(entry.id)}
                      className="p-1.5 rounded-full bg-[#E8D5B7] hover:bg-[#D4A574] transition-colors"
                      title="Delete entry"
                    >
                      <svg className="w-4 h-4 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
                <p className="text-[#8B6F47] whitespace-pre-wrap">{entry.content}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

