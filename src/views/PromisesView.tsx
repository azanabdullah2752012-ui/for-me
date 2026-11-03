import React, { useState } from 'react';
import {
  ShieldCheck,
  Plus,
  Flame,
  Trash2,
  Check,
} from 'lucide-react';
import { PromiseItem, PromiseCategory } from '../types';
import { useData, getDisplayDate } from '../context/DataContext';
import { Modal } from '../components/common/Modal';
import { Button } from '../components/common/Button';
import { sound } from '../audio/sound';

export const PromisesView: React.FC = () => {
  const {
    selectedDate,
    promises,
    addPromise,
    deletePromise,
    setPromiseStatus,
  } = useData();

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<PromiseCategory>('sacred');
  const [newWhy, setNewWhy] = useState('');
  const [newConsequence, setNewConsequence] = useState('');

  // Reason modal for missed / broken promise
  const [breakingPromiseId, setBreakingPromiseId] = useState<string | null>(null);
  const [breakReason, setBreakReason] = useState('');

  const formattedDate = getDisplayDate(selectedDate);

  // Today's summary
  const todayPromises = promises.map((p) => ({
    promise: p,
    record: p.history[selectedDate],
  }));

  const keptCount = todayPromises.filter((tp) => tp.record?.status === 'kept').length;
  const brokenCount = todayPromises.filter((tp) => tp.record?.status === 'broken').length;
  const todayPromisesKeptRate =
    promises.length > 0 ? Math.round((keptCount / promises.length) * 100) : 0;

  const handleCreatePromise = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    addPromise({
      title: newTitle.trim(),
      category: newCategory,
      whyItMatters: newWhy.trim(),
      consequenceIfBroken: newConsequence.trim() || 'Log an honest autopsy and reset without shame.',
    });

    setIsAddModalOpen(false);
    setNewTitle('');
    setNewWhy('');
    setNewConsequence('');
    sound.complete();
  };

  const handleConfirmBreak = () => {
    if (breakingPromiseId) {
      setPromiseStatus(breakingPromiseId, 'broken', breakReason, selectedDate);
      sound.strike();
    }
    setBreakingPromiseId(null);
    setBreakReason('');
  };

  const longestStreak = promises.reduce((max, p) => Math.max(max, p.streak || 0), 0);

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-16 animate-fadeIn select-none">
      {/* ================================================================ */}
      {/* 1. CELESTIAL HEADER                                              */}
      {/* ================================================================ */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-white/[0.06]">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[#E56A38] text-base">✦</span>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">
              Promises to Myself
            </h1>
          </div>
          <p className="text-xs font-sans text-zinc-400 mt-1 max-w-lg">
            Inviolable contracts with your future self. Build unbreakable self-trust one commitment at a time.
          </p>
        </div>

        <Button
          variant="primary"
          size="sm"
          onClick={() => {
            sound.tick();
            setIsAddModalOpen(true);
          }}
          className="flex items-center gap-1.5 text-xs font-sans font-bold bg-[#E56A38] hover:bg-[#D9531E] text-white shadow-[0_0_15px_rgba(229,106,56,0.35)] transition-all"
        >
          <Plus size={14} />
          <span>Forge Commitment</span>
        </Button>
      </header>

      {/* ================================================================ */}
      {/* 2. PROMISE STATS TELEMETRY HUD                                   */}
      {/* ================================================================ */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Metric 1: Kept Rate */}
        <div className="p-5 rounded-3xl bg-[#0D0F16]/90 border border-white/[0.08] shadow-xl backdrop-blur-xl flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-sans font-bold text-zinc-400 uppercase tracking-wider">
              Promises Kept
            </span>
            <span className="text-xs font-mono font-bold text-[#E56A38]">
              {todayPromisesKeptRate}%
            </span>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-mono font-black text-white">
              {keptCount}
            </span>
            <span className="text-xs font-sans text-zinc-500">
              / {promises.length} kept today
            </span>
          </div>

          <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#E56A38] rounded-full transition-all shadow-[0_0_8px_rgba(229,106,56,0.5)]"
              style={{ width: `${todayPromisesKeptRate}%` }}
            />
          </div>
        </div>

        {/* Metric 2: Active Commitments */}
        <div className="p-5 rounded-3xl bg-[#0D0F16]/90 border border-white/[0.08] shadow-xl backdrop-blur-xl flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-sans font-bold text-zinc-400 uppercase tracking-wider">
              Active Contracts
            </span>
            <ShieldCheck size={14} className="text-[#E56A38]" />
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-mono font-black text-white">
              {promises.length}
            </span>
            <span className="text-xs font-sans text-zinc-500">
              sacred commitments
            </span>
          </div>

          <span className="text-[11px] font-sans text-zinc-400">
            Standards I refuse to compromise on.
          </span>
        </div>

        {/* Metric 3: Peak Streak */}
        <div className="p-5 rounded-3xl bg-[#0D0F16]/90 border border-white/[0.08] shadow-xl backdrop-blur-xl flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-sans font-bold text-zinc-400 uppercase tracking-wider">
              Integrity Streak
            </span>
            <Flame size={14} className="text-amber-400" />
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-mono font-black text-amber-400">
              {longestStreak}
            </span>
            <span className="text-xs font-sans text-zinc-500">
              days straight
            </span>
          </div>

          <span className="text-[11px] font-sans text-zinc-400">
            Self-trust compounding day after day.
          </span>
        </div>
      </div>

      {/* ================================================================ */}
      {/* 3. SACRED PROMISES CARDS                                         */}
      {/* ================================================================ */}
      {promises.length === 0 ? (
        <div className="bg-black/20 border border-dashed border-white/[0.08] rounded-3xl p-10 text-center space-y-3">
          <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#E56A38] mx-auto">
            <ShieldCheck size={20} />
          </div>
          <div className="space-y-1 max-w-md mx-auto">
            <h3 className="text-base font-serif font-bold text-white">
              No Sacred Commitments Defined
            </h3>
            <p className="text-xs text-zinc-400 font-sans leading-relaxed">
              Define an inviolable contract with yourself. State why it matters and what happens if broken.
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsAddModalOpen(true)}
            className="text-xs font-sans text-white border-white/[0.12] hover:bg-white/[0.05]"
          >
            <Plus size={13} className="mr-1" />
            <span>Forge First Promise</span>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {promises.map((p) => {
            const dayRecord = p.history[selectedDate];
            const isKept = dayRecord?.status === 'kept';
            const isBroken = dayRecord?.status === 'broken';

            return (
              <div
                key={p.id}
                className={`bg-[#0D0F16]/90 backdrop-blur-xl border rounded-3xl p-5 shadow-xl flex flex-col justify-between space-y-4 transition-all ${
                  isBroken
                    ? 'border-rose-500/40 bg-rose-500/10'
                    : isKept
                    ? 'border-[#E56A38]/50 bg-[#E56A38]/10'
                    : 'border-white/[0.08] hover:border-white/[0.14]'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-mono tracking-wider px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300">
                      {p.category}
                    </span>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                        <Flame size={12} className={p.streak ? 'text-amber-400' : 'text-zinc-500'} />
                        <span>{p.streak}d streak</span>
                      </span>
                      <button
                        onClick={() => {
                          sound.tick();
                          deletePromise(p.id);
                        }}
                        className="text-zinc-500 hover:text-rose-400 p-1 rounded-lg transition-colors"
                        title="Delete contract"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>

                  <h3 className="text-base font-serif font-bold text-white leading-snug">
                    {p.title}
                  </h3>

                  <div className="space-y-2 text-xs font-sans">
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 block">
                        Why It Matters:
                      </span>
                      <p className="text-zinc-300 font-serif italic leading-relaxed">
                        &ldquo;{p.whyItMatters}&rdquo;
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 block">
                        Consequence / Correction:
                      </span>
                      <p className="text-zinc-400">
                        {p.consequenceIfBroken}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Status Actions */}
                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs">
                  <span className="text-[11px] font-sans text-zinc-500">
                    {!dayRecord
                      ? 'Pending tonight'
                      : isKept
                      ? '✓ Kept with honor'
                      : '✗ Broken / Circumstance logged'}
                  </span>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => {
                        sound.complete();
                        setPromiseStatus(p.id, 'kept', undefined, selectedDate);
                      }}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-bold transition-all ${
                        isKept
                          ? 'bg-[#E56A38] text-white shadow-[0_0_12px_rgba(229,106,56,0.4)]'
                          : 'bg-white/[0.06] text-zinc-300 hover:text-white border border-white/[0.1]'
                      }`}
                    >
                      Kept
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        sound.tick();
                        setBreakingPromiseId(p.id);
                      }}
                      className={`px-3 py-1.5 rounded-full text-xs font-sans transition-colors ${
                        isBroken
                          ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                          : 'text-zinc-500 hover:text-white hover:bg-white/[0.04]'
                      }`}
                    >
                      Missed / Circumstances
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* CREATE NEW PROMISE MODAL */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Forge New Sacred Commitment"
        subtitle="Define an inviolable contract with yourself."
      >
        <form onSubmit={handleCreatePromise} className="space-y-4">
          <div>
            <label className="block text-xs font-sans uppercase tracking-wider text-zinc-300 mb-1">
              Commitment Statement <span className="text-white">*</span>
            </label>
            <input
              type="text"
              required
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="e.g. 2 hours of deep focus study before evening"
              className="w-full bg-black/40 border border-white/[0.1] rounded-xl px-3 py-2 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-[#E56A38]"
            />
          </div>

          <div>
            <label className="block text-xs font-sans uppercase tracking-wider text-zinc-300 mb-1">
              Why It Matters Deeply <span className="text-white">*</span>
            </label>
            <textarea
              rows={2}
              required
              value={newWhy}
              onChange={(e) => setNewWhy(e.target.value)}
              placeholder="Why this contract must remain inviolable for your dignity and future..."
              className="w-full bg-black/40 border border-white/[0.1] rounded-xl p-2.5 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-[#E56A38] leading-relaxed resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-sans uppercase tracking-wider text-zinc-300 mb-1">
              Consequence / Replacement Protocol
            </label>
            <input
              type="text"
              value={newConsequence}
              onChange={(e) => setNewConsequence(e.target.value)}
              placeholder="e.g. Honest written reflection and 30m makeup block next morning"
              className="w-full bg-black/40 border border-white/[0.1] rounded-xl px-3 py-2 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-[#E56A38]"
            />
          </div>

          <div>
            <label className="block text-xs font-sans uppercase tracking-wider text-zinc-300 mb-1">
              Category
            </label>
            <div className="flex gap-2">
              {(['sacred', 'discipline', 'growth'] as PromiseCategory[]).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setNewCategory(cat)}
                  className={`flex-1 py-1.5 rounded-xl text-xs font-sans capitalize transition-colors ${
                    newCategory === cat
                      ? 'bg-[#E56A38]/20 text-[#E56A38] font-bold border border-[#E56A38]/40 shadow-sm'
                      : 'bg-black/30 text-zinc-400 border border-white/[0.08]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-3 border-t border-white/[0.06]">
            <Button variant="ghost" size="sm" type="button" onClick={() => setIsAddModalOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              size="sm"
              type="submit"
              className="bg-[#E56A38] hover:bg-[#D9531E] text-white"
            >
              Forge Commitment
            </Button>
          </div>
        </form>
      </Modal>

      {/* REASON MODAL */}
      <Modal
        isOpen={Boolean(breakingPromiseId)}
        onClose={() => setBreakingPromiseId(null)}
        title="Log Circumstances / Reflection"
        subtitle="Calm, unsparing truth. Acknowledge what occurred without guilt or avoidance."
      >
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-sans text-zinc-300 mb-1">
              What led to breaking this contract today?
            </label>
            <textarea
              rows={3}
              value={breakReason}
              onChange={(e) => setBreakReason(e.target.value)}
              placeholder="e.g. Failed to guard evening block; allowed distraction to intrude..."
              className="w-full bg-black/40 border border-white/[0.1] rounded-xl p-3 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-[#E56A38] resize-none"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2 border-t border-white/[0.06]">
            <Button variant="ghost" size="sm" onClick={() => setBreakingPromiseId(null)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleConfirmBreak}
              className="bg-[#E56A38] hover:bg-[#D9531E] text-white"
            >
              Record Truth
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
