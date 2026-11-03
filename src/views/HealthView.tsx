import React from 'react';
import { useData } from '../context/DataContext';
import { ArrowLeft, Droplet, Moon, Footprints, Plus, Minus } from 'lucide-react';

export const HealthView: React.FC = () => {
  const { 
    hydration, 
    setHydration, 
    sleepHours, 
    sleepMinutes, 
    setSleep, 
    movementPercent, 
    setMovementPercent,
    setActiveTab 
  } = useData();

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
          Vitality & Health
        </h2>
        <p className="text-xs text-zinc-400 font-sans mt-1">
          Daily physical foundation: hydration, restorative sleep, and intentional movement.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Hydration */}
        <div className="p-6 rounded-3xl bg-[#0c1022]/80 border border-[#c4b5fd]/[0.1] space-y-4 shadow-sanctuary">
          <div className="flex items-center justify-between">
            <Droplet className="w-5 h-5 text-sky-400" />
            <span className="text-xs font-mono text-zinc-400">Target: 2.5L</span>
          </div>
          <div>
            <div className="text-3xl font-serif text-white">{hydration}%</div>
            <div className="text-xs text-zinc-400 font-sans mt-1">Hydration Level</div>
          </div>
          <div className="flex items-center gap-2 pt-2">
            <button
              onClick={() => setHydration((prev) => Math.max(0, prev - 10))}
              className="p-2 bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 rounded-xl"
              title="Decrease"
            >
              <Minus className="w-4 h-4" />
            </button>
            <button
              onClick={() => setHydration((prev) => Math.min(100, prev + 10))}
              className="flex-1 py-2 bg-sky-600/30 border border-sky-400/30 hover:bg-sky-600/40 text-sky-200 text-xs font-semibold rounded-xl flex items-center justify-center gap-1"
            >
              <Plus className="w-3.5 h-3.5" /> Add 250ml
            </button>
          </div>
        </div>

        {/* Sleep */}
        <div className="p-6 rounded-3xl bg-[#0c1022]/80 border border-[#c4b5fd]/[0.1] space-y-4 shadow-sanctuary">
          <div className="flex items-center justify-between">
            <Moon className="w-5 h-5 text-violet-400" />
            <span className="text-xs font-mono text-zinc-400">Target: 8h</span>
          </div>
          <div>
            <div className="text-3xl font-serif text-white">{sleepHours}h {sleepMinutes}m</div>
            <div className="text-xs text-zinc-400 font-sans mt-1">Sleep Duration</div>
          </div>
          <div className="flex items-center gap-2 pt-2">
            <button
              onClick={() => setSleep(Math.max(0, sleepHours - 1), sleepMinutes)}
              className="p-2 bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 rounded-xl"
            >
              <Minus className="w-4 h-4" />
            </button>
            <button
              onClick={() => setSleep(sleepHours + 1, sleepMinutes)}
              className="flex-1 py-2 bg-violet-600/30 border border-violet-400/30 hover:bg-violet-600/40 text-violet-200 text-xs font-semibold rounded-xl flex items-center justify-center gap-1"
            >
              <Plus className="w-3.5 h-3.5" /> +1 Hour
            </button>
          </div>
        </div>

        {/* Movement */}
        <div className="p-6 rounded-3xl bg-[#0c1022]/80 border border-[#c4b5fd]/[0.1] space-y-4 shadow-sanctuary">
          <div className="flex items-center justify-between">
            <Footprints className="w-5 h-5 text-emerald-400" />
            <span className="text-xs font-mono text-zinc-400">Target: 100%</span>
          </div>
          <div>
            <div className="text-3xl font-serif text-white">{movementPercent}%</div>
            <div className="text-xs text-zinc-400 font-sans mt-1">Movement Goal</div>
          </div>
          <div className="flex items-center gap-2 pt-2">
            <button
              onClick={() => setMovementPercent((prev) => Math.max(0, prev - 10))}
              className="p-2 bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 rounded-xl"
            >
              <Minus className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMovementPercent((prev) => Math.min(100, prev + 10))}
              className="flex-1 py-2 bg-emerald-600/30 border border-emerald-400/30 hover:bg-emerald-600/40 text-emerald-200 text-xs font-semibold rounded-xl flex items-center justify-center gap-1"
            >
              <Plus className="w-3.5 h-3.5" /> +10% Active
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
