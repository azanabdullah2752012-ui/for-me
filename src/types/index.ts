export type NavView = 
  | 'wallpaper'
  | 'dashboard'
  | 'manifesto'
  | 'daily-tracker'
  | 'promises'
  | 'habits'
  | 'studies'
  | 'health'
  | 'reflections'
  | 'goals'
  | 'weekly-audit'
  | 'monthly-review'
  | 'life-audit'
  | 'analytics'
  | 'settings';

export type HabitCategory = 'discipline' | 'mind' | 'body' | 'craft' | 'spirit';
export type HabitFrequency = 'daily' | 'weekdays' | 'custom';
export type HabitDayStatus = 'completed' | 'skipped' | 'incomplete' | 'not-scheduled';

export interface Habit {
  id: string;
  title: string;
  category: HabitCategory;
  frequency: HabitFrequency;
  customDays?: number[]; // 0 = Sun, 1 = Mon, ..., 6 = Sat
  targetPerDay: number;
  unit: string;
  streak: number;
  bestStreak: number;
  completions: Record<string, boolean>; // 'YYYY-MM-DD': boolean
  dayStatus?: Record<string, HabitDayStatus>; // 'YYYY-MM-DD': HabitDayStatus
  skipReasons?: Record<string, string>; // 'YYYY-MM-DD': reason
  createdAt: string;
  archived?: boolean;
  color?: string;
  notes?: string;
}

export type PromiseCategory = 'sacred' | 'discipline' | 'growth';
export type PromiseDayStatus = 'kept' | 'broken' | 'excused';

export interface PromiseItem {
  id: string;
  title: string;
  category: PromiseCategory;
  whyItMatters: string;
  consequenceIfBroken: string;
  streak: number;
  totalKept: number;
  totalBroken: number;
  history: Record<string, { status: PromiseDayStatus; reason?: string }>; // 'YYYY-MM-DD'
  createdAt: string;
}

export type DailyPromiseStatus = 'pending' | 'kept' | 'missed' | 'prevented';

export interface DailyPromiseAuditLog {
  timestamp: string;
  action: string;
  reason?: string;
}

export interface SingleDailyPromise {
  text: string;
  measurableFinishLine: string;
  deadline: string;
  chosenWhen: 'previous-evening' | 'morning';
  status: DailyPromiseStatus;
  statusRecordedAt?: string;
  preventedCircumstances?: string;
  replacementPlan?: string;
  historyLog?: DailyPromiseAuditLog[];
}

export interface FiveMinuteNightlyReview {
  completed: boolean;
  completedAt?: string;
  highlights: string;
  difficulties: string;
  dailyPromiseReview: string;
  lessonLearned: string;
  nextAction: string;
  extraPrompts?: {
    whatGaveEnergy?: string;
    whatDrainedEnergy?: string;
    unspokenThought?: string;
  };
}

export interface DetailedTrackers {
  study: {
    skipped: boolean;
    hoursStudied: number;
    focusRating: number; // 1-5
    completedPlanned: boolean;
    notes: string;
  };
  sleep: {
    skipped: boolean;
    bedtime: string;
    waketime: string;
    hours: number;
    qualityRating: number; // 1-5
    restedFeeling: boolean;
  };
  screenTime: {
    skipped: boolean;
    productiveHours: number;
    recreationalHours: number;
    cutoffHonored: boolean;
  };
  routine: {
    skipped: boolean;
    morningRoutineDone: boolean;
    eveningRoutineDone: boolean;
    punctualityScore: number; // 1-5
  };
  cleanliness: {
    skipped: boolean;
    groomingDone: boolean;
    teethTwice: boolean;
    roomDeskClear: boolean;
    bedMade: boolean;
  };
  meals: {
    skipped: boolean;
    breakfast: { eaten: boolean; clean: boolean; notes: string };
    lunch: { eaten: boolean; clean: boolean; notes: string };
    dinner: { eaten: boolean; clean: boolean; notes: string };
    snacks: { eaten: boolean; clean: boolean; notes: string };
  };
  waterAndMovement: {
    skipped: boolean;
    waterGlasses: number;
    workoutDone: boolean;
    workoutType: string;
    durationMins: number;
    walkStepsDone: boolean;
  };
  emotionalTriggers: {
    skipped: boolean;
    experiencedTrigger: boolean;
    triggerDescription: string;
    managedWell: boolean;
    copingNote: string;
  };
  gratitude: {
    skipped: boolean;
    item1: string;
    item2: string;
    item3: string;
    highlightMoment: string;
  };
  confidence: {
    skipped: boolean;
    confidenceRating: number; // 1-5
    keptWordToSelf: boolean;
    positiveSelfTalk: string;
  };
  timeUse: {
    skipped: boolean;
    hoursUsedWell: number;
    hoursWasted: number;
    distractionSource: string;
    redirectedWell: boolean;
  };
}

