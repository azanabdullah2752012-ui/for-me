import React, { useState, useEffect } from 'react';
import { RoutineBlock } from '../../types';
import { parseHourFromStr } from '../../context/DataContext';
import { Clock } from 'lucide-react';

interface RoutineTimelineBarProps {
  routines: RoutineBlock[];
  activeBlock: RoutineBlock | null;
  activeMinutesLeft: number;
  onSelectBlock?: (block: RoutineBlock) => void;
  isLight?: boolean;
  compact?: boolean;
}

export const RoutineTimelineBar: React.FC<RoutineTimelineBarProps> = ({
  routines,
  activeBlock,
  activeMinutesLeft,
  onSelectBlock,
  isLight = false,
  compact = false,
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
    if (h === 0) return `${m}m left`;
    return `${h}h ${m}m left`;
  };

  // Color tokens per iconType
  const getBlockTheme = (block: RoutineBlock) => {
    if (block.colorTag) return block.colorTag;
    switch (block.iconType) {
      case 'morning':
        return '#f59e0b'; // amber
      case 'afternoon':
        return '#8b5cf6'; // violet
      case 'evening':
        return '#3b82f6'; // twilight blue
      case 'night':
        return '#6366f1'; // indigo
      default:
        return '#10b981'; // emerald
    }
  };

  return (
    <div className={`w-full flex flex-col select-none transition-all ${compact ? 'gap-1.5' : 'gap-3'}`}>
      {/* 1. Header: Active Routine Status Telemetry */}
      {!compact && (
        <div className="flex items-center justify-between text-xs px-1">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className={`font-mono text-[11px] font-semibold tracking-wider uppercase ${
              isLight ? 'text-zinc-800' : 'text-zinc-200'
            }`}>
              {activeBlock ? activeBlock.title : 'Intermission / Free Flow'}
            </span>
            {activeBlock && activeMinutesLeft > 0 && (
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono tracking-tight ${
                isLight 
                  ? 'bg-amber-100 text-amber-800 border border-amber-300' 
                  : 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
              }`}>
                {formatMinutesRemaining(activeMinutesLeft)}
              </span>
            )}
          </div>

          <div className={`font-mono text-[11px] flex items-center gap-1.5 tabular-nums ${
            isLight ? 'text-zinc-500' : 'text-zinc-400'
          }`}>
            <Clock className="w-3 h-3 opacity-70" />
            <span>NOW: {currentClockTime}</span>
          </div>
        </div>
      )}

      {/* 2. Visual 24-Hour Track Container */}
      <div 
        className={`relative w-full rounded-xl overflow-hidden border transition-all ${
          compact ? 'h-5 border-white/[0.08]' : 'h-8 sm:h-9 shadow-inner border-white/[0.12]'
        } ${isLight ? 'bg-zinc-100 border-zinc-200' : 'bg-black/40'}`}
      >
        {/* Sky gradient background (Night -> Dawn -> Day -> Dusk -> Night) */}
        <div className={`absolute inset-0 pointer-events-none opacity-40 ${
          isLight
            ? 'bg-gradient-to-r from-zinc-300 via-amber-100/50 via-sky-100/60 via-indigo-100/50 to-zinc-300'
            : 'bg-gradient-to-r from-[#0b0f19] via-[#1a1c2e] via-[#111f38] via-[#1e1b38] to-[#0b0f19]'
        }`} />

        {/* 6-Hour Celestial Tick Markers */}
        <div className="absolute inset-0 flex justify-between px-1 pointer-events-none opacity-25">
          <div className="h-full border-r border-dashed border-current flex items-center pl-1 text-[9px] font-mono">00:00</div>
          <div className="h-full border-r border-dashed border-current flex items-center pl-1 text-[9px] font-mono">06:00</div>
          <div className="h-full border-r border-dashed border-current flex items-center pl-1 text-[9px] font-mono">12:00</div>
          <div className="h-full border-r border-dashed border-current flex items-center pl-1 text-[9px] font-mono">18:00</div>
          <div className="h-full flex items-center pr-1 text-[9px] font-mono">24:00</div>
        </div>

        {/* Routine Blocks Plotted Proportionally */}
        {routines.map((r) => {
          let start = r.startHour;
          let end = r.endHour;

          if (start === undefined || end === undefined) {
            const parts = r.timeRange.split(/[-–—to]/i);
            start = parseHourFromStr(parts[0], 0);
            end = parseHourFromStr(parts[1], 24);
          }

          const isActive = activeBlock?.id === r.id;
          const color = getBlockTheme(r);

          // Calculate left & width in %
          let leftPct = (Math.min(24, Math.max(0, start)) / 24) * 100;
          let widthPct = ((Math.min(24, Math.max(0, end)) - Math.min(24, Math.max(0, start))) / 24) * 100;

          if (widthPct <= 0) widthPct = 4; // minimum visual thickness

          return (
            <div
              key={r.id}
              onClick={() => onSelectBlock && onSelectBlock(r)}
              onMouseEnter={() => setHoveredBlock(r)}
              onMouseLeave={() => setHoveredBlock(null)}
              className={`absolute top-0 bottom-0 rounded-lg cursor-pointer transition-all flex items-center px-2 group ${
                isActive 
                  ? 'z-20 ring-1 ring-white/60 shadow-lg' 
                  : 'z-10 opacity-80 hover:opacity-100'
              }`}
              style={{
                left: `${leftPct}%`,
                width: `${widthPct}%`,
                backgroundColor: `${color}${isActive ? '55' : '33'}`,
                borderLeft: `2px solid ${color}`,
                borderRight: `1px solid ${color}44`,
              }}
              title={`${r.title} (${r.timeRange}): ${r.description}`}
            >
              <span className={`truncate text-[10px] font-sans font-medium tracking-tight ${
                isActive 
                  ? 'text-white font-semibold' 
                  : isLight ? 'text-zinc-800' : 'text-zinc-200'
              }`}>
                {r.title}
              </span>
            </div>
          );
        })}

        {/* Live "NOW" Time Cursor (Pulsing Diamond & Vertical Laser) */}
        <div
          className="absolute top-0 bottom-0 z-30 transition-all duration-1000 ease-linear pointer-events-none"
          style={{ left: `${Math.min(99.5, Math.max(0.5, currentProgressPct))}%` }}
        >
          {/* Vertical Laser Needle */}
          <div className="w-0.5 h-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,1)]" />

          {/* Diamond Head Marker */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rotate-45 bg-emerald-300 border border-emerald-100 shadow-[0_0_12px_rgba(52,211,153,1)]" />
        </div>
      </div>

      {/* 3. Hovered / Selected Block Detail Tooltip (when in non-compact mode) */}
      {!compact && hoveredBlock && (
        <div className={`p-2.5 rounded-xl border backdrop-blur-xl text-xs animate-fadeIn ${
          isLight ? 'bg-white/95 border-zinc-200 text-zinc-900 shadow-md' : 'bg-black/80 border-white/[0.12] text-zinc-200 shadow-xl'
        }`}>
          <div className="flex items-center justify-between font-mono text-[11px] pb-1 border-b border-white/[0.08]">
            <span className="font-bold text-white">{hoveredBlock.title}</span>
            <span className="text-violet-400 tabular-nums">{hoveredBlock.timeRange}</span>
          </div>
          <p className="mt-1 text-[11px] leading-relaxed text-zinc-400">{hoveredBlock.description}</p>
        </div>
      )}
    </div>
  );
};
