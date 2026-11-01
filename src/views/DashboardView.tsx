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
    <div className="space-y-6 max-w-4xl mx-auto pb-16 animate-fadeIn select-none">
      {/* 1. ARCHIVAL GREETING MASTHEAD */}
      <div className="relative rounded-2xl p-6 md:p-8 bg-white/[0.025] backdrop-blur-2xl border border-white/[0.08] shadow-[0_16px_48px_rgba(0,0,0,0.4)] space-y-4 overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 font-semibold flex items-center gap-2">
            <span>{formattedFullDate}</span>
          </div>

          <span className="text-[11px] font-mono text-zinc-500">
            Personal Workspace
          </span>
        </div>

        {/* Personalized Name & Core Reminder */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 pt-1">
          <div className="space-y-1.5 max-w-xl">
            <div className="flex items-baseline gap-2">
              <h1 className="text-2xl md:text-3xl font-heading font-semibold text-white tracking-tight">
                {timeGreeting},
              </h1>
              {isEditingName ? (
                <div className="inline-flex items-center gap-2">
                  <input
                    type="text"
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSaveName()}
                    className="border-b border-white bg-transparent text-2xl font-heading font-semibold text-white px-1 focus:outline-none focus:ring-1 focus:ring-white rounded"
                    autoFocus
                  />
                  <button
                    onClick={handleSaveName}
                    className="text-xs px-2.5 py-1 rounded-lg bg-white text-zinc-950 font-sans font-semibold"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <span
                  onClick={() => setIsEditingName(true)}
                  className="group inline-flex items-center gap-1.5 cursor-pointer text-2xl md:text-3xl font-heading font-semibold text-white hover:text-zinc-300 transition-colors"
                  title="Click to personalize name"
                >
                  <span>{settings.journalOwnerName || 'Friend'}.</span>
                  <Edit3
                    size={13}
                    className="opacity-0 group-hover:opacity-70 text-zinc-400 transition-opacity"
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
                    className="w-full text-xs font-sans border-b border-white bg-transparent text-zinc-200 py-1 focus:outline-none focus:ring-1 focus:ring-white rounded"
                    autoFocus
                  />
                  <button
                    onClick={handleSaveReminder}
                    className="text-[11px] px-2 py-0.5 rounded-lg bg-white text-zinc-950 font-sans font-semibold shrink-0"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <p
                  onClick={() => setIsEditingReminder(true)}
                  className="group inline-flex items-center gap-1.5 cursor-pointer text-sm font-sans text-zinc-400 hover:text-white transition-colors italic"
                  title="Click to edit personal reminder"
                >
                  <span>&ldquo;{settings.personalReminder || 'Remember, you are here for you.'}&rdquo;</span>
                  <Edit3
                    size={11}
                    className="opacity-0 group-hover:opacity-70 text-zinc-500 transition-opacity"
                  />
                </p>
              )}
            </div>
          </div>

          {/* Quick Action: Solid White CTA */}
          <div className="shrink-0">
            <button
              onClick={() => {
                sound.tick();
                onNavigate('daily-tracker');
              }}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-sans font-semibold text-xs shadow-md transition-all group focus:outline-none focus:ring-1 focus:ring-white"
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
            <ShieldCheck size={15} className="text-zinc-400" />
            <h2 className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-400 font-semibold">
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
          <div className="p-5 md:p-6 rounded-2xl bg-white/[0.025] backdrop-blur-xl border border-white/[0.08] shadow-sm space-y-3.5">
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                Primary Standard
              </span>
              <p className="text-lg md:text-xl font-heading font-medium text-white leading-snug">
                &ldquo;{dailyPromise?.text}&rdquo;
              </p>
              {dailyPromise?.measurableFinishLine && (
                <p className="text-xs font-sans text-zinc-400">
                  <strong className="text-white font-medium">Standard: </strong>
                  {dailyPromise.measurableFinishLine} (by {dailyPromise.deadline || 'end of day'})
                </p>
              )}
            </div>

            {/* Quick Outcome Controls */}
            <div className="pt-3 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-[11px] font-sans text-zinc-500">
                Audit commitment:
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handlePromiseStatusChange('kept')}
                  className={`px-3 py-1 rounded-lg text-xs font-sans font-medium transition-all ${
                    dailyPromise?.status === 'kept'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : 'bg-white/[0.04] text-zinc-400 hover:text-white border border-white/[0.08]'
                  }`}
                >
                  Mark Kept
                </button>

                <button
                  type="button"
                  onClick={() => handlePromiseStatusChange('missed')}
                  className={`px-3 py-1 rounded-lg text-xs font-sans font-medium transition-all ${
                    dailyPromise?.status === 'missed'
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                      : 'bg-white/[0.04] text-zinc-400 hover:text-white border border-white/[0.08]'
                  }`}
                >
                  Missed
                </button>

                <button
                  type="button"
                  onClick={() => handlePromiseStatusChange('prevented')}
                  className={`px-3 py-1 rounded-lg text-xs font-sans font-medium transition-all ${
                    dailyPromise?.status === 'prevented'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      : 'bg-white/[0.04] text-zinc-400 hover:text-white border border-white/[0.08]'
                  }`}
                >
                  Prevented
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-dashed border-white/[0.1] text-center space-y-2.5">
            <ShieldCheck size={24} className="mx-auto text-zinc-500" />
            <div className="space-y-0.5">
              <h3 className="text-sm font-heading font-medium text-white">
                No Commitment Set for Today
              </h3>
              <p className="text-xs font-sans text-zinc-500 max-w-sm mx-auto">
                Set one clear non-negotiable standard for today.
              </p>
            </div>
            <button
              onClick={() => {
                sound.tick();
                onNavigate('daily-tracker');
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/[0.15] font-sans text-xs font-medium transition-colors"
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
            <Flame size={15} className="text-zinc-400" />
            <h2 className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-400 font-semibold">
              Daily Rhythms
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-500">
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
                  className={`group p-3.5 rounded-xl border transition-all cursor-pointer select-none flex items-center justify-between ${
                    isDone
                      ? 'bg-emerald-500/10 border-emerald-500/25 text-white'
                      : 'bg-white/[0.025] hover:bg-white/[0.05] border-white/[0.08] text-zinc-400 hover:text-white'
                  }`}
                >
                  <div className="space-y-0.5 truncate pr-2">
                    <p className={`text-xs font-sans font-medium truncate ${isDone ? 'line-through text-zinc-500' : ''}`}>
                      {habit.title}
                    </p>
                    <span className="text-[10px] font-mono text-zinc-500">
                      {habit.streak || 0}d streak
                    </span>
                  </div>

                  <div
                    className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 border transition-colors ${
                      isDone
                        ? 'bg-emerald-500 border-emerald-400 text-white'
                        : 'border-white/[0.2] group-hover:border-white'
                    }`}
                  >
                    {isDone && <Check size={11} strokeWidth={3} />}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center text-xs text-zinc-500">
            No habits active. Add habits in the Habits ledger.
          </div>
        )}
      </section>

      {/* 4. JOURNAL RECORD PREVIEW */}
      <section className="space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen size={15} className="text-zinc-400" />
            <h2 className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-400 font-semibold">
              Today&apos;s Journal
            </h2>
          </div>
          <button
            onClick={() => onNavigate('daily-tracker')}
            className="text-xs font-sans text-zinc-300 hover:text-white inline-flex items-center gap-1"
          >
            <span>Open Journal</span>
            <ArrowRight size={12} />
          </button>
        </div>

        <div
          onClick={() => onNavigate('daily-tracker')}
          className="group p-5 md:p-6 rounded-2xl bg-white/[0.025] hover:bg-white/[0.05] backdrop-blur-xl border border-white/[0.08] hover:border-white/20 transition-all cursor-pointer space-y-2.5"
        >
          {reflectionExcerpt ? (
            <div className="space-y-1">
              <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500">
                Excerpts &amp; Notes
              </span>
              <p className="text-sm font-sans text-zinc-300 leading-relaxed line-clamp-3 italic">
                &ldquo;{reflectionExcerpt}&rdquo;
              </p>
            </div>
          ) : (
            <div className="space-y-0.5">
              <p className="text-sm font-heading font-medium text-white">
                No entry recorded yet for today.
              </p>
              <p className="text-xs font-sans text-zinc-500">
                Capture what challenged you, what made you pause, or what you learned.
              </p>
            </div>
          )}

          <div className="pt-2 flex items-center justify-between text-xs text-zinc-500 border-t border-white/[0.06]">
            <span className="text-[11px] font-sans">
              Private offline record
            </span>
            <span className="text-white group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1 font-medium">
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
          className="w-full flex items-center justify-between p-3.5 rounded-xl bg-white/[0.025] hover:bg-white/[0.05] border border-white/[0.08] transition-colors text-xs font-sans text-zinc-300"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 font-semibold">
              Ledger Metrics
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400 font-mono text-[11px]">
              Focus: {studyHours}h | Rest: {sleepHours}h | Water: {waterGlasses} glasses
            </span>
          </div>

          <div className="flex items-center gap-1 text-zinc-500">
            <span>{isHorizonExpanded ? 'Collapse' : 'Details'}</span>
            {isHorizonExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
          </div>
        </button>

        {isHorizonExpanded && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.08] animate-fadeIn">
            {/* Study Glance */}
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                <Clock size={13} />
                <span className="font-medium font-sans">Focus Time</span>
              </div>
              <p className="text-lg font-mono font-semibold text-white">
                {studyHours} <span className="text-xs font-sans text-zinc-500">hours</span>
              </p>
              <button
                onClick={() => onNavigate('studies')}
                className="text-[11px] text-zinc-300 hover:text-white hover:underline block pt-0.5 font-sans"
              >
                Focus Studio →
              </button>
            </div>

            {/* Sleep Glance */}
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                <Moon size={13} />
                <span className="font-medium font-sans">Rest</span>
              </div>
              <p className="text-lg font-mono font-semibold text-white">
                {sleepHours} <span className="text-xs font-sans text-zinc-500">hours</span>
              </p>
              <button
                onClick={() => onNavigate('health')}
                className="text-[11px] text-zinc-300 hover:text-white hover:underline block pt-0.5 font-sans"
              >
                Health Ledger →
              </button>
            </div>

            {/* Hydration */}
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                <Droplets size={13} />
                <span className="font-medium font-sans">Water</span>
              </div>
              <p className="text-lg font-mono font-semibold text-white">
                {waterGlasses} <span className="text-xs font-sans text-zinc-500">glasses</span>
              </p>
              <button
                onClick={() => onNavigate('health')}
                className="text-[11px] text-zinc-300 hover:text-white hover:underline block pt-0.5 font-sans"
              >
                Manage Trackers →
              </button>
            </div>
          </div>
        )}
      </section>

      {/* 6. PRIMARY HORIZON GOAL */}
      {primaryGoal && (
        <div className="p-4 rounded-2xl bg-white/[0.025] border border-white/[0.08] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 truncate">
            <div className="w-8 h-8 rounded-xl bg-white/[0.08] border border-white/[0.14] flex items-center justify-center text-white shrink-0">
              <Target size={16} />
            </div>
            <div className="space-y-0.5 truncate">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
                Primary Horizon
              </span>
              <p className="text-sm font-sans font-medium text-white truncate">
                {primaryGoal.title}
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('goals')}
            className="text-xs font-sans text-zinc-300 hover:text-white hover:underline shrink-0"
          >
            All Goals →
          </button>
        </div>
      )}
    </div>
  );
};
