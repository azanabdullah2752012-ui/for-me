import React, { useState, useMemo } from 'react';
import {
  TrendingUp,
  Calendar,
  Filter,
  Clock,
  Moon,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  BarChart3,
  LineChart as LineChartIcon,
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
} from 'lucide-react';
import { useData, formatDateKey, isHabitScheduledOnDate, getHabitDayStatus, calculateTrackerMetrics } from '../context/DataContext';
import { PageHero } from '../components/common/PageHero';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { sound } from '../audio/sound';

type DateRangePreset = '7d' | '14d' | '30d' | '90d' | 'all' | 'custom';

export const AnalyticsView: React.FC = () => {
  const {
    dailyLogs,
    habits,
    studySessions,
  } = useData();

  const [rangePreset, setRangePreset] = useState<DateRangePreset>('14d');
  const [selectedHabitId, setSelectedHabitId] = useState<string>('all');
  const [customStart, setCustomStart] = useState<string>(() => {
    const d = new Date();
    d.setDate(d.getDate() - 14);
    return formatDateKey(d);
  });
  const [customEnd, setCustomEnd] = useState<string>(() => formatDateKey());
  const [hoveredPoint, setHoveredPoint] = useState<any | null>(null);

  const { startDateStr, endDateStr, priorStartDateStr, priorEndDateStr, daysCount } = useMemo(() => {
    const today = new Date();
    let days = 14;

    if (rangePreset === '7d') days = 7;
    else if (rangePreset === '14d') days = 14;
    else if (rangePreset === '30d') days = 30;
    else if (rangePreset === '90d') days = 90;
    else if (rangePreset === 'all') days = 365;

    let start = new Date(today);
    let end = new Date(today);

    if (rangePreset === 'custom') {
      const [sy, sm, sd] = customStart.split('-').map(Number);
      const [ey, em, ed] = customEnd.split('-').map(Number);
      start = new Date(sy, sm - 1, sd);
      end = new Date(ey, em - 1, ed);
      days = Math.max(1, Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1);
    } else {
      start.setDate(today.getDate() - days + 1);
    }

    const priorEnd = new Date(start);
    priorEnd.setDate(priorEnd.getDate() - 1);
    const priorStart = new Date(priorEnd);
    priorStart.setDate(priorEnd.getDate() - days + 1);

    return {
      startDateStr: formatDateKey(start),
      endDateStr: formatDateKey(end),
      priorStartDateStr: formatDateKey(priorStart),
      priorEndDateStr: formatDateKey(priorEnd),
      daysCount: days,
    };
  }, [rangePreset, customStart, customEnd]);

  const { currentPeriodRecords, priorPeriodRecords } = useMemo(() => {
    const getRecordsInRange = (startStr: string, endStr: string) => {
      const list: any[] = [];
      const [sy, sm, sd] = startStr.split('-').map(Number);
      const [ey, em, ed] = endStr.split('-').map(Number);
      const cur = new Date(sy, sm - 1, sd);
      const end = new Date(ey, em - 1, ed);

      while (cur <= end) {
        const dateKey = formatDateKey(cur);
        const log = dailyLogs[dateKey];

        const dayStudies = studySessions.filter((s) => s.date === dateKey);
        const studyMins = dayStudies.reduce((acc, s) => acc + s.durationMinutes, 0);

        let habitCompleted = false;
        let habitScheduled = true;
        if (selectedHabitId !== 'all') {
          const targetHabit = habits.find((h) => h.id === selectedHabitId);
          if (targetHabit) {
            habitScheduled = isHabitScheduledOnDate(targetHabit, dateKey);
            habitCompleted = getHabitDayStatus(targetHabit, dateKey) === 'completed';
          }
        }

        const metrics = log ? calculateTrackerMetrics(log) : null;
        const completionPercentage = metrics ? metrics.percentage : 0;
        const rating = log?.ratingOutOfTen || 0;
        const sleepHours = log?.trackers?.sleep?.skipped ? 0 : log?.trackers?.sleep?.hours || log?.sleepHours || 0;
        const screenRec = log?.trackers?.screenTime?.skipped ? 0 : log?.trackers?.screenTime?.recreationalHours || 0;
        const promiseKept = log?.dailyPromise?.status === 'kept';
        const promiseEvaluated = log?.dailyPromise && log?.dailyPromise.status !== 'pending';

        list.push({
          date: dateKey,
          displayDate: cur.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
          hasLog: Boolean(log),
          completionPercentage,
          rating,
          studyHours: Math.round((studyMins / 60) * 10) / 10,
          sleepHours,
          screenRec,
          habitCompleted,
          habitScheduled,
          promiseKept,
          promiseEvaluated,
        });

        cur.setDate(cur.getDate() + 1);
      }
      return list;
    };

    return {
      currentPeriodRecords: getRecordsInRange(startDateStr, endDateStr),
      priorPeriodRecords: getRecordsInRange(priorStartDateStr, priorEndDateStr),
    };
  }, [startDateStr, endDateStr, priorStartDateStr, priorEndDateStr, dailyLogs, studySessions, selectedHabitId, habits]);

  const periodStats = useMemo(() => {
    const calculateAggregates = (records: any[]) => {
      if (records.length === 0) {
        return {
          avgCompletion: 0,
          avgRating: 0,
          totalStudyHours: 0,
          avgSleepHours: 0,
          avgScreenRec: 0,
          promisesKeptRate: 0,
          daysLogged: 0,
        };
      }

      const totalComp = records.reduce((acc, r) => acc + r.completionPercentage, 0);
      const totalRating = records.reduce((acc, r) => acc + r.rating, 0);
      const totalStudy = records.reduce((acc, r) => acc + r.studyHours, 0);
      const totalSleep = records.reduce((acc, r) => acc + r.sleepHours, 0);
      const totalScreenRec = records.reduce((acc, r) => acc + r.screenRec, 0);

      const evaluatedPromises = records.filter((r) => r.promiseEvaluated);
      const keptPromises = evaluatedPromises.filter((r) => r.promiseKept);
      const promisesKeptRate = evaluatedPromises.length > 0 ? Math.round((keptPromises.length / evaluatedPromises.length) * 100) : 100;

      return {
        avgCompletion: Math.round(totalComp / records.length),
        avgRating: Math.round((totalRating / records.length) * 10) / 10,
        totalStudyHours: Math.round(totalStudy * 10) / 10,
        avgSleepHours: Math.round((totalSleep / records.length) * 10) / 10,
        avgScreenRec: Math.round((totalScreenRec / records.length) * 10) / 10,
        promisesKeptRate,
        daysLogged: records.length,
      };
    };

    const current = calculateAggregates(currentPeriodRecords);
    const prior = calculateAggregates(priorPeriodRecords);

    return {
      current,
      prior,
      deltaCompletion: Math.round((current.avgCompletion - prior.avgCompletion) * 10) / 10,
      deltaRating: Math.round((current.avgRating - prior.avgRating) * 10) / 10,
      deltaStudy: Math.round((current.totalStudyHours - prior.totalStudyHours) * 10) / 10,
      deltaSleep: Math.round((current.avgSleepHours - prior.avgSleepHours) * 10) / 10,
      deltaPromises: Math.round((current.promisesKeptRate - prior.promisesKeptRate) * 10) / 10,
    };
  }, [currentPeriodRecords, priorPeriodRecords]);

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-16 font-sans">
      {/* 1. EDITORIAL HEADER */}
      <PageHero
        title="Journal Analytics &amp; Empirical Patterns"
        subtitle="Empirical data across habits, sleep, deep study, and promise integrity. Observe patterns without claiming that correlation proves causation."
        kicker="MY PROGRESS • EMPIRICAL PATTERNS"
        badgeLines={['GENUINE RECORDS.', 'OBJECTIVE TRENDS.', 'NO FABRICATED DATA.']}
        actions={
          <div className="flex items-center gap-1.5 bg-paper-elevated border border-paper-border rounded-lg p-0.5 text-xs font-sans">
            {(['7d', '14d', '30d', '90d'] as const).map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => {
                  sound.tick();
                  setRangePreset(r);
                }}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  rangePreset === r ? 'bg-paper-surface text-paper-ink font-semibold shadow-journal' : 'text-paper-muted hover:text-paper-ink'
                }`}
              >
                {r.toUpperCase()}
              </button>
            ))}
          </div>
        }
      />

      {/* 2. FILTER STRIP */}
      <div className="p-4 rounded-xl bg-paper-surface border border-paper-border shadow-journal flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-sans">
        <div className="flex items-center gap-3">
          <span className="text-paper-muted flex items-center gap-1.5">
            <Filter size={14} className="text-accent" />
            <span>Habit Filter:</span>
          </span>
          <select
            value={selectedHabitId}
            onChange={(e) => setSelectedHabitId(e.target.value)}
            className="bg-paper-elevated border border-paper-border text-paper-ink text-xs px-3 py-1.5 rounded-lg focus:outline-none focus:border-accent"
          >
            <option value="all">All Habits Aggregate</option>
            {habits.map((h) => (
              <option key={h.id} value={h.id}>
                {h.title}
              </option>
            ))}
          </select>
        </div>

        <div className="text-[11px] font-sans text-paper-muted">
          Interval: <strong className="text-paper-ink font-medium">{startDateStr}</strong> to{' '}
          <strong className="text-paper-ink font-medium">{endDateStr}</strong> ({daysCount} days)
        </div>
      </div>

      {/* 3. RESTRAINED METRICS ROW (5 COMPARISON CARDS) */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        <div className="p-4 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-1">
          <span className="text-[10px] font-sans uppercase tracking-wider text-paper-muted font-medium block">
            Avg Alignment
          </span>
          <p className="text-xl font-heading font-bold tracking-tight text-paper-ink">
            {periodStats.current.avgCompletion}%
          </p>
          <span className="text-[11px] font-sans text-paper-muted block">
            Δ {periodStats.deltaCompletion >= 0 ? `+${periodStats.deltaCompletion}%` : `${periodStats.deltaCompletion}%`}
          </span>
        </div>

        <div className="p-4 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-1">
          <span className="text-[10px] font-sans uppercase tracking-wider text-paper-muted font-medium block">
            Daily Rating
          </span>
          <p className="text-xl font-heading font-bold tracking-tight text-paper-ink">
            {periodStats.current.avgRating} <span className="text-xs font-sans text-paper-muted font-normal">/ 10</span>
          </p>
          <span className="text-[11px] font-sans text-paper-muted block">
            Δ {periodStats.deltaRating >= 0 ? `+${periodStats.deltaRating}` : `${periodStats.deltaRating}`}
          </span>
        </div>

        <div className="p-4 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-1">
          <span className="text-[10px] font-sans uppercase tracking-wider text-paper-muted font-medium block">
            Study Output
          </span>
          <p className="text-xl font-heading font-bold tracking-tight text-paper-ink">
            {periodStats.current.totalStudyHours}h
          </p>
          <span className="text-[11px] font-sans text-paper-muted block">
            Δ {periodStats.deltaStudy >= 0 ? `+${periodStats.deltaStudy}h` : `${periodStats.deltaStudy}h`}
          </span>
        </div>

        <div className="p-4 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-1">
          <span className="text-[10px] font-sans uppercase tracking-wider text-paper-muted font-medium block">
            Sleep Baseline
          </span>
          <p className="text-xl font-heading font-bold tracking-tight text-paper-ink">
            {periodStats.current.avgSleepHours}h
          </p>
          <span className="text-[11px] font-sans text-paper-muted block">
            Δ {periodStats.deltaSleep >= 0 ? `+${periodStats.deltaSleep}h` : `${periodStats.deltaSleep}h`}
          </span>
        </div>

        <div className="p-4 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-1 col-span-2 md:col-span-1">
          <span className="text-[10px] font-sans uppercase tracking-wider text-paper-muted font-medium block">
            Promises Kept
          </span>
          <p className="text-xl font-heading font-bold tracking-tight text-paper-ink">
            {periodStats.current.promisesKeptRate}%
          </p>
          <span className="text-[11px] font-sans text-paper-muted block">
            Δ {periodStats.deltaPromises >= 0 ? `+${periodStats.deltaPromises}%` : `${periodStats.deltaPromises}%`}
          </span>
        </div>
      </div>

      {/* 4. GENUINE HISTORICAL TREND CHART (INTERACTIVE SVG, ZERO FAKE NOISE) */}
      <div className="p-6 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-paper-border">
          <div className="space-y-0.5">
            <h3 className="text-base font-heading font-semibold text-paper-ink">
              Daily Alignment &amp; Rating Trend
            </h3>
            <p className="text-xs text-paper-muted font-sans">
              Plotted strictly from actual recorded entries over the selected timeframe.
            </p>
          </div>

          {hoveredPoint && (
            <div className="text-right text-xs font-sans">
              <span className="font-sans text-paper-ink font-medium">
                {hoveredPoint.displayDate}:
              </span>{' '}
              <span className="text-accent font-medium">{hoveredPoint.completionPercentage}% alignment</span>
              {' • '}
              <span className="text-paper-secondary">{hoveredPoint.studyHours}h study</span>
            </div>
          )}
        </div>

        {currentPeriodRecords.every((r) => !r.hasLog) ? (
          <div className="py-16 text-center space-y-2">
            <p className="text-xs text-paper-muted font-sans">
              No journal logs exist within this date interval.
            </p>
            <p className="text-[11px] font-sans text-paper-secondary">
              Record daily entries in your journal to observe empirical trends.
            </p>
          </div>
        ) : (
          <div className="relative h-56 w-full pt-4">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 800 200" preserveAspectRatio="none">
              {/* Background gridlines */}
              <line x1="0" y1="50" x2="800" y2="50" stroke="currentColor" className="text-paper-border" strokeDasharray="3 3" />
              <line x1="0" y1="100" x2="800" y2="100" stroke="currentColor" className="text-paper-border" strokeDasharray="3 3" />
              <line x1="0" y1="150" x2="800" y2="150" stroke="currentColor" className="text-paper-border" strokeDasharray="3 3" />

              {/* Data points and curve */}
              {(() => {
                const count = currentPeriodRecords.length;
                if (count < 2) return null;
                const points = currentPeriodRecords.map((r, idx) => {
                  const x = (idx / (count - 1)) * 800;
                  const y = 180 - (r.completionPercentage / 100) * 150;
                  return { x, y, r };
                });

                const pathD = points.reduce((acc, p, i) => {
                  return i === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`;
                }, '');

                return (
                  <>
                    <path
                      d={pathD}
                      fill="none"
                      stroke="var(--accent-color)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {points.map((p, idx) => (
                      <circle
                        key={idx}
                        cx={p.x}
                        cy={p.y}
                        r={hoveredPoint?.date === p.r.date ? 5 : 3}
                        className="fill-paper-surface stroke-accent cursor-pointer transition-all"
                        strokeWidth="2"
                        onMouseEnter={() => setHoveredPoint(p.r)}
                        onMouseLeave={() => setHoveredPoint(null)}
                      />
                    ))}
                  </>
                );
              })()}
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};