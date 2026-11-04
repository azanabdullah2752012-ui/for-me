import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { 
  Clock, 
  Zap,
  TrendingDown
} from 'lucide-react';
import { TimeRecord } from '../types';

export const TimeTrackingView: React.FC = () => {
  const { timeRecords, logTimeRecord } = useData();

  const [productiveHrs, setProductiveHrs] = useState(5.5);
  const [neutralHrs, setNeutralHrs] = useState(1.5);
  const [wastedMins, setWastedMins] = useState(45);
  const [screenTime, setScreenTime] = useState(6.5);
  const [distractionText, setDistractionText] = useState('');
  const [savedFeedback, setSavedFeedback] = useState(false);

  const handleSaveAudit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRecord: TimeRecord = {
      date: new Date().toISOString().slice(0, 10),
      productiveMinutes: Math.round(productiveHrs * 60),
      neutralMinutes: Math.round(neutralHrs * 60),
      wastedMinutes: Number(wastedMins),
      screenTimeHours: Number(screenTime),
      distractionNotes: distractionText.trim() || undefined,
    };
    logTimeRecord(newRecord);
    setSavedFeedback(true);
    setTimeout(() => setSavedFeedback(false), 2000);
  };

  const latestRecord = timeRecords[0] || {
    productiveMinutes: 320,
    neutralMinutes: 90,
    wastedMinutes: 40,
    screenTimeHours: 6.5,
  };

  const totalActiveMinutes = latestRecord.productiveMinutes + latestRecord.neutralMinutes + latestRecord.wastedMinutes;
  const focusEfficiency = totalActiveMinutes > 0 
    ? Math.round((latestRecord.productiveMinutes / totalActiveMinutes) * 100) 
    : 0;

  const productivePct = totalActiveMinutes > 0 ? Math.round((latestRecord.productiveMinutes / totalActiveMinutes) * 100) : 0;
  const neutralPct = totalActiveMinutes > 0 ? Math.round((latestRecord.neutralMinutes / totalActiveMinutes) * 100) : 0;
  const wastedPct = totalActiveMinutes > 0 ? Math.round((latestRecord.wastedMinutes / totalActiveMinutes) * 100) : 0;

  return (
    <div className="space-y-8 animate-fadeIn font-sans">
      {/* 1. Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--card-border)] pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Resource Accounting</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Time Audit & Allocation
          </h2>
          <p className="text-xs text-[var(--text-secondary)] mt-1">
            Accounting for your most finite resource: productive output versus idle leakage.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-3.5 py-1.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-sans">
            <span className="text-[var(--text-muted)]">Efficiency: </span>
            <span className="font-bold font-mono text-emerald-400">{focusEfficiency}%</span>
          </div>
          <div className="px-3.5 py-1.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-sans">
            <span className="text-[var(--text-muted)]">Screen: </span>
            <span className="font-bold font-mono text-amber-400">{latestRecord.screenTimeHours}h</span>
          </div>
        </div>
      </div>

      {/* 2. Top Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl creamy-surface space-y-1">
          <div className="flex items-center justify-between text-xs font-medium text-[var(--text-muted)]">
            <span>Productive Focus</span>
            <Zap className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-3xl font-bold font-mono text-emerald-400">
            {Math.round(latestRecord.productiveMinutes / 60 * 10) / 10}h
          </div>
          <span className="text-xs text-[var(--text-secondary)]">
            {productivePct}% of active day
          </span>
        </div>

        <div className="p-5 rounded-2xl creamy-surface space-y-1">
          <div className="flex items-center justify-between text-xs font-medium text-[var(--text-muted)]">
            <span>Neutral / Maintenance</span>
            <Clock className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-3xl font-bold font-mono text-cyan-400">
            {Math.round(latestRecord.neutralMinutes / 60 * 10) / 10}h
          </div>
          <span className="text-xs text-[var(--text-secondary)]">
            {neutralPct}% essentials & breaks
          </span>
        </div>

        <div className="p-5 rounded-2xl creamy-surface space-y-1">
          <div className="flex items-center justify-between text-xs font-medium text-[var(--text-muted)]">
            <span>Distracted / Wasted</span>
            <TrendingDown className="w-4 h-4 text-rose-400" />
          </div>
          <div className="text-3xl font-bold font-mono text-rose-400">
            {latestRecord.wastedMinutes}m
          </div>
          <span className="text-xs text-[var(--text-secondary)]">
            {wastedPct}% low-value leakage
          </span>
        </div>
      </div>

      {/* 3. Visual Time Allocation Bar */}
      <div className="p-6 rounded-3xl creamy-surface space-y-4">
        <div className="flex items-center justify-between text-xs">
          <h3 className="font-semibold text-[var(--text-primary)] uppercase tracking-wider">
            Daily Allocation Split
          </h3>
          <span className="font-mono text-[var(--text-muted)]">
            Total active: {Math.round(totalActiveMinutes / 60 * 10) / 10} hours
          </span>
        </div>

        {/* Proportional Stack Bar */}
        <div className="w-full h-4 rounded-xl bg-[var(--pill-bg)] overflow-hidden flex">
          <div 
            style={{ width: `${productivePct}%` }}
            className="bg-emerald-500 h-full transition-all duration-300"
            title={`Productive: ${productivePct}%`}
          />
          <div 
            style={{ width: `${neutralPct}%` }}
            className="bg-cyan-500 h-full transition-all duration-300"
            title={`Neutral: ${neutralPct}%`}
          />
          <div 
            style={{ width: `${wastedPct}%` }}
            className="bg-rose-500 h-full transition-all duration-300"
            title={`Wasted: ${wastedPct}%`}
          />
        </div>

        <div className="flex flex-wrap items-center gap-6 pt-1 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-md bg-emerald-500" />
            <span className="text-[var(--text-primary)] font-medium">Productive ({productivePct}%)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-md bg-cyan-500" />
            <span className="text-[var(--text-primary)] font-medium">Neutral ({neutralPct}%)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-md bg-rose-500" />
            <span className="text-[var(--text-primary)] font-medium">Wasted ({wastedPct}%)</span>
          </div>
        </div>
      </div>

      {/* 4. Log Daily Time Audit Form */}
      <div className="p-6 rounded-3xl creamy-surface space-y-4">
        <h3 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider border-b border-[var(--card-border)] pb-3">
          Update Today's Time Allocation
        </h3>

        <form onSubmit={handleSaveAudit} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div>
              <label className="text-[var(--text-muted)] block mb-1">Productive Focus (Hours)</label>
              <input
                type="number"
                step="0.5"
                min="0"
                max="16"
                value={productiveHrs}
                onChange={(e) => setProductiveHrs(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-[var(--text-primary)]"
              />
            </div>

            <div>
              <label className="text-[var(--text-muted)] block mb-1">Neutral / Chores (Hours)</label>
              <input
                type="number"
                step="0.5"
                min="0"
                max="12"
                value={neutralHrs}
                onChange={(e) => setNeutralHrs(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-[var(--text-primary)]"
              />
            </div>

            <div>
              <label className="text-[var(--text-muted)] block mb-1">Wasted Time (Minutes)</label>
              <input
                type="number"
                step="5"
                min="0"
                max="600"
                value={wastedMins}
                onChange={(e) => setWastedMins(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-[var(--text-primary)]"
              />
            </div>

            <div>
              <label className="text-[var(--text-muted)] block mb-1">Total Screen Time (Hours)</label>
              <input
                type="number"
                step="0.5"
                min="0"
                max="24"
                value={screenTime}
                onChange={(e) => setScreenTime(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-[var(--text-primary)]"
              />
            </div>
          </div>

          <div>
            <label className="text-[var(--text-muted)] block mb-1">Distraction Context / Trigger</label>
            <input
              type="text"
              placeholder="e.g. Lost 30m doomscrolling on social media before starting math study block."
              value={distractionText}
              onChange={(e) => setDistractionText(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)]"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-[11px] text-emerald-400 font-sans">
              {savedFeedback && '✓ Time audit logged to ledger.'}
            </span>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
            >
              Log Time Record
            </button>
          </div>
        </form>
      </div>

      {/* 5. Historical Time Audit Ledger */}
      <div className="p-6 rounded-3xl creamy-surface space-y-4">
        <h3 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider border-b border-[var(--card-border)] pb-3">
          Historical Time Records
        </h3>

        <div className="space-y-2">
          {timeRecords.map((rec) => {
            const tot = rec.productiveMinutes + rec.neutralMinutes + rec.wastedMinutes;
            const eff = tot > 0 ? Math.round((rec.productiveMinutes / tot) * 100) : 0;

            return (
              <div
                key={rec.date}
                className="p-3.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] flex items-center justify-between text-xs"
              >
                <div>
                  <span className="font-mono font-bold text-[var(--text-primary)] block">{rec.date}</span>
                  <span className="text-[11px] text-[var(--text-muted)]">
                    {Math.round(rec.productiveMinutes / 60 * 10) / 10}h Focus · {rec.wastedMinutes}m Leakage · {rec.screenTimeHours}h Screen
                  </span>
                  {rec.distractionNotes && (
                    <p className="text-[10px] text-amber-400/80 mt-0.5">Note: {rec.distractionNotes}</p>
                  )}
                </div>

                <div className="text-right">
                  <span className={`font-mono font-bold ${eff >= 75 ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {eff}% Efficiency
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
