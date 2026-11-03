import React from 'react';
import { Activity, Droplet, Moon, Footprints, Plus, Minus } from 'lucide-react';
import { useData } from '../../context/DataContext';

export const BiometricsCard: React.FC = () => {
  const { hydration, setHydration, sleepHours, sleepMinutes, setSleep, movementPercent, setMovementPercent, setActiveTab } = useData();

  // Circular gauge calculator
  const radius = 28;
  const circumference = 2 * Math.PI * radius;

  const renderGauge = (
    percent: number, 
    color: string, 
    icon: React.ReactNode, 
    valueLabel: string, 
    nameLabel: string,
    onInc?: () => void,
    onDec?: () => void
  ) => {
    const strokeDashoffset = circumference - (percent / 100) * circumference;

    return (
      <div className="flex flex-col items-center group">
        <div className="relative w-20 h-20 flex items-center justify-center">
          <svg className="w-20 h-20 -rotate-90 transform" viewBox="0 0 70 70">
            {/* Background ring */}
            <circle
              cx="35"
              cy="35"
              r={radius}
              stroke="rgba(255, 255, 255, 0.07)"
              strokeWidth="5"
              fill="transparent"
            />
            {/* Progress ring */}
            <circle
              cx="35"
              cy="35"
              r={radius}
              stroke={color}
              strokeWidth="5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="transparent"
              className="transition-all duration-700 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <div className="mb-0.5 text-zinc-400">{icon}</div>
            <span className="text-[11px] font-semibold tracking-tight text-white font-sans">
              {valueLabel}
            </span>
          </div>
        </div>

        <span className="text-[11px] text-zinc-400 font-medium mt-2 tracking-wide">
          {nameLabel}
        </span>

        {/* Quick adjustments */}
        {(onInc || onDec) && (
          <div className="flex items-center gap-1.5 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
            {onDec && (
              <button
                onClick={onDec}
                aria-label={`Decrease ${nameLabel}`}
                className="w-5 h-5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] flex items-center justify-center text-zinc-400 hover:text-white"
              >
                <Minus className="w-2.5 h-2.5" />
              </button>
            )}
            {onInc && (
              <button
                onClick={onInc}
                aria-label={`Increase ${nameLabel}`}
                className="w-5 h-5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] flex items-center justify-center text-zinc-400 hover:text-white"
              >
                <Plus className="w-2.5 h-2.5" />
              </button>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-[#0f1118]/80 backdrop-blur-md rounded-2xl border border-white/[0.07] p-5 flex flex-col justify-between hover:border-white/[0.12] transition-all duration-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-orange-400" />
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
            Your Biometrics
          </h3>
        </div>
        <button
          onClick={() => setActiveTab('health')}
          className="text-[11px] text-zinc-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
        >
          View Details →
        </button>
      </div>

      {/* 3 Rings */}
      <div className="grid grid-cols-3 gap-2 py-1">
        {renderGauge(
          hydration,
          '#38bdf8',
          <Droplet className="w-3.5 h-3.5 text-sky-400" />,
          `${hydration}%`,
          'Hydration',
          () => setHydration((prev) => Math.min(100, prev + 5)),
          () => setHydration((prev) => Math.max(0, prev - 5))
        )}

        {renderGauge(
          Math.min(100, Math.round(((sleepHours * 60 + sleepMinutes) / 480) * 100)),
          '#a855f7',
          <Moon className="w-3.5 h-3.5 text-purple-400" />,
          `${sleepHours}h ${sleepMinutes}m`,
          'Sleep',
          () => setSleep(sleepHours + (sleepMinutes >= 45 ? 1 : 0), (sleepMinutes + 15) % 60),
          () => setSleep(Math.max(0, sleepHours - (sleepMinutes < 15 ? 1 : 0)), (sleepMinutes - 15 + 60) % 60)
        )}

        {renderGauge(
          movementPercent,
          '#34d399',
          <Footprints className="w-3.5 h-3.5 text-emerald-400" />,
          `${movementPercent}%`,
          'Movement',
          () => setMovementPercent((prev) => Math.min(100, prev + 5)),
          () => setMovementPercent((prev) => Math.max(0, prev - 5))
        )}
      </div>
    </div>
  );
};
