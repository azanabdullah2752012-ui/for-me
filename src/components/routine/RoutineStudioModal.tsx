import React, { useState, useEffect, useMemo } from 'react';
import { 
  X, 
  CalendarClock, 
  Plus, 
  Trash2, 
  Play, 
  Edit3, 
  RotateCcw, 
  Sparkles, 
  Sun, 
  Moon, 
  Zap, 
  Coffee, 
  Dumbbell, 
  BookOpen, 
  Check, 
  Clock, 
  Layers
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { RoutineBlock, RoutineCategory } from '../../types';
import { RoutineTimelineBar } from './RoutineTimelineBar';
import { ROUTINE_PRESETS } from '../../context/DataContext';

interface RoutineStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartFocus?: (subject: string) => void;
}

export const RoutineStudioModal: React.FC<RoutineStudioModalProps> = ({
  isOpen,
  onClose,
  onStartFocus,
}) => {
  const {
    routines,
    addRoutineBlock,
    updateRoutineBlock,
    deleteRoutineBlock,
    resetRoutines,
    loadRoutinePreset,
    activeRoutineBlock,
    activeRoutineMinutesLeft,
    nextRoutineBlock,
    nextRoutineMinutesUntil,
    setStudySubject,
    startPomodoro,
    appTheme,
  } = useData();

  const isLight = appTheme === 'light';

  // In-place editing state
  const [editingBlockId, setEditingBlockId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editStartTime, setEditStartTime] = useState('');
  const [editEndTime, setEditEndTime] = useState('');
  const [editCategory, setEditCategory] = useState<RoutineCategory>('deep_work');
  const [editDescription, setEditDescription] = useState('');

  // Add block form state
  const [isAddingBlock, setIsAddingBlock] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newStartTime, setNewStartTime] = useState('09:00');
  const [newEndTime, setNewEndTime] = useState('11:00');
  const [newCategory, setNewCategory] = useState<RoutineCategory>('deep_work');
  const [newDescription, setNewDescription] = useState('');

  // Active filter category: 'all' | RoutineCategory
  const [categoryFilter, setCategoryFilter] = useState<'all' | RoutineCategory>('all');

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        if (editingBlockId) {
          setEditingBlockId(null);
        } else if (isAddingBlock) {
          setIsAddingBlock(false);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, editingBlockId, isAddingBlock]);

  // Categories metadata
  const CATEGORY_META: Record<
    RoutineCategory,
    { label: string; icon: React.FC<{ className?: string }>; color: string; bgLight: string; bgDark: string }
  > = {
    morning: { label: 'Morning Protocol', icon: Sun, color: '#f59e0b', bgLight: 'bg-amber-50 text-amber-800 border-amber-200', bgDark: 'bg-amber-500/10 text-amber-300 border-amber-400/25' },
    deep_work: { label: 'Deep Work & Engineering', icon: Zap, color: '#8b5cf6', bgLight: 'bg-violet-50 text-violet-800 border-violet-200', bgDark: 'bg-violet-500/10 text-violet-300 border-violet-400/25' },
    study: { label: 'Study & Academics', icon: BookOpen, color: '#06b6d4', bgLight: 'bg-cyan-50 text-cyan-800 border-cyan-200', bgDark: 'bg-cyan-500/10 text-cyan-300 border-cyan-400/25' },
    break: { label: 'Recharge & Nutrition', icon: Coffee, color: '#10b981', bgLight: 'bg-emerald-50 text-emerald-800 border-emerald-200', bgDark: 'bg-emerald-500/10 text-emerald-300 border-emerald-400/25' },
    fitness: { label: 'Fitness & Movement', icon: Dumbbell, color: '#f43f5e', bgLight: 'bg-rose-50 text-rose-800 border-rose-200', bgDark: 'bg-rose-500/10 text-rose-300 border-rose-400/25' },
    evening: { label: 'Evening Restoration', icon: Moon, color: '#a855f7', bgLight: 'bg-purple-50 text-purple-800 border-purple-200', bgDark: 'bg-purple-500/10 text-purple-300 border-purple-400/25' },
    night: { label: 'Sleep & Night Protocol', icon: Moon, color: '#6366f1', bgLight: 'bg-indigo-50 text-indigo-800 border-indigo-200', bgDark: 'bg-indigo-500/10 text-indigo-300 border-indigo-400/25' },
    custom: { label: 'Custom Rhythm', icon: Layers, color: '#3b82f6', bgLight: 'bg-blue-50 text-blue-800 border-blue-200', bgDark: 'bg-blue-500/10 text-blue-300 border-blue-400/25' },
  };

  const startEditBlock = (block: RoutineBlock) => {
    setEditingBlockId(block.id);
    setEditTitle(block.title);
    setEditStartTime(block.startTime || '09:00');
    setEditEndTime(block.endTime || '11:00');
    setEditCategory(block.category || 'deep_work');
    setEditDescription(block.description);
  };

  const saveEditBlock = (id: string) => {
    if (!editTitle.trim()) return;
    const cat = editCategory || 'deep_work';
    const color = CATEGORY_META[cat]?.color || '#8b5cf6';
    updateRoutineBlock(id, {
      title: editTitle.trim(),
      startTime: editStartTime,
      endTime: editEndTime,
      category: cat,
      description: editDescription.trim(),
      colorTag: color,
    });
    setEditingBlockId(null);
  };

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newStartTime || !newEndTime) return;
    const cat = newCategory || 'deep_work';
    const color = CATEGORY_META[cat]?.color || '#8b5cf6';
    addRoutineBlock({
      title: newTitle.trim(),
      startTime: newStartTime,
      endTime: newEndTime,
      timeRange: `${newStartTime} – ${newEndTime}`,
      category: cat,
      colorTag: color,
      description: newDescription.trim() || 'Scheduled focus block.',
      iconType: 'custom',
    });
    setNewTitle('');
    setNewDescription('');
    setIsAddingBlock(false);
  };

  const handleTriggerFocus = (block: RoutineBlock) => {
    setStudySubject(block.title);
    startPomodoro();
    if (onStartFocus) onStartFocus(block.title);
    onClose();
  };

  // Filtered routines list
  const filteredRoutines = useMemo(() => {
    if (categoryFilter === 'all') return routines;
    return routines.filter((r) => r.category === categoryFilter);
  }, [routines, categoryFilter]);

  // Duration calculator helper
  const calculateDuration = (startTime?: string, endTime?: string): string => {
    if (!startTime || !endTime) return '';
    const [sh, sm] = startTime.split(':').map((x) => parseInt(x, 10));
    const [eh, em] = endTime.split(':').map((x) => parseInt(x, 10));
    if (isNaN(sh) || isNaN(sm) || isNaN(eh) || isNaN(em)) return '';
    let totalMins = eh * 60 + em - (sh * 60 + sm);
    if (totalMins < 0) totalMins += 24 * 60;
    const hrs = Math.floor(totalMins / 60);
    const mins = totalMins % 60;
    if (hrs === 0) return `${mins}m`;
    if (mins === 0) return `${hrs}h`;
    return `${hrs}h ${mins}m`;
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto backdrop-blur-2xl bg-black/80 animate-fadeIn select-none"
      role="dialog"
      aria-modal="true"
      aria-label="Daily Schedule & Routine Studio"
    >
      {/* Background dismiss */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Main Container */}
      <div
        className={`relative w-full max-w-4xl max-h-[92vh] overflow-hidden flex flex-col rounded-3xl border shadow-2xl z-10 transition-all ${
          isLight
            ? 'bg-white/95 border-zinc-200/90 text-zinc-900 shadow-[0_25px_70px_rgba(0,0,0,0.15)]'
            : 'bg-[#0b0d18]/95 border-white/[0.12] text-zinc-100 shadow-[0_30px_90px_rgba(0,0,0,0.9)]'
        }`}
      >
        {/* ======================================================== */}
        {/* HEADER BAR                                               */}
        {/* ======================================================== */}
        <div
          className={`flex items-center justify-between px-6 py-4 border-b shrink-0 ${
            isLight ? 'border-zinc-200/90 bg-zinc-50/70' : 'border-white/[0.06] bg-black/25'
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-9 h-9 rounded-2xl flex items-center justify-center border shadow-xs ${
                isLight
                  ? 'bg-amber-100 border-amber-200 text-amber-700'
                  : 'bg-amber-500/20 border-amber-400/30 text-amber-400'
              }`}
            >
              <CalendarClock className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-sans font-bold tracking-tight">Daily Schedule & Routine Studio</h2>
              <p className={`text-[11px] font-sans ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                Circadian time blocking, focus routines, and daily rhythm
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close Routine Studio"
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
              isLight
                ? 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600'
                : 'bg-white/[0.06] hover:bg-white/[0.12] text-zinc-400 hover:text-white'
            }`}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* ======================================================== */}
        {/* QUICK PRESETS & TOOLBAR                                  */}
        {/* ======================================================== */}
        <div
          className={`px-6 py-2.5 border-b shrink-0 flex flex-wrap items-center justify-between gap-3 ${
            isLight ? 'border-zinc-200/80 bg-zinc-50/40' : 'border-white/[0.04] bg-white/[0.015]'
          }`}
        >
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className={`text-[11px] font-sans font-medium mr-1 ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
              Presets:
            </span>
            {Object.entries(ROUTINE_PRESETS).map(([key, preset]) => (
              <button
                key={key}
                type="button"
                onClick={() => loadRoutinePreset(key)}
                className={`text-[11px] font-sans font-medium px-2.5 py-1 rounded-xl border transition-all cursor-pointer ${
                  isLight
                    ? 'border-zinc-200 hover:border-zinc-300 text-zinc-700 hover:bg-white bg-white/70 shadow-xs'
                    : 'border-white/[0.08] hover:border-white/20 text-zinc-300 hover:text-white bg-white/[0.03]'
                }`}
                title={preset.description}
              >
                {preset.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={resetRoutines}
              className={`flex items-center gap-1 text-[11px] font-sans px-2.5 py-1 rounded-xl border transition-all cursor-pointer ${
                isLight
                  ? 'border-zinc-200 hover:border-zinc-300 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
                  : 'border-white/[0.08] hover:border-white/20 text-zinc-400 hover:text-white bg-white/[0.02]'
              }`}
              title="Reset schedule to defaults"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>

            <button
              type="button"
              onClick={() => setIsAddingBlock(!isAddingBlock)}
              className="flex items-center gap-1.5 text-[11px] font-sans font-semibold px-3 py-1 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 transition-colors shadow-xs cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Block</span>
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* MODAL BODY (Scrollable)                                  */}
        {/* ======================================================== */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
          {/* 1. 24-HOUR HORIZON TIMELINE RULER */}
          <div
            className={`p-4 rounded-2xl border transition-all ${
              isLight
                ? 'bg-zinc-50/80 border-zinc-200 shadow-xs'
                : 'bg-white/[0.02] border-white/[0.08]'
            }`}
          >
            <div className="flex items-center justify-between pb-3">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span className={`text-xs font-sans font-bold uppercase tracking-wider ${
                  isLight ? 'text-zinc-800' : 'text-zinc-200'
                }`}>
                  24-Hour Diurnal Horizon
                </span>
              </div>
              <span className={`text-[11px] font-sans ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                {routines.length} scheduled time blocks
              </span>
            </div>

            <RoutineTimelineBar
              routines={routines}
              activeBlock={activeRoutineBlock}
              activeMinutesLeft={activeRoutineMinutesLeft}
              onSelectBlock={startEditBlock}
              isLight={isLight}
              variant="studio"
            />
          </div>

          {/* 2. ACTIVE / NEXT PROTOCOL TELEMETRY HERO */}
          <div
            className={`p-4 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
              activeRoutineBlock
                ? isLight
                  ? 'bg-amber-50/80 border-amber-300/80 shadow-xs'
                  : 'bg-amber-500/[0.08] border-amber-400/30 shadow-[0_0_20px_rgba(245,158,11,0.06)]'
                : isLight
                ? 'bg-zinc-100/70 border-zinc-200'
                : 'bg-white/[0.03] border-white/[0.06]'
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${
                  activeRoutineBlock
                    ? 'bg-amber-400/20 border-amber-400/40 text-amber-400'
                    : isLight
                    ? 'bg-zinc-200 text-zinc-600'
                    : 'bg-white/[0.05] text-zinc-400'
                }`}
              >
                {activeRoutineBlock ? <Sparkles className="w-4 h-4 animate-pulse" /> : <Clock className="w-4 h-4" />}
              </div>

              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full font-bold ${
                    activeRoutineBlock
                      ? 'bg-amber-400/20 text-amber-400 border border-amber-400/30'
                      : isLight ? 'bg-zinc-200 text-zinc-600' : 'bg-white/[0.06] text-zinc-400'
                  }`}>
                    {activeRoutineBlock ? 'Current Active Block' : 'Free Buffer Time'}
                  </span>
                  <span className={`text-xs font-mono tabular-nums ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                    {activeRoutineBlock ? activeRoutineBlock.timeRange : 'Flexible cadence'}
                  </span>
                </div>

                <h3 className={`text-sm font-sans font-bold mt-1 ${isLight ? 'text-zinc-900' : 'text-white'}`}>
                  {activeRoutineBlock ? activeRoutineBlock.title : 'No active scheduled block right now'}
                </h3>
                <p className={`text-xs font-sans mt-0.5 ${isLight ? 'text-zinc-600' : 'text-zinc-300'}`}>
                  {activeRoutineBlock
                    ? activeRoutineBlock.description
                    : nextRoutineBlock
                    ? `Upcoming next: "${nextRoutineBlock.title}" at ${nextRoutineBlock.startTime || nextRoutineBlock.timeRange} (in ${Math.round(nextRoutineMinutesUntil / 60)}h ${nextRoutineMinutesUntil % 60}m)`
                    : 'Enjoy your free unscheduled buffer or launch a custom sprint.'}
                </p>
              </div>
            </div>

            {activeRoutineBlock && (
              <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                <button
                  type="button"
                  onClick={() => handleTriggerFocus(activeRoutineBlock)}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-sans font-bold bg-amber-400 hover:bg-amber-300 text-zinc-950 transition-colors shadow-xs cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Start Focus</span>
                </button>
              </div>
            )}
          </div>

          {/* 3. ADD NEW BLOCK INLINE DRAWER (When open) */}
          {isAddingBlock && (
            <form
              onSubmit={handleAddSubmit}
              className={`p-4 sm:p-5 rounded-2xl border space-y-3.5 animate-fadeIn ${
                isLight ? 'bg-zinc-50 border-amber-300 shadow-sm' : 'bg-white/[0.03] border-amber-400/30'
              }`}
            >
              <div className="flex items-center justify-between pb-1">
                <span className={`text-xs font-sans font-bold uppercase tracking-wider ${
                  isLight ? 'text-zinc-900' : 'text-zinc-100'
                }`}>
                  New Routine Time Block
                </span>
                <button
                  type="button"
                  onClick={() => setIsAddingBlock(false)}
                  className={`text-xs ${isLight ? 'text-zinc-500 hover:text-black' : 'text-zinc-400 hover:text-white'}`}
                >
                  Cancel
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2 space-y-1">
                  <label className={`text-[11px] font-sans font-medium ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                    Block Title
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Core Problem Sets & Code Sprint"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full cosmic-input rounded-xl px-3 py-2 text-xs"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className={`text-[11px] font-sans font-medium ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                    Category
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as RoutineCategory)}
                    className="w-full cosmic-input rounded-xl px-2.5 py-2 text-xs cursor-pointer"
                  >
                    {Object.entries(CATEGORY_META).map(([catKey, meta]) => (
                      <option key={catKey} value={catKey} className="bg-zinc-900 text-white">
                        {meta.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-end">
                <div className="space-y-1">
                  <label className={`text-[11px] font-sans font-medium ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                    Start Time
                  </label>
                  <input
                    type="time"
                    value={newStartTime}
                    onChange={(e) => setNewStartTime(e.target.value)}
                    className="w-full cosmic-input rounded-xl px-3 py-2 text-xs font-mono"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className={`text-[11px] font-sans font-medium ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                    End Time
                  </label>
                  <input
                    type="time"
                    value={newEndTime}
                    onChange={(e) => setNewEndTime(e.target.value)}
                    className="w-full cosmic-input rounded-xl px-3 py-2 text-xs font-mono"
                    required
                  />
                </div>

                <div className={`text-xs font-mono pb-2 ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                  Duration: <span className="font-bold">{calculateDuration(newStartTime, newEndTime) || '—'}</span>
                </div>
              </div>

              <div className="space-y-1">
                <label className={`text-[11px] font-sans font-medium ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                  Description & Focus Intentions
                </label>
                <textarea
                  placeholder="Key goals, environmental triggers, or habits associated with this time block..."
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  className="w-full cosmic-input rounded-xl px-3 py-2 text-xs resize-none h-18"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setIsAddingBlock(false)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-sans transition-colors ${
                    isLight ? 'text-zinc-600 hover:text-black' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl text-xs font-sans font-bold bg-amber-400 hover:bg-amber-300 text-zinc-950 transition-colors shadow-xs cursor-pointer"
                >
                  Save Time Block
                </button>
              </div>
            </form>
          )}

          {/* 4. CATEGORY FILTER TABS & CHRONOLOGICAL BLOCK CARDS */}
          <div className="space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className={`text-xs font-sans font-bold uppercase tracking-wider ${
                isLight ? 'text-zinc-800' : 'text-zinc-200'
              }`}>
                Schedule Blocks ({filteredRoutines.length})
              </span>

              {/* Category Filter Pills */}
              <div className="flex items-center gap-1 overflow-x-auto pb-1 max-w-full">
                <button
                  type="button"
                  onClick={() => setCategoryFilter('all')}
                  className={`text-[11px] font-sans px-2.5 py-1 rounded-xl transition-all cursor-pointer ${
                    categoryFilter === 'all'
                      ? isLight
                        ? 'bg-zinc-900 text-white font-bold'
                        : 'bg-white text-zinc-950 font-bold'
                      : isLight
                      ? 'text-zinc-600 hover:bg-zinc-100'
                      : 'text-zinc-400 hover:bg-white/[0.05] hover:text-white'
                  }`}
                >
                  All
                </button>
                {Object.entries(CATEGORY_META).map(([catKey, meta]) => (
                  <button
                    key={catKey}
                    type="button"
                    onClick={() => setCategoryFilter(catKey as RoutineCategory)}
                    className={`text-[11px] font-sans px-2.5 py-1 rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                      categoryFilter === catKey
                        ? isLight
                          ? 'bg-zinc-900 text-white font-bold'
                          : 'bg-white text-zinc-950 font-bold'
                        : isLight
                        ? 'text-zinc-600 hover:bg-zinc-100'
                        : 'text-zinc-400 hover:bg-white/[0.05] hover:text-white'
                    }`}
                  >
                    {meta.label.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Blocks Stream */}
            <div className="space-y-2.5">
              {filteredRoutines.map((r) => {
                const isCurrent = activeRoutineBlock?.id === r.id;
                const isEditing = editingBlockId === r.id;
                const cat = r.category || 'deep_work';
                const meta = CATEGORY_META[cat] || CATEGORY_META.deep_work;
                const CategoryIcon = meta.icon;
                const duration = calculateDuration(r.startTime, r.endTime);

                if (isEditing) {
                  return (
                    <div
                      key={r.id}
                      className={`p-4 rounded-2xl border space-y-3 transition-all ${
                        isLight ? 'bg-zinc-50 border-amber-400 shadow-sm' : 'bg-white/[0.04] border-amber-400/40'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-sans font-bold text-amber-400 uppercase tracking-wider">
                          Edit Block
                        </span>
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() => saveEditBlock(r.id)}
                            className="flex items-center gap-1 px-3 py-1 rounded-xl text-xs font-sans font-bold bg-amber-400 hover:bg-amber-300 text-zinc-950 transition-colors cursor-pointer"
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span>Save</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setEditingBlockId(null)}
                            className={`p-1 rounded-lg transition-colors ${
                              isLight ? 'text-zinc-500 hover:text-black' : 'text-zinc-400 hover:text-white'
                            }`}
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        <div className="sm:col-span-2 space-y-1">
                          <label className={`text-[10px] font-sans ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                            Title
                          </label>
                          <input
                            type="text"
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                            className="w-full cosmic-input rounded-xl px-3 py-1.5 text-xs"
                            required
                          />
                        </div>

                        <div className="space-y-1">
                          <label className={`text-[10px] font-sans ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                            Category
                          </label>
                          <select
                            value={editCategory}
                            onChange={(e) => setEditCategory(e.target.value as RoutineCategory)}
                            className="w-full cosmic-input rounded-xl px-2.5 py-1.5 text-xs cursor-pointer"
                          >
                            {Object.entries(CATEGORY_META).map(([ck, m]) => (
                              <option key={ck} value={ck} className="bg-zinc-900 text-white">
                                {m.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <div className="space-y-1">
                          <label className={`text-[10px] font-sans ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                            Start Time
                          </label>
                          <input
                            type="time"
                            value={editStartTime}
                            onChange={(e) => setEditStartTime(e.target.value)}
                            className="w-full cosmic-input rounded-xl px-3 py-1.5 text-xs font-mono"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className={`text-[10px] font-sans ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                            End Time
                          </label>
                          <input
                            type="time"
                            value={editEndTime}
                            onChange={(e) => setEditEndTime(e.target.value)}
                            className="w-full cosmic-input rounded-xl px-3 py-1.5 text-xs font-mono"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className={`text-[10px] font-sans ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                          Description
                        </label>
                        <textarea
                          value={editDescription}
                          onChange={(e) => setEditDescription(e.target.value)}
                          className="w-full cosmic-input rounded-xl px-3 py-1.5 text-xs resize-none h-16"
                        />
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={r.id}
                    className={`p-4 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group ${
                      isCurrent
                        ? isLight
                          ? 'bg-amber-50/90 border-amber-300 shadow-sm'
                          : 'bg-amber-500/[0.04] border-amber-400/40 shadow-sm ring-1 ring-amber-400/20'
                        : isLight
                        ? 'bg-white/80 border-zinc-200 hover:border-zinc-300 shadow-xs'
                        : 'bg-white/[0.02] border-white/[0.07] hover:border-white/15'
                    }`}
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      {/* Category Icon Badge */}
                      <div
                        className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border mt-0.5"
                        style={{
                          backgroundColor: `${meta.color}15`,
                          borderColor: `${meta.color}35`,
                          color: meta.color,
                        }}
                      >
                        <CategoryIcon className="w-3.5 h-3.5" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap pb-0.5">
                          <span className={`font-semibold text-xs tracking-tight ${
                            isCurrent
                              ? 'text-amber-400 font-bold'
                              : isLight ? 'text-zinc-900' : 'text-zinc-100'
                          }`}>
                            {r.title}
                          </span>

                          {/* Category Badge */}
                          <span
                            className={`text-[9px] font-sans px-2 py-0.5 rounded-full border font-medium ${
                              isLight ? meta.bgLight : meta.bgDark
                            }`}
                          >
                            {meta.label}
                          </span>

                          {/* Current Active Indicator */}
                          {isCurrent && (
                            <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 font-bold uppercase tracking-wider">
                              Active Now
                            </span>
                          )}
                        </div>

                        <p className={`text-[11px] leading-relaxed line-clamp-2 ${
                          isLight ? 'text-zinc-600' : 'text-zinc-400'
                        }`}>
                          {r.description}
                        </p>
                      </div>
                    </div>

                    {/* Right side: Time badge + Actions */}
                    <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                      <div className="text-right">
                        <div className={`text-xs font-mono tabular-nums font-bold ${
                          isLight ? 'text-zinc-800' : 'text-zinc-200'
                        }`}>
                          {r.timeRange || `${r.startTime} – ${r.endTime}`}
                        </div>
                        {duration && (
                          <div className={`text-[10px] font-mono tabular-nums ${
                            isLight ? 'text-zinc-500' : 'text-zinc-400'
                          }`}>
                            {duration}
                          </div>
                        )}
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center gap-1 pl-1">
                        <button
                          type="button"
                          onClick={() => handleTriggerFocus(r)}
                          className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                            isLight
                              ? 'border-zinc-200 hover:border-zinc-300 text-zinc-700 hover:bg-zinc-100'
                              : 'border-white/10 hover:border-white/20 text-zinc-300 hover:text-white bg-white/[0.02]'
                          }`}
                          title="Start Focus Timer for this routine"
                        >
                          <Play className="w-3.5 h-3.5 fill-current text-amber-400" />
                        </button>

                        <button
                          type="button"
                          onClick={() => startEditBlock(r)}
                          className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                            isLight
                              ? 'border-zinc-200 hover:border-zinc-300 text-zinc-700 hover:bg-zinc-100'
                              : 'border-white/10 hover:border-white/20 text-zinc-400 hover:text-white bg-white/[0.02]'
                          }`}
                          title="Edit routine block"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>

                        {routines.length > 1 && (
                          <button
                            type="button"
                            onClick={() => deleteRoutineBlock(r.id)}
                            className="p-1.5 rounded-lg text-zinc-500 hover:text-red-400 transition-colors cursor-pointer"
                            title="Delete routine block"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* FOOTER BAR                                               */}
        {/* ======================================================== */}
        <div
          className={`px-6 py-3 border-t shrink-0 flex items-center justify-between gap-3 ${
            isLight ? 'border-zinc-200/90 bg-zinc-50/70' : 'border-white/[0.06] bg-black/30'
          }`}
        >
          <div className={`text-xs font-sans ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
            Tip: Changes save directly to your daily circadian rhythm.
          </div>

          <button
            type="button"
            onClick={onClose}
            className={`px-4 py-2 rounded-xl text-xs font-sans font-medium transition-colors cursor-pointer ${
              isLight
                ? 'bg-zinc-900 hover:bg-zinc-800 text-white'
                : 'bg-white/[0.08] hover:bg-white/[0.14] text-white'
            }`}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
