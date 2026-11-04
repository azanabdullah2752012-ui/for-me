import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { 
  ShieldAlert, 
  Dumbbell, 
  CheckCircle2, 
  AlertTriangle, 
  Check, 
  Sliders, 
  Plus,
  Compass,
  Heart
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
  const [cause, setCause] = useState('Fatigue slump / Unplanned browsing');
  const [resetType, setResetType] = useState<'walk' | 'stretch' | 'hydration_reset' | 'reschedule_study' | 'pushups' | 'pullups'>('walk');
  const [resetQuantity, setResetQuantity] = useState(15);

  const handleCreateIncident = (e: React.FormEvent) => {
    e.preventDefault();
    let description = '';
    let unit = '';

    if (resetType === 'walk') {
      description = `Optional ${resetQuantity}-minute outdoor sunlight walk without phone to clear mental fog`;
      unit = 'minutes';
    } else if (resetType === 'stretch') {
      description = `Gentle ${resetQuantity}-minute spine & hip mobility flow`;
      unit = 'minutes';
    } else if (resetType === 'hydration_reset') {
      description = 'Drink 500ml of water and take 5 deep diaphragm breaths';
      unit = 'reset';
    } else if (resetType === 'reschedule_study') {
      description = 'Protect and reschedule missed focus block for tomorrow morning';
      unit = 'session';
    } else if (resetType === 'pushups') {
      description = `Moderate ${resetQuantity} push-ups with deliberate breathing to re-energize`;
      unit = 'reps';
    } else {
      description = `Moderate ${resetQuantity} dead-hang pull-ups`;
      unit = 'reps';
    }

    addAccountabilityIncident({
      date: new Date().toISOString().slice(0, 10),
      targetName,
      targetExpected,
      actualAchieved,
      cause,
      prescribedConsequence: {
        type: resetType,
        description,
        quantity: resetQuantity,
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
            <span>Honest Accountability</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Accountability & Constructive Reset
          </h2>
          <p className="text-xs text-[var(--text-secondary)] mt-1">
            Review missed targets, analyze root causes, and execute moderate, user-controlled recovery actions.
          </p>
        </div>

        <button
          onClick={() => setShowLogModal(true)}
          className="self-start sm:self-auto px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold flex items-center gap-2 shadow-sm transition-all cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Review Missed Target</span>
        </button>
      </div>

      {/* 2. Philosophy Banner (Constructive Reset, Zero Deprivation) */}
      <div className="p-5 rounded-3xl bg-rose-500/10 border border-rose-500/20 space-y-1.5">
        <h3 className="text-xs font-bold text-rose-300 uppercase tracking-wider flex items-center gap-1.5">
          <Heart className="w-4 h-4" />
          Constructive Reset Principle (No Punishment, No Deprivation)
        </h3>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
          Physical activity is an optional, restorative reset to dispel inertia and restore focus—never a punishment. Rest, hydration, and nutrition are non-negotiable fundamentals. When a target is missed, review the cause honestly, adjust expectations when needed, and take a moderate reset action to reclaim your momentum.
        </p>
      </div>

      {/* 3. Section: Pending User Review (Requires Explicit Approval) */}
      {pendingReview.length > 0 && (
        <div className="p-6 rounded-3xl creamy-surface space-y-4">
          <div className="flex items-center justify-between border-b border-[var(--card-border)] pb-3">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <h3 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider">
                Awaiting Review ({pendingReview.length})
              </h3>
            </div>
            <span className="text-[11px] text-amber-400 font-mono">User Consent Required</span>
          </div>

          <div className="space-y-3">
            {pendingReview.map((incident) => (
              <div 
                key={incident.id} 
                className="p-4 rounded-2xl bg-[var(--pill-bg)] border border-amber-500/30 space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="font-semibold text-xs text-[var(--text-primary)]">{incident.targetName}</span>
                    <p className="text-[11px] text-[var(--text-muted)] mt-0.5">
                      Expected: <strong className="text-[var(--text-primary)]">{incident.targetExpected}</strong> • Achieved: <span className="text-rose-400">{incident.actualAchieved}</span>
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">{incident.date}</span>
                </div>

                {incident.cause && (
                  <p className="text-xs text-[var(--text-secondary)] bg-[var(--surface-bg)] p-2.5 rounded-xl border border-[var(--card-border)]">
                    <strong className="text-[var(--text-muted)]">Reported Cause:</strong> {incident.cause}
                  </p>
                )}

                <div className="p-3 rounded-xl bg-violet-600/10 border border-violet-500/20 text-xs text-violet-300 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-violet-400 shrink-0" />
                    <span>{incident.prescribedConsequence.description}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={() => approveIncident(incident.id)}
                    className="flex-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Accept Constructive Reset</span>
                  </button>

                  <button
                    onClick={() => adjustIncidentTarget(incident.id)}
                    className="px-4 py-2 rounded-xl bg-[var(--surface-bg)] border border-[var(--card-border)] text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Sliders className="w-3.5 h-3.5" />
                    <span>Adjust Target Instead</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. Section: Approved Active Resets */}
      <div className="p-6 rounded-3xl creamy-surface space-y-4">
        <div className="flex items-center justify-between border-b border-[var(--card-border)] pb-3">
          <div className="flex items-center gap-2">
            <Dumbbell className="w-4 h-4 text-violet-400" />
            <h3 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider">
              Approved Active Recovery Actions ({approvedActive.length})
            </h3>
          </div>
          <span className="text-[11px] text-violet-400 font-mono">Ready to Complete</span>
        </div>

        {approvedActive.length === 0 ? (
          <div className="py-6 text-center text-xs text-[var(--text-muted)]">
            No outstanding recovery actions. All commitments currently met or settled!
          </div>
        ) : (
          <div className="space-y-3">
            {approvedActive.map((incident) => (
              <div 
                key={incident.id} 
                className="p-4 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-xs text-[var(--text-primary)]">{incident.targetName}</span>
                    <span className="px-2 py-0.5 rounded-md bg-violet-600/20 text-violet-300 font-mono text-[10px]">
                      {incident.prescribedConsequence.quantity} {incident.prescribedConsequence.unit}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)]">
                    {incident.prescribedConsequence.description}
                  </p>
                </div>

                <button
                  onClick={() => completeIncident(incident.id)}
                  className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shrink-0 cursor-pointer"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Mark Reset Complete</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 5. Section: Settled / Completed History */}
      <div className="p-6 rounded-3xl creamy-surface space-y-4">
        <div className="flex items-center justify-between border-b border-[var(--card-border)] pb-3">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <h3 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider">
              Settled Incidents & Adjustments ({completedIncidents.length})
            </h3>
          </div>
          <span className="text-[11px] text-[var(--text-muted)] font-mono">Historical Record</span>
        </div>

        <div className="space-y-2.5">
          {completedIncidents.map((incident) => (
            <div 
              key={incident.id} 
              className="p-3.5 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] flex items-center justify-between text-xs text-[var(--text-muted)]"
            >
              <div>
                <span className="font-semibold text-[var(--text-primary)]">{incident.targetName}</span>
                <span className="ml-2">({incident.prescribedConsequence.description})</span>
              </div>
              <span className="font-mono text-emerald-400 text-[11px]">✓ Settled</span>
            </div>
          ))}
        </div>
      </div>

      {/* Log Missed Target Modal */}
      {showLogModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowLogModal(false)} />
          <form onSubmit={handleCreateIncident} className="relative z-10 w-full max-w-lg p-6 rounded-3xl creamy-surface shadow-2xl space-y-4">
            <h3 className="text-base font-semibold text-[var(--text-primary)] pb-2 border-b border-[var(--card-border)]">
              Log Missed Target & Choose Reset Action
            </h3>

            <div className="space-y-1.5">
              <label className="text-[11px] text-[var(--text-muted)]">Target Name:</label>
              <input
                type="text"
                value={targetName}
                onChange={(e) => setTargetName(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[11px] text-[var(--text-muted)]">Expected Target:</label>
                <input
                  type="text"
                  value={targetExpected}
                  onChange={(e) => setTargetExpected(e.target.value)}
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] text-[var(--text-muted)]">Actual Achieved:</label>
                <input
                  type="text"
                  value={actualAchieved}
                  onChange={(e) => setActualAchieved(e.target.value)}
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] text-[var(--text-muted)]">Root Cause Analysis:</label>
              <input
                type="text"
                value={cause}
                onChange={(e) => setCause(e.target.value)}
                placeholder="Why was the target missed? (Fatigue, underestimation, distraction?)"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-[11px] text-[var(--text-muted)]">Recovery Action Type:</label>
                <select
                  value={resetType}
                  onChange={(e) => setResetType(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
                >
                  <option value="walk">Sunlight Walk (Mins)</option>
                  <option value="stretch">Full-Body Mobility (Mins)</option>
                  <option value="hydration_reset">Hydration & Breathing</option>
                  <option value="reschedule_study">Reschedule Focus Block</option>
                  <option value="pushups">Moderate Push-ups (Reps)</option>
                  <option value="pullups">Strict Pull-ups (Reps)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] text-[var(--text-muted)]">Quantity / Duration:</label>
                <input
                  type="number"
                  value={resetQuantity}
                  onChange={(e) => setResetQuantity(Number(e.target.value))}
                  min="1"
                  max="120"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
                />
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowLogModal(false)}
                className="flex-1 py-2.5 rounded-xl bg-[var(--pill-bg)] text-[var(--text-secondary)] text-xs font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold"
              >
                Submit for Approval
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
