export type MoodType = 'locked_in' | 'deep_focus' | 'energized' | 'calm_flow' | 'creative' | 'recharging';

export type AppTheme = 'dark' | 'light';

export type CosmicPalette = 
  | 'cosmic-royal' 
  | 'celestial-cyan' 
  | 'supernova-sunset' 
  | 'nocturne-silver'
  | 'cyberpunk-neon'
  | 'solar-gold'
  | 'emerald-aurora'
  | 'pure-pitch-black';

export type WaveSpeed = 'frozen' | 'calm' | 'balanced' | 'dynamic';
export type WaveAmplitude = 'subtle' | 'majestic' | 'dramatic';
export type WaveGeometry = 'dunes' | 'aurora' | 'mountains' | 'ocean';
export type WaveLayerDensity = 'airy' | 'deep' | 'dense';
export type HorizonHeight = 'low' | 'balanced' | 'high';
export type ClockFontStyle = 'tabular' | 'serif' | 'mono' | 'minimal';
export type ClockSize = 'compact' | 'standard' | 'heroic';
export type ClockPosition = 'zenith' | 'center' | 'bottom';
export type ClockDivider = 'colon' | 'dot' | 'space';
export type ClockColor = 'palette' | 'white' | 'gold' | 'cyan' | 'rose';
export type CelestialBodyType = 'none' | 'crescent-moon' | 'ringed-planet' | 'eclipse-corona' | 'blood-moon' | 'pulsar-star';
export type CelestialPosition = 'default' | 'upper-right' | 'zenith-center' | 'upper-left';
export type StarDensity = 'sparse' | 'balanced' | 'dense' | 'galaxy';
export type NebulaIntensity = 'subtle' | 'vivid' | 'deep';

export interface WallpaperSettings {
  palette: CosmicPalette;
  speed: WaveSpeed;
  amplitude: WaveAmplitude;
  waveGeometry: WaveGeometry;
  waveLayerDensity: WaveLayerDensity;
  horizonHeight?: HorizonHeight;
  waveStrokeOpacity?: number;
  interactiveParallax?: boolean;
  
  // Background Celestial Elements
  celestialBody: CelestialBodyType;
  celestialPosition?: CelestialPosition;
  celestialScaleMultiplier?: number;
  rotationSpeed?: 'static' | 'slow' | 'standard' | 'fast';
  showNebulaDust: boolean;
  nebulaIntensity?: NebulaIntensity;
  showConstellations: boolean;
  showComet: boolean;
  shootingStarMode: 'off' | 'occasional' | 'meteor-shower';
  showStars: boolean;
  starDensity?: StarDensity;
  showCrossStars: boolean;
  showOrbitalTrack: boolean;
  showMeridian: boolean;

  // Clock Customization
  clockFontStyle: ClockFontStyle;
  clockSize: ClockSize;
  clockPosition?: ClockPosition;
  clockDivider?: ClockDivider;
  clockColor?: ClockColor;
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
  startHour?: number;
  endHour?: number;
  description: string;
  iconType: 'morning' | 'afternoon' | 'evening' | 'night' | 'custom';
  colorTag?: string;
}

export type PomodoroPhase = 'idle' | 'focus' | 'break' | 'paused';

export interface PomodoroSettings {
  focusDurationMinutes: number;
  breakDurationMinutes: number;
  displayMode: 'telemetry' | 'numbers';
  autoStartBreaks: boolean;
  soundEnabled: boolean;
}

export interface UserProfile {
  name: string;
  motto?: string;
  defaultFocusTopic?: string;
  defaultFocusMode?: string;
}
