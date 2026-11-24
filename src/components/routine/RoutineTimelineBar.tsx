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

  const formatRemaining = (mins: number) => {
    if (mins <= 0) return 'Ending soon';
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    if (h === 0) return `${m}m left`;
    return `${h}h ${m}m left`;
  };

  return (
    <div className="w-full flex flex-col gap-3 select-none">
      {/* 1. Telemetry Top Line (No cramped overlap) */}
      <div className="flex items-center justify-between text-xs font-sans min-h-[22px]">
        {/* Left: Active block status or hovered inspect */}
        <div className="flex items-center gap-2">
          {hoveredBlock ? (
            <div className="flex items-center gap-2 animate-fadeIn">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: hoveredBlock.colorTag || '#8b5cf6' }}
              />
              <span className={`font-semibold tracking-tight ${isLight ? 'text-zinc-900' : 'text-zinc-100'}`}>
                {hoveredBlock.title}
              </span>
              <span className={`text-[11px] font-mono tabular-nums ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                ({hoveredBlock.timeRange})
              </span>
            </div>
          ) : activeBlock ? (
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
              </span>
              <span className={`font-semibold tracking-tight ${isLight ? 'text-zinc-900' : 'text-zinc-100'}`}>
                {activeBlock.title}
              </span>
              {activeMinutesLeft > 0 && (
                <span className={`text-[11px] font-mono tabular-nums px-2 py-0.5 rounded-full border ${
                  isLight
                    ? 'bg-amber-50 text-amber-800 border-amber-200'
                    : 'bg-amber-400/10 text-amber-300 border-amber-400/25'
                }`}>
                  {formatRemaining(activeMinutesLeft)}
                </span>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2 text-zinc-500">
              <span className="w-2 h-2 rounded-full bg-zinc-600" />
              <span className="text-xs">Free Rhythm Interval</span>
            </div>
          )}
        </div>

        {/* Right: Live Current Clock Needle Tag */}
        <div className="flex items-center gap-1.5 font-mono text-[11px] tabular-nums font-semibold">
          <span className={isLight ? 'text-zinc-500' : 'text-zinc-400'}>NOW</span>
          <span className={`px-2 py-0.5 rounded-md border ${
            isLight
              ? 'bg-white text-zinc-900 border-zinc-200 shadow-xs'
              : 'bg-white/[0.08] text-white border-white/10'
          }`}>
            {currentClockTime}
          </span>
        </div>
      </div>

      {/* 2. Sleek Diurnal Horizon Track (Clean, pure aesthetic, zero chopped text) */}
      <div className="relative w-full py-1">
        <div
          className={`relative h-4 sm:h-4.5 rounded-full overflow-hidden transition-all border ${
            isLight
              ? 'bg-zinc-200/80 border-zinc-300/80 shadow-inner'
              : 'bg-[#060812] border-white/[0.08] shadow-[inset_0_2px_6px_rgba(0,0,0,0.8)]'
          }`}
        >
          {/* Circadian daylight wash underneath (Dawn to Night gradient) */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/40 via-amber-900/25 via-sky-950/30 via-amber-950/30 to-indigo-950/50 pointer-events-none" />

          {/* Routine Blocks mapped as clean luminous spans */}
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
            const blockColor = r.colorTag || '#8b5cf6';

            return (
              <div
                key={r.id}
                onClick={() => onSelectBlock && onSelectBlock(r)}
                onMouseEnter={() => setHoveredBlock(r)}
                onMouseLeave={() => setHoveredBlock(null)}
                className={`absolute top-0 bottom-0 transition-all cursor-pointer ${
                  isActive
                    ? 'z-10 brightness-125 shadow-sm'
                    : isHovered
                    ? 'z-10 brightness-110'
                    : 'opacity-80 hover:opacity-100'
                }`}
                style={{
                  left: `${leftPct}%`,
                  width: `${Math.max(1.5, widthPct)}%`,
                  backgroundColor: `${blockColor}38`,
                  borderLeft: `2px solid ${blockColor}`,
                  borderRight: `1px solid ${blockColor}66`,
                }}
                title={`${r.title} (${r.timeRange})`}
              />
            );
          })}

          {/* Delicate Starlight Needle for "NOW" */}
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

      {/* 3. Quiet Circadian Markers */}
      <div
        className={`flex justify-between items-center text-[10px] font-mono tabular-nums px-1 ${
          isLight ? 'text-zinc-500' : 'text-zinc-500'
        }`}
      >
        <span>00:00 Night</span>
        <span>06:00 Dawn</span>
        <span>12:00 Solar Noon</span>
        <span>18:00 Dusk</span>
        <span>24:00 Midnight</span>
      </div>
    </div>
  );
};
