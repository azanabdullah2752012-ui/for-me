import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { soundEngine, SoundscapeId } from '../services/soundEngine';
import { 
  YouTubeItem, 
  parseYouTubeUrl, 
  getYouTubeThumbnail, 
  CURATED_YOUTUBE_STREAMS 
} from '../services/youtubeAudioService';
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
  LifeDimensions, 
  UserProfile,
  WallpaperTheme,
  WallpaperSettings,
  AppTheme,
  CustomTracker,
  CustomTrackerRecord,
  GradeItem,
  SubjectDefinition,
  AcademicYear,
  AcademicTerm,
  SubjectAssessmentComponent,
  AssessmentRecord,
  GoalItem,
  TimeRecord,
  TimeLogEntry,
  AccountabilityIncident,
  PersonalGrowthRating,
  LessonLearned,
  PersonalObjective,
  SkillPracticeLog,
  SkillItem,
  ProjectMilestone,
  PersonalProject,
  CuratedLearningItem,
  DailyHealthRecord,
  HydrationLog,
  SleepRecord,
  MealRecord,
  MovementActivity,
  DailyVitalityObservation
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
  previewTheme: WallpaperTheme | null;
  setPreviewTheme: (theme: WallpaperTheme | null) => void;
  wallpaperSettings: WallpaperSettings;
  updateWallpaperSettings: (updates: Partial<WallpaperSettings>) => void;

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

  // Four-Layer Health Tracking
  // 1. Hydration
  hydrationLogs: HydrationLog[];
  hydrationTargetMl: number;
  addHydrationLog: (amountMl: number, container: HydrationLog['container'], notes?: string) => void;
  deleteHydrationLog: (id: string) => void;
  setHydrationTargetMl: (ml: number) => void;

  // 2. Sleep
  sleepRecords: SleepRecord[];
  sleepTargetHours: number;
  setSleepTargetHours: (hours: number) => void;
  addSleepRecord: (record: { date: string; bedtime: string; wakeTime: string; quality: number; notes?: string }) => void;
  deleteSleepRecord: (id: string) => void;

  // 3. Nutrition
  mealRecords: MealRecord[];
  logMealRecord: (mealType: MealRecord['mealType'], description?: string, notes?: string, date?: string, time?: string) => void;
  deleteMealRecord: (id: string) => void;

  // 4. Movement
  movementActivities: MovementActivity[];
  movementWeeklyTargetMinutes: number;
  setMovementWeeklyTargetMinutes: (mins: number) => void;
  addMovementActivity: (activity: Omit<MovementActivity, 'id' | 'timestamp'>) => void;
  deleteMovementActivity: (id: string) => void;

  // 5. Vitality & Wellbeing Observations
  vitalityObservations: DailyVitalityObservation[];
  addVitalityObservation: (obs: Omit<DailyVitalityObservation, 'id'>) => void;
  deleteVitalityObservation: (id: string) => void;

  // Study Timer & Real Recorded Sessions
  studySeconds: number;
  isStudyActive: boolean;
  studySubject: string;
  setStudySubject: (s: string) => void;
  toggleStudyTimer: () => void;
  resetStudyTimer: () => void;
  saveStudySession: () => void;
  studySessions: StudySession[];
  addStudySession: (session: Omit<StudySession, 'id'>) => void;
  deleteStudySession: (id: string) => void;

  // Subjects & Markbook System
  subjects: SubjectDefinition[];
  addSubject: (subject: Omit<SubjectDefinition, 'id'>) => void;
  updateSubject: (id: string, updates: Partial<SubjectDefinition>) => void;
  deleteSubject: (id: string) => void;
  addSubjectComponent: (subjectId: string, component: Omit<SubjectAssessmentComponent, 'id'>) => void;
  deleteSubjectComponent: (subjectId: string, componentId: string) => void;

  // Academic Structure & Terms
  academicYears: AcademicYear[];
  activeAcademicYearId: string;
  setActiveAcademicYearId: (id: string) => void;
  activeTermId: string;
  setActiveTermId: (id: string) => void;
  addAcademicYear: (year: Omit<AcademicYear, 'id'>) => void;
  addAcademicTerm: (yearId: string, termName: string) => void;

  // Assessments & Markbook Records
  assessmentRecords: AssessmentRecord[];
  addAssessmentRecord: (record: Omit<AssessmentRecord, 'id'>) => void;
  updateAssessmentRecord: (id: string, updates: Partial<AssessmentRecord>) => void;
  deleteAssessmentRecord: (id: string) => void;
  mergePortalAssessments: (newAssessments: AssessmentRecord[]) => { added: number; updated: number; unchanged: number };

  // Legacy Grades (Backward Compatibility)
  grades: GradeItem[];
  addGradeItem: (grade: Omit<GradeItem, 'id'>) => void;
  updateGradeItem: (id: string, updates: Partial<GradeItem>) => void;
  deleteGradeItem: (id: string) => void;

  // Streak & Heatmap
  heatmapData: DayHeatmapCell[];
  currentStreak: number;

  // Daily Promise
  promise: DailyPromise;
  incrementPromise: () => void;
  updatePromiseText: (text: string) => void;
  updatePromiseTarget: (target: number, deadline: string) => void;

  // Habits Checklist & History
  habits: HabitItem[];
  toggleHabit: (id: string) => void;
  toggleHabitDate: (habitId: string, dateStr: string) => void;
  addHabit: (name: string, category?: HabitItem['category']) => void;
  addHabitDetailed: (habit: Omit<HabitItem, 'id' | 'streak'>) => void;
  updateHabit: (id: string, updates: Partial<HabitItem>) => void;
  deleteHabit: (id: string) => void;
  overallProgress: number;
  dailyRating: number;
  setDailyRating: (rating: number) => void;

  // Custom Trackers Engine
  customTrackers: CustomTracker[];
  customTrackerRecords: CustomTrackerRecord[];
  addCustomTracker: (tracker: Omit<CustomTracker, 'id' | 'currentValue'>) => void;
  updateCustomTracker: (id: string, updates: Partial<CustomTracker>) => void;
  deleteCustomTracker: (id: string) => void;
  logCustomTrackerValue: (id: string, val: number) => void;
  logCustomTrackerRecord: (trackerId: string, value: number | boolean, notes?: string) => void;
  deleteCustomTrackerRecord: (id: string) => void;

  // Goals & Milestones
  goals: GoalItem[];
  addGoalItem: (goal: Omit<GoalItem, 'id' | 'progressPercent'>) => void;
  updateGoal: (id: string, updates: Partial<GoalItem>) => void;
  toggleGoalMilestone: (goalId: string, milestoneId: string) => void;
  updateGoalStatus: (goalId: string, status: GoalItem['status']) => void;
  deleteGoalItem: (goalId: string) => void;

  // Time Allocation Records & Detailed Logs
  timeRecords: TimeRecord[];
  timeLogs: TimeLogEntry[];
  logTimeRecord: (record: TimeRecord) => void;
  addTimeLog: (entry: Omit<TimeLogEntry, 'id' | 'timestamp'>) => void;
  deleteTimeLog: (id: string) => void;
  mergeCompanionTimeLogs: (newLogs: TimeLogEntry[]) => { added: number; skippedDuplicates: number; totalProcessed: number };

  // Physical Accountability System (Constructive, Non-Punitive)
  accountabilityIncidents: AccountabilityIncident[];
  addAccountabilityIncident: (incident: Omit<AccountabilityIncident, 'id' | 'status'>) => void;
  approveIncident: (id: string) => void;
  completeIncident: (id: string) => void;
  adjustIncidentTarget: (id: string) => void;

  // Personal Growth & Mastery Engine
  skills: SkillItem[];
  addSkill: (skill: Omit<SkillItem, 'id' | 'createdAt' | 'practiceLogs' | 'totalPracticeMinutes'>) => void;
  updateSkill: (id: string, updates: Partial<SkillItem>) => void;
  deleteSkill: (id: string) => void;
  addSkillPracticeLog: (skillId: string, log: Omit<SkillPracticeLog, 'id' | 'skillId'>) => void;
  deleteSkillPracticeLog: (skillId: string, logId: string) => void;

  personalProjects: PersonalProject[];
  addPersonalProject: (project: Omit<PersonalProject, 'id'>) => void;
  updatePersonalProject: (id: string, updates: Partial<PersonalProject>) => void;
  deletePersonalProject: (id: string) => void;
  toggleProjectMilestone: (projectId: string, milestoneId: string) => void;
  addProjectMilestone: (projectId: string, title: string) => void;
  deleteProjectMilestone: (projectId: string, milestoneId: string) => void;
  addProjectKeyLearning: (projectId: string, learning: string) => void;

  learningItems: CuratedLearningItem[];
  addLearningItem: (item: Omit<CuratedLearningItem, 'id' | 'dateAdded'>) => void;
  updateLearningItem: (id: string, updates: Partial<CuratedLearningItem>) => void;
  deleteLearningItem: (id: string) => void;
  addLearningTakeaway: (itemId: string, takeaway: string, isActionable?: boolean) => void;

  growthRatings: PersonalGrowthRating[];
  logGrowthRating: (rating: Omit<PersonalGrowthRating, 'date'>) => void;
  lessonsLearned: LessonLearned[];
  addLessonLearned: (lesson: Omit<LessonLearned, 'id' | 'date'>) => void;
  deleteLessonLearned: (id: string) => void;
  objectives: PersonalObjective[];
  addObjective: (objective: Omit<PersonalObjective, 'id'>) => void;
  updateObjective: (id: string, updates: Partial<PersonalObjective>) => void;
  deleteObjective: (id: string) => void;

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

  // Audio Sanctuary (Procedural Ambient + YouTube Streams & Playlists)
  audioSource: 'ambient' | 'youtube';
  setAudioSource: (src: 'ambient' | 'youtube') => void;

  // Procedural Focus Audio Sanctuary
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
  const [isHUDHidden, setIsHUDHidden] = useState<boolean>(false);
  const toggleHUDHidden = () => setIsHUDHidden((prev) => !prev);
  const [wallpaperTheme, setWallpaperTheme] = useState<WallpaperTheme>('deep-space');
  const [previewTheme, setPreviewTheme] = useState<WallpaperTheme | null>(null);

  // Wallpaper Dynamic Customization State (Persisted)
  const [wallpaperSettings, setWallpaperSettings] = useState<WallpaperSettings>(() => {
    const defaultSettings: WallpaperSettings = {
      palette: 'cosmic-royal',
      speed: 'balanced',
      amplitude: 'majestic',
      waveGeometry: 'dunes',
      waveLayerDensity: 'deep',
      celestialBody: 'crescent-moon',
      showNebulaDust: true,
      showConstellations: true,
      showComet: true,
      shootingStarMode: 'occasional',
      showStars: true,
      showCrossStars: false,
      showOrbitalTrack: false,
      showMeridian: false,
      clockFontStyle: 'tabular',
      clockSize: 'standard',
      clockFormat: '12h',
      showSeconds: true,
      showDate: true,
      showGreeting: true,
      clockHalo: 'pulsar',
    };
    try {
      const saved = localStorage.getItem('for_me_wallpaper_settings_v3') || localStorage.getItem('for_me_wallpaper_settings_v2');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Guarantee clean defaults for coordinate grid & orbital line if not explicitly set
        return { 
          ...defaultSettings, 
          ...parsed,
          showMeridian: parsed.showMeridian ?? false,
          showOrbitalTrack: parsed.showOrbitalTrack ?? false,
          showCrossStars: parsed.showCrossStars ?? false,
        };
      }
    } catch {
      // ignore
    }
    return defaultSettings;
  });

  const updateWallpaperSettings = (updates: Partial<WallpaperSettings>) => {
    setWallpaperSettings((prev) => {
      const next = { ...prev, ...updates };
      try {
        localStorage.setItem('for_me_wallpaper_settings_v3', JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const [profile, setProfile] = useState<UserProfile>({
    name: 'Azan',
    title: 'Private Life Ledger',
    motto: 'Discipline today. Freedom tomorrow.',
    selectedWallpaper: 'deep-space',
    manifestoText: '',
  });

  const [currentMood, setCurrentMood] = useState<MoodType>('deep_focus');

  // Tasks for the Day
  const [tasks, setTasks] = useState<DailyTask[]>([
    { id: '1', text: 'finish math h.w', completed: false },
    { id: '2', text: 'study for social test', completed: false },
    { id: '3', text: 'ai seminar', completed: false },
    { id: '4', text: 'french h.w', completed: false },
    { id: '5', text: 'Card print-out', completed: false },
    { id: '6', text: 'music classwork', completed: false },
    { id: '7', text: 'chemistry experiment writeup', completed: false },
  ]);

  // Biometrics & Health Core
  const [hydration, setHydration] = useState(0); // glasses (250ml)
  const [sleepHours, setSleepHours] = useState(0);
  const [sleepMinutes, setSleepMinutes] = useState(0);
  const [movementPercent, setMovementPercent] = useState(0);
  const [dailyRating, setDailyRating] = useState(0); // out of 10

  const [healthRecord, setHealthRecord] = useState<DailyHealthRecord>({
    date: new Date().toISOString().slice(0, 10),
    sleepHours: 0,
    sleepQuality: 0,
    hydrationGlasses: 0,
    meals: { breakfast: false, lunch: false, dinner: false, mindfulEating: false },
    movementMinutes: 0,
    workoutCompleted: false,
    workoutType: '',
  });

  const updateHealthRecord = (updates: Partial<DailyHealthRecord>) => {
    setHealthRecord((prev) => ({ ...prev, ...updates }));
  };

  // ── FOUR COMPLETE HEALTH SYSTEMS ──

  // 1. Hydration
  const [hydrationTargetMl, setHydrationTargetMl] = useState<number>(2500);
  const [hydrationLogs, setHydrationLogs] = useState<HydrationLog[]>([]);

  const addHydrationLog = (amountMl: number, container: HydrationLog['container'], notes?: string) => {
    const today = new Date().toISOString().slice(0, 10);
    const newLog: HydrationLog = {
      id: `hl_${Date.now()}`,
      date: today,
      timestamp: new Date().toISOString(),
      amountMl,
      container,
      notes
    };
    setHydrationLogs((prev) => [newLog, ...prev]);

    // Synchronize glasses count with today's intake
    const updatedTodayTotal = [newLog, ...hydrationLogs]
      .filter((l) => l.date === today)
      .reduce((sum, l) => sum + l.amountMl, 0);
    const glasses = Math.round(updatedTodayTotal / 250);
    setHydration(glasses);
    setHealthRecord((prev) => ({ ...prev, hydrationGlasses: glasses }));
  };

  const deleteHydrationLog = (id: string) => {
    setHydrationLogs((prev) => prev.filter((l) => l.id !== id));
  };

  // 2. Sleep
  const [sleepTargetHours, setSleepTargetHours] = useState<number>(8);
  const [sleepRecords, setSleepRecords] = useState<SleepRecord[]>([]);

  const calculateSleepDuration = (bedtime: string, wakeTime: string): number => {
    const [bH, bM] = bedtime.split(':').map(Number);
    const [wH, wM] = wakeTime.split(':').map(Number);
    let startMin = bH * 60 + bM;
    let endMin = wH * 60 + wM;
    if (endMin <= startMin) {
      endMin += 24 * 60; // crossed midnight
    }
    return endMin - startMin;
  };

  const addSleepRecord = (record: { date: string; bedtime: string; wakeTime: string; quality: number; notes?: string }) => {
    const duration = calculateSleepDuration(record.bedtime, record.wakeTime);
    const newRecord: SleepRecord = {
      id: `sl_${Date.now()}`,
      ...record,
      durationMinutes: duration,
    };
    setSleepRecords((prev) => [newRecord, ...prev.filter((r) => r.date !== record.date)]);

    // Update today's sleep hours & minutes
    const hours = Math.floor(duration / 60);
    const mins = duration % 60;
    setSleepHours(hours);
    setSleepMinutes(mins);
    setHealthRecord((prev) => ({ 
      ...prev, 
      sleepHours: +(duration / 60).toFixed(2),
      sleepQuality: record.quality 
    }));
  };

  const deleteSleepRecord = (id: string) => {
    setSleepRecords((prev) => prev.filter((r) => r.id !== id));
  };

  // 3. Nutrition (Gentle & Nourishing)
  const [mealRecords, setMealRecords] = useState<MealRecord[]>([]);

  const logMealRecord = (mealType: MealRecord['mealType'], description?: string, notes?: string, date?: string, time?: string) => {
    const today = date || new Date().toISOString().slice(0, 10);
    const nowTime = time || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    const newMeal: MealRecord = {
      id: `ml_${Date.now()}`,
      date: today,
      time: nowTime,
      mealType,
      completed: true,
      timestamp: new Date().toISOString(),
      description,
      notes
    };
    setMealRecords((prev) => [newMeal, ...prev]);

    // Update health record meal booleans
    setHealthRecord((prev) => {
      const updatedMeals = { ...prev.meals };
      if (mealType === 'breakfast') updatedMeals.breakfast = true;
      if (mealType === 'lunch') updatedMeals.lunch = true;
      if (mealType === 'dinner') updatedMeals.dinner = true;
      return { ...prev, meals: updatedMeals };
    });
  };

  const deleteMealRecord = (id: string) => {
    setMealRecords((prev) => prev.filter((m) => m.id !== id));
  };

  // 4. Movement & Physical Activities
  const [movementWeeklyTargetMinutes, setMovementWeeklyTargetMinutes] = useState<number>(210);
  const [movementActivities, setMovementActivities] = useState<MovementActivity[]>([]);

  const addMovementActivity = (activity: Omit<MovementActivity, 'id' | 'timestamp'>) => {
    const newAct: MovementActivity = {
      ...activity,
      id: `mv_${Date.now()}`,
      timestamp: new Date().toISOString(),
    };
    setMovementActivities((prev) => [newAct, ...prev]);

    // Synchronize daily movement minutes
    const today = new Date().toISOString().slice(0, 10);
    const todayTotal = [newAct, ...movementActivities]
      .filter((a) => a.date === today)
      .reduce((sum, a) => sum + a.durationMinutes, 0);
    setHealthRecord((prev) => ({ 
      ...prev, 
      movementMinutes: todayTotal,
      workoutCompleted: todayTotal >= 30,
      workoutType: newAct.activityName
    }));
    setMovementPercent(Math.min(100, Math.round((todayTotal / 60) * 100)));
  };

  const deleteMovementActivity = (id: string) => {
    setMovementActivities((prev) => prev.filter((a) => a.id !== id));
  };

  // 5. Vitality & Daily Wellbeing Observations
  const [vitalityObservations, setVitalityObservations] = useState<DailyVitalityObservation[]>([]);

  const addVitalityObservation = (obs: Omit<DailyVitalityObservation, 'id'>) => {
    const newObs: DailyVitalityObservation = {
      ...obs,
      id: `vo_${Date.now()}`
    };
    setVitalityObservations((prev) => [newObs, ...prev.filter((o) => o.date !== obs.date)]);
  };

  const deleteVitalityObservation = (id: string) => {
    setVitalityObservations((prev) => prev.filter((o) => o.id !== id));
  };

  // ── ACADEMIC MARKBOOK & STRUCTURE ──
  const [academicYears, setAcademicYears] = useState<AcademicYear[]>([
    {
      id: 'ay_2026_2027',
      name: 'Academic Year 2026–2027',
      isCurrent: true,
      terms: [
        { id: 'term_1', name: 'Term 1 (Midterm Cycle)', isCurrent: false },
        { id: 'term_2', name: 'Term 2 (Pre-Finals Cycle)', isCurrent: true },
        { id: 'term_final', name: 'Final & Annual Examinations', isCurrent: false },
      ]
    }
  ]);
  const [activeAcademicYearId, setActiveAcademicYearId] = useState<string>('ay_2026_2027');
  const [activeTermId, setActiveTermId] = useState<string>('term_2');

  const [subjects, setSubjects] = useState<SubjectDefinition[]>([
    { 
      id: 'sub_1', 
      name: 'Computer Science', 
      abbreviation: 'CS',
      targetPercentage: 95,
      targetWeeklyHours: 12, 
      color: '#8b5cf6', 
      notes: 'Algorithms, Data Structures & Systems',
      components: [
        { id: 'comp_cs_th', name: 'Theory Paper', maximumMarks: 70, weightPercent: 70 },
        { id: 'comp_cs_pr', name: 'Practical & Viva Defense', maximumMarks: 30, weightPercent: 30 },
      ]
    },
    { 
      id: 'sub_2', 
      name: 'Mathematics & Calculus', 
      abbreviation: 'MATH',
      targetPercentage: 92,
      targetWeeklyHours: 8, 
      color: '#3b82f6', 
      notes: 'Differential Equations & Linear Algebra',
      components: [
        { id: 'comp_math_main', name: 'Written Examination', maximumMarks: 80, weightPercent: 80 },
        { id: 'comp_math_ia', name: 'Internal Assessment', maximumMarks: 20, weightPercent: 20 },
      ]
    },
    { 
      id: 'sub_3', 
      name: 'Physics', 
      abbreviation: 'PHYS',
      targetPercentage: 90,
      targetWeeklyHours: 6, 
      color: '#06b6d4', 
      notes: 'Kinematics & Modern Physics',
      components: [
        { id: 'comp_phys_th', name: 'Theory Examination', maximumMarks: 70, weightPercent: 70 },
        { id: 'comp_phys_lab', name: 'Lab Practical & Notebook', maximumMarks: 30, weightPercent: 30 },
      ]
    },
    { 
      id: 'sub_4', 
      name: 'Design & Craft', 
      abbreviation: 'DSGN',
      targetPercentage: 95,
      targetWeeklyHours: 6, 
      color: '#ec4899', 
      notes: 'Interface Typography, Motion & Systems',
      components: [
        { id: 'comp_dsgn_work', name: 'Studio Portfolio Defense', maximumMarks: 100, weightPercent: 100 },
      ]
    }
  ]);

  const addSubject = (subj: Omit<SubjectDefinition, 'id'>) => {
    const newSubj: SubjectDefinition = { 
      ...subj, 
      id: `sub_${Date.now()}`,
      components: subj.components || [
        { id: `comp_${Date.now()}_th`, name: 'Theory Examination', maximumMarks: 80, weightPercent: 80 },
        { id: `comp_${Date.now()}_ia`, name: 'Internal Assessment', maximumMarks: 20, weightPercent: 20 },
      ]
    };
    setSubjects((prev) => [...prev, newSubj]);
  };

  const updateSubject = (id: string, updates: Partial<SubjectDefinition>) => {
    setSubjects((prev) => prev.map((s) => s.id === id ? { ...s, ...updates } : s));
  };

  const deleteSubject = (id: string) => {
    setSubjects((prev) => prev.filter((s) => s.id !== id));
  };

  const addSubjectComponent = (subjectId: string, component: Omit<SubjectAssessmentComponent, 'id'>) => {
    const newComp: SubjectAssessmentComponent = {
      ...component,
      id: `comp_${Date.now()}`,
    };
    setSubjects((prev) => prev.map((s) => {
      if (s.id !== subjectId) return s;
      return {
        ...s,
        components: [...(s.components || []), newComp],
      };
    }));
  };

  const deleteSubjectComponent = (subjectId: string, componentId: string) => {
    setSubjects((prev) => prev.map((s) => {
      if (s.id !== subjectId) return s;
      return {
        ...s,
        components: (s.components || []).filter((c) => c.id !== componentId),
      };
    }));
  };

  const addAcademicYear = (year: Omit<AcademicYear, 'id'>) => {
    const newYear: AcademicYear = {
      ...year,
      id: `ay_${Date.now()}`,
    };
    setAcademicYears((prev) => [...prev, newYear]);
  };

  const addAcademicTerm = (yearId: string, termName: string) => {
    const newTerm: AcademicTerm = {
      id: `term_${Date.now()}`,
      name: termName,
    };
    setAcademicYears((prev) => prev.map((y) => {
      if (y.id !== yearId) return y;
      return {
        ...y,
        terms: [...y.terms, newTerm],
      };
    }));
  };

  // Detailed Individual Assessment Records (The Core Markbook)
  const [assessmentRecords, setAssessmentRecords] = useState<AssessmentRecord[]>([]);

  const addAssessmentRecord = (record: Omit<AssessmentRecord, 'id'>) => {
    const newAsm: AssessmentRecord = {
      ...record,
      id: `asm_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
    };
    setAssessmentRecords((prev) => [newAsm, ...prev]);

    // Also mirror to legacy grades for backwards compatibility
    const matchedSubject = subjects.find((s) => s.id === record.subjectId);
    if (matchedSubject) {
      addGradeItem({
        subject: matchedSubject.name,
        title: record.name,
        score: record.marksObtained,
        total: record.maximumMarks,
        date: record.date,
        notes: record.notes,
      });
    }
  };

  const updateAssessmentRecord = (id: string, updates: Partial<AssessmentRecord>) => {
    setAssessmentRecords((prev) => prev.map((a) => a.id === id ? { ...a, ...updates } : a));
  };

  const deleteAssessmentRecord = (id: string) => {
    setAssessmentRecords((prev) => prev.filter((a) => a.id !== id));
  };

  const mergePortalAssessments = (incoming: AssessmentRecord[]): { added: number; updated: number; unchanged: number } => {
    let addedCount = 0;
    let updatedCount = 0;
    let unchangedCount = 0;
    
    setAssessmentRecords((prev) => {
      let current = [...prev];
      incoming.forEach((inc) => {
        // Map subject if necessary
        let targetSubjectId = inc.subjectId;
        if (!subjects.some((s) => s.id === targetSubjectId)) {
          const incSubName = ((inc as any).subject || '').toLowerCase();
          const found = subjects.find((s) => s.name.toLowerCase().includes(incSubName));
          if (found) targetSubjectId = found.id;
          else if (subjects.length > 0) targetSubjectId = subjects[0].id;
        }

        const matchIdx = current.findIndex(
          (a) => a.id === inc.id || (a.name.toLowerCase() === inc.name.toLowerCase() && a.date === inc.date)
        );

        if (matchIdx >= 0) {
          const existing = current[matchIdx];
          if (existing.marksObtained === inc.marksObtained && existing.maximumMarks === inc.maximumMarks) {
            unchangedCount++;
          } else {
            current[matchIdx] = {
              ...existing,
              marksObtained: inc.marksObtained,
              maximumMarks: inc.maximumMarks,
              notes: inc.notes || existing.notes,
            };
            updatedCount++;
          }
        } else {
          const newRecord: AssessmentRecord = {
            ...inc,
            subjectId: targetSubjectId,
            academicYearId: inc.academicYearId || activeAcademicYearId,
            termId: inc.termId || activeTermId,
          };
          current = [newRecord, ...current];
          addedCount++;
        }
      });
      return current;
    });

    return { added: addedCount, updated: updatedCount, unchanged: unchangedCount };
  };

  // Study Timer & Real Recorded Sessions
  const [studySeconds, setStudySeconds] = useState(0);
  const [isStudyActive, setIsStudyActive] = useState(false);
  const [studySubject, setStudySubject] = useState('Computer Science');
  const [studySessions, setStudySessions] = useState<StudySession[]>([]);
  const timerRef = useRef<number | null>(null);

  // Grades & Assessments
  const [grades, setGrades] = useState<GradeItem[]>([]);

  const addGradeItem = (grade: Omit<GradeItem, 'id'>) => {
    const newItem: GradeItem = { ...grade, id: `gr_${Date.now()}` };
    setGrades((prev) => [newItem, ...prev]);
  };

  const updateGradeItem = (id: string, updates: Partial<GradeItem>) => {
    setGrades((prev) => prev.map((g) => g.id === id ? { ...g, ...updates } : g));
  };

  const deleteGradeItem = (id: string) => {
    setGrades((prev) => prev.filter((g) => g.id !== id));
  };

  const addStudySession = (session: Omit<StudySession, 'id'>) => {
    const newSession: StudySession = {
      ...session,
      id: `ses_${Date.now()}`,
    };
    setStudySessions((prev) => [newSession, ...prev]);
  };

  const deleteStudySession = (id: string) => {
    setStudySessions((prev) => prev.filter((s) => s.id !== id));
  };

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
    if (studySeconds > 10) {
      const newSession: StudySession = {
        id: `ses_${Date.now()}`,
        subject: studySubject,
        durationSeconds: studySeconds,
        timestamp: new Date().toISOString(),
        sessionType: 'timer',
      };
      setStudySessions((prev) => [newSession, ...prev]);
      resetStudyTimer();
    }
  };

  // Daily Promise
  const [promise, setPromise] = useState<DailyPromise>({
    id: 'p1',
    text: 'Lock in on clean systems and complete full physical training.',
    deadline: '11:00 PM',
    current: 0,
    target: 5,
    unit: 'blocks',
  });

  const incrementPromise = () => {
    setPromise((prev) => ({ ...prev, current: Math.min(prev.target, prev.current + 1) }));
  };

  const updatePromiseText = (text: string) => {
    setPromise((prev) => ({ ...prev, text }));
  };

  const updatePromiseTarget = (target: number, deadline: string) => {
    setPromise((prev) => ({ ...prev, target, deadline }));
  };

  // ── HABITS & ROUTINES ──
  const [habits, setHabits] = useState<HabitItem[]>([
    { 
      id: 'h1', 
      name: 'Deep Focus & Study Block', 
      completed: false, 
      streak: 0, 
      bestStreak: 0, 
      category: 'study', 
      type: 'positive', 
      frequencyType: 'daily',
      history: {} 
    },
    { 
      id: 'h2', 
      name: 'Physical Training & Movement', 
      completed: false, 
      streak: 0, 
      bestStreak: 0, 
      category: 'wellness', 
      type: 'positive', 
      frequencyType: 'daily',
      history: {} 
    },
    { 
      id: 'h3', 
      name: 'Read 20+ Pages of Insight', 
      completed: false, 
      streak: 0, 
      bestStreak: 0, 
      category: 'mind', 
      type: 'positive', 
      frequencyType: 'daily',
      history: {} 
    },
    { 
      id: 'h4', 
      name: 'Hydration Target (2.5L)', 
      completed: false, 
      streak: 0, 
      bestStreak: 0, 
      category: 'wellness', 
      type: 'positive', 
      frequencyType: 'daily',
      history: {} 
    },
    { 
      id: 'h5', 
      name: 'Avoid Mindless Social Feeds', 
      completed: false, 
      streak: 0, 
      bestStreak: 0, 
      category: 'discipline', 
      type: 'reduction', 
      frequencyType: 'daily',
      history: {} 
    },
    { 
      id: 'h6', 
      name: 'Sleep 7.5h & Digital Sunset', 
      completed: false, 
      streak: 0, 
      bestStreak: 0, 
      category: 'wellness', 
      type: 'positive', 
      frequencyType: 'daily',
      history: {} 
    },
  ]);

  const toggleHabit = (id: string) => {
    const today = new Date().toISOString().slice(0, 10);
    toggleHabitDate(id, today);
  };

  const toggleHabitDate = (habitId: string, dateStr: string) => {
    setHabits((prev) => prev.map((h) => {
      if (h.id !== habitId) return h;
      const history = { ...(h.history || {}) };
      const currentVal = !!history[dateStr];
      const nextVal = !currentVal;
      history[dateStr] = nextVal;

      const isToday = dateStr === new Date().toISOString().slice(0, 10);
      const newStreak = nextVal ? h.streak + 1 : Math.max(0, h.streak - 1);
      const newBestStreak = Math.max(h.bestStreak || 0, newStreak);

      return {
        ...h,
        completed: isToday ? nextVal : h.completed,
        streak: newStreak,
        bestStreak: newBestStreak,
        history,
      };
    }));
  };

  const addHabit = (name: string, category: HabitItem['category'] = 'discipline') => {
    const today = new Date().toISOString().slice(0, 10);
    const newHabit: HabitItem = { 
      id: `hab_${Date.now()}`, 
      name, 
      completed: false, 
      streak: 0, 
      bestStreak: 0, 
      category, 
      type: 'positive',
      frequencyType: 'daily',
      history: {},
      createdDate: today
    };
    setHabits((prev) => [...prev, newHabit]);
  };

  const addHabitDetailed = (habit: Omit<HabitItem, 'id' | 'streak'>) => {
    const newHabit: HabitItem = {
      ...habit,
      id: `hab_${Date.now()}`,
      streak: 0,
      bestStreak: 0,
      history: habit.history || {},
    };
    setHabits((prev) => [...prev, newHabit]);
  };

  const updateHabit = (id: string, updates: Partial<HabitItem>) => {
    setHabits((prev) => prev.map((h) => h.id === id ? { ...h, ...updates } : h));
  };

  const deleteHabit = (id: string) => {
    setHabits((prev) => prev.filter((h) => h.id !== id));
  };

  // ── CUSTOM TRACKERS & RECORDS ──
  const [customTrackers, setCustomTrackers] = useState<CustomTracker[]>([]);
  const [customTrackerRecords, setCustomTrackerRecords] = useState<CustomTrackerRecord[]>([]);

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
    logCustomTrackerRecord(id, val);
  };

  const logCustomTrackerRecord = (trackerId: string, value: number | boolean, notes?: string) => {
    const today = new Date().toISOString().slice(0, 10);
    const newRecord: CustomTrackerRecord = {
      id: `ctr_${Date.now()}`,
      trackerId,
      date: today,
      timestamp: new Date().toISOString(),
      value,
      notes
    };
    setCustomTrackerRecords((prev) => [newRecord, ...prev]);
  };

  const deleteCustomTrackerRecord = (id: string) => {
    setCustomTrackerRecords((prev) => prev.filter((r) => r.id !== id));
  };

  // ── GOALS & MILESTONES ──
  const [goals, setGoals] = useState<GoalItem[]>([]);

  const addGoalItem = (goal: Omit<GoalItem, 'id' | 'progressPercent'>) => {
    const completedCount = goal.milestones.filter((m) => m.completed).length;
    const progress = goal.milestones.length > 0 ? Math.round((completedCount / goal.milestones.length) * 100) : 0;
    const newGoal: GoalItem = { ...goal, id: `goal_${Date.now()}`, progressPercent: progress };
    setGoals((prev) => [newGoal, ...prev]);
  };

  const updateGoal = (id: string, updates: Partial<GoalItem>) => {
    setGoals((prev) => prev.map((g) => g.id === id ? { ...g, ...updates } : g));
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

  // ── TIME AUDIT & DETAILED LOGS ──
  const [timeRecords, setTimeRecords] = useState<TimeRecord[]>([]);
  const [timeLogs, setTimeLogs] = useState<TimeLogEntry[]>([]);

  const logTimeRecord = (record: TimeRecord) => {
    setTimeRecords((prev) => [record, ...prev.filter((r) => r.date !== record.date)]);
  };

  const addTimeLog = (entry: Omit<TimeLogEntry, 'id' | 'timestamp'>) => {
    const today = new Date().toISOString().slice(0, 10);
    const newLog: TimeLogEntry = {
      ...entry,
      id: `tl_${Date.now()}`,
      timestamp: new Date().toISOString(),
    };
    setTimeLogs((prev) => [newLog, ...prev]);

    // Recalculate today's totals in timeRecords
    const todayLogs = [newLog, ...timeLogs].filter((l) => l.date === today);
    const prod = todayLogs.filter((l) => l.category === 'productive').reduce((s, l) => s + l.durationMinutes, 0);
    const neu = todayLogs.filter((l) => l.category === 'neutral').reduce((s, l) => s + l.durationMinutes, 0);
    const wst = todayLogs.filter((l) => l.category === 'unproductive').reduce((s, l) => s + l.durationMinutes, 0);

    const existingRecord = timeRecords.find((r) => r.date === today);
    const updatedRecord: TimeRecord = {
      date: today,
      productiveMinutes: prod,
      neutralMinutes: neu,
      wastedMinutes: wst,
      screenTimeHours: existingRecord ? existingRecord.screenTimeHours : +( (prod + neu + wst) / 60 ).toFixed(1),
      distractionNotes: existingRecord?.distractionNotes,
    };
    logTimeRecord(updatedRecord);
  };

  const deleteTimeLog = (id: string) => {
    setTimeLogs((prev) => prev.filter((l) => l.id !== id));
  };

  const mergeCompanionTimeLogs = (incomingLogs: TimeLogEntry[]): { added: number; skippedDuplicates: number; totalProcessed: number } => {
    let addedCount = 0;
    let skippedCount = 0;
    const toAdd: TimeLogEntry[] = [];

    incomingLogs.forEach((inc) => {
      // Duplicate prevention by stable ID or (date + normalized activityName)
      const exists = timeLogs.some(
        (l) => l.id === inc.id || (l.date === inc.date && l.activityName.toLowerCase() === inc.activityName.toLowerCase())
      );
      if (exists) {
        skippedCount++;
      } else {
        toAdd.push(inc);
        addedCount++;
      }
    });

    if (toAdd.length > 0) {
      const updatedLogs = [...toAdd, ...timeLogs];
      setTimeLogs(updatedLogs);

      // Group newly added logs by date and recalculate timeRecords without destroying existing notes
      const affectedDates = Array.from(new Set(toAdd.map((l) => l.date)));
      affectedDates.forEach((d) => {
        const dayLogs = updatedLogs.filter((l) => l.date === d);
        const prod = dayLogs.filter((l) => l.category === 'productive').reduce((s, l) => s + l.durationMinutes, 0);
        const neu = dayLogs.filter((l) => l.category === 'neutral').reduce((s, l) => s + l.durationMinutes, 0);
        const wst = dayLogs.filter((l) => l.category === 'unproductive').reduce((s, l) => s + l.durationMinutes, 0);

        const existingRecord = timeRecords.find((r) => r.date === d);
        const updatedRecord: TimeRecord = {
          date: d,
          productiveMinutes: prod,
          neutralMinutes: neu,
          wastedMinutes: wst,
          screenTimeHours: existingRecord ? existingRecord.screenTimeHours : +((prod + neu + wst) / 60).toFixed(1),
          distractionNotes: existingRecord?.distractionNotes,
        };
        logTimeRecord(updatedRecord);
      });
    }

    return { added: addedCount, skippedDuplicates: skippedCount, totalProcessed: incomingLogs.length };
  };

  // ── CONSTRUCTIVE ACCOUNTABILITY (MODERATE & RESPECTFUL) ──
  const [accountabilityIncidents, setAccountabilityIncidents] = useState<AccountabilityIncident[]>([]);

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

  // ── PERSONAL GROWTH, SKILLS, PROJECTS & LEARNING ENGINE (PHASE 2) ──
  const [skills, setSkills] = useState<SkillItem[]>([]);

  const addSkill = (skill: Omit<SkillItem, 'id' | 'createdAt' | 'practiceLogs' | 'totalPracticeMinutes'>) => {
    const newSkill: SkillItem = {
      ...skill,
      id: `skill_${Date.now()}`,
      createdAt: new Date().toISOString().slice(0, 10),
      totalPracticeMinutes: 0,
      practiceLogs: []
    };
    setSkills((prev) => [newSkill, ...prev]);
  };

  const updateSkill = (id: string, updates: Partial<SkillItem>) => {
    setSkills((prev) => prev.map((s) => s.id === id ? { ...s, ...updates } : s));
  };

  const deleteSkill = (id: string) => {
    setSkills((prev) => prev.filter((s) => s.id !== id));
  };

  const addSkillPracticeLog = (skillId: string, log: Omit<SkillPracticeLog, 'id' | 'skillId'>) => {
    const newLog: SkillPracticeLog = {
      ...log,
      id: `log_${Date.now()}`,
      skillId
    };
    setSkills((prev) => prev.map((s) => {
      if (s.id !== skillId) return s;
      const updatedMinutes = s.totalPracticeMinutes + log.durationMinutes;
      const targetHours = s.targetPracticeHours || 100;
      const calculatedPct = Math.min(100, Math.round((updatedMinutes / (targetHours * 60)) * 100));
      return {
        ...s,
        totalPracticeMinutes: updatedMinutes,
        progressPercent: Math.max(s.progressPercent, calculatedPct),
        practiceLogs: [newLog, ...(s.practiceLogs || [])]
      };
    }));
  };

  const deleteSkillPracticeLog = (skillId: string, logId: string) => {
    setSkills((prev) => prev.map((s) => {
      if (s.id !== skillId) return s;
      const removedLog = (s.practiceLogs || []).find((l) => l.id === logId);
      const subMinutes = removedLog ? removedLog.durationMinutes : 0;
      return {
        ...s,
        totalPracticeMinutes: Math.max(0, s.totalPracticeMinutes - subMinutes),
        practiceLogs: (s.practiceLogs || []).filter((l) => l.id !== logId)
      };
    }));
  };

  const [personalProjects, setPersonalProjects] = useState<PersonalProject[]>([]);

  const addPersonalProject = (project: Omit<PersonalProject, 'id'>) => {
    const newProj: PersonalProject = {
      ...project,
      id: `proj_${Date.now()}`
    };
    setPersonalProjects((prev) => [newProj, ...prev]);
  };

  const updatePersonalProject = (id: string, updates: Partial<PersonalProject>) => {
    setPersonalProjects((prev) => prev.map((p) => p.id === id ? { ...p, ...updates } : p));
  };

  const deletePersonalProject = (id: string) => {
    setPersonalProjects((prev) => prev.filter((p) => p.id !== id));
  };

  const toggleProjectMilestone = (projectId: string, milestoneId: string) => {
    setPersonalProjects((prev) => prev.map((p) => {
      if (p.id !== projectId) return p;
      const updatedMilestones = p.milestones.map((m) => {
        if (m.id !== milestoneId) return m;
        const nowCompleted = !m.completed;
        return {
          ...m,
          completed: nowCompleted,
          completedAt: nowCompleted ? new Date().toISOString().slice(0, 10) : undefined
        };
      });
      return { ...p, milestones: updatedMilestones };
    }));
  };

  const addProjectMilestone = (projectId: string, title: string) => {
    const newM: ProjectMilestone = {
      id: `m_${Date.now()}`,
      title,
      completed: false
    };
    setPersonalProjects((prev) => {
      return prev.map((p) => {
        if (p.id !== projectId) return p;
        return { ...p, milestones: [...p.milestones, newM] };
      });
    });
  };

  const deleteProjectMilestone = (projectId: string, milestoneId: string) => {
    setPersonalProjects((prev) => prev.map((p) => {
      if (p.id !== projectId) return p;
      return { ...p, milestones: p.milestones.filter((m) => m.id !== milestoneId) };
    }));
  };

  const addProjectKeyLearning = (projectId: string, learning: string) => {
    setPersonalProjects((prev) => prev.map((p) => {
      if (p.id !== projectId) return p;
      return { ...p, keyLearnings: [...p.keyLearnings, learning] };
    }));
  };

  const [learningItems, setLearningItems] = useState<CuratedLearningItem[]>([]);

  const addLearningItem = (item: Omit<CuratedLearningItem, 'id' | 'dateAdded'>) => {
    const newItem: CuratedLearningItem = {
      ...item,
      id: `learn_${Date.now()}`,
      dateAdded: new Date().toISOString().slice(0, 10)
    };
    setLearningItems((prev) => [newItem, ...prev]);
  };

  const updateLearningItem = (id: string, updates: Partial<CuratedLearningItem>) => {
    setLearningItems((prev) => prev.map((l) => l.id === id ? { ...l, ...updates } : l));
  };

  const deleteLearningItem = (id: string) => {
    setLearningItems((prev) => prev.filter((l) => l.id !== id));
  };

  const addLearningTakeaway = (itemId: string, takeaway: string, isActionable = false) => {
    setLearningItems((prev) => prev.map((l) => {
      if (l.id !== itemId) return l;
      if (isActionable) {
        return { ...l, actionableInsights: [...l.actionableInsights, takeaway] };
      }
      return { ...l, keyTakeaways: [...l.keyTakeaways, takeaway] };
    }));
  };

  // ── PERSONAL GROWTH, REFLECTIONS & OBJECTIVES ──
  const [growthRatings, setGrowthRatings] = useState<PersonalGrowthRating[]>([]);

  const logGrowthRating = (rating: Omit<PersonalGrowthRating, 'date'>) => {
    const date = new Date().toISOString().slice(0, 10);
    setGrowthRatings((prev) => [{ ...rating, date }, ...prev.filter((r) => r.date !== date)]);
  };

  const [lessonsLearned, setLessonsLearned] = useState<LessonLearned[]>([]);

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

  const [objectives, setObjectives] = useState<PersonalObjective[]>([]);

  const addObjective = (obj: Omit<PersonalObjective, 'id'>) => {
    const newObj: PersonalObjective = { ...obj, id: `obj_${Date.now()}` };
    setObjectives((prev) => [newObj, ...prev]);
  };

  const updateObjective = (id: string, updates: Partial<PersonalObjective>) => {
    setObjectives((prev) => prev.map((o) => o.id === id ? { ...o, ...updates } : o));
  };

  const deleteObjective = (id: string) => {
    setObjectives((prev) => prev.filter((o) => o.id !== id));
  };

  // ── JOURNAL ──
  const [journalDraft, setJournalDraft] = useState('');
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([]);

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

  // ── UPCOMING EVENTS ──
  const [upcomingEvents, setUpcomingEvents] = useState<UpcomingEvent[]>([]);

  // ── LIFE DIMENSIONS ──
  const [lifeDimensions, setLifeDimensions] = useState<LifeDimensions>({
    career: 5,
    health: 5,
    relationships: 5,
    finance: 5,
    mind: 5,
    environment: 5,
  });

  const updateLifeDimension = (dim: keyof LifeDimensions, val: number) => {
    setLifeDimensions((prev) => ({ ...prev, [dim]: val }));
  };
  const updateDimension = updateLifeDimension;

  const alignmentPercent = Math.round(
    (Object.values(lifeDimensions).reduce((a, b) => a + b, 0) / (Object.values(lifeDimensions).length * 10)) * 100
  );

  // ── DUAL AUDIO SANCTUARY (PROCEDURAL WEB AUDIO & YOUTUBE STREAM ENGINE) ──
  const [audioSource, setAudioSource] = useState<'ambient' | 'youtube'>('ambient');

  // Procedural Web Audio Soundscapes
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
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // fallback
    }
    return CURATED_YOUTUBE_STREAMS;
  });

  useEffect(() => {
    try {
      localStorage.setItem('for_me_saved_yt_library', JSON.stringify(savedYouTubeItems));
    } catch (e) {
      console.warn('Failed to save YouTube library to localStorage', e);
    }
  }, [savedYouTubeItems]);

  useEffect(() => {
    try {
      if (activeYouTubeItem) {
        localStorage.setItem('for_me_active_yt', JSON.stringify(activeYouTubeItem));
      }
    } catch (e) {
      console.warn('Failed to save active YouTube item to localStorage', e);
    }
  }, [activeYouTubeItem]);

  const playSoundscape = (id?: SoundscapeId) => {
    // 1. Pause YouTube player if running
    if (isYouTubePlaying) {
      setYouTubeIsPlaying(false);
      try {
        const p = (window as any).__forMeYouTubePlayer;
        if (p && typeof p.pauseVideo === 'function') p.pauseVideo();
      } catch {}
    }
    setAudioSource('ambient');

    const target = id || activeSoundscapeId;
    setActiveSoundscapeId(target);
    soundEngine.play(target);
    setIsAudioPlaying(true);
  };

  const stopSoundscape = () => {
    soundEngine.stop();
    setIsAudioPlaying(false);
  };

  const setAudioVolume = (vol: number) => {
    setAudioVolumeState(vol);
    soundEngine.setVolume(vol);
  };

  const toggleAudioMute = () => {
    const muted = soundEngine.toggleMute();
    setIsAudioMutedState(muted);
  };

  // YouTube audio controller actions
  const playYouTubeItem = (item: YouTubeItem) => {
    // 1. Stop procedural soundscape first
    soundEngine.stop();
    setIsAudioPlaying(false);

    // 2. Set item & switch active source
    setActiveYouTubeItem(item);
    setAudioSource('youtube');
    setYouTubeIsPlaying(true);

    try {
      const p = (window as any).__forMeYouTubePlayer;
      if (p) {
        if (item.type === 'playlist' && item.playlistId) {
          if (typeof p.loadPlaylist === 'function') {
            p.loadPlaylist({ list: item.playlistId, listType: 'playlist' });
          }
        } else if (item.videoId) {
          if (typeof p.loadVideoById === 'function') {
            p.loadVideoById(item.videoId);
          }
        }
      }
    } catch (err) {
      console.warn('playYouTubeItem call error:', err);
    }
  };

  const toggleYouTubePlay = () => {
    if (isYouTubePlaying) {
      setYouTubeIsPlaying(false);
      try {
        const p = (window as any).__forMeYouTubePlayer;
        if (p && typeof p.pauseVideo === 'function') p.pauseVideo();
      } catch {}
    } else {
      // Stop procedural soundscape
      soundEngine.stop();
      setIsAudioPlaying(false);
      setAudioSource('youtube');
      setYouTubeIsPlaying(true);

      try {
        const p = (window as any).__forMeYouTubePlayer;
        if (p && typeof p.playVideo === 'function') p.playVideo();
      } catch {}
    }
  };

  const stopYouTube = () => {
    setYouTubeIsPlaying(false);
    try {
      const p = (window as any).__forMeYouTubePlayer;
      if (p && typeof p.stopVideo === 'function') p.stopVideo();
    } catch {}
  };

  const nextYouTubeTrack = () => {
    try {
      const p = (window as any).__forMeYouTubePlayer;
      if (p && typeof p.nextVideo === 'function') {
        p.nextVideo();
        setYouTubeIsPlaying(true);
      }
    } catch {}
  };

  const prevYouTubeTrack = () => {
    try {
      const p = (window as any).__forMeYouTubePlayer;
      if (p && typeof p.previousVideo === 'function') {
        p.previousVideo();
        setYouTubeIsPlaying(true);
      }
    } catch {}
  };

  const setYouTubeVolume = (vol: number) => {
    setYouTubeVolumeState(vol);
    try {
      const p = (window as any).__forMeYouTubePlayer;
      if (p && typeof p.setVolume === 'function') p.setVolume(vol);
    } catch {}
  };

  const toggleYouTubeMute = () => {
    setIsYouTubeMutedState((prev) => {
      const next = !prev;
      try {
        const p = (window as any).__forMeYouTubePlayer;
        if (p) {
          if (next && typeof p.mute === 'function') p.mute();
          else if (!next && typeof p.unMute === 'function') p.unMute();
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
    return { success: true, item: newItem };
  };

  const removeYouTubeFromLibrary = (id: string) => {
    setSavedYouTubeItems((prev) => prev.filter((item) => item.id !== id));
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

  // Sleep setter
  const setSleep = (h: number, m: number) => {
    setSleepHours(h);
    setSleepMinutes(m);
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
    const dateStr = dateObj.toISOString().slice(0, 10);
    const isToday = idx === 55;

    // Count how many habits were recorded complete on this specific day
    const habitsCompleted = habits.filter((h) => {
      if (h.history && h.history[dateStr] !== undefined) {
        return h.history[dateStr];
      }
      return isToday ? h.completed : false;
    }).length;

    let intensity: 0 | 1 | 2 | 3 | 4 = 0;
    if (habitsCompleted >= 5) intensity = 4;
    else if (habitsCompleted >= 4) intensity = 3;
    else if (habitsCompleted >= 2) intensity = 2;
    else if (habitsCompleted >= 1) intensity = 1;

    // Compute study minutes on that day from recorded sessions
    const sessionsOnDate = studySessions.filter((s) => s.timestamp.startsWith(dateStr));
    const studyMinutes = sessionsOnDate.reduce((acc, s) => acc + Math.round(s.durationSeconds / 60), 0);

    return {
      date: dateStr,
      dayOfWeek: dateObj.getDay(),
      intensity,
      habitsCompleted,
      studyMinutes: isToday ? Math.max(studyMinutes, Math.floor(studySeconds / 60)) : studyMinutes,
    };
  });

  // LocalStorage non-destructive persistence (Condition 3 & 4)
  const isLoadedRef = useRef(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        const SEED_IDS = new Set([
          'hl_1', 'hl_2', 'hl_3', 'hl_4', 'hl_5', 'hl_6', 'hl_7', 'hl_8',
          'sl_1', 'sl_2', 'sl_3', 'sl_4', 'sl_5', 'sl_6', 'sl_7', 'default',
          'ml_1', 'ml_2', 'ml_3', 'ml_4', 'ml_5', 'ml_6',
          'mv_1', 'mv_2', 'mv_3', 'mv_4', 'mv_5', 'mv_6',
          'vo_1', 'vo_2', 'vo_3', 'vo_4', 'vo_5', 'default_vo',
          's1', 's2', 's3', 's4',
          'asm_1', 'asm_2', 'asm_3', 'asm_4', 'asm_5', 'asm_6', 'asm_7', 'asm_8', 'asm_9',
          'g1', 'g2', 'g3',
          'tl_1', 'tl_2', 'tl_3', 'tl_4', 'tl_5',
          'acc1', 'acc2',
          'skill_ts', 'skill_algo', 'skill_endurance', 'skill_design', 'skill_comm',
          'proj_for_me', 'proj_algo', 'proj_run',
          'learn_ddia', 'learn_interpreters', 'learn_sicp', 'learn_vo2',
          'ct1', 'ct2', 'ct3', 'ct4',
          'ctr_1', 'ctr_2', 'ctr_3', 'ctr_4', 'ctr_5',
          'obj_1', 'obj_2',
          'll1', 'll2'
        ]);

        if (parsed.profile) setProfile(parsed.profile);
        if (parsed.wallpaperTheme) {
          const validThemes: WallpaperTheme[] = ['cosmic-cliffs', 'pillars-of-creation', 'deep-space'];
          setWallpaperTheme(validThemes.includes(parsed.wallpaperTheme) ? parsed.wallpaperTheme : 'deep-space');
        }
        if (parsed.appTheme) setAppTheme(parsed.appTheme);
        if (Array.isArray(parsed.tasks)) {
          // If tasks are the 7 original tasks, preserve them
          setTasks(parsed.tasks);
        }
        if (Array.isArray(parsed.habits)) {
          const cleanedHabits = parsed.habits.map((h: any) => {
            // Strip out fake historical streaks if they match old demo seed
            if (h.streak >= 4 && h.history && Object.keys(h.history).some(k => k.startsWith('2026-11') || k.startsWith('2026-10'))) {
              return { ...h, streak: 0, bestStreak: 0, completed: false, history: {} };
            }
            return h;
          });
          setHabits(cleanedHabits);
        }
        if (Array.isArray(parsed.journalEntries)) {
          setJournalEntries(parsed.journalEntries.filter((e: any) => e.id !== '1' && !e.text?.includes('Built the Next-Gen dual-background')));
        }
        if (parsed.lifeDimensions) {
          if (parsed.lifeDimensions.career === 88 && parsed.lifeDimensions.health === 92) {
            setLifeDimensions({ career: 5, health: 5, relationships: 5, finance: 5, mind: 5, environment: 5 });
          } else {
            setLifeDimensions(parsed.lifeDimensions);
          }
        }
        if (parsed.currentMood) setCurrentMood(parsed.currentMood);
        if (Array.isArray(parsed.upcomingEvents)) {
          setUpcomingEvents(parsed.upcomingEvents.filter((ev: any) => ev.id !== '1' && ev.id !== '2'));
        }
        if (parsed.promise) {
          setPromise({ ...parsed.promise, current: parsed.promise.current > 0 && parsed.promise.current === 4 ? 0 : parsed.promise.current });
        }
        if (Array.isArray(parsed.studySessions)) {
          setStudySessions(parsed.studySessions.filter((s: any) => !SEED_IDS.has(s.id)));
        }
        if (Array.isArray(parsed.grades)) {
          setGrades(parsed.grades.filter((g: any) => !SEED_IDS.has(g.id)));
        }
        if (Array.isArray(parsed.subjects)) setSubjects(parsed.subjects);
        if (Array.isArray(parsed.academicYears)) setAcademicYears(parsed.academicYears);
        if (parsed.activeAcademicYearId) setActiveAcademicYearId(parsed.activeAcademicYearId);
        if (parsed.activeTermId) setActiveTermId(parsed.activeTermId);
        if (Array.isArray(parsed.assessmentRecords)) {
          setAssessmentRecords(parsed.assessmentRecords.filter((a: any) => !SEED_IDS.has(a.id)));
        }
        if (Array.isArray(parsed.goals)) {
          setGoals(parsed.goals.filter((g: any) => !SEED_IDS.has(g.id)));
        }
        if (Array.isArray(parsed.customTrackers)) {
          setCustomTrackers(parsed.customTrackers.filter((ct: any) => !SEED_IDS.has(ct.id)));
        }
        if (Array.isArray(parsed.customTrackerRecords)) {
          setCustomTrackerRecords(parsed.customTrackerRecords.filter((r: any) => !SEED_IDS.has(r.id)));
        }
        if (Array.isArray(parsed.timeRecords)) {
          setTimeRecords(parsed.timeRecords.filter((tr: any) => tr.distractionNotes !== 'Checked news feed briefly during break' && tr.distractionNotes !== 'Brief distraction in afternoon'));
        }
        if (Array.isArray(parsed.timeLogs)) {
          setTimeLogs(parsed.timeLogs.filter((tl: any) => !SEED_IDS.has(tl.id)));
        }
        if (Array.isArray(parsed.accountabilityIncidents)) {
          setAccountabilityIncidents(parsed.accountabilityIncidents.filter((acc: any) => !SEED_IDS.has(acc.id)));
        }
        if (Array.isArray(parsed.growthRatings)) {
          setGrowthRatings(parsed.growthRatings.filter((gr: any) => !gr.note?.includes('Clear priorities and uninterrupted flow')));
        }
        if (Array.isArray(parsed.lessonsLearned)) {
          setLessonsLearned(parsed.lessonsLearned.filter((ll: any) => !SEED_IDS.has(ll.id)));
        }
        if (Array.isArray(parsed.objectives)) {
          setObjectives(parsed.objectives.filter((ob: any) => !SEED_IDS.has(ob.id)));
        }
        if (Array.isArray(parsed.skills)) {
          setSkills(parsed.skills.filter((sk: any) => !SEED_IDS.has(sk.id)));
        }
        if (Array.isArray(parsed.personalProjects)) {
          setPersonalProjects(parsed.personalProjects.filter((pj: any) => !SEED_IDS.has(pj.id)));
        }
        if (Array.isArray(parsed.learningItems)) {
          setLearningItems(parsed.learningItems.filter((li: any) => !SEED_IDS.has(li.id)));
        }
        if (parsed.healthRecord) {
          if (parsed.healthRecord.sleepHours === 7.75 && parsed.healthRecord.hydrationGlasses === 6) {
            setHealthRecord({
              date: new Date().toISOString().slice(0, 10),
              sleepHours: 0,
              sleepQuality: 0,
              hydrationGlasses: 0,
              meals: { breakfast: false, lunch: false, dinner: false, mindfulEating: false },
              movementMinutes: 0,
              workoutCompleted: false,
              workoutType: '',
            });
            setHydration(0);
            setSleepHours(0);
            setSleepMinutes(0);
            setMovementPercent(0);
            setDailyRating(0);
          } else {
            setHealthRecord(parsed.healthRecord);
          }
        }
        if (Array.isArray(parsed.hydrationLogs)) {
          const cleanedHyd = parsed.hydrationLogs.filter((hl: any) => !SEED_IDS.has(hl.id));
          setHydrationLogs(cleanedHyd);
          if (cleanedHyd.length === 0) setHydration(0);
        }
        if (parsed.hydrationTargetMl) setHydrationTargetMl(parsed.hydrationTargetMl);
        if (Array.isArray(parsed.sleepRecords)) {
          const cleanedSleep = parsed.sleepRecords.filter((sl: any) => !SEED_IDS.has(sl.id));
          setSleepRecords(cleanedSleep);
          if (cleanedSleep.length === 0) {
            setSleepHours(0);
            setSleepMinutes(0);
          }
        }
        if (parsed.sleepTargetHours) setSleepTargetHours(parsed.sleepTargetHours);
        if (Array.isArray(parsed.mealRecords)) {
          setMealRecords(parsed.mealRecords.filter((ml: any) => !SEED_IDS.has(ml.id)));
        }
        if (Array.isArray(parsed.movementActivities)) {
          const cleanedMv = parsed.movementActivities.filter((mv: any) => !SEED_IDS.has(mv.id));
          setMovementActivities(cleanedMv);
          if (cleanedMv.length === 0) setMovementPercent(0);
        }
        if (parsed.movementWeeklyTargetMinutes) setMovementWeeklyTargetMinutes(parsed.movementWeeklyTargetMinutes);
        if (Array.isArray(parsed.vitalityObservations)) {
          setVitalityObservations(parsed.vitalityObservations.filter((vo: any) => !SEED_IDS.has(vo.id)));
        }
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
        subjects,
        academicYears,
        activeAcademicYearId,
        activeTermId,
        assessmentRecords,
        grades,
        goals,
        customTrackers,
        customTrackerRecords,
        timeRecords,
        timeLogs,
        accountabilityIncidents,
        growthRatings,
        lessonsLearned,
        objectives,
        skills,
        personalProjects,
        learningItems,
        healthRecord,
        hydrationLogs,
        hydrationTargetMl,
        sleepRecords,
        sleepTargetHours,
        mealRecords,
        movementActivities,
        movementWeeklyTargetMinutes,
        vitalityObservations
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
    subjects,
    academicYears,
    activeAcademicYearId,
    activeTermId,
    assessmentRecords,
    grades,
    goals,
    customTrackers,
    customTrackerRecords,
    timeRecords,
    timeLogs,
    accountabilityIncidents,
    growthRatings,
    lessonsLearned,
    objectives,
    skills,
    personalProjects,
    learningItems,
    healthRecord,
    hydrationLogs,
    hydrationTargetMl,
    sleepRecords,
    sleepTargetHours,
    mealRecords,
    movementActivities,
    movementWeeklyTargetMinutes,
    vitalityObservations
  ]);

  // Data Backup Export & Safe Import
  const exportDataBackup = (): string => {
    const payload = {
      version: '3.1.0',
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
      subjects,
      academicYears,
      activeAcademicYearId,
      activeTermId,
      assessmentRecords,
      grades,
      goals,
      customTrackers,
      customTrackerRecords,
      timeRecords,
      timeLogs,
      accountabilityIncidents,
      growthRatings,
      lessonsLearned,
      objectives,
      skills,
      personalProjects,
      learningItems,
      healthRecord,
      hydrationLogs,
      hydrationTargetMl,
      sleepRecords,
      sleepTargetHours,
      mealRecords,
      movementActivities,
      movementWeeklyTargetMinutes,
      vitalityObservations
    };
    return JSON.stringify(payload, null, 2);
  };

  const importDataBackup = (jsonStr: string): boolean => {
    try {
      const data = JSON.parse(jsonStr);
      if (data.profile) setProfile(data.profile);
      if (data.wallpaperTheme) {
        const validThemes: WallpaperTheme[] = ['cosmic-cliffs', 'pillars-of-creation', 'deep-space'];
        setWallpaperTheme(validThemes.includes(data.wallpaperTheme) ? data.wallpaperTheme : 'deep-space');
      }
      if (data.appTheme) setAppTheme(data.appTheme);
      if (Array.isArray(data.tasks)) setTasks(data.tasks);
      if (Array.isArray(data.habits)) setHabits(data.habits);
      if (Array.isArray(data.journalEntries)) setJournalEntries(data.journalEntries);
      if (data.lifeDimensions) setLifeDimensions(data.lifeDimensions);
      if (data.currentMood) setCurrentMood(data.currentMood);
      if (Array.isArray(data.upcomingEvents)) setUpcomingEvents(data.upcomingEvents);
      if (data.promise) setPromise(data.promise);
      if (Array.isArray(data.studySessions)) setStudySessions(data.studySessions);
      if (Array.isArray(data.subjects)) setSubjects(data.subjects);
      if (Array.isArray(data.academicYears)) setAcademicYears(data.academicYears);
      if (data.activeAcademicYearId) setActiveAcademicYearId(data.activeAcademicYearId);
      if (data.activeTermId) setActiveTermId(data.activeTermId);
      if (Array.isArray(data.assessmentRecords)) setAssessmentRecords(data.assessmentRecords);
      if (Array.isArray(data.grades)) setGrades(data.grades);
      if (Array.isArray(data.goals)) setGoals(data.goals);
      if (Array.isArray(data.customTrackers)) setCustomTrackers(data.customTrackers);
      if (Array.isArray(data.customTrackerRecords)) setCustomTrackerRecords(data.customTrackerRecords);
      if (Array.isArray(data.timeRecords)) setTimeRecords(data.timeRecords);
      if (Array.isArray(data.timeLogs)) setTimeLogs(data.timeLogs);
      if (Array.isArray(data.accountabilityIncidents)) setAccountabilityIncidents(data.accountabilityIncidents);
      if (Array.isArray(data.growthRatings)) setGrowthRatings(data.growthRatings);
      if (Array.isArray(data.lessonsLearned)) setLessonsLearned(data.lessonsLearned);
      if (Array.isArray(data.objectives)) setObjectives(data.objectives);
      if (Array.isArray(data.skills)) setSkills(data.skills);
      if (Array.isArray(data.personalProjects)) setPersonalProjects(data.personalProjects);
      if (Array.isArray(data.learningItems)) setLearningItems(data.learningItems);
      if (data.healthRecord) setHealthRecord(data.healthRecord);
      if (Array.isArray(data.hydrationLogs)) setHydrationLogs(data.hydrationLogs);
      if (data.hydrationTargetMl) setHydrationTargetMl(data.hydrationTargetMl);
      if (Array.isArray(data.sleepRecords)) setSleepRecords(data.sleepRecords);
      if (data.sleepTargetHours) setSleepTargetHours(data.sleepTargetHours);
      if (Array.isArray(data.mealRecords)) setMealRecords(data.mealRecords);
      if (Array.isArray(data.movementActivities)) setMovementActivities(data.movementActivities);
      if (data.movementWeeklyTargetMinutes) setMovementWeeklyTargetMinutes(data.movementWeeklyTargetMinutes);
      if (Array.isArray(data.vitalityObservations)) setVitalityObservations(data.vitalityObservations);
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
        isHUDHidden,
        setIsHUDHidden,
        toggleHUDHidden,
        wallpaperTheme,
        setWallpaperTheme,
        previewTheme,
        setPreviewTheme,
        wallpaperSettings,
        updateWallpaperSettings,
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
        hydrationLogs,
        hydrationTargetMl,
        addHydrationLog,
        deleteHydrationLog,
        setHydrationTargetMl,
        sleepRecords,
        sleepTargetHours,
        setSleepTargetHours,
        addSleepRecord,
        deleteSleepRecord,
        mealRecords,
        logMealRecord,
        deleteMealRecord,
        movementActivities,
        movementWeeklyTargetMinutes,
        setMovementWeeklyTargetMinutes,
        addMovementActivity,
        deleteMovementActivity,
        vitalityObservations,
        addVitalityObservation,
        deleteVitalityObservation,
        studySeconds,
        isStudyActive,
        studySubject,
        setStudySubject,
        toggleStudyTimer,
        resetStudyTimer,
        saveStudySession,
        studySessions,
        addStudySession,
        deleteStudySession,
        subjects,
        addSubject,
        updateSubject,
        deleteSubject,
        addSubjectComponent,
        deleteSubjectComponent,
        academicYears,
        activeAcademicYearId,
        setActiveAcademicYearId,
        activeTermId,
        setActiveTermId,
        addAcademicYear,
        addAcademicTerm,
        assessmentRecords,
        addAssessmentRecord,
        updateAssessmentRecord,
        deleteAssessmentRecord,
        mergePortalAssessments,
        grades,
        addGradeItem,
        updateGradeItem,
        deleteGradeItem,
        heatmapData,
        currentStreak,
        promise,
        incrementPromise,
        updatePromiseText,
        updatePromiseTarget,
        habits,
        toggleHabit,
        toggleHabitDate,
        addHabit,
        addHabitDetailed,
        updateHabit,
        deleteHabit,
        overallProgress,
        dailyRating,
        setDailyRating,
        customTrackers,
        customTrackerRecords,
        addCustomTracker,
        updateCustomTracker,
        deleteCustomTracker,
        logCustomTrackerValue,
        logCustomTrackerRecord,
        deleteCustomTrackerRecord,
        goals,
        addGoalItem,
        updateGoal,
        toggleGoalMilestone,
        updateGoalStatus,
        deleteGoalItem,
        timeRecords,
        timeLogs,
        logTimeRecord,
        addTimeLog,
        deleteTimeLog,
        mergeCompanionTimeLogs,
        accountabilityIncidents,
        addAccountabilityIncident,
        approveIncident,
        completeIncident,
        adjustIncidentTarget,
        skills,
        addSkill,
        updateSkill,
        deleteSkill,
        addSkillPracticeLog,
        deleteSkillPracticeLog,
        personalProjects,
        addPersonalProject,
        updatePersonalProject,
        deletePersonalProject,
        toggleProjectMilestone,
        addProjectMilestone,
        deleteProjectMilestone,
        addProjectKeyLearning,
        learningItems,
        addLearningItem,
        updateLearningItem,
        deleteLearningItem,
        addLearningTakeaway,
        growthRatings,
        logGrowthRating,
        lessonsLearned,
        addLessonLearned,
        deleteLessonLearned,
        objectives,
        addObjective,
        updateObjective,
        deleteObjective,
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
