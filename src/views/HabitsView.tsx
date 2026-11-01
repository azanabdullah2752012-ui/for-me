import React, { useState } from 'react';
import {
  Flame,
  Plus,
  Check,
  Calendar as CalendarIcon,
  LayoutGrid,
  Filter,
  Sparkles,
  Archive,
  Edit3,
} from 'lucide-react';
import { Habit, HabitCategory } from '../types';
import {
  useData,
  isHabitScheduledOnDate,
  getHabitDayStatus,
  calculateHabitStreaks,
} from '../context/DataContext';
import { PageHero } from '../components/common/PageHero';
import { Modal } from '../components/common/Modal';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
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
    <div className="space-y-6 max-w-4xl mx-auto pb-16 animate-fadeIn select-none">
      {/* 1. EDITORIAL HEADER */}
      <PageHero
        title="Habits &amp; Daily Ledger"
        subtitle="You fall to the level of your baseline habits. Monitor consistency without shame; every day is a fresh opportunity to anchor quiet discipline."
        kicker="DAILY REPETITIONS • RHYTHMS"
        badgeLines={['DAILY REPETITIONS.', 'QUIET COMPOUNDING.', 'AUTOMATED DISCIPLINE.']}
        actions={
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center bg-white/[0.04] border border-white/[0.08] rounded-xl p-0.5 text-xs font-sans backdrop-blur-md">
              <button
                type="button"
                onClick={() => {
                  sound.tick();
                  setViewMode('matrix');
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                  viewMode === 'matrix' ? 'bg-white/[0.1] text-white font-semibold shadow-sm border border-white/[0.2]' : 'text-zinc-400 hover:text-white'
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
                  viewMode === 'calendar' ? 'bg-white/[0.1] text-white font-semibold shadow-sm border border-white/[0.2]' : 'text-zinc-400 hover:text-white'
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
              className="flex items-center gap-1.5 text-xs font-sans"
            >
              <Plus size={14} />
              <span>New Habit</span>
            </Button>
          </div>
        }
      />

      {/* 2. RESTRAINED METRICS ROW */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Metric 1: Protocol Adherence */}
        <div className="bg-white/[0.025] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 font-semibold block">
              Today&apos;s Adherence
            </span>
            <p className="text-2xl font-heading font-semibold tracking-tight text-white mt-1">
              {todayCompletionRate}%
            </p>
          </div>
          <div className="pt-3 border-t border-white/[0.06] mt-3">
            <span className="text-[11px] font-sans text-zinc-500">
              Non-shaming progressive consistency
            </span>
          </div>
        </div>

        {/* Metric 2: Active Habits */}
        <div className="bg-white/[0.025] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 font-semibold block">
              Active Habits
            </span>
            <p className="text-2xl font-heading font-semibold tracking-tight text-white mt-1">
              {activeHabitsCount} <span className="text-sm font-sans text-zinc-500 font-normal">protocols</span>
            </p>
          </div>
          <div className="pt-3 border-t border-white/[0.06] mt-3">
            <span className="text-[11px] font-sans text-zinc-500">
              Routines scheduled across the week
            </span>
          </div>
        </div>

        {/* Metric 3: Peak Streak */}
        <div className="bg-white/[0.025] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 font-semibold block">
              Longest Active Streak
            </span>
            <p className="text-2xl font-heading font-semibold tracking-tight text-white mt-1">
              {longestStreak} <span className="text-sm font-sans text-zinc-500 font-normal">days</span>
            </p>
          </div>
          <div className="pt-3 border-t border-white/[0.06] mt-3">
            <span className="text-[11px] font-sans text-zinc-500">
              Quiet momentum built day by day
            </span>
          </div>
        </div>
      </div>

      {/* 3. CATEGORY FILTER & ARCHIVE TOGGLE */}
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
              className={`px-3 py-1.5 rounded-xl capitalize transition-colors ${
                activeCategory === cat
                  ? 'bg-white/[0.1] text-white font-semibold border border-white/[0.2] shadow-sm'
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
              className="rounded border-white/[0.2] bg-white/[0.05] text-white focus:ring-white"
            />
            <span>Show Archived</span>
          </label>
        </div>
      </div>

      {/* 4. HABITS MATRIX OR CALENDAR VIEW */}
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
            <div className="bg-white/[0.02] border border-dashed border-white/[0.1] rounded-2xl p-10 text-center space-y-2">
              <p className="text-xs text-zinc-400 font-sans">
                No habits found in this category.
              </p>
              <button
                onClick={handleOpenAdd}
                className="text-xs text-white hover:underline font-sans"
              >
                Create your first habit routine
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
                    className={`p-5 rounded-2xl bg-white/[0.025] backdrop-blur-xl border transition-all flex flex-col justify-between space-y-4 shadow-sm ${
                      isCompleted
                        ? 'border-emerald-500/40 bg-emerald-500/10'
                        : isSkipped
                        ? 'border-amber-500/30 bg-amber-500/5 opacity-80'
                        : 'border-white/[0.08]'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Badge variant="neutral">{habit.category}</Badge>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-sans text-zinc-400 flex items-center gap-1">
                            <Flame size={12} className="text-zinc-300" />
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

                      <h3 className="text-base font-heading font-semibold text-white">
                        {habit.title}
                      </h3>

                      {habit.notes && (
                        <p className="text-xs font-sans text-zinc-400 italic line-clamp-2">
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
                          <span className="text-emerald-300 font-medium">✓ Completed</span>
                        ) : isSkipped ? (
                          <span className="text-amber-300">Paused (Reason logged)</span>
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
                          className={`px-3 py-1.5 rounded-xl text-xs font-sans font-medium transition-colors ${
                            isCompleted
                              ? 'bg-emerald-500 text-white shadow-sm'
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
                          className={`px-2.5 py-1.5 rounded-xl text-xs font-sans transition-colors ${
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
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-2 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-white"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2 border-t border-white/[0.06]">
            <Button variant="ghost" size="sm" onClick={() => setSkippingHabitId(null)}>
              Cancel
            </Button>
            <Button variant="primary" size="sm" onClick={handleConfirmSkip}>
              Confirm Pause
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
