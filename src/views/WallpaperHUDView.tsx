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
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX
} from 'lucide-react';
import { useData } from '../context/DataContext';
import { WallpaperStudioModal } from '../components/common/WallpaperStudioModal';
import { FocusAudioModal } from '../components/audio/FocusAudioModal';
import { SoundVisualizer } from '../components/audio/SoundVisualizer';
import { SOUNDSCAPE_PRESETS } from '../services/soundEngine';
import { YouTubeIcon } from '../components/audio/YouTubeIcon';

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
    wallpaperSettings,
    audioSource,
    isAudioPlaying,
    activeSoundscapeId,
    playSoundscape,
    stopSoundscape,
    isYouTubePlaying,
    isYouTubeMuted,
    toggleYouTubeMute,
    activeYouTubeItem,
    toggleYouTubePlay,
    nextYouTubeTrack,
    prevYouTubeTrack,
    appTheme,
    toggleAppTheme
  } = useData();

  const isLight = appTheme === 'light';

  const [isStudioOpen, setIsStudioOpen] = useState(false);
  const [isAudioModalOpen, setIsAudioModalOpen] = useState(false);

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

  const activePreset = SOUNDSCAPE_PRESETS.find((p) => p.id === activeSoundscapeId) || SOUNDSCAPE_PRESETS[0];

  // Accessible keyboard shortcuts (Escape closes drawers & modals)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsRoutineOpen(false);
        setIsAudioModalOpen(false);
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
          <div className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs font-mono font-medium tracking-tight shadow-sm transition-all ${
            isLight
              ? 'border-zinc-300 bg-white/80 text-zinc-900 group-hover:bg-white group-hover:border-zinc-400'
              : 'border-white/20 bg-white/[0.04] text-white group-hover:bg-white/[0.1] group-hover:border-white/40'
          }`}>
            FM
          </div>
          <span className={`font-sans font-bold text-xs tracking-[0.2em] uppercase group-hover:opacity-85 transition-opacity ${
            isLight ? 'text-zinc-900' : 'text-white'
          }`}>
            FOR ME
          </span>
        </div>

        {/* Center Pill: Current Date (hidden on mobile to prevent overflow) */}
        <div className={`hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-2xl border text-xs font-sans shadow-sm shrink-0 ${
          isLight
            ? 'bg-white/85 border-zinc-200/90 text-zinc-800'
            : 'bg-white/[0.035] border-white/[0.08] text-zinc-300'
        }`}>
          <Sparkles className={`w-3.5 h-3.5 ${isLight ? 'text-amber-500' : 'text-violet-300'}`} />
          <span>{currentDateStr}</span>
        </div>

        {/* Right Toolbar */}
        <div className={`flex items-center gap-1 sm:gap-1.5 p-1 rounded-2xl backdrop-blur-2xl border text-xs shrink-0 ${
          isLight
            ? 'bg-white/88 border-zinc-200/90 text-zinc-700 shadow-sm'
            : 'bg-white/[0.04] border-white/[0.08] text-zinc-300'
        }`}>
          {/* Light / Dark Theme Mode Toggle */}
          <button
            type="button"
            onClick={toggleAppTheme}
            className={`px-2.5 sm:px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-colors font-medium text-[11px] sm:text-xs cursor-pointer ${
              isLight
                ? 'hover:bg-black/[0.05] text-zinc-800 hover:text-black'
                : 'hover:bg-white/[0.06] text-zinc-300 hover:text-white'
            }`}
            title={`Switch to ${isLight ? 'Obsidian Dark' : 'Creamy Light'} Theme`}
            aria-label={`Switch to ${isLight ? 'Dark' : 'Light'} Theme`}
          >
            {isLight ? (
              <>
                <Moon className="w-3.5 h-3.5 text-zinc-700" />
                <span className="hidden sm:inline">Dark</span>
              </>
            ) : (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-300" />
                <span className="hidden sm:inline">Light</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => setIsHUDHidden(!isHUDHidden)}
            className={`px-3 py-1.5 rounded-xl transition-all font-medium text-xs flex items-center gap-1.5 cursor-pointer ${
              isHUDHidden
                ? 'bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold shadow-[0_0_20px_rgba(251,191,36,0.35)]'
                : isLight
                  ? 'hover:bg-black/[0.05] text-zinc-700 hover:text-zinc-950'
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
                <EyeOff className={`w-3.5 h-3.5 ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`} />
                <span className="hidden sm:inline">Hide</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => setIsRoutineOpen(true)}
            className={`px-2.5 sm:px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-colors font-medium text-[11px] sm:text-xs ${
              isLight
                ? 'hover:bg-black/[0.05] text-zinc-700 hover:text-zinc-950'
                : 'hover:bg-white/[0.06] hover:text-white text-zinc-300'
            }`}
          >
            <CalendarClock className={`w-3.5 h-3.5 ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`} />
            <span className="hidden sm:inline">Routine</span>
          </button>

          <button
            type="button"
            onClick={() => setIsStudioOpen(true)}
            className={`px-2.5 sm:px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-colors font-medium text-[11px] sm:text-xs ${
              isLight
                ? 'hover:bg-black/[0.05] text-violet-700 hover:text-violet-950 font-semibold'
                : 'hover:bg-white/[0.06] hover:text-white text-violet-300'
            }`}
            title="Open Wallpaper Studio & Customization"
          >
            <Sliders className={`w-3.5 h-3.5 ${isLight ? 'text-violet-600' : 'text-violet-400'}`} />
            <span className="hidden sm:inline">Studio</span>
          </button>

          <button
            type="button"
            onClick={() => setIsAudioModalOpen(true)}
            className={`px-2.5 sm:px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-colors font-medium text-[11px] sm:text-xs cursor-pointer ${
              (isAudioPlaying || isYouTubePlaying)
                ? audioSource === 'youtube'
                  ? isLight ? 'bg-red-50 text-red-700 border border-red-200 font-bold shadow-sm' : 'bg-red-600/35 text-red-200 border border-red-400/40 shadow-[0_0_15px_rgba(239,68,68,0.3)]'
                  : isLight ? 'bg-violet-50 text-violet-700 border border-violet-200 font-bold shadow-sm' : 'bg-violet-600/35 text-violet-200 border border-violet-400/40 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                : isLight
                  ? 'hover:bg-black/[0.05] text-zinc-700 hover:text-zinc-950'
                  : 'hover:bg-white/[0.06] hover:text-white text-zinc-300'
            }`}
            title="Open Focus Audio Sanctuary (YouTube & Soundscapes)"
          >
            {audioSource === 'youtube' && isYouTubePlaying ? (
              <YouTubeIcon className="w-3.5 h-3.5 text-red-500 animate-pulse" />
            ) : (
              <Headphones className={`w-3.5 h-3.5 ${isAudioPlaying ? (isLight ? 'text-violet-600 animate-pulse' : 'text-violet-300 animate-pulse') : (isLight ? 'text-zinc-500' : 'text-zinc-400')}`} />
            )}
            <span className="hidden sm:inline">Audio</span>
            {(isAudioPlaying || isYouTubePlaying) && (
              <SoundVisualizer 
                isPlaying={true} 
                color={audioSource === 'youtube' ? '#ef4444' : isLight ? '#7c3aed' : '#c084fc'} 
                className="w-8 h-3 ml-0.5" 
                barCount={5} 
              />
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('journal')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-colors font-medium text-[11px] sm:text-xs ${
              isLight
                ? 'hover:bg-black/[0.05] text-zinc-700 hover:text-zinc-950'
                : 'hover:bg-white/[0.06] hover:text-white text-zinc-300'
            }`}
          >
            <BookOpen className={`w-3.5 h-3.5 ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`} />
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
            <div className={`inline-flex items-baseline justify-center gap-2 sm:gap-3 md:gap-5 ${clockFontClass} select-none leading-none ${
              isLight ? 'text-zinc-900' : 'text-white'
            }`}>
              <span className={`${clockSizeHUD} font-light tabular-nums ${
                isLight ? 'drop-shadow-[0_4px_24px_rgba(200,180,160,0.30)]' : 'drop-shadow-[0_8px_40px_rgba(0,0,0,0.85)]'
              }`}>
                {clockTime}
              </span>
              {clockAmPm && (
                <span className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal ${
                  isLight ? 'text-zinc-600' : 'text-zinc-300'
                }`}>
                  {clockAmPm}
                </span>
              )}
            </div>

            {wallpaperSettings.showGreeting !== false && (
              <div className="flex justify-center w-full px-2">
                <p className={`text-xs sm:text-sm font-sans tracking-wide px-4 sm:px-6 py-2 rounded-2xl sm:rounded-full backdrop-blur-xl max-w-xl text-center leading-relaxed shadow-lg ${
                  isLight 
                    ? 'bg-white/92 text-zinc-900 border border-zinc-300/80 shadow-md' 
                    : 'bg-[#0a0618]/85 text-zinc-200 border border-white/[0.14] shadow-lg'
                }`}>
                  Good evening, <span className={`font-semibold ${isLight ? 'text-zinc-950' : 'text-white'}`}>{profile.name}</span>. •{' '}
                  <span className={`italic ${isLight ? 'text-zinc-700 font-medium' : 'text-zinc-300'}`}>&ldquo;Remember, you are here for you.&rdquo;</span>
                </p>
              </div>
            )}
          </section>

          {/* THREE FROSTED GLASS CONSOLE CARDS */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-auto items-stretch w-full max-lg:py-6 lg:max-h-[52vh]">
        {/* ── CARD 1: TASKS FOR THE DAY ── */}
        <div className="p-6 rounded-[2rem] cosmic-card flex flex-col justify-between h-auto min-h-[310px] lg:h-full overflow-hidden transition-all duration-300">
          <div className="flex-1 min-h-0 flex flex-col space-y-3">
            {/* Header */}
            <div className={`flex items-center justify-between pb-3 border-b shrink-0 ${
              isLight ? 'border-zinc-200' : 'border-white/[0.08]'
            }`}>
              <div className="flex items-center gap-2">
                <CheckSquare className={`w-4 h-4 ${isLight ? 'text-violet-700' : 'text-violet-300'}`} />
                <h2 className={`text-xs font-display uppercase tracking-[0.18em] font-semibold ${
                  isLight ? 'text-zinc-900' : 'text-white'
                }`}>
                  Tasks for the Day
                </h2>
              </div>
              <span className={`text-[11px] font-display font-medium px-2.5 py-0.5 rounded-full border tabular-nums ${
                isLight ? 'bg-zinc-100 text-zinc-800 border-zinc-200' : 'bg-white/[0.06] text-violet-200 border-white/[0.10]'
              }`}>
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
                    aria-label={`Delete task: ${task.text}`}
                    onClick={() => deleteTask(task.id)}
                    className="opacity-0 group-hover:opacity-100 text-zinc-400 hover:text-red-400 transition-opacity p-1 cursor-pointer focus:opacity-100"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className={`pt-3 border-t flex items-center justify-between text-[11px] font-sans shrink-0 ${
            isLight ? 'border-zinc-200 text-zinc-600' : 'border-white/[0.08] text-zinc-400'
          }`}>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Day Progress
            </span>
            <span className={`font-display font-medium tabular-nums ${isLight ? 'text-zinc-900' : 'text-zinc-200'}`}>{tasksPercent}% done</span>
          </div>
        </div>

        {/* ── CARD 2: DAILY RHYTHM PULSE ── */}
        <div className="p-6 rounded-[2rem] cosmic-card flex flex-col justify-between h-auto min-h-[310px] lg:h-full overflow-hidden transition-all duration-300">
          <div className="flex-1 min-h-0 flex flex-col space-y-3">
            {/* Header */}
            <div className={`flex items-center justify-between pb-3 border-b shrink-0 ${
              isLight ? 'border-zinc-200' : 'border-white/[0.08]'
            }`}>
              <div className="flex items-center gap-2">
                <Droplet className={`w-4 h-4 ${isLight ? 'text-violet-700' : 'text-violet-300'}`} />
                <h2 className={`text-xs font-display uppercase tracking-[0.18em] font-semibold ${
                  isLight ? 'text-zinc-900' : 'text-white'
                }`}>
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
                  aria-label="Add habit"
                  onClick={() => {
                    const name = prompt('Add new daily rhythm habit:');
                    if (name) addHabit(name);
                  }}
                  className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors cursor-pointer ${
                    isLight ? 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700' : 'bg-white/[0.08] hover:bg-white text-zinc-300 hover:text-black'
                  }`}
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
                          🔥 {habit.streak} day streak
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
          </div>

          {/* Footer */}
          <div className={`pt-3 border-t flex items-center justify-between text-[11px] font-sans shrink-0 ${
            isLight ? 'border-zinc-200 text-zinc-600' : 'border-white/[0.08] text-zinc-400'
          }`}>
            <button
              onClick={() => setActiveTab('journal')}
              className={`flex items-center gap-1.5 transition-colors ${
                isLight ? 'hover:text-black text-zinc-700' : 'hover:text-white text-zinc-400'
              }`}
            >
              <BookOpen className={`w-3.5 h-3.5 ${isLight ? 'text-violet-700' : 'text-violet-300'}`} />
              <span>Journal & Reflect →</span>
            </button>
            <span className={`font-display font-medium tabular-nums ${isLight ? 'text-zinc-900' : 'text-zinc-200'}`}>{habitsPercent}% kept</span>
          </div>
        </div>

        {/* ── CARD 3: DEEP STUDY CONSOLE ── */}
        <div className="p-6 rounded-[2rem] cosmic-card flex flex-col justify-between h-auto min-h-[310px] lg:h-full overflow-hidden transition-all duration-300">
          <div className="flex-1 min-h-0 flex flex-col space-y-3">
            {/* Header */}
            <div className={`flex items-center justify-between pb-3 border-b shrink-0 ${
              isLight ? 'border-zinc-200' : 'border-white/[0.08]'
            }`}>
              <div className="flex items-center gap-2">
                <Clock className={`w-4 h-4 ${isLight ? 'text-violet-700' : 'text-violet-300'}`} />
                <h2 className={`text-xs font-display uppercase tracking-[0.18em] font-semibold ${
                  isLight ? 'text-zinc-900' : 'text-white'
                }`}>
                  Deep Study Console
                </h2>
              </div>
              <span className={`text-[10px] font-display px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                isStudyActive 
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 animate-pulse'
                  : isLight ? 'bg-zinc-100 text-zinc-600 border border-zinc-200' : 'bg-white/[0.06] text-zinc-400 border border-white/[0.08]'
              }`}>
                {isStudyActive ? 'RUNNING' : 'STOPPED'}
              </span>
            </div>

            {/* Big Stopwatch Display */}
            <div className="text-center py-2">
              <div className={`text-5xl lg:text-6xl font-display font-light tracking-widest leading-none tabular-nums ${
                isLight ? 'text-zinc-900' : 'text-white'
              }`}>
                {formatStopwatch(studySeconds)}
              </div>
              <p className={`text-[10px] font-display tracking-[0.2em] uppercase mt-2 ${
                isLight ? 'text-zinc-500' : 'text-zinc-400'
              }`}>
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

            {/* Full-width Purposeful CTA */}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={toggleStudyTimer}
                className={`flex-1 py-3 rounded-2xl font-display text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                  isLight
                    ? 'bg-zinc-900 hover:bg-zinc-800 text-white border-zinc-800 shadow-[0_4px_16px_rgba(24,24,27,0.18)]'
                    : 'bg-violet-600 hover:bg-violet-500 text-white border-violet-400/30 shadow-[0_0_24px_rgba(124,58,237,0.40)]'
                }`}
              >
                {isStudyActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5 fill-current" />}
                <span>{isStudyActive ? 'Pause Focus' : 'Start Focus'}</span>
              </button>

              <button
                type="button"
                aria-label="Reset stopwatch"
                onClick={resetStudyTimer}
                className={`px-3.5 py-3 rounded-2xl border transition-colors cursor-pointer ${
                  isLight
                    ? 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200'
                    : 'bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white border-white/[0.08]'
                }`}
                title="Reset stopwatch"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className={`pt-3 border-t flex items-center justify-between text-[11px] font-sans shrink-0 ${
            isLight ? 'border-zinc-200 text-zinc-600' : 'border-white/[0.08] text-zinc-400'
          }`}>
            <span>Weekly: <strong className={`font-display ${isLight ? 'text-zinc-900' : 'text-zinc-200'}`}>{weeklyStudyHours}h</strong> / 15h</span>
            <span className={`font-display font-medium tabular-nums ${isLight ? 'text-zinc-900' : 'text-zinc-200'}`}>{weeklyQuotaPct}% quota</span>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. FLOATING BOTTOM STATUS DOCKS                          */}
      {/* ======================================================== */}
      <footer className="relative shrink-0 flex flex-wrap items-center justify-between w-full pt-3 pb-2 sm:pb-3 z-20 gap-3 mt-auto">
        {/* Left balance spacer for perfect optical centering on wide screens */}
        <div className="hidden xl:block w-48 shrink-0 pointer-events-none" />

        {/* Center Pill: Sleep, Water, Day Rating */}
        <div className={`flex flex-wrap items-center justify-center gap-4 sm:gap-6 px-5 sm:px-7 py-2.5 rounded-full cosmic-dock text-xs font-sans mx-auto ${
          isLight ? 'text-zinc-800' : 'text-zinc-300'
        }`}>
          {/* Sleep */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => setSleep((sleepHours % 12) + 1, 0)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSleep((sleepHours % 12) + 1, 0); }}
            aria-label={`Cycle sleep hours. Current: ${sleepHours} hours`}
            className={`flex items-center gap-1.5 cursor-pointer transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-violet-400/50 rounded-lg px-1.5 py-0.5 ${
              isLight ? 'hover:text-black text-zinc-700' : 'hover:text-white text-zinc-300'
            }`}
            title="Click or press Enter to cycle sleep hours"
          >
            <Moon className={`w-3.5 h-3.5 ${isLight ? 'text-zinc-600' : 'text-zinc-300'}`} />
            <span>Sleep: <strong className={`font-display tabular-nums ${isLight ? 'text-zinc-900 font-bold' : 'text-white'}`}>{sleepHours}h</strong></span>
          </div>

          <span className={isLight ? 'text-zinc-300' : 'text-white/[0.1]'}>•</span>

          {/* Water */}
          <div className={`flex items-center gap-1.5 px-1.5 py-0.5 ${isLight ? 'text-zinc-700' : 'text-zinc-300'}`}>
            <Droplets className={`w-3.5 h-3.5 ${isLight ? 'text-sky-600' : 'text-sky-400'}`} />
            <span>Water: <strong className={`font-display tabular-nums ${isLight ? 'text-zinc-900 font-bold' : 'text-white'}`}>{Math.round((hydration / 100) * 8)}</strong>/8</span>
            <div className="flex items-center gap-1 ml-0.5">
              <button
                type="button"
                aria-label="Decrease water count by 1 glass"
                onClick={() => setHydration((prev) => Math.max(0, prev - 12.5))}
                className={`w-4 h-4 rounded-md border flex items-center justify-center text-[10px] transition-colors cursor-pointer ${
                  isLight ? 'bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-800' : 'bg-white/[0.05] hover:bg-white/[0.15] border-white/[0.1] text-white'
                }`}
              >
                -
              </button>
              <button
                type="button"
                aria-label="Increase water count by 1 glass"
                onClick={() => setHydration((prev) => Math.min(100, prev + 12.5))}
                className={`w-4 h-4 rounded-md border flex items-center justify-center text-[10px] transition-colors cursor-pointer ${
                  isLight ? 'bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-800' : 'bg-white/[0.05] hover:bg-white/[0.15] border-white/[0.1] text-white'
                }`}
              >
                +
              </button>
            </div>
          </div>

          <span className={isLight ? 'text-zinc-300' : 'text-white/[0.1]'}>•</span>

          {/* Day Rating */}
          <div 
            role="button"
            tabIndex={0}
            onClick={() => setDailyRating(dailyRating >= 10 ? 1 : dailyRating + 1)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setDailyRating(dailyRating >= 10 ? 1 : dailyRating + 1); }}
            aria-label={`Cycle day rating. Current: ${dailyRating} out of 10`}
            className={`flex items-center gap-1.5 cursor-pointer transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-violet-400/50 rounded-lg px-1.5 py-0.5 ${
              isLight ? 'hover:text-black text-zinc-700' : 'hover:text-white text-zinc-300'
            }`}
            title="Click or press Enter to cycle rating"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Day Rating: <strong className={`font-display tabular-nums ${isLight ? 'text-zinc-900 font-bold' : 'text-white'}`}>{dailyRating}/10</strong></span>
          </div>
        </div>

        {/* Right Floating Mini-Player Pill */}
        <div 
          onClick={() => setIsAudioModalOpen(true)}
          className={`flex items-center gap-2.5 px-3.5 py-2 rounded-2xl cosmic-dock text-xs cursor-pointer group transition-all shrink-0 ml-auto xl:ml-0 ${
            isLight ? 'text-zinc-800' : 'text-white'
          }`}
          title="Open Focus Audio Sanctuary"
        >
          <div className={`w-7 h-7 rounded-xl flex items-center justify-center transition-all ${
            audioSource === 'youtube'
              ? isYouTubePlaying
                ? 'bg-red-600 text-white shadow-[0_0_12px_rgba(239,68,68,0.5)]'
                : isLight ? 'bg-red-50 text-red-600 border border-red-200' : 'bg-red-500/20 text-red-300'
              : isAudioPlaying 
                ? 'bg-violet-600 text-white shadow-[0_0_12px_rgba(168,85,247,0.5)]' 
                : isLight ? 'bg-zinc-100 text-zinc-700 group-hover:bg-zinc-200' : 'bg-white/[0.06] text-zinc-400 group-hover:text-white'
          }`}>
            {audioSource === 'youtube' ? <YouTubeIcon className="w-3.5 h-3.5" /> : <Headphones className="w-3.5 h-3.5" />}
          </div>
          <div className="text-left pr-1 max-w-[130px] sm:max-w-[170px]">
            <p className={`text-[11px] font-display font-medium leading-tight truncate ${
              isLight ? 'text-zinc-900 group-hover:text-violet-700' : 'text-white group-hover:text-violet-200'
            }`}>
              {audioSource === 'youtube' 
                ? (activeYouTubeItem ? activeYouTubeItem.title : 'YouTube Stream')
                : activePreset.title}
            </p>
            <div className="flex items-center gap-2 mt-0.5">
              <SoundVisualizer 
                isPlaying={audioSource === 'youtube' ? isYouTubePlaying : isAudioPlaying} 
                color={audioSource === 'youtube' ? '#ef4444' : isLight ? '#7c3aed' : activePreset.accentColor} 
                className="w-10 h-2.5" 
                barCount={6} 
              />
              <span className={`text-[9px] font-mono ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                {audioSource === 'youtube'
                  ? (isYouTubePlaying ? 'Streaming' : 'Ready')
                  : (isAudioPlaying ? 'Playing' : 'Ready')}
              </span>
            </div>
          </div>

          {/* If YouTube playlist, render prev/next buttons */}
          {audioSource === 'youtube' && activeYouTubeItem?.type === 'playlist' && (
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prevYouTubeTrack();
                }}
                className={`w-5 h-5 rounded flex items-center justify-center transition-all ${
                  isLight ? 'hover:bg-zinc-200 text-zinc-700' : 'hover:bg-white/20 text-zinc-300'
                }`}
                title="Previous Track"
              >
                <SkipBack className="w-3 h-3" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  nextYouTubeTrack();
                }}
                className={`w-5 h-5 rounded flex items-center justify-center transition-all ${
                  isLight ? 'hover:bg-zinc-200 text-zinc-700' : 'hover:bg-white/20 text-zinc-300'
                }`}
                title="Next Track"
              >
                <SkipForward className="w-3 h-3" />
              </button>
            </div>
          )}

          {audioSource === 'youtube' && isYouTubePlaying && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleYouTubeMute();
                try {
                  if (typeof (window as any).__forMeForceUnmute === 'function') {
                    (window as any).__forMeForceUnmute();
                  }
                } catch {}
              }}
              className={`w-5 h-5 rounded flex items-center justify-center transition-all cursor-pointer ${
                isYouTubeMuted 
                  ? 'bg-amber-500 text-black shadow-sm animate-pulse' 
                  : isLight ? 'text-zinc-600 hover:text-black' : 'text-zinc-400 hover:text-white'
              }`}
              title={isYouTubeMuted ? 'Unmute Sound' : 'Mute Sound'}
              aria-label={isYouTubeMuted ? 'Unmute Sound' : 'Mute Sound'}
            >
              {isYouTubeMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
            </button>
          )}

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
            className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all cursor-pointer ${
              (audioSource === 'youtube' ? isYouTubePlaying : isAudioPlaying)
                ? audioSource === 'youtube' ? 'bg-red-600 text-white shadow-sm' : 'bg-violet-600 text-white' 
                : isLight ? 'bg-zinc-200 hover:bg-zinc-300 text-zinc-800' : 'bg-white/[0.1] hover:bg-white text-zinc-300 hover:text-black'
            }`}
            title={(audioSource === 'youtube' ? isYouTubePlaying : isAudioPlaying) ? 'Pause audio' : 'Play audio'}
            aria-label={(audioSource === 'youtube' ? isYouTubePlaying : isAudioPlaying) ? 'Pause audio' : 'Play audio'}
          >
            {(audioSource === 'youtube' ? isYouTubePlaying : isAudioPlaying) ? (
              <Pause className="w-3 h-3 fill-current" />
            ) : (
              <Play className="w-3 h-3 ml-0.5 fill-current" />
            )}
          </button>
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
      <div className={`inline-flex items-baseline justify-center gap-2 sm:gap-4 md:gap-6 ${clockFontClass} select-none leading-none ${
        isLight 
          ? 'text-zinc-900 drop-shadow-[0_4px_24px_rgba(200,180,160,0.35)]' 
          : 'text-white drop-shadow-[0_12px_60px_rgba(0,0,0,0.95)]'
      }`}>
        <span className={`${clockSizeZen} font-light tabular-nums`}>
          {clockTime}
        </span>
        {clockAmPm && (
          <span className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light ${
            isLight ? 'text-zinc-600' : 'text-zinc-300'
          }`}>
            {clockAmPm}
          </span>
        )}
      </div>

      {/* Centered Date Pill & Motto */}
      {(wallpaperSettings.showDate !== false || wallpaperSettings.showGreeting !== false) && (
        <div className="mt-6 sm:mt-8 space-y-3 max-w-full px-4">
          {wallpaperSettings.showDate !== false && (
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-display tracking-wider shadow-lg ${
              isLight
                ? 'bg-white/88 border border-zinc-200/90 text-zinc-800'
                : 'cosmic-dock text-zinc-200'
            }`}>
              <Sparkles className={`w-3.5 h-3.5 ${isLight ? 'text-amber-500' : 'text-violet-300'}`} />
              <span>{currentDateStr}</span>
            </div>
          )}

          {wallpaperSettings.showGreeting !== false && (
            <div className="flex justify-center w-full px-2">
              <p className={`text-xs sm:text-sm font-sans tracking-wide px-4 sm:px-6 py-2 rounded-2xl sm:rounded-full backdrop-blur-xl max-w-xl text-center leading-relaxed shadow-lg ${
                isLight 
                  ? 'bg-white/92 text-zinc-900 border border-zinc-300/80 shadow-md' 
                  : 'bg-[#0a0618]/85 text-zinc-200 border border-white/[0.14] shadow-lg'
              }`}>
                Good evening, <span className={`font-semibold ${isLight ? 'text-zinc-950' : 'text-white'}`}>{profile.name}</span>. •{' '}
                <span className={`italic ${isLight ? 'text-zinc-700 font-medium' : 'text-zinc-300'}`}>&ldquo;Remember, you are here for you.&rdquo;</span>
              </p>
            </div>
          )}
        </div>
      )}

      {/* Quick Customize & Bottom Ambient Hint Pill */}
      <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-3 px-4 max-w-full">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsStudioOpen(true);
          }}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-display tracking-wider border shadow-lg cursor-pointer transition-all ${
            isLight
              ? 'bg-white/90 text-zinc-800 hover:text-black border-zinc-300/80 hover:bg-white'
              : 'cosmic-dock text-zinc-200 hover:text-white border-white/[0.12] hover:border-violet-400/50'
          }`}
        >
          <Sliders className={`w-3.5 h-3.5 ${isLight ? 'text-zinc-700' : 'text-violet-300'}`} />
          <span>Customize Wallpaper</span>
        </button>

        <div className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs transition-all border shadow-xl group ${
          isLight
            ? 'bg-white/90 text-zinc-800 border-zinc-300/80'
            : 'cosmic-dock text-zinc-300 hover:text-white border-white/[0.12] hover:border-violet-400/40'
        }`}>
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
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
          className={`fixed left-0 top-1/2 -translate-y-1/2 -rotate-90 origin-left px-3.5 py-1.5 rounded-t-xl backdrop-blur-xl border text-[10px] font-mono tracking-widest uppercase transition-all z-30 flex items-center gap-1.5 shadow-lg ${
            isLight
              ? 'bg-[#ffffff]/90 hover:bg-white border-zinc-300 text-zinc-800'
              : 'bg-[#14162e]/90 hover:bg-[#1a1d3d] border-white/[0.1] text-zinc-300 hover:text-white'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span>ROUTINE T.T 📋</span>
        </button>
      )}

      {/* Routine Drawer */}
      {isRoutineOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsRoutineOpen(false)} />
          <aside className={`relative z-10 w-80 sm:w-96 max-w-[90vw] h-full backdrop-blur-3xl border-r shadow-2xl p-6 flex flex-col justify-between ${
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
                    Daily Routine (T.T)
                  </h3>
                </div>
                <button onClick={() => setIsRoutineOpen(false)} className={`transition-colors ${
                  isLight ? 'text-zinc-500 hover:text-black' : 'text-zinc-400 hover:text-white'
                }`}>
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div className={`p-3.5 rounded-2xl border ${
                  isLight ? 'bg-white/80 border-zinc-200' : 'bg-white/[0.02] border-white/[0.06]'
                }`}>
                  <div className="flex items-center justify-between pb-1.5">
                    <span className="font-semibold text-amber-500 flex items-center gap-1.5">
                      <Sunrise className="w-3.5 h-3.5" /> Morning Protocol
                    </span>
                    <span className={`text-[10px] font-mono ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>06:00 – 09:00</span>
                  </div>
                  <p className={`text-[11px] leading-relaxed ${isLight ? 'text-zinc-700' : 'text-zinc-300'}`}>
                    Hydration, natural sunlight, 30-min movement, deep work session.
                  </p>
                </div>

                <div className={`p-3.5 rounded-2xl border ${
                  isLight ? 'bg-white/80 border-zinc-200' : 'bg-white/[0.02] border-white/[0.06]'
                }`}>
                  <div className="flex items-center justify-between pb-1.5">
                    <span className="font-semibold text-sky-600 flex items-center gap-1.5">
                      <Sun className="w-3.5 h-3.5" /> Afternoon Focus
                    </span>
                    <span className={`text-[10px] font-mono ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>09:00 – 17:00</span>
                  </div>
                  <p className={`text-[11px] leading-relaxed ${isLight ? 'text-zinc-700' : 'text-zinc-300'}`}>
                    Coursework problem sets, core academic goals, review notes.
                  </p>
                </div>

                <div className={`p-3.5 rounded-2xl border ${
                  isLight ? 'bg-white/80 border-zinc-200' : 'bg-white/[0.02] border-white/[0.06]'
                }`}>
                  <div className="flex items-center justify-between pb-1.5">
                    <span className="font-semibold text-violet-700 flex items-center gap-1.5">
                      <Moon className="w-3.5 h-3.5" /> Evening Wind-Down
                    </span>
                    <span className={`text-[10px] font-mono ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>17:00 – 22:30</span>
                  </div>
                  <p className={`text-[11px] leading-relaxed ${isLight ? 'text-zinc-700' : 'text-zinc-300'}`}>
                    Nightly reflection, journal entry, book reading, digital sunset.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsRoutineOpen(false)}
              className={`w-full py-2.5 rounded-xl text-xs font-medium transition-colors ${
                isLight
                  ? 'bg-zinc-900 hover:bg-zinc-800 text-white'
                  : 'bg-white/[0.06] hover:bg-white/[0.12] text-white'
              }`}
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

      {/* Focus Audio Sanctuary Modal */}
      <FocusAudioModal
        isOpen={isAudioModalOpen}
        onClose={() => setIsAudioModalOpen(false)}
      />
    </div>
  );
};
