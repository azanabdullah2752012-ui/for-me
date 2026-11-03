import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { Check, Trash2, ArrowLeft } from 'lucide-react';

export const JournalView: React.FC = () => {
  const { 
    journalDraft, 
    setJournalDraft, 
    saveJournalEntry, 
    journalEntries, 
    deleteJournalEntry, 
    currentMood, 
    setCurrentMood,
    setActiveTab 
  } = useData();

  const [savedFeedback, setSavedFeedback] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const handleSave = () => {
    if (!journalDraft.trim()) return;
    saveJournalEntry();
    setSavedFeedback(true);
    setTimeout(() => setSavedFeedback(false), 2200);
  };

  const wordCount = journalDraft.trim().split(/\s+/).filter(Boolean).length;

  const filteredEntries = activeFilter === 'all' 
    ? journalEntries 
    : journalEntries.filter((e) => e.mood?.toLowerCase() === activeFilter.toLowerCase());

  return (
    <div className="max-w-3xl mx-auto py-10 px-4 sm:px-6 space-y-12 select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-6">
        <div>
          <button
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </button>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-wide">
            Journal & Reflections
          </h2>
          <p className="text-xs text-zinc-400 font-sans mt-1">
            An open, private canvas for thoughts, breakthroughs, and quiet contemplation.
          </p>
        </div>
      </div>

      {/* Writing Canvas Surface */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#0c1022]/80 border border-[#c4b5fd]/[0.1] space-y-6 shadow-sanctuary backdrop-blur-md">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
          <div className="font-mono">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-[11px] text-zinc-400">Mood:</span>
            <select
              value={currentMood}
              onChange={(e) => setCurrentMood(e.target.value as any)}
              className="bg-white/[0.04] border border-white/[0.1] rounded-lg px-2 py-1 text-xs text-violet-200 focus:outline-none"
            >
              <option value="locked_in" className="bg-[#0b0f1d]">Locked In</option>
              <option value="deep_focus" className="bg-[#0b0f1d]">Deep Focus</option>
              <option value="energized" className="bg-[#0b0f1d]">Energized</option>
              <option value="calm_flow" className="bg-[#0b0f1d]">Calm & Flow</option>
              <option value="creative" className="bg-[#0b0f1d]">Creative</option>
              <option value="recharging" className="bg-[#0b0f1d]">Recharging</option>
            </select>
          </div>
        </div>

        {/* Text Area */}
        <div>
          <textarea
            value={journalDraft}
            onChange={(e) => setJournalDraft(e.target.value)}
            placeholder="Write freely without judgment. Let thoughts untangle here..."
            rows={8}
            className="w-full bg-transparent border-0 text-base sm:text-lg font-serif text-zinc-100 placeholder-zinc-500 focus:outline-none resize-none leading-relaxed"
          />
        </div>

        {/* Action Bar */}
        <div className="flex items-center justify-between pt-4 border-t border-white/[0.05]">
          <div className="text-xs text-zinc-400 font-mono">
            {wordCount} words
          </div>

          <button
            onClick={handleSave}
            disabled={!journalDraft.trim()}
            className={`px-6 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
              journalDraft.trim()
                ? 'bg-violet-600 hover:bg-violet-500 text-white shadow-lavender-glow'
                : 'bg-white/[0.04] text-zinc-400 cursor-not-allowed'
            }`}
          >
            {savedFeedback ? (
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4" /> Saved to Ledger
              </span>
            ) : (
              'Save to Ledger'
            )}
          </button>
        </div>
      </div>

      {/* Reflection History Archive */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-xl text-white font-normal">
            Past Reflections ({journalEntries.length})
          </h3>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 text-[11px]">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-2.5 py-1 rounded-full ${
                activeFilter === 'all' ? 'bg-violet-500/20 text-violet-200 border border-violet-400/40' : 'text-zinc-400 hover:text-white'
              }`}
            >
              All
            </button>
          </div>
        </div>

        {filteredEntries.length === 0 ? (
          <div className="p-8 text-center text-zinc-400 text-xs font-serif italic border border-white/[0.04] rounded-2xl">
            The canvas is open. Write your first thought of the morning above.
          </div>
        ) : (
          <div className="space-y-4">
            {filteredEntries.map((entry) => (
              <div
                key={entry.id}
                className="p-6 rounded-2xl bg-[#0c1022]/60 border border-[#c4b5fd]/[0.08] hover:border-[#c4b5fd]/[0.16] transition-all space-y-3 group"
              >
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <div className="flex items-center gap-2">
                    <span className="font-mono">{entry.timestamp}</span>
                    {entry.mood && (
                      <span className="px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-300 text-[10px] uppercase font-mono">
                        {entry.mood}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => deleteJournalEntry(entry.id)}
                    className="opacity-0 group-hover:opacity-100 text-zinc-400 hover:text-red-400 transition-opacity p-1"
                    title="Remove entry"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <p className="font-serif text-sm sm:text-base text-zinc-200 leading-relaxed whitespace-pre-wrap">
                  "{entry.text}"
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
