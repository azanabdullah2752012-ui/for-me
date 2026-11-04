import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { 
  ShieldAlert, 
  Dumbbell, 
  Flame, 
  CheckCircle2, 
  AlertTriangle, 
  Check, 
  Sliders, 
  Plus
} from 'lucide-react';

export const AccountabilityView: React.FC = () => {
  const { 
    accountabilityIncidents, 
    addAccountabilityIncident, 
    approveIncident, 
    completeIncident, 
    adjustIncidentTarget 
  } = useData();

  const [showLogModal, setShowLogModal] = useState(false);
  const [targetName, setTargetName] = useState('Deep Study Target');
  const [targetExpected, setTargetExpected] = useState('3 hours focused');
  const [actualAchieved, setActualAchieved] = useState('1 hour');
  const [cause, setCause] = useState('Procrastination / Phone Distraction');
  const [punishmentType, setPunishmentType] = useState<'pushups' | 'pullups' | 'workout' | 'cold_shower'>('pushups');
  const [punishmentQuantity, setPunishmentQuantity] = useState(50);

  const handleCreateIncident = (e: React.FormEvent) => {
    e.preventDefault();
    let description = '';
    let unit = '';

    if (punishmentType === 'pushups') {
      description = `${punishmentQuantity} strict push-ups (3 sets) with deliberate chest-to-deck cadence`;
      unit = 'push-ups';
    } else if (punishmentType === 'pullups') {
      description = `${punishmentQuantity} dead-hang strict pull-ups`;
      unit = 'pull-ups';
    } else if (punishmentType === 'workout') {
      description = `${punishmentQuantity} minute high-intensity bodyweight circuit (Burpees, Squats, Planks)`;
      unit = 'minutes';
    } else {
      description = '3-minute ice-cold shower reset + no screens for remainder of night';
      unit = 'minutes';
    }

    addAccountabilityIncident({
      date: new Date().toISOString().slice(0, 10),
      targetName,
      targetExpected,
      actualAchieved,
      cause,
      prescribedConsequence: {
        type: punishmentType,
        description,
        quantity: punishmentQuantity,
        unit,
      }
    });

    setShowLogModal(false);
  };

  const pendingReview = accountabilityIncidents.filter((i) => i.status === 'pending_review');
  const approvedActive = accountabilityIncidents.filter((i) => i.status === 'approved');
  const completedIncidents = accountabilityIncidents.filter((i) => i.status === 'completed');

  return (
    <div className="space-y-8 animate-fadeIn font-sans">
      {/* 1. Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--card-border)] pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
            <span>Uncompromising Discipline</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Accountability & Physical Consequences
          </h2>
          <p className="text-xs text-[var(--text-secondary)] mt-1">
            Missed targets require honest cause analysis and physical repayment. Discipline over comfort.
          </p>
        </div>

        <button
          onClick={() => setShowLogModal(true)}
          className="self-start sm:self-auto px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold flex items-center gap-2 shadow-sm transition-all cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Log Missed Target</span>
        </button>
      </div>

      {/* 2. Philosophy Banner */}
      <div className="p-5 rounded-2xl bg-rose-500/10 border border-rose-500/20 space-y-1">
        <h3 className="text-xs font-bold text-rose-300 uppercase tracking-wider flex items-center gap-1.5">
          <Flame className="w-4 h-4" />
          The Rule of Constructive Physical Consequence
        </h3>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
          When a commitment is broken, passive excuses lead to atrophy. A physical consequence—push-ups, pull-ups, or an intense workout circuit—imposes temporary physical strain that burns away inertia while building long-term strength and capability.
        </p>
      </div>

      {/* 3. Section: Pending User Review (Requires Explicit Approval) */}
      {pendingReview.length > 0 && (
        <div className="p-6 rounded-3xl creamy-surface space-y-4">
          <div className="flex items-center justify-between border-b border-[var(--card-border)] pb-3">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <h3 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider">
                Awaiting User Approval ({pendingReview.length})
              </h3>
            </div>
            <span className="text-[11px] text-amber-400 font-mono">Approval Required</span>
          </div>

          <div className="space-y-4">
            {pendingReview.map((inc) => (
              <div key={inc.id} className="p-5 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-[var(--text-muted)] block">{inc.date}</span>
                    <h4 className="text-sm font-bold text-[var(--text-primary)]">{inc.targetName}</h4>
                    <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                      Expected: <strong className="text-[var(--text-primary)]">{inc.targetExpected}</strong> · Actual: <span className="text-rose-400 font-bold">{inc.actualAchieved}</span>
                    </p>
                    {inc.cause && (
                      <p className="text-[11px] text-amber-400/90 mt-1">Cause: {inc.cause}</p>
                    )}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black/25 border border-rose-500/30 space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-rose-300 block font-bold">
                    Prescribed Physical Consequence
                  </span>
                  <p className="text-xs text-[var(--text-primary)] font-semibold flex items-center gap-2">
                    <Dumbbell className="w-4 h-4 text-rose-400" />
                    <span>{inc.prescribedConsequence.description}</span>
                  </p>
                </div>

                {/* Actions: Require User Approval */}
                <div className="flex flex-wrap items-center gap-2.5 pt-1">
                  <button
                    onClick={() => approveIncident(inc.id)}
                    className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Approve Consequence & Commit</span>
                  </button>

                  <button
                    onClick={() => adjustIncidentTarget(inc.id)}
                    className="px-3.5 py-2 rounded-xl bg-[var(--pill-bg)] hover:bg-white/[0.08] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--card-border)] text-xs font-medium flex items-center gap-1.5 cursor-pointer"
                  >
                    <Sliders className="w-3.5 h-3.5" />
                    <span>Adjust Unrealistic Target</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. Active Committed Challenges */}
      <div className="p-6 rounded-3xl creamy-surface space-y-4">
        <div className="flex items-center justify-between border-b border-[var(--card-border)] pb-3">
          <div className="flex items-center gap-2">
            <Dumbbell className="w-4 h-4 text-rose-400" />
            <h3 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider">
              Active Physical Challenges ({approvedActive.length})
            </h3>
          </div>
          <span className="text-[11px] text-[var(--text-muted)] font-mono">Execute & Check Off</span>
        </div>

        {approvedActive.length === 0 ? (
          <p className="text-xs text-[var(--text-muted)] py-4 text-center">
            No active penalties right now. Keep your standards locked in.
          </p>
        ) : (
          <div className="space-y-3">
            {approvedActive.map((inc) => (
              <div key={inc.id} className="p-4 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-rose-500/20 text-rose-300 font-bold">
                      ACTIVE DEBT
                    </span>
                    <span className="text-xs font-semibold text-[var(--text-primary)]">{inc.targetName}</span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] font-medium">
                    {inc.prescribedConsequence.description}
                  </p>
                </div>

                <button
                  onClick={() => completeIncident(inc.id)}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer self-start sm:self-auto shrink-0"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Mark Executed & Cleared</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 5. Completed Archive */}
      <div className="p-6 rounded-3xl creamy-surface space-y-4">
        <div className="flex items-center justify-between border-b border-[var(--card-border)] pb-3">
          <h3 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider">
            Resolved & Repaid Incidents ({completedIncidents.length})
          </h3>
          <span className="text-xs font-mono text-[var(--text-muted)]">Ledger Archive</span>
        </div>

        <div className="space-y-2">
          {completedIncidents.map((inc) => (
            <div key={inc.id} className="p-3 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] flex items-center justify-between text-xs">
              <div>
                <span className="font-semibold text-[var(--text-primary)] block">{inc.targetName}</span>
                <span className="text-[10px] text-[var(--text-muted)] font-mono">{inc.prescribedConsequence.description}</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/25">
                Completed
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Modal: Log Missed Target */}
      {showLogModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowLogModal(false)} />
          <div className="relative z-10 w-full max-w-md p-6 rounded-3xl creamy-surface space-y-4 shadow-2xl">
            <h3 className="text-base font-semibold text-[var(--text-primary)]">Log Missed Commitment</h3>
            <form onSubmit={handleCreateIncident} className="space-y-3 text-xs">
              <div>
                <label className="text-[var(--text-muted)] block mb-1">Target / Commitment Name</label>
                <input
                  type="text"
                  required
                  value={targetName}
                  onChange={(e) => setTargetName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-[var(--text-primary)]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[var(--text-muted)] block mb-1">Expected Standard</label>
                  <input
                    type="text"
                    required
                    value={targetExpected}
                    onChange={(e) => setTargetExpected(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-[var(--text-primary)]"
                  />
                </div>
                <div>
                  <label className="text-[var(--text-muted)] block mb-1">Actual Result</label>
                  <input
                    type="text"
                    required
                    value={actualAchieved}
                    onChange={(e) => setActualAchieved(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-[var(--text-primary)]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[var(--text-muted)] block mb-1">Root Cause / Excuse</label>
                <input
                  type="text"
                  required
                  value={cause}
                  onChange={(e) => setCause(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-[var(--text-primary)]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[var(--text-muted)] block mb-1">Consequence Type</label>
                  <select
                    value={punishmentType}
                    onChange={(e) => setPunishmentType(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-[var(--text-primary)]"
                  >
                    <option value="pushups" className="bg-[#121326] text-white">Strict Push-ups</option>
                    <option value="pullups" className="bg-[#121326] text-white">Strict Pull-ups</option>
                    <option value="workout" className="bg-[#121326] text-white">Bodyweight Circuit</option>
                    <option value="cold_shower" className="bg-[#121326] text-white">Cold Shower / Screen Ban</option>
                  </select>
                </div>
                <div>
                  <label className="text-[var(--text-muted)] block mb-1">Reps / Minutes</label>
                  <input
                    type="number"
                    min="10"
                    max="500"
                    value={punishmentQuantity}
                    onChange={(e) => setPunishmentQuantity(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-[var(--text-primary)]"
                  />
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowLogModal(false)}
                  className="flex-1 py-2 rounded-xl bg-[var(--pill-bg)] text-[var(--text-secondary)] font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-medium shadow-sm"
                >
                  Prescribe Consequence
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
