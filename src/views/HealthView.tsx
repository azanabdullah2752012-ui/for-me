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
} from 'lucide-react';
import { useData, getDisplayDate } from '../context/DataContext';
import { PageHero } from '../components/common/PageHero';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { sound } from '../audio/sound';

export const HealthView: React.FC = () => {
  const {
    selectedDate,
    currentLog,
    updateDailyLog,
    settings,
  } = useData();

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
            <span className="text-xs font-sans uppercase tracking-[0.16em] text-starlight-lavender font-semibold block">
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
            <span className="text-xs font-sans uppercase tracking-[0.16em] text-starlight-lavender font-semibold block">
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
            <span className="text-xs font-sans uppercase tracking-[0.16em] text-starlight-lavender font-semibold block">
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
            <span className="text-xs font-sans uppercase tracking-[0.16em] text-starlight-lavender font-semibold block">
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

      {/* 3. SLEEP & HYDRATION LOGGERS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sleep Slider */}
        <div className="bg-cosmic-surface/75 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 shadow-journal space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <Moon size={16} className="text-starlight-lavender" />
              <h3 className="text-base font-heading font-semibold text-paper-ink">
                Sleep Duration &amp; Rest
              </h3>
            </div>
            <Badge variant="starlight">{currentSleep} Hours</Badge>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between text-xs font-sans text-paper-muted">
              <span>0h</span>
              <span className="text-starlight-lavender">Target: {sleepTarget}h</span>
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
              <Droplets size={16} className="text-starlight-lavender" />
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
              className="w-10 h-10 rounded-xl bg-accent text-white hover:bg-accent-hover shadow-cosmic-glow flex items-center justify-center transition-colors"
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
            <Dumbbell size={16} className="text-starlight-lavender" />
            <h3 className="text-base font-heading font-semibold text-paper-ink">
              Physical Training Log
            </h3>
          </div>
          {currentLog.workoutCompleted && <Badge variant="success">Completed</Badge>}
        </div>

        <form onSubmit={handleSaveWorkout} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-sans uppercase tracking-wider text-starlight-lavender mb-1">
                Training Type / Modality
              </label>
              <input
                type="text"
                value={workoutType}
                onChange={(e) => setWorkoutType(e.target.value)}
                placeholder="e.g. Strength Training, 5km Run, Zone 2 Cardio"
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-2 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent"
              />
            </div>

            <div>
              <label className="block text-xs font-sans uppercase tracking-wider text-starlight-lavender mb-1">
                Duration (minutes)
              </label>
              <input
                type="number"
                min="5"
                max="240"
                value={workoutDuration}
                onChange={(e) => setWorkoutDuration(Number(e.target.value))}
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-2 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent font-mono"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-sans uppercase tracking-wider text-starlight-lavender mb-1">
              Workout Notes &amp; Biometric Observations
            </label>
            <textarea
              rows={2}
              value={workoutNotes}
              onChange={(e) => setWorkoutNotes(e.target.value)}
              placeholder="Load, sets, energy levels, recovery notes..."
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl p-2.5 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent"
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
    </div>
  );
};