export interface DailyLog {
  date: string; // 'YYYY-MM-DD'
  ratingOutOfTen: number; // 1 to 10
  dayTheme?: string;
  energyLevel: number; // 1 to 5
  focusLevel: number; // 1 to 5
  stressLevel: number; // 1 to 5
  waterGlasses: number; // e.g. 8
  sleepHours: number;
  sleepQuality: number; // 1 to 5
  cleanEating: boolean;
  workoutCompleted: boolean;
  workoutType?: string;
  workoutDuration?: number;
  workoutNotes?: string;
  morningPriming?: string;
  eveningDebrief?: {
    biggestWin: string;
    hesitationOrObstacle: string;
    lessonLearned: string;
    livedUpToStandard: boolean;
  };
  dailyNotes?: string;

  // Extended Daily Tracker Systems
  dailyPromise?: SingleDailyPromise;
  nightlyReview?: FiveMinuteNightlyReview;
  trackers?: DetailedTrackers;
  extendedReflections?: ExtendedReflectionPrompts;
}

export interface ExtendedReflectionPrompts {
  emotions: string;
  triggers: string;
  gratitude: string;
  happiness: string;
  decisions: string;
  mistakes: string;
  lessons: string;
}

export interface StudySession {
  id: string;
  date: string; // 'YYYY-MM-DD'
  subject: string;
  topicCovered: string;
  durationMinutes: number;
  focusRating: number; // 1-5
  notes: string;
  completedAt: string;
}

export interface GoalMilestone {
  id: string;
  text: string;
  done: boolean;
}

export interface Goal {
  id: string;
  title: string;
  category: 'craft' | 'wealth' | 'intellect' | 'vitality' | 'character';
  timeframe: '5year' | '1year' | 'quarterly';
  targetDate: string;
  progress: number; // 0-100
  status: 'on-track' | 'at-risk' | 'behind' | 'achieved';
  milestones: GoalMilestone[];
}

export interface GoalMistakeLesson {
  id: string;
  goalTitle: string;
  mistake: string;
  rootCause: string;
  lessonLearned: string;
  dateLogged: string;
}

export interface PracticalSkill {
  id: string;
  title: string;
  category: 'technical' | 'domestic' | 'financial' | 'social' | 'survival';
  proficiency: 'to-learn' | 'practicing' | 'competent' | 'mastered';
  targetDate: string;
  notes: string;
}

export interface PersonalPriority {
  id: string;
  action: string;
  goalTitle?: string;
  priorityTier: 'critical' | 'high' | 'medium';
  dueDate: string;
  completed: boolean;
}

export interface AccountabilityDissection {
  id: string;
  commitmentTitle: string;
  dateKey: string;
  category: 'promise' | 'habit' | 'study';
  failureType: 'avoidable-choice' | 'genuine-obstacle';
  analyseWhatHappened: string;
  analyseControlFactors: string;
  ownItConsequence: string;
  recoverActionPlan: string;
}

export interface WeeklyAudit {
  id: string;
  weekStartDate: string; // 'YYYY-MM-DD'
  weekEndDate: string;
  overallScore: number; // 1-10

