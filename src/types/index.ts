export type MoodType = 'locked_in' | 'deep_focus' | 'energized' | 'calm_flow' | 'creative' | 'recharging';

export type NavTab = 
  | 'dashboard'
  | 'wallpaper'
  | 'tracker'
  | 'promises'
  | 'habits'
  | 'studies'
  | 'health'
  | 'reflections'
  | 'weekly_audit'
  | 'monthly_review'
  | 'life_audit'
  | 'manifesto'
  | 'music'
  | 'settings';

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

export interface AudioStation {
  id: string;
  name: string;
  genre: string;
  duration: string;
  type: 'youtube' | 'spotify';
  embedSrc: string; // The ready-to-embed URL or iframe source
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
  selectedWallpaper: string;
}
