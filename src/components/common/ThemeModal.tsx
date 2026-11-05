import React, { useState, useEffect } from 'react';
import { X, Check, Eye, Sparkles, Compass } from 'lucide-react';
import { useData } from '../../context/DataContext';
import { WallpaperTheme } from '../../types';

interface ThemeDefinition {
  id: WallpaperTheme;
  label: string;
  tag: string;
  swatch: string;
  description: string;
  mood: string;
  category: 'nextgen' | 'classic';
}

export const ALL_THEMES: ThemeDefinition[] = [
  // ── Next-Gen Realms ──
  {
    id: 'andromeda-galaxy',
    label: 'Andromeda Spiral Galaxy',
    tag: 'Rotating Cosmic Core',
    swatch: 'from-[#2e1065] via-[#3b0764] to-[#0f172a]',
    description: 'Rotating logarithmic spiral arms with illuminated galactic nucleus, interstellar dust clouds, and orbiting star clusters.',
    mood: 'Deep Cosmic Wonder',
    category: 'nextgen',
  },
  {
    id: 'lunar-horizon',
    label: 'Luminous Lunar Eclipse',
    tag: 'Atmospheric Horizon Arc',
    swatch: 'from-sky-900 via-cyan-700 to-slate-950',
    description: 'Curved planetary limb with multi-layered Rayleigh atmospheric scattering, corona halo, and orbital twilight.',
    mood: 'Serene Orbital Peace',
    category: 'nextgen',
  },
  {
    id: 'orion-sanctuary',
    label: 'Orion Nebula Sanctuary',
    tag: 'Volumetric Stellar Clouds',
    swatch: 'from-rose-900 via-pink-700 to-purple-950',
    description: 'Volumetric nebular gas pillars with embedded twinkling protostars and ethereal magenta-indigo light.',
    mood: 'Warm Astral Reverie',
    category: 'nextgen',
  },
  {
    id: 'bioluminescent-void',
    label: 'Bioluminescent Abyss',
    tag: 'Deep Ocean Aurora Reef',
    swatch: 'from-teal-900 via-cyan-700 to-slate-950',
    description: 'Deep celestial abyss with bioluminescent cyan filaments and electric midnight starlight.',
    mood: 'Electric Midnight Focus',
    category: 'nextgen',
  },

  // ── Classic Sanctuary Presets ──
  {
    id: 'deep-nebula',
    label: 'Cosmic Violet (Original)',
    tag: 'Classic Living Canvas',
    swatch: 'from-[#1e1035] to-[#0a0518]',
    description: 'The original living canvas with breathing volumetric violet nebulae, ambient stardust, and shooting meteors.',
    mood: 'Timeless Contemplation',
    category: 'classic',
  },
  {
    id: 'pastel-twilight',
    label: 'Pastel Twilight Nebula',
    tag: 'Soft Lilac & Rose Dust',
    swatch: 'from-fuchsia-800 via-pink-700 to-indigo-950',
    description: 'Gentle pastel twilight with lavender haze, soft magenta nebular clouds, and soothing dreamy glow.',
    mood: 'Soft Tranquil Calibre',
    category: 'classic',
  },
  {
    id: 'bioluminescent-cyan',
    label: 'Bioluminescent Cyan',
    tag: 'Cyan Aurora & Mint',
    swatch: 'from-cyan-800 via-teal-700 to-blue-950',
    description: 'Electric cyan and mint aurora curtains dancing over deep oceanic midnight.',
    mood: 'Vibrant Lucid Energy',
    category: 'classic',
  },
  {
    id: 'celestial-rose',
    label: 'Celestial Rose Eclipse',
    tag: 'Rose Gold & Champagne',
    swatch: 'from-rose-800 via-pink-700 to-purple-950',
    description: 'Warm rose gold, champagne starlight, and velvet crimson cosmic corona.',
    mood: 'Refined Introspective Warmth',
    category: 'classic',
  },
  {
    id: 'sonoma-amber',
    label: 'Sonoma Amber',
    tag: 'Warm Golden Hour',
    swatch: 'from-amber-900 to-orange-950',
    description: 'Warm sunset golden hour gradient with amber glow and soothing dusk tones.',
    mood: 'Grounding Evening Warmth',
    category: 'classic',
  },
  {
    id: 'nordic-aurora',
    label: 'Nordic Aurora',
    tag: 'Northern Lights Curtain',
    swatch: 'from-emerald-900 to-teal-950',
    description: 'Vibrant emerald and teal northern lights ribbon rippling across the dark polar sky.',
    mood: 'Crisp Arctic Clarity',
    category: 'classic',
  },
  {
    id: 'rose-eclipse',
    label: 'Rose Eclipse',
    tag: 'Velvet Crimson Corona',
    swatch: 'from-rose-900 to-pink-950',
    description: 'Deep velvet rose corona radiating during a celestial eclipse.',
    mood: 'Passionate Solitude',
    category: 'classic',
  },
  {
    id: 'earth-horizon',
    label: 'Earth Horizon',
    tag: 'Orbital Curvature',
    swatch: 'from-sky-900 to-blue-950',
    description: 'Orbital view of the curved Earth horizon with glowing atmospheric edge.',
    mood: 'Expansive Perspective',
    category: 'classic',
  },
  {
    id: 'constellation',
    label: 'Star Map & Astrolabe',
    tag: 'Astronomical Rings',
    swatch: 'from-indigo-900 to-slate-950',
    description: 'Astronomical star chart with celestial coordinate rings and interconnected constellations.',
    mood: 'Scholarly Precision',
    category: 'classic',
  },
  {
    id: 'solar-flare',
    label: 'Solar Flare',
    tag: 'Radiant Solar Corona',
    swatch: 'from-amber-800 to-orange-950',
    description: 'Radiant solar corona with energetic warm flares and deep space contrast.',
    mood: 'Vigorous Motivation',
    category: 'classic',
  },
  {
    id: 'cyber-obsidian',
    label: 'Cyber Obsidian',
    tag: 'Monochrome Void',
    swatch: 'from-zinc-900 to-black',
    description: 'Pure monochrome dark room aesthetic with minimalist obsidian depth.',
    mood: 'Zero Distraction',
    category: 'classic',
  },
  {
    id: 'graphite-titanium',
    label: 'Graphite Titanium',
    tag: 'Studio Softbox',
    swatch: 'from-zinc-800 to-zinc-950',
    description: 'Matte studio graphite with soft diffused highlights and calm neutral tones.',
    mood: 'Industrial Precision',
    category: 'classic',
  },
  {
    id: 'abyssal-ocean',
    label: 'Abyssal Ocean',
    tag: 'Deep Oceanic Abyss',
    swatch: 'from-cyan-950 to-slate-950',
    description: 'Deep oceanic trench with abyssal blue gradients and underwater tranquility.',
    mood: 'Profound Quietude',
    category: 'classic',
  },
];

