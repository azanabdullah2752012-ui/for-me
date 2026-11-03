import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import {
  Habit,
  StudySession,
  PromiseItem,
  DailyLog,
  LifeDimension,
  AudioTrack,
} from '../types';
import { sound } from '../audio/sound';

export const formatDateKey = (d: Date = new Date()): string => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
};

interface StudyTimerState {
  isRunning: boolean;
  seconds: number;
  subject: string;
  topic: string;
}

interface DataContextType {
  userName: string;
  setUserName: (name: string) => void;
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  currentLog: DailyLog;
  updateDailyLog: (partial: Partial<DailyLog>) => void;
  incrementWater: () => void;
  toggleChecklist: (key: string) => void;
  setDailyVibe: (vibe: string) => void;
  habits: Habit[];
  toggleHabit: (id: string, dateKey?: string) => void;
  addHabit: (title: string, category: Habit['category']) => void;
  deleteHabit: (id: string) => void;
  promises: PromiseItem[];
  setPromiseStatus: (id: string, status: 'kept' | 'broken' | 'excused') => void;
  addPromise: (promise: Omit<PromiseItem, 'id' | 'streak' | 'history'>) => void;
  studySessions: StudySession[];
  addStudySession: (session: Omit<StudySession, 'id'>) => void;
  deleteStudySession: (id: string) => void;
  studyTimer: StudyTimerState;
  startStudyTimer: (subject?: string, topic?: string) => void;
  pauseStudyTimer: () => void;
  resetStudyTimer: () => void;
  updateStudyTimerMeta: (subject: string, topic: string) => void;
  lifeDimensions: LifeDimension[];
  updateLifeDimension: (id: string, score: number) => void;
  activeTrackIndex: number;
  setActiveTrackIndex: (idx: number) => void;
  isPlayingAudio: boolean;
  toggleAudioPlayback: () => void;
  exportDataJSON: () => string;
  importDataJSON: (json: string) => boolean;
  resetAllData: () => void;
}

const STORAGE_KEY = 'forme_sanctuary_v3';

const DEFAULT_HABITS: Habit[] = [
  { id: 'h1', title: 'Deep Study (3 Hours)', category: 'discipline', streak: 48, completions: {} },
  { id: 'h2', title: 'Hydration 2L+', category: 'body', streak: 14, completions: {} },
  { id: 'h3', title: 'Nightly Reflection & Debrief', category: 'mind', streak: 32, completions: {} },
  { id: 'h4', title: 'Physical Movement / Workout', category: 'body', streak: 21, completions: {} },
  { id: 'h5', title: 'Read 20 Pages', category: 'craft', streak: 9, completions: {} },
];

const DEFAULT_PROMISES: PromiseItem[] = [
  {
    id: 'p1',
    title: 'Get 3 hours of deep study (Maths + Science).',
    category: 'sacred',
    whyItMatters: 'Discipline today creates true intellectual freedom tomorrow.',
    consequenceIfBroken: 'Write an honest autopsy and log a makeup 45-min block next morning.',
    streak: 12,
    history: {},
  },
  {
    id: 'p2',
    title: 'No mindless phone scrolling before sleep.',
    category: 'discipline',
    whyItMatters: 'Guards mental clarity and preserves deep restorative sleep.',
    consequenceIfBroken: 'Phone leaves bedroom immediately upon recognition.',
    streak: 8,
    history: {},
  },
];

const DEFAULT_DIMENSIONS: LifeDimension[] = [
  { id: 'career', name: 'Career / Mastery', score: 9.0 },
  { id: 'health', name: 'Health & Vitality', score: 8.5 },
  { id: 'relationships', name: 'Relationships', score: 8.0 },
  { id: 'finance', name: 'Finance & Systems', score: 7.5 },
  { id: 'mind', name: 'Mind & Peace', score: 7.5 },
  { id: 'environment', name: 'Environment', score: 8.5 },
];

export const AUDIO_TRACKS: AudioTrack[] = [
  { id: 'deep-work', title: 'Deep Work', genre: 'Binaural Alpha (10Hz)', duration: '1:00:00', type: 'synth' },
  { id: 'lofi', title: 'Lofi & Chill', genre: 'Ambient Harmonics', duration: '45:00', type: 'synth' },
  { id: 'ambient', title: 'Ambient & Drone', genre: 'Cosmic Resonance', duration: '1:30:00', type: 'synth' },
  { id: 'rain', title: 'Rain & Focus', genre: 'Pink Noise Water', duration: '1:15:00', type: 'synth' },
];

