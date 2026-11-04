import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { 
  Target, 
  Plus, 
  CheckCircle2, 
  Circle, 
  Trash2, 
  Calendar, 
  Flag
} from 'lucide-react';
import { GoalItem } from '../types';

export const GoalsView: React.FC = () => {
  const { 
    goals, 
    addGoalItem, 
    toggleGoalMilestone, 
    deleteGoalItem 
  } = useData();

  const [activeFilter, setActiveFilter] = useState<'all' | 'active' | 'completed' | 'paused'>('active');
  const [showAddModal, setShowAddModal] = useState(false);

  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<GoalItem['category']>('academics');
  const [newTargetDate, setNewTargetDate] = useState('2026-12-31');
  const [milestonesText, setMilestonesText] = useState('Milestone 1\nMilestone 2\nMilestone 3');

  const handleAddGoal = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTitle.trim()) {
      const parsedMilestones = milestonesText
        .split('\n')
        .map((m) => m.trim())
        .filter(Boolean)
        .map((text, idx) => ({ id: `m_${Date.now()}_${idx}`, text, completed: false }));

      addGoalItem({
        title: newTitle.trim(),
        category: newCategory,
        targetDate: newTargetDate,
        status: 'active',
        milestones: parsedMilestones,
      });

      setNewTitle('');
      setShowAddModal(false);
    }
  };

  const filteredGoals = goals.filter((g) => {
    if (activeFilter === 'all') return true;
    return g.status === activeFilter;
  });

  return (
    <div className="space-y-8 animate-fadeIn font-sans">
      {/* 1. Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--card-border)] pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">
            <Target className="w-3.5 h-3.5 text-indigo-400" />
            <span>Vision & Objectives</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Goals & Milestones
          </h2>
          <p className="text-xs text-[var(--text-secondary)] mt-1">
            Transforming multi-quarter aspirations into discrete, verifiable milestones.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="self-start sm:self-auto px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold flex items-center gap-2 shadow-sm transition-all cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>New Goal</span>
        </button>
      </div>

      {/* 2. Status Filters */}
      <div className="flex p-1 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-sans max-w-sm">
        {(['active', 'completed', 'paused', 'all'] as const).map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`flex-1 py-1.5 px-3 rounded-xl font-medium capitalize transition-all cursor-pointer ${
              activeFilter === filter
                ? 'bg-violet-600 text-white shadow-sm'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* 3. Goals List */}
      <div className="space-y-4">
        {filteredGoals.length === 0 ? (
          <div className="p-10 rounded-3xl creamy-surface text-center text-xs text-[var(--text-muted)]">
            No goals found in "{activeFilter}" status. Create a new goal above.
          </div>
        ) : (
          filteredGoals.map((goal) => {
            const completedCount = goal.milestones.filter((m) => m.completed).length;

            return (
              <div key={goal.id} className="p-6 rounded-3xl creamy-surface space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--card-border)] pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] flex items-center justify-center text-indigo-400 shrink-0">
                      <Flag className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[var(--pill-bg)] text-[var(--text-muted)] uppercase border border-[var(--card-border)]">
                          {goal.category}
                        </span>
                        <span className="text-[11px] font-mono text-[var(--text-muted)] flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> Due {goal.targetDate}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold text-[var(--text-primary)] mt-1">
                        {goal.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-sm font-mono font-bold text-violet-400">
                      {goal.progressPercent}%
                    </span>
                    <button
                      onClick={() => deleteGoalItem(goal.id)}
                      className="p-1.5 text-[var(--text-muted)] hover:text-rose-400 transition-colors cursor-pointer"
                      title="Delete goal"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2 rounded-full bg-[var(--pill-bg)] overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-violet-600 to-indigo-400 rounded-full transition-all duration-300"
                    style={{ width: `${goal.progressPercent}%` }}
                  />
                </div>

                {/* Milestones Checklist */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider block mb-2">
                    Milestones ({completedCount}/{goal.milestones.length})
                  </span>
                  {goal.milestones.map((m) => (
                    <div
                      key={m.id}
                      onClick={() => toggleGoalMilestone(goal.id, m.id)}
                      className={`p-2.5 rounded-xl border flex items-center gap-2.5 text-xs transition-all cursor-pointer ${
                        m.completed
                          ? 'bg-emerald-500/10 border-emerald-500/20 text-[var(--text-muted)] line-through'
                          : 'bg-[var(--pill-bg)] border-[var(--card-border)] text-[var(--text-primary)] hover:bg-white/[0.04]'
                      }`}
                    >
                      {m.completed ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      ) : (
                        <Circle className="w-4 h-4 text-[var(--text-muted)] shrink-0" />
                      )}
                      <span className="truncate flex-1">{m.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Goal Creation Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowAddModal(false)} />
          <div className="relative z-10 w-full max-w-md p-6 rounded-3xl creamy-surface space-y-4 shadow-2xl">
            <h3 className="text-base font-semibold text-[var(--text-primary)]">Create Long-Term Goal</h3>
            <form onSubmit={handleAddGoal} className="space-y-3 text-xs">
              <div>
                <label className="text-[var(--text-muted)] block mb-1">Goal Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Master Linear Algebra & Numerical Systems"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-[var(--text-primary)]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[var(--text-muted)] block mb-1">Category</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-[var(--text-primary)]"
                  >
                    <option value="academics" className="bg-[#121326] text-white">Academics</option>
                    <option value="health" className="bg-[#121326] text-white">Health</option>
                    <option value="career" className="bg-[#121326] text-white">Career</option>
                    <option value="discipline" className="bg-[#121326] text-white">Discipline</option>
                    <option value="growth" className="bg-[#121326] text-white">Growth</option>
                  </select>
                </div>
                <div>
                  <label className="text-[var(--text-muted)] block mb-1">Target Date</label>
                  <input
                    type="date"
                    required
                    value={newTargetDate}
                    onChange={(e) => setNewTargetDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-[var(--text-primary)]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[var(--text-muted)] block mb-1">Milestones (One per line)</label>
                <textarea
                  rows={4}
                  required
                  value={milestonesText}
                  onChange={(e) => setMilestonesText(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-[var(--text-primary)]"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 py-2 rounded-xl bg-[var(--pill-bg)] text-[var(--text-secondary)] font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium shadow-sm"
                >
                  Create Goal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
