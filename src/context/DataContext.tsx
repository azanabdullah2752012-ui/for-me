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
  CustomTrackerRecord,
  GradeItem,
  SubjectDefinition,
  AcademicYear,
  AcademicTerm,
  SubjectAssessmentComponent,
  AssessmentRecord,
  AssessmentType,
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

  // Biometrics & Health Core
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

  // ── FOUR COMPLETE HEALTH SYSTEMS ──

  // 1. Hydration
  const [hydrationTargetMl, setHydrationTargetMl] = useState<number>(2500);
  const [hydrationLogs, setHydrationLogs] = useState<HydrationLog[]>([
    { id: 'hl_1', date: '2026-11-04', timestamp: '2026-11-04T07:15:00Z', amountMl: 500, container: 'bottle_500', notes: 'Morning wake-up hydration' },
    { id: 'hl_2', date: '2026-11-04', timestamp: '2026-11-04T10:30:00Z', amountMl: 250, container: 'glass_250', notes: 'Mid-morning study break' },
    { id: 'hl_3', date: '2026-11-04', timestamp: '2026-11-04T13:00:00Z', amountMl: 500, container: 'bottle_500', notes: 'With lunch' },
    { id: 'hl_4', date: '2026-11-04', timestamp: '2026-11-04T16:00:00Z', amountMl: 750, container: 'flask_750', notes: 'Afternoon workout session' },
    { id: 'hl_5', date: '2026-11-03', timestamp: '2026-11-03T08:00:00Z', amountMl: 500, container: 'bottle_500' },
    { id: 'hl_6', date: '2026-11-03', timestamp: '2026-11-03T12:30:00Z', amountMl: 500, container: 'bottle_500' },
    { id: 'hl_7', date: '2026-11-03', timestamp: '2026-11-03T18:00:00Z', amountMl: 750, container: 'flask_750' },
    { id: 'hl_8', date: '2026-11-03', timestamp: '2026-11-03T21:00:00Z', amountMl: 250, container: 'glass_250' },
  ]);

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
  const [sleepRecords, setSleepRecords] = useState<SleepRecord[]>([
    { id: 'sl_1', date: '2026-11-04', bedtime: '23:15', wakeTime: '07:00', durationMinutes: 465, quality: 4, notes: 'Restful, natural sunlight right upon waking' },
    { id: 'sl_2', date: '2026-11-03', bedtime: '23:30', wakeTime: '07:15', durationMinutes: 465, quality: 4, notes: 'Fell asleep easily after reading' },
    { id: 'sl_3', date: '2026-11-02', bedtime: '00:00', wakeTime: '07:30', durationMinutes: 450, quality: 3, notes: 'Slightly restless during middle of night' },
    { id: 'sl_4', date: '2026-11-01', bedtime: '23:00', wakeTime: '07:00', durationMinutes: 480, quality: 5, notes: 'Excellent deep sleep cycle' },
    { id: 'sl_5', date: '2026-10-31', bedtime: '23:15', wakeTime: '07:15', durationMinutes: 480, quality: 5, notes: 'Consistent wind-down routine' },
    { id: 'sl_6', date: '2026-10-30', bedtime: '23:45', wakeTime: '07:30', durationMinutes: 465, quality: 4, notes: 'Good recovery after workout' },
    { id: 'sl_7', date: '2026-10-29', bedtime: '23:00', wakeTime: '06:45', durationMinutes: 465, quality: 4, notes: 'Solid rhythm' },
  ]);

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
  const [mealRecords, setMealRecords] = useState<MealRecord[]>([
    { id: 'ml_1', date: '2026-11-04', time: '07:45', mealType: 'breakfast', completed: true, timestamp: '2026-11-04T07:45:00Z', description: 'Oatmeal, blueberries, chia seeds & eggs', notes: 'Sustained energy throughout morning' },
    { id: 'ml_2', date: '2026-11-04', time: '12:45', mealType: 'lunch', completed: true, timestamp: '2026-11-04T12:45:00Z', description: 'Quinoa bowl with roasted vegetables & chicken', notes: 'Mindful digestion' },
    { id: 'ml_3', date: '2026-11-04', time: '16:00', mealType: 'snack', completed: true, timestamp: '2026-11-04T16:00:00Z', description: 'Handful of almonds & apple', notes: 'Pre-workout fuel' },
    { id: 'ml_4', date: '2026-11-03', time: '08:00', mealType: 'breakfast', completed: true, timestamp: '2026-11-03T08:00:00Z', description: 'Avocado toast & eggs' },
    { id: 'ml_5', date: '2026-11-03', time: '13:00', mealType: 'lunch', completed: true, timestamp: '2026-11-03T13:00:00Z', description: 'Rice & lentil soup with greens' },
    { id: 'ml_6', date: '2026-11-03', time: '19:30', mealType: 'dinner', completed: true, timestamp: '2026-11-03T19:30:00Z', description: 'Baked salmon and sweet potato' },
  ]);

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
  const [movementActivities, setMovementActivities] = useState<MovementActivity[]>([
    { id: 'mv_1', date: '2026-11-04', time: '16:30', timestamp: '2026-11-04T16:30:00Z', activityType: 'calisthenics', activityName: 'Weighted Pull-ups & Core', durationMinutes: 45, intensity: 'high', notes: 'Hit target sets with clean form' },
    { id: 'mv_2', date: '2026-11-04', time: '07:30', timestamp: '2026-11-04T07:30:00Z', activityType: 'walking', activityName: 'Morning Sunlight Walk', durationMinutes: 25, intensity: 'light', notes: 'Clearing thoughts' },
    { id: 'mv_3', date: '2026-11-03', time: '17:00', timestamp: '2026-11-03T17:00:00Z', activityType: 'running', activityName: 'Aerobic Base Run', durationMinutes: 35, intensity: 'moderate', notes: 'Maintained zone 2 breathing pace' },
    { id: 'mv_4', date: '2026-11-02', time: '18:00', timestamp: '2026-11-02T18:00:00Z', activityType: 'stretching', activityName: 'Full Body Mobility Flow', durationMinutes: 30, intensity: 'light', notes: 'Focused on hips and spine' },
    { id: 'mv_5', date: '2026-11-01', time: '16:00', timestamp: '2026-11-01T16:00:00Z', activityType: 'calisthenics', activityName: 'Handstand & Ring Pushups', durationMinutes: 40, intensity: 'moderate', notes: 'Clean body line' },
    { id: 'mv_6', date: '2026-10-31', time: '08:00', timestamp: '2026-10-31T08:00:00Z', activityType: 'cycling', activityName: 'Tempo Trail Ride', durationMinutes: 45, intensity: 'moderate', notes: 'Aerobic threshold' },
  ]);

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
  const [vitalityObservations, setVitalityObservations] = useState<DailyVitalityObservation[]>([
    {
      id: 'vo_1',
      date: '2026-11-04',
      energyLevel: 8,
      wellbeing: 9,
      restRecovery: 8,
      physicalReadiness: 9,
      moodState: 'energized',
      notes: 'Slept 7h45m, hydrated early, calm clarity during deep study'
    },
    {
      id: 'vo_2',
      date: '2026-11-03',
      energyLevel: 8,
      wellbeing: 8,
      restRecovery: 7,
      physicalReadiness: 8,
      moodState: 'focused',
      notes: 'Zone 2 running felt smooth, sustained cognitive energy'
    },
    {
      id: 'vo_3',
      date: '2026-11-02',
      energyLevel: 6,
      wellbeing: 7,
      restRecovery: 6,
      physicalReadiness: 6,
      moodState: 'calm',
      notes: 'Slightly shorter sleep night before; mobility flow restored tension'
    },
    {
      id: 'vo_4',
      date: '2026-11-01',
      energyLevel: 9,
      wellbeing: 9,
      restRecovery: 9,
      physicalReadiness: 9,
      moodState: 'balanced',
      notes: 'Full 8h restorative sleep cycle, optimal recovery'
    },
    {
      id: 'vo_5',
      date: '2026-10-31',
      energyLevel: 8,
      wellbeing: 8,
      restRecovery: 8,
      physicalReadiness: 8,
      moodState: 'energized',
      notes: 'Steady energy all day, balanced post-ride feeling'
    }
  ]);

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
  const [assessmentRecords, setAssessmentRecords] = useState<AssessmentRecord[]>([
    {
      id: 'asm_1',
      subjectId: 'sub_1',
      academicYearId: 'ay_2026_2027',
      termId: 'term_1',
      name: 'Unit Assessment 1: Algorithm Complexity',
      type: 'unit_test',
      marksObtained: 24,
      maximumMarks: 25,
      date: '2026-09-15',
      isIncludedInFinal: true,
      notes: 'Full marks on Big-O analysis and recurrence relations.'
    },
    {
      id: 'asm_2',
      subjectId: 'sub_1',
      academicYearId: 'ay_2026_2027',
      termId: 'term_1',
      name: 'Midterm Theory Examination',
      type: 'midterm',
      componentId: 'comp_cs_th',
      marksObtained: 68,
      maximumMarks: 70,
      date: '2026-10-18',
      isIncludedInFinal: true,
      notes: 'Rank 1 in cohort on graph theory.'
    },
    {
      id: 'asm_3',
      subjectId: 'sub_1',
      academicYearId: 'ay_2026_2027',
      termId: 'term_1',
      name: 'Data Structures Lab Benchmark',
      type: 'practical',
      componentId: 'comp_cs_pr',
      marksObtained: 29,
      maximumMarks: 30,
      date: '2026-11-01',
      isIncludedInFinal: true,
      notes: 'Zero memory leaks in binary search tree verification.'
    },
    {
      id: 'asm_4',
      subjectId: 'sub_2',
      academicYearId: 'ay_2026_2027',
      termId: 'term_1',
      name: 'Calculus Examination I: Derivatives & Integrals',
      type: 'midterm',
      componentId: 'comp_math_main',
      marksObtained: 74,
      maximumMarks: 80,
      date: '2026-10-28',
      isIncludedInFinal: true,
      notes: 'Review second-order integration by parts proof.'
    },
    {
      id: 'asm_5',
      subjectId: 'sub_2',
      academicYearId: 'ay_2026_2027',
      termId: 'term_1',
      name: 'Internal Assessment Portfolio & Problem Sets',
      type: 'internal',
      componentId: 'comp_math_ia',
      marksObtained: 19,
      maximumMarks: 20,
      date: '2026-10-30',
      isIncludedInFinal: true
    },
    {
      id: 'asm_6',
      subjectId: 'sub_3',
      academicYearId: 'ay_2026_2027',
      termId: 'term_1',
      name: 'Kinematics & Rotational Dynamics Midterm',
      type: 'midterm',
      componentId: 'comp_phys_th',
      marksObtained: 61,
      maximumMarks: 70,
      date: '2026-10-24',
      isIncludedInFinal: true,
      notes: 'Solid mechanics; strengthen angular momentum derivations.'
    },
    {
      id: 'asm_7',
      subjectId: 'sub_3',
      academicYearId: 'ay_2026_2027',
      termId: 'term_1',
      name: 'Optics & Pendulum Lab Experiments',
      type: 'practical',
      componentId: 'comp_phys_lab',
      marksObtained: 28,
      maximumMarks: 30,
      date: '2026-10-26',
      isIncludedInFinal: true
    },
    {
      id: 'asm_8',
      subjectId: 'sub_4',
      academicYearId: 'ay_2026_2027',
      termId: 'term_1',
      name: 'Responsive Interface & Design Systems Review',
      type: 'assignment',
      componentId: 'comp_dsgn_work',
      marksObtained: 96,
      maximumMarks: 100,
      date: '2026-10-31',
      isIncludedInFinal: true,
      notes: 'Exceptional craftsmanship and baseline alignment.'
    },
    {
      id: 'asm_9',
      subjectId: 'sub_1',
      academicYearId: 'ay_2026_2027',
      termId: 'term_2',
      name: 'Unit Assessment 2: Dynamic Programming',
      type: 'unit_test',
      marksObtained: 25,
      maximumMarks: 25,
      date: '2026-11-03',
      isIncludedInFinal: true
    }
  ]);

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
  const [studySessions, setStudySessions] = useState<StudySession[]>([
    { id: 's1', subject: 'Computer Science', durationSeconds: 5400, timestamp: '2026-11-04T14:30:00Z', notes: 'Binary search tree rebalancing implementation' },
    { id: 's2', subject: 'Math & Calculus', durationSeconds: 3600, timestamp: '2026-11-03T16:15:00Z', notes: 'Integration by parts problem set' },
    { id: 's3', subject: 'Physics', durationSeconds: 4200, timestamp: '2026-11-02T18:00:00Z', notes: 'Rotational dynamics review' },
    { id: 's4', subject: 'Design & Craft', durationSeconds: 4800, timestamp: '2026-11-01T15:00:00Z', notes: 'Typography baseline & grid composition' }
  ]);
  const timerRef = useRef<number | null>(null);

  // Grades & Assessments
  const [grades, setGrades] = useState<GradeItem[]>([
    { id: 'g1', subject: 'Computer Science', title: 'Data Structures Lab', score: 98, total: 100, date: '2026-11-01', targetGrade: 95 },
    { id: 'g2', subject: 'Math & Calculus', title: 'Calculus Examination II', score: 92, total: 100, date: '2026-10-28', targetGrade: 90 },
    { id: 'g3', subject: 'Physics', title: 'Kinematics Problem Set', score: 88, total: 100, date: '2026-10-24', targetGrade: 85 },
  ]);

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
    current: 4,
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
      completed: true, 
      streak: 7, 
      bestStreak: 14, 
      category: 'study', 
      type: 'positive', 
      frequencyType: 'daily',
      history: { '2026-11-04': true, '2026-11-03': true, '2026-11-02': true, '2026-11-01': true, '2026-10-31': true, '2026-10-30': true, '2026-10-29': true } 
    },
    { 
      id: 'h2', 
      name: 'Physical Training & Movement', 
      completed: true, 
      streak: 5, 
      bestStreak: 12, 
      category: 'wellness', 
      type: 'positive', 
      frequencyType: 'daily',
      history: { '2026-11-04': true, '2026-11-03': true, '2026-11-02': true, '2026-11-01': true, '2026-10-31': true } 
    },
    { 
      id: 'h3', 
      name: 'Read 20+ Pages of Insight', 
      completed: false, 
      streak: 4, 
      bestStreak: 9, 
      category: 'mind', 
      type: 'positive', 
      frequencyType: 'daily',
      history: { '2026-11-03': true, '2026-11-02': true, '2026-11-01': true, '2026-10-31': true } 
    },
    { 
      id: 'h4', 
      name: 'Hydration Target (2.5L)', 
      completed: true, 
      streak: 12, 
      bestStreak: 21, 
      category: 'wellness', 
      type: 'positive', 
      frequencyType: 'daily',
      history: { '2026-11-04': true, '2026-11-03': true, '2026-11-02': true, '2026-11-01': true } 
    },
    { 
      id: 'h5', 
      name: 'Avoid Mindless Social Feeds', 
      completed: true, 
      streak: 8, 
      bestStreak: 15, 
      category: 'discipline', 
      type: 'reduction', 
      frequencyType: 'daily',
      history: { '2026-11-04': true, '2026-11-03': true, '2026-11-02': true, '2026-11-01': true } 
    },
    { 
      id: 'h6', 
      name: 'Sleep 7.5h & Digital Sunset', 
      completed: true, 
      streak: 9, 
      bestStreak: 11, 
      category: 'wellness', 
      type: 'positive', 
      frequencyType: 'daily',
      history: { '2026-11-04': true, '2026-11-03': true, '2026-11-02': true, '2026-11-01': true } 
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
  const [customTrackers, setCustomTrackers] = useState<CustomTracker[]>([
    { id: 'ct1', name: 'Pull-ups', category: 'health', inputType: 'number', unit: 'reps', target: 50, frequency: 'daily', enabled: true, currentValue: 35, description: 'Strict dead-hang pull-ups throughout day' },
    { id: 'ct2', name: 'Pages Read', category: 'growth', inputType: 'stepper', unit: 'pages', target: 20, frequency: 'daily', enabled: true, currentValue: 22, description: 'Philosophy, architecture or non-fiction' },
    { id: 'ct3', name: 'Deep Work Hours', category: 'academics', inputType: 'slider', unit: 'hrs', target: 4, frequency: 'daily', enabled: true, currentValue: 3.5, description: 'Single-task uninterrupted focus' },
    { id: 'ct4', name: 'Cold Shower', category: 'habits', inputType: 'boolean', unit: 'done', target: 1, frequency: 'daily', enabled: true, currentValue: 1, description: 'Morning cold immersion for nervous system reset' },
  ]);

  const [customTrackerRecords, setCustomTrackerRecords] = useState<CustomTrackerRecord[]>([
    { id: 'ctr_1', trackerId: 'ct1', date: '2026-11-04', timestamp: '2026-11-04T17:00:00Z', value: 35, notes: '3 sets of 12 reps' },
    { id: 'ctr_2', trackerId: 'ct2', date: '2026-11-04', timestamp: '2026-11-04T14:00:00Z', value: 22, notes: 'Finished chapter on systems thinking' },
    { id: 'ctr_3', trackerId: 'ct3', date: '2026-11-04', timestamp: '2026-11-04T18:00:00Z', value: 3.5, notes: 'Algorithm graph traversal coding' },
    { id: 'ctr_4', trackerId: 'ct1', date: '2026-11-03', timestamp: '2026-11-03T18:00:00Z', value: 40 },
    { id: 'ctr_5', trackerId: 'ct2', date: '2026-11-03', timestamp: '2026-11-03T20:00:00Z', value: 25 },
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
  const [goals, setGoals] = useState<GoalItem[]>([
    {
      id: 'g1',
      title: 'Master Advanced Algorithms & Architecture',
      category: 'academics',
      type: 'long_term',
      startDate: '2026-10-01',
      targetDate: '2026-12-15',
      progressPercent: 75,
      status: 'active',
      description: 'Solidify foundational understanding of dynamic programming, graph algorithms, and clean system architecture.',
      milestones: [
        { id: 'm1', text: 'Complete Graph & Dynamic Programming modules', completed: true },
        { id: 'm2', text: 'Build real-time distributed ledger benchmark', completed: true },
        { id: 'm3', text: 'Submit final architecture defense portfolio', completed: false, targetDate: '2026-12-15' },
      ]
    },
    {
      id: 'g2',
      title: 'Achieve 20 Strict Bodyweight Pull-ups',
      category: 'health',
      type: 'short_term',
      startDate: '2026-10-15',
      targetDate: '2026-11-30',
      progressPercent: 70,
      status: 'active',
      description: 'Build tendon resilience and clean pull strength through progressive weighted holds and volume ladders.',
      milestones: [
        { id: 'm4', text: 'Reach 12 consecutive dead-hang reps', completed: true },
        { id: 'm5', text: 'Implement 5x10 weighted pull-up protocol', completed: true },
        { id: 'm6', text: 'Perform clean 20-rep unbroken assessment', completed: false, targetDate: '2026-11-30' },
      ]
    },
    {
      id: 'g3',
      title: 'Private Life Ledger Deployment & Refinement',
      category: 'discipline',
      type: 'short_term',
      startDate: '2026-10-25',
      targetDate: '2026-11-20',
      progressPercent: 90,
      status: 'active',
      description: 'Create an unassailable personal life-tracking software suite with real persistence and zero superficial fluff.',
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
  const [timeRecords, setTimeRecords] = useState<TimeRecord[]>([
    { date: '2026-11-04', productiveMinutes: 320, neutralMinutes: 90, wastedMinutes: 40, screenTimeHours: 6.5, distractionNotes: 'Checked news feed briefly during break' },
    { date: '2026-11-03', productiveMinutes: 360, neutralMinutes: 60, wastedMinutes: 30, screenTimeHours: 6.8 },
    { date: '2026-11-02', productiveMinutes: 300, neutralMinutes: 110, wastedMinutes: 50, screenTimeHours: 7.2 },
    { date: '2026-11-01', productiveMinutes: 400, neutralMinutes: 50, wastedMinutes: 20, screenTimeHours: 6.2 },
  ]);

  const [timeLogs, setTimeLogs] = useState<TimeLogEntry[]>([
    { id: 'tl_1', date: '2026-11-04', timestamp: '2026-11-04T09:30:00Z', activityName: 'Algorithm & Data Structure Coding', category: 'productive', durationMinutes: 120, notes: 'Graph BFS implementation' },
    { id: 'tl_2', date: '2026-11-04', timestamp: '2026-11-04T12:00:00Z', activityName: 'Lunch & Conversation', category: 'neutral', durationMinutes: 50 },
    { id: 'tl_3', date: '2026-11-04', timestamp: '2026-11-04T13:30:00Z', activityName: 'Calculus Problem Set', category: 'productive', durationMinutes: 90 },
    { id: 'tl_4', date: '2026-11-04', timestamp: '2026-11-04T15:30:00Z', activityName: 'Unplanned Phone Browsing', category: 'unproductive', durationMinutes: 35, notes: 'Fatigue slump in mid afternoon' },
    { id: 'tl_5', date: '2026-11-04', timestamp: '2026-11-04T16:30:00Z', activityName: 'Pull-up & Calisthenics Training', category: 'productive', durationMinutes: 45 },
  ]);

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
  const [accountabilityIncidents, setAccountabilityIncidents] = useState<AccountabilityIncident[]>([
    {
      id: 'acc1',
      date: '2026-11-03',
      targetName: 'Daily Reading Target',
      targetExpected: '20 pages',
      actualAchieved: '8 pages',
      cause: 'Lost track of time during late project debugging',
      prescribedConsequence: {
        type: 'stretch',
        description: 'Optional 15-minute spine & mobility reset + 10 pages before sleep',
        quantity: 15,
        unit: 'minutes'
      },
      status: 'completed',
      completedAt: '2026-11-03T22:45:00Z',
      notes: 'Completed mobility flow and felt much clearer.'
    },
    {
      id: 'acc2',
      date: '2026-11-04',
      targetName: 'Late Screen Sunset',
      targetExpected: 'Digital sunset by 10:30 PM',
      actualAchieved: 'Screens active till 11:15 PM',
      cause: 'Intense creative momentum',
      prescribedConsequence: {
        type: 'walk',
        description: 'Optional 20-minute morning outdoor walk in natural sunlight without phone',
        quantity: 20,
        unit: 'minutes'
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

  // ── PERSONAL GROWTH, SKILLS, PROJECTS & LEARNING ENGINE (PHASE 2) ──
  const [skills, setSkills] = useState<SkillItem[]>([
    {
      id: 'skill_ts',
      name: 'TypeScript & Systems Architecture',
      category: 'technical',
      currentLevel: 'advanced',
      targetLevel: 'mastery',
      progressPercent: 85,
      targetPracticeHours: 150,
      totalPracticeMinutes: 5400, // 90 hours
      color: '#8b5cf6',
      notes: 'Type-level programming, compiler ASTs, robust invariant schemas',
      createdAt: '2026-09-01',
      practiceLogs: [
        { id: 'log_ts_1', skillId: 'skill_ts', date: '2026-11-04', durationMinutes: 90, milestoneReached: 'Designed conflict-safe migration schemas', notes: 'Zero runtime type-coercion leaks.' },
        { id: 'log_ts_2', skillId: 'skill_ts', date: '2026-11-02', durationMinutes: 60, milestoneReached: 'Implemented discriminated unions for markbook types' },
      ]
    },
    {
      id: 'skill_algo',
      name: 'Algorithm Optimization & Proofs',
      category: 'cognitive',
      currentLevel: 'intermediate',
      targetLevel: 'advanced',
      progressPercent: 72,
      targetPracticeHours: 100,
      totalPracticeMinutes: 3720, // 62 hours
      color: '#3b82f6',
      notes: 'Dynamic programming state formulations, recurrence trees, graph theory',
      createdAt: '2026-09-10',
      practiceLogs: [
        { id: 'log_algo_1', skillId: 'skill_algo', date: '2026-11-03', durationMinutes: 75, milestoneReached: 'Bitmask DP recurrence verified', notes: 'Achieved O(N * 2^N) optimal time complexity.' }
      ]
    },
    {
      id: 'skill_endurance',
      name: 'Zone 2 Aerobic Base & Recovery',
      category: 'physical',
      currentLevel: 'intermediate',
      targetLevel: 'advanced',
      progressPercent: 68,
      targetPracticeHours: 80,
      totalPracticeMinutes: 2880, // 48 hours
      color: '#10b981',
      notes: 'Low heart-rate aerobic running, nasal breathing, lactate clearance',
      createdAt: '2026-09-15',
      practiceLogs: [
        { id: 'log_run_1', skillId: 'skill_endurance', date: '2026-11-04', durationMinutes: 45, milestoneReached: 'Maintained 138bpm ceiling throughout 7km' }
      ]
    },
    {
      id: 'skill_design',
      name: 'Interface Design & Typography Craft',
      category: 'creative',
      currentLevel: 'advanced',
      targetLevel: 'mastery',
      progressPercent: 88,
      targetPracticeHours: 120,
      totalPracticeMinutes: 5280, // 88 hours
      color: '#ec4899',
      notes: 'Mathematical baselines, 60-30-10 color discipline, directional light, zero slop',
      createdAt: '2026-09-05',
      practiceLogs: [
        { id: 'log_dsgn_1', skillId: 'skill_design', date: '2026-11-04', durationMinutes: 90, milestoneReached: 'Constructed asymmetric academic markbook layout' }
      ]
    },
    {
      id: 'skill_comm',
      name: 'Concise Technical Synthesis',
      category: 'interpersonal',
      currentLevel: 'intermediate',
      targetLevel: 'advanced',
      progressPercent: 62,
      targetPracticeHours: 50,
      totalPracticeMinutes: 1800, // 30 hours
      color: '#06b6d4',
      notes: 'High-density architectural documentation, structured engineering proposals',
      createdAt: '2026-10-01',
      practiceLogs: []
    }
  ]);

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

  const [personalProjects, setPersonalProjects] = useState<PersonalProject[]>([
    {
      id: 'proj_for_me',
      title: 'FOR ME Life Ledger & Analytics Studio',
      description: 'A private, uncompromising personal system uniting academic markbooks, physical health, habit consistency, and evidence-grounded self-mastery.',
      category: 'Software Engineering',
      status: 'in_progress',
      startDate: '2026-10-15',
      targetCompletionDate: '2026-12-15',
      linkedSkillIds: ['skill_ts', 'skill_design'],
      outcomeUrl: 'https://github.com/azanabdullah2752012-ui/for-me',
      keyLearnings: [
        'Decoupling state management from rendering layers prevents regression cascades.',
        'Real evidence-based tracking produces sustainable momentum over aesthetic vanity metrics.'
      ],
      milestones: [
        { id: 'm_1', title: 'Living Stardust Canvas & HUD Navigation Engine', completed: true, completedAt: '2026-10-25' },
        { id: 'm_2', title: 'Mathematical Academic Markbook Engine (Phase 1)', completed: true, completedAt: '2026-11-04' },
        { id: 'm_3', title: 'Personal Growth Mastery & Evidence Matrix (Phase 2)', completed: true, completedAt: '2026-11-04' },
        { id: 'm_4', title: 'Local Sync & System Automation Companion (Phase 3 & 4)', completed: false }
      ]
    },
    {
      id: 'proj_algo',
      title: 'Algorithmic Optimization & Proofs Portfolio',
      description: 'Rigorous implementation and formal proofs of dynamic programming, graph invariants, and distributed consensus mechanisms.',
      category: 'Computer Science Theory',
      status: 'in_progress',
      startDate: '2026-09-01',
      targetCompletionDate: '2026-11-30',
      linkedSkillIds: ['skill_algo', 'skill_ts'],
      keyLearnings: [
        'Drawing memory access patterns reveals cache locality bottlenecks before benchmarking.',
        'Invariant formulations simplify inductive proofs across recursive step boundaries.'
      ],
      milestones: [
        { id: 'ma_1', title: 'Graph Traversal & Shortest Path proofs', completed: true, completedAt: '2026-10-10' },
        { id: 'ma_2', title: 'Dynamic Programming Recurrence benchmarks', completed: true, completedAt: '2026-10-28' },
        { id: 'ma_3', title: 'Distributed Consensus (Paxos & Raft) model verification', completed: false }
      ]
    },
    {
      id: 'proj_run',
      title: 'Aerobic Base Building & Sub-22 5K Benchmark',
      description: 'Systematic cardiovascular conditioning targeting mitochondrial density through low-intensity volume and controlled threshold intervals.',
      category: 'Athletic Conditioning',
      status: 'in_progress',
      startDate: '2026-08-01',
      targetCompletionDate: '2026-12-31',
      linkedSkillIds: ['skill_endurance'],
      keyLearnings: [
        'Consistency at low intensity builds capillary density without systemic central nervous system fatigue.'
      ],
      milestones: [
        { id: 'mr_1', title: 'Base 5km in conversational aerobic zone (<140bpm)', completed: true, completedAt: '2026-09-12' },
        { id: 'mr_2', title: 'Weekly 90-minute sustained low-heart-rate run', completed: true, completedAt: '2026-10-20' },
        { id: 'mr_3', title: 'Sub-22 minute 5k time trial completion', completed: false }
      ]
    }
  ]);

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

  const [learningItems, setLearningItems] = useState<CuratedLearningItem[]>([
    {
      id: 'learn_ddia',
      title: 'Designing Data-Intensive Applications',
      creator: 'Martin Kleppmann',
      type: 'book',
      status: 'completed',
      progressPercent: 100,
      linkedSkillIds: ['skill_ts', 'skill_algo'],
      linkedProjectIds: ['proj_for_me'],
      keyTakeaways: [
        'Reliability, scalability, and maintainability are engineering tradeoffs requiring explicit constraints.',
        'Log-structured merge trees and SSTables optimize high-throughput write workloads.'
      ],
      actionableInsights: [
        'Keep data exchange formats decoupled from database schema representations.'
      ],
      dateAdded: '2026-08-15',
      dateCompleted: '2026-10-12',
      rating: 5
    },
    {
      id: 'learn_interpreters',
      title: 'Crafting Interpreters',
      creator: 'Robert Nystrom',
      type: 'book',
      status: 'in_progress',
      progressPercent: 70,
      linkedSkillIds: ['skill_ts', 'skill_algo'],
      linkedProjectIds: ['proj_algo'],
      keyTakeaways: [
        'Scanning and parsing into an AST cleanly separates lexical tokens from evaluation semantics.',
        'Bytecode virtual machines offer substantial cache locality benefits over tree-walk interpreters.'
      ],
      actionableInsights: [
        'Write regression tests for grammar parsing ambiguities prior to implementing AST evaluators.'
      ],
      dateAdded: '2026-09-20',
      rating: 5
    },
    {
      id: 'learn_sicp',
      title: 'Structure and Interpretation of Computer Programs',
      creator: 'Harold Abelson & Gerald Jay Sussman',
      type: 'course',
      status: 'completed',
      progressPercent: 100,
      linkedSkillIds: ['skill_algo'],
      linkedProjectIds: ['proj_algo'],
      keyTakeaways: [
        'Computational processes are abstract beings that inhabit computers and manipulate other abstract beings.',
        'Metalinguistic abstraction enables problem domain modeling without ad-hoc glue code.'
      ],
      actionableInsights: [
        'Favor explicit function compositions and higher-order operators over imperative state mutations.'
      ],
      dateAdded: '2026-08-01',
      dateCompleted: '2026-10-05',
      rating: 5
    },
    {
      id: 'learn_vo2',
      title: 'The Science of VO2 Max & Mitochondrial Health',
      creator: 'Dr. Peter Attia & Dr. Inigo San Millan',
      type: 'video',
      status: 'applied',
      progressPercent: 100,
      linkedSkillIds: ['skill_endurance'],
      linkedProjectIds: ['proj_run'],
      keyTakeaways: [
        'Zone 2 exercise stimulates mitochondrial biogenesis and enhances fat oxidation capacity.',
        'Lactate is an energy substrate, not merely a metabolic waste product.'
      ],
      actionableInsights: [
        'Limit heart rate during Zone 2 sessions to avoid switching into glycolytic lactate-producing pathways.'
      ],
      dateAdded: '2026-09-10',
      dateCompleted: '2026-09-15',
      rating: 5
    }
  ]);

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
  const [growthRatings, setGrowthRatings] = useState<PersonalGrowthRating[]>([
    { date: '2026-11-04', happinessRating: 8, confidenceRating: 9, developmentRating: 8, note: 'Clear priorities and uninterrupted flow brought immense calm.' },
    { date: '2026-11-03', happinessRating: 8, confidenceRating: 8, developmentRating: 7 },
    { date: '2026-11-02', happinessRating: 7, confidenceRating: 8, developmentRating: 7 },
    { date: '2026-11-01', happinessRating: 9, confidenceRating: 9, developmentRating: 9 },
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

  const [objectives, setObjectives] = useState<PersonalObjective[]>([
    { id: 'obj_1', title: 'Achieve emotional composure during tight deadlines', category: 'Mindset', targetDate: '2026-11-30', progressPercent: 80, notes: 'Practicing pausing before reactive responses' },
    { id: 'obj_2', title: 'Daily evening digital sunset by 10:30 PM', category: 'Health', targetDate: '2026-11-20', progressPercent: 70, notes: 'Reading physical paper books instead of screens' },
  ]);

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
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([
    {
      id: '1',
      text: 'Built the Next-Gen dual-background system and verified non-destructive persistence. Focus was absolute today.',
      timestamp: '2026-11-04T12:00:00Z',
      mood: 'deep_focus',
      tags: ['Building', 'Discipline']
    }
  ]);

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
  const [upcomingEvents, setUpcomingEvents] = useState<UpcomingEvent[]>([
    { id: '1', title: 'Calculus Examination II', date: 'Fri, Nov 6', color: 'from-violet-500 to-indigo-500' },
    { id: '2', title: 'System Architecture Review', date: 'Mon, Nov 9', color: 'from-sky-500 to-cyan-500' },
  ]);

  // ── LIFE DIMENSIONS ──
  const [lifeDimensions, setLifeDimensions] = useState<LifeDimensions>({
    career: 88,
    health: 92,
    relationships: 78,
    finance: 80,
    mind: 86,
    environment: 84,
  });

  const updateLifeDimension = (dim: keyof LifeDimensions, val: number) => {
    setLifeDimensions((prev) => ({ ...prev, [dim]: val }));
  };
  const updateDimension = updateLifeDimension;

  const alignmentPercent = Math.round(
    Object.values(lifeDimensions).reduce((a, b) => a + b, 0) / Object.values(lifeDimensions).length
  );

  // ── FOCUS AUDIO ──
  const [audioStations] = useState<AudioStation[]>([
    { id: 'lofi-space', name: 'Celestial Lofi & Space Waves', genre: 'Ambient Lofi', duration: '24/7 Live', type: 'youtube', embedSrc: 'https://www.youtube-nocookie.com/embed/jfKfPfyJRdk?autoplay=1&enablejsapi=1' },
    { id: 'deep-synth', name: 'Obsidian Deep Synthwave', genre: 'Synth / Focus', duration: '24/7 Live', type: 'youtube', embedSrc: 'https://www.youtube-nocookie.com/embed/4xDzrJKXOOY?autoplay=1&enablejsapi=1' },
    { id: 'binaural-flow', name: 'Binaural Stardust Drift', genre: 'Gamma 40Hz', duration: 'Continuous', type: 'youtube', embedSrc: 'https://www.youtube-nocookie.com/embed/WPni755-Krg?autoplay=1&enablejsapi=1' },
  ]);
  const [activeStationId, setActiveStationId] = useState('lofi-space');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const loadCustomAudioUrl = (url: string) => {
    console.log('Loading custom audio', url);
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
        if (Array.isArray(parsed.subjects)) setSubjects(parsed.subjects);
        if (Array.isArray(parsed.academicYears)) setAcademicYears(parsed.academicYears);
        if (parsed.activeAcademicYearId) setActiveAcademicYearId(parsed.activeAcademicYearId);
        if (parsed.activeTermId) setActiveTermId(parsed.activeTermId);
        if (Array.isArray(parsed.assessmentRecords)) {
          setAssessmentRecords(parsed.assessmentRecords);
        } else if (Array.isArray(parsed.grades) && parsed.grades.length > 0) {
          // Safe migration from legacy grades
          const migrated: AssessmentRecord[] = parsed.grades.map((g: any, idx: number) => ({
            id: `asm_migrated_${idx}_${Date.now()}`,
            subjectId: 'sub_1',
            academicYearId: 'ay_2026_2027',
            termId: 'term_1',
            name: g.title || 'Assessment',
            type: 'quiz' as AssessmentType,
            marksObtained: typeof g.score === 'number' ? g.score : 0,
            maximumMarks: typeof g.total === 'number' ? g.total : 100,
            date: g.date || '2026-10-01',
            notes: g.notes || '',
            isIncludedInFinal: true,
          }));
          setAssessmentRecords(migrated);
        }
        if (Array.isArray(parsed.goals)) setGoals(parsed.goals);
        if (Array.isArray(parsed.customTrackers)) setCustomTrackers(parsed.customTrackers);
        if (Array.isArray(parsed.customTrackerRecords)) setCustomTrackerRecords(parsed.customTrackerRecords);
        if (Array.isArray(parsed.timeRecords)) setTimeRecords(parsed.timeRecords);
        if (Array.isArray(parsed.timeLogs)) setTimeLogs(parsed.timeLogs);
        if (Array.isArray(parsed.accountabilityIncidents)) setAccountabilityIncidents(parsed.accountabilityIncidents);
        if (Array.isArray(parsed.growthRatings)) setGrowthRatings(parsed.growthRatings);
        if (Array.isArray(parsed.lessonsLearned)) setLessonsLearned(parsed.lessonsLearned);
        if (Array.isArray(parsed.objectives)) setObjectives(parsed.objectives);
        if (Array.isArray(parsed.skills)) setSkills(parsed.skills);
        if (Array.isArray(parsed.personalProjects)) setPersonalProjects(parsed.personalProjects);
        if (Array.isArray(parsed.learningItems)) setLearningItems(parsed.learningItems);
        if (parsed.healthRecord) setHealthRecord(parsed.healthRecord);
        if (Array.isArray(parsed.hydrationLogs)) setHydrationLogs(parsed.hydrationLogs);
        if (parsed.hydrationTargetMl) setHydrationTargetMl(parsed.hydrationTargetMl);
        if (Array.isArray(parsed.sleepRecords)) setSleepRecords(parsed.sleepRecords);
        if (parsed.sleepTargetHours) setSleepTargetHours(parsed.sleepTargetHours);
        if (Array.isArray(parsed.mealRecords)) setMealRecords(parsed.mealRecords);
        if (Array.isArray(parsed.movementActivities)) setMovementActivities(parsed.movementActivities);
        if (parsed.movementWeeklyTargetMinutes) setMovementWeeklyTargetMinutes(parsed.movementWeeklyTargetMinutes);
        if (Array.isArray(parsed.vitalityObservations)) setVitalityObservations(parsed.vitalityObservations);
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
