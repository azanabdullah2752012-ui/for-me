import React, { useState, useEffect, useRef } from 'react';
import {
  Clock,
  Play,
  Pause,
  RotateCcw,
  CheckSquare,
  ListTodo,
  Trash2,
  Flame,
  Check,
  Plus,
  Edit3,
  Moon,
  Droplets,
  BookOpen,
  Sparkles,
  Volume2,
  VolumeX,
  Palette,
  Sliders,
  ChevronDown,
  Layers,
  Type,
  Sunrise,
  Sun,
  CalendarClock,
  RotateCw,
  X,
  ChevronRight,
} from 'lucide-react';
import {
  NavView,
  Habit,
  WallpaperTheme,
  ClockStyle,
  RoutinePhase,
  RoutineTimetableConfig,
} from '../types';
import { useData } from '../context/DataContext';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { Button } from '../components/common/Button';
import { sound } from '../audio/sound';

interface WallpaperViewProps {
  onNavigate: (view: NavView) => void;
}

const DEFAULT_TIMETABLE: RoutineTimetableConfig = {
  morning: { title: 'Morning Protocol', timeRange: '06:00 – 09:00' },
  afternoon: { title: 'Afternoon Focus', timeRange: '09:00 – 17:00' },
  evening: { title: 'Evening Wind-Down', timeRange: '17:00 – 22:30' },
};

