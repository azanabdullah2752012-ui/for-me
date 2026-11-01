import React, { useState, useEffect, useMemo } from 'react';
import {
  Save,
  Check,
  Heart,
  Target,
  Maximize2,
  Minimize2,
  Copy,
  Trash2,
  Sparkles,
  Flame,
  Zap,
  Coffee,
  Smile,
  Moon,
} from 'lucide-react';
import {
  useData,
  formatDateKey,
  getDefaultDailyPromise,
  getDefaultNightlyReview,
} from '../context/DataContext';
import { Badge } from '../components/common/Badge';
import { sound } from '../audio/sound';

const VIBES = [
  {
    label: 'Locked In',
    icon: '🔥',
    activeClass:
      'bg-gradient-to-r from-orange-500/30 to-amber-500/30 text-amber-300 border-amber-500/70 shadow-[0_0_18px_rgba(245,158,11,0.4)] font-bold',
    idleClass: 'hover:border-amber-500/40 hover:text-amber-200',
  },
  {
    label: 'Focused',
    icon: '🎯',
    activeClass:
      'bg-gradient-to-r from-cyan-500/30 to-blue-500/30 text-cyan-300 border-cyan-500/70 shadow-[0_0_18px_rgba(6,182,212,0.4)] font-bold',
    idleClass: 'hover:border-cyan-500/40 hover:text-cyan-200',
  },
  {
    label: 'Energized',
    icon: '⚡',
    activeClass:
      'bg-gradient-to-r from-yellow-500/30 to-lime-500/30 text-yellow-300 border-yellow-500/70 shadow-[0_0_18px_rgba(234,179,8,0.4)] font-bold',
    idleClass: 'hover:border-yellow-500/40 hover:text-yellow-200',
  },
  {
    label: 'Chill',
    icon: '🌊',
    activeClass:
      'bg-gradient-to-r from-blue-500/30 to-indigo-500/30 text-blue-300 border-blue-500/70 shadow-[0_0_18px_rgba(59,130,246,0.4)] font-bold',
    idleClass: 'hover:border-blue-500/40 hover:text-blue-200',
  },
  {
    label: 'Creative',
    icon: '💡',
    activeClass:
      'bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-pink-300 border-pink-500/70 shadow-[0_0_18px_rgba(236,72,153,0.4)] font-bold',
    idleClass: 'hover:border-pink-500/40 hover:text-pink-200',
  },
  {
    label: 'Tired',
    icon: '😴',
    activeClass:
      'bg-gradient-to-r from-indigo-500/30 to-slate-500/30 text-indigo-300 border-indigo-500/70 shadow-[0_0_18px_rgba(99,102,241,0.4)] font-bold',
    idleClass: 'hover:border-indigo-500/40 hover:text-indigo-200',
  },
];

