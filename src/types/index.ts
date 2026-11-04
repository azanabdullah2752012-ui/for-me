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
}

export interface HabitItem {
  id: string;
  name: string;
  completed: boolean;
  streak: number;
  category?: 'study' | 'wellness' | 'mind' | 'discipline';
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

export interface StudySession {
  id: string;
  subject: string;
  durationSeconds: number;
  timestamp: string;
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

// ── CUSTOM TRACKER SYSTEM ──
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
}

// ── ACADEMICS & GRADES ──
export interface GradeItem {
  id: string;
  subject: string;
  title: string;
  score: number;
  total: number;
  date: string;
}

// ── GOALS & MILESTONES ──
export interface GoalMilestone {
  id: string;
  text: string;
  completed: boolean;
}

export interface GoalItem {
  id: string;
  title: string;
  category: 'academics' | 'health' | 'career' | 'discipline' | 'growth';
  targetDate: string;
  progressPercent: number;
  status: 'active' | 'completed' | 'paused';
  milestones: GoalMilestone[];
}

// ── TIME AUDIT ──
export interface TimeRecord {
  date: string; // YYYY-MM-DD
  productiveMinutes: number;
  wastedMinutes: number;
  neutralMinutes: number;
  screenTimeHours: number;
  distractionNotes?: string;
}

// ── CONSTRUCTIVE PHYSICAL ACCOUNTABILITY ──
export interface AccountabilityIncident {
  id: string;
  date: string;
  targetName: string;
  targetExpected: string;
  actualAchieved: string;
  cause?: string;
  prescribedConsequence: {
    type: 'pushups' | 'pullups' | 'workout' | 'cold_shower' | 'distraction_ban';
    description: string;
    quantity: number;
    unit: string;
  };
  status: 'pending_review' | 'approved' | 'completed' | 'adjusted';
  completedAt?: string;
}

// ── PERSONAL GROWTH REFLECTIONS ──
export interface PersonalGrowthRating {
  date: string;
  happinessRating: number; // 1-10
  confidenceRating: number; // 1-10
  note?: string;
}

export interface LessonLearned {
  id: string;
  date: string;
  title: string;
  reflection: string;
  category: string;
}

// ── DAILY HEALTH ADVANCED ──
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
