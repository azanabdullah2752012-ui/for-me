export type MoodType = 'locked_in' | 'deep_focus' | 'energized' | 'calm_flow' | 'creative' | 'recharging';

export type AppTheme = 'dark' | 'light';

export type WallpaperTheme =
  // Next-Gen Celestial Realms (New Design)
  | 'andromeda-galaxy'
  | 'lunar-horizon'
  | 'orion-sanctuary'
  | 'bioluminescent-void'
  // Classic Sanctuary Atmospheres (Old Design Preserved)
  | 'deep-nebula'
  | 'pastel-twilight'
  | 'bioluminescent-cyan'
  | 'celestial-rose'
  | 'sonoma-amber'
  | 'nordic-aurora'
  | 'rose-eclipse'
  | 'graphite-titanium'
  | 'constellation'
  | 'earth-horizon'
  | 'solar-flare'
  | 'cyber-obsidian'
  | 'abyssal-ocean';

export type NavTab = 
  | 'wallpaper'
  | 'home'
  | 'overview'
  | 'today'
  | 'studies'
  | 'health'
  | 'tracker'
  | 'growth'
  | 'time'
  | 'goals'
  | 'accountability'
  | 'journal'
  | 'life_audit'
  | 'manifesto'
  | 'music'
  | 'settings';

export interface DailyTask {
  id: string;
  text: string;
  completed: boolean;
  priority?: 'high' | 'medium' | 'low';
  category?: string;
  completedAt?: string;
}

// ── EXPANDED HABITS & ROUTINES ──
export interface HabitItem {
  id: string;
  name: string;
  completed: boolean;
  streak: number;
  bestStreak?: number;
  category?: 'study' | 'wellness' | 'mind' | 'discipline' | 'custom';
  type?: 'positive' | 'reduction'; // habits to build vs habits to reduce
  frequencyType?: 'daily' | 'weekly_target' | 'specific_days';
  targetPerWeek?: number;
  history?: Record<string, boolean>; // 'YYYY-MM-DD' -> true/false
  createdDate?: string;
}

export interface DayHeatmapCell {
  date: string;
  dayOfWeek: number; // 0-6
  intensity: 0 | 1 | 2 | 3 | 4;
  habitsCompleted: number;
  studyMinutes: number;
}

export interface DailyPromise {
  id: string;
  text: string;
  deadline: string;
  current: number;
  target: number;
  unit: string;
}

export interface UpcomingEvent {
  id: string;
  title: string;
  date: string;
  color: string;
}

export interface JournalEntry {
  id: string;
  text: string;
  timestamp: string;
  mood?: string;
  tags?: string[];
}

// ── EXPANDED ACADEMICS & STUDIES ──
export interface AcademicTerm {
  id: string;
  name: string; // e.g. 'Term 1', 'Term 2', 'Final Term'
  isCurrent?: boolean;
}

export interface AcademicYear {
  id: string;
  name: string; // e.g. '2026-2027'
  isCurrent: boolean;
  terms: AcademicTerm[];
}

export interface SubjectAssessmentComponent {
  id: string;
  name: string; // e.g. 'Theory Examination', 'Internal Assessment', 'Practical Lab'
  maximumMarks: number; // e.g. 80, 20
  weightPercent?: number; // e.g. 80, 20
}

export interface SubjectDefinition {
  id: string;
  name: string;
  abbreviation?: string; // e.g. 'CS', 'MATH', 'PHYS'
  academicYearId?: string;
  targetPercentage?: number; // e.g. 90
  targetWeeklyHours: number;
  color?: string;
  notes?: string;
  components?: SubjectAssessmentComponent[];
}

export type AssessmentType = 
  | 'unit_test' 
  | 'midterm' 
  | 'final' 
  | 'assignment' 
  | 'practical' 
  | 'internal' 
  | 'project' 
  | 'quiz' 
  | 'custom';

export interface AssessmentRecord {
  id: string;
  subjectId: string;
  academicYearId: string;
  termId: string;
  name: string;
  type: AssessmentType;
  componentId?: string; // links to SubjectAssessmentComponent (e.g. Theory vs Internal)
  marksObtained: number;
  maximumMarks: number;
  date: string; // YYYY-MM-DD
  weightPercent?: number;
  notes?: string;
  isIncludedInFinal: boolean;
}

