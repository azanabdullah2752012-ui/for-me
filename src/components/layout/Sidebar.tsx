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

  // 1. Core Daily Practice
  const coreNav: { id: NavView; label: string; icon: React.ElementType; isPrimary?: boolean }[] = [
    { id: 'wallpaper', label: 'Desktop Clock & Tasks', icon: Monitor, isPrimary: true },
    { id: 'daily-tracker', label: 'Daily Journal & Notes', icon: PenTool },
    { id: 'studies', label: 'Study & Focus Timer', icon: Clock },
    { id: 'habits', label: 'Habits & Streaks', icon: Flame },
    { id: 'dashboard', label: 'Overview & Stats', icon: BookOpen },
  ];

  // 2. Extra Tools & Growth
  const innerNav: { id: NavView; label: string; icon: React.ElementType }[] = [
    { id: 'promises', label: 'Daily Commitments', icon: ShieldCheck },
    { id: 'reflections', label: 'Reflections & Thoughts', icon: Feather },
    { id: 'health', label: 'Sleep & Routine', icon: Activity },
    { id: 'goals', label: 'Goals & Milestones', icon: Target },
    { id: 'weekly-audit', label: 'Weekly Recap', icon: BarChart3 },
    { id: 'monthly-review', label: 'Monthly Recap', icon: Layers },
    { id: 'life-audit', label: 'Life Balance Wheel', icon: Compass },
    { id: 'manifesto', label: 'My Rules & Principles', icon: ScrollText },
  ];

  const handleNavClick = (view: NavView) => {
    sound.tick();
    onSelectView(view);
    onCloseMobile?.();
  };

  const toggleSound = () => {
    const next = !settings.soundEffects;
    updateSettings({ soundEffects: next });
    if (next) sound.complete();
  };

  const toggleTheme = () => {
    sound.tick();
    const next = settings.themeMode === 'parchment' ? 'dark' : 'parchment';
    updateSettings({ themeMode: next });
  };

  const isParchment = settings.themeMode === 'parchment';

  return (
    <aside
      className={`w-64 flex flex-col bg-[#0C0D0F] border-r border-white/[0.08] text-white h-full select-none transition-colors duration-200 ${className}`}
    >
      {/* 1. ARCHITECTURAL BRAND MASTHEAD */}
      <div className="px-5 pt-8 pb-4 border-b border-white/[0.08] flex items-center justify-between shrink-0 bg-white/[0.01]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-white/[0.08] border border-white/[0.15] flex items-center justify-center text-white font-heading font-bold text-xs tracking-wider shadow-sm">
            FM
          </div>
          <div>
            <h1 className="text-xs font-heading font-bold tracking-[0.2em] uppercase text-white">
              FOR ME
            </h1>
            <p className="text-[10px] text-zinc-500 font-mono tracking-tight">
              Personal Workspace
            </p>
          </div>
        </div>

        {/* Quiet Quick Toggles: Theme & Sound */}
        <div className="flex items-center gap-1">
          <button
            onClick={toggleTheme}
            title={isParchment ? 'Switch to Dark Basalt' : 'Switch to Archival Parchment'}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
            aria-label="Toggle Theme"
          >
            {isParchment ? <Moon size={13} /> : <Sun size={13} />}
          </button>
          <button
            onClick={toggleSound}
            title={settings.soundEffects ? 'Sound active (Click to mute)' : 'Sound muted'}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
            aria-label="Toggle Sound"
          >
            {settings.soundEffects ? <Volume2 size={13} className="text-white" /> : <VolumeX size={13} />}
          </button>
        </div>
      </div>

      {/* 2. NAVIGATION BODY */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-4">
        {/* Core Daily Practice */}
        <div className="space-y-1">
          <div className="px-3 pb-1">
            <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-zinc-500 font-semibold">
              Daily Workspace
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
                  w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-sans transition-all focus:outline-none focus:ring-1 focus:ring-white
                  ${isActive
                    ? 'bg-white/[0.1] text-white font-semibold border border-white/[0.2] shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                  }
                  ${item.isPrimary && !isActive ? 'text-zinc-200 font-medium' : ''}
                `}
              >
                <div className="flex items-center gap-2.5">
                  <Icon
                    size={15}
                    className={isActive ? 'text-white' : item.isPrimary ? 'text-zinc-300' : 'text-zinc-500'}
                  />
                  <span>{item.label}</span>
                </div>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                )}
              </button>
            );
          })}
        </div>

        {/* More Tools & Growth */}
        <div className="pt-2 border-t border-white/[0.06] space-y-1">
          <button
            type="button"
            onClick={() => {
              sound.tick();
              setIsAuditsExpanded(!isAuditsExpanded);
            }}
            className="w-full flex items-center justify-between px-3 py-1.5 text-[10px] uppercase font-mono tracking-[0.18em] text-zinc-500 hover:text-white transition-colors"
          >
            <span className="font-semibold text-zinc-500">More Tools &amp; Goals</span>
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
                      w-full flex items-center gap-2.5 px-3 py-1.5 rounded-xl text-xs font-sans transition-all focus:outline-none focus:ring-1 focus:ring-white
                      ${isActive
                        ? 'bg-white/[0.1] text-white font-semibold border border-white/[0.16]'
                        : 'text-zinc-400 hover:text-white hover:bg-white/[0.03]'
                      }
                    `}
                  >
                    <Icon size={14} className={isActive ? 'text-white' : 'text-zinc-500'} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </nav>

      {/* 3. FOOTER CONTROLS: FOCUS AUDIO & SETTINGS */}
      <div className="p-3 border-t border-white/[0.08] space-y-1.5 bg-black/30">
        <button
          type="button"
          onClick={() => {
            sound.tick();
            setIsMusicDrawerOpen(true);
            onCloseMobile?.();
          }}
          className={`
            w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-sans transition-all focus:outline-none focus:ring-1 focus:ring-white
            ${isMusicDrawerOpen
              ? 'bg-white/[0.1] text-white font-semibold border border-white/[0.16]'
              : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
            }
          `}
        >
          <div className="flex items-center gap-2.5">
            <Headphones size={15} className={activeMusicId ? 'text-emerald-400' : 'text-zinc-500'} />
            <span>Focus Audio</span>
          </div>
          {activeMusicId && (
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" title="Soundtrack Playing" />
          )}
        </button>

        <button
          type="button"
          onClick={() => handleNavClick('settings')}
          className={`
            w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-sans transition-all focus:outline-none focus:ring-1 focus:ring-white
            ${currentView === 'settings'
              ? 'bg-white/[0.1] text-white font-semibold border border-white/[0.16]'
              : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
            }
          `}
        >
          <Settings size={15} className="text-zinc-500" />
          <span>App Settings</span>
        </button>

        {/* Motivation Motto */}
        <div className="pt-2 px-2 border-t border-white/[0.04]">
          <p className="text-[10px] font-sans text-zinc-500 leading-relaxed text-center italic">
            &ldquo;Stay locked in. Built for you.&rdquo;
          </p>
        </div>
      </div>
    </aside>
  );
};
