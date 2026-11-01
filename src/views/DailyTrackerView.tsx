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
  { label: 'Locked In', icon: '🔥' },
  { label: 'Focused', icon: '🎯' },
  { label: 'Energized', icon: '⚡' },
  { label: 'Chill', icon: '🌊' },
  { label: 'Creative', icon: '💡' },
  { label: 'Tired', icon: '😴' },
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
      {/* 1. CLEAN DOCUMENT MASTHEAD */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-zinc-400 font-semibold">
              Daily Notes &amp; Journal
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-heading font-semibold text-white tracking-tight flex items-baseline gap-3">
            <span>Journal</span>
            <span className="text-xs font-mono font-normal text-zinc-400">
              {formattedFullDate}
            </span>
          </h1>
        </div>

        {/* Action Controls: Zen Mode, Copy, Save */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-sans text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-all focus:outline-none focus:ring-1 focus:ring-white"
            title="Copy entry to clipboard"
          >
            {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              sound.tick();
              setIsZenMode(true);
            }}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-sans text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-all focus:outline-none focus:ring-1 focus:ring-white"
            title="Full Screen Zen Focus Mode (Esc to exit)"
          >
            <Maximize2 size={13} />
            <span className="hidden sm:inline">Zen Mode</span>
          </button>

          <button
            type="button"
            onClick={handleSaveAll}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-sans font-semibold text-zinc-950 bg-white hover:bg-zinc-200 transition-all shadow-md focus:outline-none focus:ring-1 focus:ring-white"
            title="Save Entry (Cmd+S)"
          >
            {saveStatus === 'saved' ? <Check size={14} className="text-zinc-950" /> : <Save size={14} className="text-zinc-950" />}
            <span>{saveStatus === 'saved' ? 'Saved' : 'Save'}</span>
          </button>
        </div>
      </div>

      {/* 2. TODAY'S VIBE CHECK */}
      <div className="flex flex-wrap items-center gap-2 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
        <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mr-2 flex items-center gap-1.5">
          <Sparkles size={12} className="text-zinc-400" />
          <span>Vibe:</span>
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
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-sans transition-all focus:outline-none focus:ring-1 focus:ring-white ${
                isSelected
                  ? 'bg-white text-zinc-950 font-medium shadow-sm'
                  : 'bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.06]'
              }`}
            >
              <span>{v.icon}</span>
              <span>{v.label}</span>
            </button>
          );
        })}
      </div>

      {/* 3. MAIN JOURNAL WRITING DESK (Distraction-Free) */}
      <div className="p-6 md:p-8 rounded-2xl bg-white/[0.025] backdrop-blur-2xl border border-white/[0.08] shadow-[0_16px_48px_rgba(0,0,0,0.5)] space-y-5 relative transition-all duration-300 focus-within:border-white/30 focus-within:ring-1 focus-within:ring-white/20">
        {/* Title / Day Subject */}
        <div className="border-b border-white/[0.06] pb-3">
          <input
            type="text"
            value={dayTheme}
            onChange={(e) => setDayTheme(e.target.value)}
            onBlur={handleSaveAll}
            placeholder="Title or main thought today..."
            className="w-full bg-transparent text-xl md:text-2xl font-heading font-semibold text-white placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-white rounded-lg px-1 py-0.5"
          />
        </div>

        {/* Freeform Writing Canvas */}
        <div className="relative">
          <textarea
            rows={12}
            value={journalText}
            onChange={(e) => setJournalText(e.target.value)}
            onBlur={handleSaveAll}
            placeholder="Brain dump, homework notes, ideas, how today went, or what's on your mind..."
            className={`w-full bg-transparent text-sm md:text-base font-sans text-zinc-200 leading-relaxed placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-white rounded-lg p-1 resize-y min-h-[260px] transition-opacity duration-300 ${
              isClearing ? 'opacity-0' : 'opacity-100'
            }`}
          />
        </div>

        {clearNotice && (
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-zinc-300 text-xs text-center animate-fadeIn">
            Entry cleared.
          </div>
        )}

        {/* Bottom Toolbar: Word count & Quick Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3.5 border-t border-white/[0.06] text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-3">
            <span>
              {wordCount} {wordCount === 1 ? 'word' : 'words'}
            </span>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <span className="text-zinc-400 hidden sm:inline font-sans">
              ~{readingTimeMin} min read
            </span>
            {saveStatus === 'saved' && (
              <span className="text-emerald-400 flex items-center gap-1 font-sans">
                <Check size={12} /> Saved
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleClearDraft}
              disabled={!journalText.trim() || isClearing}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-sans text-zinc-400 hover:text-rose-300 hover:bg-rose-500/10 border border-transparent hover:border-rose-500/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus:ring-1 focus:ring-rose-400"
              title="Clear entry"
            >
              <Trash2 size={12} />
              <span>Clear</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4. DAILY HIGHLIGHTS & TOMORROW'S GOAL */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Wins / Highlights */}
        <div className="p-5 rounded-2xl bg-white/[0.025] backdrop-blur-xl border border-white/[0.08] shadow-sm space-y-3 transition-all focus-within:border-white/30">
          <div className="flex items-center gap-2 text-xs font-heading font-semibold text-white">
            <Heart size={14} className="text-zinc-400" />
            <span>Today's Win &amp; Highlights</span>
          </div>
          <input
            type="text"
            value={gratitudeSnippet}
            onChange={(e) => setGratitudeSnippet(e.target.value)}
            onBlur={handleSaveAll}
            placeholder="One cool thing or win from today..."
            className="w-full bg-white/[0.02] border border-white/[0.08] rounded-xl px-3.5 py-2.5 text-xs font-sans text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-white transition-colors"
          />
        </div>

        {/* Tomorrow's Top Priority */}
        <div className="p-5 rounded-2xl bg-white/[0.025] backdrop-blur-xl border border-white/[0.08] shadow-sm space-y-3 transition-all focus-within:border-white/30">
          <div className="flex items-center gap-2 text-xs font-heading font-semibold text-white">
            <Target size={14} className="text-zinc-400" />
            <span>Tomorrow's #1 Goal</span>
          </div>
          <input
            type="text"
            value={tomorrowGoal}
            onChange={(e) => setTomorrowGoal(e.target.value)}
            onBlur={handleSaveAll}
            placeholder="e.g. Finish math test study block & French HW..."
            className="w-full bg-white/[0.02] border border-white/[0.08] rounded-xl px-3.5 py-2.5 text-xs font-sans text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-white transition-colors"
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
          <div className="max-w-4xl w-full mx-auto pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-zinc-500">
            <span>Press Cmd+S to save</span>
            <button
              type="button"
              onClick={() => {
                handleSaveAll();
                setIsZenMode(false);
              }}
              className="px-4 py-1.5 rounded-xl bg-white text-zinc-950 hover:bg-zinc-200 font-sans text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-white"
            >
              Save &amp; Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
