import React from 'react';
import { Clock, Moon, Droplets, Activity } from 'lucide-react';

interface MetricRing {
  label: string;
  current: number;
  target: number;
  unit: string;
  color: string;
  trackColor: string;
  glowColor: string;
  icon: React.ElementType;
}

interface BiometricsRingChartProps {
  studyHours: number;
  studyTarget?: number;
  sleepHours: number;
  sleepTarget?: number;
  waterGlasses: number;
  waterTarget?: number;
  onNavigate?: (view: any) => void;
  className?: string;
}

export const BiometricsRingChart: React.FC<BiometricsRingChartProps> = ({
  studyHours,
  studyTarget = 3,
  sleepHours,
  sleepTarget = 8.5,
  waterGlasses,
  waterTarget = 8,
  onNavigate,
  className = '',
}) => {
  const metrics: MetricRing[] = [
    {
      label: 'Focus Study',
      current: studyHours,
      target: studyTarget,
      unit: 'hrs',
      color: '#06B6D4', // cyan-500
      trackColor: 'rgba(6, 182, 212, 0.15)',
      glowColor: 'rgba(6, 182, 212, 0.45)',
      icon: Clock,
    },
    {
      label: 'Rest & Sleep',
      current: sleepHours,
      target: sleepTarget,
      unit: 'hrs',
      color: '#818CF8', // indigo-400
      trackColor: 'rgba(129, 140, 248, 0.15)',
      glowColor: 'rgba(129, 140, 248, 0.45)',
      icon: Moon,
    },
    {
      label: 'Hydration',
      current: waterGlasses,
      target: waterTarget,
      unit: 'cups',
      color: '#38BDF8', // sky-400
      trackColor: 'rgba(56, 189, 248, 0.15)',
      glowColor: 'rgba(56, 189, 248, 0.45)',
      icon: Droplets,
    },
  ];

  // SVG Concentric Rings Configuration
  const center = 110;
  const strokeWidth = 10;
  const gap = 16;
  const baseRadius = 88;

  return (
    <div
      className={`p-6 rounded-3xl bg-[#0D101A]/85 border border-white/[0.08] shadow-lg backdrop-blur-xl space-y-4 ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-300">
            <Activity size={14} />
          </div>
          <div>
            <h3 className="text-sm font-heading font-bold text-white">
              Biometric Activity Rings
            </h3>
            <p className="text-[11px] font-sans text-zinc-400">
              Focus, sleep &amp; hydration harmony
            </p>
          </div>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-zinc-300 border border-white/[0.08] font-medium">
          Today
        </span>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-around gap-6 py-1">
        {/* Concentric SVG Rings */}
        <div className="relative w-[220px] h-[220px] flex items-center justify-center shrink-0">
          <svg width={220} height={220} className="transform -rotate-90">
            {metrics.map((m, idx) => {
              const radius = baseRadius - idx * gap;
              const circumference = 2 * Math.PI * radius;
              const pct = Math.min(100, Math.max(0, (m.current / m.target) * 100));
              const offset = circumference - (pct / 100) * circumference;

              return (
                <g key={m.label}>
                  {/* Track ring */}
                  <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    stroke={m.trackColor}
                    strokeWidth={strokeWidth}
                    fill="none"
                  />
                  {/* Progress ring */}
                  <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    stroke={m.color}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    fill="none"
                    style={{
                      filter: `drop-shadow(0 0 6px ${m.glowColor})`,
                      transition: 'stroke-dashoffset 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  />
                </g>
              );
            })}
          </svg>

          {/* Center overall completion readout */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center select-none pointer-events-none">
            <span className="text-3xl font-heading font-black text-white leading-none">
              {Math.round(
                metrics.reduce((acc, m) => acc + Math.min(100, (m.current / m.target) * 100), 0) / 3
              )}
              %
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 mt-0.5 font-bold">
              Daily Target
            </span>
          </div>
        </div>

        {/* Legend / Metrics Details */}
        <div className="flex-1 space-y-3 w-full">
          {metrics.map((m) => {
            const Icon = m.icon;
            const pct = Math.round(Math.min(100, (m.current / m.target) * 100));

            return (
              <div
                key={m.label}
                className="p-2.5 rounded-2xl bg-zinc-900/60 border border-white/10 flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-2.5 truncate">
                  <div
                    className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: `${m.color}25`,
                      border: `1px solid ${m.color}50`,
                      color: m.color,
                    }}
                  >
                    <Icon size={12} />
                  </div>
                  <div className="truncate">
                    <p className="text-xs font-sans font-bold text-white truncate">
                      {m.label}
                    </p>
                    <p className="text-[10px] font-mono text-zinc-400">
                      {m.current} / {m.target} {m.unit}
                    </p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span
                    className="text-xs font-mono font-extrabold"
                    style={{ color: m.color }}
                  >
                    {pct}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
