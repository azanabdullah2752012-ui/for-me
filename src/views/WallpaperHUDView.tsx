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
  Droplet, 
  BookOpen, 
  Headphones, 
  Palette, 
  Volume2, 
  VolumeX, 
  Maximize2,
  Clock,
  CheckCircle2,
  ListTodo
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
    setActiveTab 
  } = useData();

  // Live Digital Clock (Format e.g. 06:26:17 PM)
  const [clockTime, setClockTime] = useState('06:26:17');
  const [clockAmPm, setClockAmPm] = useState('PM');
  const [currentDateStr, setCurrentDateStr] = useState('Sunday, November 1, 2026');
  const [newTaskInput, setNewTaskInput] = useState('');
  const [studyTopic, setStudyTopic] = useState('Mathematics');
  const [studyMode, setStudyMode] = useState('Deep Work');
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);
  const [isRoutineOpen, setIsRoutineOpen] = useState(false);
  const [isAudioDockOpen, setIsAudioDockOpen] = useState(false);

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
    { id: 'earth-horizon', label: 'Earth Horizon', swatch: 'from-sky-900 to-blue-950' },
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-between py-6 px-4 sm:px-8 max-w-[1500px] mx-auto select-none z-10 animate-fadeIn">
      {/* ======================================================== */}
      {/* 1. TOP FLOATING UTILITY BAR                              */}
      {/* ======================================================== */}
      <header className="flex items-center justify-between w-full h-11 shrink-0 mb-4 sm:mb-6">
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-violet-950/60 border border-violet-400/40 flex items-center justify-center text-violet-300 font-mono text-xs font-semibold shadow-sm">
            FM
          </div>
          <span className="font-sans font-bold text-xs tracking-widest text-white uppercase">
            FOR ME
          </span>
        </div>

        {/* Center Pill: Current Date */}
        <div className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] text-xs font-sans text-zinc-300 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-violet-300" />
          <span>{currentDateStr}</span>
        </div>

        {/* Right Toolbar Buttons */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] text-xs text-zinc-300">
          <button
            onClick={() => setIsRoutineOpen(true)}
            className="px-2.5 py-1 rounded-xl hover:bg-white/[0.06] hover:text-white flex items-center gap-1.5 transition-colors font-medium"
          >
            <ListTodo className="w-3.5 h-3.5 text-violet-300" />
            <span>Routine 0/0</span>
          </button>

          <button
            onClick={() => setIsThemeModalOpen(true)}
            className="px-2.5 py-1 rounded-xl hover:bg-white/[0.06] hover:text-white flex items-center gap-1.5 transition-colors font-medium"
          >
            <Palette className="w-3.5 h-3.5 text-violet-300" />
            <span>Themes</span>
          </button>

          <button
            onClick={() => setIsAudioPlaying(!isAudioPlaying)}
            className="p-1.5 rounded-xl hover:bg-white/[0.06] hover:text-white transition-colors"
            title={isAudioPlaying ? 'Mute Background Audio' : 'Play Background Audio'}
          >
            {isAudioPlaying ? <Volume2 className="w-3.5 h-3.5 text-violet-400" /> : <VolumeX className="w-3.5 h-3.5 text-zinc-500" />}
          </button>

          <button
            onClick={() => setActiveTab('journal')}
            className="px-2.5 py-1 rounded-xl hover:bg-white/[0.06] hover:text-white flex items-center gap-1.5 transition-colors font-medium"
          >
            <BookOpen className="w-3.5 h-3.5 text-violet-300" />
            <span>Journal</span>
          </button>
        </div>
      </header>

      {/* ======================================================== */}
      {/* 2. GIANT RETRO/DIGITAL CLOCK & PHILOSOPHICAL MOTTO       */}
      {/* ======================================================== */}
      <section className="text-center my-3 sm:my-6 space-y-1">
        {/* Clock readout */}
        <div className="inline-flex items-baseline justify-center gap-2 sm:gap-4 font-mono font-light tracking-widest text-white leading-none">
          <span className="text-5xl sm:text-7xl md:text-8xl lg:text-[108px] drop-shadow-[0_4px_25px_rgba(167,139,250,0.18)]">
            {clockTime}
          </span>
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono text-zinc-300 font-normal">
            {clockAmPm}
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-zinc-300 font-sans tracking-wide pt-1">
          Good evening, <span className="text-white font-medium">{profile.name}</span>. •{' '}
          <span className="font-serif italic text-zinc-400">&ldquo;Remember, you are here for you.&rdquo;</span>
        </p>
      </section>

      {/* ======================================================== */}
      {/* 3. THREE FROSTED GLASS CONSOLE PANELS (Exact Layout)     */}
      {/* ======================================================== */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 my-4 items-stretch">
        {/* ── CARD 1: TASKS FOR THE DAY ── */}
        <div className="p-5 lg:p-6 rounded-[2rem] bg-[#0c1022]/70 hover:bg-[#0c1022]/85 backdrop-blur-3xl border border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] hover:border-violet-400/25 flex flex-col justify-between transition-all duration-300">
          <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-violet-300" />
                <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-white">
                  Tasks for the Day
                </h3>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                {tasksDoneCount}/{tasks.length} done
              </span>
            </div>

            {/* Input */}
            <form onSubmit={handleAddTask} className="relative">
              <input
                type="text"
                placeholder="Add task for today (Press Enter)..."
                value={newTaskInput}
                onChange={(e) => setNewTaskInput(e.target.value)}
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3.5 py-2 pr-9 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-violet-400/50"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 p-1 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-zinc-300"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* List */}
            <div className="space-y-1.5 max-h-64 overflow-y-auto pr-1">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between p-2 rounded-xl hover:bg-white/[0.03] group transition-colors"
                >
                  <label className="flex items-center gap-2.5 cursor-pointer flex-1 min-w-0">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                      className="sr-only"
                    />
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all flex-shrink-0 ${
                        task.completed
                          ? 'bg-emerald-500 border-emerald-500 text-black shadow-[0_0_8px_rgba(16,185,129,0.5)]'
                          : 'border-white/[0.2] bg-white/[0.02]'
                      }`}
                    >
                      {task.completed && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                    </div>
                    <span
                      className={`text-xs font-sans truncate transition-colors ${
                        task.completed ? 'text-zinc-500 line-through' : 'text-zinc-200'
                      }`}
                    >
                      {task.text}
                    </span>
                  </label>

                  <button
                    onClick={() => deleteTask(task.id)}
                    className="opacity-0 group-hover:opacity-100 text-zinc-600 hover:text-red-400 transition-opacity p-1"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="pt-3 mt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-zinc-400 font-sans">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Day Progress
            </span>
            <span className="font-mono text-white">{tasksPercent}% done</span>
          </div>
        </div>

        {/* ── CARD 2: DAILY RHYTHM PULSE ── */}
        <div className="p-5 lg:p-6 rounded-[2rem] bg-[#0c1022]/70 hover:bg-[#0c1022]/85 backdrop-blur-3xl border border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] hover:border-violet-400/25 flex flex-col justify-between transition-all duration-300">
          <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <Droplet className="w-4 h-4 text-violet-300" />
                <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-white">
                  Daily Rhythm Pulse
                </h3>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                  {habitsKeptCount}/{habits.length} kept
                </span>
                <button
                  onClick={() => {
                    const name = prompt('Enter new daily rhythm/habit:');
                    if (name) addHabit(name);
                  }}
                  className="w-5 h-5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] flex items-center justify-center text-zinc-300"
                  title="Add habit"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Habits List */}
            <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
              {habits.map((h) => (
                <div
                  key={h.id}
                  onClick={() => toggleHabit(h.id)}
                  className="p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.04] flex items-center justify-between cursor-pointer group transition-all"
                >
                  <div className="min-w-0 pr-2">
                    <div className="text-xs font-sans text-zinc-200 truncate">{h.name}</div>
                    <div className="text-[10px] text-amber-400/90 font-sans flex items-center gap-1 mt-0.5">
                      <span>🔥 {h.streak} day streak</span>
                    </div>
                  </div>

                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all flex-shrink-0 ${
                      h.completed
                        ? 'bg-emerald-500 border-emerald-500 text-black shadow-[0_0_8px_rgba(16,185,129,0.5)]'
                        : 'border-white/[0.2] bg-white/[0.02]'
                    }`}
                  >
                    {h.completed && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="pt-3 mt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-zinc-400 font-sans">
            <button
              onClick={() => setActiveTab('journal')}
              className="hover:text-violet-300 flex items-center gap-1 transition-colors"
            >
              <span>📖 Journal & Reflect →</span>
            </button>
            <span className="font-mono text-white">{habitsPercent}% kept</span>
          </div>
        </div>

        {/* ── CARD 3: DEEP STUDY CONSOLE ── */}
        <div className="p-5 lg:p-6 rounded-[2rem] bg-[#0c1022]/70 hover:bg-[#0c1022]/85 backdrop-blur-3xl border border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] hover:border-violet-400/25 flex flex-col justify-between transition-all duration-300">
          <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-violet-300" />
                <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-white">
                  Deep Study Console
                </h3>
              </div>
              <span
                className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                  isStudyActive
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 animate-pulse'
                    : 'bg-white/[0.05] text-zinc-400 border border-white/[0.08]'
                }`}
              >
                {isStudyActive ? 'RUNNING' : 'STOPPED'}
              </span>
            </div>

            {/* Stopwatch Display */}
            <div className="text-center py-2">
              <div className="text-5xl lg:text-6xl font-mono font-light tracking-widest text-white">
                {formatStopwatch(studySeconds)}
              </div>
              <p className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mt-1">
                Background-Resilient Stopwatch
              </p>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                value={studyMode}
                onChange={(e) => setStudyMode(e.target.value)}
                placeholder="Mode (e.g. Deep Work)"
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none"
              />
              <input
                type="text"
                value={studyTopic}
                onChange={(e) => {
                  setStudyTopic(e.target.value);
                  setStudySubject(e.target.value);
                }}
                placeholder="Topic (e.g. Design)"
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none"
              />
            </div>

            {/* Start Focus Primary Button */}
            <div className="flex gap-2">
              <button
                onClick={toggleStudyTimer}
                className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-sans text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-lavender-glow transition-all"
              >
                {isStudyActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                <span>{isStudyActive ? 'Pause Focus' : 'Start Focus'}</span>
              </button>

              <button
                onClick={resetStudyTimer}
                className="px-3.5 py-3 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors"
                title="Reset stopwatch"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-3 mt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-zinc-400 font-sans">
            <span>Weekly: 15.1h / 15h</span>
            <span className="font-mono text-emerald-400">100% quota</span>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. FLOATING BOTTOM STATUS DOCK (Exact Screenshot Format) */}
      {/* ======================================================== */}
      <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 z-20">
        {/* Left Pill: Sleep, Water, Day Rating */}
        <div className="flex items-center gap-4 px-5 py-2 rounded-full bg-[#0c1022]/80 backdrop-blur-2xl border border-white/[0.08] text-xs font-sans text-zinc-300 shadow-xl">
          {/* Sleep */}
          <div 
            onClick={() => setSleep((sleepHours % 12) + 1, 0)} 
            className="flex items-center gap-1.5 cursor-pointer hover:text-white"
            title="Click to cycle sleep hours"
          >
            <Moon className="w-3.5 h-3.5 text-violet-300" />
            <span>Sleep: <strong className="text-white">{sleepHours}h</strong></span>
          </div>

          <span className="text-white/[0.1]">•</span>

          {/* Water */}
          <div className="flex items-center gap-1.5">
            <Droplet className="w-3.5 h-3.5 text-sky-400" />
            <span>Water: <strong className="text-white">{Math.round((hydration / 100) * 8)}</strong>/8</span>
            <div className="flex items-center gap-1 ml-1">
              <button
                onClick={() => setHydration((prev) => Math.max(0, prev - 12.5))}
                className="w-4 h-4 rounded bg-white/[0.08] hover:bg-white/[0.2] flex items-center justify-center text-[10px] text-zinc-200"
              >
                -
              </button>
              <button
                onClick={() => setHydration((prev) => Math.min(100, prev + 12.5))}
                className="w-4 h-4 rounded bg-violet-600 hover:bg-violet-500 flex items-center justify-center text-[10px] text-white"
              >
                +
              </button>
            </div>
          </div>

          <span className="text-white/[0.1]">•</span>

          {/* Day Rating */}
          <div className="flex items-center gap-1.5 cursor-pointer" onClick={() => setDailyRating(dailyRating >= 10 ? 1 : dailyRating + 1)}>
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Day Rating: <strong className="text-white">{dailyRating}/10</strong></span>
          </div>
        </div>

        {/* Right Pill: Focus Audio */}
        <div 
          onClick={() => setIsAudioDockOpen(!isAudioDockOpen)}
          className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0c1022]/80 backdrop-blur-2xl border border-white/[0.08] hover:border-violet-400/40 text-xs font-sans text-zinc-300 shadow-xl cursor-pointer group transition-all"
        >
          <div className="w-6 h-6 rounded-full bg-violet-950/60 border border-violet-400/30 flex items-center justify-center text-violet-300">
            <Headphones className="w-3.5 h-3.5" />
          </div>
          <div className="text-left">
            <p className="text-[11px] font-medium text-white group-hover:text-violet-200 leading-tight">
              Focus Audio
            </p>
            <p className="text-[9px] text-zinc-400 leading-tight">
              {isAudioPlaying ? activeStation.name : 'Add Spotify/YouTube'}
            </p>
          </div>
          <Maximize2 className="w-3 h-3 text-zinc-500 group-hover:text-white ml-1" />
        </div>
      </footer>

      {/* ======================================================== */}
      {/* 5. SIDE ROUTINE VERTICAL TAB (Left edge badge)           */}
      {/* ======================================================== */}
      <button
        onClick={() => setIsRoutineOpen(true)}
        className="fixed left-0 top-1/2 -translate-y-1/2 -rotate-90 origin-left px-3 py-1.5 rounded-t-xl bg-[#0c1022]/80 backdrop-blur-md border border-white/[0.08] text-[10px] font-mono tracking-widest uppercase text-violet-300 hover:text-white transition-colors z-20 flex items-center gap-1.5"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
        <span>ROUTINE T.T</span>
      </button>

      {/* Routine Slide-over Drawer */}
      {isRoutineOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setIsRoutineOpen(false)} />
          <div className="relative z-10 w-80 bg-[#0c1022] h-full border-r border-white/[0.08] p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                <h3 className="font-mono text-xs uppercase tracking-wider text-white">Daily Timetable</h3>
                <button onClick={() => setIsRoutineOpen(false)} className="text-zinc-400 hover:text-white text-xs">✕</button>
              </div>
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <p className="font-semibold text-violet-300">Morning Protocol</p>
                  <p className="text-zinc-400 text-[11px]">06:00 – 09:00</p>
                  <p className="text-zinc-300 mt-1">Hydration, light, exercise, deep study block.</p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <p className="font-semibold text-violet-300">Afternoon Focus</p>
                  <p className="text-zinc-400 text-[11px]">09:00 – 17:00</p>
                  <p className="text-zinc-300 mt-1">Academic coursework & problem sets.</p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <p className="font-semibold text-violet-300">Evening Wind-Down</p>
                  <p className="text-zinc-400 text-[11px]">17:00 – 22:30</p>
                  <p className="text-zinc-300 mt-1">Reflections, reading, digital sunset.</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsRoutineOpen(false)}
              className="w-full py-2 bg-white/[0.04] text-xs text-zinc-300 rounded-xl"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Themes Modal */}
      {isThemeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/75 backdrop-blur-md" onClick={() => setIsThemeModalOpen(false)} />
          <div className="relative z-10 w-full max-w-md bg-[#0c1022] border border-white/[0.1] rounded-3xl p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
              <h3 className="font-serif text-lg text-white font-normal">Wallpaper Atmosphere</h3>
              <button onClick={() => setIsThemeModalOpen(false)} className="text-zinc-400 hover:text-white text-xs">✕</button>
            </div>
            <p className="text-xs text-zinc-400 font-sans">
              Select your ambient cosmic palette:
            </p>
            <div className="grid grid-cols-2 gap-3">
              {themesList.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setWallpaperTheme(t.id);
                    setIsThemeModalOpen(false);
                  }}
                  className={`p-3 rounded-2xl border text-left flex items-center gap-2.5 transition-all ${
                    wallpaperTheme === t.id
                      ? 'bg-violet-600/20 border-violet-400 text-white shadow-lavender-glow'
                      : 'bg-white/[0.02] border-white/[0.06] text-zinc-300 hover:bg-white/[0.05]'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${t.swatch} border border-white/[0.1]`}></div>
                  <span className="text-xs font-medium">{t.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Audio Quick Dock Modal */}
      {isAudioDockOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/75 backdrop-blur-md" onClick={() => setIsAudioDockOpen(false)} />
          <div className="relative z-10 w-full max-w-lg bg-[#0c1022] border border-white/[0.1] rounded-3xl p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
              <h3 className="font-serif text-lg text-white font-normal">Focus Audio Hub</h3>
              <button onClick={() => setIsAudioDockOpen(false)} className="text-zinc-400 hover:text-white text-xs">✕</button>
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
                className="px-4 py-1.5 bg-violet-600 text-white rounded-xl text-xs font-semibold"
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
