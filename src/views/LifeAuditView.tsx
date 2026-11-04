import React from 'react';
import { useData } from '../context/DataContext';
import { ArrowLeft, Compass } from 'lucide-react';

export const LifeAuditView: React.FC = () => {
  const { lifeDimensions, updateDimension, alignmentPercent, setActiveTab } = useData();

  const keys: (keyof typeof lifeDimensions)[] = ['career', 'health', 'relationships', 'finance', 'mind', 'environment'];

  // Radar geometry
  const size = 260;
  const center = size / 2;
  const radius = center - 35;
  const total = keys.length;

  const getCoordinates = (value: number, index: number) => {
    const angle = (Math.PI * 2 / total) * index - Math.PI / 2;
    const r = (value / 10) * radius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y };
  };

  const gridPolygons = [0.33, 0.66, 1.0].map((level) => {
    return keys
      .map((_, i) => {
        const pt = getCoordinates(level * 10, i);
        return `${pt.x},${pt.y}`;
      })
      .join(' ');
  });

  const dataPolygon = keys
    .map((k, i) => {
      const pt = getCoordinates(lifeDimensions[k], i);
      return `${pt.x},${pt.y}`;
    })
    .join(' ');

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-8 space-y-8 select-none font-sans">
      {/* Header */}
      <div className="border-b border-white/[0.06] pb-4">
        <button
          onClick={() => setActiveTab('wallpaper')}
          className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors mb-2 font-sans"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Return to Wallpaper HUD
        </button>
        <div className="flex items-center gap-2.5">
          <Compass className="w-5 h-5 text-violet-300" />
          <h2 className="font-sans text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            Life Dimensions & Radar Audit
          </h2>
        </div>
        <p className="text-xs text-zinc-400 font-sans mt-1">
          Holistic self-alignment across the 6 core pillars of your personal development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Radar Visualizer (Frosted Glass Card matching Wallpaper HUD) */}
        <div className="p-6 rounded-[2rem] bg-gradient-to-b from-[#181a33]/60 to-[#121326]/40 backdrop-blur-3xl border border-white/[0.08] border-t-white/[0.18] shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] flex flex-col items-center justify-center space-y-4">
          <div className="w-full flex items-center justify-between pb-2 border-b border-white/[0.06] text-xs font-sans">
            <span className="uppercase tracking-[0.16em] text-zinc-200 font-semibold">Balance Radar</span>
            <span className="font-mono text-violet-300">{alignmentPercent}% aligned</span>
          </div>

          <svg width={size} height={size} className="overflow-visible my-2">
            {/* Background Grid webs */}
            {gridPolygons.map((pts, idx) => (
              <polygon
                key={idx}
                points={pts}
                fill="none"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="1"
              />
            ))}

            {/* Dimension Axis lines */}
            {keys.map((_, i) => {
              const pt = getCoordinates(10, i);
              return (
                <line
                  key={i}
                  x1={center}
                  y1={center}
                  x2={pt.x}
                  y2={pt.y}
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeWidth="1"
                />
              );
            })}

            {/* Filled data polygon */}
            <polygon
              points={dataPolygon}
              fill="rgba(147, 51, 234, 0.25)"
              stroke="#a855f7"
              strokeWidth="2"
            />

            {/* Data points */}
            {keys.map((k, i) => {
              const pt = getCoordinates(lifeDimensions[k], i);
              return (
                <circle
                  key={k}
                  cx={pt.x}
                  cy={pt.y}
                  r="3.5"
                  fill="#c4b5fd"
                  stroke="#181a33"
                  strokeWidth="1.5"
                />
              );
            })}
          </svg>
        </div>

        {/* Sliders for the 6 Dimensions */}
        <div className="p-6 rounded-[2rem] bg-gradient-to-b from-[#181a33]/60 to-[#121326]/40 backdrop-blur-3xl border border-white/[0.08] border-t-white/[0.18] shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] space-y-3 font-sans text-xs">
          <h3 className="uppercase tracking-[0.16em] text-zinc-200 font-semibold pb-2 border-b border-white/[0.06]">
            Calibrate Pillars (1–10)
          </h3>

          {keys.map((k) => (
            <div key={k} className="p-2.5 rounded-xl border bg-white/[0.025] border-white/[0.06] flex items-center justify-between gap-3">
              <span className="capitalize font-medium text-zinc-200 w-24">{k}</span>
              <input
                type="range"
                min="1"
                max="10"
                value={lifeDimensions[k]}
                onChange={(e) => updateDimension(k, parseInt(e.target.value, 10))}
                className="flex-1 accent-purple-500 cursor-pointer"
              />
              <span className="font-mono text-zinc-300 w-6 text-right font-semibold">
                {lifeDimensions[k]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
