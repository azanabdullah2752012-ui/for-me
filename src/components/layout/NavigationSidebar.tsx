import React, { useState } from 'react';
import { 
  Home, 
  BookOpen, 
  CheckSquare, 
  GraduationCap, 
  Heart, 
  Compass, 
  Settings, 
  Volume2, 
  VolumeX, 
  ArrowLeft,
  Calendar,
  Clock,
  Target,
  Sparkles,
  ShieldAlert,
  Sun,
  Moon
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { NavTab } from '../../types';

interface SidebarProps {
  className?: string;
  onNavigate?: () => void;
}

export const navItems: { id: NavTab; label: string; icon: React.ElementType; section?: string; badge?: number }[] = [
  // Core
  { id: 'wallpaper', label: 'Wallpaper HUD', icon: Home, section: 'Core' },
  { id: 'overview', label: 'Life Overview', icon: Compass, section: 'Core' },
  { id: 'today', label: 'Today Workspace', icon: Calendar, section: 'Core' },

  // Tracking Categories
  { id: 'studies', label: 'Academics', icon: GraduationCap, section: 'Tracking' },
  { id: 'health', label: 'Health & Body', icon: Heart, section: 'Tracking' },
  { id: 'tracker', label: 'Habits & Routine', icon: CheckSquare, section: 'Tracking' },
  { id: 'growth', label: 'Personal Growth', icon: Sparkles, section: 'Tracking' },
  { id: 'time', label: 'Time Allocation', icon: Clock, section: 'Tracking' },
  { id: 'goals', label: 'Goals & Milestones', icon: Target, section: 'Tracking' },

  // Governance & Reflection
  { id: 'accountability', label: 'Accountability', icon: ShieldAlert, section: 'System' },
  { id: 'journal', label: 'Reflection Journal', icon: BookOpen, section: 'System' },
  { id: 'settings', label: 'Settings & Trackers', icon: Settings, section: 'System' },
];

export const NavigationSidebar: React.FC<SidebarProps> = ({ 
  className = '', 
  onNavigate
}) => {
  const { 
    activeTab, 
    setActiveTab, 
    isAudioPlaying, 
    setIsAudioPlaying,
    appTheme,
    toggleAppTheme,
    accountabilityIncidents 
  } = useData();

  const [soundMuted, setSoundMuted] = useState(false);

  const pendingIncidentsCount = accountabilityIncidents.filter(
    (i) => i.status === 'pending_review' || i.status === 'approved'
  ).length;

  const handleSelect = (tab: NavTab) => {
    setActiveTab(tab);
    if (onNavigate) onNavigate();
  };

  const isLight = appTheme === 'light';

  return (
    <aside
      className={`w-64 h-[calc(100vh-3.5rem)] rounded-[2rem] creamy-surface flex flex-col justify-between p-5 select-none z-20 shrink-0 transition-colors duration-200 ${className}`}
    >
      {/* Brand & Top Status */}
      <div className="overflow-y-auto pr-1">
        <div 
          onClick={() => handleSelect('wallpaper')}
          className="flex items-center gap-3 px-2 mb-5 cursor-pointer group"
          title="Return to Wallpaper HUD"
        >
          <div className="w-9 h-9 rounded-full border border-[var(--card-border)] bg-[var(--pill-bg)] flex items-center justify-center text-[var(--text-primary)] text-xs font-mono font-semibold tracking-tight shadow-sm group-hover:border-[var(--text-muted)] group-hover:bg-[var(--card-border)] transition-colors">
            FM
          </div>
          <div>
            <h1 className="font-sans font-bold text-xs tracking-[0.2em] text-[var(--text-primary)] uppercase group-hover:opacity-85 transition-opacity">
              FOR ME
            </h1>
            <p className="text-[10px] text-[var(--text-muted)] font-sans tracking-wider mt-0.5">
              Private Life Ledger
            </p>
          </div>
        </div>

        {/* Navigation list */}
        <nav className="space-y-1">
          {navItems.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id || (item.id === 'overview' && activeTab === 'home');
            const showSectionHeader = idx === 0 || item.section !== navItems[idx - 1].section;

            return (
              <React.Fragment key={item.id}>
                {showSectionHeader && (
                  <div className="pt-3 pb-1 px-3 text-[10px] font-sans font-semibold uppercase tracking-wider text-[var(--text-muted)] opacity-75">
                    {item.section}
                  </div>
                )}
                <button
                  onClick={() => handleSelect(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-sans transition-all text-left cursor-pointer ${
                    isActive
                      ? isLight
                        ? 'bg-violet-600 text-white font-semibold shadow-sm shadow-violet-600/20'
                        : 'bg-white/[0.12] text-white border border-white/[0.16] shadow-sm font-semibold'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <Icon
                      className={`w-4 h-4 transition-colors shrink-0 ${
                        isActive 
                          ? isLight ? 'text-white' : 'text-violet-300'
                          : 'text-[var(--text-muted)]'
                      }`}
                    />
                    <span className="tracking-wide truncate">{item.label}</span>
                  </div>

                  {item.id === 'accountability' && pendingIncidentsCount > 0 && (
                    <span className="px-1.5 py-0.2 rounded-full text-[9px] font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                      {pendingIncidentsCount}
                    </span>
                  )}
                </button>
              </React.Fragment>
            );
          })}
        </nav>
      </div>

      {/* Bottom Controls: Theme Toggle & Wallpaper HUD Return */}
      <div className="pt-3 border-t border-[var(--card-border)] space-y-2.5 shrink-0">
        {/* Quick Toolbar (Light/Dark Toggle, Themes & Mute) */}
        <div className="flex items-center justify-between text-xs gap-1.5">
          {/* Light / Dark Mode Toggle */}
          <button
            onClick={toggleAppTheme}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[var(--pill-bg)] hover:bg-white/[0.08] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--card-border)] transition-colors cursor-pointer"
            title={`Switch to ${isLight ? 'Obsidian Dark' : 'Creamy Light'} Theme`}
          >
            {isLight ? (
              <>
                <Moon className="w-3.5 h-3.5 text-violet-500" />
                <span className="text-[11px]">Dark</span>
              </>
            ) : (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[11px]">Creamy</span>
              </>
            )}
          </button>

          {/* Sound Mute Toggle */}
          <button
            onClick={() => {
              setSoundMuted(!soundMuted);
              if (isAudioPlaying) setIsAudioPlaying(false);
            }}
            className="p-2 rounded-xl bg-[var(--pill-bg)] hover:bg-white/[0.08] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--card-border)] transition-colors cursor-pointer ml-auto"
            title={soundMuted ? 'Unmute Focus Sound' : 'Mute Focus Sound'}
          >
            {soundMuted ? <VolumeX className="w-3.5 h-3.5 text-zinc-500" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Quick Return to Wallpaper HUD */}
        <button
          onClick={() => handleSelect('wallpaper')}
          className="w-full py-2 px-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Wallpaper HUD</span>
        </button>
      </div>
    </aside>
  );
};
