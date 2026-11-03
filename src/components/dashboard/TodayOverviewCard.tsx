import React, { useState } from 'react';
import { Sparkles, Check, Plus, Trash2 } from 'lucide-react';
import { useData } from '../../context/DataContext';

export const TodayOverviewCard: React.FC = () => {
  const { habits, toggleHabit, addHabit, deleteHabit, overallProgress, dailyRating, setDailyRating } = useData();
  const [newHabitName, setNewHabitName] = useState('');
  const [showAddInput, setShowAddInput] = useState(false);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (newHabitName.trim()) {
      addHabit(newHabitName.trim());
      setNewHabitName('');
      setShowAddInput(false);
    }
  };

  // Semi-circle arc calculations
  const arcRadius = 45;
  const arcCircumference = Math.PI * arcRadius;
  const strokeOffset = arcCircumference - (overallProgress / 100) * arcCircumference;

  // Rating mini bar data
  const weekRatings = [6, 7, 8, 7, 9, 8, dailyRating];

  return (
    <div className="bg-[#0f1118]/80 backdrop-blur-md rounded-2xl border border-white/[0.07] p-5 flex flex-col justify-between hover:border-white/[0.12] transition-all duration-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-orange-400" />
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
            Today's Overview
          </h3>
        </div>
        <button
          onClick={() => setShowAddInput(!showAddInput)}
          className="text-zinc-400 hover:text-white transition-colors"
          title="Add Habit"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Grid: Arc Gauge | Habits Checklist | Daily Rating */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        {/* Left: Semi-circular Progress Gauge (3 cols) */}
        <div className="md:col-span-3 flex flex-col items-center justify-center">
          <div className="relative w-28 h-20 flex items-center justify-center overflow-hidden">
            <svg className="w-28 h-28 -rotate-180 transform" viewBox="0 0 100 100">
              {/* Background Arc */}
              <circle
                cx="50"
                cy="50"
                r={arcRadius}
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="7"
                strokeDasharray={`${arcCircumference} ${arcCircumference}`}
                fill="none"
              />
              {/* Progress Arc */}
              <circle
                cx="50"
                cy="50"
                r={arcRadius}
                stroke="#ff7438"
                strokeWidth="7"
                strokeDasharray={`${arcCircumference} ${arcCircumference}`}
                strokeDashoffset={strokeOffset}
                strokeLinecap="round"
                fill="none"
                className="transition-all duration-700 ease-out"
              />
            </svg>
            <div className="absolute bottom-2 flex flex-col items-center">
              <span className="text-2xl font-serif font-bold text-white tracking-tight leading-none">
                {overallProgress}%
              </span>
            </div>
          </div>
          <span className="text-[11px] text-zinc-400 font-sans tracking-wide mt-1 text-center">
            Overall Progress
          </span>
        </div>

        {/* Center: Habits Checklist (6 cols) */}
        <div className="md:col-span-6 space-y-1.5 max-h-44 overflow-y-auto pr-1">
          {showAddInput && (
            <form onSubmit={handleAdd} className="flex gap-2 mb-2">
              <input
                type="text"
                placeholder="New habit..."
                value={newHabitName}
                onChange={(e) => setNewHabitName(e.target.value)}
                autoFocus
                className="w-full bg-white/[0.05] border border-white/[0.1] rounded-lg px-2.5 py-1 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500"
              />
              <button
                type="submit"
                className="px-2.5 py-1 bg-orange-500 text-white rounded-lg text-xs hover:bg-orange-600"
              >
                Add
              </button>
            </form>
          )}

          {habits.map((habit) => (
            <div
              key={habit.id}
              className="flex items-center justify-between group px-2 py-1.5 rounded-lg hover:bg-white/[0.03] transition-colors"
            >
              <label className="flex items-center gap-2.5 cursor-pointer flex-1">
                <input
                  type="checkbox"
                  checked={habit.completed}
                  onChange={() => toggleHabit(habit.id)}
                  className="sr-only"
                />
                <div
                  className={`w-4 h-4 rounded-md border flex items-center justify-center transition-all ${
                    habit.completed
                      ? 'bg-orange-500 border-orange-500 text-white shadow-[0_0_8px_rgba(249,115,22,0.5)]'
                      : 'border-white/[0.2] bg-white/[0.02] group-hover:border-white/[0.4]'
                  }`}
                >
                  {habit.completed && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                </div>
                <span
                  className={`text-xs font-sans tracking-wide transition-colors ${
                    habit.completed ? 'text-zinc-400 line-through' : 'text-zinc-200'
                  }`}
                >
                  {habit.name}
                </span>
              </label>

              <button
                onClick={() => deleteHabit(habit.id)}
                className="opacity-0 group-hover:opacity-100 text-zinc-600 hover:text-red-400 transition-opacity p-1"
                title="Remove"
              >
                <Trash2 className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>

        {/* Right: Daily Rating & Mini Histogram (3 cols) */}
        <div className="md:col-span-3 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-white/[0.06] pt-3 md:pt-0 md:pl-4">
          <span className="text-[11px] text-zinc-400 font-sans tracking-wide">
            Daily Rating
          </span>
          <div className="flex items-baseline gap-1 my-1">
            <span className="text-2xl font-serif font-bold text-white">
              {dailyRating}
            </span>
            <span className="text-xs text-zinc-500">/ 10</span>
          </div>

          <div className="text-[10px] text-emerald-400 font-semibold mb-2 flex items-center gap-0.5">
            <span>▲ +1</span>
          </div>

          {/* Mini histogram bars */}
          <div className="flex items-end gap-1.5 h-7">
            {weekRatings.map((val, idx) => (
              <button
                key={idx}
                onClick={() => setDailyRating(val)}
                title={`Day score: ${val}`}
                className="w-2 rounded-t-sm transition-all duration-200 hover:opacity-100"
                style={{
                  height: `${(val / 10) * 100}%`,
                  backgroundColor: idx === weekRatings.length - 1 ? '#ff7438' : 'rgba(255, 255, 255, 0.15)',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
