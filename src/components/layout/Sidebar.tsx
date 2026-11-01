import React, { useState } from 'react';
import {
  BookOpen,
  CalendarCheck2,
  ShieldCheck,
  Feather,
  Flame,
  Clock,
  Activity,
  Target,
  BarChart3,
  Layers,
  Compass,
  Settings,
  Volume2,
  VolumeX,
  ScrollText,
  Sun,
  Moon,
  PenTool,
  Monitor,
  Headphones,
  ChevronDown,
  ChevronUp,
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
  const [isAdvancedExpanded, setIsAdvancedExpanded] = useState(false);

  // Core essential navigation: clean, dignified, uncluttered
  const coreNav: { id: NavView; label: string; icon: React.ElementType; isPrimary?: boolean }[] = [
    { id: 'daily-tracker', label: 'Daily Journal', icon: PenTool, isPrimary: true },
    { id: 'habits', label: 'Habits & Ledger', icon: Flame },
    { id: 'studies', label: 'Focus Studio', icon: Clock },
    { id: 'dashboard', label: 'Sanctuary', icon: BookOpen },
  ];

  // Optional audits
  const advancedAuditsNav: { id: NavView; label: string; icon: React.ElementType }[] = [
    { id: 'promises', label: 'Daily Commitments', icon: ShieldCheck },
    { id: 'reflections', label: 'Reflections', icon: Feather },
    { id: 'health', label: 'Health & Routine', icon: Activity },
    { id: 'goals', label: 'Horizons & Goals', icon: Target },
    { id: 'weekly-audit', label: 'Weekly Audit', icon: BarChart3 },
    { id: 'monthly-review', label: 'Monthly Review', icon: Layers },
    { id: 'life-audit', label: 'Life Dimension Audit', icon: Compass },
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
      className={`w-64 flex flex-col bg-cosmic-surface border-r border-white/[0.07] text-paper-ink h-full select-none transition-colors duration-200 ${className}`}
    >
      {/* Editorial Monogram & Masthead */}
      <div className="px-5 pt-6 pb-4 border-b border-white/[0.07] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center text-accent font-heading font-semibold text-xs tracking-wider shadow-sm">
            FM
          </div>
          <div>
            <h1 className="text-xs font-heading font-bold tracking-[0.16em] uppercase text-paper-ink">
              FOR ME
            </h1>
            <p className="text-[10px] text-paper-muted font-sans tracking-normal">
              Private Life Ledger
            </p>
          </div>
        </div>

        {/* Quiet Quick Toggles */}
        <div className="flex items-center gap-1">
          <button
            onClick={toggleTheme}
            title={isParchment ? 'Switch to Dark Basalt' : 'Switch to Archival Parchment'}
            className="p-1.5 rounded-md text-paper-muted hover:text-paper-ink hover:bg-white/[0.06] transition-colors"
            aria-label="Toggle Theme"
          >
            {isParchment ? <Moon size={14} /> : <Sun size={14} />}
          </button>
          <button
            onClick={toggleSound}
            title={settings.soundEffects ? 'Sound active (Click to mute)' : 'Sound muted'}
            className="p-1.5 rounded-md text-paper-muted hover:text-paper-ink hover:bg-white/[0.06] transition-colors"
            aria-label="Toggle Sound"
          >
            {settings.soundEffects ? <Volume2 size={14} className="text-accent" /> : <VolumeX size={14} />}
          </button>
        </div>
      </div>

      {/* Navigation Sections */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-4">
        {/* Core Clean Essentials */}
        <div className="space-y-1">
          <div className="px-3 pb-1.5">
            <span className="text-[10px] uppercase font-sans tracking-[0.18em] text-paper-muted/80 font-medium">
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
                  w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-sans transition-all
                  ${isActive
                    ? 'bg-accent/15 text-accent font-semibold border border-accent/25'
                    : 'text-paper-secondary hover:text-paper-ink hover:bg-white/[0.04]'
                  }
                  ${item.isPrimary && !isActive ? 'text-paper-ink font-medium' : ''}
                `}
              >
                <div className="flex items-center gap-2.5">
                  <Icon
                    size={15}
                    className={isActive ? 'text-accent' : item.isPrimary ? 'text-accent/90' : 'text-paper-muted'}
                  />
                  <span>{item.label}</span>
                </div>
                {item.isPrimary && (
                  <span className="text-[10px] font-sans px-1.5 py-0.2 rounded bg-accent/10 text-accent font-medium border border-accent/20">
                    Active
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Wallpaper HUD Launcher */}
        <div className="pt-2 border-t border-white/[0.05]">
          <button
            type="button"
            onClick={() => handleNavClick('wallpaper')}
            className={`
              w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-sans transition-all group
              ${currentView === 'wallpaper'
                ? 'bg-accent/15 text-accent font-semibold border border-accent/30'
                : 'text-paper-secondary hover:text-paper-ink hover:bg-white/[0.04]'
              }
            `}
          >
            <div className="flex items-center gap-2.5">
              <Monitor size={15} className={currentView === 'wallpaper' ? 'text-accent' : 'text-paper-muted'} />
              <span>Full Screen Desk</span>
            </div>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/[0.04] text-paper-muted font-mono border border-white/[0.06]">
              HUD
            </span>
          </button>
        </div>

        {/* Optional Advanced Life Audits */}
        {settings.enableAdvancedAudits && (
          <div className="pt-2 border-t border-white/[0.05] space-y-1">
            <button
              type="button"
              onClick={() => {
                sound.tick();
                setIsAdvancedExpanded(!isAdvancedExpanded);
              }}
              className="w-full flex items-center justify-between px-3 py-1.5 text-[10px] uppercase font-sans font-semibold tracking-[0.16em] text-paper-muted hover:text-paper-ink transition-colors"
            >
              <span>Reviews &amp; Audits</span>
              {isAdvancedExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
            </button>

            {isAdvancedExpanded && (
              <div className="space-y-1 pt-1">
                {advancedAuditsNav.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentView === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleNavClick(item.id)}
                      className={`
                        w-full flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-xs font-sans transition-all
                        ${isActive
                          ? 'bg-accent/15 text-accent font-semibold border border-accent/25'
                          : 'text-paper-muted hover:text-paper-ink hover:bg-white/[0.03]'
                        }
                      `}
                    >
                      <Icon size={14} className={isActive ? 'text-accent' : 'text-paper-faint'} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </nav>

      {/* Footer Navigation: Focus Audio & Settings */}
      <div className="p-3 border-t border-white/[0.07] space-y-1 bg-black/20">
        <button
          type="button"
          onClick={() => {
            sound.tick();
            setIsMusicDrawerOpen(true);
            onCloseMobile?.();
          }}
          className={`
            w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-sans transition-all
            ${isMusicDrawerOpen
              ? 'bg-accent/15 text-accent font-semibold border border-accent/25'
              : 'text-paper-secondary hover:text-paper-ink hover:bg-white/[0.04]'
            }
          `}
        >
          <div className="flex items-center gap-2.5">
            <Headphones size={15} className={activeMusicId ? 'text-forest' : 'text-paper-muted'} />
            <span>Focus Audio</span>
          </div>
          {activeMusicId && (
            <span className="w-1.5 h-1.5 rounded-full bg-forest animate-pulse" title="Soundtrack Playing" />
          )}
        </button>

        <button
          type="button"
          onClick={() => handleNavClick('settings')}
          className={`
            w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-sans transition-all
            ${currentView === 'settings'
              ? 'bg-accent/15 text-accent font-semibold border border-accent/25'
              : 'text-paper-muted hover:text-paper-ink hover:bg-white/[0.04]'
            }
          `}
        >
          <Settings size={15} className="text-paper-muted" />
          <span>Ledger Settings</span>
        </button>

        {/* Philosophy Motto */}
        <div className="pt-2 px-2 border-t border-white/[0.04]">
          <p className="text-[10px] font-sans text-paper-muted/80 leading-relaxed text-center italic">
            &ldquo;Discipline is quiet self-respect.&rdquo;
          </p>
        </div>
      </div>
    </aside>
  );
};
