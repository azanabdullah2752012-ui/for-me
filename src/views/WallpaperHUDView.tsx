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
  Palette, 
  Volume2, 
  VolumeX, 
  Maximize2,
  Clock,
  CheckSquare,
  Flame,
  CalendarClock,
  X,
  Edit3,
  ArrowRight,
  Target
} from 'lucide-react';
import { useData } from '../context/DataContext';
import { WallpaperTheme } from '../types';

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
    wallpaperTheme, 
    setWallpaperTheme,
    promise,
    updatePromiseText,
    setActiveTab 
  } = useData();

  // Clock state
  const [clockTime, setClockTime] = useState('06:26:17');
  const [clockHoursMins, setClockHoursMins] = useState('06:26');
  const [clockSecs, setClockSecs] = useState('17');
  const [clockAmPm, setClockAmPm] = useState('PM');
  const [currentDateStr, setCurrentDateStr] = useState('Sunday, November 1, 2026');

  // Input & Modal states
  const [newTaskInput, setNewTaskInput] = useState('');
  const [studyTopic, setStudyTopic] = useState('Design');
  const [studyMode, setStudyMode] = useState('Deep Work');
  const [activeTabMode, setActiveTabMode] = useState<'tasks' | 'rhythm'>('tasks');
  const [isEditingPromise, setIsEditingPromise] = useState(false);
  const [promiseDraft, setPromiseDraft] = useState(promise.text || 'Discipline today, freedom tomorrow.');
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);
  const [isRoutineOpen, setIsRoutineOpen] = useState(false);
  const [isAudioDockOpen, setIsAudioDockOpen] = useState(false);
  const [soundMuted, setSoundMuted] = useState(false);

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
      setClockHoursMins(`${formattedH}:${formattedM}`);
      setClockSecs(formattedS);
      setClockAmPm(ampm);

      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      setCurrentDateStr(`${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTaskInput.trim()) {
      addTask(newTaskInput.trim());
      setNewTaskInput('');
    }
  };

  const handleSavePromise = () => {
    if (promiseDraft.trim()) {
      updatePromiseText(promiseDraft.trim());
      setIsEditingPromise(false);
    }
  };

  const tasksDoneCount = tasks.filter((t) => t.completed).length;
  const tasksPercent = tasks.length > 0 ? Math.round((tasksDoneCount / tasks.length) * 100) : 0;

  const habitsKeptCount = habits.filter((h) => h.completed).length;
  const habitsPercent = habits.length > 0 ? Math.round((habitsKeptCount / habits.length) * 100) : 0;

  const formatStopwatch = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const activeStation = audioStations.find((s) => s.id === activeStationId) || audioStations[0];

  const themesList: { id: WallpaperTheme; label: string; swatch: string }[] = [
    { id: 'deep-nebula', label: 'Cosmic Violet', swatch: 'from-purple-900 to-indigo-950' },
    { id: 'sonoma-amber', label: 'Sonoma Amber', swatch: 'from-amber-900 to-orange-950' },
    { id: 'nordic-aurora', label: 'Nordic Aurora', swatch: 'from-emerald-900 to-teal-950' },
    { id: 'rose-eclipse', label: 'Rose Eclipse', swatch: 'from-rose-900 to-pink-950' },
    { id: 'graphite-titanium', label: 'Graphite Titanium', swatch: 'from-zinc-800 to-zinc-950' },
    { id: 'earth-horizon', label: 'Earth Horizon', swatch: 'from-sky-900 to-blue-950' },
    { id: 'constellation', label: 'Star Map & Astrolabe', swatch: 'from-indigo-900 to-slate-950' },
    { id: 'solar-flare', label: 'Solar Flare', swatch: 'from-amber-800 to-orange-950' },
    { id: 'cyber-obsidian', label: 'Cyber Obsidian', swatch: 'from-zinc-900 to-black' },
    { id: 'abyssal-ocean', label: 'Abyssal Ocean', swatch: 'from-cyan-950 to-slate-950' },
  ];

  const currentHour = new Date().getHours();
  const timeGreeting = currentHour < 12 ? 'Good morning' : currentHour < 18 ? 'Good afternoon' : 'Good evening';

  return (
    <div className="relative w-screen h-screen max-h-screen overflow-hidden flex flex-col justify-between pt-6 md:pt-7 lg:pt-8 px-6 md:px-10 lg:px-16 pb-5 md:pb-6 select-none z-10 animate-fadeIn">
      {/* ======================================================== */}
      {/* 1. ETHEREAL TOP UTILITY BAR (Integrated Floating Island) */}
      {/* ======================================================== */}
      <header className="flex items-center justify-between w-full h-11 shrink-0 z-20">
        {/* Left: Minimalist Brand Identity */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-white/[0.04] backdrop-blur-xl border border-white/[0.12] flex items-center justify-center text-white text-xs font-mono font-medium tracking-tight shadow-sm hover:border-violet-400/40 transition-colors">
            FM
          </div>
          <div className="flex flex-col">
            <span className="font-display font-semibold text-xs tracking-[0.22em] text-white/90 uppercase leading-none">
              FOR ME
            </span>
            <span className="text-[10px] text-zinc-400 tracking-wider font-sans mt-0.5">
              Private Life Ledger
            </span>
          </div>
        </div>

        {/* Center: Contemplative Date Pill */}
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.035] backdrop-blur-2xl border border-white/[0.08] text-xs font-sans text-zinc-300 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-violet-300" />
          <span className="tracking-wide">{currentDateStr}</span>
        </div>

        {/* Right: Integrated Action Capsule */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] text-xs text-zinc-300 shadow-sm">
          <button
            onClick={() => setIsRoutineOpen(true)}
            className="px-3 py-1.5 rounded-xl hover:bg-white/[0.06] hover:text-white flex items-center gap-1.5 transition-colors font-medium text-zinc-300"
            title="Open Daily Routine Schedule"
          >
            <CalendarClock className="w-3.5 h-3.5 text-zinc-400" />
            <span className="font-sans">Routine 0/0</span>
          </button>

          <button
            onClick={() => setIsThemeModalOpen(true)}
            className="px-3 py-1.5 rounded-xl hover:bg-white/[0.06] hover:text-white flex items-center gap-1.5 transition-colors font-medium text-zinc-300"
            title="Change Ambient Wallpaper Atmosphere"
          >
            <Palette className="w-3.5 h-3.5 text-zinc-400" />
            <span className="font-sans">Themes</span>
          </button>

          <button
            onClick={() => setSoundMuted(!soundMuted)}
            className="p-1.5 rounded-xl hover:bg-white/[0.06] hover:text-white transition-colors text-zinc-300"
            title={soundMuted ? 'Unmute sound effects' : 'Mute sound effects'}
          >
            {soundMuted ? <VolumeX className="w-4 h-4 text-zinc-500" /> : <Volume2 className="w-4 h-4 text-zinc-300" />}
          </button>

          <button
            onClick={() => setActiveTab('journal')}
            className="px-3.5 py-1.5 rounded-xl bg-violet-600/30 hover:bg-violet-600/50 border border-violet-400/30 text-white font-medium flex items-center gap-1.5 transition-all shadow-sm ml-0.5"
            title="Enter Pristine Writing Sanctuary"
          >
            <BookOpen className="w-3.5 h-3.5 text-violet-200" />
            <span className="font-sans">Journal</span>
          </button>
        </div>
      </header>

      {/* ======================================================== */}
      {/* 2. TRANSCENDENT EDITORIAL HERO CLOCK & INNER PRESENCE     */}
      {/* ======================================================== */}
      <section className="text-center shrink-0 my-auto py-2 space-y-2" aria-label={`Current time: ${clockTime}`}>
        {/* Typographically Sculpted Timepiece */}
        <div className="inline-flex items-baseline justify-center gap-2 sm:gap-3 select-none leading-none">
          <span className="font-serif italic font-light text-7xl sm:text-8xl md:text-9xl lg:text-[104px] text-white tracking-tight drop-shadow-[0_4px_32px_rgba(0,0,0,0.85)]">
            {clockHoursMins}
          </span>
          <span className="font-mono text-3xl sm:text-4xl md:text-5xl font-light text-violet-300/80 tracking-normal">
            :{clockSecs}
          </span>
          <span className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-zinc-400 uppercase tracking-widest ml-2">
            {clockAmPm}
          </span>
        </div>

        {/* Unboxed Intimate Personal Greeting */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-zinc-300 font-sans tracking-wide">
          <span>{timeGreeting},</span>
          <span className="font-serif italic text-base md:text-lg text-white font-medium">
            {profile.name}
          </span>
          <span className="text-zinc-500">•</span>
          <span className="italic text-zinc-400 font-serif text-sm md:text-base">
            &ldquo;Remember, you are here for you.&rdquo;
          </span>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. COMPOSED ASYMMETRIC SANCTUARY CONSOLES (Unboxed Flow) */}
      {/* ======================================================== */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-stretch max-h-[50vh]">
        {/* ── LEFT SURFACE: DAILY FLOW & RHYTHM (7 Cols) ── */}
        <div className="lg:col-span-7 p-6 rounded-[2rem] bg-gradient-to-b from-[#14182e]/60 to-[#0e1122]/40 hover:from-[#171b35]/70 hover:to-[#101428]/50 backdrop-blur-3xl border border-white/[0.08] border-t-white/[0.16] shadow-[0_12px_40px_0_rgba(0,0,0,0.5)] flex flex-col justify-between h-full overflow-hidden transition-all duration-300">
          <div className="flex-1 min-h-0 flex flex-col space-y-3.5">
            {/* Header with Segmented Mode Switcher */}
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] shrink-0">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTabMode('tasks')}
                  className={`flex items-center gap-2 px-3 py-1 rounded-xl text-xs font-sans uppercase tracking-[0.14em] font-semibold transition-all ${
                    activeTabMode === 'tasks'
                      ? 'bg-white/[0.08] text-white border border-white/[0.12] shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <CheckSquare className="w-3.5 h-3.5 text-violet-300" />
                  <span>Tasks for the Day</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-md bg-white/[0.06] text-zinc-300">
                    {tasksDoneCount}/{tasks.length}
                  </span>
                </button>

                <button
                  onClick={() => setActiveTabMode('rhythm')}
                  className={`flex items-center gap-2 px-3 py-1 rounded-xl text-xs font-sans uppercase tracking-[0.14em] font-semibold transition-all ${
                    activeTabMode === 'rhythm'
                      ? 'bg-white/[0.08] text-white border border-white/[0.12] shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  <span>Daily Rhythm Pulse</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-md bg-white/[0.06] text-zinc-300">
                    {habitsKeptCount}/{habits.length}
                  </span>
                </button>
              </div>

              {activeTabMode === 'rhythm' && (
                <button
                  onClick={() => {
                    const name = prompt('Add new daily rhythm habit:');
                    if (name) addHabit(name);
                  }}
                  className="w-6 h-6 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
                  title="Add habit"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick Task Input Form (when on tasks mode) */}
            {activeTabMode === 'tasks' && (
              <form onSubmit={handleAddTask} className="flex items-center gap-2 shrink-0">
                <input
                  type="text"
                  placeholder="Add a sacred priority for today (Press Enter)..."
                  value={newTaskInput}
                  onChange={(e) => setNewTaskInput(e.target.value)}
                  className="flex-1 bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.15] focus:border-violet-400/80 rounded-xl px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  disabled={!newTaskInput.trim()}
                  className="w-8 h-8 rounded-xl bg-violet-600/30 hover:bg-violet-600/60 text-violet-200 hover:text-white border border-violet-400/30 disabled:opacity-20 disabled:pointer-events-none flex items-center justify-center transition-all shrink-0"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* Scrollable List Body */}
            <div className="flex-1 min-h-0 space-y-1.5 overflow-y-auto pr-1">
              {activeTabMode === 'tasks' ? (
                tasks.map((task) => (
                  <div
                    key={task.id}
                    className={`p-2.5 rounded-xl border transition-all flex items-center justify-between text-xs select-none group ${
                      task.completed
                        ? 'bg-white/[0.015] border-white/[0.04] text-zinc-500'
                        : 'bg-white/[0.025] hover:bg-white/[0.05] border-white/[0.06] text-zinc-200'
                    }`}
                  >
                    <div
                      className="flex items-center gap-3 truncate flex-1 cursor-pointer pr-2"
                      onClick={() => toggleTask(task.id)}
                    >
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                          task.completed
                            ? 'bg-emerald-500 border-emerald-400 text-white shadow-sm'
                            : 'border-white/[0.25] group-hover:border-emerald-400'
                        }`}
                      >
                        {task.completed && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                      </div>
                      <span className={`font-sans truncate ${task.completed ? 'line-through text-zinc-500' : 'text-zinc-200'}`}>
                        {task.text}
                      </span>
                    </div>

                    <button
                      onClick={() => deleteTask(task.id)}
                      className="opacity-0 group-hover:opacity-100 text-zinc-500 hover:text-rose-400 transition-opacity p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))
              ) : (
                habits.map((habit) => (
                  <div
                    key={habit.id}
                    onClick={() => toggleHabit(habit.id)}
                    className={`p-2.5 rounded-xl border transition-all flex items-center justify-between text-xs cursor-pointer select-none group ${
                      habit.completed
                        ? 'bg-white/[0.015] border-white/[0.04] text-zinc-400'
                        : 'bg-white/[0.025] hover:bg-white/[0.05] border-white/[0.06] text-zinc-200'
                    }`}
                  >
                    <div className="flex flex-col gap-0.5 truncate pr-2">
                      <span className={`font-sans truncate ${habit.completed ? 'line-through text-zinc-500' : 'text-zinc-200'}`}>
                        {habit.name}
                      </span>
                      <div className="flex items-center gap-1.5 text-[10px] text-zinc-400 font-mono">
                        {habit.streak > 0 ? (
                          <span className="text-amber-400 flex items-center gap-0.5">
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
                          : 'border-white/[0.25] group-hover:border-emerald-400'
                      }`}
                    >
                      {habit.completed && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Footer Horizon */}
          <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-zinc-400 font-sans shrink-0">
            {activeTabMode === 'tasks' ? (
              <>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Day Progress
                </span>
                <span className="font-mono text-zinc-200 font-medium">{tasksPercent}% done</span>
              </>
            ) : (
              <>
                <button
                  onClick={() => setActiveTab('journal')}
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Journal & Reflect →</span>
                </button>
                <span className="font-mono text-zinc-200 font-medium">{habitsPercent}% kept</span>
              </>
            )}
          </div>
        </div>

        {/* ── RIGHT SURFACE: SACRED PROMISE & DEEP STUDY CONSOLE (5 Cols) ── */}
        <div className="lg:col-span-5 flex flex-col gap-4 h-full min-h-0">
          {/* Top Panel: Daily Sacred Promise & Contemplation */}
          <div className="p-5 rounded-[1.75rem] bg-gradient-to-b from-[#161a33]/60 to-[#101328]/40 backdrop-blur-3xl border border-white/[0.08] border-t-white/[0.16] shadow-md flex flex-col justify-between shrink-0">
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <Target className="w-3.5 h-3.5 text-violet-300" />
                <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-violet-300 font-semibold">
                  Daily Sacred Promise
                </span>
              </div>
              <button
                onClick={() => setIsEditingPromise(!isEditingPromise)}
                className="text-zinc-400 hover:text-white transition-colors"
                title="Edit daily promise"
              >
                <Edit3 className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="py-2.5">
              {isEditingPromise ? (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={promiseDraft}
                    onChange={(e) => setPromiseDraft(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSavePromise()}
                    className="flex-1 bg-white/[0.04] border border-violet-400/40 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none"
                    autoFocus
                  />
                  <button
                    onClick={handleSavePromise}
                    className="px-3 py-1.5 rounded-xl bg-violet-600 text-white text-xs font-medium"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <p className="font-serif italic text-base text-white/95 leading-snug">
                  &ldquo;{promise.text || 'Discipline today, freedom tomorrow.'}&rdquo;
                </p>
              )}
            </div>

            <button
              onClick={() => setActiveTab('journal')}
              className="pt-2 border-t border-white/[0.04] flex items-center justify-between text-xs text-violet-300/80 hover:text-white transition-colors group"
            >
              <span className="font-sans">Enter contemplation journal</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Bottom Panel: Deep Study Console */}
          <div className="flex-1 min-h-0 p-5 rounded-[1.75rem] bg-gradient-to-b from-[#14182e]/60 to-[#0e1122]/40 backdrop-blur-3xl border border-white/[0.08] border-t-white/[0.16] shadow-md flex flex-col justify-between">
            <div className="space-y-2.5">
              {/* Header */}
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-violet-300" />
                  <h3 className="text-xs font-sans uppercase tracking-[0.16em] text-zinc-200 font-semibold">
                    Deep Study Console
                  </h3>
                </div>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider ${
                  isStudyActive 
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 animate-pulse'
                    : 'bg-white/[0.06] text-zinc-400 border border-white/[0.08]'
                }`}>
                  {isStudyActive ? 'RUNNING' : 'STOPPED'}
                </span>
              </div>

              {/* Central Stopwatch */}
              <div className="text-center py-1">
                <div className="text-4xl lg:text-5xl font-mono font-light tracking-widest text-white leading-none">
                  {formatStopwatch(studySeconds)}
                </div>
                <p className="text-[9px] font-mono tracking-[0.2em] text-zinc-400 uppercase mt-1.5">
                  Background-Resilient Stopwatch
                </p>
              </div>

              {/* Inputs */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <input
                  type="text"
                  value={studyMode}
                  onChange={(e) => setStudyMode(e.target.value)}
                  placeholder="Mode (e.g. Deep Work)"
                  className="w-full bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.15] focus:border-violet-400 rounded-xl px-2.5 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none transition-colors"
                />
                <input
                  type="text"
                  value={studyTopic}
                  onChange={(e) => {
                    setStudyTopic(e.target.value);
                    setStudySubject(e.target.value);
                  }}
                  placeholder="Topic (e.g. Design)"
                  className="w-full bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.15] focus:border-violet-400 rounded-xl px-2.5 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={toggleStudyTimer}
                  className="flex-1 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-sans text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all"
                >
                  {isStudyActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5 fill-current" />}
                  <span>{isStudyActive ? 'Pause Focus' : 'Start Focus'}</span>
                </button>

                <button
                  onClick={resetStudyTimer}
                  className="px-3 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors"
                  title="Reset stopwatch"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-zinc-400 font-sans shrink-0">
              <span>Weekly: 15.1h / 15h</span>
              <span className="font-mono text-zinc-200">100% quota</span>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. BALANCED FLOATING STATUS DOCK                         */}
      {/* ======================================================== */}
      <footer className="relative shrink-0 flex items-center justify-center w-full pt-3 z-20">
        {/* Center Pill: Sleep, Water, Day Rating */}
        <div className="flex items-center gap-5 px-6 py-2.5 rounded-full bg-white/[0.035] backdrop-blur-2xl border border-white/[0.08] border-t-white/[0.16] text-xs font-sans text-zinc-300 shadow-md">
          {/* Sleep */}
          <div
            onClick={() => setSleep((sleepHours % 12) + 1, 0)}
            className="flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors"
            title="Click to cycle sleep hours"
          >
            <Moon className="w-3.5 h-3.5 text-zinc-300" />
            <span>Sleep: <strong className="text-white">{sleepHours}h</strong></span>
          </div>

          <span className="text-white/[0.1]">•</span>

          {/* Water */}
          <div className="flex items-center gap-2">
            <Droplets className="w-3.5 h-3.5 text-blue-400" />
            <span>Water: <strong className="text-white">{Math.round((hydration / 100) * 8)}/8</strong></span>
            <div className="flex items-center gap-1 ml-0.5">
              <button
                onClick={() => setHydration((prev) => Math.max(0, prev - 12.5))}
                className="w-4 h-4 rounded-md bg-white/[0.05] hover:bg-white/[0.15] border border-white/[0.1] flex items-center justify-center text-[10px] text-white transition-colors"
              >
                -
              </button>
              <button
                onClick={() => setHydration((prev) => Math.min(100, prev + 12.5))}
                className="w-4 h-4 rounded-md bg-white/[0.05] hover:bg-white/[0.15] border border-white/[0.1] flex items-center justify-center text-[10px] text-white transition-colors"
              >
                +
              </button>
            </div>
          </div>

          <span className="text-white/[0.1]">•</span>

          {/* Day Rating */}
          <div 
            onClick={() => setDailyRating(dailyRating >= 10 ? 1 : dailyRating + 1)}
            className="flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors"
            title="Click to cycle rating"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Day Rating: <strong className="text-white">{dailyRating}/10</strong></span>
          </div>
        </div>

        {/* Right Floating Pill: Focus Audio */}
        <div 
          onClick={() => setIsAudioDockOpen(true)}
          className="absolute right-0 bottom-0 hidden md:flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white/[0.035] backdrop-blur-2xl border border-white/[0.08] hover:border-white/[0.2] text-xs font-sans text-white shadow-md cursor-pointer group transition-all"
        >
          <div className="w-8 h-8 rounded-xl bg-white/[0.08] border border-white/[0.15] flex items-center justify-center text-zinc-300 group-hover:text-white transition-colors">
            <Headphones className="w-4 h-4" />
          </div>
          <div className="text-left pr-1">
            <p className="text-xs font-medium text-white group-hover:text-violet-200 leading-tight">
              Focus Audio
            </p>
            <p className="text-[10px] text-zinc-400 leading-tight">
              {isAudioPlaying ? activeStation.name : 'Add Spotify/YouTube'}
            </p>
          </div>
          <Maximize2 className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
        </div>
      </footer>

      {/* ======================================================== */}
      {/* 5. SIDE ROUTINE VERTICAL TAB                             */}
      {/* ======================================================== */}
      <button
        onClick={() => setIsRoutineOpen(true)}
        className="fixed left-0 top-1/2 -translate-y-1/2 -rotate-90 origin-left px-3.5 py-1.5 rounded-t-xl bg-[#14162e]/90 hover:bg-[#1a1d3d] backdrop-blur-xl border border-white/[0.1] text-[10px] font-mono tracking-widest uppercase text-zinc-300 hover:text-white transition-all z-30 flex items-center gap-1.5 shadow-lg"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
        <span>ROUTINE T.T 📋</span>
      </button>

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

              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-center justify-between pb-1.5">
                    <span className="font-semibold text-amber-300 text-xs">
                      Morning Protocol
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400">06:00 – 09:00</span>
                  </div>
                  <p className="text-zinc-300 text-[11px] leading-relaxed">
                    Hydration, morning movement, cold exposure, mindset setting.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-center justify-between pb-1.5">
                    <span className="font-semibold text-emerald-300 text-xs">
                      Afternoon Focus
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400">09:00 – 17:00</span>
                  </div>
                  <p className="text-zinc-300 text-[11px] leading-relaxed">
                    Deep study blocks, deep work sprints, topic mastering, high-focus craft.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-center justify-between pb-1.5">
                    <span className="font-semibold text-violet-300 text-xs">
                      Evening Wind-Down
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

      {/* Theme Atmosphere Modal */}
      {isThemeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/75 backdrop-blur-md" onClick={() => setIsThemeModalOpen(false)} />
          <div className="relative z-10 w-full max-w-md bg-[#0e1022] border border-white/[0.1] rounded-3xl p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
              <h3 className="font-serif text-lg text-white font-normal">Atmosphere & Wallpaper</h3>
              <button onClick={() => setIsThemeModalOpen(false)} className="text-zinc-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-1">
              {themesList.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setWallpaperTheme(t.id);
                    setIsThemeModalOpen(false);
                  }}
                  className={`p-3 rounded-2xl border text-left flex items-center gap-3 transition-all ${
                    wallpaperTheme === t.id
                      ? 'border-violet-400 bg-white/[0.08] shadow-md'
                      : 'border-white/[0.08] hover:border-white/[0.18] bg-white/[0.02]'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${t.swatch} border border-white/20 shrink-0`} />
                  <span className="text-xs text-zinc-200 font-sans font-medium">{t.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Audio Stream Dock Modal */}
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
                  title="Audio stream"
                  src={activeStation.embedSrc}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
                className="text-xs text-violet-300 hover:text-white transition-colors"
              >
                Manage Stations in Music Studio →
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
