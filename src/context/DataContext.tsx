import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import {
  Habit,
  PromiseItem,
  DailyLog,
  StudySession,
  Goal,
  WeeklyAudit,
  MonthlyReview,
  LifeDimension,
  PersonalManifesto,
  AppSettings,
  AccentColor,
  PromiseDayStatus,
  SingleDailyPromise,
  DailyPromiseStatus,
  FiveMinuteNightlyReview,
  DetailedTrackers,
  HabitFrequency,
  HabitDayStatus,
  GoalMistakeLesson,
  PracticalSkill,
  PersonalPriority,
  RealityCheckConfrontation,
  FutureVision,
  LifeAuditAssessmentArea,
  MonthlyLifeAudit,
  ExtendedReflectionPrompts,
  ActiveStudyTimerState,
} from '../types';
import { sound } from '../audio/sound';

const STORAGE_KEY = 'forme_lifetrack_v2';

// Purge legacy storage holding mock/fake demonstration data
try {
  if (typeof window !== 'undefined' && window.localStorage) {
    if (localStorage.getItem('forme_lifetrack_v1')) {
      localStorage.removeItem('forme_lifetrack_v1');
    }
  }
} catch {
  // Ignore in SSR / private browsing
}

// Helper to format date
export const formatDateKey = (date: Date = new Date()): string => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};