export interface StudySession {
  id: string;
  subject: string;
  durationSeconds: number;
  timestamp: string; // ISO string
  notes?: string;
  sessionType?: 'timer' | 'manual';
}

export interface GradeItem {
  id: string;
  subject: string;
  title: string;
  score: number;
  total: number;
  date: string;
  targetGrade?: number;
  notes?: string;
}

export interface AudioStation {
  id: string;
  name: string;
  genre: string;
  duration: string;
  type: 'youtube' | 'spotify';
  embedSrc: string;
  artworkUrl?: string;
}

export interface LifeDimensions {
  career: number;
  health: number;
  relationships: number;
  finance: number;
  mind: number;
  environment: number;
}

export interface UserProfile {
  name: string;
  title: string;
  motto: string;
  selectedWallpaper: WallpaperTheme;
  manifestoText?: string;
}

// ── EXPANDED CUSTOM TRACKERS ──
export interface CustomTracker {
  id: string;
  name: string;
  category: 'academics' | 'health' | 'habits' | 'growth' | 'time' | 'goals';
  inputType: 'boolean' | 'number' | 'stepper' | 'slider';
  unit: string;
  target: number;
  frequency: 'daily' | 'weekly';
  enabled: boolean;
  currentValue: number;
  description?: string;
}

export interface CustomTrackerRecord {
  id: string;
  trackerId: string;
  date: string; // YYYY-MM-DD
  timestamp: string; // ISO string
  value: number | boolean;
  notes?: string;
}

// ── EXPANDED GOALS & MILESTONES ──
export interface GoalMilestone {
  id: string;
  text: string;
  completed: boolean;
  targetDate?: string;
}

export interface GoalItem {
  id: string;
  title: string;
  category: 'academics' | 'health' | 'career' | 'discipline' | 'growth';
  type?: 'short_term' | 'long_term';
  targetDate: string;
  startDate?: string;
  progressPercent: number;
  status: 'active' | 'completed' | 'paused';
  milestones: GoalMilestone[];
  description?: string;
}

// ── EXPANDED TIME AUDIT & LOGGING ──
export interface TimeLogEntry {
  id: string;
  date: string; // YYYY-MM-DD
  timestamp: string; // ISO string
  activityName: string;
  category: 'productive' | 'neutral' | 'unproductive';
  durationMinutes: number;
  notes?: string;
}

export interface TimeRecord {
  date: string; // YYYY-MM-DD
  productiveMinutes: number;
  wastedMinutes: number;
  neutralMinutes: number;
  screenTimeHours: number;
  distractionNotes?: string;
}

// ── CONSTRUCTIVE ACCOUNTABILITY (MODERATE & RESPECTFUL) ──
export interface AccountabilityIncident {
  id: string;
  date: string;
  targetName: string;
  targetExpected: string;
  actualAchieved: string;
  cause?: string;
  prescribedConsequence: {
    type: 'walk' | 'stretch' | 'hydration_reset' | 'reschedule_study' | 'pushups' | 'pullups' | 'workout' | 'cold_shower';
    description: string;
    quantity: number;
    unit: string;
  };
  status: 'pending_review' | 'approved' | 'completed' | 'adjusted';
  completedAt?: string;
  notes?: string;
}

// ── EXPANDED PERSONAL GROWTH & REAL MASTERY ──
export type SkillCategory = 
  | 'technical' 
  | 'cognitive' 
  | 'physical' 
  | 'creative' 
  | 'interpersonal' 
  | 'discipline';

export type ProficiencyLevel = 
  | 'beginner' 
  | 'intermediate' 
  | 'advanced' 
  | 'mastery';

