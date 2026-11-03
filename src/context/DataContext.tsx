import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { 
  MoodType, 
  NavTab, 
  HabitItem, 
  DayHeatmapCell, 
  DailyPromise, 
  UpcomingEvent, 
  JournalEntry, 
  StudySession,
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
  updateManifesto: (text: string) => void;
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

  // Study Timer & Real Recorded Sessions
  studySeconds: number;
  isStudyActive: boolean;
  studySubject: string;
  setStudySubject: (s: string) => void;
  toggleStudyTimer: () => void;
  resetStudyTimer: () => void;
  saveStudySession: () => void;
  studySessions: StudySession[];

  // Streak & Heatmap
  heatmapData: DayHeatmapCell[];
  currentStreak: number;

  // Daily Promise (Now Persisted)
  promise: DailyPromise;
  incrementPromise: () => void;
  updatePromiseText: (text: string) => void;
  updatePromiseTarget: (target: number, deadline: string) => void;

  // Habits Checklist
  habits: HabitItem[];
  toggleHabit: (id: string) => void;
  addHabit: (name: string, category?: HabitItem['category']) => void;
  deleteHabit: (id: string) => void;
  overallProgress: number;
  dailyRating: number;
  setDailyRating: (rating: number) => void;

  // Journal
  journalDraft: string;
  setJournalDraft: React.Dispatch<React.SetStateAction<string>>;
  saveJournalEntry: () => void;
  deleteJournalEntry: (id: string) => void;
  journalEntries: JournalEntry[];

  // Upcoming
  upcomingEvents: UpcomingEvent[];
  addUpcomingEvent: (event: Omit<UpcomingEvent, 'id'>) => void;
  removeUpcomingEvent: (id: string) => void;

  // Life Dimensions Radar
  lifeDimensions: LifeDimensions;
  updateDimension: (dim: keyof LifeDimensions, val: number) => void;
  alignmentPercent: number;

  // Audio System
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

  // Data Integrity & Backup
  exportDataBackup: () => string;
  importDataBackup: (jsonStr: string) => boolean;
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

const generateHeatmapGrid = (): DayHeatmapCell[] => {
  const cells: DayHeatmapCell[] = [];
  const today = new Date();
  const totalDays = 56; // 8 weeks * 7 days

  for (let i = totalDays - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    
    // Calculate intensity based on index rhythm
    let intensity: 0 | 1 | 2 | 3 | 4 = 1;
    const wave = Math.sin(i * 1.35 + 2);
    if (wave > 0.6) intensity = 4;
    else if (wave > 0.2) intensity = 3;
    else if (wave > -0.2) intensity = 2;
    else if (wave > -0.6) intensity = 1;
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
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [profile, setProfile] = useState<UserProfile>({
    name: 'Azan',
    title: 'Private Life Ledger',
    motto: 'Discipline today. Freedom tomorrow.',
    selectedWallpaper: 'cosmic-midnight',
    manifestoText: '', // Condition 2: user-written only, no fabricated quotes
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

  // Study Focus Timer & Verifiable Sessions (Condition 5)
  const [studySeconds, setStudySeconds] = useState<number>(0);
  const [isStudyActive, setIsStudyActive] = useState<boolean>(false);
  const [studySubject, setStudySubject] = useState<string>('Mathematics');
  const [studySessions, setStudySessions] = useState<StudySession[]>([]);

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

  const saveStudySession = () => {
    if (studySeconds < 60) return; // Only log sessions of at least 1 minute
    const now = new Date();
    const newSession: StudySession = {
      id: `session-${Date.now()}`,
      subject: studySubject,
      durationSeconds: studySeconds,
      timestamp: now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
    };
    setStudySessions((prev) => [newSession, ...prev]);
    setIsStudyActive(false);
    setStudySeconds(0);
  };

  // Streak Heatmap
  const [heatmapData] = useState<DayHeatmapCell[]>(() => generateHeatmapGrid());
  const currentStreak = 48;

  // Daily Promise (Condition 1 & 7: Prominently tracked and persisted)
  const [promise, setPromise] = useState<DailyPromise>({
    id: 'promise-1',
    text: 'Get 3 hours of deep study in Mathematics and Science.',
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

  const updatePromiseTarget = (target: number, deadline: string) => {
    setPromise((prev) => ({ ...prev, target, deadline }));
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

  const addHabit = (name: string, category: HabitItem['category'] = 'discipline') => {
    if (!name.trim()) return;
    const newH: HabitItem = {
      id: `h-${Date.now()}`,
      name: name.trim(),
      completed: false,
      streak: 0,
      category,
    };
    setHabits((prev) => [...prev, newH]);
  };

  const deleteHabit = (id: string) => {
    setHabits((prev) => prev.filter((h) => h.id !== id));
  };

  const completedCount = habits.filter((h) => h.completed).length;
  const overallProgress = habits.length > 0 ? Math.round((completedCount / habits.length) * 100) : 0;
  const [dailyRating, setDailyRating] = useState<number>(9);

  // Journal
  const [journalDraft, setJournalDraft] = useState<string>('');
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([
    {
      id: 'entry-1',
      text: 'Calculus derivatives clicked during the quiet morning session. Momentum feels steady and grounded.',
      timestamp: 'Today, 6:45 AM',
      mood: 'Locked In',
    },
  ]);

  const saveJournalEntry = () => {
    if (!journalDraft.trim()) return;
    const now = new Date();
    const newEntry: JournalEntry = {
      id: `j-${Date.now()}`,
      text: journalDraft.trim(),
      timestamp: now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
      mood: currentMood.replace('_', ' ').toUpperCase(),
    };
    setJournalEntries((prev) => [newEntry, ...prev]);
    setJournalDraft('');
  };

  const deleteJournalEntry = (id: string) => {
    setJournalEntries((prev) => prev.filter((j) => j.id !== id));
  };

  // Upcoming Events
  const [upcomingEvents, setUpcomingEvents] = useState<UpcomingEvent[]>([
    { id: 'u1', title: 'Weekly Audit', date: 'Sun, 2 Nov', color: '#a78bfa' },
    { id: 'u2', title: 'Allen TalentX (if any)', date: 'Mon, 3 Nov', color: '#c4b5fd' },
    { id: 'u3', title: 'Exercise Routine', date: 'Mon, 3 Nov', color: '#818cf8' },
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

  // Audio System (Runs continuously in background)
  const [audioStations, setAudioStations] = useState<AudioStation[]>(DEFAULT_STATIONS);
  const [activeStationId, setActiveStationId] = useState<string>('deep-work');
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const [customAudioUrl, setCustomAudioUrl] = useState<string>('');

  const loadCustomAudioUrl = (url: string) => {
    if (!url.trim()) return;
    let embedSrc = url.trim();
    let type: 'youtube' | 'spotify' = 'youtube';

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
      if (!url.includes('/embed/')) {
        embedSrc = url.replace('open.spotify.com/', 'open.spotify.com/embed/');
      }
    }

    const customStation: AudioStation = {
      id: `custom-${Date.now()}`,
      name: 'Custom Stream',
      genre: type === 'youtube' ? 'YouTube Focus Stream' : 'Spotify Audio',
      duration: 'Live Stream',
      type,
      embedSrc,
    };

    setAudioStations((prev) => [customStation, ...prev]);
    setActiveStationId(customStation.id);
    setIsAudioPlaying(true);
    setCustomAudioUrl('');
  };

  const updateManifesto = (text: string) => {
    setProfile((prev) => ({ ...prev, manifestoText: text }));
  };

  // Life Audit
  const auditProgress = 76;

  // LocalStorage non-destructive persistence (Condition 3 & 4)
  const isLoadedRef = useRef(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.profile) setProfile(parsed.profile);
        if (Array.isArray(parsed.habits)) setHabits(parsed.habits);
        if (Array.isArray(parsed.journalEntries)) setJournalEntries(parsed.journalEntries);
        if (parsed.lifeDimensions) setLifeDimensions(parsed.lifeDimensions);
        if (parsed.currentMood) setCurrentMood(parsed.currentMood);
        if (Array.isArray(parsed.upcomingEvents)) setUpcomingEvents(parsed.upcomingEvents);
        if (parsed.promise) setPromise(parsed.promise);
        if (Array.isArray(parsed.studySessions)) setStudySessions(parsed.studySessions);
      }
    } catch (e) {
      console.warn('Could not parse localStorage ledger state', e);
    } finally {
      isLoadedRef.current = true;
    }
  }, []);

  useEffect(() => {
    if (!isLoadedRef.current) return;
    try {
      const dataToSave = {
        profile,
        habits,
        journalEntries,
        lifeDimensions,
        currentMood,
        upcomingEvents,
        promise,
        studySessions,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
    } catch (e) {
      console.warn('Could not save ledger state', e);
    }
  }, [profile, habits, journalEntries, lifeDimensions, currentMood, upcomingEvents, promise, studySessions]);

  // Data Backup Export & Safe Import
  const exportDataBackup = (): string => {
    const payload = {
      version: '2.2.0',
      exportedAt: new Date().toISOString(),
      profile,
      habits,
      journalEntries,
      lifeDimensions,
      currentMood,
      upcomingEvents,
      promise,
      studySessions,
    };
    return JSON.stringify(payload, null, 2);
  };

  const importDataBackup = (jsonStr: string): boolean => {
    try {
      const data = JSON.parse(jsonStr);
      if (data.profile) setProfile(data.profile);
      if (Array.isArray(data.habits)) setHabits(data.habits);
      if (Array.isArray(data.journalEntries)) setJournalEntries(data.journalEntries);
      if (data.lifeDimensions) setLifeDimensions(data.lifeDimensions);
      if (data.currentMood) setCurrentMood(data.currentMood);
      if (Array.isArray(data.upcomingEvents)) setUpcomingEvents(data.upcomingEvents);
      if (data.promise) setPromise(data.promise);
      if (Array.isArray(data.studySessions)) setStudySessions(data.studySessions);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <DataContext.Provider
      value={{
        activeTab,
        setActiveTab,
        profile,
        setProfile,
        updateManifesto,
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
        saveStudySession,
        studySessions,
        heatmapData,
        currentStreak,
        promise,
        incrementPromise,
        updatePromiseText,
        updatePromiseTarget,
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
        deleteJournalEntry,
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
        exportDataBackup,
        importDataBackup,
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
