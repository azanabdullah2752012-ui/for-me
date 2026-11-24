import React, { useState, useEffect } from 'react';
import { RoutineBlock } from '../../types';
import { parseHourFromStr } from '../../context/DataContext';

interface RoutineTimelineBarProps {
  routines: RoutineBlock[];
  activeBlock: RoutineBlock | null;
  activeMinutesLeft: number;
  onSelectBlock?: (block: RoutineBlock) => void;
  isLight?: boolean;
  variant?: 'compact' | 'studio';
}

export const RoutineTimelineBar: React.FC<RoutineTimelineBarProps> = ({
  routines,
  activeBlock,
  activeMinutesLeft,
  onSelectBlock,
  isLight = false,
  variant = 'studio',
}) => {
  const [currentProgressPct, setCurrentProgressPct] = useState(50);
  const [currentClockTime, setCurrentClockTime] = useState('12:00');
  const [hoveredBlock, setHoveredBlock] = useState<RoutineBlock | null>(null);

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

  const isStudio = variant === 'studio';

  return (
    <div className="w-full flex flex-col gap-2 select-none">
      {/* 1. Header Info (Only shown in studio mode or if requested) */}
      <div className="flex items-center justify-between text-xs font-sans">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span
              className={`w-2 h-2 rounded-full ${
                activeBlock ? 'bg-amber-400 animate-pulse' : 'bg-zinc-500'
              }`}
            />
            <span className={`font-semibold tracking-tight ${isLight ? 'text-zinc-900' : 'text-zinc-100'}`}>
              {activeBlock ? activeBlock.title : 'Free Rhythm Buffer'}
            </span>
          </div>

          {activeBlock && activeMinutesLeft > 0 && (
            <span className={`text-[11px] font-mono tabular-nums px-2 py-0.5 rounded-full ${
              isLight ? 'bg-zinc-100 text-zinc-600 border border-zinc-200' : 'bg-white/[0.06] text-amber-300 border border-amber-400/20'
            }`}>
              {formatMinutesRemaining(activeMinutesLeft)}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {hoveredBlock && (
            <span className={`text-[11px] font-sans font-medium hidden sm:inline-block ${
              isLight ? 'text-violet-700' : 'text-violet-300'
            }`}>
              {hoveredBlock.title} ({hoveredBlock.timeRange})
            </span>
          )}
          <span className={`font-mono text-xs tabular-nums font-bold tracking-wider px-2 py-0.5 rounded-lg ${
            isLight ? 'bg-zinc-100 text-zinc-700' : 'bg-white/[0.08] text-zinc-200'
          }`}>
            NOW {currentClockTime}
          </span>
        </div>
      </div>

      {/* 2. Visual Horizon Bar Track */}
      <div className="relative w-full py-1">
        <div
          className={`relative rounded-xl overflow-hidden transition-all border ${
            isStudio ? 'h-6 sm:h-7' : 'h-3'
          } ${
            isLight
              ? 'bg-zinc-100 border-zinc-200/90 shadow-inner'
              : 'bg-black/40 border-white/[0.08] shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)]'
          }`}
        >
          {/* Subtle diurnal baseline wash */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/20 via-amber-900/10 via-sky-950/20 via-amber-900/10 to-indigo-950/20 pointer-events-none" />

          {/* Routine Blocks mapped as colored spans */}
          {routines.map((r) => {
            let start = r.startHour;
            let end = r.endHour;
            if (start === undefined || end === undefined) {
              const parts = r.timeRange.split(/[-–—to]/i);
              start = parseHourFromStr(parts[0], 0);
              end = parseHourFromStr(parts[1], 24);
            }

            const isActive = activeBlock?.id === r.id;
            const isHovered = hoveredBlock?.id === r.id;
            const leftPct = (Math.min(24, Math.max(0, start)) / 24) * 100;
            const widthPct = ((Math.min(24, Math.max(0, end)) - Math.min(24, Math.max(0, start))) / 24) * 100;

            const baseColor = r.colorTag || '#8b5cf6';

            return (
              <div
                key={r.id}
                onClick={() => onSelectBlock && onSelectBlock(r)}
                onMouseEnter={() => setHoveredBlock(r)}
                onMouseLeave={() => setHoveredBlock(null)}
                className={`absolute top-0 bottom-0 transition-all cursor-pointer flex items-center justify-center px-1.5 overflow-hidden ${
                  isActive
                    ? 'ring-2 ring-amber-400 z-10 shadow-lg'
                    : isHovered
                    ? 'ring-1 ring-white/60 z-10 brightness-110'
                    : 'opacity-85 hover:opacity-100'
                }`}
                style={{
                  left: `${leftPct}%`,
                  width: `${Math.max(1.8, widthPct)}%`,
                  backgroundColor: `${baseColor}22`,
                  borderLeft: `2px solid ${baseColor}`,
                  borderRight: `1px solid ${baseColor}44`,
                }}
                title={`${r.title} (${r.timeRange})`}
              >
                {/* Block label inside track if wide enough */}
                {isStudio && widthPct > 11 && (
                  <span
                    className="text-[10px] font-sans font-semibold tracking-tight truncate drop-shadow-xs pointer-events-none"
                    style={{ color: isLight ? '#18181b' : '#f4f4f5' }}
                  >
                    {r.title}
                  </span>
                )}
              </div>
            );
          })}

          {/* Hairline Time needle for "NOW" */}
          <div
            className="absolute top-0 bottom-0 pointer-events-none transition-all duration-1000 ease-linear flex flex-col items-center justify-between -translate-x-1/2 z-20"
            style={{ left: `${Math.min(99.5, Math.max(0.5, currentProgressPct))}%` }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,1)]" />
            <div className="w-[1.5px] h-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
            <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,1)]" />
          </div>
        </div>
      </div>

      {/* 3. 24-Hour Diurnal Scale */}
      <div
        className={`flex justify-between items-center text-[10px] font-mono tabular-nums px-1 ${
          isLight ? 'text-zinc-500' : 'text-zinc-400'
        }`}
      >
        <span>00:00 · Dawn</span>
        <span>06:00 · Morning</span>
        <span>12:00 · Noon</span>
        <span>18:00 · Dusk</span>
        <span>24:00 · Night</span>
      </div>
    </div>
  );
};
