import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Circle,
  AlertTriangle,
  MinusCircle,
  HelpCircle,
  Calendar,
} from 'lucide-react';
import { Habit, HabitDayStatus } from '../../types';
import { formatDateKey, getHabitDayStatus, isHabitScheduledOnDate } from '../../context/DataContext';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { sound } from '../../audio/sound';

interface HabitCalendarViewProps {
  habits: Habit[];
  onSetStatus: (habitId: string, date: string, status: HabitDayStatus, reason?: string) => void;
  selectedDate: string;
  onSelectDate: (date: string) => void;
}

export const HabitCalendarView: React.FC<HabitCalendarViewProps> = ({
  habits,
  onSetStatus,
  selectedDate,
  onSelectDate,
}) => {
  // Calendar month state
  const [currentMonth, setCurrentMonth] = useState<Date>(() => {
    const [y, m] = selectedDate.split('-').map(Number);
    return new Date(y, m - 1, 1);
  });

  const [selectedHabitFilter, setSelectedHabitFilter] = useState<string>('all');

  const prevMonth = () => {
    sound.tick();
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    sound.tick();
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const jumpToCurrentMonth = () => {
    sound.tick();
    const now = new Date();
    setCurrentMonth(new Date(now.getFullYear(), now.getMonth(), 1));
  };

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth(); // 0-indexed

  const monthName = currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  // Compute days in month
  const firstDayOfWeek = new Date(year, month, 1).getDay(); // 0 is Sun
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Previous month trailing days
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const activeHabits = habits.filter(h => !h.archived);
  const displayHabits = selectedHabitFilter === 'all' 
    ? activeHabits 
    : activeHabits.filter(h => h.id === selectedHabitFilter);

  // Cycle status on click: completed -> skipped -> incomplete
  const handleCycleStatus = (e: React.MouseEvent, habit: Habit, dateKey: string) => {
    e.stopPropagation();
    const current = getHabitDayStatus(habit, dateKey);
    let next: HabitDayStatus = 'completed';
    if (current === 'completed') next = 'skipped';
    else if (current === 'skipped') next = 'incomplete';
    else if (current === 'incomplete') next = 'completed';
    else if (current === 'not-scheduled') next = 'completed'; // can override not-scheduled

    onSetStatus(habit.id, dateKey, next);
  };

  return (
    <Card className="p-6 space-y-6">
      {/* Calendar Header Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-surface-border">
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-dark-850 border border-surface-border rounded-lg p-1">
            <button
              type="button"
              onClick={prevMonth}
              className="p-1.5 text-neutral-400 hover:text-white hover:bg-dark-800 rounded transition-colors"
              title="Previous Month"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={jumpToCurrentMonth}
              className="px-3 py-1 text-xs font-mono font-bold text-white hover:text-accent transition-colors"
            >
              {monthName}
            </button>
            <button
              type="button"
              onClick={nextMonth}
              className="p-1.5 text-neutral-400 hover:text-white hover:bg-dark-800 rounded transition-colors"
              title="Next Month"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Filter by specific habit */}
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono text-neutral-400">Filter Habit:</span>
          <select
            value={selectedHabitFilter}
            onChange={(e) => setSelectedHabitFilter(e.target.value)}
            className="bg-dark-850 border border-surface-border text-white text-xs px-3 py-1.5 rounded-lg font-mono focus:border-accent"
          >
            <option value="all">All Active Habits ({activeHabits.length})</option>
            {activeHabits.map(h => (
              <option key={h.id} value={h.id}>{h.title}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-xs bg-emerald-500 inline-block" />
          <span>Completed</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-xs bg-amber-400 inline-block" />
          <span>Skipped (Excused)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-xs bg-dark-700 border border-neutral-600 inline-block" />
          <span>Incomplete</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-xs bg-neutral-900 border border-neutral-800 border-dashed inline-block" />
          <span>Not Scheduled</span>
        </div>
        <span className="text-neutral-500 ml-auto hidden md:inline">
          Click any pill to cycle status (Completed → Skipped → Incomplete)
        </span>
      </div>

      {/* Calendar Grid */}
      <div className="border border-surface-border rounded-xl overflow-hidden bg-dark-950/60">
        {/* Days of week header */}
        <div className="grid grid-cols-7 border-b border-surface-border bg-dark-900/90 text-center py-2 text-[11px] font-mono uppercase tracking-wider text-neutral-400">
          <span>Sun</span>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
        </div>

        {/* Calendar cells */}
        <div className="grid grid-cols-7 auto-rows-fr divide-x divide-y divide-surface-border-subtle">
          {/* Previous month empty trailing days */}
          {Array.from({ length: firstDayOfWeek }).map((_, idx) => {
            const dayNum = daysInPrevMonth - firstDayOfWeek + idx + 1;
            return (
              <div key={`prev-${idx}`} className="min-h-[90px] p-2 bg-dark-950/30 opacity-30 select-none">
                <span className="text-xs font-mono text-neutral-600">{dayNum}</span>
              </div>
            );
          })}

          {/* Current month days */}
          {Array.from({ length: daysInMonth }).map((_, idx) => {
            const dayNum = idx + 1;
            const dateObj = new Date(year, month, dayNum);
            const dateKey = formatDateKey(dateObj);
            const isToday = dateKey === formatDateKey(new Date());
            const isSelected = dateKey === selectedDate;

            return (
              <div
                key={dateKey}
                onClick={() => {
                  sound.tick();
                  onSelectDate(dateKey);
                }}
                className={`min-h-[105px] p-2 transition-colors cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-accent/10 ring-1 ring-accent'
                    : isToday
                    ? 'bg-dark-850/90'
                    : 'bg-dark-900/40 hover:bg-dark-850/60'
                }`}
              >
                {/* Day Header */}
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-xs font-mono font-bold ${
                    isToday ? 'text-accent font-black' : isSelected ? 'text-white' : 'text-neutral-400'
                  }`}>
                    {dayNum}
                  </span>
                  {isToday && (
                    <span className="text-[9px] font-mono uppercase px-1 rounded bg-accent/20 text-accent font-semibold">
                      Today
                    </span>
                  )}
                </div>

                {/* Habit Pills on this date */}
                <div className="space-y-1 overflow-y-auto max-h-[70px] pr-0.5">
                  {displayHabits.map((habit) => {
                    const status = getHabitDayStatus(habit, dateKey);
                    const isScheduled = isHabitScheduledOnDate(habit, dateKey);

                    let badgeClass = 'bg-dark-800 text-neutral-500 border-surface-border';
                    let icon = <Circle size={10} className="text-neutral-600" />;

                    if (status === 'completed') {
                      badgeClass = 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-semibold';
                      icon = <CheckCircle2 size={10} className="text-emerald-400" />;
                    } else if (status === 'skipped') {
                      badgeClass = 'bg-amber-500/20 text-amber-300 border-amber-500/40';
                      icon = <MinusCircle size={10} className="text-amber-400" />;
                    } else if (!isScheduled) {
                      badgeClass = 'bg-neutral-900/60 text-neutral-600 border-neutral-800 border-dashed';
                      icon = <MinusCircle size={10} className="text-neutral-700" />;
                    }

                    return (
                      <button
                        key={habit.id}
                        type="button"
                        onClick={(e) => handleCycleStatus(e, habit, dateKey)}
                        title={`${habit.title}: ${status.toUpperCase()}${habit.skipReasons?.[dateKey] ? ` (${habit.skipReasons[dateKey]})` : ''}`}
                        className={`w-full text-left px-1.5 py-0.5 rounded text-[10px] font-mono truncate border flex items-center gap-1 transition-transform active:scale-95 ${badgeClass}`}
                      >
                        {icon}
                        <span className="truncate">{habit.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};