export const WallpaperView: React.FC<WallpaperViewProps> = ({ onNavigate }) => {
  const {
    selectedDate,
    currentLog,
    habits,
    toggleHabit,
    addHabit,
    addDailyTask,
    toggleDailyTask,
    deleteDailyTask,
    toggleRoutineStep,
    addRoutineStep,
    deleteRoutineStep,
    settings,
    updateSettings,
    updateDailyLog,
    addStudySession,
    weeklyStudyHoursLogged,
    studyTimer,
    studyTimerElapsed,
    startStudyTimer,
    pauseStudyTimer,
    resetStudyTimer,
    updateStudyTimerMeta,
  } = useData();

  // 1. Closable Routine Sidebar Drawer State
  const [isRoutineDrawerOpen, setIsRoutineDrawerOpen] = useState(false);

  // 2. Live wall clock broken down into refined typographical segments
  const [currentTime, setCurrentTime] = useState<string>('');
  const [timeParts, setTimeParts] = useState({
    hoursMinutes: '12:00',
    seconds: '00',
    ampm: 'PM',
  });
  const [currentDateString, setCurrentDateString] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const rawTime = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });

      setCurrentTime(rawTime);

      const match = rawTime.match(/(\d{1,2}:\d{2}):(\d{2})\s*(AM|PM)?/i);
      if (match) {
        setTimeParts({
          hoursMinutes: match[1],
          seconds: match[2],
          ampm: match[3] || '',
        });
      } else {
        setTimeParts({ hoursMinutes: rawTime, seconds: '', ampm: '' });
      }

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

  // Keyboard shortcut: Escape closes drawer and modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsRoutineDrawerOpen(false);
        setIsTimetableModalOpen(false);
        setIsAddHabitModalOpen(false);
        setIsThemeModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // 3. Personalization
  const [isEditingName, setIsEditingName] = useState(false);
  const [ownerName, setOwnerName] = useState(settings.journalOwnerName || 'Me');
  const [isEditingReminder, setIsEditingReminder] = useState(false);
  const [reminderText, setReminderText] = useState(
    settings.personalReminder || 'Remember, you are here for you.'
  );

  const hour = new Date().getHours();
  const timeGreeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';

  // 4. Tasks for the Day state
  const [newTaskText, setNewTaskText] = useState('');
  const dailyTasks = currentLog?.dailyTasks || [];
  const completedTasksCount = dailyTasks.filter((t) => t.completed).length;

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;
    addDailyTask(newTaskText, selectedDate);
    setNewTaskText('');
  };

  // 5. Quick Habit Addition state
  const [isAddHabitModalOpen, setIsAddHabitModalOpen] = useState(false);
  const [newHabitTitle, setNewHabitTitle] = useState('');
  const [newHabitCategory, setNewHabitCategory] = useState<'discipline' | 'mind' | 'body' | 'craft' | 'spirit'>('craft');

  const handleCreateHabit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newHabitTitle.trim()) return;
    addHabit({
      title: newHabitTitle.trim(),
      category: newHabitCategory,
      frequency: 'daily',
      targetPerDay: 1,
      unit: 'daily',
      color: '#8B5CF6',
    });
    setNewHabitTitle('');
    setIsAddHabitModalOpen(false);
  };

  const activeHabits = habits.filter((h) => !h.archived);
  const habitsDoneCount = activeHabits.filter(
    (h) => h.completions && h.completions[selectedDate]
  ).length;

  // 6. Daily Routine Schedule (T.T) state & customization
  const routineTimetable: RoutineTimetableConfig = settings.routineTimetable || DEFAULT_TIMETABLE;
  const [isTimetableModalOpen, setIsTimetableModalOpen] = useState(false);
  const [draftTimetable, setDraftTimetable] = useState<RoutineTimetableConfig>(routineTimetable);

  useEffect(() => {
    if (settings.routineTimetable) {
      setDraftTimetable(settings.routineTimetable);
    }
  }, [settings.routineTimetable]);

  const handleSaveTimetable = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings({ routineTimetable: draftTimetable });
    setIsTimetableModalOpen(false);
    sound.complete();
  };

  const handleResetTimetableToDefault = () => {
    setDraftTimetable(DEFAULT_TIMETABLE);
    updateSettings({ routineTimetable: DEFAULT_TIMETABLE });
    sound.tick();
  };

  const [activeAddPhase, setActiveAddPhase] = useState<RoutinePhase | null>(null);
  const [newStepText, setNewStepText] = useState('');

  const dailyRoutines = currentLog?.dailyRoutines || {
    morning: [],
    afternoon: [],
    evening: [],
  };

  const currentHour = new Date().getHours();
  const currentActivePhase: RoutinePhase =
    currentHour >= 5 && currentHour < 12
      ? 'morning'
      : currentHour >= 12 && currentHour < 18
      ? 'afternoon'
      : 'evening';

  const totalRoutineSteps =
    (dailyRoutines.morning?.length || 0) +
    (dailyRoutines.afternoon?.length || 0) +
    (dailyRoutines.evening?.length || 0);

  const completedRoutineSteps =
    (dailyRoutines.morning?.filter((s) => s.completed).length || 0) +
    (dailyRoutines.afternoon?.filter((s) => s.completed).length || 0) +
    (dailyRoutines.evening?.filter((s) => s.completed).length || 0);

  const handleAddRoutineStep = (phase: RoutinePhase) => {
    if (!newStepText.trim()) return;
    addRoutineStep(phase, newStepText.trim());
    setNewStepText('');
    setActiveAddPhase(null);
  };

  // 7. Deep Study Timer helpers
  const formatTimer = (totalSec: number) => {
    const hrs = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    if (hrs > 0) {
      return `${hrs.toString().padStart(2, '0')}:${mins
        .toString()
        .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSaveStudySession = () => {
    if (studyTimerElapsed < 60) {
      sound.tick();
      alert('Session duration is under 1 minute. Keep focusing to log a meaningful block!');
      return;
    }
    const mins = Math.round(studyTimerElapsed / 60);
    addStudySession({
      date: selectedDate,
      subject: studyTimer.subject || 'Deep Study',
      topicCovered: studyTimer.topic || 'Focused Session',
      durationMinutes: mins,
      focusRating: 5,
      notes: `Logged via Desktop HUD stopwatch at ${new Date().toLocaleTimeString()}`,
    });

    const currentStudyHours = currentLog?.trackers?.study?.hoursStudied || 0;
    updateDailyLog({
      trackers: {
        ...(currentLog?.trackers || {
          study: { skipped: false, hoursStudied: 0, focusRating: 5, completedPlanned: true, notes: '' },
          sleep: { skipped: false, bedtime: '', waketime: '', hours: 7, qualityRating: 4, restedFeeling: true },
          screenTime: { skipped: false, productiveHours: 0, recreationalHours: 0, cutoffHonored: true },
          routine: { skipped: false, morningRoutineDone: true, eveningRoutineDone: true, punctualityScore: 5 },
          cleanliness: { skipped: false, groomingDone: true, teethTwice: true, roomDeskClear: true, bedMade: true },
          meals: { skipped: false, breakfast: { eaten: true, clean: true, notes: '' }, lunch: { eaten: true, clean: true, notes: '' }, dinner: { eaten: true, clean: true, notes: '' }, snacks: { eaten: false, clean: true, notes: '' } },
          waterAndMovement: { skipped: false, waterGlasses: 4, workoutDone: false, workoutType: '', durationMins: 0, walkStepsDone: false },
          emotionalTriggers: { skipped: false, experiencedTrigger: false, triggerDescription: '', managedWell: true, copingNote: '' },
          gratitude: { skipped: false, item1: '', item2: '', item3: '', highlightMoment: '' },
          confidence: { skipped: false, confidenceRating: 4, keptWordToSelf: true, positiveSelfTalk: '' },
          timeUse: { skipped: false, hoursUsedWell: 4, hoursWasted: 0, distractionSource: '', redirectedWell: true },
        }),
        study: {
          ...(currentLog?.trackers?.study || { skipped: false, focusRating: 5, completedPlanned: true, notes: '' }),
          hoursStudied: Number((currentStudyHours + mins / 60).toFixed(1)),
        },
      },
    });

    resetStudyTimer();
    sound.complete();
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

  const toggleSound = () => {
    const next = !settings.soundEffects;
    updateSettings({ soundEffects: next });
    if (next) sound.complete();
  };

  // 8. Wallpaper & Atmosphere Studio State (Properly Organized Categories & Swatches)
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);
  type ThemeCategory = 'all' | 'waves' | 'celestial' | 'minimal';
  const [selectedThemeCategory, setSelectedThemeCategory] = useState<ThemeCategory>('all');

  const wallpaperTheme = settings.wallpaperTheme || 'deep-nebula';
  const clockStyle = settings.clockStyle || 'cinematic-clean';

  interface WallpaperThemeItem {
    id: WallpaperTheme;
    label: string;
    icon: string;
    category: 'waves' | 'celestial' | 'minimal';
    categoryLabel: string;
    desc: string;
    swatchGradient: string;
  }

  const themesList: WallpaperThemeItem[] = [
    // 1. Sculptural Waves (macOS Sonoma / Ventura Inspired Organic Fluid Ribbons)
    {
      id: 'deep-nebula',
      label: 'Cosmic Violet',
      icon: '🌌',
      category: 'waves',
      categoryLabel: 'Sculptural Waves',
      desc: 'Silky royal purple & electric violet ribbon folds with starlight beam',
      swatchGradient: 'from-purple-600 via-indigo-600 to-slate-900',
    },
    {
      id: 'sonoma-amber',
      label: 'Sonoma Amber',
      icon: '🍂',
      category: 'waves',
      categoryLabel: 'Sculptural Waves',
      desc: 'Warm golden dunes & molten copper silk with directional sunset rake',
      swatchGradient: 'from-amber-500 via-orange-600 to-stone-900',
    },
    {
      id: 'nordic-aurora',
      label: 'Nordic Aurora',
      icon: '🌲',
      category: 'waves',
      categoryLabel: 'Sculptural Waves',
      desc: 'Glacial emerald & arctic teal aurora curtain over obsidian night',
      swatchGradient: 'from-emerald-500 via-teal-600 to-slate-900',
    },
    {
      id: 'rose-eclipse',
      label: 'Rose Eclipse',
      icon: '🌹',
      category: 'waves',
      categoryLabel: 'Sculptural Waves',
      desc: 'Velvet crimson silk & rose gold folds with radiant lunar corona',
      swatchGradient: 'from-rose-500 via-pink-700 to-zinc-900',
    },
    {
      id: 'graphite-titanium',
      label: 'Graphite Titanium',
      icon: '⚡',
      category: 'waves',
      categoryLabel: 'Sculptural Waves',
      desc: 'Monochromatic Apple Pro liquid silver & dark titanium ribbons',
      swatchGradient: 'from-slate-400 via-slate-600 to-zinc-950',
    },

    // 2. Celestial Orbits (Astronomical Cosmography & Planetary Storytelling)
    {
      id: 'earth-horizon',
      label: 'Earth Horizon',
      icon: '🌍',
      category: 'celestial',
      categoryLabel: 'Celestial Orbits',
      desc: 'Luminous planetary ozone limb with orbital solar dawn ray',
      swatchGradient: 'from-cyan-400 via-blue-600 to-slate-950',
    },
    {
      id: 'constellation',
      label: 'Star Map & Astrolabe',
      icon: '🧭',
      category: 'celestial',
      categoryLabel: 'Celestial Orbits',
      desc: 'Astronomical coordinate astrolabe rings & celestial asterisms',
      swatchGradient: 'from-indigo-400 via-violet-700 to-slate-950',
    },
    {
      id: 'solar-flare',
      label: 'Solar Flare',
      icon: '☀️',
      category: 'celestial',
      categoryLabel: 'Celestial Orbits',
      desc: 'Stellar corona arc with pulsating solar prominence wind rays',
      swatchGradient: 'from-amber-400 via-red-600 to-stone-950',
    },

    // 3. Minimal Studio (Pure Focus & Dark Luxury)
    {
      id: 'cyber-obsidian',
      label: 'Cyber Obsidian',
      icon: '🎯',
      category: 'minimal',
      categoryLabel: 'Minimal Studio',
      desc: 'Deep OLED void with precision engineering HUD crosshairs',
      swatchGradient: 'from-zinc-600 via-zinc-800 to-black',
    },
    {
      id: 'abyssal-ocean',
      label: 'Abyssal Ocean',
      icon: '🌊',
      category: 'minimal',
      categoryLabel: 'Minimal Studio',
      desc: 'Mariana trench depth with bioluminescent spore particles',
      swatchGradient: 'from-sky-400 via-cyan-800 to-slate-950',
    },
  ];

  const currentThemeObj = themesList.find((t) => t.id === wallpaperTheme) || themesList[0];

  const filteredThemes =
    selectedThemeCategory === 'all'
      ? themesList
      : themesList.filter((t) => t.category === selectedThemeCategory);

  const clockStylesList: { id: ClockStyle; label: string; icon: string }[] = [
    { id: 'cinematic-clean', label: 'Cinematic Clean', icon: '⏱️' },
    { id: 'editorial-serif', label: 'Editorial Serif', icon: '📜' },
    { id: 'minimal-split', label: 'Minimal Split', icon: '🏛️' },
  ];

  return (
    <div className="relative w-screen h-screen max-h-screen overflow-hidden p-5 md:p-6 lg:p-7 flex flex-col justify-between select-none animate-fadeIn">
      {/* UNIFIED CONTAINER FOR PIXEL-PERFECT VERTICAL ALIGNMENT ACROSS HEADER & CARDS */}
      <div className="w-full max-w-7xl mx-auto flex flex-col justify-between h-full">
        {/* ======================================================== */}
        {/* 1. FLOATING TOP UTILITY BAR (Grid 3-Column Symmetrical)  */}
        {/* ======================================================== */}
        <header className="grid grid-cols-[1fr_auto_1fr] items-center h-10 w-full z-20 shrink-0">
          {/* Left Column: Brand Identity (Aligned with Left Edge of Card 1) */}
          <div className="flex items-center gap-3 justify-start">
            <div className="w-8 h-8 rounded-xl bg-accent/20 border border-accent/35 flex items-center justify-center text-starlight-lavender font-heading font-bold text-xs shadow-cosmic-glow shrink-0">
              FM
            </div>
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-starlight-lavender/80 font-semibold hidden sm:inline whitespace-nowrap">
              Cosmic Desktop HUD
            </span>
          </div>

          {/* Center Column: Date Pill (True Mathematical Center, Aligned with Clock & Card 2) */}
          <div className="flex items-center justify-center px-4">
            <div className="inline-flex items-center gap-2 px-4 h-8 rounded-full bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] text-xs font-sans text-paper-secondary shadow-sm">
              <Sparkles size={12} className="text-accent shrink-0" />
              <span className="tracking-tight whitespace-nowrap font-medium text-paper-ink">{currentDateString}</span>
            </div>
          </div>

          {/* Right Column: Actions (Aligned with Right Edge of Card 3) */}
          <div className="flex items-center gap-2 justify-end">
            {/* Routine (T.T) Drawer Toggle Button */}
            <button
              onClick={() => {
                sound.tick();
                setIsRoutineDrawerOpen(!isRoutineDrawerOpen);
              }}
              className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 h-8 rounded-xl border text-xs font-sans font-medium transition-all shadow-sm shrink-0 ${
                isRoutineDrawerOpen
                  ? 'bg-accent text-white border-accent shadow-cosmic-glow'
                  : 'bg-white/[0.03] hover:bg-white/[0.07] border-white/[0.08] hover:border-accent/40 text-starlight-lavender hover:text-white'
              }`}
              title="Toggle Daily Routine (T.T) Drawer"
            >
              <CalendarClock size={13} className={isRoutineDrawerOpen ? 'text-white' : 'text-accent'} />
              <span className="hidden sm:inline">Routine</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-white/[0.1] text-white">
                {completedRoutineSteps}/{totalRoutineSteps}
              </span>
            </button>

            {/* Atmosphere & Wallpaper Studio Trigger Button */}
            <button
              onClick={() => {
                sound.tick();
                setIsThemeModalOpen(true);
              }}
              className="inline-flex items-center gap-1.5 px-3 h-8 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-accent/40 text-xs font-sans font-medium text-starlight-lavender hover:text-white transition-all shadow-sm shrink-0"
              title="Open Atmosphere & Wallpaper Studio"
            >
              <Palette size={13} className="text-accent shrink-0" />
              <span className="hidden sm:inline">Wallpapers</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-white/[0.08] text-white hidden md:inline">
                {currentThemeObj.label}
              </span>
            </button>

            <button
              onClick={toggleSound}
              className="w-8 h-8 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] text-paper-muted hover:text-paper-ink flex items-center justify-center transition-colors shrink-0"
              title={settings.soundEffects ? 'Sound active (Click to mute)' : 'Sound muted'}
            >
              {settings.soundEffects ? <Volume2 size={14} className="text-accent" /> : <VolumeX size={14} />}
            </button>

            <button
              onClick={() => onNavigate('dashboard')}
              className="inline-flex items-center gap-1.5 px-3.5 h-8 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-sans font-medium text-starlight-lavender hover:text-white transition-all shadow-sm shrink-0"
              title="Open Full Journal & Observatory Workspace"
            >
              <BookOpen size={13} />
              <span className="hidden sm:inline">Open Full App</span>
            </button>
          </div>
        </header>

        {/* ======================================================== */}
        {/* 2. GRAND SYMMETRIC WALLPAPER WORKSPACE (True Wallpaper)   */}
        {/* ======================================================== */}
        <main className="flex-1 min-h-0 flex flex-col justify-between w-full my-1.5 z-10 overflow-hidden">
        {/* REFINED MAJESTIC CENTER CLOCK & PERSONAL GREETING */}
        <section className="text-center pt-2 pb-3 shrink-0 space-y-2">
          {/* Dynamic Typography Clock with Full Prominent Ticking Seconds */}
          {clockStyle === 'editorial-serif' ? (
            <div className="font-editorial italic font-light tracking-wide text-6xl md:text-8xl lg:text-9xl text-paper-ink drop-shadow-md select-none leading-none">
              {currentTime || '12:00:00 PM'}
            </div>
          ) : clockStyle === 'minimal-split' ? (
            <div className="font-mono font-light tracking-widest text-5xl md:text-7xl lg:text-8xl drop-shadow-md select-none leading-none">
              <span className="text-paper-ink">{timeParts.hoursMinutes}</span>
              <span className="text-accent/60">:</span>
              <span className="text-starlight-lavender">{timeParts.seconds}</span>
              <span className="text-xl md:text-3xl text-paper-muted ml-3 font-sans font-normal tracking-normal uppercase">
                {timeParts.ampm}
              </span>
            </div>
          ) : (
            /* cinematic-clean (default) with prominent full seconds */
            <div className="text-6xl md:text-8xl lg:text-9xl font-mono font-light tracking-wider text-paper-ink drop-shadow-md select-none leading-none">
              {currentTime || '12:00:00 PM'}
            </div>
          )}

          {/* Dynamic Personal Greeting & Philosophy Motto */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs md:text-sm font-sans text-paper-secondary">
            <span className="text-sm md:text-base font-heading font-medium text-paper-ink">
              {timeGreeting},
            </span>

            {isEditingName ? (
              <div className="inline-flex items-center gap-1.5">
                <input
                  type="text"
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSaveName()}
                  className="border-b border-accent bg-transparent text-sm md:text-base font-heading font-semibold text-starlight-lavender px-1 focus:outline-none"
                  autoFocus
                />
                <button
                  onClick={handleSaveName}
                  className="text-[10px] px-2 py-0.5 rounded bg-accent text-white font-sans"
                >
                  Save
                </button>
              </div>
            ) : (
              <span
                onClick={() => setIsEditingName(true)}
                className="text-sm md:text-base font-heading font-semibold text-starlight-lavender cursor-pointer hover:underline decoration-accent/60 underline-offset-4 transition-all"
                title="Click to edit name"
              >
                {settings.journalOwnerName || 'Me'}.
              </span>
            )}

            <span className="text-paper-muted hidden sm:inline">•</span>

            {isEditingReminder ? (
              <div className="inline-flex items-center gap-1.5">
                <input
                  type="text"
                  value={reminderText}
                  onChange={(e) => setReminderText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSaveReminder()}
                  className="border-b border-accent bg-transparent text-xs font-sans text-paper-ink px-1 focus:outline-none"
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

        {/* 3 FROSTED GLASS CARDS (Symmetrically Balanced) */}
        <section className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 my-2 items-stretch overflow-hidden">
          {/* ======================================================== */}
          {/* CARD 1: TASKS FOR THE DAY                                */}
          {/* ======================================================== */}
          <div className="p-5 lg:p-6 rounded-[2rem] bg-gradient-to-b from-white/[0.035] to-white/[0.01] hover:from-white/[0.045] hover:to-white/[0.015] backdrop-blur-3xl border border-white/[0.08] border-t-white/[0.18] shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] hover:border-white/[0.16] hover:shadow-[0_12px_40px_0_rgba(139,92,246,0.12)] flex flex-col justify-between h-full min-h-0 transition-all duration-300">
            <div className="flex-1 min-h-0 flex flex-col space-y-3.5">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-accent/20 border border-accent/35 flex items-center justify-center text-starlight-lavender shadow-sm">
                    <CheckSquare size={13} />
                  </div>
                  <h3 className="text-xs font-sans uppercase tracking-[0.16em] text-starlight-lavender font-semibold">
                    Tasks for the Day
                  </h3>
                </div>
                <Badge variant={completedTasksCount === dailyTasks.length && dailyTasks.length > 0 ? 'success' : 'starlight'}>
                  {completedTasksCount} / {dailyTasks.length} done
                </Badge>
              </div>

              {/* Quick Task Input Field */}
              <form onSubmit={handleAddTask} className="flex items-center gap-2 shrink-0">
                <input
                  type="text"
                  value={newTaskText}
                  onChange={(e) => setNewTaskText(e.target.value)}
                  placeholder="Add task for today (Press Enter)..."
                  className="flex-1 bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.15] focus:border-accent rounded-xl px-3 py-2 text-xs text-paper-ink font-sans placeholder:text-paper-muted/50 focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  disabled={!newTaskText.trim()}
                  className="p-2 rounded-xl bg-accent/20 hover:bg-accent text-starlight-lavender hover:text-white border border-accent/35 disabled:opacity-30 disabled:pointer-events-none transition-all shrink-0"
                  title="Add Task"
                >
                  <Plus size={14} />
                </button>
              </form>

              {/* Tasks List */}
              <div className="flex-1 min-h-0 space-y-1.5 overflow-y-auto pr-1">
                {dailyTasks.length > 0 ? (
                  dailyTasks.map((task) => (
                    <div
                      key={task.id}
                      className={`p-2.5 rounded-xl border transition-all flex items-center justify-between text-xs select-none group ${
                        task.completed
                          ? 'bg-emerald-500/[0.06] border-emerald-500/25 text-paper-muted'
                          : 'bg-white/[0.02] hover:bg-white/[0.06] border-white/[0.06] text-paper-ink'
                      }`}
                    >
                      <div
                        className="flex items-center gap-2.5 truncate flex-1 cursor-pointer pr-2"
                        onClick={() => toggleDailyTask(task.id, selectedDate)}
                      >
                        <div
                          className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 border transition-all ${
                            task.completed
                              ? 'bg-emerald-500 border-emerald-400 text-white shadow-sm'
                              : 'border-white/[0.25] group-hover:border-accent'
                          }`}
                        >
                          {task.completed && <Check size={11} strokeWidth={3} />}
                        </div>
                        <span className={`font-sans truncate ${task.completed ? 'line-through text-paper-muted' : ''}`}>
                          {task.text}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => deleteDailyTask(task.id, selectedDate)}
                        className="opacity-0 group-hover:opacity-100 p-1 rounded-md text-paper-muted hover:text-rose-400 hover:bg-white/[0.06] transition-all"
                        title="Delete task"
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="py-8 text-center space-y-1.5 text-paper-muted">
                    <ListTodo size={20} className="mx-auto text-starlight-lavender/30 mb-1" />
                    <p className="text-xs font-sans">No tasks added yet.</p>
                    <p className="text-[10px] text-paper-muted/60">
                      Add your key priorities above to direct your focus.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Task Completion Bar (Parallel Baseline Anchor) */}
            <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-paper-muted font-sans shrink-0">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Day Progress</span>
              </span>
              <span className="font-mono text-starlight-lavender font-medium">
                {dailyTasks.length > 0
                  ? `${Math.round((completedTasksCount / dailyTasks.length) * 100)}% done`
                  : '0% done'}
              </span>
            </div>
          </div>

          {/* ======================================================== */}
          {/* CARD 2: DAILY RHYTHM PULSE (HABITS)                      */}
          {/* ======================================================== */}
          <div className="p-5 lg:p-6 rounded-[2rem] bg-gradient-to-b from-white/[0.035] to-white/[0.01] hover:from-white/[0.045] hover:to-white/[0.015] backdrop-blur-3xl border border-white/[0.08] border-t-white/[0.18] shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] hover:border-white/[0.16] hover:shadow-[0_12px_40px_0_rgba(139,92,246,0.12)] flex flex-col justify-between h-full min-h-0 transition-all duration-300">
            <div className="flex-1 min-h-0 flex flex-col space-y-3.5">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-accent/20 border border-accent/35 flex items-center justify-center text-starlight-lavender shadow-sm">
                    <Flame size={13} />
                  </div>
                  <h3 className="text-xs font-sans uppercase tracking-[0.16em] text-starlight-lavender font-semibold">
                    Daily Rhythm Pulse
                  </h3>
                </div>
                <div className="flex items-center gap-1.5">
                  <Badge variant={habitsDoneCount === activeHabits.length && activeHabits.length > 0 ? 'success' : 'starlight'}>
                    {habitsDoneCount} / {activeHabits.length} kept
                  </Badge>
                  <button
                    onClick={() => setIsAddHabitModalOpen(true)}
                    className="p-1 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-paper-muted hover:text-paper-ink border border-white/[0.06] transition-colors"
                    title="Add New Habit"
                  >
                    <Plus size={12} />
                  </button>
                </div>
              </div>

              {/* Habit Grid */}
              <div className="flex-1 min-h-0 space-y-1.5 overflow-y-auto pr-1">
                {activeHabits.length > 0 ? (
                  activeHabits.map((habit) => {
                    const isDone = habit.completions && !!habit.completions[selectedDate];
                    return (
                      <div
                        key={habit.id}
                        onClick={() => toggleHabit(habit.id, selectedDate)}
                        className={`p-2.5 rounded-xl border transition-all flex items-center justify-between text-xs cursor-pointer select-none group ${
                          isDone
                            ? 'bg-emerald-500/[0.06] border-emerald-500/25 text-paper-muted'
                            : 'bg-white/[0.02] hover:bg-white/[0.06] border-white/[0.06] text-paper-ink'
                        }`}
                      >
                        <div className="flex flex-col gap-0.5 truncate pr-2">
                          <span className={`font-sans truncate ${isDone ? 'line-through text-paper-muted' : ''}`}>
                            {habit.title}
                          </span>
                          <div className="flex items-center gap-1.5 text-[10px] text-paper-muted font-mono">
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
                          className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 border transition-all ${
                            isDone
                              ? 'bg-emerald-500 border-emerald-400 text-white shadow-sm'
                              : 'border-white/[0.25] group-hover:border-accent'
                          }`}
                        >
                          {isDone && <Check size={11} strokeWidth={3} />}
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="py-8 text-center space-y-1 text-paper-muted">
                    <Flame size={20} className="mx-auto text-starlight-lavender/30 mb-1" />
                    <p className="text-xs font-sans">No active habits.</p>
                    <button
                      onClick={() => setIsAddHabitModalOpen(true)}
                      className="text-xs text-accent hover:underline font-medium inline-block"
                    >
                      + Add your first habit
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Habit Completion Progress & Starlight Journal Link (Parallel Baseline Anchor) */}
            <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-paper-muted font-sans shrink-0">
              <button
                onClick={() => onNavigate('daily-tracker')}
                className="hover:text-starlight-lavender flex items-center gap-1.5 transition-colors group"
                title="Open Starlight Journal"
              >
                <BookOpen size={12} className="text-starlight-lavender group-hover:text-accent transition-colors" />
                <span>Journal &amp; Reflect &rarr;</span>
              </button>
              <span className="font-mono text-starlight-lavender font-medium">
                {activeHabits.length > 0 ? `${Math.round((habitsDoneCount / activeHabits.length) * 100)}% kept` : '0%'}
              </span>
            </div>
          </div>

          {/* ======================================================== */}
          {/* CARD 3: DEEP STUDY CONSOLE                               */}
          {/* ======================================================== */}
          <div className="p-5 lg:p-6 rounded-[2rem] bg-gradient-to-b from-white/[0.035] to-white/[0.01] hover:from-white/[0.045] hover:to-white/[0.015] backdrop-blur-3xl border border-white/[0.08] border-t-white/[0.18] shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] hover:border-white/[0.16] hover:shadow-[0_12px_40px_0_rgba(139,92,246,0.12)] flex flex-col justify-between h-full min-h-0 transition-all duration-300">
            <div className="flex-1 min-h-0 flex flex-col space-y-3.5">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-accent/20 border border-accent/35 flex items-center justify-center text-starlight-lavender shadow-sm">
                    <Clock size={13} />
                  </div>
                  <h3 className="text-xs font-sans uppercase tracking-[0.16em] text-starlight-lavender font-semibold">
                    Deep Study Console
                  </h3>
                </div>
                <Badge variant={studyTimer.isRunning ? 'warning' : 'neutral'}>
                  {studyTimer.isRunning ? 'RUNNING' : 'STOPPED'}
                </Badge>
              </div>

              {/* Digital Stopwatch Display */}
              <div className="text-center py-1">
                <div className="text-3xl lg:text-4xl font-mono font-light tracking-widest text-paper-ink select-none drop-shadow-sm">
                  {formatTimer(studyTimerElapsed)}
                </div>
                <span className="text-[10px] font-sans uppercase tracking-[0.18em] text-paper-muted">
                  Background-Resilient Stopwatch
                </span>
              </div>

              {/* Quick Subject & Topic Tags */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <input
                  type="text"
                  value={studyTimer.subject}
                  onChange={(e) => updateStudyTimerMeta(e.target.value, studyTimer.topic)}
                  placeholder="Subject (e.g. Code)"
                  className="bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.15] focus:border-accent rounded-xl px-2.5 py-1.5 text-xs text-paper-ink font-sans placeholder:text-paper-muted/50 focus:outline-none transition-colors"
                />
                <input
                  type="text"
                  value={studyTimer.topic}
                  onChange={(e) => updateStudyTimerMeta(studyTimer.subject, e.target.value)}
                  placeholder="Topic (e.g. Design)"
                  className="bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.15] focus:border-accent rounded-xl px-2.5 py-1.5 text-xs text-paper-ink font-sans placeholder:text-paper-muted/50 focus:outline-none transition-colors"
                />
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2 pt-1 shrink-0">
                {studyTimer.isRunning ? (
                  <button
                    onClick={pauseStudyTimer}
                    className="flex-1 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 font-sans font-medium text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm"
                  >
                    <Pause size={13} />
                    <span>Pause</span>
                  </button>
                ) : (
                  <button
                    onClick={() => startStudyTimer()}
                    className="flex-1 py-2 rounded-xl bg-accent hover:bg-accent/90 text-white font-sans font-medium text-xs flex items-center justify-center gap-1.5 transition-all shadow-cosmic-glow"
                  >
                    <Play size={13} fill="currentColor" />
                    <span>{studyTimerElapsed > 0 ? 'Resume' : 'Start Focus'}</span>
                  </button>
                )}

                {studyTimerElapsed > 0 && (
                  <>
                    <button
                      onClick={handleSaveStudySession}
                      className="px-3 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 font-sans font-medium text-xs flex items-center justify-center gap-1 transition-all"
                      title="Save Completed Session to Log"
                    >
                      <Check size={13} />
                      <span>Save</span>
                    </button>
                    <button
                      onClick={resetStudyTimer}
                      className="p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-paper-muted hover:text-paper-ink border border-white/[0.06] transition-colors"
                      title="Reset Timer"
                    >
                      <RotateCcw size={13} />
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Weekly Quota Telemetry */}
            <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-paper-muted font-sans shrink-0">
              <span>Weekly: {weeklyStudyHoursLogged.toFixed(1)}h / {settings.weeklyStudyTargetHours || 15}h</span>
              <span className="font-mono text-starlight-lavender font-medium">
                {Math.min(100, Math.round((weeklyStudyHoursLogged / (settings.weeklyStudyTargetHours || 15)) * 100))}% quota
              </span>
            </div>
          </div>
        </section>

        {/* 3. BOTTOM FLOATING BIOMETRICS DOCK (Centered Island Pill) */}
        <footer className="shrink-0 mx-auto flex items-center justify-between gap-6 px-7 py-2.5 rounded-full bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] border-t-white/[0.16] text-xs font-sans text-paper-secondary shadow-md">
          {/* Sleep */}
          <div className="flex items-center gap-1.5">
            <Moon size={13} className="text-starlight-lavender" />
            <span>Sleep: <strong className="text-paper-ink">{currentLog?.trackers?.sleep?.hours || currentLog?.sleepHours || 7}h</strong></span>
          </div>

          <span className="text-white/[0.1]">•</span>

          {/* Hydration with inline desktop buttons */}
          <div className="flex items-center gap-2">
            <Droplets size={13} className="text-blue-400" />
            <span>Water: <strong className="text-paper-ink">{currentLog?.trackers?.waterAndMovement?.waterGlasses || currentLog?.waterGlasses || 0}/8</strong></span>
            <button
              onClick={() => {
                sound.tick();
                const cur = currentLog?.trackers?.waterAndMovement?.waterGlasses || currentLog?.waterGlasses || 0;
                updateDailyLog({ waterGlasses: cur + 1 });
              }}
              className="w-4 h-4 rounded-md bg-white/[0.05] hover:bg-white/[0.14] border border-white/[0.1] flex items-center justify-center text-[10px] text-paper-ink transition-colors"
              title="Add a glass"
            >
              +
            </button>
            <button
              onClick={() => {
                sound.tick();
                const cur = currentLog?.trackers?.waterAndMovement?.waterGlasses || currentLog?.waterGlasses || 0;
                if (cur > 0) updateDailyLog({ waterGlasses: cur - 1 });
              }}
              className="w-4 h-4 rounded-md bg-white/[0.05] hover:bg-white/[0.14] border border-white/[0.1] flex items-center justify-center text-[10px] text-paper-ink transition-colors"
              title="Remove a glass"
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
        </footer>
      </main>
      </div>

      {/* ======================================================== */}
      {/* FLOATING QUICK TAB ON LEFT EDGE (When drawer is closed)  */}
      {/* ======================================================== */}
      {!isRoutineDrawerOpen && (
        <button
          onClick={() => {
            sound.tick();
            setIsRoutineDrawerOpen(true);
          }}
          className="fixed left-0 top-1/2 -translate-y-1/2 z-30 flex items-center gap-2 py-3 px-2 rounded-r-2xl bg-white/[0.03] hover:bg-white/[0.08] backdrop-blur-2xl border-y border-r border-white/[0.1] hover:border-accent/40 shadow-cosmic-glow text-starlight-lavender hover:text-white transition-all group cursor-pointer"
          title="Open Daily Routine (T.T) Drawer"
        >
          <div className="flex flex-col items-center gap-1.5">
            <CalendarClock size={16} className="text-accent group-hover:scale-110 transition-transform" />
            <span className="[writing-mode:vertical-lr] rotate-180 text-[10px] uppercase font-mono tracking-widest text-paper-muted group-hover:text-white">
              Routine T.T
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          </div>
        </button>
      )}

      {/* ======================================================== */}
      {/* SLIDE-OVER CLOSABLE ROUTINE SIDEBAR DRAWER (T.T)          */}
      {/* ======================================================== */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 pointer-events-none ${
          isRoutineDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0'
        }`}
      >
        {/* Backdrop overlay (click to close) */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
          onClick={() => {
            sound.tick();
            setIsRoutineDrawerOpen(false);
          }}
        />

        {/* Drawer Panel */}
        <aside
          className={`absolute left-0 top-0 bottom-0 w-84 md:w-96 max-w-[88vw] h-full bg-[#0d0f17]/95 backdrop-blur-3xl border-r border-white/[0.1] shadow-2xl p-5 flex flex-col justify-between transition-transform duration-300 ease-out z-10 ${
            isRoutineDrawerOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.08] shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-accent/20 border border-accent/35 flex items-center justify-center text-accent shadow-sm">
                <CalendarClock size={16} />
              </div>
              <div>
                <h3 className="text-xs font-sans uppercase tracking-[0.16em] text-starlight-lavender font-semibold flex items-center gap-1.5">
                  <span>Daily Routine</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-white/[0.06] text-accent font-mono font-medium">T.T</span>
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Badge variant={completedRoutineSteps === totalRoutineSteps && totalRoutineSteps > 0 ? 'success' : 'starlight'}>
                {completedRoutineSteps}/{totalRoutineSteps}
              </Badge>
              {/* Customize T.T Modal Button */}
              <button
                onClick={() => {
                  sound.tick();
                  setDraftTimetable(settings.routineTimetable || DEFAULT_TIMETABLE);
                  setIsTimetableModalOpen(true);
                }}
                className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] hover:border-accent/40 text-paper-muted hover:text-white transition-all"
                title="Customize Timetable & Hours (T.T)"
              >
                <Sliders size={13} className="text-accent" />
              </button>
              {/* Close Drawer Button */}
              <button
                onClick={() => {
                  sound.tick();
                  setIsRoutineDrawerOpen(false);
                }}
                className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] text-paper-muted hover:text-white transition-all"
                title="Close Routine Drawer (Esc)"
              >
                <X size={14} />
              </button>
            </div>
          </div>

          {/* Interactive Timetable Phases */}
          <div className="flex-1 min-h-0 overflow-y-auto space-y-3.5 pt-3 pr-1">
            {/* 1. MORNING PHASE */}
            <div className={`p-3.5 rounded-2xl border transition-all duration-300 ${
              currentActivePhase === 'morning'
                ? 'bg-amber-500/[0.04] border-amber-400/35 shadow-[0_0_20px_-5px_rgba(245,158,11,0.18)]'
                : 'bg-white/[0.015] border-white/[0.05] hover:border-white/[0.1]'
            }`}>
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.05]">
                <div className="flex items-center gap-1.5 truncate">
                  <Sunrise size={14} className="text-amber-400 shrink-0" />
                  <span className="text-xs font-sans font-semibold text-paper-ink truncate">
                    {routineTimetable.morning.title}
                  </span>
                </div>
                <button
                  onClick={() => {
                    sound.tick();
                    setDraftTimetable(settings.routineTimetable || DEFAULT_TIMETABLE);
                    setIsTimetableModalOpen(true);
                  }}
                  className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.03] hover:bg-white/[0.08] text-paper-muted hover:text-white border border-white/[0.06] transition-colors shrink-0"
                  title="Click to edit phase schedule"
                >
                  {routineTimetable.morning.timeRange}
                </button>
              </div>

              {/* Steps List */}
              <div className="space-y-1.5 pt-2">
                {dailyRoutines.morning?.map((step) => (
                  <div
                    key={step.id}
                    className={`p-2 rounded-xl border text-xs flex items-center justify-between transition-all select-none group ${
                      step.completed
                        ? 'bg-emerald-500/[0.06] border-emerald-500/25 text-paper-muted'
                        : 'bg-white/[0.02] hover:bg-white/[0.05] border-white/[0.05] text-paper-ink'
                    }`}
                  >
                    <div
                      className="flex items-center gap-2 truncate flex-1 cursor-pointer"
                      onClick={() => toggleRoutineStep('morning', step.id, selectedDate)}
                    >
                      <div className={`w-3.5 h-3.5 rounded flex items-center justify-center shrink-0 border transition-all ${
                        step.completed ? 'bg-emerald-500 border-emerald-400 text-white' : 'border-white/[0.25]'
                      }`}>
                        {step.completed && <Check size={9} strokeWidth={3} />}
                      </div>
                      <span className={`truncate text-xs font-sans ${step.completed ? 'line-through text-paper-muted' : ''}`}>
                        {step.text}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => deleteRoutineStep('morning', step.id, selectedDate)}
                      className="opacity-0 group-hover:opacity-100 p-0.5 text-paper-muted hover:text-rose-400 transition-opacity ml-1"
                      title="Delete step"
                    >
                      <Trash2 size={11} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Add Step Input */}
              {activeAddPhase === 'morning' ? (
                <div className="flex items-center gap-1.5 pt-2">
                  <input
                    type="text"
                    value={newStepText}
                    onChange={(e) => setNewStepText(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAddRoutineStep('morning')}
                    placeholder="Step name..."
                    className="flex-1 bg-white/[0.03] border border-white/[0.08] rounded-lg px-2 py-1 text-xs text-paper-ink font-sans focus:outline-none focus:border-accent"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => handleAddRoutineStep('morning')}
                    className="px-2.5 py-1 rounded-lg bg-accent text-white text-[11px] font-sans"
                  >
                    Add
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setActiveAddPhase('morning');
                    setNewStepText('');
                  }}
                  className="inline-flex items-center gap-1 text-[11px] text-paper-muted hover:text-paper-ink transition-colors pt-2"
                >
                  <Plus size={11} />
                  <span>Add routine step</span>
                </button>
              )}
            </div>

            {/* 2. AFTERNOON PHASE */}
            <div className={`p-3.5 rounded-2xl border transition-all duration-300 ${
              currentActivePhase === 'afternoon'
                ? 'bg-blue-500/[0.04] border-blue-400/35 shadow-[0_0_20px_-5px_rgba(59,130,246,0.18)]'
                : 'bg-white/[0.015] border-white/[0.05] hover:border-white/[0.1]'
            }`}>
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.05]">
                <div className="flex items-center gap-1.5 truncate">
                  <Sun size={14} className="text-blue-400 shrink-0" />
                  <span className="text-xs font-sans font-semibold text-paper-ink truncate">
                    {routineTimetable.afternoon.title}
                  </span>
                </div>
                <button
                  onClick={() => {
                    sound.tick();
                    setDraftTimetable(settings.routineTimetable || DEFAULT_TIMETABLE);
                    setIsTimetableModalOpen(true);
                  }}
                  className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.03] hover:bg-white/[0.08] text-paper-muted hover:text-white border border-white/[0.06] transition-colors shrink-0"
                  title="Click to edit phase schedule"
                >
                  {routineTimetable.afternoon.timeRange}
                </button>
              </div>

              {/* Steps List */}
              <div className="space-y-1.5 pt-2">
                {dailyRoutines.afternoon?.map((step) => (
                  <div
                    key={step.id}
                    className={`p-2 rounded-xl border text-xs flex items-center justify-between transition-all select-none group ${
                      step.completed
                        ? 'bg-emerald-500/[0.06] border-emerald-500/25 text-paper-muted'
                        : 'bg-white/[0.02] hover:bg-white/[0.05] border-white/[0.05] text-paper-ink'
                    }`}
                  >
                    <div
                      className="flex items-center gap-2 truncate flex-1 cursor-pointer"
                      onClick={() => toggleRoutineStep('afternoon', step.id, selectedDate)}
                    >
                      <div className={`w-3.5 h-3.5 rounded flex items-center justify-center shrink-0 border transition-all ${
                        step.completed ? 'bg-emerald-500 border-emerald-400 text-white' : 'border-white/[0.25]'
                      }`}>
                        {step.completed && <Check size={9} strokeWidth={3} />}
                      </div>
                      <span className={`truncate text-xs font-sans ${step.completed ? 'line-through text-paper-muted' : ''}`}>
                        {step.text}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => deleteRoutineStep('afternoon', step.id, selectedDate)}
                      className="opacity-0 group-hover:opacity-100 p-0.5 text-paper-muted hover:text-rose-400 transition-opacity ml-1"
                      title="Delete step"
                    >
                      <Trash2 size={11} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Add Step Input */}
              {activeAddPhase === 'afternoon' ? (
                <div className="flex items-center gap-1.5 pt-2">
                  <input
                    type="text"
                    value={newStepText}
                    onChange={(e) => setNewStepText(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAddRoutineStep('afternoon')}
                    placeholder="Step name..."
                    className="flex-1 bg-white/[0.03] border border-white/[0.08] rounded-lg px-2 py-1 text-xs text-paper-ink font-sans focus:outline-none focus:border-accent"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => handleAddRoutineStep('afternoon')}
                    className="px-2.5 py-1 rounded-lg bg-accent text-white text-[11px] font-sans"
                  >
                    Add
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setActiveAddPhase('afternoon');
                    setNewStepText('');
                  }}
                  className="inline-flex items-center gap-1 text-[11px] text-paper-muted hover:text-paper-ink transition-colors pt-2"
                >
                  <Plus size={11} />
                  <span>Add routine step</span>
                </button>
              )}
            </div>

            {/* 3. EVENING PHASE */}
            <div className={`p-3.5 rounded-2xl border transition-all duration-300 ${
              currentActivePhase === 'evening'
                ? 'bg-purple-500/[0.04] border-purple-400/35 shadow-[0_0_20px_-5px_rgba(168,85,247,0.18)]'
                : 'bg-white/[0.015] border-white/[0.05] hover:border-white/[0.1]'
            }`}>
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.05]">
                <div className="flex items-center gap-1.5 truncate">
                  <Moon size={14} className="text-purple-400 shrink-0" />
                  <span className="text-xs font-sans font-semibold text-paper-ink truncate">
                    {routineTimetable.evening.title}
                  </span>
                </div>
                <button
                  onClick={() => {
                    sound.tick();
                    setDraftTimetable(settings.routineTimetable || DEFAULT_TIMETABLE);
                    setIsTimetableModalOpen(true);
                  }}
                  className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.03] hover:bg-white/[0.08] text-paper-muted hover:text-white border border-white/[0.06] transition-colors shrink-0"
                  title="Click to edit phase schedule"
                >
                  {routineTimetable.evening.timeRange}
                </button>
              </div>

              {/* Steps List */}
              <div className="space-y-1.5 pt-2">
                {dailyRoutines.evening?.map((step) => (
                  <div
                    key={step.id}
                    className={`p-2 rounded-xl border text-xs flex items-center justify-between transition-all select-none group ${
                      step.completed
                        ? 'bg-emerald-500/[0.06] border-emerald-500/25 text-paper-muted'
                        : 'bg-white/[0.02] hover:bg-white/[0.05] border-white/[0.05] text-paper-ink'
                    }`}
                  >
                    <div
                      className="flex items-center gap-2 truncate flex-1 cursor-pointer"
                      onClick={() => toggleRoutineStep('evening', step.id, selectedDate)}
                    >
                      <div className={`w-3.5 h-3.5 rounded flex items-center justify-center shrink-0 border transition-all ${
                        step.completed ? 'bg-emerald-500 border-emerald-400 text-white' : 'border-white/[0.25]'
                      }`}>
                        {step.completed && <Check size={9} strokeWidth={3} />}
                      </div>
                      <span className={`truncate text-xs font-sans ${step.completed ? 'line-through text-paper-muted' : ''}`}>
                        {step.text}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => deleteRoutineStep('evening', step.id, selectedDate)}
                      className="opacity-0 group-hover:opacity-100 p-0.5 text-paper-muted hover:text-rose-400 transition-opacity ml-1"
                      title="Delete step"
                    >
                      <Trash2 size={11} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Add Step Input */}
              {activeAddPhase === 'evening' ? (
                <div className="flex items-center gap-1.5 pt-2">
                  <input
                    type="text"
                    value={newStepText}
                    onChange={(e) => setNewStepText(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAddRoutineStep('evening')}
                    placeholder="Step name..."
                    className="flex-1 bg-white/[0.03] border border-white/[0.08] rounded-lg px-2 py-1 text-xs text-paper-ink font-sans focus:outline-none focus:border-accent"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => handleAddRoutineStep('evening')}
                    className="px-2.5 py-1 rounded-lg bg-accent text-white text-[11px] font-sans"
                  >
                    Add
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setActiveAddPhase('evening');
                    setNewStepText('');
                  }}
                  className="inline-flex items-center gap-1 text-[11px] text-paper-muted hover:text-paper-ink transition-colors pt-2"
                >
                  <Plus size={11} />
                  <span>Add routine step</span>
                </button>
              )}
            </div>
          </div>

          {/* Drawer Footer: Day Execution Progress Bar & Quick Customize */}
          <div className="pt-3.5 border-t border-white/[0.08] shrink-0 space-y-2">
            <div className="flex items-center justify-between text-[11px] text-paper-muted">
              <span>T.T Adherence</span>
              <span className="font-mono text-starlight-lavender font-medium">
                {totalRoutineSteps > 0 ? `${Math.round((completedRoutineSteps / totalRoutineSteps) * 100)}%` : '0%'}
              </span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/[0.04] overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-accent to-emerald-400 transition-all duration-300"
                style={{
                  width: totalRoutineSteps > 0 ? `${(completedRoutineSteps / totalRoutineSteps) * 100}%` : '0%',
                }}
              />
            </div>
            <div className="flex items-center justify-between pt-1 text-[11px] text-paper-muted">
              <span className="truncate flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span>{routineTimetable[currentActivePhase]?.title || currentActivePhase}</span>
              </span>
              <button
                type="button"
                onClick={() => {
                  sound.tick();
                  setDraftTimetable(settings.routineTimetable || DEFAULT_TIMETABLE);
                  setIsTimetableModalOpen(true);
                }}
                className="text-accent hover:underline flex items-center gap-1 font-medium cursor-pointer"
              >
                <Edit3 size={11} /> Customize T.T
              </button>
            </div>
          </div>
        </aside>
      </div>

      {/* ======================================================== */}
      {/* MODAL 1: CUSTOMIZE TIMETABLE (T.T)                       */}
      {/* ======================================================== */}
      <Modal
        isOpen={isTimetableModalOpen}
        onClose={() => setIsTimetableModalOpen(false)}
        title="Customize Timetable & Hours (T.T)"
        subtitle="Calibrate phase titles and scheduled time windows to match your actual routine."
      >
        <form onSubmit={handleSaveTimetable} className="space-y-4 text-xs font-sans">
          {/* Morning Configuration */}
          <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs pb-1 border-b border-white/[0.04]">
              <Sunrise size={14} />
              <span>Morning Phase</span>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <div>
                <label className="block text-[11px] text-paper-muted mb-1">Phase Title</label>
                <input
                  type="text"
                  value={draftTimetable.morning.title}
                  onChange={(e) =>
                    setDraftTimetable((prev) => ({
                      ...prev,
                      morning: { ...prev.morning, title: e.target.value },
                    }))
                  }
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-2.5 py-1.5 text-xs text-paper-ink focus:outline-none focus:border-accent"
                  placeholder="e.g. Morning Protocol"
                  required
                />
              </div>
              <div>
                <label className="block text-[11px] text-paper-muted mb-1">Time Range</label>
                <input
                  type="text"
                  value={draftTimetable.morning.timeRange}
                  onChange={(e) =>
                    setDraftTimetable((prev) => ({
                      ...prev,
                      morning: { ...prev.morning, timeRange: e.target.value },
                    }))
                  }
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-2.5 py-1.5 text-xs text-paper-ink focus:outline-none focus:border-accent font-mono"
                  placeholder="e.g. 06:00 – 09:00"
                  required
                />
              </div>
            </div>
          </div>

          {/* Afternoon Configuration */}
          <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
            <div className="flex items-center gap-2 text-blue-400 font-semibold text-xs pb-1 border-b border-white/[0.04]">
              <Sun size={14} />
              <span>Afternoon Phase</span>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <div>
                <label className="block text-[11px] text-paper-muted mb-1">Phase Title</label>
                <input
                  type="text"
                  value={draftTimetable.afternoon.title}
                  onChange={(e) =>
                    setDraftTimetable((prev) => ({
                      ...prev,
                      afternoon: { ...prev.afternoon, title: e.target.value },
                    }))
                  }
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-2.5 py-1.5 text-xs text-paper-ink focus:outline-none focus:border-accent"
                  placeholder="e.g. Afternoon Focus"
                  required
                />
              </div>
              <div>
                <label className="block text-[11px] text-paper-muted mb-1">Time Range</label>
                <input
                  type="text"
                  value={draftTimetable.afternoon.timeRange}
                  onChange={(e) =>
                    setDraftTimetable((prev) => ({
                      ...prev,
                      afternoon: { ...prev.afternoon, timeRange: e.target.value },
                    }))
                  }
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-2.5 py-1.5 text-xs text-paper-ink focus:outline-none focus:border-accent font-mono"
                  placeholder="e.g. 09:00 – 17:00"
                  required
                />
              </div>
            </div>
          </div>

          {/* Evening Configuration */}
          <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
            <div className="flex items-center gap-2 text-purple-400 font-semibold text-xs pb-1 border-b border-white/[0.04]">
              <Moon size={14} />
              <span>Evening Phase</span>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <div>
                <label className="block text-[11px] text-paper-muted mb-1">Phase Title</label>
                <input
                  type="text"
                  value={draftTimetable.evening.title}
                  onChange={(e) =>
                    setDraftTimetable((prev) => ({
                      ...prev,
                      evening: { ...prev.evening, title: e.target.value },
                    }))
                  }
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-2.5 py-1.5 text-xs text-paper-ink focus:outline-none focus:border-accent"
                  placeholder="e.g. Evening Wind-Down"
                  required
                />
              </div>
              <div>
                <label className="block text-[11px] text-paper-muted mb-1">Time Range</label>
                <input
                  type="text"
                  value={draftTimetable.evening.timeRange}
                  onChange={(e) =>
                    setDraftTimetable((prev) => ({
                      ...prev,
                      evening: { ...prev.evening, timeRange: e.target.value },
                    }))
                  }
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-2.5 py-1.5 text-xs text-paper-ink focus:outline-none focus:border-accent font-mono"
                  placeholder="e.g. 17:00 – 22:30"
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
            <button
              type="button"
              onClick={handleResetTimetableToDefault}
              className="text-[11px] text-paper-muted hover:text-white flex items-center gap-1 transition-colors"
            >
              <RotateCw size={11} />
              <span>Reset Defaults</span>
            </button>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" type="button" onClick={() => setIsTimetableModalOpen(false)}>
                Cancel
              </Button>
              <Button variant="starlight" size="sm" type="submit">
                Save Timetable
              </Button>
            </div>
          </div>
        </form>
      </Modal>

      {/* ======================================================== */}
      {/* MODAL 2: QUICK ADD HABIT                                 */}
      {/* ======================================================== */}
      <Modal
        isOpen={isAddHabitModalOpen}
        onClose={() => setIsAddHabitModalOpen(false)}
        title="Add New Daily Habit"
        subtitle="Forge a regular discipline for your cosmic companion."
      >
        <form onSubmit={handleCreateHabit} className="space-y-4">
          <div>
            <label className="block text-xs font-sans text-starlight-lavender mb-1 font-medium">
              Habit Title
            </label>
            <input
              type="text"
              required
              value={newHabitTitle}
              onChange={(e) => setNewHabitTitle(e.target.value)}
              placeholder="e.g. Morning Cold Shower, Read 15 mins..."
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-2 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent"
              autoFocus
            />
          </div>

          <div>
            <label className="block text-xs font-sans text-starlight-lavender mb-1 font-medium">
              Domain / Category
            </label>
            <div className="grid grid-cols-3 gap-2 text-xs">
              {(['craft', 'body', 'mind', 'discipline', 'spirit'] as const).map((cat) => (
                <button
                  type="button"
                  key={cat}
                  onClick={() => setNewHabitCategory(cat)}
                  className={`py-1.5 px-2 rounded-xl capitalize font-sans transition-all border ${
                    newHabitCategory === cat
                      ? 'bg-accent/20 border-accent text-white font-medium shadow-sm'
                      : 'bg-white/[0.02] border-white/[0.06] text-paper-secondary hover:text-paper-ink'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2 border-t border-white/[0.06]">
            <Button variant="ghost" size="sm" type="button" onClick={() => setIsAddHabitModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="starlight" size="sm" type="submit">
              Save Habit
            </Button>
          </div>
        </form>
      </Modal>

      {/* ======================================================== */}
      {/* MODAL 3: ATMOSPHERE & WALLPAPER STUDIO                   */}
      {/* ======================================================== */}
      <Modal
        isOpen={isThemeModalOpen}
        onClose={() => setIsThemeModalOpen(false)}
        title="Atmosphere & Wallpaper Studio"
        subtitle="Curated organic sculptural wallpapers, celestial lighting & clock typography."
        maxWidth="max-w-2xl"
      >
        <div className="p-5 space-y-4 text-xs font-sans">
          {/* Category Filter Tabs */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-starlight-lavender/80 font-semibold">
                Collections & Disciplines
              </span>
              <span className="text-[10px] font-mono text-paper-muted">
                {filteredThemes.length} of {themesList.length} atmospheres
              </span>
            </div>
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/[0.06] overflow-x-auto">
              {[
                { id: 'all', label: 'All', count: themesList.length },
                { id: 'waves', label: '🌊 Sculptural Waves', count: themesList.filter((t) => t.category === 'waves').length },
                { id: 'celestial', label: '🌌 Celestial Orbits', count: themesList.filter((t) => t.category === 'celestial').length },
                { id: 'minimal', label: '⚡ Minimal Studio', count: themesList.filter((t) => t.category === 'minimal').length },
              ].map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    sound.tick();
                    setSelectedThemeCategory(cat.id as ThemeCategory);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-sans transition-all whitespace-nowrap ${
                    selectedThemeCategory === cat.id
                      ? 'bg-accent text-white font-medium shadow-cosmic-glow'
                      : 'text-paper-secondary hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] font-mono px-1 rounded ${
                      selectedThemeCategory === cat.id
                        ? 'bg-white/20 text-white'
                        : 'bg-white/5 text-paper-muted'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Wallpapers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[300px] overflow-y-auto pr-1">
            {filteredThemes.map((t) => {
              const isSelected = wallpaperTheme === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => {
                    sound.complete();
                    updateSettings({ wallpaperTheme: t.id });
                  }}
                  className={`group relative flex flex-col p-3 rounded-xl border text-left transition-all overflow-hidden ${
                    isSelected
                      ? 'bg-accent/15 border-accent shadow-cosmic-glow'
                      : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.15]'
                  }`}
                >
                  {/* Top Swatch Gradient Line */}
                  <div
                    className={`h-1.5 w-full rounded-full bg-gradient-to-r ${t.swatchGradient} mb-2.5 group-hover:scale-[1.01] transition-transform`}
                  />

                  <div className="flex items-center justify-between w-full mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-base shrink-0">{t.icon}</span>
                      <span className="font-heading font-medium text-xs text-white tracking-tight">
                        {t.label}
                      </span>
                    </div>
                    {isSelected ? (
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-accent text-white text-[10px] font-mono shrink-0">
                        <Check size={10} /> Active
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono text-paper-muted uppercase tracking-wider shrink-0">
                        {t.categoryLabel}
                      </span>
                    )}
                  </div>

                  <p className="text-[11px] text-paper-secondary font-sans leading-relaxed line-clamp-2 mt-0.5">
                    {t.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Clock Typography Selection */}
          <div className="pt-3 border-t border-white/[0.08]">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5 text-starlight-lavender font-sans font-semibold uppercase tracking-[0.14em] text-[10px]">
                <Type size={12} className="text-accent" />
                <span>Clock Typography & Style</span>
              </div>
              <span className="text-[10px] font-mono text-paper-muted">
                Synchronized HUD time display
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {clockStylesList.map((cs) => (
                <button
                  key={cs.id}
                  type="button"
                  onClick={() => {
                    sound.tick();
                    updateSettings({ clockStyle: cs.id });
                  }}
                  className={`p-2 rounded-xl text-center border text-xs font-sans transition-all ${
                    clockStyle === cs.id
                      ? 'bg-accent/20 border-accent text-white font-medium shadow-cosmic-glow'
                      : 'bg-white/[0.02] border-white/[0.06] text-paper-secondary hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  <span className="text-sm block mb-0.5">{cs.icon}</span>
                  <span className="block text-[11px] leading-tight">{cs.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleSound}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] text-[11px] text-paper-secondary hover:text-white transition-colors"
              >
                {settings.soundEffects ? (
                  <>
                    <Volume2 size={12} className="text-accent" />
                    <span>Audio Feedback: On</span>
                  </>
                ) : (
                  <>
                    <VolumeX size={12} />
                    <span>Audio Feedback: Muted</span>
                  </>
                )}
              </button>
            </div>
            <Button
              variant="starlight"
              size="sm"
              type="button"
              onClick={() => {
                sound.complete();
                setIsThemeModalOpen(false);
              }}
            >
              Done & Return
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
