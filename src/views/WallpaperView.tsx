import React, { useState, useEffect } from 'react';
import {
  Clock,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  ShieldCheck,
  Flame,
  Check,
  Plus,
  Edit3,
  Moon,
  Droplets,
  BookOpen,
  Maximize2,
  Minimize2,
  Sparkles,
  Volume2,
  VolumeX,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  XCircle,
  AlertTriangle,
  Lock,
} from 'lucide-react';
import { NavView, SingleDailyPromise, Habit } from '../types';
import { useData, formatDateKey, getDisplayDate } from '../context/DataContext';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { Button } from '../components/common/Button';
import { sound } from '../audio/sound';

interface WallpaperViewProps {
  onNavigate: (view: NavView) => void;
}

export const WallpaperView: React.FC<WallpaperViewProps> = ({ onNavigate }) => {
  const {
    selectedDate,
    currentLog,
    habits,
    toggleHabit,
    settings,
    updateSettings,
    updateDailyLog,
    studySessions,
    addStudySession,
    weeklyStudyHoursLogged,
    studyTimer,
    studyTimerElapsed,
    startStudyTimer,
    pauseStudyTimer,
    resetStudyTimer,
    updateStudyTimerMeta,
    updateDailyPromiseStatus,
    saveDailyPromise,
  } = useData();

  // Live wall clock
  const [currentTime, setCurrentTime] = useState<string>('');
  const [currentDateString, setCurrentDateString] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
      setCurrentDateString(
        now.toLocaleDateString('en-US', {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })
      );
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Personalization
  const [isEditingName, setIsEditingName] = useState(false);
  const [ownerName, setOwnerName] = useState(settings.journalOwnerName || 'Me');
  const [isEditingReminder, setIsEditingReminder] = useState(false);
  const [reminderText, setReminderText] = useState(
    settings.personalReminder || 'Remember, you are here for you.'
  );

  // Promise Edit Modal
  const [isEditPromiseOpen, setIsEditPromiseOpen] = useState(false);
  const dailyPromise = currentLog?.dailyPromise;
  const hasPromise = Boolean(dailyPromise && dailyPromise.text);
  const [promiseText, setPromiseText] = useState(dailyPromise?.text || '');
  const [finishLine, setFinishLine] = useState(dailyPromise?.measurableFinishLine || '');
  const [deadline, setDeadline] = useState(dailyPromise?.deadline || '18:00');

  // Greeting
  const hour = new Date().getHours();
  const timeGreeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';

  // Habits
  const activeHabits = habits.filter((h) => !h.archived);
  const habitsDoneCount = activeHabits.filter(
    (h) => h.completions && h.completions[selectedDate]
  ).length;

  // Study timer format
  const formatTimer = (totalSec: number) => {
    const hrs = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    if (hrs > 0) {
      return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

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

  const handlePromiseStatus = (status: 'kept' | 'missed' | 'prevented') => {
    updateDailyPromiseStatus(status, { reason: 'Updated from desktop wallpaper HUD' });
    if (status === 'kept') sound.complete();
    else sound.tick();
  };

  const handleSavePromiseEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promiseText.trim()) return;

    sound.complete();
    saveDailyPromise(
      {
        ...(dailyPromise || {
          text: '',
          measurableFinishLine: '',
          deadline: '18:00',
          chosenWhen: 'morning',
          status: 'pending',
        }),
        text: promiseText.trim(),
        measurableFinishLine: finishLine.trim() || 'Execute non-negotiable standard',
        deadline: deadline.trim() || 'End of day',
      },
      selectedDate
    );
    setIsEditPromiseOpen(false);
  };

  const handleLogStudy = () => {
    if (studyTimerElapsed < 10) return;
    const durationMinutes = Math.max(1, Math.round(studyTimerElapsed / 60));

    sound.complete();
    addStudySession({
      date: selectedDate,
      subject: studyTimer.subject.trim() || 'Deep Work',
      topicCovered: studyTimer.topic.trim() || 'Cognitive Focus Block',
      durationMinutes,
      focusRating: 5,
      notes: `Logged via desktop wallpaper HUD (${durationMinutes}m).`,
    });

    resetStudyTimer();
  };

  const toggleSound = () => {
    const next = !settings.soundEffects;
    updateSettings({ soundEffects: next });
    if (next) sound.complete();
  };

  // Quick biometrics
  const currentWater = currentLog?.waterGlasses ?? currentLog?.trackers?.waterAndMovement?.waterGlasses ?? 0;
  const currentSleep = currentLog?.sleepHours ?? currentLog?.trackers?.sleep?.hours ?? 7;

  const handleWaterInc = () => {
    sound.tick();
    updateDailyLog({ waterGlasses: currentWater + 1 });
  };

  const handleWaterDec = () => {
    if (currentWater <= 0) return;
    sound.tick();
    updateDailyLog({ waterGlasses: currentWater - 1 });
  };

  const targetHours = settings.weeklyStudyTargetHours || 15;
  const weeklyPercent = Math.min(100, Math.round((weeklyStudyHoursLogged / targetHours) * 100));

  return (
    <div className="relative w-full min-h-screen pt-12 md:pt-14 pb-8 md:pb-10 px-8 md:px-12 flex flex-col justify-between select-none animate-fadeIn">
      {/* 1. FLOATING TOP UTILITY BAR - Lowered safely beneath macOS status bar */}
      <header className="flex items-center justify-between gap-4 z-20 pr-2 md:pr-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-accent/20 border border-accent/35 flex items-center justify-center text-starlight-lavender font-heading font-bold text-xs shadow-cosmic-glow">
            FM
          </div>
          <span className="text-xs font-sans uppercase tracking-[0.2em] text-starlight-lavender/80 font-semibold hidden sm:inline">
            Cosmic Desktop HUD
          </span>
        </div>

        {/* Center Pill: Current Date */}
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] text-xs font-sans text-paper-secondary shadow-sm">
          <Sparkles size={13} className="text-accent" />
          <span>{currentDateString}</span>
        </div>

        {/* Right Actions: Sound & Full App Switcher */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleSound}
            className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-paper-muted hover:text-paper-ink transition-colors"
            title={settings.soundEffects ? 'Sound active (Click to mute)' : 'Sound muted'}
          >
            {settings.soundEffects ? <Volume2 size={14} className="text-accent" /> : <VolumeX size={14} />}
          </button>

          <button
            onClick={() => onNavigate('dashboard')}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-xs font-sans font-medium text-starlight-lavender hover:text-white transition-all shadow-sm"
            title="Open Full Journal & Observatory Workspace"
          >
            <BookOpen size={13} />
            <span className="hidden sm:inline">Open Full App</span>
          </button>
        </div>
      </header>

      {/* 2. MAJESTIC CENTER CLOCK & PERSONAL GREETING */}
      <section className="text-center my-6 md:my-8 space-y-2 z-10">
        <div className="text-6xl md:text-8xl font-mono font-light tracking-wider text-paper-ink drop-shadow-md">
          {currentTime || '12:00:00 PM'}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm font-sans text-paper-secondary">
          <span className="text-lg font-heading font-medium text-paper-ink">
            {timeGreeting},
          </span>

          {isEditingName ? (
            <div className="inline-flex items-center gap-2">
              <input
                type="text"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSaveName()}
                className="border-b border-accent bg-transparent text-lg font-heading font-semibold text-starlight-lavender px-1 focus:outline-none"
                autoFocus
              />
              <button
                onClick={handleSaveName}
                className="text-xs px-2 py-0.5 rounded bg-accent text-white font-sans"
              >
                Save
              </button>
            </div>
          ) : (
            <span
              onClick={() => setIsEditingName(true)}
              className="group inline-flex items-center gap-1 cursor-pointer text-lg font-heading font-semibold text-starlight-lavender hover:text-white transition-colors"
              title="Click to personalize name"
            >
              <span>{settings.journalOwnerName || 'Friend'}.</span>
              <Edit3 size={12} className="opacity-0 group-hover:opacity-70 text-paper-muted transition-opacity" />
            </span>
          )}

          <span className="hidden sm:inline text-paper-muted">•</span>

          {isEditingReminder ? (
            <div className="inline-flex items-center gap-2">
              <input
                type="text"
                value={reminderText}
                onChange={(e) => setReminderText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSaveReminder()}
                className="border-b border-accent bg-transparent text-xs font-sans text-paper-secondary px-1 focus:outline-none"
                autoFocus
              />
              <button
                onClick={handleSaveReminder}
                className="text-[10px] px-2 py-0.5 rounded bg-accent text-white font-sans"
              >
                Save
              </button>
            </div>
          ) : (
            <span
              onClick={() => setIsEditingReminder(true)}
              className="group inline-flex items-center gap-1 cursor-pointer text-xs font-sans text-paper-muted hover:text-paper-ink transition-colors italic"
              title="Click to edit reminder"
            >
              <span>&ldquo;{settings.personalReminder || 'Remember, you are here for you.'}&rdquo;</span>
              <Edit3 size={11} className="opacity-0 group-hover:opacity-70 text-paper-muted transition-opacity" />
            </span>
          )}
        </div>
      </section>

      {/* 3. THREE-COLUMN CINEMATIC HUD WIDGETS */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl w-full mx-auto z-10 flex-1 items-stretch">
        {/* ======================================================== */}
        {/* LEFT COLUMN: TODAY'S SACRED PROMISE */}
        {/* ======================================================== */}
        <div className="p-6 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] shadow-journal flex flex-col justify-between space-y-4 transition-all hover:border-white/[0.14]">
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-starlight-lavender" />
                <h3 className="text-xs font-sans uppercase tracking-[0.16em] text-starlight-lavender font-semibold">
                  Today&apos;s Sacred Promise
                </h3>
              </div>
              <button
                onClick={() => {
                  setPromiseText(dailyPromise?.text || '');
                  setFinishLine(dailyPromise?.measurableFinishLine || '');
                  setDeadline(dailyPromise?.deadline || '18:00');
                  setIsEditPromiseOpen(true);
                }}
                className="text-[11px] font-sans text-paper-muted hover:text-paper-ink transition-colors flex items-center gap-1"
              >
                <Edit3 size={12} />
                <span>Edit</span>
              </button>
            </div>

            {hasPromise ? (
              <div className="space-y-2">
                <span className="text-[10px] font-sans uppercase tracking-wider text-paper-muted block">
                  The Inviolable Finish Line
                </span>
                <p className="text-lg font-heading font-semibold text-paper-ink leading-snug">
                  &ldquo;{dailyPromise?.text}&rdquo;
                </p>
                {dailyPromise?.measurableFinishLine && (
                  <p className="text-xs font-sans text-paper-secondary">
                    <strong className="text-starlight-lavender font-medium">Standard: </strong>
                    {dailyPromise.measurableFinishLine} (by {dailyPromise.deadline || 'end of day'})
                  </p>
                )}
              </div>
            ) : (
              <div className="py-6 text-center space-y-2">
                <p className="text-xs font-sans text-paper-muted">
                  No promise set for today.
                </p>
                <button
                  onClick={() => setIsEditPromiseOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-accent/20 hover:bg-accent/30 text-starlight-lavender border border-accent/40 text-xs font-sans transition-colors"
                >
                  <Plus size={13} />
                  <span>Define Finish Line</span>
                </button>
              </div>
            )}
          </div>

          {/* Outcome Buttons */}
          <div className="pt-3 border-t border-white/[0.06] space-y-2">
            <span className="text-[10px] font-sans uppercase tracking-wider text-paper-muted block">
              Status Audit:
            </span>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => handlePromiseStatus('kept')}
                className={`py-2 px-2 rounded-xl text-xs font-sans font-medium transition-all flex items-center justify-center gap-1 ${
                  dailyPromise?.status === 'kept'
                    ? 'bg-emerald-500/25 text-emerald-300 border border-emerald-500/40 shadow-sm'
                    : 'bg-white/[0.04] text-paper-secondary hover:text-paper-ink hover:bg-white/[0.08] border border-white/[0.08]'
                }`}
              >
                <Check size={12} />
                <span>Kept</span>
              </button>

              <button
                onClick={() => handlePromiseStatus('missed')}
                className={`py-2 px-2 rounded-xl text-xs font-sans font-medium transition-all flex items-center justify-center gap-1 ${
                  dailyPromise?.status === 'missed'
                    ? 'bg-rose-500/25 text-rose-300 border border-rose-500/40 shadow-sm'
                    : 'bg-white/[0.04] text-paper-secondary hover:text-paper-ink hover:bg-white/[0.08] border border-white/[0.08]'
                }`}
              >
                <XCircle size={12} />
                <span>Missed</span>
              </button>

              <button
                onClick={() => handlePromiseStatus('prevented')}
                className={`py-2 px-2 rounded-xl text-xs font-sans font-medium transition-all flex items-center justify-center gap-1 ${
                  dailyPromise?.status === 'prevented'
                    ? 'bg-amber-500/25 text-amber-300 border border-amber-500/40 shadow-sm'
                    : 'bg-white/[0.04] text-paper-secondary hover:text-paper-ink hover:bg-white/[0.08] border border-white/[0.08]'
                }`}
              >
                <AlertTriangle size={12} />
                <span>Obstacle</span>
              </button>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* CENTER COLUMN: DAILY RHYTHM & HABIT TRACKER */}
        {/* ======================================================== */}
        <div className="p-6 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] shadow-journal flex flex-col justify-between space-y-4 transition-all hover:border-white/[0.14]">
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <Flame size={16} className="text-starlight-lavender" />
                <h3 className="text-xs font-sans uppercase tracking-[0.16em] text-starlight-lavender font-semibold">
                  Daily Rhythm Pulse
                </h3>
              </div>
              <Badge variant={habitsDoneCount === activeHabits.length && activeHabits.length > 0 ? 'success' : 'starlight'}>
                {habitsDoneCount} / {activeHabits.length} kept
              </Badge>
            </div>

            {/* Habit Grid */}
            <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
              {activeHabits.length > 0 ? (
                activeHabits.map((habit) => {
                  const isDone = Boolean(habit.completions && habit.completions[selectedDate]);
                  return (
                    <div
                      key={habit.id}
                      onClick={() => {
                        sound.tick();
                        toggleHabit(habit.id, selectedDate);
                      }}
                      className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between text-xs select-none ${
                        isDone
                          ? 'bg-emerald-500/15 border-emerald-500/35 text-paper-ink'
                          : 'bg-white/[0.02] hover:bg-white/[0.06] border-white/[0.06] text-paper-secondary hover:text-paper-ink'
                      }`}
                    >
                      <div className="truncate pr-2">
                        <span className={`font-medium ${isDone ? 'line-through text-paper-muted' : ''}`}>
                          {habit.title}
                        </span>
                        <span className="text-[10px] text-paper-muted block">
                          {habit.streak || 0} day streak
                        </span>
                      </div>

                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border transition-colors ${
                          isDone
                            ? 'bg-emerald-500 border-emerald-400 text-white'
                            : 'border-white/[0.2]'
                        }`}
                      >
                        {isDone && <Check size={12} strokeWidth={3} />}
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-xs text-paper-muted text-center py-4">
                  No active habits. Add habits in Habits &amp; Rhythms.
                </p>
              )}
            </div>
          </div>

          {/* Quick Journal Trigger */}
          <div className="pt-3 border-t border-white/[0.06]">
            <button
              onClick={() => onNavigate('daily-tracker')}
              className="w-full py-2.5 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-sans text-starlight-lavender flex items-center justify-between transition-colors"
            >
              <div className="flex items-center gap-2">
                <BookOpen size={13} />
                <span>Write in Starlight Journal</span>
              </div>
              <span className="text-[10px] text-paper-muted">Vent / Reflect →</span>
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* RIGHT COLUMN: DEEP STUDY STOPWATCH CONSOLE */}
        {/* ======================================================== */}
        <div className="p-6 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] shadow-journal flex flex-col justify-between space-y-4 transition-all hover:border-white/[0.14]">
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-starlight-lavender" />
                <h3 className="text-xs font-sans uppercase tracking-[0.16em] text-starlight-lavender font-semibold">
                  Deep Study Console
                </h3>
              </div>
              <Badge variant={studyTimer.isRunning ? 'accent' : 'neutral'}>
                {studyTimer.isRunning ? 'ACTIVE FOCUS' : 'STOPPED'}
              </Badge>
            </div>

            {/* Stopwatch Time */}
            <div className="text-center py-2">
              <div className="text-4xl md:text-5xl font-mono font-light tracking-wider text-paper-ink">
                {formatTimer(studyTimerElapsed)}
              </div>
              <span className="text-[10px] font-sans text-paper-muted uppercase tracking-wider block mt-1">
                Background-Resilient Stopwatch
              </span>
            </div>

            {/* Subject / Topic Inputs */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <input
                type="text"
                value={studyTimer.subject}
                onChange={(e) => updateStudyTimerMeta(e.target.value, studyTimer.topic)}
                placeholder="Subject (e.g. Code)"
                className="bg-white/[0.03] border border-white/[0.08] rounded-xl px-2.5 py-1.5 text-xs text-paper-ink font-sans focus:outline-none focus:border-accent"
              />
              <input
                type="text"
                value={studyTimer.topic}
                onChange={(e) => updateStudyTimerMeta(studyTimer.subject, e.target.value)}
                placeholder="Topic (e.g. Design)"
                className="bg-white/[0.03] border border-white/[0.08] rounded-xl px-2.5 py-1.5 text-xs text-paper-ink font-sans focus:outline-none focus:border-accent"
              />
            </div>
          </div>

          {/* Stopwatch Controls */}
          <div className="pt-3 border-t border-white/[0.06] space-y-2">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  if (studyTimer.isRunning) pauseStudyTimer();
                  else startStudyTimer();
                }}
                className={`flex-1 py-2 px-3 rounded-xl font-sans font-medium text-xs text-white transition-all flex items-center justify-center gap-1.5 ${
                  studyTimer.isRunning
                    ? 'bg-amber-500 hover:bg-amber-600'
                    : 'bg-accent hover:bg-accent-hover shadow-cosmic-glow'
                }`}
              >
                {studyTimer.isRunning ? <Pause size={13} /> : <Play size={13} />}
                <span>{studyTimer.isRunning ? 'Pause' : 'Start Focus'}</span>
              </button>

              {studyTimerElapsed > 0 && (
                <>
                  <button
                    type="button"
                    onClick={handleLogStudy}
                    className="py-2 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-sans text-xs transition-colors flex items-center gap-1"
                    title="Log study block directly to journal"
                  >
                    <CheckCircle2 size={13} />
                    <span>Log</span>
                  </button>

                  <button
                    type="button"
                    onClick={resetStudyTimer}
                    className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-paper-muted hover:text-paper-ink transition-colors"
                    title="Reset Stopwatch"
                  >
                    <RotateCcw size={13} />
                  </button>
                </>
              )}
            </div>

            {/* Weekly Quota Bar */}
            <div className="pt-1 flex items-center justify-between text-[11px] font-sans text-paper-muted">
              <span>Weekly: {weeklyStudyHoursLogged}h / {targetHours}h</span>
              <span>{weeklyPercent}% quota</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FLOATING BOTTOM STATUS DOCK */}
      <footer className="flex flex-wrap items-center justify-center sm:justify-between gap-4 pt-6 z-20 text-xs font-sans text-paper-muted">
        <div className="flex items-center gap-4 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-full px-5 py-2">
          {/* Sleep */}
          <div className="flex items-center gap-1.5">
            <Moon size={13} className="text-starlight-lavender" />
            <span>Sleep: <strong className="text-paper-ink">{currentSleep}h</strong></span>
          </div>

          <span className="text-white/[0.1]">•</span>

          {/* Hydration with Quick Tally */}
          <div className="flex items-center gap-1.5">
            <Droplets size={13} className="text-starlight-lavender" />
            <span>Water: <strong className="text-paper-ink">{currentWater}</strong>/8</span>
            <button
              onClick={handleWaterInc}
              className="w-4 h-4 rounded bg-white/[0.08] hover:bg-accent text-white flex items-center justify-center text-[10px] ml-1 transition-colors"
              title="Add 1 glass"
            >
              +
            </button>
            <button
              onClick={handleWaterDec}
              className="w-4 h-4 rounded bg-white/[0.08] hover:bg-white/[0.15] text-white flex items-center justify-center text-[10px] transition-colors"
              title="Remove 1 glass"
            >
              -
            </button>
          </div>

          <span className="text-white/[0.1]">•</span>

          {/* Rating */}
          <div className="flex items-center gap-1.5">
            <Sparkles size={13} className="text-accent" />
            <span>Day Rating: <strong className="text-paper-ink">{currentLog?.ratingOutOfTen || '—'}/10</strong></span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-[11px] text-paper-muted">
          <span className="italic">&ldquo;Remember, you are here for you.&rdquo;</span>
        </div>
      </footer>

      {/* EDIT PROMISE MODAL */}
      <Modal
        isOpen={isEditPromiseOpen}
        onClose={() => setIsEditPromiseOpen(false)}
        title="Forge Today's Sacred Promise"
        subtitle="One clear, measurable commitment for your desktop."
      >
        <form onSubmit={handleSavePromiseEdit} className="space-y-4">
          <div>
            <label className="block text-xs font-sans text-starlight-lavender mb-1 font-medium">
              Today&apos;s Single Commitment
            </label>
            <input
              type="text"
              required
              value={promiseText}
              onChange={(e) => setPromiseText(e.target.value)}
              placeholder="e.g. Complete 2 Deep Study Blocks on Discrete Math"
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-2 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent"
            />
          </div>

          <div>
            <label className="block text-xs font-sans text-starlight-lavender mb-1 font-medium">
              Measurable Finish Line Standard
            </label>
            <input
              type="text"
              value={finishLine}
              onChange={(e) => setFinishLine(e.target.value)}
              placeholder="e.g. 20 practice problems solved without distraction"
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-2 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent"
            />
          </div>

          <div>
            <label className="block text-xs font-sans text-paper-muted mb-1">
              Target Deadline
            </label>
            <input
              type="text"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              placeholder="e.g. 18:00 or Before dinner"
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-2 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2 border-t border-white/[0.06]">
            <Button variant="ghost" size="sm" type="button" onClick={() => setIsEditPromiseOpen(false)}>
              Cancel
            </Button>
            <Button variant="starlight" size="sm" type="submit">
              Seal Promise
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
