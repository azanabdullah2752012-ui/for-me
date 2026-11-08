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
    setActiveTab,
    appTheme
  } = useData();

  const isLight = appTheme === 'light';

  const [savedFeedback, setSavedFeedback] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activePosture, setActivePosture] = useState<'release' | 'quiet_mind' | 'clarity'>('quiet_mind');

  const postures = [
    {
      id: 'release' as const,
      label: 'Release',
      hint: 'Unload frustrations & tension freely without filter',
      placeholder: 'Vent frustrations without judgment. Unload what feels heavy onto this private ledger...',
    },
    {
      id: 'quiet_mind' as const,
      label: 'Quiet Mind',
      hint: 'Gently ground yourself in calm reflection',
      placeholder: 'The chamber is quiet. Untangle your thoughts peacefully. Notice what is present right now...',
    },
    {
      id: 'clarity' as const,
      label: 'Clarity',
      hint: 'Dissect challenges & discover clear next steps',
      placeholder: 'Dissect a key challenge or decision. What is within your control? What is your clear next move?...',
    },
  ];

  const currentPostureObj = postures.find((p) => p.id === activePosture) || postures[1];

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
    <div className="relative max-w-4xl mx-auto py-8 px-4 sm:px-8 space-y-8 select-none font-sans">
      {/* Celestial Ambient Writing Atmosphere Glows */}
      {!isLight && (
        <>
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-violet-600/[0.10] rounded-full blur-[120px] pointer-events-none -z-10" />
          <div className="absolute top-80 right-0 w-[480px] h-[340px] bg-purple-600/[0.07] rounded-full blur-[110px] pointer-events-none -z-10" />
        </>
      )}

      {/* Top Header */}
      <div className={`flex items-center justify-between border-b pb-4 ${
        isLight ? 'border-zinc-200' : 'border-white/[0.08]'
      }`}>
        <div>
          <button
            onClick={() => setActiveTab('wallpaper')}
            className={`flex items-center gap-1.5 text-xs transition-colors mb-2 font-sans cursor-pointer ${
              isLight ? 'text-zinc-600 hover:text-black font-medium' : 'text-zinc-400 hover:text-white'
            }`}
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Return to Wallpaper HUD
          </button>
          <div className="flex items-center gap-2.5">
            <BookOpen className={`w-5 h-5 ${isLight ? 'text-violet-700' : 'text-violet-300'}`} />
            <h2 className={`font-display text-2xl sm:text-3xl font-semibold tracking-tight ${
              isLight ? 'text-zinc-900' : 'text-white'
            }`}>
              Starlight Journal Chamber
            </h2>
          </div>
          <p className={`text-xs font-sans mt-1 ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
            An open, sacred space for thoughts, breakthroughs, and quiet contemplation under the cosmic sky.
          </p>
        </div>

        <span className={`text-[11px] font-display font-medium px-3.5 py-1 rounded-full cosmic-dock tabular-nums ${
          isLight ? 'text-zinc-800' : 'text-zinc-300'
        }`}>
          {journalEntries.length} entries
        </span>
      </div>

      {/* Writing Canvas Surface (Elevated Cosmic Neumorphic Glass) */}
      <div className="p-6 sm:p-8 rounded-[2rem] cosmic-card space-y-5">
        {/* Top Controls: Date, Postures & Mood */}
        <div className={`flex flex-wrap items-center justify-between gap-3 text-xs border-b pb-3.5 ${
          isLight ? 'border-zinc-200 text-zinc-700' : 'border-white/[0.08] text-zinc-300'
        }`}>
          <div className={`font-display font-medium flex items-center gap-1.5 tracking-wide ${
            isLight ? 'text-zinc-800' : 'text-zinc-300'
          }`}>
            <Sparkles className={`w-3.5 h-3.5 ${isLight ? 'text-amber-500' : 'text-violet-300'}`} />
            <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className={`text-[11px] font-sans ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>State of Mind:</span>
            <select
              value={currentMood}
              onChange={(e) => setCurrentMood(e.target.value as any)}
              className="cosmic-input rounded-xl px-2.5 py-1 text-xs focus:outline-none cursor-pointer"
            >
              <option value="locked_in" className={isLight ? 'bg-white text-zinc-900' : 'bg-[#0e1022] text-zinc-200'}>Locked In</option>
              <option value="deep_focus" className={isLight ? 'bg-white text-zinc-900' : 'bg-[#0e1022] text-zinc-200'}>Deep Focus</option>
              <option value="energized" className={isLight ? 'bg-white text-zinc-900' : 'bg-[#0e1022] text-zinc-200'}>Energized</option>
              <option value="calm_flow" className={isLight ? 'bg-white text-zinc-900' : 'bg-[#0e1022] text-zinc-200'}>Calm & Flow</option>
              <option value="creative" className={isLight ? 'bg-white text-zinc-900' : 'bg-[#0e1022] text-zinc-200'}>Creative</option>
              <option value="recharging" className={isLight ? 'bg-white text-zinc-900' : 'bg-[#0e1022] text-zinc-200'}>Recharging</option>
            </select>
          </div>
        </div>

        {/* 3 Reflection Postures */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className={`text-[11px] font-display uppercase tracking-[0.16em] mr-1 ${
            isLight ? 'text-zinc-500 font-semibold' : 'text-zinc-400'
          }`}>
            Posture:
          </span>
          {postures.map((posture) => {
            const isSelected = activePosture === posture.id;
            return (
              <button
                key={posture.id}
                type="button"
                onClick={() => setActivePosture(posture.id)}
                className={`px-3 py-1 rounded-xl text-xs font-display tracking-wide transition-all cursor-pointer ${
                  isSelected
                    ? isLight
                      ? 'bg-violet-100 text-violet-900 border border-violet-300 shadow-sm font-semibold'
                      : 'bg-violet-600/30 text-white border border-violet-400/40 shadow-sm'
                    : isLight
                      ? 'bg-black/[0.04] text-zinc-600 hover:text-zinc-900 border border-zinc-200 hover:bg-black/[0.06]'
                      : 'bg-white/[0.03] text-zinc-400 hover:text-zinc-200 border border-white/[0.06] hover:bg-white/[0.06]'
                }`}
                title={posture.hint}
              >
                {posture.label}
              </button>
            );
          })}
          <span className={`text-[11px] italic ml-auto hidden md:inline ${
            isLight ? 'text-zinc-500' : 'text-zinc-400'
          }`}>
            {currentPostureObj.hint}
          </span>
        </div>

        {/* Text Area */}
        <div>
          <textarea
            value={journalDraft}
            onChange={(e) => setJournalDraft(e.target.value)}
            placeholder={currentPostureObj.placeholder}
            rows={8}
            className={`w-full bg-transparent border-0 text-sm sm:text-base font-sans leading-relaxed focus:outline-none resize-none ${
              isLight ? 'text-zinc-900 placeholder-zinc-400' : 'text-zinc-100 placeholder-zinc-500/80'
            }`}
          />
        </div>

        {/* Action Bar */}
        <div className={`flex items-center justify-between pt-3 border-t ${
          isLight ? 'border-zinc-200' : 'border-white/[0.08]'
        }`}>
          <div className={`text-xs font-display tabular-nums ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
            {wordCount} words
          </div>

          <button
            onClick={handleSave}
            disabled={!journalDraft.trim()}
            className={`px-6 py-2.5 rounded-2xl text-xs font-display font-bold tracking-wider uppercase transition-all flex items-center gap-2 ${
              journalDraft.trim()
                ? isLight
                  ? 'bg-zinc-900 hover:bg-zinc-800 text-white shadow-[0_4px_16px_rgba(24,24,27,0.18)] cursor-pointer'
                  : 'bg-violet-600 hover:bg-violet-500 text-white shadow-[0_4px_20px_rgba(124,58,237,0.35)] cursor-pointer'
                : isLight
                  ? 'bg-zinc-200 text-zinc-400 cursor-not-allowed'
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
        <div className={`flex items-center justify-between pb-2 border-b ${
          isLight ? 'border-zinc-200' : 'border-white/[0.06]'
        }`}>
          <h3 className={`text-xs font-sans uppercase tracking-[0.16em] font-semibold ${
            isLight ? 'text-zinc-900' : 'text-zinc-200'
          }`}>
            Past Reflections ({journalEntries.length})
          </h3>

          <div className="flex items-center gap-1.5 text-[11px] font-sans">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1 rounded-full transition-colors ${
                activeFilter === 'all' 
                  ? isLight
                    ? 'bg-black/[0.08] text-zinc-900 border border-zinc-300 font-medium'
                    : 'bg-white/[0.08] text-white border border-white/[0.12]' 
                  : isLight
                    ? 'text-zinc-500 hover:text-zinc-900'
                    : 'text-zinc-400 hover:text-white'
              }`}
            >
              All
            </button>
          </div>
        </div>

        {filteredEntries.length === 0 ? (
          <div className={`p-8 text-center text-xs font-sans border rounded-2xl ${
            isLight ? 'border-zinc-200 bg-white/60 text-zinc-500' : 'border-white/[0.06] bg-white/[0.015] text-zinc-400'
          }`}>
            The canvas is open. Write your first thought of the day above.
          </div>
        ) : (
          <div className="space-y-3">
            {filteredEntries.map((entry) => (
              <div
                key={entry.id}
                className="p-5 rounded-2xl cosmic-card transition-all space-y-2 group"
              >
                <div className={`flex items-center justify-between text-xs ${
                  isLight ? 'text-zinc-500' : 'text-zinc-400'
                }`}>
                  <div className="flex items-center gap-2">
                    <span className="font-display tabular-nums">{entry.timestamp}</span>
                    {entry.mood && (
                      <span className={`px-2 py-0.5 rounded-full text-[10px] uppercase font-display tracking-wider border ${
                        isLight
                          ? 'bg-violet-100 text-violet-800 border-violet-200 font-semibold'
                          : 'bg-violet-500/20 text-violet-300 border-violet-500/30'
                      }`}>
                        {entry.mood}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => deleteJournalEntry(entry.id)}
                    className={`opacity-0 group-hover:opacity-100 transition-opacity p-1 cursor-pointer ${
                      isLight ? 'text-zinc-400 hover:text-red-600' : 'text-zinc-400 hover:text-red-400'
                    }`}
                    title="Remove entry"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <p className={`font-sans text-sm leading-relaxed whitespace-pre-wrap ${
                  isLight ? 'text-zinc-800' : 'text-zinc-200'
                }`}>
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
