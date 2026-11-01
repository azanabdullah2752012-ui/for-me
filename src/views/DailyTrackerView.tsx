import React, { useState, useEffect, useMemo } from 'react';
import {
  Save,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Check,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Heart,
  Sliders,
  Feather,
  Trash2,
  Maximize2,
  Minimize2,
  Copy,
  Palette,
  Volume2,
  VolumeX,
  Sparkles,
  Calendar,
  PenTool,
} from 'lucide-react';
import {
  useData,
  formatDateKey,
  getDefaultDailyPromise,
  getDefaultNightlyReview,
  getDefaultTrackers,
  getDisplayDate,
} from '../context/DataContext';
import { NightlyReviewCard } from '../components/daily-tracker/NightlyReviewCard';
import { TrackersGrid } from '../components/daily-tracker/TrackersGrid';
import { ScoringRulesModal } from '../components/daily-tracker/ScoringRulesModal';
import { Badge } from '../components/common/Badge';
import { sound } from '../audio/sound';

type PaperStyle = 'ruled-dark' | 'grid-dark' | 'ruled-parchment' | 'blank-dark';
type MoodState = 'Deep Focus' | 'Calm Flow' | 'Resolute' | 'Grounded' | 'Victorious' | 'Tired but Kept Standard';

export const DailyTrackerView: React.FC = () => {
  const {
    selectedDate,
    setSelectedDate,
    currentLog,
    updateDailyLog,
    saveDailyPromise,
    updateDailyPromiseStatus,
    saveNightlyReview,
    updateTrackers,
    trackerMetrics,
  } = useData();

  // Core journal state
  const [dayTheme, setDayTheme] = useState(currentLog.dayTheme || '');
  const [journalText, setJournalText] = useState(currentLog.dailyNotes || '');
  const [gratitudeSnippet, setGratitudeSnippet] = useState(
    currentLog.extendedReflections?.gratitude || ''
  );
  const [dayRating, setDayRating] = useState<number>(currentLog.ratingOutOfTen || 7);
  const [selectedMood, setSelectedMood] = useState<MoodState | null>(null);

  // Journal ergonomics & paper styles
  const [paperStyle, setPaperStyle] = useState<PaperStyle>('ruled-dark');
  const [isZenMode, setIsZenMode] = useState(false);
  const [soundFeedback, setSoundFeedback] = useState(true);
  const [copied, setCopied] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saved'>('idle');

  // Fade clear effect
  const [isClearing, setIsClearing] = useState(false);
  const [clearNotice, setClearNotice] = useState(false);

  // Optional collapsible sections
  const [isAdvancedTrackersOpen, setIsAdvancedTrackersOpen] = useState(false);
  const [isScoringModalOpen, setIsScoringModalOpen] = useState(false);

  // Sync inputs whenever date or data updates
  useEffect(() => {
    setDayTheme(currentLog.dayTheme || '');
    setJournalText(currentLog.dailyNotes || '');
    setGratitudeSnippet(currentLog.extendedReflections?.gratitude || '');
    setDayRating(currentLog.ratingOutOfTen || 7);
  }, [selectedDate, currentLog.dayTheme, currentLog.dailyNotes, currentLog.extendedReflections?.gratitude, currentLog.ratingOutOfTen]);

  // Date calculation
  const [y, m, d] = selectedDate.split('-').map(Number);
  const dateObj = new Date(y, m - 1, d);
  const formattedFullDate = dateObj.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const todayKey = formatDateKey(new Date());
  const isToday = selectedDate === todayKey;

  const handlePrevDay = () => {
    if (soundFeedback) sound.tick();
    const prev = new Date(y, m - 1, d - 1);
    setSelectedDate(formatDateKey(prev));
  };

  const handleNextDay = () => {
    if (soundFeedback) sound.tick();
    const next = new Date(y, m - 1, d + 1);
    setSelectedDate(formatDateKey(next));
  };

  const handleJumpToday = () => {
    if (soundFeedback) sound.tick();
    setSelectedDate(todayKey);
  };

  const promise = currentLog.dailyPromise || getDefaultDailyPromise();
  const nightlyReview = currentLog.nightlyReview || getDefaultNightlyReview();
  const trackers = currentLog.trackers || getDefaultTrackers();

  // Word & reading time metrics
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
      ratingOutOfTen: dayRating,
      extendedReflections: {
        ...existing,
        gratitude: gratitudeSnippet,
      },
    });

    if (soundFeedback) sound.complete();
    setSaveStatus('saved');
    setTimeout(() => setSaveStatus('idle'), 2200);
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
  }, [dayTheme, journalText, gratitudeSnippet, dayRating, isZenMode]);

  // Subtle keypress mechanical tick
  const handleKeyType = () => {
    if (soundFeedback && Math.random() > 0.7) {
      sound.tick();
    }
  };

  // Clear draft
  const handleClearDraft = () => {
    if (!journalText.trim() || isClearing) return;
    if (soundFeedback) sound.tick();
    setIsClearing(true);

    setTimeout(() => {
      setJournalText('');
      updateDailyLog({ dailyNotes: '' });
      setIsClearing(false);
      setClearNotice(true);
      if (soundFeedback) sound.complete();
      setTimeout(() => setClearNotice(false), 2600);
    }, 500);
  };

  // Copy Markdown Entry
  const handleCopyMarkdown = () => {
    const lines = [
      `# Daily Journal — ${selectedDate}`,
      dayTheme ? `## Intention: ${dayTheme}\n` : '',
      selectedMood ? `*Posture:* ${selectedMood}\n` : '',
      `## Notes & Contemplations`,
      journalText || '_No notes recorded._',
      '',
      gratitudeSnippet ? `## Gratitude & Highlights\n${gratitudeSnippet}\n` : '',
      `## Daily Commitment`,
      `- **Commitment:** ${promise.text || '—'}`,
      `- **Status:** ${promise.status === 'kept' ? 'Kept' : 'In Progress'}`,
      '',
      `---`,
      `*Recorded in FOR ME • ${wordCount} words*`,
    ].join('\n');

    navigator.clipboard.writeText(lines).then(() => {
      setCopied(true);
      if (soundFeedback) sound.tick();
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Quick template inserters
  const insertTemplate = (prefix: string) => {
    if (soundFeedback) sound.tick();
    setJournalText((prev) => {
      const spacing = prev.trim() ? '\n\n' : '';
      return `${prev}${spacing}### ${prefix}\n- `;
    });
  };

  // Paper styling class helper
  const getPaperClasses = () => {
    switch (paperStyle) {
      case 'ruled-dark':
        return 'paper-ruled-dark text-paper-ink';
      case 'grid-dark':
        return 'paper-grid-dark text-paper-ink';
      case 'ruled-parchment':
        return 'paper-ruled-parchment text-[#1F1E1B] placeholder-[#736E65]';
      case 'blank-dark':
      default:
        return 'bg-transparent text-paper-ink';
    }
  };

  const isParchment = paperStyle === 'ruled-parchment';

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-20 animate-fadeIn">
      {/* 1. EDITORIAL DOCUMENT MASTHEAD WITH INTUITIVE DATE NAVIGATION */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-accent/90 font-semibold block">
              ARCHIVAL RECORD • DAILY JOURNAL
            </span>
            {isToday && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-accent/15 text-accent border border-accent/30 font-medium">
                TODAY
              </span>
            )}
          </div>

          {/* Date Selector with Prev / Next */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevDay}
              className="p-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-paper-muted hover:text-paper-ink border border-white/[0.06] transition-all"
              title="Previous Day"
              aria-label="Previous Day"
            >
              <ChevronLeft size={16} />
            </button>

            <h1 className="text-xl md:text-2xl font-heading font-semibold text-paper-ink tracking-tight">
              {formattedFullDate}
            </h1>

            <button
              onClick={handleNextDay}
              className="p-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-paper-muted hover:text-paper-ink border border-white/[0.06] transition-all"
              title="Next Day"
              aria-label="Next Day"
            >
              <ChevronRight size={16} />
            </button>

            {!isToday && (
              <button
                onClick={handleJumpToday}
                className="text-xs font-mono text-accent hover:underline ml-1"
                title="Jump to Today"
              >
                Jump to Today
              </button>
            )}
          </div>
        </div>

        {/* Action Controls & Save */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Sound Toggle */}
          <button
            type="button"
            onClick={() => setSoundFeedback(!soundFeedback)}
            className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-paper-muted hover:text-paper-ink hover:border-white/20 transition-all"
            title={soundFeedback ? 'Audio feedback enabled' : 'Audio muted'}
          >
            {soundFeedback ? <Volume2 size={14} className="text-accent" /> : <VolumeX size={14} />}
          </button>

          {/* Zen Fullscreen Focus */}
          <button
            type="button"
            onClick={() => {
              if (soundFeedback) sound.tick();
              setIsZenMode(true);
            }}
            className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-paper-muted hover:text-paper-ink hover:border-white/20 transition-all flex items-center gap-1.5 text-xs font-sans"
            title="Distraction-Free Zen Focus Mode"
          >
            <Maximize2 size={14} />
            <span className="hidden sm:inline">Zen Mode</span>
          </button>

          {/* Copy Markdown */}
          <button
            type="button"
            onClick={handleCopyMarkdown}
            className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-paper-muted hover:text-paper-ink hover:border-white/20 transition-all flex items-center gap-1.5 text-xs font-sans"
            title="Copy Entry as Markdown"
          >
            {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
          </button>

          {/* Save Button */}
          <button
            type="button"
            onClick={handleSaveAll}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-sans font-medium text-white bg-accent hover:bg-accent-hover transition-all shadow-sm focus:outline-none focus:ring-1 focus:ring-accent"
            title="Save Entry (Cmd+S)"
          >
            {saveStatus === 'saved' ? <Check size={13} className="text-emerald-200" /> : <Save size={13} />}
            <span>{saveStatus === 'saved' ? 'Saved' : 'Save Entry'}</span>
          </button>
        </div>
      </div>

      {/* 2. JOURNAL CONTROLS: DAY RATING & PAPER STYLES */}
      <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.025] backdrop-blur-xl border border-white/[0.08] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Paper Surface Style */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[11px] font-mono text-paper-muted uppercase tracking-wider flex items-center gap-1 mr-1">
            <Palette size={13} className="text-accent" />
            Surface:
          </span>

          <button
            type="button"
            onClick={() => {
              if (soundFeedback) sound.tick();
              setPaperStyle('ruled-dark');
            }}
            className={`px-2.5 py-1 rounded-lg text-xs font-sans transition-all ${
              paperStyle === 'ruled-dark'
                ? 'bg-accent/20 text-accent font-semibold border border-accent/40'
                : 'text-paper-secondary hover:text-paper-ink hover:bg-white/[0.04]'
            }`}
          >
            Ruled Obsidian
          </button>

          <button
            type="button"
            onClick={() => {
              if (soundFeedback) sound.tick();
              setPaperStyle('grid-dark');
            }}
            className={`px-2.5 py-1 rounded-lg text-xs font-sans transition-all ${
              paperStyle === 'grid-dark'
                ? 'bg-accent/20 text-accent font-semibold border border-accent/40'
                : 'text-paper-secondary hover:text-paper-ink hover:bg-white/[0.04]'
            }`}
          >
            Grid Obsidian
          </button>

          <button
            type="button"
            onClick={() => {
              if (soundFeedback) sound.tick();
              setPaperStyle('ruled-parchment');
            }}
            className={`px-2.5 py-1 rounded-lg text-xs font-sans transition-all ${
              paperStyle === 'ruled-parchment'
                ? 'bg-[#EAE4D3] text-[#1F1E1B] font-semibold border border-[#D1C8B4]'
                : 'text-paper-secondary hover:text-paper-ink hover:bg-white/[0.04]'
            }`}
          >
            Cream Parchment
          </button>

          <button
            type="button"
            onClick={() => {
              if (soundFeedback) sound.tick();
              setPaperStyle('blank-dark');
            }}
            className={`px-2.5 py-1 rounded-lg text-xs font-sans transition-all ${
              paperStyle === 'blank-dark'
                ? 'bg-accent/20 text-accent font-semibold border border-accent/40'
                : 'text-paper-secondary hover:text-paper-ink hover:bg-white/[0.04]'
            }`}
          >
            Clean Canvas
          </button>
        </div>

        {/* Day Score (1-10) Rating Selector */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[11px] font-mono text-paper-muted uppercase mr-1">
            Score:
          </span>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => {
                if (soundFeedback) sound.tick();
                setDayRating(num);
                updateDailyLog({ ratingOutOfTen: num });
              }}
              className={`w-6 h-6 rounded-md text-[11px] font-mono font-medium transition-all ${
                dayRating === num
                  ? 'bg-accent text-white font-bold shadow-sm scale-110'
                  : 'bg-white/[0.03] text-paper-muted hover:text-paper-ink hover:bg-white/[0.08]'
              }`}
            >
              {num}
            </button>
          ))}
          <span className="text-[11px] font-mono text-paper-muted ml-0.5">/10</span>
        </div>
      </div>

      {/* 3. MENTAL POSTURE & EMOTIONAL TEMPERATURE PILLS */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-sans">
        <span className="text-paper-muted font-mono text-[11px] uppercase mr-1 whitespace-nowrap">
          Posture:
        </span>
        {(['Deep Focus', 'Calm Flow', 'Resolute', 'Grounded', 'Victorious', 'Tired but Kept Standard'] as MoodState[]).map((mood) => {
          const isSelected = selectedMood === mood;
          return (
            <button
              key={mood}
              type="button"
              onClick={() => {
                if (soundFeedback) sound.tick();
                setSelectedMood(isSelected ? null : mood);
              }}
              className={`px-3 py-1 rounded-xl transition-all whitespace-nowrap ${
                isSelected
                  ? 'bg-accent text-white font-semibold shadow-sm'
                  : 'bg-white/[0.03] text-paper-secondary hover:text-paper-ink border border-white/[0.06] hover:border-white/20'
              }`}
            >
              {mood}
            </button>
          );
        })}
      </div>

      {/* 4. MAIN JOURNAL WRITING DESK */}
      <div
        className={`rounded-2xl border transition-all duration-300 shadow-2xl relative overflow-hidden focus-within:border-accent/40 focus-within:ring-1 focus-within:ring-accent/30 ${
          isParchment
            ? 'bg-[#FAF8F2] border-[#E5DEC9]'
            : 'bg-white/[0.025] backdrop-blur-2xl border-white/[0.08]'
        }`}
      >
        {/* Top Header & Day Intention */}
        <div
          className={`p-5 sm:p-6 border-b flex flex-col gap-3 ${
            isParchment ? 'border-[#E5DEC9] bg-[#F4EFE2]' : 'border-white/[0.06] bg-white/[0.01]'
          }`}
        >
          <div className="flex items-center justify-between">
            <span
              className={`text-xs font-mono uppercase tracking-wider ${
                isParchment ? 'text-[#877F70]' : 'text-paper-muted'
              }`}
            >
              Primary Intention &amp; Focus:
            </span>

            {/* Quick Template Blocks */}
            <div className="flex items-center gap-1.5 text-xs font-sans">
              <button
                type="button"
                onClick={() => insertTemplate('Morning Intention')}
                className={`px-2 py-0.5 rounded-lg border text-[11px] transition-colors ${
                  isParchment
                    ? 'border-[#D9CFB8] text-[#544F46] hover:bg-[#EAE2D0]'
                    : 'border-white/[0.08] text-paper-muted hover:text-paper-ink hover:bg-white/[0.04]'
                }`}
              >
                + Morning
              </button>
              <button
                type="button"
                onClick={() => insertTemplate('Midday Check')}
                className={`px-2 py-0.5 rounded-lg border text-[11px] transition-colors ${
                  isParchment
                    ? 'border-[#D9CFB8] text-[#544F46] hover:bg-[#EAE2D0]'
                    : 'border-white/[0.08] text-paper-muted hover:text-paper-ink hover:bg-white/[0.04]'
                }`}
              >
                + Midday
              </button>
              <button
                type="button"
                onClick={() => insertTemplate('Evening Review')}
                className={`px-2 py-0.5 rounded-lg border text-[11px] transition-colors ${
                  isParchment
                    ? 'border-[#D9CFB8] text-[#544F46] hover:bg-[#EAE2D0]'
                    : 'border-white/[0.08] text-paper-muted hover:text-paper-ink hover:bg-white/[0.04]'
                }`}
              >
                + Evening
              </button>
            </div>
          </div>

          <input
            type="text"
            value={dayTheme}
            onChange={(e) => setDayTheme(e.target.value)}
            onBlur={handleSaveAll}
            placeholder="e.g. Deep focus on core architecture • Maintain equanimity through friction..."
            className={`w-full bg-transparent text-lg md:text-xl font-heading font-semibold placeholder:opacity-40 focus:outline-none focus:ring-1 focus:ring-white ${
              isParchment ? 'text-[#1F1E1B] placeholder-[#8C8474]' : 'text-paper-ink placeholder:text-paper-muted'
            }`}
          />
        </div>

        {/* Freeform Writing Canvas */}
        <div className="relative p-5 sm:p-6">
          <textarea
            rows={14}
            value={journalText}
            onChange={(e) => {
              setJournalText(e.target.value);
              handleKeyType();
            }}
            onBlur={handleSaveAll}
            placeholder="Write freely. What happened today? What was on your mind, what challenged you, or what made you pause? (Press Cmd+S to save)..."
            className={`w-full p-4 rounded-xl border border-transparent focus:border-white/40 font-serif text-sm md:text-base leading-[32px] resize-y min-h-[300px] focus:outline-none focus:ring-1 focus:ring-white transition-all ${getPaperClasses()} ${
              isClearing ? 'opacity-0' : 'opacity-100'
            }`}
          />
        </div>

        {clearNotice && (
          <div className="px-6 py-2 bg-rose-500/10 border-t border-rose-500/20 text-rose-300 text-xs text-center animate-fadeIn">
            Entry cleared.
          </div>
        )}

        {/* Bottom Toolbar: Word count, Read time, & Clear Action */}
        <div
          className={`flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 border-t text-xs font-mono ${
            isParchment
              ? 'border-[#E5DEC9] bg-[#F7F2E6] text-[#787163]'
              : 'border-white/[0.06] bg-white/[0.015] text-paper-muted'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="font-semibold text-accent">
              {wordCount} {wordCount === 1 ? 'word' : 'words'}
            </span>
            <span>•</span>
            <span>~{readingTimeMin} min read</span>
            {saveStatus === 'saved' && (
              <>
                <span>•</span>
                <span className="text-emerald-400 flex items-center gap-1 font-sans">
                  <Check size={12} /> Saved
                </span>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleClearDraft}
              disabled={!journalText.trim() || isClearing}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-sans text-paper-muted hover:text-rose-300 hover:bg-rose-500/10 border border-transparent hover:border-rose-500/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              title="Clear journal text"
            >
              <Trash2 size={12} />
              <span>Clear Text</span>
            </button>
          </div>
        </div>
      </div>

      {/* 5. DAILY REFLECTIONS: GRATITUDE & SINGLE COMMITMENT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Gratitude & Highlights */}
        <div className="p-5 rounded-2xl bg-white/[0.025] backdrop-blur-xl border border-white/[0.08] shadow-sm space-y-3 transition-all focus-within:border-accent/40">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-heading font-semibold text-paper-ink">
              <Heart size={14} className="text-accent" />
              <span>Gratitude &amp; Highlights</span>
            </div>
            <span className="text-[10px] font-mono text-paper-muted uppercase">Quiet Spark</span>
          </div>

          <input
            type="text"
            value={gratitudeSnippet}
            onChange={(e) => setGratitudeSnippet(e.target.value)}
            onBlur={handleSaveAll}
            placeholder="One quiet moment, person, or victory I am grateful for today..."
            className="w-full bg-white/[0.02] border border-white/[0.08] rounded-xl px-3.5 py-2.5 text-xs font-sans text-paper-ink placeholder:text-paper-muted/40 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-colors"
          />
        </div>

        {/* Single Daily Commitment */}
        <div className="p-5 rounded-2xl bg-white/[0.025] backdrop-blur-xl border border-white/[0.08] shadow-sm space-y-3 transition-all focus-within:border-accent/40">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-heading font-semibold text-paper-ink">
              <ShieldCheck size={14} className="text-accent" />
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
              className="flex-1 bg-white/[0.02] border border-white/[0.08] rounded-xl px-3.5 py-2.5 text-xs font-sans text-paper-ink placeholder:text-paper-muted/40 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-colors"
            />
            {promise.text.trim() && (
              <button
                type="button"
                onClick={() => {
                  if (soundFeedback) sound.tick();
                  const nextStatus = promise.status === 'kept' ? 'pending' : 'kept';
                  updateDailyPromiseStatus(nextStatus, undefined, selectedDate);
                }}
                className={`px-3 py-2.5 rounded-xl text-xs font-sans font-medium transition-colors shrink-0 focus:outline-none focus:ring-1 focus:ring-accent ${
                  promise.status === 'kept'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'bg-white/[0.04] text-paper-muted hover:text-white border border-white/[0.08]'
                }`}
                title="Toggle commitment status"
              >
                {promise.status === 'kept' ? '✓ Kept' : 'Mark Kept'}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 6. LIVING BIOMETRICS & NIGHTLY REVIEW (OPTIONAL DEEP SYSTEMS) */}
      <div className="pt-1">
        <button
          type="button"
          onClick={() => {
            if (soundFeedback) sound.tick();
            setIsAdvancedTrackersOpen(!isAdvancedTrackersOpen);
          }}
          className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.07] transition-all text-xs font-sans focus:outline-none focus:ring-1 focus:ring-accent"
        >
          <div className="flex items-center gap-2 text-paper-muted hover:text-paper-ink">
            <Sliders size={14} className="text-accent" />
            <span className="font-medium">Living Biometrics &amp; Evening Debrief (Optional)</span>
          </div>

          <div className="flex items-center gap-1.5 text-paper-faint">
            <span>{isAdvancedTrackersOpen ? 'Collapse' : 'Expand'}</span>
            {isAdvancedTrackersOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </div>
        </button>

        {isAdvancedTrackersOpen && (
          <div className="mt-4 space-y-6 p-6 rounded-2xl bg-cosmic-surface border border-white/[0.08] shadow-sm animate-fadeIn">
            {/* Nightly Review Card */}
            <div className="space-y-3">
              <h3 className="text-xs font-heading font-semibold text-paper-ink flex items-center gap-2">
                <Feather size={14} className="text-accent" />
                <span>Evening Debrief</span>
              </h3>
              <NightlyReviewCard
                review={nightlyReview}
                dailyPromise={promise}
                selectedDate={selectedDate}
                onSaveReview={(updated) => saveNightlyReview(updated, selectedDate)}
              />
            </div>

            {/* Biometrics Grid */}
            <div className="space-y-3 pt-4 border-t border-white/[0.06]">
              <h3 className="text-xs font-heading font-semibold text-paper-ink flex items-center gap-2">
                <Sliders size={14} className="text-accent" />
                <span>Habits &amp; Metrics Grid</span>
              </h3>
              <TrackersGrid
                trackers={trackers}
                onUpdateTrackers={(updater) => updateTrackers(updater, selectedDate)}
              />
            </div>
          </div>
        )}
      </div>

      {/* 7. ZEN DISTRACTION-FREE FULLSCREEN WRITING MODAL */}
      {isZenMode && (
        <div className="fixed inset-0 z-50 bg-[#0C0D0F]/95 backdrop-blur-2xl flex flex-col p-6 sm:p-12 animate-fadeIn">
          <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] max-w-4xl w-full mx-auto">
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-paper-secondary">
                ZEN DISTRACTION-FREE JOURNAL • {selectedDate}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-paper-muted">
                {wordCount} words
              </span>
              <button
                type="button"
                onClick={() => setIsZenMode(false)}
                className="p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-paper-ink transition-colors flex items-center gap-1.5 text-xs font-sans"
              >
                <Minimize2 size={14} />
                <span>Exit Zen (Esc)</span>
              </button>
            </div>
          </div>

          <div className="flex-1 max-w-4xl w-full mx-auto py-8 flex flex-col">
            <textarea
              autoFocus
              value={journalText}
              onChange={(e) => {
                setJournalText(e.target.value);
                handleKeyType();
              }}
              placeholder="Write freely. Everything else has vanished..."
              className="flex-1 w-full bg-transparent border-0 font-serif text-lg sm:text-xl text-paper-ink placeholder:text-paper-muted/30 focus:outline-none focus:ring-1 focus:ring-white resize-none leading-relaxed"
            />
          </div>

          <div className="max-w-4xl w-full mx-auto pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-paper-muted">
            <span>Press Cmd+S to save immediately</span>
            <button
              type="button"
              onClick={handleSaveAll}
              className="px-4 py-1.5 rounded-xl bg-white text-zinc-950 hover:bg-zinc-200 font-sans text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-white"
            >
              Save &amp; Close
            </button>
          </div>
        </div>
      )}

      {/* Scoring Rules Explanation Modal */}
      <ScoringRulesModal
        isOpen={isScoringModalOpen}
        onClose={() => setIsScoringModalOpen(false)}
        metrics={trackerMetrics}
        ratingOutOfTen={currentLog?.ratingOutOfTen || 0}
      />
    </div>
  );
};