const DataContext = createContext<DataContextType | null>(null);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userName, setUserName] = useState<string>('Kaiser');
  const [selectedDate, setSelectedDate] = useState<string>(() => formatDateKey());
  const [dailyLogs, setDailyLogs] = useState<Record<string, DailyLog>>({});
  const [habits, setHabits] = useState<Habit[]>(DEFAULT_HABITS);
  const [promises, setPromises] = useState<PromiseItem[]>(DEFAULT_PROMISES);
  const [studySessions, setStudySessions] = useState<StudySession[]>([]);
  const [lifeDimensions, setLifeDimensions] = useState<LifeDimension[]>(DEFAULT_DIMENSIONS);
  const [activeTrackIndex, setActiveTrackIndex] = useState<number>(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  // Live Focus Stopwatch State
  const [studyTimer, setStudyTimer] = useState<StudyTimerState>({
    isRunning: false,
    seconds: 25 * 60 + 17, // 00:25:17 initial matching reference
    subject: 'Mathematics',
    topic: 'Calculus Problem Set',
  });

  // Load from LocalStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.userName) setUserName(parsed.userName);
        if (parsed.dailyLogs) setDailyLogs(parsed.dailyLogs);
        if (parsed.habits) setHabits(parsed.habits);
        if (parsed.promises) setPromises(parsed.promises);
        if (parsed.studySessions) setStudySessions(parsed.studySessions);
        if (parsed.lifeDimensions) setLifeDimensions(parsed.lifeDimensions);
      }
    } catch (e) {
      console.warn('Failed to load state from localStorage', e);
    }
  }, []);

  // Persist to LocalStorage
  useEffect(() => {
    try {
      const payload = {
        userName,
        dailyLogs,
        habits,
        promises,
        studySessions,
        lifeDimensions,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (e) {
      console.warn('Failed to persist state to localStorage', e);
    }
  }, [userName, dailyLogs, habits, promises, studySessions, lifeDimensions]);

  // Stopwatch Interval
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (studyTimer.isRunning) {
      interval = setInterval(() => {
        setStudyTimer((prev) => ({ ...prev, seconds: prev.seconds + 1 }));
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [studyTimer.isRunning]);

  // Current Daily Log for selectedDate
  const currentLog = useMemo((): DailyLog => {
    return (
      dailyLogs[selectedDate] || {
        date: selectedDate,
        vibe: 'Locked In',
        waterGlasses: 6,
        sleepHours: 7.7,
        movementRating: 72,
        studyMinutes: 75,
        quickJournal: '',
        checklist: {
          'Drink 2L Water': true,
          'Complete Study Goal': true,
          'Nightly Review': true,
          'Workout': false,
          'Read 20 Pages': false,
        },
        ratingOutOfTen: 9,
      }
    );
  }, [dailyLogs, selectedDate]);

  const updateDailyLog = (partial: Partial<DailyLog>) => {
    setDailyLogs((prev) => ({
      ...prev,
      [selectedDate]: {
        ...currentLog,
        ...partial,
        date: selectedDate,
      },
    }));
  };

  const incrementWater = () => {
    sound.tick();
    const nextGlasses = Math.min(16, (currentLog.waterGlasses || 0) + 1);
    updateDailyLog({ waterGlasses: nextGlasses });
  };

  const toggleChecklist = (key: string) => {
    sound.tick();
    const updated = {
      ...currentLog.checklist,
      [key]: !currentLog.checklist[key],
    };
    updateDailyLog({ checklist: updated });
  };

  const setDailyVibe = (vibe: string) => {
    sound.tick();
    updateDailyLog({ vibe });
  };

  const toggleHabit = (id: string, dateKey: string = selectedDate) => {
    sound.tick();
    setHabits((prev) =>
      prev.map((h) => {
        if (h.id !== id) return h;
        const current = Boolean(h.completions[dateKey]);
        const next = !current;
        const newCompletions = { ...h.completions, [dateKey]: next };
        const newStreak = next ? (h.streak || 0) + 1 : Math.max(0, (h.streak || 0) - 1);
        return {
          ...h,
          streak: newStreak,
          completions: newCompletions,
        };
      })
    );
  };

  const addHabit = (title: string, category: Habit['category']) => {
    sound.complete();
    const newH: Habit = {
      id: 'h_' + Date.now(),
      title,
      category,
      streak: 1,
      completions: { [selectedDate]: true },
    };
    setHabits((prev) => [...prev, newH]);
  };

  const deleteHabit = (id: string) => {
    sound.tick();
    setHabits((prev) => prev.filter((h) => h.id !== id));
  };

  const setPromiseStatus = (id: string, status: 'kept' | 'broken' | 'excused') => {
    if (status === 'kept') sound.complete();
    else sound.strike();

    setPromises((prev) =>
      prev.map((p) => {
        if (p.id !== id) return p;
        const nextStreak = status === 'kept' ? p.streak + 1 : status === 'broken' ? 0 : p.streak;
        return {
          ...p,
          streak: nextStreak,
          history: {
            ...p.history,
            [selectedDate]: status,
          },
        };
      })
    );
  };

  const addPromise = (p: Omit<PromiseItem, 'id' | 'streak' | 'history'>) => {
    sound.complete();
    const newP: PromiseItem = {
      ...p,
      id: 'p_' + Date.now(),
      streak: 0,
      history: {},
    };
    setPromises((prev) => [...prev, newP]);
  };

  const addStudySession = (s: Omit<StudySession, 'id'>) => {
    sound.complete();
    const newS: StudySession = {
      ...s,
      id: 's_' + Date.now(),
    };
    setStudySessions((prev) => [newS, ...prev]);
  };

  const deleteStudySession = (id: string) => {
    sound.tick();
    setStudySessions((prev) => prev.filter((s) => s.id !== id));
  };

  const startStudyTimer = (subject?: string, topic?: string) => {
    sound.complete();
    setStudyTimer((prev) => ({
      ...prev,
      isRunning: true,
      subject: subject || prev.subject,
      topic: topic || prev.topic,
    }));
  };

  const pauseStudyTimer = () => {
    sound.tick();
    setStudyTimer((prev) => ({ ...prev, isRunning: false }));
  };

  const resetStudyTimer = () => {
    sound.tick();
    setStudyTimer((prev) => ({ ...prev, isRunning: false, seconds: 0 }));
  };

  const updateStudyTimerMeta = (subject: string, topic: string) => {
    setStudyTimer((prev) => ({ ...prev, subject, topic }));
  };

  const updateLifeDimension = (id: string, score: number) => {
    setLifeDimensions((prev) =>
      prev.map((d) => (d.id === id ? { ...d, score } : d))
    );
  };

  const toggleAudioPlayback = () => {
    if (isPlayingAudio) {
      sound.stopSoundscape();
      setIsPlayingAudio(false);
    } else {
      const currentTrack = AUDIO_TRACKS[activeTrackIndex] || AUDIO_TRACKS[0];
      sound.startSoundscape(currentTrack.id);
      setIsPlayingAudio(true);
    }
  };

  const exportDataJSON = () => {
    return JSON.stringify(
      {
        userName,
        dailyLogs,
        habits,
        promises,
        studySessions,
        lifeDimensions,
        exportedAt: new Date().toISOString(),
      },
      null,
      2
    );
  };

  const importDataJSON = (json: string): boolean => {
    try {
      const data = JSON.parse(json);
      if (data.userName) setUserName(data.userName);
      if (data.dailyLogs) setDailyLogs(data.dailyLogs);
      if (data.habits) setHabits(data.habits);
      if (data.promises) setPromises(data.promises);
      if (data.studySessions) setStudySessions(data.studySessions);
      if (data.lifeDimensions) setLifeDimensions(data.lifeDimensions);
      sound.complete();
      return true;
    } catch {
      sound.strike();
      return false;
    }
  };

  const resetAllData = () => {
    sound.strike();
    localStorage.removeItem(STORAGE_KEY);
    setUserName('Kaiser');
    setDailyLogs({});
    setHabits(DEFAULT_HABITS);
    setPromises(DEFAULT_PROMISES);
    setStudySessions([]);
    setLifeDimensions(DEFAULT_DIMENSIONS);
  };

  return (
    <DataContext.Provider
      value={{
        userName,
        setUserName,
        selectedDate,
        setSelectedDate,
        currentLog,
        updateDailyLog,
        incrementWater,
        toggleChecklist,
        setDailyVibe,
        habits,
        toggleHabit,
        addHabit,
        deleteHabit,
        promises,
        setPromiseStatus,
        addPromise,
        studySessions,
        addStudySession,
        deleteStudySession,
        studyTimer,
        startStudyTimer,
        pauseStudyTimer,
        resetStudyTimer,
        updateStudyTimerMeta,
        lifeDimensions,
        updateLifeDimension,
        activeTrackIndex,
        setActiveTrackIndex,
        isPlayingAudio,
        toggleAudioPlayback,
        exportDataJSON,
        importDataJSON,
        resetAllData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const ctx = useContext(DataContext);
  if (!ctx) {
    throw new Error('useData must be used within DataProvider');
  }
  return ctx;
};
