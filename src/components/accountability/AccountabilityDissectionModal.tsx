import React, { useState, useEffect } from 'react';
import {
  ShieldAlert,
  HelpCircle,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import { AccountabilityDissection } from '../../types';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

interface AccountabilityDissectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCommitmentTitle?: string;
  defaultDateKey?: string;
  defaultCategory?: 'promise' | 'habit' | 'study';
  target?: { title: string; date: string; category: 'promise' | 'habit' | 'study' };
  onSaveDissection?: (dissection: AccountabilityDissection) => void;
  onSave?: (dissection: AccountabilityDissection) => void;
}

export const AccountabilityDissectionModal: React.FC<AccountabilityDissectionModalProps> = ({
  isOpen,
  onClose,
  defaultCommitmentTitle = '',
  defaultDateKey = '',
  defaultCategory = 'promise',
  target,
  onSaveDissection,
  onSave,
}) => {
  const initialTitle = target?.title || defaultCommitmentTitle;
  const initialDate = target?.date || defaultDateKey || new Date().toISOString().slice(0, 10);
  const initialCat = target?.category || defaultCategory;

  const [commitmentTitle, setCommitmentTitle] = useState(initialTitle);
  const [dateKey, setDateKey] = useState(initialDate);
  const [category, setCategory] = useState<'promise' | 'habit' | 'study'>(initialCat);
  const [failureType, setFailureType] = useState<'avoidable-choice' | 'genuine-obstacle'>('avoidable-choice');

  // Step 1: ANALYSE
  const [analyseWhatHappened, setAnalyseWhatHappened] = useState('');
  const [analyseControlFactors, setAnalyseControlFactors] = useState('');

  // Step 2: OWN IT
  const [ownItConsequence, setOwnItConsequence] = useState('');

  // Step 3: RECOVER
  const [recoverActionPlan, setRecoverActionPlan] = useState('');

  useEffect(() => {
    if (isOpen) {
      if (defaultCommitmentTitle) setCommitmentTitle(defaultCommitmentTitle);
      if (defaultDateKey) setDateKey(defaultDateKey);
      if (defaultCategory) setCategory(defaultCategory);
    }
  }, [isOpen, defaultCommitmentTitle, defaultDateKey, defaultCategory]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commitmentTitle.trim() || !analyseWhatHappened.trim()) return;

    const dissection: AccountabilityDissection = {
      id: `disc-${Date.now()}`,
      commitmentTitle: commitmentTitle.trim(),
      dateKey,
      category,
      failureType,
      analyseWhatHappened: analyseWhatHappened.trim(),
      analyseControlFactors: analyseControlFactors.trim(),
      ownItConsequence: ownItConsequence.trim() || 'Delayed operational velocity and slight loss of momentum.',
      recoverActionPlan: recoverActionPlan.trim(),
    };

    (onSaveDissection || onSave)?.(dissection);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="3-Step Accountability Framework"
      subtitle="Analyse without excuses, own the consequence without self-denigration, and execute recovery."
      maxWidth="max-w-2xl"
    >
      <form onSubmit={handleSubmit} className="space-y-6 text-xs font-sans text-neutral-200">
        {/* Core Philosophical Guardrail */}
        <div className="p-3.5 rounded-xl bg-accent/10 border border-accent/30 space-y-1.5 font-sans text-neutral-300">
          <div className="flex items-center gap-2 text-accent font-mono font-bold uppercase not-italic text-xs">
            <ShieldAlert size={15} />
            <span>Accountability Law: Clarity, Not Self-Flagellation</span>
          </div>
          <p>
            &ldquo;Do not invent arbitrary punishments, encourage self-denigration, or treat one lapse as proof of personal failure. True accountability is clinical dissection of friction so you can re-engineer your system.&rdquo;
          </p>
        </div>

        {/* Commitment Metadata */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="sm:col-span-2">
            <label className="block text-[11px] font-mono uppercase text-neutral-400 mb-1">
              Missed Commitment / Broken Standard
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Phone cutoff before 22:30, 90m deep work..."
              value={commitmentTitle}
              onChange={(e) => setCommitmentTitle(e.target.value)}
              className="w-full bg-dark-850 border border-surface-border rounded-lg px-3 py-1.5 text-xs text-white font-mono focus:border-accent"
            />
          </div>

          <div>
            <label className="block text-[11px] font-mono uppercase text-neutral-400 mb-1">
              Date of Occurrence
            </label>
            <input
              type="date"
              required
              value={dateKey}
              onChange={(e) => setDateKey(e.target.value)}
              className="w-full bg-dark-850 border border-surface-border rounded-lg px-3 py-1.5 text-xs text-white font-mono"
            />
          </div>
        </div>

        {/* Failure Classification: Avoidable vs Genuine */}
        <div className="space-y-1.5">
          <label className="block text-[11px] font-mono uppercase text-neutral-400">
            Causal Classification
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setFailureType('avoidable-choice')}
              className={`p-3 rounded-lg border text-left transition-colors ${
                failureType === 'avoidable-choice'
                  ? 'bg-rose-500/15 border-rose-500/40 text-rose-300'
                  : 'bg-dark-850 text-neutral-400 border-surface-border'
              }`}
            >
              <span className="font-mono font-bold block text-xs">Avoidable Choice (Concession)</span>
              <span className="text-[10px] text-neutral-400">Internal weakness, lack of boundaries, or rationalization.</span>
            </button>

            <button
              type="button"
              onClick={() => setFailureType('genuine-obstacle')}
              className={`p-3 rounded-lg border text-left transition-colors ${
                failureType === 'genuine-obstacle'
                  ? 'bg-amber-500/15 border-amber-500/40 text-amber-300'
                  : 'bg-dark-850 text-neutral-400 border-surface-border'
              }`}
            >
              <span className="font-mono font-bold block text-xs">Genuine Obstacle (External)</span>
              <span className="text-[10px] text-neutral-400">Unforeseen acute emergency or physical impossibility.</span>
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* STEP 1: ANALYSE */}
        {/* ======================================================== */}
        <div className="p-4 rounded-xl bg-dark-850 border border-surface-border space-y-3">
          <div className="flex items-center gap-2 text-sky-400 font-mono font-bold uppercase text-xs">
            <Badge variant="accent">Step 1</Badge>
            <span>ANALYSE: What Happened & What Was Within Control?</span>
          </div>

          <div>
            <label className="block text-[10px] font-mono uppercase text-neutral-400 mb-1">
              Clinical breakdown of events
            </label>
            <textarea
              rows={2}
              required
              placeholder="What specific trigger, temptation, or friction preceded the breakdown?"
              value={analyseWhatHappened}
              onChange={(e) => setAnalyseWhatHappened(e.target.value)}
              className="w-full bg-dark-900 border border-surface-border rounded-lg p-2.5 text-xs text-white focus:border-accent"
            />
          </div>

          <div>
            <label className="block text-[10px] font-mono uppercase text-neutral-400 mb-1">
              What was strictly within your locus of control?
            </label>
            <input
              type="text"
              placeholder="e.g. Deciding to open browser, failing to set physical phone lock..."
              value={analyseControlFactors}
              onChange={(e) => setAnalyseControlFactors(e.target.value)}
              className="w-full bg-dark-900 border border-surface-border rounded-lg px-3 py-1.5 text-xs text-white focus:border-accent"
            />
          </div>
        </div>

        {/* ======================================================== */}
        {/* STEP 2: OWN IT */}
        {/* ======================================================== */}
        <div className="p-4 rounded-xl bg-dark-850 border border-surface-border space-y-2">
          <div className="flex items-center gap-2 text-rose-400 font-mono font-bold uppercase text-xs">
            <Badge variant="danger">Step 2</Badge>
            <span>OWN IT: What Consequence Did This Produce?</span>
          </div>
          <p className="text-[11px] text-neutral-400 font-mono">
            Acknowledge the downstream impact honestly without emotional drama or excuses:
          </p>
          <textarea
            rows={2}
            required
            placeholder="e.g. Lost 90m of deep architecture time; morning cognitive state was compromised; broke word to self."
            value={ownItConsequence}
            onChange={(e) => setOwnItConsequence(e.target.value)}
            className="w-full bg-dark-900 border border-surface-border rounded-lg p-2.5 text-xs text-white focus:border-rose-500"
          />
        </div>

        {/* ======================================================== */}
        {/* STEP 3: RECOVER */}
        {/* ======================================================== */}
        <div className="p-4 rounded-xl bg-dark-850 border border-surface-border space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold uppercase text-xs">
            <Badge variant="success">Step 3</Badge>
            <span>RECOVER: Concrete Action & Replacement Plan</span>
          </div>
          <p className="text-[11px] text-neutral-400 font-mono">
            Define the exact physical intervention to close the loop:
          </p>
          <textarea
            rows={2}
            required
            placeholder="e.g. Double deep work block tomorrow morning from 06:00 to 09:00 with physical device lock in another room."
            value={recoverActionPlan}
            onChange={(e) => setRecoverActionPlan(e.target.value)}
            className="w-full bg-dark-900 border border-surface-border rounded-lg p-2.5 text-xs text-white focus:border-emerald-500 font-mono"
          />
        </div>

        <div className="flex justify-end gap-2 pt-3 border-t border-surface-border">
          <Button type="button" variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Ratify Accountability Dissection
          </Button>
        </div>
      </form>
    </Modal>
  );
};
