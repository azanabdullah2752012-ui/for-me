import React, { useState, useMemo, useEffect } from 'react';
import {
  Compass,
  Save,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Check,
  TrendingUp,
} from 'lucide-react';
import { LifeAuditAssessmentArea } from '../types';
import { useData } from '../context/DataContext';
import { Button } from '../components/common/Button';
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
    <div className="space-y-6 max-w-5xl mx-auto pb-16 animate-fadeIn select-none">
      {/* ================================================================ */}
      {/* 1. CELESTIAL HEADER                                              */}
      {/* ================================================================ */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-white/[0.06]">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[#E56A38] text-base">✦</span>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">
              Life Equilibrium Audit
            </h1>
          </div>
          <p className="text-xs font-sans text-zinc-400 mt-1 max-w-lg">
            Unsparing monthly evaluation across 11 pillars: current reality, evidence, standard, and immediate action.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* Month Navigator */}
          <div className="flex items-center bg-black/40 border border-white/[0.08] rounded-xl text-xs font-sans">
            <button
              onClick={prevMonth}
              className="p-2 text-zinc-400 hover:text-white rounded-l-xl transition-colors"
              title="Previous Month"
            >
              <ChevronLeft size={14} />
            </button>
            <span className="px-3 py-1.5 font-mono text-xs font-semibold text-white">
              {formattedMonthLabel}
            </span>
            <button
              onClick={nextMonth}
              className="p-2 text-zinc-400 hover:text-white rounded-r-xl transition-colors"
              title="Next Month"
            >
              <ChevronRight size={14} />
            </button>
          </div>

          <button
            type="button"
            onClick={jumpToCurrentMonth}
            className="px-3 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-sans text-zinc-300 hover:text-white transition-colors"
          >
            Current Month
          </button>

          <Button
            variant="primary"
            size="sm"
            onClick={() => handleSaveAll()}
            className="flex items-center gap-1.5 text-xs font-sans font-bold bg-[#E56A38] hover:bg-[#D9531E] text-white shadow-[0_0_15px_rgba(229,106,56,0.35)] transition-all"
          >
            <Save size={13} />
            <span>{existingMonthAudit ? 'Update Audit' : 'Save Life Audit'}</span>
          </Button>
        </div>
      </header>

      {/* ================================================================ */}
      {/* 2. EQUILIBRIUM HUD & 11 PILLARS MINI MATRIX                     */}
      {/* ================================================================ */}
      <section className="p-6 rounded-3xl bg-[#0D0F16]/90 border border-white/[0.08] shadow-2xl backdrop-blur-xl space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Compass size={15} className="text-[#E56A38]" />
              <span className="text-xs font-sans font-bold text-zinc-300 uppercase tracking-wider">
                Equilibrium Index • {formattedMonthLabel}
              </span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-mono font-black text-white tracking-tight">
                {averageScore} <span className="text-sm font-sans text-zinc-500 font-normal">/ 10</span>
              </span>
              {delta !== null && (
                <span className={`text-xs font-mono font-bold flex items-center gap-1 ${delta >= 0 ? 'text-emerald-400' : 'text-amber-400'}`}>
                  <TrendingUp size={12} className={delta < 0 ? 'rotate-180' : ''} />
                  <span>{delta >= 0 ? `+${delta}` : delta} vs last month</span>
                </span>
              )}
            </div>
          </div>

          {savedSuccess && (
            <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
              <Check size={13} />
              Audit Saved to Records
            </span>
          )}
        </div>

        {/* 11 Pillars quick status strip */}
        <div className="pt-3 border-t border-white/[0.06] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 text-xs font-sans">
          {areas.map((a) => (
            <div
              key={a.id}
              className="p-2.5 rounded-2xl bg-black/40 border border-white/[0.06] text-center space-y-1"
            >
              <span className="text-[10px] text-zinc-500 truncate block">
                {a.categoryNumber}. {a.name.split(' ')[0]}
              </span>
              <span className="font-mono font-bold text-white text-sm block">
                {a.score}/10
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ================================================================ */}
      {/* 3. THE 11 EDITABLE ASSESSMENT DOMAINS                            */}
      {/* ================================================================ */}
      <div className="space-y-4">
        {areas.map((area) => (
          <div
            key={area.id}
            className="p-5 md:p-6 rounded-3xl bg-[#0D0F16]/90 border border-white/[0.08] shadow-xl backdrop-blur-xl space-y-4"
          >
            {/* Header: Area Title & 1-10 Stepper */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/[0.06]">
              <div className="space-y-0.5">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#E56A38] font-bold block">
                  Pillar {area.categoryNumber} of 11
                </span>
                <h3 className="text-base font-serif font-bold text-white">
                  {area.name}
                </h3>
              </div>

              {/* 1-10 Score selector */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-xs font-sans text-zinc-400 mr-1">Rating:</span>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => {
                      sound.tick();
                      handleUpdateAreaField(area.id, 'score', num);
                    }}
                    className={`w-7 h-7 rounded-xl text-xs font-mono font-bold transition-all ${
                      area.score === num
                        ? 'bg-[#E56A38] text-white shadow-[0_0_10px_rgba(229,106,56,0.4)] scale-105'
                        : 'bg-black/40 text-zinc-400 hover:text-white border border-white/[0.08]'
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
                <label className="block text-[11px] font-sans text-zinc-400 mb-1 font-medium">
                  1. Current Assessment
                </label>
                <textarea
                  rows={2}
                  value={area.currentAssessment}
                  onChange={(e) => handleUpdateAreaField(area.id, 'currentAssessment', e.target.value)}
                  placeholder="Honest current reality in this domain..."
                  className="w-full bg-black/40 border border-white/[0.08] rounded-xl p-3 text-xs font-sans text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[#E56A38] focus:border-[#E56A38] resize-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-sans text-zinc-400 mb-1 font-medium">
                  2. Honest Evidence / Data
                </label>
                <textarea
                  rows={2}
                  value={area.evidence}
                  onChange={(e) => handleUpdateAreaField(area.id, 'evidence', e.target.value)}
                  placeholder="Facts, recorded habits, or specific occurrences..."
                  className="w-full bg-black/40 border border-white/[0.08] rounded-xl p-3 text-xs font-sans text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[#E56A38] focus:border-[#E56A38] resize-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-sans text-zinc-400 mb-1 font-medium">
                  3. Desired Standard &amp; Change
                </label>
                <textarea
                  rows={2}
                  value={area.desiredChange}
                  onChange={(e) => handleUpdateAreaField(area.id, 'desiredChange', e.target.value)}
                  placeholder="The standard you choose to uphold moving forward..."
                  className="w-full bg-black/40 border border-white/[0.08] rounded-xl p-3 text-xs font-sans text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[#E56A38] focus:border-[#E56A38] resize-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-sans text-zinc-300 mb-1 font-medium">
                  4. Immediate Next Action
                </label>
                <textarea
                  rows={2}
                  value={area.nextAction}
                  onChange={(e) => handleUpdateAreaField(area.id, 'nextAction', e.target.value)}
                  placeholder="Single concrete step to execute this week..."
                  className="w-full bg-black/40 border border-white/[0.08] rounded-xl p-3 text-xs font-sans text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[#E56A38] focus:border-[#E56A38] resize-none"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* General Notes for Month */}
      <div className="p-6 rounded-3xl bg-[#0D0F16]/90 border border-white/[0.08] shadow-xl backdrop-blur-xl space-y-3">
        <label className="block text-xs font-sans uppercase tracking-wider text-zinc-400 font-bold">
          Monthly Life Synthesis &amp; Strategic Notes
        </label>
        <textarea
          rows={3}
          value={generalNotes}
          onChange={(e) => setGeneralNotes(e.target.value)}
          placeholder="Overall reflections on balance, priorities, and life direction for this month..."
          className="w-full bg-black/40 border border-white/[0.08] rounded-2xl p-4 text-xs font-sans text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[#E56A38] resize-none leading-relaxed"
        />
        <div className="flex justify-end pt-2">
          <Button
            variant="primary"
            size="sm"
            onClick={() => handleSaveAll()}
            className="bg-[#E56A38] hover:bg-[#D9531E] text-white font-bold"
          >
            Save Complete Life Audit
          </Button>
        </div>
      </div>
    </div>
  );
};
