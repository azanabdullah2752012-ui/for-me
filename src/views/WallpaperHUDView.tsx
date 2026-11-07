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
  Minimize2,
  EyeOff,
  Clock,
  CheckSquare,
  Droplet,
  CalendarClock,
  Sliders,
  X,
  Sunrise,
  Sun
} from 'lucide-react';
import { useData } from '../context/DataContext';
import { WallpaperStudioModal } from '../components/common/WallpaperStudioModal';

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
    setActiveTab,
    isHUDHidden,
    setIsHUDHidden,
    wallpaperSettings
  } = useData();

  const [isStudioOpen, setIsStudioOpen] = useState(false);

  // Clock
  const [clockTime, setClockTime] = useState('06:26:17');
  const [clockAmPm, setClockAmPm] = useState('PM');
  const [currentDateStr, setCurrentDateStr] = useState('Sunday, November 1, 2026');
  const [newTaskInput, setNewTaskInput] = useState('');
  const [studyTopic, setStudyTopic] = useState('Design');
  const [studyMode, setStudyMode] = useState('Deep Work');
  const [isRoutineOpen, setIsRoutineOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const h = now.getHours();
      const m = now.getMinutes();
      const s = now.getSeconds();
      const ampm = h >= 12 ? 'PM' : 'AM';

      const is24h = wallpaperSettings.clockFormat === '24h';
      const formattedH = is24h 
        ? h.toString().padStart(2, '0') 
        : (h % 12 || 12).toString().padStart(2, '0');
      const formattedM = m.toString().padStart(2, '0');
      const formattedS = s.toString().padStart(2, '0');

      if (wallpaperSettings.showSeconds) {
        setClockTime(`${formattedH}:${formattedM}:${formattedS}`);
      } else {
        setClockTime(`${formattedH}:${formattedM}`);
      }
      setClockAmPm(is24h ? '' : ampm);

      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      setCurrentDateStr(`${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [wallpaperSettings.clockFormat, wallpaperSettings.showSeconds]);

  // Dynamic clock styles based on wallpaperSettings
  const clockFontClass = 
    wallpaperSettings.clockFontStyle === 'serif' ? 'font-serif tracking-normal' :
    wallpaperSettings.clockFontStyle === 'mono' ? 'font-mono tracking-tight' :
    wallpaperSettings.clockFontStyle === 'minimal' ? 'font-sans font-extralight tracking-[0.08em]' :
    'font-display tracking-[0.05em]';

  const clockSizeHUD = 
    wallpaperSettings.clockSize === 'compact' ? 'text-4xl sm:text-5xl md:text-7xl lg:text-[88px]' :
    wallpaperSettings.clockSize === 'heroic' ? 'text-6xl sm:text-7xl md:text-9xl lg:text-[132px]' :
    'text-5xl sm:text-6xl md:text-8xl lg:text-[108px]';

  const clockSizeZen = 
    wallpaperSettings.clockSize === 'compact' ? 'text-5xl sm:text-6xl md:text-8xl lg:text-[112px]' :
    wallpaperSettings.clockSize === 'heroic' ? 'text-7xl sm:text-8xl md:text-[144px] lg:text-[180px]' :
    'text-6xl sm:text-7xl md:text-9xl lg:text-[144px]';

  const clockHaloClass = 
    wallpaperSettings.clockHalo === 'none' ? 'opacity-0' :
    wallpaperSettings.clockHalo === 'subtle' ? 'bg-violet-600/6 blur-[80px]' :
    'bg-violet-600/14 blur-[100px] animate-pulse';

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

  // Accessible keyboard shortcuts (Escape closes drawers & modals)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsRoutineOpen(false);
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
      <header className={`flex flex-wrap items-center justify-between w-full min-h-12 shrink-0 z-20 gap-3 sm:gap-4 mb-3 sm:mb-2 transition-opacity duration-300 ${
        isHUDHidden ? 'opacity-40 hover:opacity-100' : 'opacity-100'
      }`}>
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
            className={`px-3 py-1.5 rounded-xl transition-all font-medium text-xs flex items-center gap-1.5 cursor-pointer ${
              isHUDHidden
                ? 'bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold shadow-[0_0_20px_rgba(251,191,36,0.35)]'
                : 'hover:bg-white/[0.06] hover:text-white text-zinc-300'
            }`}
            aria-label={isHUDHidden ? 'Show workspace controls' : 'Hide workspace controls'}
            title={isHUDHidden ? 'Exit Zen Mode & Show Controls' : 'Hide Controls'}
          >
            {isHUDHidden ? (
              <>
                <Minimize2 className="w-3.5 h-3.5 text-zinc-950" />
                <span>Exit Zen</span>
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
            onClick={() => setIsStudioOpen(true)}
            className="px-2.5 sm:px-3 py-1.5 rounded-xl hover:bg-white/[0.06] hover:text-white flex items-center gap-1.5 transition-colors font-medium text-[11px] sm:text-xs text-violet-300"
            title="Open Wallpaper Studio & Customization"
          >
            <Sliders className="w-3.5 h-3.5 text-violet-400" />
            <span className="hidden sm:inline">Studio</span>
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
      {/* 2. MAIN HUD VIEW vs DEAD CENTER AMBIENT SANCTUARY        */}
      {/* ======================================================== */}
      {!isHUDHidden ? (
        <>
          {/* STANDARD HUD DIGITAL CLOCK & GREETING */}
          <section className="text-center shrink-0 my-5 sm:my-auto py-3 sm:py-2 space-y-3">
            <div className={`inline-flex items-baseline justify-center gap-2 sm:gap-3 md:gap-5 ${clockFontClass} text-white select-none leading-none`}>
              <span className={`${clockSizeHUD} font-light drop-shadow-[0_8px_40px_rgba(0,0,0,0.85)] tabular-nums`}>
                {clockTime}
              </span>
              {clockAmPm && (
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-zinc-300 font-normal">
                  {clockAmPm}
                </span>
              )}
            </div>

            {wallpaperSettings.showGreeting !== false && (
              <p className="text-xs sm:text-sm text-zinc-300 font-sans tracking-wide px-4">
                Good evening, <span className="text-white font-medium">{profile.name}</span>. •{' '}
                <span className="italic text-zinc-400">&ldquo;Remember, you are here for you.&rdquo;</span>
              </p>
            )}
          </section>

          {/* THREE FROSTED GLASS CONSOLE CARDS */}
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
      </footer>
    </>
  ) : (
    /* ======================================================== */
    /* AMBIENT SANCTUARY: DEAD CENTER RETRO DIGITAL CLOCK       */
    /* ======================================================== */
    <div 
      onClick={() => setIsHUDHidden(false)}
      className="flex-1 w-full flex flex-col items-center justify-center text-center cursor-pointer select-none my-auto relative z-20 py-8 animate-fadeIn"
      title="Click anywhere to restore workspace controls"
    >
      {/* Subtle Celestial Breathing Halo */}
      <div className={`absolute w-[360px] h-[360px] sm:w-[540px] sm:h-[540px] lg:w-[720px] lg:h-[720px] rounded-full ${clockHaloClass} pointer-events-none -z-10`} />

      {/* Grand Centered Digital Clock */}
      <div className={`inline-flex items-baseline justify-center gap-2 sm:gap-4 md:gap-6 ${clockFontClass} text-white select-none leading-none drop-shadow-[0_12px_60px_rgba(0,0,0,0.95)]`}>
        <span className={`${clockSizeZen} font-light tabular-nums`}>
          {clockTime}
        </span>
        {clockAmPm && (
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-violet-300 font-light">
            {clockAmPm}
          </span>
        )}
      </div>

      {/* Centered Date Pill & Motto */}
      {(wallpaperSettings.showDate !== false || wallpaperSettings.showGreeting !== false) && (
        <div className="mt-6 sm:mt-8 space-y-3">
          {wallpaperSettings.showDate !== false && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full cosmic-dock text-xs sm:text-sm font-display tracking-wider text-violet-200 shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-violet-300" />
              <span>{currentDateStr}</span>
            </div>
          )}

          {wallpaperSettings.showGreeting !== false && (
            <p className="text-xs sm:text-sm text-zinc-300 font-sans tracking-wide">
              Good evening, <span className="text-white font-medium">{profile.name}</span>. •{' '}
              <span className="italic text-zinc-400">&ldquo;Remember, you are here for you.&rdquo;</span>
            </p>
          )}
        </div>
      )}

      {/* Quick Customize & Bottom Ambient Hint Pill */}
      <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center gap-3">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsStudioOpen(true);
          }}
          className="flex items-center gap-1.5 px-4 py-2 rounded-full cosmic-dock text-xs text-violet-200 hover:text-white border border-white/[0.12] hover:border-violet-400/50 shadow-lg cursor-pointer transition-all"
        >
          <Sliders className="w-3.5 h-3.5 text-violet-300" />
          <span>Customize Wallpaper</span>
        </button>

        <div className="flex items-center gap-2 px-5 py-2.5 rounded-full cosmic-dock text-xs text-zinc-300 hover:text-white transition-all border border-white/[0.12] hover:border-violet-400/40 shadow-xl group">
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-ping" />
          <span className="font-display tracking-wider">Tap anywhere to restore workspace controls</span>
        </div>
      </div>
    </div>
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

      {/* Wallpaper Studio Customization Modal */}
      <WallpaperStudioModal 
        isOpen={isStudioOpen} 
        onClose={() => setIsStudioOpen(false)} 
      />
    </div>
  );
};
