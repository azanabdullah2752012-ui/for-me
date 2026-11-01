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
  Sliders,
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
    { id: 'daily-tracker', label: 'Daily Journal', icon: PenTool, isPrimary: true },
    { id: 'dashboard', label: 'Sanctuary Overview', icon: BookOpen },
    { id: 'studies', label: 'Focus Studio', icon: Clock },
    { id: 'habits', label: 'Habits & Ledger', icon: Flame },
  ];

  // 2. Inner Architecture & Self-Audit
  const innerNav: { id: NavView; label: string; icon: React.ElementType }[] = [
    { id: 'promises', label: 'Sacred Commitments', icon: ShieldCheck },
    { id: 'reflections', label: 'Reflections & Inquiries', icon: Feather },
    { id: 'health', label: 'Living Biometrics', icon: Activity },
    { id: 'goals', label: 'Horizons & Goals', icon: Target },
    { id: 'weekly-audit', label: 'Weekly Audit', icon: BarChart3 },
    { id: 'monthly-review', label: 'Monthly Review', icon: Layers },
    { id: 'life-audit', label: 'Life Dimension Wheel', icon: Compass },
    { id: 'manifesto', label: 'Personal Manifesto', icon: ScrollText },
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
      className={`w-64 flex flex-col bg-[#0C0D0F] border-r border-white/[0.08] text-paper-ink h-full select-none transition-colors duration-200 ${className}`}
    >
      {/* 1. ARCHITECTURAL BRAND MASTHEAD */}
      <div className="px-5 pt-8 pb-4 border-b border-white/[0.08] flex items-center justify-between shrink-0 bg-white/[0.01]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-accent/20 border border-accent/40 flex items-center justify-center text-accent font-heading font-bold text-xs tracking-wider shadow-sm">
            FM
          </div>
          <div>
            <h1 className="text-xs font-heading font-bold tracking-[0.2em] uppercase text-paper-ink">
              FOR ME
            </h1>
            <p className="text-[10px] text-paper-muted font-mono tracking-tight">
              Life Ledger &amp; Journal
            </p>
          </div>
        </div>

        {/* Quiet Quick Toggles: Theme & Sound */}
        <div className="flex items-center gap-1">
          <button
            onClick={toggleTheme}
            title={isParchment ? 'Switch to Dark Basalt' : 'Switch to Archival Parchment'}
            className="p-1.5 rounded-lg text-paper-muted hover:text-paper-ink hover:bg-white/[0.06] transition-colors"
            aria-label="Toggle Theme"
          >
            {isParchment ? <Moon size={13} /> : <Sun size={13} />}
          </button>
          <button
            onClick={toggleSound}
            title={settings.soundEffects ? 'Sound active (Click to mute)' : 'Sound muted'}
            className="p-1.5 rounded-lg text-paper-muted hover:text-paper-ink hover:bg-white/[0.06] transition-colors"
            aria-label="Toggle Sound"
          >
            {settings.soundEffects ? <Volume2 size={13} className="text-accent" /> : <VolumeX size={13} />}
          </button>
        </div>
      </div>

      {/* 2. NAVIGATION BODY */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-4">
        {/* Core Daily Practice */}
        <div className="space-y-1">
          <div className="px-3 pb-1">
            <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-accent/80 font-semibold">
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
                  w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-sans transition-all focus:outline-none focus:ring-1 focus:ring-accent
                  ${isActive
                    ? 'bg-accent/20 text-accent font-semibold border border-accent/40 shadow-sm'
                    : 'text-paper-secondary hover:text-paper-ink hover:bg-white/[0.04]'
                  }
                  ${item.isPrimary && !isActive ? 'text-paper-ink font-medium' : ''}
                `}
              >
                <div className="flex items-center gap-2.5">
                  <Icon
                    size={15}
                    className={isActive ? 'text-accent' : item.isPrimary ? 'text-accent/80' : 'text-paper-muted'}
                  />
                  <span>{item.label}</span>
                </div>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* Secondary Mode Launcher: Full Screen Desk */}
        <div className="pt-2 border-t border-white/[0.06]">
          <button
            type="button"
            onClick={() => handleNavClick('wallpaper')}
            className={`
              w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-sans transition-all group
              ${currentView === 'wallpaper'
                ? 'bg-accent/20 text-accent font-semibold border border-accent/40'
                : 'text-paper-secondary hover:text-paper-ink hover:bg-white/[0.04]'
              }
            `}
          >
            <div className="flex items-center gap-2.5">
              <Monitor size={15} className={currentView === 'wallpaper' ? 'text-accent' : 'text-paper-muted'} />
              <span>Full Screen Desk</span>
            </div>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/[0.04] text-paper-muted font-mono border border-white/[0.08]">
              HUD
            </span>
          </button>
        </div>

        {/* Inner Architecture & Audits */}
        <div className="pt-2 border-t border-white/[0.06] space-y-1">
          <button
            type="button"
            onClick={() => {
              sound.tick();
              setIsAuditsExpanded(!isAuditsExpanded);
            }}
            className="w-full flex items-center justify-between px-3 py-1.5 text-[10px] uppercase font-mono tracking-[0.18em] text-paper-muted hover:text-paper-ink transition-colors"
          >
            <span className="font-semibold text-paper-muted">Inner Architecture</span>
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
                      w-full flex items-center gap-2.5 px-3 py-1.5 rounded-xl text-xs font-sans transition-all
                      ${isActive
                        ? 'bg-accent/20 text-accent font-semibold border border-accent/30'
                        : 'text-paper-secondary hover:text-paper-ink hover:bg-white/[0.03]'
                      }
                    `}
                  >
                    <Icon size={14} className={isActive ? 'text-accent' : 'text-paper-muted'} />
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
            w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-sans transition-all
            ${isMusicDrawerOpen
              ? 'bg-accent/20 text-accent font-semibold border border-accent/30'
              : 'text-paper-secondary hover:text-paper-ink hover:bg-white/[0.04]'
            }
          `}
        >
          <div className="flex items-center gap-2.5">
            <Headphones size={15} className={activeMusicId ? 'text-emerald-400' : 'text-paper-muted'} />
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
            w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-sans transition-all
            ${currentView === 'settings'
              ? 'bg-accent/20 text-accent font-semibold border border-accent/30'
              : 'text-paper-secondary hover:text-paper-ink hover:bg-white/[0.04]'
            }
          `}
        >
          <Settings size={15} className="text-paper-muted" />
          <span>Ledger Settings</span>
        </button>

        {/* Philosophy Creed */}
        <div className="pt-2 px-2 border-t border-white/[0.04]">
          <p className="text-[10px] font-sans text-paper-muted leading-relaxed text-center italic">
            &ldquo;Every standard is for your own elevation.&rdquo;
          </p>
        </div>
      </div>
    </aside>
  );
};
