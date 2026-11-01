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

  return (
    <header className="sticky top-0 z-30 bg-cosmic-surface/90 border-b border-white/[0.07] px-6 md:px-8 py-3.5 flex items-center justify-between text-paper-ink transition-colors duration-200">
      {/* Left: Mobile Menu Toggle & Today Indicator */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileNav}
          className="md:hidden p-2 text-paper-secondary hover:text-paper-ink hover:bg-white/[0.06] rounded-lg transition-colors"
          aria-label="Open Navigation Menu"
        >
          <Menu size={18} />
        </button>

        {/* Archival Date Selector Stamp */}
        <div className="flex items-center bg-white/[0.03] border border-white/[0.08] rounded-lg text-xs">
          <button
            onClick={handlePrevDay}
            className="p-2 text-paper-muted hover:text-paper-ink hover:bg-white/[0.05] rounded-l-lg transition-colors"
            title="Previous Day"
          >
            <ChevronLeft size={14} />
          </button>

          <button
            onClick={() => dateInputRef.current?.showPicker?.() || dateInputRef.current?.focus()}
            className="relative px-3 py-1.5 flex items-center gap-2 hover:bg-white/[0.05] transition-colors font-sans text-paper-ink"
          >
            <CalendarIcon size={13} className="text-accent" />
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
            className="p-2 text-paper-muted hover:text-paper-ink hover:bg-white/[0.05] rounded-r-lg transition-colors"
            title="Next Day"
          >
            <ChevronRight size={14} />
          </button>
        </div>

        {!isToday && (
          <button
            onClick={handleGoToday}
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-sans text-accent bg-accent/10 hover:bg-accent/20 border border-accent/25 rounded-md transition-colors"
          >
            <RotateCcw size={11} />
            <span>Today</span>
          </button>
        )}
      </div>

      {/* Center: Quiet Editorial Reminder */}
      <div className="hidden xl:block text-center max-w-xs xl:max-w-sm px-4 truncate">
        <p className="text-xs font-sans text-paper-muted/80 italic truncate">
          &ldquo;{settings.personalReminder || 'Remember, you are here for you.'}&rdquo;
        </p>
      </div>

      {/* Right: Quick Entry & User Actions */}
      <div className="flex items-center gap-2 md:gap-2.5 pr-1 md:pr-2">
        {studyTimer.isRunning && (
          <button
            onClick={() => {
              sound.tick();
              onNavigate?.('studies');
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent/15 border border-accent/30 text-accent text-xs font-mono hover:bg-accent/25 transition-all"
            title="Deep Study Stopwatch Running • Click to View"
          >
            <Clock size={12} className="text-accent animate-pulse" />
            <span>
              {Math.floor(studyTimerElapsed / 60)}:{(studyTimerElapsed % 60).toString().padStart(2, '0')}
            </span>
            <span className="hidden sm:inline font-sans font-medium text-[10px] text-paper-muted">
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
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans font-medium text-white bg-accent hover:bg-accent-hover rounded-lg transition-all shadow-sm"
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
          className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-sans font-medium rounded-lg border transition-all ${
            activeMusicId
              ? 'bg-forest/15 border-forest/35 text-forest'
              : 'text-paper-secondary bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.07] hover:border-white/[0.15]'
          }`}
          title="Open Focus Audio & Playlists"
        >
          <Headphones size={13} className={activeMusicId ? 'text-forest animate-pulse' : 'text-paper-muted'} />
          <span className="hidden sm:inline">Audio</span>
          {activeMusicId && (
            <span className="w-1.5 h-1.5 rounded-full bg-forest animate-ping" />
          )}
        </button>

        {/* Desktop Wallpaper HUD Switcher */}
        <button
          onClick={() => {
            sound.tick();
            onNavigate?.('wallpaper');
          }}
          className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-sans font-medium text-paper-secondary bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.07] hover:border-white/[0.15] rounded-lg transition-all"
          title="Switch to Full-Screen Desktop Wallpaper HUD"
        >
          <Monitor size={13} className="text-paper-muted" />
          <span>Desk</span>
        </button>

        {/* User Monogram Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-1.5 p-1 rounded-full hover:bg-white/[0.06] border border-white/[0.07] transition-colors"
            aria-label="User Menu"
          >
            <div className="w-7 h-7 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center text-xs font-sans font-semibold text-accent">
              {(settings.journalOwnerName || 'M').charAt(0).toUpperCase()}
            </div>
            <ChevronDown size={12} className="text-paper-muted pr-0.5" />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 rounded-xl bg-cosmic-surface border border-white/[0.1] shadow-xl py-1.5 z-50 text-xs">
              <div className="px-4 py-2.5 border-b border-white/[0.07]">
                <span className="font-heading font-semibold text-paper-ink block">
                  {settings.journalOwnerName || 'Personal Journal'}
                </span>
                <span className="text-[11px] text-paper-muted font-sans">
                  Private Life Ledger
                </span>
              </div>

              <button
                onClick={() => {
                  sound.tick();
                  setIsDropdownOpen(false);
                  onNavigate?.('wallpaper');
                }}
                className="w-full text-left px-4 py-2 hover:bg-white/[0.05] text-paper-secondary hover:text-paper-ink flex items-center gap-2.5 transition-colors"
              >
                <Monitor size={14} className="text-accent" />
                <span>Full Screen Desk</span>
              </button>

              <button
                onClick={() => {
                  sound.tick();
                  setIsDropdownOpen(false);
                  onNavigate?.('manifesto');
                }}
                className="w-full text-left px-4 py-2 hover:bg-white/[0.05] text-paper-secondary hover:text-paper-ink flex items-center gap-2.5 transition-colors"
              >
                <Shield size={14} className="text-accent" />
                <span>Personal Manifesto</span>
              </button>

              <button
                onClick={() => {
                  sound.tick();
                  setIsDropdownOpen(false);
                  onNavigate?.('settings');
                }}
                className="w-full text-left px-4 py-2 hover:bg-white/[0.05] text-paper-secondary hover:text-paper-ink flex items-center gap-2.5 transition-colors"
              >
                <SettingsIcon size={14} className="text-paper-muted" />
                <span>Ledger Settings</span>
              </button>

              <div className="border-t border-white/[0.07] my-1" />

              <button
                onClick={() => {
                  handleExport();
                  setIsDropdownOpen(false);
                }}
                className="w-full text-left px-4 py-2 hover:bg-white/[0.05] text-paper-secondary hover:text-paper-ink flex items-center gap-2.5 transition-colors"
              >
                <Download size={14} className="text-accent" />
                <span>Export JSON Backup</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
