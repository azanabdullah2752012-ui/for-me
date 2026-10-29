import React, { useState } from 'react';
import {
  PenTool,
  ShieldCheck,
  Flame,
  Target,
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles,
  Edit3,
  Calendar,
  Check,
  ChevronDown,
  ChevronUp,
  Moon,
  Droplets,
  BookOpen,
  Plus,
} from 'lucide-react';
import { NavView } from '../types';
import { useData, formatDateKey } from '../context/DataContext';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
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
    trackerMetrics,
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
    updateDailyPromiseStatus(status, { reason: 'Updated from sanctuary dashboard' });
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
    <div className="space-y-8 max-w-4xl mx-auto pb-12 animate-fadeIn">
      {/* 1. TOP CELESTIAL GREETING & PERSONAL MANIFESTO BEACON */}
      <div className="relative rounded-2xl p-6 md:p-8 bg-cosmic-surface/65 backdrop-blur-xl border border-white/[0.08] shadow-journal space-y-4 overflow-hidden">
        {/* Directional Starlight Ambient Bloom */}
        <div 
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none opacity-20 bg-gradient-to-br from-violet-500 to-indigo-600 blur-3xl"
          aria-hidden="true"
        />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-4">
          <div className="text-xs font-sans uppercase tracking-[0.2em] text-starlight-lavender font-semibold flex items-center gap-2">
            <Sparkles size={14} className="text-accent" />
            <span>{formattedFullDate}</span>
          </div>

          <span className="text-[11px] font-sans text-paper-muted">
            Private Cosmic Sanctuary
          </span>
        </div>

        {/* Personalized Name & Core Reminder */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-1">
          <div className="space-y-1.5 max-w-xl">
            <div className="flex items-center gap-2.5">
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
                    className="border-b border-accent bg-transparent text-2xl font-heading font-semibold text-starlight-lavender px-1 focus:outline-none"
                    autoFocus
                  />
                  <button
                    onClick={handleSaveName}
                    className="text-xs px-2.5 py-1 rounded-lg bg-accent text-white font-sans font-medium"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <span
                  onClick={() => setIsEditingName(true)}
                  className="group inline-flex items-center gap-1.5 cursor-pointer text-2xl md:text-3xl font-heading font-semibold text-starlight-lavender hover:text-white transition-colors"
                  title="Click to personalize name"
                >
                  <span>{settings.journalOwnerName || 'Friend'}.</span>
                  <Edit3
                    size={14}
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
                    className="w-full text-xs font-sans border-b border-accent bg-transparent text-paper-secondary py-1 focus:outline-none"
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
                    size={12}
                    className="opacity-0 group-hover:opacity-70 text-paper-muted transition-opacity"
                  />
                </p>
              )}
            </div>
          </div>

          {/* Quick Sanctuary Action */}
          <div className="shrink-0">
            <button
              onClick={() => {
                sound.tick();
                onNavigate('daily-tracker');
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-xl bg-accent hover:bg-accent-hover text-white font-sans font-medium text-xs shadow-cosmic-glow transition-all group"
            >
              <PenTool size={14} />
              <span>Enter Journal Chamber</span>
              <ArrowRight
                size={13}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>

      {/* 2. THE SACRED PROMISE: THE SINGLE NON-NEGOTIABLE FINISH LINE */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-starlight-lavender" />
            <h2 className="text-xs font-sans uppercase tracking-[0.16em] text-starlight-lavender font-semibold">
              Today&apos;s Sacred Promise
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
                ? 'Kept with Honor'
                : dailyPromise?.status === 'missed'
                ? 'Missed Commitment'
                : dailyPromise?.status === 'prevented'
                ? 'Legitimately Prevented'
                : 'In Motion'}
            </Badge>
          )}
        </div>

        {hasPromise ? (
          <div className="p-6 rounded-2xl bg-cosmic-surface/70 backdrop-blur-xl border border-white/[0.08] shadow-journal space-y-4">
            <div className="space-y-2">
              <span className="text-[11px] font-sans text-paper-muted uppercase tracking-wider block font-medium">
                The Inviolable Finish Line
              </span>
              <p className="text-xl md:text-2xl font-heading font-semibold text-paper-ink leading-snug">
                &ldquo;{dailyPromise?.text}&rdquo;
              </p>
              {dailyPromise?.measurableFinishLine && (
                <p className="text-xs font-sans text-paper-secondary">
                  <strong className="text-starlight-lavender font-medium">Standard: </strong>
                  {dailyPromise.measurableFinishLine} (by {dailyPromise.deadline || 'end of day'})
                </p>
              )}
            </div>

            {/* Quick Outcome Controls */}
            <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-[11px] font-sans text-paper-muted">
                Audit commitment:
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handlePromiseStatusChange('kept')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-sans font-medium transition-all ${
                    dailyPromise?.status === 'kept'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                      : 'bg-white/[0.05] text-paper-secondary hover:text-paper-ink hover:bg-white/[0.08] border border-white/[0.08]'
                  }`}
                >
                  Mark Kept
                </button>

                <button
                  type="button"
                  onClick={() => handlePromiseStatusChange('missed')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-sans font-medium transition-all ${
                    dailyPromise?.status === 'missed'
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm'
                      : 'bg-white/[0.05] text-paper-secondary hover:text-paper-ink hover:bg-white/[0.08] border border-white/[0.08]'
                  }`}
                >
                  Missed
                </button>

                <button
                  type="button"
                  onClick={() => handlePromiseStatusChange('prevented')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-sans font-medium transition-all ${
                    dailyPromise?.status === 'prevented'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                      : 'bg-white/[0.05] text-paper-secondary hover:text-paper-ink hover:bg-white/[0.08] border border-white/[0.08]'
                  }`}
                >
                  Prevented
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-6 rounded-2xl bg-cosmic-surface/60 backdrop-blur-xl border border-dashed border-white/[0.12] text-center space-y-3">
            <ShieldCheck size={28} className="mx-auto text-starlight-lavender opacity-60" />
            <div className="space-y-1">
              <h3 className="text-base font-heading font-semibold text-paper-ink">
                No Promise Sealed for Today
              </h3>
              <p className="text-xs font-sans text-paper-muted max-w-md mx-auto">
                Set exactly one non-negotiable standard for today. One clear finish line builds more character than ten broken wishes.
              </p>
            </div>
            <button
              onClick={() => {
                sound.tick();
                onNavigate('daily-tracker');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-accent/20 hover:bg-accent/30 text-starlight-lavender border border-accent/40 font-sans text-xs font-medium transition-colors"
            >
              <Plus size={14} />
              <span>Define Today&apos;s Promise</span>
            </button>
          </div>
        )}
      </section>

      {/* 3. TODAY'S RHYTHM PULSE (HABITS — 1-TAP COMPLETION) */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame size={16} className="text-starlight-lavender" />
            <h2 className="text-xs font-sans uppercase tracking-[0.16em] text-starlight-lavender font-semibold">
              Daily Rhythm Pulse
            </h2>
          </div>
          <span className="text-xs font-sans text-paper-muted">
            {habitsDoneCount} / {activeHabits.length} rhythm{activeHabits.length === 1 ? '' : 's'} kept
          </span>
        </div>

        {activeHabits.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {activeHabits.map((habit) => {
              const isDone = Boolean(habit.completions && habit.completions[selectedDate]);
              return (
                <div
                  key={habit.id}
                  onClick={() => {
                    sound.tick();
                    toggleHabit(habit.id, selectedDate);
                  }}
                  className={`group p-4 rounded-xl border transition-all cursor-pointer select-none flex items-center justify-between ${
                    isDone
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-paper-ink shadow-sm'
                      : 'bg-cosmic-surface/60 hover:bg-cosmic-surface/90 border-white/[0.08] text-paper-secondary hover:text-paper-ink'
                  }`}
                >
                  <div className="space-y-0.5 truncate pr-2">
                    <p className={`text-xs font-sans font-medium truncate ${isDone ? 'line-through text-paper-muted' : ''}`}>
                      {habit.title}
                    </p>
                    <span className="text-[10px] font-sans text-paper-muted">
                      {habit.streak || 0} day streak
                    </span>
                  </div>

                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border transition-colors ${
                      isDone
                        ? 'bg-emerald-500 border-emerald-400 text-white'
                        : 'border-white/[0.2] group-hover:border-accent'
                    }`}
                  >
                    {isDone && <Check size={12} strokeWidth={3} />}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-4 rounded-xl bg-cosmic-surface/40 border border-white/[0.06] text-center text-xs text-paper-muted">
            No habits active. Define daily rhythms in Habits &amp; Rhythms view.
          </div>
        )}
      </section>

      {/* 4. STARLIGHT JOURNAL SANCTUARY GATEWAY */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen size={16} className="text-starlight-lavender" />
            <h2 className="text-xs font-sans uppercase tracking-[0.16em] text-starlight-lavender font-semibold">
              Starlight Journal Chamber
            </h2>
          </div>
          <button
            onClick={() => onNavigate('daily-tracker')}
            className="text-xs font-sans text-starlight-lavender hover:underline inline-flex items-center gap-1"
          >
            <span>Open Journal</span>
            <ArrowRight size={12} />
          </button>
        </div>

        <div
          onClick={() => onNavigate('daily-tracker')}
          className="group p-6 rounded-2xl bg-cosmic-surface/70 hover:bg-cosmic-surface/85 backdrop-blur-xl border border-white/[0.08] hover:border-accent/40 shadow-journal transition-all cursor-pointer space-y-3"
        >
          {reflectionExcerpt ? (
            <div className="space-y-1.5">
              <span className="text-[10px] font-sans uppercase tracking-widest text-starlight-lavender/80">
                Today&apos;s Reflection Snippet
              </span>
              <p className="text-sm font-sans text-paper-ink leading-relaxed line-clamp-3 italic">
                &ldquo;{reflectionExcerpt}&rdquo;
              </p>
            </div>
          ) : (
            <div className="space-y-1">
              <p className="text-sm font-heading font-medium text-paper-ink">
                The chamber is quiet.
              </p>
              <p className="text-xs font-sans text-paper-muted">
                Vent your frustrations without judgment, gently ground yourself, or dissect a challenge with clear next steps.
              </p>
            </div>
          )}

          <div className="pt-2 flex items-center justify-between text-xs text-paper-muted border-t border-white/[0.06]">
            <span className="text-[11px] font-sans">
              3 Postures available: Release, Quiet Mind, and Clarity.
            </span>
            <span className="text-starlight-lavender group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              <span>Write</span>
              <ArrowRight size={12} />
            </span>
          </div>
        </div>
      </section>

      {/* 5. COLLAPSIBLE HORIZON TRAY (BIOMETRICS & STUDY TIME) */}
      <section className="space-y-3">
        <button
          onClick={() => setIsHorizonExpanded(!isHorizonExpanded)}
          className="w-full flex items-center justify-between p-4 rounded-xl bg-cosmic-surface/50 hover:bg-cosmic-surface/70 border border-white/[0.06] transition-colors text-xs font-sans text-paper-secondary"
        >
          <div className="flex items-center gap-3">
            <span className="font-semibold uppercase tracking-wider text-starlight-lavender">
              Observatory Glance
            </span>
            <span className="text-paper-muted">•</span>
            <span className="text-paper-muted">
              Study: {studyHours}h | Sleep: {sleepHours}h | Hydration: {waterGlasses} glasses
            </span>
          </div>

          <div className="flex items-center gap-1 text-starlight-lavender">
            <span>{isHorizonExpanded ? 'Collapse' : 'Expand Details'}</span>
            {isHorizonExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </div>
        </button>

        {isHorizonExpanded && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-cosmic-surface/40 border border-white/[0.06] animate-fadeIn">
            {/* Study Glance */}
            <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-starlight-lavender">
                <Clock size={13} />
                <span className="font-medium">Deep Studies</span>
              </div>
              <p className="text-lg font-heading font-semibold text-paper-ink">
                {studyHours} <span className="text-xs font-sans text-paper-muted">hours logged</span>
              </p>
              <button
                onClick={() => onNavigate('studies')}
                className="text-[11px] text-accent hover:underline block pt-1"
              >
                Launch Study Clock →
              </button>
            </div>

            {/* Sleep Glance */}
            <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-starlight-lavender">
                <Moon size={13} />
                <span className="font-medium">Circadian Rest</span>
              </div>
              <p className="text-lg font-heading font-semibold text-paper-ink">
                {sleepHours} <span className="text-xs font-sans text-paper-muted">hours sleep</span>
              </p>
              <button
                onClick={() => onNavigate('health')}
                className="text-[11px] text-accent hover:underline block pt-1"
              >
                Sleep &amp; Health Ledger →
              </button>
            </div>

            {/* Hydration */}
            <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-starlight-lavender">
                <Droplets size={13} />
                <span className="font-medium">Hydration</span>
              </div>
              <p className="text-lg font-heading font-semibold text-paper-ink">
                {waterGlasses} <span className="text-xs font-sans text-paper-muted">glasses water</span>
              </p>
              <button
                onClick={() => onNavigate('health')}
                className="text-[11px] text-accent hover:underline block pt-1"
              >
                Manage Biometrics →
              </button>
            </div>
          </div>
        )}
      </section>

      {/* 6. PRIMARY HORIZON BEACON (TOP GOAL) */}
      {primaryGoal && (
        <div className="p-5 rounded-2xl bg-cosmic-surface/60 backdrop-blur-xl border border-white/[0.08] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 truncate">
            <div className="w-9 h-9 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center text-starlight-lavender shrink-0">
              <Target size={18} />
            </div>
            <div className="space-y-0.5 truncate">
              <span className="text-[10px] font-sans uppercase tracking-wider text-starlight-lavender block">
                Guiding Horizon Beacon
              </span>
              <p className="text-sm font-sans font-medium text-paper-ink truncate">
                {primaryGoal.title}
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('goals')}
            className="text-xs font-sans text-starlight-lavender hover:underline shrink-0"
          >
            All Goals →
          </button>
        </div>
      )}
    </div>
  );
};
