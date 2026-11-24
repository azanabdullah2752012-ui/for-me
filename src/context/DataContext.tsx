import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { soundEngine, SoundscapeId, SOUNDSCAPE_PRESETS } from '../services/soundEngine';
import { mediaSessionService } from '../services/mediaSessionService';
import { notificationService } from '../services/notificationService';
import { 
  YouTubeItem, 
  parseYouTubeUrl, 
  getYouTubeThumbnail, 
  CURATED_YOUTUBE_STREAMS 
} from '../services/youtubeAudioService';
import { 
  DailyTask,
  HabitItem, 
  StudySession,
  StudySubject,
  RoutineBlock,
  CustomRoutinePreset,
  NotificationSettings,
  HUDNotification,
  UserProfile,
  WallpaperTheme,
  WallpaperSettings,
  AppTheme,
  PomodoroPhase,
  PomodoroSettings,
} from '../types';

interface DataContextType {
  // Profile
  profile: UserProfile;
  setProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
  updateProfile: (updates: Partial<UserProfile>) => void;

  // App Theme (Light vs Dark)
  appTheme: AppTheme;
  setAppTheme: (theme: AppTheme) => void;
  toggleAppTheme: () => void;

  // Zen & Ambient Display
  isHUDHidden: boolean;
  setIsHUDHidden: (hidden: boolean) => void;
  toggleHUDHidden: () => void;

  // Tasks for the Day
  tasks: DailyTask[];
  toggleTask: (id: string) => void;
  addTask: (text: string) => void;
  deleteTask: (id: string) => void;

  // Wallpaper Theme & Dynamic Customization Studio
  wallpaperTheme: WallpaperTheme;
  setWallpaperTheme: (theme: WallpaperTheme) => void;
  wallpaperSettings: WallpaperSettings;
  updateWallpaperSettings: (updates: Partial<WallpaperSettings>) => void;
  resetWallpaperSettings: () => void;

  // Habits & Rhythm
  habits: HabitItem[];
  toggleHabit: (id: string) => void;
  addHabit: (name: string) => void;
  deleteHabit: (id: string) => void;

  // Routine Protocols & Live Timeline
  routines: RoutineBlock[];
  addRoutineBlock: (block: Omit<RoutineBlock, 'id'>) => void;
  updateRoutineBlock: (id: string, updates: Partial<RoutineBlock>) => void;
  deleteRoutineBlock: (id: string) => void;
  resetRoutines: () => void;
  loadRoutinePreset: (presetKey: string) => void;
  customPresets: CustomRoutinePreset[];
  saveCurrentAsPreset: (label: string, description?: string) => void;
  deleteCustomPreset: (id: string) => void;
  loadCustomPreset: (id: string) => void;
  activeRoutineBlock: RoutineBlock | null;
  activeRoutineMinutesLeft: number;
  nextRoutineBlock: RoutineBlock | null;
  nextRoutineMinutesUntil: number;

  // Study & Deep Focus Stopwatch
  studySeconds: number;
  isStudyActive: boolean;
  studySubject: string;
  setStudySubject: (subj: string) => void;
  studySubjects: StudySubject[];
  addStudySubject: (name: string, color?: string) => void;
  deleteStudySubject: (id: string) => void;
  dailyStudyTargetHours: number;
  setDailyStudyTargetHours: (hours: number) => void;
  toggleStudyTimer: () => void;
  resetStudyTimer: () => void;
  studySessions: StudySession[];
  logManualStudyTime: (minutes: number, subject?: string, mode?: string) => void;
  deleteStudySession: (id: string) => void;

  // Pomodoro Focus Countdown Engine
  pomodoroPhase: PomodoroPhase;
  pomodoroSecondsLeft: number;
  pomodoroTotalSeconds: number;
  pomodoroSettings: PomodoroSettings;
  setPomodoroSettings: React.Dispatch<React.SetStateAction<PomodoroSettings>>;
  startPomodoro: (customDurationMinutes?: number) => void;
  pausePomodoro: () => void;
  resumePomodoro: () => void;
  togglePomodoro: () => void;
  resetPomodoro: () => void;
  skipPomodoroPhase: () => void;
  togglePomodoroDisplayMode: () => void;

  // Biometrics & Health
  hydration: number;
  setHydration: React.Dispatch<React.SetStateAction<number>>;
  sleepHours: number;
  setSleep: (h: number, m?: number) => void;
  dailyRating: number;
  setDailyRating: (rating: number) => void;

  // Daily Midnight Rollover & Manual Day Reset
  lastActiveDate: string;
  resetDayProgress: () => void;
  factoryReset: () => void;

  // Audio Sanctuary (Web Audio & YouTube)
  audioSource: 'ambient' | 'youtube';
  setAudioSource: (src: 'ambient' | 'youtube') => void;
  isAudioPlaying: boolean;
  activeSoundscapeId: SoundscapeId;
  audioVolume: number;
  isAudioMuted: boolean;
  playSoundscape: (id?: SoundscapeId) => void;
  stopSoundscape: () => void;
  setAudioVolume: (vol: number) => void;
  toggleAudioMute: () => void;

  // YouTube Audio Engine
  isYouTubePlaying: boolean;
  setYouTubeIsPlaying: (p: boolean) => void;
  isYouTubePlayerReady: boolean;
  setYouTubePlayerReady: (r: boolean) => void;
  activeYouTubeItem: YouTubeItem | null;
  youtubeVolume: number;
  isYouTubeMuted: boolean;
  savedYouTubeItems: YouTubeItem[];
  showYouTubePreview: boolean;
  setShowYouTubePreview: (s: boolean) => void;
  playYouTubeItem: (item: YouTubeItem) => void;
  toggleYouTubePlay: () => void;
  stopYouTube: () => void;
  nextYouTubeTrack: () => void;
  prevYouTubeTrack: () => void;
  setYouTubeVolume: (vol: number) => void;
  toggleYouTubeMute: () => void;
  addYouTubeToLibrary: (url: string, customTitle?: string) => { success: boolean; item?: YouTubeItem; error?: string };
  removeYouTubeFromLibrary: (id: string) => void;

  // Reminders & Notifications
  notificationSettings: NotificationSettings;
  updateNotificationSettings: (updates: Partial<NotificationSettings>) => void;
  requestNotificationPermission: () => Promise<boolean>;
  activeHUDNotification: HUDNotification | null;
  dismissHUDNotification: () => void;
  triggerTestNotification: () => void;

