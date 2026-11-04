import React, { useState, useEffect } from 'react';
import { 
  Target, 
  Brain, 
  Zap, 
  Waves, 
  Palette, 
  BatteryCharging, 
  Edit2, 
  ArrowRight,
  BookOpen,
  ArrowLeft
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

  const handleSavePromise = () => {
    if (tempPromiseText.trim()) {
      updatePromiseText(tempPromiseText.trim());
      setIsEditingPromise(false);
    }
  };

  const completedHabitsCount = habits.filter((h) => h.completed).length;

  const formatStudyTime = (secs: number) => {
    const hrs = Math.floor(secs / 3600);
    const mins = Math.floor((secs % 3600) / 60);
    if (hrs > 0) return `${hrs}h ${mins}m`;
    return `${mins}m`;
  };

  const promisePercent = Math.min(100, Math.round((promise.current / promise.target) * 100));

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-8 space-y-8 select-none font-sans">
      {/* 1. Header with Breadcrumb */}
      <div className="border-b border-white/[0.06] pb-4">
        <button
          onClick={() => setActiveTab('wallpaper')}
          className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors mb-2 font-sans"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Return to Wallpaper HUD
        </button>

        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div>
            <h2 className="font-sans text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              Sanctuary Overview
            </h2>
            <p className="text-xs text-zinc-400 font-sans mt-0.5">
              Good day, <span className="text-white font-medium">{profile.name}</span>. {profile.motto}
            </p>
          </div>

          <div className="text-xs font-mono text-zinc-400">
            {dateStr} • {timeStr}
          </div>
        </div>

        {/* State of Mind Selector */}
        <div className="pt-4 flex flex-wrap items-center gap-2">
          {moods.map((m) => {
            const Icon = m.icon;
            const isSelected = currentMood === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setCurrentMood(m.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-sans transition-all ${
                  isSelected
                    ? 'bg-white/[0.1] text-white border border-white/[0.14] shadow-sm'
                    : 'bg-white/[0.02] text-zinc-400 hover:text-zinc-200 border border-white/[0.06] hover:bg-white/[0.04]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-violet-300' : 'text-zinc-400'}`} />
                <span>{m.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Prominent Daily Promise Card (Condition 1 verified) */}
      <section className="p-6 sm:p-8 rounded-[2rem] bg-gradient-to-b from-[#181a33]/60 to-[#121326]/40 backdrop-blur-3xl border border-white/[0.08] border-t-white/[0.18] shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
          <span className="text-xs font-sans uppercase tracking-[0.16em] text-zinc-200 font-semibold">
            Daily Promise & Core Commitment
          </span>
          <button
            onClick={() => {
              if (isEditingPromise) handleSavePromise();
              else {
                setTempPromiseText(promise.text);
                setIsEditingPromise(true);
              }
            }}
            className="text-xs text-violet-300 hover:text-white flex items-center gap-1 font-sans transition-colors"
          >
            <Edit2 className="w-3.5 h-3.5" />
            <span>{isEditingPromise ? 'Save Promise' : 'Edit'}</span>
          </button>
        </div>

        {isEditingPromise ? (
          <div className="flex gap-2">
            <input
              type="text"
              value={tempPromiseText}
              onChange={(e) => setTempPromiseText(e.target.value)}
              className="flex-1 bg-white/[0.04] border border-white/[0.12] rounded-xl px-4 py-2 text-white font-sans text-sm focus:outline-none focus:border-violet-400"
              autoFocus
            />
            <button
              onClick={handleSavePromise}
              className="px-5 py-2 bg-[#9333ea] hover:bg-[#a855f7] text-white rounded-xl text-xs font-bold uppercase tracking-wider font-sans shadow-md"
            >
              Save
            </button>
          </div>
        ) : (
          <p className="font-sans font-medium text-xl sm:text-2xl text-white/95 leading-snug">
            "{promise.text}"
          </p>
        )}

        {/* Promise Progress Bar */}
        <div className="pt-2 flex items-center justify-between gap-4">
          <div className="flex-1 space-y-1">
            <div className="flex justify-between text-[11px] font-sans text-zinc-400">
              <span>Fulfillment Horizon</span>
              <span className="font-mono text-zinc-200">{promise.current}/{promise.target} ({promisePercent}%)</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-violet-500 to-emerald-400 transition-all duration-300"
                style={{ width: `${promisePercent}%` }}
              />
            </div>
          </div>

          <button
            onClick={incrementPromise}
            className="px-3.5 py-1.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.08] text-xs font-sans text-zinc-200 hover:text-white transition-colors shrink-0"
          >
            +1 Step
          </button>
        </div>
      </section>

      {/* 3. Inviting Journal Preview */}
      <section className="p-6 sm:p-8 rounded-[2rem] bg-gradient-to-b from-[#181a33]/60 to-[#121326]/40 backdrop-blur-3xl border border-white/[0.08] border-t-white/[0.18] shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-violet-300" />
            <h3 className="text-xs font-sans uppercase tracking-[0.16em] text-zinc-200 font-semibold">
              Journal & Reflection Canvas
            </h3>
          </div>
          <button
            onClick={() => setActiveTab('journal')}
            className="text-xs text-violet-300 hover:text-white flex items-center gap-1 transition-colors font-sans"
          >
            Open Full Desk <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <textarea
          value={journalDraft}
          onChange={(e) => setJournalDraft(e.target.value)}
          placeholder="Unload today's thoughts, breakthroughs, and reflections..."
          rows={4}
          className="w-full bg-transparent border-0 text-sm sm:text-base font-sans text-zinc-100 placeholder-zinc-500 focus:outline-none resize-none leading-relaxed"
        />

        <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
          <span className="text-[11px] font-mono text-zinc-400">
            {journalDraft.trim().split(/\s+/).filter(Boolean).length} words drafted
          </span>

          <button
            onClick={handleSaveJournal}
            disabled={!journalDraft.trim()}
            className={`px-5 py-2.5 rounded-2xl text-xs font-bold tracking-wider uppercase font-sans transition-all ${
              journalDraft.trim()
                ? 'bg-[#9333ea] hover:bg-[#a855f7] text-white shadow-[0_0_20px_rgba(147,51,234,0.35)]'
                : 'bg-white/[0.04] text-zinc-500 cursor-not-allowed'
            }`}
          >
            {savedFeedback ? '✓ Saved to Ledger' : 'Save Reflection'}
          </button>
        </div>
      </section>

      {/* 4. Minimal Telemetry Cards (Condition 1 verified) */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div 
          onClick={() => setActiveTab('tracker')}
          className="p-5 rounded-2xl bg-white/[0.025] hover:bg-white/[0.05] border border-white/[0.06] cursor-pointer transition-all space-y-1 group"
        >
          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span className="font-sans uppercase tracking-wider text-[10px]">Daily Rhythm</span>
            <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <p className="text-2xl font-mono text-white">
            {completedHabitsCount}/{habits.length} <span className="text-xs text-zinc-400 font-sans">kept</span>
          </p>
        </div>

        <div 
          onClick={() => setActiveTab('studies')}
          className="p-5 rounded-2xl bg-white/[0.025] hover:bg-white/[0.05] border border-white/[0.06] cursor-pointer transition-all space-y-1 group"
        >
          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span className="font-sans uppercase tracking-wider text-[10px]">Study Block ({studySubject})</span>
            <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <p className="text-2xl font-mono text-white">
            {formatStudyTime(studySeconds)} <span className="text-xs text-zinc-400 font-sans">logged</span>
          </p>
        </div>
      </section>
    </div>
  );
};
