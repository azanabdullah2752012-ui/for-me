import React from 'react';
import {
  BookOpen,
  Moon,
  Tv,
  CheckSquare,
  Sparkles,
  Utensils,
  Activity,
  HeartCrack,
  Smile,
  Shield,
  Clock,
  EyeOff,
  Eye,
  CheckCircle2,
  Circle,
  Plus,
  Minus,
} from 'lucide-react';
import { DetailedTrackers } from '../../types';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { sound } from '../../audio/sound';

interface TrackersGridProps {
  trackers: DetailedTrackers;
  onUpdateTrackers: (updater: (prev: DetailedTrackers) => DetailedTrackers) => void;
}

export const TrackersGrid: React.FC<TrackersGridProps> = ({
  trackers,
  onUpdateTrackers,
}) => {
  // Helper to toggle a tracker's skip status
  const toggleSkip = (key: keyof DetailedTrackers) => {
    sound.tick();
    onUpdateTrackers((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        skipped: !prev[key].skipped,
      },
    }));
  };

  return (
    <div className="space-y-6">
      {/* Tracker Grid Header */}
      <div className="flex items-center justify-between pb-2 border-b border-surface-border">
        <div>
          <h3 className="text-base font-bold font-mono uppercase tracking-wider text-white">
            Daily Execution & Biometric Trackers (11 Domains)
          </h3>
          <p className="text-xs text-neutral-400 mt-0.5">
            Track daily behavior with precision. Use the "Skip" button on any domain to exclude it from completion scoring when not applicable.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* ======================================================== */}
        {/* 1. STUDY AND ACADEMIC DISCIPLINE */}
        {/* ======================================================== */}
        <Card className={`p-5 space-y-4 transition-opacity ${trackers.study.skipped ? 'opacity-50' : 'opacity-100'}`}>
          <div className="flex items-center justify-between pb-2 border-b border-surface-border">
            <div className="flex items-center gap-2">
              <BookOpen size={16} className="text-accent" />
              <h4 className="text-xs font-mono font-bold uppercase text-white tracking-wider">
                1. Study & Academic Discipline
              </h4>
            </div>
            <button
              type="button"
              onClick={() => toggleSkip('study')}
              className={`text-[10px] font-mono px-2 py-0.5 rounded border transition-colors ${
                trackers.study.skipped
                  ? 'bg-neutral-800 text-neutral-400 border-neutral-700'
                  : 'bg-dark-850 hover:bg-dark-800 text-neutral-300 border-surface-border'
              }`}
            >
              {trackers.study.skipped ? 'Skipped (Excluded)' : 'Active (Tracked)'}
            </button>
          </div>

          {!trackers.study.skipped ? (
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono text-neutral-400 mb-1">
                    Hours Studied
                  </label>
                  <input
                    type="number"
                    step="0.5"
                    min="0"
                    max="16"
                    value={trackers.study.hoursStudied}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      onUpdateTrackers((prev) => ({
                        ...prev,
                        study: { ...prev.study, hoursStudied: val },
                      }));
                    }}
                    className="w-full bg-dark-850 border border-surface-border rounded px-3 py-1.5 text-xs text-white font-mono focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-neutral-400 mb-1">
                    Focus Intensity (1-5)
                  </label>
                  <select
                    value={trackers.study.focusRating}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      onUpdateTrackers((prev) => ({
                        ...prev,
                        study: { ...prev.study, focusRating: val },
                      }));
                    }}
                    className="w-full bg-dark-850 border border-surface-border rounded px-2 py-1.5 text-xs text-white font-mono focus:border-accent"
                  >
                    {[1, 2, 3, 4, 5].map((lvl) => (
                      <option key={lvl} value={lvl}>{lvl} - {lvl === 5 ? 'Flow state' : lvl >= 3 ? 'Disciplined' : 'Fragmented'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-xs text-neutral-300 font-medium">Completed Planned Study Target</span>
                <button
                  type="button"
                  onClick={() => {
                    const next = !trackers.study.completedPlanned;
                    if (next) sound.complete();
                    else sound.tick();
                    onUpdateTrackers((prev) => ({
                      ...prev,
                      study: { ...prev.study, completedPlanned: next },
                    }));
                  }}
                  className={`px-2.5 py-1 rounded text-xs font-mono font-medium transition-colors ${
                    trackers.study.completedPlanned
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : 'bg-dark-850 text-neutral-500 border border-surface-border'
                  }`}
                >
                  {trackers.study.completedPlanned ? 'DONE' : 'PENDING'}
                </button>
              </div>

              <input
                type="text"
                placeholder="Topic or synthesis notes..."
                value={trackers.study.notes}
                onChange={(e) => {
                  const val = e.target.value;
                  onUpdateTrackers((prev) => ({
                    ...prev,
                    study: { ...prev.study, notes: val },
                  }));
                }}
                className="w-full bg-dark-850 border border-surface-border rounded px-3 py-1.5 text-xs text-neutral-200"
              />
            </div>
          ) : (
            <p className="text-xs font-mono text-neutral-500 italic py-2">Domain is set to optional/skipped for today.</p>
          )}
        </Card>

        {/* ======================================================== */}
        {/* 2. SLEEP SCHEDULE AND SLEEP QUALITY */}
        {/* ======================================================== */}
        <Card className={`p-5 space-y-4 transition-opacity ${trackers.sleep.skipped ? 'opacity-50' : 'opacity-100'}`}>
          <div className="flex items-center justify-between pb-2 border-b border-surface-border">
            <div className="flex items-center gap-2">
              <Moon size={16} className="text-indigo-400" />
              <h4 className="text-xs font-mono font-bold uppercase text-white tracking-wider">
                2. Sleep Schedule & Rest Quality
              </h4>
            </div>
            <button
              type="button"
              onClick={() => toggleSkip('sleep')}
              className={`text-[10px] font-mono px-2 py-0.5 rounded border transition-colors ${
                trackers.sleep.skipped
                  ? 'bg-neutral-800 text-neutral-400 border-neutral-700'
                  : 'bg-dark-850 hover:bg-dark-800 text-neutral-300 border-surface-border'
              }`}
            >
              {trackers.sleep.skipped ? 'Skipped (Excluded)' : 'Active (Tracked)'}
            </button>
          </div>

          {!trackers.sleep.skipped ? (
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-[11px] font-mono text-neutral-400 mb-1">Bedtime</label>
                  <input
                    type="text"
                    placeholder="23:00"
                    value={trackers.sleep.bedtime}
                    onChange={(e) => {
                      const val = e.target.value;
                      onUpdateTrackers((prev) => ({
                        ...prev,
                        sleep: { ...prev.sleep, bedtime: val },
                      }));
                    }}
                    className="w-full bg-dark-850 border border-surface-border rounded px-2.5 py-1.5 text-xs text-white font-mono"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-neutral-400 mb-1">Wake Time</label>
                  <input
                    type="text"
                    placeholder="06:30"
                    value={trackers.sleep.waketime}
                    onChange={(e) => {
                      const val = e.target.value;
                      onUpdateTrackers((prev) => ({
                        ...prev,
                        sleep: { ...prev.sleep, waketime: val },
                      }));
                    }}
                    className="w-full bg-dark-850 border border-surface-border rounded px-2.5 py-1.5 text-xs text-white font-mono"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-neutral-400 mb-1">Total Hours</label>
                  <input
                    type="number"
                    step="0.5"
                    min="3"
                    max="14"
                    value={trackers.sleep.hours}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      onUpdateTrackers((prev) => ({
                        ...prev,
                        sleep: { ...prev.sleep, hours: val },
                      }));
                    }}
                    className="w-full bg-dark-850 border border-surface-border rounded px-2.5 py-1.5 text-xs text-white font-mono"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-xs text-neutral-300 font-medium">Felt Truly Rested Upon Waking</span>
                <button
                  type="button"
                  onClick={() => {
                    const next = !trackers.sleep.restedFeeling;
                    if (next) sound.complete();
                    else sound.tick();
                    onUpdateTrackers((prev) => ({
                      ...prev,
                      sleep: { ...prev.sleep, restedFeeling: next },
                    }));
                  }}
                  className={`px-2.5 py-1 rounded text-xs font-mono font-medium transition-colors ${
                    trackers.sleep.restedFeeling
                      ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40'
                      : 'bg-dark-850 text-neutral-500 border border-surface-border'
                  }`}
                >
                  {trackers.sleep.restedFeeling ? 'RESTED' : 'TIRED'}
                </button>
              </div>
            </div>
          ) : (
            <p className="text-xs font-mono text-neutral-500 italic py-2">Domain is set to optional/skipped for today.</p>
          )}
        </Card>

        {/* ======================================================== */}
        {/* 3. SCREEN TIME */}
        {/* ======================================================== */}
        <Card className={`p-5 space-y-4 transition-opacity ${trackers.screenTime.skipped ? 'opacity-50' : 'opacity-100'}`}>
          <div className="flex items-center justify-between pb-2 border-b border-surface-border">
            <div className="flex items-center gap-2">
              <Tv size={16} className="text-sky-400" />
              <h4 className="text-xs font-mono font-bold uppercase text-white tracking-wider">
                3. Screen Time & Digital Cutoff
              </h4>
            </div>
            <button
              type="button"
              onClick={() => toggleSkip('screenTime')}
              className={`text-[10px] font-mono px-2 py-0.5 rounded border transition-colors ${
                trackers.screenTime.skipped
                  ? 'bg-neutral-800 text-neutral-400 border-neutral-700'
                  : 'bg-dark-850 hover:bg-dark-800 text-neutral-300 border-surface-border'
              }`}
            >
              {trackers.screenTime.skipped ? 'Skipped (Excluded)' : 'Active (Tracked)'}
            </button>
          </div>

          {!trackers.screenTime.skipped ? (
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono text-neutral-400 mb-1">Productive Work Hours</label>
                  <input
                    type="number"
                    step="0.5"
                    min="0"
                    max="18"
                    value={trackers.screenTime.productiveHours}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      onUpdateTrackers((prev) => ({
                        ...prev,
                        screenTime: { ...prev.screenTime, productiveHours: val },
                      }));
                    }}
                    className="w-full bg-dark-850 border border-surface-border rounded px-3 py-1.5 text-xs text-white font-mono"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-neutral-400 mb-1">Recreational Hours</label>
                  <input
                    type="number"
                    step="0.5"
                    min="0"
                    max="18"
                    value={trackers.screenTime.recreationalHours}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      onUpdateTrackers((prev) => ({
                        ...prev,
                        screenTime: { ...prev.screenTime, recreationalHours: val },
                      }));
                    }}
                    className="w-full bg-dark-850 border border-surface-border rounded px-3 py-1.5 text-xs text-white font-mono"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <div>
                  <span className="text-xs text-neutral-300 font-medium block">Bedtime Screen Cutoff</span>
                  <span className="text-[10px] text-neutral-500">Shut down devices 45m before sleeping</span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const next = !trackers.screenTime.cutoffHonored;
                    if (next) sound.complete();
                    else sound.tick();
                    onUpdateTrackers((prev) => ({
                      ...prev,
                      screenTime: { ...prev.screenTime, cutoffHonored: next },
                    }));
                  }}
                  className={`px-2.5 py-1 rounded text-xs font-mono font-medium transition-colors ${
                    trackers.screenTime.cutoffHonored
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : 'bg-dark-850 text-neutral-500 border border-surface-border'
                  }`}
                >
                  {trackers.screenTime.cutoffHonored ? 'HONORED' : 'BREACHED'}
                </button>
              </div>
            </div>
          ) : (
            <p className="text-xs font-mono text-neutral-500 italic py-2">Domain is set to optional/skipped for today.</p>
          )}
        </Card>

        {/* ======================================================== */}
        {/* 4. DAILY ROUTINE AND TIME MANAGEMENT */}
        {/* ======================================================== */}
        <Card className={`p-5 space-y-4 transition-opacity ${trackers.routine.skipped ? 'opacity-50' : 'opacity-100'}`}>
          <div className="flex items-center justify-between pb-2 border-b border-surface-border">
            <div className="flex items-center gap-2">
              <CheckSquare size={16} className="text-amber-400" />
              <h4 className="text-xs font-mono font-bold uppercase text-white tracking-wider">
                4. Routine & Time Management
              </h4>
            </div>
            <button
              type="button"
              onClick={() => toggleSkip('routine')}
              className={`text-[10px] font-mono px-2 py-0.5 rounded border transition-colors ${
                trackers.routine.skipped
                  ? 'bg-neutral-800 text-neutral-400 border-neutral-700'
                  : 'bg-dark-850 hover:bg-dark-800 text-neutral-300 border-surface-border'
              }`}
            >
              {trackers.routine.skipped ? 'Skipped (Excluded)' : 'Active (Tracked)'}
            </button>
          </div>

          {!trackers.routine.skipped ? (
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const next = !trackers.routine.morningRoutineDone;
                    if (next) sound.complete();
                    else sound.tick();
                    onUpdateTrackers((prev) => ({
                      ...prev,
                      routine: { ...prev.routine, morningRoutineDone: next },
                    }));
                  }}
                  className={`p-2.5 rounded-lg border flex items-center gap-2 text-xs transition-colors ${
                    trackers.routine.morningRoutineDone
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                      : 'bg-dark-850 text-neutral-400 border-surface-border'
                  }`}
                >
                  <CheckCircle2 size={14} className={trackers.routine.morningRoutineDone ? 'text-amber-400' : 'text-neutral-500'} />
                  <span>Morning Routine</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const next = !trackers.routine.eveningRoutineDone;
                    if (next) sound.complete();
                    else sound.tick();
                    onUpdateTrackers((prev) => ({
                      ...prev,
                      routine: { ...prev.routine, eveningRoutineDone: next },
                    }));
                  }}
                  className={`p-2.5 rounded-lg border flex items-center gap-2 text-xs transition-colors ${
                    trackers.routine.eveningRoutineDone
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                      : 'bg-dark-850 text-neutral-400 border-surface-border'
                  }`}
                >
                  <CheckCircle2 size={14} className={trackers.routine.eveningRoutineDone ? 'text-amber-400' : 'text-neutral-500'} />
                  <span>Evening Routine</span>
                </button>
              </div>

              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-1">
                  <span>Punctuality & Time-Block Adherence</span>
                  <span className="text-white font-bold">{trackers.routine.punctualityScore}/5</span>
                </div>
                <div className="grid grid-cols-5 gap-1.5">
                  {[1, 2, 3, 4, 5].map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => {
                        sound.tick();
                        onUpdateTrackers((prev) => ({
                          ...prev,
                          routine: { ...prev.routine, punctualityScore: lvl },
                        }));
                      }}
                      className={`py-1 text-xs font-mono rounded transition-colors ${
                        trackers.routine.punctualityScore === lvl
                          ? 'bg-amber-500 text-dark-950 font-bold'
                          : 'bg-dark-850 text-neutral-400 hover:bg-dark-800'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <p className="text-xs font-mono text-neutral-500 italic py-2">Domain is set to optional/skipped for today.</p>
          )}
        </Card>

        {/* ======================================================== */}
        {/* 5. PERSONAL HYGIENE AND ROOM CLEANLINESS */}
        {/* ======================================================== */}
        <Card className={`p-5 space-y-4 transition-opacity ${trackers.cleanliness.skipped ? 'opacity-50' : 'opacity-100'}`}>
          <div className="flex items-center justify-between pb-2 border-b border-surface-border">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-emerald-400" />
              <h4 className="text-xs font-mono font-bold uppercase text-white tracking-wider">
                5. Hygiene & Orderly Environment
              </h4>
            </div>
            <button
              type="button"
              onClick={() => toggleSkip('cleanliness')}
              className={`text-[10px] font-mono px-2 py-0.5 rounded border transition-colors ${
                trackers.cleanliness.skipped
                  ? 'bg-neutral-800 text-neutral-400 border-neutral-700'
                  : 'bg-dark-850 hover:bg-dark-800 text-neutral-300 border-surface-border'
              }`}
            >
              {trackers.cleanliness.skipped ? 'Skipped (Excluded)' : 'Active (Tracked)'}
            </button>
          </div>

          {!trackers.cleanliness.skipped ? (
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { key: 'groomingDone', label: 'Shower & Grooming' },
                { key: 'teethTwice', label: 'Teeth Brushed Twice' },
                { key: 'roomDeskClear', label: 'Room & Desk Clear' },
                { key: 'bedMade', label: 'Bed Made Upon Waking' },
              ].map((item) => {
                const isChecked = trackers.cleanliness[item.key as keyof typeof trackers.cleanliness] as boolean;
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => {
                      sound.tick();
                      onUpdateTrackers((prev) => ({
                        ...prev,
                        cleanliness: {
                          ...prev.cleanliness,
                          [item.key]: !isChecked,
                        },
                      }));
                    }}
                    className={`p-2.5 rounded-lg border flex items-center gap-2 text-xs transition-colors ${
                      isChecked
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-medium'
                        : 'bg-dark-850 text-neutral-400 border-surface-border hover:bg-dark-800'
                    }`}
                  >
                    <CheckCircle2 size={14} className={isChecked ? 'text-emerald-400' : 'text-neutral-500'} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          ) : (
            <p className="text-xs font-mono text-neutral-500 italic py-2">Domain is set to optional/skipped for today.</p>
          )}
        </Card>

        {/* ======================================================== */}
        {/* 6. MEALS: BREAKFAST, LUNCH, DINNER, AND SNACKS */}
        {/* ======================================================== */}
        <Card className={`p-5 space-y-4 transition-opacity ${trackers.meals.skipped ? 'opacity-50' : 'opacity-100'}`}>
          <div className="flex items-center justify-between pb-2 border-b border-surface-border">
            <div className="flex items-center gap-2">
              <Utensils size={16} className="text-rose-400" />
              <h4 className="text-xs font-mono font-bold uppercase text-white tracking-wider">
                6. Meals & Clean Nutrition
              </h4>
            </div>
            <button
              type="button"
              onClick={() => toggleSkip('meals')}
              className={`text-[10px] font-mono px-2 py-0.5 rounded border transition-colors ${
                trackers.meals.skipped
                  ? 'bg-neutral-800 text-neutral-400 border-neutral-700'
                  : 'bg-dark-850 hover:bg-dark-800 text-neutral-300 border-surface-border'
              }`}
            >
              {trackers.meals.skipped ? 'Skipped (Excluded)' : 'Active (Tracked)'}
            </button>
          </div>

          {!trackers.meals.skipped ? (
            <div className="space-y-2">
              {(['breakfast', 'lunch', 'dinner', 'snacks'] as const).map((mealKey) => {
                const meal = trackers.meals[mealKey];
                return (
                  <div key={mealKey} className="p-2.5 rounded-lg bg-dark-850 border border-surface-border flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2 capitalize font-mono text-neutral-300">
                      <button
                        type="button"
                        onClick={() => {
                          sound.tick();
                          onUpdateTrackers((prev) => ({
                            ...prev,
                            meals: {
                              ...prev.meals,
                              [mealKey]: { ...meal, eaten: !meal.eaten },
                            },
                          }));
                        }}
                        className={`w-4 h-4 rounded border flex items-center justify-center ${
                          meal.eaten ? 'bg-accent border-accent text-dark-950 font-bold' : 'border-neutral-600 bg-dark-800'
                        }`}
                      >
                        {meal.eaten && <CheckCircle2 size={12} />}
                      </button>
                      <span>{mealKey}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="What was eaten..."
                        value={meal.notes}
                        onChange={(e) => {
                          const val = e.target.value;
                          onUpdateTrackers((prev) => ({
                            ...prev,
                            meals: {
                              ...prev.meals,
                              [mealKey]: { ...meal, notes: val },
                            },
                          }));
                        }}
                        className="bg-dark-900 border border-surface-border rounded px-2 py-1 text-[11px] text-white w-36 sm:w-48"
                      />

                      <button
                        type="button"
                        onClick={() => {
                          sound.tick();
                          onUpdateTrackers((prev) => ({
                            ...prev,
                            meals: {
                              ...prev.meals,
                              [mealKey]: { ...meal, clean: !meal.clean },
                            },
                          }));
                        }}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded border transition-colors ${
                          meal.clean
                            ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                            : 'bg-dark-900 text-neutral-500 border-surface-border'
                        }`}
                      >
                        {meal.clean ? 'CLEAN' : 'DIRTY'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-xs font-mono text-neutral-500 italic py-2">Domain is set to optional/skipped for today.</p>
          )}
        </Card>

        {/* ======================================================== */}
        {/* 7. WATER INTAKE, EXERCISE, AND MOVEMENT */}
        {/* ======================================================== */}
        <Card className={`p-5 space-y-4 transition-opacity ${trackers.waterAndMovement.skipped ? 'opacity-50' : 'opacity-100'}`}>
          <div className="flex items-center justify-between pb-2 border-b border-surface-border">
            <div className="flex items-center gap-2">
              <Activity size={16} className="text-accent" />
              <h4 className="text-xs font-mono font-bold uppercase text-white tracking-wider">
                7. Water, Training & Movement
              </h4>
            </div>
            <button
              type="button"
              onClick={() => toggleSkip('waterAndMovement')}
              className={`text-[10px] font-mono px-2 py-0.5 rounded border transition-colors ${
                trackers.waterAndMovement.skipped
                  ? 'bg-neutral-800 text-neutral-400 border-neutral-700'
                  : 'bg-dark-850 hover:bg-dark-800 text-neutral-300 border-surface-border'
              }`}
            >
              {trackers.waterAndMovement.skipped ? 'Skipped (Excluded)' : 'Active (Tracked)'}
            </button>
          </div>

          {!trackers.waterAndMovement.skipped ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-dark-850 border border-surface-border">
                <div>
                  <span className="text-xs font-medium text-white block">Hydration Baseline</span>
                  <span className="text-[10px] text-neutral-400 font-mono">Target: 8 glasses (3L)</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      sound.tick();
                      onUpdateTrackers((prev) => ({
                        ...prev,
                        waterAndMovement: {
                          ...prev.waterAndMovement,
                          waterGlasses: Math.max(0, prev.waterAndMovement.waterGlasses - 1),
                        },
                      }));
                    }}
                    className="w-7 h-7 rounded bg-dark-800 border border-surface-border flex items-center justify-center text-xs text-neutral-300 hover:text-white"
                  >
                    <Minus size={12} />
                  </button>
                  <span className="font-mono text-base font-bold text-sky-400 min-w-[24px] text-center">
                    {trackers.waterAndMovement.waterGlasses}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      sound.tick();
                      onUpdateTrackers((prev) => ({
                        ...prev,
                        waterAndMovement: {
                          ...prev.waterAndMovement,
                          waterGlasses: prev.waterAndMovement.waterGlasses + 1,
                        },
                      }));
                    }}
                    className="w-7 h-7 rounded bg-dark-800 border border-surface-border flex items-center justify-center text-xs text-neutral-300 hover:text-white"
                  >
                    <Plus size={12} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const next = !trackers.waterAndMovement.workoutDone;
                    if (next) sound.complete();
                    else sound.tick();
                    onUpdateTrackers((prev) => ({
                      ...prev,
                      waterAndMovement: { ...prev.waterAndMovement, workoutDone: next },
                    }));
                  }}
                  className={`p-2.5 rounded-lg border flex items-center gap-2 text-xs transition-colors ${
                    trackers.waterAndMovement.workoutDone
                      ? 'bg-accent/20 text-accent border-accent/40 font-bold'
                      : 'bg-dark-850 text-neutral-400 border-surface-border'
                  }`}
                >
                  <CheckCircle2 size={14} className={trackers.waterAndMovement.workoutDone ? 'text-accent' : 'text-neutral-500'} />
                  <span>Workout Executed</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const next = !trackers.waterAndMovement.walkStepsDone;
                    if (next) sound.complete();
                    else sound.tick();
                    onUpdateTrackers((prev) => ({
                      ...prev,
                      waterAndMovement: { ...prev.waterAndMovement, walkStepsDone: next },
                    }));
                  }}
                  className={`p-2.5 rounded-lg border flex items-center gap-2 text-xs transition-colors ${
                    trackers.waterAndMovement.walkStepsDone
                      ? 'bg-accent/20 text-accent border-accent/40 font-bold'
                      : 'bg-dark-850 text-neutral-400 border-surface-border'
                  }`}
                >
                  <CheckCircle2 size={14} className={trackers.waterAndMovement.walkStepsDone ? 'text-accent' : 'text-neutral-500'} />
                  <span>Outdoor Walk / Steps</span>
                </button>
              </div>

              <input
                type="text"
                placeholder="Workout details (e.g. Squat 5x5, 20m Zone 2 run)..."
                value={trackers.waterAndMovement.workoutType}
                onChange={(e) => {
                  const val = e.target.value;
                  onUpdateTrackers((prev) => ({
                    ...prev,
                    waterAndMovement: { ...prev.waterAndMovement, workoutType: val },
                  }));
                }}
                className="w-full bg-dark-850 border border-surface-border rounded px-3 py-1.5 text-xs text-neutral-200"
              />
            </div>
          ) : (
            <p className="text-xs font-mono text-neutral-500 italic py-2">Domain is set to optional/skipped for today.</p>
          )}
        </Card>

        {/* ======================================================== */}
        {/* 8. EMOTIONAL TRIGGERS */}
        {/* ======================================================== */}
        <Card className={`p-5 space-y-4 transition-opacity ${trackers.emotionalTriggers.skipped ? 'opacity-50' : 'opacity-100'}`}>
          <div className="flex items-center justify-between pb-2 border-b border-surface-border">
            <div className="flex items-center gap-2">
              <HeartCrack size={16} className="text-rose-400" />
              <h4 className="text-xs font-mono font-bold uppercase text-white tracking-wider">
                8. Emotional Triggers & Equanimity
              </h4>
            </div>
            <button
              type="button"
              onClick={() => toggleSkip('emotionalTriggers')}
              className={`text-[10px] font-mono px-2 py-0.5 rounded border transition-colors ${
                trackers.emotionalTriggers.skipped
                  ? 'bg-neutral-800 text-neutral-400 border-neutral-700'
                  : 'bg-dark-850 hover:bg-dark-800 text-neutral-300 border-surface-border'
              }`}
            >
              {trackers.emotionalTriggers.skipped ? 'Skipped (Excluded)' : 'Active (Tracked)'}
            </button>
          </div>

          {!trackers.emotionalTriggers.skipped ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-300 font-medium">Experienced Significant Emotional Trigger</span>
                <button
                  type="button"
                  onClick={() => {
                    const next = !trackers.emotionalTriggers.experiencedTrigger;
                    sound.tick();
                    onUpdateTrackers((prev) => ({
                      ...prev,
                      emotionalTriggers: { ...prev.emotionalTriggers, experiencedTrigger: next },
                    }));
                  }}
                  className={`px-2.5 py-1 rounded text-xs font-mono font-medium transition-colors ${
                    trackers.emotionalTriggers.experiencedTrigger
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                      : 'bg-dark-850 text-neutral-400 border border-surface-border'
                  }`}
                >
                  {trackers.emotionalTriggers.experiencedTrigger ? 'YES (TRIGGERED)' : 'NO (CALM)'}
                </button>
              </div>

              {trackers.emotionalTriggers.experiencedTrigger && (
                <div className="space-y-2 pt-2 border-t border-surface-border-subtle">
                  <input
                    type="text"
                    placeholder="What was the trigger event?"
                    value={trackers.emotionalTriggers.triggerDescription}
                    onChange={(e) => {
                      const val = e.target.value;
                      onUpdateTrackers((prev) => ({
                        ...prev,
                        emotionalTriggers: { ...prev.emotionalTriggers, triggerDescription: val },
                      }));
                    }}
                    className="w-full bg-dark-850 border border-surface-border rounded px-3 py-1.5 text-xs text-white"
                  />

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs text-neutral-300">Managed with Stoic Poise / Pause</span>
                    <button
                      type="button"
                      onClick={() => {
                        const next = !trackers.emotionalTriggers.managedWell;
                        sound.tick();
                        onUpdateTrackers((prev) => ({
                          ...prev,
                          emotionalTriggers: { ...prev.emotionalTriggers, managedWell: next },
                        }));
                      }}
                      className={`px-2.5 py-1 rounded text-xs font-mono font-medium ${
                        trackers.emotionalTriggers.managedWell
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                          : 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                      }`}
                    >
                      {trackers.emotionalTriggers.managedWell ? 'MANAGED WELL' : 'REACTED IMPULSIVELY'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <p className="text-xs font-mono text-neutral-500 italic py-2">Domain is set to optional/skipped for today.</p>
          )}
        </Card>

        {/* ======================================================== */}
        {/* 9. GRATITUDE AND THINGS THAT MADE ME HAPPY */}
        {/* ======================================================== */}
        <Card className={`p-5 space-y-4 transition-opacity ${trackers.gratitude.skipped ? 'opacity-50' : 'opacity-100'}`}>
          <div className="flex items-center justify-between pb-2 border-b border-surface-border">
            <div className="flex items-center gap-2">
              <Smile size={16} className="text-amber-300" />
              <h4 className="text-xs font-mono font-bold uppercase text-white tracking-wider">
                9. Gratitude & Uplifting Moments
              </h4>
            </div>
            <button
              type="button"
              onClick={() => toggleSkip('gratitude')}
              className={`text-[10px] font-mono px-2 py-0.5 rounded border transition-colors ${
                trackers.gratitude.skipped
                  ? 'bg-neutral-800 text-neutral-400 border-neutral-700'
                  : 'bg-dark-850 hover:bg-dark-800 text-neutral-300 border-surface-border'
              }`}
            >
              {trackers.gratitude.skipped ? 'Skipped (Excluded)' : 'Active (Tracked)'}
            </button>
          </div>

          {!trackers.gratitude.skipped ? (
            <div className="space-y-2">
              <input
                type="text"
                placeholder="1. Something you are grateful for today..."
                value={trackers.gratitude.item1}
                onChange={(e) => {
                  const val = e.target.value;
                  onUpdateTrackers((prev) => ({
                    ...prev,
                    gratitude: { ...prev.gratitude, item1: val },
                  }));
                }}
                className="w-full bg-dark-850 border border-surface-border rounded px-3 py-1.5 text-xs text-white"
              />
              <input
                type="text"
                placeholder="2. Second gratitude anchor..."
                value={trackers.gratitude.item2}
                onChange={(e) => {
                  const val = e.target.value;
                  onUpdateTrackers((prev) => ({
                    ...prev,
                    gratitude: { ...prev.gratitude, item2: val },
                  }));
                }}
                className="w-full bg-dark-850 border border-surface-border rounded px-3 py-1.5 text-xs text-white"
              />
              <input
                type="text"
                placeholder="Highlight moment that brought genuine happiness..."
                value={trackers.gratitude.highlightMoment}
                onChange={(e) => {
                  const val = e.target.value;
                  onUpdateTrackers((prev) => ({
                    ...prev,
                    gratitude: { ...prev.gratitude, highlightMoment: val },
                  }));
                }}
                className="w-full bg-dark-850 border border-surface-border rounded px-3 py-1.5 text-xs text-amber-300 font-sans"
              />
            </div>
          ) : (
            <p className="text-xs font-mono text-neutral-500 italic py-2">Domain is set to optional/skipped for today.</p>
          )}
        </Card>

        {/* ======================================================== */}
        {/* 10. CONFIDENCE AND SELF-WORTH */}
        {/* ======================================================== */}
        <Card className={`p-5 space-y-4 transition-opacity ${trackers.confidence.skipped ? 'opacity-50' : 'opacity-100'}`}>
          <div className="flex items-center justify-between pb-2 border-b border-surface-border">
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-accent" />
              <h4 className="text-xs font-mono font-bold uppercase text-white tracking-wider">
                10. Confidence & Self-Respect
              </h4>
            </div>
            <button
              type="button"
              onClick={() => toggleSkip('confidence')}
              className={`text-[10px] font-mono px-2 py-0.5 rounded border transition-colors ${
                trackers.confidence.skipped
                  ? 'bg-neutral-800 text-neutral-400 border-neutral-700'
                  : 'bg-dark-850 hover:bg-dark-800 text-neutral-300 border-surface-border'
              }`}
            >
              {trackers.confidence.skipped ? 'Skipped (Excluded)' : 'Active (Tracked)'}
            </button>
          </div>

          {!trackers.confidence.skipped ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-neutral-300 font-medium block">Kept My Word to Myself</span>
                  <span className="text-[10px] text-neutral-500">Self-worth equals promises kept to self</span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const next = !trackers.confidence.keptWordToSelf;
                    if (next) sound.complete();
                    else sound.tick();
                    onUpdateTrackers((prev) => ({
                      ...prev,
                      confidence: { ...prev.confidence, keptWordToSelf: next },
                    }));
                  }}
                  className={`px-3 py-1 rounded text-xs font-mono font-medium transition-colors ${
                    trackers.confidence.keptWordToSelf
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : 'bg-dark-850 text-neutral-500 border border-surface-border'
                  }`}
                >
                  {trackers.confidence.keptWordToSelf ? 'YES (INTEGRITY)' : 'NO (CONCESSIONS)'}
                </button>
              </div>

              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-1">
                  <span>Confidence Level Today</span>
                  <span className="text-white font-bold">{trackers.confidence.confidenceRating}/5</span>
                </div>
                <div className="grid grid-cols-5 gap-1.5">
                  {[1, 2, 3, 4, 5].map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => {
                        sound.tick();
                        onUpdateTrackers((prev) => ({
                          ...prev,
                          confidence: { ...prev.confidence, confidenceRating: lvl },
                        }));
                      }}
                      className={`py-1 text-xs font-mono rounded transition-colors ${
                        trackers.confidence.confidenceRating === lvl
                          ? 'bg-accent text-dark-950 font-bold'
                          : 'bg-dark-850 text-neutral-400 hover:bg-dark-800'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              <input
                type="text"
                placeholder="Empowering truth or grounded positive self-talk..."
                value={trackers.confidence.positiveSelfTalk}
                onChange={(e) => {
                  const val = e.target.value;
                  onUpdateTrackers((prev) => ({
                    ...prev,
                    confidence: { ...prev.confidence, positiveSelfTalk: val },
                  }));
                }}
                className="w-full bg-dark-850 border border-surface-border rounded px-3 py-1.5 text-xs text-neutral-200"
              />
            </div>
          ) : (
            <p className="text-xs font-mono text-neutral-500 italic py-2">Domain is set to optional/skipped for today.</p>
          )}
        </Card>

        {/* ======================================================== */}
        {/* 11. TIME WASTED VERSUS USED WELL */}
        {/* ======================================================== */}
        <Card className={`p-5 space-y-4 transition-opacity ${trackers.timeUse.skipped ? 'opacity-50' : 'opacity-100'}`}>
          <div className="flex items-center justify-between pb-2 border-b border-surface-border">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-accent" />
              <h4 className="text-xs font-mono font-bold uppercase text-white tracking-wider">
                11. Time Used Well vs Wasted
              </h4>
            </div>
            <button
              type="button"
              onClick={() => toggleSkip('timeUse')}
              className={`text-[10px] font-mono px-2 py-0.5 rounded border transition-colors ${
                trackers.timeUse.skipped
                  ? 'bg-neutral-800 text-neutral-400 border-neutral-700'
                  : 'bg-dark-850 hover:bg-dark-800 text-neutral-300 border-surface-border'
              }`}
            >
              {trackers.timeUse.skipped ? 'Skipped (Excluded)' : 'Active (Tracked)'}
            </button>
          </div>

          {!trackers.timeUse.skipped ? (
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold block mb-1">
                    Hours Used Well
                  </span>
                  <input
                    type="number"
                    step="0.5"
                    min="0"
                    max="18"
                    value={trackers.timeUse.hoursUsedWell}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      onUpdateTrackers((prev) => ({
                        ...prev,
                        timeUse: { ...prev.timeUse, hoursUsedWell: val },
                      }));
                    }}
                    className="w-full bg-dark-900 border border-surface-border rounded px-2.5 py-1 text-sm text-white font-mono font-bold"
                  />
                </div>

                <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20">
                  <span className="text-[10px] font-mono text-rose-400 uppercase font-bold block mb-1">
                    Hours Wasted / Leaked
                  </span>
                  <input
                    type="number"
                    step="0.5"
                    min="0"
                    max="18"
                    value={trackers.timeUse.hoursWasted}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      onUpdateTrackers((prev) => ({
                        ...prev,
                        timeUse: { ...prev.timeUse, hoursWasted: val },
                      }));
                    }}
                    className="w-full bg-dark-900 border border-surface-border rounded px-2.5 py-1 text-sm text-white font-mono font-bold"
                  />
                </div>
              </div>

              <input
                type="text"
                placeholder="Chief source of distraction or friction today..."
                value={trackers.timeUse.distractionSource}
                onChange={(e) => {
                  const val = e.target.value;
                  onUpdateTrackers((prev) => ({
                    ...prev,
                    timeUse: { ...prev.timeUse, distractionSource: val },
                  }));
                }}
                className="w-full bg-dark-850 border border-surface-border rounded px-3 py-1.5 text-xs text-neutral-200"
              />
            </div>
          ) : (
            <p className="text-xs font-mono text-neutral-500 italic py-2">Domain is set to optional/skipped for today.</p>
          )}
        </Card>
      </div>
    </div>
  );
};
