import React, { useState, useEffect } from 'react';
import { X, Check, Eye, Sparkles, Compass } from 'lucide-react';
import { useData } from '../../context/DataContext';
import { WallpaperTheme } from '../../types';

import cosmicCliffsThumb from '../../assets/wallpapers/cosmic-cliffs.jpg';
import pillarsThumb from '../../assets/wallpapers/pillars-of-creation.jpg';
import deepSpaceThumb from '../../assets/wallpapers/deep-space.jpg';

export interface ThemeDefinition {
  id: WallpaperTheme;
  label: string;
  tag: string;
  swatch: string;
  badge: string;
  image: string;
  description: string;
  mood: string;
  stellarFeature: string;
}

export const ALL_THEMES: ThemeDefinition[] = [
  {
    id: 'deep-space',
    label: 'Deep Cosmic Sanctuary',
    tag: 'Royal Violet Waves & Orbital Arcs',
    swatch: 'from-violet-900 via-indigo-950 to-slate-950',
    badge: 'Cosmic Indigo',
    image: deepSpaceThumb,
    description: 'Signature deep midnight indigo and royal violet cosmos featuring multi-layered flowing nebular ribbons, sweeping orbital trajectory arcs, vertical celestial meridian, and 4-point cross diffraction stars.',
    mood: 'Infinite Focus & Cosmic Sanctuary',
    stellarFeature: 'Royal Violet Waves • Sweeping Orbital Arcs • 4-Point Stars',
  },
  {
    id: 'cosmic-cliffs',
    label: 'Carina Interstellar Dawn',
    tag: 'Amber-Copper Waves & Golden Arcs',
    swatch: 'from-amber-600 via-orange-950 to-stone-950',
    badge: 'Amber Nebula',
    image: cosmicCliffsThumb,
    description: 'Warm interstellar dust clouds with luminous amber-copper and rose-gold undulating wave ribbons, radiant golden orbital trajectories, and warm starlight flares.',
    mood: 'Warm Awakening & Vitality',
    stellarFeature: 'Amber-Copper Waves • Golden Trajectories • Warm Stardust',
  },
  {
    id: 'pillars-of-creation',
    label: 'Cygnus Aurora Abyss',
    tag: 'Teal-Emerald Waves & Cyan Arcs',
    swatch: 'from-teal-600 via-cyan-950 to-slate-950',
    badge: 'Aurora Cosmos',
    image: pillarsThumb,
    description: 'Serene oceanic cosmos featuring glowing cyan, mint, and sea-green auroral ribbons with glowing edge filaments, luminous aquamarine orbital rings, and diamond stars.',
    mood: 'Deep Clarity & Serenity',
    stellarFeature: 'Emerald-Cyan Waves • Aquamarine Arcs • Diamond Flares',
  },
];

interface ThemeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ThemeModal: React.FC<ThemeModalProps> = ({ isOpen, onClose }) => {
  const { wallpaperTheme, setWallpaperTheme, setPreviewTheme } = useData();

  const [selectedThemeId, setSelectedThemeId] = useState<WallpaperTheme>(wallpaperTheme);

  // Sync state when modal opens
  useEffect(() => {
    if (isOpen) {
      setSelectedThemeId(wallpaperTheme);
      setPreviewTheme(wallpaperTheme);
    } else {
      setPreviewTheme(null);
    }
  }, [isOpen, wallpaperTheme, setPreviewTheme]);

