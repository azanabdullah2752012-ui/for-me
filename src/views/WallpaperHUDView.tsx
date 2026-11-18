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
  Headphones,
  Minimize2,
  EyeOff,
  Clock,
  CheckSquare,
  Droplet,
  CalendarClock,
  Sliders,
  X,
  Sunrise,
  Sun,
  User,
  Flame,
  Star
} from 'lucide-react';
import { useData } from '../context/DataContext';
import { WallpaperStudioModal } from '../components/common/WallpaperStudioModal';
import { FocusAudioModal } from '../components/audio/FocusAudioModal';
import { ProfileModal } from '../components/common/ProfileModal';
import { SoundVisualizer } from '../components/audio/SoundVisualizer';
import { SOUNDSCAPE_PRESETS } from '../services/soundEngine';
import { YouTubeIcon } from '../components/audio/YouTubeIcon';

type ActiveDockPanel = 'none' | 'tasks' | 'habits' | 'timer' | 'wellness';

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
    routines,
    addRoutineBlock,
    deleteRoutineBlock,
    resetRoutines,
    studySeconds, 
    isStudyActive, 
    studySubject,
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
    lastActiveDate,
    resetDayProgress,
    isHUDHidden,
    setIsHUDHidden,
    wallpaperSettings,
    audioSource,
    isAudioPlaying,
    activeSoundscapeId,
    playSoundscape,
    stopSoundscape,
    isYouTubePlaying,
    activeYouTubeItem,
    toggleYouTubePlay,
    appTheme,
    toggleAppTheme
  } = useData();

  const isLight = appTheme === 'light';

  // Modals
  const [isStudioOpen, setIsStudioOpen] = useState(false);
  const [isAudioModalOpen, setIsAudioModalOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isRoutineOpen, setIsRoutineOpen] = useState(false);

  // Active floating dock panel (tasks | habits | timer | wellness | none)
  const [activeDockPanel, setActiveDockPanel] = useState<ActiveDockPanel>('none');

  // Clock
  const [clockTime, setClockTime] = useState('12:00:00');
  const [clockAmPm, setClockAmPm] = useState('PM');
  const [currentDateStr, setCurrentDateStr] = useState('');
  const [newTaskInput, setNewTaskInput] = useState('');
  const [studyTopic, setStudyTopic] = useState(profile.defaultFocusTopic || 'Engineering');
  const [studyMode, setStudyMode] = useState(profile.defaultFocusMode || 'Deep Work');

  // Routine additions
  const [isAddingRoutine, setIsAddingRoutine] = useState(false);
  const [newRoutineTitle, setNewRoutineTitle] = useState('');
  const [newRoutineTime, setNewRoutineTime] = useState('');
  const [newRoutineDesc, setNewRoutineDesc] = useState('');

  // Dynamic time-based greeting
  const getDynamicGreeting = () => {
    const h = new Date().getHours();
    if (h >= 5 && h < 12) return 'Good morning';
    if (h >= 12 && h < 17) return 'Good afternoon';
    if (h >= 17 && h < 22) return 'Good evening';
    return 'Late night focus';
  };

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

      const divider = wallpaperSettings.clockDivider === 'dot' ? ' · ' : wallpaperSettings.clockDivider === 'space' ? ' ' : ':';

      if (wallpaperSettings.showSeconds) {
        setClockTime(`${formattedH}${divider}${formattedM}${divider}${formattedS}`);
      } else {
        setClockTime(`${formattedH}${divider}${formattedM}`);
      }
      setClockAmPm(is24h ? '' : ampm);

      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      setCurrentDateStr(`${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [wallpaperSettings.clockFormat, wallpaperSettings.showSeconds, wallpaperSettings.clockDivider]);

  // Dynamic clock styles based on wallpaperSettings
  const clockFontClass = 
    wallpaperSettings.clockFontStyle === 'serif' ? 'font-serif tracking-normal' :
    wallpaperSettings.clockFontStyle === 'mono' ? 'font-mono tracking-tight' :
    wallpaperSettings.clockFontStyle === 'minimal' ? 'font-sans font-extralight tracking-[0.08em]' :
    'font-display tracking-[0.05em]';

  const clockSize = 
    wallpaperSettings.clockSize === 'compact' ? 'text-5xl sm:text-6xl md:text-8xl lg:text-[100px]' :
    wallpaperSettings.clockSize === 'heroic' ? 'text-6xl sm:text-8xl md:text-9xl lg:text-[144px]' :
    'text-5xl sm:text-7xl md:text-9xl lg:text-[124px]';

  const clockHaloClass = 
    wallpaperSettings.clockHalo === 'none' ? 'opacity-0' :
    wallpaperSettings.clockHalo === 'subtle' ? 'bg-violet-600/8 blur-[90px]' :
    'bg-violet-600/18 blur-[120px] animate-pulse';

  const clockColorClass = 
    wallpaperSettings.clockColor === 'white' ? (isLight ? 'text-zinc-950 drop-shadow-[0_4px_24px_rgba(0,0,0,0.1)]' : 'text-white drop-shadow-[0_12px_60px_rgba(0,0,0,0.95)]') :
    wallpaperSettings.clockColor === 'gold' ? 'text-amber-300 drop-shadow-[0_4px_30px_rgba(245,158,11,0.4)]' :
    wallpaperSettings.clockColor === 'cyan' ? 'text-cyan-300 drop-shadow-[0_4px_30px_rgba(6,182,212,0.4)]' :
    wallpaperSettings.clockColor === 'rose' ? 'text-rose-300 drop-shadow-[0_4px_30px_rgba(244,63,94,0.4)]' :
    isLight ? 'text-zinc-900 drop-shadow-[0_4px_24px_rgba(200,180,160,0.30)]' : 'text-white drop-shadow-[0_12px_60px_rgba(0,0,0,0.95)]';

  const clockPositionClass = 
    wallpaperSettings.clockPosition === 'zenith' ? 'mt-6 sm:mt-12 mb-auto' :
    wallpaperSettings.clockPosition === 'bottom' ? 'mt-auto mb-16 sm:mb-20' :
    'my-auto';

  // Keyboard navigation: Escape closes popovers and exits Zen mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activeDockPanel !== 'none') {
          setActiveDockPanel('none');
        } else if (isHUDHidden) {
          setIsHUDHidden(false);
        } else if (isRoutineOpen) {
          setIsRoutineOpen(false);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeDockPanel, isHUDHidden, isRoutineOpen, setIsHUDHidden]);

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

  const activePreset = SOUNDSCAPE_PRESETS.find((p) => p.id === activeSoundscapeId) || SOUNDSCAPE_PRESETS[0];

  return (
    <div className="relative w-screen h-screen max-h-screen overflow-hidden flex flex-col justify-between pt-safe-top pt-8 sm:pt-10 px-4 sm:px-8 pb-safe-bottom pb-6 select-none z-10 animate-fadeIn">
      {/* Accessible landmark heading */}
      <h1 className="sr-only">FOR ME — Living Wallpaper & Focus Sanctuary</h1>

      {/* ======================================================== */}
      {/* 1. MINIMAL FLOATING TOP UTILITY BAR                      */}
      {/* ======================================================== */}
      <header className={`relative flex items-center justify-between w-full min-h-12 shrink-0 z-20 gap-3 transition-opacity duration-300 ${
        isHUDHidden ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
        {/* Left: Brand Identity */}
        <button 
          type="button"
          onClick={() => setIsHUDHidden(true)}
          className="flex items-center gap-2.5 cursor-pointer group shrink-0 text-left"
          title="Enter Zen Wallpaper Mode"
        >
          <div className={`w-8 h-8 rounded-full border flex items-center justify-center text-[11px] font-mono font-medium tracking-tight shadow-sm transition-all ${
            isLight
              ? 'border-zinc-300/80 bg-white/80 text-zinc-900 group-hover:bg-white group-hover:border-zinc-400'
              : 'border-white/15 bg-white/[0.04] text-zinc-200 group-hover:bg-white/[0.1] group-hover:border-white/30'
          }`}>
            FM
          </div>
          <span className={`font-sans font-bold text-[11px] tracking-[0.22em] uppercase group-hover:opacity-85 transition-opacity ${
            isLight ? 'text-zinc-900' : 'text-zinc-200'
          }`}>
            FOR ME
          </span>
        </button>

        {/* Center Pill: Current Date — 100% Optically & Mathematically Centered */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center pointer-events-none">
          <div className={`pointer-events-auto flex items-center gap-1.5 px-3.5 py-1.5 rounded-full backdrop-blur-2xl border text-[11px] font-sans font-medium shadow-sm transition-all ${
            isLight
              ? 'bg-white/85 border-zinc-200/90 text-zinc-700'
              : 'bg-[#090b16]/75 border-white/[0.08] text-zinc-300'
          }`}>
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>{currentDateStr}</span>
          </div>
        </div>

        {/* Right Toolbar: Minimal Apple-Style Floating Capsule */}
        <nav 
          aria-label="Wallpaper Quick Controls"
          className={`flex items-center gap-0.5 p-1 rounded-full backdrop-blur-2xl border transition-all ${
            isLight
              ? 'bg-white/90 border-zinc-200/90 text-zinc-700 shadow-[0_8px_24px_rgba(0,0,0,0.06)]'
              : 'bg-[#090b16]/75 border-white/[0.12] text-zinc-300 shadow-[0_12px_32px_rgba(0,0,0,0.6)]'
          }`}
        >
          {/* 1. Wallpaper Studio */}
          <button
            type="button"
            onClick={() => setIsStudioOpen(true)}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              isLight
                ? 'hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950'
                : 'hover:bg-white/[0.08] text-zinc-400 hover:text-white'
            }`}
            title="Wallpaper Studio (Celestial Objects, Waves & Lighting)"
            aria-label="Wallpaper Studio"
          >
            <Sliders className="w-3.5 h-3.5" />
          </button>

          {/* 2. Daily Routine Protocols */}
          <button
            type="button"
            onClick={() => setIsRoutineOpen(true)}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              isLight
                ? 'hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950'
                : 'hover:bg-white/[0.08] text-zinc-400 hover:text-white'
            }`}
            title="Daily Routine Protocols"
            aria-label="Daily Routine Protocols"
          >
            <CalendarClock className="w-3.5 h-3.5" />
          </button>

          {/* 3. Focus Audio Sanctuary Modal */}
          <button
            type="button"
            onClick={() => setIsAudioModalOpen(true)}
            className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              (isAudioPlaying || isYouTubePlaying)
                ? isLight ? 'text-violet-600 bg-violet-50' : 'text-violet-300 bg-violet-600/20'
                : isLight
                  ? 'hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950'
                  : 'hover:bg-white/[0.08] text-zinc-400 hover:text-white'
            }`}
            title="Focus Audio Sanctuary (YouTube Streams & Ambient Soundscapes)"
            aria-label="Focus Audio Sanctuary"
          >
            {audioSource === 'youtube' && isYouTubePlaying ? (
              <YouTubeIcon className="w-3.5 h-3.5 text-red-500 animate-pulse" />
            ) : (
              <Headphones className={`w-3.5 h-3.5 ${(isAudioPlaying || isYouTubePlaying) ? 'animate-pulse' : ''}`} />
            )}
            {(isAudioPlaying || isYouTubePlaying) && (
              <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            )}
          </button>

          {/* 4. Personal Profile */}
          <button
            type="button"
            onClick={() => setIsProfileOpen(true)}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              isLight
                ? 'hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950'
                : 'hover:bg-white/[0.08] text-zinc-400 hover:text-white'
            }`}
            title={`Profile & Motto (${profile.name})`}
            aria-label="Profile and Daily Mantra"
          >
            <User className="w-3.5 h-3.5" />
          </button>

          {/* Elegant Divider */}
          <div className={`w-px h-3.5 mx-0.5 ${isLight ? 'bg-zinc-200' : 'bg-white/10'}`} />

          {/* 5. Theme Toggle */}
          <button
            type="button"
            onClick={toggleAppTheme}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              isLight
                ? 'hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950'
                : 'hover:bg-white/[0.08] text-zinc-400 hover:text-white'
            }`}
            title={`Switch to ${isLight ? 'Obsidian Dark' : 'Creamy Light'} Theme`}
            aria-label="Toggle Light/Dark Theme"
          >
            {isLight ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
          </button>

          {/* 6. Zen Mode (Hide HUD) */}
          <button
            type="button"
            onClick={() => setIsHUDHidden(true)}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              isLight
                ? 'hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950'
                : 'hover:bg-white/[0.08] text-zinc-400 hover:text-white'
            }`}
            title="Zen Mode (Hide all controls)"
            aria-label="Enter Zen Mode"
          >
            <EyeOff className="w-3.5 h-3.5" />
          </button>
        </nav>
      </header>

      {/* ======================================================== */}
      {/* 2. GRAND CENTER DIGITAL CLOCK & LIVING GREETING          */}
      {/* ======================================================== */}
      <main className={`${clockPositionClass} text-center flex flex-col items-center justify-center relative z-20 py-4 select-none transition-all duration-300`}>
        {/* Subtle Celestial Breathing Halo */}
        <div className={`absolute w-[360px] h-[360px] sm:w-[520px] sm:h-[520px] lg:w-[680px] lg:h-[680px] rounded-full ${clockHaloClass} pointer-events-none -z-10`} />

        {/* Grand Centered Digital Clock */}
        <div className={`inline-flex items-baseline justify-center max-w-[94vw] px-2 gap-2 sm:gap-4 md:gap-6 ${clockFontClass} ${clockColorClass} select-none leading-none flex-nowrap transition-all`}>
          <span className={`${clockSize} font-light tabular-nums whitespace-nowrap`}>
            {clockTime}
          </span>
          {clockAmPm && (
            <span className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal opacity-75`}>
              {clockAmPm}
            </span>
          )}
        </div>

        {/* Personalized Living Greeting & Mantra Pill */}
        {wallpaperSettings.showGreeting !== false && (
          <div className="mt-5 sm:mt-7 flex justify-center w-full px-2">
            <button
              type="button"
              onClick={() => setIsProfileOpen(true)}
              className={`text-xs sm:text-sm font-sans tracking-wide px-4 sm:px-6 py-2 rounded-2xl sm:rounded-full backdrop-blur-2xl max-w-xl text-center leading-relaxed shadow-lg cursor-pointer transition-all hover:scale-[1.01] ${
                isLight 
                  ? 'bg-white/92 text-zinc-900 border border-zinc-300/80 shadow-md hover:bg-white' 
                  : 'bg-[#0a0618]/85 text-zinc-200 border border-white/[0.14] shadow-lg hover:border-violet-400/40'
              }`}
              title="Click to personalize name & daily mantra"
            >
              {getDynamicGreeting()}, <span className={`font-semibold ${isLight ? 'text-zinc-950' : 'text-white'}`}>{profile.name}</span>. •{' '}
              <span className={`italic ${isLight ? 'text-zinc-700 font-medium' : 'text-zinc-300'}`}>&ldquo;{profile.motto || 'Remember, you are here for you.'}&rdquo;</span>
            </button>
          </div>
        )}

        {/* Zen Mode Restore Hint */}
        {isHUDHidden && (
          <button
            type="button"
            onClick={() => setIsHUDHidden(false)}
            className={`mt-8 flex items-center gap-2 px-5 py-2.5 rounded-full text-xs transition-all border shadow-xl cursor-pointer ${
              isLight
                ? 'bg-white/90 text-zinc-800 border-zinc-300/80 hover:bg-white'
                : 'cosmic-dock text-zinc-300 hover:text-white border-white/[0.12] hover:border-violet-400/40'
            }`}
          >
            <Minimize2 className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-display tracking-wider">Tap anywhere to restore controls</span>
          </button>
        )}
      </main>

      {/* ======================================================== */}
      {/* 3. EXPANDABLE FLOATING POPOVER PANELS (ON-DEMAND)        */}
      {/* ======================================================== */}
      {activeDockPanel !== 'none' && !isHUDHidden && (
        <div className="fixed inset-x-0 bottom-24 z-30 flex justify-center px-4 animate-fadeIn pointer-events-auto">
          {/* Backdrop dismiss */}
          <div 
            className="fixed inset-0 -z-10" 
            onClick={() => setActiveDockPanel('none')} 
          />

          {/* ── PANEL 1: TASKS FOR THE DAY ── */}
          {activeDockPanel === 'tasks' && (
            <div className={`w-full max-w-md p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${
              isLight ? 'bg-white/95 border-zinc-200 text-zinc-900' : 'cosmic-card border-white/[0.15] text-white'
            }`}>
              {/* Header */}
              <div className={`flex items-center justify-between pb-3 border-b shrink-0 ${
                isLight ? 'border-zinc-200' : 'border-white/[0.08]'
              }`}>
                <div className="flex items-center gap-2">
                  <CheckSquare className={`w-4 h-4 ${isLight ? 'text-violet-700' : 'text-violet-300'}`} />
                  <h2 className="text-xs font-display uppercase tracking-[0.18em] font-semibold">
                    Tasks for the Day
                  </h2>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className={`text-[11px] font-display font-medium px-2.5 py-0.5 rounded-full border tabular-nums ${
                    isLight ? 'bg-zinc-100 text-zinc-800 border-zinc-200' : 'bg-white/[0.06] text-violet-200 border-white/[0.10]'
                  }`}>
                    {tasksDoneCount}/{tasks.length} done
                  </span>
                  <button 
                    type="button" 
                    onClick={() => {
                      if (window.confirm("Reset and uncheck all tasks for today?")) {
                        tasks.forEach(t => {
                          if (t.completed) toggleTask(t.id);
                        });
                      }
                    }}
                    className={`p-1 rounded-md border transition-colors cursor-pointer ${
                      isLight ? 'bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-600' : 'bg-white/10 hover:bg-white/20 border-white/10 text-zinc-300 hover:text-white'
                    }`}
                    title="Reset today's tasks"
                    aria-label="Reset tasks for today"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setActiveDockPanel('none')}
                    className="p-1 text-zinc-400 hover:text-white cursor-pointer"
                    aria-label="Close Tasks Panel"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Input Form */}
              <form onSubmit={handleAddTask} className="flex items-center gap-2 shrink-0">
                <input
                  type="text"
                  placeholder="Add task for today..."
                  value={newTaskInput}
                  onChange={(e) => setNewTaskInput(e.target.value)}
                  className="flex-1 cosmic-input rounded-xl px-3.5 py-2 text-xs placeholder-zinc-500"
                  autoFocus
                />
                <button
                  type="submit"
                  disabled={!newTaskInput.trim()}
                  className="w-8 h-8 rounded-xl bg-violet-600 hover:bg-violet-500 text-white disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-all shrink-0 cursor-pointer shadow-sm"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </form>

              {/* Tasks List */}
              <div className="max-h-56 overflow-y-auto space-y-1.5 pr-1">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className={`p-2.5 rounded-xl border transition-all flex items-center justify-between text-xs select-none group ${
                      task.completed
                        ? isLight ? 'bg-zinc-100/60 border-zinc-200/60 text-zinc-400' : 'bg-white/[0.015] border-white/[0.04] text-zinc-500'
                        : isLight ? 'bg-white/80 hover:bg-white border-zinc-200/80 text-zinc-800' : 'bg-white/[0.035] hover:bg-white/[0.07] border-white/[0.08] hover:border-violet-400/20 text-zinc-200'
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
                            : isLight ? 'border-zinc-300 group-hover:border-violet-500' : 'border-white/[0.25] group-hover:border-violet-400'
                        }`}
                      >
                        {task.completed && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                      </div>
                      <span className={`font-sans truncate ${task.completed ? 'line-through text-zinc-400' : isLight ? 'text-zinc-800 font-medium' : 'text-zinc-200'}`}>
                        {task.text}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => deleteTask(task.id)}
                      className="opacity-0 group-hover:opacity-100 text-zinc-400 hover:text-red-400 transition-opacity p-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className={`pt-2.5 border-t flex items-center justify-between text-[11px] font-sans shrink-0 ${
                isLight ? 'border-zinc-200 text-zinc-600' : 'border-white/[0.08] text-zinc-400'
              }`}>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Day Progress
                </span>
                <span className={`font-display font-medium tabular-nums ${isLight ? 'text-zinc-900' : 'text-zinc-200'}`}>
                  {tasksPercent}% done
                </span>
              </div>
            </div>
          )}

          {/* ── PANEL 2: DAILY RHYTHM PULSE ── */}
          {activeDockPanel === 'habits' && (
            <div className={`w-full max-w-md p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${
              isLight ? 'bg-white/95 border-zinc-200 text-zinc-900' : 'cosmic-card border-white/[0.15] text-white'
            }`}>
              {/* Header */}
              <div className={`flex items-center justify-between pb-3 border-b shrink-0 ${
                isLight ? 'border-zinc-200' : 'border-white/[0.08]'
              }`}>
                <div className="flex items-center gap-2">
                  <Droplet className={`w-4 h-4 ${isLight ? 'text-violet-700' : 'text-violet-300'}`} />
                  <h2 className="text-xs font-display uppercase tracking-[0.18em] font-semibold">
                    Daily Rhythm Pulse
                  </h2>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className={`text-[11px] font-display font-medium px-2.5 py-0.5 rounded-full border tabular-nums ${
                    isLight ? 'bg-zinc-100 text-zinc-800 border-zinc-200' : 'bg-white/[0.06] text-violet-200 border-white/[0.10]'
                  }`}>
                    {habitsKeptCount}/{habits.length} kept
                  </span>
                  <button 
                    type="button" 
                    onClick={() => {
                      if (window.confirm("Reset today's habit checkmarks?")) {
                        habits.forEach(h => {
                          if (h.completed) toggleHabit(h.id);
                        });
                      }
                    }}
                    className={`p-1 rounded-md border transition-colors cursor-pointer ${
                      isLight ? 'bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-600' : 'bg-white/10 hover:bg-white/20 border-white/10 text-zinc-300 hover:text-white'
                    }`}
                    title="Reset today's habits"
                    aria-label="Reset habits for today"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                  <button 
                    type="button" 
                    onClick={() => {
                      const name = prompt('Add new daily habit:');
                      if (name) addHabit(name);
                    }}
                    className={`p-1 rounded-md border transition-colors cursor-pointer ${
                      isLight ? 'bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700' : 'bg-white/10 hover:bg-white/20 border-white/10 text-white'
                    }`}
                    title="Add habit"
                    aria-label="Add new daily habit"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setActiveDockPanel('none')}
                    className="p-1 text-zinc-400 hover:text-white cursor-pointer"
                    aria-label="Close Habits Panel"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Habits List */}
              <div className="max-h-56 overflow-y-auto space-y-1.5 pr-1">
                {habits.map((habit) => (
                  <div
                    key={habit.id}
                    onClick={() => toggleHabit(habit.id)}
                    className={`p-2.5 rounded-xl border transition-all flex items-center justify-between text-xs cursor-pointer select-none group ${
                      habit.completed
                        ? isLight ? 'bg-zinc-100/60 border-zinc-200/60 text-zinc-400' : 'bg-white/[0.015] border-white/[0.04] text-zinc-400'
                        : isLight ? 'bg-white/80 hover:bg-white border-zinc-200/80 text-zinc-800' : 'bg-white/[0.035] hover:bg-white/[0.07] border-white/[0.08] hover:border-violet-400/20 text-zinc-200'
                    }`}
                  >
                    <div className="flex flex-col gap-0.5 truncate pr-2">
                      <span className={`font-sans truncate ${habit.completed ? 'line-through text-zinc-400' : isLight ? 'text-zinc-800 font-medium' : 'text-zinc-200'}`}>
                        {habit.name}
                      </span>
                      <div className="flex items-center gap-1.5 text-[10px] font-mono">
                        {habit.streak > 0 ? (
                          <span className="text-amber-500 flex items-center gap-0.5 font-medium">
                            <Flame className="w-3 h-3 fill-amber-500" /> {habit.streak} day streak
                          </span>
                        ) : (
                          <span className={isLight ? 'text-zinc-500' : 'text-zinc-400'}>Ready today</span>
                        )}
                      </div>
                    </div>

                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                        habit.completed
                          ? 'bg-emerald-500 border-emerald-400 text-white shadow-sm'
                          : isLight ? 'border-zinc-300 group-hover:border-violet-500' : 'border-white/[0.25] group-hover:border-violet-400'
                      }`}
                    >
                      {habit.completed && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className={`pt-2.5 border-t flex items-center justify-between text-[11px] font-sans shrink-0 ${
                isLight ? 'border-zinc-200 text-zinc-600' : 'border-white/[0.08] text-zinc-400'
              }`}>
                <div className={`flex items-center gap-1.5 ${isLight ? 'text-zinc-700' : 'text-zinc-400'}`}>
                  <Sparkles className={`w-3.5 h-3.5 ${isLight ? 'text-amber-500' : 'text-violet-300'}`} />
                  <span>Daily Consistency</span>
                </div>
                <span className={`font-display font-medium tabular-nums ${isLight ? 'text-zinc-900' : 'text-zinc-200'}`}>
                  {habitsPercent}% kept
                </span>
              </div>
            </div>
          )}

          {/* ── PANEL 3: DEEP STUDY CONSOLE ── */}
          {activeDockPanel === 'timer' && (
            <div className={`w-full max-w-md p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${
              isLight ? 'bg-white/95 border-zinc-200 text-zinc-900' : 'cosmic-card border-white/[0.15] text-white'
            }`}>
              {/* Header */}
              <div className={`flex items-center justify-between pb-3 border-b shrink-0 ${
                isLight ? 'border-zinc-200' : 'border-white/[0.08]'
              }`}>
                <div className="flex items-center gap-2">
                  <Clock className={`w-4 h-4 ${isLight ? 'text-violet-700' : 'text-violet-300'}`} />
                  <h2 className="text-xs font-display uppercase tracking-[0.18em] font-semibold">
                    Deep Study Console
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-display px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                    isStudyActive 
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 animate-pulse'
                      : isLight ? 'bg-zinc-100 text-zinc-600 border border-zinc-200' : 'bg-white/[0.06] text-zinc-400 border border-white/[0.08]'
                  }`}>
                    {isStudyActive ? 'RUNNING' : 'STOPPED'}
                  </span>
                  <button 
                    type="button" 
                    onClick={() => setActiveDockPanel('none')}
                    className="p-1 text-zinc-400 hover:text-white"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Big Stopwatch Display */}
              <div className="text-center py-2">
                <div className={`text-5xl font-display font-light tracking-widest leading-none tabular-nums ${
                  isLight ? 'text-zinc-900' : 'text-white'
                }`}>
                  {formatStopwatch(studySeconds)}
                </div>
                <p className={`text-[10px] font-display tracking-[0.2em] uppercase mt-2 ${
                  isLight ? 'text-zinc-500' : 'text-zinc-400'
                }`}>
                  {studySubject} • {studyMode}
                </p>
              </div>

              {/* Inputs */}
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  value={studyMode}
                  onChange={(e) => setStudyMode(e.target.value)}
                  placeholder="Mode (e.g. Deep Work)"
                  className="w-full cosmic-input rounded-xl px-3 py-1.5 text-xs"
                />
                <input
                  type="text"
                  value={studyTopic}
                  onChange={(e) => {
                    setStudyTopic(e.target.value);
                    setStudySubject(e.target.value);
                  }}
                  placeholder="Subject (e.g. Engineering)"
                  className="w-full cosmic-input rounded-xl px-3 py-1.5 text-xs"
                />
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={toggleStudyTimer}
                  className={`flex-1 py-2.5 rounded-xl font-display text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                    isLight
                      ? 'bg-zinc-900 hover:bg-zinc-800 text-white border-zinc-800'
                      : 'bg-violet-600 hover:bg-violet-500 text-white border-violet-400/30'
                  }`}
                >
                  {isStudyActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5 fill-current" />}
                  <span>{isStudyActive ? 'Pause Focus' : 'Start Focus'}</span>
                </button>

                <button
                  type="button"
                  onClick={resetStudyTimer}
                  className={`px-3 py-2.5 rounded-xl border transition-colors cursor-pointer ${
                    isLight
                      ? 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200'
                      : 'bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white border-white/[0.08]'
                  }`}
                  title="Reset stopwatch"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Footer */}
              <div className={`pt-2.5 border-t flex items-center justify-between text-[11px] font-sans shrink-0 ${
                isLight ? 'border-zinc-200 text-zinc-600' : 'border-white/[0.08] text-zinc-400'
              }`}>
                <span>Weekly: <strong className={`font-display ${isLight ? 'text-zinc-900' : 'text-zinc-200'}`}>{weeklyStudyHours}h</strong> / 15h</span>
                <span className={`font-display font-medium tabular-nums ${isLight ? 'text-zinc-900' : 'text-zinc-200'}`}>{weeklyQuotaPct}% quota</span>
              </div>
            </div>
          )}

          {/* ── PANEL 4: WELLNESS TELEMETRY ── */}
          {activeDockPanel === 'wellness' && (
            <div className={`w-full max-w-sm p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${
              isLight ? 'bg-white/95 border-zinc-200 text-zinc-900' : 'cosmic-card border-white/[0.15] text-white'
            }`}>
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-xs font-display uppercase tracking-widest font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Daily Wellness Pulse
                </span>
                <button onClick={() => setActiveDockPanel('none')} className="p-1 text-zinc-400 hover:text-white">
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Water adjust */}
              <div className="flex items-center justify-between py-1 text-xs">
                <div className="flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-sky-400" />
                  <span>Hydration Target</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setHydration((prev) => Math.max(0, prev - 12.5))}
                    className="w-6 h-6 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center font-bold"
                  >
                    -
                  </button>
                  <span className="font-mono font-bold w-12 text-center">
                    {Math.round((hydration / 100) * 8)} / 8
                  </span>
                  <button
                    type="button"
                    onClick={() => setHydration((prev) => Math.min(100, prev + 12.5))}
                    className="w-6 h-6 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Sleep cycle */}
              <div className="flex items-center justify-between py-1 text-xs">
                <div className="flex items-center gap-2">
                  <Moon className="w-4 h-4 text-violet-400" />
                  <span>Sleep Duration</span>
                </div>
                <button
                  type="button"
                  onClick={() => setSleep((sleepHours % 12) + 1)}
                  className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 font-mono font-bold text-xs"
                >
                  {sleepHours} Hours (Click to Cycle)
                </button>
              </div>

              {/* Day Rating */}
              <div className="flex items-center justify-between py-1 text-xs">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-400" />
                  <span>Day Score</span>
                </div>
                <button
                  type="button"
                  onClick={() => setDailyRating(dailyRating >= 10 ? 1 : dailyRating + 1)}
                  className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 font-mono font-bold text-xs text-amber-400"
                >
                  {dailyRating} / 10 ★
                </button>
              </div>

              {/* Day Reset & Rollover */}
              <div className={`pt-3 mt-1 border-t flex items-center justify-between ${
                isLight ? 'border-zinc-200' : 'border-white/10'
              }`}>
                <div className="flex flex-col">
                  <span className="text-[11px] font-medium flex items-center gap-1">
                    <RotateCcw className="w-3 h-3 text-violet-400" />
                    Day Reset
                  </span>
                  <span className={`text-[9px] font-mono ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                    Active: {lastActiveDate}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    if (window.confirm("Start a fresh day? This will uncheck today's tasks & habits and reset hydration to 0%.")) {
                      resetDayProgress();
                    }
                  }}
                  className={`px-3 py-1.5 rounded-xl border text-[11px] font-display uppercase tracking-wider font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    isLight
                      ? 'bg-violet-50 hover:bg-violet-100 text-violet-700 border-violet-200'
                      : 'bg-violet-600/30 hover:bg-violet-600/50 text-violet-200 border-violet-400/40 hover:border-violet-400'
                  }`}
                  title="Reset daily progress for a fresh day"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Start Fresh Day</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ======================================================== */}
      {/* 4. SLEEK FLOATING BOTTOM SANCTUARY DOCK                  */}
      {/* ======================================================== */}
      {!isHUDHidden && (
        <footer className="relative shrink-0 flex items-center justify-center w-full z-20 pb-2">
          <nav 
            aria-label="Sanctuary Focus Dock"
            className={`flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-full backdrop-blur-2xl border shadow-2xl transition-all ${
              isLight 
                ? 'bg-white/85 border-zinc-200/90 text-zinc-800 shadow-[0_15px_40px_rgba(0,0,0,0.1)]' 
                : 'bg-[#090b16]/80 border-white/[0.12] text-zinc-200 shadow-[0_20px_50px_rgba(0,0,0,0.8)]'
            }`}
          >
            {/* 1. Focus Timer Pill */}
            <div className={`flex items-center rounded-full border transition-all ${
              isStudyActive 
                ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300' 
                : isLight ? 'bg-zinc-100/90 border-zinc-200 text-zinc-800' : 'bg-white/[0.04] border-white/[0.08] text-zinc-300'
            }`}>
              <button
                type="button"
                onClick={toggleStudyTimer}
                className="pl-3 pr-1.5 py-1.5 flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity"
                title={isStudyActive ? 'Pause focus timer' : 'Start focus timer'}
              >
                {isStudyActive ? <Pause className="w-3.5 h-3.5 text-emerald-400 animate-pulse" /> : <Play className="w-3.5 h-3.5 text-zinc-400 fill-current" />}
                <span className="font-mono text-xs font-semibold tabular-nums">
                  {formatStopwatch(studySeconds)}
                </span>
              </button>
              <button
                type="button"
                onClick={() => setActiveDockPanel(prev => prev === 'timer' ? 'none' : 'timer')}
                className={`pr-3 pl-1 py-1.5 text-[11px] font-sans border-l transition-colors cursor-pointer ${
                  isLight ? 'border-zinc-200 hover:text-black' : 'border-white/10 hover:text-white'
                }`}
                title="Expand Focus Timer Panel"
              >
                <span>{studyTopic}</span>
              </button>
            </div>

            {/* 2. Tasks Pill */}
            <button
              type="button"
              onClick={() => setActiveDockPanel(prev => prev === 'tasks' ? 'none' : 'tasks')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-sans transition-all cursor-pointer ${
                activeDockPanel === 'tasks'
                  ? 'bg-violet-600 text-white border-violet-400'
                  : isLight ? 'bg-zinc-100/90 hover:bg-zinc-200 border-zinc-200 text-zinc-800' : 'bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300 hover:text-white'
              }`}
              title="Daily Tasks"
            >
              <CheckSquare className="w-3.5 h-3.5 text-violet-400" />
              <span>Tasks</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${
                isLight ? 'bg-zinc-200/90 text-zinc-800' : 'bg-white/10 text-violet-200'
              }`}>
                {tasksDoneCount}/{tasks.length}
              </span>
            </button>

            {/* 3. Habits Pill */}
            <button
              type="button"
              onClick={() => setActiveDockPanel(prev => prev === 'habits' ? 'none' : 'habits')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-sans transition-all cursor-pointer ${
                activeDockPanel === 'habits'
                  ? 'bg-violet-600 text-white border-violet-400'
                  : isLight ? 'bg-zinc-100/90 hover:bg-zinc-200 border-zinc-200 text-zinc-800' : 'bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300 hover:text-white'
              }`}
              title="Daily Rhythm Habits"
            >
              <Droplet className="w-3.5 h-3.5 text-sky-400" />
              <span>Rhythm</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${
                isLight ? 'bg-zinc-200/90 text-zinc-800' : 'bg-white/10 text-sky-200'
              }`}>
                {habitsKeptCount}/{habits.length}
              </span>
            </button>

            {/* 4. Wellness Telemetry Pill */}
            <button
              type="button"
              onClick={() => setActiveDockPanel(prev => prev === 'wellness' ? 'none' : 'wellness')}
              className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-sans transition-all cursor-pointer ${
                activeDockPanel === 'wellness'
                  ? 'bg-amber-500 text-black border-amber-400'
                  : isLight ? 'bg-zinc-100/90 hover:bg-zinc-200 border-zinc-200 text-zinc-800' : 'bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300 hover:text-white'
              }`}
              title="Sleep, Water & Daily Rating"
            >
              <Moon className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-mono text-[11px]">{sleepHours}h</span>
              <span className="text-white/20">•</span>
              <span className="font-mono text-[11px] text-sky-400">{Math.round((hydration / 100) * 8)}/8💧</span>
            </button>

            {/* 5. Audio Sanctuary Pill */}
            <div 
              onClick={() => setIsAudioModalOpen(true)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs cursor-pointer group transition-all ${
                (isAudioPlaying || isYouTubePlaying)
                  ? audioSource === 'youtube'
                    ? 'bg-red-600/30 border-red-500/40 text-red-200'
                    : 'bg-violet-600/30 border-violet-500/40 text-violet-200'
                  : isLight ? 'bg-zinc-100/90 hover:bg-zinc-200 border-zinc-200 text-zinc-800' : 'bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300 hover:text-white'
              }`}
              title="Open Audio Sanctuary"
            >
              {audioSource === 'youtube' && isYouTubePlaying ? (
                <YouTubeIcon className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              ) : (
                <Headphones className={`w-3.5 h-3.5 ${(isAudioPlaying || isYouTubePlaying) ? 'text-violet-300 animate-pulse' : 'text-zinc-400'}`} />
              )}
              <span className="max-w-[80px] sm:max-w-[120px] truncate text-[11px] font-medium">
                {audioSource === 'youtube'
                  ? (activeYouTubeItem ? activeYouTubeItem.title : 'YouTube')
                  : activePreset.title}
              </span>

              <SoundVisualizer 
                isPlaying={audioSource === 'youtube' ? isYouTubePlaying : isAudioPlaying} 
                color={audioSource === 'youtube' ? '#ef4444' : isLight ? '#7c3aed' : activePreset.accentColor} 
                className="w-8 h-2.5" 
                barCount={4} 
              />

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  if (audioSource === 'youtube') {
                    toggleYouTubePlay();
                  } else {
                    if (isAudioPlaying) stopSoundscape();
                    else playSoundscape(activeSoundscapeId);
                  }
                }}
                className="w-5 h-5 rounded-md flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
                title={(audioSource === 'youtube' ? isYouTubePlaying : isAudioPlaying) ? 'Pause audio' : 'Play audio'}
              >
                {(audioSource === 'youtube' ? isYouTubePlaying : isAudioPlaying) ? (
                  <Pause className="w-2.5 h-2.5 fill-current" />
                ) : (
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                )}
              </button>
            </div>
          </nav>
        </footer>
      )}

      {/* ======================================================== */}
      {/* 5. ROUTINE PROTOCOLS DRAWER                              */}
      {/* ======================================================== */}
      {isRoutineOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsRoutineOpen(false)} />
          <aside className={`relative z-10 w-80 sm:w-96 max-w-[90vw] h-full backdrop-blur-3xl border-r shadow-2xl pt-14 sm:pt-16 px-6 pb-6 flex flex-col justify-between ${
            isLight ? 'bg-[#faf8f4]/98 border-zinc-200 text-zinc-900' : 'bg-[#0d0f17]/95 border-white/[0.1] text-white'
          }`}>
            <div className="space-y-4">
              <div className={`flex items-center justify-between pb-3.5 border-b ${
                isLight ? 'border-zinc-200' : 'border-white/[0.08]'
              }`}>
                <div className="flex items-center gap-2">
                  <CalendarClock className={`w-4 h-4 ${isLight ? 'text-violet-700' : 'text-violet-300'}`} />
                  <h3 className={`text-xs font-sans uppercase tracking-[0.16em] font-semibold ${
                    isLight ? 'text-zinc-900' : 'text-white'
                  }`}>
                    Daily Routine Protocols
                  </h3>
                </div>
                <button onClick={() => setIsRoutineOpen(false)} className={`transition-colors cursor-pointer ${
                  isLight ? 'text-zinc-500 hover:text-black' : 'text-zinc-400 hover:text-white'
                }`}>
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-2.5 text-xs overflow-y-auto max-h-[58vh] pr-1">
                {routines.map((r) => (
                  <div 
                    key={r.id}
                    className={`p-3.5 rounded-2xl border transition-all relative group ${
                      isLight ? 'bg-white/80 border-zinc-200 shadow-sm' : 'bg-white/[0.03] border-white/[0.08]'
                    }`}
                  >
                    <div className="flex items-center justify-between pb-1.5">
                      <span className="font-semibold text-amber-500 flex items-center gap-1.5">
                        <Sunrise className="w-3.5 h-3.5" /> {r.title}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className={`text-[10px] font-mono ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                          {r.timeRange}
                        </span>
                        {routines.length > 1 && (
                          <button
                            type="button"
                            onClick={() => deleteRoutineBlock(r.id)}
                            className="opacity-0 group-hover:opacity-100 p-1 text-zinc-400 hover:text-red-400 transition-opacity cursor-pointer"
                            title="Delete protocol block"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    </div>
                    <p className={`text-[11px] leading-relaxed ${isLight ? 'text-zinc-700' : 'text-zinc-300'}`}>
                      {r.description}
                    </p>
                  </div>
                ))}

                {isAddingRoutine ? (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (newRoutineTitle.trim() && newRoutineDesc.trim()) {
                        addRoutineBlock({
                          title: newRoutineTitle.trim(),
                          timeRange: newRoutineTime.trim() || 'Flexible',
                          description: newRoutineDesc.trim(),
                          iconType: 'custom',
                        });
                        setNewRoutineTitle('');
                        setNewRoutineTime('');
                        setNewRoutineDesc('');
                        setIsAddingRoutine(false);
                      }
                    }}
                    className={`p-3 rounded-2xl border space-y-2 ${
                      isLight ? 'bg-white border-zinc-300 shadow-sm' : 'bg-white/[0.05] border-white/[0.12]'
                    }`}
                  >
                    <input
                      type="text"
                      placeholder="Protocol title (e.g. Creative Sprint)"
                      value={newRoutineTitle}
                      onChange={(e) => setNewRoutineTitle(e.target.value)}
                      className="w-full cosmic-input rounded-xl px-3 py-1.5 text-xs"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Time range (e.g. 14:00 – 16:00)"
                      value={newRoutineTime}
                      onChange={(e) => setNewRoutineTime(e.target.value)}
                      className="w-full cosmic-input rounded-xl px-3 py-1.5 text-xs"
                    />
                    <textarea
                      placeholder="Protocol description / intentions..."
                      value={newRoutineDesc}
                      onChange={(e) => setNewRoutineDesc(e.target.value)}
                      className="w-full cosmic-input rounded-xl px-3 py-1.5 text-xs resize-none h-16"
                      required
                    />
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        type="button"
                        onClick={() => setIsAddingRoutine(false)}
                        className={`px-2.5 py-1 rounded-lg text-[11px] ${isLight ? 'text-zinc-600 hover:text-black' : 'text-zinc-400 hover:text-white'}`}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-3 py-1 rounded-lg text-[11px] bg-violet-600 hover:bg-violet-500 text-white font-medium cursor-pointer"
                      >
                        Add Block
                      </button>
                    </div>
                  </form>
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsAddingRoutine(true)}
                    className={`w-full py-2 rounded-xl border border-dashed flex items-center justify-center gap-1.5 text-[11px] transition-all cursor-pointer ${
                      isLight
                        ? 'border-zinc-300 hover:border-zinc-400 text-zinc-600 hover:text-zinc-900 bg-white/40'
                        : 'border-white/10 hover:border-white/20 text-zinc-400 hover:text-white bg-white/[0.01]'
                    }`}
                  >
                    <Plus className="w-3 h-3" />
                    <span>Add Custom Protocol Block</span>
                  </button>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                type="button"
                onClick={resetRoutines}
                className={`px-3 py-2.5 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
                  isLight
                    ? 'border-zinc-200 text-zinc-600 hover:bg-zinc-100'
                    : 'border-white/10 text-zinc-400 hover:bg-white/[0.05] hover:text-white'
                }`}
                title="Reset to default protocols"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={() => setIsRoutineOpen(false)}
                className={`flex-1 py-2.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                  isLight
                    ? 'bg-zinc-900 hover:bg-zinc-800 text-white'
                    : 'bg-white/[0.06] hover:bg-white/[0.12] text-white'
                }`}
              >
                Close Routine
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* ======================================================== */}
      {/* 6. MODALS & PERSONALIZATION STUDIOS                      */}
      {/* ======================================================== */}
      {/* Profile & Personalization Modal */}
      <ProfileModal 
        isOpen={isProfileOpen} 
        onClose={() => setIsProfileOpen(false)} 
      />

      {/* Wallpaper Studio Customization Modal */}
      <WallpaperStudioModal 
        isOpen={isStudioOpen} 
        onClose={() => setIsStudioOpen(false)} 
      />

      {/* Focus Audio Sanctuary Modal */}
      <FocusAudioModal
        isOpen={isAudioModalOpen}
        onClose={() => setIsAudioModalOpen(false)}
      />
    </div>
  );
};
