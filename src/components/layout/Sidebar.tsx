import React from 'react';
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
  Sparkles,
  Monitor,
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
  const { settings, updateSettings } = useData();

  const journalNav: { id: NavView; label: string; icon: React.ElementType; isPrimary?: boolean }[] = [
    { id: 'dashboard', label: 'Sanctuary', icon: BookOpen },
    { id: 'daily-tracker', label: 'Daily Journal', icon: PenTool, isPrimary: true },
    { id: 'promises', label: 'Sacred Promises', icon: ShieldCheck },
    { id: 'reflections', label: 'Reflections', icon: Feather },
  ];

  const progressNav: { id: NavView; label: string; icon: React.ElementType }[] = [
    { id: 'habits', label: 'Habits & Rhythms', icon: Flame },
    { id: 'studies', label: 'Deep Studies', icon: Clock },
    { id: 'health', label: 'Health & Routine', icon: Activity },
    { id: 'goals', label: 'Goals & Horizons', icon: Target },
  ];

  const reviewsNav: { id: NavView; label: string; icon: React.ElementType }[] = [
    { id: 'weekly-audit', label: 'Weekly Audit', icon: BarChart3 },
    { id: 'monthly-review', label: 'Monthly Review', icon: Layers },
    { id: 'life-audit', label: 'Life Audit', icon: Compass },
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
      className={`w-64 flex flex-col bg-cosmic-surface/85 backdrop-blur-2xl border-r border-white/[0.08] text-paper-ink h-full select-none transition-colors duration-200 ${className}`}
    >
      {/* Cosmic Monogram & Journal Title */}
      <div className="px-6 pt-7 md:pt-8 pb-3.5 border-b border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-accent/20 border border-accent/40 flex items-center justify-center text-starlight-lavender font-heading font-bold text-sm shadow-cosmic-glow">
            FM
          </div>
          <div>
            <h1 className="text-sm font-heading font-bold tracking-wider text-paper-ink">
              FOR ME
            </h1>
            <p className="text-[10px] text-paper-muted font-sans tracking-tight">
              Cosmic Journal &amp; Ledger
            </p>
          </div>
        </div>

        {/* Quiet Quick Toggles */}
        <div className="flex items-center gap-1">
          <button
            onClick={toggleTheme}
            title={isParchment ? 'Switch to Cosmic Dark' : 'Switch to Warm Parchment'}
            className="p-1.5 rounded-lg text-paper-muted hover:text-paper-ink hover:bg-white/[0.06] transition-colors"
            aria-label="Toggle Theme"
          >
            {isParchment ? <Moon size={14} /> : <Sun size={14} />}
          </button>
          <button
            onClick={toggleSound}
            title={settings.soundEffects ? 'Sound active (Click to mute)' : 'Sound muted'}
            className="p-1.5 rounded-lg text-paper-muted hover:text-paper-ink hover:bg-white/[0.06] transition-colors"
            aria-label="Toggle Sound"
          >
            {settings.soundEffects ? <Volume2 size={14} className="text-accent" /> : <VolumeX size={14} />}
          </button>
        </div>
      </div>

      {/* Navigation Sections */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-5">
        {/* Wallpaper HUD Direct Launcher */}
        <div className="px-1 pb-1">
          <button
            type="button"
            onClick={() => handleNavClick('wallpaper')}
            className={`
              w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-sans font-medium transition-all group
              ${currentView === 'wallpaper'
                ? 'bg-accent/20 text-white border border-accent/50 shadow-cosmic-glow'
                : 'bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] text-starlight-lavender hover:text-white'
              }
            `}
          >
            <div className="flex items-center gap-2.5">
              <Monitor size={15} className="text-accent group-hover:scale-110 transition-transform" />
              <span>Wallpaper HUD</span>
            </div>
            <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-accent/15 text-accent font-sans border border-accent/25">
              Desktop
            </span>
          </button>
        </div>

        {/* GROUP 1: MY JOURNAL */}
        <div className="space-y-1">
          <span className="px-3 text-[10px] uppercase font-sans font-semibold tracking-[0.18em] text-starlight-lavender/60 block">
            My Journal
          </span>
          {journalNav.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`
                  w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-sans transition-all
                  ${isActive
                    ? 'bg-accent/15 text-starlight-lavender font-semibold border border-accent/30 shadow-cosmic-glow'
                    : 'text-paper-secondary hover:text-paper-ink hover:bg-white/[0.05]'
                  }
                  ${item.isPrimary && !isActive ? 'text-accent font-medium' : ''}
                `}
              >
                <div className="flex items-center gap-2.5">
                  <Icon
                    size={15}
                    className={isActive ? 'text-starlight-lavender' : item.isPrimary ? 'text-accent' : 'text-paper-muted'}
                  />
                  <span>{item.label}</span>
                </div>
                {item.isPrimary && (
                  <span className="text-[10px] font-sans px-1.5 py-0.2 rounded-full bg-accent/20 text-starlight-lavender font-medium border border-accent/30">
                    Daily
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* GROUP 2: MY PROGRESS */}
        <div className="space-y-1">
          <span className="px-3 text-[10px] uppercase font-sans font-semibold tracking-[0.18em] text-starlight-lavender/60 block">
            My Observatory
          </span>
          {progressNav.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`
                  w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-sans transition-all
                  ${isActive
                    ? 'bg-accent/15 text-starlight-lavender font-semibold border border-accent/30 shadow-cosmic-glow'
                    : 'text-paper-secondary hover:text-paper-ink hover:bg-white/[0.05]'
                  }
                `}
              >
                <Icon
                  size={15}
                  className={isActive ? 'text-starlight-lavender' : 'text-paper-muted'}
                />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* GROUP 3: MY REVIEWS */}
        <div className="space-y-1">
          <span className="px-3 text-[10px] uppercase font-sans font-semibold tracking-[0.18em] text-starlight-lavender/60 block">
            My Reviews
          </span>
          {reviewsNav.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`
                  w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-sans transition-all
                  ${isActive
                    ? 'bg-accent/15 text-starlight-lavender font-semibold border border-accent/30 shadow-cosmic-glow'
                    : 'text-paper-secondary hover:text-paper-ink hover:bg-white/[0.05]'
                  }
                `}
              >
                <Icon
                  size={15}
                  className={isActive ? 'text-starlight-lavender' : 'text-paper-muted'}
                />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Footer Navigation: Manifesto & Settings */}
      <div className="p-3 border-t border-white/[0.08] space-y-1 bg-cosmic-void/40">
        <button
          type="button"
          onClick={() => handleNavClick('manifesto')}
          className={`
            w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-sans transition-all
            ${currentView === 'manifesto'
              ? 'bg-accent/15 text-starlight-lavender font-semibold border border-accent/30'
              : 'text-paper-secondary hover:text-paper-ink hover:bg-white/[0.05]'
            }
          `}
        >
          <ScrollText size={15} className="text-paper-muted" />
          <span>Opening Manifesto</span>
        </button>

        <button
          type="button"
          onClick={() => handleNavClick('settings')}
          className={`
            w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-sans transition-all
            ${currentView === 'settings'
              ? 'bg-accent/15 text-starlight-lavender font-semibold border border-accent/30'
              : 'text-paper-muted hover:text-paper-ink hover:bg-white/[0.05]'
            }
          `}
        >
          <Settings size={15} className="text-paper-muted" />
          <span>Journal Settings</span>
        </button>

        {/* Philosophy Motto */}
        <div className="pt-2 px-2 border-t border-white/[0.04]">
          <p className="text-[10px] font-sans text-paper-muted leading-relaxed text-center italic">
            &ldquo;Remember, you are here for you.&rdquo;
          </p>
        </div>
      </div>
    </aside>
  );
};
