import React, { useState } from 'react';
import {
  Flame,
  Plus,
  Check,
  Calendar as CalendarIcon,
  LayoutGrid,
  Archive,
  Edit3,
} from 'lucide-react';
import { Habit, HabitCategory } from '../types';
import {
  useData,
  isHabitScheduledOnDate,
  getHabitDayStatus,
} from '../context/DataContext';
import { Modal } from '../components/common/Modal';
import { Button } from '../components/common/Button';
import { HabitCalendarView } from '../components/habits/HabitCalendarView';
import { HabitEditModal } from '../components/habits/HabitEditModal';
import { sound } from '../audio/sound';

export const HabitsView: React.FC = () => {
  const {
    selectedDate,
    setSelectedDate,
    habits,
    toggleHabit,
    setHabitDayStatus,
    addHabit,
    updateHabit,
    archiveHabit,
  } = useData();

  const [viewMode, setViewMode] = useState<'matrix' | 'calendar'>('matrix');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [showArchived, setShowArchived] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editingHabit, setEditingHabit] = useState<Habit | null>(null);

  // Skip reason modal state
  const [skippingHabitId, setSkippingHabitId] = useState<string | null>(null);
  const [skipReason, setSkipReason] = useState<string>('');

  const filteredHabits = habits
    .filter((h) => (showArchived ? true : !h.archived))
    .filter((h) => (activeCategory === 'all' ? true : h.category === activeCategory));

  const handleOpenAdd = () => {
    setEditingHabit(null);
    setIsModalOpen(true);
    sound.tick();
  };

  const handleOpenEdit = (habit: Habit) => {
    setEditingHabit(habit);
    setIsModalOpen(true);
    sound.tick();
  };

  const handleSaveHabit = (data: Partial<Habit>) => {
    if (editingHabit) {
      updateHabit({ ...editingHabit, ...data });
    } else {
      addHabit({
        title: data.title || 'Untitled Routine',
        category: (data.category as HabitCategory) || 'discipline',
        frequency: data.frequency || 'daily',
        customDays: data.customDays || [],
        targetPerDay: data.targetPerDay || 1,
        unit: data.unit || 'reps',
        notes: data.notes || '',
      });
    }
    setIsModalOpen(false);
    sound.complete();
  };

  const handleConfirmSkip = () => {
    if (skippingHabitId) {
      setHabitDayStatus(skippingHabitId, selectedDate, 'skipped', skipReason);
      sound.tick();
    }
    setSkippingHabitId(null);
    setSkipReason('');
  };

  // Metrics
  const activeHabitsCount = habits.filter((h) => !h.archived).length;
  const todayScheduled = habits.filter(
    (h) => !h.archived && isHabitScheduledOnDate(h, selectedDate)
  );
  const todayCompleted = todayScheduled.filter(
    (h) => getHabitDayStatus(h, selectedDate) === 'completed'
  ).length;
  const todayCompletionRate =
    todayScheduled.length > 0 ? Math.round((todayCompleted / todayScheduled.length) * 100) : 0;

  const longestStreak = habits.reduce((max, h) => Math.max(max, h.streak || 0), 0);

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-16 animate-fadeIn select-none">
      {/* ================================================================ */}
      {/* 1. CELESTIAL HEADER                                              */}
      {/* ================================================================ */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-white/[0.06]">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[#E56A38] text-base">✦</span>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">
              Habits &amp; Daily Disciplines
            </h1>
          </div>
          <p className="text-xs font-sans text-zinc-400 mt-1 max-w-lg">
            Build unshakeable daily rituals. Consistency over intensity, every single day.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* Mode Switcher */}
          <div className="flex items-center bg-black/40 border border-white/[0.08] rounded-xl p-1 text-xs font-sans">
            <button
              type="button"
              onClick={() => {
                sound.tick();
                setViewMode('matrix');
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                viewMode === 'matrix'
                  ? 'bg-[#E56A38]/20 text-[#E56A38] font-bold border border-[#E56A38]/40 shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <LayoutGrid size={13} />
              <span>Matrix</span>
            </button>
            <button
              type="button"
              onClick={() => {
                sound.tick();
                setViewMode('calendar');
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                viewMode === 'calendar'
                  ? 'bg-[#E56A38]/20 text-[#E56A38] font-bold border border-[#E56A38]/40 shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <CalendarIcon size={13} />
              <span>Calendar</span>
            </button>
          </div>

          <Button
            variant="primary"
            size="sm"
            onClick={handleOpenAdd}
            className="flex items-center gap-1.5 text-xs font-sans font-bold bg-[#E56A38] hover:bg-[#D9531E] text-white shadow-[0_0_15px_rgba(229,106,56,0.35)] transition-all"
          >
            <Plus size={14} />
            <span>New Habit</span>
          </Button>
        </div>
      </header>

      {/* ================================================================ */}
      {/* 2. TELEMETRY CARDS (Cosmic Obsidian & Terracotta HUD)            */}
      {/* ================================================================ */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Metric 1: Today's Completion Score */}
        <div className="p-5 rounded-3xl bg-[#0D0F16]/90 border border-white/[0.08] shadow-xl backdrop-blur-xl flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-sans font-bold text-zinc-400 uppercase tracking-wider">
              Today&apos;s Execution
            </span>
            <span className="text-xs font-mono font-bold text-[#E56A38]">
              {todayCompletionRate}%
            </span>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-mono font-black text-white">
              {todayCompleted}
            </span>
            <span className="text-xs font-sans text-zinc-500">
              / {todayScheduled.length} scheduled
            </span>
          </div>

          <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#E56A38] rounded-full transition-all shadow-[0_0_8px_rgba(229,106,56,0.5)]"
              style={{ width: `${todayCompletionRate}%` }}
            />
          </div>
        </div>

        {/* Metric 2: Longest Streak */}
        <div className="p-5 rounded-3xl bg-[#0D0F16]/90 border border-white/[0.08] shadow-xl backdrop-blur-xl flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-sans font-bold text-zinc-400 uppercase tracking-wider">
              Peak Momentum
            </span>
            <Flame size={14} className="text-amber-400" />
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-mono font-black text-amber-400">
              {longestStreak}
            </span>
            <span className="text-xs font-sans text-zinc-500">
              day streak
            </span>
          </div>

          <span className="text-[11px] font-sans text-zinc-400">
            Keep the flame burning every day.
          </span>
        </div>

        {/* Metric 3: Active Habit Routines */}
        <div className="p-5 rounded-3xl bg-[#0D0F16]/90 border border-white/[0.08] shadow-xl backdrop-blur-xl flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-sans font-bold text-zinc-400 uppercase tracking-wider">
              Total Routines
            </span>
            <span className="text-xs font-mono text-zinc-500">
              Active
            </span>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-mono font-black text-white">
              {activeHabitsCount}
            </span>
            <span className="text-xs font-sans text-zinc-500">
              disciplines
            </span>
          </div>

          <span className="text-[11px] font-sans text-zinc-400">
            Designed for long-term compound growth.
          </span>
        </div>
      </div>

      {/* ================================================================ */}
      {/* 3. CATEGORY FILTERS & ARCHIVE TOGGLE                             */}
      {/* ================================================================ */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-white/[0.06] text-xs font-sans">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {['all', 'discipline', 'mind', 'body', 'craft', 'spirit'].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                sound.tick();
                setActiveCategory(cat);
              }}
              className={`px-3 py-1.5 rounded-full capitalize transition-colors ${
                activeCategory === cat
                  ? 'bg-[#E56A38]/20 text-[#E56A38] font-bold border border-[#E56A38]/40 shadow-sm'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <label className="flex items-center gap-2 cursor-pointer text-zinc-400 hover:text-white">
            <input
              type="checkbox"
              checked={showArchived}
              onChange={(e) => setShowArchived(e.target.checked)}
              className="rounded border-white/[0.2] bg-white/[0.05] text-[#E56A38] focus:ring-[#E56A38]"
            />
            <span>Show Archived</span>
          </label>
        </div>
      </div>

      {/* ================================================================ */}
      {/* 4. HABITS MATRIX OR CALENDAR VIEW                                */}
      {/* ================================================================ */}
      {viewMode === 'calendar' ? (
        <HabitCalendarView
          habits={filteredHabits}
          onSetStatus={setHabitDayStatus}
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
      ) : (
        <div className="space-y-4">
          {filteredHabits.length === 0 ? (
            <div className="bg-black/20 border border-dashed border-white/[0.08] rounded-3xl p-10 text-center space-y-2">
              <p className="text-xs text-zinc-400 font-sans">
                No habits found in this category.
              </p>
              <button
                onClick={handleOpenAdd}
                className="text-xs text-[#E56A38] hover:underline font-sans font-medium"
              >
                Create your first habit routine →
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredHabits.map((habit) => {
                const isScheduled = isHabitScheduledOnDate(habit, selectedDate);
                const status = getHabitDayStatus(habit, selectedDate);
                const isCompleted = status === 'completed';
                const isSkipped = status === 'skipped';

                return (
                  <div
                    key={habit.id}
                    className={`p-5 rounded-3xl bg-[#0D0F16]/90 backdrop-blur-xl border transition-all flex flex-col justify-between space-y-4 shadow-xl ${
                      isCompleted
                        ? 'border-[#E56A38]/50 bg-[#E56A38]/10'
                        : isSkipped
                        ? 'border-amber-500/30 bg-amber-500/5 opacity-80'
                        : 'border-white/[0.08] hover:border-white/[0.14]'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase font-mono tracking-wider px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300">
                          {habit.category}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                            <Flame size={12} className={habit.streak ? 'text-amber-400' : 'text-zinc-500'} />
                            <span>{habit.streak || 0}d</span>
                          </span>
                          <button
                            onClick={() => handleOpenEdit(habit)}
                            className="p-1 text-zinc-400 hover:text-white rounded hover:bg-white/[0.06] transition-colors"
                            title="Edit Habit"
                          >
                            <Edit3 size={13} />
                          </button>
                          <button
                            onClick={() => archiveHabit(habit.id, !habit.archived)}
                            className="p-1 text-zinc-400 hover:text-white rounded hover:bg-white/[0.06] transition-colors"
                            title={habit.archived ? 'Unarchive' : 'Archive'}
                          >
                            <Archive size={13} />
                          </button>
                        </div>
                      </div>

                      <h3 className="text-base font-serif font-bold text-white tracking-wide">
                        {habit.title}
                      </h3>

                      {habit.notes && (
                        <p className="text-xs font-serif italic text-zinc-400 line-clamp-2">
                          &ldquo;{habit.notes}&rdquo;
                        </p>
                      )}
                    </div>

                    {/* Completion actions */}
                    <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs">
                      <span className="text-[11px] font-sans text-zinc-500">
                        {!isScheduled ? (
                          'Not scheduled today'
                        ) : isCompleted ? (
                          <span className="text-[#E56A38] font-bold">✓ Completed</span>
                        ) : isSkipped ? (
                          <span className="text-amber-400">Paused (Reason logged)</span>
                        ) : (
                          'Awaiting execution'
                        )}
                      </span>

                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => {
                            sound.tick();
                            toggleHabit(habit.id, selectedDate);
                          }}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-bold transition-all ${
                            isCompleted
                              ? 'bg-[#E56A38] text-white shadow-[0_0_12px_rgba(229,106,56,0.4)]'
                              : 'bg-white/[0.06] text-zinc-300 hover:text-white border border-white/[0.1]'
                          }`}
                        >
                          {isCompleted ? 'Marked Done' : 'Complete'}
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            sound.tick();
                            setSkippingHabitId(habit.id);
                          }}
                          className={`px-3 py-1.5 rounded-full text-xs font-sans transition-colors ${
                            isSkipped
                              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                              : 'text-zinc-500 hover:text-white hover:bg-white/[0.04]'
                          }`}
                          title="Log intentional skip"
                        >
                          Skip
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* EDIT / CREATE MODAL */}
      <HabitEditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveHabit}
        habitToEdit={editingHabit}
      />

      {/* SKIP REASON MODAL */}
      <Modal
        isOpen={Boolean(skippingHabitId)}
        onClose={() => setSkippingHabitId(null)}
        title="Log Habit Skip"
        subtitle="Record intentional rest or circumstances without breaking momentum."
      >
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-sans text-zinc-300 mb-1 font-medium">
              Reason for pausing this habit today:
            </label>
            <input
              type="text"
              value={skipReason}
              onChange={(e) => setSkipReason(e.target.value)}
              placeholder="e.g. Deliberate rest day, muscle recovery, travel..."
              className="w-full bg-black/40 border border-white/[0.1] rounded-xl px-3 py-2 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-[#E56A38]"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2 border-t border-white/[0.06]">
            <Button variant="ghost" size="sm" onClick={() => setSkippingHabitId(null)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleConfirmSkip}
              className="bg-[#E56A38] hover:bg-[#D9531E] text-white"
            >
              Confirm Pause
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
