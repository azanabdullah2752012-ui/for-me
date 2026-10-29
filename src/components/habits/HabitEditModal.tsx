import React, { useState, useEffect } from 'react';
import { Habit, HabitCategory, HabitFrequency } from '../../types';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';

interface HabitEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  habitToEdit?: Habit | null;
  onSave: (habitData: {
    title: string;
    category: HabitCategory;
    frequency: HabitFrequency;
    customDays: number[];
    targetPerDay: number;
    unit: string;
    notes?: string;
  }) => void;
}

export const HabitEditModal: React.FC<HabitEditModalProps> = ({
  isOpen,
  onClose,
  habitToEdit,
  onSave,
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<HabitCategory>('craft');
  const [frequency, setFrequency] = useState<HabitFrequency>('daily');
  const [customDays, setCustomDays] = useState<number[]>([1, 2, 3, 4, 5]); // Mon-Fri default
  const [targetPerDay, setTargetPerDay] = useState(1);
  const [unit, setUnit] = useState('session');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (habitToEdit) {
      setTitle(habitToEdit.title);
      setCategory(habitToEdit.category);
      setFrequency(habitToEdit.frequency);
      setCustomDays(habitToEdit.customDays || (habitToEdit.frequency === 'weekdays' ? [1, 2, 3, 4, 5] : [0, 1, 2, 3, 4, 5, 6]));
      setTargetPerDay(habitToEdit.targetPerDay);
      setUnit(habitToEdit.unit);
      setNotes(habitToEdit.notes || '');
    } else {
      setTitle('');
      setCategory('craft');
      setFrequency('daily');
      setCustomDays([0, 1, 2, 3, 4, 5, 6]);
      setTargetPerDay(1);
      setUnit('session');
      setNotes('');
    }
  }, [habitToEdit, isOpen]);

  const daysOfWeek = [
    { label: 'Mon', value: 1 },
    { label: 'Tue', value: 2 },
    { label: 'Wed', value: 3 },
    { label: 'Thu', value: 4 },
    { label: 'Fri', value: 5 },
    { label: 'Sat', value: 6 },
    { label: 'Sun', value: 0 },
  ];

  const toggleDay = (dayVal: number) => {
    if (customDays.includes(dayVal)) {
      if (customDays.length > 1) {
        setCustomDays(customDays.filter(d => d !== dayVal));
      }
    } else {
      setCustomDays([...customDays, dayVal].sort());
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    onSave({
      title: title.trim(),
      category,
      frequency,
      customDays: frequency === 'custom' ? customDays : (frequency === 'weekdays' ? [1, 2, 3, 4, 5] : [0, 1, 2, 3, 4, 5, 6]),
      targetPerDay: Number(targetPerDay) || 1,
      unit: unit.trim() || 'session',
      notes: notes.trim() || undefined,
    });

    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={habitToEdit ? 'Configure Habit Protocol' : 'Establish New Habit Protocol'}
      subtitle="Craft an intentional daily or scheduled protocol with precise frequency."
      maxWidth="max-w-lg"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
            Protocol Name / Commitment
          </label>
          <input
            type="text"
            required
            placeholder="e.g. 90m Deep Work, 5km Zone 2, Evening Digital Shutdown..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-dark-850 border border-surface-border rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-accent"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
            Domain Category
          </label>
          <div className="grid grid-cols-5 gap-1.5">
            {(['craft', 'body', 'mind', 'discipline', 'spirit'] as HabitCategory[]).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`py-1.5 text-[10px] font-mono uppercase rounded-lg border transition-all ${
                  category === cat
                    ? 'bg-accent/20 text-accent border-accent font-bold'
                    : 'bg-dark-850 text-neutral-400 border-surface-border hover:bg-dark-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Frequency & Schedule */}
        <div className="space-y-2.5">
          <label className="block text-xs font-mono uppercase text-neutral-400">
            Schedule Frequency
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'daily', label: 'Daily (7 Days)' },
              { id: 'weekdays', label: 'Mon – Fri' },
              { id: 'custom', label: 'Selected Days' },
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFrequency(f.id as HabitFrequency)}
                className={`py-2 text-xs font-mono rounded-lg border transition-all ${
                  frequency === f.id
                    ? 'bg-accent/20 text-accent border-accent font-bold'
                    : 'bg-dark-850 text-neutral-400 border-surface-border hover:bg-dark-800'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* If Custom Days, show day selector buttons */}
          {frequency === 'custom' && (
            <div className="p-3 rounded-lg bg-dark-850 border border-surface-border-subtle space-y-1.5">
              <span className="text-[10px] font-mono uppercase text-neutral-400 block">
                Choose Scheduled Days:
              </span>
              <div className="flex items-center gap-1.5 flex-wrap">
                {daysOfWeek.map((d) => {
                  const isSelected = customDays.includes(d.value);
                  return (
                    <button
                      key={d.value}
                      type="button"
                      onClick={() => toggleDay(d.value)}
                      className={`px-3 py-1.5 rounded text-xs font-mono font-medium transition-colors ${
                        isSelected
                          ? 'bg-accent text-dark-950 font-bold'
                          : 'bg-dark-900 text-neutral-400 border border-surface-border hover:text-white'
                      }`}
                    >
                      {d.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Target and Unit */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
              Target Per Day
            </label>
            <input
              type="number"
              min="1"
              max="500"
              value={targetPerDay}
              onChange={(e) => setTargetPerDay(Number(e.target.value))}
              className="w-full bg-dark-850 border border-surface-border rounded-lg px-3 py-2 text-xs text-white font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
              Measurement Unit
            </label>
            <input
              type="text"
              placeholder="session, pages, reps, mins..."
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              className="w-full bg-dark-850 border border-surface-border rounded-lg px-3 py-2 text-xs text-white font-mono"
            />
          </div>
        </div>

        {/* Motivation / Notes */}
        <div>
          <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
            Rationale & Implementation Protocol (Optional)
          </label>
          <input
            type="text"
            placeholder="e.g. Done immediately upon waking before touching phone..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full bg-dark-850 border border-surface-border rounded-lg px-3 py-2 text-xs text-white"
          />
        </div>

        <div className="flex justify-end gap-2 pt-3 border-t border-surface-border">
          <Button type="button" variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            {habitToEdit ? 'Save Changes' : 'Establish Protocol'}
          </Button>
        </div>
      </form>
    </Modal>
  );
};
