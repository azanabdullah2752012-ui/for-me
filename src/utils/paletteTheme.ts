import { CosmicPalette, WallpaperTheme } from '../types';

export interface PaletteThemeConfig {
  id: CosmicPalette;
  name: string;
  accent: string;        // Hex code for inline styles
  accentLight: string;   // Soft luminous tint
  accentDark: string;    // Deep shade
  glowRgba: string;      // RGBA string for shadows
  bgSoftRgba: string;    // RGBA string for translucent card backgrounds
  borderRgba: string;    // RGBA string for card borders
  
  // Tailwind utility classes for consistent UI styling
  textCls: string;
  badgeClsDark: string;
  badgeClsLight: string;
  activeCardBorderCls: string;
  activeCardBgClsDark: string;
  activeCardBgClsLight: string;
  iconBgClsDark: string;
  iconBgClsLight: string;
  needleGlowRgba: string;
  horizonGradient: string;
}

export const PALETTE_THEMES: Record<CosmicPalette, PaletteThemeConfig> = {
  'cosmic-royal': {
    id: 'cosmic-royal',
    name: 'Cosmic Royal',
    accent: '#8b5cf6',
    accentLight: '#a78bfa',
    accentDark: '#7c3aed',
    glowRgba: 'rgba(139, 92, 246, 0.45)',
    bgSoftRgba: 'rgba(139, 92, 246, 0.05)',
    borderRgba: 'rgba(139, 92, 246, 0.25)',
    textCls: 'text-violet-400',
    badgeClsDark: 'bg-violet-400/10 text-violet-300 border-violet-400/25',
    badgeClsLight: 'bg-violet-50 text-violet-800 border-violet-200',
    activeCardBorderCls: 'border-violet-400/30',
    activeCardBgClsDark: 'bg-violet-400/[0.04]',
    activeCardBgClsLight: 'bg-violet-50/70',
    iconBgClsDark: 'bg-violet-400/15 text-violet-400 border-violet-400/30',
    iconBgClsLight: 'bg-violet-100 text-violet-700 border-violet-200',
    needleGlowRgba: 'rgba(139, 92, 246, 0.9)',
    horizonGradient: 'from-indigo-950/40 via-purple-900/25 via-violet-950/30 via-purple-900/25 to-indigo-950/40',
  },
  'celestial-cyan': {
    id: 'celestial-cyan',
    name: 'Celestial Cyan',
    accent: '#06b6d4',
    accentLight: '#22d3ee',
    accentDark: '#0891b2',
    glowRgba: 'rgba(6, 182, 212, 0.45)',
    bgSoftRgba: 'rgba(6, 182, 212, 0.05)',
    borderRgba: 'rgba(6, 182, 212, 0.25)',
    textCls: 'text-cyan-400',
    badgeClsDark: 'bg-cyan-400/10 text-cyan-300 border-cyan-400/25',
    badgeClsLight: 'bg-cyan-50 text-cyan-800 border-cyan-200',
    activeCardBorderCls: 'border-cyan-400/30',
    activeCardBgClsDark: 'bg-cyan-400/[0.04]',
    activeCardBgClsLight: 'bg-cyan-50/70',
    iconBgClsDark: 'bg-cyan-400/15 text-cyan-400 border-cyan-400/30',
    iconBgClsLight: 'bg-cyan-100 text-cyan-700 border-cyan-200',
    needleGlowRgba: 'rgba(6, 182, 212, 0.9)',
    horizonGradient: 'from-cyan-950/40 via-teal-900/25 via-sky-950/30 via-teal-900/25 to-cyan-950/40',
  },
  'supernova-sunset': {
    id: 'supernova-sunset',
    name: 'Supernova Sunset',
    accent: '#f43f5e',
    accentLight: '#fb7185',
    accentDark: '#e11d48',
    glowRgba: 'rgba(244, 63, 94, 0.45)',
    bgSoftRgba: 'rgba(244, 63, 94, 0.05)',
    borderRgba: 'rgba(244, 63, 94, 0.25)',
    textCls: 'text-rose-400',
    badgeClsDark: 'bg-rose-400/10 text-rose-300 border-rose-400/25',
    badgeClsLight: 'bg-rose-50 text-rose-800 border-rose-200',
    activeCardBorderCls: 'border-rose-400/30',
    activeCardBgClsDark: 'bg-rose-400/[0.04]',
    activeCardBgClsLight: 'bg-rose-50/70',
    iconBgClsDark: 'bg-rose-400/15 text-rose-400 border-rose-400/30',
    iconBgClsLight: 'bg-rose-100 text-rose-700 border-rose-200',
    needleGlowRgba: 'rgba(244, 63, 94, 0.9)',
    horizonGradient: 'from-rose-950/40 via-amber-900/25 via-red-950/30 via-amber-900/25 to-rose-950/40',
  },
  'solar-gold': {
    id: 'solar-gold',
    name: 'Solar Gold',
    accent: '#f59e0b',
    accentLight: '#fbbf24',
    accentDark: '#d97706',
    glowRgba: 'rgba(245, 158, 11, 0.45)',
    bgSoftRgba: 'rgba(245, 158, 11, 0.05)',
    borderRgba: 'rgba(245, 158, 11, 0.25)',
    textCls: 'text-amber-400',
    badgeClsDark: 'bg-amber-400/10 text-amber-300 border-amber-400/25',
    badgeClsLight: 'bg-amber-50 text-amber-800 border-amber-200',
    activeCardBorderCls: 'border-amber-400/30',
    activeCardBgClsDark: 'bg-amber-400/[0.04]',
    activeCardBgClsLight: 'bg-amber-50/70',
    iconBgClsDark: 'bg-amber-400/15 text-amber-400 border-amber-400/30',
    iconBgClsLight: 'bg-amber-100 text-amber-700 border-amber-200',
    needleGlowRgba: 'rgba(245, 158, 11, 0.9)',
    horizonGradient: 'from-amber-950/40 via-yellow-900/25 via-stone-900/30 via-yellow-900/25 to-amber-950/40',
  },
  'emerald-aurora': {
    id: 'emerald-aurora',
    name: 'Emerald Aurora',
    accent: '#10b981',
    accentLight: '#34d399',
    accentDark: '#059669',
    glowRgba: 'rgba(16, 185, 129, 0.45)',
    bgSoftRgba: 'rgba(16, 185, 129, 0.05)',
    borderRgba: 'rgba(16, 185, 129, 0.25)',
    textCls: 'text-emerald-400',
    badgeClsDark: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/25',
    badgeClsLight: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    activeCardBorderCls: 'border-emerald-400/30',
    activeCardBgClsDark: 'bg-emerald-400/[0.04]',
    activeCardBgClsLight: 'bg-emerald-50/70',
    iconBgClsDark: 'bg-emerald-400/15 text-emerald-400 border-emerald-400/30',
    iconBgClsLight: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    needleGlowRgba: 'rgba(16, 185, 129, 0.9)',
    horizonGradient: 'from-emerald-950/40 via-teal-900/25 via-green-950/30 via-teal-900/25 to-emerald-950/40',
  },
  'cyberpunk-neon': {
    id: 'cyberpunk-neon',
    name: 'Cyberpunk Neon',
    accent: '#ec4899',
    accentLight: '#f472b6',
    accentDark: '#db2777',
    glowRgba: 'rgba(236, 72, 153, 0.45)',
    bgSoftRgba: 'rgba(236, 72, 153, 0.05)',
    borderRgba: 'rgba(236, 72, 153, 0.25)',
    textCls: 'text-pink-400',
    badgeClsDark: 'bg-pink-400/10 text-pink-300 border-pink-400/25',
    badgeClsLight: 'bg-pink-50 text-pink-800 border-pink-200',
    activeCardBorderCls: 'border-pink-400/30',
    activeCardBgClsDark: 'bg-pink-400/[0.04]',
    activeCardBgClsLight: 'bg-pink-50/70',
    iconBgClsDark: 'bg-pink-400/15 text-pink-400 border-pink-400/30',
    iconBgClsLight: 'bg-pink-100 text-pink-700 border-pink-200',
    needleGlowRgba: 'rgba(236, 72, 153, 0.9)',
    horizonGradient: 'from-fuchsia-950/40 via-pink-900/25 via-cyan-950/30 via-pink-900/25 to-fuchsia-950/40',
  },
  'nocturne-silver': {
    id: 'nocturne-silver',
    name: 'Nocturne Silver',
    accent: '#cbd5e1',
    accentLight: '#f1f5f9',
    accentDark: '#64748b',
    glowRgba: 'rgba(203, 213, 225, 0.45)',
    bgSoftRgba: 'rgba(203, 213, 225, 0.05)',
    borderRgba: 'rgba(203, 213, 225, 0.25)',
    textCls: 'text-slate-300',
    badgeClsDark: 'bg-slate-400/10 text-slate-300 border-slate-400/25',
    badgeClsLight: 'bg-slate-100 text-slate-800 border-slate-200',
    activeCardBorderCls: 'border-slate-400/30',
    activeCardBgClsDark: 'bg-slate-400/[0.04]',
    activeCardBgClsLight: 'bg-slate-100/70',
    iconBgClsDark: 'bg-slate-400/15 text-slate-300 border-slate-400/30',
    iconBgClsLight: 'bg-slate-200 text-slate-700 border-slate-300',
    needleGlowRgba: 'rgba(203, 213, 225, 0.9)',
    horizonGradient: 'from-slate-950/40 via-zinc-900/25 via-slate-900/30 via-zinc-900/25 to-slate-950/40',
  },
  'pure-pitch-black': {
    id: 'pure-pitch-black',
    name: 'Pitch Black OLED',
    accent: '#f4f4f5',
    accentLight: '#ffffff',
    accentDark: '#71717a',
    glowRgba: 'rgba(255, 255, 255, 0.45)',
    bgSoftRgba: 'rgba(255, 255, 255, 0.05)',
    borderRgba: 'rgba(255, 255, 255, 0.20)',
    textCls: 'text-zinc-200',
    badgeClsDark: 'bg-white/10 text-zinc-200 border-white/20',
    badgeClsLight: 'bg-zinc-100 text-zinc-900 border-zinc-200',
    activeCardBorderCls: 'border-white/20',
    activeCardBgClsDark: 'bg-white/[0.04]',
    activeCardBgClsLight: 'bg-zinc-100/70',
    iconBgClsDark: 'bg-white/10 text-white border-white/20',
    iconBgClsLight: 'bg-zinc-200 text-zinc-900 border-zinc-300',
    needleGlowRgba: 'rgba(255, 255, 255, 0.9)',
    horizonGradient: 'from-neutral-950/40 via-zinc-900/25 via-neutral-900/30 via-zinc-900/25 to-neutral-950/40',
  },
};

/**
 * Resolves the active color theme configuration based on wallpaper settings and theme.
 */
export const getWallpaperPaletteConfig = (
  palette?: CosmicPalette,
  wallpaperTheme?: WallpaperTheme
): PaletteThemeConfig => {
  if (palette && PALETTE_THEMES[palette]) {
    return PALETTE_THEMES[palette];
  }

  // Fallback to WallpaperTheme if palette is undefined
  if (wallpaperTheme === 'pillars-of-creation') {
    return PALETTE_THEMES['celestial-cyan'];
  }
  if (wallpaperTheme === 'cosmic-cliffs') {
    return PALETTE_THEMES['solar-gold'];
  }
  return PALETTE_THEMES['cosmic-royal'];
};
