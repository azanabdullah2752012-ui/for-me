import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { Check, Plus, Trash2, ArrowLeft, Flame } from 'lucide-react';

export const DailyTrackerView: React.FC = () => {
  const { 
    habits, 
    toggleHabit, 
    addHabit, 
    deleteHabit, 
    currentStreak, 
    heatmapData,
    setActiveTab 
  } = useData();

  const [newHabitName, setNewHabitName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'study' | 'wellness' | 'mind' | 'discipline'>('discipline');
  const [showAddForm, setShowAddForm] = useState(false);

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

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
        return 'bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.6)]';
      case 3:
        return 'bg-violet-600';
      case 2:
        return 'bg-violet-800';
      case 1:
        return 'bg-violet-950/80';
      default:
        return 'bg-white/[0.03]';
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 space-y-12 select-none">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.06] pb-6">
        <div>
          <button
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </button>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-wide">
            Habit Ledger
          </h2>
          <p className="text-xs text-zinc-400 font-sans mt-1">
            Weekly tactile tracking. Protect your daily non-negotiables.
          </p>
        </div>

        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="self-start sm:self-auto px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shadow-lavender-glow"
        >
          <Plus className="w-4 h-4" /> Add Habit
        </button>
      </div>

      {/* Add Habit Form */}
      {showAddForm && (
        <form onSubmit={handleAdd} className="p-6 rounded-2xl bg-[#0c1022]/90 border border-violet-400/30 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="e.g. 30 Minutes Reading, Cold Shower, Night Review..."
              value={newHabitName}
              onChange={(e) => setNewHabitName(e.target.value)}
              className="flex-1 bg-white/[0.04] border border-white/[0.1] rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-violet-400"
              autoFocus
            />

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as any)}
              className="bg-white/[0.04] border border-white/[0.1] rounded-xl px-3 py-2 text-xs text-zinc-200 focus:outline-none"
            >
              <option value="discipline" className="bg-[#0b0f1d]">Discipline</option>
              <option value="study" className="bg-[#0b0f1d]">Study</option>
              <option value="wellness" className="bg-[#0b0f1d]">Wellness</option>
              <option value="mind" className="bg-[#0b0f1d]">Mind</option>
            </select>

            <button
              type="submit"
              className="px-5 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-xl text-xs font-semibold"
            >
              Create
            </button>
          </div>
        </form>
      )}

      {/* Habits Weekly Table */}
      <div className="rounded-2xl border border-[#c4b5fd]/[0.08] bg-[#0c1022]/60 overflow-hidden shadow-sanctuary">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-white/[0.06] text-zinc-400 font-serif">
                <th className="py-4 px-5 font-normal">Discipline</th>
                <th className="py-4 px-3 font-normal text-center">Streak</th>
                {days.map((d, idx) => (
                  <th key={d} className={`py-4 px-3 font-normal text-center ${idx === 5 ? 'text-violet-300 font-medium' : ''}`}>
                    {d}
                  </th>
                ))}
                <th className="py-4 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04]">
              {habits.map((habit) => (
                <tr key={habit.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="py-4 px-5 text-zinc-200 font-medium">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-violet-400" />
                      <span>{habit.name}</span>
                    </div>
                  </td>

                  <td className="py-4 px-3 text-center font-mono text-amber-300">
                    {habit.streak}d 🔥
                  </td>

                  {days.map((_, dayIdx) => {
                    const isChecked = dayIdx === 5 ? habit.completed : dayIdx < 5;
                    return (
                      <td key={dayIdx} className="py-4 px-3 text-center">
                        <button
                          onClick={() => dayIdx === 5 && toggleHabit(habit.id)}
                          className={`w-6 h-6 rounded-lg border inline-flex items-center justify-center transition-all ${
                            isChecked
                              ? 'bg-violet-500/20 border-violet-400 text-violet-300 shadow-sm'
                              : 'border-white/[0.1] bg-white/[0.02] hover:border-white/[0.3]'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </button>
                      </td>
                    );
                  })}

                  <td className="py-4 px-4 text-right">
                    <button
                      onClick={() => deleteHabit(habit.id)}
                      className="opacity-0 group-hover:opacity-100 text-zinc-400 hover:text-red-400 transition-opacity p-1"
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

      {/* 8-Week Streak Heatmap */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#0c1022]/60 border border-[#c4b5fd]/[0.08] space-y-4 shadow-sanctuary">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-amber-400" />
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
              Discipline Heatmap (Last 8 Weeks)
            </h3>
          </div>
          <span className="text-xs font-mono text-amber-300">
            {currentStreak} Day Current Streak 🔥
          </span>
        </div>

        <div className="flex gap-2 overflow-x-auto py-2">
          {weeks.map((week, wIdx) => (
            <div key={wIdx} className="flex flex-col gap-2">
              {week.map((cell, cIdx) => (
                <div
                  key={cIdx}
                  title={`${cell.date}: ${cell.habitsCompleted} habits completed`}
                  className={`w-4 h-4 rounded-md transition-transform hover:scale-125 cursor-pointer ${getHeatmapColor(
                    cell.intensity
                  )}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
