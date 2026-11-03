import React, { useState } from 'react';
import {
  ShieldCheck,
  Plus,
  Flame,
  CheckCircle2,
} from 'lucide-react';
import { PromiseItem } from '../types';
import { useData } from '../context/DataContext';

export const PromisesView: React.FC = () => {
  const { selectedDate, promises, setPromiseStatus, addPromise } = useData();
  const [newTitle, setNewTitle] = useState('');
  const [newWhy, setNewWhy] = useState('');
  const [newConsequence, setNewConsequence] = useState('');

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    addPromise({
      title: newTitle.trim(),
      category: 'sacred',
      whyItMatters: newWhy.trim() || 'To guard integrity and self-respect.',
      consequenceIfBroken: newConsequence.trim() || 'Honest autopsy and immediate reset.',
    });
    setNewTitle('');
    setNewWhy('');
    setNewConsequence('');
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-16 animate-fadeIn select-none">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-white/[0.06]">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[#E56A38] text-base">✦</span>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">
              Promises to Myself
            </h1>
          </div>
          <p className="text-xs font-sans text-zinc-400 mt-1">
            Inviolable contracts with your future self. Build unbreakable self-trust.
          </p>
        </div>
      </header>

      {/* Add Promise Form */}
      <form onSubmit={handleCreate} className="p-5 rounded-3xl bg-[#0D0F16]/90 border border-white/[0.08] space-y-3">
        <h3 className="text-xs font-sans font-bold text-white uppercase tracking-wider">Forge New Contract</h3>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="I will..."
          className="w-full bg-black/40 border border-white/[0.08] rounded-xl px-3.5 py-2 text-xs font-sans text-white focus:outline-none focus:border-[#E56A38]"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <input
            type="text"
            value={newWhy}
            onChange={(e) => setNewWhy(e.target.value)}
            placeholder="Why this matters deeply..."
            className="w-full bg-black/40 border border-white/[0.08] rounded-xl px-3.5 py-2 text-xs font-sans text-white focus:outline-none focus:border-[#E56A38]"
          />
          <input
            type="text"
            value={newConsequence}
            onChange={(e) => setNewConsequence(e.target.value)}
            placeholder="Consequence if broken..."
            className="w-full bg-black/40 border border-white/[0.08] rounded-xl px-3.5 py-2 text-xs font-sans text-white focus:outline-none focus:border-[#E56A38]"
          />
        </div>
        <div className="flex justify-end pt-1">
          <button
            type="submit"
            className="px-5 py-2 rounded-xl bg-[#E56A38] hover:bg-[#D9531E] text-white text-xs font-sans font-bold flex items-center gap-1.5 shadow-[0_0_12px_rgba(229,106,56,0.3)] transition-all"
          >
            <Plus size={13} />
            <span>Forge Commitment</span>
          </button>
        </div>
      </form>

      {/* Promise Cards */}
      <div className="space-y-4">
        {promises.map((p) => {
          const status = p.history[selectedDate];
          const isKept = status === 'kept';
          const isBroken = status === 'broken';

          return (
            <div
              key={p.id}
              className={`p-5 rounded-3xl border transition-all space-y-3 ${
                isKept
                  ? 'bg-[#E56A38]/10 border-[#E56A38]/40 shadow-sm'
                  : isBroken
                  ? 'bg-rose-500/10 border-rose-500/30'
                  : 'bg-[#0D0F16]/90 border-white/[0.08]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#E56A38] font-bold">
                  {p.category}
                </span>
                <span className="text-xs font-mono text-amber-400 flex items-center gap-1">
                  <Flame size={12} />
                  <span>{p.streak}d streak</span>
                </span>
              </div>

              <h3 className="text-base font-serif font-bold text-white">{p.title}</h3>

              <div className="text-xs font-serif italic text-zinc-400">
                &ldquo;{p.whyItMatters}&rdquo;
              </div>

              <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[11px] font-sans text-zinc-500">
                  {isKept ? '✓ Kept with honor' : isBroken ? '✗ Broken' : 'Pending tonight'}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setPromiseStatus(p.id, 'kept')}
                    className={`px-3 py-1.5 rounded-full text-xs font-sans font-bold transition-all ${
                      isKept
                        ? 'bg-[#E56A38] text-white shadow-sm'
                        : 'bg-white/[0.06] text-zinc-300 hover:text-white'
                    }`}
                  >
                    Kept
                  </button>
                  <button
                    type="button"
                    onClick={() => setPromiseStatus(p.id, 'broken')}
                    className={`px-3 py-1.5 rounded-full text-xs font-sans transition-all ${
                      isBroken
                        ? 'bg-rose-500 text-white font-bold'
                        : 'bg-white/[0.04] text-zinc-400 hover:text-white'
                    }`}
                  >
                    Missed
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
