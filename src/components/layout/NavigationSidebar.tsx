import React from 'react';
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
  Volume2
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { NavTab } from '../../types';

interface SidebarProps {
  className?: string;
  onNavigate?: () => void;
}

export const NavigationSidebar: React.FC<SidebarProps> = ({ className = '', onNavigate }) => {
  const { activeTab, setActiveTab, isAudioPlaying, audioStations, activeStationId } = useData();

  const activeStation = audioStations.find((s) => s.id === activeStationId);

  const navItems: { id: NavTab; label: string; icon: React.ElementType }[] = [
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

  const handleSelect = (tab: NavTab) => {
    setActiveTab(tab);
    if (onNavigate) onNavigate();
  };

  return (
    <aside
      className={`w-56 flex-shrink-0 bg-[#090b16]/90 border-r border-[#c4b5fd]/[0.07] flex flex-col justify-between py-6 px-3.5 backdrop-blur-xl select-none z-20 ${className}`}
    >
      {/* Brand */}
      <div>
        <div 
          onClick={() => handleSelect('wallpaper')}
          className="flex items-center gap-2.5 px-2.5 mb-8 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-xl bg-violet-950/60 border border-violet-400/25 flex items-center justify-center text-violet-300 group-hover:border-violet-400/50 transition-colors">
            ✧
          </div>
          <div>
            <h1 className="font-serif text-sm tracking-[0.25em] font-medium text-white uppercase leading-none">
              FOR ME
            </h1>
            <p className="text-[10px] text-zinc-400 font-serif italic tracking-wider mt-1">
              Private Life Ledger
            </p>
          </div>
        </div>

        {/* Navigation list */}
        <nav className="space-y-0.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium transition-all text-left ${
                  isActive
                    ? 'bg-violet-500/15 text-violet-200 border-l-2 border-violet-400 shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.03]'
                }`}
              >
                <Icon
                  className={`w-3.5 h-3.5 transition-colors ${
                    isActive ? 'text-violet-300' : 'text-zinc-400'
                  }`}
                />
                <span className="tracking-wide">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Audio Indicator (Quiet background status) */}
      <div className="pt-4 border-t border-white/[0.05] space-y-2">
        {isAudioPlaying && activeStation && (
          <div 
            onClick={() => handleSelect('music')}
            className="p-2 rounded-xl bg-violet-950/40 border border-violet-400/20 cursor-pointer hover:bg-violet-950/60 transition-colors"
          >
            <div className="flex items-center gap-2">
              <Volume2 className="w-3.5 h-3.5 text-violet-400 animate-pulse flex-shrink-0" />
              <div className="truncate">
                <p className="text-[10px] text-violet-200 font-medium truncate">
                  {activeStation.name}
                </p>
                <p className="text-[9px] text-zinc-400 truncate">
                  Streaming quietly
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="px-2.5 text-[10px] text-zinc-400 font-serif italic">
          Built for a better me.
        </div>
      </div>
    </aside>
  );
};
