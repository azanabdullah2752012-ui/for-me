import React, { useState } from 'react';
import {
  ShieldCheck,
  AlertTriangle,
  Clock,
  CheckCircle2,
  XCircle,
  HelpCircle,
  History,
  Edit3,
  Calendar,
  Lock,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { SingleDailyPromise, DailyPromiseStatus } from '../../types';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { Modal } from '../common/Modal';
import { sound } from '../../audio/sound';

interface DailyPromiseCardProps {
  promise: SingleDailyPromise;
  selectedDate: string;
  onSavePromise: (promise: SingleDailyPromise) => void;
  onUpdateStatus: (
    status: DailyPromiseStatus,
    auditDetails?: { reason?: string; circumstances?: string; replacementPlan?: string; overrideExplanation?: string }
  ) => void;
}

export const DailyPromiseCard: React.FC<DailyPromiseCardProps> = ({
  promise,
  selectedDate,
  onSavePromise,
  onUpdateStatus,
}) => {
  // Edit Promise Modal
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editText, setEditText] = useState(promise.text || '');
  const [editFinishLine, setEditFinishLine] = useState(promise.measurableFinishLine || '');
  const [editDeadline, setEditDeadline] = useState(promise.deadline || '18:00');
  const [editChosenWhen, setEditChosenWhen] = useState<'previous-evening' | 'morning'>(promise.chosenWhen || 'previous-evening');

  // Prevented by Circumstances Modal
  const [isPreventedModalOpen, setIsPreventedModalOpen] = useState(false);
  const [circumstances, setCircumstances] = useState(promise.preventedCircumstances || '');
  const [replacementPlan, setReplacementPlan] = useState(promise.replacementPlan || '');

  // Missed -> Kept Override Audit Modal
  const [isOverrideModalOpen, setIsOverrideModalOpen] = useState(false);
  const [overrideExplanation, setOverrideExplanation] = useState('');

  // Missed reason modal
  const [isMissedModalOpen, setIsMissedModalOpen] = useState(false);
  const [missedReason, setMissedReason] = useState('');

  // View Audit History Modal
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);

  const handleOpenEdit = () => {
    sound.tick();
    setEditText(promise.text || '');
    setEditFinishLine(promise.measurableFinishLine || '');
    setEditDeadline(promise.deadline || '18:00');
    setEditChosenWhen(promise.chosenWhen || 'previous-evening');
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editText.trim() || !editFinishLine.trim()) return;

    const nowStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const existingHistory = promise.historyLog || [];

    const updated: SingleDailyPromise = {
      ...promise,
      text: editText.trim(),
      measurableFinishLine: editFinishLine.trim(),
      deadline: editDeadline.trim(),
      chosenWhen: editChosenWhen,
      historyLog: [
        ...existingHistory,
        {
          timestamp: nowStr,
          action: 'Promise definition updated',
          reason: `Deadline: ${editDeadline}. Chosen: ${editChosenWhen === 'previous-evening' ? 'Previous Evening' : 'Morning'}`
        }
      ]
    };

    onSavePromise(updated);
    setIsEditModalOpen(false);
    sound.complete();
  };

  const handleMarkKeptClick = () => {
    if (promise.status === 'missed') {
      setIsOverrideModalOpen(true);
    } else {
      sound.complete();
      onUpdateStatus('kept');
    }
  };

  const handleConfirmOverride = (e: React.FormEvent) => {
    e.preventDefault();
    if (!overrideExplanation.trim()) return;
    sound.complete();
    onUpdateStatus('kept', { overrideExplanation: overrideExplanation.trim() });
    setIsOverrideModalOpen(false);
    setOverrideExplanation('');
  };

  const handleConfirmPrevented = (e: React.FormEvent) => {
    e.preventDefault();
    if (!circumstances.trim()) return;
    sound.tick();
    onUpdateStatus('prevented', {
      circumstances: circumstances.trim(),
      replacementPlan: replacementPlan.trim() || undefined,
    });
    setIsPreventedModalOpen(false);
  };

  const handleConfirmMissed = (e: React.FormEvent) => {
    e.preventDefault();
    sound.tick();
    onUpdateStatus('missed', { reason: missedReason.trim() || 'Finish line not attained' });
    setIsMissedModalOpen(false);
    setMissedReason('');
  };

  const isKept = promise.status === 'kept';
  const isMissed = promise.status === 'missed';
  const isPrevented = promise.status === 'prevented';
  const isPending = promise.status === 'pending';

  return (
    <Card className="p-6 space-y-5">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent/20 border border-accent/35 flex items-center justify-center text-starlight-lavender shrink-0 shadow-cosmic-glow">
            <ShieldCheck size={20} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-heading font-semibold text-paper-ink">
                Daily Sacred Promise
              </h3>
              <Badge variant={isKept ? 'success' : isMissed ? 'danger' : isPrevented ? 'warning' : 'neutral'}>
                {promise.status.toUpperCase()}
              </Badge>
            </div>
            <p className="text-xs text-paper-muted font-sans mt-0.5">
              Chosen {promise.chosenWhen === 'previous-evening' ? 'the previous evening (Golden Rule)' : 'this morning'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsHistoryModalOpen(true)}
            className="text-xs font-sans text-paper-muted hover:text-paper-ink"
            title="View audit trail"
          >
            <History size={13} className="mr-1.5" />
            <span>Audit Trail ({promise.historyLog?.length || 0})</span>
          </Button>

          <Button
            variant="secondary"
            size="sm"
            onClick={handleOpenEdit}
            className="text-xs font-sans"
          >
            <Edit3 size={13} className="mr-1.5" />
            <span>Edit Contract</span>
          </Button>
        </div>
      </div>

      {/* Main Promise Details Box */}
      <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-4">
        {/* Core Promise Text */}
        <div>
          <span className="text-[10px] font-sans uppercase text-starlight-lavender font-semibold block mb-1 tracking-wider">
            The Non-Negotiable Commitment
          </span>
          <p className="text-lg md:text-xl font-heading font-semibold text-paper-ink tracking-tight leading-snug">
            {promise.text || 'No promise sealed for this day yet. Click "Edit Contract" to forge one.'}
          </p>
        </div>

        {/* Measurable Finish Line */}
        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
          <div className="flex items-center gap-1.5 text-paper-muted text-[10px] font-sans uppercase tracking-wider">
            <Lock size={12} className="text-starlight-lavender" />
            <span>Objective Finish Line Standard</span>
          </div>
          <p className="text-xs text-paper-secondary font-sans leading-relaxed">
            {promise.measurableFinishLine || 'Define an unambiguous, objective completion standard.'}
          </p>
        </div>

        {/* Deadline & Meta */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs font-sans text-paper-muted">
          <div className="flex items-center gap-2">
            <Clock size={13} className="text-starlight-lavender" />
            <span>Deadline: <strong className="text-paper-ink">{promise.deadline || 'Before midnight'}</strong></span>
          </div>

          {promise.statusRecordedAt && (
            <div className="text-[11px] text-paper-muted">
              Audited at: <strong className="text-paper-secondary">{promise.statusRecordedAt}</strong>
            </div>
          )}
        </div>

        {/* Prevented Circumstances */}
        {isPrevented && (
          <div className="p-3.5 rounded-xl bg-amber-500/15 border border-amber-500/30 space-y-2">
            <div className="flex items-center gap-2 text-amber-300 text-xs font-sans font-bold">
              <AlertTriangle size={14} />
              <span>Prevented by Legitimate Circumstances</span>
            </div>
            <p className="text-xs text-paper-ink font-sans italic">
              &ldquo;{promise.preventedCircumstances}&rdquo;
            </p>
            {promise.replacementPlan && (
              <div className="pt-2 border-t border-amber-500/20 text-xs font-sans text-paper-secondary">
                <span className="text-amber-300 block text-[10px] uppercase font-bold">Replacement Plan:</span>
                <span>{promise.replacementPlan}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Night Audit Status Buttons */}
      <div className="pt-2">
        <span className="text-[11px] font-sans uppercase tracking-wider text-paper-muted block mb-2.5">
          Nightly Audit (Accountability):
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {/* Kept */}
          <button
            type="button"
            onClick={handleMarkKeptClick}
            className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-sans font-semibold transition-all ${
              isKept
                ? 'bg-emerald-500/25 text-emerald-300 border border-emerald-500/50 shadow-cosmic-glow'
                : 'bg-white/[0.04] text-paper-secondary hover:text-paper-ink hover:bg-white/[0.08] border border-white/[0.08]'
            }`}
          >
            <CheckCircle2 size={15} className={isKept ? 'text-emerald-300' : 'text-paper-muted'} />
            <span>Kept With Honor</span>
          </button>

          {/* Missed */}
          <button
            type="button"
            onClick={() => setIsMissedModalOpen(true)}
            className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-sans font-semibold transition-all ${
              isMissed
                ? 'bg-rose-500/25 text-rose-300 border border-rose-500/50 shadow-sm'
                : 'bg-white/[0.04] text-paper-secondary hover:text-paper-ink hover:bg-white/[0.08] border border-white/[0.08]'
            }`}
          >
            <XCircle size={15} className={isMissed ? 'text-rose-300' : 'text-paper-muted'} />
            <span>Missed Commitment</span>
          </button>

          {/* Prevented */}
          <button
            type="button"
            onClick={() => setIsPreventedModalOpen(true)}
            className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-sans font-semibold transition-all ${
              isPrevented
                ? 'bg-amber-500/25 text-amber-300 border border-amber-500/50 shadow-sm'
                : 'bg-white/[0.04] text-paper-secondary hover:text-paper-ink hover:bg-white/[0.08] border border-white/[0.08]'
            }`}
          >
            <AlertTriangle size={15} className={isPrevented ? 'text-amber-300' : 'text-paper-muted'} />
            <span>Genuine Obstacle</span>
          </button>
        </div>
      </div>

      {/* Edit Promise Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Forge Daily Promise Contract"
        subtitle="One clear, inviolable standard for the day."
      >
        <form onSubmit={handleSaveEdit} className="space-y-4">
          <div>
            <label className="block text-xs font-sans font-medium text-starlight-lavender mb-1">
              What is your single promise for today?
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Complete 2 deep study blocks on Chapter 4"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-2 text-xs text-paper-ink font-sans focus:outline-none focus:border-accent"
            />
          </div>

          <div>
            <label className="block text-xs font-sans font-medium text-starlight-lavender mb-1">
              Measurable finish line (How will you prove it was done?)
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Summary notes uploaded and 20 practice questions solved"
              value={editFinishLine}
              onChange={(e) => setEditFinishLine(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-2 text-xs text-paper-ink font-sans focus:outline-none focus:border-accent"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-sans text-paper-muted mb-1">
                Target Deadline
              </label>
              <input
                type="text"
                placeholder="e.g. 18:00 or Before dinner"
                value={editDeadline}
                onChange={(e) => setEditDeadline(e.target.value)}
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-2 text-xs text-paper-ink font-sans focus:outline-none focus:border-accent"
              />
            </div>

            <div>
              <label className="block text-xs font-sans text-paper-muted mb-1">
                When was this set?
              </label>
              <select
                value={editChosenWhen}
                onChange={(e) => setEditChosenWhen(e.target.value as any)}
                className="w-full bg-cosmic-surface border border-white/[0.08] rounded-xl px-3 py-2 text-xs text-paper-ink font-sans focus:outline-none focus:border-accent"
              >
                <option value="previous-evening">Previous Evening (Recommended)</option>
                <option value="morning">Morning of Today</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2 border-t border-white/[0.06]">
            <Button variant="ghost" size="sm" type="button" onClick={() => setIsEditModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="starlight" size="sm" type="submit">
              Seal Promise
            </Button>
          </div>
        </form>
      </Modal>

      {/* Missed Confirmation Modal */}
      <Modal
        isOpen={isMissedModalOpen}
        onClose={() => setIsMissedModalOpen(false)}
        title="Audit Missed Promise"
        subtitle="Acknowledge reality cleanly without excuses or self-condemnation."
      >
        <form onSubmit={handleConfirmMissed} className="space-y-4">
          <div>
            <label className="block text-xs font-sans text-starlight-lavender mb-1 font-medium">
              What caused the breakdown? What was in your control?
            </label>
            <textarea
              rows={3}
              required
              placeholder="e.g. Procrastinated in afternoon, began too late..."
              value={missedReason}
              onChange={(e) => setMissedReason(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl p-3 text-xs text-paper-ink font-sans focus:outline-none focus:border-accent"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2 border-t border-white/[0.06]">
            <Button variant="ghost" size="sm" type="button" onClick={() => setIsMissedModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="danger" size="sm" type="submit">
              Record Missed Promise
            </Button>
          </div>
        </form>
      </Modal>

      {/* Prevented Confirmation Modal */}
      <Modal
        isOpen={isPreventedModalOpen}
        onClose={() => setIsPreventedModalOpen(false)}
        title="Legitimate Circumstances Audit"
        subtitle="Distinguish genuine obstacles from avoidable rationalizations."
      >
        <form onSubmit={handleConfirmPrevented} className="space-y-4">
          <div>
            <label className="block text-xs font-sans text-amber-300 mb-1 font-medium">
              What genuine circumstance prevented completion?
            </label>
            <textarea
              rows={3}
              required
              placeholder="e.g. Family medical emergency, sudden illness..."
              value={circumstances}
              onChange={(e) => setCircumstances(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl p-3 text-xs text-paper-ink font-sans focus:outline-none focus:border-amber-400"
            />
          </div>

          <div>
            <label className="block text-xs font-sans text-paper-muted mb-1">
              Recovery plan (How and when will you recover?):
            </label>
            <input
              type="text"
              placeholder="e.g. Reschedule to Saturday morning at 09:00"
              value={replacementPlan}
              onChange={(e) => setReplacementPlan(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-2 text-xs text-paper-ink font-sans focus:outline-none focus:border-accent"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2 border-t border-white/[0.06]">
            <Button variant="ghost" size="sm" type="button" onClick={() => setIsPreventedModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="starlight" size="sm" type="submit">
              Confirm Legitimate Obstacle
            </Button>
          </div>
        </form>
      </Modal>

      {/* Override Missed -> Kept Modal */}
      <Modal
        isOpen={isOverrideModalOpen}
        onClose={() => setIsOverrideModalOpen(false)}
        title="Override Missed Status"
        subtitle="Explain why this promise status is being changed to Kept."
      >
        <form onSubmit={handleConfirmOverride} className="space-y-4">
          <div>
            <label className="block text-xs font-sans text-starlight-lavender mb-1 font-medium">
              Justification for changing status to Kept:
            </label>
            <textarea
              rows={3}
              required
              placeholder="Provide clear reason why the record was previously marked missed..."
              value={overrideExplanation}
              onChange={(e) => setOverrideExplanation(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl p-3 text-xs text-paper-ink font-sans focus:outline-none focus:border-accent"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2 border-t border-white/[0.06]">
            <Button variant="ghost" size="sm" type="button" onClick={() => setIsOverrideModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="starlight" size="sm" type="submit">
              Confirm Override
            </Button>
          </div>
        </form>
      </Modal>

      {/* Audit History Modal */}
      <Modal
        isOpen={isHistoryModalOpen}
        onClose={() => setIsHistoryModalOpen(false)}
        title="Promise Audit Trail"
        subtitle="Immutable audit history for this daily commitment."
      >
        <div className="space-y-3">
          {promise.historyLog && promise.historyLog.length > 0 ? (
            promise.historyLog.map((item, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-sans space-y-1">
                <div className="flex items-center justify-between text-paper-muted">
                  <span className="font-semibold text-starlight-lavender">{item.action}</span>
                  <span className="font-mono text-[10px]">{item.timestamp}</span>
                </div>
                {item.reason && (
                  <p className="text-paper-secondary text-[11px] leading-relaxed">{item.reason}</p>
                )}
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-xs text-paper-muted">
              No audit events recorded yet.
            </div>
          )}
        </div>
      </Modal>
    </Card>
  );
};
