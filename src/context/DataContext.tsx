import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  MoodType, 
  NavTab, 
  HabitItem, 
  DayHeatmapCell, 
  DailyPromise, 
  UpcomingEvent, 
  JournalEntry, 
  AudioStation, 
  LifeDimensions, 
  UserProfile 
} from '../types';

interface DataContextType {
  // Navigation & Profile
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  profile: UserProfile;
  setProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
  currentMood: MoodType;
  setCurrentMood: (mood: MoodType) => void;

  // Biometrics
  hydration: number; // percentage
  setHydration: React.Dispatch<React.SetStateAction<number>>;
  sleepHours: number;
  sleepMinutes: number;
  setSleep: (h: number, m: number) => void;
  movementPercent: number;
  setMovementPercent: React.Dispatch<React.SetStateAction<number>>;

  // Study Timer
  studySeconds: number;
  isStudyActive: boolean;
  studySubject: string;
  setStudySubject: (s: string) => void;
  toggleStudyTimer: () => void;
  resetStudyTimer: () => void;

  // Streak & Heatmap
  heatmapData: DayHeatmapCell[];
  currentStreak: number;

  // Daily Promise
  promise: DailyPromise;
  incrementPromise: () => void;
  updatePromiseText: (text: string) => void;

  // Habits Checklist
  habits: HabitItem[];
  toggleHabit: (id: string) => void;
  addHabit: (name: string) => void;
  deleteHabit: (id: string) => void;
  overallProgress: number;
  dailyRating: number;
  setDailyRating: (rating: number) => void;

  // Journal
  journalDraft: string;
  setJournalDraft: React.Dispatch<React.SetStateAction<string>>;
  saveJournalEntry: () => void;
  journalEntries: JournalEntry[];

  // Upcoming
  upcomingEvents: UpcomingEvent[];
  addUpcomingEvent: (event: Omit<UpcomingEvent, 'id'>) => void;
  removeUpcomingEvent: (id: string) => void;

  // Life Dimensions Radar
  lifeDimensions: LifeDimensions;
  updateDimension: (dim: keyof LifeDimensions, val: number) => void;
  alignmentPercent: number;

  // Audio Dock
  audioStations: AudioStation[];
  activeStationId: string;
  setActiveStationId: (id: string) => void;
  isAudioPlaying: boolean;
  setIsAudioPlaying: (playing: boolean) => void;
  customAudioUrl: string;
  setCustomAudioUrl: (url: string) => void;
  loadCustomAudioUrl: (url: string) => void;

  // Life Audit
  auditProgress: number;
}

const STORAGE_KEY = 'for_me_ledger_state_v2';

const DEFAULT_STATIONS: AudioStation[] = [
  {
    id: 'deep-work',
    name: 'Deep Work',
    genre: 'Focus • Ambient Synth',
    duration: '1:00:00',
    type: 'youtube',
    embedSrc: 'https://www.youtube-nocookie.com/embed/WPni755-Krg?autoplay=1&enablejsapi=1',
  },
  {
    id: 'lofi-chill',
    name: 'Lofi & Chill',
    genre: 'Lofi Girl 24/7 Radio',
    duration: 'LIVE 24/7',
    type: 'youtube',
    embedSrc: 'https://www.youtube-nocookie.com/embed/jfKfPfyJRdk?autoplay=1&enablejsapi=1',
  },
  {
    id: 'ambient-drone',
    name: 'Ambient & Drone',
    genre: 'Space Meditation',
    duration: '3:00:00',
    type: 'youtube',
    embedSrc: 'https://www.youtube-nocookie.com/embed/CoB22v0iC-c?autoplay=1&enablejsapi=1',
  },
  {
    id: 'coding-flow',
    name: 'Coding Flow',
    genre: 'Cyberpunk Focus Beats',
    duration: '2:15:00',
    type: 'youtube',
    embedSrc: 'https://www.youtube-nocookie.com/embed/5qap5aO4i9A?autoplay=1&enablejsapi=1',
  },
  {
    id: 'binaural-beats',
    name: 'Binaural Beats',
    genre: 'Gamma Brainwaves',
    duration: '4:00:00',
    type: 'youtube',
    embedSrc: 'https://www.youtube-nocookie.com/embed/1ZYbU82GVz4?autoplay=1&enablejsapi=1',
  },
  {
    id: 'spotify-piano',
    name: 'Peaceful Piano (Spotify)',
    genre: 'Spotify Deep Focus',
    duration: 'Endless Flow',
    type: 'spotify',
    embedSrc: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3LiO?utm_source=generator&theme=0',
  }
];

