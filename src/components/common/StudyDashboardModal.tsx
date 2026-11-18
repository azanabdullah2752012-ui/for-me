import React, { useState, useEffect, useMemo } from 'react';
import { 
  X, 
  BarChart2, 
  Clock, 
  Flame, 
  Plus, 
  Trash2, 
  Calendar, 
  Tag, 
  TrendingUp, 
  CheckCircle2,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { useData } from '../../context/DataContext';

interface StudyDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudyDashboardModal: React.FC<StudyDashboardModalProps> = ({ isOpen, onClose }) => {
  const { 
    studySessions, 
    deleteStudySession, 
    studySubjects, 
    addStudySubject, 
    deleteStudySubject, 
    dailyStudyTargetHours, 
    setDailyStudyTargetHours,
    setStudySubject,
    appTheme 
  } = useData();

  const isLight = appTheme === 'light';

  // Active view tab: 'analytics' | 'history' | 'subjects'
  const [activeTab, setActiveTab] = useState<'analytics' | 'history' | 'subjects'>('analytics');
  const [timeframe, setTimeframe] = useState<'7d' | '30d'>('7d');
  const [historySubjectFilter, setHistorySubjectFilter] = useState<string>('all');

  // New subject creation form state
  const [newSubjectName, setNewSubjectName] = useState('');
  const [newSubjectColor, setNewSubjectColor] = useState('#8b5cf6');
  const [isAddingSubject, setIsAddingSubject] = useState(false);

  // Accessible keyboard shortcuts (Escape closes)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Color palette choices for new subjects
  const COLOR_PALETTES = [
    '#8b5cf6', // Violet
    '#06b6d4', // Cyan
    '#10b981', // Emerald
    '#f59e0b', // Amber
    '#f43f5e', // Rose
    '#3b82f6', // Blue
    '#ec4899', // Pink
    '#a855f7', // Purple
  ];

  // ────────────────────────────────────────────────────────────
  // ANALYTICS CALCULATIONS
  // ────────────────────────────────────────────────────────────
  const todayDateStr = useMemo(() => new Date().toISOString().slice(0, 10), []);

  // Format minutes into clean human-readable hours & minutes
  const formatMins = (totalMinutes: number): string => {
    const rounded = Math.round(totalMinutes);
    const hrs = Math.floor(rounded / 60);
    const mins = rounded % 60;
    if (hrs === 0) return `${mins}m`;
    if (mins === 0) return `${hrs}h`;
    return `${hrs}h ${mins}m`;
  };

  // Today's total study minutes
  const todayMinutes = useMemo(() => {
    return studySessions
      .filter((s) => s.timestamp.slice(0, 10) === todayDateStr)
      .reduce((acc, s) => acc + s.durationSeconds / 60, 0);
  }, [studySessions, todayDateStr]);

  const targetMinutes = dailyStudyTargetHours * 60;
  const todayProgressPct = Math.min(100, Math.round((todayMinutes / Math.max(1, targetMinutes)) * 100));
  const remainingMinutesToday = Math.max(0, targetMinutes - todayMinutes);

  // Past 7 Days Daily Breakdown
  const last7DaysData = useMemo(() => {
    const days: { dateStr: string; label: string; dayName: string; minutes: number; isToday: boolean }[] = [];
    const now = new Date();

    for (let i = 6; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().slice(0, 10);
      const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
      const label = d.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' });
      const minutes = studySessions
        .filter((s) => s.timestamp.slice(0, 10) === dateStr)
        .reduce((acc, s) => acc + s.durationSeconds / 60, 0);

      days.push({
        dateStr,
        label,
        dayName,
        minutes,
        isToday: dateStr === todayDateStr,
      });
    }
    return days;
  }, [studySessions, todayDateStr]);

  // Past 30 Days Breakdown
  const last30DaysData = useMemo(() => {
    const days: { dateStr: string; label: string; minutes: number; isToday: boolean }[] = [];
    const now = new Date();

    for (let i = 29; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().slice(0, 10);
      const label = d.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' });
      const minutes = studySessions
        .filter((s) => s.timestamp.slice(0, 10) === dateStr)
        .reduce((acc, s) => acc + s.durationSeconds / 60, 0);

      days.push({
        dateStr,
        label,
        minutes,
        isToday: dateStr === todayDateStr,
      });
    }
    return days;
  }, [studySessions, todayDateStr]);

  // Total minutes in active timeframe
  const activeTimeframeMinutes = useMemo(() => {
    const data = timeframe === '7d' ? last7DaysData : last30DaysData;
    return data.reduce((acc, d) => acc + d.minutes, 0);
  }, [timeframe, last7DaysData, last30DaysData]);

  // Consecutive Study Streak Calculation
  const studyStreak = useMemo(() => {
    let streak = 0;
    const now = new Date();
    // Check backwards from today or yesterday
    let checkDate = new Date(now);
    
    // Check if studied today
    const studiedToday = studySessions.some((s) => s.timestamp.slice(0, 10) === todayDateStr && s.durationSeconds >= 60);
    if (!studiedToday) {
      // Check yesterday
      checkDate.setDate(checkDate.getDate() - 1);
    }

    for (let i = 0; i < 90; i++) {
      const dateStr = checkDate.toISOString().slice(0, 10);
      const minsOnDate = studySessions
        .filter((s) => s.timestamp.slice(0, 10) === dateStr)
        .reduce((acc, s) => acc + s.durationSeconds / 60, 0);

      if (minsOnDate > 0) {
        streak++;
        checkDate.setDate(checkDate.getDate() - 1);
      } else {
        break;
      }
    }
    return streak;
  }, [studySessions, todayDateStr]);

  // Subject distribution in active timeframe
  const subjectBreakdown = useMemo(() => {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - (timeframe === '7d' ? 7 : 30));
    const cutoffStr = cutoffDate.toISOString().slice(0, 10);

    const relevantSessions = studySessions.filter((s) => s.timestamp.slice(0, 10) >= cutoffStr);
    const totalsBySubject: Record<string, number> = {};

    relevantSessions.forEach((s) => {
      const subj = s.subject || 'Engineering';
      totalsBySubject[subj] = (totalsBySubject[subj] || 0) + s.durationSeconds / 60;
    });

    const totalMinutes = Object.values(totalsBySubject).reduce((a, b) => a + b, 0);

    return Object.entries(totalsBySubject)
      .map(([name, minutes]) => {
        const matchingSubject = studySubjects.find((sub) => sub.name.toLowerCase() === name.toLowerCase());
        const color = matchingSubject?.color || '#8b5cf6';
        const percentage = totalMinutes > 0 ? Math.round((minutes / totalMinutes) * 100) : 0;
        return { name, minutes, color, percentage };
      })
      .sort((a, b) => b.minutes - a.minutes);
  }, [studySessions, studySubjects, timeframe]);

  // Filtered session history
  const filteredHistory = useMemo(() => {
    let list = [...studySessions];
    if (historySubjectFilter !== 'all') {
      list = list.filter((s) => (s.subject || 'Engineering').toLowerCase() === historySubjectFilter.toLowerCase());
    }
    return list.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  }, [studySessions, historySubjectFilter]);

  // Handle adding custom subject
  const handleCreateSubject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSubjectName.trim()) return;
    addStudySubject(newSubjectName.trim(), newSubjectColor);
    setNewSubjectName('');
    setIsAddingSubject(false);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto backdrop-blur-2xl bg-black/75 animate-fadeIn select-none"
      role="dialog"
      aria-modal="true"
      aria-label="Study & Focus Analytics Dashboard"
    >
      {/* Background dismiss */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Main Container */}
      <div 
        className={`relative w-full max-w-4xl max-h-[92vh] overflow-hidden flex flex-col rounded-3xl border shadow-2xl z-10 transition-all ${
          isLight 
            ? 'bg-white/95 border-zinc-200/90 text-zinc-900 shadow-[0_25px_70px_rgba(0,0,0,0.15)]' 
            : 'bg-[#0b0d18]/95 border-white/[0.12] text-zinc-100 shadow-[0_30px_90px_rgba(0,0,0,0.9)]'
        }`}
      >
        {/* ======================================================== */}
        {/* HEADER BAR                                               */}
        {/* ======================================================== */}
        <div className={`flex items-center justify-between px-6 py-4 border-b shrink-0 ${
          isLight ? 'border-zinc-200/90 bg-zinc-50/70' : 'border-white/[0.06] bg-black/25'
        }`}>
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-2xl flex items-center justify-center border shadow-xs ${
              isLight ? 'bg-violet-100 border-violet-200 text-violet-700' : 'bg-violet-600/20 border-violet-500/40 text-violet-400'
            }`}>
              <BarChart2 className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-sans font-bold tracking-tight">Study & Focus Analytics</h2>
              <p className={`text-[11px] font-sans ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                Clear daily follow-through, weekly trajectories, and subject logs
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close Analytics Dashboard"
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
              isLight ? 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600' : 'bg-white/[0.06] hover:bg-white/[0.12] text-zinc-400 hover:text-white'
            }`}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* ======================================================== */}
        {/* TAB CONTROLS (Analytics · History · Subjects)            */}
        {/* ======================================================== */}
        <div className={`px-6 py-2.5 border-b shrink-0 flex items-center justify-between gap-3 ${
          isLight ? 'border-zinc-200/80 bg-zinc-50/40' : 'border-white/[0.04] bg-white/[0.015]'
        }`}>
          <div className={`grid grid-cols-3 gap-1 p-1 rounded-2xl ${isLight ? 'bg-zinc-200/60' : 'bg-white/[0.04]'}`}>
            {[
              { id: 'analytics', label: 'Analytics & Trajectory', icon: TrendingUp },
              { id: 'history', label: `Session Ledger (${studySessions.length})`, icon: Clock },
              { id: 'subjects', label: `Subjects (${studySubjects.length})`, icon: Tag },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-xl text-xs font-sans font-medium transition-all cursor-pointer ${
                    isActive
                      ? isLight
                        ? 'bg-white text-zinc-950 font-bold shadow-xs'
                        : 'bg-white text-zinc-950 font-bold shadow-[0_2px_10px_rgba(255,255,255,0.15)]'
                      : isLight
                        ? 'text-zinc-600 hover:text-zinc-950 hover:bg-white/60'
                        : 'text-zinc-400 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {activeTab === 'analytics' && (
            <div className={`flex items-center gap-1 p-0.5 rounded-xl border ${
              isLight ? 'bg-zinc-100 border-zinc-200' : 'bg-white/[0.04] border-white/10'
            }`}>
              <button
                type="button"
                onClick={() => setTimeframe('7d')}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-medium transition-all cursor-pointer ${
                  timeframe === '7d' 
                    ? isLight ? 'bg-white text-zinc-900 shadow-xs font-bold' : 'bg-white/15 text-white font-bold'
                    : isLight ? 'text-zinc-500 hover:text-zinc-900' : 'text-zinc-400 hover:text-white'
                }`}
              >
                7 Days
              </button>
              <button
                type="button"
                onClick={() => setTimeframe('30d')}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-medium transition-all cursor-pointer ${
                  timeframe === '30d' 
                    ? isLight ? 'bg-white text-zinc-900 shadow-xs font-bold' : 'bg-white/15 text-white font-bold'
                    : isLight ? 'text-zinc-500 hover:text-zinc-900' : 'text-zinc-400 hover:text-white'
                }`}
              >
                30 Days
              </button>
            </div>
          )}
        </div>

        {/* ======================================================== */}
        {/* TAB 1: ANALYTICS & TRAJECTORY                            */}
        {/* ======================================================== */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {activeTab === 'analytics' && (
            <>
              {/* 1. Daily Progress & Goal Hero Card */}
              <div className={`p-5 rounded-3xl border transition-all ${
                isLight ? 'bg-zinc-50/90 border-zinc-200 shadow-xs' : 'bg-white/[0.03] border-white/[0.08]'
              }`}>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <span className={`text-[10px] font-mono uppercase tracking-widest font-semibold block ${
                      isLight ? 'text-zinc-500' : 'text-zinc-400'
                    }`}>
                      Today's Study Follow-Through
                    </span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-3xl font-display font-bold tabular-nums">
                        {formatMins(todayMinutes)}
                      </span>
                      <span className={`text-xs font-mono ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                        / {dailyStudyTargetHours}h target ({todayProgressPct}%)
                      </span>
                    </div>
                  </div>

                  {/* Streak & Weekly Badges */}
                  <div className="flex items-center gap-2">
                    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-2xl border ${
                      studyStreak > 0
                        ? isLight ? 'bg-amber-50 border-amber-200 text-amber-800' : 'bg-amber-500/15 border-amber-500/30 text-amber-300'
                        : isLight ? 'bg-zinc-100 border-zinc-200 text-zinc-600' : 'bg-white/[0.04] border-white/[0.08] text-zinc-400'
                    }`}>
                      <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span className="text-xs font-mono font-bold">{studyStreak} Day Streak</span>
                    </div>

                    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-2xl border ${
                      isLight ? 'bg-zinc-100 border-zinc-200 text-zinc-700' : 'bg-white/[0.04] border-white/[0.08] text-zinc-300'
                    }`}>
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="text-xs font-mono">{formatMins(activeTimeframeMinutes)} total ({timeframe})</span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-white/[0.08] h-2.5 rounded-full overflow-hidden p-0.5">
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 ${
                      todayProgressPct >= 100 
                        ? 'bg-gradient-to-r from-emerald-500 to-emerald-400' 
                        : 'bg-gradient-to-r from-violet-500 to-cyan-400'
                    }`}
                    style={{ width: `${todayProgressPct}%` }}
                  />
                </div>

                {/* Subtext and Quick Target Changer */}
                <div className="flex flex-wrap items-center justify-between gap-2 mt-3 pt-3 border-t border-white/[0.06] text-xs">
                  <div className="flex items-center gap-1.5">
                    {todayProgressPct >= 100 ? (
                      <span className="text-emerald-400 font-sans font-medium flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Target reached for today! Great dedication.
                      </span>
                    ) : (
                      <span className={isLight ? 'text-zinc-600' : 'text-zinc-400'}>
                        {formatMins(remainingMinutesToday)} remaining to hit your daily goal.
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className={`text-[11px] font-sans ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                      Daily Goal:
                    </span>
                    {[2, 3, 4, 5, 6].map((h) => (
                      <button
                        key={h}
                        type="button"
                        onClick={() => setDailyStudyTargetHours(h)}
                        className={`px-2 py-0.5 rounded-lg text-[10px] font-mono transition-all cursor-pointer ${
                          dailyStudyTargetHours === h
                            ? isLight ? 'bg-zinc-900 text-white font-bold' : 'bg-white text-zinc-950 font-bold'
                            : isLight ? 'bg-zinc-200/70 hover:bg-zinc-200 text-zinc-700' : 'bg-white/[0.06] hover:bg-white/[0.1] text-zinc-300'
                        }`}
                      >
                        {h}h
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* 2. Visual Study Bar Chart (7-Day or 30-Day) */}
              <div className={`p-5 rounded-3xl border transition-all ${
                isLight ? 'bg-zinc-50/70 border-zinc-200' : 'bg-white/[0.025] border-white/[0.08]'
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xs font-sans font-bold uppercase tracking-wider">
                      {timeframe === '7d' ? '7-Day Focus Distribution' : '30-Day Focus Activity'}
                    </h3>
                    <p className={`text-[11px] font-sans mt-0.5 ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                      Visualizing hours invested per day vs. {dailyStudyTargetHours}h daily target
                    </p>
                  </div>
                </div>

                {timeframe === '7d' ? (
                  /* 7-Day High-Resolution Bar Columns */
                  <div className="grid grid-cols-7 gap-2 pt-6 pb-2 items-end min-h-[160px]">
                    {last7DaysData.map((d) => {
                      const maxBarHours = Math.max(dailyStudyTargetHours * 1.4, 6);
                      const barHours = d.minutes / 60;
                      const heightPct = Math.min(100, Math.round((barHours / maxBarHours) * 100));
                      const hitTarget = barHours >= dailyStudyTargetHours;

                      return (
                        <div key={d.dateStr} className="flex flex-col items-center gap-2 group">
                          {/* Duration tool-label on top */}
                          <span className={`text-[10px] font-mono transition-opacity ${
                            d.minutes > 0 ? (isLight ? 'text-zinc-700 font-semibold' : 'text-zinc-300 font-semibold') : 'opacity-40 text-zinc-500'
                          }`}>
                            {d.minutes > 0 ? formatMins(d.minutes) : '—'}
                          </span>

                          {/* Bar Cylinder */}
                          <div className="w-full max-w-[42px] h-28 bg-white/[0.04] rounded-xl flex items-end p-1 overflow-hidden relative">
                            {/* Target line watermark */}
                            <div 
                              className="absolute inset-x-0 border-b border-dashed border-white/20 pointer-events-none z-10"
                              style={{ bottom: `${Math.round((dailyStudyTargetHours / maxBarHours) * 100)}%` }}
                              title={`Target: ${dailyStudyTargetHours}h`}
                            />

                            <div 
                              className={`w-full rounded-lg transition-all duration-700 ${
                                hitTarget
                                  ? 'bg-gradient-to-t from-emerald-500 to-emerald-400'
                                  : d.minutes > 0
                                    ? 'bg-gradient-to-t from-violet-600 to-cyan-400'
                                    : 'bg-transparent'
                              } ${d.isToday ? 'ring-2 ring-white/50' : ''}`}
                              style={{ height: `${Math.max(d.minutes > 0 ? 8 : 0, heightPct)}%` }}
                            />
                          </div>

                          {/* Day Labels */}
                          <div className="text-center">
                            <span className={`text-xs font-sans font-bold block ${
                              d.isToday ? 'text-violet-400' : isLight ? 'text-zinc-800' : 'text-zinc-200'
                            }`}>
                              {d.dayName}
                            </span>
                            <span className={`text-[10px] font-mono block ${
                              isLight ? 'text-zinc-500' : 'text-zinc-400'
                            }`}>
                              {d.label}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  /* 30-Day Rolling Heat Strip */
                  <div className="space-y-2 pt-2">
                    <div className="grid grid-cols-10 sm:grid-cols-15 gap-1.5 pt-2">
                      {last30DaysData.map((d) => {
                        const barHours = d.minutes / 60;
                        const hitTarget = barHours >= dailyStudyTargetHours;
                        const opacity = barHours === 0 ? 'bg-white/[0.04]' :
                          barHours < 1 ? 'bg-violet-600/30' :
                          barHours < 2.5 ? 'bg-violet-500/60' :
                          hitTarget ? 'bg-emerald-400' : 'bg-cyan-400';

                        return (
                          <div
                            key={d.dateStr}
                            title={`${d.dateStr}: ${formatMins(d.minutes)} studied`}
                            className={`h-9 rounded-lg flex flex-col items-center justify-center text-[10px] font-mono cursor-pointer transition-transform hover:scale-105 border ${
                              d.isToday ? 'border-white/80 ring-1 ring-white/40' : 'border-transparent'
                            } ${opacity}`}
                          >
                            <span className="text-[9px] opacity-70 leading-none">{d.label.split('/')[1]}</span>
                            {d.minutes > 0 && (
                              <span className="text-[9px] font-bold leading-none mt-0.5">
                                {Math.round(barHours * 10) / 10}h
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-2">
                      <span>30 days ago</span>
                      <div className="flex items-center gap-1.5 text-[10px]">
                        <span>0h</span>
                        <div className="w-2.5 h-2.5 rounded bg-white/[0.04]" />
                        <div className="w-2.5 h-2.5 rounded bg-violet-600/40" />
                        <div className="w-2.5 h-2.5 rounded bg-violet-500/70" />
                        <div className="w-2.5 h-2.5 rounded bg-emerald-400" />
                        <span>Target hit</span>
                      </div>
                      <span>Today</span>
                    </div>
                  </div>
                )}
              </div>

              {/* 3. Subject Distribution Breakdown */}
              <div className={`p-5 rounded-3xl border transition-all ${
                isLight ? 'bg-zinc-50/70 border-zinc-200' : 'bg-white/[0.025] border-white/[0.08]'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-xs font-sans font-bold uppercase tracking-wider">
                      Subject Distribution ({timeframe})
                    </h3>
                    <p className={`text-[11px] font-sans ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                      Proportion of time invested across different subjects
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveTab('subjects')}
                    className="text-xs text-violet-400 hover:text-violet-300 font-sans flex items-center gap-1 cursor-pointer"
                  >
                    Manage Subjects
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {subjectBreakdown.length === 0 ? (
                  <div className="py-6 text-center text-xs text-zinc-500">
                    No focus sessions logged in this timeframe yet. Start a timer or log past study!
                  </div>
                ) : (
                  <div className="space-y-3">
                    {/* Multi-segmented horizontal bar */}
                    <div className="w-full h-3 rounded-full overflow-hidden flex bg-white/[0.05]">
                      {subjectBreakdown.map((subj) => (
                        <div
                          key={subj.name}
                          style={{ width: `${subj.percentage}%`, backgroundColor: subj.color }}
                          title={`${subj.name}: ${subj.percentage}% (${formatMins(subj.minutes)})`}
                          className="h-full transition-all duration-500"
                        />
                      ))}
                    </div>

                    {/* Subject Pill List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pt-2">
                      {subjectBreakdown.map((subj) => (
                        <div 
                          key={subj.name}
                          className={`p-2.5 rounded-2xl border flex items-center justify-between gap-2 ${
                            isLight ? 'bg-white border-zinc-200' : 'bg-white/[0.03] border-white/[0.06]'
                          }`}
                        >
                          <div className="flex items-center gap-2 truncate">
                            <span 
                              className="w-2.5 h-2.5 rounded-full shrink-0" 
                              style={{ backgroundColor: subj.color }}
                            />
                            <span className="text-xs font-sans font-medium truncate">{subj.name}</span>
                          </div>
                          <div className="text-right shrink-0">
                            <span className="text-xs font-mono font-bold block">{formatMins(subj.minutes)}</span>
                            <span className="text-[10px] font-mono text-zinc-500">{subj.percentage}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          {/* ======================================================== */}
          {/* TAB 2: DETAILED SESSION HISTORY LEDGER                   */}
          {/* ======================================================== */}
          {activeTab === 'history' && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-xs font-sans font-bold uppercase tracking-wider">Focus Session History</h3>
                  <p className={`text-[11px] font-sans ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                    Chronological record of completed stopwatch, pomodoro, and manual logs
                  </p>
                </div>

                {/* Filter by Subject */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className={`text-[11px] font-sans ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>Filter:</span>
                  <button
                    type="button"
                    onClick={() => setHistorySubjectFilter('all')}
                    className={`px-2.5 py-1 rounded-xl text-xs font-sans transition-all cursor-pointer ${
                      historySubjectFilter === 'all'
                        ? isLight ? 'bg-zinc-900 text-white font-bold' : 'bg-white text-zinc-950 font-bold'
                        : isLight ? 'bg-zinc-100 text-zinc-700' : 'bg-white/[0.05] text-zinc-300'
                    }`}
                  >
                    All
                  </button>
                  {studySubjects.map((sub) => (
                    <button
                      key={sub.id}
                      type="button"
                      onClick={() => setHistorySubjectFilter(sub.name)}
                      className={`px-2.5 py-1 rounded-xl text-xs font-sans transition-all cursor-pointer flex items-center gap-1.5 ${
                        historySubjectFilter.toLowerCase() === sub.name.toLowerCase()
                          ? isLight ? 'bg-zinc-900 text-white font-bold' : 'bg-white text-zinc-950 font-bold'
                          : isLight ? 'bg-zinc-100 text-zinc-700' : 'bg-white/[0.05] text-zinc-300'
                      }`}
                    >
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: sub.color }} />
                      <span>{sub.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {filteredHistory.length === 0 ? (
                <div className={`p-8 rounded-3xl border text-center ${
                  isLight ? 'bg-zinc-50 border-zinc-200 text-zinc-500' : 'bg-white/[0.02] border-white/10 text-zinc-400'
                }`}>
                  <BookOpen className="w-8 h-8 mx-auto mb-2 opacity-50 text-violet-400" />
                  <p className="text-sm font-sans font-medium">No sessions found.</p>
                  <p className="text-xs mt-1">Start a timer or log past study to record your focus history.</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {filteredHistory.map((session) => {
                    const sessionDate = new Date(session.timestamp);
                    const isToday = session.timestamp.slice(0, 10) === todayDateStr;
                    const dateFormatted = isToday 
                      ? 'Today' 
                      : sessionDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', weekday: 'short' });
                    const timeFormatted = sessionDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
                    const minutes = Math.round(session.durationSeconds / 60);

                    const matchingSubj = studySubjects.find((s) => s.name.toLowerCase() === (session.subject || '').toLowerCase());
                    const subjectColor = matchingSubj?.color || '#8b5cf6';

                    return (
                      <div
                        key={session.id}
                        className={`p-3 sm:p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                          isLight 
                            ? 'bg-white hover:bg-zinc-50 border-zinc-200/90 shadow-xs' 
                            : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span 
                            className="w-3 h-3 rounded-full shrink-0 shadow-xs"
                            style={{ backgroundColor: subjectColor }} 
                          />
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-sans font-bold">{session.subject || 'Engineering'}</span>
                              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                                isLight ? 'bg-zinc-100 border-zinc-200 text-zinc-600' : 'bg-white/[0.04] border-white/10 text-zinc-400'
                              }`}>
                                {session.mode || 'Stopwatch'}
                              </span>
                            </div>
                            <span className={`text-[11px] font-mono ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                              {dateFormatted} at {timeFormatted}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="text-sm font-mono font-bold text-violet-400">
                            +{formatMins(minutes)}
                          </span>
                          <button
                            type="button"
                            onClick={() => deleteStudySession(session.id)}
                            className="p-1.5 rounded-lg text-zinc-500 hover:text-rose-400 transition-colors cursor-pointer"
                            title="Delete this session record"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 3: SUBJECT MANAGEMENT                                */}
          {/* ======================================================== */}
          {activeTab === 'subjects' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-sans font-bold uppercase tracking-wider">Study Subjects & Categories</h3>
                  <p className={`text-[11px] font-sans ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                    Customize the subjects you tag when running focus sprints or logging study
                  </p>
                </div>
                {!isAddingSubject && (
                  <button
                    type="button"
                    onClick={() => setIsAddingSubject(true)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-violet-600 hover:bg-violet-500 text-white cursor-pointer shadow-xs transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Subject</span>
                  </button>
                )}
              </div>

              {/* Add Subject Drawer */}
              {isAddingSubject && (
                <form 
                  onSubmit={handleCreateSubject}
                  className={`p-4 rounded-2xl border space-y-3 animate-fadeIn ${
                    isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-white/[0.03] border-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-sans font-bold">New Subject Tag</span>
                    <button
                      type="button"
                      onClick={() => setIsAddingSubject(false)}
                      className="text-xs text-zinc-500 hover:text-zinc-300 cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      required
                      placeholder="e.g. Neuroscience, Physics, Design"
                      value={newSubjectName}
                      onChange={(e) => setNewSubjectName(e.target.value)}
                      className={`flex-1 px-3 py-2 rounded-xl border text-xs outline-none ${
                        isLight ? 'bg-white border-zinc-300 text-zinc-900' : 'bg-black/50 border-white/15 text-white'
                      }`}
                    />

                    {/* Color Swatch Picker */}
                    <div className="flex items-center gap-1">
                      {COLOR_PALETTES.map((color) => (
                        <button
                          key={color}
                          type="button"
                          onClick={() => setNewSubjectColor(color)}
                          style={{ backgroundColor: color }}
                          className={`w-6 h-6 rounded-full cursor-pointer transition-transform ${
                            newSubjectColor === color ? 'scale-125 ring-2 ring-white ring-offset-2' : 'hover:scale-110'
                          }`}
                        />
                      ))}
                    </div>

                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-violet-600 hover:bg-violet-500 text-white cursor-pointer"
                    >
                      Save
                    </button>
                  </div>
                </form>
              )}

              {/* Subject Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {studySubjects.map((sub) => (
                  <div
                    key={sub.id}
                    className={`p-3.5 rounded-2xl border flex items-center justify-between transition-all ${
                      isLight ? 'bg-white border-zinc-200 shadow-xs' : 'bg-white/[0.03] border-white/[0.08]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: sub.color }} />
                      <span className="text-xs font-sans font-bold">{sub.name}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setStudySubject(sub.name);
                          onClose();
                        }}
                        className={`px-2.5 py-1 rounded-xl text-[10px] font-sans font-medium border transition-colors cursor-pointer ${
                          isLight ? 'bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border-zinc-200' : 'bg-white/[0.05] hover:bg-white/[0.1] text-zinc-200 border-white/10'
                        }`}
                        title="Set as current active focus subject"
                      >
                        Set Active
                      </button>

                      {studySubjects.length > 1 && (
                        <button
                          type="button"
                          onClick={() => deleteStudySubject(sub.id)}
                          className="p-1 text-zinc-500 hover:text-rose-400 cursor-pointer"
                          title="Delete subject"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
