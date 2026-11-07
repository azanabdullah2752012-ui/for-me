import React from 'react';
import { 
  X, 
  Palette, 
  Waves, 
  Sparkles, 
  Sliders, 
  Clock, 
  RotateCcw,
  Zap
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { CosmicPalette, WaveSpeed, WaveAmplitude } from '../../types';

interface WallpaperStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

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

const SPEED_OPTIONS: { id: WaveSpeed; label: string; desc: string }[] = [
  { id: 'frozen', label: 'Frozen', desc: '0x • Still Art' },
  { id: 'calm', label: 'Calm', desc: '0.4x • Serene' },
  { id: 'balanced', label: 'Balanced', desc: '0.85x • Fluid' },
  { id: 'dynamic', label: 'Dynamic', desc: '1.4x • Living' },
];

const AMPLITUDE_OPTIONS: { id: WaveAmplitude; label: string; desc: string }[] = [
  { id: 'subtle', label: 'Subtle', desc: 'Gentle dunes' },
  { id: 'majestic', label: 'Majestic', desc: 'Balanced crests' },
  { id: 'dramatic', label: 'Dramatic', desc: 'Deep waves' },
];

export const WallpaperStudioModal: React.FC<WallpaperStudioModalProps> = ({ isOpen, onClose }) => {
  const { wallpaperSettings, updateWallpaperSettings } = useData();

  if (!isOpen) return null;

  const handleResetDefaults = () => {
    updateWallpaperSettings({
      palette: 'cosmic-royal',
      speed: 'balanced',
      amplitude: 'majestic',
      showStars: true,
      showCrossStars: true,
      showShootingStars: true,
      showOrbitalTrack: true,
      showMeridian: true,
      clockFormat: '12h',
      showSeconds: true,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn select-none">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="wallpaper-studio-title"
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl cosmic-card p-6 border border-white/[0.12] shadow-2xl flex flex-col space-y-6 z-10"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-violet-600/30 border border-violet-400/40 flex items-center justify-center text-violet-300">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <h2 id="wallpaper-studio-title" className="text-sm font-display uppercase tracking-widest text-white font-bold">
                Wallpaper Studio
              </h2>
              <p className="text-[11px] text-zinc-400 font-sans">
                Customize colors, fluid kinematics & celestial layers
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleResetDefaults}
              aria-label="Reset to default settings"
              title="Reset to Defaults"
              className="p-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close Wallpaper Studio"
              className="p-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 1. Color Palettes */}
        <div className="space-y-2.5">
          <div className="flex items-center gap-2 text-xs font-display uppercase tracking-wider text-zinc-300 font-semibold">
            <Palette className="w-3.5 h-3.5 text-violet-400" />
            <span>Atmospheric Palette (Dark Top $\rightarrow$ Light Floor)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {PALETTES.map((p) => {
              const isSelected = wallpaperSettings.palette === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => updateWallpaperSettings({ palette: p.id })}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                    isSelected
                      ? 'bg-violet-600/20 border-violet-400/60 shadow-[0_0_20px_rgba(147,51,234,0.25)]'
                      : 'bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.12]'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xs font-display font-medium text-white">{p.name}</span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_8px_#a855f7]" />
                    )}
                  </div>

                  {/* Palette Swatch Strip */}
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

        {/* 2. Wave Kinematics (Speed & Amplitude) */}
        <div className="space-y-4 pt-1">
          {/* Wave Speed */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-display uppercase tracking-wider text-zinc-300 font-semibold">
              <div className="flex items-center gap-2">
                <Waves className="w-3.5 h-3.5 text-cyan-400" />
                <span>Wave Motion Speed</span>
              </div>
              <span className="text-[11px] text-violet-300 font-normal lowercase capitalize">
                {wallpaperSettings.speed}
              </span>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {SPEED_OPTIONS.map((opt) => {
                const isSelected = wallpaperSettings.speed === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => updateWallpaperSettings({ speed: opt.id })}
                    className={`py-2 px-1 rounded-xl border text-center transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-violet-600/30 border-violet-400 text-white font-semibold'
                        : 'bg-white/[0.03] border-white/[0.06] text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.06]'
                    }`}
                  >
                    <div className="text-xs font-display">{opt.label}</div>
                    <div className="text-[9px] text-zinc-500 font-sans leading-none mt-0.5">{opt.desc}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Wave Amplitude */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-display uppercase tracking-wider text-zinc-300 font-semibold">
              <div className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Wave Height & Amplitude</span>
              </div>
              <span className="text-[11px] text-violet-300 font-normal lowercase capitalize">
                {wallpaperSettings.amplitude}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {AMPLITUDE_OPTIONS.map((opt) => {
                const isSelected = wallpaperSettings.amplitude === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => updateWallpaperSettings({ amplitude: opt.id })}
                    className={`py-2 px-2 rounded-xl border text-center transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-violet-600/30 border-violet-400 text-white font-semibold'
                        : 'bg-white/[0.03] border-white/[0.06] text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.06]'
                    }`}
                  >
                    <div className="text-xs font-display">{opt.label}</div>
                    <div className="text-[10px] text-zinc-500 font-sans leading-none mt-0.5">{opt.desc}</div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3. Celestial Telemetry & Atmosphere */}
        <div className="space-y-2.5 pt-1">
          <div className="flex items-center gap-2 text-xs font-display uppercase tracking-wider text-zinc-300 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Atmospheric Celestial Layers</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            {/* Cross Flare Stars */}
            <label className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] cursor-pointer hover:bg-white/[0.06] transition-colors">
              <span className="text-zinc-300 font-sans">Cross Flare Stars</span>
              <input
                type="checkbox"
                checked={wallpaperSettings.showCrossStars}
                onChange={(e) => updateWallpaperSettings({ showCrossStars: e.target.checked })}
                className="w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 bg-zinc-900 border-zinc-700"
              />
            </label>

            {/* Shooting Stars */}
            <label className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] cursor-pointer hover:bg-white/[0.06] transition-colors">
              <span className="text-zinc-300 font-sans">Shooting Stars</span>
              <input
                type="checkbox"
                checked={wallpaperSettings.showShootingStars}
                onChange={(e) => updateWallpaperSettings({ showShootingStars: e.target.checked })}
                className="w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 bg-zinc-900 border-zinc-700"
              />
            </label>

            {/* Orbital Trajectory Arc */}
            <label className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] cursor-pointer hover:bg-white/[0.06] transition-colors">
              <span className="text-zinc-300 font-sans">Orbital Arc</span>
              <input
                type="checkbox"
                checked={wallpaperSettings.showOrbitalTrack}
                onChange={(e) => updateWallpaperSettings({ showOrbitalTrack: e.target.checked })}
                className="w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 bg-zinc-900 border-zinc-700"
              />
            </label>

            {/* Celestial Meridian */}
            <label className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] cursor-pointer hover:bg-white/[0.06] transition-colors">
              <span className="text-zinc-300 font-sans">Meridian Grid</span>
              <input
                type="checkbox"
                checked={wallpaperSettings.showMeridian}
                onChange={(e) => updateWallpaperSettings({ showMeridian: e.target.checked })}
                className="w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 bg-zinc-900 border-zinc-700"
              />
            </label>
          </div>
        </div>

        {/* 4. Clock Configuration */}
        <div className="space-y-2.5 pt-1">
          <div className="flex items-center gap-2 text-xs font-display uppercase tracking-wider text-zinc-300 font-semibold">
            <Clock className="w-3.5 h-3.5 text-blue-400" />
            <span>Clock Display</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-1 p-1 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <button
                type="button"
                onClick={() => updateWallpaperSettings({ clockFormat: '12h' })}
                className={`flex-1 py-1.5 rounded-lg text-center transition-all ${
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
                className={`flex-1 py-1.5 rounded-lg text-center transition-all ${
                  wallpaperSettings.clockFormat === '24h'
                    ? 'bg-violet-600/40 text-white font-medium'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                24 Hour
              </button>
            </div>

            <label className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] cursor-pointer hover:bg-white/[0.06] transition-colors">
              <span className="text-zinc-300 font-sans">Show Seconds</span>
              <input
                type="checkbox"
                checked={wallpaperSettings.showSeconds}
                onChange={(e) => updateWallpaperSettings({ showSeconds: e.target.checked })}
                className="w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 bg-zinc-900 border-zinc-700"
              />
            </label>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs">
          <span className="text-zinc-500 font-sans">Saved automatically</span>
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
