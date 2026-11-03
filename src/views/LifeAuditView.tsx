import React, { useState } from 'react';
import {
  Compass,
  Save,
  Check,
} from 'lucide-react';
import { useData } from '../context/DataContext';
import { sound } from '../audio/sound';

const PILLARS = [
  'Career & Craft',
  'Health & Body',
  'Relationships & Love',
  'Finance & Wealth',
  'Mind & Discipline',
  'Environment & Order',
  'Spirit & Peace',
  'Learning & Intellect',
  'Leisure & Play',
  'Digital Sobriety',
  'Personal Manifesto',
];

export const LifeAuditView: React.FC = () => {
  const [scores, setScores] = useState<Record<string, number>>(() => {
    const map: Record<string, number> = {};
    PILLARS.forEach((p, idx) => {
      map[p] = idx % 2 === 0 ? 8 : 7;
    });
    return map;
  });
  const [saved, setSaved] = useState(false);

  const average = Math.round(
    (Object.values(scores).reduce((a, b) => a + b, 0) / PILLARS.length) * 10
  ) / 10;

  const handleScoreChange = (pillar: string, num: number) => {
    sound.tick();
    setScores((prev) => ({ ...prev, [pillar]: num }));
  };

  const handleSave = () => {
    sound.complete();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-16 animate-fadeIn select-none">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-white/[0.06]">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[#E56A38] text-base">✦</span>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">
              Life Equilibrium Audit (11 Pillars)
            </h1>
          </div>
          <p className="text-xs font-sans text-zinc-400 mt-1">
            Unsparing monthly evaluation of reality, standards, and strategic trajectory.
          </p>
        </div>

        <button
          type="button"
          onClick={handleSave}
          className="px-5 py-2 rounded-xl bg-[#E56A38] hover:bg-[#D9531E] text-white text-xs font-sans font-bold flex items-center gap-1.5 shadow-[0_0_12px_rgba(229,106,56,0.35)] transition-all"
        >
          <Save size={13} />
          <span>{saved ? 'Audit Saved ✓' : 'Save Life Audit'}</span>
        </button>
      </header>

      {/* Equilibrium Score HUD */}
      <section className="p-6 rounded-3xl bg-[#0D0F16]/90 border border-white/[0.08] shadow-2xl flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[#E56A38]">
            <Compass size={16} />
            <span className="text-xs font-sans font-bold text-zinc-300 uppercase tracking-wider">
              Equilibrium Score
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-mono font-black text-white">{average}</span>
            <span className="text-sm font-sans text-zinc-500">/ 10</span>
          </div>
        </div>
        <p className="text-xs font-serif italic text-zinc-400 max-w-xs text-right">
          &ldquo;What is measured improves. What is measured and reported compounds.&rdquo;
        </p>
      </section>

      {/* 11 Pillars List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PILLARS.map((pillar, i) => {
          const score = scores[pillar] || 7;
          return (
            <div
              key={pillar}
              className="p-5 rounded-3xl bg-[#0D0F16]/90 border border-white/[0.08] flex items-center justify-between gap-4"
            >
              <div>
                <span className="text-[10px] font-mono text-[#E56A38] font-bold">Pillar {i + 1}</span>
                <h3 className="text-sm font-serif font-bold text-white">{pillar}</h3>
              </div>

              {/* 1-10 selector */}
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => handleScoreChange(pillar, num)}
                    className={`w-6 h-6 rounded-lg text-[10px] font-mono font-bold transition-all ${
                      score === num
                        ? 'bg-[#E56A38] text-white shadow-sm scale-105'
                        : 'bg-black/30 text-zinc-400 hover:text-white border border-white/[0.06]'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
