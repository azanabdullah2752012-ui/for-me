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
  ArrowLeft
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { NavTab } from '../../types';

interface SidebarProps {
  className?: string;
  onNavigate?: () => void;
  onOpenThemes?: () => void;
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
 * NavigationSidebar
 * Floating frosted glass sidebar matching the Wallpaper HUD card aesthetic.
 * Positioned with comfortable top/side margins so it never collides with OS menu bars.
 */
export const NavigationSidebar: React.FC<SidebarProps> = ({ 
  className = '', 
  onNavigate,
  onOpenThemes 
}) => {
  const { 
    activeTab, 
    setActiveTab, 
    isAudioPlaying, 
    setIsAudioPlaying,
    audioStations, 
    activeStationId 
  } = useData();

  const [soundMuted, setSoundMuted] = useState(false);
  const activeStation = audioStations.find((s) => s.id === activeStationId);

  const handleSelect = (tab: NavTab) => {
    setActiveTab(tab);
    if (onNavigate) onNavigate();
  };

  return (
    <aside
      className={`w-64 h-[calc(100vh-3rem)] rounded-[2rem] bg-gradient-to-b from-[#181a33]/70 to-[#121326]/50 backdrop-blur-3xl border border-white/[0.08] border-t-white/[0.18] shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] flex flex-col justify-between p-5 select-none z-20 shrink-0 ${className}`}
    >
      {/* Brand & Top Status */}
      <div>
        <div 
          onClick={() => handleSelect('wallpaper')}
          className="flex items-center gap-3 px-2 mb-6 cursor-pointer group"
          title="Return to Wallpaper HUD"
        >
          <div className="w-9 h-9 rounded-full border border-white/20 bg-white/[0.04] flex items-center justify-center text-white text-xs font-mono font-medium tracking-tight shadow-sm group-hover:border-violet-400/50 group-hover:bg-white/[0.08] transition-all">
            FM
          </div>
          <div>
            <h1 className="font-sans font-bold text-xs tracking-[0.2em] text-white uppercase group-hover:text-violet-200 transition-colors">
              FOR ME
            </h1>
            <p className="text-[10px] text-zinc-400 font-sans tracking-wider mt-0.5">
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
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-sans transition-all text-left ${
                  isActive
                    ? 'bg-white/[0.1] text-white border border-white/[0.14] shadow-sm font-semibold'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04] font-medium'
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

      {/* Bottom Controls & Wallpaper Return */}
      <div className="pt-4 border-t border-white/[0.06] space-y-3">
        {/* Quick Toolbar (Themes & Mute) */}
        <div className="flex items-center justify-between px-1 text-xs">
          {onOpenThemes && (
            <button
              onClick={onOpenThemes}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-zinc-300 hover:text-white border border-white/[0.06] transition-colors"
              title="Themes"
            >
              <Palette className="w-3.5 h-3.5" />
              <span>Themes</span>
            </button>
          )}

          <button
            onClick={() => {
              setSoundMuted(!soundMuted);
              if (isAudioPlaying) setIsAudioPlaying(false);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-zinc-300 hover:text-white border border-white/[0.06] transition-colors ml-auto"
            title={soundMuted ? 'Unmute' : 'Mute'}
          >
            {soundMuted ? <VolumeX className="w-3.5 h-3.5 text-zinc-500" /> : <Volume2 className="w-3.5 h-3.5 text-zinc-300" />}
            <span>{soundMuted ? 'Muted' : 'Sound'}</span>
          </button>
        </div>

        {/* Audio mini badge if streaming */}
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

        {/* Primary Purple Return Button */}
        <button
          onClick={() => handleSelect('wallpaper')}
          className="w-full py-2.5 px-3 rounded-2xl bg-[#9333ea] hover:bg-[#a855f7] text-white text-xs font-sans font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(147,51,234,0.35)] transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Wallpaper</span>
        </button>
      </div>
    </aside>
  );
};
