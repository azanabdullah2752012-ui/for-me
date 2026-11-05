import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { 
  Check, 
  Plus, 
  Trash2, 
  Flame, 
  CheckSquare, 
  Calendar, 
  TrendingDown,
  Sparkles
} from 'lucide-react';
import { HabitItem } from '../types';

export const DailyTrackerView: React.FC = () => {
  const { 
    habits, 
    toggleHabit, 
    toggleHabitDate,
    addHabitDetailed, 
    deleteHabit, 
    currentStreak, 
    heatmapData 
  } = useData();

  const [newHabitName, setNewHabitName] = useState('');
  const [newHabitType, setNewHabitType] = useState<'positive' | 'reduction'>('positive');
  const [newHabitCategory, setNewHabitCategory] = useState<HabitItem['category']>('discipline');
  const [showAddForm, setShowAddForm] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'all' | 'positive' | 'reduction'>('all');

  // Past 7 dates for the interactive consistency matrix
  const matrixDates = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    return d.toISOString().slice(0, 10);
  });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (newHabitName.trim()) {
      addHabitDetailed({
        name: newHabitName.trim(),
        completed: false,
        category: newHabitCategory,
        type: newHabitType,
        frequencyType: 'daily',
        history: {},
        bestStreak: 0,
        createdDate: new Date().toISOString().slice(0, 10),
      });
      setNewHabitName('');
      setShowAddForm(false);
    }
  };

  // Group heatmap into 8 weeks of 7 days
  const weeks: typeof heatmapData[] = [];
  for (let i = 0; i < heatmapData.length; i += 7) {
    weeks.push(heatmapData.slice(i, i + 7));
  }

  const getHeatmapColor = (intensity: number) => {
    switch (intensity) {
      case 4:
        return 'bg-violet-500 shadow-sm shadow-violet-500/50';
      case 3:
        return 'bg-violet-600/80';
      case 2:
        return 'bg-violet-700/60';
      case 1:
        return 'bg-violet-900/40';
      default:
        return 'bg-[var(--pill-bg)]';
    }
  };

  const filteredHabits = habits.filter((h) => {
    if (activeFilter === 'positive') return h.type !== 'reduction';
    if (activeFilter === 'reduction') return h.type === 'reduction';
    return true;
  });

  const completedCount = habits.filter((h) => h.completed).length;
  const completionRate = habits.length > 0 ? Math.round((completedCount / habits.length) * 100) : 0;

  return (
    <div className="space-y-8 animate-fadeIn font-sans">
      {/* 1. Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--card-border)] pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">
            <CheckSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>Consistency Engine</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Habits & Daily Routine
          </h2>
          <p className="text-xs text-[var(--text-secondary)] mt-1">
            Track positive non-negotiables to build and habit reductions to conquer.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-mono font-bold text-amber-400">
            <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>{currentStreak} Day Streak</span>
          </div>

          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold flex items-center gap-2 shadow-sm transition-all cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Create Habit</span>
          </button>
        </div>
      </div>

      {/* Add Habit Form Modal/Dropdown */}
      {showAddForm && (
        <form onSubmit={handleAdd} className="p-6 rounded-3xl creamy-surface space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[var(--card-border)]">
            <h3 className="text-sm font-semibold text-[var(--text-primary)]">Add New Habit</h3>
            <span className="text-[10px] font-mono text-[var(--text-muted)]">Positive or Reduction</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-[11px] text-[var(--text-muted)]">Habit Name:</label>
              <input
                type="text"
                placeholder="e.g. Morning 20m Walk, Avoid Mindless Scrolling..."
                value={newHabitName}
                onChange={(e) => setNewHabitName(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-violet-500"
                autoFocus
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] text-[var(--text-muted)]">Habit Type:</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setNewHabitType('positive')}
                  className={`py-2 rounded-xl text-xs font-medium border flex items-center justify-center gap-1.5 transition-all ${
                    newHabitType === 'positive'
                      ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400'
                      : 'bg-[var(--pill-bg)] border-[var(--card-border)] text-[var(--text-secondary)]'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Build (Positive)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setNewHabitType('reduction')}
                  className={`py-2 rounded-xl text-xs font-medium border flex items-center justify-center gap-1.5 transition-all ${
                    newHabitType === 'reduction'
                      ? 'bg-rose-500/20 border-rose-500/40 text-rose-400'
                      : 'bg-[var(--pill-bg)] border-[var(--card-border)] text-[var(--text-secondary)]'
                  }`}
                >
                  <TrendingDown className="w-3.5 h-3.5" />
                  <span>Reduce / Quit</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-2">
            <div className="flex items-center gap-2">
              <label className="text-[11px] text-[var(--text-muted)]">Category:</label>
              <select
                value={newHabitCategory}
                onChange={(e) => setNewHabitCategory(e.target.value as any)}
                className="px-3 py-1.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)] focus:outline-none"
              >
                <option value="discipline">Discipline</option>
                <option value="study">Study</option>
                <option value="wellness">Wellness</option>
                <option value="mind">Mind</option>
              </select>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 rounded-xl bg-[var(--pill-bg)] text-xs text-[var(--text-secondary)] font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold"
              >
                Save Habit
              </button>
            </div>
          </div>
        </form>
      )}

      {/* 2. Top Metric Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="p-5 rounded-3xl creamy-surface space-y-2">
          <span className="text-xs text-[var(--text-muted)]">Today&apos;s Completion</span>
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-mono font-bold text-[var(--text-primary)]">
              {completedCount} <span className="text-sm font-normal text-[var(--text-muted)]">/ {habits.length}</span>
            </span>
            <span className="text-sm font-mono text-emerald-400 font-bold">{completionRate}%</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-[var(--pill-bg)] overflow-hidden">
            <div className="h-full bg-emerald-400 rounded-full transition-all duration-300" style={{ width: `${completionRate}%` }} />
          </div>
        </div>

        <div className="p-5 rounded-3xl creamy-surface space-y-2">
          <span className="text-xs text-[var(--text-muted)]">Active Streaks</span>
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-mono font-bold text-amber-400">{currentStreak}</span>
            <span className="text-xs text-[var(--text-secondary)] font-mono">Current Longest</span>
          </div>
          <p className="text-[11px] text-[var(--text-muted)]">
            Maintained across consecutive recorded daily entries.
          </p>
        </div>

        <div className="p-5 rounded-3xl creamy-surface space-y-2">
          <span className="text-xs text-[var(--text-muted)]">All-Time Best Streak</span>
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-mono font-bold text-[var(--text-primary)]">
              {Math.max(...habits.map((h) => h.bestStreak || h.streak), 0)}
            </span>
            <span className="text-xs text-[var(--text-secondary)] font-mono">Personal Record</span>
          </div>
          <p className="text-[11px] text-[var(--text-muted)]">
            Continuous adherence record in your private ledger.
          </p>
        </div>
      </div>

      {/* 3. 7-Day Interactive Matrix & Habit Checklist */}
      <div className="p-6 rounded-3xl creamy-surface space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[var(--card-border)]">
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)]">7-Day Consistency Ledger</h3>
            <p className="text-xs text-[var(--text-muted)]">Click on any past date dot to verify or adjust your historical ledger</p>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[var(--pill-bg)]">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                activeFilter === 'all' ? 'bg-[var(--surface-bg)] text-[var(--text-primary)] shadow-sm' : 'text-[var(--text-muted)]'
              }`}
            >
              All ({habits.length})
            </button>
            <button
              onClick={() => setActiveFilter('positive')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                activeFilter === 'positive' ? 'bg-[var(--surface-bg)] text-emerald-400 shadow-sm' : 'text-[var(--text-muted)]'
              }`}
            >
              Build ({habits.filter((h) => h.type !== 'reduction').length})
            </button>
            <button
              onClick={() => setActiveFilter('reduction')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                activeFilter === 'reduction' ? 'bg-[var(--surface-bg)] text-rose-400 shadow-sm' : 'text-[var(--text-muted)]'
              }`}
            >
              Reduce ({habits.filter((h) => h.type === 'reduction').length})
            </button>
          </div>
        </div>

        {/* Matrix Header Row: Dates */}
        <div className="overflow-x-auto">
          <div className="min-w-[550px] space-y-2">
            <div className="flex items-center justify-between px-3 py-1 text-[11px] font-mono text-[var(--text-muted)]">
              <span className="w-1/2">Habit Discipline</span>
              <div className="flex items-center gap-4">
                {matrixDates.map((dateStr) => {
                  const dayLetter = new Date(dateStr + 'T12:00:00Z').toLocaleDateString('en-US', { weekday: 'narrow' });
                  const isToday = dateStr === new Date().toISOString().slice(0, 10);
                  return (
                    <span 
                      key={dateStr} 
                      className={`w-6 text-center ${isToday ? 'font-bold text-violet-400' : ''}`}
                    >
                      {dayLetter}
                    </span>
                  );
                })}
                <span className="w-12 text-right">Streak</span>
              </div>
            </div>

            {/* Habit Rows */}
            {filteredHabits.map((h) => {
              const isReduction = h.type === 'reduction';

              return (
                <div 
                  key={h.id}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs hover:border-[var(--text-muted)]/30 transition-all group"
                >
                  <div className="flex items-center gap-3 w-1/2">
                    <button
                      onClick={() => toggleHabit(h.id)}
                      className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-all cursor-pointer ${
                        h.completed
                          ? isReduction ? 'bg-rose-500 border-rose-500 text-white' : 'bg-emerald-500 border-emerald-500 text-white'
                          : 'border-[var(--card-border)] bg-[var(--surface-bg)]'
                      }`}
                    >
                      {h.completed && <Check className="w-3.5 h-3.5" />}
                    </button>
                    <div>
                      <span className={`font-semibold ${h.completed ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
                        {h.name}
                      </span>
                      <span className={`ml-2 text-[9px] uppercase px-1.5 py-0.5 rounded font-mono ${
                        isReduction ? 'bg-rose-500/10 text-rose-400' : 'bg-emerald-500/10 text-emerald-400'
                      }`}>
                        {isReduction ? 'reduction' : h.category || 'habit'}
                      </span>
                    </div>
                  </div>

                  {/* 7-Day History Matrix Dots */}
                  <div className="flex items-center gap-4">
                    {matrixDates.map((dateStr) => {
                      const isComplete = h.history ? !!h.history[dateStr] : false;
                      const isToday = dateStr === new Date().toISOString().slice(0, 10);
                      const activeState = isToday ? h.completed : isComplete;

                      return (
                        <button
                          key={dateStr}
                          onClick={() => toggleHabitDate(h.id, dateStr)}
                          className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] transition-all cursor-pointer ${
                            activeState
                              ? isReduction 
                                ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' 
                                : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold'
                              : 'bg-[var(--surface-bg)] text-[var(--text-muted)]/30 border border-transparent hover:border-[var(--card-border)]'
                          }`}
                          title={`Click to toggle ${dateStr}`}
                        >
                          {activeState ? '✓' : '·'}
                        </button>
                      );
                    })}

                    <span className="w-12 text-right font-mono font-bold text-amber-400">
                      {h.streak}d
                    </span>

                    <button
                      onClick={() => deleteHabit(h.id)}
                      className="text-[var(--text-muted)] hover:text-rose-400 transition-colors p-1"
                      title="Delete habit"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. Multi-Week Heatmap Matrix */}
      <div className="p-6 rounded-3xl creamy-surface space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
              <Calendar className="w-4 h-4 text-violet-400" /> 8-Week Consistency Heatmap
            </h3>
            <p className="text-xs text-[var(--text-muted)]">56-day rolling view derived from actual habit completions</p>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] font-mono text-[var(--text-muted)]">
            <span>Less</span>
            <div className="w-2.5 h-2.5 rounded bg-[var(--pill-bg)]" />
            <div className="w-2.5 h-2.5 rounded bg-violet-900/40" />
            <div className="w-2.5 h-2.5 rounded bg-violet-700/60" />
            <div className="w-2.5 h-2.5 rounded bg-violet-600/80" />
            <div className="w-2.5 h-2.5 rounded bg-violet-500" />
            <span>More</span>
          </div>
        </div>

        <div className="overflow-x-auto pb-2">
          <div className="inline-flex gap-1.5">
            {weeks.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-1.5">
                {week.map((cell) => (
                  <div
                    key={cell.date}
                    className={`w-4 h-4 rounded-md transition-all cursor-default ${getHeatmapColor(cell.intensity)}`}
                    title={`${cell.date}: ${cell.habitsCompleted} habits kept`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
