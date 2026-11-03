import React from 'react';
import { 
  LayoutDashboard, 
  Image, 
  CalendarDays, 
  Sparkles, 
  CheckSquare2, 
  GraduationCap, 
  HeartPulse, 
  Eye, 
  Sliders, 
  CalendarRange, 
  Globe2, 
  Scroll, 
  Music2, 
  Settings, 
  Download 
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { NavTab } from '../../types';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
  const { activeTab, setActiveTab } = useData();

  const navItems: { id: NavTab; label: string; icon: React.ElementType }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'wallpaper', label: 'Wallpaper', icon: Image },
    { id: 'tracker', label: 'Daily Tracker', icon: CalendarDays },
    { id: 'promises', label: 'Promises', icon: Sparkles },
    { id: 'habits', label: 'Habits', icon: CheckSquare2 },
    { id: 'studies', label: 'Studies', icon: GraduationCap },
    { id: 'health', label: 'Health', icon: HeartPulse },
    { id: 'reflections', label: 'Reflections', icon: Eye },
    { id: 'weekly_audit', label: 'Weekly Audit', icon: Sliders },
    { id: 'monthly_review', label: 'Monthly Review', icon: CalendarRange },
    { id: 'life_audit', label: 'Life Audit', icon: Globe2 },
    { id: 'manifesto', label: 'Manifesto', icon: Scroll },
    { id: 'music', label: 'Music', icon: Music2 },
  ];

  const handleExportData = () => {
    try {
      const data = localStorage.getItem('for_me_ledger_state_v2');
      const blob = new Blob([data || '{}'], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `for-me-backup-${new Date().toISOString().split('T')[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      alert('Unable to export data.');
    }
  };

  return (
    <aside
      className={`w-64 flex-shrink-0 bg-[#0c0d12]/95 border-r border-white/[0.06] flex flex-col justify-between py-6 px-4 backdrop-blur-xl select-none z-20 ${className}`}
    >
      {/* Top Brand */}
      <div>
        <div className="flex items-center gap-3 px-3 mb-8 cursor-pointer group" onClick={() => setActiveTab('dashboard')}>
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-600/30 border border-amber-500/40 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform duration-300 shadow-amber-glow">
            {/* Bespoke 8-pointed star */}
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M12 2L14.3 9.7L22 12L14.3 14.3L12 22L9.7 14.3L2 12L9.7 9.7L12 2Z" />
            </svg>
          </div>
          <div>
            <h1 className="font-serif text-lg tracking-[0.2em] font-bold text-white uppercase leading-none">
              FOR ME
            </h1>
            <p className="text-[11px] text-zinc-400 tracking-wider font-light mt-1 font-serif italic">
              Private Life Ledger
            </p>
          </div>
        </div>

        {/* Primary Navigation */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 text-left ${
                  isActive
                    ? 'bg-gradient-to-r from-orange-500/15 to-transparent text-amber-300 border-l-2 border-amber-500 shadow-inner-subtle'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.03]'
                }`}
              >
                <Icon
                  className={`w-4 h-4 transition-colors ${
                    isActive ? 'text-amber-400' : 'text-zinc-400'
                  }`}
                />
                <span className="tracking-wide">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Actions */}
      <div className="pt-6 border-t border-white/[0.06] space-y-1">
        <button
          onClick={() => setActiveTab('settings')}
          className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 text-left ${
            activeTab === 'settings'
              ? 'bg-white/[0.06] text-amber-300 border-l-2 border-amber-500'
              : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.03]'
          }`}
        >
          <Settings className="w-4 h-4 text-zinc-400" />
          <span>Settings</span>
        </button>

        <button
          onClick={handleExportData}
          className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.03] transition-all text-left"
        >
          <Download className="w-4 h-4 text-zinc-400" />
          <span>Export Data</span>
        </button>

        <div className="pt-4 px-3 text-[11px] text-zinc-400 font-serif italic tracking-wide">
          Built for a better me.
        </div>
      </div>
    </aside>
  );
};
