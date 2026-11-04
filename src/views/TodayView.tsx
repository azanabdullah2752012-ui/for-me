import React, { useState } from 'react';
import { 
  Calendar, 
  Droplet, 
  Moon, 
  Dumbbell, 
  Play, 
  Pause, 
  CheckCircle2, 
  Circle, 
  Plus, 
  Flame, 
  Target, 
  Trash2,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { useData } from '../context/DataContext';

export const TodayView: React.FC = () => {
  const {
    tasks,
    toggleTask,
    addTask,
    deleteTask,
    habits,
    toggleHabit,
    hydrationLogs,
    hydrationTargetMl,
    addHydrationLog,
    sleepRecords,
    addSleepRecord,
    movementActivities,
    addMovementActivity,
    isStudyActive,
    studySeconds,
    studySubject,
    toggleStudyTimer,
    saveStudySession,
    studySessions,
    promise,
    incrementPromise,
    customTrackers,
    logCustomTrackerValue,
    journalDraft,
    setJournalDraft,
    saveJournalEntry
  } = useData();

  const [newTaskText, setNewTaskText] = useState('');
  const [reflectionSaved, setReflectionSaved] = useState(false);

  const todayStr = new Date().toISOString().slice(0, 10);

  // Today's computed aggregates
  const todayHydration = hydrationLogs.filter((l) => l.date === todayStr).reduce((s, l) => s + l.amountMl, 0);
  const hydrationPct = Math.min(100, Math.round((todayHydration / hydrationTargetMl) * 100));

  const latestSleep = sleepRecords[0] || {
    durationMinutes: 465,
    quality: 4,
    bedtime: '23:15',
    wakeTime: '07:00'
  };

  const todayMovement = movementActivities.filter((a) => a.date === todayStr).reduce((s, a) => s + a.durationMinutes, 0);

  const todaySessions = studySessions.filter((s) => s.timestamp.startsWith(todayStr));
  const todayStudyMins = todaySessions.reduce((s, ses) => s + Math.round(ses.durationSeconds / 60), 0);

  const completedHabits = habits.filter((h) => h.completed).length;
  const completedTasks = tasks.filter((t) => t.completed).length;

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTaskText.trim()) {
      addTask(newTaskText.trim());
      setNewTaskText('');
    }
  };

  const handleSaveQuickReflection = () => {
    if (!journalDraft.trim()) return;
    saveJournalEntry();
    setReflectionSaved(true);
    setTimeout(() => setReflectionSaved(false), 2000);
  };

  const formatStudyClock = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-8 animate-fadeIn font-sans">
      {/* 1. Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--card-border)] pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">
            <Calendar className="w-3.5 h-3.5 text-violet-400" />
            <span>Unified Daily Workspace</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Today Workspace
          </h2>
          <p className="text-xs text-[var(--text-secondary)] mt-1">
            Fast, unified daily logging synchronized automatically with all deep tracking ledgers.
          </p>
        </div>

        {/* Quick summary badges */}
        <div className="flex items-center gap-3">
          <div className="px-3.5 py-1.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-sans">
            <span className="text-[var(--text-muted)]">Habits: </span>
            <span className="font-bold text-[var(--text-primary)]">{completedHabits}/{habits.length}</span>
          </div>
          <div className="px-3.5 py-1.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-sans">
            <span className="text-[var(--text-muted)]">Tasks: </span>
            <span className="font-bold text-[var(--text-primary)]">{completedTasks}/{tasks.length}</span>
          </div>
          <div className="px-3.5 py-1.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-sans">
            <span className="text-[var(--text-muted)]">Study: </span>
            <span className="font-bold text-violet-400 font-mono">{todayStudyMins}m</span>
          </div>
        </div>
      </div>

      {/* 2. Tactile Quick-Loggers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Hydration Logger */}
        <div className="p-5 rounded-3xl creamy-surface space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)]">
              <Droplet className="w-4 h-4 text-cyan-400" />
              <span>Hydration</span>
            </div>
            <span className="text-[10px] font-mono text-[var(--text-muted)]">{hydrationPct}%</span>
          </div>

          <div>
            <div className="text-2xl font-bold font-mono text-[var(--text-primary)]">
              {todayHydration} <span className="text-xs font-normal text-[var(--text-muted)]">/ {hydrationTargetMl}ml</span>
            </div>
          </div>

          <div className="w-full h-1.5 rounded-full bg-[var(--pill-bg)] overflow-hidden">
            <div className="h-full bg-cyan-400 rounded-full" style={{ width: `${hydrationPct}%` }} />
          </div>

          <div className="flex gap-1.5 pt-1">
            <button
              onClick={() => addHydrationLog(250, 'glass_250')}
              className="flex-1 py-1.5 rounded-xl bg-[var(--pill-bg)] hover:bg-cyan-500/20 text-xs font-mono font-semibold transition-colors"
            >
              +250ml
            </button>
            <button
              onClick={() => addHydrationLog(500, 'bottle_500')}
              className="flex-1 py-1.5 rounded-xl bg-[var(--pill-bg)] hover:bg-cyan-500/20 text-xs font-mono font-semibold transition-colors"
            >
              +500ml
            </button>
          </div>
        </div>

        {/* Sleep Tracker */}
        <div className="p-5 rounded-3xl creamy-surface space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)]">
              <Moon className="w-4 h-4 text-indigo-400" />
              <span>Sleep</span>
            </div>
            <span className="text-[10px] font-mono text-indigo-400">{'★'.repeat(latestSleep.quality)}</span>
          </div>

          <div>
            <div className="text-2xl font-bold font-mono text-[var(--text-primary)]">
              {Math.floor(latestSleep.durationMinutes / 60)}h {latestSleep.durationMinutes % 60}m
            </div>
            <div className="text-[10px] text-[var(--text-muted)] mt-0.5">
              Bed: {latestSleep.bedtime} → Wake: {latestSleep.wakeTime}
            </div>
          </div>

          <button
            onClick={() => {
              addSleepRecord({
                date: todayStr,
                bedtime: '23:30',
                wakeTime: '07:15',
                quality: 4,
                notes: 'Quick logged from Today Workspace'
              });
            }}
            className="w-full py-1.5 rounded-xl bg-[var(--pill-bg)] hover:bg-indigo-500/20 text-xs text-indigo-300 font-medium transition-colors"
          >
            Log Restful Night
          </button>
        </div>

        {/* Movement Tracker */}
        <div className="p-5 rounded-3xl creamy-surface space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)]">
              <Dumbbell className="w-4 h-4 text-emerald-400" />
              <span>Movement</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400">{todayMovement}m</span>
          </div>

          <div>
            <div className="text-2xl font-bold font-mono text-[var(--text-primary)]">
              {todayMovement} <span className="text-xs font-normal text-[var(--text-muted)]">/ 45 min target</span>
            </div>
          </div>

          <div className="flex gap-1.5 pt-1">
            <button
              onClick={() => {
                addMovementActivity({
                  date: todayStr,
                  activityType: 'walking',
                  activityName: 'Brisk Walk',
                  durationMinutes: 20,
                  notes: 'Quick logged from Today'
                });
              }}
              className="flex-1 py-1.5 rounded-xl bg-[var(--pill-bg)] hover:bg-emerald-500/20 text-xs font-medium transition-colors"
            >
              +20m Walk
            </button>
            <button
              onClick={() => {
                addMovementActivity({
                  date: todayStr,
                  activityType: 'calisthenics',
                  activityName: 'Calisthenics & Core',
                  durationMinutes: 30,
                  notes: 'Quick logged from Today'
                });
              }}
              className="flex-1 py-1.5 rounded-xl bg-[var(--pill-bg)] hover:bg-emerald-500/20 text-xs font-medium transition-colors"
            >
              +30m Workout
            </button>
          </div>
        </div>

        {/* Study Timer Quick Tile */}
        <div className="p-5 rounded-3xl creamy-surface space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)]">
              <Sparkles className="w-4 h-4 text-violet-400" />
              <span>Study Focus</span>
            </div>
            <span className="text-[10px] font-mono text-violet-400">{studySubject}</span>
          </div>

          <div className="text-2xl font-mono font-bold text-[var(--text-primary)]">
            {formatStudyClock(studySeconds)}
          </div>

          <div className="flex gap-1.5">
            <button
              onClick={toggleStudyTimer}
              className="flex-1 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold flex items-center justify-center gap-1"
            >
              {isStudyActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current ml-0.5" />}
              <span>{isStudyActive ? 'Pause' : 'Start'}</span>
            </button>
            <button
              onClick={saveStudySession}
              disabled={studySeconds < 30}
              className="px-2.5 py-1.5 rounded-xl bg-[var(--pill-bg)] hover:bg-[var(--card-border)] text-xs text-[var(--text-secondary)] disabled:opacity-40"
              title="Save focus session"
            >
              Save
            </button>
          </div>
        </div>
      </div>

      {/* 3. Daily Promise & Custom Trackers */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Daily Promise */}
        <div className="lg:col-span-1 p-6 rounded-3xl creamy-surface space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
            <span className="text-xs font-semibold text-[var(--text-primary)] flex items-center gap-2">
              <Target className="w-4 h-4 text-violet-400" /> Daily Promise
            </span>
            <span className="text-[10px] font-mono text-[var(--text-muted)]">By {promise.deadline}</span>
          </div>

          <p className="text-xs text-[var(--text-secondary)] leading-relaxed italic">
            &ldquo;{promise.text}&rdquo;
          </p>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-[var(--text-muted)]">Progress</span>
              <span className="font-bold text-[var(--text-primary)]">{promise.current} / {promise.target} {promise.unit}</span>
            </div>
            <div className="w-full h-2 rounded-full bg-[var(--pill-bg)] overflow-hidden">
              <div 
                className="h-full bg-violet-600 rounded-full" 
                style={{ width: `${Math.min(100, (promise.current / promise.target) * 100)}%` }}
              />
            </div>
          </div>

          <button
            onClick={incrementPromise}
            disabled={promise.current >= promise.target}
            className="w-full py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs transition-colors disabled:opacity-50"
          >
            {promise.current >= promise.target ? '✓ Promise Kept Today' : `Increment Promise (+1 ${promise.unit})`}
          </button>
        </div>

        {/* Active Custom Trackers Tile */}
        <div className="lg:col-span-2 p-6 rounded-3xl creamy-surface space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
            <span className="text-xs font-semibold text-[var(--text-primary)] flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-400" /> Active Custom Metrics
            </span>
            <span className="text-xs font-mono text-[var(--text-muted)]">{customTrackers.filter((c) => c.enabled).length} active</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {customTrackers.filter((ct) => ct.enabled).map((ct) => (
              <div key={ct.id} className="p-3.5 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-xs text-[var(--text-primary)]">{ct.name}</span>
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">
                    Target: {ct.target} {ct.unit}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-[var(--text-primary)]">
                    {ct.currentValue} {ct.unit}
                  </span>
                  <div className="flex gap-1">
                    <button
                      onClick={() => logCustomTrackerValue(ct.id, Math.max(0, ct.currentValue - 1))}
                      className="w-6 h-6 rounded-lg bg-[var(--surface-bg)] border border-[var(--card-border)] text-xs flex items-center justify-center font-bold"
                    >
                      -
                    </button>
                    <button
                      onClick={() => logCustomTrackerValue(ct.id, ct.currentValue + 1)}
                      className="w-6 h-6 rounded-lg bg-[var(--surface-bg)] border border-[var(--card-border)] text-xs flex items-center justify-center font-bold text-violet-400"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Habits & Tasks Checklists */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Habits Checklist */}
        <div className="p-6 rounded-3xl creamy-surface space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
            <span className="text-xs font-semibold text-[var(--text-primary)] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Today&apos;s Habits ({completedHabits}/{habits.length})
            </span>
            <span className="text-[10px] font-mono text-emerald-400">
              {habits.length > 0 ? Math.round((completedHabits / habits.length) * 100) : 0}% Done
            </span>
          </div>

          <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
            {habits.map((h) => (
              <div
                key={h.id}
                onClick={() => toggleHabit(h.id)}
                className={`flex items-center justify-between p-3 rounded-2xl border text-xs cursor-pointer transition-all ${
                  h.completed
                    ? 'bg-emerald-500/10 border-emerald-500/20 text-[var(--text-primary)]'
                    : 'bg-[var(--pill-bg)] border-[var(--card-border)] text-[var(--text-secondary)] hover:border-[var(--text-muted)]/40'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {h.completed ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  ) : (
                    <Circle className="w-4 h-4 text-[var(--text-muted)] shrink-0" />
                  )}
                  <span className={h.completed ? 'line-through text-[var(--text-muted)]' : 'font-medium'}>
                    {h.name}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-amber-400">{h.streak}d streak</span>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Tasks Checklist */}
        <div className="p-6 rounded-3xl creamy-surface space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
            <span className="text-xs font-semibold text-[var(--text-primary)] flex items-center gap-2">
              <Plus className="w-4 h-4 text-violet-400" /> Today&apos;s Action Tasks ({completedTasks}/{tasks.length})
            </span>
          </div>

          <form onSubmit={handleAddTask} className="flex gap-2">
            <input
              type="text"
              placeholder="Add immediate action task..."
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
              className="flex-1 px-3.5 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold"
            >
              Add
            </button>
          </form>

          <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
            {tasks.map((t) => (
              <div
                key={t.id}
                className="flex items-center justify-between p-3 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs"
              >
                <div 
                  onClick={() => toggleTask(t.id)}
                  className="flex items-center gap-2.5 cursor-pointer flex-1"
                >
                  {t.completed ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  ) : (
                    <Circle className="w-4 h-4 text-[var(--text-muted)] shrink-0" />
                  )}
                  <span className={t.completed ? 'line-through text-[var(--text-muted)]' : 'text-[var(--text-primary)]'}>
                    {t.text}
                  </span>
                </div>
                <button
                  onClick={() => deleteTask(t.id)}
                  className="text-[var(--text-muted)] hover:text-rose-400 p-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Quick Daily Reflection Box */}
      <div className="p-6 rounded-3xl creamy-surface space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-[var(--card-border)]">
          <span className="text-xs font-semibold text-[var(--text-primary)] flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-violet-400" /> Evening Reflection & Debrief
          </span>
          <span className="text-[10px] font-mono text-[var(--text-muted)]">Direct Ledger Entry</span>
        </div>

        <textarea
          rows={2}
          value={journalDraft}
          onChange={(e) => setJournalDraft(e.target.value)}
          placeholder="One breakthrough, observation, or unburdened thought from today..."
          className="w-full px-3.5 py-2.5 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none"
        />

        <div className="flex justify-between items-center">
          {reflectionSaved ? (
            <span className="text-xs text-emerald-400 font-mono">✓ Reflection committed to journalEntries</span>
          ) : (
            <span className="text-[11px] text-[var(--text-muted)]">Saved securely in private localStorage</span>
          )}

          <button
            onClick={handleSaveQuickReflection}
            disabled={!journalDraft.trim()}
            className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold disabled:opacity-40"
          >
            Save to Reflection Ledger
          </button>
        </div>
      </div>
    </div>
  );
};
