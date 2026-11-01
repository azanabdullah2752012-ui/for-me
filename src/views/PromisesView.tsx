import React, { useState } from 'react';
import {
  ShieldCheck,
  Plus,
  Flame,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  Trash2,
} from 'lucide-react';
import { PromiseItem, PromiseCategory, PromiseDayStatus } from '../types';
import { useData, formatDateKey, getDisplayDate } from '../context/DataContext';
import { PageHero } from '../components/common/PageHero';
import { Modal } from '../components/common/Modal';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
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

  // Autopsy / Recovery protocol modal
  const [recoveringPromiseId, setRecoveringPromiseId] = useState<string | null>(null);
  const [recoverNotes, setRecoverNotes] = useState('');

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

  const handleConfirmRecovery = () => {
    if (recoveringPromiseId) {
      setPromiseStatus(
        recoveringPromiseId,
        'excused',
        `Adjusted with deliberate protocol: ${recoverNotes}`,
        selectedDate
      );
      sound.complete();
    }
    setRecoveringPromiseId(null);
    setRecoverNotes('');
    sound.tick();
  };

  const longestStreak = promises.reduce((max, p) => Math.max(max, p.streak || 0), 0);

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-16 animate-fadeIn select-none">
      {/* 1. EDITORIAL HEADER */}
      <PageHero
        title="Sacred Promises &amp; Standards"
        subtitle="Agreements made with yourself form the foundation of self-trust. A promise once forged is non-negotiable."
        kicker="SACRED COMMITMENTS • INVIOLABLE STANDARDS"
        badgeLines={['INVIOLABLE CONTRACTS.', 'CALM ACCOUNTABILITY.', 'UNBROKEN TRUST.']}
        actions={
          <Button
            variant="primary"
            size="sm"
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-1.5 text-xs font-sans"
          >
            <Plus size={14} />
            <span>Forge New Promise</span>
          </Button>
        }
      />

      {/* 2. PROMISE STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Metric 1: Kept Rate */}
        <div className="bg-white/[0.025] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 font-semibold block">
              Integrity Alignment
            </span>
            <p className="text-2xl font-heading font-semibold tracking-tight text-white mt-1">
              {todayPromisesKeptRate}%
            </p>
          </div>
          <div className="pt-3 border-t border-white/[0.06] mt-3">
            <span className="text-[11px] font-sans text-zinc-500">
              Kept rate for {formattedDate}
            </span>
          </div>
        </div>

        {/* Metric 2: Active Commitments */}
        <div className="bg-white/[0.025] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 font-semibold block">
              Active Contracts
            </span>
            <p className="text-2xl font-heading font-semibold tracking-tight text-white mt-1">
              {promises.length} <span className="text-sm font-sans text-zinc-500 font-normal">commitments</span>
            </p>
          </div>
          <div className="pt-3 border-t border-white/[0.06] mt-3">
            <span className="text-[11px] font-sans text-zinc-500">
              Codified personal standards
            </span>
          </div>
        </div>

        {/* Metric 3: Peak Honor Streak */}
        <div className="bg-white/[0.025] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 font-semibold block">
              Peak Streak
            </span>
            <p className="text-2xl font-heading font-semibold tracking-tight text-white mt-1">
              {longestStreak} <span className="text-sm font-sans text-zinc-500 font-normal">consecutive days</span>
            </p>
          </div>
          <div className="pt-3 border-t border-white/[0.06] mt-3">
            <span className="text-[11px] font-sans text-zinc-500">
              Built through quiet consistency
            </span>
          </div>
        </div>
      </div>

      {/* 3. PROMISES CARDS */}
      {promises.length === 0 ? (
        <div className="bg-white/[0.02] border border-dashed border-white/[0.1] rounded-2xl p-10 text-center space-y-3">
          <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white mx-auto">
            <ShieldCheck size={20} />
          </div>
          <div className="space-y-1 max-w-md mx-auto">
            <h3 className="text-base font-heading font-semibold text-white">
              No Sacred Commitments Defined
            </h3>
            <p className="text-xs text-zinc-400 font-sans leading-relaxed">
              Define an inviolable contract with yourself. A sacred promise requires a reason why it matters and an explicit consequence if broken.
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsAddModalOpen(true)}
            className="text-xs font-sans"
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
                className={`bg-white/[0.025] backdrop-blur-xl border rounded-2xl p-5 shadow-sm flex flex-col justify-between space-y-4 transition-all ${
                  isBroken
                    ? 'border-rose-500/40 bg-rose-500/10'
                    : isKept
                    ? 'border-emerald-500/40 bg-emerald-500/10'
                    : 'border-white/[0.08]'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant={p.category === 'sacred' ? 'neutral' : 'neutral'}>
                      {p.category}
                    </Badge>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-sans text-zinc-400 flex items-center gap-1">
                        <Flame size={12} className="text-zinc-300" />
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

                  <h3 className="text-base font-heading font-semibold text-white leading-snug">
                    {p.title}
                  </h3>

                  <div className="space-y-1.5 text-xs font-sans">
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-400 block">
                        Why It Matters:
                      </span>
                      <p className="text-zinc-300 font-sans leading-relaxed">
                        &ldquo;{p.whyItMatters}&rdquo;
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 block">
                        Consequence / Correction:
                      </span>
                      <p className="text-zinc-500">
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
                      className={`px-3 py-1.5 rounded-xl text-xs font-sans transition-colors ${
                        isKept
                          ? 'bg-emerald-500 text-white font-medium shadow-sm'
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
                      className={`px-3 py-1.5 rounded-xl text-xs font-sans transition-colors ${
                        isBroken
                          ? 'bg-rose-500 text-white font-medium shadow-sm'
                          : 'bg-white/[0.04] text-zinc-400 hover:text-rose-300 border border-white/[0.08]'
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
              placeholder="e.g. Write 500 words of reflective study before midnight"
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-2 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-white"
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
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl p-2.5 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-white leading-relaxed resize-none"
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
              placeholder="e.g. Immediate 3-step written autopsy and next-morning focus block"
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-2 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-white"
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
                      ? 'bg-white text-zinc-950 font-semibold shadow-md'
                      : 'bg-white/[0.04] text-zinc-400 border border-white/[0.08]'
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
            <Button variant="primary" size="sm" type="submit">
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
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl p-3 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-white resize-none"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2 border-t border-white/[0.06]">
            <Button variant="ghost" size="sm" onClick={() => setBreakingPromiseId(null)}>
              Cancel
            </Button>
            <Button variant="primary" size="sm" onClick={handleConfirmBreak}>
              Record Truth
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
