import React from 'react';

interface RadialProgressProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
  sublabel?: string;
  className?: string;
  showPercentText?: boolean;
}

export const RadialProgress: React.FC<RadialProgressProps> = ({
  percentage,
  size = 120,
  strokeWidth = 9,
  label,
  sublabel,
  className = '',
  showPercentText = true,
}) => {
  const clamped = Math.min(100, Math.max(0, percentage));
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (clamped / 100) * circumference;

  return (
    <div className={`relative inline-flex flex-col items-center justify-center ${className}`}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          className="text-dark-800"
        />
        {/* Fill */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="var(--accent-color, #e5a93c)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="none"
          className="transition-all duration-500 ease-out"
        />
      </svg>
      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center select-none pointer-events-none">
        {showPercentText && (
          <span className="text-2xl font-bold font-mono tracking-tight text-white leading-none">
            {clamped}%
          </span>
        )}
        {label && (
          <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 mt-1">
            {label}
          </span>
        )}
        {sublabel && (
          <span className="text-[9px] text-neutral-500 font-mono">
            {sublabel}
          </span>
        )}
      </div>
    </div>
  );
};

export const ProgressBar: React.FC<{
  value: number; // 0-100
  max?: number;
  className?: string;
  colorClass?: string;
  heightClass?: string;
}> = ({
  value,
  max = 100,
  className = '',
  colorClass = 'bg-accent',
  heightClass = 'h-2',
}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className={`w-full bg-dark-800/80 rounded-full overflow-hidden border border-surface-border-subtle ${heightClass} ${className}`}>
      <div
        className={`${heightClass} ${colorClass} transition-all duration-300 ease-out rounded-full`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};
