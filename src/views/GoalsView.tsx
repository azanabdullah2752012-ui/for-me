import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { 
  Target, 
  Plus, 
  CheckCircle2, 
  Circle, 
  Trash2, 
  Calendar, 
  Play,
  Pause
} from 'lucide-react';
import { GoalItem } from '../types';

export const GoalsView: React.FC = () => {
  const { 
    goals, 
    addGoalItem, 
    updateGoalStatus,
    toggleGoalMilestone, 
    deleteGoalItem 
  } = useData();

  const [activeFilter, setActiveFilter] = useState<'all' | 'active' | 'completed' | 'paused'>('active');
  const [termFilter, setTermFilter] = useState<'all' | 'short_term' | 'long_term'>('all');
  const [showAddModal, setShowAddModal] = useState(false);

  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<GoalItem['category']>('academics');
  const [newType, setNewType] = useState<'short_term' | 'long_term'>('short_term');
  const [newTargetDate, setNewTargetDate] = useState('2026-12-31');
  const [newDescription, setNewDescription] = useState('');
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
        type: newType,
        targetDate: newTargetDate,
        startDate: new Date().toISOString().slice(0, 10),
        status: 'active',
        milestones: parsedMilestones,
        description: newDescription.trim() || undefined,
      });

      setNewTitle('');
      setNewDescription('');
      setShowAddModal(false);
    }
  };

  const filteredGoals = goals.filter((g) => {
    if (activeFilter !== 'all' && g.status !== activeFilter) return false;
    if (termFilter !== 'all' && (g.type || 'short_term') !== termFilter) return false;
    return true;
  });

  const activeGoalsCount = goals.filter((g) => g.status === 'active').length;
  const completedGoalsCount = goals.filter((g) => g.status === 'completed').length;
  const totalMilestones = goals.reduce((sum, g) => sum + g.milestones.length, 0);
  const completedMilestones = goals.reduce((sum, g) => sum + g.milestones.filter((m) => m.completed).length, 0);
  const overallMilestonePct = totalMilestones > 0 ? Math.round((completedMilestones / totalMilestones) * 100) : 0;

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
            Short-term sprints and long-term multi-quarter objectives broken into concrete verifiable milestones.
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

      {/* 2. Top Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="p-5 rounded-3xl creamy-surface space-y-2">
          <span className="text-xs text-[var(--text-muted)]">Active Goals</span>
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-mono font-bold text-indigo-400">{activeGoalsCount}</span>
            <span className="text-xs text-[var(--text-muted)] font-mono">{completedGoalsCount} completed</span>
          </div>
          <p className="text-[11px] text-[var(--text-muted)]">Currently tracked across categories</p>
        </div>

        <div className="p-5 rounded-3xl creamy-surface space-y-2">
          <span className="text-xs text-[var(--text-muted)]">Milestones Executed</span>
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-mono font-bold text-emerald-400">{completedMilestones}</span>
            <span className="text-xs text-[var(--text-muted)] font-mono">/ {totalMilestones} total</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-[var(--pill-bg)] overflow-hidden">
            <div className="h-full bg-emerald-400 rounded-full" style={{ width: `${overallMilestonePct}%` }} />
          </div>
        </div>

        <div className="p-5 rounded-3xl creamy-surface space-y-2">
          <span className="text-xs text-[var(--text-muted)]">Execution Velocity</span>
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-mono font-bold text-amber-400">{overallMilestonePct}%</span>
            <span className="text-xs text-[var(--text-muted)] font-mono">Milestone Ratio</span>
          </div>
          <p className="text-[11px] text-[var(--text-muted)]">Calculated from actual completed milestones</p>
        </div>
      </div>

      {/* 3. Filters Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-2 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-sans">
        <div className="flex items-center gap-1">
          {(['active', 'completed', 'paused', 'all'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`py-1.5 px-3 rounded-xl font-medium capitalize transition-all cursor-pointer ${
                activeFilter === filter
                  ? 'bg-[var(--surface-bg)] text-[var(--text-primary)] shadow-sm font-semibold'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1 border-l border-[var(--card-border)] pl-3">
          <button
            onClick={() => setTermFilter('all')}
            className={`py-1 px-2.5 rounded-lg text-[11px] transition-all ${
              termFilter === 'all' ? 'bg-[var(--surface-bg)] text-[var(--text-primary)] font-bold' : 'text-[var(--text-muted)]'
            }`}
          >
            All Horizions
          </button>
          <button
            onClick={() => setTermFilter('short_term')}
            className={`py-1 px-2.5 rounded-lg text-[11px] transition-all ${
              termFilter === 'short_term' ? 'bg-[var(--surface-bg)] text-cyan-400 font-bold' : 'text-[var(--text-muted)]'
            }`}
          >
            Short-term
          </button>
          <button
            onClick={() => setTermFilter('long_term')}
            className={`py-1 px-2.5 rounded-lg text-[11px] transition-all ${
              termFilter === 'long_term' ? 'bg-[var(--surface-bg)] text-indigo-400 font-bold' : 'text-[var(--text-muted)]'
            }`}
          >
            Long-term
          </button>
        </div>
      </div>

      {/* 4. Goals List */}
      <div className="space-y-5">
        {filteredGoals.length === 0 ? (
          <div className="p-8 rounded-3xl creamy-surface text-center text-xs text-[var(--text-muted)]">
            No goals matching the selected filter. Create a new goal or adjust your view.
          </div>
        ) : (
          filteredGoals.map((goal) => {
            const isCompleted = goal.status === 'completed';
            const isPaused = goal.status === 'paused';
            const completedCount = goal.milestones.filter((m) => m.completed).length;

            return (
              <div 
                key={goal.id}
                className="p-6 rounded-3xl creamy-surface space-y-4 transition-all"
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[var(--card-border)]">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-base text-[var(--text-primary)]">{goal.title}</span>
                      <span className="px-2 py-0.5 rounded-md bg-[var(--pill-bg)] text-[var(--text-muted)] font-mono text-[10px] uppercase">
                        {goal.category}
                      </span>
                      <span className={`px-2 py-0.5 rounded-md font-mono text-[10px] uppercase ${
                        goal.type === 'long_term' ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                      }`}>
                        {goal.type === 'long_term' ? 'Long-term' : 'Short-term'}
                      </span>
                    </div>
                    {goal.description && (
                      <p className="text-xs text-[var(--text-secondary)]">{goal.description}</p>
                    )}
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    <button
                      onClick={() => updateGoalStatus(goal.id, isPaused ? 'active' : 'paused')}
                      className="p-1.5 rounded-xl bg-[var(--pill-bg)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                      title={isPaused ? 'Resume goal' : 'Pause goal'}
                    >
                      {isPaused ? <Play className="w-3.5 h-3.5 text-emerald-400" /> : <Pause className="w-3.5 h-3.5" />}
                    </button>
                    <button
                      onClick={() => deleteGoalItem(goal.id)}
                      className="p-1.5 rounded-xl bg-[var(--pill-bg)] text-[var(--text-muted)] hover:text-rose-400 transition-colors"
                      title="Delete goal"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Progress Bar & Milestone Ratio */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[var(--text-muted)]">
                      {completedCount} / {goal.milestones.length} milestones complete
                    </span>
                    <span className="font-bold text-violet-400">{goal.progressPercent}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[var(--pill-bg)] overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-300 ${
                        isCompleted ? 'bg-emerald-400' : isPaused ? 'bg-amber-400' : 'bg-violet-600'
                      }`}
                      style={{ width: `${goal.progressPercent}%` }}
                    />
                  </div>
                </div>

                {/* Milestones Checklist */}
                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider block">
                    Milestones:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {goal.milestones.map((m) => (
                      <div
                        key={m.id}
                        onClick={() => toggleGoalMilestone(goal.id, m.id)}
                        className={`flex items-center gap-2.5 p-3 rounded-2xl border text-xs cursor-pointer transition-all ${
                          m.completed 
                            ? 'bg-emerald-500/10 border-emerald-500/20 text-[var(--text-primary)]' 
                            : 'bg-[var(--pill-bg)] border-[var(--card-border)] text-[var(--text-secondary)] hover:border-[var(--text-muted)]/40'
                        }`}
                      >
                        {m.completed ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        ) : (
                          <Circle className="w-4 h-4 text-[var(--text-muted)] shrink-0" />
                        )}
                        <span className={m.completed ? 'line-through text-[var(--text-muted)]' : ''}>
                          {m.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Metadata */}
                <div className="flex items-center justify-between pt-2 border-t border-[var(--card-border)] text-[11px] font-mono text-[var(--text-muted)]">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-violet-400" />
                    <span>Target Deadline: {goal.targetDate}</span>
                  </div>
                  <span className="capitalize">{goal.status}</span>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* New Goal Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowAddModal(false)} />
          <form onSubmit={handleAddGoal} className="relative z-10 w-full max-w-lg p-6 rounded-3xl creamy-surface shadow-2xl space-y-4">
            <h3 className="text-base font-semibold text-[var(--text-primary)] pb-2 border-b border-[var(--card-border)]">
              Create New Goal
            </h3>

            <div className="space-y-1.5">
              <label className="text-[11px] text-[var(--text-muted)]">Goal Title:</label>
              <input
                type="text"
                placeholder="e.g. Master Differential Geometry, Reach 10% Body Fat"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                required
                className="w-full px-3.5 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] text-[var(--text-muted)]">Description (optional):</label>
              <input
                type="text"
                placeholder="Strategic intent and why this matters"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
              />
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="space-y-1">
                <label className="text-[11px] text-[var(--text-muted)]">Horizon:</label>
                <select
                  value={newType}
                  onChange={(e) => setNewType(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
                >
                  <option value="short_term">Short-term</option>
                  <option value="long_term">Long-term</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] text-[var(--text-muted)]">Category:</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
                >
                  <option value="academics">Academics</option>
                  <option value="health">Health</option>
                  <option value="career">Career</option>
                  <option value="discipline">Discipline</option>
                  <option value="growth">Growth</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] text-[var(--text-muted)]">Target Date:</label>
                <input
                  type="date"
                  value={newTargetDate}
                  onChange={(e) => setNewTargetDate(e.target.value)}
                  required
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] text-[var(--text-muted)]">Milestones (one per line):</label>
              <textarea
                value={milestonesText}
                onChange={(e) => setMilestonesText(e.target.value)}
                rows={3}
                className="w-full px-3.5 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-sans text-[var(--text-primary)]"
              />
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="flex-1 py-2.5 rounded-xl bg-[var(--pill-bg)] text-[var(--text-secondary)] text-xs font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold"
              >
                Save Goal
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
