import React from 'react';
import {
  Home,
  Monitor,
  PenTool,
  ShieldCheck,
  Flame,
  Clock,
  Activity,
  Feather,
  BarChart3,
  Layers,
  Compass,
  ScrollText,
  Headphones,
  Settings,
  Download,
  Sparkles,
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
  const { exportDataJSON } = useData();

  // Navigation Items exactly matching the reference ledger
  const navItems: { id: NavView; label: string; icon: React.ElementType }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'wallpaper', label: 'Wallpaper', icon: Monitor },
    { id: 'daily-tracker', label: 'Daily Tracker', icon: PenTool },
    { id: 'promises', label: 'Promises', icon: ShieldCheck },
    { id: 'habits', label: 'Habits', icon: Flame },
    { id: 'studies', label: 'Studies', icon: Clock },
    { id: 'health', label: 'Health', icon: Activity },
    { id: 'reflections', label: 'Reflections', icon: Feather },
    { id: 'weekly-audit', label: 'Weekly Audit', icon: BarChart3 },
    { id: 'monthly-review', label: 'Monthly Review', icon: Layers },
    { id: 'life-audit', label: 'Life Audit', icon: Compass },
    { id: 'manifesto', label: 'Manifesto', icon: ScrollText },
    { id: 'settings', label: 'Music', icon: Headphones },
  ];

  const handleNavClick = (view: NavView) => {
    sound.tick();
    onSelectView(view);
    onCloseMobile?.();
  };

  const handleExport = () => {
    sound.complete();
    const json = exportDataJSON();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `forme-ledger-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <aside
      className={`w-60 flex flex-col bg-[#07080B] border-r border-white/[0.06] text-white h-full select-none transition-colors duration-200 ${className}`}
    >
      {/* 1. BRAND EMBLEM & IDENTITY */}
      <div className="px-6 pt-7 pb-5 flex flex-col items-start shrink-0">
        <div className="flex items-center gap-3">
          {/* Celestial Compass Star Icon */}
          <div className="w-8 h-8 flex items-center justify-center text-[#E56A38] drop-shadow-[0_0_12px_rgba(229,106,56,0.6)]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-7 h-7"
            >
              <polygon points="12 2 15 9 22 12 15 15 12 22 9 15 2 12 9 9 12 2" />
              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            </svg>
          </div>
          <div>
            <h1 className="text-sm font-serif font-bold tracking-[0.16em] uppercase text-zinc-100 leading-none">
              FOR ME
            </h1>
            <p className="text-[10px] text-zinc-500 font-sans tracking-wide mt-1">
              Private Life Ledger
            </p>
          </div>
        </div>
      </div>

      {/* 2. NAVIGATION LIST */}
      <nav className="flex-1 overflow-y-auto px-3.5 py-2 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          return (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className={`
                w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-sans transition-all focus:outline-none
                ${isActive
                  ? 'bg-[#E56A38]/15 text-[#E56A38] border border-[#E56A38]/35 font-semibold shadow-[0_0_15px_rgba(229,106,56,0.15)]'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.03] border border-transparent'
                }
              `}
            >
              <Icon
                size={15}
                className={isActive ? 'text-[#E56A38]' : 'text-zinc-500'}
              />
              <span className="tracking-wide">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* 3. FOOTER ACTIONS */}
      <div className="p-3.5 border-t border-white/[0.06] space-y-1">
        <button
          type="button"
          onClick={() => handleNavClick('settings')}
          className={`
            w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-sans transition-all
            ${currentView === 'settings'
              ? 'bg-[#E56A38]/15 text-[#E56A38] font-semibold border border-[#E56A38]/30'
              : 'text-zinc-400 hover:text-white hover:bg-white/[0.03]'
            }
          `}
        >
          <Settings size={14} className="text-zinc-500" />
          <span>Settings</span>
        </button>

        <button
          type="button"
          onClick={handleExport}
          className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-sans text-zinc-400 hover:text-white hover:bg-white/[0.03] transition-all"
        >
          <Download size={14} className="text-zinc-500" />
          <span>Export Data</span>
        </button>

        <div className="pt-2 px-3.5 text-[10px] text-zinc-600 font-sans italic">
          Built for a better me.
        </div>
      </div>
    </aside>
  );
};
