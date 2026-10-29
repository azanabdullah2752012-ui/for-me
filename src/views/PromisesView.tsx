import React, { useState } from 'react';
import {
  ShieldCheck,
  Plus,
  Flame,
  CheckCircle2,
  XCircle,
  Trash2,
  Target,
  Sparkles,
  AlertTriangle,
  RotateCcw,
} from 'lucide-react';
import { PromiseCategory, PromiseDayStatus } from '../types';
import { useData, getDisplayDate } from '../context/DataContext';
import { PageHero } from '../components/common/PageHero';
import { Modal } from '../components/common/Modal';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { sound } from '../audio/sound';

export const PromisesView: React.FC = () => {
  const {
    selectedDate,
    promises,
    setPromiseStatus,
    addPromise,
    deletePromise,
    todayPromisesKeptRate,
  } = useData();

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newWhy, setNewWhy] = useState('');
  const [newConsequence, setNewConsequence] = useState('');
  const [newCategory, setNewCategory] = useState<PromiseCategory>('sacred');

  // 3-Step Accountability Review Modal for broken promise
  const [breakingPromiseId, setBreakingPromiseId] = useState<string | null>(null);
  const [analyseNotes, setAnalyseNotes] = useState('');
  const [ownItNotes, setOwnItNotes] = useState('');
  const [recoverNotes, setRecoverNotes] = useState('');
  const [isGenuineObstacle, setIsGenuineObstacle] = useState(false);

  const formattedDate = getDisplayDate(selectedDate);

  const handleCreatePromise = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newWhy.trim()) return;

    sound.complete();
    addPromise({
      title: newTitle.trim(),
      whyItMatters: newWhy.trim(),
      consequenceIfBroken: newConsequence.trim() || 'Mandatory retrospective autopsy and replacement focus block.',
      category: newCategory,
    });

    setNewTitle('');
    setNewWhy('');
    setNewConsequence('');
    setIsAddModalOpen(false);
  };

  const handleRecordBreak = () => {
    if (!breakingPromiseId) return;
    const combinedReason = isGenuineObstacle
      ? `[Genuine Circumstances] ${analyseNotes}. Replacement: ${recoverNotes}`
      : `[Analysis] ${analyseNotes} | [Consequence] ${ownItNotes} | [Recovery] ${recoverNotes}`;

    setPromiseStatus(
      breakingPromiseId,
      'broken',
      combinedReason,
      selectedDate
    );
    setBreakingPromiseId(null);
    setAnalyseNotes('');
    setOwnItNotes('');
    setRecoverNotes('');
    sound.tick();
  };

  const longestStreak = promises.reduce((max, p) => Math.max(max, p.streak || 0), 0);

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-16 animate-fadeIn">
      {/* 1. EDITORIAL HEADER */}
      <PageHero
        title="Sacred Promises & Standards"
        subtitle="Agreements made with yourself form the foundation of self-trust. A promise once forged is non-negotiable."
        kicker="MY JOURNAL • SACRED COMMITMENTS"
        badgeLines={['INVIOLABLE CONTRACTS.', 'CALM ACCOUNTABILITY.', 'UNBROKEN TRUST.']}
        actions={
          <Button
            variant="starlight"
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
        <div className="bg-cosmic-surface/75 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 shadow-journal flex flex-col justify-between">
          <div>
            <span className="text-xs font-sans uppercase tracking-[0.16em] text-starlight-lavender font-semibold block">
              Integrity Alignment
            </span>
            <p className="text-2xl font-heading font-bold tracking-tight text-paper-ink mt-1">
              {todayPromisesKeptRate}%
            </p>
          </div>
          <div className="pt-3 border-t border-white/[0.06] mt-3">
            <span className="text-[11px] font-sans text-paper-muted">
              Kept rate for {formattedDate}
            </span>
          </div>
        </div>

        {/* Metric 2: Active Commitments */}
        <div className="bg-cosmic-surface/75 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 shadow-journal flex flex-col justify-between">
          <div>
            <span className="text-xs font-sans uppercase tracking-[0.16em] text-starlight-lavender font-semibold block">
              Active Contracts
            </span>
            <p className="text-2xl font-heading font-bold tracking-tight text-paper-ink mt-1">
              {promises.length} <span className="text-sm font-sans text-paper-muted font-normal">commitments</span>
            </p>
          </div>
          <div className="pt-3 border-t border-white/[0.06] mt-3">
            <span className="text-[11px] font-sans text-paper-muted">
              Codified personal standards
            </span>
          </div>
        </div>

        {/* Metric 3: Peak Honor Streak */}
        <div className="bg-cosmic-surface/75 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 shadow-journal flex flex-col justify-between">
          <div>
            <span className="text-xs font-sans uppercase tracking-[0.16em] text-starlight-lavender font-semibold block">
              Peak Streak
            </span>
            <p className="text-2xl font-heading font-bold tracking-tight text-paper-ink mt-1">
              {longestStreak} <span className="text-sm font-sans text-paper-muted font-normal">consecutive days</span>
            </p>
          </div>
          <div className="pt-3 border-t border-white/[0.06] mt-3">
            <span className="text-[11px] font-sans text-paper-muted">
              Built through quiet consistency
            </span>
          </div>
        </div>
      </div>

      {/* 3. PROMISES CARDS */}
      {promises.length === 0 ? (
        <div className="bg-cosmic-surface/60 backdrop-blur-xl border border-dashed border-white/[0.12] rounded-2xl p-10 text-center space-y-3">
          <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-starlight-lavender mx-auto">
            <ShieldCheck size={20} />
          </div>
          <div className="space-y-1 max-w-md mx-auto">
            <h3 className="text-base font-heading font-semibold text-paper-ink">
              No Sacred Commitments Defined
            </h3>
            <p className="text-xs text-paper-muted font-sans leading-relaxed">
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
                className={`bg-cosmic-surface/75 backdrop-blur-xl border rounded-2xl p-5 shadow-journal flex flex-col justify-between space-y-4 transition-all ${
                  isBroken
                    ? 'border-rose-500/40 bg-rose-500/10'
                    : isKept
                    ? 'border-emerald-500/40 bg-emerald-500/10'
                    : 'border-white/[0.08]'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant={p.category === 'sacred' ? 'starlight' : 'neutral'}>
                      {p.category}
                    </Badge>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-sans text-paper-muted flex items-center gap-1">
                        <Flame size={12} className="text-amber-400" />
                        <span>{p.streak}d streak</span>
                      </span>
                      <button
                        onClick={() => {
                          sound.tick();
                          deletePromise(p.id);
                        }}
                        className="text-paper-muted hover:text-rose-400 p-1 rounded transition-colors"
                        title="Delete contract"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>

                  <h3 className="text-base font-heading font-semibold text-paper-ink leading-snug">
                    {p.title}
                  </h3>

                  <div className="space-y-1.5 text-xs font-sans">
                    <div>
                      <span className="text-[10px] uppercase font-sans tracking-wider text-starlight-lavender block">
                        Why It Matters:
                      </span>
                      <p className="text-paper-secondary font-sans leading-relaxed">
                        &ldquo;{p.whyItMatters}&rdquo;
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-sans tracking-wider text-paper-muted block">
                        Consequence / Correction:
                      </span>
                      <p className="text-paper-muted">
                        {p.consequenceIfBroken}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Status Actions */}
                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs">
                  <span className="text-[11px] font-sans text-paper-muted">
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
                      className={`px-3 py-1 rounded-lg text-xs font-sans transition-colors ${
                        isKept
                          ? 'bg-emerald-500 text-white font-medium shadow-sm'
                          : 'bg-white/[0.04] text-paper-secondary hover:text-paper-ink border border-white/[0.08]'
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
                      className={`px-3 py-1 rounded-lg text-xs font-sans transition-colors ${
                        isBroken
                          ? 'bg-rose-500 text-white font-medium shadow-sm'
                          : 'bg-white/[0.04] text-paper-secondary hover:text-rose-300 border border-white/[0.08]'
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
            <label className="block text-xs font-sans uppercase tracking-wider text-starlight-lavender mb-1">
              Commitment Statement <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              required
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="e.g. Write 500 words of reflective study before midnight"
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-2 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent"
            />
          </div>

          <div>
            <label className="block text-xs font-sans uppercase tracking-wider text-starlight-lavender mb-1">
              Why It Matters Deeply <span className="text-accent">*</span>
            </label>
            <textarea
              rows={2}
              required
              value={newWhy}
              onChange={(e) => setNewWhy(e.target.value)}
              placeholder="Why this contract must remain inviolable for your dignity and future..."
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl p-2.5 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent leading-relaxed"
            />
          </div>

          <div>
            <label className="block text-xs font-sans uppercase tracking-wider text-starlight-lavender mb-1">
              Consequence / Replacement Protocol
            </label>
            <input
              type="text"
              value={newConsequence}
              onChange={(e) => setNewConsequence(e.target.value)}
              placeholder="e.g. Immediate 3-step written autopsy and next-morning focus block"
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-2 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent"
            />
          </div>

          <div>
            <label className="block text-xs font-sans uppercase tracking-wider text-starlight-lavender mb-1">
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
                      ? 'bg-accent text-white font-medium shadow-cosmic-glow'
                      : 'bg-white/[0.04] text-paper-secondary border border-white/[0.08]'
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
            <Button variant="starlight" size="sm" type="submit">
              Forge Commitment
            </Button>
          </div>
        </form>
      </Modal>

      {/* 3-STEP ACCOUNTABILITY REVIEW MODAL */}
      <Modal
        isOpen={Boolean(breakingPromiseId)}
        onClose={() => setBreakingPromiseId(null)}
        title="Accountability Autopsy (3-Step Framework)"
        subtitle="Acknowledge reality cleanly without excuses or self-condemnation."
      >
        <div className="space-y-4">
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs font-sans text-paper-secondary leading-relaxed">
            &ldquo;A broken promise is not proof of personal failure. Unpack the event objectively, acknowledge the outcome, and establish an immediate mechanical correction.&rdquo;
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="genuineObstacleCheck"
              checked={isGenuineObstacle}
              onChange={(e) => setIsGenuineObstacle(e.target.checked)}
              className="rounded border-white/[0.2] bg-white/[0.05] text-accent focus:ring-accent"
            />
            <label htmlFor="genuineObstacleCheck" className="text-xs font-sans text-paper-ink cursor-pointer">
              Prevented by genuine unavoidable circumstances (illness, emergency)
            </label>
          </div>

          <div className="space-y-3 text-xs font-sans">
            <div>
              <label className="block font-medium text-starlight-lavender mb-1">
                1. ANALYSE: What happened, and what was within your control?
              </label>
              <textarea
                rows={2}
                value={analyseNotes}
                onChange={(e) => setAnalyseNotes(e.target.value)}
                placeholder="Identify where friction or fatigue entered..."
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl p-2.5 text-xs text-paper-ink focus:outline-none focus:border-accent"
              />
            </div>

            {!isGenuineObstacle && (
              <div>
                <label className="block font-medium text-starlight-lavender mb-1">
                  2. OWN IT: What consequence or damage did this have on momentum?
                </label>
                <textarea
                  rows={2}
                  value={ownItNotes}
                  onChange={(e) => setOwnItNotes(e.target.value)}
                  placeholder="Acknowledge the honest trade-off made..."
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl p-2.5 text-xs text-paper-ink focus:outline-none focus:border-accent"
                />
              </div>
            )}

            <div>
              <label className="block font-medium text-starlight-lavender mb-1">
                3. RECOVER: What concrete action or replacement plan comes next?
              </label>
              <input
                type="text"
                value={recoverNotes}
                onChange={(e) => setRecoverNotes(e.target.value)}
                placeholder="Specific time and replacement action to restore standard"
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-2 text-xs text-paper-ink focus:outline-none focus:border-accent"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-3 border-t border-white/[0.06]">
            <Button variant="ghost" size="sm" type="button" onClick={() => setBreakingPromiseId(null)}>
              Cancel
            </Button>
            <Button variant="danger" size="sm" type="button" onClick={handleRecordBreak}>
              Record Autopsy &amp; Plan
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
