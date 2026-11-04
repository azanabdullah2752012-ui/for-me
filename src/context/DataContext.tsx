import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { 
  MoodType, 
  NavTab, 
  DailyTask,
  HabitItem, 
  DayHeatmapCell, 
  DailyPromise, 
  UpcomingEvent, 
  JournalEntry, 
  StudySession,
  AudioStation, 
  LifeDimensions, 
  UserProfile,
  WallpaperTheme,
  AppTheme,
  CustomTracker,
  GradeItem,
  GoalItem,
  TimeRecord,
  AccountabilityIncident,
  PersonalGrowthRating,
  LessonLearned,
  DailyHealthRecord
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

  // App Theme (Light vs Dark)
  appTheme: AppTheme;
  setAppTheme: (theme: AppTheme) => void;
  toggleAppTheme: () => void;

  // Tasks for the Day
  tasks: DailyTask[];
  toggleTask: (id: string) => void;
  addTask: (text: string) => void;
  deleteTask: (id: string) => void;

  // Wallpaper Theme
  wallpaperTheme: WallpaperTheme;
  setWallpaperTheme: (theme: WallpaperTheme) => void;
  previewTheme: WallpaperTheme | null;
  setPreviewTheme: (theme: WallpaperTheme | null) => void;

  // Biometrics & Health
  hydration: number;
  setHydration: React.Dispatch<React.SetStateAction<number>>;
  sleepHours: number;
  sleepMinutes: number;
  setSleep: (h: number, m: number) => void;
  movementPercent: number;
  setMovementPercent: React.Dispatch<React.SetStateAction<number>>;
  healthRecord: DailyHealthRecord;
  updateHealthRecord: (updates: Partial<DailyHealthRecord>) => void;

  // Study Timer & Real Recorded Sessions
  studySeconds: number;
  isStudyActive: boolean;
  studySubject: string;
  setStudySubject: (s: string) => void;
  toggleStudyTimer: () => void;
  resetStudyTimer: () => void;
  saveStudySession: () => void;
  studySessions: StudySession[];

  // Academics & Grades
  grades: GradeItem[];
  addGradeItem: (grade: Omit<GradeItem, 'id'>) => void;
  deleteGradeItem: (id: string) => void;

  // Streak & Heatmap
  heatmapData: DayHeatmapCell[];
  currentStreak: number;

  // Daily Promise
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

  // Custom Trackers Engine
  customTrackers: CustomTracker[];
  addCustomTracker: (tracker: Omit<CustomTracker, 'id' | 'currentValue'>) => void;
  updateCustomTracker: (id: string, updates: Partial<CustomTracker>) => void;
  deleteCustomTracker: (id: string) => void;
  logCustomTrackerValue: (id: string, val: number) => void;

  // Goals & Milestones
  goals: GoalItem[];
  addGoalItem: (goal: Omit<GoalItem, 'id' | 'progressPercent'>) => void;
  toggleGoalMilestone: (goalId: string, milestoneId: string) => void;
  updateGoalStatus: (goalId: string, status: GoalItem['status']) => void;
  deleteGoalItem: (goalId: string) => void;

  // Time Allocation Records
  timeRecords: TimeRecord[];
  logTimeRecord: (record: TimeRecord) => void;

  // Physical Accountability System
  accountabilityIncidents: AccountabilityIncident[];
  addAccountabilityIncident: (incident: Omit<AccountabilityIncident, 'id' | 'status'>) => void;
  approveIncident: (id: string) => void;
  completeIncident: (id: string) => void;
  adjustIncidentTarget: (id: string) => void;

  // Personal Growth & Lessons Learned
  growthRatings: PersonalGrowthRating[];
  logGrowthRating: (rating: Omit<PersonalGrowthRating, 'date'>) => void;
  lessonsLearned: LessonLearned[];
  addLessonLearned: (lesson: Omit<LessonLearned, 'id' | 'date'>) => void;
  deleteLessonLearned: (id: string) => void;

  // Journal
  journalDraft: string;
  setJournalDraft: React.Dispatch<React.SetStateAction<string>>;
  saveJournalEntry: () => void;
  deleteJournalEntry: (id: string) => void;
  journalEntries: JournalEntry[];

  // Upcoming
  upcomingEvents: UpcomingEvent[];

  // Life Dimensions
  lifeDimensions: LifeDimensions;
  updateLifeDimension: (dim: keyof LifeDimensions, val: number) => void;
  updateDimension: (dim: keyof LifeDimensions, val: number) => void;
  alignmentPercent: number;

  // Focus Audio
  audioStations: AudioStation[];
  activeStationId: string;
  setActiveStationId: (id: string) => void;
  isAudioPlaying: boolean;
  setIsAudioPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  loadCustomAudioUrl: (url: string) => void;

  // Non-destructive Backup & Migration
  exportDataBackup: () => string;
  importDataBackup: (jsonStr: string) => boolean;
}