export const getDisplayDate = (dateKey: string): string => {
  const [y, m, d] = dateKey.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

export const isHabitScheduledOnDate = (habit: Habit, dateKey: string): boolean => {
  const [y, m, d] = dateKey.split('-').map(Number);
  const dayOfWeek = new Date(y, m - 1, d).getDay(); // 0 is Sun, 1 is Mon...
  if (habit.frequency === 'daily') return true;
  if (habit.frequency === 'weekdays') return dayOfWeek >= 1 && dayOfWeek <= 5;
  if (habit.frequency === 'custom' && habit.customDays && habit.customDays.length > 0) {
    return habit.customDays.includes(dayOfWeek);
  }
  return true;
};

export const getHabitDayStatus = (habit: Habit, dateKey: string): HabitDayStatus => {
  if (habit.dayStatus && habit.dayStatus[dateKey]) {
    return habit.dayStatus[dateKey];
  }
  if (habit.completions && habit.completions[dateKey]) {
    return 'completed';
  }
  if (!isHabitScheduledOnDate(habit, dateKey)) {
    return 'not-scheduled';
  }
  return 'incomplete';
};

export const calculateHabitStreaks = (habit: Habit, refDate: Date = new Date()): { currentStreak: number; bestStreak: number } => {
  let currentStreak = 0;
  let bestStreak = habit.bestStreak || 0;

  const checkDate = new Date(refDate);
  const todayKey = formatDateKey(checkDate);
  const todayStatus = getHabitDayStatus(habit, todayKey);
  
  // If today is incomplete or not scheduled, start looking from yesterday
  if (todayStatus !== 'completed') {
    checkDate.setDate(checkDate.getDate() - 1);
  }

  for (let i = 0; i < 365; i++) {
    const key = formatDateKey(checkDate);
    const status = getHabitDayStatus(habit, key);

    if (status === 'completed') {
      currentStreak++;
    } else if (status === 'skipped' || status === 'not-scheduled') {
      // Skipped or not-scheduled days do not break the streak (excused)
      checkDate.setDate(checkDate.getDate() - 1);
      continue;
    } else {
      // Scheduled day missed breaks current streak
      break;
    }
    checkDate.setDate(checkDate.getDate() - 1);
  }

  bestStreak = Math.max(bestStreak, currentStreak);
  return { currentStreak, bestStreak };
};

export const getDefaultDailyPromise = (): SingleDailyPromise => ({
  text: '',
  measurableFinishLine: '',
  deadline: '23:59',
  chosenWhen: 'previous-evening',
  status: 'pending',
  statusRecordedAt: undefined,
  historyLog: []
});

export const getDefaultNightlyReview = (): FiveMinuteNightlyReview => ({
  completed: false,
  completedAt: undefined,
  highlights: '',
  difficulties: '',
  dailyPromiseReview: '',
  lessonLearned: '',
  nextAction: '',
  extraPrompts: {
    whatGaveEnergy: '',
    whatDrainedEnergy: '',
    unspokenThought: ''
  }
});

export const getDefaultTrackers = (): DetailedTrackers => ({
  study: {
    skipped: false,
    hoursStudied: 0,
    focusRating: 3,
    completedPlanned: false,
    notes: '',
  },
  sleep: {
    skipped: false,
    bedtime: '',
    waketime: '',
    hours: 0,
    qualityRating: 3,
    restedFeeling: false,
  },
  screenTime: {
    skipped: false,
    productiveHours: 0,
    recreationalHours: 0,
    cutoffHonored: false,
  },
  routine: {
    skipped: false,
    morningRoutineDone: false,
    eveningRoutineDone: false,
    punctualityScore: 3,
  },
  cleanliness: {
    skipped: false,
    groomingDone: false,
    teethTwice: false,
    roomDeskClear: false,
    bedMade: false,
  },
  meals: {
    skipped: false,
    breakfast: { eaten: false, clean: false, notes: '' },
    lunch: { eaten: false, clean: false, notes: '' },
    dinner: { eaten: false, clean: false, notes: '' },
    snacks: { eaten: false, clean: false, notes: '' },
  },
  waterAndMovement: {
    skipped: false,
    waterGlasses: 0,
    workoutDone: false,
    workoutType: '',
    durationMins: 0,
    walkStepsDone: false,
  },
  emotionalTriggers: {
    skipped: false,
    experiencedTrigger: false,
    triggerDescription: '',
    managedWell: false,
    copingNote: '',
  },
  gratitude: {
    skipped: false,
    item1: '',
    item2: '',
    item3: '',
    highlightMoment: '',
  },
  confidence: {
    skipped: false,
    confidenceRating: 3,
    keptWordToSelf: false,
    positiveSelfTalk: '',
  },
  timeUse: {
    skipped: false,
    hoursUsedWell: 0,
    hoursWasted: 0,
    distractionSource: '',
    redirectedWell: false,
  },
});

export interface TrackerMetricDetail {
  id: string;
  name: string;
  status: 'completed' | 'partial' | 'incomplete' | 'skipped';
  points: number;
  maxPoints: number;
  summary: string;
}

export interface DailyTrackerMetrics {
  percentage: number;
  earned: number;
  totalApplicable: number;
  skippedCount: number;
  details: TrackerMetricDetail[];
}

export const calculateTrackerMetrics = (log: DailyLog): DailyTrackerMetrics => {
  const details: TrackerMetricDetail[] = [];
  const t = log.trackers || getDefaultTrackers();

  // 1. Daily Promise
  if (log.dailyPromise && log.dailyPromise.text) {
    const p = log.dailyPromise;
    let points = 0;
    let status: 'completed' | 'partial' | 'incomplete' | 'skipped' = 'incomplete';
    let summary = 'Pending nightly audit';

    if (p.status === 'kept') {
      points = 1;
      status = 'completed';
      summary = 'Kept with measurable finish line';
    } else if (p.status === 'prevented') {
      points = p.replacementPlan ? 1 : 0.5;
      status = p.replacementPlan ? 'completed' : 'partial';
      summary = p.replacementPlan ? 'Prevented: replacement plan ratified' : 'Prevented by circumstances';
    } else if (p.status === 'missed') {
      points = 0;
      status = 'incomplete';
      summary = 'Missed';
    }

    details.push({
      id: 'promise',
      name: 'Daily Single Promise',
      status,
      points,
      maxPoints: 1,
      summary
    });
  }

  // 2. Nightly Review
  if (log.nightlyReview) {
    const nr = log.nightlyReview;
    const isDone = nr.completed && !!(nr.highlights || nr.difficulties || nr.lessonLearned);
    details.push({
      id: 'nightly-review',
      name: 'Nightly 5-Min Review',
      status: isDone ? 'completed' : 'incomplete',
      points: isDone ? 1 : 0,
      maxPoints: 1,
      summary: isDone ? 'Reflections & next action recorded' : 'Pending 5-min review'
    });
  }

  // 3. Study and Academic Discipline
  if (t.study.skipped) {
    details.push({
      id: 'study',
      name: 'Study & Academic Discipline',
      status: 'skipped',
      points: 0,
      maxPoints: 0,
      summary: 'Optional / Skipped for today'
    });
  } else {
    const done = t.study.completedPlanned || t.study.hoursStudied >= 1.5;
    details.push({
      id: 'study',
      name: 'Study & Academic Discipline',
      status: done ? 'completed' : (t.study.hoursStudied > 0 ? 'partial' : 'incomplete'),
      points: done ? 1 : (t.study.hoursStudied > 0 ? 0.5 : 0),
      maxPoints: 1,
      summary: `${t.study.hoursStudied}h logged (${t.study.focusRating}/5 focus)`
    });
  }

  // 4. Sleep Schedule & Quality
  if (t.sleep.skipped) {
    details.push({ id: 'sleep', name: 'Sleep Schedule & Quality', status: 'skipped', points: 0, maxPoints: 0, summary: 'Skipped' });
  } else {
    const sleepGood = t.sleep.hours >= 7 || t.sleep.restedFeeling;
    details.push({
      id: 'sleep',
      name: 'Sleep Schedule & Quality',
      status: sleepGood ? 'completed' : 'incomplete',
      points: sleepGood ? 1 : 0,
      maxPoints: 1,
      summary: `${t.sleep.hours}h sleep (${t.sleep.bedtime} - ${t.sleep.waketime})`
    });
  }

  // 5. Screen Time
  if (t.screenTime.skipped) {
    details.push({ id: 'screenTime', name: 'Screen Time & Cutoff', status: 'skipped', points: 0, maxPoints: 0, summary: 'Skipped' });
  } else {
    const screenGood = t.screenTime.cutoffHonored && t.screenTime.recreationalHours <= 2.5;
    details.push({
      id: 'screenTime',
      name: 'Screen Time & Cutoff',
      status: screenGood ? 'completed' : (t.screenTime.cutoffHonored ? 'partial' : 'incomplete'),
      points: screenGood ? 1 : (t.screenTime.cutoffHonored ? 0.5 : 0),
      maxPoints: 1,
      summary: `${t.screenTime.productiveHours}h productive vs ${t.screenTime.recreationalHours}h rec`
    });
  }

  // 6. Routine & Time Management
  if (t.routine.skipped) {
    details.push({ id: 'routine', name: 'Routine & Time Management', status: 'skipped', points: 0, maxPoints: 0, summary: 'Skipped' });
  } else {
    const count = (t.routine.morningRoutineDone ? 1 : 0) + (t.routine.eveningRoutineDone ? 1 : 0);
    details.push({
      id: 'routine',
      name: 'Routine & Time Management',
      status: count === 2 ? 'completed' : (count === 1 ? 'partial' : 'incomplete'),
      points: count * 0.5,
      maxPoints: 1,
      summary: `${count}/2 routines executed (Punctuality ${t.routine.punctualityScore}/5)`
    });
  }

  // 7. Hygiene & Room Cleanliness
  if (t.cleanliness.skipped) {
    details.push({ id: 'cleanliness', name: 'Hygiene & Room Cleanliness', status: 'skipped', points: 0, maxPoints: 0, summary: 'Skipped' });
  } else {
    const cleanCount = (t.cleanliness.groomingDone ? 1 : 0) + (t.cleanliness.teethTwice ? 1 : 0) + (t.cleanliness.roomDeskClear ? 1 : 0) + (t.cleanliness.bedMade ? 1 : 0);
    details.push({
      id: 'cleanliness',
      name: 'Hygiene & Room Cleanliness',
      status: cleanCount >= 3 ? 'completed' : (cleanCount >= 2 ? 'partial' : 'incomplete'),
      points: cleanCount / 4,
      maxPoints: 1,
      summary: `${cleanCount}/4 standards met`
    });
  }

  // 8. Meals: Breakfast, Lunch, Dinner, Snacks
  if (t.meals.skipped) {
    details.push({ id: 'meals', name: 'Meals & Clean Nutrition', status: 'skipped', points: 0, maxPoints: 0, summary: 'Skipped' });
  } else {
    const cleanMeals = [t.meals.breakfast, t.meals.lunch, t.meals.dinner].filter(m => m.eaten && m.clean).length;
    details.push({
      id: 'meals',
      name: 'Meals & Clean Nutrition',
      status: cleanMeals >= 2 ? 'completed' : (cleanMeals === 1 ? 'partial' : 'incomplete'),
      points: Math.min(1, cleanMeals / 3),
      maxPoints: 1,
      summary: `${cleanMeals}/3 clean main meals logged`
    });
  }

  // 9. Water Intake & Exercise
  if (t.waterAndMovement.skipped) {
    details.push({ id: 'waterAndMovement', name: 'Water & Physical Movement', status: 'skipped', points: 0, maxPoints: 0, summary: 'Skipped' });
  } else {
    const waterScore = Math.min(1, t.waterAndMovement.waterGlasses / 8);
    const moveScore = (t.waterAndMovement.workoutDone ? 0.5 : 0) + (t.waterAndMovement.walkStepsDone ? 0.5 : 0);
    const combined = (waterScore * 0.5) + (moveScore * 0.5);
    details.push({
      id: 'waterAndMovement',
      name: 'Water & Physical Movement',
      status: combined >= 0.8 ? 'completed' : (combined >= 0.4 ? 'partial' : 'incomplete'),
      points: Math.round(combined * 10) / 10,
      maxPoints: 1,
      summary: `${t.waterAndMovement.waterGlasses} glasses • ${t.waterAndMovement.workoutDone ? 'Workout logged' : 'No workout'}`
    });
  }

  // 10. Emotional Triggers
  if (t.emotionalTriggers.skipped) {
    details.push({ id: 'emotionalTriggers', name: 'Emotional Trigger Management', status: 'skipped', points: 0, maxPoints: 0, summary: 'Skipped' });
  } else {
    const managed = !t.emotionalTriggers.experiencedTrigger || t.emotionalTriggers.managedWell;
    details.push({
      id: 'emotionalTriggers',
      name: 'Emotional Trigger Management',
      status: managed ? 'completed' : 'incomplete',
      points: managed ? 1 : 0,
      maxPoints: 1,
      summary: t.emotionalTriggers.experiencedTrigger ? (t.emotionalTriggers.managedWell ? 'Trigger managed with poise' : 'Reactive friction noted') : 'Calm baseline preserved'
    });
  }

  // 11. Gratitude & Joy
  if (t.gratitude.skipped) {
    details.push({ id: 'gratitude', name: 'Gratitude & Uplifting Moments', status: 'skipped', points: 0, maxPoints: 0, summary: 'Skipped' });
  } else {
    const hasGratitude = !!(t.gratitude.item1.trim() || t.gratitude.highlightMoment.trim());
    details.push({
      id: 'gratitude',
      name: 'Gratitude & Uplifting Moments',
      status: hasGratitude ? 'completed' : 'incomplete',
      points: hasGratitude ? 1 : 0,
      maxPoints: 1,
      summary: hasGratitude ? 'Gratitude reflections recorded' : 'Pending entry'
    });
  }

  // 12. Confidence & Self-Worth
  if (t.confidence.skipped) {
    details.push({ id: 'confidence', name: 'Confidence & Self-Respect', status: 'skipped', points: 0, maxPoints: 0, summary: 'Skipped' });
  } else {
    const confGood = t.confidence.keptWordToSelf || t.confidence.confidenceRating >= 3;
    details.push({
      id: 'confidence',
      name: 'Confidence & Self-Respect',
      status: confGood ? 'completed' : 'incomplete',
      points: confGood ? 1 : 0,
      maxPoints: 1,
      summary: `Score: ${t.confidence.confidenceRating}/5 • Word kept: ${t.confidence.keptWordToSelf ? 'YES' : 'NO'}`
    });
  }

  // 13. Time Wasted vs Used Well
  if (t.timeUse.skipped) {
    details.push({ id: 'timeUse', name: 'Time Discipline (Used vs Wasted)', status: 'skipped', points: 0, maxPoints: 0, summary: 'Skipped' });
  } else {
    const timeRatio = t.timeUse.hoursUsedWell / Math.max(1, (t.timeUse.hoursUsedWell + t.timeUse.hoursWasted));
    details.push({
      id: 'timeUse',
      name: 'Time Discipline (Used vs Wasted)',
      status: timeRatio >= 0.75 ? 'completed' : (timeRatio >= 0.5 ? 'partial' : 'incomplete'),
      points: Math.min(1, Math.round(timeRatio * 10) / 10),
      maxPoints: 1,
      summary: `${t.timeUse.hoursUsedWell}h used well vs ${t.timeUse.hoursWasted}h wasted`
    });
  }

  const applicable = details.filter(d => d.status !== 'skipped');
  const totalApplicable = applicable.reduce((acc, curr) => acc + curr.maxPoints, 0);
  const earned = applicable.reduce((acc, curr) => acc + curr.points, 0);
  const skippedCount = details.filter(d => d.status === 'skipped').length;

  const percentage = totalApplicable > 0 ? Math.min(100, Math.round((earned / totalApplicable) * 100)) : 100;

  return {
    percentage,
    earned: Math.round(earned * 10) / 10,
    totalApplicable,
    skippedCount,
    details
  };
};

const DEFAULT_SETTINGS: AppSettings = {
  themeMode: 'dark',
  journalOwnerName: 'Me',
  personalReminder: 'Remember, you are here for you.',
  personalQuote: 'Every act of discipline is an act of self-respect.',
  accentColor: 'violet',
  fontFamily: 'plus-jakarta',
  soundEffects: true,
  weeklyStudyTargetHours: 15,
  dailyWaterTarget: 8,
  dailySleepTarget: 7.5,
};

const DEFAULT_HABITS: Habit[] = [];

const DEFAULT_PROMISES: PromiseItem[] = [];

const DEFAULT_GOALS: Goal[] = [];

const DEFAULT_LIFE_DIMENSIONS: LifeDimension[] = [
  {
    id: 'd-1',
    name: 'Physical Vitality & Strength',
    score: 5,
    idealScore: 10,
    status: 'Not yet assessed',
    diagnosis: '',
    actionProtocol: '',
  },
  {
    id: 'd-2',
    name: 'Intellectual Rigor & Deep Work',
    score: 5,
    idealScore: 10,
    status: 'Not yet assessed',
    diagnosis: '',
    actionProtocol: '',
  },
  {
    id: 'd-3',
    name: 'Emotional Self-Governance',
    score: 5,
    idealScore: 10,
    status: 'Not yet assessed',
    diagnosis: '',
    actionProtocol: '',
  },
  {
    id: 'd-4',
    name: 'Craft & Mission Output',
    score: 5,
    idealScore: 10,
    status: 'Not yet assessed',
    diagnosis: '',
    actionProtocol: '',
  },
  {
    id: 'd-5',
    name: 'Financial Sovereignty',
    score: 5,
    idealScore: 10,
    status: 'Not yet assessed',
    diagnosis: '',
    actionProtocol: '',
  },
  {
    id: 'd-6',
    name: 'Relational Depth & Kinship',
    score: 5,
    idealScore: 10,
    status: 'Not yet assessed',
    diagnosis: '',
    actionProtocol: '',
  },
  {
    id: 'd-7',
    name: 'Environment, Order & Clarity',
    score: 5,
    idealScore: 10,
    status: 'Not yet assessed',
    diagnosis: '',
    actionProtocol: '',
  },
  {
    id: 'd-8',
    name: 'Spiritual Alignment & Purpose',
    score: 5,
    idealScore: 10,
    status: 'Not yet assessed',
    diagnosis: '',
    actionProtocol: '',
  }
];

const DEFAULT_MANIFESTO: PersonalManifesto = {
  identityStatement: 'I am a person of discipline, precision, and relentless self-command. I do not bargain with weakness.',
  coreCreed: [
    'My promises to myself are sacred contracts. To break them is to erode my own foundation.',
    'Discipline is not punishment; it is the ultimate expression of self-respect.',
    'Action precedes conviction. When motivation fails, structure and duty prevail.',
    'Complaining is an admission of helplessness. I accept reality as it is, then act.',
    'I seek genuine difficulty over comfortable stagnation.',
    'I critique behavior objectively, without calling my human worth into question.'
  ],
  operatingRules: [
    {
      rule: 'Never negotiate with weakness in the moment.',
      rationale: 'Decisions must be made before temptation arrives. The protocol is already set.'
    },
    {
      rule: 'Protect the morning at all costs.',
      rationale: 'The first three hours dictate cognitive sovereignty for the remaining fourteen.'
    },
    {
      rule: 'Judge myself strictly, judge others with patience.',
      rationale: 'My standards are for my own elevation, not for external projection or moral superiority.'
    },
    {
      rule: 'Ruthless audit over comforting delusion.',
      rationale: 'Honest data, even when unfavorable, is the only foundation for real progress.'
    }
  ],
  realityCheck: [],
  futureVision: {
    characterIdentity: '',
    craftAndMastery: '',
    physicalStandard: '',
    lifestyleEnvironment: '',
    dailyStateOfMind: ''
  },
  coreReminder: 'Remember, you are here for you. No one is coming to save you, build your discipline, or live your life. Every standard you uphold is for your own elevation.',
  updatedAt: '2026-10-28'
};

export const DEFAULT_LIFE_AUDIT_AREAS: LifeAuditAssessmentArea[] = [
  {
    id: 'la-1',
    areaKey: 'studies',
    categoryNumber: 1,
    name: 'Studies and Academic Discipline',
    score: 5,
    currentAssessment: '',
    evidence: '',
    desiredChange: '',
    nextAction: ''
  },
  {
    id: 'la-2',
    areaKey: 'sleep-routine',
    categoryNumber: 2,
    name: 'Sleep and Daily Routine',
    score: 5,
    currentAssessment: '',
    evidence: '',
    desiredChange: '',
    nextAction: ''
  },
  {
    id: 'la-3',
    areaKey: 'screen-procrastination',
    categoryNumber: 3,
    name: 'Screen Time and Procrastination',
    score: 5,
    currentAssessment: '',
    evidence: '',
    desiredChange: '',
    nextAction: ''
  },
  {
    id: 'la-4',
    areaKey: 'emotional-control',
    categoryNumber: 4,
    name: 'Emotional Control',
    score: 5,
    currentAssessment: '',
    evidence: '',
    desiredChange: '',
    nextAction: ''
  },
  {
    id: 'la-5',
    areaKey: 'confidence-self-worth',
    categoryNumber: 5,
    name: 'Confidence and Self-Worth',
    score: 5,
    currentAssessment: '',
    evidence: '',
    desiredChange: '',
    nextAction: ''
  },
  {
    id: 'la-6',
    areaKey: 'keeping-promises',
    categoryNumber: 6,
    name: 'Keeping Promises to Myself',
    score: 5,
    currentAssessment: '',
    evidence: '',
    desiredChange: '',
    nextAction: ''
  },
  {
    id: 'la-7',
    areaKey: 'time-management',
    categoryNumber: 7,
    name: 'Managing Time Effectively',
    score: 5,
    currentAssessment: '',
    evidence: '',
    desiredChange: '',
    nextAction: ''
  },
  {
    id: 'la-8',
    areaKey: 'practical-skills',
    categoryNumber: 8,
    name: 'Practical Life Skills',
    score: 5,
    currentAssessment: '',
    evidence: '',
    desiredChange: '',
    nextAction: ''
  },
  {
    id: 'la-9',
    areaKey: 'health-fitness',
    categoryNumber: 9,
    name: 'Physical Health and Fitness',
    score: 5,
    currentAssessment: '',
    evidence: '',
    desiredChange: '',
    nextAction: ''
  },
  {
    id: 'la-10',
    areaKey: 'money-management',
    categoryNumber: 10,
    name: 'Money Management',
    score: 5,
    currentAssessment: '',
    evidence: '',
    desiredChange: '',
    nextAction: ''
  },
  {
    id: 'la-11',
    areaKey: 'future-direction',
    categoryNumber: 11,
    name: 'Understanding My Future Direction',
    score: 5,
    currentAssessment: '',
    evidence: '',
    desiredChange: '',
    nextAction: ''
  }
];

export const DEFAULT_MONTHLY_LIFE_AUDITS: MonthlyLifeAudit[] = [];

export const DEFAULT_GOAL_MISTAKES: GoalMistakeLesson[] = [];

export const DEFAULT_PRACTICAL_SKILLS: PracticalSkill[] = [];

export const DEFAULT_PERSONAL_PRIORITIES: PersonalPriority[] = [];

const DEFAULT_STUDY_SESSIONS: StudySession[] = [];

// Helper returning empty baseline without fake data
const seedInitialCompletions = (habits: Habit[], promises: PromiseItem[]): { habits: Habit[]; promises: PromiseItem[]; logs: Record<string, DailyLog> } => {
  return { habits, promises, logs: {} };
};

interface DataState {
  habits: Habit[];
  promises: PromiseItem[];
  dailyLogs: Record<string, DailyLog>;
  studySessions: StudySession[];
  goals: Goal[];
  goalMistakes: GoalMistakeLesson[];
  practicalSkills: PracticalSkill[];
  personalPriorities: PersonalPriority[];
  weeklyAudits: WeeklyAudit[];
  monthlyReviews: MonthlyReview[];
  lifeDimensions: LifeDimension[];
  currentLifeAuditAreas: LifeAuditAssessmentArea[];
  monthlyLifeAudits: MonthlyLifeAudit[];
  manifesto: PersonalManifesto;
  settings: AppSettings;
}

interface DataContextType {
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  habits: Habit[];
  promises: PromiseItem[];
  dailyLogs: Record<string, DailyLog>;
  currentLog: DailyLog;
  studySessions: StudySession[];
  goals: Goal[];
  goalMistakes: GoalMistakeLesson[];
  practicalSkills: PracticalSkill[];
  personalPriorities: PersonalPriority[];
  weeklyAudits: WeeklyAudit[];
  monthlyReviews: MonthlyReview[];
  lifeDimensions: LifeDimension[];
  currentLifeAuditAreas: LifeAuditAssessmentArea[];
  monthlyLifeAudits: MonthlyLifeAudit[];
  manifesto: PersonalManifesto;
  settings: AppSettings;

  // Actions
  toggleHabit: (habitId: string, date?: string) => void;
  setHabitDayStatus: (habitId: string, date: string, status: HabitDayStatus, reason?: string) => void;
  addHabit: (habit: Omit<Habit, 'id' | 'streak' | 'bestStreak' | 'completions' | 'createdAt'>) => void;
  deleteHabit: (id: string) => void;
  updateHabit: (habit: Habit) => void;
  archiveHabit: (id: string, archived: boolean) => void;

  setPromiseStatus: (promiseId: string, status: PromiseDayStatus, reason?: string, date?: string) => void;
  addPromise: (promise: Omit<PromiseItem, 'id' | 'streak' | 'totalKept' | 'totalBroken' | 'history' | 'createdAt'>) => void;
  deletePromise: (id: string) => void;

  updateDailyLog: (updates: Partial<DailyLog>, date?: string) => void;
  addStudySession: (session: Omit<StudySession, 'id' | 'completedAt'>) => void;
  deleteStudySession: (id: string) => void;

  addGoal: (goal: Omit<Goal, 'id'>) => void;
  updateGoal: (goal: Goal) => void;
  deleteGoal: (id: string) => void;
  toggleMilestone: (goalId: string, milestoneId: string) => void;

  addGoalMistake: (mistake: Omit<GoalMistakeLesson, 'id' | 'dateLogged'>) => void;
  deleteGoalMistake: (id: string) => void;
  addPracticalSkill: (skill: Omit<PracticalSkill, 'id'>) => void;
  updatePracticalSkill: (skill: PracticalSkill) => void;
  deletePracticalSkill: (id: string) => void;
  addPersonalPriority: (priority: Omit<PersonalPriority, 'id' | 'completed'>) => void;
  togglePersonalPriority: (id: string) => void;
  deletePersonalPriority: (id: string) => void;

  saveWeeklyAudit: (audit: Omit<WeeklyAudit, 'id' | 'createdAt'>) => void;
  saveMonthlyReview: (review: Omit<MonthlyReview, 'id' | 'createdAt'>) => void;
  updateLifeDimension: (dimension: LifeDimension) => void;
  saveMonthlyLifeAudit: (audit: Omit<MonthlyLifeAudit, 'id' | 'updatedAt'>) => void;
  updateLifeAuditArea: (area: LifeAuditAssessmentArea) => void;
  saveLifeAuditAreas: (areas: LifeAuditAssessmentArea[]) => void;
  updateManifesto: (manifesto: PersonalManifesto) => void;
  updateSettings: (settings: Partial<AppSettings>) => void;

  // Extended Daily Tracker Actions
  saveDailyPromise: (promise: SingleDailyPromise, date?: string) => void;
  updateDailyPromiseStatus: (
    status: DailyPromiseStatus,
    auditDetails?: { reason?: string; circumstances?: string; replacementPlan?: string; overrideExplanation?: string },
    date?: string
  ) => void;
  saveNightlyReview: (review: FiveMinuteNightlyReview, date?: string) => void;
  updateTrackers: (updater: (prev: DetailedTrackers) => DetailedTrackers, date?: string) => void;
  trackerMetrics: DailyTrackerMetrics;

  // Computed metrics
  todayCompletionRate: number;
  todayPromisesKeptRate: number;
  todayHabitsCompletedCount: number;
  todayHabitsTotalCount: number;
  weeklyStudyHoursLogged: number;

  // Active Deep Study Stopwatch/Timer (Background tab resilient)
  studyTimer: ActiveStudyTimerState;
  studyTimerElapsed: number;
  startStudyTimer: (subject?: string, topic?: string) => void;
  pauseStudyTimer: () => void;
  resetStudyTimer: () => void;
  updateStudyTimerMeta: (subject: string, topic: string) => void;

  // Data management
  exportDataJSON: () => string;
  importDataJSON: (jsonString: string) => boolean;
  resetToSampleData: () => void;
  clearAllDataToBlank: () => void;
}

const DataContext = createContext<DataContextType | null>(null);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState<string>(() => formatDateKey());

  const [state, setState] = useState<DataState>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.habits && parsed.promises && parsed.settings) {
          return {
            ...parsed,
            manifesto: {
              ...DEFAULT_MANIFESTO,
              ...(parsed.manifesto || {}),
              realityCheck: parsed.manifesto?.realityCheck || DEFAULT_MANIFESTO.realityCheck,
              futureVision: parsed.manifesto?.futureVision || DEFAULT_MANIFESTO.futureVision,
              coreReminder: parsed.manifesto?.coreReminder || DEFAULT_MANIFESTO.coreReminder,
            },
            currentLifeAuditAreas: parsed.currentLifeAuditAreas || DEFAULT_LIFE_AUDIT_AREAS,
            monthlyLifeAudits: parsed.monthlyLifeAudits || DEFAULT_MONTHLY_LIFE_AUDITS,
            goalMistakes: parsed.goalMistakes || DEFAULT_GOAL_MISTAKES,
            practicalSkills: parsed.practicalSkills || DEFAULT_PRACTICAL_SKILLS,
            personalPriorities: parsed.personalPriorities || DEFAULT_PERSONAL_PRIORITIES,
          };
        }
      }
    } catch {
      // Ignore parse failure, proceed to seed
    }

    // Seed fresh clean slate (zero fake data)
    const initial = seedInitialCompletions(DEFAULT_HABITS, DEFAULT_PROMISES);
    return {
      habits: initial.habits,
      promises: initial.promises,
      dailyLogs: initial.logs,
      studySessions: DEFAULT_STUDY_SESSIONS,
      goals: DEFAULT_GOALS,
      goalMistakes: DEFAULT_GOAL_MISTAKES,
      practicalSkills: DEFAULT_PRACTICAL_SKILLS,
      personalPriorities: DEFAULT_PERSONAL_PRIORITIES,
      weeklyAudits: [],
      monthlyReviews: [],
      lifeDimensions: DEFAULT_LIFE_DIMENSIONS,
      currentLifeAuditAreas: DEFAULT_LIFE_AUDIT_AREAS,
      monthlyLifeAudits: DEFAULT_MONTHLY_LIFE_AUDITS,
      manifesto: DEFAULT_MANIFESTO,
      settings: DEFAULT_SETTINGS,
    };
  });

  // Persist to localStorage whenever state changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error('Failed to persist to localStorage', e);
    }
  }, [state]);

  // Sync sound setting
  useEffect(() => {
    sound.setEnabled(state.settings.soundEffects);
  }, [state.settings.soundEffects]);

  // Sync theme mode (parchment vs dark cosmic)
  useEffect(() => {
    const root = document.documentElement;
    const isDark = state.settings.themeMode !== 'parchment';
    if (isDark) {
      root.classList.add('dark');
      root.classList.add('theme-dark');
      root.classList.remove('theme-parchment');
    } else {
      root.classList.remove('dark');
      root.classList.remove('theme-dark');
      root.classList.add('theme-parchment');
    }
  }, [state.settings.themeMode]);

  // Apply accent color variable to root
  useEffect(() => {
    const root = document.documentElement;
    const isDark = state.settings.themeMode !== 'parchment';
    const accent = state.settings.accentColor || 'violet';
    
    let color = isDark ? '#8B5CF6' : '#7C3AED'; // Default starlight violet
    let muted = isDark ? 'rgba(139, 92, 246, 0.16)' : 'rgba(124, 58, 237, 0.12)';
    let hover = isDark ? '#A78BFA' : '#6D28D9';

    switch (accent) {
      case 'violet':
        color = isDark ? '#8B5CF6' : '#7C3AED';
        muted = isDark ? 'rgba(139, 92, 246, 0.18)' : 'rgba(124, 58, 237, 0.12)';
        hover = isDark ? '#A78BFA' : '#6D28D9';
        break;
      case 'forest':
      case 'emerald':
        color = isDark ? '#34D399' : '#244234';
        muted = isDark ? 'rgba(52, 211, 153, 0.16)' : 'rgba(36, 66, 52, 0.12)';
        hover = isDark ? '#10B981' : '#1B3328';
        break;
      case 'olive':
        color = isDark ? '#A78BFA' : '#3F4E3C';
        muted = isDark ? 'rgba(167, 139, 250, 0.16)' : 'rgba(63, 78, 60, 0.12)';
        hover = isDark ? '#C4B5FD' : '#2F3C2C';
        break;
      case 'amber':
        color = isDark ? '#FBBF24' : '#92400E';
        muted = isDark ? 'rgba(251, 191, 36, 0.16)' : 'rgba(146, 64, 14, 0.12)';
        hover = isDark ? '#F59E0B' : '#78350F';
        break;
      case 'ink':
      case 'titanium':
        color = isDark ? '#F8FAFC' : '#1F1D1A';
        muted = isDark ? 'rgba(248, 250, 252, 0.14)' : 'rgba(31, 29, 26, 0.10)';
        hover = isDark ? '#FFFFFF' : '#121110';
        break;
      case 'terracotta':
      case 'bronze':
      case 'crimson':
        color = isDark ? '#FB7185' : '#8A3A2B';
        muted = isDark ? 'rgba(251, 113, 133, 0.16)' : 'rgba(138, 58, 43, 0.12)';
        hover = isDark ? '#FDA4AF' : '#702E22';
        break;
      default:
        break;
    }

    root.style.setProperty('--accent-color', color);
    root.style.setProperty('--accent-muted', muted);
    root.style.setProperty('--accent-hover', hover);
  }, [state.settings.accentColor, state.settings.themeMode]);

  // Sync typography font family
  useEffect(() => {
    const root = document.documentElement;
    const font = state.settings.fontFamily || 'plus-jakarta';

    switch (font) {
      case 'plus-jakarta':
        root.style.setProperty('--font-heading', "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif");
        root.style.setProperty('--font-body', "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif");
        break;
      case 'inter':
        root.style.setProperty('--font-heading', "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif");
        root.style.setProperty('--font-body', "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif");
        break;
      case 'outfit':
        root.style.setProperty('--font-heading', "'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif");
        root.style.setProperty('--font-body', "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif");
        break;
      case 'instrument-serif':
        root.style.setProperty('--font-heading', "'Instrument Serif', Georgia, serif");
        root.style.setProperty('--font-body', "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif");
        break;
      case 'newsreader':
        root.style.setProperty('--font-heading', "'Newsreader', Georgia, serif");
        root.style.setProperty('--font-body', "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif");
        break;
      default:
        root.style.setProperty('--font-heading', "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif");
        root.style.setProperty('--font-body', "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif");
        break;
    }
  }, [state.settings.fontFamily]);

  // Active Deep Study Timer (Timestamp-based: 100% accurate across background tabs and view navigation)
  const [studyTimer, setStudyTimer] = useState<ActiveStudyTimerState>(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const stored = localStorage.getItem('forme_active_study_timer');
        if (stored) return JSON.parse(stored);
      }
    } catch {}
    return {
      isRunning: false,
      startTime: null,
      accumulatedSeconds: 0,
      subject: 'Deep Work',
      topic: '',
    };
  });

  const [studyTimerElapsed, setStudyTimerElapsed] = useState<number>(() => {
    if (studyTimer.isRunning && studyTimer.startTime) {
      return studyTimer.accumulatedSeconds + Math.max(0, Math.floor((Date.now() - studyTimer.startTime) / 1000));
    }
    return studyTimer.accumulatedSeconds;
  });

  // Background tab resilient sync loop
  useEffect(() => {
    if (!studyTimer.isRunning || !studyTimer.startTime) {
      setStudyTimerElapsed(studyTimer.accumulatedSeconds);
      return;
    }

    const syncElapsed = () => {
      const now = Date.now();
      const elapsed = studyTimer.accumulatedSeconds + Math.max(0, Math.floor((now - studyTimer.startTime!) / 1000));
      setStudyTimerElapsed(elapsed);

      // Browser tab title updates
      const mins = Math.floor(elapsed / 60);
      const secs = elapsed % 60;
      const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
      document.title = `(${formatted}) ${studyTimer.subject || 'Deep Study'} • FOR ME`;
    };

    syncElapsed();
    const interval = setInterval(syncElapsed, 500);

    const handleVisibility = () => {
      if (!document.hidden) {
        syncElapsed();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibility);
      document.title = 'FOR ME — A Private Digital Journal & Life Ledger';
    };
  }, [studyTimer.isRunning, studyTimer.startTime, studyTimer.accumulatedSeconds, studyTimer.subject]);

  const startStudyTimer = useCallback((subject?: string, topic?: string) => {
    sound.tick();
    const now = Date.now();
    setStudyTimer((prev) => {
      const next: ActiveStudyTimerState = {
        ...prev,
        isRunning: true,
        startTime: now,
        subject: subject !== undefined ? subject : prev.subject,
        topic: topic !== undefined ? topic : prev.topic,
      };
      try {
        localStorage.setItem('forme_active_study_timer', JSON.stringify(next));
      } catch {}
      return next;
    });
  }, []);

  const pauseStudyTimer = useCallback(() => {
    sound.tick();
    setStudyTimer((prev) => {
      if (!prev.isRunning || !prev.startTime) return prev;
      const additional = Math.max(0, Math.floor((Date.now() - prev.startTime) / 1000));
      const next: ActiveStudyTimerState = {
        ...prev,
        isRunning: false,
        startTime: null,
        accumulatedSeconds: prev.accumulatedSeconds + additional,
      };
      try {
        localStorage.setItem('forme_active_study_timer', JSON.stringify(next));
      } catch {}
      return next;
    });
  }, []);

  const resetStudyTimer = useCallback(() => {
    sound.tick();
    const next: ActiveStudyTimerState = {
      isRunning: false,
      startTime: null,
      accumulatedSeconds: 0,
      subject: 'Deep Work',
      topic: '',
    };
    try {
      localStorage.setItem('forme_active_study_timer', JSON.stringify(next));
    } catch {}
    setStudyTimer(next);
    setStudyTimerElapsed(0);
    document.title = 'FOR ME — A Private Digital Journal & Life Ledger';
  }, []);

  const updateStudyTimerMeta = useCallback((subject: string, topic: string) => {
    setStudyTimer((prev) => {
      const next = { ...prev, subject, topic };
      try {
        localStorage.setItem('forme_active_study_timer', JSON.stringify(next));
      } catch {}
      return next;
    });
  }, []);

  // Current active daily log
  const currentLog = useMemo(() => {
    const existing = state.dailyLogs[selectedDate];
    if (existing) {
      return {
        ...existing,
        dailyPromise: existing.dailyPromise || getDefaultDailyPromise(),
        nightlyReview: existing.nightlyReview || getDefaultNightlyReview(),
        trackers: existing.trackers || getDefaultTrackers(),
      };
    }
    // Return empty scaffold for date
    return {
      date: selectedDate,
      ratingOutOfTen: 7,
      dayTheme: '',
      energyLevel: 3,
      focusLevel: 3,
      stressLevel: 2,
      waterGlasses: 0,
      sleepHours: 7,
      sleepQuality: 3,
      cleanEating: false,
      workoutCompleted: false,
      dailyPromise: getDefaultDailyPromise(),
      nightlyReview: getDefaultNightlyReview(),
      trackers: getDefaultTrackers(),
    };
  }, [state.dailyLogs, selectedDate]);

  const trackerMetrics = useMemo(() => {
    return calculateTrackerMetrics(currentLog);
  }, [currentLog]);

  // Habit toggling
  const toggleHabit = useCallback((habitId: string, date: string = selectedDate) => {
    setState(prev => {
      const habits = prev.habits.map(h => {
        if (h.id !== habitId) return h;
        const currentStatus = getHabitDayStatus(h, date);
        const nextStatus: HabitDayStatus = currentStatus === 'completed' ? 'incomplete' : 'completed';

        if (nextStatus === 'completed') {
          sound.complete();
        } else {
          sound.tick();
        }

        const newDayStatus = { ...(h.dayStatus || {}), [date]: nextStatus };
        const newCompletions = { ...(h.completions || {}), [date]: nextStatus === 'completed' };

        const tempHabit: Habit = {
          ...h,
          dayStatus: newDayStatus,
          completions: newCompletions,
        };

        const { currentStreak, bestStreak } = calculateHabitStreaks(tempHabit);

        return {
          ...tempHabit,
          streak: currentStreak,
          bestStreak,
        };
      });
      return { ...prev, habits };
    });
  }, [selectedDate]);

  // Set explicit status for habit day (completed, skipped, incomplete)
  const setHabitDayStatus = useCallback((habitId: string, date: string, status: HabitDayStatus, reason?: string) => {
    setState(prev => {
      const habits = prev.habits.map(h => {
        if (h.id !== habitId) return h;

        const newDayStatus = { ...(h.dayStatus || {}), [date]: status };
        const newCompletions = { ...(h.completions || {}), [date]: status === 'completed' };
        const newSkipReasons = { ...(h.skipReasons || {}) };
        if (status === 'skipped' && reason) {
          newSkipReasons[date] = reason;
        } else if (status !== 'skipped') {
          delete newSkipReasons[date];
        }

        const tempHabit: Habit = {
          ...h,
          dayStatus: newDayStatus,
          completions: newCompletions,
          skipReasons: newSkipReasons,
        };

        const { currentStreak, bestStreak } = calculateHabitStreaks(tempHabit);

        if (status === 'completed') sound.complete();
        else if (status === 'skipped') sound.tick();
        else sound.strike();

        return {
          ...tempHabit,
          streak: currentStreak,
          bestStreak,
        };
      });
      return { ...prev, habits };
    });
  }, []);

  const archiveHabit = useCallback((id: string, archived: boolean) => {
    setState(prev => ({
      ...prev,
      habits: prev.habits.map(h => h.id === id ? { ...h, archived } : h)
    }));
    sound.tick();
  }, []);

  // Add habit
  const addHabit = useCallback((newHabitData: Omit<Habit, 'id' | 'streak' | 'bestStreak' | 'completions' | 'createdAt'>) => {
    const newHabit: Habit = {
      ...newHabitData,
      id: `h-${Date.now()}`,
      streak: 0,
      bestStreak: 0,
      completions: {},
      dayStatus: {},
      createdAt: formatDateKey(),
    };
    setState(prev => ({ ...prev, habits: [...prev.habits, newHabit] }));
    sound.success();
  }, []);

  const deleteHabit = useCallback((id: string) => {
    setState(prev => ({ ...prev, habits: prev.habits.filter(h => h.id !== id) }));
    sound.tick();
  }, []);

  const updateHabit = useCallback((habit: Habit) => {
    setState(prev => ({
      ...prev,
      habits: prev.habits.map(h => h.id === habit.id ? habit : h)
    }));
  }, []);

  // Promise status
  const setPromiseStatus = useCallback((promiseId: string, status: PromiseDayStatus, reason?: string, date: string = selectedDate) => {
    setState(prev => {
      const promises = prev.promises.map(p => {
        if (p.id !== promiseId) return p;

        if (status === 'kept') {
          sound.complete();
        } else if (status === 'broken') {
          sound.strike();
        } else {
          sound.tick();
        }

        const newHistory = {
          ...p.history,
          [date]: { status, reason }
        };

        // Recount total kept and broken
        let totalKept = 0;
        let totalBroken = 0;
        Object.values(newHistory).forEach(h => {
          if (h.status === 'kept') totalKept++;
          if (h.status === 'broken') totalBroken++;
        });

        // Recalculate streak
        let streak = 0;
        const checkDate = new Date();
        while (true) {
          const key = formatDateKey(checkDate);
          const rec = newHistory[key];
          if (rec && rec.status === 'kept') {
            streak++;
            checkDate.setDate(checkDate.getDate() - 1);
          } else {
            break;
          }
        }

        return {
          ...p,
          history: newHistory,
          streak,
          totalKept,
          totalBroken
        };
      });
      return { ...prev, promises };
    });
  }, [selectedDate]);

  const addPromise = useCallback((newPromiseData: Omit<PromiseItem, 'id' | 'streak' | 'totalKept' | 'totalBroken' | 'history' | 'createdAt'>) => {
    const newPromise: PromiseItem = {
      ...newPromiseData,
      id: `p-${Date.now()}`,
      streak: 0,
      totalKept: 0,
      totalBroken: 0,
      history: {},
      createdAt: formatDateKey(),
    };
    setState(prev => ({ ...prev, promises: [...prev.promises, newPromise] }));
    sound.success();
  }, []);

  const deletePromise = useCallback((id: string) => {
    setState(prev => ({ ...prev, promises: prev.promises.filter(p => p.id !== id) }));
    sound.tick();
  }, []);

  // Daily log updates
  const updateDailyLog = useCallback((updates: Partial<DailyLog>, date: string = selectedDate) => {
    setState(prev => {
      const existing = prev.dailyLogs[date] || {
        date,
        ratingOutOfTen: 7,
        energyLevel: 3,
        focusLevel: 3,
        stressLevel: 2,
        waterGlasses: 0,
        sleepHours: 7,
        sleepQuality: 3,
        cleanEating: false,
        workoutCompleted: false,
        dailyPromise: getDefaultDailyPromise(),
        nightlyReview: getDefaultNightlyReview(),
        trackers: getDefaultTrackers(),
      };

      return {
        ...prev,
        dailyLogs: {
          ...prev.dailyLogs,
          [date]: { ...existing, ...updates }
        }
      };
    });
  }, [selectedDate]);

  // Extended Daily Tracker Callbacks
  const saveDailyPromise = useCallback((promise: SingleDailyPromise, date: string = selectedDate) => {
    setState(prev => {
      const existing = prev.dailyLogs[date] || {
        date,
        ratingOutOfTen: 7,
        energyLevel: 3,
        focusLevel: 3,
        stressLevel: 2,
        waterGlasses: 0,
        sleepHours: 7,
        sleepQuality: 3,
        cleanEating: false,
        workoutCompleted: false,
        trackers: getDefaultTrackers(),
        nightlyReview: getDefaultNightlyReview(),
      };

      return {
        ...prev,
        dailyLogs: {
          ...prev.dailyLogs,
          [date]: {
            ...existing,
            dailyPromise: promise
          }
        }
      };
    });
    sound.success();
  }, [selectedDate]);

  const updateDailyPromiseStatus = useCallback((
    status: DailyPromiseStatus,
    auditDetails?: { reason?: string; circumstances?: string; replacementPlan?: string; overrideExplanation?: string },
    date: string = selectedDate
  ) => {
    setState(prev => {
      const existing = prev.dailyLogs[date] || {
        date,
        ratingOutOfTen: 7,
        energyLevel: 3,
        focusLevel: 3,
        stressLevel: 2,
        waterGlasses: 0,
        sleepHours: 7,
        sleepQuality: 3,
        cleanEating: false,
        workoutCompleted: false,
        dailyPromise: getDefaultDailyPromise(),
        trackers: getDefaultTrackers(),
        nightlyReview: getDefaultNightlyReview(),
      };

      const prevPromise = existing.dailyPromise || getDefaultDailyPromise();
      const nowStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const newHistoryLog = [...(prevPromise.historyLog || [])];

      if (prevPromise.status === 'missed' && status === 'kept') {
        newHistoryLog.push({
          timestamp: nowStr,
          action: 'OVERRIDE: Changed from MISSED to KEPT',
          reason: auditDetails?.overrideExplanation || 'Manual verified audit override'
        });
      } else if (status === 'kept') {
        newHistoryLog.push({
          timestamp: nowStr,
          action: 'Audited and marked KEPT',
          reason: 'Finish line met on schedule'
        });
        sound.complete();
      } else if (status === 'missed') {
        newHistoryLog.push({
          timestamp: nowStr,
          action: 'Audited and marked MISSED',
          reason: auditDetails?.reason || 'Failed to complete measurable finish line'
        });
        sound.strike();
      } else if (status === 'prevented') {
        newHistoryLog.push({
          timestamp: nowStr,
          action: 'Marked PREVENTED by genuine circumstances',
          reason: `Circumstances: ${auditDetails?.circumstances || 'External interruption'}. Replacement: ${auditDetails?.replacementPlan || 'Plan created'}`
        });
        sound.tick();
      }

      const updatedPromise: SingleDailyPromise = {
        ...prevPromise,
        status,
        statusRecordedAt: nowStr,
        preventedCircumstances: auditDetails?.circumstances || prevPromise.preventedCircumstances,
        replacementPlan: auditDetails?.replacementPlan || prevPromise.replacementPlan,
        historyLog: newHistoryLog
      };

      return {
        ...prev,
        dailyLogs: {
          ...prev.dailyLogs,
          [date]: {
            ...existing,
            dailyPromise: updatedPromise
          }
        }
      };
    });
  }, [selectedDate]);

  const saveNightlyReview = useCallback((review: FiveMinuteNightlyReview, date: string = selectedDate) => {
    setState(prev => {
      const existing = prev.dailyLogs[date] || {
        date,
        ratingOutOfTen: 7,
        energyLevel: 3,
        focusLevel: 3,
        stressLevel: 2,
        waterGlasses: 0,
        sleepHours: 7,
        sleepQuality: 3,
        cleanEating: false,
        workoutCompleted: false,
        dailyPromise: getDefaultDailyPromise(),
        trackers: getDefaultTrackers(),
      };

      const stampedReview: FiveMinuteNightlyReview = {
        ...review,
        completed: true,
        completedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      return {
        ...prev,
        dailyLogs: {
          ...prev.dailyLogs,
          [date]: {
            ...existing,
            nightlyReview: stampedReview
          }
        }
      };
    });
    sound.success();
  }, [selectedDate]);

  const updateTrackers = useCallback((updater: (prev: DetailedTrackers) => DetailedTrackers, date: string = selectedDate) => {
    setState(prev => {
      const existing = prev.dailyLogs[date] || {
        date,
        ratingOutOfTen: 7,
        energyLevel: 3,
        focusLevel: 3,
        stressLevel: 2,
        waterGlasses: 0,
        sleepHours: 7,
        sleepQuality: 3,
        cleanEating: false,
        workoutCompleted: false,
        dailyPromise: getDefaultDailyPromise(),
        nightlyReview: getDefaultNightlyReview(),
        trackers: getDefaultTrackers(),
      };

      const currentTrackers = existing.trackers || getDefaultTrackers();
      const updatedTrackers = updater(currentTrackers);

      return {
        ...prev,
        dailyLogs: {
          ...prev.dailyLogs,
          [date]: {
            ...existing,
            trackers: updatedTrackers
          }
        }
      };
    });
    sound.tick();
  }, [selectedDate]);

  // Study sessions
  const addStudySession = useCallback((sessionData: Omit<StudySession, 'id' | 'completedAt'>) => {
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const session: StudySession = {
      ...sessionData,
      id: `s-${Date.now()}`,
      completedAt: timeStr,
    };
    setState(prev => ({ ...prev, studySessions: [session, ...prev.studySessions] }));
    sound.success();
  }, []);

  const deleteStudySession = useCallback((id: string) => {
    setState(prev => ({ ...prev, studySessions: prev.studySessions.filter(s => s.id !== id) }));
    sound.tick();
  }, []);

  // Goals
  const addGoal = useCallback((goalData: Omit<Goal, 'id'>) => {
    const newGoal: Goal = {
      ...goalData,
      id: `g-${Date.now()}`
    };
    setState(prev => ({ ...prev, goals: [...prev.goals, newGoal] }));
    sound.success();
  }, []);

  const updateGoal = useCallback((goal: Goal) => {
    setState(prev => ({
      ...prev,
      goals: prev.goals.map(g => g.id === goal.id ? goal : g)
    }));
  }, []);

  const deleteGoal = useCallback((id: string) => {
    setState(prev => ({ ...prev, goals: prev.goals.filter(g => g.id !== id) }));
    sound.tick();
  }, []);

  const toggleMilestone = useCallback((goalId: string, milestoneId: string) => {
    setState(prev => {
      const goals = prev.goals.map(g => {
        if (g.id !== goalId) return g;
        const milestones = g.milestones.map(m => {
          if (m.id !== milestoneId) return m;
          const nextDone = !m.done;
          if (nextDone) sound.complete();
          else sound.tick();
          return { ...m, done: nextDone };
        });
        const doneCount = milestones.filter(m => m.done).length;
        const progress = milestones.length > 0 ? Math.round((doneCount / milestones.length) * 100) : g.progress;
        return { ...g, milestones, progress };
      });
      return { ...prev, goals };
    });
  }, []);

  // Audits & Reviews
  const saveWeeklyAudit = useCallback((auditData: Omit<WeeklyAudit, 'id' | 'createdAt'>) => {
    setState(prev => {
      const existingIdx = prev.weeklyAudits.findIndex(w => w.weekStartDate === auditData.weekStartDate);
      let updatedAudits: WeeklyAudit[];
      if (existingIdx >= 0) {
        const existing = prev.weeklyAudits[existingIdx];
        const updated: WeeklyAudit = {
          ...existing,
          ...auditData,
          createdAt: existing.createdAt || formatDateKey(),
        };
        updatedAudits = [...prev.weeklyAudits];
        updatedAudits[existingIdx] = updated;
      } else {
        const audit: WeeklyAudit = {
          ...auditData,
          id: `w-${Date.now()}`,
          createdAt: formatDateKey(),
        };
        updatedAudits = [audit, ...prev.weeklyAudits];
      }
      return { ...prev, weeklyAudits: updatedAudits };
    });
    sound.success();
  }, []);

  const saveMonthlyReview = useCallback((reviewData: Omit<MonthlyReview, 'id' | 'createdAt'>) => {
    setState(prev => {
      const existingIdx = prev.monthlyReviews.findIndex(m => m.month === reviewData.month);
      let updatedReviews: MonthlyReview[];
      if (existingIdx >= 0) {
        const existing = prev.monthlyReviews[existingIdx];
        const updated: MonthlyReview = {
          ...existing,
          ...reviewData,
          createdAt: existing.createdAt || formatDateKey(),
        };
        updatedReviews = [...prev.monthlyReviews];
        updatedReviews[existingIdx] = updated;
      } else {
        const review: MonthlyReview = {
          ...reviewData,
          id: `mr-${Date.now()}`,
          createdAt: formatDateKey(),
        };
        updatedReviews = [review, ...prev.monthlyReviews];
      }
      return { ...prev, monthlyReviews: updatedReviews };
    });
    sound.success();
  }, []);

  const updateLifeDimension = useCallback((dim: LifeDimension) => {
    setState(prev => ({
      ...prev,
      lifeDimensions: prev.lifeDimensions.map(d => d.id === dim.id ? dim : d)
    }));
    sound.tick();
  }, []);

  const updateManifesto = useCallback((manifesto: PersonalManifesto) => {
    setState(prev => ({ ...prev, manifesto }));
    sound.success();
  }, []);

  const addGoalMistake = useCallback((mistakeData: Omit<GoalMistakeLesson, 'id' | 'dateLogged'>) => {
    setState(prev => ({
      ...prev,
      goalMistakes: [
        {
          ...mistakeData,
          id: `gml-${Date.now()}`,
          dateLogged: formatDateKey(),
        },
        ...prev.goalMistakes,
      ]
    }));
    sound.complete();
  }, []);

  const deleteGoalMistake = useCallback((id: string) => {
    setState(prev => ({
      ...prev,
      goalMistakes: prev.goalMistakes.filter(m => m.id !== id),
    }));
    sound.strike();
  }, []);

  const addPracticalSkill = useCallback((skillData: Omit<PracticalSkill, 'id'>) => {
    setState(prev => ({
      ...prev,
      practicalSkills: [
        ...prev.practicalSkills,
        { ...skillData, id: `ps-${Date.now()}` },
      ]
    }));
    sound.complete();
  }, []);

  const updatePracticalSkill = useCallback((skill: PracticalSkill) => {
    setState(prev => ({
      ...prev,
      practicalSkills: prev.practicalSkills.map(s => s.id === skill.id ? skill : s),
    }));
    sound.tick();
  }, []);

  const deletePracticalSkill = useCallback((id: string) => {
    setState(prev => ({
      ...prev,
      practicalSkills: prev.practicalSkills.filter(s => s.id !== id),
    }));
    sound.strike();
  }, []);

  const addPersonalPriority = useCallback((priorityData: Omit<PersonalPriority, 'id' | 'completed'>) => {
    setState(prev => ({
      ...prev,
      personalPriorities: [
        ...prev.personalPriorities,
        { ...priorityData, id: `pp-${Date.now()}`, completed: false },
      ]
    }));
    sound.complete();
  }, []);

  const togglePersonalPriority = useCallback((id: string) => {
    setState(prev => ({
      ...prev,
      personalPriorities: prev.personalPriorities.map(p => {
        if (p.id !== id) return p;
        const nextDone = !p.completed;
        if (nextDone) sound.complete();
        else sound.tick();
        return { ...p, completed: nextDone };
      })
    }));
  }, []);

  const deletePersonalPriority = useCallback((id: string) => {
    setState(prev => ({
      ...prev,
      personalPriorities: prev.personalPriorities.filter(p => p.id !== id),
    }));
    sound.strike();
  }, []);

  const updateLifeAuditArea = useCallback((area: LifeAuditAssessmentArea) => {
    setState(prev => ({
      ...prev,
      currentLifeAuditAreas: prev.currentLifeAuditAreas.map(a => a.id === area.id ? area : a)
    }));
    sound.tick();
  }, []);

  const saveLifeAuditAreas = useCallback((areas: LifeAuditAssessmentArea[]) => {
    setState(prev => ({
      ...prev,
      currentLifeAuditAreas: areas,
    }));
    sound.success();
  }, []);

  const saveMonthlyLifeAudit = useCallback((auditData: Omit<MonthlyLifeAudit, 'id' | 'updatedAt'>) => {
    setState(prev => {
      const existingIdx = prev.monthlyLifeAudits.findIndex(a => a.month === auditData.month);
      let updatedAudits: MonthlyLifeAudit[];
      if (existingIdx >= 0) {
        const existing = prev.monthlyLifeAudits[existingIdx];
        const updated: MonthlyLifeAudit = {
          ...existing,
          ...auditData,
          updatedAt: formatDateKey(),
        };
        updatedAudits = [...prev.monthlyLifeAudits];
        updatedAudits[existingIdx] = updated;
      } else {
        const newAudit: MonthlyLifeAudit = {
          ...auditData,
          id: `mla-${Date.now()}`,
          updatedAt: formatDateKey(),
        };
        updatedAudits = [newAudit, ...prev.monthlyLifeAudits];
      }
      return {
        ...prev,
        monthlyLifeAudits: updatedAudits,
        currentLifeAuditAreas: auditData.areas,
      };
    });
    sound.success();
  }, []);

  const updateSettings = useCallback((updates: Partial<AppSettings>) => {
    setState(prev => ({ ...prev, settings: { ...prev.settings, ...updates } }));
  }, []);

  // Computed metrics
  const activeHabits = useMemo(() => state.habits.filter(h => !h.archived), [state.habits]);
  const todayHabitsTotalCount = activeHabits.length;

  const todayHabitsCompletedCount = useMemo(() => {
    return activeHabits.filter(h => !!h.completions[selectedDate]).length;
  }, [activeHabits, selectedDate]);

  const todayCompletionRate = useMemo(() => {
    if (todayHabitsTotalCount === 0) return 0;
    return Math.round((todayHabitsCompletedCount / todayHabitsTotalCount) * 100);
  }, [todayHabitsCompletedCount, todayHabitsTotalCount]);

  const todayPromisesKeptRate = useMemo(() => {
    if (state.promises.length === 0) return 0;
    const keptCount = state.promises.filter(p => p.history[selectedDate]?.status === 'kept').length;
    return Math.round((keptCount / state.promises.length) * 100);
  }, [state.promises, selectedDate]);

  const weeklyStudyHoursLogged = useMemo(() => {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - 7);
    const startKey = formatDateKey(startOfWeek);

    const minutes = state.studySessions
      .filter(s => s.date >= startKey)
      .reduce((acc, curr) => acc + curr.durationMinutes, 0);

    return Math.round((minutes / 60) * 10) / 10;
  }, [state.studySessions]);

  // Export / Import
  const exportDataJSON = useCallback(() => {
    return JSON.stringify(state, null, 2);
  }, [state]);

  const importDataJSON = useCallback((jsonString: string): boolean => {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed && typeof parsed === 'object') {
        const validated: DataState = {
          habits: Array.isArray(parsed.habits) ? parsed.habits : [],
          promises: Array.isArray(parsed.promises) ? parsed.promises : [],
          dailyLogs: parsed.dailyLogs && typeof parsed.dailyLogs === 'object' ? parsed.dailyLogs : {},
          studySessions: Array.isArray(parsed.studySessions) ? parsed.studySessions : [],
          goals: Array.isArray(parsed.goals) ? parsed.goals : [],
          goalMistakes: Array.isArray(parsed.goalMistakes) ? parsed.goalMistakes : [],
          practicalSkills: Array.isArray(parsed.practicalSkills) ? parsed.practicalSkills : DEFAULT_PRACTICAL_SKILLS,
          personalPriorities: Array.isArray(parsed.personalPriorities) ? parsed.personalPriorities : [],
          weeklyAudits: Array.isArray(parsed.weeklyAudits) ? parsed.weeklyAudits : [],
          monthlyReviews: Array.isArray(parsed.monthlyReviews) ? parsed.monthlyReviews : [],
          lifeDimensions: Array.isArray(parsed.lifeDimensions) ? parsed.lifeDimensions : DEFAULT_LIFE_DIMENSIONS,
          currentLifeAuditAreas: Array.isArray(parsed.currentLifeAuditAreas) ? parsed.currentLifeAuditAreas : DEFAULT_LIFE_AUDIT_AREAS,
          monthlyLifeAudits: Array.isArray(parsed.monthlyLifeAudits) ? parsed.monthlyLifeAudits : DEFAULT_MONTHLY_LIFE_AUDITS,
          manifesto: { ...DEFAULT_MANIFESTO, ...(parsed.manifesto || {}) },
          settings: { ...DEFAULT_SETTINGS, ...(parsed.settings || {}) },
        };
        setState(validated);
        sound.success();
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }, []);

  const resetToSampleData = useCallback(() => {
    const blank: DataState = {
      habits: [],
      promises: [],
      dailyLogs: {},
      studySessions: [],
      goals: [],
      goalMistakes: [],
      practicalSkills: [],
      personalPriorities: [],
      weeklyAudits: [],
      monthlyReviews: [],
      lifeDimensions: DEFAULT_LIFE_DIMENSIONS,
      currentLifeAuditAreas: DEFAULT_LIFE_AUDIT_AREAS,
      monthlyLifeAudits: [],
      manifesto: DEFAULT_MANIFESTO,
      settings: DEFAULT_SETTINGS,
    };
    setState(blank);
    sound.success();
  }, []);

  const clearAllDataToBlank = useCallback(() => {
    const blank: DataState = {
      habits: [],
      promises: [],
      dailyLogs: {},
      studySessions: [],
      goals: [],
      goalMistakes: [],
      practicalSkills: [],
      personalPriorities: [],
      weeklyAudits: [],
      monthlyReviews: [],
      lifeDimensions: DEFAULT_LIFE_DIMENSIONS,
      currentLifeAuditAreas: DEFAULT_LIFE_AUDIT_AREAS,
      monthlyLifeAudits: [],
      manifesto: DEFAULT_MANIFESTO,
      settings: DEFAULT_SETTINGS,
    };
    setState(blank);
    sound.success();
  }, []);

  return (
    <DataContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        habits: state.habits,
        promises: state.promises,
        dailyLogs: state.dailyLogs,
        currentLog,
        studySessions: state.studySessions,
        goals: state.goals,
        goalMistakes: state.goalMistakes,
        practicalSkills: state.practicalSkills,
        personalPriorities: state.personalPriorities,
        weeklyAudits: state.weeklyAudits,
        monthlyReviews: state.monthlyReviews,
        lifeDimensions: state.lifeDimensions,
        currentLifeAuditAreas: state.currentLifeAuditAreas,
        monthlyLifeAudits: state.monthlyLifeAudits,
        manifesto: state.manifesto,
        settings: state.settings,

        toggleHabit,
        setHabitDayStatus,
        addHabit,
        deleteHabit,
        updateHabit,
        archiveHabit,

        setPromiseStatus,
        addPromise,
        deletePromise,

        updateDailyLog,
        saveDailyPromise,
        updateDailyPromiseStatus,
        saveNightlyReview,
        updateTrackers,
        trackerMetrics,
        addStudySession,
        deleteStudySession,

        addGoal,
        updateGoal,
        deleteGoal,
        toggleMilestone,

        addGoalMistake,
        deleteGoalMistake,
        addPracticalSkill,
        updatePracticalSkill,
        deletePracticalSkill,
        addPersonalPriority,
        togglePersonalPriority,
        deletePersonalPriority,

        saveWeeklyAudit,
        saveMonthlyReview,
        updateLifeDimension,
        saveMonthlyLifeAudit,
        updateLifeAuditArea,
        saveLifeAuditAreas,
        updateManifesto,
        updateSettings,

        todayCompletionRate,
        todayPromisesKeptRate,
        todayHabitsCompletedCount,
        todayHabitsTotalCount,
        weeklyStudyHoursLogged,

        // Deep Study Timer
        studyTimer,
        studyTimerElapsed,
        startStudyTimer,
        pauseStudyTimer,
        resetStudyTimer,
        updateStudyTimerMeta,

        exportDataJSON,
        importDataJSON,
        resetToSampleData,
        clearAllDataToBlank,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const ctx = useContext(DataContext);
  if (!ctx) {
    throw new Error('useData must be used within a DataProvider');
  }
  return ctx;
};