  // Battery Saver / Eco Sleep
  isEcoSleeping: boolean;
  setIsEcoSleeping: (sleeping: boolean) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const DEFAULT_WALLPAPER_SETTINGS: WallpaperSettings = {
  palette: 'cosmic-royal',
  speed: 'balanced',
  amplitude: 'majestic',
  waveGeometry: 'dunes',
  waveLayerDensity: 'deep',
  horizonHeight: 'balanced',
  waveStrokeOpacity: 0.5,
  interactiveParallax: true,
  celestialBody: 'crescent-moon',
  celestialPosition: 'default',
  celestialScaleMultiplier: 1.0,
  rotationSpeed: 'standard',
  showNebulaDust: true,
  nebulaIntensity: 'vivid',
  showConstellations: true,
  showComet: true,
  shootingStarMode: 'occasional',
  showStars: true,
  starDensity: 'balanced',
  showCrossStars: false,
  showOrbitalTrack: false,
  showMeridian: false,
  clockFontStyle: 'tabular',
  clockSize: 'standard',
  clockPosition: 'center',
  clockDivider: 'colon',
  clockColor: 'palette',
  clockFormat: '12h',
  showSeconds: true,
  showDate: true,
  showGreeting: true,
  clockHalo: 'pulsar',
  ecoSleepMinutes: 7.5,
};

const DEFAULT_PROFILE: UserProfile = {
  name: 'Azan',
  motto: 'Remember, you are here for you.',
  defaultFocusTopic: 'Engineering',
  defaultFocusMode: 'Deep Work',
};

const DEFAULT_STUDY_SUBJECTS: StudySubject[] = [
  { id: 'subj_eng', name: 'Engineering', color: '#8b5cf6' },
  { id: 'subj_math', name: 'Mathematics', color: '#06b6d4' },
  { id: 'subj_code', name: 'Coding', color: '#10b981' },
  { id: 'subj_read', name: 'Reading', color: '#f59e0b' },
  { id: 'subj_deep', name: 'Deep Work', color: '#f43f5e' },
];

const DEFAULT_POMODORO_SETTINGS: PomodoroSettings = {
  focusDurationMinutes: 25,
  breakDurationMinutes: 5,
  displayMode: 'telemetry',
  autoStartBreaks: true,
  soundEnabled: true,
};

const DEFAULT_NOTIFICATION_SETTINGS: NotificationSettings = {
  enabled: true,
  soundEnabled: true,
  blockStartReminders: true,
  blockEndReminders: true,
};

export const parseHourFromStr = (str: string, fallback: number): number => {
  if (!str) return fallback;
  const match = str.trim().match(/(\d+)(?::(\d+))?\s*(am|pm)?/i);
  if (!match) return fallback;
  let h = parseInt(match[1], 10);
  const m = match[2] ? parseInt(match[2], 10) : 0;
  const ampm = match[3]?.toLowerCase();
  if (ampm === 'pm' && h < 12) h += 12;
  if (ampm === 'am' && h === 12) h = 0;
  return Math.min(24, Math.max(0, h + m / 60));
};

export const formatHourToTimeStr = (decimalHour: number): string => {
  const clamped = Math.min(24, Math.max(0, decimalHour));
  const h = Math.floor(clamped);
  const m = Math.round((clamped - h) * 60);
  const finalH = h === 24 ? 0 : h;
  return `${finalH.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
};

export const parseDecimalHourFromTimeStr = (timeStr: string, fallback = 0): number => {
  if (!timeStr) return fallback;
  const [hStr, mStr] = timeStr.split(':');
  const h = parseInt(hStr, 10);
  const m = mStr ? parseInt(mStr, 10) : 0;
  if (isNaN(h)) return fallback;
  return Math.min(24, Math.max(0, h + (isNaN(m) ? 0 : m / 60)));
};

export const ROUTINE_PRESETS: Record<string, { label: string; description: string; blocks: Omit<RoutineBlock, 'id'>[] }> = {
  deep_work: {
    label: 'Deep Focus Sprints',
    description: 'High-leverage engineering & creative focus blocks with structured recharge intervals',
    blocks: [
      {
        title: 'Morning Awakening & Light',
        startTime: '06:30',
        endTime: '08:30',
        timeRange: '06:30 – 08:30',
        startHour: 6.5,
        endHour: 8.5,
        category: 'morning',
        iconType: 'morning',
        colorTag: '#f59e0b',
        description: 'Hydration, sunlight, light mobility, cold shower, day architecture.',
      },
      {
        title: 'Deep Engineering Sprint 1',
        startTime: '08:30',
        endTime: '12:30',
        timeRange: '08:30 – 12:30',
        startHour: 8.5,
        endHour: 12.5,
        category: 'deep_work',
        iconType: 'afternoon',
        colorTag: '#8b5cf6',
        description: 'Hardest technical problem, core codebase architecture, zero context switching.',
      },
      {
        title: 'Midday Recharge & Nutrition',
        startTime: '12:30',
        endTime: '14:00',
        timeRange: '12:30 – 14:00',
        startHour: 12.5,
        endHour: 14.0,
        category: 'break',
        iconType: 'afternoon',
        colorTag: '#10b981',
        description: 'Nutritious meal, screen-free walk in nature, cognitive recovery.',
      },
      {
        title: 'System Sprints & Synthesis',
        startTime: '14:00',
        endTime: '17:30',
        timeRange: '14:00 – 17:30',
        startHour: 14.0,
        endHour: 17.5,
        category: 'study',
        iconType: 'afternoon',
        colorTag: '#06b6d4',
        description: 'Feature implementation, unit tests, code reviews, technical writing.',
      },
      {
        title: 'Physical Training & Movement',
        startTime: '17:30',
        endTime: '19:00',
        timeRange: '17:30 – 19:00',
        startHour: 17.5,
        endHour: 19.0,
        category: 'fitness',
        iconType: 'evening',
        colorTag: '#f43f5e',
        description: 'Strength workout, cardio, sweat, nervous system discharge.',
      },
      {
        title: 'Evening Sunset & Restoration',
        startTime: '19:00',
        endTime: '22:30',
        timeRange: '19:00 – 22:30',
        startHour: 19.0,
        endHour: 22.5,
        category: 'evening',
        iconType: 'night',
        colorTag: '#a855f7',
        description: 'Dinner, reading paper books, dim amber lighting, 8h sleep prep.',
      },
    ],
  },
  student: {
    label: 'Academic & School Rhythm',
    description: 'Calibrated for classes, structured lecture blocks, homework, and active study revision',
    blocks: [
      {
        title: 'Morning Prep & Breakfast',
        startTime: '07:00',
        endTime: '08:30',
        timeRange: '07:00 – 08:30',
        startHour: 7.0,
        endHour: 8.5,
        category: 'morning',
        iconType: 'morning',
        colorTag: '#f59e0b',
        description: 'Wake-up, healthy fuel, review lecture goals, prepare study tools.',
      },
      {
        title: 'Lectures & Academic Classes',
        startTime: '08:30',
        endTime: '13:00',
        timeRange: '08:30 – 13:00',
        startHour: 8.5,
        endHour: 13.0,
        category: 'study',
        iconType: 'afternoon',
        colorTag: '#3b82f6',
        description: 'Active class listening, Cornell notes, key theorem annotations.',
      },
      {
        title: 'Lunch & Campus Break',
        startTime: '13:00',
        endTime: '14:30',
        timeRange: '13:00 – 14:30',
        startHour: 13.0,
        endHour: 14.5,
        category: 'break',
        iconType: 'afternoon',
        colorTag: '#10b981',
        description: 'Eat, socialize, rest eyes, clear mental fatigue.',
      },
      {
        title: 'Core Study & Problem Sets',
        startTime: '14:30',
        endTime: '18:00',
        timeRange: '14:30 – 18:00',
        startHour: 14.5,
        endHour: 18.0,
        category: 'deep_work',
        iconType: 'afternoon',
        colorTag: '#8b5cf6',
        description: 'Homework, textbook practice problems, code labs, project sprint.',
      },
      {
        title: 'Exercise & Outdoor Recreation',
        startTime: '18:00',
        endTime: '19:30',
        timeRange: '18:00 – 19:30',
        startHour: 18.0,
        endHour: 19.5,
        category: 'fitness',
        iconType: 'evening',
        colorTag: '#f43f5e',
        description: 'Gym, running, sports, or active outdoor walk.',
      },
      {
        title: 'Spaced Repetition & Revision',
        startTime: '19:30',
        endTime: '21:30',
        timeRange: '19:30 – 21:30',
        startHour: 19.5,
        endHour: 21.5,
        category: 'study',
        iconType: 'evening',
        colorTag: '#06b6d4',
        description: 'Anki flashcards, concept synthesis, exam prep summary notes.',
      },
      {
        title: 'Night Recovery & Sleep',
        startTime: '21:30',
        endTime: '23:00',
        timeRange: '21:30 – 23:00',
        startHour: 21.5,
        endHour: 23.0,
        category: 'evening',
        iconType: 'night',
        colorTag: '#6366f1',
        description: 'Pack backpack for tomorrow, unwind, cool bedroom environment.',
      },
    ],
  },
  balanced: {
    label: 'Balanced Daily Rhythm',
    description: 'Harmonious cadence of focused productivity, healthy breaks, fitness, and calm evenings',
    blocks: [
      {
        title: 'Sunrise Protocol',
        startTime: '07:00',
        endTime: '08:30',
        timeRange: '07:00 – 08:30',
        startHour: 7.0,
        endHour: 8.5,
        category: 'morning',
        iconType: 'morning',
        colorTag: '#f59e0b',
        description: 'Sunlight exposure, hydration, journaling, intentional morning start.',
      },
      {
        title: 'Focused Productivity Sprint',
        startTime: '08:30',
        endTime: '12:30',
        timeRange: '08:30 – 12:30',
        startHour: 8.5,
        endHour: 12.5,
        category: 'deep_work',
        iconType: 'afternoon',
        colorTag: '#8b5cf6',
        description: 'Prime cognitive peak hours dedicated to high-impact work.',
      },
      {
        title: 'Mindful Midday Pause',
        startTime: '12:30',
        endTime: '14:00',
        timeRange: '12:30 – 14:00',
        startHour: 12.5,
        endHour: 14.0,
        category: 'break',
        iconType: 'afternoon',
        colorTag: '#10b981',
        description: 'Wholesome lunch, fresh air, listening to music or an audio story.',
      },
      {
        title: 'Creative Execution & Projects',
        startTime: '14:00',
        endTime: '17:30',
        timeRange: '14:00 – 17:30',
        startHour: 14.0,
        endHour: 17.5,
        category: 'study',
        iconType: 'afternoon',
        colorTag: '#06b6d4',
        description: 'Creative building, collaborative syncs, writing, learning new skills.',
      },
      {
        title: 'Movement & Wellness',
        startTime: '17:30',
        endTime: '19:00',
        timeRange: '17:30 – 19:00',
        startHour: 17.5,
        endHour: 19.0,
        category: 'fitness',
        iconType: 'evening',
        colorTag: '#f43f5e',
        description: 'Physical movement, stretching, outdoor run or gym session.',
      },
      {
        title: 'Unwind & Evening Recovery',
        startTime: '19:00',
        endTime: '22:30',
        timeRange: '19:00 – 22:30',
        startHour: 19.0,
        endHour: 22.5,
        category: 'evening',
        iconType: 'night',
        colorTag: '#a855f7',
        description: 'Good dinner, leisure, gratitude reflection, restful sleep preparation.',
      },
    ],
  },
};

const DEFAULT_ROUTINES: RoutineBlock[] = ROUTINE_PRESETS.deep_work.blocks.map((b, i) => ({
  ...b,
  id: `routine_def_${i + 1}`,
}));

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Profile (Personalized for Azan)
  const [profile, setProfile] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem('for_me_profile');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.name === 'Viren') {
          return { ...DEFAULT_PROFILE, name: 'Azan' };
        }
        return { ...DEFAULT_PROFILE, ...parsed };
      }
      return DEFAULT_PROFILE;
    } catch {
      return DEFAULT_PROFILE;
    }
  });

  const updateProfile = (updates: Partial<UserProfile>) => {
    setProfile((prev) => {
      const next = { ...prev, ...updates };
      localStorage.setItem('for_me_profile', JSON.stringify(next));
      return next;
    });
  };

  useEffect(() => {
    localStorage.setItem('for_me_profile', JSON.stringify(profile));
  }, [profile]);

  // App Theme
  const [appTheme, setAppTheme] = useState<AppTheme>(() => {
    try {
      const saved = localStorage.getItem('for_me_app_theme') as AppTheme;
      return saved === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  });

  const toggleAppTheme = () => {
    setAppTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    localStorage.setItem('for_me_app_theme', appTheme);
    if (appTheme === 'light') {
      document.documentElement.classList.add('theme-light');
      document.documentElement.classList.remove('theme-dark');
    } else {
      document.documentElement.classList.add('theme-dark');
      document.documentElement.classList.remove('theme-light');
    }
  }, [appTheme]);

  // Zen Mode (Hide HUD)
  const [isHUDHidden, setIsHUDHidden] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('for_me_is_hud_hidden');
      return saved ? JSON.parse(saved) : false;
    } catch {
      return false;
    }
  });

  const toggleHUDHidden = () => setIsHUDHidden((prev) => !prev);

  useEffect(() => {
    localStorage.setItem('for_me_is_hud_hidden', JSON.stringify(isHUDHidden));
  }, [isHUDHidden]);

  // Wallpaper Theme
  const [wallpaperTheme, setWallpaperTheme] = useState<WallpaperTheme>(() => {
    try {
      const saved = localStorage.getItem('for_me_wallpaper_theme') as WallpaperTheme;
      return saved || 'cosmic-cliffs';
    } catch {
      return 'cosmic-cliffs';
    }
  });

  useEffect(() => {
    localStorage.setItem('for_me_wallpaper_theme', wallpaperTheme);
  }, [wallpaperTheme]);

  // Wallpaper Studio Settings
  const [wallpaperSettings, setWallpaperSettings] = useState<WallpaperSettings>(() => {
    try {
      const saved = localStorage.getItem('for_me_wallpaper_settings_v3') || localStorage.getItem('for_me_wallpaper_settings_v2');
      return saved ? { ...DEFAULT_WALLPAPER_SETTINGS, ...JSON.parse(saved) } : DEFAULT_WALLPAPER_SETTINGS;
    } catch {
      return DEFAULT_WALLPAPER_SETTINGS;
    }
  });

  const updateWallpaperSettings = (updates: Partial<WallpaperSettings>) => {
    setWallpaperSettings((prev) => {
      const next = { ...prev, ...updates };
      localStorage.setItem('for_me_wallpaper_settings_v3', JSON.stringify(next));
      return next;
    });
  };

  const resetWallpaperSettings = () => {
    setWallpaperSettings(DEFAULT_WALLPAPER_SETTINGS);
    localStorage.setItem('for_me_wallpaper_settings_v3', JSON.stringify(DEFAULT_WALLPAPER_SETTINGS));
  };

  // ── INACTIVITY BATTERY SAVER / ECO SLEEP ──
  // Auto-pauses heavy 3D WebGL and 2D particle canvas loops after 7-8 mins of inactivity
  const [isEcoSleeping, setIsEcoSleeping] = useState(false);
  const isEcoSleepingRef = useRef(false);
  isEcoSleepingRef.current = isEcoSleeping;

  useEffect(() => {
    const sleepThresholdMinutes = wallpaperSettings.ecoSleepMinutes ?? 7.5;
    if (sleepThresholdMinutes <= 0) {
      if (isEcoSleepingRef.current) setIsEcoSleeping(false);
      return;
    }

    const timeoutMs = sleepThresholdMinutes * 60 * 1000;
    let timer: ReturnType<typeof setTimeout>;

    const resetTimer = () => {
      if (isEcoSleepingRef.current) {
        setIsEcoSleeping(false);
      }
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsEcoSleeping(true);
      }, timeoutMs);
    };

    // Initial timeout arm
    timer = setTimeout(() => {
      setIsEcoSleeping(true);
    }, timeoutMs);

    const activityEvents = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll', 'pointerdown'];
    
    let lastActivityTime = Date.now();
    const handleActivity = () => {
      const now = Date.now();
      // If currently sleeping, wake up immediately
      if (isEcoSleepingRef.current) {
        setIsEcoSleeping(false);
        resetTimer();
        lastActivityTime = now;
        return;
      }
      // Throttle timer reset to at most once per 2 seconds
      if (now - lastActivityTime > 2000) {
        lastActivityTime = now;
        resetTimer();
      }
    };

    activityEvents.forEach((evt) => {
      window.addEventListener(evt, handleActivity, { passive: true });
    });

    return () => {
      clearTimeout(timer);
      activityEvents.forEach((evt) => {
        window.removeEventListener(evt, handleActivity);
      });
    };
  }, [wallpaperSettings.ecoSleepMinutes]);

  // Daily Tasks
  const [tasks, setTasks] = useState<DailyTask[]>(() => {
    try {
      const saved = localStorage.getItem('for_me_tasks');
      return saved ? JSON.parse(saved) : [
        { id: '1', text: 'Core engineering deep focus sprint', completed: false },
        { id: '2', text: 'System architecture review & refinement', completed: false },
        { id: '3', text: 'Physical movement & hydration (8 glasses)', completed: false },
      ];
    } catch {
      return [
        { id: '1', text: 'Core engineering deep focus sprint', completed: false },
      ];
    }
  });

  useEffect(() => {
    localStorage.setItem('for_me_tasks', JSON.stringify(tasks));
  }, [tasks]);

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed, completedAt: !t.completed ? new Date().toISOString() : undefined } : t))
    );
  };

  const addTask = (text: string) => {
    if (!text.trim()) return;
    const newTask: DailyTask = {
      id: `task_${Date.now()}`,
      text: text.trim(),
      completed: false,
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  // Habits
  const [habits, setHabits] = useState<HabitItem[]>(() => {
    try {
      const saved = localStorage.getItem('for_me_habits');
      return saved ? JSON.parse(saved) : [
        { id: 'h1', name: 'Deep Focus & Engineering Block', completed: false, streak: 3 },
        { id: 'h2', name: 'Hydration Target (8 Glasses)', completed: false, streak: 5 },
        { id: 'h3', name: 'Mindful Walk & Movement', completed: false, streak: 2 },
      ];
    } catch {
      return [
        { id: 'h1', name: 'Deep Focus & Engineering Block', completed: false, streak: 1 },
      ];
    }
  });

  useEffect(() => {
    localStorage.setItem('for_me_habits', JSON.stringify(habits));
  }, [habits]);

  const toggleHabit = (id: string) => {
    setHabits((prev) =>
      prev.map((h) => {
        if (h.id === id) {
          const nextCompleted = !h.completed;
          return {
            ...h,
            completed: nextCompleted,
            streak: nextCompleted ? h.streak + 1 : Math.max(0, h.streak - 1),
          };
        }
        return h;
      })
    );
  };

  const addHabit = (name: string) => {
    if (!name.trim()) return;
    const newHabit: HabitItem = {
      id: `habit_${Date.now()}`,
      name: name.trim(),
      completed: false,
      streak: 0,
    };
    setHabits((prev) => [...prev, newHabit]);
  };

  const deleteHabit = (id: string) => {
    setHabits((prev) => prev.filter((h) => h.id !== id));
  };

  // Routine Protocols
  const sortRoutines = (list: RoutineBlock[]): RoutineBlock[] => {
    return [...list].sort((a, b) => {
      const aH = a.startHour !== undefined ? a.startHour : 0;
      const bH = b.startHour !== undefined ? b.startHour : 0;
      return aH - bH;
    });
  };

  const [routines, setRoutines] = useState<RoutineBlock[]>(() => {
    try {
      const saved = localStorage.getItem('for_me_routines');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return sortRoutines(parsed.map(r => ({
            ...r,
            startTime: r.startTime || (r.startHour !== undefined ? formatHourToTimeStr(r.startHour) : '08:00'),
            endTime: r.endTime || (r.endHour !== undefined ? formatHourToTimeStr(r.endHour) : '12:00'),
          })));
        }
      }
      return DEFAULT_ROUTINES;
    } catch {
      return DEFAULT_ROUTINES;
    }
  });

  useEffect(() => {
    localStorage.setItem('for_me_routines', JSON.stringify(routines));
  }, [routines]);

  const addRoutineBlock = (block: Omit<RoutineBlock, 'id'>) => {
    let startH = block.startHour;
    let endH = block.endHour;
    let sTime = block.startTime;
    let eTime = block.endTime;

    if (sTime && startH === undefined) {
      startH = parseDecimalHourFromTimeStr(sTime, 9);
    }
    if (eTime && endH === undefined) {
      endH = parseDecimalHourFromTimeStr(eTime, (startH || 9) + 1);
    }

    if (startH === undefined || endH === undefined) {
      const parts = (block.timeRange || '').split(/[-–—to]/i);
      startH = parseHourFromStr(parts[0], 9);
      endH = parseHourFromStr(parts[1], startH + 1);
    }

    sTime = sTime || formatHourToTimeStr(startH);
    eTime = eTime || formatHourToTimeStr(endH);

    const category = block.category || 'deep_work';
    const categoryColors: Record<string, string> = {
      morning: '#f59e0b',
      deep_work: '#8b5cf6',
      study: '#06b6d4',
      break: '#10b981',
      fitness: '#f43f5e',
      evening: '#a855f7',
      night: '#6366f1',
      custom: '#3b82f6',
    };

    const newBlock: RoutineBlock = {
      id: `routine_${Date.now()}`,
      ...block,
      startTime: sTime,
      endTime: eTime,
      timeRange: `${sTime} – ${eTime}`,
      startHour: startH,
      endHour: endH,
      category,
      colorTag: block.colorTag || categoryColors[category] || '#8b5cf6',
    };

    setRoutines((prev) => sortRoutines([...prev, newBlock]));
  };

  const updateRoutineBlock = (id: string, updates: Partial<RoutineBlock>) => {
    setRoutines((prev) => sortRoutines(prev.map((r) => {
      if (r.id !== id) return r;
      const merged = { ...r, ...updates };

      if (updates.startTime) {
        merged.startHour = parseDecimalHourFromTimeStr(updates.startTime, merged.startHour || 9);
      }
      if (updates.endTime) {
        merged.endHour = parseDecimalHourFromTimeStr(updates.endTime, merged.endHour || 17);
      }

      if (updates.startHour !== undefined && !updates.startTime) {
        merged.startTime = formatHourToTimeStr(updates.startHour);
      }
      if (updates.endHour !== undefined && !updates.endTime) {
        merged.endTime = formatHourToTimeStr(updates.endHour);
      }

      const s = merged.startTime || (merged.startHour !== undefined ? formatHourToTimeStr(merged.startHour) : '09:00');
      const e = merged.endTime || (merged.endHour !== undefined ? formatHourToTimeStr(merged.endHour) : '17:00');
      merged.startTime = s;
      merged.endTime = e;
      merged.timeRange = `${s} – ${e}`;

      return merged;
    })));
  };

  const deleteRoutineBlock = (id: string) => {
    setRoutines((prev) => prev.filter((r) => r.id !== id));
  };

  const resetRoutines = () => {
    setRoutines(DEFAULT_ROUTINES);
  };

  const loadRoutinePreset = (presetKey: string) => {
    const preset = ROUTINE_PRESETS[presetKey];
    if (preset) {
      const generated = preset.blocks.map((b, i) => ({
        ...b,
        id: `routine_${presetKey}_${i + 1}_${Date.now()}`,
      }));
      setRoutines(generated);
    }
  };

  // Custom Presets
  const [customPresets, setCustomPresets] = useState<CustomRoutinePreset[]>(() => {
    try {
      const saved = localStorage.getItem('for_me_custom_routine_presets');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('for_me_custom_routine_presets', JSON.stringify(customPresets));
  }, [customPresets]);

  const saveCurrentAsPreset = (label: string, description?: string) => {
    if (!label.trim()) return;
    const newPreset: CustomRoutinePreset = {
      id: `preset_${Date.now()}`,
      label: label.trim(),
      description: description?.trim() || `${routines.length} scheduled time blocks`,
      createdAt: new Date().toISOString(),
      blocks: routines.map(({ id: _, ...b }) => b),
    };
    setCustomPresets((prev) => [newPreset, ...prev]);
  };

  const deleteCustomPreset = (id: string) => {
    setCustomPresets((prev) => prev.filter((p) => p.id !== id));
  };

  const loadCustomPreset = (id: string) => {
    const preset = customPresets.find((p) => p.id === id);
    if (preset) {
      const generated = preset.blocks.map((b, i) => ({
        ...b,
        id: `routine_custom_${i + 1}_${Date.now()}`,
      }));
      setRoutines(generated);
    }
  };

  // Live Active Routine Block tracking
  const [activeRoutineBlock, setActiveRoutineBlock] = useState<RoutineBlock | null>(null);
  const [activeRoutineMinutesLeft, setActiveRoutineMinutesLeft] = useState<number>(0);
  const [nextRoutineBlock, setNextRoutineBlock] = useState<RoutineBlock | null>(null);
  const [nextRoutineMinutesUntil, setNextRoutineMinutesUntil] = useState<number>(0);

  useEffect(() => {
    const updateActiveRoutine = () => {
      const now = new Date();
      const currentDecimalHour = now.getHours() + now.getMinutes() / 60;
      const currentMinuteOfDay = now.getHours() * 60 + now.getMinutes();

      let currentBlock: RoutineBlock | null = null;
      let minsLeft = 0;

      let upcomingBlock: RoutineBlock | null = null;
      let minsUntilNext = Infinity;

      for (const r of routines) {
        let startH = r.startHour;
        let endH = r.endHour;

        if (startH === undefined || endH === undefined) {
          const parts = r.timeRange.split(/[-–—to]/i);
          startH = parseHourFromStr(parts[0], 0);
          endH = parseHourFromStr(parts[1], 24);
        }

        const startMinuteOfDay = Math.round(startH * 60);
        const endMinuteOfDay = Math.round(endH * 60);

        if (startH <= endH) {
          if (currentDecimalHour >= startH && currentDecimalHour < endH) {
            currentBlock = r;
            minsLeft = Math.max(0, endMinuteOfDay - currentMinuteOfDay);
          } else if (startMinuteOfDay > currentMinuteOfDay) {
            const diff = startMinuteOfDay - currentMinuteOfDay;
            if (diff < minsUntilNext) {
              minsUntilNext = diff;
              upcomingBlock = r;
            }
          }
        } else {
          // Crosses midnight
          if (currentDecimalHour >= startH || currentDecimalHour < endH) {
            currentBlock = r;
            if (currentDecimalHour >= startH) {
              minsLeft = Math.max(0, (1440 - currentMinuteOfDay) + endMinuteOfDay);
            } else {
              minsLeft = Math.max(0, endMinuteOfDay - currentMinuteOfDay);
            }
          }
        }
      }

      // If no upcoming block found today, check tomorrow morning's earliest block
      if (!upcomingBlock && routines.length > 0) {
        const sorted = [...routines].sort((a, b) => (a.startHour || 0) - (b.startHour || 0));
        const first = sorted[0];
        if (first && first.startHour !== undefined) {
          const firstMins = Math.round(first.startHour * 60);
          minsUntilNext = (1440 - currentMinuteOfDay) + firstMins;
          upcomingBlock = first;
        }
      }

      setActiveRoutineBlock(currentBlock);
      setActiveRoutineMinutesLeft(minsLeft);
      setNextRoutineBlock(upcomingBlock);
      setNextRoutineMinutesUntil(minsUntilNext === Infinity ? 0 : minsUntilNext);
    };

    updateActiveRoutine();
    const interval = setInterval(updateActiveRoutine, 15000);
    return () => clearInterval(interval);
  }, [routines]);

  // Deep Study Stopwatch & Analytics
  const [studySeconds, setStudySeconds] = useState(0);
  const [isStudyActive, setIsStudyActive] = useState(false);
  const [studySubject, setStudySubject] = useState(profile.defaultFocusTopic || 'Engineering');
  
  const [studySubjects, setStudySubjects] = useState<StudySubject[]>(() => {
    try {
      const saved = localStorage.getItem('for_me_study_subjects');
      return saved ? JSON.parse(saved) : DEFAULT_STUDY_SUBJECTS;
    } catch {
      return DEFAULT_STUDY_SUBJECTS;
    }
  });

  const addStudySubject = (name: string, color?: string) => {
    if (!name.trim()) return;
    const colors = ['#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#f43f5e', '#ec4899', '#3b82f6'];
    const chosenColor = color || colors[studySubjects.length % colors.length];
    const newSubj: StudySubject = {
      id: `subj_${Date.now()}`,
      name: name.trim(),
      color: chosenColor,
    };
    setStudySubjects((prev) => {
      const next = [...prev, newSubj];
      localStorage.setItem('for_me_study_subjects', JSON.stringify(next));
      return next;
    });
  };

  const deleteStudySubject = (id: string) => {
    setStudySubjects((prev) => {
      const next = prev.filter((s) => s.id !== id);
      localStorage.setItem('for_me_study_subjects', JSON.stringify(next));
      return next;
    });
  };

  const [dailyStudyTargetHours, setDailyStudyTargetHoursState] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('for_me_daily_study_target');
      return saved ? parseFloat(saved) : 4.0;
    } catch {
      return 4.0;
    }
  });

  const setDailyStudyTargetHours = (hours: number) => {
    setDailyStudyTargetHoursState(hours);
    localStorage.setItem('for_me_daily_study_target', String(hours));
  };

  const [studySessions, setStudySessions] = useState<StudySession[]>(() => {
    try {
      const saved = localStorage.getItem('for_me_study_sessions');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    let interval: any = null;
    if (isStudyActive) {
      interval = setInterval(() => {
        setStudySeconds((prev) => prev + 1);
      }, 1000);
    } else if (!isStudyActive && studySeconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isStudyActive, studySeconds]);

  const toggleStudyTimer = () => setIsStudyActive((prev) => !prev);

  const resetStudyTimer = () => {
    if (studySeconds > 30) {
      const newSession: StudySession = {
        id: `ses_${Date.now()}`,
        subject: studySubject,
        durationSeconds: studySeconds,
        timestamp: new Date().toISOString(),
      };
      setStudySessions((prev) => {
        const updated = [newSession, ...prev];
        localStorage.setItem('for_me_study_sessions', JSON.stringify(updated));
        return updated;
      });
    }
    setIsStudyActive(false);
    setStudySeconds(0);
  };

  const logManualStudyTime = (minutes: number, subject?: string, mode?: string) => {
    if (minutes <= 0) return;
    const newSession: StudySession = {
      id: `ses_manual_${Date.now()}`,
      subject: subject?.trim() || studySubject || 'Engineering',
      mode: mode?.trim() || 'Manual Entry',
      durationSeconds: Math.round(minutes * 60),
      timestamp: new Date().toISOString(),
    };
    setStudySessions((prev) => {
      const updated = [newSession, ...prev];
      localStorage.setItem('for_me_study_sessions', JSON.stringify(updated));
      return updated;
    });
  };

  const deleteStudySession = (id: string) => {
    setStudySessions((prev) => {
      const updated = prev.filter((s) => s.id !== id);
      localStorage.setItem('for_me_study_sessions', JSON.stringify(updated));
      return updated;
    });
  };

  // ========================================================
  // POMODORO FOCUS COUNTDOWN ENGINE
  // ========================================================
  const [pomodoroSettings, setPomodoroSettings] = useState<PomodoroSettings>(() => {
    try {
      const saved = localStorage.getItem('for_me_pomodoro_settings');
      return saved ? { ...DEFAULT_POMODORO_SETTINGS, ...JSON.parse(saved) } : DEFAULT_POMODORO_SETTINGS;
    } catch {
      return DEFAULT_POMODORO_SETTINGS;
    }
  });

  useEffect(() => {
    localStorage.setItem('for_me_pomodoro_settings', JSON.stringify(pomodoroSettings));
  }, [pomodoroSettings]);

  const [pomodoroPhase, setPomodoroPhase] = useState<PomodoroPhase>('idle');
  const [pomodoroSecondsLeft, setPomodoroSecondsLeft] = useState<number>(() => pomodoroSettings.focusDurationMinutes * 60);
  const [pomodoroTotalSeconds, setPomodoroTotalSeconds] = useState<number>(() => pomodoroSettings.focusDurationMinutes * 60);

  useEffect(() => {
    let interval: any = null;
    if (pomodoroPhase === 'focus' || pomodoroPhase === 'break') {
      interval = setInterval(() => {
        setPomodoroSecondsLeft((prev) => {
          if (prev <= 1) {
            // Phase reached 0
            if (pomodoroPhase === 'focus') {
              if (pomodoroSettings.soundEnabled) {
                soundEngine.playFocusChime();
              }
              // Save completed session to studySessions
              const elapsedSecs = pomodoroTotalSeconds;
              const newSession: StudySession = {
                id: `ses_${Date.now()}`,
                subject: studySubject,
                mode: 'Pomodoro Focus',
                durationSeconds: elapsedSecs,
                timestamp: new Date().toISOString(),
              };
              setStudySessions((prevSessions) => {
                const updated = [newSession, ...prevSessions];
                localStorage.setItem('for_me_study_sessions', JSON.stringify(updated));
                return updated;
              });

              if (pomodoroSettings.autoStartBreaks) {
                setPomodoroPhase('break');
                const breakSecs = pomodoroSettings.breakDurationMinutes * 60;
                setPomodoroTotalSeconds(breakSecs);
                return breakSecs;
              } else {
                setPomodoroPhase('idle');
                const focusSecs = pomodoroSettings.focusDurationMinutes * 60;
                setPomodoroTotalSeconds(focusSecs);
                return focusSecs;
              }
            } else {
              // Break finished
              if (pomodoroSettings.soundEnabled) {
                soundEngine.playBreakChime();
              }
              setPomodoroPhase('idle');
              const focusSecs = pomodoroSettings.focusDurationMinutes * 60;
              setPomodoroTotalSeconds(focusSecs);
              return focusSecs;
            }
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [pomodoroPhase, pomodoroTotalSeconds, pomodoroSettings, studySubject]);

  const startPomodoro = (customDurationMinutes?: number) => {
    const mins = customDurationMinutes || pomodoroSettings.focusDurationMinutes;
    const total = mins * 60;
    setPomodoroTotalSeconds(total);
    setPomodoroSecondsLeft(total);
    setPomodoroPhase('focus');
  };

  const pausePomodoro = () => {
    if (pomodoroPhase === 'focus' || pomodoroPhase === 'break') {
      setPomodoroPhase('paused');
    }
  };

  const resumePomodoro = () => {
    if (pomodoroPhase === 'paused') {
      setPomodoroPhase('focus');
    }
  };

  const togglePomodoro = () => {
    if (pomodoroPhase === 'focus') {
      setPomodoroPhase('paused');
    } else if (pomodoroPhase === 'paused') {
      setPomodoroPhase('focus');
    } else if (pomodoroPhase === 'break') {
      setPomodoroPhase('paused');
    } else {
      startPomodoro();
    }
  };

  const resetPomodoro = () => {
    setPomodoroPhase('idle');
    const total = pomodoroSettings.focusDurationMinutes * 60;
    setPomodoroTotalSeconds(total);
    setPomodoroSecondsLeft(total);
  };

  const skipPomodoroPhase = () => {
    if (pomodoroPhase === 'focus') {
      setPomodoroPhase('break');
      const breakSecs = pomodoroSettings.breakDurationMinutes * 60;
      setPomodoroTotalSeconds(breakSecs);
      setPomodoroSecondsLeft(breakSecs);
    } else {
      setPomodoroPhase('idle');
      const focusSecs = pomodoroSettings.focusDurationMinutes * 60;
      setPomodoroTotalSeconds(focusSecs);
      setPomodoroSecondsLeft(focusSecs);
    }
  };

  const togglePomodoroDisplayMode = () => {
    setPomodoroSettings((prev) => ({
      ...prev,
      displayMode: prev.displayMode === 'telemetry' ? 'numbers' : 'telemetry',
    }));
  };

  // ========================================================
  // NOTIFICATIONS & CIRCADIAN TASK REMINDER ENGINE
  // ========================================================
  const [notificationSettings, setNotificationSettings] = useState<NotificationSettings>(() => {
    try {
      const saved = localStorage.getItem('for_me_notification_settings');
      return saved ? { ...DEFAULT_NOTIFICATION_SETTINGS, ...JSON.parse(saved) } : DEFAULT_NOTIFICATION_SETTINGS;
    } catch {
      return DEFAULT_NOTIFICATION_SETTINGS;
    }
  });

  const updateNotificationSettings = (updates: Partial<NotificationSettings>) => {
    setNotificationSettings((prev) => {
      const next = { ...prev, ...updates };
      localStorage.setItem('for_me_notification_settings', JSON.stringify(next));
      return next;
    });
  };

  const requestNotificationPermission = async (): Promise<boolean> => {
    const granted = await notificationService.requestPermission();
    if (granted) {
      updateNotificationSettings({ enabled: true });
    }
    return granted;
  };

  const [activeHUDNotification, setActiveHUDNotification] = useState<HUDNotification | null>(null);

  const dismissHUDNotification = () => {
    setActiveHUDNotification(null);
  };

  const dispatchNotification = (notif: HUDNotification, chimeType: 'start' | 'wrap_up' = 'start') => {
    // 1. In-app HUD alert banner
    setActiveHUDNotification(notif);

    // 2. Procedural crystal chime
    if (notificationSettings.soundEnabled) {
      notificationService.playChime(chimeType);
    }

    // 3. Native browser / desktop notification
    if (notificationSettings.enabled && notificationService.hasPermission()) {
      notificationService.sendSystemNotification(notif.title, notif.message, notif.id);
    }
  };

  const triggerTestNotification = () => {
    dispatchNotification(
      {
        id: `test_${Date.now()}`,
        title: 'Circadian Sanctuary Reminder',
        message: 'Reminders are active! You will be notified when focus blocks start and wrap up, keeping your daily tasks in flow.',
        type: 'routine_start',
        actionLabel: 'View Tasks',
        actionTarget: 'tasks',
      },
      'start'
    );
  };

  // Auto-dismiss HUD notification banner after 8 seconds
  useEffect(() => {
    if (!activeHUDNotification) return;
    const timer = setTimeout(() => {
      setActiveHUDNotification(null);
    }, 8000);
    return () => clearTimeout(timer);
  }, [activeHUDNotification]);

  // Periodic Circadian Block & Task reminder scheduler
  const lastNotifiedStartRef = useRef<string | null>(null);
  const lastNotifiedEndRef = useRef<string | null>(null);

  useEffect(() => {
    if (!notificationSettings.enabled) return;

    const checkReminders = () => {
      if (!activeRoutineBlock) {
        lastNotifiedStartRef.current = null;
        lastNotifiedEndRef.current = null;
        return;
      }

      const unfinishedCount = tasks.filter((t) => !t.completed).length;

      // 1. Block Start Reminder
      if (
        notificationSettings.blockStartReminders &&
        lastNotifiedStartRef.current !== activeRoutineBlock.id
      ) {
        lastNotifiedStartRef.current = activeRoutineBlock.id;

        const taskMsg =
          unfinishedCount > 0
            ? `You have ${unfinishedCount} task${unfinishedCount > 1 ? 's' : ''} queued for today. Pick 1-3 to focus on for this block.`
            : `Ready to enter flow? Set 1-3 key tasks for this block to make focused progress.`;

        dispatchNotification(
          {
            id: `start_${activeRoutineBlock.id}`,
            title: `Now Starting: ${activeRoutineBlock.title}`,
            message: taskMsg,
            type: 'routine_start',
            actionLabel: unfinishedCount > 0 ? 'View Tasks' : 'Add Tasks',
            actionTarget: 'tasks',
          },
          'start'
        );
      }

      // 2. Block Wrap-Up Reminder (10 mins or less remaining)
      if (
        notificationSettings.blockEndReminders &&
        activeRoutineMinutesLeft > 0 &&
        activeRoutineMinutesLeft <= 10 &&
        lastNotifiedEndRef.current !== activeRoutineBlock.id
      ) {
        lastNotifiedEndRef.current = activeRoutineBlock.id;

        const wrapMsg =
          unfinishedCount > 0
            ? `About ${activeRoutineMinutesLeft}m remaining. Wrap up current work or check off your ${unfinishedCount} pending task${unfinishedCount > 1 ? 's' : ''}.`
            : `About ${activeRoutineMinutesLeft}m remaining. Great focus! Wrap up your thoughts for the next transition.`;

        dispatchNotification(
          {
            id: `end_${activeRoutineBlock.id}`,
            title: `Wrapping Up: ${activeRoutineBlock.title} (~${activeRoutineMinutesLeft}m left)`,
            message: wrapMsg,
            type: 'routine_end',
            actionLabel: 'Check Tasks',
            actionTarget: 'tasks',
          },
          'wrap_up'
        );
      }
    };

    checkReminders();
    const interval = setInterval(checkReminders, 12000);
    return () => clearInterval(interval);
  }, [
    notificationSettings.enabled,
    notificationSettings.blockStartReminders,
    notificationSettings.blockEndReminders,
    notificationSettings.soundEnabled,
    activeRoutineBlock,
    activeRoutineMinutesLeft,
    tasks,
  ]);

  // Biometrics & Health
  const [hydration, setHydration] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('for_me_hydration');
      return saved ? JSON.parse(saved) : 62.5;
    } catch {
      return 62.5;
    }
  });

  useEffect(() => {
    localStorage.setItem('for_me_hydration', JSON.stringify(hydration));
  }, [hydration]);

  const [sleepHours, setSleepHours] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('for_me_sleep_hours');
      return saved ? JSON.parse(saved) : 8;
    } catch {
      return 8;
    }
  });

  const setSleep = (h: number) => {
    setSleepHours(h);
    localStorage.setItem('for_me_sleep_hours', JSON.stringify(h));
  };

  const [dailyRating, setDailyRating] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('for_me_daily_rating');
      return saved ? JSON.parse(saved) : 8;
    } catch {
      return 8;
    }
  });

  useEffect(() => {
    localStorage.setItem('for_me_daily_rating', JSON.stringify(dailyRating));
  }, [dailyRating]);

  // ── DAILY MIDNIGHT ROLLOVER & RESET ENGINE ──
  const getTodayDateStr = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const [lastActiveDate, setLastActiveDate] = useState<string>(() => {
    try {
      return localStorage.getItem('for_me_last_active_date') || getTodayDateStr();
    } catch {
      return getTodayDateStr();
    }
  });

  const performDayReset = (targetDate: string) => {
    // 1. Reset tasks: uncheck all daily tasks so the new day starts fresh
    setTasks((prev) => {
      const reset = prev.map((t) => ({ ...t, completed: false, completedAt: undefined }));
      localStorage.setItem('for_me_tasks', JSON.stringify(reset));
      return reset;
    });

    // 2. Reset habits: uncheck all habits, maintaining streaks for kept habits
    setHabits((prev) => {
      const reset = prev.map((h) => ({
        ...h,
        completed: false,
        streak: h.completed ? h.streak : 0,
      }));
      localStorage.setItem('for_me_habits', JSON.stringify(reset));
      return reset;
    });

    // 3. Reset hydration to 0% for the new day
    setHydration(0);
    localStorage.setItem('for_me_hydration', JSON.stringify(0));

    // 4. Save and reset study stopwatch if elapsed
    if (studySeconds > 30) {
      const newSession: StudySession = {
        id: `ses_${Date.now()}`,
        subject: studySubject,
        durationSeconds: studySeconds,
        timestamp: new Date().toISOString(),
      };
      setStudySessions((prev) => {
        const updated = [newSession, ...prev];
        localStorage.setItem('for_me_study_sessions', JSON.stringify(updated));
        return updated;
      });
    }
    setIsStudyActive(false);
    setStudySeconds(0);

    // 5. Update last active date to targetDate
    setLastActiveDate(targetDate);
    localStorage.setItem('for_me_last_active_date', targetDate);
  };

  // Check date rollover on mount, periodically, and on window focus
  useEffect(() => {
    const verifyDateRollover = () => {
      const today = getTodayDateStr();
      const saved = localStorage.getItem('for_me_last_active_date');
      if (!saved) {
        localStorage.setItem('for_me_last_active_date', today);
        setLastActiveDate(today);
      } else if (saved !== today) {
        performDayReset(today);
      }
    };

    verifyDateRollover();
    const timer = setInterval(verifyDateRollover, 10000);
    window.addEventListener('focus', verifyDateRollover);

    return () => {
      clearInterval(timer);
      window.removeEventListener('focus', verifyDateRollover);
    };
  }, [studySeconds, studySubject]);

  // Manual explicit Reset Day trigger
  const resetDayProgress = () => {
    const today = getTodayDateStr();
    performDayReset(today);
  };

  // Factory Reset All Data back to pristine defaults
  const factoryReset = () => {
    const keysToRemove = [
      'for_me_profile',
      'for_me_tasks',
      'for_me_habits',
      'for_me_routines',
      'for_me_hydration',
      'for_me_sleep_hours',
      'for_me_daily_rating',
      'for_me_study_sessions',
      'for_me_pomodoro_settings',
      'for_me_wallpaper_settings_v3',
      'for_me_wallpaper_theme',
      'for_me_app_theme',
      'for_me_is_hud_hidden',
      'for_me_last_active_date',
      'for_me_active_yt',
      'for_me_saved_yt_library',
    ];
    keysToRemove.forEach((k) => localStorage.removeItem(k));
    setProfile(DEFAULT_PROFILE);
    setTasks([
      { id: '1', text: 'Core engineering deep focus sprint', completed: false },
      { id: '2', text: 'System architecture review & refinement', completed: false },
      { id: '3', text: 'Physical movement & hydration (8 glasses)', completed: false },
    ]);
    setHabits([
      { id: 'h1', name: 'Deep Focus & Engineering Block', completed: false, streak: 0 },
      { id: 'h2', name: 'Hydration Target (8 Glasses)', completed: false, streak: 0 },
      { id: 'h3', name: 'Mindful Walk & Movement', completed: false, streak: 0 },
    ]);
    setRoutines(DEFAULT_ROUTINES);
    setHydration(0);
    setSleepHours(8);
    setDailyRating(8);
    setStudySeconds(0);
    setIsStudyActive(false);
    setStudySessions([]);
    setWallpaperSettings(DEFAULT_WALLPAPER_SETTINGS);
    setLastActiveDate(getTodayDateStr());
  };

  // Audio Sanctuary
  const [audioSource, setAudioSource] = useState<'ambient' | 'youtube'>('youtube');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [activeSoundscapeId, setActiveSoundscapeId] = useState<SoundscapeId>('brown-noise');
  const [audioVolume, setAudioVolumeState] = useState(0.65);
  const [isAudioMuted, setIsAudioMutedState] = useState(false);

  // YouTube Audio Engine
  const [isYouTubePlaying, setYouTubeIsPlaying] = useState(false);
  const [isYouTubePlayerReady, setYouTubePlayerReady] = useState(false);
  const [activeYouTubeItem, setActiveYouTubeItem] = useState<YouTubeItem | null>(() => {
    try {
      const saved = localStorage.getItem('for_me_active_yt');
      return saved ? JSON.parse(saved) : CURATED_YOUTUBE_STREAMS[0];
    } catch {
      return CURATED_YOUTUBE_STREAMS[0];
    }
  });

  const [youtubeVolume, setYouTubeVolumeState] = useState(70);
  const [isYouTubeMuted, setIsYouTubeMutedState] = useState(false);
  const [showYouTubePreview, setShowYouTubePreview] = useState(false);
  const [savedYouTubeItems, setSavedYouTubeItems] = useState<YouTubeItem[]>(() => {
    try {
      const saved = localStorage.getItem('for_me_saved_yt_library');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    if (activeYouTubeItem) {
      localStorage.setItem('for_me_active_yt', JSON.stringify(activeYouTubeItem));
    }
  }, [activeYouTubeItem]);

  useEffect(() => {
    localStorage.setItem('for_me_saved_yt_library', JSON.stringify(savedYouTubeItems));
  }, [savedYouTubeItems]);

  const playSoundscape = (id?: SoundscapeId) => {
    if (isYouTubePlaying) {
      setYouTubeIsPlaying(false);
      try {
        if (typeof (window as any).__forMeSendYouTubeCommand === 'function') {
          (window as any).__forMeSendYouTubeCommand('pauseVideo');
        }
      } catch {}
    }
    setAudioSource('ambient');

    const target = id || activeSoundscapeId;
    setActiveSoundscapeId(target);
    soundEngine.play(target);
    setIsAudioPlaying(true);

    const preset = SOUNDSCAPE_PRESETS.find((p) => p.id === target);
    mediaSessionService.startKeepAlive();
    mediaSessionService.updateMetadata({
      title: preset?.title || 'Procedural Soundscape',
      artist: 'FOR ME Sanctuary (Offline)',
      album: 'Sound Sanctuary',
      onPlay: () => playSoundscape(target),
      onPause: stopSoundscape,
    });
  };

  const stopSoundscape = () => {
    soundEngine.stop();
    setIsAudioPlaying(false);
    mediaSessionService.stopKeepAlive();
    mediaSessionService.setPlaybackState('paused');
  };

  const setAudioVolume = (vol: number) => {
    setAudioVolumeState(vol);
    soundEngine.setVolume(vol);
  };

  const toggleAudioMute = () => {
    const muted = soundEngine.toggleMute();
    setIsAudioMutedState(muted);
  };

  const playYouTubeItem = (item: YouTubeItem) => {
    soundEngine.stop();
    setIsAudioPlaying(false);

    setActiveYouTubeItem(item);
    setAudioSource('youtube');
    setYouTubeIsPlaying(true);
    setIsYouTubeMutedState(false);

    try {
      if (typeof (window as any).__forMeForceUnmute === 'function') {
        (window as any).__forMeForceUnmute();
      }
    } catch {}
  };

  const toggleYouTubePlay = () => {
    if (isYouTubePlaying) {
      setYouTubeIsPlaying(false);
      try {
        if (typeof (window as any).__forMeSendYouTubeCommand === 'function') {
          (window as any).__forMeSendYouTubeCommand('pauseVideo');
        }
      } catch {}
    } else {
      soundEngine.stop();
      setIsAudioPlaying(false);
      setAudioSource('youtube');
      setYouTubeIsPlaying(true);
      setIsYouTubeMutedState(false);

      try {
        if (typeof (window as any).__forMeForceUnmute === 'function') {
          (window as any).__forMeForceUnmute();
        }
        if (typeof (window as any).__forMeSendYouTubeCommand === 'function') {
          (window as any).__forMeSendYouTubeCommand('playVideo');
        }
      } catch {}
    }
  };

  const stopYouTube = () => {
    setYouTubeIsPlaying(false);
    try {
      if (typeof (window as any).__forMeSendYouTubeCommand === 'function') {
        (window as any).__forMeSendYouTubeCommand('stopVideo');
      }
    } catch {}
  };

  const nextYouTubeTrack = () => {
    try {
      if (typeof (window as any).__forMeSendYouTubeCommand === 'function') {
        (window as any).__forMeSendYouTubeCommand('nextVideo');
      }
      setYouTubeIsPlaying(true);
    } catch {}
  };

  const prevYouTubeTrack = () => {
    try {
      if (typeof (window as any).__forMeSendYouTubeCommand === 'function') {
        (window as any).__forMeSendYouTubeCommand('previousVideo');
      }
      setYouTubeIsPlaying(true);
    } catch {}
  };

  const setYouTubeVolume = (vol: number) => {
    setYouTubeVolumeState(vol);
    try {
      if (typeof (window as any).__forMeSendYouTubeCommand === 'function') {
        (window as any).__forMeSendYouTubeCommand('setVolume', [vol]);
      }
    } catch {}
  };

  const toggleYouTubeMute = () => {
    setIsYouTubeMutedState((prev) => {
      const next = !prev;
      try {
        if (typeof (window as any).__forMeSendYouTubeCommand === 'function') {
          (window as any).__forMeSendYouTubeCommand(next ? 'mute' : 'unMute');
        }
      } catch {}
      return next;
    });
  };

  const addYouTubeToLibrary = (url: string, customTitle?: string): { success: boolean; item?: YouTubeItem; error?: string } => {
    const parsed = parseYouTubeUrl(url);
    if (!parsed) {
      return { 
        success: false, 
        error: 'Could not recognize a valid YouTube video or playlist link. Please check the URL format and try again.' 
      };
    }

    const title = customTitle?.trim() || (
      parsed.type === 'playlist' 
        ? `Custom Playlist (${parsed.playlistId?.slice(0, 8)}...)` 
        : `YouTube Audio (${parsed.videoId || 'Stream'})`
    );

    const newItem: YouTubeItem = {
      id: `yt-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      title,
      type: parsed.type,
      videoId: parsed.videoId,
      playlistId: parsed.playlistId,
      url: parsed.cleanUrl,
      thumbnailUrl: getYouTubeThumbnail(parsed.videoId),
      channel: parsed.type === 'playlist' ? 'Custom YouTube Playlist' : 'Custom YouTube Stream',
      createdAt: new Date().toISOString(),
    };

