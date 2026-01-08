'use client';

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Nav } from "@/components/nav";

interface JournalEntry {
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export default function Journal() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [currentEntry, setCurrentEntry] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentEntry.trim()) return;

    setSaving(true);
    setError("");

    try {
      if (editingId !== null) {
        // Update existing entry
        const response = await fetch(`/api/journal/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ content: currentEntry }),
        });

        if (!response.ok) {
          throw new Error("Failed to update entry");
        }

        const updatedEntry = await response.json();
        setEntries(entries.map(entry => 
          entry.id === editingId ? updatedEntry : entry
        ));
        setEditingId(null);
      } else {
        // Create new entry
        const response = await fetch("/api/journal", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ content: currentEntry }),
        });

        if (!response.ok) {
          throw new Error("Failed to save entry");
        }

        const newEntry = await response.json();
        setEntries([newEntry, ...entries]);
      }
      setCurrentEntry("");
    } catch (err: any) {
      setError(err.message || "Failed to save entry");
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (entry: JournalEntry) => {
    setCurrentEntry(entry.content);
    setEditingId(entry.id);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this entry?")) return;

    try {
      const response = await fetch(`/api/journal/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete entry");
      }

      setEntries(entries.filter(entry => entry.id !== id));
    } catch (err: any) {
      setError(err.message || "Failed to delete entry");
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
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
        <div className="absolute top-48 left-10 opacity-20">
          <svg width="70" height="95" viewBox="0 0 70 95" fill="none">
            <path d="M35 95 Q25 78 20 65 Q15 52 17 42 Q19 32 24 27 Q29 22 34 24 Q39 26 42 33 Q45 40 42 48 Q39 56 35 60" stroke="#6B8E23" strokeWidth="2" fill="none" strokeLinecap="round"/>
            <ellipse cx="29" cy="45" rx="6" ry="9" fill="#7CB342" transform="rotate(-20 29 45)" opacity="0.5"/>
          </svg>
        </div>
        <div className="absolute bottom-40 right-14 opacity-20">
          <svg width="65" height="90" viewBox="0 0 65 90" fill="none">
            <path d="M32 90 Q23 74 18 61 Q13 48 15 38 Q17 28 21 23 Q25 18 30 20 Q35 22 38 29 Q41 36 38 44 Q35 52 32 56" stroke="#6B8E23" strokeWidth="2" fill="none" strokeLinecap="round"/>
            <ellipse cx="27" cy="42" rx="5" ry="8" fill="#8BC34A" transform="rotate(-18 27 42)" opacity="0.5"/>
          </svg>
        </div>
      </div>

      <Nav />

      <div className="max-w-4xl mx-auto px-6 py-6 relative z-10">
        <h1 className="text-3xl font-bold text-[#8B6F47] mb-6">Journal</h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        {/* Journal Entry Form */}
        <div className="bg-gradient-to-br from-[#F5E6D3] to-[#E8D5B7] rounded-3xl p-8 border-2 border-[#D4A574] mb-6 shadow-lg">
          <h2 className="text-xl font-bold text-[#8B6F47] mb-4">
            {editingId !== null ? "Edit Entry" : "New Entry"}
          </h2>
          <form onSubmit={handleSubmit}>
            <textarea
              value={currentEntry}
              onChange={(e) => setCurrentEntry(e.target.value)}
              placeholder="What's on your mind? Reflect on your day, your thoughts, or anything you'd like to remember..."
              className="w-full h-40 px-4 py-3 bg-[#F9F5F0] border border-[#D4A574] rounded-lg text-[#8B6F47] placeholder-[#8B6F47]/50 focus:outline-none focus:ring-2 focus:ring-[#D4A574] resize-none mb-4"
              disabled={saving}
            />
            <div className="flex gap-3">
              <button
                type="submit"
                disabled={saving}
                className="bg-gradient-to-r from-[#D4A574] to-[#C9A876] text-white px-8 py-3 rounded-full font-semibold hover:from-[#C9A876] hover:to-[#D4A574] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? "Saving..." : editingId !== null ? "Update Entry" : "Save Entry"}
              </button>
              {editingId !== null && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingId(null);
                    setCurrentEntry("");
                  }}
                  disabled={saving}
                  className="bg-[#E8D5B7] text-[#8B6F47] px-8 py-3 rounded-full font-semibold hover:bg-[#D4A574] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 disabled:opacity-50"
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
            <div className="bg-gradient-to-br from-[#F5E6D3] to-[#E8D5B7] rounded-3xl p-10 border-2 border-[#D4A574] text-center shadow-lg">
              <p className="text-[#8B6F47] text-lg">No journal entries yet. Start writing to reflect on your thoughts and experiences.</p>
            </div>
          ) : (
            entries.map((entry) => (
              <div key={entry.id} className="bg-gradient-to-br from-[#F5E6D3] to-[#E8D5B7] rounded-3xl p-6 border-2 border-[#D4A574] shadow-lg">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-sm text-[#8B6F47] font-semibold">{formatDate(entry.createdAt)}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(entry)}
                      className="p-2 rounded-full bg-[#E8D5B7] hover:bg-[#D4A574] transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-110"
                      title="Edit entry"
                    >
                      <svg className="w-5 h-5 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleDelete(entry.id)}
                      className="p-2 rounded-full bg-[#E8D5B7] hover:bg-[#D4A574] transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-110"
                      title="Delete entry"
                    >
                      <svg className="w-5 h-5 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
