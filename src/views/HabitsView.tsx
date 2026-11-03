import React, { useState } from 'react';
import {
  Flame,
  Plus,
  Trash2,
  CheckCircle2,
} from 'lucide-react';
import { Habit } from '../types';
import { useData } from '../context/DataContext';
import { sound } from '../audio/sound';

export const HabitsView: React.FC = () => {
  const { selectedDate, habits, toggleHabit, addHabit, deleteHabit } = useData();
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<Habit['category']>('discipline');

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    addHabit(newTitle.trim(), newCategory);
    setNewTitle('');
  };

  const completedTodayCount = habits.filter((h) => Boolean(h.completions[selectedDate])).length;
  const rate = habits.length > 0 ? Math.round((completedTodayCount / habits.length) * 100) : 0;

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-16 animate-fadeIn select-none">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-white/[0.06]">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[#E56A38] text-base">✦</span>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">
              Habits &amp; Daily Disciplines
            </h1>
          </div>
          <p className="text-xs font-sans text-zinc-400 mt-1">
            Build unshakeable daily rituals. Consistency over intensity.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-zinc-400">
            Today: <strong className="text-white">{completedTodayCount}/{habits.length}</strong> ({rate}%)
          </span>
        </div>
      </header>

      {/* Add Habit Form */}
      <form onSubmit={handleCreate} className="p-4 rounded-2xl bg-[#0D0F16]/90 border border-white/[0.08] flex items-center gap-3">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="New daily routine title..."
          className="flex-1 bg-black/40 border border-white/[0.08] focus:border-[#E56A38] rounded-xl px-3.5 py-2 text-xs font-sans text-white focus:outline-none"
        />
        <select
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value as Habit['category'])}
          className="bg-black/40 border border-white/[0.08] rounded-xl px-3 py-2 text-xs font-sans text-white focus:outline-none"
        >
          <option value="discipline">Discipline</option>
          <option value="mind">Mind</option>
          <option value="body">Body</option>
          <option value="craft">Craft</option>
          <option value="spirit">Spirit</option>
        </select>
        <button
          type="submit"
          className="px-4 py-2 rounded-xl bg-[#E56A38] hover:bg-[#D9531E] text-white text-xs font-sans font-bold flex items-center gap-1.5 shadow-[0_0_12px_rgba(229,106,56,0.3)] transition-all"
        >
          <Plus size={13} />
          <span>Add</span>
        </button>
      </form>

      {/* Habit List */}
      <div className="space-y-3">
        {habits.map((habit) => {
          const isDone = Boolean(habit.completions[selectedDate]);
          return (
            <div
              key={habit.id}
              className={`p-4 rounded-2xl border transition-all flex items-center justify-between gap-4 ${
                isDone
                  ? 'bg-[#E56A38]/10 border-[#E56A38]/40 shadow-sm'
                  : 'bg-[#0D0F16]/85 border-white/[0.07] hover:border-white/[0.12]'
              }`}
            >
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => toggleHabit(habit.id)}
                  className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all ${
                    isDone
                      ? 'bg-[#E56A38] text-white shadow-[0_0_10px_rgba(229,106,56,0.5)]'
                      : 'border border-white/[0.2] hover:border-white/[0.4]'
                  }`}
                >
                  {isDone && <CheckCircle2 size={15} />}
                </button>
                <div>
                  <h3 className={`text-sm font-sans font-medium ${isDone ? 'text-white' : 'text-zinc-300'}`}>
                    {habit.title}
                  </h3>
                  <span className="text-[10px] uppercase font-mono text-zinc-500">{habit.category}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-amber-400 flex items-center gap-1">
                  <Flame size={13} />
                  <span>{habit.streak || 0}d streak</span>
                </span>
                <button
                  type="button"
                  onClick={() => deleteHabit(habit.id)}
                  className="p-1.5 rounded-lg text-zinc-500 hover:text-rose-400 transition-colors"
                >
                  <Trash2 size={13} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
