export type NavView =
  | 'dashboard'
  | 'daily-tracker'
  | 'promises'
  | 'habits'
  | 'studies'
  | 'health'
  | 'reflections'
  | 'life-audit'
  | 'music'
  | 'settings';

export interface Habit {
  id: string;
  title: string;
  category: 'discipline' | 'mind' | 'body' | 'craft' | 'spirit';
  streak: number;
  completions: Record<string, boolean>; // dateKey ('YYYY-MM-DD') -> boolean
}

export interface StudySession {
  id: string;
  date: string;
  subject: string;
  topic?: string;
  durationMinutes: number;
  focusRating: number;
  notes?: string;
}

export interface PromiseItem {
  id: string;
  title: string;
  category: 'sacred' | 'discipline' | 'growth';
  whyItMatters: string;
  consequenceIfBroken: string;
  streak: number;
  history: Record<string, 'kept' | 'broken' | 'excused'>;
}

export interface DailyLog {
  date: string;
  vibe?: string;
  waterGlasses: number;
  sleepHours: number;
  movementRating: number; // 0-100
  studyMinutes: number;
  quickJournal?: string;
  checklist: Record<string, boolean>;
  ratingOutOfTen?: number;
  morningPriming?: string;
  eveningWin?: string;
  eveningObstacle?: string;
  eveningLesson?: string;
  livedStandard?: boolean;
}

export interface LifeDimension {
  id: string;
  name: string;
  score: number; // 0-10
}

export interface AudioTrack {
  id: string;
  title: string;
  genre: string;
  duration: string;
  type: 'synth' | 'ambient' | 'custom' | 'stream';
  streamUrl?: string;
}
