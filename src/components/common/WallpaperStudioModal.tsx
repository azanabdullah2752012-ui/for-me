import React, { useState } from 'react';
import { 
  X, 
  Waves, 
  Sparkles, 
  Sliders, 
  Clock, 
  RotateCcw,
  Moon,
  Check,
  Palette,
  Sun
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { 
  CosmicPalette, 
  WaveGeometry, 
  WaveLayerDensity, 
  CelestialBodyType, 
  CelestialPosition,
  HorizonHeight,
  ClockFontStyle, 
  ClockPosition,
  ClockDivider,
  ClockColor,
  WallpaperSettings 
} from '../../types';

interface WallpaperStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type StudioSection = 'presets' | 'palettes' | 'celestial' | 'waves' | 'clock';

interface MasterThemePreset {
  id: string;
  name: string;
  tagline: string;
  accent: string;
  gradient: string[];
  settings: Partial<WallpaperSettings>;
}

const MASTER_PRESETS: MasterThemePreset[] = [
  {
    id: 'deep-space-obsidian',
    name: 'Deep Space Obsidian',
    tagline: 'Luminous Lavender & Crescent Moon',
    accent: '#a855f7',
    gradient: ['#060814', '#2d1252', '#7c3aed', '#ede9fe'],
    settings: {
      palette: 'cosmic-royal',
      celestialBody: 'crescent-moon',
      celestialPosition: 'default',
      celestialScaleMultiplier: 1.0,
      rotationSpeed: 'standard',
      waveGeometry: 'dunes',
      speed: 'balanced',
      amplitude: 'majestic',
      waveLayerDensity: 'deep',
      horizonHeight: 'balanced',
      clockFontStyle: 'tabular',
      clockHalo: 'pulsar',
      clockColor: 'palette',
      clockPosition: 'center',
      clockDivider: 'colon',
      showConstellations: true,
      showComet: true,
      showNebulaDust: true,
      starDensity: 'balanced',
      shootingStarMode: 'occasional',
    },
  },
  {
    id: 'cyberpunk-neon',
    name: 'Cyberpunk Neon',
    tagline: 'High-Voltage Cyan & Ringed Gas Giant',
    accent: '#06b6d4',
    gradient: ['#06000e', '#3b0764', '#06b6d4', '#f43f5e'],
    settings: {
      palette: 'cyberpunk-neon',
      celestialBody: 'ringed-planet',
      celestialPosition: 'upper-right',
      celestialScaleMultiplier: 1.15,
      rotationSpeed: 'fast',
      waveGeometry: 'aurora',
      speed: 'dynamic',
      amplitude: 'dramatic',
      waveLayerDensity: 'dense',
      horizonHeight: 'balanced',
      clockFontStyle: 'mono',
      clockHalo: 'pulsar',
      clockColor: 'cyan',
      clockPosition: 'center',
      clockDivider: 'colon',
      showCrossStars: true,
      showOrbitalTrack: true,
      starDensity: 'dense',
      shootingStarMode: 'meteor-shower',
    },
  },
  {
    id: 'emerald-borealis',
    name: 'Emerald Borealis',
    tagline: 'Northern Aurora Ribbons & Pulsar Star',
    accent: '#10b981',
    gradient: ['#010d05', '#064e3b', '#10b981', '#a7f3d0'],
    settings: {
      palette: 'emerald-aurora',
      celestialBody: 'pulsar-star',
      celestialPosition: 'zenith-center',
      celestialScaleMultiplier: 1.1,
      rotationSpeed: 'fast',
      waveGeometry: 'aurora',
      speed: 'balanced',
      amplitude: 'majestic',
      waveLayerDensity: 'dense',
      horizonHeight: 'balanced',
      clockFontStyle: 'minimal',
      clockHalo: 'pulsar',
      clockColor: 'cyan',
      clockPosition: 'center',
      clockDivider: 'dot',
      showConstellations: true,
      showComet: true,
      starDensity: 'galaxy',
      shootingStarMode: 'occasional',
    },
  },
  {
    id: 'sunset-dunes',
    name: 'Sunset Dunes',
    tagline: 'Velvet Crimson & Solar Eclipse Corona',
    accent: '#f43f5e',
    gradient: ['#0a0208', '#771146', '#e11d48', '#f59e0b'],
    settings: {
      palette: 'supernova-sunset',
      celestialBody: 'eclipse-corona',
      celestialPosition: 'zenith-center',
      celestialScaleMultiplier: 1.0,
      rotationSpeed: 'standard',
      waveGeometry: 'dunes',
      speed: 'balanced',
      amplitude: 'majestic',
      waveLayerDensity: 'deep',
      horizonHeight: 'balanced',
      clockFontStyle: 'serif',
      clockHalo: 'subtle',
      clockColor: 'gold',
      clockPosition: 'center',
      clockDivider: 'colon',
      showNebulaDust: true,
      showComet: true,
      starDensity: 'balanced',
      shootingStarMode: 'occasional',
    },
  },
  {
    id: 'blood-moon-totality',
    name: 'Blood Moon Totality',
    tagline: 'Eerie Ruby Lunar Eclipse & Desert Swells',
    accent: '#ef4444',
    gradient: ['#1c0404', '#450a0a', '#b91c1c', '#fca5a5'],
    settings: {
      palette: 'supernova-sunset',
      celestialBody: 'blood-moon',
      celestialPosition: 'upper-left',
      celestialScaleMultiplier: 1.1,
      rotationSpeed: 'slow',
      waveGeometry: 'dunes',
      speed: 'calm',
      amplitude: 'dramatic',
      waveLayerDensity: 'deep',
      horizonHeight: 'balanced',
      clockFontStyle: 'serif',
      clockHalo: 'pulsar',
      clockColor: 'rose',
      clockPosition: 'center',
      clockDivider: 'dot',
      showCrossStars: true,
      starDensity: 'balanced',
      shootingStarMode: 'occasional',
    },
  },
  {
    id: 'nord-frost',
    name: 'Nord Frost',
    tagline: 'Glacial Sapphire & Shimmering Auroral Silk',
    accent: '#38bdf8',
    gradient: ['#020712', '#083358', '#0284c7', '#ecfeff'],
    settings: {
      palette: 'celestial-cyan',
      celestialBody: 'ringed-planet',
      celestialPosition: 'upper-right',
      celestialScaleMultiplier: 0.95,
      rotationSpeed: 'slow',
      waveGeometry: 'aurora',
      speed: 'calm',
      amplitude: 'majestic',
      waveLayerDensity: 'dense',
      horizonHeight: 'low',
      clockFontStyle: 'minimal',
      clockHalo: 'none',
      clockColor: 'white',
      clockPosition: 'center',
      clockDivider: 'colon',
      showConstellations: true,
      showCrossStars: true,
      starDensity: 'dense',
      shootingStarMode: 'occasional',
    },
  },
  {
    id: 'monochrome-mineral',
    name: 'Monochrome Mineral',
    tagline: 'Architectural Platinum & Deep Void',
    accent: '#a1a1aa',
    gradient: ['#030306', '#181824', '#71717a', '#ffffff'],
    settings: {
      palette: 'nocturne-silver',
      celestialBody: 'none',
      celestialPosition: 'default',
      celestialScaleMultiplier: 1.0,
      rotationSpeed: 'static',
      waveGeometry: 'mountains',
      speed: 'calm',
      amplitude: 'subtle',
      waveLayerDensity: 'airy',
      horizonHeight: 'balanced',
      clockFontStyle: 'tabular',
      clockHalo: 'none',
      clockColor: 'white',
      clockPosition: 'center',
      clockDivider: 'space',
      showConstellations: false,
      showComet: false,
      showNebulaDust: false,
      starDensity: 'sparse',
      shootingStarMode: 'off',
    },
  },
  {
    id: 'pure-pitch-black',
    name: 'Pitch Black Void',
    tagline: 'OLED Zero-Light Battery Sanctuary',
    accent: '#71717a',
    gradient: ['#000000', '#050505', '#171717', '#e5e5e5'],
    settings: {
      palette: 'pure-pitch-black',
      celestialBody: 'crescent-moon',
      celestialPosition: 'upper-right',
      celestialScaleMultiplier: 0.8,
      rotationSpeed: 'slow',
      waveGeometry: 'dunes',
      speed: 'frozen',
      amplitude: 'subtle',
      waveLayerDensity: 'airy',
      horizonHeight: 'low',
      clockFontStyle: 'tabular',
      clockHalo: 'none',
      clockColor: 'white',
      clockPosition: 'center',
      clockDivider: 'colon',
      showConstellations: false,
      showComet: false,
      showNebulaDust: false,
      starDensity: 'sparse',
      shootingStarMode: 'off',
    },
  },
];

interface PaletteOption {
  id: CosmicPalette;
  name: string;
  previewColors: string[];
}

const PALETTES: PaletteOption[] = [
  {
    id: 'cosmic-royal',
    name: 'Cosmic Royal',
    previewColors: ['#060814', '#2d1252', '#7c3aed', '#ede9fe'],
  },
  {
    id: 'cyberpunk-neon',
    name: 'Cyberpunk Neon',
    previewColors: ['#06000e', '#3b0764', '#06b6d4', '#f43f5e'],
  },
  {
    id: 'emerald-aurora',
    name: 'Emerald Aurora',
    previewColors: ['#010d05', '#064e3b', '#10b981', '#a7f3d0'],
  },
  {
    id: 'supernova-sunset',
    name: 'Supernova Sunset',
    previewColors: ['#12050e', '#6e133e', '#e11d48', '#fffbeb'],
  },
  {
    id: 'celestial-cyan',
    name: 'Celestial Cyan',
    previewColors: ['#040a14', '#0e3f57', '#0284c7', '#ecfeff'],
  },
  {
    id: 'solar-gold',
    name: 'Solar Gold',
    previewColors: ['#0d0500', '#5e2500', '#d97706', '#fef08a'],
  },
  {
    id: 'nocturne-silver',
    name: 'Nocturne Silver',
    previewColors: ['#050508', '#22222f', '#707090', '#ffffff'],
  },
  {
    id: 'pure-pitch-black',
    name: 'Pitch Black (OLED)',
    previewColors: ['#000000', '#0a0a0a', '#262626', '#ffffff'],
  },
];

const CELESTIAL_BODIES: { id: CelestialBodyType; name: string; desc: string }[] = [
  { id: 'ringed-planet', name: 'Ringed Gas Giant', desc: 'True Cassini rings with moonlet' },
  { id: 'crescent-moon', name: 'Crescent Moon', desc: 'Slender illuminated limb & earthshine' },
  { id: 'eclipse-corona', name: 'Solar Eclipse', desc: 'Totality disc with coronal flare rays' },
  { id: 'blood-moon', name: 'Blood Moon', desc: 'Ruby total lunar eclipse with crimson rim' },
  { id: 'pulsar-star', name: 'Neutron Pulsar', desc: 'Spinning magnetic polar plasma beams' },
  { id: 'none', name: 'Deep Space Void', desc: 'Vast open sky without celestial centerpiece' },
];

const WAVE_GEOMETRIES: { id: WaveGeometry; name: string; desc: string }[] = [
  { id: 'dunes', name: 'Silky Dunes', desc: 'Harmonic desert sand ridges' },
  { id: 'aurora', name: 'Aurora Ribbons', desc: 'Translucent shimmering sky curtains' },
  { id: 'mountains', name: 'Alpine Peaks', desc: 'Angular geometric mountain horizons' },
  { id: 'ocean', name: 'Ocean Swells', desc: 'Deep rhythmic tidal rollers' },
];

const CLOCK_FONTS: { id: ClockFontStyle; label: string; preview: string }[] = [
  { id: 'tabular', label: 'Tabular Modern', preview: '12:00' },
  { id: 'serif', label: 'Editorial Luxury', preview: '12:00' },
  { id: 'mono', label: 'Tech Monospace', preview: '12:00' },
  { id: 'minimal', label: 'Minimalist Light', preview: '12:00' },
];

export const WallpaperStudioModal: React.FC<WallpaperStudioModalProps> = ({ isOpen, onClose }) => {
  const { wallpaperSettings, updateWallpaperSettings, profile, updateProfile, appTheme, toggleAppTheme } = useData();
  const isLight = appTheme === 'light';
  const [activeSection, setActiveSection] = useState<StudioSection>('presets');

  if (!isOpen) return null;

  const handleResetDefaults = () => {
    updateWallpaperSettings({
      palette: 'cosmic-royal',
      speed: 'balanced',
      amplitude: 'majestic',
      waveGeometry: 'dunes',
      waveLayerDensity: 'deep',
      horizonHeight: 'balanced',
      waveStrokeOpacity: 0.8,
      interactiveParallax: true,
      celestialBody: 'crescent-moon',
      celestialPosition: 'default',
      celestialScaleMultiplier: 1.0,
      rotationSpeed: 'standard',
      showNebulaDust: true,
      nebulaIntensity: 'vivid',
      showConstellations: true,
      showComet: true,
      shootingStarMode: 'occasional',
      showStars: true,
      starDensity: 'balanced',
      showCrossStars: false,
      showOrbitalTrack: false,
      showMeridian: false,
      clockFontStyle: 'tabular',
      clockSize: 'standard',
      clockPosition: 'center',
      clockDivider: 'colon',
      clockColor: 'palette',
      clockFormat: '12h',
      showSeconds: true,
      showDate: true,
      showGreeting: true,
      clockHalo: 'pulsar',
    });
  };

  return (
    <div className="fixed inset-0 z-50 pointer-events-none select-none">
      {/* 1. Transparent Backdrop — wallpaper remains 100% visible while adjusting */}
      <div 
        className="absolute inset-0 bg-black/15 sm:bg-black/10 backdrop-blur-[1px] pointer-events-auto transition-opacity" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      {/* 2. Floating Right-Side Live Inspector Drawer — macOS Safe & Non-Colliding */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Wallpaper Studio Inspector"
        className={`absolute top-8 sm:top-10 bottom-3 sm:bottom-6 right-2 sm:right-6 w-[calc(100%-1rem)] sm:w-[460px] rounded-3xl border shadow-[0_24px_80px_rgba(0,0,0,0.85)] backdrop-blur-3xl flex flex-col z-10 pointer-events-auto transition-all animate-fadeIn overflow-hidden ${
          isLight
            ? 'bg-white/95 border-zinc-200/90 text-zinc-900'
            : 'bg-[#090b16]/95 border-white/[0.12] text-white'
        }`}
      >
        {/* Drawer Header with Clean Breathing Space */}
        <div className={`flex items-center justify-between p-4 px-5 border-b shrink-0 ${
          isLight ? 'border-zinc-200/80 bg-white/70' : 'border-white/[0.08] bg-white/[0.02]'
        }`}>
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-xl border flex items-center justify-center shadow-sm ${
              isLight ? 'bg-zinc-100 border-zinc-200 text-zinc-800' : 'bg-white/[0.08] border-white/15 text-zinc-200'
            }`}>
              <Sliders className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xs font-display uppercase tracking-widest font-bold">
                  Wallpaper Studio
                </h2>
                <span className={`text-[9px] font-mono font-medium px-2 py-0.5 rounded-full border ${
                  isLight ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-emerald-500/15 text-emerald-300 border-emerald-400/30'
                }`}>
                  Live Control
                </span>
              </div>
              <p className={`text-[10px] font-sans ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                Granular celestial, wave &amp; telemetry controls
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handleResetDefaults}
              aria-label="Reset to default settings"
              title="Reset to Defaults"
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                isLight ? 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600' : 'bg-white/[0.06] hover:bg-white/[0.12] text-zinc-400 hover:text-white'
              }`}
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close Wallpaper Studio"
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                isLight ? 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600' : 'bg-white/[0.06] hover:bg-white/[0.12] text-zinc-400 hover:text-white'
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Section Navigation Tabs: 5-Column Grid, Zero Overflow, Zero Clipping */}
        <div className={`p-2 border-b shrink-0 ${
          isLight ? 'border-zinc-200/90 bg-zinc-50/70' : 'border-white/[0.06] bg-black/30'
        }`}>
          <div className={`grid grid-cols-5 gap-1 p-1 rounded-2xl ${
            isLight ? 'bg-zinc-200/60' : 'bg-white/[0.04]'
          }`}>
            {[
              { id: 'presets', label: 'Realms', icon: Sparkles },
              { id: 'palettes', label: 'Aura', icon: Palette },
              { id: 'celestial', label: 'Planet', icon: Moon },
              { id: 'waves', label: 'Waves', icon: Waves },
              { id: 'clock', label: 'Clock', icon: Clock },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeSection === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveSection(tab.id as StudioSection)}
                  className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl text-[10px] font-sans font-medium transition-all cursor-pointer ${
                    isActive
                      ? isLight
                        ? 'bg-white text-zinc-950 font-bold shadow-sm'
                        : 'bg-white text-zinc-950 font-bold shadow-[0_2px_12px_rgba(255,255,255,0.18)]'
                      : isLight
                        ? 'hover:bg-white/60 text-zinc-600 hover:text-zinc-950'
                        : 'hover:bg-white/[0.06] text-zinc-400 hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 mb-1 shrink-0" />
                  <span className="truncate tracking-tight">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">

          {/* ═════════════════════════════════════════════════════════ */}
          {/* SECTION 1: MASTER 1-TAP CURATED REALMS                   */}
          {/* ═════════════════════════════════════════════════════════ */}
          {activeSection === 'presets' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className={`text-[11px] font-display uppercase tracking-wider font-semibold ${
                  isLight ? 'text-zinc-700' : 'text-zinc-300'
                }`}>
                  Curated Aesthetic Realms
                </span>
                <span className={`text-[10px] font-mono ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                  1-Tap Instant Transformation
                </span>
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {MASTER_PRESETS.map((preset) => {
                  const isCurrent = wallpaperSettings.palette === preset.settings.palette &&
                                    wallpaperSettings.celestialBody === preset.settings.celestialBody &&
                                    wallpaperSettings.waveGeometry === preset.settings.waveGeometry;
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => updateWallpaperSettings(preset.settings)}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between group ${
                        isCurrent
                          ? isLight
                            ? 'bg-zinc-100 border-zinc-900 ring-1 ring-zinc-900 shadow-md'
                            : 'bg-white/[0.08] border-white/40 shadow-lg'
                          : isLight
                            ? 'bg-white hover:bg-zinc-50 border-zinc-200/90'
                            : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {/* Gradient Thumbnail */}
                        <div 
                          className="w-10 h-10 rounded-xl border border-white/20 shrink-0 shadow-sm flex items-center justify-center overflow-hidden"
                          style={{
                            background: `linear-gradient(135deg, ${preset.gradient.join(', ')})`,
                          }}
                        >
                          {isCurrent && <Check className="w-4 h-4 text-white drop-shadow-md stroke-[3]" />}
                        </div>
                        <div>
                          <div className={`text-xs font-display font-bold ${
                            isCurrent 
                              ? isLight ? 'text-zinc-950 font-bold' : 'text-white' 
                              : isLight ? 'text-zinc-800' : 'text-zinc-200'
                          }`}>
                            {preset.name}
                          </div>
                          <div className={`text-[10px] font-sans ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                            {preset.tagline}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0 pl-2">
                        {preset.gradient.map((c, i) => (
                          <div 
                            key={i} 
                            className="w-2.5 h-2.5 rounded-full border border-black/20" 
                            style={{ backgroundColor: c }} 
                          />
                        ))}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* ═════════════════════════════════════════════════════════ */}
          {/* SECTION 2: ATMOSPHERE & COLOR PALETTES                   */}
          {/* ═════════════════════════════════════════════════════════ */}
          {activeSection === 'palettes' && (
            <div className="space-y-5 animate-fadeIn">
              {/* Color Palettes Swatches Grid */}
              <div className="space-y-2.5">
                <span className={`text-[11px] font-display uppercase tracking-wider font-semibold block ${
                  isLight ? 'text-zinc-700' : 'text-zinc-300'
                }`}>
                  Harmonic Tonal Palette
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {PALETTES.map((p) => {
                    const isSelected = wallpaperSettings.palette === p.id;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => updateWallpaperSettings({ palette: p.id })}
                        className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col gap-1.5 ${
                          isSelected
                            ? isLight
                              ? 'bg-zinc-100 border-zinc-900 ring-1 ring-zinc-900 shadow-sm'
                              : 'bg-white/[0.08] border-white/40 shadow-sm'
                            : isLight
                              ? 'bg-white hover:bg-zinc-50 border-zinc-200'
                              : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`text-[11px] font-semibold ${
                            isSelected ? isLight ? 'text-zinc-950' : 'text-white' : isLight ? 'text-zinc-700' : 'text-zinc-300'
                          }`}>
                            {p.name}
                          </span>
                          {isSelected && <Check className="w-3 h-3 text-emerald-400" />}
                        </div>
                        <div className="flex items-center gap-1">
                          {p.previewColors.map((c, i) => (
                            <span 
                              key={i} 
                              className="w-3.5 h-3.5 rounded-full border border-black/20" 
                              style={{ backgroundColor: c }} 
                            />
                          ))}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Theme Mode Switch */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="flex items-center justify-between text-xs">
                  <span className={`text-[11px] font-display uppercase tracking-wider font-semibold ${
                    isLight ? 'text-zinc-700' : 'text-zinc-300'
                  }`}>
                    Sanctuary Lighting Mode
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => { if (isLight) toggleAppTheme(); }}
                    className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      !isLight
                        ? 'bg-white text-zinc-950 font-bold border-white'
                        : 'bg-zinc-100 text-zinc-600 border-zinc-200 hover:bg-zinc-200'
                    }`}
                  >
                    <Moon className="w-3.5 h-3.5" />
                    <span className="text-xs">Obsidian Dark</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => { if (!isLight) toggleAppTheme(); }}
                    className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      isLight
                        ? 'bg-zinc-900 text-white font-bold border-zinc-900'
                        : 'bg-white/[0.04] text-zinc-300 border-white/[0.08] hover:bg-white/[0.08]'
                    }`}
                  >
                    <Sun className="w-3.5 h-3.5" />
                    <span className="text-xs">Creamy Light</span>
                  </button>
                </div>
              </div>

              {/* Star Density Selector */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="flex items-center justify-between text-xs">
                  <span className={`text-[11px] font-display uppercase tracking-wider font-semibold ${
                    isLight ? 'text-zinc-700' : 'text-zinc-300'
                  }`}>
                    Starfield Density
                  </span>
                  <span className={`text-[10px] font-mono capitalize ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                    {wallpaperSettings.starDensity || 'balanced'}
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-1.5">
                  {(['sparse', 'balanced', 'dense', 'galaxy'] as const).map((den) => {
                    const isSelected = (wallpaperSettings.starDensity || 'balanced') === den;
                    return (
                      <button
                        key={den}
                        type="button"
                        onClick={() => updateWallpaperSettings({ starDensity: den })}
                        className={`py-2 px-1 rounded-xl border text-center transition-all cursor-pointer text-xs capitalize font-medium ${
                          isSelected
                            ? isLight ? 'bg-zinc-900 text-white font-bold border-zinc-900' : 'bg-white text-zinc-950 font-bold border-white'
                            : isLight ? 'bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700' : 'bg-white/[0.03] hover:bg-white/[0.08] border-white/[0.06] text-zinc-400'
                        }`}
                      >
                        {den}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Volumetric Nebula Dust Intensity */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="flex items-center justify-between text-xs">
                  <span className={`text-[11px] font-display uppercase tracking-wider font-semibold ${
                    isLight ? 'text-zinc-700' : 'text-zinc-300'
                  }`}>
                    Volumetric Nebula Intensity
                  </span>
                  <span className={`text-[10px] font-mono capitalize ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                    {wallpaperSettings.nebulaIntensity || 'vivid'}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {(['subtle', 'vivid', 'deep'] as const).map((neb) => {
                    const isSelected = (wallpaperSettings.nebulaIntensity || 'vivid') === neb;
                    return (
                      <button
                        key={neb}
                        type="button"
                        onClick={() => updateWallpaperSettings({ nebulaIntensity: neb })}
                        className={`py-2 px-2 rounded-xl border text-center transition-all cursor-pointer text-xs capitalize font-medium ${
                          isSelected
                            ? isLight ? 'bg-zinc-900 text-white font-bold border-zinc-900' : 'bg-white text-zinc-950 font-bold border-white'
                            : isLight ? 'bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700' : 'bg-white/[0.03] hover:bg-white/[0.08] border-white/[0.06] text-zinc-400'
                        }`}
                      >
                        {neb}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ═════════════════════════════════════════════════════════ */}
          {/* SECTION 3: 3D CELESTIAL PLANET & COSMIC PHENOMENA        */}
          {/* ═════════════════════════════════════════════════════════ */}
          {activeSection === 'celestial' && (
            <div className="space-y-5 animate-fadeIn">
              {/* Primary Celestial Body */}
              <div className="space-y-2.5">
                <span className={`text-[11px] font-display uppercase tracking-wider font-semibold block ${
                  isLight ? 'text-zinc-700' : 'text-zinc-300'
                }`}>
                  Primary 3D Celestial Body
                </span>

                <div className="grid grid-cols-2 gap-2">
                  {CELESTIAL_BODIES.map((b) => {
                    const isSelected = (wallpaperSettings.celestialBody || 'crescent-moon') === b.id;
                    return (
                      <button
                        key={b.id}
                        type="button"
                        onClick={() => updateWallpaperSettings({ celestialBody: b.id })}
                        className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? isLight
                              ? 'bg-zinc-100 border-zinc-900 ring-1 ring-zinc-900 shadow-sm'
                              : 'bg-white/[0.08] border-white/40 shadow-sm'
                            : isLight
                              ? 'bg-white hover:bg-zinc-50 border-zinc-200'
                              : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`text-xs font-display font-bold ${
                            isSelected ? isLight ? 'text-zinc-950' : 'text-white' : isLight ? 'text-zinc-700' : 'text-zinc-300'
                          }`}>
                            {b.name}
                          </span>
                          {isSelected && <span className="w-2 h-2 rounded-full bg-emerald-400" />}
                        </div>
                        <span className={`text-[10px] font-sans mt-1 leading-snug ${
                          isLight ? 'text-zinc-500' : 'text-zinc-400'
                        }`}>
                          {b.desc}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Sky Position Customization */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="flex items-center justify-between text-xs">
                  <span className={`text-[11px] font-display uppercase tracking-wider font-semibold ${
                    isLight ? 'text-zinc-700' : 'text-zinc-300'
                  }`}>
                    Sky Placement
                  </span>
                  <span className={`text-[10px] font-mono capitalize ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                    {wallpaperSettings.celestialPosition || 'default'}
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-1.5">
                  {[
                    { id: 'default', label: 'Signature' },
                    { id: 'upper-left', label: 'West' },
                    { id: 'zenith-center', label: 'Zenith' },
                    { id: 'upper-right', label: 'East' },
                  ].map((pos) => {
                    const isSelected = (wallpaperSettings.celestialPosition || 'default') === pos.id;
                    return (
                      <button
                        key={pos.id}
                        type="button"
                        onClick={() => updateWallpaperSettings({ celestialPosition: pos.id as CelestialPosition })}
                        className={`py-2 px-1 rounded-xl border text-center transition-all cursor-pointer text-xs font-medium ${
                          isSelected
                            ? isLight ? 'bg-zinc-900 text-white font-bold border-zinc-900' : 'bg-white text-zinc-950 font-bold border-white'
                            : isLight ? 'bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700' : 'bg-white/[0.03] hover:bg-white/[0.08] border-white/[0.06] text-zinc-400'
                        }`}
                      >
                        {pos.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Celestial Scale Multiplier */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="flex items-center justify-between text-xs">
                  <span className={`text-[11px] font-display uppercase tracking-wider font-semibold ${
                    isLight ? 'text-zinc-700' : 'text-zinc-300'
                  }`}>
                    Celestial Scale
                  </span>
                  <span className={`text-[10px] font-mono ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                    {(wallpaperSettings.celestialScaleMultiplier || 1.0).toFixed(1)}x
                  </span>
                </div>
                <div className="grid grid-cols-5 gap-1.5">
                  {[0.6, 0.8, 1.0, 1.2, 1.4].map((sc) => {
                    const isSelected = Math.abs((wallpaperSettings.celestialScaleMultiplier || 1.0) - sc) < 0.05;
                    return (
                      <button
                        key={sc}
                        type="button"
                        onClick={() => updateWallpaperSettings({ celestialScaleMultiplier: sc })}
                        className={`py-2 px-1 rounded-xl border text-center transition-all cursor-pointer text-xs font-medium tabular-nums ${
                          isSelected
                            ? isLight ? 'bg-zinc-900 text-white font-bold border-zinc-900' : 'bg-white text-zinc-950 font-bold border-white'
                            : isLight ? 'bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700' : 'bg-white/[0.03] hover:bg-white/[0.08] border-white/[0.06] text-zinc-400'
                        }`}
                      >
                        {sc}x
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Axial Rotation Speed */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="flex items-center justify-between text-xs">
                  <span className={`text-[11px] font-display uppercase tracking-wider font-semibold ${
                    isLight ? 'text-zinc-700' : 'text-zinc-300'
                  }`}>
                    Axial Planetary Spin
                  </span>
                  <span className={`text-[10px] font-mono capitalize ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                    {wallpaperSettings.rotationSpeed || 'standard'}
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-1.5">
                  {(['static', 'slow', 'standard', 'fast'] as const).map((r) => {
                    const isSelected = (wallpaperSettings.rotationSpeed || 'standard') === r;
                    return (
                      <button
                        key={r}
                        type="button"
                        onClick={() => updateWallpaperSettings({ rotationSpeed: r })}
                        className={`py-2 px-1 rounded-xl border text-center transition-all cursor-pointer text-xs capitalize font-medium ${
                          isSelected
                            ? isLight ? 'bg-zinc-900 text-white font-bold border-zinc-900' : 'bg-white text-zinc-950 font-bold border-white'
                            : isLight ? 'bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700' : 'bg-white/[0.03] hover:bg-white/[0.08] border-white/[0.06] text-zinc-400'
                        }`}
                      >
                        {r}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Space Phenomena Toggles */}
              <div className="space-y-2.5 pt-2 border-t border-white/10">
                <span className={`text-[11px] font-display uppercase tracking-wider font-semibold block ${
                  isLight ? 'text-zinc-700' : 'text-zinc-300'
                }`}>
                  Astronomical Features
                </span>

                <div className="grid grid-cols-1 gap-2 text-xs">
                  {[
                    { key: 'showConstellations', label: 'Constellation Charts', desc: 'Ursa Major & astronomical chords' },
                    { key: 'showComet', label: 'Cosmic Comet', desc: 'Sweeping ion dust tail across the horizon' },
                    { key: 'showCrossStars', label: 'Diffraction Cross Stars', desc: '4-point optical diamond flares' },
                    { key: 'showOrbitalTrack', label: 'Orbital Arc Track', desc: 'Elliptical planetary telemetry' },
                    { key: 'showMeridian', label: 'Celestial Meridian', desc: 'Vertical astronomical ticks' },
                  ].map((feat) => {
                    const isChecked = Boolean(wallpaperSettings[feat.key as keyof WallpaperSettings]);
                    return (
                      <label 
                        key={feat.key}
                        className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-colors ${
                          isLight ? 'bg-white hover:bg-zinc-50 border-zinc-200' : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06]'
                        }`}
                      >
                        <div>
                          <div className={`font-medium ${isLight ? 'text-zinc-800' : 'text-zinc-200'}`}>
                            {feat.label}
                          </div>
                          <div className={`text-[10px] font-sans ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                            {feat.desc}
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={(e) => updateWallpaperSettings({ [feat.key]: e.target.checked })}
                          className="w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 accent-violet-600 cursor-pointer"
                        />
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Shooting Star Frequency */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="flex items-center justify-between text-xs">
                  <span className={`text-[11px] font-display uppercase tracking-wider font-semibold ${
                    isLight ? 'text-zinc-700' : 'text-zinc-300'
                  }`}>
                    Shooting Star Frequency
                  </span>
                  <span className={`text-[10px] font-mono capitalize ${isLight ? 'text-violet-700' : 'text-violet-300'}`}>
                    {wallpaperSettings.shootingStarMode || 'occasional'}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {(['off', 'occasional', 'meteor-shower'] as const).map((m) => {
                    const isSelected = (wallpaperSettings.shootingStarMode || 'occasional') === m;
                    return (
                      <button
                        key={m}
                        type="button"
                        onClick={() => updateWallpaperSettings({ shootingStarMode: m })}
                        className={`py-2 px-2 rounded-xl border text-center transition-all cursor-pointer text-xs capitalize font-medium ${
                          isSelected
                            ? isLight ? 'bg-zinc-900 text-white font-semibold border-zinc-900' : 'bg-white text-zinc-950 font-semibold border-white'
                            : isLight ? 'bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700' : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06] text-zinc-400'
                        }`}
                      >
                        {m.replace('-', ' ')}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ═════════════════════════════════════════════════════════ */}
          {/* SECTION 4: WAVE TOPOGRAPHY & MOTION PHYSICS              */}
          {/* ═════════════════════════════════════════════════════════ */}
          {activeSection === 'waves' && (
            <div className="space-y-5 animate-fadeIn">
              {/* Wave Geometry */}
              <div className="space-y-2.5">
                <span className={`text-[11px] font-display uppercase tracking-wider font-semibold block ${
                  isLight ? 'text-zinc-700' : 'text-zinc-300'
                }`}>
                  Wave Topographic Geometry
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {WAVE_GEOMETRIES.map((g) => {
                    const isSelected = (wallpaperSettings.waveGeometry || 'dunes') === g.id;
                    return (
                      <button
                        key={g.id}
                        type="button"
                        onClick={() => updateWallpaperSettings({ waveGeometry: g.id })}
                        className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? isLight
                              ? 'bg-zinc-100 border-zinc-900 ring-1 ring-zinc-900 shadow-sm'
                              : 'bg-white/[0.08] border-white/40 shadow-sm'
                            : isLight
                              ? 'bg-white hover:bg-zinc-50 border-zinc-200'
                              : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`text-xs font-display font-bold ${
                            isSelected ? isLight ? 'text-zinc-950' : 'text-white' : isLight ? 'text-zinc-700' : 'text-zinc-300'
                          }`}>
                            {g.name}
                          </span>
                          {isSelected && <span className="w-2 h-2 rounded-full bg-emerald-400" />}
                        </div>
                        <span className={`text-[10px] font-sans mt-1 leading-snug ${
                          isLight ? 'text-zinc-500' : 'text-zinc-400'
                        }`}>
                          {g.desc}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Horizon Height Elevation */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="flex items-center justify-between text-xs">
                  <span className={`text-[11px] font-display uppercase tracking-wider font-semibold ${
                    isLight ? 'text-zinc-700' : 'text-zinc-300'
                  }`}>
                    Horizon Elevation
                  </span>
                  <span className={`text-[10px] font-mono capitalize ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                    {wallpaperSettings.horizonHeight || 'balanced'}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'low', label: 'Vast Sky (Low)' },
                    { id: 'balanced', label: 'Balanced' },
                    { id: 'high', label: 'High Dunes' },
                  ].map((h) => {
                    const isSelected = (wallpaperSettings.horizonHeight || 'balanced') === h.id;
                    return (
                      <button
                        key={h.id}
                        type="button"
                        onClick={() => updateWallpaperSettings({ horizonHeight: h.id as HorizonHeight })}
                        className={`py-2 px-1 rounded-xl border text-center transition-all cursor-pointer text-xs font-medium ${
                          isSelected
                            ? isLight ? 'bg-zinc-900 text-white font-bold border-zinc-900' : 'bg-white text-zinc-950 font-bold border-white'
                            : isLight ? 'bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700' : 'bg-white/[0.03] hover:bg-white/[0.08] border-white/[0.06] text-zinc-400'
                        }`}
                      >
                        {h.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Wave Speed */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="flex items-center justify-between text-xs">
                  <span className={`text-[11px] font-display uppercase tracking-wider font-semibold ${
                    isLight ? 'text-zinc-700' : 'text-zinc-300'
                  }`}>
                    Kinetic Drift Speed
                  </span>
                  <span className={`text-[10px] font-mono capitalize ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                    {wallpaperSettings.speed || 'balanced'}
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-1.5">
                  {(['frozen', 'calm', 'balanced', 'dynamic'] as const).map((s) => {
                    const isSelected = (wallpaperSettings.speed || 'balanced') === s;
                    return (
                      <button
                        key={s}
                        type="button"
                        onClick={() => updateWallpaperSettings({ speed: s })}
                        className={`py-2 px-1 rounded-xl border text-center transition-all cursor-pointer text-xs capitalize font-medium ${
                          isSelected
                            ? isLight ? 'bg-zinc-900 text-white font-semibold border-zinc-900' : 'bg-white text-zinc-950 font-semibold border-white'
                            : isLight ? 'bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700' : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06] text-zinc-400'
                        }`}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Wave Amplitude */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="flex items-center justify-between text-xs">
                  <span className={`text-[11px] font-display uppercase tracking-wider font-semibold ${
                    isLight ? 'text-zinc-700' : 'text-zinc-300'
                  }`}>
                    Wave Amplitude
                  </span>
                  <span className={`text-[10px] font-mono capitalize ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                    {wallpaperSettings.amplitude || 'majestic'}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {(['subtle', 'majestic', 'dramatic'] as const).map((a) => {
                    const isSelected = (wallpaperSettings.amplitude || 'majestic') === a;
                    return (
                      <button
                        key={a}
                        type="button"
                        onClick={() => updateWallpaperSettings({ amplitude: a })}
                        className={`py-2 px-2 rounded-xl border text-center transition-all cursor-pointer text-xs capitalize font-medium ${
                          isSelected
                            ? isLight ? 'bg-zinc-900 text-white font-semibold border-zinc-900' : 'bg-white text-zinc-950 font-semibold border-white'
                            : isLight ? 'bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700' : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06] text-zinc-400'
                        }`}
                      >
                        {a}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Layer Density */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="flex items-center justify-between text-xs">
                  <span className={`text-[11px] font-display uppercase tracking-wider font-semibold ${
                    isLight ? 'text-zinc-700' : 'text-zinc-300'
                  }`}>
                    Stratified Layer Density
                  </span>
                  <span className={`text-[10px] font-mono capitalize ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                    {wallpaperSettings.waveLayerDensity || 'deep'}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'airy', label: 'Airy (3)' },
                    { id: 'deep', label: 'Deep (5)' },
                    { id: 'dense', label: 'Dense (7)' },
                  ].map((d) => {
                    const isSelected = (wallpaperSettings.waveLayerDensity || 'deep') === d.id;
                    return (
                      <button
                        key={d.id}
                        type="button"
                        onClick={() => updateWallpaperSettings({ waveLayerDensity: d.id as WaveLayerDensity })}
                        className={`py-2 px-2 rounded-xl border text-center transition-all cursor-pointer text-xs font-medium ${
                          isSelected
                            ? isLight ? 'bg-zinc-900 text-white font-semibold border-zinc-900' : 'bg-white text-zinc-950 font-semibold border-white'
                            : isLight ? 'bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700' : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06] text-zinc-400'
                        }`}
                      >
                        {d.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Interactive Mouse Parallax Toggle */}
              <div className="pt-2 border-t border-white/10">
                <label className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-colors ${
                  isLight ? 'bg-white hover:bg-zinc-50 border-zinc-200' : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06]'
                }`}>
                  <div>
                    <div className={`font-medium text-xs ${isLight ? 'text-zinc-800' : 'text-zinc-200'}`}>
                      Interactive Cursor Parallax
                    </div>
                    <div className={`text-[10px] font-sans ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                      Gently shifts stars &amp; waves as you move your pointer
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={wallpaperSettings.interactiveParallax !== false}
                    onChange={(e) => updateWallpaperSettings({ interactiveParallax: e.target.checked })}
                    className="w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 accent-violet-600 cursor-pointer"
                  />
                </label>
              </div>
            </div>
          )}

          {/* ═════════════════════════════════════════════════════════ */}
          {/* SECTION 5: CLOCK, DIAL & LIVING MANTRAS                  */}
          {/* ═════════════════════════════════════════════════════════ */}
          {activeSection === 'clock' && (
            <div className="space-y-5 animate-fadeIn">
              {/* Clock Font Style */}
              <div className="space-y-2.5">
                <span className={`text-[11px] font-display uppercase tracking-wider font-semibold block ${
                  isLight ? 'text-zinc-700' : 'text-zinc-300'
                }`}>
                  Clock Typography Face
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {CLOCK_FONTS.map((f) => {
                    const isSelected = (wallpaperSettings.clockFontStyle || 'tabular') === f.id;
                    return (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => updateWallpaperSettings({ clockFontStyle: f.id })}
                        className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? isLight
                              ? 'bg-zinc-100 border-zinc-900 ring-1 ring-zinc-900 shadow-sm'
                              : 'bg-white/[0.08] border-white/40 shadow-sm'
                            : isLight
                              ? 'bg-white hover:bg-zinc-50 border-zinc-200'
                              : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`text-xs font-display font-bold ${
                            isSelected ? isLight ? 'text-zinc-950' : 'text-white' : isLight ? 'text-zinc-700' : 'text-zinc-300'
                          }`}>
                            {f.label}
                          </span>
                          {isSelected && <span className="w-2 h-2 rounded-full bg-emerald-400" />}
                        </div>
                        <span className="text-xl font-bold mt-2 tabular-nums opacity-80">
                          {f.preview}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Clock Size Scale */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="flex items-center justify-between text-xs">
                  <span className={`text-[11px] font-display uppercase tracking-wider font-semibold ${
                    isLight ? 'text-zinc-700' : 'text-zinc-300'
                  }`}>
                    Clock Scale
                  </span>
                  <span className={`text-[10px] font-mono capitalize ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                    {wallpaperSettings.clockSize || 'standard'}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {(['compact', 'standard', 'heroic'] as const).map((sz) => {
                    const isSelected = (wallpaperSettings.clockSize || 'standard') === sz;
                    return (
                      <button
                        key={sz}
                        type="button"
                        onClick={() => updateWallpaperSettings({ clockSize: sz })}
                        className={`py-2 px-2 rounded-xl border text-center transition-all cursor-pointer text-xs capitalize font-medium ${
                          isSelected
                            ? isLight ? 'bg-zinc-900 text-white font-semibold border-zinc-900' : 'bg-white text-zinc-950 font-semibold border-white'
                            : isLight ? 'bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700' : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06] text-zinc-400'
                        }`}
                      >
                        {sz}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Clock Vertical Position */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="flex items-center justify-between text-xs">
                  <span className={`text-[11px] font-display uppercase tracking-wider font-semibold ${
                    isLight ? 'text-zinc-700' : 'text-zinc-300'
                  }`}>
                    Clock Screen Alignment
                  </span>
                  <span className={`text-[10px] font-mono capitalize ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                    {wallpaperSettings.clockPosition || 'center'}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'zenith', label: 'Zenith Upper' },
                    { id: 'center', label: 'True Center' },
                    { id: 'bottom', label: 'Lower Anchor' },
                  ].map((p) => {
                    const isSelected = (wallpaperSettings.clockPosition || 'center') === p.id;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => updateWallpaperSettings({ clockPosition: p.id as ClockPosition })}
                        className={`py-2 px-1 rounded-xl border text-center transition-all cursor-pointer text-xs font-medium ${
                          isSelected
                            ? isLight ? 'bg-zinc-900 text-white font-semibold border-zinc-900' : 'bg-white text-zinc-950 font-semibold border-white'
                            : isLight ? 'bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700' : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06] text-zinc-400'
                        }`}
                      >
                        {p.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Divider Symbol */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="flex items-center justify-between text-xs">
                  <span className={`text-[11px] font-display uppercase tracking-wider font-semibold ${
                    isLight ? 'text-zinc-700' : 'text-zinc-300'
                  }`}>
                    Time Divider Symbol
                  </span>
                  <span className={`text-[10px] font-mono capitalize ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                    {wallpaperSettings.clockDivider || 'colon'}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'colon', label: 'Colon (12:00)' },
                    { id: 'dot', label: 'Clean Dot (12 · 00)' },
                    { id: 'space', label: 'Space (12 00)' },
                  ].map((d) => {
                    const isSelected = (wallpaperSettings.clockDivider || 'colon') === d.id;
                    return (
                      <button
                        key={d.id}
                        type="button"
                        onClick={() => updateWallpaperSettings({ clockDivider: d.id as ClockDivider })}
                        className={`py-2 px-1 rounded-xl border text-center transition-all cursor-pointer text-xs font-medium ${
                          isSelected
                            ? isLight ? 'bg-zinc-900 text-white font-semibold border-zinc-900' : 'bg-white text-zinc-950 font-semibold border-white'
                            : isLight ? 'bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700' : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06] text-zinc-400'
                        }`}
                      >
                        {d.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Clock Accent Color */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="flex items-center justify-between text-xs">
                  <span className={`text-[11px] font-display uppercase tracking-wider font-semibold ${
                    isLight ? 'text-zinc-700' : 'text-zinc-300'
                  }`}>
                    Clock Dial Color Tint
                  </span>
                  <span className={`text-[10px] font-mono capitalize ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                    {wallpaperSettings.clockColor || 'palette'}
                  </span>
                </div>
                <div className="grid grid-cols-5 gap-1.5">
                  {[
                    { id: 'palette', label: 'Default', color: isLight ? '#18181b' : '#ffffff' },
                    { id: 'white', label: 'Pure White', color: '#ffffff' },
                    { id: 'gold', label: 'Amber Gold', color: '#f59e0b' },
                    { id: 'cyan', label: 'Cyber Cyan', color: '#06b6d4' },
                    { id: 'rose', label: 'Ruby Rose', color: '#f43f5e' },
                  ].map((c) => {
                    const isSelected = (wallpaperSettings.clockColor || 'palette') === c.id;
                    return (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => updateWallpaperSettings({ clockColor: c.id as ClockColor })}
                        className={`py-2 px-1 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center gap-1 text-[10px] font-medium ${
                          isSelected
                            ? isLight ? 'bg-zinc-900 text-white font-bold border-zinc-900' : 'bg-white text-zinc-950 font-bold border-white'
                            : isLight ? 'bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700' : 'bg-white/[0.03] hover:bg-white/[0.08] border-white/[0.06] text-zinc-400'
                        }`}
                      >
                        <span className="w-3 h-3 rounded-full border border-black/20" style={{ backgroundColor: c.color }} />
                        <span>{c.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Celestial Breathing Halo */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="flex items-center justify-between text-xs">
                  <span className={`text-[11px] font-display uppercase tracking-wider font-semibold ${
                    isLight ? 'text-zinc-700' : 'text-zinc-300'
                  }`}>
                    Celestial Breathing Halo
                  </span>
                  <span className={`text-[10px] font-mono capitalize ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                    {wallpaperSettings.clockHalo || 'pulsar'}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'none', label: 'None' },
                    { id: 'subtle', label: 'Subtle Aura' },
                    { id: 'pulsar', label: 'Pulsar Flare' },
                  ].map((h) => {
                    const isSelected = (wallpaperSettings.clockHalo || 'pulsar') === h.id;
                    return (
                      <button
                        key={h.id}
                        type="button"
                        onClick={() => updateWallpaperSettings({ clockHalo: h.id as any })}
                        className={`py-2 px-2 rounded-xl border text-center transition-all cursor-pointer text-xs font-medium ${
                          isSelected
                            ? isLight ? 'bg-zinc-900 text-white font-semibold border-zinc-900' : 'bg-white text-zinc-950 font-semibold border-white'
                            : isLight ? 'bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700' : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06] text-zinc-400'
                        }`}
                      >
                        {h.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Display Toggles */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <span className={`text-[11px] font-display uppercase tracking-wider font-semibold block ${
                  isLight ? 'text-zinc-700' : 'text-zinc-300'
                }`}>
                  Display Options
                </span>
                <div className="grid grid-cols-1 gap-2 text-xs">
                  {[
                    { key: 'showSeconds', label: 'Display Seconds (HH:MM:SS)', checked: wallpaperSettings.showSeconds !== false },
                    { key: 'showGreeting', label: 'Display Living Greeting & Mantra', checked: wallpaperSettings.showGreeting !== false },
                  ].map((item) => (
                    <label 
                      key={item.key}
                      className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-colors ${
                        isLight ? 'bg-white hover:bg-zinc-50 border-zinc-200' : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06]'
                      }`}
                    >
                      <span className={`font-medium ${isLight ? 'text-zinc-800' : 'text-zinc-200'}`}>
                        {item.label}
                      </span>
                      <input
                        type="checkbox"
                        checked={item.checked}
                        onChange={(e) => updateWallpaperSettings({ [item.key]: e.target.checked })}
                        className="w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 accent-violet-600 cursor-pointer"
                      />
                    </label>
                  ))}
                </div>
              </div>

              {/* Quick Mantra Presets */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <span className={`text-[11px] font-display uppercase tracking-wider font-semibold block ${
                  isLight ? 'text-zinc-700' : 'text-zinc-300'
                }`}>
                  Quick Daily Mantras
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Remember, you are here for you.',
                    'Discipline equals true freedom.',
                    'Deep focus over scattered noise.',
                    'Build with relentless craft.',
                  ].map((mantra) => (
                    <button
                      key={mantra}
                      type="button"
                      onClick={() => updateProfile({ motto: mantra })}
                      className={`text-[11px] px-2.5 py-1.5 rounded-lg border transition-all text-left cursor-pointer ${
                        profile.motto === mantra
                          ? isLight ? 'bg-zinc-900 text-white font-medium border-zinc-900' : 'bg-white text-zinc-950 font-medium border-white'
                          : isLight ? 'bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700' : 'bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300'
                      }`}
                    >
                      &ldquo;{mantra}&rdquo;
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer Done Action */}
        <div className={`p-4 px-5 border-t shrink-0 flex items-center justify-between ${
          isLight ? 'border-zinc-200 bg-white/60' : 'border-white/[0.08] bg-black/30'
        }`}>
          <span className={`text-[11px] font-mono ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
            Live Studio v3.2 Pro
          </span>
          <button
            type="button"
            onClick={onClose}
            className={`px-5 py-2 rounded-xl text-xs font-semibold shadow-md transition-all cursor-pointer ${
              isLight
                ? 'bg-zinc-900 hover:bg-zinc-800 text-white'
                : 'bg-white hover:bg-zinc-200 text-zinc-950 shadow-[0_0_20px_rgba(255,255,255,0.2)]'
            }`}
          >
            Done
          </button>
        </div>
      </aside>
    </div>
  );
};
