import React, { useState, useMemo, useEffect } from 'react';
import {
  BarChart3,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Save,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Clock,
  Plus,
  Trash2,
  Check,
  ShieldCheck,
  RotateCcw,
} from 'lucide-react';
import { WeeklyAudit, AccountabilityDissection } from '../types';
import { useData, formatDateKey, isHabitScheduledOnDate, getHabitDayStatus } from '../context/DataContext';
import { PageHero } from '../components/common/PageHero';
import { AccountabilityDissectionModal } from '../components/accountability/AccountabilityDissectionModal';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { sound } from '../audio/sound';

export const WeeklyAuditView: React.FC = () => {
  const {
    dailyLogs,
    habits,
    studySessions,
    weeklyAudits,
    saveWeeklyAudit,
    settings,
  } = useData();

  // Selected week reference date (defaults to current week)
  const [refDate, setRefDate] = useState<Date>(() => new Date());

  // Calculate Monday-to-Sunday Date Range for selected week
  const { weekStartStr, weekEndStr, weekDates } = useMemo(() => {
    const d = new Date(refDate);
    const day = d.getDay();
    const diffToMonday = day === 0 ? -6 : 1 - day;
    const monday = new Date(d);
    monday.setDate(d.getDate() + diffToMonday);

    const dates: string[] = [];
    for (let i = 0; i < 7; i++) {
      const cur = new Date(monday);
      cur.setDate(monday.getDate() + i);
      dates.push(formatDateKey(cur));
    }

    return {
      weekStartStr: dates[0],
      weekEndStr: dates[6],
      weekDates: dates,
    };
  }, [refDate]);

  const prevWeek = () => {
    sound.tick();
    const prev = new Date(refDate);
    prev.setDate(prev.getDate() - 7);
    setRefDate(prev);
  };

  const nextWeek = () => {
    sound.tick();
    const next = new Date(refDate);
    next.setDate(next.getDate() + 7);
    setRefDate(next);
  };

  const jumpToCurrentWeek = () => {
    sound.tick();
    setRefDate(new Date());
  };

  // Auto-Populate Numerical Scorecard from Actual Daily Logs
  const autoScorecard = useMemo(() => {
    let sumRating = 0;
    let loggedDaysCount = 0;

    let habitsScheduled = 0;
    let habitsCompleted = 0;

    let promisesKept = 0;
    let promisesMissed = 0;
    let promisesPrevented = 0;
    const missedCommitmentsFound: Array<{ date: string; title: string; category: 'promise' | 'habit' | 'study'; reason?: string }> = [];

    let studyMinutes = 0;
    let hoursUsedWell = 0;
    let hoursWasted = 0;
    let sleepSum = 0;
    let sleepDays = 0;
    let cleanMealsCount = 0;
    let mealsLoggedCount = 0;
    const triggersList: string[] = [];

    weekDates.forEach((dateKey) => {
      const log = dailyLogs[dateKey];
      if (log) {
        loggedDaysCount++;
        sumRating += log.ratingOutOfTen || 0;

        if (log.dailyPromise && log.dailyPromise.text) {
          if (log.dailyPromise.status === 'kept') {
            promisesKept++;
          } else if (log.dailyPromise.status === 'missed') {
            promisesMissed++;
            missedCommitmentsFound.push({
              date: dateKey,
              title: log.dailyPromise.text,
              category: 'promise',
              reason: 'Missed daily promise',
            });
          } else if (log.dailyPromise.status === 'prevented') {
            promisesPrevented++;
          }
        }

        if (log.trackers) {
          if (!log.trackers.timeUse.skipped) {
            hoursUsedWell += log.trackers.timeUse.hoursUsedWell || 0;
            hoursWasted += log.trackers.timeUse.hoursWasted || 0;
          }
          if (!log.trackers.sleep.skipped && log.trackers.sleep.hours > 0) {
            sleepSum += log.trackers.sleep.hours;
            sleepDays++;
          }
          if (!log.trackers.meals.skipped) {
            mealsLoggedCount++;
            if (log.cleanEating) cleanMealsCount++;
          }
          if (!log.trackers.emotionalTriggers.skipped && log.trackers.emotionalTriggers.experiencedTrigger) {
            if (log.trackers.emotionalTriggers.triggerDescription) {
              triggersList.push(log.trackers.emotionalTriggers.triggerDescription);
            }
          }
        }
      }

      habits.forEach((h) => {
        if (!h.archived) {
          if (isHabitScheduledOnDate(h, dateKey)) {
            habitsScheduled++;
            if (getHabitDayStatus(h, dateKey) === 'completed') {
              habitsCompleted++;
            } else if (getHabitDayStatus(h, dateKey) === 'incomplete') {
              if (missedCommitmentsFound.length < 5) {
                missedCommitmentsFound.push({
                  date: dateKey,
                  title: h.title,
                  category: 'habit',
                  reason: 'Incomplete habit protocol',
                });
              }
            }
          }
        }
      });

      studySessions
        .filter((s) => s.date === dateKey)
        .forEach((s) => {
          studyMinutes += s.durationMinutes;
        });
    });

    const habitsRate = habitsScheduled > 0 ? Math.round((habitsCompleted / habitsScheduled) * 100) : 100;
    const totalPromises = promisesKept + promisesMissed + promisesPrevented;
    const promisesRate = totalPromises > 0 ? Math.round((promisesKept / totalPromises) * 100) : 100;
    const avgRating = loggedDaysCount > 0 ? Math.round((sumRating / loggedDaysCount) * 10) / 10 : 8.0;
    const studyHoursTotal = Math.round((studyMinutes / 60) * 10) / 10;
    const avgSleep = sleepDays > 0 ? Math.round((sleepSum / sleepDays) * 10) / 10 : 7.5;
    const cleanMealsRate = mealsLoggedCount > 0 ? Math.round((cleanMealsCount / mealsLoggedCount) * 100) : 100;

    return {
      loggedDaysCount,
      overallScore: avgRating,
      habitsRate,
      promisesRate,
      promisesKeptCount: promisesKept,
      promisesMissedCount: promisesMissed,
      promisesPreventedCount: promisesPrevented,
      studyHoursTotal,
      studyHoursTarget: settings.weeklyStudyTargetHours,
      hoursUsedWellTotal: Math.round(hoursUsedWell * 10) / 10,
      hoursWastedTotal: Math.round(hoursWasted * 10) / 10,
      avgSleepHours: avgSleep,
      cleanMealsRate,
      triggersList,
      missedCommitmentsFound,
    };
  }, [weekDates, dailyLogs, habits, studySessions, settings.weeklyStudyTargetHours]);

  const existingAudit = useMemo(() => {
    return weeklyAudits.find((w) => w.weekStartDate === weekStartStr);
  }, [weeklyAudits, weekStartStr]);

  // Form State
  const [score, setScore] = useState<number>(existingAudit?.overallScore || autoScorecard.overallScore);
  const [whatWentWell, setWhatWentWell] = useState<string>(existingAudit?.whatWentWell || '');
  const [whatFailed, setWhatFailed] = useState<string>(existingAudit?.whatFailed || '');
  const [whatILearned, setWhatILearned] = useState<string>(existingAudit?.whatILearned || '');
  const [whatToPrune, setWhatToPrune] = useState<string>(existingAudit?.whatToPrune || '');
  const [recurringMistakes, setRecurringMistakes] = useState<string>(existingAudit?.recurringMistakes || '');
  const [recurringTriggers, setRecurringTriggers] = useState<string>(
    existingAudit?.recurringTriggers || autoScorecard.triggersList.join('; ')
  );
  const [nextWeekFocus, setNextWeekFocus] = useState<string>(existingAudit?.nextWeekFocus || '');
  const [correctiveActions, setCorrectiveActions] = useState<string[]>(
    existingAudit?.correctiveActions || []
  );
  const [newActionInput, setNewActionInput] = useState<string>('');
  const [dissections, setDissections] = useState<AccountabilityDissection[]>(existingAudit?.dissections || []);

  const [isDissectionModalOpen, setIsDissectionModalOpen] = useState(false);
  const [dissectionTarget, setDissectionTarget] = useState<{ title: string; date: string; category: 'promise' | 'habit' | 'study' } | null>(null);

  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    if (existingAudit) {
      setScore(existingAudit.overallScore);
      setWhatWentWell(existingAudit.whatWentWell);
      setWhatFailed(existingAudit.whatFailed);
      setWhatILearned(existingAudit.whatILearned || '');
      setWhatToPrune(existingAudit.whatToPrune);
      setRecurringMistakes(existingAudit.recurringMistakes || '');
      setRecurringTriggers(existingAudit.recurringTriggers || autoScorecard.triggersList.join('; '));
      setNextWeekFocus(existingAudit.nextWeekFocus);
      setCorrectiveActions(existingAudit.correctiveActions || []);
      setDissections(existingAudit.dissections || []);
    } else {
      setScore(autoScorecard.overallScore);
      setWhatWentWell('');
      setWhatFailed('');
      setWhatILearned('');
      setWhatToPrune('');
      setRecurringMistakes('');
      setRecurringTriggers(autoScorecard.triggersList.join('; '));
      setNextWeekFocus('');
      setCorrectiveActions([]);
      setDissections([]);
    }
  }, [existingAudit, autoScorecard, weekStartStr]);

  const handleSaveAudit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    sound.complete();

    saveWeeklyAudit({
      weekStartDate: weekStartStr,
      weekEndDate: weekEndStr,
      overallScore: score,
      habitsRate: autoScorecard.habitsRate,
      promisesRate: autoScorecard.promisesRate,
      promisesKeptCount: autoScorecard.promisesKeptCount,
      promisesMissedCount: autoScorecard.promisesMissedCount,
      promisesPreventedCount: autoScorecard.promisesPreventedCount,
      studyHoursTotal: autoScorecard.studyHoursTotal,
      studyHoursTarget: autoScorecard.studyHoursTarget,
      hoursUsedWellTotal: autoScorecard.hoursUsedWellTotal,
      hoursWastedTotal: autoScorecard.hoursWastedTotal,
      avgSleepHours: autoScorecard.avgSleepHours,
      cleanMealsRate: autoScorecard.cleanMealsRate,
      whatWentWell,
      whatFailed,
      whatILearned,
      whatToPrune,
      recurringMistakes,
      recurringTriggers,
      nextWeekFocus,
      correctiveActions,
      dissections,
    });

    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleAddAction = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newActionInput.trim()) return;
    setCorrectiveActions([...correctiveActions, newActionInput.trim()]);
    setNewActionInput('');
    sound.tick();
  };

  const handleRemoveAction = (index: number) => {
    sound.strike?.();
    setCorrectiveActions(correctiveActions.filter((_, i) => i !== index));
  };

  const handleSaveDissection = (d: AccountabilityDissection) => {
    setDissections([...dissections, d]);
    setIsDissectionModalOpen(false);
    setDissectionTarget(null);
  };

  const openDissectionFor = (item: { title: string; date: string; category: 'promise' | 'habit' | 'study' }) => {
    sound.tick();
    setDissectionTarget(item);
    setIsDissectionModalOpen(true);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-16">
      {/* 1. EDITORIAL HEADER */}
      <PageHero
        title="Weekly Retrospective & Scorecard"
        subtitle="Unsparing accountability without self-contempt. Auto-populated statistics, 3-step autopsies, and a concrete operational plan for next week."
        kicker="MY REVIEWS • WEEKLY AUDIT"
        badgeLines={['ANALYSE CAUSE.', 'OWN THE OUTCOME.', 'RECOVER MOMENTUM.']}
        actions={
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center bg-paper-elevated border border-paper-border rounded-lg text-xs font-sans">
              <button
                onClick={prevWeek}
                className="p-1.5 text-paper-muted hover:text-paper-ink rounded-l-lg transition-colors"
                title="Previous Week"
              >
                <ChevronLeft size={14} />
              </button>
              <span className="px-3 py-1 font-sans text-xs text-paper-ink font-medium">
                Week of {weekStartStr} to {weekEndStr}
              </span>
              <button
                onClick={nextWeek}
                className="p-1.5 text-paper-muted hover:text-paper-ink rounded-r-lg transition-colors"
                title="Next Week"
              >
                <ChevronRight size={14} />
              </button>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={jumpToCurrentWeek}
              className="text-xs font-sans"
            >
              Current Week
            </Button>

            <Button
              variant="primary"
              size="sm"
              onClick={() => handleSaveAudit()}
              className="flex items-center gap-1.5 text-xs font-sans"
            >
              <Save size={13} />
              <span>{existingAudit ? 'Update Audit' : 'Save Audit'}</span>
            </Button>
          </div>
        }
      />

      {/* 2. SECTION I: NUMERICAL SCORECARD (AUTO-POPULATED FROM DAILY LOGS) */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-sans uppercase tracking-[0.16em] text-paper-muted font-semibold">
            I. Auto-Populated Scorecard ({autoScorecard.loggedDaysCount} / 7 days logged)
          </span>
          {savedSuccess && (
            <span className="text-xs font-sans text-accent flex items-center gap-1">
              <Check size={13} />
              Audit saved successfully
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Tile 1: Promise Honor Rate */}
          <div className="bg-paper-surface border border-paper-border rounded-xl p-5 shadow-journal flex flex-col justify-between">
            <div>
              <span className="text-xs font-sans uppercase tracking-[0.16em] text-paper-muted font-semibold block">
                Promise Honor Rate
              </span>
              <p className="text-2xl font-heading font-bold tracking-tight text-paper-ink mt-1">
                {autoScorecard.promisesRate}%
              </p>
            </div>
            <div className="pt-3 border-t border-paper-border mt-3 text-[11px] font-sans text-paper-muted">
              {autoScorecard.promisesKeptCount} kept / {autoScorecard.promisesMissedCount} missed
            </div>
          </div>

          {/* Tile 2: Habit Consistency */}
          <div className="bg-paper-surface border border-paper-border rounded-xl p-5 shadow-journal flex flex-col justify-between">
            <div>
              <span className="text-xs font-sans uppercase tracking-[0.16em] text-paper-muted font-semibold block">
                Habit Consistency
              </span>
              <p className="text-2xl font-heading font-bold tracking-tight text-paper-ink mt-1">
                {autoScorecard.habitsRate}%
              </p>
            </div>
            <div className="pt-3 border-t border-paper-border mt-3 text-[11px] font-sans text-paper-muted">
              Weekly scheduled execution
            </div>
          </div>

          {/* Tile 3: Deep Work Logged */}
          <div className="bg-paper-surface border border-paper-border rounded-xl p-5 shadow-journal flex flex-col justify-between">
            <div>
              <span className="text-xs font-sans uppercase tracking-[0.16em] text-paper-muted font-semibold block">
                Deep Work Logged
              </span>
              <p className="text-2xl font-heading font-bold tracking-tight text-paper-ink mt-1">
                {autoScorecard.studyHoursTotal}h <span className="text-xs font-sans text-paper-muted font-normal">/ {autoScorecard.studyHoursTarget}h</span>
              </p>
            </div>
            <div className="pt-3 border-t border-paper-border mt-3 text-[11px] font-sans text-paper-muted">
              Focused intellectual output
            </div>
          </div>

          {/* Tile 4: Time Discipline */}
          <div className="bg-paper-surface border border-paper-border rounded-xl p-5 shadow-journal flex flex-col justify-between">
            <div>
              <span className="text-xs font-sans uppercase tracking-[0.16em] text-paper-muted font-semibold block">
                Time Discipline
              </span>
              <p className="text-2xl font-heading font-bold tracking-tight text-paper-ink mt-1">
                {autoScorecard.hoursUsedWellTotal}h <span className="text-xs font-sans text-paper-muted font-normal">used well</span>
              </p>
            </div>
            <div className="pt-3 border-t border-paper-border mt-3 text-[11px] font-sans text-paper-muted">
              {autoScorecard.hoursWastedTotal}h logged wasted
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION II: ACCOUNTABILITY DISSECTIONS (3-STEP FRAMEWORK) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-paper-border">
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-accent" />
            <h2 className="text-base font-heading font-semibold text-paper-ink">
              II. Accountability Framework: Missed Commitments
            </h2>
          </div>
          <span className="text-xs font-sans text-paper-muted">
            3-Step Autopsy: Analyse → Own It → Recover
          </span>
        </div>

        {autoScorecard.missedCommitmentsFound.length > 0 && dissections.length === 0 && (
          <div className="p-4 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-3">
            <span className="text-xs font-sans font-semibold text-amber-800 dark:text-amber-300 uppercase tracking-wider block">
              Missed Commitments Detected This Week:
            </span>
            <div className="space-y-2">
              {autoScorecard.missedCommitmentsFound.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-lg bg-paper-elevated border border-paper-border text-xs font-sans"
                >
                  <div className="space-y-0.5">
                    <span className="font-heading font-semibold text-paper-ink">
                      {item.title}
                    </span>
                    <span className="text-[11px] text-paper-muted block">
                      Date: {item.date} ({item.category})
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openDissectionFor(item)}
                    className="text-xs font-sans"
                  >
                    Conduct 3-Step Autopsy
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {dissections.length > 0 && (
          <div className="space-y-3">
            {dissections.map((d) => (
              <div
                key={d.id}
                className="p-5 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-3 text-xs"
              >
                <div className="flex items-center justify-between pb-2 border-b border-paper-border">
                  <span className="font-heading font-semibold text-sm text-paper-ink">
                    Autopsy: {d.commitmentTitle} ({d.dateKey})
                  </span>
                  <Badge variant={d.failureType === 'avoidable-choice' ? 'danger' : 'neutral'}>
                    {d.failureType === 'avoidable-choice' ? 'Avoidable Choice' : 'Genuine Obstacle'}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-sans">
                  <div className="p-3 rounded-lg bg-paper-elevated border border-paper-border space-y-1">
                    <span className="text-[10px] uppercase font-semibold text-paper-muted tracking-wider block">
                      1. Analyse (What Happened)
                    </span>
                    <p className="text-paper-secondary">{d.analyseWhatHappened}</p>
                  </div>

                  <div className="p-3 rounded-lg bg-paper-elevated border border-paper-border space-y-1">
                    <span className="text-[10px] uppercase font-semibold text-paper-muted tracking-wider block">
                      2. Own It (Consequences)
                    </span>
                    <p className="text-paper-secondary">{d.ownItConsequence}</p>
                  </div>

                  <div className="p-3 rounded-lg bg-forest/5 border border-forest/20 space-y-1">
                    <span className="text-[10px] uppercase font-semibold text-forest tracking-wider block">
                      3. Recover (Corrective Plan)
                    </span>
                    <p className="text-paper-ink font-sans">{d.recoverActionPlan}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. SECTION III: WRITTEN RETROSPECTIVE */}
      <section className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-paper-border">
          <h2 className="text-base font-heading font-semibold text-paper-ink">
            III. Written Retrospective
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-2">
            <label className="block text-xs font-sans uppercase tracking-wider text-forest font-semibold">
              1. What Worked
            </label>
            <textarea
              rows={5}
              value={whatWentWell}
              onChange={(e) => setWhatWentWell(e.target.value)}
              placeholder="Disciplines maintained, focus blocks executed, friction conquered..."
              className="w-full bg-paper-elevated border border-paper-border rounded-lg p-3 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent resize-none"
            />
          </div>

          <div className="p-5 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-2">
            <label className="block text-xs font-sans uppercase tracking-wider text-rose-800 dark:text-rose-300 font-semibold">
              2. What Failed
            </label>
            <textarea
              rows={5}
              value={whatFailed}
              onChange={(e) => setWhatFailed(e.target.value)}
              placeholder="Where distraction crept in, broken promises, avoided responsibilities..."
              className="w-full bg-paper-elevated border border-paper-border rounded-lg p-3 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent resize-none"
            />
          </div>

          <div className="p-5 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-2">
            <label className="block text-xs font-sans uppercase tracking-wider text-accent font-semibold">
              3. What I Learnt
            </label>
            <textarea
              rows={5}
              value={whatILearned}
              onChange={(e) => setWhatILearned(e.target.value)}
              placeholder="Core operational insights and rules extracted from this week's reality..."
              className="w-full bg-paper-elevated border border-paper-border rounded-lg p-3 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent resize-none"
            />
          </div>
        </div>
      </section>

      {/* 5. SECTION IV: NEXT WEEK OPERATIONAL PLAN */}
      <section className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-paper-border">
          <h2 className="text-base font-heading font-semibold text-paper-ink">
            IV. Next Week Operational Plan
          </h2>
        </div>

        <div className="p-6 rounded-xl bg-paper-surface border border-paper-border shadow-journal space-y-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-sans uppercase tracking-wider text-paper-muted">
              Primary Focus Directive for Next Week
            </label>
            <input
              type="text"
              value={nextWeekFocus}
              onChange={(e) => setNextWeekFocus(e.target.value)}
              placeholder="e.g. Total morning sovereignty and zero evening distraction"
              className="w-full bg-paper-elevated border border-paper-border rounded-lg px-3 py-2 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent"
            />
          </div>

          {/* Concrete corrective actions list */}
          <div className="space-y-2 pt-2 border-t border-paper-border">
            <span className="text-xs font-sans uppercase tracking-wider text-paper-muted block">
              Concrete Corrective Actions ({correctiveActions.length}):
            </span>

            <form onSubmit={handleAddAction} className="flex gap-2">
              <input
                type="text"
                value={newActionInput}
                onChange={(e) => setNewActionInput(e.target.value)}
                placeholder="Add specific rule or protocol for next week..."
                className="w-full bg-paper-elevated border border-paper-border rounded-lg px-3 py-1.5 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent"
              />
              <Button variant="primary" size="sm" type="submit" className="text-xs font-sans shrink-0">
                <Plus size={13} className="mr-1" />
                Add Action
              </Button>
            </form>

            <div className="space-y-1.5 pt-2">
              {correctiveActions.map((action, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-paper-elevated border border-paper-border text-xs font-sans"
                >
                  <span className="text-paper-ink">{action}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveAction(idx)}
                    className="text-paper-muted hover:text-rose-600 p-1"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DISSECTION MODAL */}
      {isDissectionModalOpen && dissectionTarget && (
        <AccountabilityDissectionModal
          isOpen={isDissectionModalOpen}
          onClose={() => setIsDissectionModalOpen(false)}
          target={dissectionTarget}
          onSave={handleSaveDissection}
        />
      )}
    </div>
  );
};