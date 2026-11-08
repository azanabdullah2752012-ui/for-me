import React, { useState } from 'react';
import { 
  X, 
  Palette, 
  Waves, 
  Sparkles, 
  Sliders, 
  Clock, 
  RotateCcw,
  Zap,
  Moon,
  Layers,
  Type
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { 
  CosmicPalette, 
  WaveGeometry, 
  WaveLayerDensity, 
  CelestialBodyType, 
  ClockFontStyle, 
  ClockSize 
} from '../../types';

interface WallpaperStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type StudioTab = 'celestial' | 'waves' | 'clock' | 'palettes';

interface PaletteOption {
  id: CosmicPalette;
  name: string;
  subtitle: string;
  previewColors: string[];
}

const PALETTES: PaletteOption[] = [
  {
    id: 'cosmic-royal',
    name: 'Cosmic Royal',
    subtitle: 'Midnight Obsidian to Luminous Lavender',
    previewColors: ['#060814', '#2d1252', '#7c3aed', '#ede9fe'],
  },
  {
    id: 'celestial-cyan',
    name: 'Celestial Cyan',
    subtitle: 'Abyss Sapphire to Electric Mint',
    previewColors: ['#040a14', '#0e3f57', '#0284c7', '#ecfeff'],
  },
  {
    id: 'supernova-sunset',
    name: 'Supernova Sunset',
    subtitle: 'Velvet Crimson to Radiant Amber Gold',
    previewColors: ['#12050e', '#6e133e', '#e11d48', '#fffbeb'],
  },
  {
    id: 'nocturne-silver',
    name: 'Nocturne Silver',
    subtitle: 'Obsidian Slate to Platinum White',
    previewColors: ['#050508', '#22222f', '#707090', '#ffffff'],
  },
];

const CELESTIAL_BODIES: { id: CelestialBodyType; name: string; desc: string }[] = [
  { id: 'crescent-moon', name: 'Crescent Moon', desc: 'Glowing lunar limb & earthshine' },
  { id: 'ringed-planet', name: 'Ringed Planet', desc: 'Gas giant with illuminated rings' },
  { id: 'eclipse-corona', name: 'Solar Eclipse', desc: 'Radiant coronal flare rays' },
  { id: 'none', name: 'Deep Void Only', desc: 'Empty celestial expanse' },
];

const WAVE_GEOMETRIES: { id: WaveGeometry; name: string; desc: string }[] = [
  { id: 'dunes', name: 'Silky Dunes', desc: 'Smooth rolling desert sand ridges' },
  { id: 'aurora', name: 'Aurora Ribbons', desc: 'Shimmering translucent silk curtains' },
  { id: 'mountains', name: 'Alpine Peaks', desc: 'Angular faceted mountain horizons' },
  { id: 'ocean', name: 'Ocean Swells', desc: 'Deep rolling tidal rollers & crests' },
];

const LAYER_DENSITIES: { id: WaveLayerDensity; label: string; desc: string }[] = [
  { id: 'airy', label: 'Airy (3)', desc: 'Spacious sky' },
  { id: 'deep', label: 'Deep (5)', desc: 'Standard balance' },
  { id: 'dense', label: 'Dense (7)', desc: 'Rich stratified' },
];

const CLOCK_FONTS: { id: ClockFontStyle; label: string; preview: string }[] = [
  { id: 'tabular', label: 'Tabular Modern', preview: '12:00' },
  { id: 'serif', label: 'Editorial Luxury', preview: '12:00' },
  { id: 'mono', label: 'Tech Monospace', preview: '12:00' },
  { id: 'minimal', label: 'Minimalist Light', preview: '12:00' },
];

const CLOCK_SIZES: { id: ClockSize; label: string }[] = [
  { id: 'compact', label: 'Compact' },
  { id: 'standard', label: 'Standard' },
  { id: 'heroic', label: 'Heroic Grand' },
];

export const WallpaperStudioModal: React.FC<WallpaperStudioModalProps> = ({ isOpen, onClose }) => {
  const { wallpaperSettings, updateWallpaperSettings, appTheme } = useData();
  const isLight = appTheme === 'light';
  const [activeSubTab, setActiveSubTab] = useState<StudioTab>('celestial');

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
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md animate-fadeIn select-none ${
      isLight ? 'bg-black/35' : 'bg-black/80'
    }`}>
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="wallpaper-studio-title"
        className={`relative w-full max-w-xl max-h-[88vh] overflow-hidden rounded-3xl border shadow-2xl flex flex-col z-10 ${
          isLight 
            ? 'bg-white/95 border-zinc-200 text-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.15)]' 
            : 'cosmic-card border-white/[0.14] text-white shadow-2xl'
        }`}
      >
        {/* Header */}
        <div className={`flex items-center justify-between p-5 pb-3 border-b shrink-0 ${
          isLight ? 'border-zinc-200' : 'border-white/[0.08]'
        }`}>
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-xl border flex items-center justify-center ${
              isLight 
                ? 'bg-violet-50 border-violet-200 text-violet-700' 
                : 'bg-violet-600/30 border-violet-400/40 text-violet-300'
            }`}>
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <h2 id="wallpaper-studio-title" className={`text-sm font-display uppercase tracking-widest font-bold ${
                isLight ? 'text-zinc-900' : 'text-white'
              }`}>
                Wallpaper Studio
              </h2>
              <p className={`text-[11px] font-sans ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                Customize celestial objects, wave geometries & clock typography
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleResetDefaults}
              aria-label="Reset to default settings"
              title="Reset to Defaults"
              className={`p-2 rounded-xl transition-colors cursor-pointer ${
                isLight ? 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600' : 'bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white'
              }`}
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close Wallpaper Studio"
              className={`p-2 rounded-xl transition-colors cursor-pointer ${
                isLight ? 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600' : 'bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white'
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Studio Navigation Tabs */}
        <div className={`flex items-center gap-1 px-5 pt-3 border-b shrink-0 ${
          isLight ? 'border-zinc-200 bg-zinc-50/80' : 'border-white/[0.06] bg-black/20'
        }`}>
          <button
            type="button"
            onClick={() => setActiveSubTab('celestial')}
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-display font-medium border-b-2 transition-all cursor-pointer ${
              activeSubTab === 'celestial'
                ? isLight ? 'border-violet-600 text-zinc-950 font-bold' : 'border-violet-400 text-white'
                : isLight ? 'border-transparent text-zinc-500 hover:text-zinc-900' : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Moon className="w-3.5 h-3.5 text-amber-500" />
            <span>Celestial Objects</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSubTab('waves')}
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-display font-medium border-b-2 transition-all cursor-pointer ${
              activeSubTab === 'waves'
                ? isLight ? 'border-violet-600 text-zinc-950 font-bold' : 'border-violet-400 text-white'
                : isLight ? 'border-transparent text-zinc-500 hover:text-zinc-900' : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Waves className="w-3.5 h-3.5 text-cyan-500" />
            <span>Wave Architecture</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSubTab('clock')}
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-display font-medium border-b-2 transition-all cursor-pointer ${
              activeSubTab === 'clock'
                ? isLight ? 'border-violet-600 text-zinc-950 font-bold' : 'border-violet-400 text-white'
                : isLight ? 'border-transparent text-zinc-500 hover:text-zinc-900' : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Clock className="w-3.5 h-3.5 text-violet-600" />
            <span>Clock Studio</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSubTab('palettes')}
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-display font-medium border-b-2 transition-all cursor-pointer ${
              activeSubTab === 'palettes'
                ? isLight ? 'border-violet-600 text-zinc-950 font-bold' : 'border-violet-400 text-white'
                : isLight ? 'border-transparent text-zinc-500 hover:text-zinc-900' : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Palette className="w-3.5 h-3.5 text-purple-600" />
            <span>Color Palettes</span>
          </button>
        </div>

        {/* Tab Body Container */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">

          {/* ═════════════════════════════════════════════════════════ */}
          {/* TAB 1: CELESTIAL OBJECTS (WHAT YOU CAN ADD TO BACKGROUND) */}
          {/* ═════════════════════════════════════════════════════════ */}
          {activeSubTab === 'celestial' && (
            <div className="space-y-5 animate-fadeIn">
              {/* Celestial Body Selector */}
              <div className="space-y-2.5">
                <div className={`flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold ${
                  isLight ? 'text-zinc-800' : 'text-zinc-300'
                }`}>
                  <div className="flex items-center gap-2">
                    <Moon className="w-3.5 h-3.5 text-amber-500" />
                    <span>Primary Celestial Body</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
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
                              ? 'bg-amber-50 border-amber-500 ring-2 ring-amber-500/20 shadow-sm'
                              : 'bg-amber-400/15 border-amber-400/60 shadow-[0_0_20px_rgba(251,191,36,0.2)]'
                            : isLight
                              ? 'bg-zinc-50 hover:bg-zinc-100 border-zinc-200/90 text-zinc-900'
                              : 'bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`text-xs font-display font-bold ${
                            isSelected
                              ? isLight ? 'text-amber-950 font-bold' : 'text-amber-200'
                              : isLight ? 'text-zinc-900' : 'text-white'
                          }`}>
                            {b.name}
                          </span>
                          {isSelected && (
                            <span className={`w-2 h-2 rounded-full shadow-sm ${
                              isLight ? 'bg-amber-600' : 'bg-amber-400'
                            }`} />
                          )}
                        </div>
                        <span className={`text-[10px] font-sans mt-1 leading-tight ${
                          isSelected
                            ? isLight ? 'text-amber-900/80 font-medium' : 'text-amber-200/80'
                            : isLight ? 'text-zinc-600' : 'text-zinc-400'
                        }`}>
                          {b.desc}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Extra Celestial Features */}
              <div className="space-y-2.5">
                <div className={`flex items-center gap-2 text-xs font-display uppercase tracking-wider font-semibold ${
                  isLight ? 'text-zinc-800' : 'text-zinc-300'
                }`}>
                  <Sparkles className="w-3.5 h-3.5 text-violet-500" />
                  <span>Astronomical Cosmic Features</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {/* Constellations */}
                  <label className={`flex items-center justify-between p-3 rounded-2xl border cursor-pointer transition-colors ${
                    isLight 
                      ? 'bg-zinc-50 hover:bg-zinc-100/90 border-zinc-200/90 text-zinc-900 shadow-sm' 
                      : 'bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] text-zinc-200'
                  }`}>
                    <div>
                      <div className={`font-semibold ${isLight ? 'text-zinc-900' : 'text-zinc-200'}`}>
                        Constellation Charts
                      </div>
                      <div className={`text-[10px] font-sans ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                        Ursa Major &amp; Cassiopeia chords
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={wallpaperSettings.showConstellations}
                      onChange={(e) => updateWallpaperSettings({ showConstellations: e.target.checked })}
                      className="w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 accent-violet-600 cursor-pointer"
                    />
                  </label>

                  {/* Periodic Comet */}
                  <label className={`flex items-center justify-between p-3 rounded-2xl border cursor-pointer transition-colors ${
                    isLight 
                      ? 'bg-zinc-50 hover:bg-zinc-100/90 border-zinc-200/90 text-zinc-900 shadow-sm' 
                      : 'bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] text-zinc-200'
                  }`}>
                    <div>
                      <div className={`font-semibold ${isLight ? 'text-zinc-900' : 'text-zinc-200'}`}>
                        Cosmic Comet
                      </div>
                      <div className={`text-[10px] font-sans ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                        Sweeping ion dust tail
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={wallpaperSettings.showComet}
                      onChange={(e) => updateWallpaperSettings({ showComet: e.target.checked })}
                      className="w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 accent-violet-600 cursor-pointer"
                    />
                  </label>

                  {/* Volumetric Nebula Dust */}
                  <label className={`flex items-center justify-between p-3 rounded-2xl border cursor-pointer transition-colors ${
                    isLight 
                      ? 'bg-zinc-50 hover:bg-zinc-100/90 border-zinc-200/90 text-zinc-900 shadow-sm' 
                      : 'bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] text-zinc-200'
                  }`}>
                    <div>
                      <div className={`font-semibold ${isLight ? 'text-zinc-900' : 'text-zinc-200'}`}>
                        Volumetric Nebula
                      </div>
                      <div className={`text-[10px] font-sans ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                        Interstellar atmospheric clouds
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={wallpaperSettings.showNebulaDust}
                      onChange={(e) => updateWallpaperSettings({ showNebulaDust: e.target.checked })}
                      className="w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 accent-violet-600 cursor-pointer"
                    />
                  </label>

                  {/* Orbital Arc */}
                  <label className={`flex items-center justify-between p-3 rounded-2xl border cursor-pointer transition-colors ${
                    isLight 
                      ? 'bg-zinc-50 hover:bg-zinc-100/90 border-zinc-200/90 text-zinc-900 shadow-sm' 
                      : 'bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] text-zinc-200'
                  }`}>
                    <div>
                      <div className={`font-semibold ${isLight ? 'text-zinc-900' : 'text-zinc-200'}`}>
                        Orbital Trajectory Arc
                      </div>
                      <div className={`text-[10px] font-sans ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                        Elliptical planetary telemetry
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={wallpaperSettings.showOrbitalTrack}
                      onChange={(e) => updateWallpaperSettings({ showOrbitalTrack: e.target.checked })}
                      className="w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 accent-violet-600 cursor-pointer"
                    />
                  </label>

                  {/* Celestial Meridian */}
                  <label className={`flex items-center justify-between p-3 rounded-2xl border cursor-pointer transition-colors ${
                    isLight 
                      ? 'bg-zinc-50 hover:bg-zinc-100/90 border-zinc-200/90 text-zinc-900 shadow-sm' 
                      : 'bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] text-zinc-200'
                  }`}>
                    <div>
                      <div className={`font-semibold ${isLight ? 'text-zinc-900' : 'text-zinc-200'}`}>
                        Celestial Meridian
                      </div>
                      <div className={`text-[10px] font-sans ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                        Vertical astronomical ticks
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={wallpaperSettings.showMeridian}
                      onChange={(e) => updateWallpaperSettings({ showMeridian: e.target.checked })}
                      className="w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 accent-violet-600 cursor-pointer"
                    />
                  </label>

                  {/* Cross Flare Stars */}
                  <label className={`flex items-center justify-between p-3 rounded-2xl border cursor-pointer transition-colors ${
                    isLight 
                      ? 'bg-zinc-50 hover:bg-zinc-100/90 border-zinc-200/90 text-zinc-900 shadow-sm' 
                      : 'bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] text-zinc-200'
                  }`}>
                    <div>
                      <div className={`font-semibold ${isLight ? 'text-zinc-900' : 'text-zinc-200'}`}>
                        Diffraction Cross Stars
                      </div>
                      <div className={`text-[10px] font-sans ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                        4-point diamond optical flares
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={wallpaperSettings.showCrossStars}
                      onChange={(e) => updateWallpaperSettings({ showCrossStars: e.target.checked })}
                      className="w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 accent-violet-600 cursor-pointer"
                    />
                  </label>
                </div>
              </div>

              {/* Shooting Star Intensity */}
              <div className="space-y-2">
                <div className={`flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold ${
                  isLight ? 'text-zinc-800' : 'text-zinc-300'
                }`}>
                  <div className="flex items-center gap-2">
                    <Zap className={`w-3.5 h-3.5 ${isLight ? 'text-cyan-600' : 'text-cyan-400'}`} />
                    <span>Shooting Star Frequency</span>
                  </div>
                  <span className={`text-[11px] font-medium lowercase capitalize ${
                    isLight ? 'text-violet-700 font-bold' : 'text-violet-300'
                  }`}>
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
                        className={`py-2 px-2 rounded-xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? isLight
                              ? 'bg-cyan-600 text-white font-bold shadow-sm border-cyan-700'
                              : 'bg-cyan-600/30 border-cyan-400 text-white font-semibold'
                            : isLight
                              ? 'bg-zinc-100 hover:bg-zinc-200/80 border-zinc-200 text-zinc-700 font-medium'
                              : 'bg-white/[0.03] border-white/[0.06] text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.06]'
                        }`}
                      >
                        <div className="text-xs font-display capitalize">{m.replace('-', ' ')}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ═════════════════════════════════════════════════════════ */}
          {/* TAB 2: WAVE ARCHITECTURE (GEOMETRY & DIFFERENCE)         */}
          {/* ═════════════════════════════════════════════════════════ */}
          {activeSubTab === 'waves' && (
            <div className="space-y-5 animate-fadeIn">
              {/* Geometry Selection */}
              <div className="space-y-2.5">
                <div className={`flex items-center gap-2 text-xs font-display uppercase tracking-wider font-semibold ${
                  isLight ? 'text-zinc-800' : 'text-zinc-300'
                }`}>
                  <Waves className={`w-3.5 h-3.5 ${isLight ? 'text-cyan-600' : 'text-cyan-400'}`} />
                  <span>Horizon Geometry Style</span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
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
                              ? 'bg-cyan-50 border-cyan-500 ring-2 ring-cyan-500/20 shadow-sm'
                              : 'bg-cyan-600/20 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.2)]'
                            : isLight
                              ? 'bg-zinc-50 hover:bg-zinc-100 border-zinc-200/90 text-zinc-900'
                              : 'bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`text-xs font-display font-bold ${
                            isSelected
                              ? isLight ? 'text-cyan-950 font-bold' : 'text-cyan-200'
                              : isLight ? 'text-zinc-900' : 'text-white'
                          }`}>
                            {g.name}
                          </span>
                          {isSelected && (
                            <span className={`w-2 h-2 rounded-full shadow-sm ${
                              isLight ? 'bg-cyan-600' : 'bg-cyan-400'
                            }`} />
                          )}
                        </div>
                        <span className={`text-[10px] font-sans mt-1 leading-tight ${
                          isSelected
                            ? isLight ? 'text-cyan-900/80 font-medium' : 'text-cyan-200/80'
                            : isLight ? 'text-zinc-600' : 'text-zinc-400'
                        }`}>
                          {g.desc}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Layer Density */}
              <div className="space-y-2">
                <div className={`flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold ${
                  isLight ? 'text-zinc-800' : 'text-zinc-300'
                }`}>
                  <div className="flex items-center gap-2">
                    <Layers className={`w-3.5 h-3.5 ${isLight ? 'text-violet-600' : 'text-violet-400'}`} />
                    <span>Layer Density (Stratification)</span>
                  </div>
                  <span className={`text-[11px] font-medium lowercase capitalize ${
                    isLight ? 'text-violet-700 font-bold' : 'text-violet-300'
                  }`}>
                    {wallpaperSettings.waveLayerDensity || 'deep'}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {LAYER_DENSITIES.map((ld) => {
                    const isSelected = (wallpaperSettings.waveLayerDensity || 'deep') === ld.id;
                    return (
                      <button
                        key={ld.id}
                        type="button"
                        onClick={() => updateWallpaperSettings({ waveLayerDensity: ld.id })}
                        className={`py-2 px-2 rounded-xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? isLight
                              ? 'bg-violet-600 text-white font-bold shadow-sm border-violet-700'
                              : 'bg-violet-600/30 border-violet-400 text-white font-semibold'
                            : isLight
                              ? 'bg-zinc-100 hover:bg-zinc-200/80 border-zinc-200 text-zinc-700 font-medium'
                              : 'bg-white/[0.03] border-white/[0.06] text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.06]'
                        }`}
                      >
                        <div className="text-xs font-display">{ld.label}</div>
                        <div className={`text-[10px] font-sans mt-0.5 ${
                          isSelected
                            ? isLight ? 'text-violet-100' : 'text-violet-200'
                            : isLight ? 'text-zinc-500' : 'text-zinc-500'
                        }`}>
                          {ld.desc}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Wave Speed */}
              <div className="space-y-2">
                <div className={`flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold ${
                  isLight ? 'text-zinc-800' : 'text-zinc-300'
                }`}>
                  <span>Wave Drift Speed</span>
                  <span className={`text-[11px] font-medium lowercase capitalize ${
                    isLight ? 'text-violet-700 font-bold' : 'text-violet-300'
                  }`}>
                    {wallpaperSettings.speed}
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {(['frozen', 'calm', 'balanced', 'dynamic'] as const).map((spd) => {
                    const isSelected = wallpaperSettings.speed === spd;
                    return (
                      <button
                        key={spd}
                        type="button"
                        onClick={() => updateWallpaperSettings({ speed: spd })}
                        className={`py-2 px-1 rounded-xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? isLight
                              ? 'bg-violet-600 text-white font-bold shadow-sm border-violet-700'
                              : 'bg-violet-600/30 border-violet-400 text-white font-semibold'
                            : isLight
                              ? 'bg-zinc-100 hover:bg-zinc-200/80 border-zinc-200 text-zinc-700 font-medium'
                              : 'bg-white/[0.03] border-white/[0.06] text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.06]'
                        }`}
                      >
                        <div className="text-xs font-display capitalize">{spd}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Wave Amplitude */}
              <div className="space-y-2">
                <div className={`flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold ${
                  isLight ? 'text-zinc-800' : 'text-zinc-300'
                }`}>
                  <span>Wave Crest Amplitude</span>
                  <span className={`text-[11px] font-medium lowercase capitalize ${
                    isLight ? 'text-violet-700 font-bold' : 'text-violet-300'
                  }`}>
                    {wallpaperSettings.amplitude}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {(['subtle', 'majestic', 'dramatic'] as const).map((amp) => {
                    const isSelected = wallpaperSettings.amplitude === amp;
                    return (
                      <button
                        key={amp}
                        type="button"
                        onClick={() => updateWallpaperSettings({ amplitude: amp })}
                        className={`py-2 px-2 rounded-xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? isLight
                              ? 'bg-violet-600 text-white font-bold shadow-sm border-violet-700'
                              : 'bg-violet-600/30 border-violet-400 text-white font-semibold'
                            : isLight
                              ? 'bg-zinc-100 hover:bg-zinc-200/80 border-zinc-200 text-zinc-700 font-medium'
                              : 'bg-white/[0.03] border-white/[0.06] text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.06]'
                        }`}
                      >
                        <div className="text-xs font-display capitalize">{amp}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ═════════════════════════════════════════════════════════ */}
          {/* TAB 3: CLOCK STUDIO (FONT, SIZE, HALO, SECOND TOGGLE)   */}
          {/* ═════════════════════════════════════════════════════════ */}
          {activeSubTab === 'clock' && (
            <div className="space-y-5 animate-fadeIn">
              {/* Clock Font Style */}
              <div className="space-y-2.5">
                <div className={`flex items-center gap-2 text-xs font-display uppercase tracking-wider font-semibold ${
                  isLight ? 'text-zinc-800' : 'text-zinc-300'
                }`}>
                  <Type className={`w-3.5 h-3.5 ${isLight ? 'text-violet-600' : 'text-violet-400'}`} />
                  <span>Numeral Typography Style</span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  {CLOCK_FONTS.map((f) => {
                    const isSelected = (wallpaperSettings.clockFontStyle || 'tabular') === f.id;
                    const previewFont = 
                      f.id === 'serif' ? 'font-serif' :
                      f.id === 'mono' ? 'font-mono' :
                      f.id === 'minimal' ? 'font-sans font-light' : 'font-display';

                    return (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => updateWallpaperSettings({ clockFontStyle: f.id })}
                        className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? isLight
                              ? 'bg-violet-50 border-violet-500 ring-2 ring-violet-500/20 shadow-sm'
                              : 'bg-violet-600/20 border-violet-400 shadow-[0_0_20px_rgba(147,51,234,0.25)]'
                            : isLight
                              ? 'bg-zinc-50 hover:bg-zinc-100 border-zinc-200/90 text-zinc-900'
                              : 'bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06]'
                        }`}
                      >
                        <div>
                          <div className={`text-xs font-display font-bold ${
                            isSelected
                              ? isLight ? 'text-violet-950' : 'text-white'
                              : isLight ? 'text-zinc-900' : 'text-zinc-200'
                          }`}>
                            {f.label}
                          </div>
                          <div className={`text-xl ${previewFont} mt-1 ${
                            isSelected
                              ? isLight ? 'text-violet-700 font-bold' : 'text-violet-200'
                              : isLight ? 'text-zinc-700' : 'text-zinc-300'
                          }`}>
                            {f.preview}
                          </div>
                        </div>
                        {isSelected && (
                          <span className={`w-2 h-2 rounded-full shadow-sm ${
                            isLight ? 'bg-violet-600' : 'bg-violet-400'
                          }`} />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Clock Size */}
              <div className="space-y-2">
                <div className={`flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold ${
                  isLight ? 'text-zinc-800' : 'text-zinc-300'
                }`}>
                  <span>Display Clock Scale</span>
                  <span className={`text-[11px] font-medium lowercase capitalize ${
                    isLight ? 'text-violet-700 font-bold' : 'text-violet-300'
                  }`}>
                    {wallpaperSettings.clockSize || 'standard'}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {CLOCK_SIZES.map((cs) => {
                    const isSelected = (wallpaperSettings.clockSize || 'standard') === cs.id;
                    return (
                      <button
                        key={cs.id}
                        type="button"
                        onClick={() => updateWallpaperSettings({ clockSize: cs.id })}
                        className={`py-2 px-2 rounded-xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? isLight
                              ? 'bg-violet-600 text-white font-bold shadow-sm border-violet-700'
                              : 'bg-violet-600/30 border-violet-400 text-white font-semibold'
                            : isLight
                              ? 'bg-zinc-100 hover:bg-zinc-200/80 border-zinc-200 text-zinc-700 font-medium'
                              : 'bg-white/[0.03] border-white/[0.06] text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.06]'
                        }`}
                      >
                        <div className="text-xs font-display">{cs.label}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Clock Halo / Glow */}
              <div className="space-y-2">
                <div className={`flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold ${
                  isLight ? 'text-zinc-800' : 'text-zinc-300'
                }`}>
                  <span>Backlight Halo</span>
                  <span className={`text-[11px] font-medium lowercase capitalize ${
                    isLight ? 'text-violet-700 font-bold' : 'text-violet-300'
                  }`}>
                    {wallpaperSettings.clockHalo || 'pulsar'}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {(['none', 'subtle', 'pulsar'] as const).map((h) => {
                    const isSelected = (wallpaperSettings.clockHalo || 'pulsar') === h;
                    return (
                      <button
                        key={h}
                        type="button"
                        onClick={() => updateWallpaperSettings({ clockHalo: h })}
                        className={`py-2 px-2 rounded-xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? isLight
                              ? 'bg-violet-600 text-white font-bold shadow-sm border-violet-700'
                              : 'bg-violet-600/30 border-violet-400 text-white font-semibold'
                            : isLight
                              ? 'bg-zinc-100 hover:bg-zinc-200/80 border-zinc-200 text-zinc-700 font-medium'
                              : 'bg-white/[0.03] border-white/[0.06] text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.06]'
                        }`}
                      >
                        <div className="text-xs font-display capitalize">{h}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Format & Details */}
              <div className="space-y-2">
                <div className={`flex items-center gap-2 text-xs font-display uppercase tracking-wider font-semibold ${
                  isLight ? 'text-zinc-800' : 'text-zinc-300'
                }`}>
                  <span>Display Elements</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  {/* 12h vs 24h */}
                  <div className={`flex items-center gap-1 p-1 rounded-2xl border ${
                    isLight ? 'bg-zinc-100 border-zinc-200' : 'bg-white/[0.03] border-white/[0.06]'
                  }`}>
                    <button
                      type="button"
                      onClick={() => updateWallpaperSettings({ clockFormat: '12h' })}
                      className={`flex-1 py-1.5 rounded-xl text-center transition-all cursor-pointer font-sans text-xs ${
                        wallpaperSettings.clockFormat === '12h'
                          ? isLight ? 'bg-violet-600 text-white font-bold shadow-sm' : 'bg-violet-600/40 text-white font-medium'
                          : isLight ? 'text-zinc-600 hover:text-zinc-950 font-medium' : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      12 Hour
                    </button>
                    <button
                      type="button"
                      onClick={() => updateWallpaperSettings({ clockFormat: '24h' })}
                      className={`flex-1 py-1.5 rounded-xl text-center transition-all cursor-pointer font-sans text-xs ${
                        wallpaperSettings.clockFormat === '24h'
                          ? isLight ? 'bg-violet-600 text-white font-bold shadow-sm' : 'bg-violet-600/40 text-white font-medium'
                          : isLight ? 'text-zinc-600 hover:text-zinc-950 font-medium' : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      24 Hour
                    </button>
                  </div>

                  {/* Seconds */}
                  <label className={`flex items-center justify-between p-2.5 rounded-2xl border cursor-pointer transition-colors ${
                    isLight 
                      ? 'bg-zinc-50 hover:bg-zinc-100/90 border-zinc-200/90 text-zinc-900 shadow-sm' 
                      : 'bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] text-zinc-300'
                  }`}>
                    <span className={`font-medium ${isLight ? 'text-zinc-900' : 'text-zinc-300'}`}>Show Seconds</span>
                    <input
                      type="checkbox"
                      checked={wallpaperSettings.showSeconds}
                      onChange={(e) => updateWallpaperSettings({ showSeconds: e.target.checked })}
                      className="w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 accent-violet-600 cursor-pointer"
                    />
                  </label>

                  {/* Date Pill */}
                  <label className={`flex items-center justify-between p-2.5 rounded-2xl border cursor-pointer transition-colors ${
                    isLight 
                      ? 'bg-zinc-50 hover:bg-zinc-100/90 border-zinc-200/90 text-zinc-900 shadow-sm' 
                      : 'bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] text-zinc-300'
                  }`}>
                    <span className={`font-medium ${isLight ? 'text-zinc-900' : 'text-zinc-300'}`}>Show Date Pill</span>
                    <input
                      type="checkbox"
                      checked={wallpaperSettings.showDate !== false}
                      onChange={(e) => updateWallpaperSettings({ showDate: e.target.checked })}
                      className="w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 accent-violet-600 cursor-pointer"
                    />
                  </label>

                  {/* Greeting & Motto */}
                  <label className={`flex items-center justify-between p-2.5 rounded-2xl border cursor-pointer transition-colors ${
                    isLight 
                      ? 'bg-zinc-50 hover:bg-zinc-100/90 border-zinc-200/90 text-zinc-900 shadow-sm' 
                      : 'bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] text-zinc-300'
                  }`}>
                    <span className={`font-medium ${isLight ? 'text-zinc-900' : 'text-zinc-300'}`}>Greeting &amp; Motto</span>
                    <input
                      type="checkbox"
                      checked={wallpaperSettings.showGreeting !== false}
                      onChange={(e) => updateWallpaperSettings({ showGreeting: e.target.checked })}
                      className="w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 accent-violet-600 cursor-pointer"
                    />
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* ═════════════════════════════════════════════════════════ */}
          {/* TAB 4: COLOR PALETTES                                    */}
          {/* ═════════════════════════════════════════════════════════ */}
          {activeSubTab === 'palettes' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PALETTES.map((p) => {
                  const isSelected = wallpaperSettings.palette === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => updateWallpaperSettings({ palette: p.id })}
                      className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-2.5 ${
                        isSelected
                          ? isLight
                            ? 'bg-violet-50 border-violet-500 ring-2 ring-violet-500/20 shadow-sm'
                            : 'bg-violet-600/20 border-violet-400/60 shadow-[0_0_20px_rgba(147,51,234,0.25)]'
                          : isLight
                            ? 'bg-zinc-50 hover:bg-zinc-100 border-zinc-200/90'
                            : 'bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06]'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className={`text-xs font-display font-bold ${
                          isSelected
                            ? isLight ? 'text-violet-950' : 'text-white'
                            : isLight ? 'text-zinc-900' : 'text-zinc-200'
                        }`}>
                          {p.name}
                        </span>
                        {isSelected && (
                          <span className={`w-2 h-2 rounded-full shadow-sm ${
                            isLight ? 'bg-violet-600' : 'bg-violet-400 shadow-[0_0_8px_#a855f7]'
                          }`} />
                        )}
                      </div>

                      <div className={`flex items-center gap-1.5 w-full h-4 rounded-lg overflow-hidden p-0.5 border ${
                        isLight ? 'bg-zinc-200/60 border-zinc-300' : 'bg-black/40 border-white/[0.08]'
                      }`}>
                        {p.previewColors.map((color, idx) => (
                          <div
                            key={idx}
                            className="flex-1 h-full rounded-sm"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>

                      <span className={`text-[10px] font-sans leading-tight ${
                        isSelected
                          ? isLight ? 'text-violet-900/80 font-medium' : 'text-zinc-300'
                          : isLight ? 'text-zinc-600' : 'text-zinc-400'
                      }`}>
                        {p.subtitle}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className={`p-4 border-t flex items-center justify-between text-xs shrink-0 ${
          isLight ? 'border-zinc-200 bg-zinc-50/90' : 'border-white/[0.08] bg-black/30'
        }`}>
          <span className={`font-sans ${isLight ? 'text-zinc-600 font-medium' : 'text-zinc-400'}`}>
            Settings saved automatically
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-display font-medium shadow-md transition-all cursor-pointer"
          >
            Apply & Close
          </button>
        </div>
      </div>
    </div>
  );
};
