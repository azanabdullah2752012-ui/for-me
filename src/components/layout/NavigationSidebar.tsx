import React from 'react';
import { 
  Home, 
  BookOpen, 
  CheckSquare, 
  GraduationCap, 
  Heart, 
  Compass, 
  Settings, 
  ArrowLeft,
  Headphones,
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

export const navItems: { id: NavTab; label: string; icon: React.ElementType; section?: string; badge?: string }[] = [
  // Core
  { id: 'wallpaper', label: 'Wallpaper HUD', icon: Home, section: 'Core', badge: 'Desktop' },

  // My Journal
  { id: 'overview', label: 'Sanctuary', icon: Compass, section: 'My Journal' },
  { id: 'journal', label: 'Daily Journal', icon: BookOpen, section: 'My Journal', badge: 'Daily' },
  { id: 'accountability', label: 'Sacred Promises', icon: ShieldAlert, section: 'My Journal' },
  { id: 'growth', label: 'Reflections', icon: Sparkles, section: 'My Journal' },

  // My Observatory
  { id: 'tracker', label: 'Habits & Rhythms', icon: CheckSquare, section: 'My Observatory' },
  { id: 'studies', label: 'Deep Studies', icon: GraduationCap, section: 'My Observatory' },
  { id: 'health', label: 'Health & Routine', icon: Heart, section: 'My Observatory' },
  { id: 'goals', label: 'Goals & Horizons', icon: Target, section: 'My Observatory' },

  // My Reviews & Settings
  { id: 'today', label: 'Today Workspace', icon: Calendar, section: 'My Reviews' },
  { id: 'time', label: 'Time Allocation', icon: Clock, section: 'My Reviews' },
  { id: 'life_audit', label: 'Life Audit', icon: ShieldAlert, section: 'My Reviews' },
  { id: 'manifesto', label: 'Opening Manifesto', icon: BookOpen, section: 'My Reviews' },
  { id: 'settings', label: 'Journal Settings', icon: Settings, section: 'My Reviews' },
];

export const NavigationSidebar: React.FC<SidebarProps> = ({ 
  className = '', 
  onNavigate
}) => {
  const { 
    activeTab, 
    setActiveTab, 
    appTheme,
    toggleAppTheme,
    accountabilityIncidents,
    isAudioPlaying,
    activeSoundscapeId,
    playSoundscape,
    stopSoundscape
  } = useData();

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
          <div className="w-9 h-9 rounded-full border border-violet-400/25 bg-violet-600/10 flex items-center justify-center text-[var(--text-primary)] text-xs font-display font-semibold tracking-tight shadow-sm group-hover:border-violet-400/40 group-hover:bg-violet-600/20 transition-all">
            FM
          </div>
          <div>
            <h1 className="font-display font-bold text-xs tracking-[0.22em] text-[var(--text-primary)] uppercase group-hover:opacity-85 transition-opacity">
              FOR ME
            </h1>
            <p className="text-[10px] text-[var(--text-muted)] font-sans tracking-wider mt-0.5">
              Cosmic Journal & Ledger
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
                  <div className="pt-3.5 pb-1 px-3 text-[10px] font-display font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)] opacity-80">
                    {item.section}
                  </div>
                )}
                <button
                  onClick={() => handleSelect(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-sans transition-all text-left cursor-pointer ${
                    isActive
                      ? isLight
                        ? 'bg-violet-600 text-white font-semibold shadow-sm shadow-violet-600/20'
                        : 'bg-violet-500/15 text-white border border-violet-400/30 shadow-[0_4px_16px_rgba(168,85,247,0.12)] font-medium'
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

                  <div className="flex items-center gap-1.5 shrink-0">
                    {item.badge && (
                      <span className={`px-1.5 py-0.5 rounded-full text-[9px] font-sans font-medium ${
                        item.badge === 'Daily'
                          ? 'text-violet-300 bg-violet-500/15 border border-violet-400/25'
                          : 'text-zinc-300 bg-white/[0.06] border border-white/[0.10]'
                      }`}>
                        {item.badge}
                      </span>
                    )}

                    {item.id === 'accountability' && pendingIncidentsCount > 0 && (
                      <span className="px-1.5 py-0.2 rounded-full text-[9px] font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                        {pendingIncidentsCount}
                      </span>
                    )}
                  </div>
                </button>
              </React.Fragment>
            );
          })}
        </nav>
      </div>

      {/* Bottom Controls: Theme Toggle & Wallpaper HUD Return */}
      <div className="pt-3 border-t border-[var(--card-border)] space-y-2.5 shrink-0">
        {/* Quick Toolbar (Light/Dark Toggle & Focus Audio Toggle) */}
        <div className="flex items-center justify-between text-xs gap-1.5">
          {/* Light / Dark Mode Toggle */}
          <button
            onClick={toggleAppTheme}
            className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-xl bg-[var(--pill-bg)] hover:bg-white/[0.08] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--card-border)] transition-colors cursor-pointer"
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
                <span className="text-[11px]">Light</span>
              </>
            )}
          </button>

          {/* Quick Audio Play / Pause Toggle */}
          <button
            onClick={() => {
              if (isAudioPlaying) stopSoundscape();
              else playSoundscape(activeSoundscapeId);
            }}
            className={`p-1.5 px-2.5 rounded-xl flex items-center gap-1.5 border transition-all cursor-pointer ${
              isAudioPlaying 
                ? 'bg-violet-600/30 text-violet-200 border-violet-400/40 shadow-[0_0_12px_rgba(168,85,247,0.3)]' 
                : 'bg-[var(--pill-bg)] hover:bg-white/[0.08] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-[var(--card-border)]'
            }`}
            title={isAudioPlaying ? 'Stop Focus Audio' : 'Start Focus Audio'}
          >
            <Headphones className={`w-3.5 h-3.5 ${isAudioPlaying ? 'text-violet-300 animate-pulse' : ''}`} />
            <span className="text-[11px] font-mono">{isAudioPlaying ? 'Audio On' : 'Audio'}</span>
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
