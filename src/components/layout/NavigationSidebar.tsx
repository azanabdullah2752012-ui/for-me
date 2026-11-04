import React, { useState } from 'react';
import { 
  Home, 
  BookOpen, 
  CheckSquare, 
  GraduationCap, 
  Heart, 
  Compass, 
  ScrollText, 
  Headphones, 
  Settings, 
  Volume2, 
  VolumeX, 
  Palette, 
  Sparkles 
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { NavTab } from '../../types';

interface SidebarProps {
  className?: string;
  onNavigate?: () => void;
}

export const navItems: { id: NavTab; label: string; icon: React.ElementType }[] = [
  { id: 'wallpaper', label: 'Wallpaper HUD', icon: Home },
  { id: 'home', label: 'Sanctuary', icon: Compass },
  { id: 'journal', label: 'Journal', icon: BookOpen },
  { id: 'tracker', label: 'Habits', icon: CheckSquare },
  { id: 'studies', label: 'Studies', icon: GraduationCap },
  { id: 'health', label: 'Health', icon: Heart },
  { id: 'life_audit', label: 'Life Audit', icon: Compass },
  { id: 'manifesto', label: 'Manifesto', icon: ScrollText },
  { id: 'music', label: 'Focus Audio', icon: Headphones },
  { id: 'settings', label: 'Settings', icon: Settings },
];

/**
 * NavigationTopBar
 * Floating glass island matching the exact aesthetic of the Wallpaper HUD header.
 */
export const NavigationTopBar: React.FC<{ onOpenThemes?: () => void }> = ({ onOpenThemes }) => {
  const { 
    activeTab, 
    setActiveTab,
    isAudioPlaying,
    setIsAudioPlaying
  } = useData();

  const [soundMuted, setSoundMuted] = useState(false);

  const currentDateStr = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  });

  return (
    <header className="flex items-center justify-between w-full h-12 shrink-0 z-30 pt-4 md:pt-6 px-4 md:px-10 lg:px-14 select-none">
      {/* Left: Brand Identity (Click to return to Wallpaper HUD) */}
      <button 
        onClick={() => setActiveTab('wallpaper')}
        className="flex items-center gap-3 cursor-pointer group text-left transition-transform active:scale-95"
        title="Return to Wallpaper HUD"
      >
        <div className="w-8 h-8 rounded-full border border-white/20 bg-white/[0.04] flex items-center justify-center text-white text-xs font-mono font-medium tracking-tight shadow-sm group-hover:border-violet-400/50 transition-colors">
          FM
        </div>
        <span className="font-sans font-bold text-xs tracking-[0.2em] text-white uppercase group-hover:text-violet-200 transition-colors">
          FOR ME
        </span>
      </button>

      {/* Center: Frosted Glass Capsule Navigation Bar */}
      <nav className="hidden md:flex items-center gap-1 p-1 rounded-2xl bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] text-xs font-sans text-zinc-300 shadow-md max-w-full overflow-x-auto no-scrollbar">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-3 py-1.5 rounded-xl font-medium flex items-center gap-1.5 transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-white/[0.1] text-white border border-white/[0.14] shadow-sm'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-violet-300' : 'text-zinc-400'}`} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Right Toolbar */}
      <div className="flex items-center gap-2">
        {/* Date badge on desktop */}
        <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.035] backdrop-blur-2xl border border-white/[0.08] text-xs font-sans text-zinc-300 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-violet-300" />
          <span>{currentDateStr}</span>
        </div>

        {/* Theme modal trigger */}
        {onOpenThemes && (
          <button
            onClick={onOpenThemes}
            className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white border border-white/[0.08] transition-colors"
            title="Switch Wallpaper Theme"
          >
            <Palette className="w-3.5 h-3.5" />
          </button>
        )}

        {/* Sound toggle */}
        <button
          onClick={() => {
            setSoundMuted(!soundMuted);
            if (isAudioPlaying) setIsAudioPlaying(false);
          }}
          className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white border border-white/[0.08] transition-colors"
          title={soundMuted ? 'Unmute' : 'Mute'}
        >
          {soundMuted ? <VolumeX className="w-3.5 h-3.5 text-zinc-500" /> : <Volume2 className="w-3.5 h-3.5 text-zinc-300" />}
        </button>

        {/* Return to HUD Button */}
        <button
          onClick={() => setActiveTab('wallpaper')}
          className="px-3.5 py-1.5 rounded-xl bg-[#9333ea]/80 hover:bg-[#9333ea] text-white text-xs font-sans font-semibold tracking-wide flex items-center gap-1.5 shadow-[0_0_15px_rgba(147,51,234,0.3)] transition-all"
        >
          <Home className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Wallpaper HUD</span>
        </button>
      </div>
    </header>
  );
};

/**
 * NavigationSidebar
 * Preserved for mobile drawer and test suite compliance.
 */
export const NavigationSidebar: React.FC<SidebarProps> = ({ className = '', onNavigate }) => {
  const { activeTab, setActiveTab, isAudioPlaying, audioStations, activeStationId } = useData();

  const activeStation = audioStations.find((s) => s.id === activeStationId);

  const handleSelect = (tab: NavTab) => {
    setActiveTab(tab);
    if (onNavigate) onNavigate();
  };

  return (
    <aside
      className={`w-60 flex-shrink-0 bg-gradient-to-b from-[#14182e]/90 to-[#0e1122]/85 backdrop-blur-3xl border-r border-white/[0.08] flex flex-col justify-between py-6 px-4 select-none z-20 ${className}`}
    >
      {/* Brand */}
      <div>
        <div 
          onClick={() => handleSelect('wallpaper')}
          className="flex items-center gap-3 px-2 mb-8 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-full border border-white/20 bg-white/[0.04] flex items-center justify-center text-white text-xs font-mono font-medium tracking-tight shadow-sm group-hover:border-violet-400/50 transition-colors">
            FM
          </div>
          <div>
            <h1 className="font-sans font-bold text-xs tracking-[0.2em] text-white uppercase leading-none">
              FOR ME
            </h1>
            <p className="text-[10px] text-zinc-400 font-sans tracking-wider mt-1">
              Private Life Ledger
            </p>
          </div>
        </div>

        {/* Navigation list */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-sans font-medium transition-all text-left ${
                  isActive
                    ? 'bg-white/[0.1] text-white border border-white/[0.14] shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.03]'
                }`}
              >
                <Icon
                  className={`w-4 h-4 transition-colors ${
                    isActive ? 'text-violet-300' : 'text-zinc-400'
                  }`}
                />
                <span className="tracking-wide">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Audio Indicator */}
      <div className="pt-4 border-t border-white/[0.06] space-y-2">
        {isAudioPlaying && activeStation && (
          <div 
            onClick={() => handleSelect('music')}
            className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] cursor-pointer hover:bg-white/[0.06] transition-colors"
          >
            <div className="flex items-center gap-2">
              <Volume2 className="w-3.5 h-3.5 text-violet-400 animate-pulse flex-shrink-0" />
              <div className="truncate">
                <p className="text-[10px] text-zinc-200 font-medium truncate font-sans">
                  {activeStation.name}
                </p>
                <p className="text-[9px] text-zinc-400 truncate font-sans">
                  Streaming quietly
                </p>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={() => handleSelect('wallpaper')}
          className="w-full py-2 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-xs font-sans text-zinc-300 hover:text-white border border-white/[0.08] flex items-center justify-center gap-1.5 transition-colors"
        >
          <span>← Back to Wallpaper HUD</span>
        </button>
      </div>
    </aside>
  );
};
