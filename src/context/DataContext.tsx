import React, { createContext, useContext, useState, useEffect } from 'react';
import { soundEngine, SoundscapeId, SOUNDSCAPE_PRESETS } from '../services/soundEngine';
import { mediaSessionService } from '../services/mediaSessionService';
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
  RoutineBlock,
  UserProfile,
  WallpaperTheme,
  WallpaperSettings,
  AppTheme,
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

  // Routine Protocols
  routines: RoutineBlock[];
  addRoutineBlock: (block: Omit<RoutineBlock, 'id'>) => void;
  updateRoutineBlock: (id: string, updates: Partial<RoutineBlock>) => void;
  deleteRoutineBlock: (id: string) => void;
  resetRoutines: () => void;

  // Study & Deep Focus Stopwatch
  studySeconds: number;
  isStudyActive: boolean;
  studySubject: string;
  setStudySubject: (subj: string) => void;
  toggleStudyTimer: () => void;
  resetStudyTimer: () => void;
  studySessions: StudySession[];

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
};

const DEFAULT_PROFILE: UserProfile = {
  name: 'Azan',
  motto: 'Remember, you are here for you.',
  defaultFocusTopic: 'Engineering',
  defaultFocusMode: 'Deep Work',
};

const DEFAULT_ROUTINES: RoutineBlock[] = [
  {
    id: 'r1',
    title: 'Morning Protocol',
    timeRange: '06:00 – 09:00',
    description: 'Hydration, natural sunlight, 30-min movement, deep work session.',
    iconType: 'morning',
  },
  {
    id: 'r2',
    title: 'Core Deep Work',
    timeRange: '09:00 – 17:00',
    description: 'High-leverage engineering problem solving, core building goals, focused sprints.',
    iconType: 'afternoon',
  },
  {
    id: 'r3',
    title: 'Evening Wind-Down',
    timeRange: '17:00 – 22:30',
    description: 'Reflection, physical cooldown, reading, digital sunset and deep recovery.',
    iconType: 'evening',
  },
];

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
  const [routines, setRoutines] = useState<RoutineBlock[]>(() => {
    try {
      const saved = localStorage.getItem('for_me_routines');
      return saved ? JSON.parse(saved) : DEFAULT_ROUTINES;
    } catch {
      return DEFAULT_ROUTINES;
    }
  });

  useEffect(() => {
    localStorage.setItem('for_me_routines', JSON.stringify(routines));
  }, [routines]);

  const addRoutineBlock = (block: Omit<RoutineBlock, 'id'>) => {
    const newBlock: RoutineBlock = {
      id: `routine_${Date.now()}`,
      ...block,
    };
    setRoutines((prev) => [...prev, newBlock]);
  };

  const updateRoutineBlock = (id: string, updates: Partial<RoutineBlock>) => {
    setRoutines((prev) => prev.map((r) => (r.id === id ? { ...r, ...updates } : r)));
  };

  const deleteRoutineBlock = (id: string) => {
    setRoutines((prev) => prev.filter((r) => r.id !== id));
  };

  const resetRoutines = () => {
    setRoutines(DEFAULT_ROUTINES);
  };

  // Deep Study Stopwatch
  const [studySeconds, setStudySeconds] = useState(0);
  const [isStudyActive, setIsStudyActive] = useState(false);
  const [studySubject, setStudySubject] = useState(profile.defaultFocusTopic || 'Engineering');
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
