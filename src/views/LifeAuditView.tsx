import React from 'react';
import { useData } from '../context/DataContext';
import { ArrowLeft } from 'lucide-react';

export const LifeAuditView: React.FC = () => {
  const { lifeDimensions, updateDimension, alignmentPercent, setActiveTab } = useData();

  const keys: (keyof typeof lifeDimensions)[] = [
    'career',
    'health',
    'relationships',
    'finance',
    'mind',
    'environment',
  ];

  const size = 220;
  const center = size / 2;
  const radius = 80;
  const total = keys.length;

  const getCoordinates = (value: number, index: number, maxVal = 10) => {
    const angle = (Math.PI * 2 / total) * index - Math.PI / 2;
    const r = (value / maxVal) * radius;
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
    <div className="max-w-3xl mx-auto py-10 px-4 sm:px-6 space-y-12 select-none">
      {/* Header */}
      <div className="border-b border-white/[0.06] pb-6">
        <button
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors mb-2"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </button>
        <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-wide">
          Life Dimensions
        </h2>
        <p className="text-xs text-zinc-400 font-sans mt-1">
          Holistic self-alignment across the 6 pillars of your life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Radar Chart (6 cols) */}
        <div className="md:col-span-6 flex flex-col items-center justify-center p-6 rounded-3xl bg-[#0c1022]/80 border border-[#c4b5fd]/[0.1] shadow-sanctuary">
          <svg width={size} height={size} className="overflow-visible">
            {gridPolygons.map((pts, idx) => (
              <polygon
                key={idx}
                points={pts}
                fill="none"
                stroke="rgba(196, 181, 253, 0.1)"
                strokeWidth="1"
              />
            ))}

            {keys.map((_, i) => {
              const pt = getCoordinates(10, i);
              return (
                <line
                  key={i}
                  x1={center}
                  y1={center}
                  x2={pt.x}
                  y2={pt.y}
                  stroke="rgba(196, 181, 253, 0.1)"
                  strokeWidth="1"
                />
              );
            })}

            <polygon
              points={dataPolygon}
              fill="rgba(167, 139, 250, 0.2)"
              stroke="#a78bfa"
              strokeWidth="2"
            />

            {keys.map((k, i) => {
              const pt = getCoordinates(lifeDimensions[k], i);
              return (
                <circle
                  key={i}
                  cx={pt.x}
                  cy={pt.y}
                  r="3"
                  fill="#c4b5fd"
                />
              );
            })}

            {keys.map((k, i) => {
              const angle = (Math.PI * 2 / total) * i - Math.PI / 2;
              const labelRadius = radius + 20;
              const lx = center + labelRadius * Math.cos(angle);
              const ly = center + labelRadius * Math.sin(angle);
              return (
                <text
                  key={i}
                  x={lx}
                  y={ly}
                  textAnchor="middle"
                  dominantBaseline="central"
                  className="text-[10px] fill-zinc-300 font-sans capitalize"
                >
                  {k}
                </text>
              );
            })}
          </svg>

          <div className="mt-4 text-center">
            <span className="font-serif text-2xl text-violet-300">{alignmentPercent}%</span>
            <span className="text-xs text-zinc-400 block font-sans">Overall Alignment</span>
          </div>
        </div>

        {/* Sliders (6 cols) */}
        <div className="md:col-span-6 space-y-4">
          {keys.map((dim) => (
            <div key={dim} className="p-4 rounded-xl bg-[#0c1022]/60 border border-[#c4b5fd]/[0.08] space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="capitalize font-medium text-white">{dim}</span>
                <span className="font-mono text-violet-300">{lifeDimensions[dim].toFixed(1)} / 10</span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                step="0.5"
                value={lifeDimensions[dim]}
                onChange={(e) => updateDimension(dim, parseFloat(e.target.value))}
                className="w-full accent-violet-400 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
