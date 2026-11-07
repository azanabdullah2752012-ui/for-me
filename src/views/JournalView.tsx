import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { Check, Trash2, ArrowLeft, BookOpen, Sparkles } from 'lucide-react';

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
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-8 space-y-8 select-none font-sans">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
        <div>
          <button
            onClick={() => setActiveTab('wallpaper')}
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors mb-2 font-sans"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Return to Wallpaper HUD
          </button>
          <div className="flex items-center gap-2.5">
            <BookOpen className="w-5 h-5 text-violet-300" />
            <h2 className="font-sans text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              Journal & Reflections
            </h2>
          </div>
          <p className="text-xs text-zinc-400 font-sans mt-1">
            An open, private sanctuary for thoughts, breakthroughs, and quiet contemplation.
          </p>
        </div>

        <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/[0.06] text-zinc-300 border border-white/[0.08]">
          {journalEntries.length} entries
        </span>
      </div>

      {/* Writing Canvas Surface (Elevated Cosmic Neumorphic Glass) */}
      <div className="p-6 sm:p-8 rounded-[2rem] cosmic-card space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-300 border-b border-white/[0.08] pb-3">
          <div className="font-display font-medium text-zinc-300 flex items-center gap-1.5 tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-violet-300" />
            <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-zinc-400 font-sans">State of Mind:</span>
            <select
              value={currentMood}
              onChange={(e) => setCurrentMood(e.target.value as any)}
              className="cosmic-input rounded-xl px-2.5 py-1 text-xs text-zinc-200 focus:outline-none"
            >
              <option value="locked_in" className="bg-[#0e1022]">Locked In</option>
              <option value="deep_focus" className="bg-[#0e1022]">Deep Focus</option>
              <option value="energized" className="bg-[#0e1022]">Energized</option>
              <option value="calm_flow" className="bg-[#0e1022]">Calm & Flow</option>
              <option value="creative" className="bg-[#0e1022]">Creative</option>
              <option value="recharging" className="bg-[#0e1022]">Recharging</option>
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
            className="w-full bg-transparent border-0 text-sm sm:text-base font-sans text-zinc-100 placeholder-zinc-500 focus:outline-none resize-none leading-relaxed"
          />
        </div>

        {/* Action Bar */}
        <div className="flex items-center justify-between pt-3 border-t border-white/[0.08]">
          <div className="text-xs text-zinc-400 font-display tabular-nums">
            {wordCount} words
          </div>

          <button
            onClick={handleSave}
            disabled={!journalDraft.trim()}
            className={`px-6 py-2.5 rounded-2xl text-xs font-display font-bold tracking-wider uppercase transition-all flex items-center gap-2 ${
              journalDraft.trim()
                ? 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white shadow-[0_4px_20px_rgba(147,51,234,0.35)] cursor-pointer'
                : 'bg-white/[0.04] text-zinc-500 cursor-not-allowed'
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
      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
          <h3 className="text-xs font-sans uppercase tracking-[0.16em] text-zinc-200 font-semibold">
            Past Reflections ({journalEntries.length})
          </h3>

          <div className="flex items-center gap-1.5 text-[11px] font-sans">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1 rounded-full transition-colors ${
                activeFilter === 'all' 
                  ? 'bg-white/[0.08] text-white border border-white/[0.12]' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              All
            </button>
          </div>
        </div>

        {filteredEntries.length === 0 ? (
          <div className="p-8 text-center text-zinc-400 text-xs font-sans border border-white/[0.06] rounded-2xl bg-white/[0.015]">
            The canvas is open. Write your first thought of the day above.
          </div>
        ) : (
          <div className="space-y-3">
            {filteredEntries.map((entry) => (
              <div
                key={entry.id}
                className="p-5 rounded-2xl cosmic-card transition-all space-y-2 group"
              >
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <div className="flex items-center gap-2">
                    <span className="font-display tabular-nums text-zinc-400">{entry.timestamp}</span>
                    {entry.mood && (
                      <span className="px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 text-[10px] uppercase font-display tracking-wider border border-violet-500/30">
                        {entry.mood}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => deleteJournalEntry(entry.id)}
                    className="opacity-0 group-hover:opacity-100 text-zinc-400 hover:text-red-400 transition-opacity p-1 cursor-pointer"
                    title="Remove entry"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <p className="font-sans text-sm text-zinc-200 leading-relaxed whitespace-pre-wrap">
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
