import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Award,
  Flame,
  Info,
} from 'lucide-react';
import { DailyTrackerMetrics } from '../../context/DataContext';
import { Modal } from '../common/Modal';
import { Badge } from '../common/Badge';

interface ScoringRulesModalProps {
  isOpen: boolean;
  onClose: () => void;
  metrics: DailyTrackerMetrics;
  ratingOutOfTen: number;
}

export const ScoringRulesModal: React.FC<ScoringRulesModalProps> = ({
  isOpen,
  onClose,
  metrics,
  ratingOutOfTen,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Scoring Methodology & Diagnostic Philosophy"
      subtitle="How completion is calculated and why telemetry never dictates human worth."
      maxWidth="max-w-2xl"
    >
      <div className="space-y-6 text-xs text-paper-secondary">
        {/* Core Philosophical Declaration */}
        <div className="p-4 rounded-xl bg-accent/15 border border-accent/35 space-y-2">
          <div className="flex items-center gap-2 text-starlight-lavender font-heading font-semibold text-xs">
            <ShieldCheck size={16} />
            <span>Absolute Law: Telemetry vs Self-Worth</span>
          </div>
          <p className="font-sans leading-relaxed text-paper-ink">
            &ldquo;Never equate a low completion score with your worth as a human being. A low score is not a moral failure; it is neutral, objective empirical feedback that friction occurred in your environment or routine. It tells you where energy was lost so you can engineer a tighter protocol tomorrow.&rdquo;
          </p>
        </div>

        {/* The Two Distinct Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-2">
            <span className="text-[11px] font-sans uppercase text-starlight-lavender font-semibold block">
              Metric 1: Completion Percentage ({metrics.percentage}%)
            </span>
            <p className="text-paper-muted leading-relaxed font-sans">
              Calculated dynamically strictly from <strong>applicable, non-skipped items</strong>.
            </p>
            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] font-mono text-[11px] text-paper-ink">
              Formula: (Earned Points: {metrics.earned} / Applicable: {metrics.totalApplicable}) × 100
            </div>
            <p className="text-[11px] text-paper-muted font-sans">
              Skipping an inapplicable tracker gracefully reduces the denominator, ensuring fair scoring without penalties for unneeded categories.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-2">
            <span className="text-[11px] font-sans uppercase text-starlight-lavender font-semibold block">
              Metric 2: Holistic Rating ({ratingOutOfTen ? `${ratingOutOfTen}/10` : 'Unrated'})
            </span>
            <p className="text-paper-muted leading-relaxed font-sans">
              Your sovereign, intuitive assessment of the day as a whole.
            </p>
            <p className="text-paper-muted leading-relaxed font-sans">
              A day where you scored 60% on mechanics but fought through an emotional crisis and kept your single promise may legitimately be an 8/10 day.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
          <h4 className="font-heading font-semibold text-paper-ink text-xs">
            Summary: How to Read Your Daily Score
          </h4>
          <ul className="list-disc pl-4 space-y-1 text-paper-muted font-sans">
            <li><strong>90% - 100%:</strong> Masterful execution across all life domains.</li>
            <li><strong>70% - 89%:</strong> Strong baseline discipline; solid progress locked in.</li>
            <li><strong>50% - 69%:</strong> Mixed execution; friction identified for debrief.</li>
            <li><strong>Below 50%:</strong> Valuable diagnostic day; review what broke down and reset calmly.</li>
          </ul>
        </div>
      </div>
    </Modal>
  );
};
