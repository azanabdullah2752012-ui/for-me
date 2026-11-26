import React, { useState, useEffect } from 'react';
import { RoutineBlock } from '../../types';
import { parseHourFromStr, formatTimeRangeTo12h, useData } from '../../context/DataContext';
import { getWallpaperPaletteConfig, PaletteThemeConfig } from '../../utils/paletteTheme';

interface RoutineTimelineBarProps {
  routines: RoutineBlock[];
  activeBlock: RoutineBlock | null;
  activeMinutesLeft: number;
  onSelectBlock?: (block: RoutineBlock) => void;
  isLight?: boolean;
  paletteTheme?: PaletteThemeConfig;
}

export const RoutineTimelineBar: React.FC<RoutineTimelineBarProps> = ({
  routines,
  activeBlock,
  activeMinutesLeft,
  onSelectBlock,
  isLight = false,
  paletteTheme,
}) => {
  const { wallpaperSettings, wallpaperTheme } = useData();
  const theme = paletteTheme || getWallpaperPaletteConfig(wallpaperSettings?.palette, wallpaperTheme);

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
      const ampm = h >= 12 ? 'PM' : 'AM';
      const h12 = h % 12 || 12;
      setCurrentClockTime(
        `${h12}:${m.toString().padStart(2, '0')} ${ampm}`
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
      {/* 1. Telemetry Top Line */}
      <div className="flex items-center justify-between text-xs font-sans min-h-[22px]">
        {/* Left: Active block status or hovered inspect */}
        <div className="flex items-center gap-2">
          {hoveredBlock ? (
            <div className="flex items-center gap-2 animate-fadeIn">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: hoveredBlock.colorTag || theme.accent }}
              />
              <span className={`font-semibold tracking-tight ${isLight ? 'text-zinc-900' : 'text-zinc-100'}`}>
                {hoveredBlock.title}
              </span>
              <span className={`text-[11px] font-mono tabular-nums ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                ({formatTimeRangeTo12h(hoveredBlock.startTime, hoveredBlock.endTime, hoveredBlock.timeRange)})
              </span>
            </div>
          ) : activeBlock ? (
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ backgroundColor: theme.accent }}
                />
                <span
                  className="relative inline-flex rounded-full h-2 w-2"
                  style={{ backgroundColor: theme.accent }}
                />
              </span>
              <span className={`font-semibold tracking-tight ${isLight ? 'text-zinc-900' : 'text-zinc-100'}`}>
                {activeBlock.title}
              </span>
              {activeMinutesLeft > 0 && (
                <span
                  className={`text-[11px] font-mono tabular-nums px-2 py-0.5 rounded-full border ${
                    isLight ? theme.badgeClsLight : theme.badgeClsDark
                  }`}
                >
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

      {/* 2. Sleek Diurnal Horizon Track */}
      <div className="relative w-full py-1">
        <div
          className={`relative h-4 sm:h-4.5 rounded-full overflow-hidden transition-all border ${
            isLight
              ? 'bg-zinc-200/80 border-zinc-300/80 shadow-inner'
              : 'bg-[#060812] border-white/[0.08] shadow-[inset_0_2px_6px_rgba(0,0,0,0.8)]'
          }`}
        >
          {/* Circadian daylight wash underneath (Dynamically mapped to wallpaper palette) */}
          <div className={`absolute inset-0 bg-gradient-to-r ${theme.horizonGradient} pointer-events-none`} />

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
            const blockColor = r.colorTag || theme.accent;

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
            <div
              className="w-1.5 h-1.5 rounded-full bg-white"
              style={{ boxShadow: `0 0 8px ${theme.needleGlowRgba}` }}
            />
            <div
              className="w-[1.5px] h-full bg-white"
              style={{ boxShadow: `0 0 6px ${theme.needleGlowRgba}` }}
            />
            <div
              className="w-1.5 h-1.5 rounded-full bg-white"
              style={{ boxShadow: `0 0 8px ${theme.needleGlowRgba}` }}
            />
          </div>
        </div>
      </div>

      {/* 3. Quiet Circadian Markers (12-hour format) */}
      <div
        className={`flex justify-between items-center text-[10px] font-mono tabular-nums px-1 ${
          isLight ? 'text-zinc-500' : 'text-zinc-500'
        }`}
      >
        <span>12:00 AM · Night</span>
        <span>6:00 AM · Dawn</span>
        <span>12:00 PM · Noon</span>
        <span>6:00 PM · Dusk</span>
        <span>11:59 PM · Midnight</span>
      </div>
    </div>
  );
};
