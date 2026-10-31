import React, { useState, useEffect, useRef } from 'react';
import {
  Clock,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
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
} from 'lucide-react';
import { NavView, Habit, WallpaperTheme, ClockStyle } from '../types';
import { useData } from '../context/DataContext';
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
    addHabit,
    addDailyTask,
    toggleDailyTask,
    deleteDailyTask,
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

  // 1. Live wall clock broken down into refined typographical segments
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

  // 2. Personalization
  const [isEditingName, setIsEditingName] = useState(false);
  const [ownerName, setOwnerName] = useState(settings.journalOwnerName || 'Me');
  const [isEditingReminder, setIsEditingReminder] = useState(false);
  const [reminderText, setReminderText] = useState(
    settings.personalReminder || 'Remember, you are here for you.'
  );

  const hour = new Date().getHours();
  const timeGreeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';

  // 3. Tasks for the Day state
  const [newTaskText, setNewTaskText] = useState('');
  const dailyTasks = currentLog?.dailyTasks || [];
  const completedTasksCount = dailyTasks.filter((t) => t.completed).length;

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;
    addDailyTask(newTaskText, selectedDate);
    setNewTaskText('');
  };

  // 4. Quick Habit Addition state
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

  // 5. Deep Study Timer helpers
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

  // 6. Wallpaper Customization Menu (Themes & Clock Styles)
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const themeMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (themeMenuRef.current && !themeMenuRef.current.contains(e.target as Node)) {
        setIsThemeMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const wallpaperTheme = settings.wallpaperTheme || 'deep-nebula';
  const clockStyle = settings.clockStyle || 'cinematic-clean';

  const themesList: { id: WallpaperTheme; label: string; icon: string; desc: string }[] = [
    { id: 'deep-nebula', label: 'Deep Nebula', icon: '🌌', desc: 'Cosmic violet, moving dust & meteors' },
    { id: 'earth-horizon', label: 'Earth Horizon', icon: '🌍', desc: 'Orbital dawn cyan & sapphire atmosphere' },
    { id: 'cyber-obsidian', label: 'Cyber Obsidian', icon: '⚡', desc: 'Pure void black & precision diamond stars' },
    { id: 'constellation', label: 'Star Map', icon: '🧭', desc: 'Connected celestial asterisms & star grid' },
  ];

  const clockStylesList: { id: ClockStyle; label: string; icon: string }[] = [
    { id: 'cinematic-clean', label: 'Cinematic Clean', icon: '⏱️' },
    { id: 'editorial-serif', label: 'Editorial Serif', icon: '📜' },
    { id: 'minimal-split', label: 'Minimal Split', icon: '🏛️' },
  ];

  return (
    <div className="relative w-full min-h-screen pt-12 md:pt-14 pb-8 md:pb-10 px-8 md:px-12 flex flex-col justify-between select-none animate-fadeIn">
      {/* 1. FLOATING TOP UTILITY BAR */}
      <header className="flex items-center justify-between gap-4 z-20 pr-2 md:pr-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-accent/20 border border-accent/35 flex items-center justify-center text-starlight-lavender font-heading font-bold text-xs shadow-cosmic-glow">
            FM
          </div>
          <span className="text-xs font-sans uppercase tracking-[0.2em] text-starlight-lavender/80 font-semibold hidden sm:inline">
            Cosmic Desktop HUD
          </span>
        </div>

        {/* Center Pill: Current Full Date */}
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] text-xs font-sans text-paper-secondary shadow-sm">
          <Sparkles size={12} className="text-accent" />
          <span className="tracking-tight">{currentDateString}</span>
        </div>

        {/* Right Actions: Customize Theme, Sound & Full App */}
        <div className="flex items-center gap-2.5">
          {/* Customizer Dropdown */}
          <div className="relative" ref={themeMenuRef}>
            <button
              onClick={() => {
                sound.tick();
                setIsThemeMenuOpen(!isThemeMenuOpen);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-accent/40 text-xs font-sans font-medium text-starlight-lavender hover:text-white transition-all shadow-sm"
              title="Customize Wallpaper Atmosphere & Clock"
            >
              <Palette size={13} className="text-accent" />
              <span className="hidden sm:inline">Customize</span>
              <ChevronDown size={11} className={`text-paper-muted transition-transform ${isThemeMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {isThemeMenuOpen && (
              <div className="absolute right-0 mt-2 w-72 rounded-2xl bg-cosmic-surface/95 backdrop-blur-3xl border border-white/[0.12] shadow-modal p-3 z-50 text-xs space-y-3.5">
                {/* Atmosphere Selection */}
                <div>
                  <div className="flex items-center gap-1.5 pb-2 border-b border-white/[0.06] text-starlight-lavender font-sans font-semibold uppercase tracking-[0.14em] text-[10px]">
                    <Layers size={12} className="text-accent" />
                    <span>Atmosphere Theme</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 pt-2">
                    {themesList.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => {
                          sound.tick();
                          updateSettings({ wallpaperTheme: t.id });
                        }}
                        className={`p-2 rounded-xl text-left border transition-all ${
                          wallpaperTheme === t.id
                            ? 'bg-accent/20 border-accent/60 text-white shadow-cosmic-glow'
                            : 'bg-white/[0.02] border-white/[0.06] text-paper-secondary hover:bg-white/[0.06] hover:text-white'
                        }`}
                      >
                        <span className="text-sm block">{t.icon}</span>
                        <span className="font-medium font-sans text-xs block leading-tight mt-0.5">{t.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Clock Typography Selection */}
                <div>
                  <div className="flex items-center gap-1.5 pb-2 border-b border-white/[0.06] text-starlight-lavender font-sans font-semibold uppercase tracking-[0.14em] text-[10px]">
                    <Type size={12} className="text-accent" />
                    <span>Clock Typography</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1 pt-2">
                    {clockStylesList.map((cs) => (
                      <button
                        key={cs.id}
                        onClick={() => {
                          sound.tick();
                          updateSettings({ clockStyle: cs.id });
                        }}
                        className={`p-1.5 rounded-xl text-center border text-[11px] font-sans transition-all ${
                          clockStyle === cs.id
                            ? 'bg-accent/20 border-accent/60 text-white font-medium shadow-cosmic-glow'
                            : 'bg-white/[0.02] border-white/[0.06] text-paper-muted hover:text-white hover:bg-white/[0.06]'
                        }`}
                      >
                        <span>{cs.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={toggleSound}
            className="p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] text-paper-muted hover:text-paper-ink transition-colors"
            title={settings.soundEffects ? 'Sound active (Click to mute)' : 'Sound muted'}
          >
            {settings.soundEffects ? <Volume2 size={14} className="text-accent" /> : <VolumeX size={14} />}
          </button>

          <button
            onClick={() => onNavigate('dashboard')}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-sans font-medium text-starlight-lavender hover:text-white transition-all shadow-sm"
            title="Open Full Journal & Observatory Workspace"
          >
            <BookOpen size={13} />
            <span className="hidden sm:inline">Open Full App</span>
          </button>
        </div>
      </header>

      {/* 2. REFINED MAJESTIC CENTER CLOCK & PERSONAL GREETING */}
      <section className="text-center my-6 md:my-8 space-y-2.5 z-10">
        {/* Dynamic Typography Clock */}
        {clockStyle === 'editorial-serif' ? (
          <div className="flex items-baseline justify-center gap-3 drop-shadow-md">
            <span className="font-editorial italic font-light tracking-wide text-7xl md:text-9xl text-paper-ink">
              {timeParts.hoursMinutes}
            </span>
            <div className="flex flex-col text-left select-none">
              <span className="font-mono text-xs md:text-sm text-starlight-lavender font-medium tracking-widest">
                :{timeParts.seconds}
              </span>
              <span className="font-sans text-[10px] md:text-xs text-paper-muted uppercase tracking-[0.2em]">
                {timeParts.ampm}
              </span>
            </div>
          </div>
        ) : clockStyle === 'minimal-split' ? (
          <div className="flex items-baseline justify-center gap-2 drop-shadow-md font-mono tracking-widest text-6xl md:text-8xl font-light">
            <span className="text-paper-ink">{timeParts.hoursMinutes.split(':')[0]}</span>
            <span className="text-accent/60">:</span>
            <span className="text-starlight-lavender">{timeParts.hoursMinutes.split(':')[1]}</span>
            <span className="text-sm md:text-base text-paper-muted ml-2 font-sans font-normal tracking-normal">
              {timeParts.ampm}
            </span>
          </div>
        ) : (
          /* cinematic-clean (default) */
          <div className="flex items-baseline justify-center gap-3 drop-shadow-md">
            <span className="font-display font-extralight tracking-tight text-7xl md:text-9xl text-paper-ink">
              {timeParts.hoursMinutes}
            </span>
            <div className="flex flex-col text-left select-none">
              <span className="font-mono text-sm md:text-base text-starlight-lavender font-medium tracking-wider">
                :{timeParts.seconds}
              </span>
              <span className="font-sans text-[10px] md:text-xs text-paper-muted font-semibold tracking-[0.2em] uppercase">
                {timeParts.ampm}
              </span>
            </div>
          </div>
        )}

        {/* Dynamic Personal Greeting & Philosophy Motto */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm font-sans text-paper-secondary">
          <span className="text-base md:text-lg font-heading font-medium text-paper-ink">
            {timeGreeting},
          </span>

          {isEditingName ? (
            <div className="inline-flex items-center gap-2">
              <input
                type="text"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSaveName()}
                className="border-b border-accent bg-transparent text-base md:text-lg font-heading font-semibold text-starlight-lavender px-1 focus:outline-none"
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
              className="text-base md:text-lg font-heading font-semibold text-starlight-lavender cursor-pointer hover:underline decoration-accent/60 underline-offset-4 transition-all"
              title="Click to edit name"
            >
              {settings.journalOwnerName || 'Me'}.
            </span>
          )}

          <span className="text-paper-muted hidden sm:inline">•</span>

          {isEditingReminder ? (
            <div className="inline-flex items-center gap-2">
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

      {/* 3. SLEEK ULTRA-TRANSLUCENT FROSTED GLASS WIDGETS */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl w-full mx-auto z-10 flex-1 items-stretch">
        {/* ======================================================== */}
        {/* LEFT COLUMN: TASKS FOR THE DAY                           */}
        {/* ======================================================== */}
        <div className="p-6 rounded-[1.75rem] bg-white/[0.015] hover:bg-white/[0.025] backdrop-blur-3xl border border-white/[0.06] border-t-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.37)] flex flex-col justify-between space-y-4 transition-all duration-300 hover:border-white/[0.12]">
          <div className="space-y-3 flex-1 flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.05]">
              <div className="flex items-center gap-2">
                <CheckSquare size={15} className="text-starlight-lavender" />
                <h3 className="text-xs font-sans uppercase tracking-[0.16em] text-starlight-lavender font-semibold">
                  Tasks for the Day
                </h3>
              </div>
              <Badge variant={completedTasksCount === dailyTasks.length && dailyTasks.length > 0 ? 'success' : 'starlight'}>
                {completedTasksCount} / {dailyTasks.length} done
              </Badge>
            </div>

            {/* Quick Task Input Field */}
            <form onSubmit={handleAddTask} className="flex items-center gap-2">
              <input
                type="text"
                value={newTaskText}
                onChange={(e) => setNewTaskText(e.target.value)}
                placeholder="Add task for today (Press Enter)..."
                className="flex-1 bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] focus:border-accent rounded-xl px-3 py-2 text-xs text-paper-ink font-sans placeholder:text-paper-muted/50 focus:outline-none transition-colors"
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
            <div className="flex-1 space-y-1.5 max-h-60 overflow-y-auto pr-1">
              {dailyTasks.length > 0 ? (
                dailyTasks.map((task) => (
                  <div
                    key={task.id}
                    className={`p-2.5 rounded-xl border transition-all flex items-center justify-between text-xs select-none group ${
                      task.completed
                        ? 'bg-emerald-500/[0.06] border-emerald-500/20 text-paper-muted'
                        : 'bg-white/[0.015] hover:bg-white/[0.05] border-white/[0.05] text-paper-ink'
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
                            : 'border-white/[0.2] group-hover:border-accent'
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
                  <p className="text-[11px] text-paper-muted/60">
                    Add your key priorities above to direct your focus.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Task Completion Bar */}
          <div className="pt-3 border-t border-white/[0.05] space-y-1.5">
            <div className="flex items-center justify-between text-[11px] text-paper-muted">
              <span>Day Progress</span>
              <span>
                {dailyTasks.length > 0
                  ? `${Math.round((completedTasksCount / dailyTasks.length) * 100)}%`
                  : '0%'}
              </span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/[0.04] overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-accent to-emerald-400 transition-all duration-300"
                style={{
                  width: dailyTasks.length > 0 ? `${(completedTasksCount / dailyTasks.length) * 100}%` : '0%',
                }}
              />
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* CENTER COLUMN: DAILY RHYTHM PULSE                        */}
        {/* ======================================================== */}
        <div className="p-6 rounded-[1.75rem] bg-white/[0.015] hover:bg-white/[0.025] backdrop-blur-3xl border border-white/[0.06] border-t-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.37)] flex flex-col justify-between space-y-4 transition-all duration-300 hover:border-white/[0.12]">
          <div className="space-y-3 flex-1 flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.05]">
              <div className="flex items-center gap-2">
                <Flame size={15} className="text-starlight-lavender" />
                <h3 className="text-xs font-sans uppercase tracking-[0.16em] text-starlight-lavender font-semibold">
                  Daily Rhythm Pulse
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={habitsDoneCount === activeHabits.length && activeHabits.length > 0 ? 'success' : 'starlight'}>
                  {habitsDoneCount} / {activeHabits.length} kept
                </Badge>
                <button
                  onClick={() => setIsAddHabitModalOpen(true)}
                  className="p-1 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-paper-muted hover:text-paper-ink border border-white/[0.06] transition-colors"
                  title="Add New Habit"
                >
                  <Plus size={13} />
                </button>
              </div>
            </div>

            {/* Habit Grid */}
            <div className="flex-1 space-y-1.5 max-h-60 overflow-y-auto pr-1">
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
                          ? 'bg-emerald-500/[0.08] border-emerald-500/25 text-paper-ink'
                          : 'bg-white/[0.015] hover:bg-white/[0.05] border-white/[0.05] text-paper-secondary hover:text-paper-ink'
                      }`}
                    >
                      <div className="truncate pr-2">
                        <span className={`font-medium ${isDone ? 'line-through text-paper-muted' : ''}`}>
                          {habit.title}
                        </span>
                        <span className="text-[10px] text-paper-muted block">
                          {habit.streak > 0 ? `🔥 ${habit.streak} day streak` : 'Ready today'}
                        </span>
                      </div>

                      <div
                        className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 border transition-all ${
                          isDone
                            ? 'bg-emerald-500 border-emerald-400 text-white shadow-sm'
                            : 'border-white/[0.2]'
                        }`}
                      >
                        {isDone && <Check size={11} strokeWidth={3} />}
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-xs text-paper-muted text-center py-4">
                  No active habits. Add habits using the + button above.
                </p>
              )}
            </div>
          </div>

          {/* Quick Journal Trigger */}
          <div className="pt-3 border-t border-white/[0.05]">
            <button
              onClick={() => onNavigate('daily-tracker')}
              className="w-full py-2 px-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] text-xs font-sans text-starlight-lavender flex items-center justify-between transition-colors"
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
        {/* RIGHT COLUMN: DEEP STUDY STOPWATCH CONSOLE               */}
        {/* ======================================================== */}
        <div className="p-6 rounded-[1.75rem] bg-white/[0.015] hover:bg-white/[0.025] backdrop-blur-3xl border border-white/[0.06] border-t-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.37)] flex flex-col justify-between space-y-4 transition-all duration-300 hover:border-white/[0.12]">
          <div className="space-y-3 flex-1 flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.05]">
              <div className="flex items-center gap-2">
                <Clock size={15} className="text-starlight-lavender" />
                <h3 className="text-xs font-sans uppercase tracking-[0.16em] text-starlight-lavender font-semibold">
                  Deep Study Console
                </h3>
              </div>
              <Badge variant={studyTimer.isRunning ? 'accent' : 'neutral'}>
                {studyTimer.isRunning ? 'ACTIVE FOCUS' : 'STOPPED'}
              </Badge>
            </div>

            {/* Stopwatch Time Display */}
            <div className="text-center py-3 my-auto">
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
                className="bg-white/[0.02] border border-white/[0.06] rounded-xl px-2.5 py-1.5 text-xs text-paper-ink font-sans focus:outline-none focus:border-accent"
              />
              <input
                type="text"
                value={studyTimer.topic}
                onChange={(e) => updateStudyTimerMeta(studyTimer.subject, e.target.value)}
                placeholder="Topic (e.g. Design)"
                className="bg-white/[0.02] border border-white/[0.06] rounded-xl px-2.5 py-1.5 text-xs text-paper-ink font-sans focus:outline-none focus:border-accent"
              />
            </div>
          </div>

          {/* Stopwatch Controls */}
          <div className="pt-3 border-t border-white/[0.05] space-y-2">
            <div className="flex gap-2">
              {studyTimer.isRunning ? (
                <button
                  onClick={pauseStudyTimer}
                  className="flex-1 py-2 px-3 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/35 text-xs font-sans font-medium flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  <Pause size={14} />
                  <span>Pause Timer</span>
                </button>
              ) : (
                <button
                  onClick={() => startStudyTimer(studyTimer.subject, studyTimer.topic)}
                  className="flex-1 py-2 px-3 rounded-xl bg-accent hover:bg-accent-hover text-white text-xs font-sans font-medium flex items-center justify-center gap-1.5 shadow-cosmic-glow transition-all"
                >
                  <Play size={14} />
                  <span>Start Focus</span>
                </button>
              )}

              <button
                onClick={resetStudyTimer}
                disabled={studyTimerElapsed === 0}
                className="p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] text-paper-muted hover:text-paper-ink border border-white/[0.06] disabled:opacity-30 disabled:pointer-events-none transition-colors"
                title="Reset stopwatch"
              >
                <RotateCcw size={14} />
              </button>
            </div>

            {studyTimerElapsed >= 60 && (
              <button
                onClick={handleSaveStudySession}
                className="w-full py-1.5 px-3 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/35 text-xs font-sans font-medium flex items-center justify-center gap-1.5 transition-all"
              >
                <CheckCircle2 size={13} />
                <span>Log to Journal ({Math.round(studyTimerElapsed / 60)}m)</span>
              </button>
            )}

            {/* Weekly Target Mini Bar */}
            <div className="flex items-center justify-between text-[10px] text-paper-muted pt-0.5">
              <span>Weekly: {weeklyStudyHoursLogged.toFixed(1)}h / {settings.weeklyStudyTargetHours || 15}h</span>
              <span>
                {Math.min(100, Math.round((weeklyStudyHoursLogged / (settings.weeklyStudyTargetHours || 15)) * 100))}% quota
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BOTTOM FLOATING BIOMETRICS DOCK (Centered Island Pill) */}
      <footer className="mt-6 md:mt-8 mx-auto flex items-center justify-between gap-6 z-10 px-6 py-2.5 rounded-full bg-white/[0.02] backdrop-blur-2xl border border-white/[0.06] border-t-white/[0.12] text-xs font-sans text-paper-secondary shadow-sm">
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
            className="w-4 h-4 rounded-md bg-white/[0.05] hover:bg-white/[0.12] border border-white/[0.08] flex items-center justify-center text-[10px] text-paper-ink transition-colors"
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
            className="w-4 h-4 rounded-md bg-white/[0.05] hover:bg-white/[0.12] border border-white/[0.08] flex items-center justify-center text-[10px] text-paper-ink transition-colors"
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

      {/* QUICK ADD HABIT MODAL */}
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
    </div>
  );
};
