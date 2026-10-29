import React, { useState, useMemo, useEffect } from 'react';
import {
  Layers,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Save,
  Check,
  Plus,
  Trash2,
  ShieldCheck,
  RotateCcw,
} from 'lucide-react';
import { MonthlyReview, AccountabilityDissection } from '../types';
import { useData, formatDateKey, isHabitScheduledOnDate, getHabitDayStatus } from '../context/DataContext';
import { PageHero } from '../components/common/PageHero';
import { AccountabilityDissectionModal } from '../components/accountability/AccountabilityDissectionModal';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { sound } from '../audio/sound';

export const MonthlyReviewView: React.FC = () => {
  const {
    monthlyReviews,
    saveMonthlyReview,
    dailyLogs,
    habits,
    studySessions,
    goals,
  } = useData();

  const [selectedMonth, setSelectedMonth] = useState<string>(() => {
    return new Date().toISOString().slice(0, 7);
  });

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

  const autoAggregations = useMemo(() => {
    const [year, m] = selectedMonth.split('-').map(Number);
    const daysInMonth = new Date(year, m, 0).getDate();

    const datesInMonth: string[] = [];
    for (let day = 1; day <= daysInMonth; day++) {
      const dayStr = day < 10 ? `0${day}` : `${day}`;
      datesInMonth.push(`${selectedMonth}-${dayStr}`);
    }

    let loggedDaysCount = 0;
    let sumRating = 0;
    let totalStudyMinutes = 0;
    let habitsScheduled = 0;
    let habitsCompleted = 0;
    let promisesKept = 0;
    let promisesMissed = 0;
    let promisesPrevented = 0;
    let sleepSum = 0;
    let sleepLoggedDays = 0;
    let productiveScreenHours = 0;
    let recreationalScreenHours = 0;

    datesInMonth.forEach((dateKey) => {
      const log = dailyLogs[dateKey];
      if (log) {
        loggedDaysCount++;
        if (log.ratingOutOfTen) sumRating += log.ratingOutOfTen;

        if (log.dailyPromise && log.dailyPromise.text) {
          const st = log.dailyPromise.status;
          if (st === 'kept') promisesKept++;
          else if (st === 'missed') promisesMissed++;
          else if (st === 'prevented') promisesPrevented++;
        }

        if (log.trackers) {
          if (!log.trackers.sleep.skipped && log.trackers.sleep.hours > 0) {
            sleepSum += log.trackers.sleep.hours;
            sleepLoggedDays++;
          }
          if (!log.trackers.screenTime.skipped) {
            productiveScreenHours += log.trackers.screenTime.productiveHours || 0;
            recreationalScreenHours += log.trackers.screenTime.recreationalHours || 0;
          }
        }
      }

      habits.forEach((h) => {
        if (!h.archived && isHabitScheduledOnDate(h, dateKey)) {
          habitsScheduled++;
          if (getHabitDayStatus(h, dateKey) === 'completed') {
            habitsCompleted++;
          }
        }
      });

      studySessions
        .filter((s) => s.date === dateKey)
        .forEach((s) => {
          totalStudyMinutes += s.durationMinutes;
        });
    });

    const totalPromises = promisesKept + promisesMissed + promisesPrevented;
    const promisesRate = totalPromises > 0 ? Math.round((promisesKept / totalPromises) * 100) : 100;
    const habitsRate = habitsScheduled > 0 ? Math.round((habitsCompleted / habitsScheduled) * 100) : 100;
    const avgRating = loggedDaysCount > 0 ? Math.round((sumRating / loggedDaysCount) * 10) / 10 : 8.0;
    const avgSleep = sleepLoggedDays > 0 ? Math.round((sleepSum / sleepLoggedDays) * 10) / 10 : 7.5;
    const totalStudyHours = Math.round((totalStudyMinutes / 60) * 10) / 10;

    return {
      loggedDaysCount,
      daysInMonth,
      avgRating,
      promisesRate,
      promisesKept,
      promisesMissed,
      habitsRate,
      totalStudyHours,
      avgSleep,
      productiveScreenHours: Math.round(productiveScreenHours * 10) / 10,
      recreationalScreenHours: Math.round(recreationalScreenHours * 10) / 10,
    };
  }, [selectedMonth, dailyLogs, habits, studySessions]);

  const existingReview = useMemo(() => {
    return monthlyReviews.find((r) => r.month === selectedMonth);
  }, [monthlyReviews, selectedMonth]);

  // Form State
  const [rating, setRating] = useState<number>(existingReview?.rating || autoAggregations.avgRating);
  const [primaryTheme, setPrimaryTheme] = useState<string>(existingReview?.primaryTheme || '');
  const [growthDiscipline, setGrowthDiscipline] = useState<string>(existingReview?.growthDiscipline || '');
  const [growthConfidence, setGrowthConfidence] = useState<string>(existingReview?.growthConfidence || '');
  const [mindsetShift, setMindsetShift] = useState<string>(existingReview?.mindsetShift || '');
  const [milestonesProgress, setMilestonesProgress] = useState<string>(existingReview?.milestonesProgress || '');
  const [recurringHabitPatterns, setRecurringHabitPatterns] = useState<string>(existingReview?.recurringHabitPatterns || '');
  const [majorWins, setMajorWins] = useState<string[]>(() => {
    if (!existingReview?.keyWins) return [];
    return existingReview.keyWins.split('\n').filter(Boolean);
  });
  const [newWinInput, setNewWinInput] = useState<string>('');
  const [keyLessons, setKeyLessons] = useState<string[]>(() => {
    if (!existingReview?.coreLessons) return [];
    return existingReview.coreLessons.split('\n').filter(Boolean);
  });
  const [newLessonInput, setNewLessonInput] = useState<string>('');
  const [nextMonthPriorities, setNextMonthPriorities] = useState<string[]>(existingReview?.nextMonthMilestones || []);
  const [newPriorityInput, setNewPriorityInput] = useState<string>('');
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    if (existingReview) {
      setRating(existingReview.rating);
      setPrimaryTheme(existingReview.primaryTheme);
      setGrowthDiscipline(existingReview.growthDiscipline);
      setGrowthConfidence(existingReview.growthConfidence);
      setMindsetShift(existingReview.mindsetShift);
      setMilestonesProgress(existingReview.milestonesProgress);
      setRecurringHabitPatterns(existingReview.recurringHabitPatterns || '');
      setMajorWins(existingReview.keyWins ? existingReview.keyWins.split('\n').filter(Boolean) : []);
      setKeyLessons(existingReview.coreLessons ? existingReview.coreLessons.split('\n').filter(Boolean) : []);
      setNextMonthPriorities(existingReview.nextMonthMilestones || (existingReview.nextMonthPriority ? [existingReview.nextMonthPriority] : []));
    } else {
      setRating(autoAggregations.avgRating);
      setPrimaryTheme('');
      setGrowthDiscipline('');
      setGrowthConfidence('');
      setMindsetShift('');
      setMilestonesProgress('');
      setRecurringHabitPatterns('');
      setMajorWins([]);
      setKeyLessons([]);
      setNextMonthPriorities([]);
    }
  }, [existingReview, autoAggregations, selectedMonth]);

  const handleSave = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    sound.complete();

    saveMonthlyReview({
      month: selectedMonth,
      primaryTheme,
      rating,
      totalStudyHours: autoAggregations.totalStudyHours,
      averageHabitRate: autoAggregations.habitsRate,
      promisesKeptTotal: autoAggregations.promisesKept,
      promisesMissedTotal: autoAggregations.promisesMissed,
      promisesPreventedTotal: 0,
      avgSleepHours: autoAggregations.avgSleep,
      avgDailyRating: autoAggregations.avgRating,
      totalScreenProductiveHours: autoAggregations.productiveScreenHours,
      totalScreenRecreationalHours: autoAggregations.recreationalScreenHours,
      growthDiscipline,
      growthConfidence,
      mindsetShift,
      milestonesProgress,
      unfinishedGoals: '',
      recurringHabitPatterns,
      keyWins: majorWins.join('\n'),
      coreLessons: keyLessons.join('\n'),
      nextMonthPriority: nextMonthPriorities[0] || 'Continued momentum and sovereign discipline',
      nextMonthMilestones: nextMonthPriorities,
    });

    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleAddWin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newWinInput.trim()) return;
    setMajorWins([...majorWins, newWinInput.trim()]);
    setNewWinInput('');
    sound.tick();
  };

  const handleAddLesson = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLessonInput.trim()) return;
    setKeyLessons([...keyLessons, newLessonInput.trim()]);
    setNewLessonInput('');
    sound.tick();
  };

  const handleAddPriority = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPriorityInput.trim()) return;
    setNextMonthPriorities([...nextMonthPriorities, newPriorityInput.trim()]);
    setNewPriorityInput('');
    sound.tick();
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-16">
      {/* 1. EDITORIAL HEADER */}
      <PageHero
        title="Monthly Review & Trajectory"
        subtitle="Step back to examine monthly patterns in discipline, confidence, deep work, and character evolution."
        kicker="MY REVIEWS • MONTHLY AUDIT"
        badgeLines={['PATTERN RECOGNITION.', 'ACCUMULATED CHARACTER.', 'STRATEGIC SHIFT.']}
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
              onClick={() => handleSave()}
              className="flex items-center gap-1.5 text-xs font-sans"
            >
              <Save size={13} />
              <span>{existingReview ? 'Update Review' : 'Save Review'}</span>
            </Button>
          </div>
        }
      />

      {/* 2. SECTION I: MONTHLY PERFORMANCE LEDGER (6 TILES) */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-sans uppercase tracking-[0.16em] text-paper-muted font-semibold">
            I. Monthly Performance Ledger ({autoAggregations.loggedDaysCount} / {autoAggregations.daysInMonth} days recorded)
          </span>
          {savedSuccess && (
            <span className="text-xs font-sans text-accent flex items-center gap-1">
              <Check size={13} />
              Review saved successfully
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-1">
            <span className="text-xs font-sans uppercase tracking-wider text-paper-muted font-medium block">
              Promises Honored
            </span>
            <p className="text-2xl font-heading font-bold tracking-tight text-paper-ink">
              {autoAggregations.promisesRate}%
            </p>
            <span className="text-[11px] font-sans text-paper-muted block">
              {autoAggregations.promisesKept} kept commitments
            </span>
          </div>

          <div className="p-4 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-1">
            <span className="text-xs font-sans uppercase tracking-wider text-paper-muted font-medium block">
              Habit Consistency
            </span>
            <p className="text-2xl font-heading font-bold tracking-tight text-paper-ink">
              {autoAggregations.habitsRate}%
            </p>
            <span className="text-[11px] font-sans text-paper-muted block">
              Scheduled routine adherence
            </span>
          </div>

          <div className="p-4 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-1">
            <span className="text-xs font-sans uppercase tracking-wider text-paper-muted font-medium block">
              Deep Study Logged
            </span>
            <p className="text-2xl font-heading font-bold tracking-tight text-paper-ink">
              {autoAggregations.totalStudyHours}h
            </p>
            <span className="text-[11px] font-sans text-paper-muted block">
              Cognitive mastery blocks
            </span>
          </div>

          <div className="p-4 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-1">
            <span className="text-xs font-sans uppercase tracking-wider text-paper-muted font-medium block">
              Average Sleep
            </span>
            <p className="text-2xl font-heading font-bold tracking-tight text-paper-ink">
              {autoAggregations.avgSleep}h
            </p>
            <span className="text-[11px] font-sans text-paper-muted block">
              Nightly rest baseline
            </span>
          </div>

          <div className="p-4 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-1">
            <span className="text-xs font-sans uppercase tracking-wider text-paper-muted font-medium block">
              Screen Ratio
            </span>
            <p className="text-xl font-heading font-bold tracking-tight text-paper-ink">
              {autoAggregations.productiveScreenHours}h <span className="text-xs font-sans text-paper-muted font-normal">prod</span>
            </p>
            <span className="text-[11px] font-sans text-paper-muted block">
              vs {autoAggregations.recreationalScreenHours}h recreational
            </span>
          </div>

          <div className="p-4 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-1">
            <span className="text-xs font-sans uppercase tracking-wider text-paper-muted font-medium block">
              Average Alignment
            </span>
            <p className="text-2xl font-heading font-bold tracking-tight text-paper-ink">
              {autoAggregations.avgRating} <span className="text-xs font-sans text-paper-muted font-normal">/ 10</span>
            </p>
            <span className="text-[11px] font-sans text-paper-muted block">
              Holistic day evaluations
            </span>
          </div>
        </div>
      </section>

      {/* 3. SECTION II: CHARACTER, POISE & BEHAVIOR GROWTH */}
      <section className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-paper-border">
          <h2 className="text-base font-heading font-semibold text-paper-ink">
            II. Character, Poise &amp; Discipline Growth
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-5 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-2">
            <label className="block text-xs font-sans uppercase tracking-wider text-paper-muted font-medium">
              1. Growth in Discipline &amp; Keeping Promises
            </label>
            <textarea
              rows={4}
              value={growthDiscipline}
              onChange={(e) => setGrowthDiscipline(e.target.value)}
              placeholder="How has your relationship to your own word evolved this month?"
              className="w-full bg-paper-elevated border border-paper-border rounded-lg p-3 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent resize-none leading-relaxed"
            />
          </div>

          <div className="p-5 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-2">
            <label className="block text-xs font-sans uppercase tracking-wider text-paper-muted font-medium">
              2. Growth in Self-Worth &amp; Inner Quiet
            </label>
            <textarea
              rows={4}
              value={growthConfidence}
              onChange={(e) => setGrowthConfidence(e.target.value)}
              placeholder="Reflections on self-respect forged through completed commitments..."
              className="w-full bg-paper-elevated border border-paper-border rounded-lg p-3 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent resize-none leading-relaxed"
            />
          </div>

          <div className="p-5 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-2">
            <label className="block text-xs font-sans uppercase tracking-wider text-paper-muted font-medium">
              3. Recurring Behavioral Patterns &amp; Avoidance Traps
            </label>
            <textarea
              rows={4}
              value={recurringHabitPatterns}
              onChange={(e) => setRecurringHabitPatterns(e.target.value)}
              placeholder="Unconscious patterns where fatigue or procrastination still entered..."
              className="w-full bg-paper-elevated border border-paper-border rounded-lg p-3 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent resize-none leading-relaxed"
            />
          </div>

          <div className="p-5 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-2">
            <label className="block text-xs font-sans uppercase tracking-wider text-paper-muted font-medium">
              4. Progress Towards Long-Term Goals
            </label>
            <textarea
              rows={4}
              value={milestonesProgress}
              onChange={(e) => setMilestonesProgress(e.target.value)}
              placeholder="Milestones checked, academic output, or shifts in future direction..."
              className="w-full bg-paper-elevated border border-paper-border rounded-lg p-3 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent resize-none leading-relaxed"
            />
          </div>
        </div>
      </section>

      {/* 4. SECTION III: MAJOR WINS & KEY LESSONS */}
      <section className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-paper-border">
          <h2 className="text-base font-heading font-semibold text-paper-ink">
            III. Major Wins &amp; Extracted Lessons
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Major Wins */}
          <div className="p-5 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-3">
            <span className="text-xs font-sans uppercase tracking-wider text-forest font-semibold block">
              Significant Wins ({majorWins.length})
            </span>

            <form onSubmit={handleAddWin} className="flex gap-2">
              <input
                type="text"
                value={newWinInput}
                onChange={(e) => setNewWinInput(e.target.value)}
                placeholder="Record a victory or standard upheld..."
                className="w-full bg-paper-elevated border border-paper-border rounded-lg px-3 py-1.5 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent"
              />
              <Button variant="primary" size="sm" type="submit" className="text-xs font-sans shrink-0">
                Add
              </Button>
            </form>

            <div className="space-y-1.5 pt-1">
              {majorWins.map((win, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2 rounded-lg bg-paper-elevated border border-paper-border text-xs font-sans"
                >
                  <span className="text-paper-ink">{win}</span>
                  <button
                    onClick={() => setMajorWins(majorWins.filter((_, i) => i !== idx))}
                    className="text-paper-muted hover:text-rose-600 p-1"
                  >
                    <Trash2 size={12} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Key Lessons */}
          <div className="p-5 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-3">
            <span className="text-xs font-sans uppercase tracking-wider text-accent font-semibold block">
              Actionable Operating Lessons ({keyLessons.length})
            </span>

            <form onSubmit={handleAddLesson} className="flex gap-2">
              <input
                type="text"
                value={newLessonInput}
                onChange={(e) => setNewLessonInput(e.target.value)}
                placeholder="Distill a permanent operational insight..."
                className="w-full bg-paper-elevated border border-paper-border rounded-lg px-3 py-1.5 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent"
              />
              <Button variant="primary" size="sm" type="submit" className="text-xs font-sans shrink-0">
                Add
              </Button>
            </form>

            <div className="space-y-1.5 pt-1">
              {keyLessons.map((l, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2 rounded-lg bg-paper-elevated border border-paper-border text-xs font-sans"
                >
                  <span className="text-paper-ink">&ldquo;{l}&rdquo;</span>
                  <button
                    onClick={() => setKeyLessons(keyLessons.filter((_, i) => i !== idx))}
                    className="text-paper-muted hover:text-rose-600 p-1 not-italic"
                  >
                    <Trash2 size={12} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION IV: NEXT MONTH PRIORITIES */}
      <section className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-paper-border">
          <h2 className="text-base font-heading font-semibold text-paper-ink">
            IV. Next Month Strategic Priorities
          </h2>
        </div>

        <div className="p-5 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-3">
          <form onSubmit={handleAddPriority} className="flex gap-2">
            <input
              type="text"
              value={newPriorityInput}
              onChange={(e) => setNewPriorityInput(e.target.value)}
              placeholder="Specify non-negotiable target for next month..."
              className="w-full bg-paper-elevated border border-paper-border rounded-lg px-3 py-1.5 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent"
            />
            <Button variant="primary" size="sm" type="submit" className="text-xs font-sans shrink-0">
              Add Priority
            </Button>
          </form>

          <div className="space-y-1.5 pt-1">
            {nextMonthPriorities.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-2.5 rounded-lg bg-paper-elevated border border-paper-border text-xs font-sans"
              >
                <span className="text-paper-ink font-medium">{item}</span>
                <button
                  onClick={() => setNextMonthPriorities(nextMonthPriorities.filter((_, i) => i !== idx))}
                  className="text-paper-muted hover:text-rose-600 p-1"
                >
                  <Trash2 size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};