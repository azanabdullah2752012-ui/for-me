import React, { useState, useMemo } from 'react';
import { formatDateKey } from '../../context/DataContext';
import { Flame, Sparkles } from 'lucide-react';

interface StreakHeatmapMatrixProps {
  completionsByDate?: Record<string, boolean | number>;
  weeks?: number;
  onDayClick?: (dateKey: string) => void;
  selectedDate?: string;
  className?: string;
}

export const StreakHeatmapMatrix: React.FC<StreakHeatmapMatrixProps> = ({
  completionsByDate = {},
  weeks = 16,
  onDayClick,
  selectedDate,
  className = '',
}) => {
  const [hoveredDay, setHoveredDay] = useState<{
    dateKey: string;
    count: number;
    formatted: string;
    x: number;
    y: number;
  } | null>(null);

  // Generate grid columns (weeks)
  const gridData = useMemo(() => {
    const totalDays = weeks * 7;
    const today = new Date();
    const todayKey = formatDateKey(today);

    // End on current week's Saturday
    const currentDayOfWeek = today.getDay(); // 0 is Sunday
    const endDate = new Date(today);
    endDate.setDate(today.getDate() + (6 - currentDayOfWeek));

    const weeksArray: Array<
      Array<{
        dateKey: string;
        dateObj: Date;
        count: number;
        isToday: boolean;
        isFuture: boolean;
      }>
    > = [];

    let currentWeek: Array<{
      dateKey: string;
      dateObj: Date;
      count: number;
      isToday: boolean;
      isFuture: boolean;
    }> = [];

    for (let i = totalDays - 1; i >= 0; i--) {
      const d = new Date(endDate);
      d.setDate(endDate.getDate() - i);
      const key = formatDateKey(d);
      const rawVal = completionsByDate[key];
      const count = typeof rawVal === 'number' ? rawVal : rawVal ? 1 : 0;
      const isToday = key === todayKey;
      const isFuture = d > today;

      currentWeek.push({
        dateKey: key,
        dateObj: d,
        count,
        isToday,
        isFuture,
      });

      if (currentWeek.length === 7) {
        weeksArray.push(currentWeek);
        currentWeek = [];
      }
    }

    if (currentWeek.length > 0) {
      weeksArray.push(currentWeek);
    }

    return weeksArray;
  }, [completionsByDate, weeks]);

  // Total active days in range
  const stats = useMemo(() => {
    let activeDays = 0;
    let totalActions = 0;
    gridData.forEach((w) =>
      w.forEach((d) => {
        if (!d.isFuture && d.count > 0) {
          activeDays++;
          totalActions += d.count;
        }
      })
    );
    return { activeDays, totalActions };
  }, [gridData]);

  // Color intensity mapping
  const getCellColor = (count: number, isFuture: boolean) => {
    if (isFuture) return 'bg-white/[0.02] border-white/[0.02] cursor-not-allowed opacity-20';
    if (count === 0) return 'bg-zinc-900/60 hover:bg-zinc-800/80 border-white/[0.06]';
    if (count === 1)
      return 'bg-emerald-950/80 hover:bg-emerald-900 border-emerald-500/40 text-emerald-300 shadow-[0_0_8px_rgba(16,185,129,0.25)]';
    if (count === 2)
      return 'bg-emerald-700/80 hover:bg-emerald-600 border-emerald-400/60 text-white shadow-[0_0_12px_rgba(16,185,129,0.4)]';
    return 'bg-emerald-400 hover:bg-emerald-300 border-emerald-300 text-black shadow-[0_0_16px_rgba(52,211,153,0.7)]';
  };

  const dayLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <div
      className={`p-6 rounded-3xl bg-[#0D101A]/85 border border-white/[0.08] shadow-lg backdrop-blur-xl space-y-4 relative ${className}`}
    >
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.06] pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-300 shadow-sm">
            <Flame size={14} className="text-emerald-400" />
          </div>
          <div>
            <h3 className="text-sm font-heading font-bold text-white flex items-center gap-2">
              <span>Consistency Matrix</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-medium">
                16 Weeks
              </span>
            </h3>
            <p className="text-[11px] font-sans text-zinc-400">
              Interactive habit &amp; study block distribution
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono">
          <div className="flex items-center gap-1.5 text-emerald-300 bg-emerald-950/20 px-2.5 py-1 rounded-xl border border-emerald-500/30 font-semibold">
            <Sparkles size={12} className="text-emerald-400" />
            <span>{stats.activeDays} Active Days</span>
          </div>
        </div>
      </div>

      {/* Heatmap Matrix Grid */}
      <div className="relative overflow-x-auto pb-1">
        <div className="flex gap-1.5 min-w-max">
          {/* Day of week labels */}
          <div className="flex flex-col gap-1.5 pr-1 text-[9px] font-mono text-zinc-500 select-none">
            {dayLabels.map((lbl, idx) => (
              <div key={idx} className="w-3 h-3 flex items-center justify-center">
                {idx % 2 === 1 ? lbl : ''}
              </div>
            ))}
          </div>

          {/* Week Columns */}
          {gridData.map((week, wIdx) => (
            <div key={wIdx} className="flex flex-col gap-1.5">
              {week.map((day) => {
                const isSelected = selectedDate === day.dateKey;
                return (
                  <button
                    key={day.dateKey}
                    type="button"
                    disabled={day.isFuture}
                    onClick={() => onDayClick?.(day.dateKey)}
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setHoveredDay({
                        dateKey: day.dateKey,
                        count: day.count,
                        formatted: day.dateObj.toLocaleDateString('en-US', {
                          weekday: 'short',
                          month: 'short',
                          day: 'numeric',
                        }),
                        x: rect.left + rect.width / 2,
                        y: rect.top - 8,
                      });
                    }}
                    onMouseLeave={() => setHoveredDay(null)}
                    className={`w-3.5 h-3.5 rounded-md border transition-all duration-150 focus:outline-none ${getCellColor(
                      day.count,
                      day.isFuture
                    )} ${
                      day.isToday
                        ? 'ring-2 ring-white/80'
                        : isSelected
                        ? 'ring-2 ring-emerald-400'
                        : ''
                    }`}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between text-[11px] font-sans text-zinc-400 pt-1 border-t border-white/[0.06]">
        <span>Click any day to jump to its ledger</span>
        <div className="flex items-center gap-1.5 text-[10px] font-mono">
          <span>Less</span>
          <div className="w-2.5 h-2.5 rounded-sm bg-zinc-900/60 border border-white/[0.06]" />
          <div className="w-2.5 h-2.5 rounded-sm bg-emerald-950/80 border border-emerald-500/40" />
          <div className="w-2.5 h-2.5 rounded-sm bg-emerald-700/80 border border-emerald-400/60" />
          <div className="w-2.5 h-2.5 rounded-sm bg-emerald-400 border border-emerald-300" />
          <span>More</span>
        </div>
      </div>

      {/* Floating Hover Tooltip */}
      {hoveredDay && (
        <div
          style={{
            position: 'fixed',
            left: `${hoveredDay.x}px`,
            top: `${hoveredDay.y}px`,
            transform: 'translate(-50%, -100%)',
          }}
          className="z-50 pointer-events-none px-3 py-1.5 rounded-xl bg-zinc-900/95 border border-emerald-500/40 text-xs text-white shadow-xl backdrop-blur-md text-center animate-fadeIn"
        >
          <p className="font-bold text-emerald-300">{hoveredDay.formatted}</p>
          <p className="text-[10px] text-zinc-300 font-mono">
            {hoveredDay.count === 0
              ? 'No activity recorded'
              : `${hoveredDay.count} habit${hoveredDay.count > 1 ? 's' : ''} completed`}
          </p>
        </div>
      )}
    </div>
  );
};
