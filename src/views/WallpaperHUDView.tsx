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
  CalendarClock,
  Sliders,
  X,
  Sunrise,
  Sun,
  User,
  Flame,
  Star,
  Coffee,
  Timer,
  Bell,
  SkipForward,
  BarChart2,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { useData } from '../context/DataContext';
import { WallpaperStudioModal } from '../components/common/WallpaperStudioModal';
import { FocusAudioModal } from '../components/audio/FocusAudioModal';
import { ProfileModal } from '../components/common/ProfileModal';
import { StudyDashboardModal } from '../components/common/StudyDashboardModal';
import { SoundVisualizer } from '../components/audio/SoundVisualizer';
import { SOUNDSCAPE_PRESETS } from '../services/soundEngine';
import { YouTubeIcon } from '../components/audio/YouTubeIcon';
import { RoutineStudioModal } from '../components/routine/RoutineStudioModal';
import { HUDNotificationBanner } from '../components/common/HUDNotificationBanner';
import { getWallpaperPaletteConfig } from '../utils/paletteTheme';

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
    activeRoutineBlock,
    activeRoutineMinutesLeft,
    nextRoutineBlock,
    nextRoutineMinutesUntil,
    studySeconds, 
    isStudyActive, 
    studySubject,
    setStudySubject, 
    toggleStudyTimer, 
    resetStudyTimer,
    studySessions,
    logManualStudyTime,
    deleteStudySession,
    pomodoroPhase,
    pomodoroSecondsLeft,
    pomodoroTotalSeconds,
    pomodoroSettings,
    setPomodoroSettings,
    startPomodoro,
    togglePomodoro,
    resetPomodoro,
    skipPomodoroPhase,
    togglePomodoroDisplayMode,
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
    wallpaperTheme,
    audioSource,
    isAudioPlaying,
    activeSoundscapeId,
    playSoundscape,
    stopSoundscape,
    isYouTubePlaying,
    activeYouTubeItem,
    toggleYouTubePlay,
    appTheme,
    toggleAppTheme,
    isEcoSleeping,
    setIsEcoSleeping,
    studySubjects,
    notificationSettings,
    updateNotificationSettings,
    requestNotificationPermission,
    triggerTestNotification,
  } = useData();

  const isLight = appTheme === 'light';
  const paletteTheme = getWallpaperPaletteConfig(wallpaperSettings?.palette, wallpaperTheme);

  // Modals
  const [isStudioOpen, setIsStudioOpen] = useState(false);
  const [isAudioModalOpen, setIsAudioModalOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isRoutineOpen, setIsRoutineOpen] = useState(false);
  const [isStudyDashboardOpen, setIsStudyDashboardOpen] = useState(false);

  // Active floating dock panel (tasks | habits | timer | wellness | none)
  const [activeDockPanel, setActiveDockPanel] = useState<ActiveDockPanel>('none');
  const [timerSubTab, setTimerSubTab] = useState<'pomodoro' | 'stopwatch'>('pomodoro');

  // Clock state
  const [hoursStr, setHoursStr] = useState('12');
  const [minutesStr, setMinutesStr] = useState('00');
  const [secondsStr, setSecondsStr] = useState('00');
  const [secondsRatio, setSecondsRatio] = useState(0);
  const [clockAmPm, setClockAmPm] = useState('PM');
  const [currentDateStr, setCurrentDateStr] = useState('');
  const [dayOfYear, setDayOfYear] = useState(322);
  const [solarPct, setSolarPct] = useState(80);
  const clockTime = `${hoursStr}:${minutesStr}:${secondsStr}`;
  const [newTaskInput, setNewTaskInput] = useState('');
  const [studyTopic, setStudyTopic] = useState(profile.defaultFocusTopic || 'Engineering');
  const [studyMode, setStudyMode] = useState(profile.defaultFocusMode || 'Deep Work');

  // Manual Past Focus Logging
  const [manualMinutesInput, setManualMinutesInput] = useState('60');
  const [manualLogNotice, setManualLogNotice] = useState('');

  const handleQuickAddFocus = (mins: number) => {
    logManualStudyTime(mins, studyTopic || studySubject || 'Engineering', studyMode || 'Manual Entry');
    const label = mins >= 60 ? `${(mins / 60).toFixed(1)}h` : `${mins}m`;
    setManualLogNotice(`+${label} recorded to ${studyTopic || studySubject}!`);
    setTimeout(() => setManualLogNotice(''), 3000);
  };

  const handleCustomAddFocus = (e: React.FormEvent) => {
    e.preventDefault();
    const mins = parseFloat(manualMinutesInput);
    if (!isNaN(mins) && mins > 0) {
      handleQuickAddFocus(mins);
      setManualMinutesInput('');
    }
  };


  // Custom Pomodoro Duration
  const [showCustomPomo, setShowCustomPomo] = useState(false);
  const [customPomoFocusInput, setCustomPomoFocusInput] = useState('30');
  const [customPomoBreakInput, setCustomPomoBreakInput] = useState('5');

  // Pomodoro countdown calculations
  const isPomodoroRunning = pomodoroPhase === 'focus' || pomodoroPhase === 'break' || pomodoroPhase === 'paused';
  const pomoMins = Math.floor(pomodoroSecondsLeft / 60);
  const pomoSecs = pomodoroSecondsLeft % 60;
  const pomoMinutesStr = pomoMins.toString().padStart(2, '0');
  const pomoSecondsStr = pomoSecs.toString().padStart(2, '0');
  const pomoRatio = pomodoroTotalSeconds > 0 ? (1 - pomodoroSecondsLeft / pomodoroTotalSeconds) : 0;
  const orbitalRotation = isPomodoroRunning ? pomoRatio * 360 : secondsRatio * 360;

  // Unified Dial: support both display modes with 1-tap toggle
  const showCountdownOnDigits = isPomodoroRunning && pomodoroSettings.displayMode === 'numbers';
  const displayHours = showCountdownOnDigits ? pomoMinutesStr : hoursStr;
  const displayMinutes = showCountdownOnDigits ? pomoSecondsStr : minutesStr;

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

      setHoursStr(formattedH);
      setMinutesStr(formattedM);
      setSecondsStr(formattedS);
      setSecondsRatio(s / 60);
      setClockAmPm(is24h ? '' : ampm);

      const startOfYear = new Date(now.getFullYear(), 0, 0);
      const diff = now.getTime() - startOfYear.getTime();
      const oneDay = 1000 * 60 * 60 * 24;
      const dayNum = Math.floor(diff / oneDay);
      setDayOfYear(dayNum);

      const solarProgress = Math.round(((h * 60 + m) / 1440) * 100);
      setSolarPct(solarProgress);

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
    wallpaperSettings.clockFontStyle === 'serif' ? 'font-serif font-bold tracking-tight' :
    wallpaperSettings.clockFontStyle === 'mono' ? 'font-mono font-bold tracking-tight' :
    wallpaperSettings.clockFontStyle === 'minimal' ? 'font-sans font-light tracking-[0.06em]' :
    'font-display font-extrabold tracking-tight';

  const clockSize = 
    wallpaperSettings.clockSize === 'compact' ? 'text-6xl sm:text-7xl md:text-8xl lg:text-[110px]' :
    wallpaperSettings.clockSize === 'heroic' ? 'text-7xl sm:text-9xl md:text-[11rem] lg:text-[160px]' :
    'text-7xl sm:text-8xl md:text-9xl lg:text-[136px]';

  const clockHaloClass = 
    wallpaperSettings.clockHalo === 'none' ? 'opacity-0' :
    wallpaperSettings.clockHalo === 'subtle' ? 'bg-[radial-gradient(circle,rgba(139,92,246,0.14)_0%,rgba(139,92,246,0.03)_50%,transparent_70%)]' :
    'bg-[radial-gradient(circle,rgba(139,92,246,0.22)_0%,rgba(139,92,246,0.06)_50%,transparent_75%)]';

  const clockColorClass = 
    wallpaperSettings.clockColor === 'white' ? (isLight ? 'text-zinc-950 [text-shadow:0_2px_12px_rgba(0,0,0,0.1)]' : 'text-white [text-shadow:0_8px_32px_rgba(0,0,0,0.85)]') :
    wallpaperSettings.clockColor === 'gold' ? 'text-amber-300 [text-shadow:0_4px_24px_rgba(245,158,11,0.5)]' :
    wallpaperSettings.clockColor === 'cyan' ? 'text-cyan-300 [text-shadow:0_4px_24px_rgba(6,182,212,0.5)]' :
    wallpaperSettings.clockColor === 'rose' ? 'text-rose-300 [text-shadow:0_4px_24px_rgba(244,63,94,0.5)]' :
    isLight ? 'text-zinc-900 [text-shadow:0_2px_12px_rgba(200,180,160,0.25)]' : 'text-white [text-shadow:0_8px_32px_rgba(0,0,0,0.85)]';

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
      {/* Living In-App HUD Notification Banner */}
      <HUDNotificationBanner
        onActionClick={(target) => {
          if (target === 'tasks') setActiveDockPanel('tasks');
          if (target === 'routine') setIsRoutineOpen(true);
        }}
      />

      {/* Accessible landmark heading */}
      <h1 className="sr-only">FOR ME — Living Wallpaper & Focus Sanctuary</h1>

      {/* ======================================================== */}
      {/* 1. MINIMAL FLOATING TOP UTILITY BAR                      */}
      {/* ======================================================== */}
      <header className={`relative flex items-center justify-between w-full min-h-12 shrink-0 z-20 gap-3 transition-opacity duration-700 ${
        (isHUDHidden || isEcoSleeping) ? 'opacity-0 pointer-events-none' : 'opacity-100'
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

        {/* Center Pill: Current Date & Active Protocol — 100% Optically & Mathematically Centered */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center pointer-events-none">
          <div className={`pointer-events-auto flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-2xl border text-[11px] font-sans font-medium shadow-sm transition-all ${
            isLight
              ? 'bg-white/85 border-zinc-200/90 text-zinc-700'
              : 'bg-[#090b16]/75 border-white/[0.08] text-zinc-300'
          }`}>
            <Sparkles className="w-3 h-3" style={{ color: paletteTheme.accent }} />
            <span>{currentDateStr}</span>
            {activeRoutineBlock ? (
              <>
                <span className="opacity-25">•</span>
                <button
                  type="button"
                  onClick={() => setIsRoutineOpen(true)}
                  className="hover:underline flex items-center gap-1 font-mono text-[10px] cursor-pointer"
                  style={{ color: paletteTheme.accent }}
                  title="Open Daily Schedule & Routine Studio"
                >
                  <Sunrise className="w-3 h-3" style={{ color: paletteTheme.accent }} />
                  <span>{activeRoutineBlock.title}</span>
                  {activeRoutineMinutesLeft > 0 && (
                    <span className="opacity-75 font-normal">({activeRoutineMinutesLeft}m left)</span>
                  )}
                </button>
              </>
            ) : nextRoutineBlock ? (
              <>
                <span className="opacity-25">•</span>
                <button
                  type="button"
                  onClick={() => setIsRoutineOpen(true)}
                  className="hover:underline flex items-center gap-1 font-mono text-[10px] text-zinc-400 hover:text-zinc-200 cursor-pointer"
                  title="Open Daily Schedule & Routine Studio"
                >
                  <span>Next: {nextRoutineBlock.title}</span>
                  {nextRoutineMinutesUntil > 0 && (
                    <span className="opacity-75 font-normal">({Math.round(nextRoutineMinutesUntil / 60)}h {nextRoutineMinutesUntil % 60}m)</span>
                  )}
                </button>
              </>
            ) : null}
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

          {/* 3. Study & Focus Analytics Dashboard */}
          <button
            type="button"
            onClick={() => setIsStudyDashboardOpen(true)}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              isLight
                ? 'hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950'
                : 'hover:bg-white/[0.08] text-zinc-400 hover:text-white'
            }`}
            title="Study & Focus Analytics Dashboard (7-Day & 30-Day Trajectories)"
            aria-label="Study & Focus Analytics Dashboard"
          >
            <BarChart2 className="w-3.5 h-3.5 text-violet-400" />
          </button>

          {/* 4. Focus Audio Sanctuary Modal */}
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
      {/* 2. GRAND ASTROLABE CHRONOMETER & LIVING SANCTUARY DIAL   */}
      {/* ======================================================== */}
      <main aria-label={`Current time ${clockTime}`} className={`${clockPositionClass} text-center flex flex-col items-center justify-center relative z-20 py-4 select-none transition-all duration-300`}>
        {/* Luminous Atmospheric Radial Glow */}
        <div className={`absolute w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[780px] lg:h-[780px] rounded-full ${clockHaloClass} pointer-events-none -z-10`} />

        {/* Masterpiece Living Astrolabe Chronometer */}
        <div className="relative flex flex-col items-center group">

          {/* 1. Astrolabe Celestial Orbital Dial (Background Instrument Rings) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
            {/* Outer Astrolabe Calibrated Track with 4 Cardinal Diamonds */}
            <div className={`relative w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] md:w-[640px] md:h-[640px] rounded-full border border-dashed transition-all ${
              isLight ? 'border-zinc-300/70' : 'border-white/[0.08]'
            }`}>
              {/* Cardinal Diamond Telemetry Pips */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-violet-400 shadow-[0_0_12px_rgba(168,85,247,0.9)]" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-white/40" />
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-white/40" />
              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-white/40" />

              {/* Sweeping Laser Orbit Comet (Rotates with seconds or Pomodoro countdown) */}
              <div 
                className="absolute inset-0 transition-transform duration-1000 ease-linear pointer-events-none"
                style={{ transform: `rotate(${orbitalRotation}deg)` }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <div className={`w-3.5 h-3.5 rounded-full animate-ping opacity-75 ${
                    isPomodoroRunning
                      ? pomodoroPhase === 'break' ? 'bg-cyan-400' : 'bg-violet-400'
                      : wallpaperSettings.clockColor === 'gold' ? 'bg-amber-400' :
                        wallpaperSettings.clockColor === 'cyan' ? 'bg-cyan-400' :
                        wallpaperSettings.clockColor === 'rose' ? 'bg-rose-400' :
                        'bg-violet-400'
                  }`} />
                  <div className={`absolute w-3 h-3 rounded-full shadow-lg ${
                    isPomodoroRunning
                      ? pomodoroPhase === 'break' ? 'bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,1)]' : 'bg-violet-300 shadow-[0_0_20px_rgba(168,85,247,1)]'
                      : wallpaperSettings.clockColor === 'gold' ? 'bg-amber-300 shadow-[0_0_20px_rgba(251,191,36,1)]' :
                        wallpaperSettings.clockColor === 'cyan' ? 'bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,1)]' :
                        wallpaperSettings.clockColor === 'rose' ? 'bg-rose-300 shadow-[0_0_20px_rgba(244,63,94,1)]' :
                        'bg-violet-300 shadow-[0_0_20px_rgba(168,85,247,1)]'
                  }`} />
                </div>
              </div>

              {/* Concentric Inner Ring */}
              <div className={`absolute inset-8 sm:inset-12 md:inset-16 rounded-full border transition-all ${
                isLight ? 'border-zinc-200/50' : 'border-white/[0.04]'
              }`} />
            </div>
          </div>

          {/* 2. Upper Astronomical Telemetry Eyebrow (Focus Countdown or Ephemeris) */}
          {isPomodoroRunning ? (
            <button
              type="button"
              onClick={togglePomodoroDisplayMode}
              className={`flex items-center gap-2 sm:gap-2.5 mb-2 sm:mb-3 px-4 py-1.5 rounded-full border backdrop-blur-2xl text-[10px] sm:text-[11px] font-mono tracking-widest uppercase transition-all shadow-md cursor-pointer group ${
                pomodoroPhase === 'break'
                  ? isLight ? 'bg-cyan-50/90 border-cyan-200 text-cyan-900 shadow-sm' : 'bg-cyan-950/60 border-cyan-500/40 text-cyan-300 shadow-[0_4px_24px_rgba(6,182,212,0.3)]'
                  : isLight ? 'bg-violet-50/90 border-violet-200 text-violet-900 shadow-sm' : 'bg-[#090b16]/85 border-violet-500/40 text-violet-300 shadow-[0_4px_24px_rgba(139,92,246,0.35)]'
              }`}
              title="Click to toggle countdown digits vs wall clock digits"
            >
              <span className="flex items-center gap-1.5 font-bold">
                <span className="relative flex h-2 w-2">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${pomodoroPhase === 'break' ? 'bg-cyan-400' : 'bg-violet-400'}`} />
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${pomodoroPhase === 'break' ? 'bg-cyan-500' : 'bg-violet-500'}`} />
                </span>
                {pomodoroPhase === 'break' ? 'RECOVERY BREAK' : 'FOCUS SPRINT'}
              </span>
              <span className="opacity-25">•</span>
              <span className="tabular-nums font-bold">
                {pomoMinutesStr}:{pomoSecondsStr} REMAINING
              </span>
              <span className="opacity-25 hidden sm:inline">•</span>
              <span className="hidden sm:inline opacity-80 uppercase">{studySubject}</span>
              <span className="opacity-25 hidden md:inline">•</span>
              <span className="hidden md:inline text-[9px] opacity-60 group-hover:text-amber-400 transition-colors">
                {showCountdownOnDigits ? 'SHOW CLOCK' : 'SHOW COUNTDOWN'}
              </span>
            </button>
          ) : (
            <div className={`flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3 px-4 py-1 rounded-full border backdrop-blur-2xl text-[10px] sm:text-[11px] font-mono tracking-widest uppercase transition-all shadow-md ${
              isLight
                ? 'bg-white/80 border-zinc-200 text-zinc-700'
                : 'bg-[#090b16]/75 border-white/[0.12] text-zinc-300 shadow-[0_4px_24px_rgba(0,0,0,0.5)]'
            }`}>
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                EPHEMERIS
              </span>
              <span className="opacity-25">•</span>
              <span className="tabular-nums">DAY {dayOfYear}</span>
              <span className="opacity-25">•</span>
              <span className="tabular-nums text-violet-400 font-semibold">{solarPct}% SOLAR</span>
              <span className="opacity-25 hidden sm:inline">•</span>
              <span className="hidden sm:inline opacity-70">AZAN ZENITH</span>
            </div>
          )}

          {/* 3. Hero Monumental Numerals & Complication Pod */}
          <div 
            onClick={isPomodoroRunning ? togglePomodoroDisplayMode : undefined}
            className={`inline-flex items-center justify-center max-w-[95vw] px-2 select-none leading-none flex-nowrap transition-all ${
              isPomodoroRunning ? 'cursor-pointer' : ''
            } ${clockFontClass} ${clockColorClass}`}
            title={isPomodoroRunning ? "Click to toggle countdown / real time digits" : undefined}
          >
            
            {/* Hours or Countdown Minutes */}
            <span className={`${clockSize} tracking-tight tabular-nums transition-all ${
              isLight 
                ? 'text-zinc-950 font-bold' 
                : 'bg-gradient-to-b from-white via-white/95 to-zinc-400/90 bg-clip-text text-transparent font-bold'
            }`}>
              {displayHours}
            </span>

            {/* Celestial Diamond Flare Divider */}
            <span className={`inline-flex items-center justify-center px-1.5 sm:px-3 text-3xl sm:text-5xl md:text-6xl lg:text-7xl select-none transition-colors ${
              isPomodoroRunning 
                ? pomodoroPhase === 'break' ? 'text-cyan-400' : 'text-violet-400'
                : wallpaperSettings.clockColor === 'gold' ? 'text-amber-400' :
                  wallpaperSettings.clockColor === 'cyan' ? 'text-cyan-400' :
                  wallpaperSettings.clockColor === 'rose' ? 'text-rose-400' :
                  isLight ? 'text-zinc-600' : 'text-violet-400'
            }`}>
              {wallpaperSettings.clockDivider === 'dot' ? '·' : wallpaperSettings.clockDivider === 'space' ? ' ' : ':'}
            </span>

            {/* Minutes or Countdown Seconds */}
            <span className={`${clockSize} tracking-tight tabular-nums transition-all ${
              isLight 
                ? 'text-zinc-950 font-bold' 
                : 'bg-gradient-to-b from-white via-white/95 to-zinc-400/90 bg-clip-text text-transparent font-bold'
            }`}>
              {displayMinutes}
            </span>

            {/* Luxury Chronometer Seconds & Focus Complication Pod */}
            <div className="flex flex-col items-center justify-center ml-3 sm:ml-5 md:ml-7 gap-2 self-center">
              {isPomodoroRunning ? (
                /* Focus Mode Complication Pod */
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePomodoro();
                  }}
                  className={`relative flex flex-col items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl border backdrop-blur-3xl transition-all shadow-2xl cursor-pointer group/pod ${
                    isLight 
                      ? 'bg-white/95 border-violet-200 text-zinc-950 shadow-md hover:border-violet-400' 
                      : 'bg-[#090b16]/95 border-violet-500/30 text-white shadow-[0_12px_40px_rgba(0,0,0,0.8)] hover:border-violet-400/60'
                  }`}
                  title={pomodoroPhase === 'paused' ? 'Resume focus' : 'Pause focus (Tap to toggle)'}
                >
                  {/* Radial Sweep Chrono Track */}
                  <svg className="absolute inset-1.5 w-[calc(100%-12px)] h-[calc(100%-12px)] -rotate-90 pointer-events-none" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="15" stroke="currentColor" strokeWidth="2.5" className="opacity-15" fill="none" />
                    <circle
                      cx="18"
                      cy="18"
                      r="15"
                      stroke="currentColor"
                      strokeWidth="2.8"
                      className={`transition-all duration-300 ${
                        pomodoroPhase === 'break'
                          ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]'
                          : 'text-violet-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.9)]'
                      }`}
                      strokeDasharray="94.25"
                      strokeDashoffset={94.25 * (1 - pomoRatio)}
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                  <span className="font-mono text-xs sm:text-sm md:text-base font-extrabold tabular-nums tracking-wider leading-none z-10 drop-shadow-sm">
                    {showCountdownOnDigits ? `${hoursStr}:${minutesStr}` : `${pomoMinutesStr}:${pomoSecondsStr}`}
                  </span>
                  <span className={`text-[7px] sm:text-[8px] font-mono tracking-widest uppercase mt-1 z-10 font-bold ${
                    pomodoroPhase === 'paused' ? 'text-amber-400' : pomodoroPhase === 'break' ? 'text-cyan-400' : 'text-violet-400'
                  }`}>
                    {pomodoroPhase === 'paused' ? 'PAUSED' : showCountdownOnDigits ? 'CLOCK' : pomodoroPhase === 'break' ? 'BREAK' : 'FOCUS'}
                  </span>
                </button>
              ) : (
                /* Standard Chronometer Seconds Pod */
                wallpaperSettings.showSeconds && (
                  <div className={`relative flex flex-col items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl border backdrop-blur-3xl transition-all shadow-2xl ${
                    isLight 
                      ? 'bg-white/95 border-zinc-300 text-zinc-950 shadow-md' 
                      : 'bg-[#090b16]/90 border-white/20 text-white shadow-[0_12px_40px_rgba(0,0,0,0.8)]'
                  }`}>
                    {/* Radial Sweep Chrono Track */}
                    <svg className="absolute inset-1.5 w-[calc(100%-12px)] h-[calc(100%-12px)] -rotate-90 pointer-events-none" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="15" stroke="currentColor" strokeWidth="2.5" className="opacity-15" fill="none" />
                      <circle
                        cx="18"
                        cy="18"
                        r="15"
                        stroke="currentColor"
                        strokeWidth="2.8"
                        className={`transition-all duration-300 ${
                          wallpaperSettings.clockColor === 'gold' ? 'text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.9)]' :
                          wallpaperSettings.clockColor === 'cyan' ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]' :
                          wallpaperSettings.clockColor === 'rose' ? 'text-rose-400 drop-shadow-[0_0_8px_rgba(244,63,94,0.9)]' :
                          'text-violet-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.9)]'
                        }`}
                        strokeDasharray="94.25"
                        strokeDashoffset={94.25 * (1 - secondsRatio)}
                        strokeLinecap="round"
                        fill="none"
                      />
                    </svg>
                    <span className="font-mono text-base sm:text-xl md:text-2xl font-extrabold tabular-nums tracking-wider leading-none z-10 drop-shadow-sm">
                      {secondsStr}
                    </span>
                    <span className="text-[7px] sm:text-[8px] font-mono tracking-widest uppercase opacity-60 mt-1 z-10 font-bold">
                      SEC
                    </span>
                  </div>
                )
              )}

              {/* AM / PM or Quick Pomodoro Action Badge */}
              {isPomodoroRunning ? (
                <div className="flex items-center gap-1 z-10">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      skipPomodoroPhase();
                    }}
                    className={`text-[9px] font-mono px-2 py-0.5 rounded-lg border backdrop-blur-xl transition-all cursor-pointer ${
                      isLight ? 'bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700' : 'bg-white/10 hover:bg-white/20 border-white/15 text-zinc-300'
                    }`}
                    title="Skip to next phase"
                  >
                    SKIP
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      resetPomodoro();
                    }}
                    className={`text-[9px] font-mono px-2 py-0.5 rounded-lg border backdrop-blur-xl transition-all cursor-pointer ${
                      isLight ? 'bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700' : 'bg-white/10 hover:bg-white/20 border-white/15 text-zinc-300'
                    }`}
                    title="Reset Pomodoro"
                  >
                    RESET
                  </button>
                </div>
              ) : clockAmPm ? (
                <span className={`text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase px-3 py-1 rounded-xl border backdrop-blur-2xl transition-all ${
                  isLight
                    ? 'bg-zinc-100 border-zinc-200 text-zinc-800 shadow-sm'
                    : 'bg-white/[0.08] border-white/15 text-zinc-200 shadow-md'
                }`}>
                  {clockAmPm}
                </span>
              ) : null}
            </div>
          </div>
        </div>

        {/* 4. Personalized Sanctuary Motto Glass Capsule */}
        {wallpaperSettings.showGreeting !== false && (
          <div className="mt-7 sm:mt-9 flex justify-center w-full px-3">
            <button
              type="button"
              onClick={() => setIsProfileOpen(true)}
              className={`group relative text-xs sm:text-sm font-sans tracking-wide px-6 sm:px-8 py-3 rounded-2xl sm:rounded-full backdrop-blur-3xl max-w-xl text-center leading-relaxed shadow-xl cursor-pointer transition-all hover:scale-[1.01] border ${
                isLight 
                  ? 'bg-white/95 text-zinc-900 border-zinc-300/90 shadow-md hover:bg-white hover:border-zinc-400' 
                  : 'bg-[#0a0618]/90 text-zinc-200 border-white/[0.18] shadow-[0_16px_50px_rgba(0,0,0,0.7)] hover:border-violet-400/50 hover:shadow-[0_16px_60px_rgba(168,85,247,0.25)]'
              }`}
              title="Click to personalize name & daily mantra"
            >
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <span className={`font-bold tracking-normal ${isLight ? 'text-zinc-950' : 'text-white'}`}>
                  {getDynamicGreeting()}, {profile.name}
                </span>
                <span className="opacity-30">•</span>
                <span className={`italic font-medium ${isLight ? 'text-zinc-800' : 'text-zinc-200'}`}>
                  &ldquo;{profile.motto || 'Discipline equals true freedom.'}&rdquo;
                </span>
              </div>
            </button>
          </div>
        )}

        {/* Eco Sleep / Zen Mode Restore Hint */}
        {isEcoSleeping ? (
          <button
            type="button"
            onClick={() => setIsEcoSleeping(false)}
            className="mt-8 flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs transition-all border shadow-2xl cursor-pointer bg-black/60 text-white/80 border-white/15 hover:bg-black/80 hover:text-white backdrop-blur-xl"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-sans tracking-widest text-[11px] uppercase">Eco Sleep Active • Move cursor or tap to wake</span>
          </button>
        ) : isHUDHidden ? (
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
        ) : null}
      </main>

      {/* ======================================================== */}
      {/* 3. EXPANDABLE FLOATING POPOVER PANELS (ON-DEMAND)        */}
      {/* ======================================================== */}
      {activeDockPanel !== 'none' && !isHUDHidden && !isEcoSleeping && (
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
                  <h2 className="text-xs font-display uppercase tracking-[0.18em] font-semibold">
                    Tasks for the Day
                  </h2>
                  <div className="flex items-center gap-1 p-0.5 rounded-lg border bg-black/10 border-white/10">
                    <button 
                      type="button" 
                      onClick={() => setActiveDockPanel('tasks')}
                      className="px-2 py-0.5 rounded text-[10px] font-semibold bg-violet-600 text-white"
                    >
                      Tasks ({tasksDoneCount}/{tasks.length})
                    </button>
                    <button 
                      type="button" 
                      onClick={() => setActiveDockPanel('habits')}
                      className="px-2 py-0.5 rounded text-[10px] font-medium text-zinc-400 hover:text-white"
                    >
                      Habits ({habitsKeptCount}/{habits.length})
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
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

              {/* Circadian Flow Reminders Bar */}
              <div
                className="mt-1 pt-2.5 border-t rounded-xl p-2.5 transition-all text-xs"
                style={{
                  borderColor: paletteTheme.borderRgba,
                  backgroundColor: isLight ? 'rgba(0,0,0,0.02)' : 'rgba(255,255,255,0.02)',
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-5 h-5 rounded-md flex items-center justify-center transition-colors"
                      style={{
                        backgroundColor: notificationSettings.enabled ? paletteTheme.bgSoftRgba : 'rgba(255,255,255,0.05)',
                        color: notificationSettings.enabled ? paletteTheme.accentLight : '#71717a',
                      }}
                    >
                      <Bell className="w-3 h-3" />
                    </div>
                    <div>
                      <span className="font-medium text-[11px] tracking-wide block">
                        Routine & Task Reminders
                      </span>
                      <span className="text-[10px] text-zinc-400 block -mt-0.5">
                        {notificationSettings.enabled
                          ? 'Notifying on block transitions & pending tasks'
                          : 'Reminders paused'}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {/* Toggle Reminders On/Off */}
                    <button
                      type="button"
                      onClick={() => updateNotificationSettings({ enabled: !notificationSettings.enabled })}
                      className={`px-2 py-0.5 rounded-md text-[10px] font-semibold border transition-all cursor-pointer ${
                        notificationSettings.enabled
                          ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400'
                          : 'bg-zinc-800 border-zinc-700 text-zinc-400'
                      }`}
                      title={notificationSettings.enabled ? 'Click to disable reminders' : 'Click to enable reminders'}
                    >
                      {notificationSettings.enabled ? 'Active' : 'Off'}
                    </button>

                    {/* Sound Chime Toggle */}
                    <button
                      type="button"
                      onClick={() => updateNotificationSettings({ soundEnabled: !notificationSettings.soundEnabled })}
                      className={`p-1 rounded-md border transition-all cursor-pointer ${
                        notificationSettings.soundEnabled
                          ? 'bg-violet-500/15 border-violet-500/30 text-violet-300'
                          : 'bg-zinc-800 border-zinc-700 text-zinc-500'
                      }`}
                      title={notificationSettings.soundEnabled ? 'Chime sound enabled' : 'Chime muted'}
                      aria-label="Toggle reminder chime"
                    >
                      {notificationSettings.soundEnabled ? <Volume2 className="w-3 h-3" /> : <VolumeX className="w-3 h-3" />}
                    </button>

                    {/* Test Reminder Trigger */}
                    <button
                      type="button"
                      onClick={triggerTestNotification}
                      className="px-2 py-0.5 rounded-md text-[10px] font-medium border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white transition-all cursor-pointer"
                      title="Send a sample reminder to test the chime and banner"
                    >
                      Test
                    </button>
                  </div>
                </div>

                {/* Desktop Notification Permission Banner if not yet allowed */}
                {typeof window !== 'undefined' && 'Notification' in window && Notification.permission !== 'granted' && (
                  <div className="mt-2 pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px]">
                    <span className="text-zinc-400">Desktop alerts:</span>
                    <button
                      type="button"
                      onClick={requestNotificationPermission}
                      className="text-violet-400 hover:text-violet-300 underline font-medium cursor-pointer"
                    >
                      Enable Desktop Alerts
                    </button>
                  </div>
                )}
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
                  <h2 className="text-xs font-display uppercase tracking-[0.18em] font-semibold">
                    Daily Rhythm Pulse
                  </h2>
                  <div className="flex items-center gap-1 p-0.5 rounded-lg border bg-black/10 border-white/10">
                    <button 
                      type="button" 
                      onClick={() => setActiveDockPanel('tasks')}
                      className="px-2 py-0.5 rounded text-[10px] font-medium text-zinc-400 hover:text-white"
                    >
                      Tasks ({tasksDoneCount}/{tasks.length})
                    </button>
                    <button 
                      type="button" 
                      onClick={() => setActiveDockPanel('habits')}
                      className="px-2 py-0.5 rounded text-[10px] font-semibold bg-violet-600 text-white"
                    >
                      Habits ({habitsKeptCount}/{habits.length})
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
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
                  <div className="flex items-center gap-1 p-0.5 rounded-lg border bg-black/10 border-white/10">
                    <button 
                      type="button" 
                      onClick={() => setTimerSubTab('pomodoro')}
                      className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-all cursor-pointer ${
                        timerSubTab === 'pomodoro' 
                          ? 'bg-violet-600 text-white' 
                          : isLight ? 'text-zinc-600 hover:text-zinc-950' : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Pomodoro Sprint
                    </button>
                    <button 
                      type="button" 
                      onClick={() => setTimerSubTab('stopwatch')}
                      className={`px-2 py-0.5 rounded text-[10px] font-medium transition-all cursor-pointer ${
                        timerSubTab === 'stopwatch' 
                          ? 'bg-violet-600 text-white' 
                          : isLight ? 'text-zinc-600 hover:text-zinc-950' : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Open Stopwatch
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => {
                        setIsStudyDashboardOpen(true);
                        setActiveDockPanel('none');
                      }}
                      className="flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-sans font-medium text-violet-400 hover:text-violet-300 border border-violet-500/20 hover:border-violet-500/40 cursor-pointer"
                      title="Open Full Study Analytics Dashboard"
                    >
                      <BarChart2 className="w-3 h-3" />
                      <span>Analytics</span>
                    </button>
                    <button 
                      type="button" 
                      onClick={() => setActiveDockPanel('none')}
                      className="p-1 text-zinc-400 hover:text-white cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Quick Subject Tag Selector */}
                <div className="flex items-center justify-between gap-1.5 px-0.5 pt-0.5">
                  <span className={`text-[10px] font-sans shrink-0 ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>Subject:</span>
                  <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5 flex-1">
                    {studySubjects.map((sub) => {
                      const isSelected = (studySubject || '').toLowerCase() === sub.name.toLowerCase();
                      return (
                        <button
                          key={sub.id}
                          type="button"
                          onClick={() => setStudySubject(sub.name)}
                          className={`px-2 py-0.5 rounded-full text-[10px] font-sans font-medium transition-all shrink-0 cursor-pointer flex items-center gap-1 border ${
                            isSelected
                              ? isLight ? 'bg-zinc-900 text-white border-zinc-900 shadow-xs' : 'bg-white text-zinc-950 border-white shadow-xs font-bold'
                              : isLight ? 'bg-zinc-100 border-zinc-200 text-zinc-700 hover:bg-zinc-200' : 'bg-white/[0.04] border-white/10 text-zinc-300 hover:bg-white/[0.08]'
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: sub.color }} />
                          <span>{sub.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {timerSubTab === 'pomodoro' ? (
                /* --- POMODORO SPRINT VIEW --- */
                <div className="space-y-3">
                  {/* Preset Pills */}
                  <div className="flex items-center justify-between gap-1.5">
                    {[
                      { label: '25m / 5m', focus: 25, brk: 5 },
                      { label: '50m / 10m', focus: 50, brk: 10 },
                      { label: '15m Rapid', focus: 15, brk: 3 },
                    ].map((preset) => {
                      const isSelected = !showCustomPomo && pomodoroSettings.focusDurationMinutes === preset.focus && pomodoroSettings.breakDurationMinutes === preset.brk;
                      return (
                        <button
                          key={preset.label}
                          type="button"
                          onClick={() => {
                            setShowCustomPomo(false);
                            setPomodoroSettings(prev => ({
                              ...prev,
                              focusDurationMinutes: preset.focus,
                              breakDurationMinutes: preset.brk,
                            }));
                            if (pomodoroPhase === 'idle') {
                              startPomodoro(preset.focus);
                            }
                          }}
                          className={`flex-1 py-1 px-2 rounded-xl text-[10px] font-mono font-medium border transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-violet-600 text-white border-violet-400/50 shadow-sm'
                              : isLight ? 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200' : 'bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 border-white/[0.08]'
                          }`}
                        >
                          {preset.label}
                        </button>
                      );
                    })}
                    <button
                      type="button"
                      onClick={() => setShowCustomPomo(!showCustomPomo)}
                      className={`flex-1 py-1 px-2 rounded-xl text-[10px] font-mono font-medium border transition-all cursor-pointer ${
                        showCustomPomo || (![25, 50, 15].includes(pomodoroSettings.focusDurationMinutes))
                          ? 'bg-violet-600 text-white border-violet-400/50 shadow-sm'
                          : isLight ? 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200' : 'bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 border-white/[0.08]'
                      }`}
                    >
                      Custom
                    </button>
                  </div>

                  {/* Inline Custom Focus/Break Inputs */}
                  {showCustomPomo && (
                    <div className={`p-2.5 rounded-xl border flex items-center justify-between gap-2 animate-fadeIn ${
                      isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-white/[0.03] border-white/10'
                    }`}>
                      <div className="flex items-center gap-1 text-[11px] font-mono">
                        <span className={isLight ? 'text-zinc-600' : 'text-zinc-400'}>Focus:</span>
                        <input
                          type="number"
                          min="1"
                          max="180"
                          value={customPomoFocusInput}
                          onChange={(e) => setCustomPomoFocusInput(e.target.value)}
                          className={`w-12 px-1.5 py-0.5 rounded border text-center text-xs font-mono outline-none ${
                            isLight ? 'bg-white border-zinc-300 text-zinc-900' : 'bg-black/40 border-white/15 text-white'
                          }`}
                        />
                        <span className={isLight ? 'text-zinc-500' : 'text-zinc-400'}>m</span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] font-mono">
                        <span className={isLight ? 'text-zinc-600' : 'text-zinc-400'}>Break:</span>
                        <input
                          type="number"
                          min="1"
                          max="60"
                          value={customPomoBreakInput}
                          onChange={(e) => setCustomPomoBreakInput(e.target.value)}
                          className={`w-12 px-1.5 py-0.5 rounded border text-center text-xs font-mono outline-none ${
                            isLight ? 'bg-white border-zinc-300 text-zinc-900' : 'bg-black/40 border-white/15 text-white'
                          }`}
                        />
                        <span className={isLight ? 'text-zinc-500' : 'text-zinc-400'}>m</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          const f = parseInt(customPomoFocusInput, 10);
                          const b = parseInt(customPomoBreakInput, 10);
                          if (!isNaN(f) && f > 0) {
                            setPomodoroSettings(prev => ({
                              ...prev,
                              focusDurationMinutes: f,
                              breakDurationMinutes: isNaN(b) || b <= 0 ? 5 : b,
                            }));
                            if (pomodoroPhase === 'idle') {
                              startPomodoro(f);
                            }
                            setShowCustomPomo(false);
                          }
                        }}
                        className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-violet-600 hover:bg-violet-500 text-white cursor-pointer shadow-xs transition-colors"
                      >
                        Set Sprint
                      </button>
                    </div>
                  )}

                  {/* Big Countdown Display */}
                  <div className="text-center py-2 relative">
                    <div className={`text-5xl font-display font-bold tracking-tight leading-none tabular-nums ${
                      isLight ? 'text-zinc-950' : 'text-white'
                    }`}>
                      {pomoMinutesStr}:{pomoSecondsStr}
                    </div>

                    <div className="flex items-center justify-center gap-2 mt-2">
                      <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                        pomodoroPhase === 'break' 
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 animate-pulse'
                          : pomodoroPhase === 'focus'
                            ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30 animate-pulse'
                            : pomodoroPhase === 'paused'
                              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                              : isLight ? 'bg-zinc-100 text-zinc-600 border border-zinc-200' : 'bg-white/[0.06] text-zinc-400 border border-white/[0.08]'
                      }`}>
                        {pomodoroPhase === 'break' ? 'RECOVERY BREAK' : pomodoroPhase === 'focus' ? 'FOCUS SPRINT' : pomodoroPhase === 'paused' ? 'PAUSED' : 'READY TO SPRINT'}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-white/[0.06] h-1.5 rounded-full mt-3 overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-1000 ${pomodoroPhase === 'break' ? 'bg-cyan-400' : 'bg-violet-500'}`}
                        style={{ width: `${Math.round(pomoRatio * 100)}%` }}
                      />
                    </div>
                  </div>

                  {/* Settings Bar: Clock digits & sound toggle */}
                  <div className="flex items-center justify-between text-[11px] px-1 font-mono">
                    <button
                      type="button"
                      onClick={togglePomodoroDisplayMode}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                        pomodoroSettings.displayMode === 'numbers'
                          ? 'bg-violet-500/20 border-violet-500/40 text-violet-300'
                          : isLight ? 'bg-zinc-100 border-zinc-200 text-zinc-600' : 'bg-white/[0.04] border-white/[0.08] text-zinc-400'
                      }`}
                    >
                      <Timer className="w-3.5 h-3.5" />
                      <span>Clock: {pomodoroSettings.displayMode === 'numbers' ? 'Countdown Digits' : 'Wall Clock'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPomodoroSettings(prev => ({ ...prev, soundEnabled: !prev.soundEnabled }))}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                        pomodoroSettings.soundEnabled
                          ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                          : isLight ? 'bg-zinc-100 border-zinc-200 text-zinc-600' : 'bg-white/[0.04] border-white/[0.08] text-zinc-400'
                      }`}
                    >
                      <Bell className="w-3.5 h-3.5" />
                      <span>Chime: {pomodoroSettings.soundEnabled ? 'ON' : 'OFF'}</span>
                    </button>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={togglePomodoro}
                      className={`flex-1 py-2.5 rounded-xl font-display text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                        isLight
                          ? 'bg-zinc-900 hover:bg-zinc-800 text-white border-zinc-800'
                          : 'bg-violet-600 hover:bg-violet-500 text-white border-violet-400/30'
                      }`}
                    >
                      {pomodoroPhase === 'focus' ? (
                        <>
                          <Pause className="w-4 h-4" />
                          <span>Pause Focus</span>
                        </>
                      ) : pomodoroPhase === 'paused' ? (
                        <>
                          <Play className="w-4 h-4 fill-current" />
                          <span>Resume Focus</span>
                        </>
                      ) : pomodoroPhase === 'break' ? (
                        <>
                          <Coffee className="w-4 h-4" />
                          <span>Pause Break</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 ml-0.5 fill-current" />
                          <span>Start Focus ({pomodoroSettings.focusDurationMinutes}m)</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={skipPomodoroPhase}
                      className={`px-3 py-2.5 rounded-xl border text-xs font-medium transition-colors cursor-pointer ${
                        isLight
                          ? 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200'
                          : 'bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white border-white/[0.08]'
                      }`}
                      title={pomodoroPhase === 'focus' ? "Skip directly to break" : "Skip back to focus"}
                    >
                      <SkipForward className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={resetPomodoro}
                      className={`px-3 py-2.5 rounded-xl border transition-colors cursor-pointer ${
                        isLight
                          ? 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200'
                          : 'bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white border-white/[0.08]'
                      }`}
                      title="Reset Pomodoro"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ) : (
                /* --- OPEN STOPWATCH VIEW --- */
                <div className="space-y-3">
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
                </div>
              )}

              {/* 3. Quick Past Focus Time Logger (For when you forget to click timer) */}
              <div className={`p-3 rounded-2xl border transition-all ${
                isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-white/[0.025] border-white/[0.08]'
              }`}>
                <div className="flex items-center justify-between text-[11px] mb-2">
                  <span className={`font-sans font-medium flex items-center gap-1.5 ${isLight ? 'text-zinc-800' : 'text-zinc-200'}`}>
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Forgot to start timer? Log past focus:</span>
                  </span>
                  {manualLogNotice && (
                    <span className="text-[10px] font-mono text-emerald-400 animate-fadeIn font-semibold">
                      {manualLogNotice}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5 flex-wrap">
                  {[30, 45, 60, 90, 120].map((mins) => (
                    <button
                      key={mins}
                      type="button"
                      onClick={() => handleQuickAddFocus(mins)}
                      className={`px-2.5 py-1 rounded-xl text-[10px] font-mono font-medium border transition-all cursor-pointer ${
                        isLight
                          ? 'bg-white hover:bg-zinc-100 text-zinc-800 border-zinc-200 shadow-xs'
                          : 'bg-white/[0.05] hover:bg-white/[0.12] text-zinc-300 hover:text-white border-white/[0.1]'
                      }`}
                      title={`Log ${mins >= 60 ? mins/60 + ' hours' : mins + ' minutes'} past study`}
                    >
                      +{mins >= 60 ? `${mins / 60}h` : `${mins}m`}
                    </button>
                  ))}

                  <form onSubmit={handleCustomAddFocus} className="flex items-center gap-1 ml-auto">
                    <input
                      type="number"
                      min="1"
                      max="720"
                      value={manualMinutesInput}
                      onChange={(e) => setManualMinutesInput(e.target.value)}
                      placeholder="Mins"
                      className="w-14 cosmic-input rounded-lg px-2 py-0.5 text-[10px] font-mono text-center"
                    />
                    <button
                      type="submit"
                      className="px-2.5 py-0.5 rounded-lg text-[10px] font-medium bg-amber-400 hover:bg-amber-300 text-black font-semibold cursor-pointer transition-colors"
                    >
                      + Add
                    </button>
                  </form>
                </div>

                {/* Recent Logged Sessions */}
                {studySessions.length > 0 && (
                  <div className="pt-2 mt-2 border-t border-white/[0.06] space-y-1">
                    <span className={`text-[10px] font-mono uppercase tracking-wider block ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                      Recent Focus Logs:
                    </span>
                    <div className="max-h-20 overflow-y-auto space-y-1 pr-1 text-[11px] font-mono">
                      {studySessions.slice(0, 3).map((s) => (
                        <div key={s.id} className={`flex items-center justify-between px-2 py-1 rounded-lg ${
                          isLight ? 'bg-zinc-100 text-zinc-800' : 'bg-white/[0.03] text-zinc-300'
                        }`}>
                          <span className="truncate">{s.subject} · {Math.round(s.durationSeconds / 60)}m</span>
                          <button
                            type="button"
                            onClick={() => deleteStudySession(s.id)}
                            className="text-zinc-500 hover:text-red-400 p-0.5 transition-colors cursor-pointer"
                            title="Remove logged entry"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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
      {!isHUDHidden && !isEcoSleeping && (
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
              isPomodoroRunning
                ? pomodoroPhase === 'break' 
                  ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300'
                  : 'bg-violet-600/25 border-violet-500/40 text-violet-300'
                : isStudyActive 
                  ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300' 
                  : isLight ? 'bg-zinc-100/90 border-zinc-200 text-zinc-800' : 'bg-white/[0.04] border-white/[0.08] text-zinc-300'
            }`}>
              <button
                type="button"
                onClick={isPomodoroRunning ? togglePomodoro : isStudyActive ? toggleStudyTimer : () => startPomodoro()}
                className="pl-3 pr-1.5 py-1.5 flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity"
                title={isPomodoroRunning ? (pomodoroPhase === 'paused' ? 'Resume Pomodoro' : 'Pause Pomodoro') : isStudyActive ? 'Pause focus timer' : 'Start Pomodoro Focus'}
              >
                {isPomodoroRunning ? (
                  pomodoroPhase === 'paused' ? (
                    <Play className="w-3.5 h-3.5 text-amber-400 fill-current" />
                  ) : (
                    <Pause className="w-3.5 h-3.5 text-violet-400 animate-pulse" />
                  )
                ) : isStudyActive ? (
                  <Pause className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                ) : (
                  <Play className="w-3.5 h-3.5 text-zinc-400 fill-current" />
                )}
                <span className="font-mono text-xs font-semibold tabular-nums">
                  {isPomodoroRunning ? `${pomoMinutesStr}:${pomoSecondsStr}` : formatStopwatch(studySeconds)}
                </span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setTimerSubTab(isPomodoroRunning ? 'pomodoro' : 'stopwatch');
                  setActiveDockPanel(prev => prev === 'timer' ? 'none' : 'timer');
                }}
                className={`pr-3 pl-1.5 py-1.5 text-[11px] font-sans border-l transition-colors cursor-pointer ${
                  isLight ? 'border-zinc-200 hover:text-black' : 'border-white/10 hover:text-white'
                }`}
                title="Expand Deep Study Console"
              >
                <span>{isPomodoroRunning ? (pomodoroPhase === 'break' ? 'Break' : 'Sprint') : studyTopic}</span>
              </button>
            </div>

            {/* 2. Unified Daily Flow (Tasks & Habits) */}
            <button
              type="button"
              onClick={() => setActiveDockPanel(prev => prev === 'tasks' ? 'none' : 'tasks')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-sans transition-all cursor-pointer ${
                activeDockPanel === 'tasks' || activeDockPanel === 'habits'
                  ? 'bg-violet-600 text-white border-violet-400'
                  : isLight ? 'bg-zinc-100/90 hover:bg-zinc-200 border-zinc-200 text-zinc-800' : 'bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300 hover:text-white'
              }`}
              title="Daily Flow (Tasks & Habits)"
            >
              <CheckSquare className="w-3.5 h-3.5 text-violet-400" />
              <span>Flow</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${
                isLight ? 'bg-zinc-200/90 text-zinc-800' : 'bg-white/10 text-violet-200'
              }`}>
                {tasksDoneCount + habitsKeptCount}/{tasks.length + habits.length}
              </span>
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
      {/* 5. DAILY ROUTINE & CIRCADIAN STUDIO MODAL                */}
      {/* ======================================================== */}
      <RoutineStudioModal
        isOpen={isRoutineOpen}
        onClose={() => setIsRoutineOpen(false)}
        onStartFocus={(topic) => {
          setStudySubject(topic);
        }}
      />

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

      {/* Study & Focus Analytics Dashboard Modal */}
      <StudyDashboardModal
        isOpen={isStudyDashboardOpen}
        onClose={() => setIsStudyDashboardOpen(false)}
      />
    </div>
  );
};