export interface SkillPracticeLog {
  id: string;
  skillId: string;
  date: string; // YYYY-MM-DD
  durationMinutes: number;
  milestoneReached?: string;
  notes?: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  currentLevel: ProficiencyLevel;
  targetLevel: ProficiencyLevel;
  progressPercent: number; // 0-100
  targetPracticeHours?: number;
  totalPracticeMinutes: number;
  color?: string;
  notes?: string;
  createdAt: string;
  practiceLogs: SkillPracticeLog[];
}

export interface ProjectMilestone {
  id: string;
  title: string;
  completed: boolean;
  completedAt?: string;
}

export interface PersonalProject {
  id: string;
  title: string;
  description: string;
  category: string;
  status: 'planning' | 'in_progress' | 'completed' | 'on_hold';
  startDate: string;
  targetCompletionDate?: string;
  completedDate?: string;
  linkedSkillIds: string[];
  milestones: ProjectMilestone[];
  keyLearnings: string[];
  outcomeUrl?: string;
}

export type LearningItemType = 'book' | 'article' | 'course' | 'paper' | 'video' | 'mentor';
export type LearningStatus = 'want_to_consume' | 'in_progress' | 'completed' | 'applied';

export interface CuratedLearningItem {
  id: string;
  title: string;
  creator: string; // Author, Instructor, Mentor, Creator
  type: LearningItemType;
  status: LearningStatus;
  progressPercent: number; // 0-100
  linkedSkillIds: string[];
  linkedProjectIds: string[];
  keyTakeaways: string[];
  actionableInsights: string[];
  dateAdded: string;
  dateCompleted?: string;
  rating?: number; // 1-5
}

export interface PersonalGrowthRating {
  date: string;
  happinessRating: number; // 1-10
  confidenceRating: number; // 1-10
  developmentRating?: number; // 1-10
  note?: string;
}

export interface LessonLearned {
  id: string;
  date: string;
  title: string;
  reflection: string;
  category: string;
}

export interface PersonalObjective {
  id: string;
  title: string;
  category: string;
  targetDate: string;
  progressPercent: number;
  notes?: string;
}

// ── EXPANDED HEALTH: 5 COMPLETE SYSTEMS ──

// 1. Hydration
export interface HydrationLog {
  id: string;
  date: string; // YYYY-MM-DD
  timestamp: string; // ISO string
  amountMl: number;
  container: 'glass_250' | 'bottle_500' | 'flask_750' | 'custom';
  notes?: string;
}

// 2. Sleep
export interface SleepRecord {
  id: string;
  date: string; // YYYY-MM-DD
  bedtime: string; // HH:mm
  wakeTime: string; // HH:mm
  durationMinutes: number;
  quality: number; // 1-5
  notes?: string;
}

// 3. Nutrition (Gentle, Non-Restrictive)
export interface MealRecord {
  id: string;
  date: string; // YYYY-MM-DD
  time?: string; // HH:mm
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  completed: boolean;
  timestamp: string; // ISO string
  description?: string;
  notes?: string;
}

// 4. Movement (Activities & Workouts)
export interface MovementActivity {
  id: string;
  date: string; // YYYY-MM-DD
  time?: string; // HH:mm
  timestamp: string; // ISO string
  activityType: 'walking' | 'running' | 'calisthenics' | 'cycling' | 'swimming' | 'stretching' | 'sports' | 'custom';
  activityName: string;
  durationMinutes: number;
  intensity?: 'light' | 'moderate' | 'high';
  notes?: string;
}

// 5. Daily Vitality & Wellbeing Observations
export interface DailyVitalityObservation {
  id: string;
  date: string; // YYYY-MM-DD
  energyLevel: number; // 1-10
  wellbeing: number; // 1-10
  restRecovery: number; // 1-10
  physicalReadiness: number; // 1-10
  moodState: 'calm' | 'focused' | 'energized' | 'tired' | 'stressed' | 'balanced';
  notes?: string;
}

export interface DailyHealthRecord {
  date: string;
  sleepHours: number;
  sleepQuality: number; // 1-5
  hydrationGlasses: number; // 250ml each
  meals: {
    breakfast: boolean;
    lunch: boolean;
    dinner: boolean;
    mindfulEating: boolean;
  };
  movementMinutes: number;
  workoutCompleted: boolean;
  workoutType: string;
}
