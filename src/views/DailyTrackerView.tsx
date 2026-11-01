import React, { useState, useEffect, useMemo } from 'react';
import {
  Save,
  Check,
  Heart,
  ShieldCheck,
  Sliders,
  ChevronDown,
  ChevronUp,
  Trash2,
} from 'lucide-react';
import {
  useData,
  formatDateKey,
  getDefaultDailyPromise,
  getDefaultNightlyReview,
} from '../context/DataContext';
import { NightlyReviewCard } from '../components/daily-tracker/NightlyReviewCard';
import { Badge } from '../components/common/Badge';
import { sound } from '../audio/sound';

export const DailyTrackerView: React.FC = () => {
  const {
    selectedDate,
    dailyLogs,
    updateDailyLog,
    saveDailyPromise,
    updateDailyPromiseStatus,
    saveNightlyReview,
  } = useData();

  const currentLog = dailyLogs[selectedDate] || {};

  const [dayTheme, setDayTheme] = useState(currentLog.dayTheme || '');
  const [journalText, setJournalText] = useState(currentLog.dailyNotes || '');
  const [gratitudeSnippet, setGratitudeSnippet] = useState(
    currentLog.extendedReflections?.gratitude || ''
  );
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saved'>('idle');
  const [isClearing, setIsClearing] = useState(false);
  const [clearNotice, setClearNotice] = useState(false);
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);

  // Sync state when selectedDate changes
  useEffect(() => {
    setDayTheme(currentLog.dayTheme || '');
    setJournalText(currentLog.dailyNotes || '');
    setGratitudeSnippet(currentLog.extendedReflections?.gratitude || '');
  }, [selectedDate, currentLog.dayTheme, currentLog.dailyNotes, currentLog.extendedReflections?.gratitude]);

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
  const nightlyReview = currentLog.nightlyReview || getDefaultNightlyReview();

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
      },
    });

    sound.complete();
    setSaveStatus('saved');
    setTimeout(() => setSaveStatus('idle'), 2200);
  };

  // Keyboard shortcut Ctrl+S / Cmd+S to save
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        handleSaveAll();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [dayTheme, journalText, gratitudeSnippet]);

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
      <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
        <div>
          <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-zinc-400 font-semibold block mb-1">
            Archival Record
          </span>
          <h1 className="text-2xl md:text-3xl font-heading font-semibold text-white tracking-tight flex items-baseline gap-3">
            <span>Daily Journal</span>
            <span className="text-xs font-mono font-normal text-zinc-400">
              {formattedFullDate}
            </span>
          </h1>
        </div>

        {/* Prominent Solid White Save Button */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleSaveAll}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-sans font-semibold text-zinc-950 bg-white hover:bg-zinc-200 transition-all shadow-md focus:outline-none focus:ring-1 focus:ring-white"
            title="Save Entry (Cmd+S)"
          >
            {saveStatus === 'saved' ? <Check size={14} className="text-zinc-950" /> : <Save size={14} className="text-zinc-950" />}
            <span>{saveStatus === 'saved' ? 'Saved' : 'Save Entry'}</span>
          </button>
        </div>
      </div>

      {/* 2. MAIN JOURNAL WRITING DESK (Distraction-Free) */}
      <div className="p-6 md:p-8 rounded-2xl bg-white/[0.025] backdrop-blur-2xl border border-white/[0.08] shadow-[0_16px_48px_rgba(0,0,0,0.5)] space-y-5 relative transition-all duration-300 focus-within:border-white/30 focus-within:ring-1 focus-within:ring-white/20">
        {/* Title / Day Intention */}
        <div className="border-b border-white/[0.06] pb-3">
          <input
            type="text"
            value={dayTheme}
            onChange={(e) => setDayTheme(e.target.value)}
            onBlur={handleSaveAll}
            placeholder="Title or primary intention for today..."
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
            placeholder="Write freely. What happened today? What is on your mind, what challenged you, or what made you pause?..."
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
              <span>Clear Entry</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. DAILY REFLECTIONS (Gratitude & Focus) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Gratitude Box */}
        <div className="p-5 rounded-2xl bg-white/[0.025] backdrop-blur-xl border border-white/[0.08] shadow-sm space-y-3 transition-all focus-within:border-white/30">
          <div className="flex items-center gap-2 text-xs font-heading font-semibold text-white">
            <Heart size={14} className="text-zinc-400" />
            <span>Gratitude &amp; Highlights</span>
          </div>
          <input
            type="text"
            value={gratitudeSnippet}
            onChange={(e) => setGratitudeSnippet(e.target.value)}
            onBlur={handleSaveAll}
            placeholder="One quiet thing I am grateful for today..."
            className="w-full bg-white/[0.02] border border-white/[0.08] rounded-xl px-3.5 py-2.5 text-xs font-sans text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-white transition-colors"
          />
        </div>

        {/* Daily Focus / Commitment Box */}
        <div className="p-5 rounded-2xl bg-white/[0.025] backdrop-blur-xl border border-white/[0.08] shadow-sm space-y-3 transition-all focus-within:border-white/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-heading font-semibold text-white">
              <ShieldCheck size={14} className="text-zinc-400" />
              <span>Single Daily Commitment</span>
            </div>
            <Badge
              variant={
                promise.status === 'kept'
                  ? 'success'
                  : promise.status === 'missed'
                  ? 'danger'
                  : 'neutral'
              }
            >
              {promise.status === 'kept' ? 'Kept' : promise.status === 'missed' ? 'Missed' : 'In Progress'}
            </Badge>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              value={promise.text}
              onChange={(e) => saveDailyPromise({ ...promise, text: e.target.value }, selectedDate)}
              placeholder="e.g. Finish the project outline before 18:00..."
              className="flex-1 bg-white/[0.02] border border-white/[0.08] rounded-xl px-3.5 py-2.5 text-xs font-sans text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-white transition-colors"
            />
            {promise.text.trim() && (
              <button
                type="button"
                onClick={() => {
                  sound.tick();
                  const nextStatus = promise.status === 'kept' ? 'pending' : 'kept';
                  updateDailyPromiseStatus(nextStatus, undefined, selectedDate);
                }}
                className={`px-3 py-2.5 rounded-xl text-xs font-sans font-medium transition-colors shrink-0 focus:outline-none focus:ring-1 focus:ring-white ${
                  promise.status === 'kept'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'bg-white/[0.06] text-zinc-300 hover:text-white border border-white/[0.1]'
                }`}
                title="Toggle commitment status"
              >
                {promise.status === 'kept' ? '✓ Kept' : 'Mark Kept'}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 4. OPTIONAL EVENING REVIEW & LIVING BIOMETRICS */}
      <div className="pt-2">
        <button
          type="button"
          onClick={() => {
            sound.tick();
            setIsAdvancedOpen(!isAdvancedOpen);
          }}
          className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.07] transition-all text-xs font-sans focus:outline-none focus:ring-1 focus:ring-white"
        >
          <div className="flex items-center gap-2 text-zinc-400 hover:text-white">
            <Sliders size={14} className="text-zinc-400" />
            <span className="font-medium">Living Biometrics &amp; Evening Debrief (Optional)</span>
          </div>

          <div className="flex items-center gap-1.5 text-zinc-500">
            <span>{isAdvancedOpen ? 'Collapse' : 'Expand'}</span>
            {isAdvancedOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </div>
        </button>

        {isAdvancedOpen && (
          <div className="mt-4 space-y-6 p-6 rounded-2xl bg-white/[0.025] border border-white/[0.08] shadow-sm animate-fadeIn">
            {/* Evening Review Component */}
            <NightlyReviewCard
              review={nightlyReview}
              dailyPromise={promise}
              selectedDate={selectedDate}
              onSaveReview={(updated) => saveNightlyReview(updated, selectedDate)}
            />
          </div>
        )}
      </div>
    </div>
  );
};
