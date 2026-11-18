import React, { useState, useEffect } from 'react';
import { RoutineBlock } from '../../types';
import { parseHourFromStr } from '../../context/DataContext';

interface RoutineTimelineBarProps {
  routines: RoutineBlock[];
  activeBlock: RoutineBlock | null;
  activeMinutesLeft: number;
  onSelectBlock?: (block: RoutineBlock) => void;
  isLight?: boolean;
}

export const RoutineTimelineBar: React.FC<RoutineTimelineBarProps> = ({
  routines,
  activeBlock,
  activeMinutesLeft,
  onSelectBlock,
  isLight = false,
}) => {
  const [currentProgressPct, setCurrentProgressPct] = useState(50);
  const [currentClockTime, setCurrentClockTime] = useState('12:00');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const h = now.getHours();
      const m = now.getMinutes();
      const pct = ((h + m / 60) / 24) * 100;
      setCurrentProgressPct(pct);
      setCurrentClockTime(
        `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  const formatMinutesRemaining = (mins: number) => {
    if (mins <= 0) return 'Ending soon';
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    if (h === 0) return `${m}m remaining`;
    return `${h}h ${m}m remaining`;
  };

  return (
    <div className="w-full flex flex-col gap-2.5 select-none pt-1">
      {/* 1. Quiet Status Header */}
      <div className="flex items-center justify-between text-[11px] font-sans">
        <div className="flex items-center gap-2">
          <span className={`w-1.5 h-1.5 rounded-full ${activeBlock ? 'bg-amber-400' : 'bg-zinc-500'}`} />
          <span className={`font-medium tracking-tight ${isLight ? 'text-zinc-900' : 'text-zinc-200'}`}>
            {activeBlock ? activeBlock.title : 'Free Rhythm'}
          </span>
          {activeBlock && activeMinutesLeft > 0 && (
            <span className={`text-[10px] font-mono tabular-nums ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
              · {formatMinutesRemaining(activeMinutesLeft)}
            </span>
          )}
        </div>

        <span className={`font-mono text-[10px] tabular-nums tracking-wider ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
          {currentClockTime}
        </span>
      </div>

      {/* 2. Minimal Horizon Bar (Clean, continuous daylight line with zero text truncation) */}
      <div className="relative w-full py-1">
        {/* Track */}
        <div className={`relative h-2 rounded-full overflow-hidden transition-all ${
          isLight ? 'bg-zinc-200' : 'bg-white/[0.08]'
        }`}>
          {/* Subtle daylight progression gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-700/30 via-amber-500/20 via-sky-500/20 via-indigo-500/20 to-zinc-700/30" />

          {/* Routine Blocks mapped as quiet tinted spans without clipped labels */}
          {routines.map((r) => {
            let start = r.startHour;
            let end = r.endHour;
            if (start === undefined || end === undefined) {
              const parts = r.timeRange.split(/[-–—to]/i);
              start = parseHourFromStr(parts[0], 0);
              end = parseHourFromStr(parts[1], 24);
            }
            const isActive = activeBlock?.id === r.id;
            const leftPct = (Math.min(24, Math.max(0, start)) / 24) * 100;
            const widthPct = ((Math.min(24, Math.max(0, end)) - Math.min(24, Math.max(0, start))) / 24) * 100;

            return (
              <div
                key={r.id}
                onClick={() => onSelectBlock && onSelectBlock(r)}
                className={`absolute top-0 bottom-0 transition-opacity cursor-pointer ${
                  isActive ? 'bg-amber-400/50 shadow-sm z-10' : 'bg-white/10 hover:bg-white/20'
                }`}
                style={{
                  left: `${leftPct}%`,
                  width: `${Math.max(2, widthPct)}%`,
                  borderLeft: '1px solid rgba(255,255,255,0.15)',
                }}
                title={`${r.title} (${r.timeRange})`}
              />
            );
          })}
        </div>

        {/* Minimal "NOW" marker (Tiny clean dot and hairline, NOT a gaudy neon diamond) */}
        <div
          className="absolute top-0 bottom-0 pointer-events-none transition-all duration-1000 ease-linear flex flex-col items-center justify-center -translate-x-1/2"
          style={{ left: `${Math.min(99, Math.max(1, currentProgressPct))}%` }}
        >
          <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] border border-black/40" />
        </div>
      </div>

      {/* 3. Quiet Hour Scale */}
      <div className={`flex justify-between text-[9px] font-mono tabular-nums px-0.5 ${
        isLight ? 'text-zinc-500' : 'text-zinc-400'
      }`}>
        <span>06:00</span>
        <span>12:00</span>
        <span>18:00</span>
        <span>24:00</span>
      </div>
    </div>
  );
};
