import React from 'react';
import { BarChart3 } from 'lucide-react';
import { useData } from '../../context/DataContext';

export const LifeRadarCard: React.FC = () => {
  const { lifeDimensions, alignmentPercent } = useData();

  // Radar chart calculation
  const keys: (keyof typeof lifeDimensions)[] = [
    'career',
    'health',
    'relationships',
    'finance',
    'mind',
    'environment',
  ];

  const labels = [
    { key: 'career', label: 'Career', value: lifeDimensions.career },
    { key: 'health', label: 'Health', value: lifeDimensions.health },
    { key: 'relationships', label: 'Relationships', value: lifeDimensions.relationships },
    { key: 'finance', label: 'Finance', value: lifeDimensions.finance },
    { key: 'mind', label: 'Mind', value: lifeDimensions.mind },
    { key: 'environment', label: 'Environment', value: lifeDimensions.environment },
  ];

  const size = 160;
  const center = size / 2;
  const radius = 55;
  const totalAngles = keys.length;

  const getCoordinates = (value: number, index: number, maxVal = 10) => {
    const angle = (Math.PI * 2 / totalAngles) * index - Math.PI / 2;
    const r = (value / maxVal) * radius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y };
  };

  // Build grid rings (e.g. 3 concentric hexagons)
  const gridPolygons = [0.33, 0.66, 1.0].map((level) => {
    return keys
      .map((_, i) => {
        const pt = getCoordinates(level * 10, i);
        return `${pt.x},${pt.y}`;
      })
      .join(' ');
  });

  // Build data polygon
  const dataPolygon = keys
    .map((k, i) => {
      const pt = getCoordinates(lifeDimensions[k], i);
      return `${pt.x},${pt.y}`;
    })
    .join(' ');

  return (
    <div className="bg-[#0f1118]/80 backdrop-blur-md rounded-2xl border border-white/[0.07] p-5 flex flex-col justify-between hover:border-white/[0.12] transition-all duration-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-orange-400" />
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
            Your Life at a Glance
          </h3>
        </div>
      </div>

      {/* Content: Radar Chart on Left, Quote/Card on Right */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center my-auto">
        {/* Radar SVG (7 cols) */}
        <div className="sm:col-span-7 flex items-center justify-center relative">
          <svg width={size} height={size} className="overflow-visible">
            {/* Concentric grid rings */}
            {gridPolygons.map((pts, idx) => (
              <polygon
                key={idx}
                points={pts}
                fill="none"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="1"
              />
            ))}

            {/* Axes spokes */}
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

            {/* Data Polygon */}
            <polygon
              points={dataPolygon}
              fill="rgba(245, 158, 11, 0.25)"
              stroke="#f59e0b"
              strokeWidth="1.75"
            />

            {/* Data Points */}
            {keys.map((k, i) => {
              const pt = getCoordinates(lifeDimensions[k], i);
              return (
                <circle
                  key={i}
                  cx={pt.x}
                  cy={pt.y}
                  r="2.5"
                  fill="#ff6b35"
                  className="transition-all duration-300"
                />
              );
            })}

            {/* Axis Labels */}
            {labels.map((item, i) => {
              const angle = (Math.PI * 2 / totalAngles) * i - Math.PI / 2;
              const labelRadius = radius + 18;
              const lx = center + labelRadius * Math.cos(angle);
              const ly = center + labelRadius * Math.sin(angle);
              return (
                <text
                  key={i}
                  x={lx}
                  y={ly}
                  textAnchor="middle"
                  dominantBaseline="central"
                  className="text-[9px] fill-zinc-400 font-sans tracking-tight"
                >
                  {item.label} {item.value.toFixed(1)}
                </text>
              );
            })}
          </svg>
        </div>

        {/* Right Quote Card (5 cols) */}
        <div className="sm:col-span-5 relative rounded-xl overflow-hidden p-3.5 bg-gradient-to-br from-[#1a1c27] to-[#12131a] border border-white/[0.08] flex flex-col justify-between min-h-[130px]">
          {/* Subtle cosmic silhouette */}
          <div className="absolute inset-0 opacity-25 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-500/30 via-transparent to-transparent" />
          
          <div className="relative z-10">
            <p className="text-xs font-serif text-zinc-100 leading-snug">
              You're <span className="text-amber-400 font-bold">{alignmentPercent}%</span> aligned with your ideal self.
            </p>
            <p className="text-[11px] text-zinc-400 font-serif italic mt-1">
              Keep going.
            </p>
          </div>

          <div className="relative z-10 pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-zinc-400">
            <span>Discipline Quotient</span>
            <span className="text-orange-400 font-mono font-semibold">{alignmentPercent} / 100</span>
          </div>
        </div>
      </div>
    </div>
  );
};
