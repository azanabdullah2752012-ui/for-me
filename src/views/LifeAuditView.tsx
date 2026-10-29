import React, { useState, useMemo, useEffect } from 'react';
import {
  Compass,
  Save,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Layers,
  Check,
} from 'lucide-react';
import { LifeAuditAssessmentArea, MonthlyLifeAudit } from '../types';
import { useData } from '../context/DataContext';
import { PageHero } from '../components/common/PageHero';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { sound } from '../audio/sound';

export const LifeAuditView: React.FC = () => {
  const {
    currentLifeAuditAreas,
    monthlyLifeAudits,
    saveMonthlyLifeAudit,
    saveLifeAuditAreas,
  } = useData();

  const [selectedMonth, setSelectedMonth] = useState<string>(() => {
    return new Date().toISOString().slice(0, 7);
  });

  const [savedSuccess, setSavedSuccess] = useState(false);

  const prevMonth = () => {
    sound.tick();
    const [year, m] = selectedMonth.split('-').map(Number);
    const d = new Date(year, m - 2, 1);
    setSelectedMonth(d.toISOString().slice(0, 7));
  };

  const nextMonth = () => {
    sound.tick();
    const [year, m] = selectedMonth.split('-').map(Number);
    const d = new Date(year, m, 1);
    setSelectedMonth(d.toISOString().slice(0, 7));
  };

  const jumpToCurrentMonth = () => {
    sound.tick();
    setSelectedMonth(new Date().toISOString().slice(0, 7));
  };

  const formattedMonthLabel = useMemo(() => {
    try {
      const [year, m] = selectedMonth.split('-').map(Number);
      const d = new Date(year, m - 1, 1);
      return d.toLocaleDateString(undefined, { month: 'long', year: 'numeric' });
    } catch {
      return selectedMonth;
    }
  }, [selectedMonth]);

  const existingMonthAudit = useMemo(() => {
    return monthlyLifeAudits.find((a) => a.month === selectedMonth);
  }, [monthlyLifeAudits, selectedMonth]);

  const previousMonthAudit = useMemo(() => {
    const [year, m] = selectedMonth.split('-').map(Number);
    const prevDate = new Date(year, m - 2, 1);
    const prevMonthStr = prevDate.toISOString().slice(0, 7);
    return monthlyLifeAudits.find((a) => a.month === prevMonthStr);
  }, [monthlyLifeAudits, selectedMonth]);

  const [areas, setAreas] = useState<LifeAuditAssessmentArea[]>(() => {
    if (existingMonthAudit && existingMonthAudit.areas && existingMonthAudit.areas.length > 0) {
      return existingMonthAudit.areas;
    }
    return currentLifeAuditAreas;
  });

  const [generalNotes, setGeneralNotes] = useState<string>(
    existingMonthAudit?.generalNotes || ''
  );

  useEffect(() => {
    if (existingMonthAudit && existingMonthAudit.areas && existingMonthAudit.areas.length > 0) {
      setAreas(existingMonthAudit.areas);
      setGeneralNotes(existingMonthAudit.generalNotes || '');
    } else {
      setAreas(currentLifeAuditAreas);
      setGeneralNotes('');
    }
  }, [existingMonthAudit, currentLifeAuditAreas, selectedMonth]);

  const averageScore = useMemo(() => {
    if (areas.length === 0) return 0;
    const total = areas.reduce((acc, a) => acc + (a.score || 0), 0);
    return Math.round((total / areas.length) * 10) / 10;
  }, [areas]);

  const prevAverageScore = useMemo(() => {
    if (!previousMonthAudit || !previousMonthAudit.areas || previousMonthAudit.areas.length === 0) return null;
    const total = previousMonthAudit.areas.reduce((acc, a) => acc + (a.score || 0), 0);
    return Math.round((total / previousMonthAudit.areas.length) * 10) / 10;
  }, [previousMonthAudit]);

  const delta = prevAverageScore !== null ? Math.round((averageScore - prevAverageScore) * 10) / 10 : null;

  const handleUpdateAreaField = (id: string, field: keyof LifeAuditAssessmentArea, value: any) => {
    setAreas((prev) =>
      prev.map((a) => (a.id === id ? { ...a, [field]: value } : a))
    );
  };

  const handleSaveAll = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    sound.complete();

    saveMonthlyLifeAudit({
      month: selectedMonth,
      overallScore: averageScore,
      areas,
      generalNotes,
    });
    saveLifeAuditAreas(areas);

    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-16">
      {/* 1. EDITORIAL HEADER */}
      <PageHero
        title="Comprehensive Life Audit (11 Pillars)"
        subtitle="Unsparing holistic assessment repeated monthly across 11 essential domains: current reality, evidence, desired standard, and next action."
        kicker="MY REVIEWS • LIFE EQUILIBRIUM"
        badgeLines={['UNSPARING AUDIT.', 'EVIDENCE BASED.', 'CONCRETE ACTION.']}
        actions={
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center bg-paper-elevated border border-paper-border rounded-lg text-xs font-sans">
              <button
                onClick={prevMonth}
                className="p-1.5 text-paper-muted hover:text-paper-ink rounded-l-lg transition-colors"
                title="Previous Month"
              >
                <ChevronLeft size={14} />
              </button>
              <span className="px-3 py-1 font-sans text-xs font-medium text-paper-ink">
                {formattedMonthLabel}
              </span>
              <button
                onClick={nextMonth}
                className="p-1.5 text-paper-muted hover:text-paper-ink rounded-r-lg transition-colors"
                title="Next Month"
              >
                <ChevronRight size={14} />
              </button>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={jumpToCurrentMonth}
              className="text-xs font-sans"
            >
              Current Month
            </Button>

            <Button
              variant="primary"
              size="sm"
              onClick={() => handleSaveAll()}
              className="flex items-center gap-1.5 text-xs font-sans"
            >
              <Save size={13} />
              <span>{existingMonthAudit ? 'Update Audit' : 'Save Life Audit'}</span>
            </Button>
          </div>
        }
      />

      {/* 2. EQUILIBRIUM SCORECARD */}
      <div className="p-6 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <span className="text-xs font-sans uppercase tracking-[0.16em] text-paper-muted font-semibold block">
              Life Equilibrium Index ({formattedMonthLabel})
            </span>
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-heading font-bold tracking-tight text-paper-ink">
                {averageScore} <span className="text-sm font-sans text-paper-muted font-normal">/ 10</span>
              </span>
              {delta !== null && (
                <span className={`text-xs font-sans font-medium ${delta >= 0 ? 'text-forest' : 'text-amber-800 dark:text-amber-300'}`}>
                  {delta >= 0 ? `+${delta}` : delta} vs last month
                </span>
              )}
            </div>
          </div>

          {savedSuccess && (
            <span className="text-xs font-sans text-accent flex items-center gap-1">
              <Check size={13} />
              Audit saved to monthly records
            </span>
          )}
        </div>

        {/* 11 Pillars quick status strip */}
        <div className="pt-3 border-t border-paper-border grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 text-xs font-sans">
          {areas.map((a) => (
            <div
              key={a.id}
              className="p-2 rounded-lg bg-paper-elevated border border-paper-border text-center space-y-0.5"
            >
              <span className="text-[10px] text-paper-muted truncate block">
                {a.categoryNumber}. {a.name.split(' ')[0]}
              </span>
              <span className="font-heading font-bold text-paper-ink text-sm">
                {a.score}/10
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. THE 11 EDITABLE ASSESSMENT DOMAINS */}
      <div className="space-y-6">
        {areas.map((area) => (
          <div
            key={area.id}
            className="p-5 md:p-6 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-4"
          >
            {/* Header: Area Title & 1-10 Stepper */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-paper-border">
              <div className="space-y-0.5">
                <span className="text-[10px] uppercase font-sans tracking-[0.18em] text-accent font-semibold block">
                  Pillar {area.categoryNumber} of 11
                </span>
                <h3 className="text-base font-heading font-semibold text-paper-ink">
                  {area.name}
                </h3>
              </div>

              {/* 1-10 Score selector */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-xs font-sans text-paper-muted mr-1">Score:</span>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => {
                      sound.tick();
                      handleUpdateAreaField(area.id, 'score', num);
                    }}
                    className={`w-6 h-6 rounded text-xs font-sans font-medium transition-colors ${
                      area.score === num
                        ? 'bg-accent text-white font-bold'
                        : 'bg-paper-elevated text-paper-secondary hover:text-paper-ink hover:bg-paper-hover border border-paper-border'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Assessment Grid: 4 fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-paper-muted mb-1 font-medium">
                  1. Current Assessment
                </label>
                <textarea
                  rows={2}
                  value={area.currentAssessment}
                  onChange={(e) => handleUpdateAreaField(area.id, 'currentAssessment', e.target.value)}
                  placeholder="Honest current reality in this domain..."
                  className="w-full bg-paper-elevated border border-paper-border rounded-lg p-2.5 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent resize-none"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-paper-muted mb-1 font-medium">
                  2. Honest Evidence / Data
                </label>
                <textarea
                  rows={2}
                  value={area.evidence}
                  onChange={(e) => handleUpdateAreaField(area.id, 'evidence', e.target.value)}
                  placeholder="Facts, recorded habits, or specific occurrences..."
                  className="w-full bg-paper-elevated border border-paper-border rounded-lg p-2.5 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent resize-none"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-paper-muted mb-1 font-medium">
                  3. Desired Standard &amp; Change
                </label>
                <textarea
                  rows={2}
                  value={area.desiredChange}
                  onChange={(e) => handleUpdateAreaField(area.id, 'desiredChange', e.target.value)}
                  placeholder="The standard you choose to uphold moving forward..."
                  className="w-full bg-paper-elevated border border-paper-border rounded-lg p-2.5 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent resize-none"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-accent mb-1 font-medium">
                  4. Immediate Next Action
                </label>
                <textarea
                  rows={2}
                  value={area.nextAction}
                  onChange={(e) => handleUpdateAreaField(area.id, 'nextAction', e.target.value)}
                  placeholder="Single concrete step to execute this week..."
                  className="w-full bg-paper-elevated border border-paper-border rounded-lg p-2.5 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent resize-none"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* General Notes for Month */}
      <div className="p-6 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-3">
        <label className="block text-xs font-sans uppercase tracking-wider text-paper-muted font-medium">
          General Monthly Life Synthesis &amp; Notes
        </label>
        <textarea
          rows={3}
          value={generalNotes}
          onChange={(e) => setGeneralNotes(e.target.value)}
          placeholder="Overall reflections on balance, priorities, and life direction for this month..."
          className="w-full bg-paper-elevated border border-paper-border rounded-lg p-3 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent resize-none leading-relaxed"
        />
        <div className="flex justify-end pt-2">
          <Button variant="primary" size="sm" onClick={() => handleSaveAll()}>
            Save Complete Life Audit
          </Button>
        </div>
      </div>
    </div>
  );
};