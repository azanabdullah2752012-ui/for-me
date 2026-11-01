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
  RotateCcw,
  Sparkles,
  Heart,
} from 'lucide-react';
import { NavView } from '../types';
import { useData } from '../context/DataContext';
import { Badge } from '../components/common/Badge';
import { sound } from '../audio/sound';

interface DashboardViewProps {
  onNavigate: (view: NavView) => void;
}

const VIBES = [
  {
    label: 'Locked In',
    icon: '🔥',
    activeClass:
      'bg-gradient-to-r from-orange-500/30 to-amber-500/30 text-amber-300 border-amber-500/70 shadow-[0_0_16px_rgba(245,158,11,0.4)] font-bold',
  },
  {
    label: 'Focused',
    icon: '🎯',
    activeClass:
      'bg-gradient-to-r from-cyan-500/30 to-blue-500/30 text-cyan-300 border-cyan-500/70 shadow-[0_0_16px_rgba(6,182,212,0.4)] font-bold',
  },
  {
    label: 'Energized',
    icon: '⚡',
    activeClass:
      'bg-gradient-to-r from-yellow-500/30 to-lime-500/30 text-yellow-300 border-yellow-500/70 shadow-[0_0_16px_rgba(234,179,8,0.4)] font-bold',
  },
  {
    label: 'Chill',
    icon: '🌊',
    activeClass:
      'bg-gradient-to-r from-blue-500/30 to-indigo-500/30 text-blue-300 border-blue-500/70 shadow-[0_0_16px_rgba(59,130,246,0.4)] font-bold',
  },
  {
    label: 'Creative',
    icon: '💡',
    activeClass:
      'bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-pink-300 border-pink-500/70 shadow-[0_0_16px_rgba(236,72,153,0.4)] font-bold',
  },
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
    resetStudyTimer,
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

  // Trackers
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
    <div className="space-y-6 max-w-5xl mx-auto pb-16 animate-fadeIn select-none">
      {/* 1. TOP GREETING BANNER */}
      <div className="relative rounded-3xl p-6 md:p-8 bg-gradient-to-br from-purple-950/40 via-[#111422]/90 to-[#0B0D13] backdrop-blur-2xl border border-purple-500/30 shadow-[0_0_40px_rgba(168,85,247,0.14)] space-y-4 overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-purple-500/15 pb-3">
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-purple-300 font-bold flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span>{formattedFullDate}</span>
          </div>

          <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 font-bold shadow-sm">
            Personal Sanctuary
          </span>
        </div>

        {/* Personalized Name & Core Reminder */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 pt-1">
          <div className="space-y-1.5 max-w-xl">
            <div className="flex items-baseline gap-2">
              <h1 className="text-2xl md:text-4xl font-heading font-black text-white tracking-tight">
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
                    className="text-xs px-3 py-1 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-sans font-bold shadow-sm"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <span
                  onClick={() => setIsEditingName(true)}
                  className="group inline-flex items-center gap-2 cursor-pointer text-2xl md:text-4xl font-heading font-black bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 bg-clip-text text-transparent hover:opacity-95 transition-opacity"
                  title="Click to personalize name"
                >
                  <span>{settings.journalOwnerName || 'Azan'}.</span>
                  <Edit3
                    size={14}
                    className="opacity-0 group-hover:opacity-80 text-purple-300 transition-opacity"
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
                  className="group inline-flex items-center gap-1.5 cursor-pointer text-sm font-sans text-purple-200/90 hover:text-white transition-colors italic"
                  title="Click to edit personal reminder"
                >
                  <span>&ldquo;{settings.personalReminder || 'Be yourself. Lock in on what matters.'}&rdquo;</span>
                  <Edit3
                    size={12}
                    className="opacity-0 group-hover:opacity-70 text-purple-400 transition-opacity"
                  />
                </p>
              )}
            </div>
          </div>

          {/* Quick Action: Vibrant Glowing Multi-Color CTA */}
          <div className="shrink-0">
            <button
              onClick={() => {
                sound.tick();
                onNavigate('daily-tracker');
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-sans font-extrabold text-xs shadow-[0_0_25px_rgba(168,85,247,0.45)] hover:shadow-[0_0_35px_rgba(236,72,153,0.6)] transition-all group focus:outline-none active:scale-95"
            >
              <PenTool size={14} className="text-white" />
              <span>Write in Journal</span>
              <ArrowRight
                size={13}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN BENTO GRID: ROW 1 (MY JOURNAL & FOCUS STOPWATCH) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* BENTO CARD 1: MY JOURNAL & VIBES (2 COLS) */}
        <div className="lg:col-span-2 p-6 md:p-7 rounded-3xl bg-gradient-to-br from-[#16122B]/95 via-[#0F1322]/95 to-[#0A0D18]/95 backdrop-blur-2xl border border-purple-500/40 shadow-[0_0_35px_rgba(168,85,247,0.18)] space-y-4">
          <div className="flex items-center justify-between border-b border-purple-500/20 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 shadow-sm">
                <BookOpen size={14} />
              </div>
              <h2 className="text-base font-heading font-extrabold text-white">
                My Journal
              </h2>
            </div>
            <button
              onClick={() => onNavigate('daily-tracker')}
              className="text-xs font-sans text-purple-300 hover:text-white font-bold inline-flex items-center gap-1 transition-colors"
            >
              <span>Open Desk</span>
              <ArrowRight size={12} />
            </button>
          </div>

          {/* Today's Vibe Selector */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-purple-300 font-bold mr-1 flex items-center gap-1">
              <Sparkles size={11} className="text-pink-400" />
              Vibe:
            </span>
            {VIBES.map((v) => {
              const isSelected = selectedVibe === v.label;
              return (
                <button
                  key={v.label}
                  type="button"
                  onClick={() => handleVibeClick(v.label)}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-sans transition-all duration-200 ${
                    isSelected
                      ? v.activeClass
                      : 'bg-zinc-900/60 text-zinc-400 hover:text-white border border-white/10'
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
              placeholder="What's happening today? Brain dump, ideas, thoughts, or wins..."
              className="w-full bg-purple-950/20 border border-purple-500/25 rounded-2xl p-3.5 text-xs sm:text-sm font-sans text-zinc-100 placeholder:text-zinc-500 leading-relaxed focus:outline-none focus:border-purple-400 transition-colors resize-none"
            />
          </div>

          {/* Mini Bento: Today's Win & Tomorrow's Goal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {/* Win Card (Emerald) */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-emerald-950/30 to-zinc-900/50 border border-emerald-500/35 space-y-1.5 shadow-[0_0_15px_rgba(16,185,129,0.08)]">
              <div className="flex items-center gap-1.5 text-xs font-heading font-bold text-emerald-300">
                <Heart size={12} className="text-emerald-400" />
                <span>Today&apos;s Win</span>
              </div>
              <input
                type="text"
                value={quickWin}
                onChange={(e) => setQuickWin(e.target.value)}
                onBlur={handleSaveJournalField}
                placeholder="A cool highlight..."
                className="w-full bg-emerald-950/25 border border-emerald-500/30 rounded-xl px-2.5 py-1.5 text-xs font-sans text-emerald-100 placeholder:text-zinc-500 focus:outline-none focus:border-emerald-400 transition-colors"
              />
            </div>

            {/* Goal Card (Cyan) */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-cyan-950/30 to-zinc-900/50 border border-cyan-500/35 space-y-1.5 shadow-[0_0_15px_rgba(6,182,212,0.08)]">
              <div className="flex items-center gap-1.5 text-xs font-heading font-bold text-cyan-300">
                <Target size={12} className="text-cyan-400" />
                <span>Tomorrow&apos;s #1 Goal</span>
              </div>
              <input
                type="text"
                value={quickGoal}
                onChange={(e) => setQuickGoal(e.target.value)}
                onBlur={handleSaveJournalField}
                placeholder="Top priority..."
                className="w-full bg-cyan-950/25 border border-cyan-500/30 rounded-xl px-2.5 py-1.5 text-xs font-sans text-cyan-100 placeholder:text-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* BENTO CARD 2: FOCUS STUDIO STOPWATCH (1 COL) */}
        <div className="p-6 md:p-7 rounded-3xl bg-gradient-to-br from-cyan-950/35 via-zinc-900/60 to-[#0A0D18] backdrop-blur-2xl border border-cyan-500/40 shadow-[0_0_35px_rgba(6,182,212,0.18)] flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                <Clock size={14} />
              </div>
              <h2 className="text-base font-heading font-extrabold text-white">
                Focus Studio
              </h2>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-bold">
              Stopwatch
            </span>
          </div>

          {/* Radiant Digital Clock */}
          <div className="text-center py-2">
            <div className="text-4xl sm:text-5xl font-mono font-black tracking-wider text-cyan-400 drop-shadow-[0_0_25px_rgba(6,182,212,0.65)]">
              {formatTimer(studyTimerElapsed)}
            </div>
            <span className="text-xs font-sans text-cyan-300/80 mt-1 block font-semibold">
              {studyTimer.subject || 'School & Projects Focus'}
            </span>
          </div>

          {/* Interactive Play/Pause & Actions */}
          <div className="space-y-2 pt-1">
            <button
              type="button"
              onClick={handleToggleTimer}
              className={`w-full py-2.5 rounded-2xl font-sans font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(6,182,212,0.35)] ${
                studyTimer.isRunning
                  ? 'bg-amber-500 hover:bg-amber-400 text-black'
                  : 'bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black'
              }`}
            >
              {studyTimer.isRunning ? <Pause size={14} /> : <Play size={14} fill="currentColor" />}
              <span>{studyTimer.isRunning ? 'Pause Timer' : 'Start Focus Block'}</span>
            </button>

            <button
              onClick={() => onNavigate('studies')}
              className="w-full text-center text-xs text-cyan-300 hover:text-white font-semibold py-1 transition-colors"
            >
              Open Full Studio →
            </button>
          </div>
        </div>
      </div>

      {/* 3. MAIN BENTO GRID: ROW 2 (HABITS & STREAKS + HEALTH/SLEEP/WATER) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* BENTO CARD 3: HABITS & STREAKS (2 COLS) */}
        <div className="lg:col-span-2 p-6 md:p-7 rounded-3xl bg-gradient-to-br from-emerald-950/30 via-zinc-900/60 to-[#0A0D18] backdrop-blur-2xl border border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.15)] space-y-4">
          <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300">
                <Flame size={14} className="text-orange-400" />
              </div>
              <h2 className="text-base font-heading font-extrabold text-white">
                Daily Rhythms &amp; Streaks
              </h2>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold">
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
                        ? 'bg-gradient-to-r from-emerald-950/40 via-emerald-900/20 to-zinc-900/40 border-emerald-500/60 shadow-[0_0_20px_rgba(16,185,129,0.2)] text-white'
                        : 'bg-zinc-900/50 hover:bg-zinc-900/80 border-white/10 hover:border-emerald-500/40 text-zinc-300 hover:text-white'
                    }`}
                  >
                    <div className="space-y-1 truncate pr-2">
                      <p className={`text-xs font-sans font-bold truncate ${isDone ? 'line-through text-emerald-300/70' : 'text-zinc-100'}`}>
                        {habit.title}
                      </p>
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 font-bold">
                        <Flame size={10} className="text-orange-400" />
                        <span>{habit.streak || 0}d streak</span>
                      </span>
                    </div>

                    <div
                      className={`w-6 h-6 rounded-xl flex items-center justify-center shrink-0 border transition-all ${
                        isDone
                          ? 'bg-emerald-500 border-emerald-400 text-black shadow-[0_0_12px_rgba(16,185,129,0.6)]'
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
              No habits scheduled. Click Habits on the sidebar to add some!
            </div>
          )}

          <div className="pt-1 flex justify-end">
            <button
              onClick={() => onNavigate('habits')}
              className="text-xs font-sans text-emerald-300 hover:text-white font-bold inline-flex items-center gap-1"
            >
              <span>Manage All Habits</span>
              <ArrowRight size={12} />
            </button>
          </div>
        </div>

        {/* BENTO CARD 4: SLEEP & HYDRATION (1 COL) */}
        <div className="space-y-3.5">
          {/* Sleep Card (Indigo) */}
          <div className="p-5 rounded-3xl bg-gradient-to-br from-indigo-950/40 via-zinc-900/60 to-[#0A0D18] border border-indigo-500/40 shadow-[0_0_25px_rgba(99,102,241,0.15)] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-indigo-300 flex items-center gap-1.5">
                <Moon size={14} className="text-indigo-400" />
                Sleep &amp; Rest
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 font-bold">
                Goal: 8.5h
              </span>
            </div>
            <div className="flex items-baseline justify-between pt-1">
              <p className="text-3xl font-mono font-black text-white">
                {sleepHours} <span className="text-xs font-sans text-indigo-300/80 font-normal">hours</span>
              </p>
              <button
                onClick={() => onNavigate('health')}
                className="text-xs text-indigo-300 hover:underline font-semibold"
              >
                Log Sleep →
              </button>
            </div>
          </div>

          {/* Hydration Card (Sky Blue) */}
          <div className="p-5 rounded-3xl bg-gradient-to-br from-sky-950/40 via-zinc-900/60 to-[#0A0D18] border border-sky-500/40 shadow-[0_0_25px_rgba(14,165,233,0.15)] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-sky-300 flex items-center gap-1.5">
                <Droplets size={14} className="text-sky-400" />
                Water Intake
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-sky-500/20 border border-sky-500/40 text-sky-300 font-bold">
                Goal: 8 cups
              </span>
            </div>
            <div className="flex items-center justify-between pt-1">
              <p className="text-3xl font-mono font-black text-white">
                {waterGlasses} <span className="text-xs font-sans text-sky-300/80 font-normal">glasses</span>
              </p>
              <button
                type="button"
                onClick={handleIncrementWater}
                className="px-3 py-1.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-black font-sans font-bold text-xs shadow-[0_0_15px_rgba(14,165,233,0.4)] flex items-center gap-1 transition-all active:scale-95"
              >
                <Plus size={12} strokeWidth={3} />
                <span>+1 Glass</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4. MAIN BENTO GRID: ROW 3 (TODAY'S COMMITMENT & CURRENT GOAL) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Commitment Card (Rose Glow) */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-rose-950/30 via-zinc-900/60 to-[#0A0D18] border border-rose-500/35 shadow-[0_0_25px_rgba(244,63,94,0.12)] space-y-3">
          <div className="flex items-center justify-between border-b border-rose-500/20 pb-2.5">
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-rose-400" />
              <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-rose-300 font-bold">
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
              <p className="text-base font-heading font-bold text-white">
                &ldquo;{dailyPromise?.text}&rdquo;
              </p>
              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => handlePromiseStatusChange('kept')}
                  className="px-3 py-1 rounded-xl bg-emerald-500 text-black font-sans font-bold text-xs shadow-[0_0_12px_rgba(16,185,129,0.5)]"
                >
                  ✓ Mark Kept
                </button>
                <button
                  type="button"
                  onClick={() => handlePromiseStatusChange('missed')}
                  className="px-3 py-1 rounded-xl bg-rose-950/40 text-rose-300 border border-rose-500/30 font-sans text-xs"
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
                className="text-xs text-rose-300 hover:text-white font-bold inline-flex items-center gap-1"
              >
                <span>Add a Commitment</span>
                <ArrowRight size={11} />
              </button>
            </div>
          )}
        </div>

        {/* Primary Goal Card (Amber Glow) */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-950/30 via-zinc-900/60 to-[#0A0D18] border border-amber-500/35 shadow-[0_0_25px_rgba(245,158,11,0.12)] space-y-3">
          <div className="flex items-center justify-between border-b border-amber-500/20 pb-2.5">
            <div className="flex items-center gap-2">
              <Target size={14} className="text-amber-400" />
              <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-amber-300 font-bold">
                Current Big Goal
              </h2>
            </div>
            <button
              onClick={() => onNavigate('goals')}
              className="text-xs text-amber-300 hover:text-white font-bold"
            >
              All Goals →
            </button>
          </div>

          {primaryGoal ? (
            <div className="space-y-2">
              <p className="text-base font-heading font-bold text-white truncate">
                {primaryGoal.title}
              </p>
              <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.6)] transition-all"
                  style={{ width: `${primaryGoal.progress || 25}%` }}
                />
              </div>
              <span className="text-[11px] font-sans text-amber-300/80 block">
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
                className="text-xs text-amber-300 hover:text-white font-bold inline-flex items-center gap-1"
              >
                <span>Define a Goal</span>
                <ArrowRight size={11} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