  // Handle keyboard shortcuts (Escape to cancel, Enter to apply)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCancel();
      } else if (e.key === 'Enter') {
        handleApply();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedThemeId]);

  if (!isOpen) return null;

  const handleSelectTheme = (themeId: WallpaperTheme) => {
    setSelectedThemeId(themeId);
    setPreviewTheme(themeId);
  };

  const handleApply = () => {
    setWallpaperTheme(selectedThemeId);
    setPreviewTheme(null);
    onClose();
  };

  const handleCancel = () => {
    setPreviewTheme(null);
    onClose();
  };

  const selectedTheme = ALL_THEMES.find((t) => t.id === selectedThemeId) || ALL_THEMES[0];
  const isCurrentlyApplied = wallpaperTheme === selectedThemeId;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
      {/* Semi-transparent backdrop — allows real-time viewing of the real NASA plate behind it */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity cursor-pointer" 
        onClick={handleCancel} 
      />

      {/* Modal Dialog */}
      <div 
        className="relative z-10 w-full max-w-4xl max-h-[92vh] flex flex-col rounded-[2.5rem] bg-gradient-to-b from-[#101328]/95 via-[#0b0e20]/95 to-[#060814]/98 backdrop-blur-3xl border border-white/[0.14] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="theme-modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.08] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-300 shadow-inner">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 id="theme-modal-title" className="font-sans text-base md:text-lg text-white font-semibold flex items-center gap-2">
                Cosmic Sanctuary Atmospheres
                <span className="text-[11px] font-normal text-amber-300/90 px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/25">
                  Living Cosmic Wallpaper
                </span>
              </h3>
              <p className="text-xs text-zinc-400 font-sans mt-0.5">
                Three authentic, flowing deep space nebular ribbons with sweeping orbital arcs and 4-point cross stardust.
              </p>
            </div>
          </div>
          <button 
            type="button"
            onClick={handleCancel} 
            className="p-2.5 rounded-xl text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
            aria-label="Cancel and close theme modal"
            title="Cancel and close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body: Two Columns (Left: 3 Master Themes, Right: Telemetry Inspector) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 p-6 overflow-y-auto">
          {/* Left Column: 3 Master Themes Selection */}
          <div className="lg:col-span-7 space-y-3.5">
            <div className="flex items-center justify-between text-xs text-zinc-400 font-medium px-1">
              <span>Select Atmosphere</span>
              <span className="text-[11px] text-amber-300/80">3 Cosmic Nebular Themes</span>
            </div>

            <div className="space-y-3">
              {ALL_THEMES.map((t) => {
                const isSelected = selectedThemeId === t.id;
                const isSaved = wallpaperTheme === t.id;

                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => handleSelectTheme(t.id)}
                    className={`w-full p-3.5 rounded-2xl border text-left flex items-start gap-4 transition-all relative group cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-r from-amber-500/15 via-violet-600/10 to-transparent border-amber-400/80 text-white shadow-xl shadow-amber-500/10 ring-1 ring-amber-400/40'
                        : 'bg-white/[0.025] border-white/[0.07] text-zinc-300 hover:bg-white/[0.05] hover:border-white/[0.14]'
                    }`}
                  >
                    {/* Real Photograph Thumbnail */}
                    <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/[0.2] shrink-0 shadow-md group-hover:scale-105 transition-transform relative">
                      <img src={t.image} alt={t.label} className="w-full h-full object-cover object-center" />
                      <div className="absolute inset-0 bg-black/20" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-sm font-semibold text-white tracking-tight truncate">
                          {t.label}
                        </span>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.08] text-zinc-300 border border-white/[0.1]">
                            {t.badge}
                          </span>
                          {isSaved && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1 font-medium">
                              <Check className="w-2.5 h-2.5" />
                              Active
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-xs text-zinc-300/90 font-sans line-clamp-2 leading-relaxed">
                        {t.description}
                      </p>

                      <div className="mt-2 flex items-center gap-2 text-[11px] text-amber-200/80 font-sans">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400/80" />
                        <span>{t.stellarFeature}</span>
                      </div>
                    </div>

                    {/* Active pulse dot */}
                    {isSelected && (
                      <span className="absolute top-3.5 right-3.5 w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Live Telemetry Inspector */}
          <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/[0.09] space-y-4">
            <div className="space-y-4">
              {/* Preview Header & Badge */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-sans text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-amber-400" />
                  Live Viewport Sync
                </span>
                {isCurrentlyApplied ? (
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    Currently Applied
                  </span>
                ) : (
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-amber-500/20 text-amber-200 border border-amber-500/40 flex items-center gap-1 animate-pulse">
                    Previewing Atmosphere
                  </span>
                )}
              </div>

              {/* Visual Display Plate */}
              <div className="relative w-full h-44 rounded-2xl overflow-hidden border border-white/[0.18] shadow-2xl flex flex-col justify-end p-4">
                <img 
                  src={selectedTheme.image} 
                  alt={selectedTheme.label} 
                  className="absolute inset-0 w-full h-full object-cover object-center" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
                
                {/* Dynamic details inside preview card */}
                <div className="relative z-10 space-y-1">
                  <span className="text-[10px] uppercase font-sans tracking-widest text-amber-200/90 font-semibold">
                    {selectedTheme.tag}
                  </span>
                  <h4 className="text-base font-bold text-white drop-shadow-md">
                    {selectedTheme.label}
                  </h4>
                  <p className="text-xs text-white/85 font-sans">
                    {selectedTheme.stellarFeature}
                  </p>
                </div>
              </div>

              {/* Descriptive Walkthrough */}
              <div className="space-y-2 text-xs font-sans">
                <div className="flex items-center justify-between text-zinc-400 border-b border-white/[0.06] pb-2">
                  <span>Atmosphere Mood:</span>
                  <span className="text-zinc-100 font-semibold">{selectedTheme.mood}</span>
                </div>
                <div className="flex items-center justify-between text-zinc-400 border-b border-white/[0.06] pb-2">
                  <span>Visual Source:</span>
                  <span className="text-zinc-200">Custom 60fps Cosmic Canvas Engine</span>
                </div>
                <p className="text-zinc-300 text-xs leading-relaxed pt-1">
                  {selectedTheme.description}
                </p>
                <div className="pt-2 flex items-center gap-1.5 text-[11px] text-zinc-400">
                  <Compass className="w-3 h-3 text-amber-400 shrink-0" />
                  <span>The background behind this window is updating live in real time.</span>
                </div>
              </div>
            </div>

            {/* Action Buttons: Apply Theme vs Cancel */}
            <div className="space-y-2 pt-3 border-t border-white/[0.08]">
              <button
                type="button"
                onClick={handleApply}
                className="w-full py-3 px-4 rounded-xl font-medium text-xs text-black bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 active:scale-[0.99] transition-all shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 cursor-pointer font-semibold"
              >
                <Check className="w-4 h-4" />
                {isCurrentlyApplied ? 'Keep Active Atmosphere' : 'Apply Atmosphere to App'}
              </button>

              <button
                type="button"
                onClick={handleCancel}
                className="w-full py-2.5 px-4 rounded-xl font-medium text-xs text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-colors cursor-pointer"
              >
                Cancel & Revert
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
