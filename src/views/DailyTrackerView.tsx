import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { Check, Plus, Trash2, Flame, CheckSquare } from 'lucide-react';
import { HabitItem } from '../types';

export const DailyTrackerView: React.FC = () => {
  const { 
    habits, 
    toggleHabit, 
    addHabit, 
    deleteHabit, 
    currentStreak, 
    heatmapData 
  } = useData();

  const [newHabitName, setNewHabitName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<HabitItem['category']>('discipline');
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (newHabitName.trim()) {
      addHabit(newHabitName.trim(), selectedCategory);
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
            Multi-week consistency matrix. Protect your daily baseline non-negotiables.
          </p>
        </div>

        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="self-start sm:self-auto px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold flex items-center gap-2 shadow-sm transition-all cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Custom Habit</span>
        </button>
      </div>

      {/* Add Habit Form Modal/Dropdown */}
      {showAddForm && (
        <form onSubmit={handleAdd} className="p-5 rounded-2xl creamy-surface space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="e.g. 30 Minutes Reading, Cold Shower, Night Review..."
              value={newHabitName}
              onChange={(e) => setNewHabitName(e.target.value)}
              className="flex-1 px-3.5 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-violet-500"
              autoFocus
            />

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as any)}
              className="px-3.5 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)] focus:outline-none"
            >
              <option value="discipline" className="bg-[#121326] text-white">Discipline</option>
              <option value="study" className="bg-[#121326] text-white">Study</option>
              <option value="wellness" className="bg-[#121326] text-white">Wellness</option>
              <option value="mind" className="bg-[#121326] text-white">Mind</option>
            </select>

            <button
              type="submit"
              className="px-5 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-xl text-xs font-semibold shadow-sm cursor-pointer"
            >
              Create Habit
            </button>
          </div>
        </form>
      )}

      {/* 2. Top Stats: Overall Completion Rate & Max Streak */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl creamy-surface space-y-1">
          <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-[var(--text-muted)]">
            Today's Completion
          </span>
          <div className="text-3xl font-bold font-mono text-[var(--text-primary)]">
            {completionRate}%
          </div>
          <span className="text-xs text-[var(--text-secondary)]">
            {completedCount} of {habits.length} kept today
          </span>
        </div>

        <div className="p-5 rounded-2xl creamy-surface space-y-1">
          <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-[var(--text-muted)]">
            Longest Active Streak
          </span>
          <div className="text-3xl font-bold font-mono text-amber-400 flex items-center gap-1.5">
            <Flame className="w-6 h-6 fill-amber-400" />
            <span>{currentStreak} Days</span>
          </div>
          <span className="text-xs text-[var(--text-secondary)]">
            Unbroken consecutive momentum
          </span>
        </div>

        <div className="p-5 rounded-2xl creamy-surface space-y-1">
          <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-[var(--text-muted)]">
            Active Habit Pool
          </span>
          <div className="text-3xl font-bold font-mono text-violet-400">
            {habits.length} Habits
          </div>
          <span className="text-xs text-[var(--text-secondary)]">
            Calibrated daily disciplines
          </span>
        </div>
      </div>

      {/* 3. Habits Checklist Table */}
      <div className="rounded-3xl creamy-surface overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-sans">
            <thead>
              <tr className="border-b border-[var(--card-border)] bg-[var(--pill-bg)]">
                <th className="py-3 px-5 text-[var(--text-muted)] font-semibold uppercase tracking-wider text-[10px]">Habit</th>
                <th className="py-3 px-4 text-[var(--text-muted)] font-semibold uppercase tracking-wider text-[10px]">Category</th>
                <th className="py-3 px-4 text-[var(--text-muted)] font-semibold uppercase tracking-wider text-[10px]">Streak</th>
                <th className="py-3 px-5 text-right text-[var(--text-muted)] font-semibold uppercase tracking-wider text-[10px]">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--card-border)]">
              {habits.map((habit) => (
                <tr key={habit.id} className="hover:bg-white/[0.03] transition-colors">
                  <td className="py-3.5 px-5">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => toggleHabit(habit.id)}
                        className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-all cursor-pointer ${
                          habit.completed
                            ? 'bg-emerald-500 border-emerald-500 text-white'
                            : 'border-[var(--card-border)] bg-[var(--pill-bg)] hover:border-violet-400'
                        }`}
                      >
                        {habit.completed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </button>
                      <span className={`font-medium ${habit.completed ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
                        {habit.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-[var(--pill-bg)] text-[var(--text-muted)] border border-[var(--card-border)]">
                      {habit.category || 'discipline'}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-amber-400">
                    {habit.streak}d
                  </td>
                  <td className="py-3.5 px-5 text-right">
                    <button
                      onClick={() => deleteHabit(habit.id)}
                      className="text-[var(--text-muted)] hover:text-rose-400 transition-colors p-1 cursor-pointer"
                      title="Delete habit"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. 8-Week Consistency Heatmap */}
      <div className="p-6 rounded-3xl creamy-surface space-y-4">
        <div className="flex items-center justify-between border-b border-[var(--card-border)] pb-3">
          <div className="space-y-0.5">
            <h3 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider">
              8-Week Consistency Heatmap
            </h3>
            <p className="text-[11px] text-[var(--text-muted)]">
              Daily intensity based on real logged habits and deep study time.
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] text-[var(--text-muted)] font-mono">
            <span>Less</span>
            <span className="w-2.5 h-2.5 rounded-sm bg-[var(--pill-bg)]" />
            <span className="w-2.5 h-2.5 rounded-sm bg-violet-900/40" />
            <span className="w-2.5 h-2.5 rounded-sm bg-violet-700/60" />
            <span className="w-2.5 h-2.5 rounded-sm bg-violet-600/80" />
            <span className="w-2.5 h-2.5 rounded-sm bg-violet-500" />
            <span>More</span>
          </div>
        </div>

        <div className="overflow-x-auto pt-2">
          <div className="inline-flex gap-1.5">
            {weeks.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-1.5">
                {week.map((cell) => (
                  <div
                    key={cell.date}
                    className={`w-3.5 h-3.5 rounded-sm transition-all ${getHeatmapColor(cell.intensity)}`}
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
