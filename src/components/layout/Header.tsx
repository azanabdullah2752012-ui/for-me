import React, { useState, useRef, useEffect } from 'react';
import {
  Calendar as CalendarIcon,
  ChevronDown,
  Menu,
  ChevronLeft,
  ChevronRight,
  Settings as SettingsIcon,
  Shield,
  Download,
  PenTool,
  RotateCcw,
  Clock,
  Monitor,
  Headphones,
} from 'lucide-react';
import { NavView } from '../../types';
import { useData, formatDateKey } from '../../context/DataContext';
import { sound } from '../../audio/sound';

interface HeaderProps {
  currentView: NavView;
  onOpenMobileNav: () => void;
  onNavigate?: (view: NavView) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onOpenMobileNav,
  onNavigate,
}) => {
  const {
    selectedDate,
    setSelectedDate,
    exportDataJSON,
    settings,
    studyTimer,
    studyTimerElapsed,
    setIsMusicDrawerOpen,
    activeMusicId,
  } = useData();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dateInputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleExport = () => {
    sound.complete?.();
    const json = exportDataJSON();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `forme-journal-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const [y, m, d] = selectedDate.split('-').map(Number);
  const dateObj = new Date(y, m - 1, d);
  const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'short' });
  const dayNum = dateObj.getDate();
  const monthName = dateObj.toLocaleDateString('en-US', { month: 'short' });
  const year = dateObj.getFullYear();
  const formattedDate = `${dayName}, ${dayNum} ${monthName} ${year}`;

  const todayKey = formatDateKey(new Date());
  const isToday = selectedDate === todayKey;

  const handlePrevDay = () => {
    sound.tick();
    const prev = new Date(y, m - 1, d - 1);
    setSelectedDate(formatDateKey(prev));
  };

  const handleNextDay = () => {
    sound.tick();
    const next = new Date(y, m - 1, d + 1);
    setSelectedDate(formatDateKey(next));
  };

  const handleGoToday = () => {
    sound.tick();
    setSelectedDate(todayKey);
  };

  const VIEW_META: Record<NavView, { category: string; title: string }> = {
    dashboard: { category: 'Overview', title: 'Personal Dashboard' },
    'daily-tracker': { category: 'Daily', title: 'Journal & Notes' },
    habits: { category: 'Daily', title: 'Habits & Streaks' },
    promises: { category: 'Daily', title: 'Daily Commitments' },
    health: { category: 'Daily', title: 'Sleep & Routine' },
    reflections: { category: 'Thoughts', title: 'Reflections' },
    goals: { category: 'Goals', title: 'Goals & Milestones' },
    studies: { category: 'Focus', title: 'Study & Focus Timer' },
    analytics: { category: 'Insights', title: 'Stats & Trends' },
    'weekly-audit': { category: 'Recap', title: 'Weekly Recap' },
    'monthly-review': { category: 'Recap', title: 'Monthly Recap' },
    'life-audit': { category: 'Balance', title: 'Life Balance' },
    manifesto: { category: 'Principles', title: 'Rules & Principles' },
    settings: { category: 'System', title: 'Settings' },
    wallpaper: { category: 'Desk', title: 'Desktop Clock HUD' },
  };

  const currentMeta = VIEW_META[currentView] || { category: 'Ledger', title: 'Workspace' };

  return (
    <header className="sticky top-0 z-30 bg-[#0C0D0F]/95 backdrop-blur-xl border-b border-white/[0.08] px-5 md:px-8 pt-8 md:pt-9 pb-3 md:pb-3.5 flex items-center justify-between text-white select-none transition-colors duration-200">
      {/* Left: View Breadcrumb Identity */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileNav}
          className="md:hidden p-1.5 text-zinc-400 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors focus:outline-none focus:ring-1 focus:ring-white"
          aria-label="Open Navigation Menu"
        >
          <Menu size={16} />
        </button>

        <div className="flex items-center gap-2 text-xs font-sans">
          <span className="text-zinc-500 hidden sm:inline">{currentMeta.category}</span>
          <span className="text-zinc-700 hidden sm:inline">/</span>
          <span className="text-white font-medium tracking-tight">{currentMeta.title}</span>
        </div>
      </div>

      {/* Center: Global Unified Date Navigator */}
      <div className="flex items-center gap-2">
        <div className="flex items-center bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] rounded-xl text-xs transition-colors shadow-sm">
          <button
            onClick={handlePrevDay}
            className="p-1.5 text-zinc-400 hover:text-white rounded-l-xl transition-colors focus:outline-none focus:ring-1 focus:ring-white"
            title="Previous Day"
          >
            <ChevronLeft size={13} />
          </button>

          <button
            onClick={() => dateInputRef.current?.showPicker?.() || dateInputRef.current?.focus()}
            className="relative px-2.5 py-1 flex items-center gap-1.5 font-sans text-white focus:outline-none focus:ring-1 focus:ring-white"
            title="Click to jump to date"
          >
            <CalendarIcon size={12} className="text-zinc-400" />
            <span className="font-mono font-medium text-xs tracking-tight">{formattedDate}</span>
            <input
              ref={dateInputRef}
              type="date"
              value={selectedDate}
              onChange={(e) => {
                if (e.target.value) {
                  sound.tick();
                  setSelectedDate(e.target.value);
                }
              }}
              className="absolute inset-0 opacity-0 pointer-events-none"
              tabIndex={-1}
            />
          </button>

          <button
            onClick={handleNextDay}
            className="p-1.5 text-zinc-400 hover:text-white rounded-r-xl transition-colors focus:outline-none focus:ring-1 focus:ring-white"
            title="Next Day"
          >
            <ChevronRight size={13} />
          </button>
        </div>

        {!isToday && (
          <button
            onClick={handleGoToday}
            className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 text-xs font-sans text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.12] rounded-lg transition-colors focus:outline-none focus:ring-1 focus:ring-white"
            title="Jump to Today"
          >
            <RotateCcw size={10} />
            <span>Today</span>
          </button>
        )}
      </div>

      {/* Right: Quick Entry & User Actions */}
      <div className="flex items-center gap-2">
        {studyTimer.isRunning && (
          <button
            onClick={() => {
              sound.tick();
              onNavigate?.('studies');
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.08] border border-white/[0.16] text-white text-xs font-mono hover:bg-white/[0.14] transition-all focus:outline-none focus:ring-1 focus:ring-white"
            title="Deep Study Stopwatch Running • Click to View"
          >
            <Clock size={12} className="text-white animate-pulse" />
            <span>
              {Math.floor(studyTimerElapsed / 60)}:{(studyTimerElapsed % 60).toString().padStart(2, '0')}
            </span>
            <span className="hidden sm:inline font-sans font-medium text-[10px] text-zinc-400">
              ({studyTimer.subject || 'Focus'})
            </span>
          </button>
        )}

        {currentView !== 'daily-tracker' && (
          <button
            onClick={() => {
              sound.tick();
              onNavigate?.('daily-tracker');
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-sans font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-xl transition-all shadow-md focus:outline-none focus:ring-1 focus:ring-white"
          >
            <PenTool size={13} />
            <span className="hidden sm:inline">Write</span>
          </button>
        )}

        {/* Audio Hub Quick Trigger */}
        <button
          type="button"
          onClick={() => {
            sound.tick();
            setIsMusicDrawerOpen(true);
          }}
          className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-sans font-medium rounded-xl border transition-all focus:outline-none focus:ring-1 focus:ring-white ${
            activeMusicId
              ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300'
              : 'bg-white/[0.03] border-white/[0.08] text-zinc-400 hover:text-white hover:bg-white/[0.06]'
          }`}
          title="Toggle Ambient Audio Drawer"
        >
          <Headphones size={13} className={activeMusicId ? 'text-emerald-400' : 'text-zinc-400'} />
          <span className="hidden sm:inline">Audio</span>
        </button>

        {/* Export / Quick Settings Menu */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/[0.06] rounded-xl border border-white/[0.08] transition-colors focus:outline-none focus:ring-1 focus:ring-white"
            title="Options & Data Backup"
            aria-label="Options"
          >
            <SettingsIcon size={14} />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-[#15171C] border border-white/[0.12] shadow-2xl py-1.5 z-50 text-xs font-sans animate-fadeIn text-zinc-300">
              <button
                onClick={() => {
                  handleExport();
                  setIsDropdownOpen(false);
                }}
                className="w-full text-left px-3.5 py-2 hover:bg-white/[0.06] text-white flex items-center gap-2 transition-colors"
              >
                <Download size={13} className="text-zinc-400" />
                <span>Export Local Backup (JSON)</span>
              </button>

              <div className="my-1 border-t border-white/[0.06]" />

              <button
                onClick={() => {
                  sound.tick();
                  onNavigate?.('settings');
                  setIsDropdownOpen(false);
                }}
                className="w-full text-left px-3.5 py-2 hover:bg-white/[0.06] text-zinc-300 flex items-center gap-2 transition-colors"
              >
                <SettingsIcon size={13} className="text-zinc-400" />
                <span>Ledger Settings</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
