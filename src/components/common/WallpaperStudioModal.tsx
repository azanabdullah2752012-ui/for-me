import React, { useState } from 'react';
import { 
  X, 
  Waves, 
  Sparkles, 
  Sliders, 
  Clock, 
  RotateCcw,
  Moon,
  Check
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { 
  CosmicPalette, 
  WaveGeometry, 
  WaveLayerDensity, 
  CelestialBodyType, 
  ClockFontStyle, 
  WallpaperSettings 
} from '../../types';

interface WallpaperStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type StudioSection = 'presets' | 'celestial' | 'waves' | 'clock';

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
      waveGeometry: 'dunes',
      speed: 'balanced',
      amplitude: 'majestic',
      waveLayerDensity: 'deep',
      clockFontStyle: 'tabular',
      clockHalo: 'pulsar',
      showConstellations: true,
      showComet: true,
      showNebulaDust: true,
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
      waveGeometry: 'aurora',
      speed: 'dynamic',
      amplitude: 'dramatic',
      waveLayerDensity: 'dense',
      clockFontStyle: 'mono',
      clockHalo: 'pulsar',
      showCrossStars: true,
      showOrbitalTrack: true,
      shootingStarMode: 'meteor-shower',
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
      waveGeometry: 'dunes',
      speed: 'balanced',
      amplitude: 'majestic',
      waveLayerDensity: 'deep',
      clockFontStyle: 'serif',
      clockHalo: 'subtle',
      showNebulaDust: true,
      showComet: true,
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
      waveGeometry: 'aurora',
      speed: 'calm',
      amplitude: 'majestic',
      waveLayerDensity: 'dense',
      clockFontStyle: 'minimal',
      clockHalo: 'none',
      showConstellations: true,
      showCrossStars: true,
      shootingStarMode: 'occasional',
    },
  },
  {
    id: 'monochrome-minimal',
    name: 'Monochrome Mineral',
    tagline: 'Architectural Platinum & Deep Void',
    accent: '#a1a1aa',
    gradient: ['#030306', '#181824', '#71717a', '#ffffff'],
    settings: {
      palette: 'nocturne-silver',
      celestialBody: 'none',
      waveGeometry: 'mountains',
      speed: 'calm',
      amplitude: 'subtle',
      waveLayerDensity: 'airy',
      clockFontStyle: 'tabular',
      clockHalo: 'none',
      showConstellations: false,
      showComet: false,
      showNebulaDust: false,
      shootingStarMode: 'off',
    },
  },
  {
    id: 'solar-totality',
    name: 'Solar Totality',
    tagline: 'Golden Corona & Oceanic Horizon',
    accent: '#f59e0b',
    gradient: ['#080400', '#5e2500', '#d97706', '#fef08a'],
    settings: {
      palette: 'solar-gold',
      celestialBody: 'eclipse-corona',
      waveGeometry: 'ocean',
      speed: 'balanced',
      amplitude: 'majestic',
      waveLayerDensity: 'deep',
      clockFontStyle: 'serif',
      clockHalo: 'pulsar',
      showNebulaDust: true,
      showOrbitalTrack: true,
      shootingStarMode: 'occasional',
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
];

const CELESTIAL_BODIES: { id: CelestialBodyType; name: string; desc: string }[] = [
  { id: 'crescent-moon', name: 'Crescent Moon', desc: 'Slender illuminated limb & earthshine' },
  { id: 'ringed-planet', name: 'Ringed Planet', desc: 'Gas giant with Cassini ring system' },
  { id: 'eclipse-corona', name: 'Solar Eclipse', desc: 'Totality disc with coronal flare rays' },
  { id: 'none', name: 'Deep Void', desc: 'Pure atmospheric expanse without celestial body' },
];

const WAVE_GEOMETRIES: { id: WaveGeometry; name: string; desc: string }[] = [
  { id: 'dunes', name: 'Silky Dunes', desc: 'Harmonic desert sand ridges' },
  { id: 'aurora', name: 'Aurora Ribbons', desc: 'Translucent shimmering curtains' },
  { id: 'mountains', name: 'Alpine Peaks', desc: 'Angular geometric mountain ridges' },
  { id: 'ocean', name: 'Ocean Swells', desc: 'Deep rhythmic tidal waves' },
];

const CLOCK_FONTS: { id: ClockFontStyle; label: string; preview: string }[] = [
  { id: 'tabular', label: 'Tabular Modern', preview: '12:00' },
  { id: 'serif', label: 'Editorial Luxury', preview: '12:00' },
  { id: 'mono', label: 'Tech Monospace', preview: '12:00' },
  { id: 'minimal', label: 'Minimalist Light', preview: '12:00' },
];

export const WallpaperStudioModal: React.FC<WallpaperStudioModalProps> = ({ isOpen, onClose }) => {
  const { wallpaperSettings, updateWallpaperSettings, appTheme } = useData();
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
      celestialBody: 'crescent-moon',
      showNebulaDust: true,
      showConstellations: true,
      showComet: true,
      shootingStarMode: 'occasional',
      showStars: true,
      showCrossStars: true,
      showOrbitalTrack: true,
      showMeridian: true,
      clockFontStyle: 'tabular',
      clockSize: 'standard',
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

      {/* 2. Floating Right-Side Live Inspector Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Wallpaper Studio Inspector"
        className={`absolute top-0 right-0 bottom-0 w-full sm:w-[440px] border-l shadow-[0_0_80px_rgba(0,0,0,0.8)] backdrop-blur-3xl flex flex-col z-10 pointer-events-auto transition-all animate-fadeIn ${
          isLight
            ? 'bg-white/94 border-zinc-200/90 text-zinc-900 shadow-2xl'
            : 'bg-[#090b16]/92 border-white/[0.12] text-white shadow-2xl'
        }`}
      >
        {/* Drawer Header */}
        <div className={`flex items-center justify-between p-4 px-5 border-b shrink-0 ${
          isLight ? 'border-zinc-200 bg-white/50' : 'border-white/[0.08] bg-black/20'
        }`}>
          <div className="flex items-center gap-2.5">
            <div className={`w-8 h-8 rounded-full border flex items-center justify-center ${
              isLight ? 'bg-violet-50 border-violet-200 text-violet-700' : 'bg-white/[0.06] border-white/15 text-zinc-200'
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
                  Live Preview
                </span>
              </div>
              <p className={`text-[10px] font-sans ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                Changes apply instantly in real time
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handleResetDefaults}
              aria-label="Reset to default settings"
              title="Reset to Defaults"
              className={`p-2 rounded-full transition-colors cursor-pointer ${
                isLight ? 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600' : 'bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white'
              }`}
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close Wallpaper Studio"
              className={`p-2 rounded-full transition-colors cursor-pointer ${
                isLight ? 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600' : 'bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white'
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Section Navigation Tabs */}
        <div className={`flex items-center gap-1 px-4 py-2 border-b shrink-0 overflow-x-auto no-scrollbar ${
          isLight ? 'border-zinc-200 bg-zinc-50/80' : 'border-white/[0.06] bg-black/30'
        }`}>
          {[
            { id: 'presets', label: 'Master Themes', icon: Sparkles },
            { id: 'celestial', label: 'Celestial 3D', icon: Moon },
            { id: 'waves', label: 'Waves', icon: Waves },
            { id: 'clock', label: 'Clock & Telemetry', icon: Clock },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeSection === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveSection(tab.id as StudioSection)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? isLight
                      ? 'bg-zinc-900 text-white font-semibold shadow-sm'
                      : 'bg-white text-zinc-950 font-semibold shadow-sm'
                    : isLight
                      ? 'hover:bg-zinc-200/80 text-zinc-600'
                      : 'hover:bg-white/[0.08] text-zinc-400 hover:text-white'
                }`}
              >
                <Icon className="w-3 h-3" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">

          {/* ═════════════════════════════════════════════════════════ */}
          {/* SECTION 1: 1-CLICK CURATED MASTER THEMES                 */}
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
                  1-Tap Complete Transformation
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

              {/* Color Palettes Swatches Grid */}
              <div className="pt-4 space-y-2.5 border-t border-white/10">
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
            </div>
          )}

          {/* ═════════════════════════════════════════════════════════ */}
          {/* SECTION 2: CELESTIAL OBJECTS & SPACE PHENOMENA           */}
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

              {/* Space Phenomena Toggles */}
              <div className="space-y-2.5 pt-2 border-t border-white/10">
                <span className={`text-[11px] font-display uppercase tracking-wider font-semibold block ${
                  isLight ? 'text-zinc-700' : 'text-zinc-300'
                }`}>
                  Astronomical Phenomena
                </span>

                <div className="grid grid-cols-1 gap-2 text-xs">
                  {[
                    { key: 'showConstellations', label: 'Constellation Charts', desc: 'Astronomical celestial chords' },
                    { key: 'showComet', label: 'Cosmic Comet', desc: 'Sweeping ion dust tail across the horizon' },
                    { key: 'showNebulaDust', label: 'Volumetric Nebula', desc: 'Interstellar atmospheric clouds' },
                    { key: 'showCrossStars', label: 'Diffraction Cross Stars', desc: '4-point optical diamond flares' },
                    { key: 'showOrbitalTrack', label: 'Orbital Arc Track', desc: 'Elliptical planetary telemetry' },
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
                            ? isLight
                              ? 'bg-zinc-900 text-white font-semibold border-zinc-900'
                              : 'bg-white text-zinc-950 font-semibold border-white'
                            : isLight
                              ? 'bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700'
                              : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06] text-zinc-400'
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
          {/* SECTION 3: WAVE TOPOGRAPHY & MOTION ARCHITECTURE         */}
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
                <div className="grid grid-cols-4 gap-2">
                  {(['frozen', 'calm', 'balanced', 'dynamic'] as const).map((s) => {
                    const isSelected = (wallpaperSettings.speed || 'balanced') === s;
                    return (
                      <button
                        key={s}
                        type="button"
                        onClick={() => updateWallpaperSettings({ speed: s })}
                        className={`py-2 px-1 rounded-xl border text-center transition-all cursor-pointer text-xs capitalize font-medium ${
                          isSelected
                            ? isLight
                              ? 'bg-zinc-900 text-white font-semibold border-zinc-900'
                              : 'bg-white text-zinc-950 font-semibold border-white'
                            : isLight
                              ? 'bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700'
                              : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06] text-zinc-400'
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
                            ? isLight
                              ? 'bg-zinc-900 text-white font-semibold border-zinc-900'
                              : 'bg-white text-zinc-950 font-semibold border-white'
                            : isLight
                              ? 'bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700'
                              : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06] text-zinc-400'
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
                    Layer Density
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
                            ? isLight
                              ? 'bg-zinc-900 text-white font-semibold border-zinc-900'
                              : 'bg-white text-zinc-950 font-semibold border-white'
                            : isLight
                              ? 'bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700'
                              : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06] text-zinc-400'
                        }`}
                      >
                        {d.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ═════════════════════════════════════════════════════════ */}
          {/* SECTION 4: CLOCK TYPOGRAPHY, HALO & TELEMETRY            */}
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

              {/* Clock Size */}
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
                            ? isLight
                              ? 'bg-zinc-900 text-white font-semibold border-zinc-900'
                              : 'bg-white text-zinc-950 font-semibold border-white'
                            : isLight
                              ? 'bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700'
                              : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06] text-zinc-400'
                        }`}
                      >
                        {sz}
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
                            ? isLight
                              ? 'bg-zinc-900 text-white font-semibold border-zinc-900'
                              : 'bg-white text-zinc-950 font-semibold border-white'
                            : isLight
                              ? 'bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700'
                              : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06] text-zinc-400'
                        }`}
                      >
                        {h.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Toggles */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <span className={`text-[11px] font-display uppercase tracking-wider font-semibold block ${
                  isLight ? 'text-zinc-700' : 'text-zinc-300'
                }`}>
                  Display Options
                </span>
                <div className="grid grid-cols-1 gap-2 text-xs">
                  {[
                    { key: 'showSeconds', label: 'Display Seconds', checked: wallpaperSettings.showSeconds !== false },
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
            </div>
          )}

        </div>

        {/* Footer Done Action */}
        <div className={`p-4 px-5 border-t shrink-0 flex items-center justify-between ${
          isLight ? 'border-zinc-200 bg-white/60' : 'border-white/[0.08] bg-black/30'
        }`}>
          <span className={`text-[11px] font-mono ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
            Live Studio v3.0
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
