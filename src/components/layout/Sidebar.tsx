import React, { useState } from 'react';
import {
  PenTool,
  Flame,
  Clock,
  BookOpen,
  ShieldCheck,
  Feather,
  Activity,
  Target,
  BarChart3,
  Layers,
  Compass,
  ScrollText,
  Monitor,
  Settings,
  Volume2,
  VolumeX,
  Sun,
  Moon,
  ChevronDown,
  ChevronUp,
  Headphones,
} from 'lucide-react';
import { NavView } from '../../types';
import { useData } from '../../context/DataContext';
import { sound } from '../../audio/sound';

interface SidebarProps {
  currentView: NavView;
  onSelectView: (view: NavView) => void;
  className?: string;
  onCloseMobile?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentView,
  onSelectView,
  className = '',
  onCloseMobile,
}) => {
  const { settings, updateSettings, setIsMusicDrawerOpen, isMusicDrawerOpen, activeMusicId } = useData();
  const [isAuditsExpanded, setIsAuditsExpanded] = useState(true);

  // 1. Core Daily Practice (Color-Coded)
  const coreNav: { id: NavView; label: string; icon: React.ElementType; color: string; activeGradient: string }[] = [
    { id: 'daily-tracker', label: 'My Journal', icon: PenTool, color: 'text-purple-400', activeGradient: 'from-purple-500/20 to-pink-500/10 border-purple-500/40 text-purple-200' },
    { id: 'dashboard', label: 'Home Sanctuary', icon: BookOpen, color: 'text-blue-400', activeGradient: 'from-blue-500/20 to-cyan-500/10 border-blue-500/40 text-blue-200' },
    { id: 'studies', label: 'Focus Studio', icon: Clock, color: 'text-cyan-400', activeGradient: 'from-cyan-500/20 to-teal-500/10 border-cyan-500/40 text-cyan-200' },
    { id: 'habits', label: 'Habits & Streaks', icon: Flame, color: 'text-orange-400', activeGradient: 'from-orange-500/20 to-amber-500/10 border-orange-500/40 text-orange-200' },
  ];

  // 2. Inner Architecture & Self-Audit (Color-Coded)
  const innerNav: { id: NavView; label: string; icon: React.ElementType; color: string; activeGradient: string }[] = [
    { id: 'promises', label: 'Promises to Myself', icon: ShieldCheck, color: 'text-rose-400', activeGradient: 'from-rose-500/20 to-pink-500/10 border-rose-500/40 text-rose-200' },
    { id: 'reflections', label: 'Reflections & Inquiries', icon: Feather, color: 'text-pink-400', activeGradient: 'from-pink-500/20 to-purple-500/10 border-pink-500/40 text-pink-200' },
    { id: 'health', label: 'Sleep & Health', icon: Activity, color: 'text-emerald-400', activeGradient: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/40 text-emerald-200' },
    { id: 'goals', label: 'Goals & Horizons', icon: Target, color: 'text-amber-400', activeGradient: 'from-amber-500/20 to-yellow-500/10 border-amber-500/40 text-amber-200' },
    { id: 'weekly-audit', label: 'Weekly Audit', icon: BarChart3, color: 'text-indigo-400', activeGradient: 'from-indigo-500/20 to-blue-500/10 border-indigo-500/40 text-indigo-200' },
    { id: 'monthly-review', label: 'Monthly Review', icon: Layers, color: 'text-teal-400', activeGradient: 'from-teal-500/20 to-cyan-500/10 border-teal-500/40 text-teal-200' },
    { id: 'life-audit', label: 'Life Wheel', icon: Compass, color: 'text-fuchsia-400', activeGradient: 'from-fuchsia-500/20 to-pink-500/10 border-fuchsia-500/40 text-fuchsia-200' },
    { id: 'manifesto', label: 'Personal Manifesto', icon: ScrollText, color: 'text-yellow-400', activeGradient: 'from-yellow-500/20 to-amber-500/10 border-yellow-500/40 text-yellow-200' },
  ];

  const handleNavClick = (view: NavView) => {
    sound.tick();
    onSelectView(view);
    onCloseMobile?.();
  };

  const toggleSound = () => {
    const next = !settings.soundEffects;
    sound.setEnabled(next);
    updateSettings({ soundEffects: next });
    if (next) {
      sound.unlockAudio();
      sound.complete();
    }
  };

  const toggleTheme = () => {
    sound.tick();
    const next = settings.themeMode === 'parchment' ? 'dark' : 'parchment';
    updateSettings({ themeMode: next });
  };

  const isParchment = settings.themeMode === 'parchment';

  return (
    <aside
      className={`w-64 flex flex-col bg-[#0B0D13] border-r border-white/[0.08] text-white h-full select-none transition-colors duration-200 ${className}`}
    >
      {/* 1. BRAND MASTHEAD WITH COLORFUL GRADIENT EMBLEM */}
      <div className="px-5 pt-8 pb-4 border-b border-white/[0.08] flex items-center justify-between shrink-0 bg-white/[0.01]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-500 via-pink-500 to-amber-400 flex items-center justify-center text-white font-heading font-black text-xs tracking-wider shadow-lg shadow-purple-500/30">
            FM
          </div>
          <div>
            <h1 className="text-xs font-heading font-bold tracking-[0.2em] uppercase bg-gradient-to-r from-purple-300 via-pink-300 to-amber-200 bg-clip-text text-transparent">
              FOR ME
            </h1>
            <p className="text-[10px] text-zinc-400 font-sans tracking-tight">
              My Personal Space
            </p>
          </div>
        </div>

        {/* Quiet Quick Toggles */}
        <div className="flex items-center gap-1">
          <button
            onClick={toggleTheme}
            title={isParchment ? 'Switch to Dark Mode' : 'Switch to Parchment Mode'}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
            aria-label="Toggle Theme"
          >
            {isParchment ? <Moon size={13} className="text-indigo-400" /> : <Sun size={13} className="text-amber-400" />}
          </button>
          <button
            onClick={toggleSound}
            title={settings.soundEffects ? 'Sound active (Click to mute)' : 'Sound muted'}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
            aria-label="Toggle Sound"
          >
            {settings.soundEffects ? <Volume2 size={13} className="text-purple-400" /> : <VolumeX size={13} />}
          </button>
        </div>
      </div>

      {/* 2. NAVIGATION BODY */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-4">
        {/* Core Daily Practice */}
        <div className="space-y-1">
          <div className="px-3 pb-1">
            <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-purple-400 font-semibold">
              Daily Practice
            </span>
          </div>
          {coreNav.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`
                  w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-sans transition-all focus:outline-none focus:ring-1 focus:ring-purple-400
                  ${isActive
                    ? `bg-gradient-to-r ${item.activeGradient} font-semibold border shadow-md`
                    : 'text-zinc-300 hover:text-white hover:bg-white/[0.05]'
                  }
                `}
              >
                <div className="flex items-center gap-2.5">
                  <Icon
                    size={16}
                    className={item.color}
                  />
                  <span>{item.label}</span>
                </div>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.9)]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Full Screen Desk Mode */}
        <div className="pt-2 border-t border-white/[0.06]">
          <button
            type="button"
            onClick={() => handleNavClick('wallpaper')}
            className={`
              w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-sans transition-all group focus:outline-none focus:ring-1 focus:ring-cyan-400
              ${currentView === 'wallpaper'
                ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/10 text-cyan-200 font-semibold border border-cyan-500/30'
                : 'text-zinc-300 hover:text-white hover:bg-white/[0.04]'
              }
            `}
          >
            <div className="flex items-center gap-2.5">
              <Monitor size={15} className="text-cyan-400" />
              <span>Full Screen Desk</span>
            </div>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-500/15 text-cyan-300 font-mono border border-cyan-500/30">
              HUD
            </span>
          </button>
        </div>

        {/* Inner Architecture & Trackers */}
        <div className="pt-2 border-t border-white/[0.06] space-y-1">
          <button
            type="button"
            onClick={() => {
              sound.tick();
              setIsAuditsExpanded(!isAuditsExpanded);
            }}
            className="w-full flex items-center justify-between px-3 py-1.5 text-[10px] uppercase font-mono tracking-[0.18em] text-zinc-400 hover:text-white transition-colors"
          >
            <span className="font-semibold text-zinc-400">Trackers &amp; Mindset</span>
            {isAuditsExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
          </button>

          {isAuditsExpanded && (
            <div className="space-y-1 pt-0.5">
              {innerNav.map((item) => {
                const Icon = item.icon;
                const isActive = currentView === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={`
                      w-full flex items-center gap-2.5 px-3 py-1.5 rounded-xl text-xs font-sans transition-all focus:outline-none focus:ring-1 focus:ring-purple-400
                      ${isActive
                        ? `bg-gradient-to-r ${item.activeGradient} font-semibold border shadow-sm`
                        : 'text-zinc-400 hover:text-white hover:bg-white/[0.03]'
                      }
                    `}
                  >
                    <Icon size={14} className={item.color} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </nav>

      {/* 3. FOOTER CONTROLS: FOCUS AUDIO & SETTINGS */}
      <div className="p-3 border-t border-white/[0.08] space-y-1.5 bg-black/40">
        <button
          type="button"
          onClick={() => {
            sound.tick();
            setIsMusicDrawerOpen(true);
            onCloseMobile?.();
          }}
          className={`
            w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-sans transition-all focus:outline-none focus:ring-1 focus:ring-emerald-400
            ${isMusicDrawerOpen
              ? 'bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30'
              : 'text-zinc-300 hover:text-white hover:bg-white/[0.04]'
            }
          `}
        >
          <div className="flex items-center gap-2.5">
            <Headphones size={15} className={activeMusicId ? 'text-emerald-400 animate-bounce' : 'text-emerald-400'} />
            <span>Focus Music</span>
          </div>
          {activeMusicId ? (
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)] animate-pulse" title="Music Playing" />
          ) : (
            <span className="text-[10px] text-zinc-500 font-mono">Lofi</span>
          )}
        </button>

        <button
          type="button"
          onClick={() => handleNavClick('settings')}
          className={`
            w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-sans transition-all focus:outline-none focus:ring-1 focus:ring-white
            ${currentView === 'settings'
              ? 'bg-white/[0.1] text-white font-semibold border border-white/[0.2]'
              : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
            }
          `}
        >
          <Settings size={15} className="text-zinc-400" />
          <span>Settings</span>
        </button>

        {/* Philosophy Creed */}
        <div className="pt-2 px-2 border-t border-white/[0.04]">
          <p className="text-[10px] font-sans text-purple-300/70 leading-relaxed text-center italic">
            &ldquo;Built for me. No pressure, just progress.&rdquo;
          </p>
        </div>
      </div>
    </aside>
  );
};
