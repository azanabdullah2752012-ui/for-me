import React, { useState, useEffect } from 'react';
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
} from 'lucide-react';
import {
  useData,
  formatDateKey,
  getDefaultDailyPromise,
  getDefaultNightlyReview,
  getDefaultTrackers,
} from '../context/DataContext';
import { NightlyReviewCard } from '../components/daily-tracker/NightlyReviewCard';
import { TrackersGrid } from '../components/daily-tracker/TrackersGrid';
import { ScoringRulesModal } from '../components/daily-tracker/ScoringRulesModal';
import { Badge } from '../components/common/Badge';
import { sound } from '../audio/sound';

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
  }, [selectedDate, currentLog.dayTheme, currentLog.dailyNotes, currentLog.extendedReflections?.gratitude]);

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
    sound.tick();
    const prev = new Date(y, m - 1, d - 1);
    setSelectedDate(formatDateKey(prev));
  };

  const handleNextDay = () => {
    sound.tick();
    const next = new Date(y, m - 1, d + 1);
    setSelectedDate(formatDateKey(next));
  };

  const promise = currentLog.dailyPromise || getDefaultDailyPromise();
  const nightlyReview = currentLog.nightlyReview || getDefaultNightlyReview();
  const trackers = currentLog.trackers || getDefaultTrackers();

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
    }, 700);
  };

  const wordCount = journalText.trim() ? journalText.trim().split(/\s+/).length : 0;

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-16">
      {/* 1. EDITORIAL DATE HEADER & ACTIONS */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-3 border-b border-white/[0.08]">
        <div>
          <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-accent font-semibold block mb-1">
            Archival Record
          </span>
          <h1 className="text-2xl md:text-3xl font-heading font-semibold text-paper-ink tracking-tight flex items-baseline gap-3">
            <span>Daily Journal</span>
            <span className="text-xs font-mono font-normal text-paper-muted">
              {formattedFullDate}
            </span>
          </h1>
        </div>

        {/* Date Navigator Controls */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-white/[0.03] border border-white/[0.08] rounded-lg text-xs">
            <button
              type="button"
              onClick={handlePrevDay}
              className="p-1.5 text-paper-muted hover:text-paper-ink rounded-l-lg transition-colors"
              title="Previous Day"
            >
              <ChevronLeft size={14} />
            </button>
            <span className="px-2.5 py-1 font-mono font-medium text-xs text-paper-ink">
              {isToday ? 'Today' : dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </span>
            <button
              type="button"
              onClick={handleNextDay}
              className="p-1.5 text-paper-muted hover:text-paper-ink rounded-r-lg transition-colors"
              title="Next Day"
            >
              <ChevronRight size={14} />
            </button>
          </div>

          {!isToday && (
            <button
              type="button"
              onClick={() => setSelectedDate(todayKey)}
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-sans text-accent bg-accent/10 border border-accent/25 rounded-lg hover:bg-accent/20 transition-colors"
            >
              <RotateCcw size={11} />
              <span>Today</span>
            </button>
          )}

          <button
            type="button"
            onClick={handleSaveAll}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-sans font-medium text-white bg-accent hover:bg-accent-hover transition-all shadow-sm"
            title="Save Entry (Cmd+S)"
          >
            {saveStatus === 'saved' ? <Check size={13} className="text-emerald-200" /> : <Save size={13} />}
            <span>{saveStatus === 'saved' ? 'Saved' : 'Save'}</span>
          </button>
        </div>
      </div>

      {/* 2. MAIN JOURNAL WRITING DESK */}
      <div className="p-6 md:p-8 rounded-xl bg-cosmic-surface border border-white/[0.08] shadow-sm space-y-4 relative">
        {/* Day Intention / Title */}
        <div className="border-b border-white/[0.06] pb-3">
          <input
            type="text"
            value={dayTheme}
            onChange={(e) => setDayTheme(e.target.value)}
            onBlur={handleSaveAll}
            placeholder="Title or primary intention for today..."
            className="w-full bg-transparent text-lg md:text-xl font-heading font-medium text-paper-ink placeholder:text-paper-faint/60 focus:outline-none focus:ring-1 focus:ring-accent"
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
            className={`w-full bg-transparent text-sm md:text-base font-sans text-paper-ink leading-relaxed placeholder:text-paper-faint/50 focus:outline-none focus:ring-1 focus:ring-accent resize-y min-h-[240px] transition-opacity duration-300 ${
              isClearing ? 'opacity-0' : 'opacity-100'
            }`}
          />
        </div>

        {clearNotice && (
          <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.08] text-paper-secondary text-xs text-center">
            Entry cleared.
          </div>
        )}

        {/* Bottom Toolbar: Word count & Quick Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/[0.06] text-xs font-mono text-paper-muted">
          <div className="flex items-center gap-3">
            <span>
              {wordCount} {wordCount === 1 ? 'word' : 'words'}
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
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-sans text-paper-muted hover:text-paper-ink hover:bg-white/[0.04] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
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
        {/* Gratitude Spark */}
        <div className="p-5 rounded-xl bg-cosmic-surface border border-white/[0.07] space-y-2.5">
          <div className="flex items-center gap-2 text-xs font-heading font-semibold text-paper-ink">
            <Heart size={14} className="text-accent" />
            <span>Gratitude &amp; Highlights</span>
          </div>
          <input
            type="text"
            value={gratitudeSnippet}
            onChange={(e) => setGratitudeSnippet(e.target.value)}
            onBlur={handleSaveAll}
            placeholder="One quiet thing I am grateful for today..."
            className="w-full bg-white/[0.02] border border-white/[0.07] rounded-lg px-3 py-2 text-xs font-sans text-paper-ink placeholder:text-paper-faint/60 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
          />
        </div>

        {/* Daily Focus / Commitment */}
        <div className="p-5 rounded-xl bg-cosmic-surface border border-white/[0.07] space-y-2.5">
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
              className="flex-1 bg-white/[0.02] border border-white/[0.07] rounded-lg px-3 py-2 text-xs font-sans text-paper-ink placeholder:text-paper-faint/60 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
            />
            {promise.text.trim() && (
              <button
                type="button"
                onClick={() => {
                  sound.tick();
                  const nextStatus = promise.status === 'kept' ? 'pending' : 'kept';
                  updateDailyPromiseStatus(nextStatus, undefined, selectedDate);
                }}
                className={`px-3 py-2 rounded-lg text-xs font-sans font-medium transition-colors ${
                  promise.status === 'kept'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'bg-white/[0.04] text-paper-muted hover:text-white border border-white/[0.08]'
                }`}
                title="Toggle commitment kept"
              >
                {promise.status === 'kept' ? '✓ Kept' : 'Mark Kept'}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 4. OPTIONAL ADVANCED TRACKERS & NIGHTLY DEBRIEF */}
      <div className="pt-2">
        <button
          type="button"
          onClick={() => {
            sound.tick();
            setIsAdvancedTrackersOpen(!isAdvancedTrackersOpen);
          }}
          className="w-full flex items-center justify-between p-4 rounded-xl bg-cosmic-surface/60 hover:bg-cosmic-surface border border-white/[0.06] transition-all text-xs font-sans"
        >
          <div className="flex items-center gap-2 text-paper-muted hover:text-paper-ink">
            <Sliders size={14} className="text-accent" />
            <span className="font-medium">Living Biometrics &amp; Nightly Review (Optional)</span>
          </div>

          <div className="flex items-center gap-1.5 text-paper-faint">
            <span>{isAdvancedTrackersOpen ? 'Collapse' : 'Expand'}</span>
            {isAdvancedTrackersOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </div>
        </button>

        {isAdvancedTrackersOpen && (
          <div className="mt-4 space-y-6 p-6 rounded-xl bg-cosmic-surface border border-white/[0.08] shadow-sm">
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