interface ThemeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ThemeModal: React.FC<ThemeModalProps> = ({ isOpen, onClose }) => {
  const { wallpaperTheme, setWallpaperTheme, setPreviewTheme } = useData();

  // Find theme category of current theme
  const currentThemeDef = ALL_THEMES.find((t) => t.id === wallpaperTheme);
  const initialCategory = currentThemeDef?.category || 'nextgen';

  const [category, setCategory] = useState<'nextgen' | 'classic'>(initialCategory);
  const [selectedThemeId, setSelectedThemeId] = useState<WallpaperTheme>(wallpaperTheme);

  // Sync state when modal opens
  useEffect(() => {
    if (isOpen) {
      setSelectedThemeId(wallpaperTheme);
      setPreviewTheme(wallpaperTheme);
      if (currentThemeDef) {
        setCategory(currentThemeDef.category);
      }
    } else {
      // Clear live preview when modal is closed without applying
      setPreviewTheme(null);
    }
  }, [isOpen, wallpaperTheme]);

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
    // Instantly preview theme on the background canvas in real time
    setPreviewTheme(themeId);
  };

  const handleApply = () => {
    setWallpaperTheme(selectedThemeId);
    setPreviewTheme(null);
    onClose();
  };

  const handleCancel = () => {
    // Revert preview back to original wallpaper theme
    setPreviewTheme(null);
    onClose();
  };

  const selectedTheme = ALL_THEMES.find((t) => t.id === selectedThemeId) || ALL_THEMES[0];
  const isCurrentlyApplied = wallpaperTheme === selectedThemeId;
  const filteredThemes = ALL_THEMES.filter((t) => t.category === category);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
      {/* Semi-transparent backdrop — allows real-time viewing of the canvas behind it */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={handleCancel} 
      />

      {/* Modal Dialog */}
      <div 
        className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col rounded-[2rem] bg-gradient-to-b from-[#101225]/95 via-[#0b0d1c]/95 to-[#070814]/98 backdrop-blur-3xl border border-white/[0.12] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="theme-modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-300">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 id="theme-modal-title" className="font-sans text-base md:text-lg text-white font-semibold flex items-center gap-2">
                Atmosphere & Themes
                <span className="text-[11px] font-normal text-violet-300/80 px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20">
                  Live Preview Mode
                </span>
              </h3>
              <p className="text-xs text-zinc-400 font-sans">
                Click any theme to preview it live across your entire screen before applying.
              </p>
            </div>
          </div>
          <button 
            onClick={handleCancel} 
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
            title="Cancel and close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body: Two Columns (Left: Theme Selector, Right: Preview Inspector) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 p-6 overflow-y-auto">
          {/* Left Column: Category Switcher & Themes Grid (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Category Toggle */}
            <div className="flex p-1 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-xs font-sans">
              <button
                type="button"
                onClick={() => setCategory('nextgen')}
                className={`flex-1 py-2 px-3 rounded-xl font-medium transition-all flex items-center justify-center gap-1.5 ${
                  category === 'nextgen'
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                <span>✦ Next-Gen Realms</span>
                <span className="text-[10px] opacity-75 px-1.5 py-0.5 rounded-md bg-black/30">
                  4
                </span>
              </button>
              <button
                type="button"
                onClick={() => setCategory('classic')}
                className={`flex-1 py-2 px-3 rounded-xl font-medium transition-all flex items-center justify-center gap-1.5 ${
                  category === 'classic'
                    ? 'bg-white/[0.12] text-white shadow-md'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                <span>Classic Sanctuary</span>
                <span className="text-[10px] opacity-75 px-1.5 py-0.5 rounded-md bg-black/30">
                  13
                </span>
              </button>
            </div>

            {/* Themes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[46vh] overflow-y-auto pr-1">
              {filteredThemes.map((t) => {
                const isSelected = selectedThemeId === t.id;
                const isSaved = wallpaperTheme === t.id;

                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => handleSelectTheme(t.id)}
                    className={`p-3 rounded-2xl border text-left flex items-start gap-3 transition-all relative group cursor-pointer ${
                      isSelected
                        ? 'bg-violet-600/20 border-violet-400/90 text-white shadow-lg shadow-violet-500/10 ring-1 ring-violet-400/40'
                        : 'bg-white/[0.025] border-white/[0.06] text-zinc-300 hover:bg-white/[0.05] hover:border-white/[0.12]'
                    }`}
                  >
                    {/* Swatch gradient */}
                    <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${t.swatch} border border-white/[0.15] shrink-0 mt-0.5 shadow-sm group-hover:scale-105 transition-transform`} />

                    <div className="truncate flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-xs font-medium block truncate text-white">
                          {t.label}
                        </span>
                        {isSaved && (
                          <span className="shrink-0 text-[9px] px-1.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                            Active
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-zinc-400 block truncate font-sans">
                        {t.tag}
                      </span>
                    </div>

                    {/* Preview eye indicator */}
                    {isSelected && (
                      <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-violet-400 animate-ping" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Live Preview Inspector (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-4">
            <div className="space-y-4">
              {/* Preview Header & Badge */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-sans text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-violet-400" />
                  Live Preview
                </span>
                {isCurrentlyApplied ? (
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    Currently Active
                  </span>
                ) : (
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-violet-500/20 text-violet-200 border border-violet-500/40 flex items-center gap-1 animate-pulse">
                    Previewing Screen
                  </span>
                )}
              </div>

              {/* Visual Display Plate */}
              <div className="relative w-full h-32 rounded-2xl overflow-hidden border border-white/[0.12] shadow-inner flex flex-col justify-end p-4">
                {/* Background swatch preview */}
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedTheme.swatch} opacity-90`} />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-black/60" />
                
                {/* Dynamic details inside preview card */}
                <div className="relative z-10 space-y-0.5">
                  <span className="text-[10px] uppercase font-sans tracking-widest text-white/70">
                    {selectedTheme.category === 'nextgen' ? '✦ Next-Gen Celestial Realm' : 'Classic Sanctuary'}
                  </span>
                  <h4 className="text-sm font-semibold text-white drop-shadow-md">
                    {selectedTheme.label}
                  </h4>
                  <p className="text-[11px] text-white/80 font-sans">
                    {selectedTheme.tag}
                  </p>
                </div>
              </div>

              {/* Descriptive Walkthrough */}
              <div className="space-y-2 text-xs font-sans">
                <div className="flex items-center justify-between text-zinc-400 border-b border-white/[0.06] pb-2">
                  <span>Atmosphere:</span>
                  <span className="text-zinc-200 font-medium">{selectedTheme.mood}</span>
                </div>
                <p className="text-zinc-300 text-xs leading-relaxed pt-1">
                  {selectedTheme.description}
                </p>
                <div className="pt-2 flex items-center gap-1.5 text-[11px] text-zinc-400">
                  <Compass className="w-3 h-3 text-violet-400 shrink-0" />
                  <span>The background behind this window is rendering this live right now.</span>
                </div>
              </div>
            </div>

            {/* Action Buttons: Apply Theme vs Cancel */}
            <div className="space-y-2 pt-3 border-t border-white/[0.08]">
              <button
                type="button"
                onClick={handleApply}
                className="w-full py-2.5 px-4 rounded-xl font-medium text-xs text-white bg-violet-600 hover:bg-violet-500 active:scale-[0.99] transition-all shadow-lg shadow-violet-600/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Check className="w-4 h-4" />
                {isCurrentlyApplied ? 'Keep Current Theme' : 'Apply Theme'}
              </button>

              <button
                type="button"
                onClick={handleCancel}
                className="w-full py-2 px-4 rounded-xl font-medium text-xs text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-colors cursor-pointer"
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
