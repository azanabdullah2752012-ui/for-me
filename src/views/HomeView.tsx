import React, { useState, useEffect } from 'react';
import { 
  Target, 
  Brain, 
  Zap, 
  Waves, 
  Palette, 
  BatteryCharging, 
  Check, 
  Edit2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useData } from '../context/DataContext';
import { MoodType } from '../types';

export const HomeView: React.FC = () => {
  const { 
    profile, 
    currentMood, 
    setCurrentMood, 
    promise, 
    incrementPromise, 
    updatePromiseText,
    journalDraft, 
    setJournalDraft, 
    saveJournalEntry, 
    habits, 
    studySeconds, 
    studySubject,
    setActiveTab 
  } = useData();

  const [dateStr, setDateStr] = useState('');
  const [timeStr, setTimeStr] = useState('');
  const [isEditingPromise, setIsEditingPromise] = useState(false);
  const [tempPromiseText, setTempPromiseText] = useState(promise.text);
  const [savedFeedback, setSavedFeedback] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      setDateStr(`${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`);

      const h = now.getHours();
      const m = now.getMinutes();
      const ampm = h >= 12 ? 'PM' : 'AM';
      const formattedH = (h % 12 || 12).toString().padStart(2, '0');
      const formattedM = m.toString().padStart(2, '0');
      setTimeStr(`${formattedH}:${formattedM} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const moods: { id: MoodType; label: string; icon: React.ElementType }[] = [
    { id: 'locked_in', label: 'Locked In', icon: Target },
    { id: 'deep_focus', label: 'Deep Focus', icon: Brain },
    { id: 'energized', label: 'Energized', icon: Zap },
    { id: 'calm_flow', label: 'Calm & Flow', icon: Waves },
    { id: 'creative', label: 'Creative', icon: Palette },
    { id: 'recharging', label: 'Recharging', icon: BatteryCharging },
  ];

  const handleSaveJournal = () => {
    if (!journalDraft.trim()) return;
    saveJournalEntry();
    setSavedFeedback(true);
    setTimeout(() => setSavedFeedback(false), 2200);
  };

  const completedHabitsCount = habits.filter((h) => h.completed).length;

  // Format study timer seconds
  const formatStudyTime = (secs: number) => {
    const hrs = Math.floor(secs / 3600);
    const mins = Math.floor((secs % 3600) / 60);
    if (hrs > 0) return `${hrs}h ${mins}m`;
    return `${mins}m`;
  };

  const promisePercent = Math.min(100, Math.round((promise.current / promise.target) * 100));

  return (
    <div className="max-w-3xl mx-auto py-10 px-4 sm:px-6 space-y-16 select-none">
      {/* 1. Celestial Atmospheric Greeting */}
      <section className="text-center space-y-3">
        <div className="text-xs font-mono tracking-wider text-violet-300/60 uppercase">
          {dateStr} • {timeStr}
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl font-normal text-white tracking-tight">
          Good Morning,{' '}
          <span className="text-violet-300 italic font-serif">
            {profile.name}.
          </span>
        </h2>

        <p className="text-xs sm:text-sm text-zinc-400 font-serif tracking-widest italic opacity-80">
          + {profile.motto} —
        </p>

        {/* Mood Selector */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
          {moods.map((m) => {
            const Icon = m.icon;
            const isSelected = currentMood === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setCurrentMood(m.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-violet-500/20 text-violet-200 border border-violet-400/50 shadow-lavender-glow'
                    : 'bg-white/[0.02] text-zinc-400 hover:text-zinc-200 border border-white/[0.05] hover:bg-white/[0.04]'
                }`}
              >
                <Icon className={`w-3 h-3 ${isSelected ? 'text-violet-300' : 'text-zinc-400'}`} />
                <span>{m.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 2. Prominent Daily Promise (Condition 1) */}
      <section className="p-8 sm:p-10 rounded-3xl bg-[#0c1022]/80 border border-[#c4b5fd]/[0.1] text-center space-y-6 relative overflow-hidden backdrop-blur-md shadow-sanctuary">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/[0.04] to-transparent pointer-events-none" />

        <div className="relative z-10 flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-violet-300" />
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-violet-300/80">
            Daily Promise
          </span>
          <button
            onClick={() => setIsEditingPromise(!isEditingPromise)}
            aria-label="Edit daily promise"
            className="ml-1 text-zinc-400 hover:text-white transition-colors"
          >
            <Edit2 className="w-3 h-3" />
          </button>
        </div>

        <div className="relative z-10 max-w-xl mx-auto">
          {isEditingPromise ? (
            <div className="flex gap-2">
              <input
                type="text"
                value={tempPromiseText}
                onChange={(e) => setTempPromiseText(e.target.value)}
                className="w-full bg-white/[0.05] border border-violet-400/30 rounded-xl px-3 py-2 text-sm text-white focus:outline-none"
                autoFocus
              />
              <button
                onClick={() => {
                  updatePromiseText(tempPromiseText);
                  setIsEditingPromise(false);
                }}
                className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-xl text-xs font-semibold"
              >
                Save
              </button>
            </div>
          ) : (
            <p className="font-serif text-2xl sm:text-3xl text-zinc-100 leading-snug">
              "{promise.text}"
            </p>
          )}

          <p className="text-xs text-zinc-400 font-sans mt-2">
            — Due {promise.deadline}
          </p>
        </div>

        {/* Promise Progress Bar */}
        <div className="relative z-10 max-w-md mx-auto pt-2 space-y-2">
          <div className="flex items-center justify-between text-xs text-zinc-400 font-sans">
            <span>Progress</span>
            <button
              onClick={incrementPromise}
              className="text-violet-300 hover:text-white font-mono hover:underline"
              title="Click to advance progress"
            >
              {promise.current} of {promise.target} {promise.unit} completed
            </button>
          </div>

          <div
            onClick={incrementPromise}
            className="w-full h-2 rounded-full bg-white/[0.06] overflow-hidden cursor-pointer"
            title="Click to increment"
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-400 transition-all duration-500"
              style={{ width: `${promisePercent}%` }}
            />
          </div>
        </div>
      </section>

      {/* 3. Inviting Journal Preview (Condition 1) */}
      <section className="p-8 sm:p-10 rounded-3xl bg-[#0c1022]/80 border border-[#c4b5fd]/[0.1] space-y-5 backdrop-blur-md shadow-sanctuary">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-lg text-white font-normal tracking-wide">
            Today's Reflection
          </h3>
          <button
            onClick={() => setActiveTab('journal')}
            className="text-xs text-violet-300 hover:text-white flex items-center gap-1 transition-colors font-medium"
          >
            Open Full Journal <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div>
          <textarea
            value={journalDraft}
            onChange={(e) => setJournalDraft(e.target.value)}
            placeholder="What are you discovering or working through right now?"
            rows={4}
            className="w-full bg-transparent border-0 text-sm sm:text-base font-serif text-zinc-200 placeholder-zinc-500 focus:outline-none resize-none leading-relaxed"
          />
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-white/[0.05]">
          <span className="text-xs text-zinc-400">
            {journalDraft.trim().split(/\s+/).filter(Boolean).length} words
          </span>

          <button
            onClick={handleSaveJournal}
            disabled={!journalDraft.trim()}
            className={`px-5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
              journalDraft.trim()
                ? 'bg-violet-600 hover:bg-violet-500 text-white shadow-lavender-glow'
                : 'bg-white/[0.04] text-zinc-400 cursor-not-allowed'
            }`}
          >
            {savedFeedback ? (
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" /> Saved to Ledger
              </span>
            ) : (
              'Save Reflection'
            )}
          </button>
        </div>
      </section>

      {/* 4. Minimal Daily Summary Glance (Condition 1: No habit checklist, No focus audio) */}
      <section className="pt-2 pb-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-sans">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-violet-400" />
          <span>
            {completedHabitsCount} of {habits.length} habits completed today.
          </span>
          <button
            onClick={() => setActiveTab('tracker')}
            className="text-violet-300 hover:text-white underline ml-1"
          >
            Habit Ledger →
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span>
            Study Focus: {formatStudyTime(studySeconds)} logged in {studySubject}.
          </span>
          <button
            onClick={() => setActiveTab('studies')}
            className="text-violet-300 hover:text-white underline ml-1"
          >
            Study Vault →
          </button>
        </div>
      </section>
    </div>
  );
};
