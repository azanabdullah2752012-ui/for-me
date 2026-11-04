import React from 'react';
import { useData } from '../context/DataContext';
import { ArrowLeft, Droplet, Moon, Footprints, Plus, Minus, Heart } from 'lucide-react';

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
          <Heart className="w-5 h-5 text-violet-300" />
          <h2 className="font-sans text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            Vitality & Health Telemetry
          </h2>
        </div>
        <p className="text-xs text-zinc-400 font-sans mt-1">
          Daily physical foundation: hydration, restorative sleep, and intentional movement.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Hydration */}
        <div className="p-6 rounded-[2rem] bg-gradient-to-b from-[#181a33]/60 to-[#121326]/40 backdrop-blur-3xl border border-white/[0.08] border-t-white/[0.18] shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
            <Droplet className="w-4 h-4 text-blue-400" />
            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">Target: 8 Glasses</span>
          </div>
          <div>
            <div className="text-4xl font-mono text-white leading-none">{Math.round((hydration / 100) * 8)} / 8</div>
            <div className="text-xs text-zinc-400 font-sans mt-1.5">Glasses Logged Today</div>
          </div>
          <div className="flex items-center gap-2 pt-2">
            <button
              onClick={() => setHydration((prev) => Math.max(0, prev - 12.5))}
              className="p-2.5 bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 rounded-xl border border-white/[0.08] transition-colors"
              title="Decrease"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setHydration((prev) => Math.min(100, prev + 12.5))}
              className="flex-1 py-2.5 bg-blue-600/30 border border-blue-400/30 hover:bg-blue-600/50 text-blue-200 text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 transition-all font-sans"
            >
              <Plus className="w-3.5 h-3.5" /> Add Glass
            </button>
          </div>
        </div>

        {/* Sleep */}
        <div className="p-6 rounded-[2rem] bg-gradient-to-b from-[#181a33]/60 to-[#121326]/40 backdrop-blur-3xl border border-white/[0.08] border-t-white/[0.18] shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
            <Moon className="w-4 h-4 text-violet-300" />
            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">Target: 7.5h</span>
          </div>
          <div>
            <div className="text-4xl font-mono text-white leading-none">{sleepHours}h {sleepMinutes}m</div>
            <div className="text-xs text-zinc-400 font-sans mt-1.5">Restorative Sleep</div>
          </div>
          <div className="flex items-center gap-2 pt-2">
            <button
              onClick={() => setSleep(Math.max(4, sleepHours - 1), sleepMinutes)}
              className="p-2.5 bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 rounded-xl border border-white/[0.08] transition-colors"
              title="Minus 1 hour"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setSleep(Math.min(12, sleepHours + 1), sleepMinutes)}
              className="flex-1 py-2.5 bg-[#9333ea]/40 border border-violet-400/30 hover:bg-[#9333ea]/60 text-violet-200 text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 transition-all font-sans"
            >
              <Plus className="w-3.5 h-3.5" /> Add Hour
            </button>
          </div>
        </div>

        {/* Movement */}
        <div className="p-6 rounded-[2rem] bg-gradient-to-b from-[#181a33]/60 to-[#121326]/40 backdrop-blur-3xl border border-white/[0.08] border-t-white/[0.18] shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
            <Footprints className="w-4 h-4 text-emerald-400" />
            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">Target: 100%</span>
          </div>
          <div>
            <div className="text-4xl font-mono text-white leading-none">{movementPercent}%</div>
            <div className="text-xs text-zinc-400 font-sans mt-1.5">Physical Movement</div>
          </div>
          <div className="flex items-center gap-2 pt-2">
            <button
              onClick={() => setMovementPercent((prev) => Math.max(0, prev - 10))}
              className="p-2.5 bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 rounded-xl border border-white/[0.08] transition-colors"
              title="Minus 10%"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setMovementPercent((prev) => Math.min(100, prev + 10))}
              className="flex-1 py-2.5 bg-emerald-600/30 border border-emerald-400/30 hover:bg-emerald-600/50 text-emerald-200 text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 transition-all font-sans"
            >
              <Plus className="w-3.5 h-3.5" /> Add Movement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
