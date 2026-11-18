export type MoodType = 'locked_in' | 'deep_focus' | 'energized' | 'calm_flow' | 'creative' | 'recharging';

export type AppTheme = 'dark' | 'light';

export type CosmicPalette = 
  | 'cosmic-royal' 
  | 'celestial-cyan' 
  | 'supernova-sunset' 
  | 'nocturne-silver'
  | 'cyberpunk-neon'
  | 'solar-gold';
export type WaveSpeed = 'frozen' | 'calm' | 'balanced' | 'dynamic';
export type WaveAmplitude = 'subtle' | 'majestic' | 'dramatic';
export type WaveGeometry = 'dunes' | 'aurora' | 'mountains' | 'ocean';
export type WaveLayerDensity = 'airy' | 'deep' | 'dense';
export type ClockFontStyle = 'tabular' | 'serif' | 'mono' | 'minimal';
export type ClockSize = 'compact' | 'standard' | 'heroic';
export type CelestialBodyType = 'none' | 'crescent-moon' | 'ringed-planet' | 'eclipse-corona';

export interface WallpaperSettings {
  palette: CosmicPalette;
  speed: WaveSpeed;
  amplitude: WaveAmplitude;
  waveGeometry: WaveGeometry;
  waveLayerDensity: WaveLayerDensity;
  
  // Background Celestial Elements
  celestialBody: CelestialBodyType;
  showNebulaDust: boolean;
  showConstellations: boolean;
  showComet: boolean;
  shootingStarMode: 'off' | 'occasional' | 'meteor-shower';
  showStars: boolean;
  showCrossStars: boolean;
  showOrbitalTrack: boolean;
  showMeridian: boolean;

  // Clock Customization
  clockFontStyle: ClockFontStyle;
  clockSize: ClockSize;
  clockFormat: '12h' | '24h';
  showSeconds: boolean;
  showDate: boolean;
  showGreeting: boolean;
  clockHalo: 'none' | 'subtle' | 'pulsar';
}

export type WallpaperTheme =
  // 3 Master Celestial Realms
  | 'cosmic-cliffs'        // James Webb Carina Nebula
  | 'pillars-of-creation' // Eagle Nebula M16
  | 'deep-space';         // James Webb Ultra Deep Field

export interface DailyTask {
  id: string;
  text: string;
  completed: boolean;
  completedAt?: string;
}

export interface HabitItem {
  id: string;
  name: string;
  completed: boolean;
  streak: number;
}

export interface StudySession {
  id: string;
  subject: string;
  topic?: string;
  mode?: string;
  durationSeconds: number;
  timestamp: string;
}

export interface RoutineBlock {
  id: string;
  title: string;
  timeRange: string;
  description: string;
  iconType: 'morning' | 'afternoon' | 'evening' | 'night' | 'custom';
}

export interface UserProfile {
  name: string;
  motto?: string;
  defaultFocusTopic?: string;
  defaultFocusMode?: string;
}
