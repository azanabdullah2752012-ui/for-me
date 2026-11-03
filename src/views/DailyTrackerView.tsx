import React, { useState, useEffect, useMemo, useRef } from 'react';
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
  Clock,
  ChevronDown,
} from 'lucide-react';
import {
  useData,
  formatDateKey,
  getDefaultDailyPromise,
} from '../context/DataContext';
import { sound } from '../audio/sound';

const VIBES = [
  { label: 'Locked In', icon: '🔥' },
  { label: 'Deep Focus', icon: '🎯' },
  { label: 'Energized', icon: '⚡' },
  { label: 'Calm & Flow', icon: '🌊' },
  { label: 'Creative', icon: '💡' },
  { label: 'Recharging', icon: '🌙' },
];

export const DailyTrackerView: React.FC = () => {
  const {
    selectedDate,
    dailyLogs,
    updateDailyLog,
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
    currentLog.extendedReflections?.emotions || 'Deep Focus'
  );
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saved'>('idle');
  const [copied, setCopied] = useState(false);
  const [isZenMode, setIsZenMode] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Sync state when selectedDate changes
  useEffect(() => {
    setDayTheme(currentLog.dayTheme || '');
    setJournalText(currentLog.dailyNotes || '');
    setGratitudeSnippet(currentLog.extendedReflections?.gratitude || '');
    setTomorrowGoal(currentLog.extendedReflections?.decisions || '');
    setSelectedVibe(currentLog.extendedReflections?.emotions || 'Deep Focus');
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
      gratitudeSnippet ? `Today's Highlight: ${gratitudeSnippet}` : '',
      tomorrowGoal ? `Tomorrow's Focus: ${tomorrowGoal}` : '',
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
    if (!journalText.trim()) return;
    if (window.confirm('Clear your writing draft for today?')) {
      sound.tick();
      setJournalText('');
      updateDailyLog({ dailyNotes: '' });
    }
  };

  return (
    <div className="max-w-3xl mx-auto pb-24 select-none animate-fadeIn">
      {/* 1. EDITORIAL HEADER & ACTION BAR */}
      <div className="flex items-center justify-between pb-6 pt-2">
        <div className="space-y-1">
          <p className="text-xs font-mono tracking-wider text-zinc-400 uppercase">
            {formattedFullDate}
          </p>
        </div>

        {/* Quiet Minimalist Actions */}
        <div className="flex items-center gap-2">
          {saveStatus === 'saved' && (
            <span className="text-xs text-emerald-400 font-mono flex items-center gap-1 mr-1 animate-fadeIn">
              <Check size={13} />
              <span>Saved</span>
            </span>
          )}

          <button
            type="button"
            onClick={handleCopy}
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
            title="Copy entry text"
          >
            {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
          </button>

          <button
            type="button"
            onClick={() => {
              sound.tick();
              setIsZenMode(true);
            }}
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
            title="Zen Fullscreen Mode (Esc to exit)"
          >
            <Maximize2 size={15} />
          </button>

          <button
            type="button"
            onClick={handleSaveAll}
            className="ml-1 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-sans font-semibold text-white bg-purple-600 hover:bg-purple-500 transition-all shadow-sm"
            title="Save entry (Cmd+S)"
          >
            <Save size={13} />
            <span>Save</span>
          </button>
        </div>
      </div>

      {/* 2. SUBTLE VIBE SELECTOR PILLS */}
      <div className="flex flex-wrap items-center gap-1.5 pb-6">
        {VIBES.map((v) => {
          const isSelected = selectedVibe === v.label;
          return (
            <button
              key={v.label}
              type="button"
              onClick={() => {
                sound.tick();
                setSelectedVibe(v.label);
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
                  extendedReflections: {
                    ...existing,
                    emotions: v.label,
                  },
                });
              }}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-sans transition-all ${
                isSelected
                  ? 'bg-white/[0.12] text-white border border-white/[0.2] font-semibold shadow-sm'
                  : 'bg-white/[0.03] text-zinc-400 hover:text-zinc-200 border border-transparent hover:border-white/[0.06]'
              }`}
            >
              <span>{v.icon}</span>
              <span>{v.label}</span>
            </button>
          );
        })}
      </div>

      {/* 3. BORDERLESS INSPIRING WRITING CANVAS */}
      <div className="space-y-4">
        {/* Borderless Title */}
        <input
          type="text"
          value={dayTheme}
          onChange={(e) => setDayTheme(e.target.value)}
          onBlur={handleSaveAll}
          placeholder="Give today a title..."
          className="w-full bg-transparent text-3xl md:text-5xl font-heading font-extrabold text-white placeholder:text-zinc-700 focus:outline-none tracking-tight py-1"
        />

        {/* Freeform Writing Canvas */}
        <div className="pt-2">
          <textarea
            ref={textareaRef}
            rows={14}
            value={journalText}
            onChange={(e) => setJournalText(e.target.value)}
            onBlur={handleSaveAll}
            placeholder="Write freely. Brain dump, creative thoughts, school stuff, breakthroughs, or whatever is on your mind..."
            className="w-full bg-transparent text-base md:text-lg font-sans text-zinc-200 placeholder:text-zinc-700 leading-relaxed focus:outline-none resize-none min-h-[320px] selection:bg-purple-500/30"
          />
        </div>

        {/* Quiet Meta Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/[0.06] text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-3">
            <span>
              {wordCount} {wordCount === 1 ? 'word' : 'words'}
            </span>
            <span>•</span>
            <span>~{readingTimeMin} min read</span>
          </div>

          {journalText.trim() && (
            <button
              type="button"
              onClick={handleClearDraft}
              className="text-zinc-600 hover:text-rose-400 transition-colors flex items-center gap-1 text-[11px]"
            >
              <Trash2 size={11} />
              <span>Clear draft</span>
            </button>
          )}
        </div>
      </div>

      {/* 4. DAILY ANCHORS: TODAY'S HIGHLIGHT & TOMORROW'S GOAL */}
      <div className="mt-10 pt-8 border-t border-white/[0.06] space-y-4">
        <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">
          Daily Anchors
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Highlight Card */}
          <div className="p-4 rounded-2xl bg-[#0D101A]/80 border border-white/[0.07] hover:border-white/[0.12] transition-colors space-y-2">
            <div className="flex items-center gap-2 text-xs font-heading font-semibold text-emerald-300">
              <Heart size={13} className="text-emerald-400" />
              <span>Today&apos;s Highlight</span>
            </div>
            <input
              type="text"
              value={gratitudeSnippet}
              onChange={(e) => setGratitudeSnippet(e.target.value)}
              onBlur={handleSaveAll}
              placeholder="What made today good?"
              className="w-full bg-transparent text-xs font-sans text-zinc-200 placeholder:text-zinc-600 focus:outline-none"
            />
          </div>

          {/* Tomorrow's Goal Card */}
          <div className="p-4 rounded-2xl bg-[#0D101A]/80 border border-white/[0.07] hover:border-white/[0.12] transition-colors space-y-2">
            <div className="flex items-center gap-2 text-xs font-heading font-semibold text-cyan-300">
              <Target size={13} className="text-cyan-400" />
              <span>Tomorrow&apos;s #1 Focus</span>
            </div>
            <input
              type="text"
              value={tomorrowGoal}
              onChange={(e) => setTomorrowGoal(e.target.value)}
              onBlur={handleSaveAll}
              placeholder="Your single biggest target..."
              className="w-full bg-transparent text-xs font-sans text-zinc-200 placeholder:text-zinc-600 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* 5. FULL SCREEN ZEN FOCUS MODE */}
      {isZenMode && (
        <div className="fixed inset-0 z-50 bg-[#07090E] flex flex-col p-8 md:p-14 animate-fadeIn">
          {/* Minimal Zen Top Bar */}
          <div className="max-w-2xl w-full mx-auto flex items-center justify-between pb-6 border-b border-white/[0.06]">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
              {formattedFullDate}
            </span>

            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-zinc-500">
                {wordCount} words
              </span>
              <button
                type="button"
                onClick={() => setIsZenMode(false)}
                className="px-3 py-1 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-zinc-300 text-xs font-sans transition-all flex items-center gap-1.5"
              >
                <Minimize2 size={12} />
                <span>Exit Zen</span>
              </button>
            </div>
          </div>

          {/* Expansive Writing Space */}
          <div className="flex-1 max-w-2xl w-full mx-auto py-8 flex flex-col">
            <input
              type="text"
              value={dayTheme}
              onChange={(e) => setDayTheme(e.target.value)}
              placeholder="Title..."
              className="w-full bg-transparent text-3xl font-heading font-bold text-white placeholder:text-zinc-800 focus:outline-none pb-4"
            />
            <textarea
              autoFocus
              value={journalText}
              onChange={(e) => setJournalText(e.target.value)}
              placeholder="Type freely without distractions..."
              className="flex-1 w-full bg-transparent text-lg font-sans text-zinc-100 placeholder:text-zinc-800 focus:outline-none leading-relaxed resize-none"
            />
          </div>

          {/* Zen Bottom Bar */}
          <div className="max-w-2xl w-full mx-auto pt-4 flex items-center justify-between text-xs font-mono text-zinc-500">
            <span>Press Esc to exit • Cmd+S to save</span>
            <button
              type="button"
              onClick={() => {
                handleSaveAll();
                setIsZenMode(false);
              }}
              className="px-4 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-sans text-xs font-semibold shadow-sm"
            >
              Save &amp; Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
