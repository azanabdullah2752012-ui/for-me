import React from 'react';
import { Globe2 } from 'lucide-react';
import { useData } from '../../context/DataContext';

export const LifeAuditCard: React.FC = () => {
  const { auditProgress, setActiveTab } = useData();

  const radius = 32;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (auditProgress / 100) * circumference;

  return (
    <div className="bg-[#0f1118]/80 backdrop-blur-md rounded-2xl border border-white/[0.07] p-5 flex flex-col justify-between hover:border-white/[0.12] transition-all duration-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Globe2 className="w-4 h-4 text-orange-400" />
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
            Life Audit Progress
          </h3>
        </div>
      </div>

      {/* Circle Gauge */}
      <div className="flex items-center justify-center my-auto py-2">
        <div className="relative w-24 h-24 flex items-center justify-center">
          <svg className="w-24 h-24 -rotate-90 transform" viewBox="0 0 80 80">
            <circle
              cx="40"
              cy="40"
              r={radius}
              stroke="rgba(255, 255, 255, 0.07)"
              strokeWidth="6"
              fill="transparent"
            />
            <circle
              cx="40"
              cy="40"
              r={radius}
              stroke="#ff7438"
              strokeWidth="6"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="transparent"
              className="transition-all duration-700 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-serif font-bold text-white tracking-tight">
              {auditProgress}%
            </span>
          </div>
        </div>
      </div>

      {/* Subtitle & CTA */}
      <div className="text-center pt-2 border-t border-white/[0.04]">
        <div className="text-[11px] text-zinc-400 font-sans">
          Next Review: End of Month
        </div>
        <button
          onClick={() => setActiveTab('life_audit')}
          className="text-[11px] text-orange-400 hover:text-orange-300 font-medium mt-1 inline-block transition-colors"
        >
          Conduct Audit →
        </button>
      </div>
    </div>
  );
};