// Generate 8-week heatmap data matching the aesthetic in the screenshot
const generateMockHeatmap = (): DayHeatmapCell[] => {
  const cells: DayHeatmapCell[] = [];
  const today = new Date();
  const totalDays = 56; // 8 weeks * 7 days

  for (let i = totalDays - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    
    // Varying intensities with amber streaks
    let intensity: 0 | 1 | 2 | 3 | 4 = 1;
    const rand = Math.sin(i * 1.3 + 2);
    if (rand > 0.6) intensity = 4;
    else if (rand > 0.2) intensity = 3;
    else if (rand > -0.2) intensity = 2;
    else if (rand > -0.6) intensity = 1;
    else intensity = 0;

    cells.push({
      date: dateStr,
      dayOfWeek: d.getDay(),
      intensity,
      habitsCompleted: intensity === 4 ? 5 : intensity === 3 ? 4 : intensity * 2,
      studyMinutes: intensity * 45 + 30,
    });
  }
  return cells;
};

const DataContext = createContext<DataContextType | null>(null);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Navigation & User Profile
  const [activeTab, setActiveTab] = useState<NavTab>('dashboard');
  const [profile, setProfile] = useState<UserProfile>(() => {
    return {
      name: 'Kaiser',
      title: 'Private Life Ledger',
      motto: 'Discipline today. Freedom tomorrow.',
      selectedWallpaper: 'cosmic-lunar',
    };
  });
  const [currentMood, setCurrentMood] = useState<MoodType>('locked_in');

  // Biometrics
  const [hydration, setHydration] = useState<number>(78);
  const [sleepHours, setSleepHours] = useState<number>(7);
  const [sleepMinutes, setSleepMinutes] = useState<number>(42);
  const setSleep = (h: number, m: number) => {
    setSleepHours(h);
    setSleepMinutes(m);
  };
  const [movementPercent, setMovementPercent] = useState<number>(72);

  // Study Focus Timer
  const [studySeconds, setStudySeconds] = useState<number>(1517); // 00:25:17 initial
  const [isStudyActive, setIsStudyActive] = useState<boolean>(false);
  const [studySubject, setStudySubject] = useState<string>('Mathematics');

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isStudyActive) {
      interval = setInterval(() => {
        setStudySeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isStudyActive]);

  const toggleStudyTimer = () => setIsStudyActive((prev) => !prev);
  const resetStudyTimer = () => {
    setIsStudyActive(false);
    setStudySeconds(0);
  };

  // Streak Heatmap
  const [heatmapData] = useState<DayHeatmapCell[]>(() => generateMockHeatmap());
  const currentStreak = 48;

  // Daily Promise
  const [promise, setPromise] = useState<DailyPromise>({
    id: 'promise-1',
    text: 'Get 3 hours of deep study ( Maths + Science).',
    deadline: 'By 11:59 PM',
    current: 2,
    target: 3,
    unit: 'hours',
  });

  const incrementPromise = () => {
    setPromise((prev) => ({
      ...prev,
      current: prev.current >= prev.target ? 0 : prev.current + 1,
    }));
  };

  const updatePromiseText = (text: string) => {
    setPromise((prev) => ({ ...prev, text }));
  };

  // Habits
  const [habits, setHabits] = useState<HabitItem[]>([
    { id: 'h1', name: 'Drink 2L Water', completed: true, streak: 14, category: 'wellness' },
    { id: 'h2', name: 'Complete Study Goal', completed: true, streak: 22, category: 'study' },
    { id: 'h3', name: 'Nightly Review', completed: true, streak: 8, category: 'mind' },
    { id: 'h4', name: 'Workout', completed: false, streak: 5, category: 'wellness' },
    { id: 'h5', name: 'Read 20 Pages', completed: false, streak: 12, category: 'discipline' },
  ]);

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
    const newH: HabitItem = {
      id: `h-${Date.now()}`,
      name: name.trim(),
      completed: false,
      streak: 0,
      category: 'discipline',
    };
    setHabits((prev) => [...prev, newH]);
  };

  const deleteHabit = (id: string) => {
    setHabits((prev) => prev.filter((h) => h.id !== id));
  };

  const completedCount = habits.filter((h) => h.completed).length;
  const overallProgress = habits.length > 0 ? Math.round((completedCount / habits.length) * 100) : 82;
  const [dailyRating, setDailyRating] = useState<number>(9);

  // Quick Journal
  const [journalDraft, setJournalDraft] = useState<string>('');
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([
    {
      id: 'entry-1',
      text: 'Calculus derivatives clicked today during deep focus session. Momentum feels steady.',
      timestamp: 'Today, 6:45 AM',
      mood: 'Locked In',
    },
  ]);

  const saveJournalEntry = () => {
    if (!journalDraft.trim()) return;
    const newEntry: JournalEntry = {
      id: `j-${Date.now()}`,
      text: journalDraft.trim(),
      timestamp: 'Just now',
      mood: currentMood.replace('_', ' ').toUpperCase(),
    };
    setJournalEntries((prev) => [newEntry, ...prev]);
    setJournalDraft('');
  };

  // Upcoming Events
  const [upcomingEvents, setUpcomingEvents] = useState<UpcomingEvent[]>([
    { id: 'u1', title: 'Weekly Audit', date: 'Sun, 2 Nov', color: '#ff6b35' },
    { id: 'u2', title: 'Allen TalentX (if any)', date: 'Mon, 3 Nov', color: '#ff6b35' },
    { id: 'u3', title: 'Exercise', date: 'Mon, 3 Nov', color: '#ff6b35' },
  ]);

  const addUpcomingEvent = (event: Omit<UpcomingEvent, 'id'>) => {
    setUpcomingEvents((prev) => [...prev, { ...event, id: `u-${Date.now()}` }]);
  };

  const removeUpcomingEvent = (id: string) => {
    setUpcomingEvents((prev) => prev.filter((e) => e.id !== id));
  };

  // Life Dimensions Radar
  const [lifeDimensions, setLifeDimensions] = useState<LifeDimensions>({
    career: 9.0,
    health: 8.5,
    relationships: 8.0,
    finance: 7.5,
    mind: 7.5,
    environment: 8.5,
  });

  const updateDimension = (dim: keyof LifeDimensions, val: number) => {
    setLifeDimensions((prev) => ({ ...prev, [dim]: Math.min(10, Math.max(0, val)) }));
  };

  const avgDim = Object.values(lifeDimensions).reduce((a, b) => a + b, 0) / 6;
  const alignmentPercent = Math.round((avgDim / 10) * 100);

  // Audio System
  const [audioStations, setAudioStations] = useState<AudioStation[]>(DEFAULT_STATIONS);
  const [activeStationId, setActiveStationId] = useState<string>('deep-work');
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const [customAudioUrl, setCustomAudioUrl] = useState<string>('');

  const loadCustomAudioUrl = (url: string) => {
    if (!url.trim()) return;
    let embedSrc = url.trim();
    let type: 'youtube' | 'spotify' = 'youtube';

    // Parse YouTube URL
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      type = 'youtube';
      let videoId = '';
      if (url.includes('v=')) {
        videoId = url.split('v=')[1]?.split('&')[0] || '';
      } else if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1]?.split('?')[0] || '';
      }
      if (videoId) {
        embedSrc = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`;
      }
    } else if (url.includes('spotify.com')) {
      type = 'spotify';
      // convert spotify link to embed: https://open.spotify.com/embed/...
      if (!url.includes('/embed/')) {
        embedSrc = url.replace('open.spotify.com/', 'open.spotify.com/embed/');
      }
    }

    const customStation: AudioStation = {
      id: `custom-${Date.now()}`,
      name: 'Custom Stream',
      genre: type === 'youtube' ? 'YouTube Stream' : 'Spotify Music',
      duration: 'Live / Custom',
      type,
      embedSrc,
    };

    setAudioStations((prev) => [customStation, ...prev]);
    setActiveStationId(customStation.id);
    setIsAudioPlaying(true);
    setCustomAudioUrl('');
  };

  // Life Audit
  const auditProgress = 76;

  // LocalStorage persistence
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.profile) setProfile(parsed.profile);
        if (parsed.habits) setHabits(parsed.habits);
        if (parsed.journalEntries) setJournalEntries(parsed.journalEntries);
        if (parsed.lifeDimensions) setLifeDimensions(parsed.lifeDimensions);
        if (parsed.currentMood) setCurrentMood(parsed.currentMood);
        if (parsed.upcomingEvents) setUpcomingEvents(parsed.upcomingEvents);
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          profile,
          habits,
          journalEntries,
          lifeDimensions,
          currentMood,
          upcomingEvents,
        })
      );
    } catch {
      // ignore
    }
  }, [profile, habits, journalEntries, lifeDimensions, currentMood, upcomingEvents]);

  return (
    <DataContext.Provider
      value={{
        activeTab,
        setActiveTab,
        profile,
        setProfile,
        currentMood,
        setCurrentMood,
        hydration,
        setHydration,
        sleepHours,
        sleepMinutes,
        setSleep,
        movementPercent,
        setMovementPercent,
        studySeconds,
        isStudyActive,
        studySubject,
        setStudySubject,
        toggleStudyTimer,
        resetStudyTimer,
        heatmapData,
        currentStreak,
        promise,
        incrementPromise,
        updatePromiseText,
        habits,
        toggleHabit,
        addHabit,
        deleteHabit,
        overallProgress,
        dailyRating,
        setDailyRating,
        journalDraft,
        setJournalDraft,
        saveJournalEntry,
        journalEntries,
        upcomingEvents,
        addUpcomingEvent,
        removeUpcomingEvent,
        lifeDimensions,
        updateDimension,
        alignmentPercent,
        audioStations,
        activeStationId,
        setActiveStationId,
        isAudioPlaying,
        setIsAudioPlaying,
        customAudioUrl,
        setCustomAudioUrl,
        loadCustomAudioUrl,
        auditProgress,
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
