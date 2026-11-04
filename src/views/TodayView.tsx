import React, { useState } from 'react';
import { 
  Calendar, 
  Droplets, 
  Moon, 
  Dumbbell, 
  Play, 
  Pause, 
  CheckCircle2, 
  Circle, 
  Plus, 
  Flame, 
  Target, 
  Check
} from 'lucide-react';
import { useData } from '../context/DataContext';

export const TodayView: React.FC = () => {
  const {
    tasks,
    toggleTask,
    addTask,
    habits,
    toggleHabit,
    hydration,
    setHydration,
    sleepHours,
    sleepMinutes,
    setSleep,
    healthRecord,
    updateHealthRecord,
    isStudyActive,
    studySeconds,
    studySubject,
    toggleStudyTimer,
    saveStudySession,
    promise,
    incrementPromise,
    customTrackers,
    logCustomTrackerValue
  } = useData();

  const [newTaskText, setNewTaskText] = useState('');

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTaskText.trim()) {
      addTask(newTaskText.trim());
      setNewTaskText('');
    }
  };

  const completedHabits = habits.filter((h) => h.completed).length;
  const completedTasks = tasks.filter((t) => t.completed).length;

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
            <span>Daily Tracking Hub</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Today Workspace
          </h2>
          <p className="text-xs text-[var(--text-secondary)] mt-1">
            Frictionless logging for your daily non-negotiables, habits, and focus.
          </p>
        </div>

        {/* Quick summary pill */}
        <div className="flex items-center gap-3">
          <div className="px-3.5 py-1.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-sans">
            <span className="text-[var(--text-muted)]">Habits: </span>
            <span className="font-bold text-[var(--text-primary)]">{completedHabits}/{habits.length}</span>
          </div>
          <div className="px-3.5 py-1.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-sans">
            <span className="text-[var(--text-muted)]">Tasks: </span>
            <span className="font-bold text-[var(--text-primary)]">{completedTasks}/{tasks.length}</span>
          </div>
        </div>
      </div>

      {/* 2. Tactile Quick-Loggers (Zero complex forms) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Hydration Logger */}
        <div className="p-4 rounded-2xl creamy-surface space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)]">
              <Droplets className="w-4 h-4 text-cyan-400" />
              <span>Hydration</span>
            </div>
            <span className="text-xs font-mono font-bold text-cyan-400">
              {hydration * 250}ml
            </span>
          </div>

          <p className="text-[11px] text-[var(--text-muted)]">
            Target: 8 glasses (2,000ml)
          </p>

          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={() => setHydration((prev) => Math.max(0, prev - 1))}
              className="flex-1 py-1.5 rounded-xl bg-[var(--pill-bg)] hover:bg-white/[0.08] text-xs font-mono text-[var(--text-primary)] border border-[var(--card-border)] cursor-pointer"
            >
              -1
            </button>
            <button
              onClick={() => setHydration((prev) => prev + 1)}
              className="flex-1 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-xs font-mono text-cyan-300 font-bold border border-cyan-500/40 cursor-pointer"
            >
              +1 Glass
            </button>
          </div>
        </div>

        {/* Sleep Duration */}
        <div className="p-4 rounded-2xl creamy-surface space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)]">
              <Moon className="w-4 h-4 text-indigo-400" />
              <span>Sleep</span>
            </div>
            <span className="text-xs font-mono font-bold text-indigo-400">
              {sleepHours}h {sleepMinutes}m
            </span>
          </div>

          <p className="text-[11px] text-[var(--text-muted)]">
            Target: 7.5 – 8.5 hours
          </p>

          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={() => setSleep(Math.max(4, sleepHours - 1), sleepMinutes)}
              className="flex-1 py-1.5 rounded-xl bg-[var(--pill-bg)] hover:bg-white/[0.08] text-xs font-mono text-[var(--text-primary)] border border-[var(--card-border)] cursor-pointer"
            >
              -1h
            </button>
            <button
              onClick={() => setSleep(Math.min(12, sleepHours + 1), sleepMinutes)}
              className="flex-1 py-1.5 rounded-xl bg-indigo-500/20 hover:bg-indigo-500/30 text-xs font-mono text-indigo-300 font-bold border border-indigo-500/40 cursor-pointer"
            >
              +1h
            </button>
          </div>
        </div>

        {/* Workout / Movement Check */}
        <div className="p-4 rounded-2xl creamy-surface space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)]">
              <Dumbbell className="w-4 h-4 text-emerald-400" />
              <span>Workout</span>
            </div>
            <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md ${healthRecord.workoutCompleted ? 'bg-emerald-500/20 text-emerald-300' : 'bg-zinc-500/20 text-zinc-400'}`}>
              {healthRecord.workoutCompleted ? 'Done' : 'Pending'}
            </span>
          </div>

          <p className="text-[11px] text-[var(--text-muted)] truncate">
            {healthRecord.workoutType || 'Movement target'}
          </p>

          <button
            onClick={() => updateHealthRecord({ workoutCompleted: !healthRecord.workoutCompleted })}
            className={`w-full py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              healthRecord.workoutCompleted
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                : 'bg-[var(--pill-bg)] text-[var(--text-primary)] border-[var(--card-border)] hover:bg-white/[0.08]'
            }`}
          >
            {healthRecord.workoutCompleted ? <Check className="w-3.5 h-3.5" /> : null}
            <span>{healthRecord.workoutCompleted ? 'Completed' : 'Mark Done'}</span>
          </button>
        </div>

        {/* Deep Focus Stopwatch Quick Toggle */}
        <div className="p-4 rounded-2xl creamy-surface space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)]">
              <Target className="w-4 h-4 text-violet-400" />
              <span>Deep Work</span>
            </div>
            <span className="text-xs font-mono font-bold text-violet-400">
              {formatStudyClock(studySeconds)}
            </span>
          </div>

          <p className="text-[11px] text-[var(--text-muted)] truncate">
            Subject: {studySubject}
          </p>

          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={toggleStudyTimer}
              className={`flex-1 py-1.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                isStudyActive 
                  ? 'bg-amber-500 text-black font-bold' 
                  : 'bg-violet-600 hover:bg-violet-500 text-white'
              }`}
            >
              {isStudyActive ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              <span>{isStudyActive ? 'Pause' : 'Focus'}</span>
            </button>
            {studySeconds > 30 && (
              <button
                onClick={saveStudySession}
                className="px-2.5 py-1.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-xs font-sans text-[var(--text-primary)] border border-[var(--card-border)] cursor-pointer"
                title="Save study session to ledger"
              >
                Log
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 3. Daily Promise (Optional Feature, Non-Dominant) */}
      <div className="p-5 rounded-2xl creamy-surface flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-violet-400">
              Optional Daily Promise
            </span>
            <span className="text-[10px] text-[var(--text-muted)] font-mono">
              Due: {promise.deadline}
            </span>
          </div>
          <p className="text-xs font-medium text-[var(--text-primary)]">
            "{promise.text}"
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="text-right">
            <span className="text-xs font-mono font-bold text-[var(--text-primary)]">
              {promise.current} / {promise.target} {promise.unit}
            </span>
          </div>
          <button
            onClick={incrementPromise}
            className="px-3 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Progress</span>
          </button>
        </div>
      </div>

      {/* 4. Two-Column Core: Daily Tasks vs Active Habits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Daily Tasks */}
        <div className="p-5 rounded-2xl creamy-surface space-y-4">
          <div className="flex items-center justify-between border-b border-[var(--card-border)] pb-3">
            <h3 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider">
              Today's Tasks ({completedTasks}/{tasks.length})
            </h3>
            <span className="text-[11px] text-[var(--text-muted)] font-mono">
              {tasks.length > 0 ? Math.round((completedTasks / tasks.length) * 100) : 0}% done
            </span>
          </div>

          <form onSubmit={handleAddTask} className="flex gap-2">
            <input
              type="text"
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
              placeholder="Add task for today..."
              className="flex-1 px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-violet-500"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white cursor-pointer"
            >
              <Plus className="w-4 h-4" />
            </button>
          </form>

          <div className="space-y-1.5 max-h-72 overflow-y-auto pr-1">
            {tasks.map((task) => (
              <div
                key={task.id}
                onClick={() => toggleTask(task.id)}
                className={`p-2.5 rounded-xl border flex items-center gap-3 transition-all cursor-pointer ${
                  task.completed
                    ? 'bg-violet-500/10 border-violet-500/20 text-[var(--text-muted)] line-through'
                    : 'bg-[var(--pill-bg)] border-[var(--card-border)] text-[var(--text-primary)] hover:bg-white/[0.04]'
                }`}
              >
                {task.completed ? (
                  <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                ) : (
                  <Circle className="w-4 h-4 text-[var(--text-muted)] shrink-0" />
                )}
                <span className="text-xs font-medium truncate flex-1">{task.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Habits Checklist */}
        <div className="p-5 rounded-2xl creamy-surface space-y-4">
          <div className="flex items-center justify-between border-b border-[var(--card-border)] pb-3">
            <h3 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider">
              Daily Non-Negotiable Habits
            </h3>
            <span className="text-[11px] text-[var(--text-muted)] font-mono">
              {completedHabits}/{habits.length} kept
            </span>
          </div>

          <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
            {habits.map((h) => (
              <div
                key={h.id}
                onClick={() => toggleHabit(h.id)}
                className={`p-3 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                  h.completed
                    ? 'bg-emerald-500/10 border-emerald-500/25 text-[var(--text-primary)]'
                    : 'bg-[var(--pill-bg)] border-[var(--card-border)] text-[var(--text-secondary)] hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center gap-3 truncate">
                  {h.completed ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  ) : (
                    <Circle className="w-4 h-4 text-[var(--text-muted)] shrink-0" />
                  )}
                  <span className="text-xs font-medium truncate">{h.name}</span>
                </div>

                <div className="flex items-center gap-1.5 shrink-0 text-[11px] font-mono text-amber-400">
                  <Flame className="w-3.5 h-3.5" />
                  <span>{h.streak}d</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Custom Trackers (if user created any) */}
      {customTrackers.filter((t) => t.enabled).length > 0 && (
        <div className="p-5 rounded-2xl creamy-surface space-y-3">
          <h3 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider">
            Custom Trackers
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {customTrackers.filter((t) => t.enabled).map((ct) => (
              <div key={ct.id} className="p-3.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[var(--text-primary)] truncate">{ct.name}</span>
                  <span className="font-mono text-violet-400">{ct.currentValue} / {ct.target} {ct.unit}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => logCustomTrackerValue(ct.id, Math.max(0, ct.currentValue - 1))}
                    className="flex-1 py-1 rounded-lg bg-black/20 hover:bg-black/40 text-[11px] text-[var(--text-primary)] border border-[var(--card-border)] cursor-pointer"
                  >
                    -
                  </button>
                  <button
                    onClick={() => logCustomTrackerValue(ct.id, ct.currentValue + 1)}
                    className="flex-1 py-1 rounded-lg bg-violet-600/30 hover:bg-violet-600/50 text-violet-200 text-[11px] font-bold border border-violet-500/40 cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
