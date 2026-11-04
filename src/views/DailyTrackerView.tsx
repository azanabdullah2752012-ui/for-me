import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { Check, Plus, Trash2, ArrowLeft, Flame, CheckSquare } from 'lucide-react';

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
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-8 space-y-8 select-none font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.06] pb-4">
        <div>
          <button
            onClick={() => setActiveTab('wallpaper')}
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors mb-2 font-sans"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Return to Wallpaper HUD
          </button>
          <div className="flex items-center gap-2.5">
            <CheckSquare className="w-5 h-5 text-violet-300" />
            <h2 className="font-sans text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              Habit Ledger & Daily Rhythm
            </h2>
          </div>
          <p className="text-xs text-zinc-400 font-sans mt-1">
            Weekly tactile tracking. Protect your daily non-negotiables.
          </p>
        </div>

        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="self-start sm:self-auto px-5 py-2.5 bg-[#9333ea] hover:bg-[#a855f7] text-white rounded-2xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(147,51,234,0.35)] font-sans"
        >
          <Plus className="w-4 h-4" /> Add Habit
        </button>
      </div>

      {/* Add Habit Form */}
      {showAddForm && (
        <form onSubmit={handleAdd} className="p-6 rounded-[2rem] bg-gradient-to-b from-[#181a33]/60 to-[#121326]/40 backdrop-blur-3xl border border-white/[0.08] shadow-md space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="e.g. 30 Minutes Reading, Cold Shower, Night Review..."
              value={newHabitName}
              onChange={(e) => setNewHabitName(e.target.value)}
              className="flex-1 bg-white/[0.04] border border-white/[0.1] rounded-xl px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-violet-400 font-sans"
              autoFocus
            />

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as any)}
              className="bg-white/[0.04] border border-white/[0.1] rounded-xl px-3 py-2 text-xs text-zinc-200 focus:outline-none font-sans"
            >
              <option value="discipline" className="bg-[#0e1022]">Discipline</option>
              <option value="study" className="bg-[#0e1022]">Study</option>
              <option value="wellness" className="bg-[#0e1022]">Wellness</option>
              <option value="mind" className="bg-[#0e1022]">Mind</option>
            </select>

            <button
              type="submit"
              className="px-5 py-2 bg-[#9333ea] hover:bg-[#a855f7] text-white rounded-xl text-xs font-bold uppercase tracking-wider font-sans shadow-md"
            >
              Create
            </button>
          </div>
        </form>
      )}

      {/* Habits Weekly Table */}
      <div className="rounded-[2rem] border border-white/[0.08] border-t-white/[0.18] bg-gradient-to-b from-[#181a33]/60 to-[#121326]/40 backdrop-blur-3xl overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.45)]">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-sans">
            <thead>
              <tr className="border-b border-white/[0.06] text-zinc-400 text-[11px] uppercase tracking-wider">
                <th className="py-4 px-5 font-semibold">Discipline</th>
                <th className="py-4 px-3 font-semibold text-center">Streak</th>
                {days.map((d, idx) => (
                  <th key={d} className={`py-4 px-3 font-semibold text-center ${idx === 5 ? 'text-violet-300 font-bold' : ''}`}>
                    {d}
                  </th>
                ))}
                <th className="py-4 px-4 text-right font-semibold">Action</th>
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
                          className={`w-5 h-5 rounded-full border inline-flex items-center justify-center transition-all ${
                            isChecked
                              ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400 shadow-sm'
                              : 'border-white/[0.1] bg-white/[0.02] hover:border-white/[0.3]'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </button>
                      </td>
                    );
                  })}

                  <td className="py-4 px-4 text-right">
                    <button
                      onClick={() => deleteHabit(habit.id)}
                      className="opacity-0 group-hover:opacity-100 text-zinc-500 hover:text-red-400 transition-opacity p-1"
                      title="Remove habit"
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

      {/* Heatmap Section */}
      <div className="p-6 sm:p-8 rounded-[2rem] bg-gradient-to-b from-[#181a33]/60 to-[#121326]/40 backdrop-blur-3xl border border-white/[0.08] border-t-white/[0.18] shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-amber-400" />
            <h3 className="text-xs font-sans uppercase tracking-[0.16em] text-zinc-200 font-semibold">
              Consistency Heatmap (Last 56 Days)
            </h3>
          </div>
          <span className="text-xs font-mono text-zinc-400">
            Current streak: <strong className="text-amber-300">{currentStreak} days</strong>
          </span>
        </div>

        <div className="flex gap-1.5 overflow-x-auto pb-2">
          {weeks.map((week, wIdx) => (
            <div key={wIdx} className="flex flex-col gap-1.5">
              {week.map((cell) => (
                <div
                  key={cell.date}
                  title={`${cell.date}: ${cell.habitsCompleted} habits kept`}
                  className={`w-3.5 h-3.5 rounded-sm transition-all ${getHeatmapColor(cell.intensity)}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