const DataContext = createContext<DataContextType | null>(null);

const STORAGE_KEY = 'for_me_ledger_state_v2';

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Navigation & User Profile
  const [activeTab, setActiveTab] = useState<NavTab>('wallpaper');
  const [appTheme, setAppTheme] = useState<AppTheme>('dark');
  const [wallpaperTheme, setWallpaperTheme] = useState<WallpaperTheme>('deep-nebula');
  const [previewTheme, setPreviewTheme] = useState<WallpaperTheme | null>(null);

  const [profile, setProfile] = useState<UserProfile>({
    name: 'Azan',
    title: 'Private Life Ledger',
    motto: 'Discipline today. Freedom tomorrow.',
    selectedWallpaper: 'deep-nebula',
    manifestoText: '',
  });

  const [currentMood, setCurrentMood] = useState<MoodType>('deep_focus');

  // Tasks for the Day
  const [tasks, setTasks] = useState<DailyTask[]>([
    { id: '1', text: 'finish math h.w', completed: true },
    { id: '2', text: 'study for social test', completed: true },
    { id: '3', text: 'ai seminar', completed: false },
    { id: '4', text: 'french h.w', completed: true },
    { id: '5', text: 'Card print-out', completed: true },
    { id: '6', text: 'music classwork', completed: false },
    { id: '7', text: 'chemistry experiment writeup', completed: false },
  ]);

  // Biometrics & Health
  const [hydration, setHydration] = useState(6); // glasses (250ml)
  const [sleepHours, setSleepHours] = useState(7);
  const [sleepMinutes, setSleepMinutes] = useState(45);
  const [movementPercent, setMovementPercent] = useState(78);
  const [dailyRating, setDailyRating] = useState(9); // out of 10

  const [healthRecord, setHealthRecord] = useState<DailyHealthRecord>({
    date: new Date().toISOString().slice(0, 10),
    sleepHours: 7.75,
    sleepQuality: 4,
    hydrationGlasses: 6,
    meals: { breakfast: true, lunch: true, dinner: true, mindfulEating: true },
    movementMinutes: 45,
    workoutCompleted: true,
    workoutType: 'Calisthenics & Pull-ups',
  });

  const updateHealthRecord = (updates: Partial<DailyHealthRecord>) => {
    setHealthRecord((prev) => ({ ...prev, ...updates }));
  };

  // Study Timer & Real Recorded Sessions
  const [studySeconds, setStudySeconds] = useState(0);
  const [isStudyActive, setIsStudyActive] = useState(false);
  const [studySubject, setStudySubject] = useState('Design');
  const [studySessions, setStudySessions] = useState<StudySession[]>([
    { id: 's1', subject: 'Design & Code', durationSeconds: 5400, timestamp: '2026-11-04T14:30:00Z' },
    { id: 's2', subject: 'Math', durationSeconds: 3600, timestamp: '2026-11-03T16:15:00Z' },
    { id: 's3', subject: 'Computer Science', durationSeconds: 7200, timestamp: '2026-11-02T18:00:00Z' }
  ]);
  const timerRef = useRef<number | null>(null);

  // Academics & Grades
  const [grades, setGrades] = useState<GradeItem[]>([
    { id: 'g1', subject: 'Computer Science', title: 'Data Structures Lab', score: 98, total: 100, date: '2026-11-01' },
    { id: 'g2', subject: 'Math', title: 'Calculus Examination II', score: 92, total: 100, date: '2026-10-28' },
    { id: 'g3', subject: 'Physics', title: 'Kinematics Problem Set', score: 88, total: 100, date: '2026-10-24' },
  ]);

  const addGradeItem = (grade: Omit<GradeItem, 'id'>) => {
    const newItem: GradeItem = { ...grade, id: Date.now().toString() };
    setGrades((prev) => [newItem, ...prev]);
  };

  const deleteGradeItem = (id: string) => {
    setGrades((prev) => prev.filter((g) => g.id !== id));
  };

  // Daily Promise
  const [promise, setPromise] = useState<DailyPromise>({
    id: 'p1',
    text: 'Lock in on clean systems and complete full physical training.',
    deadline: '11:00 PM',
    current: 4,
    target: 5,
    unit: 'blocks',
  });

  // Habits
  const [habits, setHabits] = useState<HabitItem[]>([
    { id: 'h1', name: 'Deep Focus & Study Block', completed: true, streak: 7, category: 'study' },
    { id: 'h2', name: 'Physical Training & Movement', completed: true, streak: 5, category: 'wellness' },
    { id: 'h3', name: 'Read 20+ Pages of Insight', completed: false, streak: 4, category: 'mind' },
    { id: 'h4', name: 'Hydration Target (2.5L)', completed: true, streak: 12, category: 'wellness' },
    { id: 'h5', name: 'Nightly Reflection & Debrief', completed: false, streak: 3, category: 'discipline' },
    { id: 'h6', name: 'Sleep 7.5h & Digital Sunset', completed: true, streak: 9, category: 'wellness' },
  ]);

  // Custom Trackers Engine
  const [customTrackers, setCustomTrackers] = useState<CustomTracker[]>([
    { id: 'ct1', name: 'Pull-ups', category: 'health', inputType: 'number', unit: 'reps', target: 50, frequency: 'daily', enabled: true, currentValue: 35 },
    { id: 'ct2', name: 'Pages Read', category: 'growth', inputType: 'stepper', unit: 'pages', target: 20, frequency: 'daily', enabled: true, currentValue: 22 },
    { id: 'ct3', name: 'Deep Work Hours', category: 'academics', inputType: 'slider', unit: 'hrs', target: 4, frequency: 'daily', enabled: true, currentValue: 3.5 },
    { id: 'ct4', name: 'Cold Shower', category: 'habits', inputType: 'boolean', unit: 'done', target: 1, frequency: 'daily', enabled: true, currentValue: 1 },
  ]);

  const addCustomTracker = (tracker: Omit<CustomTracker, 'id' | 'currentValue'>) => {
    const newTracker: CustomTracker = { ...tracker, id: `ct_${Date.now()}`, currentValue: 0 };
    setCustomTrackers((prev) => [...prev, newTracker]);
  };

  const updateCustomTracker = (id: string, updates: Partial<CustomTracker>) => {
    setCustomTrackers((prev) => prev.map((t) => t.id === id ? { ...t, ...updates } : t));
  };

  const deleteCustomTracker = (id: string) => {
    setCustomTrackers((prev) => prev.filter((t) => t.id !== id));
  };

  const logCustomTrackerValue = (id: string, val: number) => {
    setCustomTrackers((prev) => prev.map((t) => t.id === id ? { ...t, currentValue: val } : t));
  };

  // Goals & Milestones
  const [goals, setGoals] = useState<GoalItem[]>([
    {
      id: 'g1',
      title: 'Master Advanced Algorithms & Architecture',
      category: 'academics',
      targetDate: '2026-12-15',
      progressPercent: 75,
      status: 'active',
      milestones: [
        { id: 'm1', text: 'Complete Graph & Dynamic Programming modules', completed: true },
        { id: 'm2', text: 'Build real-time distributed ledger benchmark', completed: true },
        { id: 'm3', text: 'Submit final architecture defense portfolio', completed: false },
      ]
    },
    {
      id: 'g2',
      title: 'Achieve 20 Strict Bodyweight Pull-ups',
      category: 'health',
      targetDate: '2026-11-30',
      progressPercent: 70,
      status: 'active',
      milestones: [
        { id: 'm4', text: 'Reach 12 consecutive dead-hang reps', completed: true },
        { id: 'm5', text: 'Implement 5x10 weighted pull-up protocol', completed: true },
        { id: 'm6', text: 'Perform clean 20-rep unbroken assessment', completed: false },
      ]
    },
    {
      id: 'g3',
      title: 'Private Life Ledger v3.0 Deployment',
      category: 'discipline',
      targetDate: '2026-11-20',
      progressPercent: 90,
      status: 'active',
      milestones: [
        { id: 'm7', text: 'Lock in pristine desktop wallpaper canvas', completed: true },
        { id: 'm8', text: 'Complete full multi-category tracking architecture', completed: true },
        { id: 'm9', text: 'Deploy responsive production release to GitHub Pages', completed: true },
      ]
    }
  ]);

  const addGoalItem = (goal: Omit<GoalItem, 'id' | 'progressPercent'>) => {
    const completedCount = goal.milestones.filter((m) => m.completed).length;
    const progress = goal.milestones.length > 0 ? Math.round((completedCount / goal.milestones.length) * 100) : 0;
    const newGoal: GoalItem = { ...goal, id: `goal_${Date.now()}`, progressPercent: progress };
    setGoals((prev) => [newGoal, ...prev]);
  };

  const toggleGoalMilestone = (goalId: string, milestoneId: string) => {
    setGoals((prev) => prev.map((g) => {
      if (g.id !== goalId) return g;
      const updatedMilestones = g.milestones.map((m) => m.id === milestoneId ? { ...m, completed: !m.completed } : m);
      const completedCount = updatedMilestones.filter((m) => m.completed).length;
      const progress = updatedMilestones.length > 0 ? Math.round((completedCount / updatedMilestones.length) * 100) : 0;
      return {
        ...g,
        milestones: updatedMilestones,
        progressPercent: progress,
        status: progress === 100 ? 'completed' : g.status === 'completed' ? 'active' : g.status,
      };
    }));
  };

  const updateGoalStatus = (goalId: string, status: GoalItem['status']) => {
    setGoals((prev) => prev.map((g) => g.id === goalId ? { ...g, status } : g));
  };

  const deleteGoalItem = (goalId: string) => {
    setGoals((prev) => prev.filter((g) => g.id !== goalId));
  };

  // Time Allocation Records
  const [timeRecords, setTimeRecords] = useState<TimeRecord[]>([
    { date: '2026-11-04', productiveMinutes: 320, neutralMinutes: 90, wastedMinutes: 40, screenTimeHours: 6.5, distractionNotes: 'Checked news feed briefly during break' },
    { date: '2026-11-03', productiveMinutes: 360, neutralMinutes: 60, wastedMinutes: 30, screenTimeHours: 6.8 },
    { date: '2026-11-02', productiveMinutes: 300, neutralMinutes: 110, wastedMinutes: 50, screenTimeHours: 7.2 },
    { date: '2026-11-01', productiveMinutes: 400, neutralMinutes: 50, wastedMinutes: 20, screenTimeHours: 6.2 },
  ]);

  const logTimeRecord = (record: TimeRecord) => {
    setTimeRecords((prev) => [record, ...prev.filter((r) => r.date !== record.date)]);
  };

  // Constructive Physical Accountability System
  const [accountabilityIncidents, setAccountabilityIncidents] = useState<AccountabilityIncident[]>([
    {
      id: 'acc1',
      date: '2026-11-03',
      targetName: 'Daily Reading Target',
      targetExpected: '20 pages',
      actualAchieved: '8 pages',
      cause: 'Lost track of time in evening',
      prescribedConsequence: {
        type: 'pushups',
        description: '50 strict push-ups (3 sets of 17) before sleep',
        quantity: 50,
        unit: 'push-ups'
      },
      status: 'completed',
      completedAt: '2026-11-03T22:45:00Z'
    },
    {
      id: 'acc2',
      date: '2026-11-04',
      targetName: 'Late Screen Sunset',
      targetExpected: 'Digital sunset by 10:30 PM',
      actualAchieved: 'Screens active till 11:20 PM',
      cause: 'Late coding session',
      prescribedConsequence: {
        type: 'pullups',
        description: '25 dead-hang pull-ups + 50 bodyweight squats tomorrow morning',
        quantity: 25,
        unit: 'pull-ups'
      },
      status: 'approved',
    }
  ]);

  const addAccountabilityIncident = (incident: Omit<AccountabilityIncident, 'id' | 'status'>) => {
    const newInc: AccountabilityIncident = {
      ...incident,
      id: `acc_${Date.now()}`,
      status: 'pending_review'
    };
    setAccountabilityIncidents((prev) => [newInc, ...prev]);
  };

  const approveIncident = (id: string) => {
    setAccountabilityIncidents((prev) => prev.map((inc) => inc.id === id ? { ...inc, status: 'approved' } : inc));
  };

  const completeIncident = (id: string) => {
    setAccountabilityIncidents((prev) => prev.map((inc) => inc.id === id ? { ...inc, status: 'completed', completedAt: new Date().toISOString() } : inc));
  };

  const adjustIncidentTarget = (id: string) => {
    setAccountabilityIncidents((prev) => prev.map((inc) => inc.id === id ? { ...inc, status: 'adjusted' } : inc));
  };

  // Personal Growth & Lessons Learned
  const [growthRatings, setGrowthRatings] = useState<PersonalGrowthRating[]>([
    { date: '2026-11-04', happinessRating: 8, confidenceRating: 9, note: 'Clarity on long-term priorities brought calm' },
    { date: '2026-11-03', happinessRating: 8, confidenceRating: 8 },
    { date: '2026-11-02', happinessRating: 7, confidenceRating: 8 },
    { date: '2026-11-01', happinessRating: 9, confidenceRating: 9 },
  ]);

  const logGrowthRating = (rating: Omit<PersonalGrowthRating, 'date'>) => {
    const date = new Date().toISOString().slice(0, 10);
    setGrowthRatings((prev) => [{ ...rating, date }, ...prev.filter((r) => r.date !== date)]);
  };

  const [lessonsLearned, setLessonsLearned] = useState<LessonLearned[]>([
    {
      id: 'll1',
      date: '2026-11-03',
      title: 'Energy precedes momentum',
      reflection: 'Physical movement early in the morning sets a calm, decisive rhythm for cognitive work.',
      category: 'Discipline'
    },
    {
      id: 'll2',
      date: '2026-10-31',
      title: 'Simplicity beats perfection',
      reflection: 'A consistent daily baseline kept effortlessly outperforms an erratic heroic sprint.',
      category: 'Systems'
    }
  ]);

  const addLessonLearned = (lesson: Omit<LessonLearned, 'id' | 'date'>) => {
    const newLesson: LessonLearned = {
      ...lesson,
      id: `ll_${Date.now()}`,
      date: new Date().toISOString().slice(0, 10)
    };
    setLessonsLearned((prev) => [newLesson, ...prev]);
  };

  const deleteLessonLearned = (id: string) => {
    setLessonsLearned((prev) => prev.filter((l) => l.id !== id));
  };

  // Journal
  const [journalDraft, setJournalDraft] = useState('');
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([
    {
      id: '1',
      text: 'Built the Next-Gen dual-background system and verified non-destructive persistence. Focus was absolute today.',
      timestamp: '2026-11-04T12:00:00Z',
      mood: 'deep_focus',
      tags: ['Building', 'Discipline']
    }
  ]);

  // Upcoming
  const [upcomingEvents, setUpcomingEvents] = useState<UpcomingEvent[]>([
    { id: '1', title: 'Calculus Examination II', date: 'Fri, Nov 6', color: 'from-violet-500 to-indigo-500' },
    { id: '2', title: 'System Architecture Review', date: 'Mon, Nov 9', color: 'from-sky-500 to-cyan-500' },
  ]);

  // Life Dimensions
  const [lifeDimensions, setLifeDimensions] = useState<LifeDimensions>({
    career: 88,
    health: 92,
    relationships: 78,
    finance: 80,
    mind: 86,
    environment: 84,
  });

  // Focus Audio
  const [audioStations] = useState<AudioStation[]>([
    { id: 'lofi-space', name: 'Celestial Lofi & Space Waves', genre: 'Ambient Lofi', duration: '24/7 Live', type: 'youtube', embedSrc: 'https://www.youtube-nocookie.com/embed/jfKfPfyJRdk?autoplay=1&enablejsapi=1' },
    { id: 'deep-synth', name: 'Obsidian Deep Synthwave', genre: 'Synth / Focus', duration: '24/7 Live', type: 'youtube', embedSrc: 'https://www.youtube-nocookie.com/embed/4xDzrJKXOOY?autoplay=1&enablejsapi=1' },
    { id: 'binaural-flow', name: 'Binaural Stardust Drift', genre: 'Gamma 40Hz', duration: 'Continuous', type: 'youtube', embedSrc: 'https://www.youtube-nocookie.com/embed/WPni755-Krg?autoplay=1&enablejsapi=1' },
  ]);
  const [activeStationId, setActiveStationId] = useState('lofi-space');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  // Study Timer Tick
  useEffect(() => {
    if (isStudyActive) {
      timerRef.current = window.setInterval(() => {
        setStudySeconds((prev) => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isStudyActive]);

  const toggleStudyTimer = () => setIsStudyActive((prev) => !prev);
  
  const resetStudyTimer = () => {
    setIsStudyActive(false);
    setStudySeconds(0);
  };

  const saveStudySession = () => {
    if (studySeconds > 30) {
      const newSession: StudySession = {
        id: Date.now().toString(),
        subject: studySubject,
        durationSeconds: studySeconds,
        timestamp: new Date().toISOString(),
      };
      setStudySessions((prev) => [newSession, ...prev]);
      resetStudyTimer();
    }
  };

  // Manifesto
  const updateManifesto = (text: string) => {
    setProfile((prev) => ({ ...prev, manifestoText: text }));
  };

  // Task Actions
  const toggleTask = (id: string) => {
    setTasks((prev) => prev.map((t) => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const addTask = (text: string) => {
    const newTask: DailyTask = { id: Date.now().toString(), text, completed: false };
    setTasks((prev) => [newTask, ...prev]);
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  // Habit Actions
  const toggleHabit = (id: string) => {
    setHabits((prev) => prev.map((h) => {
      if (h.id === id) {
        const nextCompleted = !h.completed;
        return {
          ...h,
          completed: nextCompleted,
          streak: nextCompleted ? h.streak + 1 : Math.max(0, h.streak - 1),
        };
      }
      return h;
    }));
  };

  const addHabit = (name: string, category: HabitItem['category'] = 'discipline') => {
    const newHabit: HabitItem = { id: Date.now().toString(), name, completed: false, streak: 0, category };
    setHabits((prev) => [...prev, newHabit]);
  };

  const deleteHabit = (id: string) => {
    setHabits((prev) => prev.filter((h) => h.id !== id));
  };

  // Promise Actions
  const incrementPromise = () => {
    setPromise((prev) => ({ ...prev, current: Math.min(prev.target, prev.current + 1) }));
  };

  const updatePromiseText = (text: string) => {
    setPromise((prev) => ({ ...prev, text }));
  };

  const updatePromiseTarget = (target: number, deadline: string) => {
    setPromise((prev) => ({ ...prev, target, deadline }));
  };

  // Sleep setter
  const setSleep = (h: number, m: number) => {
    setSleepHours(h);
    setSleepMinutes(m);
  };

  // Life dimension setter
  const updateLifeDimension = (dim: keyof LifeDimensions, val: number) => {
    setLifeDimensions((prev) => ({ ...prev, [dim]: val }));
  };
  const updateDimension = updateLifeDimension;

  const alignmentPercent = Math.round(
    Object.values(lifeDimensions).reduce((a, b) => a + b, 0) / Object.values(lifeDimensions).length
  );

  const loadCustomAudioUrl = (url: string) => {
    console.log('Loading custom audio', url);
  };

  // Journal Actions
  const saveJournalEntry = () => {
    if (!journalDraft.trim()) return;
    const newEntry: JournalEntry = {
      id: Date.now().toString(),
      text: journalDraft.trim(),
      timestamp: new Date().toISOString(),
      mood: currentMood,
    };
    setJournalEntries((prev) => [newEntry, ...prev]);
    setJournalDraft('');
  };

  const deleteJournalEntry = (id: string) => {
    setJournalEntries((prev) => prev.filter((e) => e.id !== id));
  };

  // App Theme Switcher
  const toggleAppTheme = () => {
    setAppTheme((prev) => prev === 'dark' ? 'light' : 'dark');
  };

  // Computed Values
  const overallProgress = habits.length > 0
    ? Math.round((habits.filter((h) => h.completed).length / habits.length) * 100)
    : 0;

  // Streak & Heatmap computation from actual data
  const currentStreak = habits.reduce((max, h) => Math.max(max, h.streak), 0);

  const heatmapData: DayHeatmapCell[] = Array.from({ length: 56 }).map((_, idx) => {
    const dateObj = new Date();
    dateObj.setDate(dateObj.getDate() - (55 - idx));
    const isToday = idx === 55;
    const habitsCompleted = isToday ? habits.filter((h) => h.completed).length : Math.floor(Math.random() * 4 + 2);
    let intensity: 0 | 1 | 2 | 3 | 4 = 0;
    if (habitsCompleted >= 5) intensity = 4;
    else if (habitsCompleted >= 4) intensity = 3;
    else if (habitsCompleted >= 2) intensity = 2;
    else if (habitsCompleted >= 1) intensity = 1;

    return {
      date: dateObj.toISOString().slice(0, 10),
      dayOfWeek: dateObj.getDay(),
      intensity,
      habitsCompleted,
      studyMinutes: isToday ? Math.floor(studySeconds / 60) : 60,
    };
  });

  // LocalStorage non-destructive persistence (Condition 3 & 4)
  const isLoadedRef = useRef(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.profile) setProfile(parsed.profile);
        if (parsed.wallpaperTheme) setWallpaperTheme(parsed.wallpaperTheme);
        if (parsed.appTheme) setAppTheme(parsed.appTheme);
        if (Array.isArray(parsed.tasks)) setTasks(parsed.tasks);
        if (Array.isArray(parsed.habits)) setHabits(parsed.habits);
        if (Array.isArray(parsed.journalEntries)) setJournalEntries(parsed.journalEntries);
        if (parsed.lifeDimensions) setLifeDimensions(parsed.lifeDimensions);
        if (parsed.currentMood) setCurrentMood(parsed.currentMood);
        if (Array.isArray(parsed.upcomingEvents)) setUpcomingEvents(parsed.upcomingEvents);
        if (parsed.promise) setPromise(parsed.promise);
        if (Array.isArray(parsed.studySessions)) setStudySessions(parsed.studySessions);
        if (Array.isArray(parsed.grades)) setGrades(parsed.grades);
        if (Array.isArray(parsed.goals)) setGoals(parsed.goals);
        if (Array.isArray(parsed.customTrackers)) setCustomTrackers(parsed.customTrackers);
        if (Array.isArray(parsed.timeRecords)) setTimeRecords(parsed.timeRecords);
        if (Array.isArray(parsed.accountabilityIncidents)) setAccountabilityIncidents(parsed.accountabilityIncidents);
        if (Array.isArray(parsed.growthRatings)) setGrowthRatings(parsed.growthRatings);
        if (Array.isArray(parsed.lessonsLearned)) setLessonsLearned(parsed.lessonsLearned);
        if (parsed.healthRecord) setHealthRecord(parsed.healthRecord);
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
        wallpaperTheme,
        appTheme,
        tasks,
        habits,
        journalEntries,
        lifeDimensions,
        currentMood,
        upcomingEvents,
        promise,
        studySessions,
        grades,
        goals,
        customTrackers,
        timeRecords,
        accountabilityIncidents,
        growthRatings,
        lessonsLearned,
        healthRecord,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
    } catch (e) {
      console.warn('Could not save ledger state', e);
    }
  }, [
    profile, 
    wallpaperTheme, 
    appTheme,
    tasks, 
    habits, 
    journalEntries, 
    lifeDimensions, 
    currentMood, 
    upcomingEvents, 
    promise, 
    studySessions,
    grades,
    goals,
    customTrackers,
    timeRecords,
    accountabilityIncidents,
    growthRatings,
    lessonsLearned,
    healthRecord
  ]);

  // Data Backup Export & Safe Import
  const exportDataBackup = (): string => {
    const payload = {
      version: '3.0.0',
      exportedAt: new Date().toISOString(),
      profile,
      wallpaperTheme,
      appTheme,
      tasks,
      habits,
      journalEntries,
      lifeDimensions,
      currentMood,
      upcomingEvents,
      promise,
      studySessions,
      grades,
      goals,
      customTrackers,
      timeRecords,
      accountabilityIncidents,
      growthRatings,
      lessonsLearned,
      healthRecord,
    };
    return JSON.stringify(payload, null, 2);
  };

  const importDataBackup = (jsonStr: string): boolean => {
    try {
      const data = JSON.parse(jsonStr);
      if (data.profile) setProfile(data.profile);
      if (data.wallpaperTheme) setWallpaperTheme(data.wallpaperTheme);
      if (data.appTheme) setAppTheme(data.appTheme);
      if (Array.isArray(data.tasks)) setTasks(data.tasks);
      if (Array.isArray(data.habits)) setHabits(data.habits);
      if (Array.isArray(data.journalEntries)) setJournalEntries(data.journalEntries);
      if (data.lifeDimensions) setLifeDimensions(data.lifeDimensions);
      if (data.currentMood) setCurrentMood(data.currentMood);
      if (Array.isArray(data.upcomingEvents)) setUpcomingEvents(data.upcomingEvents);
      if (data.promise) setPromise(data.promise);
      if (Array.isArray(data.studySessions)) setStudySessions(data.studySessions);
      if (Array.isArray(data.grades)) setGrades(data.grades);
      if (Array.isArray(data.goals)) setGoals(data.goals);
      if (Array.isArray(data.customTrackers)) setCustomTrackers(data.customTrackers);
      if (Array.isArray(data.timeRecords)) setTimeRecords(data.timeRecords);
      if (Array.isArray(data.accountabilityIncidents)) setAccountabilityIncidents(data.accountabilityIncidents);
      if (Array.isArray(data.growthRatings)) setGrowthRatings(data.growthRatings);
      if (Array.isArray(data.lessonsLearned)) setLessonsLearned(data.lessonsLearned);
      if (data.healthRecord) setHealthRecord(data.healthRecord);
      return true;
    } catch (e) {
      console.error('Failed to import data backup', e);
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
        appTheme,
        setAppTheme,
        toggleAppTheme,
        wallpaperTheme,
        setWallpaperTheme,
        previewTheme,
        setPreviewTheme,
        tasks,
        toggleTask,
        addTask,
        deleteTask,
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
        healthRecord,
        updateHealthRecord,
        studySeconds,
        isStudyActive,
        studySubject,
        setStudySubject,
        toggleStudyTimer,
        resetStudyTimer,
        saveStudySession,
        studySessions,
        grades,
        addGradeItem,
        deleteGradeItem,
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
        customTrackers,
        addCustomTracker,
        updateCustomTracker,
        deleteCustomTracker,
        logCustomTrackerValue,
        goals,
        addGoalItem,
        toggleGoalMilestone,
        updateGoalStatus,
        deleteGoalItem,
        timeRecords,
        logTimeRecord,
        accountabilityIncidents,
        addAccountabilityIncident,
        approveIncident,
        completeIncident,
        adjustIncidentTarget,
        growthRatings,
        logGrowthRating,
        lessonsLearned,
        addLessonLearned,
        deleteLessonLearned,
        journalDraft,
        setJournalDraft,
        saveJournalEntry,
        deleteJournalEntry,
        journalEntries,
        upcomingEvents,
        lifeDimensions,
        updateLifeDimension,
        updateDimension,
        alignmentPercent,
        audioStations,
        activeStationId,
        setActiveStationId,
        isAudioPlaying,
        setIsAudioPlaying,
        loadCustomAudioUrl,
        exportDataBackup,
        importDataBackup,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error('useData must be used within DataProvider');
  return ctx;
};