export const DailyTrackerView: React.FC = () => {
  const {
    selectedDate,
    dailyLogs,
    updateDailyLog,
    saveDailyPromise,
    updateDailyPromiseStatus,
  } = useData();

  const currentLog = dailyLogs[selectedDate] || {};

  const [dayTheme, setDayTheme] = useState(currentLog.dayTheme || '');
  const [journalText, setJournalText] = useState(currentLog.dailyNotes || '');
  const [gratitudeSnippet, setGratitudeSnippet] = useState(
    currentLog.extendedReflections?.gratitude || ''
  );
  const [tomorrowGoal, setTomorrowGoal] = useState(
    currentLog.extendedReflections?.decisions || ''
  );
  const [selectedVibe, setSelectedVibe] = useState<string>(
    currentLog.extendedReflections?.emotions || 'Focused'
  );
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saved'>('idle');
  const [copied, setCopied] = useState(false);
  const [isZenMode, setIsZenMode] = useState(false);
  const [isClearing, setIsClearing] = useState(false);
  const [clearNotice, setClearNotice] = useState(false);

  // Sync state when selectedDate changes
  useEffect(() => {
    setDayTheme(currentLog.dayTheme || '');
    setJournalText(currentLog.dailyNotes || '');
    setGratitudeSnippet(currentLog.extendedReflections?.gratitude || '');
    setTomorrowGoal(currentLog.extendedReflections?.decisions || '');
    setSelectedVibe(currentLog.extendedReflections?.emotions || 'Focused');
  }, [
    selectedDate,
    currentLog.dayTheme,
    currentLog.dailyNotes,
    currentLog.extendedReflections?.gratitude,
    currentLog.extendedReflections?.decisions,
    currentLog.extendedReflections?.emotions,
  ]);

  // Formatted display date
  const [y, m, d] = selectedDate.split('-').map(Number);
  const dateObj = new Date(y, m - 1, d);
  const formattedFullDate = dateObj.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const promise = currentLog.dailyPromise || getDefaultDailyPromise();

  // Word count & reading time
  const wordCount = useMemo(() => {
    return journalText.trim() ? journalText.trim().split(/\s+/).length : 0;
  }, [journalText]);
  const readingTimeMin = Math.max(1, Math.ceil(wordCount / 200));

  // Save changes to current log
  const handleSaveAll = () => {
    const existing = currentLog.extendedReflections || {
      emotions: '',
      triggers: '',
      gratitude: '',
      happiness: '',
      decisions: '',
      mistakes: '',
      lessons: '',
    };

    updateDailyLog({
      dayTheme,
      dailyNotes: journalText,
      extendedReflections: {
        ...existing,
        gratitude: gratitudeSnippet,
        decisions: tomorrowGoal,
        emotions: selectedVibe,
      },
    });

    sound.complete();
    setSaveStatus('saved');
    setTimeout(() => setSaveStatus('idle'), 2200);
  };

  // Copy entry text
  const handleCopy = () => {
    sound.tick();
    const fullContent = [
      dayTheme ? `# ${dayTheme}` : '',
      `Date: ${formattedFullDate}`,
      `Vibe: ${selectedVibe}`,
      '',
      journalText,
      '',
      gratitudeSnippet ? `Today's Win: ${gratitudeSnippet}` : '',
      tomorrowGoal ? `Tomorrow's Goal: ${tomorrowGoal}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    navigator.clipboard.writeText(fullContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Keyboard shortcut Ctrl+S / Cmd+S to save & Esc to exit Zen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        handleSaveAll();
      }
      if (e.key === 'Escape' && isZenMode) {
        setIsZenMode(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [dayTheme, journalText, gratitudeSnippet, tomorrowGoal, selectedVibe, isZenMode]);

  // Clear draft
  const handleClearDraft = () => {
    if (!journalText.trim() || isClearing) return;
    sound.tick();
    setIsClearing(true);

    setTimeout(() => {
      setJournalText('');
      updateDailyLog({ dailyNotes: '' });
      setIsClearing(false);
      setClearNotice(true);
      sound.complete();
      setTimeout(() => setClearNotice(false), 2600);
    }, 400);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-16 animate-fadeIn select-none">
      {/* 1. VIBRANT MASTHEAD WITH GLOWING BADGES */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-purple-500/20">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase font-mono tracking-[0.2em] bg-purple-500/15 border border-purple-500/40 text-purple-300 font-bold shadow-[0_0_12px_rgba(168,85,247,0.25)] flex items-center gap-1.5">
              <Sparkles size={11} className="text-purple-400" />
              <span>Daily Notes &amp; Journal</span>
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-heading font-extrabold text-white tracking-tight flex items-baseline gap-3">
            <span className="bg-gradient-to-r from-purple-200 via-pink-200 to-white bg-clip-text text-transparent">
              My Journal
            </span>
            <span className="text-xs font-mono font-medium text-purple-300/70">
              {formattedFullDate}
            </span>
          </h1>
        </div>

        {/* Action Controls: Zen Mode, Copy, Glowing Save CTA */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-sans text-cyan-200 hover:text-white bg-cyan-950/30 hover:bg-cyan-900/40 border border-cyan-500/30 transition-all focus:outline-none focus:ring-1 focus:ring-cyan-400"
            title="Copy entry to clipboard"
          >
            {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} className="text-cyan-400" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              sound.tick();
              setIsZenMode(true);
            }}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-sans text-purple-200 hover:text-white bg-purple-950/30 hover:bg-purple-900/40 border border-purple-500/30 transition-all focus:outline-none focus:ring-1 focus:ring-purple-400"
            title="Full Screen Zen Focus Mode (Esc to exit)"
          >
            <Maximize2 size={13} className="text-purple-400" />
            <span className="hidden sm:inline">Zen Mode</span>
          </button>

          <button
            type="button"
            onClick={handleSaveAll}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-sans font-bold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] focus:outline-none focus:ring-1 focus:ring-purple-400 active:scale-95"
            title="Save Entry (Cmd+S)"
          >
            {saveStatus === 'saved' ? <Check size={14} className="text-white" /> : <Save size={14} className="text-white" />}
            <span>{saveStatus === 'saved' ? 'Saved!' : 'Save'}</span>
          </button>
        </div>
      </div>

      {/* 2. TODAY'S VIBRANT VIBE CHECK */}
      <div className="flex flex-wrap items-center gap-2 p-3.5 rounded-2xl bg-gradient-to-r from-purple-950/20 via-zinc-900/40 to-cyan-950/20 border border-purple-500/20 shadow-sm">
        <span className="text-[11px] font-mono uppercase tracking-wider text-purple-300 mr-2 flex items-center gap-1.5 font-bold">
          <Sparkles size={13} className="text-pink-400" />
          <span>Today&apos;s Vibe:</span>
        </span>
        {VIBES.map((v) => {
          const isSelected = selectedVibe === v.label;
          return (
            <button
              key={v.label}
              type="button"
              onClick={() => {
                sound.tick();
                setSelectedVibe(v.label);
              }}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-sans transition-all duration-200 focus:outline-none ${
                isSelected
                  ? v.activeClass
                  : `bg-zinc-900/60 text-zinc-300 border border-white/10 ${v.idleClass}`
              }`}
            >
              <span className="text-sm">{v.icon}</span>
              <span>{v.label}</span>
            </button>
          );
        })}
      </div>

      {/* 3. MAIN JOURNAL WRITING DESK (Vibrant Glowing Canvas) */}
      <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-b from-[#151128]/95 via-[#0F1322]/95 to-[#0A0D18]/95 backdrop-blur-2xl border border-purple-500/40 shadow-[0_0_40px_rgba(168,85,247,0.18)] space-y-5 relative transition-all duration-300 focus-within:border-purple-400 focus-within:shadow-[0_0_50px_rgba(168,85,247,0.3)]">
        {/* Title / Day Subject */}
        <div className="border-b border-purple-500/20 pb-3 flex items-center gap-2">
          <input
            type="text"
            value={dayTheme}
            onChange={(e) => setDayTheme(e.target.value)}
            onBlur={handleSaveAll}
            placeholder="Title or main thought today..."
            className="w-full bg-transparent text-xl md:text-2xl font-heading font-bold text-white placeholder:text-zinc-500 focus:outline-none rounded-lg px-1 py-0.5"
          />
        </div>

        {/* Freeform Writing Canvas */}
        <div className="relative">
          <textarea
            rows={12}
            value={journalText}
            onChange={(e) => setJournalText(e.target.value)}
            onBlur={handleSaveAll}
            placeholder="Brain dump, thoughts, school stuff, creative ideas, or whatever happened today..."
            className={`w-full bg-transparent text-sm md:text-base font-sans text-zinc-100 leading-relaxed placeholder:text-zinc-500 focus:outline-none rounded-lg p-1 resize-y min-h-[260px] transition-opacity duration-300 selection:bg-purple-500/30 ${
              isClearing ? 'opacity-0' : 'opacity-100'
            }`}
          />
        </div>

        {clearNotice && (
          <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-200 text-xs text-center animate-fadeIn font-sans font-medium">
            Entry cleared.
          </div>
        )}

        {/* Bottom Toolbar: Word count & Quick Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3.5 border-t border-purple-500/15 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20 font-bold">
              {wordCount} {wordCount === 1 ? 'word' : 'words'}
            </span>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <span className="text-cyan-300/80 hidden sm:inline font-sans">
              ~{readingTimeMin} min read
            </span>
            {saveStatus === 'saved' && (
              <span className="text-emerald-400 flex items-center gap-1 font-sans font-semibold">
                <Check size={12} /> Saved!
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleClearDraft}
              disabled={!journalText.trim() || isClearing}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-sans text-zinc-400 hover:text-rose-300 hover:bg-rose-500/10 border border-transparent hover:border-rose-500/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none"
              title="Clear entry"
            >
              <Trash2 size={12} />
              <span>Clear</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4. VIBRANT HIGHLIGHTS & TOMORROW'S GOAL BENTO */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Wins / Highlights (Emerald Glow) */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950/30 via-zinc-900/50 to-transparent backdrop-blur-xl border border-emerald-500/40 shadow-[0_0_25px_rgba(16,185,129,0.12)] space-y-3 transition-all focus-within:border-emerald-400 focus-within:shadow-[0_0_35px_rgba(16,185,129,0.25)]">
          <div className="flex items-center gap-2 text-xs font-heading font-bold text-emerald-300">
            <div className="w-6 h-6 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300">
              <Heart size={13} />
            </div>
            <span>Today&apos;s Win &amp; Highlights</span>
          </div>
          <input
            type="text"
            value={gratitudeSnippet}
            onChange={(e) => setGratitudeSnippet(e.target.value)}
            onBlur={handleSaveAll}
            placeholder="A cool win, good food, fun game, or great moment..."
            className="w-full bg-emerald-950/20 border border-emerald-500/30 rounded-xl px-3.5 py-2.5 text-xs font-sans text-emerald-100 placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-emerald-400 transition-colors"
          />
        </div>

        {/* Tomorrow's Top Priority (Cyan Glow) */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-950/30 via-zinc-900/50 to-transparent backdrop-blur-xl border border-cyan-500/40 shadow-[0_0_25px_rgba(6,182,212,0.12)] space-y-3 transition-all focus-within:border-cyan-400 focus-within:shadow-[0_0_35px_rgba(6,182,212,0.25)]">
          <div className="flex items-center gap-2 text-xs font-heading font-bold text-cyan-300">
            <div className="w-6 h-6 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
              <Target size={13} />
            </div>
            <span>Tomorrow&apos;s #1 Goal</span>
          </div>
          <input
            type="text"
            value={tomorrowGoal}
            onChange={(e) => setTomorrowGoal(e.target.value)}
            onBlur={handleSaveAll}
            placeholder="e.g. Ace the test, finish project, hit the gym..."
            className="w-full bg-cyan-950/20 border border-cyan-500/30 rounded-xl px-3.5 py-2.5 text-xs font-sans text-cyan-100 placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
          />
        </div>
      </div>

      {/* 5. FULL SCREEN ZEN FOCUS MODE OVERLAY */}
      {isZenMode && (
        <div className="fixed inset-0 z-50 bg-[#08090C] flex flex-col p-6 sm:p-10 animate-fadeIn">
          {/* Top Bar */}
          <div className="max-w-4xl w-full mx-auto flex items-center justify-between pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                Zen Mode • {formattedFullDate}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-zinc-500">
                {wordCount} words
              </span>
              <button
                type="button"
                onClick={() => setIsZenMode(false)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-white text-xs font-sans transition-all focus:outline-none focus:ring-1 focus:ring-white"
              >
                <Minimize2 size={13} />
                <span>Exit Zen (Esc)</span>
              </button>
            </div>
          </div>

          {/* Large Zen Canvas */}
          <div className="flex-1 max-w-4xl w-full mx-auto py-8 flex flex-col">
            <textarea
              autoFocus
              value={journalText}
              onChange={(e) => setJournalText(e.target.value)}
              placeholder="Write freely. Everything else has vanished..."
              className="flex-1 w-full bg-transparent border-0 font-sans text-lg sm:text-xl text-white placeholder:text-zinc-700 focus:outline-none focus:ring-0 resize-none leading-relaxed"
            />
          </div>

          {/* Bottom Bar */}
          <div className="max-w-4xl w-full mx-auto pt-4 border-t border-purple-500/20 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>Press Cmd+S to save</span>
            <button
              type="button"
              onClick={() => {
                handleSaveAll();
                setIsZenMode(false);
              }}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-sans text-xs font-bold shadow-[0_0_15px_rgba(168,85,247,0.4)] focus:outline-none focus:ring-1 focus:ring-purple-400"
            >
              Save &amp; Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
