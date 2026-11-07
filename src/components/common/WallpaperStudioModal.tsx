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
  const { wallpaperSettings, updateWallpaperSettings } = useData();
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn select-none">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="wallpaper-studio-title"
        className="relative w-full max-w-xl max-h-[88vh] overflow-hidden rounded-3xl cosmic-card border border-white/[0.14] shadow-2xl flex flex-col z-10"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 pb-3 border-b border-white/[0.08] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-violet-600/30 border border-violet-400/40 flex items-center justify-center text-violet-300">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <h2 id="wallpaper-studio-title" className="text-sm font-display uppercase tracking-widest text-white font-bold">
                Wallpaper Studio
              </h2>
              <p className="text-[11px] text-zinc-400 font-sans">
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
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close Wallpaper Studio"
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Studio Navigation Tabs */}
        <div className="flex items-center gap-1 px-5 pt-3 border-b border-white/[0.06] bg-black/20 shrink-0">
          <button
            type="button"
            onClick={() => setActiveSubTab('celestial')}
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-display font-medium border-b-2 transition-all cursor-pointer ${
              activeSubTab === 'celestial'
                ? 'border-violet-400 text-white'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Moon className="w-3.5 h-3.5 text-amber-300" />
            <span>Celestial Objects</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSubTab('waves')}
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-display font-medium border-b-2 transition-all cursor-pointer ${
              activeSubTab === 'waves'
                ? 'border-violet-400 text-white'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Waves className="w-3.5 h-3.5 text-cyan-300" />
            <span>Wave Architecture</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSubTab('clock')}
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-display font-medium border-b-2 transition-all cursor-pointer ${
              activeSubTab === 'clock'
                ? 'border-violet-400 text-white'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Clock className="w-3.5 h-3.5 text-violet-300" />
            <span>Clock Studio</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSubTab('palettes')}
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-display font-medium border-b-2 transition-all cursor-pointer ${
              activeSubTab === 'palettes'
                ? 'border-violet-400 text-white'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Palette className="w-3.5 h-3.5 text-purple-300" />
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
                <div className="flex items-center justify-between text-xs font-display uppercase tracking-wider text-zinc-300 font-semibold">
                  <div className="flex items-center gap-2">
                    <Moon className="w-3.5 h-3.5 text-amber-300" />
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
                            ? 'bg-amber-400/15 border-amber-400/60 shadow-[0_0_20px_rgba(251,191,36,0.2)]'
                            : 'bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-display font-medium text-white">{b.name}</span>
                          {isSelected && <span className="w-2 h-2 rounded-full bg-amber-400 shadow-sm" />}
                        </div>
                        <span className="text-[10px] text-zinc-400 font-sans mt-1 leading-tight">{b.desc}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Extra Celestial Features */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-display uppercase tracking-wider text-zinc-300 font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                  <span>Astronomical Cosmic Features</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {/* Constellations */}
                  <label className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] cursor-pointer hover:bg-white/[0.06] transition-colors">
                    <div>
                      <div className="text-zinc-200 font-medium">Constellation Charts</div>
                      <div className="text-[10px] text-zinc-400 font-sans">Ursa Major & Cassiopeia chords</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={wallpaperSettings.showConstellations}
                      onChange={(e) => updateWallpaperSettings({ showConstellations: e.target.checked })}
                      className="w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 bg-zinc-900 border-zinc-700"
                    />
                  </label>

                  {/* Periodic Comet */}
                  <label className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] cursor-pointer hover:bg-white/[0.06] transition-colors">
                    <div>
                      <div className="text-zinc-200 font-medium">Cosmic Comet</div>
                      <div className="text-[10px] text-zinc-400 font-sans">Sweeping ion dust tail</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={wallpaperSettings.showComet}
                      onChange={(e) => updateWallpaperSettings({ showComet: e.target.checked })}
                      className="w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 bg-zinc-900 border-zinc-700"
                    />
                  </label>

                  {/* Volumetric Nebula Dust */}
                  <label className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] cursor-pointer hover:bg-white/[0.06] transition-colors">
                    <div>
                      <div className="text-zinc-200 font-medium">Volumetric Nebula</div>
                      <div className="text-[10px] text-zinc-400 font-sans">Interstellar atmospheric clouds</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={wallpaperSettings.showNebulaDust}
                      onChange={(e) => updateWallpaperSettings({ showNebulaDust: e.target.checked })}
                      className="w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 bg-zinc-900 border-zinc-700"
                    />
                  </label>

                  {/* Orbital Arc */}
                  <label className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] cursor-pointer hover:bg-white/[0.06] transition-colors">
                    <div>
                      <div className="text-zinc-200 font-medium">Orbital Trajectory Arc</div>
                      <div className="text-[10px] text-zinc-400 font-sans">Elliptical planetary telemetry</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={wallpaperSettings.showOrbitalTrack}
                      onChange={(e) => updateWallpaperSettings({ showOrbitalTrack: e.target.checked })}
                      className="w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 bg-zinc-900 border-zinc-700"
                    />
                  </label>

                  {/* Celestial Meridian */}
                  <label className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] cursor-pointer hover:bg-white/[0.06] transition-colors">
                    <div>
                      <div className="text-zinc-200 font-medium">Celestial Meridian</div>
                      <div className="text-[10px] text-zinc-400 font-sans">Vertical astronomical ticks</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={wallpaperSettings.showMeridian}
                      onChange={(e) => updateWallpaperSettings({ showMeridian: e.target.checked })}
                      className="w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 bg-zinc-900 border-zinc-700"
                    />
                  </label>

                  {/* Cross Flare Stars */}
                  <label className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] cursor-pointer hover:bg-white/[0.06] transition-colors">
                    <div>
                      <div className="text-zinc-200 font-medium">Diffraction Cross Stars</div>
                      <div className="text-[10px] text-zinc-400 font-sans">4-point diamond optical flares</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={wallpaperSettings.showCrossStars}
                      onChange={(e) => updateWallpaperSettings({ showCrossStars: e.target.checked })}
                      className="w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 bg-zinc-900 border-zinc-700"
                    />
                  </label>
                </div>
              </div>

              {/* Shooting Star Intensity */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-display uppercase tracking-wider text-zinc-300 font-semibold">
                  <div className="flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Shooting Star Frequency</span>
                  </div>
                  <span className="text-[11px] text-violet-300 font-normal lowercase capitalize">
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
                            ? 'bg-cyan-600/30 border-cyan-400 text-white font-semibold'
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
                <div className="flex items-center gap-2 text-xs font-display uppercase tracking-wider text-zinc-300 font-semibold">
                  <Waves className="w-3.5 h-3.5 text-cyan-400" />
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
                            ? 'bg-cyan-600/20 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.2)]'
                            : 'bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-display font-medium text-white">{g.name}</span>
                          {isSelected && <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-sm" />}
                        </div>
                        <span className="text-[10px] text-zinc-400 font-sans mt-1 leading-tight">{g.desc}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Layer Density */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-display uppercase tracking-wider text-zinc-300 font-semibold">
                  <div className="flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-violet-400" />
                    <span>Layer Density (Stratification)</span>
                  </div>
                  <span className="text-[11px] text-violet-300 font-normal lowercase capitalize">
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
                            ? 'bg-violet-600/30 border-violet-400 text-white font-semibold'
                            : 'bg-white/[0.03] border-white/[0.06] text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.06]'
                        }`}
                      >
                        <div className="text-xs font-display">{ld.label}</div>
                        <div className="text-[10px] text-zinc-500 font-sans mt-0.5">{ld.desc}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Wave Speed */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-display uppercase tracking-wider text-zinc-300 font-semibold">
                  <span>Wave Drift Speed</span>
                  <span className="text-[11px] text-violet-300 font-normal lowercase capitalize">
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
                            ? 'bg-violet-600/30 border-violet-400 text-white font-semibold'
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
                <div className="flex items-center justify-between text-xs font-display uppercase tracking-wider text-zinc-300 font-semibold">
                  <span>Wave Crest Amplitude</span>
                  <span className="text-[11px] text-violet-300 font-normal lowercase capitalize">
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
                            ? 'bg-violet-600/30 border-violet-400 text-white font-semibold'
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
                <div className="flex items-center gap-2 text-xs font-display uppercase tracking-wider text-zinc-300 font-semibold">
                  <Type className="w-3.5 h-3.5 text-violet-400" />
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
                            ? 'bg-violet-600/20 border-violet-400 shadow-[0_0_20px_rgba(147,51,234,0.25)]'
                            : 'bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06]'
                        }`}
                      >
                        <div>
                          <div className="text-xs font-display font-medium text-white">{f.label}</div>
                          <div className={`text-xl ${previewFont} text-violet-200 mt-1`}>{f.preview}</div>
                        </div>
                        {isSelected && <span className="w-2 h-2 rounded-full bg-violet-400 shadow-sm" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Clock Size */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-display uppercase tracking-wider text-zinc-300 font-semibold">
                  <span>Display Clock Scale</span>
                  <span className="text-[11px] text-violet-300 font-normal lowercase capitalize">
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
                            ? 'bg-violet-600/30 border-violet-400 text-white font-semibold'
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
                <div className="flex items-center justify-between text-xs font-display uppercase tracking-wider text-zinc-300 font-semibold">
                  <span>Backlight Halo</span>
                  <span className="text-[11px] text-violet-300 font-normal lowercase capitalize">
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
                            ? 'bg-violet-600/30 border-violet-400 text-white font-semibold'
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
                <div className="flex items-center gap-2 text-xs font-display uppercase tracking-wider text-zinc-300 font-semibold">
                  <span>Display Elements</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  {/* 12h vs 24h */}
                  <div className="flex items-center gap-1 p-1 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                    <button
                      type="button"
                      onClick={() => updateWallpaperSettings({ clockFormat: '12h' })}
                      className={`flex-1 py-1.5 rounded-xl text-center transition-all ${
                        wallpaperSettings.clockFormat === '12h'
                          ? 'bg-violet-600/40 text-white font-medium'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      12 Hour
                    </button>
                    <button
                      type="button"
                      onClick={() => updateWallpaperSettings({ clockFormat: '24h' })}
                      className={`flex-1 py-1.5 rounded-xl text-center transition-all ${
                        wallpaperSettings.clockFormat === '24h'
                          ? 'bg-violet-600/40 text-white font-medium'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      24 Hour
                    </button>
                  </div>

                  {/* Seconds */}
                  <label className="flex items-center justify-between p-2.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] cursor-pointer hover:bg-white/[0.06] transition-colors">
                    <span className="text-zinc-300 font-sans">Show Seconds</span>
                    <input
                      type="checkbox"
                      checked={wallpaperSettings.showSeconds}
                      onChange={(e) => updateWallpaperSettings({ showSeconds: e.target.checked })}
                      className="w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 bg-zinc-900 border-zinc-700"
                    />
                  </label>

                  {/* Date Pill */}
                  <label className="flex items-center justify-between p-2.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] cursor-pointer hover:bg-white/[0.06] transition-colors">
                    <span className="text-zinc-300 font-sans">Show Date Pill</span>
                    <input
                      type="checkbox"
                      checked={wallpaperSettings.showDate !== false}
                      onChange={(e) => updateWallpaperSettings({ showDate: e.target.checked })}
                      className="w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 bg-zinc-900 border-zinc-700"
                    />
                  </label>

                  {/* Greeting & Motto */}
                  <label className="flex items-center justify-between p-2.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] cursor-pointer hover:bg-white/[0.06] transition-colors">
                    <span className="text-zinc-300 font-sans">Greeting & Motto</span>
                    <input
                      type="checkbox"
                      checked={wallpaperSettings.showGreeting !== false}
                      onChange={(e) => updateWallpaperSettings({ showGreeting: e.target.checked })}
                      className="w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 bg-zinc-900 border-zinc-700"
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
                          ? 'bg-violet-600/20 border-violet-400/60 shadow-[0_0_20px_rgba(147,51,234,0.25)]'
                          : 'bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06]'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="text-xs font-display font-medium text-white">{p.name}</span>
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_8px_#a855f7]" />
                        )}
                      </div>

                      <div className="flex items-center gap-1.5 w-full h-4 rounded-lg overflow-hidden p-0.5 bg-black/40 border border-white/[0.08]">
                        {p.previewColors.map((color, idx) => (
                          <div
                            key={idx}
                            className="flex-1 h-full rounded-sm"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>

                      <span className="text-[10px] text-zinc-400 font-sans leading-tight">
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
        <div className="p-4 border-t border-white/[0.08] flex items-center justify-between text-xs bg-black/30 shrink-0">
          <span className="text-zinc-500 font-sans">Settings saved automatically</span>
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
