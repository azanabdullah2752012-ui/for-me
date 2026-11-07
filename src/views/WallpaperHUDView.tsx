import React, { useState, useEffect } from 'react';
import { 
  Check, 
  Plus, 
  Trash2, 
  Play, 
  Pause, 
  RotateCcw, 
  Sparkles, 
  Moon, 
  Droplets, 
  BookOpen, 
  Headphones, 
  Volume2, 
  VolumeX, 
  Maximize2,
  Eye,
  EyeOff,
  Clock,
  CheckSquare,
  Droplet,
  CalendarClock,
  X,
  Sunrise,
  Sun
} from 'lucide-react';
import { useData } from '../context/DataContext';

export const WallpaperHUDView: React.FC = () => {
  const { 
    profile, 
    tasks, 
    toggleTask, 
    addTask, 
    deleteTask,
    habits, 
    toggleHabit, 
    addHabit,
    studySeconds, 
    isStudyActive, 
    setStudySubject, 
    toggleStudyTimer, 
    resetStudyTimer,
    studySessions,
    hydration, 
    setHydration, 
    sleepHours, 
    setSleep,
    dailyRating, 
    setDailyRating,
    audioStations, 
    activeStationId, 
    isAudioPlaying, 
    setIsAudioPlaying,
    setActiveTab 
  } = useData();

  // Clock
  const [clockTime, setClockTime] = useState('06:26:17');
  const [clockAmPm, setClockAmPm] = useState('PM');
  const [currentDateStr, setCurrentDateStr] = useState('Sunday, November 1, 2026');
  const [newTaskInput, setNewTaskInput] = useState('');
  const [studyTopic, setStudyTopic] = useState('Design');
  const [studyMode, setStudyMode] = useState('Deep Work');
  const [isRoutineOpen, setIsRoutineOpen] = useState(false);
  const [isAudioDockOpen, setIsAudioDockOpen] = useState(false);
  const [soundMuted, setSoundMuted] = useState(false);
  const [isHUDHidden, setIsHUDHidden] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const h = now.getHours();
      const m = now.getMinutes();
      const s = now.getSeconds();
      const ampm = h >= 12 ? 'PM' : 'AM';
      const formattedH = (h % 12 || 12).toString().padStart(2, '0');
      const formattedM = m.toString().padStart(2, '0');
      const formattedS = s.toString().padStart(2, '0');

      setClockTime(`${formattedH}:${formattedM}:${formattedS}`);
      setClockAmPm(ampm);

      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      setCurrentDateStr(`${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isHUDHidden) {
        setIsHUDHidden(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isHUDHidden]);

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTaskInput.trim()) {
      addTask(newTaskInput.trim());
      setNewTaskInput('');
    }
  };

  const tasksDoneCount = tasks.filter((t) => t.completed).length;
  const tasksPercent = tasks.length > 0 ? Math.round((tasksDoneCount / tasks.length) * 100) : 0;

  const habitsKeptCount = habits.filter((h) => h.completed).length;
  const habitsPercent = habits.length > 0 ? Math.round((habitsKeptCount / habits.length) * 100) : 0;

  // Real weekly study hours calculation
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  const weekSessions = (studySessions || []).filter((s) => new Date(s.timestamp) >= sevenDaysAgo);
  const weeklyStudyHours = +(weekSessions.reduce((acc, s) => acc + s.durationSeconds, 0) / 3600).toFixed(1);
  const weeklyQuotaPct = Math.min(100, Math.round((weeklyStudyHours / 15) * 100));

  const formatStopwatch = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const activeStation = audioStations.find((s) => s.id === activeStationId) || audioStations[0];

  // Accessible keyboard shortcuts (Escape closes drawers & modals)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsRoutineOpen(false);
        setIsAudioDockOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative w-screen min-h-screen lg:h-screen lg:max-h-screen overflow-y-auto lg:overflow-hidden flex flex-col justify-between pt-safe-top pt-10 sm:pt-6 lg:pt-8 px-4 sm:px-6 md:px-8 lg:px-14 pb-safe-bottom pb-8 sm:pb-6 select-none z-10 animate-fadeIn">
      {/* Accessible landmark heading */}
      <h1 className="sr-only">FOR ME — Private Life Ledger & Personal Tracking Sanctuary</h1>

      {/* ======================================================== */}
      {/* 1. FLOATING TOP UTILITY BAR (Exact reference layout)     */}
      {/* ======================================================== */}
      <header className="flex flex-wrap items-center justify-between w-full min-h-12 shrink-0 z-20 gap-3 sm:gap-4 mb-3 sm:mb-2">
        {/* Left: Brand Identity */}
        <div 
          onClick={() => setActiveTab('overview')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveTab('overview'); }}
          aria-label="FM FOR ME — Open Workspace & Life Overview"
          className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group shrink-0"
          title="Open Workspace & Life Overview"
        >
          <div className="w-8 h-8 rounded-full border border-white/20 bg-white/[0.04] group-hover:bg-white/[0.1] group-hover:border-white/40 flex items-center justify-center text-white text-xs font-mono font-medium tracking-tight shadow-sm transition-all">
            FM
          </div>
          <span className="font-sans font-bold text-xs tracking-[0.2em] text-white uppercase group-hover:opacity-85 transition-opacity">
            FOR ME
          </span>
        </div>

        {/* Center Pill: Current Date (hidden on mobile to prevent overflow) */}
        <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.035] backdrop-blur-2xl border border-white/[0.08] text-xs font-sans text-zinc-300 shadow-sm shrink-0">
          <Sparkles className="w-3.5 h-3.5 text-violet-300" />
          <span>{currentDateStr}</span>
        </div>

        {/* Right Toolbar */}
        <div className="flex items-center gap-1 sm:gap-1.5 p-1 rounded-2xl bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] text-xs text-zinc-300 shrink-0">
          <button
            type="button"
            onClick={() => setIsHUDHidden(!isHUDHidden)}
            className={`px-2.5 sm:px-3 py-1.5 rounded-xl transition-all font-medium text-[11px] sm:text-xs flex items-center gap-1.5 cursor-pointer ${
              isHUDHidden
                ? 'bg-violet-600/30 hover:bg-violet-600/50 text-violet-200 border border-violet-400/30 shadow-sm'
                : 'hover:bg-white/[0.06] hover:text-white text-zinc-300'
            }`}
            aria-label={isHUDHidden ? 'Show workspace controls' : 'Hide workspace controls'}
            title={isHUDHidden ? 'Show Controls' : 'Hide Controls'}
          >
            {isHUDHidden ? (
              <>
                <Eye className="w-3.5 h-3.5 text-violet-300" />
                <span className="hidden sm:inline">Show</span>
              </>
            ) : (
              <>
                <EyeOff className="w-3.5 h-3.5 text-zinc-400" />
                <span className="hidden sm:inline">Hide</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => setIsRoutineOpen(true)}
            className="px-2.5 sm:px-3 py-1.5 rounded-xl hover:bg-white/[0.06] hover:text-white flex items-center gap-1.5 transition-colors font-medium text-[11px] sm:text-xs"
          >
            <CalendarClock className="w-3.5 h-3.5 text-zinc-400" />
            <span className="hidden sm:inline">Routine</span>
          </button>

          <button
            type="button"
            onClick={() => setSoundMuted(!soundMuted)}
            className="p-1.5 sm:px-2 rounded-xl hover:bg-white/[0.06] hover:text-white transition-colors cursor-pointer"
            aria-label={soundMuted ? 'Unmute focus audio' : 'Mute focus audio'}
            title={soundMuted ? 'Unmute' : 'Mute'}
          >
            {soundMuted ? <VolumeX className="w-4 h-4 text-zinc-500" /> : <Volume2 className="w-4 h-4 text-zinc-300" />}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('journal')}
            className="px-2.5 sm:px-3 py-1.5 rounded-xl hover:bg-white/[0.06] hover:text-white flex items-center gap-1.5 transition-colors font-medium text-zinc-300 text-[11px] sm:text-xs"
          >
            <BookOpen className="w-3.5 h-3.5 text-zinc-400" />
            <span className="hidden sm:inline">Journal</span>
          </button>
        </div>
      </header>

      {/* ======================================================== */}
      {/* 2. GRAND CENTER RETRO DIGITAL CLOCK & GREETING           */}
      {/* ======================================================== */}
      <section className="text-center shrink-0 my-5 sm:my-auto py-3 sm:py-2 space-y-3">
        <div className="inline-flex items-baseline justify-center gap-2 sm:gap-3 md:gap-5 font-display text-white select-none leading-none">
          <span className="text-5xl sm:text-6xl md:text-8xl lg:text-[108px] font-light tracking-[0.05em] drop-shadow-[0_8px_40px_rgba(0,0,0,0.85)] tabular-nums">
            {clockTime}
          </span>
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display text-zinc-300 font-normal">
            {clockAmPm}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-zinc-300 font-sans tracking-wide px-4">
          Good evening, <span className="text-white font-medium">{profile.name}</span>. •{' '}
          <span className="italic text-zinc-400">&ldquo;Remember, you are here for you.&rdquo;</span>
        </p>
      </section>

      {/* ======================================================== */}
      {/* 3. THREE FROSTED GLASS CONSOLE CARDS (HIDEABLE)          */}
      {/* ======================================================== */}
      {!isHUDHidden ? (
        <>
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-auto items-stretch w-full max-lg:py-6 lg:max-h-[52vh]">
        {/* ── CARD 1: TASKS FOR THE DAY ── */}
        <div className="p-6 rounded-[2rem] cosmic-card flex flex-col justify-between h-auto min-h-[310px] lg:h-full overflow-hidden transition-all duration-300">
          <div className="flex-1 min-h-0 flex flex-col space-y-3">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] shrink-0">
              <div className="flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-violet-300" />
                <h2 className="text-xs font-display uppercase tracking-[0.18em] text-white font-semibold">
                  Tasks for the Day
                </h2>
              </div>
              <span className="text-[11px] font-display font-medium px-2.5 py-0.5 rounded-full bg-white/[0.06] text-violet-200 border border-white/[0.10] tabular-nums">
                {tasksDoneCount}/{tasks.length} done
              </span>
            </div>

            {/* Input Form */}
            <form onSubmit={handleAddTask} className="flex items-center gap-2 shrink-0">
              <input
                type="text"
                aria-label="Add task for today"
                placeholder="Add task for today (Press Enter)..."
                value={newTaskInput}
                onChange={(e) => setNewTaskInput(e.target.value)}
                className="flex-1 cosmic-input rounded-xl px-3.5 py-2 text-xs placeholder-zinc-500"
              />
              <button
                type="submit"
                aria-label="Add task"
                disabled={!newTaskInput.trim()}
                className="w-8 h-8 rounded-xl bg-violet-600/40 hover:bg-violet-600 text-white border border-violet-400/30 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-all shrink-0 cursor-pointer shadow-sm"
              >
                <Plus className="w-4 h-4" />
              </button>
            </form>

            {/* Tasks List */}
            <div 
              tabIndex={0}
              role="region"
              aria-label="Daily tasks list"
              className="flex-1 min-h-0 space-y-1.5 overflow-y-auto pr-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-violet-400/50 rounded-xl"
            >
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className={`p-2.5 rounded-xl border transition-all flex items-center justify-between text-xs select-none group ${
                    task.completed
                      ? 'bg-white/[0.015] border-white/[0.04] text-zinc-500'
                      : 'bg-white/[0.035] hover:bg-white/[0.07] border-white/[0.08] hover:border-violet-400/20 text-zinc-200'
                  }`}
                >
                  <div
                    className="flex items-center gap-2.5 truncate flex-1 cursor-pointer pr-2"
                    onClick={() => toggleTask(task.id)}
                  >
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                        task.completed
                          ? 'bg-emerald-500 border-emerald-400 text-white shadow-sm'
                          : 'border-white/[0.25] group-hover:border-violet-400'
                      }`}
                    >
                      {task.completed && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                    </div>
                    <span className={`font-sans truncate ${task.completed ? 'line-through text-zinc-500' : ''}`}>
                      {task.text}
                    </span>
                  </div>

                  <button
                    type="button"
                    aria-label={`Delete task: ${task.text}`}
                    onClick={() => deleteTask(task.id)}
                    className="opacity-0 group-hover:opacity-100 text-zinc-500 hover:text-red-400 transition-opacity p-1 cursor-pointer focus:opacity-100"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-zinc-400 font-sans shrink-0">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Day Progress
            </span>
            <span className="font-display font-medium text-zinc-200 tabular-nums">{tasksPercent}% done</span>
          </div>
        </div>

        {/* ── CARD 2: DAILY RHYTHM PULSE ── */}
        <div className="p-6 rounded-[2rem] cosmic-card flex flex-col justify-between h-auto min-h-[310px] lg:h-full overflow-hidden transition-all duration-300">
          <div className="flex-1 min-h-0 flex flex-col space-y-3">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] shrink-0">
              <div className="flex items-center gap-2">
                <Droplet className="w-4 h-4 text-violet-300" />
                <h2 className="text-xs font-display uppercase tracking-[0.18em] text-white font-semibold">
                  Daily Rhythm Pulse
                </h2>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-display font-medium px-2.5 py-0.5 rounded-full bg-white/[0.06] text-violet-200 border border-white/[0.10] tabular-nums">
                  {habitsKeptCount}/{habits.length} kept
                </span>
                <button
                  type="button"
                  aria-label="Add habit"
                  onClick={() => {
                    const name = prompt('Add new daily rhythm habit:');
                    if (name) addHabit(name);
                  }}
                  className="w-5 h-5 rounded-md bg-white/[0.08] hover:bg-white text-zinc-300 hover:text-black flex items-center justify-center transition-colors cursor-pointer"
                  title="Add habit"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Rhythm List */}
            <div 
              tabIndex={0}
              role="region"
              aria-label="Daily rhythm habits list"
              className="flex-1 min-h-0 space-y-1.5 overflow-y-auto pr-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-violet-400/50 rounded-xl"
            >
              {habits.map((habit) => (
                <div
                  key={habit.id}
                  onClick={() => toggleHabit(habit.id)}
                  className={`p-2.5 rounded-xl border transition-all flex items-center justify-between text-xs cursor-pointer select-none group ${
                    habit.completed
                      ? 'bg-white/[0.015] border-white/[0.04] text-zinc-400'
                      : 'bg-white/[0.035] hover:bg-white/[0.07] border-white/[0.08] hover:border-violet-400/20 text-zinc-200'
                  }`}
                >
                  <div className="flex flex-col gap-0.5 truncate pr-2">
                    <span className={`font-sans truncate ${habit.completed ? 'line-through text-zinc-400' : 'text-zinc-200'}`}>
                      {habit.name}
                    </span>
                    <div className="flex items-center gap-1.5 text-[10px] text-zinc-400 font-mono">
                      {habit.streak > 0 ? (
                        <span className="text-amber-400 flex items-center gap-0.5 font-medium">
                          🔥 {habit.streak} day streak
                        </span>
                      ) : (
                        <span>Ready today</span>
                      )}
                    </div>
                  </div>

                  <div
                    className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                      habit.completed
                        ? 'bg-emerald-500 border-emerald-400 text-white shadow-sm'
                        : 'border-white/[0.25] group-hover:border-violet-400'
                    }`}
                  >
                    {habit.completed && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-zinc-400 font-sans shrink-0">
            <button
              onClick={() => setActiveTab('journal')}
              className="hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5 text-violet-300" />
              <span>Journal & Reflect →</span>
            </button>
            <span className="font-display font-medium text-zinc-200 tabular-nums">{habitsPercent}% kept</span>
          </div>
        </div>

        {/* ── CARD 3: DEEP STUDY CONSOLE ── */}
        <div className="p-6 rounded-[2rem] cosmic-card flex flex-col justify-between h-auto min-h-[310px] lg:h-full overflow-hidden transition-all duration-300">
          <div className="flex-1 min-h-0 flex flex-col space-y-3">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] shrink-0">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-violet-300" />
                <h2 className="text-xs font-display uppercase tracking-[0.18em] text-white font-semibold">
                  Deep Study Console
                </h2>
              </div>
              <span className={`text-[10px] font-display px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                isStudyActive 
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 animate-pulse'
                  : 'bg-white/[0.06] text-zinc-400 border border-white/[0.08]'
              }`}>
                {isStudyActive ? 'RUNNING' : 'STOPPED'}
              </span>
            </div>

            {/* Big Stopwatch Display */}
            <div className="text-center py-2">
              <div className="text-5xl lg:text-6xl font-display font-light tracking-widest text-white leading-none tabular-nums">
                {formatStopwatch(studySeconds)}
              </div>
              <p className="text-[10px] font-display tracking-[0.2em] text-zinc-500 uppercase mt-2">
                Background-Resilient Stopwatch
              </p>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                aria-label="Focus session mode"
                value={studyMode}
                onChange={(e) => setStudyMode(e.target.value)}
                placeholder="Mode (e.g. Deep Work)"
                className="w-full cosmic-input rounded-xl px-3 py-2 text-xs placeholder-zinc-500"
              />
              <input
                type="text"
                aria-label="Focus session topic"
                value={studyTopic}
                onChange={(e) => {
                  setStudyTopic(e.target.value);
                  setStudySubject(e.target.value);
                }}
                placeholder="Topic (e.g. Design)"
                className="w-full cosmic-input rounded-xl px-3 py-2 text-xs placeholder-zinc-500"
              />
            </div>

            {/* Full-width Purple CTA */}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={toggleStudyTimer}
                className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-display text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(147,51,234,0.40)] border border-violet-400/30 transition-all cursor-pointer"
              >
                {isStudyActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5 fill-current" />}
                <span>{isStudyActive ? 'Pause Focus' : 'Start Focus'}</span>
              </button>

              <button
                type="button"
                aria-label="Reset stopwatch"
                onClick={resetStudyTimer}
                className="px-3.5 py-3 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white border border-white/[0.08] transition-colors cursor-pointer"
                title="Reset stopwatch"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-zinc-400 font-sans shrink-0">
            <span>Weekly: <strong className="text-zinc-200 font-display">{weeklyStudyHours}h</strong> / 15h</span>
            <span className="font-display font-medium text-zinc-200 tabular-nums">{weeklyQuotaPct}% quota</span>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. FLOATING BOTTOM STATUS DOCKS                          */}
      {/* ======================================================== */}
      <footer className="relative shrink-0 flex flex-col xl:flex-row items-center justify-center w-full pt-8 pb-4 z-20 gap-4 mt-auto">
        {/* Center Pill: Sleep, Water, Day Rating */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 px-5 sm:px-7 py-3 rounded-full cosmic-dock text-xs font-sans text-zinc-300">
          {/* Sleep */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => setSleep((sleepHours % 12) + 1, 0)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSleep((sleepHours % 12) + 1, 0); }}
            aria-label={`Cycle sleep hours. Current: ${sleepHours} hours`}
            className="flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-violet-400/50 rounded-lg px-1.5 py-0.5"
            title="Click or press Enter to cycle sleep hours"
          >
            <Moon className="w-3.5 h-3.5 text-zinc-300" />
            <span>Sleep: <strong className="text-white font-display tabular-nums">{sleepHours}h</strong></span>
          </div>

          <span className="text-white/[0.1]">•</span>

          {/* Water */}
          <div className="flex items-center gap-2">
            <Droplets className="w-3.5 h-3.5 text-blue-400" />
            <span>Water: <strong className="text-white font-display tabular-nums">{Math.round((hydration / 100) * 8)}/8</strong></span>
            <div className="flex items-center gap-1 ml-0.5">
              <button
                type="button"
                aria-label="Decrease water count by 1 glass"
                onClick={() => setHydration((prev) => Math.max(0, prev - 12.5))}
                className="w-4 h-4 rounded-md bg-white/[0.05] hover:bg-white/[0.15] border border-white/[0.1] flex items-center justify-center text-[10px] text-white transition-colors cursor-pointer"
              >
                -
              </button>
              <button
                type="button"
                aria-label="Increase water count by 1 glass"
                onClick={() => setHydration((prev) => Math.min(100, prev + 12.5))}
                className="w-4 h-4 rounded-md bg-white/[0.05] hover:bg-white/[0.15] border border-white/[0.1] flex items-center justify-center text-[10px] text-white transition-colors cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          <span className="text-white/[0.1]">•</span>

          {/* Day Rating */}
          <div 
            role="button"
            tabIndex={0}
            onClick={() => setDailyRating(dailyRating >= 10 ? 1 : dailyRating + 1)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setDailyRating(dailyRating >= 10 ? 1 : dailyRating + 1); }}
            aria-label={`Cycle day rating. Current: ${dailyRating} out of 10`}
            className="flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-violet-400/50 rounded-lg px-1.5 py-0.5"
            title="Click or press Enter to cycle rating"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Day Rating: <strong className="text-white font-display tabular-nums">{dailyRating}/10</strong></span>
          </div>
        </div>

        {/* Right Floating Pill: Focus Audio */}
        <div 
          onClick={() => setIsAudioDockOpen(true)}
          className="xl:absolute xl:right-0 xl:bottom-0 flex items-center gap-2.5 px-4 py-2 rounded-2xl cosmic-dock text-xs font-sans text-white cursor-pointer group transition-all"
        >
          <div className="w-8 h-8 rounded-xl bg-violet-600/20 border border-violet-400/30 flex items-center justify-center text-violet-300 group-hover:text-white transition-colors">
            <Headphones className="w-4 h-4" />
          </div>
          <div className="text-left pr-1">
            <p className="text-xs font-display font-medium text-white group-hover:text-violet-200 leading-tight">
              Focus Audio
            </p>
            <p className="text-[10px] text-zinc-400 leading-tight">
              {isAudioPlaying ? activeStation.name : 'Add Spotify/YouTube'}
            </p>
          </div>
          <Maximize2 className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
        </div>
      </footer>
    </>
  ) : (
    /* CLEAN VIEW (EMPTY CENTER WITH ZERO CLUTTER) */
    <div 
      onClick={() => setIsHUDHidden(false)}
      className="flex-1 w-full cursor-pointer flex items-center justify-center select-none"
      title="Click anywhere to restore workspace controls"
    />
  )}

      {/* ======================================================== */}
      {/* 5. SIDE ROUTINE VERTICAL TAB (HIDDEN IN MINIMAL VIEW)    */}
      {/* ======================================================== */}
      {!isHUDHidden && (
        <button
          onClick={() => setIsRoutineOpen(true)}
          className="fixed left-0 top-1/2 -translate-y-1/2 -rotate-90 origin-left px-3.5 py-1.5 rounded-t-xl bg-[#14162e]/90 hover:bg-[#1a1d3d] backdrop-blur-xl border border-white/[0.1] text-[10px] font-mono tracking-widest uppercase text-zinc-300 hover:text-white transition-all z-30 flex items-center gap-1.5 shadow-lg"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
          <span>ROUTINE T.T 📋</span>
        </button>
      )}

      {/* Routine Drawer */}
      {isRoutineOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsRoutineOpen(false)} />
          <aside className="relative z-10 w-80 sm:w-96 max-w-[90vw] h-full bg-[#0d0f17]/95 backdrop-blur-3xl border-r border-white/[0.1] shadow-2xl p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <CalendarClock className="w-4 h-4 text-violet-300" />
                  <h3 className="text-xs font-sans uppercase tracking-[0.16em] text-white font-semibold">
                    Daily Routine (T.T)
                  </h3>
                </div>
                <button onClick={() => setIsRoutineOpen(false)} className="text-zinc-400 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-center justify-between pb-1.5">
                    <span className="font-semibold text-amber-300 flex items-center gap-1.5">
                      <Sunrise className="w-3.5 h-3.5" /> Morning Protocol
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400">06:00 – 09:00</span>
                  </div>
                  <p className="text-zinc-300 text-[11px] leading-relaxed">
                    Hydration, natural sunlight, 30-min movement, deep work session.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-center justify-between pb-1.5">
                    <span className="font-semibold text-sky-300 flex items-center gap-1.5">
                      <Sun className="w-3.5 h-3.5" /> Afternoon Focus
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400">09:00 – 17:00</span>
                  </div>
                  <p className="text-zinc-300 text-[11px] leading-relaxed">
                    Coursework problem sets, core academic goals, review notes.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-center justify-between pb-1.5">
                    <span className="font-semibold text-violet-300 flex items-center gap-1.5">
                      <Moon className="w-3.5 h-3.5" /> Evening Wind-Down
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400">17:00 – 22:30</span>
                  </div>
                  <p className="text-zinc-300 text-[11px] leading-relaxed">
                    Nightly reflection, journal entry, book reading, digital sunset.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsRoutineOpen(false)}
              className="w-full py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-xs text-white font-medium transition-colors"
            >
              Close Routine
            </button>
          </aside>
        </div>
      )}

      {/* Audio Quick Dock Modal */}
      {isAudioDockOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/75 backdrop-blur-md" onClick={() => setIsAudioDockOpen(false)} />
          <div className="relative z-10 w-full max-w-lg bg-[#0e1022] border border-white/[0.1] rounded-3xl p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
              <h3 className="font-serif text-lg text-white font-normal">Focus Audio Stream</h3>
              <button onClick={() => setIsAudioDockOpen(false)} className="text-zinc-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            {isAudioPlaying && activeStation && (
              <div className="w-full h-32 rounded-xl overflow-hidden border border-white/[0.1] bg-black">
                <iframe
                  src={activeStation.embedSrc}
                  title={activeStation.name}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            )}

            <div className="flex justify-between items-center pt-2">
              <button
                onClick={() => {
                  setIsAudioDockOpen(false);
                  setActiveTab('music');
                }}
                className="text-xs text-violet-300 hover:underline"
              >
                Open Full Audio Sanctuary →
              </button>
              <button
                onClick={() => setIsAudioPlaying(!isAudioPlaying)}
                className="px-5 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-xl text-xs font-semibold"
              >
                {isAudioPlaying ? 'Stop Audio' : 'Play Stream'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
