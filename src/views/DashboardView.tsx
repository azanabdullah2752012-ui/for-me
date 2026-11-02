import React, { useState, useEffect } from 'react';
import {
  PenTool,
  ShieldCheck,
  Flame,
  Target,
  ArrowRight,
  Clock,
  Edit3,
  Check,
  Moon,
  Droplets,
  BookOpen,
  Plus,
  Play,
  Pause,
  Sparkles,
  Heart,
  Volume2,
} from 'lucide-react';
import { NavView } from '../types';
import { useData } from '../context/DataContext';
import { Badge } from '../components/common/Badge';
import { sound } from '../audio/sound';
import { StreakHeatmapMatrix } from '../components/widgets/StreakHeatmapMatrix';
import { BiometricsRingChart } from '../components/widgets/BiometricsRingChart';
import { DynamicVibeWidget } from '../components/widgets/DynamicVibeWidget';

interface DashboardViewProps {
  onNavigate: (view: NavView) => void;
}

const VIBES = [
  { label: 'Locked In', icon: '🔥' },
  { label: 'Deep Focus', icon: '🎯' },
  { label: 'Energized', icon: '⚡' },
  { label: 'Calm & Flow', icon: '🌊' },
  { label: 'Creative', icon: '💡' },
];

export const DashboardView: React.FC<DashboardViewProps> = ({ onNavigate }) => {
  const {
    selectedDate,
    currentLog,
    habits,
    toggleHabit,
    goals,
    settings,
    updateSettings,
    updateDailyLog,
    updateDailyPromiseStatus,
    studyTimer,
    studyTimerElapsed,
    startStudyTimer,
    pauseStudyTimer,
    setIsMusicDrawerOpen,
  } = useData();

  const [isEditingName, setIsEditingName] = useState(false);
  const [ownerName, setOwnerName] = useState(settings.journalOwnerName || 'Azan');
  const [isEditingReminder, setIsEditingReminder] = useState(false);
  const [reminderText, setReminderText] = useState(
    settings.personalReminder || 'Be yourself. Lock in on what matters.'
  );

  // Quick Journal Local State
  const [quickJournal, setQuickJournal] = useState(currentLog?.dailyNotes || '');
  const [quickWin, setQuickWin] = useState(currentLog?.extendedReflections?.gratitude || '');
  const [quickGoal, setQuickGoal] = useState(currentLog?.extendedReflections?.decisions || '');
  const selectedVibe = currentLog?.extendedReflections?.emotions || 'Locked In';

  useEffect(() => {
    setQuickJournal(currentLog?.dailyNotes || '');
    setQuickWin(currentLog?.extendedReflections?.gratitude || '');
    setQuickGoal(currentLog?.extendedReflections?.decisions || '');
  }, [
    currentLog?.dailyNotes,
    currentLog?.extendedReflections?.gratitude,
    currentLog?.extendedReflections?.decisions,
  ]);

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

  // Aggregate habit activity for the Consistency Matrix
  const habitCompletionsMap = React.useMemo(() => {
    const map: Record<string, number> = {};
    habits.forEach((h) => {
      if (h.completions) {
        Object.entries(h.completions).forEach(([dateKey, done]) => {
          if (done) {
            map[dateKey] = (map[dateKey] || 0) + 1;
          }
        });
      }
    });
    return map;
  }, [habits]);

  // Trackers
  const studyHours = currentLog?.trackers?.study?.hoursStudied || (studyTimerElapsed ? Math.round((studyTimerElapsed / 3600) * 10) / 10 : 0);
  const sleepHours = currentLog?.trackers?.sleep?.hours || currentLog?.sleepHours || 8;
  const waterGlasses = currentLog?.trackers?.waterAndMovement?.waterGlasses || currentLog?.waterGlasses || 6;

  const handleSaveName = () => {
    updateSettings({ journalOwnerName: ownerName.trim() || 'Azan' });
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

  const handleVibeClick = (label: string) => {
    sound.tick();
    const existing = currentLog?.extendedReflections || {
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
        emotions: label,
      },
    });
  };

  const handleSaveJournalField = () => {
    const existing = currentLog?.extendedReflections || {
      emotions: '',
      triggers: '',
      gratitude: '',
      happiness: '',
      decisions: '',
      mistakes: '',
      lessons: '',
    };
    updateDailyLog({
      dailyNotes: quickJournal,
      extendedReflections: {
        ...existing,
        gratitude: quickWin,
        decisions: quickGoal,
      },
    });
  };

  const handleIncrementWater = () => {
    sound.tick();
    const nextGlasses = waterGlasses + 1;
    updateDailyLog({
      waterGlasses: nextGlasses,
      trackers: {
        ...(currentLog?.trackers || {}),
        waterAndMovement: {
          ...(currentLog?.trackers?.waterAndMovement || { steps: 0, activeMinutes: 0 }),
          waterGlasses: nextGlasses,
        },
      } as any,
    });
  };

  const handleToggleTimer = () => {
    if (studyTimer.isRunning) {
      pauseStudyTimer();
      sound.tick();
    } else {
      startStudyTimer();
      sound.complete();
    }
  };

  const formatTimer = (totalSec: number) => {
    const hrs = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    if (hrs > 0) {
      return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-16 select-none animate-fadeIn">
      {/* 1. TOP GREETING SANCTUARY HEADER */}
      <header className="rounded-3xl p-6 md:p-8 bg-[#0D101A]/90 border border-white/[0.08] shadow-xl backdrop-blur-xl space-y-4 relative overflow-hidden">
        {/* Date and Status Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
          <div className="text-xs font-mono tracking-wider text-zinc-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span>{formattedFullDate}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                sound.playLoudChime();
              }}
              className="text-[11px] font-mono px-2.5 py-1 rounded-xl bg-purple-500/15 hover:bg-purple-500/25 border border-purple-500/30 text-purple-300 font-semibold transition-all flex items-center gap-1.5"
              title="Click to test sound"
            >
              <Volume2 size={12} />
              <span>Audio Live</span>
            </button>

            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300 font-medium">
              Private Sanctuary
            </span>
          </div>
        </div>

        {/* Personalized Name & Core Reminder */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 pt-1">
          <div className="space-y-1.5 max-w-xl">
            <div className="flex items-baseline gap-2">
              <h1 className="text-2xl md:text-4xl font-heading font-extrabold text-white tracking-tight">
                {timeGreeting},
              </h1>
              {isEditingName ? (
                <div className="inline-flex items-center gap-2">
                  <input
                    type="text"
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSaveName()}
                    className="border-b-2 border-purple-400 bg-transparent text-2xl md:text-3xl font-heading font-extrabold text-white px-1 focus:outline-none rounded"
                    autoFocus
                  />
                  <button
                    onClick={handleSaveName}
                    className="text-xs px-3 py-1 rounded-xl bg-purple-600 text-white font-sans font-bold shadow-sm"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <span
                  onClick={() => setIsEditingName(true)}
                  className="group inline-flex items-center gap-2 cursor-pointer text-2xl md:text-4xl font-heading font-extrabold text-purple-300 hover:text-white transition-colors"
                  title="Click to personalize name"
                >
                  <span>{settings.journalOwnerName || 'Azan'}.</span>
                  <Edit3
                    size={14}
                    className="opacity-0 group-hover:opacity-80 text-purple-400 transition-opacity"
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
                    className="w-full text-xs font-sans border-b border-purple-400 bg-transparent text-zinc-200 py-1 focus:outline-none rounded"
                    autoFocus
                  />
                  <button
                    onClick={handleSaveReminder}
                    className="text-[11px] px-2.5 py-0.5 rounded-lg bg-purple-600 text-white font-sans font-bold shrink-0"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <p
                  onClick={() => setIsEditingReminder(true)}
                  className="group inline-flex items-center gap-1.5 cursor-pointer text-sm font-sans text-zinc-400 hover:text-zinc-200 transition-colors"
                  title="Click to edit personal reminder"
                >
                  <span>&ldquo;{settings.personalReminder || 'Be yourself. Lock in on what matters.'}&rdquo;</span>
                  <Edit3
                    size={12}
                    className="opacity-0 group-hover:opacity-70 text-zinc-400 transition-opacity"
                  />
                </p>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => {
                sound.tick();
                setIsMusicDrawerOpen(true);
              }}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-2xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] text-zinc-200 font-sans font-semibold text-xs transition-all shadow-sm"
            >
              <Volume2 size={13} className="text-purple-400" />
              <span>Music &amp; Streams</span>
            </button>

            <button
              onClick={() => {
                sound.tick();
                onNavigate('daily-tracker');
              }}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-sans font-bold text-xs shadow-md transition-all group"
            >
              <PenTool size={13} />
              <span>Write in Journal</span>
              <ArrowRight
                size={12}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </button>
          </div>
        </div>
      </header>

      {/* 2. MAIN BENTO GRID: ROW 1 (MY JOURNAL & FOCUS STOPWATCH) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* BENTO CARD 1: MY JOURNAL & VIBES (2 COLS) */}
        <section className="lg:col-span-2 p-6 md:p-7 rounded-3xl bg-[#0D101A]/85 border border-white/[0.08] shadow-lg backdrop-blur-xl space-y-4">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-300">
                <BookOpen size={14} />
              </div>
              <h2 className="text-sm font-heading font-bold text-white">
                My Sanctuary Journal
              </h2>
            </div>
            <button
              onClick={() => onNavigate('daily-tracker')}
              className="text-xs font-sans text-purple-300 hover:text-white font-medium inline-flex items-center gap-1 transition-colors"
            >
              <span>Full Desk</span>
              <ArrowRight size={12} />
            </button>
          </div>

          {/* Today's Vibe Selector */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold mr-1 flex items-center gap-1">
              <Sparkles size={11} className="text-purple-400" />
              Vibe:
            </span>
            {VIBES.map((v) => {
              const isSelected = selectedVibe === v.label;
              return (
                <button
                  key={v.label}
                  type="button"
                  onClick={() => handleVibeClick(v.label)}
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-xl text-xs font-sans transition-all ${
                    isSelected
                      ? 'bg-purple-600 text-white font-semibold shadow-sm border border-purple-400/40'
                      : 'bg-white/[0.03] text-zinc-400 hover:text-white border border-white/[0.06]'
                  }`}
                >
                  <span>{v.icon}</span>
                  <span>{v.label}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Journal Writing Canvas */}
          <div className="space-y-2">
            <textarea
              rows={3}
              value={quickJournal}
              onChange={(e) => setQuickJournal(e.target.value)}
              onBlur={handleSaveJournalField}
              placeholder="What's happening today? Brain dump, thoughts, reflections, or breakthroughs..."
              className="w-full bg-black/30 border border-white/[0.08] rounded-2xl p-3.5 text-xs sm:text-sm font-sans text-zinc-100 placeholder:text-zinc-500 leading-relaxed focus:outline-none focus:border-purple-400/60 transition-colors resize-none"
            />
          </div>

          {/* Mini Bento: Today's Win & Tomorrow's Goal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {/* Win Card */}
            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-heading font-semibold text-emerald-300">
                <Heart size={12} className="text-emerald-400" />
                <span>Today&apos;s Highlight</span>
              </div>
              <input
                type="text"
                value={quickWin}
                onChange={(e) => setQuickWin(e.target.value)}
                onBlur={handleSaveJournalField}
                placeholder="A cool win or moment..."
                className="w-full bg-black/20 border border-white/[0.06] rounded-xl px-2.5 py-1.5 text-xs font-sans text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-emerald-400/60 transition-colors"
              />
            </div>

            {/* Goal Card */}
            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-heading font-semibold text-cyan-300">
                <Target size={12} className="text-cyan-400" />
                <span>Tomorrow&apos;s #1 Focus</span>
              </div>
              <input
                type="text"
                value={quickGoal}
                onChange={(e) => setQuickGoal(e.target.value)}
                onBlur={handleSaveJournalField}
                placeholder="Top priority target..."
                className="w-full bg-black/20 border border-white/[0.06] rounded-xl px-2.5 py-1.5 text-xs font-sans text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-cyan-400/60 transition-colors"
              />
            </div>
          </div>
        </section>

        {/* BENTO CARD 2: FOCUS STUDIO STOPWATCH (1 COL) */}
        <section className="p-6 md:p-7 rounded-3xl bg-[#0D101A]/85 border border-white/[0.08] shadow-lg backdrop-blur-xl flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-300">
                <Clock size={14} />
              </div>
              <h2 className="text-sm font-heading font-bold text-white">
                Focus Studio
              </h2>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-semibold">
              Live
            </span>
          </div>

          {/* Digital Clock */}
          <div className="text-center py-2">
            <div className="text-4xl sm:text-5xl font-mono font-bold tracking-wider text-cyan-300">
              {formatTimer(studyTimerElapsed)}
            </div>
            <span className="text-xs font-sans text-zinc-400 mt-1 block">
              {studyTimer.subject || 'School & Projects Focus'}
            </span>
          </div>

          {/* Interactive Play/Pause & Actions */}
          <div className="space-y-2 pt-1">
            <button
              type="button"
              onClick={handleToggleTimer}
              className={`w-full py-2.5 rounded-2xl font-sans font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                studyTimer.isRunning
                  ? 'bg-amber-500 hover:bg-amber-400 text-black shadow-md'
                  : 'bg-cyan-500 hover:bg-cyan-400 text-black shadow-md'
              }`}
            >
              {studyTimer.isRunning ? <Pause size={14} /> : <Play size={14} fill="currentColor" />}
              <span>{studyTimer.isRunning ? 'Pause Timer' : 'Start Focus Block'}</span>
            </button>

            <button
              onClick={() => onNavigate('studies')}
              className="w-full text-center text-xs text-cyan-300 hover:text-white font-medium py-1 transition-colors"
            >
              Open Studies Desk →
            </button>
          </div>
        </section>
      </div>

      {/* 3. MAIN BENTO GRID: ROW 2 (HABITS & STREAKS + HEALTH/SLEEP/WATER) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* BENTO CARD 3: HABITS & STREAKS (2 COLS) */}
        <section className="lg:col-span-2 p-6 md:p-7 rounded-3xl bg-[#0D101A]/85 border border-white/[0.08] shadow-lg backdrop-blur-xl space-y-4">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-300">
                <Flame size={14} className="text-emerald-400" />
              </div>
              <h2 className="text-sm font-heading font-bold text-white">
                Daily Rhythms &amp; Habits
              </h2>
            </div>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-semibold">
              {habitsDoneCount} / {activeHabits.length} done
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
                    className={`group p-3.5 rounded-2xl border transition-all cursor-pointer select-none flex items-center justify-between ${
                      isDone
                        ? 'bg-emerald-950/25 border-emerald-500/40 text-white'
                        : 'bg-white/[0.02] hover:bg-white/[0.05] border-white/[0.06] hover:border-white/[0.12] text-zinc-300'
                    }`}
                  >
                    <div className="space-y-1 truncate pr-2">
                      <p className={`text-xs font-sans font-semibold truncate ${isDone ? 'line-through text-emerald-300/80' : 'text-zinc-100'}`}>
                        {habit.title}
                      </p>
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 font-semibold">
                        <Flame size={10} className="text-orange-400" />
                        <span>{habit.streak || 0}d streak</span>
                      </span>
                    </div>

                    <div
                      className={`w-6 h-6 rounded-xl flex items-center justify-center shrink-0 border transition-all ${
                        isDone
                          ? 'bg-emerald-500 border-emerald-400 text-black shadow-sm'
                          : 'border-white/20 group-hover:border-emerald-400 bg-white/[0.03]'
                      }`}
                    >
                      {isDone && <Check size={14} strokeWidth={3} className="text-black" />}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center text-xs text-zinc-500">
              No habits scheduled yet.
            </div>
          )}

          <div className="pt-1 flex justify-end">
            <button
              onClick={() => onNavigate('habits')}
              className="text-xs font-sans text-emerald-300 hover:text-white font-medium inline-flex items-center gap-1"
            >
              <span>Manage Habits</span>
              <ArrowRight size={12} />
            </button>
          </div>
        </section>

        {/* BENTO CARD 4: SLEEP & HYDRATION (1 COL) */}
        <div className="space-y-3.5">
          {/* Sleep Card */}
          <div className="p-5 rounded-3xl bg-[#0D101A]/85 border border-white/[0.08] shadow-lg backdrop-blur-xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-zinc-300 flex items-center gap-1.5">
                <Moon size={14} className="text-indigo-400" />
                Sleep &amp; Recovery
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-400">
                Target: 8.5h
              </span>
            </div>
            <div className="flex items-baseline justify-between pt-1">
              <p className="text-3xl font-mono font-bold text-white">
                {sleepHours} <span className="text-xs font-sans text-zinc-400 font-normal">hours</span>
              </p>
              <button
                onClick={() => onNavigate('health')}
                className="text-xs text-indigo-300 hover:text-white font-medium"
              >
                Log Sleep →
              </button>
            </div>
          </div>

          {/* Hydration Card */}
          <div className="p-5 rounded-3xl bg-[#0D101A]/85 border border-white/[0.08] shadow-lg backdrop-blur-xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-zinc-300 flex items-center gap-1.5">
                <Droplets size={14} className="text-sky-400" />
                Water Hydration
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-400">
                Target: 8 cups
              </span>
            </div>
            <div className="flex items-center justify-between pt-1">
              <p className="text-3xl font-mono font-bold text-white">
                {waterGlasses} <span className="text-xs font-sans text-zinc-400 font-normal">glasses</span>
              </p>
              <button
                type="button"
                onClick={handleIncrementWater}
                className="px-3 py-1.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-black font-sans font-bold text-xs shadow-sm flex items-center gap-1 transition-all active:scale-95"
              >
                <Plus size={12} strokeWidth={3} />
                <span>+1 Cup</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4. MAIN BENTO GRID: ROW 3 (TODAY'S COMMITMENT & CURRENT GOAL) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Commitment Card */}
        <section className="p-6 rounded-3xl bg-[#0D101A]/85 border border-white/[0.08] shadow-lg backdrop-blur-xl space-y-3">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5">
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-rose-400" />
              <h2 className="text-xs font-mono uppercase tracking-[0.15em] text-zinc-400 font-bold">
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
                    : 'warning'
                }
              >
                {dailyPromise?.status === 'kept' ? 'Kept' : 'In Progress'}
              </Badge>
            )}
          </div>

          {hasPromise ? (
            <div className="space-y-2">
              <p className="text-base font-heading font-semibold text-white">
                &ldquo;{dailyPromise?.text}&rdquo;
              </p>
              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => handlePromiseStatusChange('kept')}
                  className="px-3 py-1 rounded-xl bg-emerald-500 text-black font-sans font-bold text-xs shadow-sm"
                >
                  ✓ Kept
                </button>
                <button
                  type="button"
                  onClick={() => handlePromiseStatusChange('missed')}
                  className="px-3 py-1 rounded-xl bg-white/[0.04] text-zinc-400 hover:text-white border border-white/[0.08] font-sans text-xs"
                >
                  Missed
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-xs font-sans text-zinc-400">
                No single commitment defined yet for today.
              </p>
              <button
                onClick={() => onNavigate('promises')}
                className="text-xs text-rose-300 hover:text-white font-medium inline-flex items-center gap-1"
              >
                <span>Add a Commitment</span>
                <ArrowRight size={11} />
              </button>
            </div>
          )}
        </section>

        {/* Primary Goal Card */}
        <section className="p-6 rounded-3xl bg-[#0D101A]/85 border border-white/[0.08] shadow-lg backdrop-blur-xl space-y-3">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5">
            <div className="flex items-center gap-2">
              <Target size={14} className="text-amber-400" />
              <h2 className="text-xs font-mono uppercase tracking-[0.15em] text-zinc-400 font-bold">
                Current Big Goal
              </h2>
            </div>
            <button
              onClick={() => onNavigate('goals')}
              className="text-xs text-amber-300 hover:text-white font-medium"
            >
              All Goals →
            </button>
          </div>

          {primaryGoal ? (
            <div className="space-y-2">
              <p className="text-base font-heading font-semibold text-white truncate">
                {primaryGoal.title}
              </p>
              <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-400 rounded-full transition-all"
                  style={{ width: `${primaryGoal.progress || 25}%` }}
                />
              </div>
              <span className="text-[11px] font-sans text-zinc-400 block">
                {primaryGoal.progress || 25}% completed
              </span>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-xs font-sans text-zinc-400">
                No primary goal set. Add a target to work towards!
              </p>
              <button
                onClick={() => onNavigate('goals')}
                className="text-xs text-amber-300 hover:text-white font-medium inline-flex items-center gap-1"
              >
                <span>Define a Goal</span>
                <ArrowRight size={11} />
              </button>
            </div>
          )}
        </section>
      </div>

      {/* 5. GENERATIVE UI VISUALIZERS: ROW 4 (STREAK HEATMAP MATRIX) */}
      <div className="space-y-5">
        <StreakHeatmapMatrix
          completionsByDate={habitCompletionsMap}
          weeks={18}
          selectedDate={selectedDate}
          onDayClick={(_dateKey) => {
            sound.tick();
            onNavigate('daily-tracker');
          }}
        />

        {/* 6. GENERATIVE UI VISUALIZERS: ROW 5 (BIOMETRICS RINGS & SOUNDSCAPE EQUALIZER) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <BiometricsRingChart
            studyHours={studyHours}
            studyTarget={settings.weeklyStudyTargetHours ? Math.round(settings.weeklyStudyTargetHours / 5) : 3}
            sleepHours={sleepHours}
            sleepTarget={settings.dailySleepTarget || 8.5}
            waterGlasses={waterGlasses}
            waterTarget={settings.dailyWaterTarget || 8}
            onNavigate={onNavigate}
          />

          <DynamicVibeWidget
            currentVibe={selectedVibe}
            onVibeChange={(v) => handleVibeClick(v)}
          />
        </div>
      </div>
    </div>
  );
};