    setSavedYouTubeItems((prev) => [newItem, ...prev]);
    playYouTubeItem(newItem);
    return { success: true, item: newItem };
  };

  const removeYouTubeFromLibrary = (id: string) => {
    setSavedYouTubeItems((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <DataContext.Provider
      value={{
        profile,
        setProfile,
        updateProfile,
        appTheme,
        setAppTheme,
        toggleAppTheme,
        isHUDHidden,
        setIsHUDHidden,
        toggleHUDHidden,
        tasks,
        toggleTask,
        addTask,
        deleteTask,
        wallpaperTheme,
        setWallpaperTheme,
        wallpaperSettings,
        updateWallpaperSettings,
        resetWallpaperSettings,
        habits,
        toggleHabit,
        addHabit,
        deleteHabit,
        routines,
        addRoutineBlock,
        updateRoutineBlock,
        deleteRoutineBlock,
        resetRoutines,
        loadRoutinePreset,
        customPresets,
        saveCurrentAsPreset,
        deleteCustomPreset,
        loadCustomPreset,
        activeRoutineBlock,
        activeRoutineMinutesLeft,
        nextRoutineBlock,
        nextRoutineMinutesUntil,
        studySeconds,
        isStudyActive,
        studySubject,
        setStudySubject,
        studySubjects,
        addStudySubject,
        deleteStudySubject,
        dailyStudyTargetHours,
        setDailyStudyTargetHours,
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
        pausePomodoro,
        resumePomodoro,
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
        factoryReset,
        audioSource,
        setAudioSource,
        isAudioPlaying,
        activeSoundscapeId,
        audioVolume,
        isAudioMuted,
        playSoundscape,
        stopSoundscape,
        setAudioVolume,
        toggleAudioMute,
        isYouTubePlaying,
        setYouTubeIsPlaying,
        isYouTubePlayerReady,
        setYouTubePlayerReady,
        activeYouTubeItem,
        youtubeVolume,
        isYouTubeMuted,
        savedYouTubeItems,
        showYouTubePreview,
        setShowYouTubePreview,
        playYouTubeItem,
        toggleYouTubePlay,
        stopYouTube,
        nextYouTubeTrack,
        prevYouTubeTrack,
        setYouTubeVolume,
        toggleYouTubeMute,
        addYouTubeToLibrary,
        removeYouTubeFromLibrary,
        notificationSettings,
        updateNotificationSettings,
        requestNotificationPermission,
        activeHUDNotification,
        dismissHUDNotification,
        triggerTestNotification,
        isEcoSleeping,
        setIsEcoSleeping,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
