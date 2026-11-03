import React, { useState } from 'react';
import { Flame, ChevronDown } from 'lucide-react';
import { useData } from '../../context/DataContext';

export const StreakHeatmapCard: React.FC = () => {
  const { heatmapData, currentStreak } = useData();
  const [hoveredCell, setHoveredCell] = useState<{ date: string; habits: number; study: number } | null>(null);

  // Intensity color map
  const getCellBg = (intensity: number) => {
    switch (intensity) {
      case 4:
        return 'bg-[#ff723b] shadow-[0_0_8px_rgba(255,114,59,0.5)]';
      case 3:
        return 'bg-[#d97706]';
      case 2:
        return 'bg-[#92400e]';
      case 1:
        return 'bg-[#451a03]';
      default:
        return 'bg-white/[0.04]';
    }
  };

  // Group into columns of 7 (weeks)
  const weeks: typeof heatmapData[] = [];
  for (let i = 0; i < heatmapData.length; i += 7) {
    weeks.push(heatmapData.slice(i, i + 7));
  }

  return (
    <div className="bg-[#0f1118]/80 backdrop-blur-md rounded-2xl border border-white/[0.07] p-5 flex flex-col justify-between hover:border-white/[0.12] transition-all duration-200 relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Flame className="w-4 h-4 text-orange-400" />
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
            Streak Heatmap
          </h3>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-zinc-400 hover:text-zinc-200 cursor-pointer">
          <span>Last 8 Weeks</span>
          <ChevronDown className="w-3 h-3 text-zinc-500" />
        </div>
      </div>

      {/* Content: Matrix on Left, Stat on Right */}
      <div className="flex items-center justify-between gap-4">
        {/* Heatmap Grid */}
        <div className="relative flex gap-1.5 overflow-x-auto py-1">
          {weeks.map((week, wIdx) => (
            <div key={wIdx} className="flex flex-col gap-1.5">
              {week.map((cell, cIdx) => (
                <div
                  key={cIdx}
                  onMouseEnter={() =>
                    setHoveredCell({
                      date: cell.date,
                      habits: cell.habitsCompleted,
                      study: cell.studyMinutes,
                    })
                  }
                  onMouseLeave={() => setHoveredCell(null)}
                  className={`w-3.5 h-3.5 rounded-[4px] cursor-pointer transition-all duration-150 hover:scale-125 ${getCellBg(
                    cell.intensity
                  )}`}
                />
              ))}
            </div>
          ))}

          {/* Hover Tooltip */}
          {hoveredCell && (
            <div className="absolute -bottom-7 left-0 bg-[#161924] border border-white/[0.1] text-zinc-200 text-[10px] px-2 py-0.5 rounded shadow-lg pointer-events-none whitespace-nowrap z-20">
              {hoveredCell.date}: {hoveredCell.habits} habits • {hoveredCell.study}m study
            </div>
          )}
        </div>

        {/* Streak Stats (Right side) */}
        <div className="text-right pl-3 border-l border-white/[0.06] flex-shrink-0">
          <div className="text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
            {currentStreak}
          </div>
          <div className="text-xs text-orange-400 font-medium flex items-center justify-end gap-1 mt-0.5">
            <span>Day Streak</span>
            <span>🔥</span>
          </div>
          <div className="text-[11px] text-zinc-400 flex items-center justify-end gap-1 mt-1 font-sans">
            <span className="text-emerald-400 font-semibold">▲ +2</span>
            <span>This Week</span>
          </div>
        </div>
      </div>
    </div>
  );
};
