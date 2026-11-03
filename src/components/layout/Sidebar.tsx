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
  const { settings, updateSettings, setIsMusicDrawerOpen, activeMusicId } = useData();
  const [isAuditsExpanded, setIsAuditsExpanded] = useState(true);

  // Core Daily Practice
  const coreNav: { id: NavView; label: string; icon: React.ElementType }[] = [
    { id: 'daily-tracker', label: 'My Journal', icon: PenTool },
    { id: 'dashboard', label: 'Home Sanctuary', icon: BookOpen },
    { id: 'studies', label: 'Focus Studio', icon: Clock },
    { id: 'habits', label: 'Habits & Streaks', icon: Flame },
  ];

  // Trackers & Mindset
  const innerNav: { id: NavView; label: string; icon: React.ElementType }[] = [
    { id: 'promises', label: 'Promises to Myself', icon: ShieldCheck },
    { id: 'reflections', label: 'Reflections & Inquiries', icon: Feather },
    { id: 'health', label: 'Sleep & Health', icon: Activity },
    { id: 'goals', label: 'Goals & Horizons', icon: Target },
    { id: 'weekly-audit', label: 'Weekly Audit', icon: BarChart3 },
    { id: 'monthly-review', label: 'Monthly Review', icon: Layers },
    { id: 'life-audit', label: 'Life Wheel', icon: Compass },
    { id: 'manifesto', label: 'Personal Manifesto', icon: ScrollText },
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
      sound.playLoudChime();
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
      className={`w-64 flex flex-col bg-[#090C14] border-r border-white/[0.07] text-white h-full select-none transition-colors duration-200 ${className}`}
    >
      {/* 1. BRAND MASTHEAD */}
      <div className="px-5 pt-7 pb-4 border-b border-white/[0.06] flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300 font-heading font-bold text-xs tracking-wider shadow-sm">
            FM
          </div>
          <div>
            <h1 className="text-xs font-heading font-extrabold tracking-[0.18em] uppercase text-white">
              FOR ME
            </h1>
            <p className="text-[10px] text-zinc-500 font-sans">
              Personal Space
            </p>
          </div>
        </div>

        {/* Quiet Quick Toggles */}
        <div className="flex items-center gap-0.5">
          <button
            onClick={toggleTheme}
            title={isParchment ? 'Switch to Dark Mode' : 'Switch to Parchment Mode'}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-colors"
            aria-label="Toggle Theme"
          >
            {isParchment ? <Moon size={13} className="text-purple-400" /> : <Sun size={13} />}
          </button>
          <button
            onClick={toggleSound}
            title={settings.soundEffects ? 'Sound active (Click to mute)' : 'Sound muted'}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-colors"
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
            <span className="text-[10px] uppercase font-mono tracking-[0.16em] text-zinc-500 font-semibold">
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
                  w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-sans transition-all focus:outline-none
                  ${isActive
                    ? 'bg-white/[0.08] text-white font-semibold border border-white/[0.1] shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.03]'
                  }
                `}
              >
                <div className="flex items-center gap-2.5">
                  <Icon
                    size={15}
                    className={isActive ? 'text-purple-400' : 'text-zinc-400'}
                  />
                  <span>{item.label}</span>
                </div>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
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
              w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-sans transition-all group focus:outline-none
              ${currentView === 'wallpaper'
                ? 'bg-white/[0.08] text-white font-semibold border border-white/[0.1]'
                : 'text-zinc-400 hover:text-white hover:bg-white/[0.03]'
              }
            `}
          >
            <div className="flex items-center gap-2.5">
              <Monitor size={15} className={currentView === 'wallpaper' ? 'text-cyan-400' : 'text-zinc-400'} />
              <span>Full Screen Desk</span>
            </div>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/[0.06] text-zinc-400 font-mono">
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
            className="w-full flex items-center justify-between px-3 py-1.5 text-[10px] uppercase font-mono tracking-[0.16em] text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <span className="font-semibold">Trackers &amp; Mindset</span>
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
                      w-full flex items-center gap-2.5 px-3 py-1.5 rounded-xl text-xs font-sans transition-all focus:outline-none
                      ${isActive
                        ? 'bg-white/[0.08] text-white font-semibold border border-white/[0.1] shadow-sm'
                        : 'text-zinc-400 hover:text-white hover:bg-white/[0.03]'
                      }
                    `}
                  >
                    <Icon size={14} className={isActive ? 'text-purple-400' : 'text-zinc-400'} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </nav>

      {/* 3. FOOTER CONTROLS: FOCUS AUDIO & SETTINGS */}
      <div className="p-3 border-t border-white/[0.06] space-y-1 bg-black/20">
        <button
          type="button"
          onClick={() => {
            sound.tick();
            setIsMusicDrawerOpen(true);
          }}
          className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-sans text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-all"
        >
          <div className="flex items-center gap-2.5">
            <Headphones size={15} className="text-zinc-400" />
            <span>Focus Music</span>
          </div>
          {activeMusicId && (
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          )}
        </button>

        <button
          type="button"
          onClick={() => handleNavClick('settings')}
          className={`
            w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-sans transition-all
            ${currentView === 'settings'
              ? 'bg-white/[0.08] text-white font-semibold border border-white/[0.1]'
              : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
            }
          `}
        >
          <Settings size={15} />
          <span>Settings</span>
        </button>

        <div className="pt-2 px-3 text-[10px] text-zinc-500 font-sans italic">
          &ldquo;Built for me. No pressure, just progress.&rdquo;
        </div>
      </div>
    </aside>
  );
};
