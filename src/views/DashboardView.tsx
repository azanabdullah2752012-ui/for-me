import React, { useState } from 'react';
import {
  PenTool,
  ShieldCheck,
  Flame,
  Target,
  ArrowRight,
  Clock,
  Edit3,
  Check,
  ChevronDown,
  ChevronUp,
  Moon,
  Droplets,
  BookOpen,
  Plus,
} from 'lucide-react';
import { NavView } from '../types';
import { useData } from '../context/DataContext';
import { Badge } from '../components/common/Badge';
import { sound } from '../audio/sound';

interface DashboardViewProps {
  onNavigate: (view: NavView) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({ onNavigate }) => {
  const {
    selectedDate,
    currentLog,
    habits,
    toggleHabit,
    goals,
    settings,
    updateSettings,
    updateDailyPromiseStatus,
  } = useData();

  const [isEditingName, setIsEditingName] = useState(false);
  const [ownerName, setOwnerName] = useState(settings.journalOwnerName || 'Me');
  const [isEditingReminder, setIsEditingReminder] = useState(false);
  const [reminderText, setReminderText] = useState(
    settings.personalReminder || 'Remember, you are here for you.'
  );
  const [isHorizonExpanded, setIsHorizonExpanded] = useState(false);

  // Determine dynamic greeting based on current local hour
  const hour = new Date().getHours();
  const timeGreeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';

  // Format selected date
  const [y, m, d] = selectedDate.split('-').map(Number);
  const dateObj = new Date(y, m - 1, d);
  const formattedFullDate = dateObj.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  // Daily Promise Data
  const dailyPromise = currentLog?.dailyPromise;
  const hasPromise = Boolean(dailyPromise && dailyPromise.text);

  // Habit data for today
  const activeHabits = habits.filter((h) => !h.archived);
  const habitsDoneCount = activeHabits.filter(
    (h) => h.completions && h.completions[selectedDate]
  ).length;

  // Primary Goal
  const primaryGoal = goals.length > 0 ? goals[0] : null;

  // Reflection excerpt
  const reflectionExcerpt =
    currentLog?.dailyNotes ||
    currentLog?.nightlyReview?.highlights ||
    currentLog?.eveningDebrief?.lessonLearned ||
    currentLog?.morningPriming ||
    '';

  const handleSaveName = () => {
    updateSettings({ journalOwnerName: ownerName.trim() || 'Me' });
    setIsEditingName(false);
    sound.tick();
  };

  const handleSaveReminder = () => {
    updateSettings({ personalReminder: reminderText.trim() });
    setIsEditingReminder(false);
    sound.tick();
  };

  const handlePromiseStatusChange = (status: 'kept' | 'missed' | 'prevented') => {
    updateDailyPromiseStatus(status, { reason: 'Updated from dashboard' });
    if (status === 'kept') {
      sound.complete();
    } else {
      sound.tick();
    }
  };

  // Quick biometrics summaries
  const studyHours = currentLog?.trackers?.study?.hoursStudied || 0;
  const sleepHours = currentLog?.trackers?.sleep?.hours || currentLog?.sleepHours || 0;
  const waterGlasses = currentLog?.trackers?.waterAndMovement?.waterGlasses || currentLog?.waterGlasses || 0;

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-16 animate-fadeIn">
      {/* 1. ARCHIVAL GREETING MASTHEAD */}
      <div className="relative rounded-2xl p-6 md:p-8 bg-cosmic-surface/85 backdrop-blur-xl border border-white/[0.08] shadow-sm space-y-4 overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-accent font-semibold flex items-center gap-2">
            <span>{formattedFullDate}</span>
          </div>

          <span className="text-[11px] font-mono text-paper-muted">
            Private Life Ledger
          </span>
        </div>

        {/* Personalized Name & Core Reminder */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 pt-1">
          <div className="space-y-1.5 max-w-xl">
            <div className="flex items-baseline gap-2">
              <h1 className="text-2xl md:text-3xl font-heading font-semibold text-paper-ink tracking-tight">
                {timeGreeting},
              </h1>
              {isEditingName ? (
                <div className="inline-flex items-center gap-2">
                  <input
                    type="text"
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSaveName()}
                    className="border-b border-accent bg-transparent text-2xl font-heading font-semibold text-accent px-1 focus:outline-none focus:ring-1 focus:ring-accent"
                    autoFocus
                  />
                  <button
                    onClick={handleSaveName}
                    className="text-xs px-2.5 py-1 rounded bg-accent text-white font-sans font-medium"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <span
                  onClick={() => setIsEditingName(true)}
                  className="group inline-flex items-center gap-1.5 cursor-pointer text-2xl md:text-3xl font-heading font-semibold text-paper-ink hover:text-accent transition-colors"
                  title="Click to personalize name"
                >
                  <span>{settings.journalOwnerName || 'Friend'}.</span>
                  <Edit3
                    size={13}
                    className="opacity-0 group-hover:opacity-70 text-paper-muted transition-opacity"
                  />
                </span>
              )}
            </div>

            {/* Editable Core Reminder */}
            <div>
              {isEditingReminder ? (
                <div className="flex items-center gap-2 max-w-lg">
                  <input
                    type="text"
                    value={reminderText}
                    onChange={(e) => setReminderText(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSaveReminder()}
                    className="w-full text-xs font-sans border-b border-accent bg-transparent text-paper-secondary py-1 focus:outline-none focus:ring-1 focus:ring-accent"
                    autoFocus
                  />
                  <button
                    onClick={handleSaveReminder}
                    className="text-[11px] px-2 py-0.5 rounded bg-accent text-white font-sans shrink-0"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <p
                  onClick={() => setIsEditingReminder(true)}
                  className="group inline-flex items-center gap-1.5 cursor-pointer text-sm font-sans text-paper-secondary hover:text-paper-ink transition-colors italic"
                  title="Click to edit personal reminder"
                >
                  <span>&ldquo;{settings.personalReminder || 'Remember, you are here for you.'}&rdquo;</span>
                  <Edit3
                    size={11}
                    className="opacity-0 group-hover:opacity-70 text-paper-muted transition-opacity"
                  />
                </p>
              )}
            </div>
          </div>

          {/* Quick Action */}
          <div className="shrink-0">
            <button
              onClick={() => {
                sound.tick();
                onNavigate('daily-tracker');
              }}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-accent hover:bg-accent-hover text-white font-sans font-medium text-xs shadow-sm transition-all group"
            >
              <PenTool size={13} />
              <span>Open Journal</span>
              <ArrowRight
                size={12}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>

      {/* 2. THE SINGLE DAILY COMMITMENT */}
      <section className="space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck size={15} className="text-accent" />
            <h2 className="text-[11px] font-mono uppercase tracking-[0.18em] text-accent font-semibold">
              Today&apos;s Single Commitment
            </h2>
          </div>
          {hasPromise && (
            <Badge
              variant={
                dailyPromise?.status === 'kept'
                  ? 'success'
                  : dailyPromise?.status === 'missed'
                  ? 'danger'
                  : dailyPromise?.status === 'prevented'
                  ? 'warning'
                  : 'neutral'
              }
            >
              {dailyPromise?.status === 'kept'
                ? 'Kept'
                : dailyPromise?.status === 'missed'
                ? 'Missed'
                : dailyPromise?.status === 'prevented'
                ? 'Prevented'
                : 'In Progress'}
            </Badge>
          )}
        </div>

        {hasPromise ? (
          <div className="p-5 md:p-6 rounded-2xl bg-cosmic-surface/85 backdrop-blur-xl border border-white/[0.08] shadow-sm space-y-3.5">
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono text-paper-muted uppercase tracking-wider block">
                Primary Standard
              </span>
              <p className="text-lg md:text-xl font-heading font-medium text-paper-ink leading-snug">
                &ldquo;{dailyPromise?.text}&rdquo;
              </p>
              {dailyPromise?.measurableFinishLine && (
                <p className="text-xs font-sans text-paper-secondary">
                  <strong className="text-paper-ink font-medium">Standard: </strong>
                  {dailyPromise.measurableFinishLine} (by {dailyPromise.deadline || 'end of day'})
                </p>
              )}
            </div>

            {/* Quick Outcome Controls */}
            <div className="pt-3 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-[11px] font-sans text-paper-muted">
                Audit commitment:
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handlePromiseStatusChange('kept')}
                  className={`px-3 py-1 rounded text-xs font-sans font-medium transition-all ${
                    dailyPromise?.status === 'kept'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : 'bg-white/[0.04] text-paper-secondary hover:text-paper-ink border border-white/[0.07]'
                  }`}
                >
                  Mark Kept
                </button>

                <button
                  type="button"
                  onClick={() => handlePromiseStatusChange('missed')}
                  className={`px-3 py-1 rounded text-xs font-sans font-medium transition-all ${
                    dailyPromise?.status === 'missed'
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                      : 'bg-white/[0.04] text-paper-secondary hover:text-paper-ink border border-white/[0.07]'
                  }`}
                >
                  Missed
                </button>

                <button
                  type="button"
                  onClick={() => handlePromiseStatusChange('prevented')}
                  className={`px-3 py-1 rounded text-xs font-sans font-medium transition-all ${
                    dailyPromise?.status === 'prevented'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      : 'bg-white/[0.04] text-paper-secondary hover:text-paper-ink border border-white/[0.07]'
                  }`}
                >
                  Prevented
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-6 rounded-xl bg-cosmic-surface border border-dashed border-white/[0.1] text-center space-y-2.5">
            <ShieldCheck size={24} className="mx-auto text-paper-muted" />
            <div className="space-y-0.5">
              <h3 className="text-sm font-heading font-medium text-paper-ink">
                No Commitment Set for Today
              </h3>
              <p className="text-xs font-sans text-paper-muted max-w-sm mx-auto">
                Set one clear non-negotiable standard for today.
              </p>
            </div>
            <button
              onClick={() => {
                sound.tick();
                onNavigate('daily-tracker');
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent/15 hover:bg-accent/25 text-accent border border-accent/30 font-sans text-xs font-medium transition-colors"
            >
              <Plus size={13} />
              <span>Define Today&apos;s Focus</span>
            </button>
          </div>
        )}
      </section>

      {/* 3. DAILY HABITS & DISCIPLINES */}
      <section className="space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame size={15} className="text-accent" />
            <h2 className="text-[11px] font-mono uppercase tracking-[0.18em] text-accent font-semibold">
              Daily Rhythms
            </h2>
          </div>
          <span className="text-xs font-mono text-paper-muted">
            {habitsDoneCount} / {activeHabits.length} completed
          </span>
        </div>

        {activeHabits.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
            {activeHabits.map((habit) => {
              const isDone = Boolean(habit.completions && habit.completions[selectedDate]);
              return (
                <div
                  key={habit.id}
                  onClick={() => {
                    sound.tick();
                    toggleHabit(habit.id, selectedDate);
                  }}
                  className={`group p-3.5 rounded-lg border transition-all cursor-pointer select-none flex items-center justify-between ${
                    isDone
                      ? 'bg-emerald-500/10 border-emerald-500/25 text-paper-ink'
                      : 'bg-cosmic-surface hover:bg-white/[0.04] border-white/[0.07] text-paper-secondary hover:text-paper-ink'
                  }`}
                >
                  <div className="space-y-0.5 truncate pr-2">
                    <p className={`text-xs font-sans font-medium truncate ${isDone ? 'line-through text-paper-muted' : ''}`}>
                      {habit.title}
                    </p>
                    <span className="text-[10px] font-mono text-paper-muted">
                      {habit.streak || 0}d streak
                    </span>
                  </div>

                  <div
                    className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border transition-colors ${
                      isDone
                        ? 'bg-emerald-500 border-emerald-400 text-white'
                        : 'border-white/[0.2] group-hover:border-accent'
                    }`}
                  >
                    {isDone && <Check size={11} strokeWidth={3} />}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-4 rounded-lg bg-cosmic-surface border border-white/[0.06] text-center text-xs text-paper-muted">
            No habits active. Add habits in the Habits ledger.
          </div>
        )}
      </section>

      {/* 4. JOURNAL RECORD PREVIEW */}
      <section className="space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen size={15} className="text-accent" />
            <h2 className="text-[11px] font-mono uppercase tracking-[0.18em] text-accent font-semibold">
              Today&apos;s Journal
            </h2>
          </div>
          <button
            onClick={() => onNavigate('daily-tracker')}
            className="text-xs font-sans text-accent hover:underline inline-flex items-center gap-1"
          >
            <span>Open Journal</span>
            <ArrowRight size={12} />
          </button>
        </div>

        <div
          onClick={() => onNavigate('daily-tracker')}
          className="group p-5 md:p-6 rounded-2xl bg-cosmic-surface/85 hover:bg-cosmic-surface backdrop-blur-xl border border-white/[0.08] hover:border-accent/40 shadow-sm transition-all cursor-pointer space-y-2.5"
        >
          {reflectionExcerpt ? (
            <div className="space-y-1">
              <span className="text-[9px] font-mono uppercase tracking-widest text-paper-muted">
                Excerpts &amp; Notes
              </span>
              <p className="text-sm font-sans text-paper-ink leading-relaxed line-clamp-3 italic">
                &ldquo;{reflectionExcerpt}&rdquo;
              </p>
            </div>
          ) : (
            <div className="space-y-0.5">
              <p className="text-sm font-heading font-medium text-paper-ink">
                No entry recorded yet for today.
              </p>
              <p className="text-xs font-sans text-paper-muted">
                Capture what challenged you, what made you pause, or what you learned.
              </p>
            </div>
          )}

          <div className="pt-2 flex items-center justify-between text-xs text-paper-muted border-t border-white/[0.05]">
            <span className="text-[11px] font-sans">
              Private offline record
            </span>
            <span className="text-accent group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
              <span>Write</span>
              <ArrowRight size={12} />
            </span>
          </div>
        </div>
      </section>

      {/* 5. METRICS GLANCE (FOCUS, REST, HYDRATION) */}
      <section className="space-y-2.5">
        <button
          onClick={() => setIsHorizonExpanded(!isHorizonExpanded)}
          className="w-full flex items-center justify-between p-3.5 rounded-lg bg-cosmic-surface hover:bg-white/[0.04] border border-white/[0.06] transition-colors text-xs font-sans text-paper-secondary"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-semibold">
              Ledger Metrics
            </span>
            <span className="text-paper-muted">•</span>
            <span className="text-paper-muted font-mono text-[11px]">
              Focus: {studyHours}h | Rest: {sleepHours}h | Water: {waterGlasses} glasses
            </span>
          </div>

          <div className="flex items-center gap-1 text-paper-muted">
            <span>{isHorizonExpanded ? 'Collapse' : 'Details'}</span>
            {isHorizonExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
          </div>
        </button>

        {isHorizonExpanded && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 p-3.5 rounded-lg bg-cosmic-surface border border-white/[0.06]">
            {/* Study Glance */}
            <div className="p-3 rounded bg-white/[0.02] border border-white/[0.05] space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-accent">
                <Clock size={13} />
                <span className="font-medium font-sans">Focus Time</span>
              </div>
              <p className="text-lg font-mono font-semibold text-paper-ink">
                {studyHours} <span className="text-xs font-sans text-paper-muted">hours</span>
              </p>
              <button
                onClick={() => onNavigate('studies')}
                className="text-[11px] text-accent hover:underline block pt-0.5 font-sans"
              >
                Focus Studio →
              </button>
            </div>

            {/* Sleep Glance */}
            <div className="p-3 rounded bg-white/[0.02] border border-white/[0.05] space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-accent">
                <Moon size={13} />
                <span className="font-medium font-sans">Rest</span>
              </div>
              <p className="text-lg font-mono font-semibold text-paper-ink">
                {sleepHours} <span className="text-xs font-sans text-paper-muted">hours</span>
              </p>
              <button
                onClick={() => onNavigate('health')}
                className="text-[11px] text-accent hover:underline block pt-0.5 font-sans"
              >
                Health Ledger →
              </button>
            </div>

            {/* Hydration */}
            <div className="p-3 rounded bg-white/[0.02] border border-white/[0.05] space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-accent">
                <Droplets size={13} />
                <span className="font-medium font-sans">Water</span>
              </div>
              <p className="text-lg font-mono font-semibold text-paper-ink">
                {waterGlasses} <span className="text-xs font-sans text-paper-muted">glasses</span>
              </p>
              <button
                onClick={() => onNavigate('health')}
                className="text-[11px] text-accent hover:underline block pt-0.5 font-sans"
              >
                Manage Trackers →
              </button>
            </div>
          </div>
        )}
      </section>

      {/* 6. PRIMARY HORIZON GOAL */}
      {primaryGoal && (
        <div className="p-4 rounded-xl bg-cosmic-surface border border-white/[0.07] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 truncate">
            <div className="w-8 h-8 rounded-lg bg-accent/15 border border-accent/25 flex items-center justify-center text-accent shrink-0">
              <Target size={16} />
            </div>
            <div className="space-y-0.5 truncate">
              <span className="text-[10px] font-mono uppercase tracking-wider text-accent block">
                Primary Horizon
              </span>
              <p className="text-sm font-sans font-medium text-paper-ink truncate">
                {primaryGoal.title}
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('goals')}
            className="text-xs font-sans text-accent hover:underline shrink-0"
          >
            All Goals →
          </button>
        </div>
      )}
    </div>
  );
};
