import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Sliders, 
  Clock, 
  RotateCcw,
  Moon,
  Check,
  Sun,
  Leaf
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { 
  CosmicPalette, 
  WaveGeometry, 
  CelestialBodyType, 
  ClockFontStyle, 
  ClockColor,
  WallpaperSettings 
} from '../../types';

interface WallpaperStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type StudioTab = 'realms' | 'cosmos' | 'timepiece';

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
      clockDivider: 'space',
      showConstellations: false,
      showComet: true,
      starDensity: 'balanced',
      shootingStarMode: 'off',
    },
  },
  {
    id: 'blood-moon-totality',
    name: 'Blood Moon Totality',
    tagline: 'Crimson Eclipse & Ruby Stardust',
    accent: '#ef4444',
    gradient: ['#0d0202', '#450a0a', '#b91c1c', '#f87171'],
    settings: {
      palette: 'supernova-sunset',
      celestialBody: 'blood-moon',
      celestialPosition: 'upper-left',
      celestialScaleMultiplier: 1.25,
      rotationSpeed: 'slow',
      waveGeometry: 'mountains',
      speed: 'calm',
      amplitude: 'dramatic',
      waveLayerDensity: 'deep',
      horizonHeight: 'balanced',
      clockFontStyle: 'serif',
      clockHalo: 'pulsar',
      clockColor: 'rose',
      clockPosition: 'center',
      clockDivider: 'colon',
      showConstellations: true,
      showCrossStars: true,
      starDensity: 'dense',
      shootingStarMode: 'meteor-shower',
    },
  },
  {
    id: 'nord-frost',
    name: 'Nord Frost',
    tagline: 'Sub-Zero Arctic & Crystalline Torus',
    accent: '#38bdf8',
    gradient: ['#020b14', '#0c2e4e', '#0284c7', '#e0f2fe'],
    settings: {
      palette: 'celestial-cyan',
      celestialBody: 'crescent-moon',
      celestialPosition: 'upper-right',
      celestialScaleMultiplier: 1.1,
      rotationSpeed: 'standard',
      waveGeometry: 'ocean',
      speed: 'balanced',
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
  { id: 'cosmic-royal', name: 'Cosmic Royal', previewColors: ['#060814', '#2d1252', '#7c3aed', '#ede9fe'] },
  { id: 'cyberpunk-neon', name: 'Cyber Neon', previewColors: ['#06000e', '#3b0764', '#06b6d4', '#f43f5e'] },
  { id: 'emerald-aurora', name: 'Emerald Aurora', previewColors: ['#010d05', '#064e3b', '#10b981', '#a7f3d0'] },
  { id: 'supernova-sunset', name: 'Sunset Supernova', previewColors: ['#12050e', '#6e133e', '#e11d48', '#fffbeb'] },
  { id: 'celestial-cyan', name: 'Celestial Cyan', previewColors: ['#030b14', '#0c2e4e', '#0284c7', '#e0f2fe'] },
  { id: 'solar-gold', name: 'Solar Gold', previewColors: ['#140d02', '#523405', '#f59e0b', '#fef3c7'] },
  { id: 'nocturne-silver', name: 'Nocturne Silver', previewColors: ['#050508', '#1e1e24', '#71717a', '#f4f4f5'] },
  { id: 'pure-pitch-black', name: 'Pitch Black OLED', previewColors: ['#000000', '#09090b', '#27272a', '#fafafa'] },
];

export const WallpaperStudioModal: React.FC<WallpaperStudioModalProps> = ({ isOpen, onClose }) => {
  const { wallpaperSettings, updateWallpaperSettings, appTheme, toggleAppTheme, setIsEcoSleeping } = useData();
  const isLight = appTheme === 'light';
  const [activeTab, setActiveTab] = useState<StudioTab>('realms');

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
      {/* 1. Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-[2px] pointer-events-auto transition-opacity" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      {/* 2. Floating Right-Side Live Inspector — macOS Safe & Clean */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Wallpaper Studio Inspector"
        className={`absolute top-8 sm:top-10 bottom-3 sm:bottom-6 right-2 sm:right-6 w-[calc(100%-1rem)] sm:w-[440px] rounded-3xl border shadow-[0_24px_80px_rgba(0,0,0,0.85)] backdrop-blur-3xl flex flex-col z-10 pointer-events-auto transition-all animate-fadeIn overflow-hidden ${
          isLight
            ? 'bg-white/95 border-zinc-200/90 text-zinc-900'
            : 'bg-[#090b16]/95 border-white/[0.12] text-white'
        }`}
      >
        {/* Header */}
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
                  Studio
                </h2>
                <span className={`text-[9px] font-mono font-medium px-2 py-0.5 rounded-full border ${
                  isLight ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-emerald-500/15 text-emerald-300 border-emerald-400/30'
                }`}>
                  Live
                </span>
              </div>
              <p className={`text-[10px] font-sans ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                Sanctuary customization
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
              aria-label="Close Studio"
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                isLight ? 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600' : 'bg-white/[0.06] hover:bg-white/[0.12] text-zinc-400 hover:text-white'
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Streamlined Segmented Tabs: Realms · Cosmos · Clock */}
        <div className={`p-2.5 border-b shrink-0 ${
          isLight ? 'border-zinc-200/90 bg-zinc-50/70' : 'border-white/[0.06] bg-black/25'
        }`}>
          <div className={`grid grid-cols-3 gap-1.5 p-1 rounded-2xl ${
            isLight ? 'bg-zinc-200/60' : 'bg-white/[0.04]'
          }`}>
            {[
              { id: 'realms', label: 'Realms', desc: '1-Tap Themes', icon: Sparkles },
              { id: 'cosmos', label: 'Cosmos', desc: 'Planet & Waves', icon: Moon },
              { id: 'timepiece', label: 'Timepiece', desc: 'Clock Style', icon: Clock },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as StudioTab)}
                  className={`flex items-center justify-center gap-2 py-2 px-2 rounded-xl text-xs font-sans font-medium transition-all cursor-pointer ${
                    isActive
                      ? isLight
                        ? 'bg-white text-zinc-950 font-bold shadow-sm'
                        : 'bg-white text-zinc-950 font-bold shadow-[0_2px_12px_rgba(255,255,255,0.18)]'
                      : isLight
                        ? 'hover:bg-white/60 text-zinc-600 hover:text-zinc-950'
                        : 'hover:bg-white/[0.06] text-zinc-400 hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">

          {/* ═════════════════════════════════════════════════════════ */}
          {/* TAB 1: 1-TAP CURATED REALMS                               */}
          {/* ═════════════════════════════════════════════════════════ */}
          {activeTab === 'realms' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className={`text-[11px] font-display uppercase tracking-wider font-semibold ${
                  isLight ? 'text-zinc-700' : 'text-zinc-300'
                }`}>
                  Curated Aesthetic Realms
                </span>
                <span className={`text-[10px] font-mono ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                  Instant Harmony
                </span>
              </div>

              <div className="grid grid-cols-1 gap-2">
                {MASTER_PRESETS.map((preset) => {
                  const isCurrent = wallpaperSettings.palette === preset.settings.palette &&
                                    wallpaperSettings.celestialBody === preset.settings.celestialBody;
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

                      <div className="flex items-center gap-1 shrink-0 pl-2">
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
          {/* TAB 2: COSMOS (PLANET & WAVES SIMPLIFIED)                 */}
          {/* ═════════════════════════════════════════════════════════ */}
          {activeTab === 'cosmos' && (
            <div className="space-y-5 animate-fadeIn">
              
              {/* 1. Celestial Planet */}
              <div className="space-y-2">
                <span className={`text-[11px] font-display uppercase tracking-wider font-semibold block ${
                  isLight ? 'text-zinc-700' : 'text-zinc-300'
                }`}>
                  3D Celestial Object
                </span>
                <div className="grid grid-cols-2 gap-1.5">
                  {[
                    { id: 'crescent-moon', label: 'Crescent Moon' },
                    { id: 'ringed-planet', label: 'Saturn Rings' },
                    { id: 'blood-moon', label: 'Blood Moon' },
                    { id: 'pulsar-star', label: 'Pulsar Star' },
                    { id: 'eclipse-corona', label: 'Eclipse Corona' },
                    { id: 'none', label: 'No Planet (Pure Waves)' },
                  ].map((body) => {
                    const isSelected = wallpaperSettings.celestialBody === body.id;
                    return (
                      <button
                        key={body.id}
                        type="button"
                        onClick={() => updateWallpaperSettings({ celestialBody: body.id as CelestialBodyType })}
                        className={`p-2.5 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? isLight
                              ? 'bg-zinc-900 text-white font-semibold'
                              : 'bg-white text-zinc-950 font-semibold shadow-sm'
                            : isLight
                              ? 'bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700'
                              : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-zinc-300'
                        }`}
                      >
                        <span className="truncate">{body.label}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 shrink-0 ml-1" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Color Palette */}
              <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                <span className={`text-[11px] font-display uppercase tracking-wider font-semibold block ${
                  isLight ? 'text-zinc-700' : 'text-zinc-300'
                }`}>
                  Atmospheric Palette
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {PALETTES.map((p) => {
                    const isSelected = wallpaperSettings.palette === p.id;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => updateWallpaperSettings({ palette: p.id })}
                        className={`p-2 rounded-xl border text-left transition-all cursor-pointer flex flex-col gap-1.5 ${
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
                              className="w-3 h-3 rounded-full border border-black/20" 
                              style={{ backgroundColor: c }} 
                            />
                          ))}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Wave Topography Style */}
              <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                <span className={`text-[11px] font-display uppercase tracking-wider font-semibold block ${
                  isLight ? 'text-zinc-700' : 'text-zinc-300'
                }`}>
                  Wave Topography
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'dunes', label: 'Cosmic Dunes' },
                    { id: 'aurora', label: 'Aurora Ribbon' },
                    { id: 'mountains', label: 'Ridge Peaks' },
                    { id: 'ocean', label: 'Ocean Swell' },
                  ].map((geo) => {
                    const isSelected = wallpaperSettings.waveGeometry === geo.id;
                    return (
                      <button
                        key={geo.id}
                        type="button"
                        onClick={() => updateWallpaperSettings({ waveGeometry: geo.id as WaveGeometry })}
                        className={`p-2.5 rounded-xl border text-center text-xs font-medium transition-all cursor-pointer ${
                          isSelected
                            ? isLight
                              ? 'bg-zinc-900 text-white font-semibold'
                              : 'bg-white text-zinc-950 font-semibold shadow-sm'
                            : isLight
                              ? 'bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700'
                              : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-zinc-300'
                        }`}
                      >
                        {geo.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 4. Motion Speed */}
              <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                <span className={`text-[11px] font-display uppercase tracking-wider font-semibold block ${
                  isLight ? 'text-zinc-700' : 'text-zinc-300'
                }`}>
                  Motion Speed
                </span>
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { id: 'calm', label: 'Calm Drift' },
                    { id: 'balanced', label: 'Balanced' },
                    { id: 'dynamic', label: 'Dynamic' },
                  ].map((spd) => {
                    const isSelected = wallpaperSettings.speed === spd.id;
                    return (
                      <button
                        key={spd.id}
                        type="button"
                        onClick={() => updateWallpaperSettings({ speed: spd.id as any })}
                        className={`p-2 rounded-xl border text-center text-xs font-medium transition-all cursor-pointer ${
                          isSelected
                            ? isLight
                              ? 'bg-zinc-900 text-white font-semibold'
                              : 'bg-white text-zinc-950 font-semibold shadow-sm'
                            : isLight
                              ? 'bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700'
                              : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-zinc-300'
                        }`}
                      >
                        {spd.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Eco Sleep Battery Saver */}
              <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] font-display uppercase tracking-wider font-semibold block ${
                    isLight ? 'text-zinc-700' : 'text-zinc-300'
                  }`}>
                    Battery Saver (Eco Sleep)
                  </span>
                  <span className={`text-[10px] ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                    0% GPU when idle
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-1.5">
                  {[
                    { val: 7.5, label: '7.5m (Default)' },
                    { val: 5, label: '5 min' },
                    { val: 10, label: '10 min' },
                    { val: 0, label: 'Off' },
                  ].map((opt) => {
                    const isSelected = (wallpaperSettings.ecoSleepMinutes ?? 7.5) === opt.val;
                    return (
                      <button
                        key={opt.val}
                        type="button"
                        onClick={() => updateWallpaperSettings({ ecoSleepMinutes: opt.val })}
                        className={`p-2 rounded-xl border text-center text-xs font-medium transition-all cursor-pointer ${
                          isSelected
                            ? isLight
                              ? 'bg-zinc-900 text-white font-semibold'
                              : 'bg-white text-zinc-950 font-semibold shadow-sm'
                            : isLight
                              ? 'bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700'
                              : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-zinc-300'
                        }`}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
                <p className={`text-[11px] leading-relaxed ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                  Auto-pauses heavy 3D celestial motion and wave loops after inactivity to eliminate battery drain while preserving the tranquil wallpaper aesthetic.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsEcoSleeping(true);
                    onClose();
                  }}
                  className={`w-full py-2 px-3 rounded-xl border text-xs font-medium transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    isLight
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100'
                      : 'bg-emerald-950/40 text-emerald-300 border-emerald-500/30 hover:bg-emerald-900/50'
                  }`}
                >
                  <Leaf className="w-3.5 h-3.5" />
                  <span>Preview Eco Sleep Mode</span>
                </button>
              </div>

              {/* Light / Dark Mode Toggle */}
              <div className="pt-2 border-t border-white/[0.06]">
                <button
                  type="button"
                  onClick={toggleAppTheme}
                  className={`w-full p-2.5 rounded-xl border text-xs font-medium transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    isLight 
                      ? 'bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-800' 
                      : 'bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-white'
                  }`}
                >
                  {isLight ? <Moon className="w-4 h-4 text-zinc-700" /> : <Sun className="w-4 h-4 text-amber-300" />}
                  <span>Switch to {isLight ? 'Obsidian Dark' : 'Creamy Light'} Theme</span>
                </button>
              </div>

            </div>
          )}

          {/* ═════════════════════════════════════════════════════════ */}
          {/* TAB 3: TIMEPIECE & DIAL                                   */}
          {/* ═════════════════════════════════════════════════════════ */}
          {activeTab === 'timepiece' && (
            <div className="space-y-5 animate-fadeIn">
              
              {/* Clock Typography Face */}
              <div className="space-y-2">
                <span className={`text-[11px] font-display uppercase tracking-wider font-semibold block ${
                  isLight ? 'text-zinc-700' : 'text-zinc-300'
                }`}>
                  Clock Typography Face
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'tabular', label: 'Tabular Modern', preview: '12:00' },
                    { id: 'serif', label: 'Editorial Luxury', preview: '12:00' },
                    { id: 'mono', label: 'Tech Monospace', preview: '12:00' },
                    { id: 'minimal', label: 'Minimalist Light', preview: '12:00' },
                  ].map((font) => {
                    const isSelected = wallpaperSettings.clockFontStyle === font.id;
                    return (
                      <button
                        key={font.id}
                        type="button"
                        onClick={() => updateWallpaperSettings({ clockFontStyle: font.id as ClockFontStyle })}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? isLight
                              ? 'bg-zinc-900 text-white font-semibold'
                              : 'bg-white text-zinc-950 font-semibold shadow-sm'
                            : isLight
                              ? 'bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700'
                              : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-zinc-300'
                        }`}
                      >
                        <span className="text-xs">{font.label}</span>
                        {isSelected && <Check className="w-3.5 h-3.5" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Clock Accent Tint */}
              <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                <span className={`text-[11px] font-display uppercase tracking-wider font-semibold block ${
                  isLight ? 'text-zinc-700' : 'text-zinc-300'
                }`}>
                  Dial Accent Tint
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'palette', label: 'Palette Match', dot: '#a855f7' },
                    { id: 'white', label: 'Pure White', dot: '#ffffff' },
                    { id: 'gold', label: 'Stardust Gold', dot: '#fbbf24' },
                    { id: 'cyan', label: 'Cyber Cyan', dot: '#22d3ee' },
                    { id: 'rose', label: 'Rose Quartz', dot: '#f43f5e' },
                  ].map((color) => {
                    const isSelected = wallpaperSettings.clockColor === color.id;
                    return (
                      <button
                        key={color.id}
                        type="button"
                        onClick={() => updateWallpaperSettings({ clockColor: color.id as ClockColor })}
                        className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? isLight
                              ? 'bg-zinc-100 border-zinc-900 ring-1 ring-zinc-900'
                              : 'bg-white/[0.08] border-white/40'
                            : isLight
                              ? 'bg-white hover:bg-zinc-50 border-zinc-200'
                              : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06]'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full border border-black/20" style={{ backgroundColor: color.dot }} />
                          <span className={`text-xs ${isSelected ? 'font-bold' : ''}`}>{color.label}</span>
                        </div>
                        {isSelected && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quick Display Toggles */}
              <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                <span className={`text-[11px] font-display uppercase tracking-wider font-semibold block ${
                  isLight ? 'text-zinc-700' : 'text-zinc-300'
                }`}>
                  Display Options
                </span>
                
                <div className="space-y-2">
                  {/* Seconds Capsule */}
                  <div className={`p-3 rounded-xl border flex items-center justify-between ${
                    isLight ? 'bg-white border-zinc-200' : 'bg-white/[0.03] border-white/[0.06]'
                  }`}>
                    <div>
                      <div className="text-xs font-semibold">Orbital Seconds Capsule</div>
                      <div className={`text-[10px] ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>Show live orbiting seconds gauge</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => updateWallpaperSettings({ showSeconds: !wallpaperSettings.showSeconds })}
                      className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                        wallpaperSettings.showSeconds ? 'bg-violet-600' : isLight ? 'bg-zinc-300' : 'bg-white/20'
                      }`}
                    >
                      <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                        wallpaperSettings.showSeconds ? 'left-6' : 'left-1'
                      }`} />
                    </button>
                  </div>

                  {/* Breathing Celestial Halo */}
                  <div className={`p-3 rounded-xl border flex items-center justify-between ${
                    isLight ? 'bg-white border-zinc-200' : 'bg-white/[0.03] border-white/[0.06]'
                  }`}>
                    <div>
                      <div className="text-xs font-semibold">Breathing Atmospheric Aura</div>
                      <div className={`text-[10px] ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>Ambient radial glow behind timepiece</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => updateWallpaperSettings({ 
                        clockHalo: wallpaperSettings.clockHalo === 'none' ? 'pulsar' : 'none' 
                      })}
                      className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                        wallpaperSettings.clockHalo !== 'none' ? 'bg-violet-600' : isLight ? 'bg-zinc-300' : 'bg-white/20'
                      }`}
                    >
                      <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                        wallpaperSettings.clockHalo !== 'none' ? 'left-6' : 'left-1'
                      }`} />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>
      </aside>
    </div>
  );
};
