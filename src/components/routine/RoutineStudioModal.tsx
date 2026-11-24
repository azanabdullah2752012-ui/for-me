import React, { useState, useEffect } from 'react';
import { 
  X, 
  CalendarClock, 
  Plus, 
  Trash2, 
  Play, 
  Edit3, 
  RotateCcw, 
  Sun, 
  Moon, 
  Zap, 
  Coffee, 
  Dumbbell, 
  BookOpen, 
  Check, 
  Layers,
  ChevronDown
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

  // Preset dropdown open/close
  const [showPresetMenu, setShowPresetMenu] = useState(false);

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

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        if (showPresetMenu) {
          setShowPresetMenu(false);
        } else if (editingBlockId) {
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
  }, [isOpen, onClose, showPresetMenu, editingBlockId, isAddingBlock]);

  // Categories metadata with calm starlight tones
  const CATEGORY_META: Record<
    RoutineCategory,
    { label: string; icon: React.FC<{ className?: string }>; color: string; badgeCls: string }
  > = {
    morning: { 
      label: 'Morning Protocol', 
      icon: Sun, 
      color: '#f59e0b', 
      badgeCls: isLight ? 'bg-amber-50 text-amber-800 border-amber-200' : 'bg-amber-400/10 text-amber-300 border-amber-400/20' 
    },
    deep_work: { 
      label: 'Deep Focus Sprint', 
      icon: Zap, 
      color: '#8b5cf6', 
      badgeCls: isLight ? 'bg-violet-50 text-violet-800 border-violet-200' : 'bg-violet-400/10 text-violet-300 border-violet-400/20' 
    },
    study: { 
      label: 'Study & Academics', 
      icon: BookOpen, 
      color: '#06b6d4', 
      badgeCls: isLight ? 'bg-cyan-50 text-cyan-800 border-cyan-200' : 'bg-cyan-400/10 text-cyan-300 border-cyan-400/20' 
    },
    break: { 
      label: 'Recharge & Nutrition', 
      icon: Coffee, 
      color: '#10b981', 
      badgeCls: isLight ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : 'bg-emerald-400/10 text-emerald-300 border-emerald-400/20' 
    },
    fitness: { 
      label: 'Movement & Fitness', 
      icon: Dumbbell, 
      color: '#f43f5e', 
      badgeCls: isLight ? 'bg-rose-50 text-rose-800 border-rose-200' : 'bg-rose-400/10 text-rose-300 border-rose-400/20' 
    },
    evening: { 
      label: 'Evening Wind-Down', 
      icon: Moon, 
      color: '#a855f7', 
      badgeCls: isLight ? 'bg-purple-50 text-purple-800 border-purple-200' : 'bg-purple-400/10 text-purple-300 border-purple-400/20' 
    },
    night: { 
      label: 'Sleep & Night Protocol', 
      icon: Moon, 
      color: '#6366f1', 
      badgeCls: isLight ? 'bg-indigo-50 text-indigo-800 border-indigo-200' : 'bg-indigo-400/10 text-indigo-300 border-indigo-400/20' 
    },
    custom: { 
      label: 'Custom Block', 
      icon: Layers, 
      color: '#3b82f6', 
      badgeCls: isLight ? 'bg-blue-50 text-blue-800 border-blue-200' : 'bg-blue-400/10 text-blue-300 border-blue-400/20' 
    },
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto backdrop-blur-2xl bg-black/75 animate-fadeIn select-none"
      role="dialog"
      aria-modal="true"
      aria-label="Daily Circadian Rhythm Studio"
    >
      {/* Background dismiss */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Main Container */}
      <div
        className={`relative w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col rounded-3xl border shadow-2xl z-10 transition-all ${
          isLight
            ? 'bg-white/95 border-zinc-200/90 text-zinc-900 shadow-[0_25px_70px_rgba(0,0,0,0.12)]'
            : 'bg-[#080a14]/95 border-white/[0.1] text-zinc-100 shadow-[0_30px_90px_rgba(0,0,0,0.85)]'
        }`}
      >
        {/* ======================================================== */}
        {/* HEADER BAR                                               */}
        {/* ======================================================== */}
        <div
          className={`flex items-center justify-between px-6 py-4 border-b shrink-0 ${
            isLight ? 'border-zinc-200/80 bg-zinc-50/70' : 'border-white/[0.06] bg-white/[0.015]'
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-9 h-9 rounded-2xl flex items-center justify-center border shadow-xs ${
                isLight
                  ? 'bg-amber-100/70 border-amber-200 text-amber-700'
                  : 'bg-white/[0.04] border-white/10 text-amber-400'
              }`}
            >
              <CalendarClock className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-sans font-bold tracking-tight">Daily Circadian Rhythm</h2>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                  isLight ? 'bg-zinc-100 text-zinc-600 border-zinc-200' : 'bg-white/[0.04] text-zinc-400 border-white/[0.06]'
                }`}>
                  {routines.length} blocks
                </span>
              </div>
              <p className={`text-[11px] font-sans ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                Diurnal time blocking & daily focus schedule
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Presets Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowPresetMenu(!showPresetMenu)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                  isLight
                    ? 'border-zinc-200 hover:border-zinc-300 text-zinc-700 bg-white hover:bg-zinc-50 shadow-xs'
                    : 'border-white/10 hover:border-white/20 text-zinc-300 hover:text-white bg-white/[0.03]'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-zinc-400" />
                <span>Presets</span>
                <ChevronDown className="w-3 h-3 text-zinc-500" />
              </button>

              {showPresetMenu && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setShowPresetMenu(false)} />
                  <div className={`absolute right-0 mt-2 w-64 rounded-2xl border p-1.5 z-50 shadow-2xl backdrop-blur-2xl ${
                    isLight
                      ? 'bg-white border-zinc-200 text-zinc-900 shadow-xl'
                      : 'bg-[#0d1020] border-white/10 text-white'
                  }`}>
                    <div className="px-3 py-1.5 text-[10px] font-sans font-semibold uppercase tracking-wider text-zinc-500">
                      Choose Circadian Preset
                    </div>
                    {Object.entries(ROUTINE_PRESETS).map(([key, preset]) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => {
                          loadRoutinePreset(key);
                          setShowPresetMenu(false);
                        }}
                        className={`w-full text-left p-2.5 rounded-xl transition-all cursor-pointer ${
                          isLight ? 'hover:bg-zinc-100 text-zinc-800' : 'hover:bg-white/[0.06] text-zinc-200'
                        }`}
                      >
                        <div className="text-xs font-semibold">{preset.label}</div>
                        <div className="text-[10px] text-zinc-500 mt-0.5 leading-snug">
                          {preset.description}
                        </div>
                      </button>
                    ))}
                    <div className={`border-t my-1 ${isLight ? 'border-zinc-200' : 'border-white/[0.06]'}`} />
                    <button
                      type="button"
                      onClick={() => {
                        resetRoutines();
                        setShowPresetMenu(false);
                      }}
                      className={`w-full text-left p-2 rounded-xl text-xs flex items-center gap-1.5 transition-colors cursor-pointer ${
                        isLight ? 'hover:bg-zinc-100 text-zinc-600' : 'hover:bg-white/[0.06] text-zinc-400'
                      }`}
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Reset to default rhythm</span>
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* + Add Block */}
            <button
              type="button"
              onClick={() => setIsAddingBlock(!isAddingBlock)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                isAddingBlock
                  ? isLight
                    ? 'bg-zinc-900 text-white border-zinc-900'
                    : 'bg-white text-zinc-950 border-white'
                  : isLight
                  ? 'border-zinc-200 hover:border-zinc-300 text-zinc-700 bg-white hover:bg-zinc-50'
                  : 'border-white/10 hover:border-white/20 text-zinc-200 hover:text-white bg-white/[0.04]'
              }`}
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Block</span>
            </button>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close Routine Studio"
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                isLight ? 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600' : 'bg-white/[0.06] hover:bg-white/[0.12] text-zinc-400 hover:text-white'
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* MODAL BODY (Scrollable)                                  */}
        {/* ======================================================== */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
          
          {/* 1. 24-HOUR DIURNAL HORIZON BAR */}
          <div
            className={`p-4 rounded-2xl border transition-all ${
              isLight
                ? 'bg-zinc-50/70 border-zinc-200/90 shadow-xs'
                : 'bg-white/[0.02] border-white/[0.06]'
            }`}
          >
            <RoutineTimelineBar
              routines={routines}
              activeBlock={activeRoutineBlock}
              activeMinutesLeft={activeRoutineMinutesLeft}
              onSelectBlock={startEditBlock}
              isLight={isLight}
            />
          </div>

          {/* 2. ACTIVE NOW STAGE CARD (Subtle, architectural, non-garish) */}
          {activeRoutineBlock && (
            <div
              className={`p-4 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                isLight
                  ? 'bg-amber-50/60 border-amber-200/90 shadow-xs'
                  : 'bg-amber-400/[0.03] border-amber-400/20'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="relative flex h-2.5 w-2.5 mt-1 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400" />
                </span>

                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold">
                      Current Focus Phase
                    </span>
                    <span className={`text-[11px] font-mono tabular-nums ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                      {activeRoutineBlock.timeRange}
                    </span>
                    {activeRoutineMinutesLeft > 0 && (
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                        isLight ? 'bg-amber-100 text-amber-800 border-amber-200' : 'bg-amber-400/10 text-amber-300 border-amber-400/20'
                      }`}>
                        {Math.floor(activeRoutineMinutesLeft / 60) > 0 ? `${Math.floor(activeRoutineMinutesLeft / 60)}h ` : ''}
                        {activeRoutineMinutesLeft % 60}m left
                      </span>
                    )}
                  </div>

                  <h3 className={`text-sm font-sans font-bold mt-1 ${isLight ? 'text-zinc-900' : 'text-white'}`}>
                    {activeRoutineBlock.title}
                  </h3>
                  <p className={`text-xs font-sans mt-0.5 ${isLight ? 'text-zinc-600' : 'text-zinc-300'}`}>
                    {activeRoutineBlock.description}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleTriggerFocus(activeRoutineBlock)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all shadow-xs cursor-pointer shrink-0 self-end sm:self-center ${
                  isLight
                    ? 'bg-zinc-900 hover:bg-zinc-800 text-white'
                    : 'bg-white/[0.08] hover:bg-white/[0.15] text-white border border-white/15'
                }`}
              >
                <Play className="w-3.5 h-3.5 fill-current text-amber-400" />
                <span>Focus Now</span>
              </button>
            </div>
          )}

          {/* 3. ADD BLOCK INLINE DRAWER (Smooth, clean form) */}
          {isAddingBlock && (
            <form
              onSubmit={handleAddSubmit}
              className={`p-4 sm:p-5 rounded-2xl border space-y-3.5 animate-fadeIn ${
                isLight ? 'bg-zinc-50 border-zinc-300 shadow-sm' : 'bg-white/[0.03] border-white/15'
              }`}
            >
              <div className="flex items-center justify-between pb-1">
                <span className={`text-xs font-sans font-bold uppercase tracking-wider ${
                  isLight ? 'text-zinc-800' : 'text-zinc-200'
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
                  <label className={`text-[10px] font-sans font-medium ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
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
                  <label className={`text-[10px] font-sans font-medium ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
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
                  <label className={`text-[10px] font-sans font-medium ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
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
                  <label className={`text-[10px] font-sans font-medium ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
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
                <label className={`text-[10px] font-sans font-medium ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                  Focus Intentions & Notes
                </label>
                <textarea
                  placeholder="Key goals, environmental triggers, or habits associated with this time block..."
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  className="w-full cosmic-input rounded-xl px-3 py-2 text-xs resize-none h-16"
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
                  className={`px-4 py-1.5 rounded-xl text-xs font-sans font-semibold transition-colors shadow-xs cursor-pointer ${
                    isLight
                      ? 'bg-zinc-900 hover:bg-zinc-800 text-white'
                      : 'bg-white hover:bg-zinc-200 text-zinc-950'
                  }`}
                >
                  Save Time Block
                </button>
              </div>
            </form>
          )}

          {/* 4. CHRONOLOGICAL DIURNAL TIMELINE RAIL */}
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-1">
              <span className={`text-xs font-sans font-bold uppercase tracking-wider ${
                isLight ? 'text-zinc-700' : 'text-zinc-300'
              }`}>
                Diurnal Schedule
              </span>
              <span className={`text-[11px] font-sans ${isLight ? 'text-zinc-500' : 'text-zinc-500'}`}>
                {nextRoutineBlock && !activeRoutineBlock ? (
                  <>
                    Next up: <span className="text-zinc-300 font-medium">{nextRoutineBlock.title}</span> at {nextRoutineBlock.startTime || nextRoutineBlock.timeRange}
                    {nextRoutineMinutesUntil > 0 && ` (in ${Math.floor(nextRoutineMinutesUntil / 60) > 0 ? `${Math.floor(nextRoutineMinutesUntil / 60)}h ` : ''}${nextRoutineMinutesUntil % 60}m)`}
                  </>
                ) : (
                  <>Chronological 24h cadence</>
                )}
              </span>
            </div>

            {/* Vertical Timeline Spine */}
            <div className="relative pl-6 sm:pl-8 space-y-4 before:absolute before:left-2 sm:before:left-3 before:top-3 before:bottom-3 before:w-[1px] before:bg-white/[0.08]">
              {routines.map((r) => {
                const isCurrent = activeRoutineBlock?.id === r.id;
                const isEditing = editingBlockId === r.id;
                const cat = r.category || 'deep_work';
                const meta = CATEGORY_META[cat] || CATEGORY_META.deep_work;
                const CategoryIcon = meta.icon;
                const duration = calculateDuration(r.startTime, r.endTime);

                return (
                  <div key={r.id} className="relative group">
                    {/* Timeline Node on Spine */}
                    <div
                      className={`absolute -left-6 sm:-left-8 top-4 -translate-x-1/2 w-2.5 h-2.5 rounded-full border transition-all ${
                        isCurrent
                          ? 'bg-amber-400 border-white shadow-[0_0_8px_rgba(245,158,11,0.8)] ring-2 ring-amber-400/30'
                          : isLight
                          ? 'bg-zinc-300 border-white'
                          : 'bg-zinc-700 border-[#080a14]'
                      }`}
                    />

                    {isEditing ? (
                      /* Inline Edit Form */
                      <div
                        className={`p-4 rounded-2xl border space-y-3 transition-all ${
                          isLight ? 'bg-zinc-50 border-zinc-300 shadow-sm' : 'bg-white/[0.04] border-white/20'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-sans font-bold text-amber-400 uppercase tracking-wider">
                            Edit Time Block
                          </span>
                          <div className="flex items-center gap-1.5">
                            <button
                              type="button"
                              onClick={() => saveEditBlock(r.id)}
                              className={`flex items-center gap-1 px-3 py-1 rounded-xl text-xs font-sans font-semibold transition-colors cursor-pointer ${
                                isLight
                                  ? 'bg-zinc-900 hover:bg-zinc-800 text-white'
                                  : 'bg-white hover:bg-zinc-200 text-zinc-950'
                              }`}
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
                            Description & Focus Intentions
                          </label>
                          <textarea
                            value={editDescription}
                            onChange={(e) => setEditDescription(e.target.value)}
                            className="w-full cosmic-input rounded-xl px-3 py-1.5 text-xs resize-none h-16"
                          />
                        </div>
                      </div>
                    ) : (
                      /* Elegant Resting Card */
                      <div
                        className={`p-3.5 sm:p-4 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                          isCurrent
                            ? isLight
                              ? 'bg-amber-50/70 border-amber-300 shadow-sm'
                              : 'bg-amber-400/[0.04] border-amber-400/30 shadow-sm'
                            : isLight
                            ? 'bg-white/80 border-zinc-200/80 hover:border-zinc-300 shadow-xs'
                            : 'bg-white/[0.02] border-white/[0.06] hover:border-white/15'
                        }`}
                      >
                        <div className="flex items-start gap-3 min-w-0">
                          {/* Category Icon Badge */}
                          <div
                            className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border mt-0.5"
                            style={{
                              backgroundColor: `${meta.color}15`,
                              borderColor: `${meta.color}30`,
                              color: meta.color,
                            }}
                          >
                            <CategoryIcon className="w-3.5 h-3.5" />
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2 flex-wrap pb-0.5">
                              {/* Exact Time Badge */}
                              <span className={`text-xs font-mono font-bold tabular-nums ${
                                isCurrent
                                  ? 'text-amber-400'
                                  : isLight ? 'text-zinc-900' : 'text-zinc-100'
                              }`}>
                                {r.startTime || r.timeRange.split(/[-–—to]/i)[0]?.trim()} – {r.endTime || r.timeRange.split(/[-–—to]/i)[1]?.trim()}
                              </span>

                              {duration && (
                                <span className={`text-[10px] font-mono tabular-nums px-1.5 py-0.5 rounded-md ${
                                  isLight ? 'bg-zinc-100 text-zinc-500' : 'bg-white/[0.04] text-zinc-400'
                                }`}>
                                  {duration}
                                </span>
                              )}

                              {/* Category Badge */}
                              <span className={`text-[9px] font-sans px-2 py-0.5 rounded-full border font-medium ${meta.badgeCls}`}>
                                {meta.label}
                              </span>

                              {/* Active Badge */}
                              {isCurrent && (
                                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 font-bold uppercase tracking-wider">
                                  Active Now
                                </span>
                              )}
                            </div>

                            <div className={`text-xs font-semibold tracking-tight mt-0.5 ${
                              isLight ? 'text-zinc-800' : 'text-zinc-200'
                            }`}>
                              {r.title}
                            </div>

                            <p className={`text-[11px] leading-relaxed line-clamp-2 mt-0.5 ${
                              isLight ? 'text-zinc-600' : 'text-zinc-400'
                            }`}>
                              {r.description}
                            </p>
                          </div>
                        </div>

                        {/* Actions (Quiet, elegant) */}
                        <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-center">
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
                    )}
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
            isLight ? 'border-zinc-200/80 bg-zinc-50/70' : 'border-white/[0.06] bg-black/25'
          }`}
        >
          <div className={`text-[11px] font-sans ${isLight ? 'text-zinc-500' : 'text-zinc-500'}`}>
            Auto-synced with daily circadian rhythm
          </div>

          <button
            type="button"
            onClick={onClose}
            className={`px-4 py-1.5 rounded-xl text-xs font-sans font-medium transition-colors cursor-pointer ${
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
