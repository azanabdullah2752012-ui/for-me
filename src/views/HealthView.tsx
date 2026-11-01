import React, { useState } from 'react';
import {
  Activity,
  Moon,
  Droplets,
  Dumbbell,
  Heart,
  Save,
  CheckCircle2,
  Apple,
  Plus,
  Minus,
  Check,
  Sunrise,
  Sun,
  CalendarClock,
  Edit3,
  Trash2,
  X,
  Sliders,
  RotateCw,
} from 'lucide-react';
import { useData, getDisplayDate, DEFAULT_ROUTINE_TIMETABLE } from '../context/DataContext';
import { RoutinePhase, RoutineTimetableConfig, RoutineStep } from '../types';
import { PageHero } from '../components/common/PageHero';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { sound } from '../audio/sound';

export const HealthView: React.FC = () => {
  const {
    selectedDate,
    currentLog,
    updateDailyLog,
    settings,
    updateSettings,
    toggleRoutineStep,
    addRoutineStep,
    editRoutineStep,
    deleteRoutineStep,
    resetRoutinesToDefault,
  } = useData();

  // Routine Timetable (T.T) state & controls
  const routineTimetable: RoutineTimetableConfig = settings.routineTimetable || DEFAULT_ROUTINE_TIMETABLE;
  const [isTimetableModalOpen, setIsTimetableModalOpen] = useState(false);
  const [draftTimetable, setDraftTimetable] = useState<RoutineTimetableConfig>(routineTimetable);

  const [activeAddPhase, setActiveAddPhase] = useState<RoutinePhase | null>(null);
  const [newStepText, setNewStepText] = useState('');
  const [newStepTimeRange, setNewStepTimeRange] = useState('');
  const [editingStepId, setEditingStepId] = useState<string | null>(null);
  const [editStepText, setEditStepText] = useState('');
  const [editStepTimeRange, setEditStepTimeRange] = useState('');

  const dailyRoutines = currentLog?.dailyRoutines || {
    morning: [],
    afternoon: [],
    evening: [],
  };

  const currentHour = new Date().getHours();
  const currentActivePhase: RoutinePhase =
    currentHour >= 5 && currentHour < 12
      ? 'morning'
      : currentHour >= 12 && currentHour < 18
      ? 'afternoon'
      : 'evening';

  const totalRoutineSteps =
    (dailyRoutines.morning?.length || 0) +
    (dailyRoutines.afternoon?.length || 0) +
    (dailyRoutines.evening?.length || 0);

  const completedRoutineSteps =
    (dailyRoutines.morning?.filter((s) => s.completed).length || 0) +
    (dailyRoutines.afternoon?.filter((s) => s.completed).length || 0) +
    (dailyRoutines.evening?.filter((s) => s.completed).length || 0);

  const handleAddRoutineStep = (phase: RoutinePhase) => {
    if (!newStepText.trim()) return;
    addRoutineStep(phase, newStepText.trim(), newStepTimeRange.trim() || undefined);
    setNewStepText('');
    setNewStepTimeRange('');
    setActiveAddPhase(null);
  };

  const handleStartEditStep = (step: RoutineStep) => {
    setEditingStepId(step.id);
    setEditStepText(step.text);
    setEditStepTimeRange(step.timeRange || '');
  };

  const handleSaveEditStep = (phase: RoutinePhase, stepId: string) => {
    if (!editStepText.trim()) return;
    editRoutineStep(phase, stepId, editStepText.trim(), editStepTimeRange.trim());
    setEditingStepId(null);
    setEditStepText('');
    setEditStepTimeRange('');
  };

  const handleSaveTimetable = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings({ routineTimetable: draftTimetable });
    setIsTimetableModalOpen(false);
    sound.complete();
  };

  const handleResetTimetableToDefault = () => {
    resetRoutinesToDefault();
    setDraftTimetable(DEFAULT_ROUTINE_TIMETABLE);
    sound.tick();
  };

  const [workoutType, setWorkoutType] = useState(currentLog.workoutType || 'Heavy Compound Strength');
  const [workoutDuration, setWorkoutDuration] = useState(currentLog.workoutDuration || 45);
  const [workoutNotes, setWorkoutNotes] = useState(currentLog.workoutNotes || '');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSaveWorkout = (e: React.FormEvent) => {
    e.preventDefault();
    updateDailyLog({
      workoutCompleted: true,
      workoutType,
      workoutDuration: Number(workoutDuration),
      workoutNotes,
      trackers: {
        ...(currentLog.trackers || {}),
        waterAndMovement: {
          ...(currentLog.trackers?.waterAndMovement || {
            skipped: false,
            waterGlasses: currentLog.waterGlasses || 0,
            workoutDone: false,
            workoutType: '',
            durationMins: 0,
            walkStepsDone: false,
          }),
          workoutDone: true,
          workoutType,
          durationMins: Number(workoutDuration),
          skipped: false,
        }
      } as any
    });
    sound.complete();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  const sleepTarget = settings.dailySleepTarget || 7.5;
  const waterTarget = settings.dailyWaterTarget || 8;

  const currentSleep = currentLog.sleepHours ?? currentLog.trackers?.sleep?.hours ?? 0;
  const currentWater = currentLog.waterGlasses ?? currentLog.trackers?.waterAndMovement?.waterGlasses ?? 0;

  const handleWaterIncrement = () => {
    sound.tick();
    const next = currentWater + 1;
    updateDailyLog({
      waterGlasses: next,
      trackers: {
        ...(currentLog.trackers || {}),
        waterAndMovement: {
          ...(currentLog.trackers?.waterAndMovement || {
            skipped: false,
            waterGlasses: 0,
            workoutDone: false,
            workoutType: '',
            durationMins: 0,
            walkStepsDone: false,
          }),
          waterGlasses: next,
          skipped: false,
        }
      } as any
    });
  };

  const handleWaterDecrement = () => {
    if (currentWater <= 0) return;
    sound.tick();
    const next = currentWater - 1;
    updateDailyLog({
      waterGlasses: next,
      trackers: {
        ...(currentLog.trackers || {}),
        waterAndMovement: {
          ...(currentLog.trackers?.waterAndMovement || {
            skipped: false,
            waterGlasses: 0,
            workoutDone: false,
            workoutType: '',
            durationMins: 0,
            walkStepsDone: false,
          }),
          waterGlasses: next,
          skipped: false,
        }
      } as any
    });
  };

  const handleSleepChange = (val: number) => {
    sound.tick();
    updateDailyLog({
      sleepHours: val,
      trackers: {
        ...(currentLog.trackers || {}),
        sleep: {
          bedtime: currentLog.trackers?.sleep?.bedtime || '23:00',
          waketime: currentLog.trackers?.sleep?.waketime || '07:00',
          hours: val,
          qualityRating: currentLog.trackers?.sleep?.qualityRating || 4,
          restedFeeling: currentLog.trackers?.sleep?.restedFeeling || true,
          skipped: false,
        }
      } as any
    });
  };

  const handleCleanEatingToggle = () => {
    sound.tick();
    const next = !currentLog.cleanEating;
    updateDailyLog({
      cleanEating: next,
      trackers: {
        ...(currentLog.trackers || {}),
        meals: {
          breakfast: { eaten: true, clean: next, notes: '' },
          lunch: { eaten: true, clean: next, notes: '' },
          dinner: { eaten: true, clean: next, notes: '' },
          snacks: { eaten: false, clean: true, notes: '' },
          skipped: false,
        }
      } as any
    });
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-16 animate-fadeIn">
      {/* 1. EDITORIAL HEADER */}
      <PageHero
        title="Health &amp; Circadian Vitality"
        subtitle="The mind cannot achieve sovereignty if the physical vessel is degraded, sleep-deprived, or inflamed. Track your biology with calm precision."
        kicker="MY OBSERVATORY • HEALTH &amp; ROUTINE"
        badgeLines={['PHYSICAL VESSEL.', 'DEEP REGENERATION.', 'METABOLIC CLARITY.']}
      />

      {/* 2. RESTRAINED METRICS ROW */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1: Sleep */}
        <div className="bg-cosmic-surface/75 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 shadow-journal flex flex-col justify-between">
          <div>
            <span className="text-xs font-sans uppercase tracking-[0.16em] text-accent font-semibold block">
              Sleep Duration
            </span>
            <p className="text-2xl font-heading font-bold tracking-tight text-paper-ink mt-1">
              {currentSleep}h <span className="text-xs font-sans text-paper-muted font-normal">/ {sleepTarget}h target</span>
            </p>
          </div>
          <div className="pt-3 border-t border-white/[0.06] mt-3">
            <span className={`text-[11px] font-sans ${currentSleep >= sleepTarget ? 'text-emerald-300 font-medium' : 'text-amber-300'}`}>
              {currentSleep >= sleepTarget ? 'Optimal recovery logged' : 'Sleep deficit'}
            </span>
          </div>
        </div>

        {/* Metric 2: Hydration */}
        <div className="bg-cosmic-surface/75 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 shadow-journal flex flex-col justify-between">
          <div>
            <span className="text-xs font-sans uppercase tracking-[0.16em] text-accent font-semibold block">
              Hydration
            </span>
            <p className="text-2xl font-heading font-bold tracking-tight text-paper-ink mt-1">
              {currentWater} <span className="text-xs font-sans text-paper-muted font-normal">/ {waterTarget} glasses</span>
            </p>
          </div>
          <div className="pt-3 border-t border-white/[0.06] mt-3">
            <span className={`text-[11px] font-sans ${currentWater >= waterTarget ? 'text-emerald-300 font-medium' : 'text-paper-muted'}`}>
              {currentWater >= waterTarget ? 'Hydration standard met' : `${waterTarget - currentWater} glasses to target`}
            </span>
          </div>
        </div>

        {/* Metric 3: Movement */}
        <div className="bg-cosmic-surface/75 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 shadow-journal flex flex-col justify-between">
          <div>
            <span className="text-xs font-sans uppercase tracking-[0.16em] text-accent font-semibold block">
              Physical Training
            </span>
            <p className="text-2xl font-heading font-bold tracking-tight text-paper-ink mt-1">
              {currentLog.workoutCompleted ? 'Done' : 'Pending'}
            </p>
          </div>
          <div className="pt-3 border-t border-white/[0.06] mt-3">
            <span className="text-[11px] font-sans text-paper-muted">
              {currentLog.workoutCompleted ? `${currentLog.workoutDuration || 45}m training block` : 'Session not yet logged'}
            </span>
          </div>
        </div>

        {/* Metric 4: Clean Nutrition */}
        <div className="bg-cosmic-surface/75 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 shadow-journal flex flex-col justify-between">
          <div>
            <span className="text-xs font-sans uppercase tracking-[0.16em] text-accent font-semibold block">
              Nutrition Standard
            </span>
            <p className="text-2xl font-heading font-bold tracking-tight text-paper-ink mt-1">
              {currentLog.cleanEating ? 'Clean' : 'Off-Target'}
            </p>
          </div>
          <div className="pt-3 border-t border-white/[0.06] mt-3">
            <span className="text-[11px] font-sans text-paper-muted">
              Unprocessed, disciplined fuel
            </span>
          </div>
        </div>
      </div>

      {/* 2.5 DAILY ROUTINE & TIMETABLE ARCHITECTURE (T.T) */}
      <div className="bg-cosmic-surface/75 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 shadow-journal space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/[0.06] gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-accent/20 border border-accent/35 flex items-center justify-center text-accent shadow-sm">
              <CalendarClock size={16} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-heading font-semibold text-paper-ink">
                  Daily Routine &amp; Timetable Architecture
                </h3>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-white/[0.06] text-accent font-mono font-medium">T.T</span>
              </div>
              <p className="text-xs font-sans text-paper-muted">
                Synchronize your cognitive and physical energy blocks with scheduled circadian windows.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-center">
            <Badge variant={completedRoutineSteps === totalRoutineSteps && totalRoutineSteps > 0 ? 'success' : 'starlight'}>
              {completedRoutineSteps}/{totalRoutineSteps} executed ({totalRoutineSteps > 0 ? Math.round((completedRoutineSteps / totalRoutineSteps) * 100) : 0}%)
            </Badge>
            <button
              onClick={() => {
                sound.tick();
                setDraftTimetable(settings.routineTimetable || DEFAULT_ROUTINE_TIMETABLE);
                setIsTimetableModalOpen(true);
              }}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] hover:border-accent/40 text-xs font-sans font-medium text-accent hover:text-white transition-all shadow-sm"
              title="Customize Timetable & Hours (T.T)"
            >
              <Sliders size={13} className="text-accent" />
              <span>Customize T.T</span>
            </button>
          </div>
        </div>

        {/* 3 Timetable Phase Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(['morning', 'afternoon', 'evening'] as RoutinePhase[]).map((phase) => {
            const config = routineTimetable[phase];
            const isActive = currentActivePhase === phase;
            const steps = dailyRoutines[phase] || [];
            const PhaseIcon = phase === 'morning' ? Sunrise : phase === 'afternoon' ? Sun : Moon;
            const phaseColor =
              phase === 'morning'
                ? 'text-amber-400'
                : phase === 'afternoon'
                ? 'text-blue-400'
                : 'text-purple-400';

            return (
              <div
                key={phase}
                className={`p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? 'bg-accent/[0.04] border-accent/40 shadow-sm'
                    : 'bg-white/[0.015] border-white/[0.06] hover:border-white/[0.1]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.05]">
                    <div className="flex items-center gap-1.5 truncate">
                      <PhaseIcon size={14} className={`${phaseColor} shrink-0`} />
                      <span className="text-xs font-sans font-semibold text-paper-ink truncate">
                        {config.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.03] text-paper-muted border border-white/[0.06] shrink-0">
                      {config.timeRange}
                    </span>
                  </div>

                  {/* Steps List */}
                  <div className="space-y-1.5 pt-2.5">
                    {steps.map((step) =>
                      editingStepId === step.id ? (
                        <div key={step.id} className="p-2 rounded-xl bg-white/[0.05] border border-accent/40 space-y-1.5">
                          <input
                            type="text"
                            value={editStepText}
                            onChange={(e) => setEditStepText(e.target.value)}
                            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-2 py-1 text-xs text-paper-ink font-sans focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
                            placeholder="Step name..."
                            autoFocus
                          />
                          <div className="flex items-center gap-1.5">
                            <input
                              type="text"
                              value={editStepTimeRange}
                              onChange={(e) => setEditStepTimeRange(e.target.value)}
                              className="flex-1 bg-white/[0.03] border border-white/[0.08] rounded-lg px-2 py-1 text-[11px] font-mono text-paper-ink focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
                              placeholder="e.g. 07:00 – 08:00"
                            />
                            <button
                              type="button"
                              onClick={() => handleSaveEditStep(phase, step.id)}
                              className="px-2.5 py-1 bg-accent text-white rounded-lg text-[11px] font-sans font-medium"
                            >
                              Save
                            </button>
                            <button
                              type="button"
                              onClick={() => setEditingStepId(null)}
                              className="p-1 text-paper-muted hover:text-white"
                            >
                              <X size={12} />
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div
                          key={step.id}
                          className={`p-2 rounded-xl border text-xs flex items-center justify-between transition-all select-none group ${
                            step.completed
                              ? 'bg-emerald-500/[0.06] border-emerald-500/25 text-paper-muted'
                              : 'bg-white/[0.02] hover:bg-white/[0.05] border-white/[0.05] text-paper-ink'
                          }`}
                        >
                          <div
                            className="flex items-center gap-2 truncate flex-1 cursor-pointer min-w-0"
                            onClick={() => toggleRoutineStep(phase, step.id, selectedDate)}
                          >
                            <div className={`w-3.5 h-3.5 rounded flex items-center justify-center shrink-0 border transition-all ${
                              step.completed ? 'bg-emerald-500 border-emerald-400 text-white' : 'border-white/[0.25]'
                            }`}>
                              {step.completed && <Check size={9} strokeWidth={3} />}
                            </div>
                            <span className={`truncate text-xs font-sans ${step.completed ? 'line-through text-paper-muted' : ''}`}>
                              {step.text}
                            </span>
                            {step.timeRange && (
                              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/[0.05] text-accent border border-white/[0.06] shrink-0">
                                {step.timeRange}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity ml-1.5 shrink-0">
                            <button
                              type="button"
                              onClick={() => handleStartEditStep(step)}
                              className="p-1 text-paper-muted hover:text-white transition-colors"
                              title="Edit step name & hours"
                            >
                              <Edit3 size={11} />
                            </button>
                            <button
                              type="button"
                              onClick={() => deleteRoutineStep(phase, step.id, selectedDate)}
                              className="p-1 text-paper-muted hover:text-rose-400 transition-colors"
                              title="Delete step"
                            >
                              <Trash2 size={11} />
                            </button>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Add Step row */}
                <div className="pt-2">
                  {activeAddPhase === phase ? (
                    <div className="space-y-1.5 p-2 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                      <div className="flex items-center gap-1.5">
                        <input
                          type="text"
                          value={newStepText}
                          onChange={(e) => setNewStepText(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && handleAddRoutineStep(phase)}
                          placeholder="Step name..."
                          className="flex-1 bg-white/[0.03] border border-white/[0.08] rounded-lg px-2 py-1 text-xs text-paper-ink font-sans focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
                          autoFocus
                        />
                        <input
                          type="text"
                          value={newStepTimeRange}
                          onChange={(e) => setNewStepTimeRange(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && handleAddRoutineStep(phase)}
                          placeholder="Hours (optional)"
                          className="w-24 bg-white/[0.03] border border-white/[0.08] rounded-lg px-2 py-1 text-[11px] font-mono text-paper-ink focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
                        />
                      </div>
                      <div className="flex justify-end gap-1.5">
                        <button
                          type="button"
                          onClick={() => {
                            setActiveAddPhase(null);
                            setNewStepText('');
                            setNewStepTimeRange('');
                          }}
                          className="px-2 py-0.5 rounded text-[11px] text-paper-muted hover:text-white"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          onClick={() => handleAddRoutineStep(phase)}
                          className="px-2.5 py-0.5 rounded-lg bg-accent text-white text-[11px] font-sans font-medium"
                        >
                          Add Step
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        setActiveAddPhase(phase);
                        setNewStepText('');
                        setNewStepTimeRange('');
                      }}
                      className="inline-flex items-center gap-1 text-[11px] text-paper-muted hover:text-paper-ink transition-colors"
                    >
                      <Plus size={11} />
                      <span>Add routine step</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Adherence Progress Bar */}
        <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-xs font-sans text-paper-muted">
          <span>Overall Timetable Adherence:</span>
          <div className="flex items-center gap-3 flex-1 max-w-xs ml-4">
            <div className="w-full h-2 rounded-full bg-white/[0.04] overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-accent to-emerald-400 transition-all duration-300"
                style={{
                  width: totalRoutineSteps > 0 ? `${(completedRoutineSteps / totalRoutineSteps) * 100}%` : '0%',
                }}
              />
            </div>
            <span className="font-mono text-accent font-medium shrink-0">
              {totalRoutineSteps > 0 ? `${Math.round((completedRoutineSteps / totalRoutineSteps) * 100)}%` : '0%'}
            </span>
          </div>
        </div>
      </div>

      {/* 3. SLEEP & HYDRATION LOGGERS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sleep Slider */}
        <div className="bg-cosmic-surface/75 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 shadow-journal space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <Moon size={16} className="text-accent" />
              <h3 className="text-base font-heading font-semibold text-paper-ink">
                Sleep Duration &amp; Rest
              </h3>
            </div>
            <Badge variant="starlight">{currentSleep} Hours</Badge>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between text-xs font-sans text-paper-muted">
              <span>0h</span>
              <span className="text-accent">Target: {sleepTarget}h</span>
              <span>12h</span>
            </div>
            <input
              type="range"
              min="0"
              max="12"
              step="0.5"
              value={currentSleep}
              onChange={(e) => handleSleepChange(Number(e.target.value))}
              className="w-full accent-accent cursor-pointer"
            />
          </div>

          <div className="pt-2 text-xs font-sans text-paper-muted leading-relaxed">
            &ldquo;Sleep is the premier cognitive multiplier. Protect the 8-hour window as an inviolable biological duty.&rdquo;
          </div>
        </div>

        {/* Water Intake Counter */}
        <div className="bg-cosmic-surface/75 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 shadow-journal space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <Droplets size={16} className="text-accent" />
              <h3 className="text-base font-heading font-semibold text-paper-ink">
                Hydration Counter
              </h3>
            </div>
            <Badge variant="starlight">{currentWater} / {waterTarget} Glasses</Badge>
          </div>

          <div className="flex items-center justify-between py-2">
            <button
              onClick={handleWaterDecrement}
              className="w-10 h-10 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] flex items-center justify-center text-paper-ink transition-colors"
              title="Remove glass"
            >
              <Minus size={16} />
            </button>

            <div className="text-center">
              <span className="text-3xl font-heading font-bold tracking-tight text-paper-ink block">
                {currentWater}
              </span>
              <span className="text-[11px] font-sans text-paper-muted">
                glasses (250ml each)
              </span>
            </div>

            <button
              onClick={handleWaterIncrement}
              className="w-10 h-10 rounded-xl bg-accent text-white hover:bg-accent-hover shadow-sm flex items-center justify-center transition-colors"
              title="Add glass"
            >
              <Plus size={16} />
            </button>
          </div>

          {/* Quick Clean Nutrition Toggle */}
          <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-sans">
            <span className="text-paper-secondary">Clean Nutrition Standard:</span>
            <button
              onClick={handleCleanEatingToggle}
              className={`px-3 py-1.5 rounded-xl transition-colors ${
                currentLog.cleanEating
                  ? 'bg-emerald-500 text-white font-medium shadow-sm'
                  : 'bg-white/[0.04] text-paper-secondary border border-white/[0.08]'
              }`}
            >
              {currentLog.cleanEating ? '✓ Upheld Clean Standard' : 'Mark Clean Today'}
            </button>
          </div>
        </div>
      </div>

      {/* 4. PHYSICAL TRAINING / WORKOUT LOG */}
      <div className="bg-cosmic-surface/75 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 shadow-journal space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <Dumbbell size={16} className="text-accent" />
            <h3 className="text-base font-heading font-semibold text-paper-ink">
              Physical Training Log
            </h3>
          </div>
          {currentLog.workoutCompleted && <Badge variant="success">Completed</Badge>}
        </div>

        <form onSubmit={handleSaveWorkout} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-sans uppercase tracking-wider text-accent mb-1">
                Training Type / Modality
              </label>
              <input
                type="text"
                value={workoutType}
                onChange={(e) => setWorkoutType(e.target.value)}
                placeholder="e.g. Strength Training, 5km Run, Zone 2 Cardio"
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-2 text-xs font-sans text-paper-ink focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
              />
            </div>

            <div>
              <label className="block text-xs font-sans uppercase tracking-wider text-accent mb-1">
                Duration (minutes)
              </label>
              <input
                type="number"
                min="5"
                max="240"
                value={workoutDuration}
                onChange={(e) => setWorkoutDuration(Number(e.target.value))}
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-2 text-xs font-sans text-paper-ink focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent font-mono"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-sans uppercase tracking-wider text-accent mb-1">
              Workout Notes &amp; Biometric Observations
            </label>
            <textarea
              rows={2}
              value={workoutNotes}
              onChange={(e) => setWorkoutNotes(e.target.value)}
              placeholder="Load, sets, energy levels, recovery notes..."
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl p-2.5 text-xs font-sans text-paper-ink focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
            />
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
            {savedSuccess ? (
              <span className="text-xs font-sans text-emerald-300 flex items-center gap-1">
                <Check size={13} />
                Workout recorded to journal!
              </span>
            ) : <div />}

            <Button variant="starlight" size="sm" type="submit" className="text-xs font-sans">
              Record Workout
            </Button>
          </div>
        </form>
      </div>

      {/* MODAL: CUSTOMIZE TIMETABLE (T.T) */}
      <Modal
        isOpen={isTimetableModalOpen}
        onClose={() => setIsTimetableModalOpen(false)}
        title="Customize Timetable & Hours (T.T)"
        subtitle="Calibrate phase titles and scheduled time windows to match your actual routine."
      >
        <form onSubmit={handleSaveTimetable} className="space-y-4 text-xs font-sans">
          {/* Morning Configuration */}
          <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs pb-1 border-b border-white/[0.04]">
              <Sunrise size={14} />
              <span>Morning Phase</span>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <div>
                <label className="block text-[11px] text-paper-muted mb-1">Phase Title</label>
                <input
                  type="text"
                  value={draftTimetable.morning.title}
                  onChange={(e) =>
                    setDraftTimetable((prev) => ({
                      ...prev,
                      morning: { ...prev.morning, title: e.target.value },
                    }))
                  }
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-2.5 py-1.5 text-xs text-paper-ink focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
                  placeholder="e.g. Morning Protocol"
                  required
                />
              </div>
              <div>
                <label className="block text-[11px] text-paper-muted mb-1">Time Range</label>
                <input
                  type="text"
                  value={draftTimetable.morning.timeRange}
                  onChange={(e) =>
                    setDraftTimetable((prev) => ({
                      ...prev,
                      morning: { ...prev.morning, timeRange: e.target.value },
                    }))
                  }
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-2.5 py-1.5 text-xs text-paper-ink focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent font-mono"
                  placeholder="e.g. 06:00 – 09:00"
                  required
                />
              </div>
            </div>
          </div>

          {/* Afternoon Configuration */}
          <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
            <div className="flex items-center gap-2 text-blue-400 font-semibold text-xs pb-1 border-b border-white/[0.04]">
              <Sun size={14} />
              <span>Afternoon Phase</span>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <div>
                <label className="block text-[11px] text-paper-muted mb-1">Phase Title</label>
                <input
                  type="text"
                  value={draftTimetable.afternoon.title}
                  onChange={(e) =>
                    setDraftTimetable((prev) => ({
                      ...prev,
                      afternoon: { ...prev.afternoon, title: e.target.value },
                    }))
                  }
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-2.5 py-1.5 text-xs text-paper-ink focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
                  placeholder="e.g. Afternoon Focus"
                  required
                />
              </div>
              <div>
                <label className="block text-[11px] text-paper-muted mb-1">Time Range</label>
                <input
                  type="text"
                  value={draftTimetable.afternoon.timeRange}
                  onChange={(e) =>
                    setDraftTimetable((prev) => ({
                      ...prev,
                      afternoon: { ...prev.afternoon, timeRange: e.target.value },
                    }))
                  }
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-2.5 py-1.5 text-xs text-paper-ink focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent font-mono"
                  placeholder="e.g. 09:00 – 17:00"
                  required
                />
              </div>
            </div>
          </div>

          {/* Evening Configuration */}
          <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
            <div className="flex items-center gap-2 text-purple-400 font-semibold text-xs pb-1 border-b border-white/[0.04]">
              <Moon size={14} />
              <span>Evening Phase</span>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <div>
                <label className="block text-[11px] text-paper-muted mb-1">Phase Title</label>
                <input
                  type="text"
                  value={draftTimetable.evening.title}
                  onChange={(e) =>
                    setDraftTimetable((prev) => ({
                      ...prev,
                      evening: { ...prev.evening, title: e.target.value },
                    }))
                  }
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-2.5 py-1.5 text-xs text-paper-ink focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
                  placeholder="e.g. Evening Wind-Down"
                  required
                />
              </div>
              <div>
                <label className="block text-[11px] text-paper-muted mb-1">Time Range</label>
                <input
                  type="text"
                  value={draftTimetable.evening.timeRange}
                  onChange={(e) =>
                    setDraftTimetable((prev) => ({
                      ...prev,
                      evening: { ...prev.evening, timeRange: e.target.value },
                    }))
                  }
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-2.5 py-1.5 text-xs text-paper-ink focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent font-mono"
                  placeholder="e.g. 17:00 – 22:30"
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
            <button
              type="button"
              onClick={handleResetTimetableToDefault}
              className="text-[11px] text-paper-muted hover:text-white flex items-center gap-1 transition-colors"
            >
              <RotateCw size={11} />
              <span>Reset Defaults</span>
            </button>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" type="button" onClick={() => setIsTimetableModalOpen(false)}>
                Cancel
              </Button>
              <Button variant="starlight" size="sm" type="submit">
                Save Timetable
              </Button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};