  // Numerical Scorecard
  habitsRate: number;
  promisesRate: number;
  promisesKeptCount: number;
  promisesMissedCount: number;
  promisesPreventedCount: number;
  studyHoursTotal: number;
  studyHoursTarget: number;
  hoursUsedWellTotal: number;
  hoursWastedTotal: number;
  avgSleepHours: number;
  cleanMealsRate: number;

  // Recurring mistakes & triggers
  recurringMistakes: string;
  recurringTriggers: string;

  // Written review
  whatWentWell: string;
  whatFailed: string;
  whatILearned: string;
  whatToPrune: string;

  // Concrete Corrective Plan for next week
  nextWeekFocus: string;
  correctiveActions: string[];

  // Accountability Framework instances
  dissections?: AccountabilityDissection[];

  createdAt: string;
}

export interface MonthlyReview {
  id: string;
  month: string; // 'YYYY-MM'
  primaryTheme: string;
  rating: number; // 1-10

  // Scorecard & Aggregations
  totalStudyHours: number;
  averageHabitRate: number;
  promisesKeptTotal: number;
  promisesMissedTotal: number;
  promisesPreventedTotal: number;
  avgSleepHours: number;
  avgDailyRating: number;
  totalScreenProductiveHours: number;
  totalScreenRecreationalHours: number;

  // Personal Growth & Discipline
  growthDiscipline: string;
  growthConfidence: string;
  mindsetShift: string;

  // Progress towards goals & long-term milestones
  milestonesProgress: string;
  unfinishedGoals: string;

  // Recurring mistakes & habit patterns
  recurringHabitPatterns: string;

  // Wins, lessons, and next month priorities
  keyWins: string;
  coreLessons: string;
  nextMonthPriority: string;
  nextMonthMilestones: string[];

  // Accountability Framework instances
  dissections?: AccountabilityDissection[];

  createdAt: string;
}

export interface LifeDimension {
  id: string;
  name: string;
  score: number; // 1-10
  idealScore: number;
  status: string;
  diagnosis: string;
  actionProtocol: string;
}

export interface RealityCheckConfrontation {
  id: string;
  habitOrChoice: string;
  excuseUsed: string;
  hardTruth: string;
  actionableCorrection: string;
}

export interface FutureVision {
  characterIdentity: string;
  craftAndMastery: string;
  physicalStandard: string;
  lifestyleEnvironment: string;
  dailyStateOfMind: string;
}

export interface PersonalManifesto {
  identityStatement: string;
  coreCreed: string[];
  operatingRules: { rule: string; rationale: string }[];
  realityCheck: RealityCheckConfrontation[];
  futureVision: FutureVision;
  coreReminder: string;
  updatedAt: string;
}

export interface LifeAuditAssessmentArea {
  id: string;
  areaKey: string;
  name: string;
  categoryNumber: number; // 1 to 11
  score: number; // 1-10
  currentAssessment: string;
  evidence: string;
  desiredChange: string;
  nextAction: string;
}

export interface MonthlyLifeAudit {
  id: string;
  month: string; // 'YYYY-MM'
  overallScore: number;
  areas: LifeAuditAssessmentArea[];
  generalNotes?: string;
  updatedAt: string;
}

export interface ActiveStudyTimerState {
  isRunning: boolean;
  startTime: number | null;
  accumulatedSeconds: number;
  subject: string;
  topic: string;
}

export type AccentColor = 'forest' | 'olive' | 'amber' | 'ink' | 'terracotta' | 'emerald' | 'titanium' | 'bronze' | 'crimson' | 'violet';
export type ThemeMode = 'parchment' | 'dark';
export type FontFamilyOption = 'plus-jakarta' | 'inter' | 'outfit' | 'instrument-serif' | 'newsreader';

export interface AppSettings {
  themeMode?: ThemeMode;
  journalOwnerName?: string;
  personalReminder?: string;
  personalQuote?: string;
  accentColor: AccentColor;
  fontFamily?: FontFamilyOption;
  soundEffects: boolean;
  weeklyStudyTargetHours: number;
  dailyWaterTarget: number;
  dailySleepTarget: number;
}
