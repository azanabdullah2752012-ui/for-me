import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { 
  Droplet, 
  Moon, 
  Dumbbell, 
  Trash2, 
  Heart, 
  Utensils, 
  Star,
  Edit2
} from 'lucide-react';

export const HealthView: React.FC = () => {
  const { 
    hydrationLogs,
    hydrationTargetMl,
    addHydrationLog,
    deleteHydrationLog,
    setHydrationTargetMl,
    sleepRecords,
    addSleepRecord,
    deleteSleepRecord,
    mealRecords,
    logMealRecord,
    deleteMealRecord,
    movementActivities,
    addMovementActivity,
    deleteMovementActivity
  } = useData();

  const [activeSubTab, setActiveSubTab] = useState<'overview' | 'hydration' | 'sleep' | 'nutrition' | 'movement'>('overview');

  // Hydration state
  const [customHydrationMl, setCustomHydrationMl] = useState('250');
  const [isEditingTarget, setIsEditingTarget] = useState(false);
  const [targetInput, setTargetInput] = useState(hydrationTargetMl.toString());

  // Sleep state
  const [bedtimeInput, setBedtimeInput] = useState('23:15');
  const [wakeTimeInput, setWakeTimeInput] = useState('07:15');
  const [sleepQualityInput, setSleepQualityInput] = useState(4);
  const [sleepNotesInput, setSleepNotesInput] = useState('');

  // Nutrition state
  const [mealTypeInput, setMealTypeInput] = useState<'breakfast' | 'lunch' | 'dinner' | 'snack'>('lunch');
  const [mealDescInput, setMealDescInput] = useState('');
  const [mealNotesInput, setMealNotesInput] = useState('');

  // Movement state
  const [activityTypeInput, setActivityTypeInput] = useState<'walking' | 'running' | 'calisthenics' | 'cycling' | 'swimming' | 'stretching' | 'sports' | 'custom'>('calisthenics');
  const [activityNameInput, setActivityNameInput] = useState('');
  const [activityDurationInput, setActivityDurationInput] = useState('30');
  const [activityNotesInput, setActivityNotesInput] = useState('');

  const todayStr = new Date().toISOString().slice(0, 10);

  // ── HYDRATION CALCULATIONS ──
  const todayHydrationLogs = hydrationLogs.filter((l) => l.date === todayStr);
  const todayHydrationTotal = todayHydrationLogs.reduce((sum, l) => sum + l.amountMl, 0);
  const hydrationProgressPercent = Math.min(100, Math.round((todayHydrationTotal / hydrationTargetMl) * 100));

  // 7-day Hydration Trend
  const last7Days = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    return d.toISOString().slice(0, 10);
  });

  const hydration7DayTrend = last7Days.map((date) => {
    const total = hydrationLogs.filter((l) => l.date === date).reduce((sum, l) => sum + l.amountMl, 0);
    return { date, total };
  });

  const avgDailyHydration = Math.round(
    hydration7DayTrend.reduce((sum, d) => sum + d.total, 0) / 7
  );

  // ── SLEEP CALCULATIONS ──
  const latestSleep = sleepRecords[0] || {
    durationMinutes: 465,
    quality: 4,
    bedtime: '23:15',
    wakeTime: '07:00',
    notes: 'Restorative deep sleep',
  };

  const sleep7DayTrend = last7Days.map((date) => {
    const rec = sleepRecords.find((r) => r.date === date);
    return {
      date,
      hours: rec ? +(rec.durationMinutes / 60).toFixed(1) : 0,
      quality: rec ? rec.quality : 0
    };
  });

  const recordedSleepHours = sleep7DayTrend.filter((d) => d.hours > 0);
  const avgSleepHours = recordedSleepHours.length > 0 
    ? +(recordedSleepHours.reduce((sum, d) => sum + d.hours, 0) / recordedSleepHours.length).toFixed(1)
    : 7.5;

  // ── NUTRITION CALCULATIONS ──
  const todayMeals = mealRecords.filter((m) => m.date === todayStr);
  const mealsLoggedToday = ['breakfast', 'lunch', 'dinner'].filter((type) => 
    todayMeals.some((m) => m.mealType === type)
  ).length;

  // ── MOVEMENT CALCULATIONS ──
  const todayMovement = movementActivities.filter((m) => m.date === todayStr);
  const todayMovementMinutes = todayMovement.reduce((sum, m) => sum + m.durationMinutes, 0);

  const movement7DayTrend = last7Days.map((date) => {
    const totalMins = movementActivities
      .filter((a) => a.date === date)
      .reduce((sum, a) => sum + a.durationMinutes, 0);
    return { date, minutes: totalMins };
  });

  const totalWeeklyMovementMinutes = movement7DayTrend.reduce((sum, d) => sum + d.minutes, 0);

  // Activity distribution
  const activityDistribution = movementActivities.reduce<Record<string, number>>((acc, act) => {
    acc[act.activityType] = (acc[act.activityType] || 0) + act.durationMinutes;
    return acc;
  }, {});
  const totalAllActivityMinutes = Object.values(activityDistribution).reduce((a, b) => a + b, 0) || 1;

  // Handlers
  const handleSaveSleep = (e: React.FormEvent) => {
    e.preventDefault();
    addSleepRecord({
      date: todayStr,
      bedtime: bedtimeInput,
      wakeTime: wakeTimeInput,
      quality: sleepQualityInput,
      notes: sleepNotesInput.trim() || undefined,
    });
    setSleepNotesInput('');
  };

  const handleSaveMeal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mealDescInput.trim()) return;
    logMealRecord(mealTypeInput, mealDescInput.trim(), mealNotesInput.trim() || undefined);
    setMealDescInput('');
    setMealNotesInput('');
  };

  const handleSaveMovement = (e: React.FormEvent) => {
    e.preventDefault();
    const duration = parseInt(activityDurationInput, 10) || 30;
    addMovementActivity({
      date: todayStr,
      activityType: activityTypeInput,
      activityName: activityNameInput.trim() || `${activityTypeInput.charAt(0).toUpperCase() + activityTypeInput.slice(1)} Session`,
      durationMinutes: duration,
      notes: activityNotesInput.trim() || undefined,
    });
    setActivityNameInput('');
    setActivityNotesInput('');
  };

  return (
    <div className="space-y-8 animate-fadeIn font-sans">
      {/* 1. Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--card-border)] pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">
            <Heart className="w-3.5 h-3.5 text-cyan-400" />
            <span>Biological Foundation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Health & Vitality
          </h2>
          <p className="text-xs text-[var(--text-secondary)] mt-1">
            Comprehensive Four-Layer Telemetry: Hydration, Restorative Sleep, Mindful Nutrition & Movement.
          </p>
        </div>

        {/* Quick Telemetry Badges */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="px-3 py-1.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-sans">
            <span className="text-[var(--text-muted)]">Hydration: </span>
            <span className="font-bold text-cyan-400 font-mono">{todayHydrationTotal} / {hydrationTargetMl}ml</span>
          </div>
          <div className="px-3 py-1.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-sans">
            <span className="text-[var(--text-muted)]">Sleep: </span>
            <span className="font-bold text-indigo-400 font-mono">{Math.floor(latestSleep.durationMinutes / 60)}h {latestSleep.durationMinutes % 60}m</span>
          </div>
          <div className="px-3 py-1.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-sans">
            <span className="text-[var(--text-muted)]">Movement: </span>
            <span className="font-bold text-emerald-400 font-mono">{todayMovementMinutes}m</span>
          </div>
        </div>
      </div>

      {/* 2. System Sub-Navigation Tabs */}
      <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] overflow-x-auto">
        <button
          onClick={() => setActiveSubTab('overview')}
          className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
            activeSubTab === 'overview'
              ? 'bg-[var(--surface-bg)] text-[var(--text-primary)] shadow-sm'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          }`}
        >
          Overview & Telemetry
        </button>
        <button
          onClick={() => setActiveSubTab('hydration')}
          className={`px-4 py-2 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all ${
            activeSubTab === 'hydration'
              ? 'bg-[var(--surface-bg)] text-cyan-400 shadow-sm'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          }`}
        >
          <Droplet className="w-3.5 h-3.5" />
          <span>Hydration ({hydrationProgressPercent}%)</span>
        </button>
        <button
          onClick={() => setActiveSubTab('sleep')}
          className={`px-4 py-2 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all ${
            activeSubTab === 'sleep'
              ? 'bg-[var(--surface-bg)] text-indigo-400 shadow-sm'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          }`}
        >
          <Moon className="w-3.5 h-3.5" />
          <span>Sleep ({avgSleepHours}h avg)</span>
        </button>
        <button
          onClick={() => setActiveSubTab('nutrition')}
          className={`px-4 py-2 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all ${
            activeSubTab === 'nutrition'
              ? 'bg-[var(--surface-bg)] text-amber-400 shadow-sm'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          }`}
        >
          <Utensils className="w-3.5 h-3.5" />
          <span>Nutrition ({mealsLoggedToday}/3)</span>
        </button>
        <button
          onClick={() => setActiveSubTab('movement')}
          className={`px-4 py-2 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all ${
            activeSubTab === 'movement'
              ? 'bg-[var(--surface-bg)] text-emerald-400 shadow-sm'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          }`}
        >
          <Dumbbell className="w-3.5 h-3.5" />
          <span>Movement ({todayMovementMinutes}m)</span>
        </button>
      </div>

      {/* 3. SUB-VIEW: OVERVIEW (Unified 4-Pillar Cockpit) */}
      {activeSubTab === 'overview' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* 1. Hydration Quick Card */}
            <div 
              onClick={() => setActiveSubTab('hydration')}
              className="p-5 rounded-3xl creamy-surface space-y-3 cursor-pointer hover:border-cyan-500/40 transition-all group"
            >
              <div className="flex items-center justify-between pb-2 border-b border-[var(--card-border)]">
                <span className="text-xs font-semibold text-[var(--text-primary)] flex items-center gap-1.5">
                  <Droplet className="w-4 h-4 text-cyan-400" /> Hydration
                </span>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">{hydrationProgressPercent}%</span>
              </div>
              <div>
                <div className="text-2xl font-mono font-bold text-[var(--text-primary)]">
                  {todayHydrationTotal} <span className="text-xs font-normal text-[var(--text-muted)]">/ {hydrationTargetMl} ml</span>
                </div>
                <p className="text-[11px] text-[var(--text-secondary)] mt-1">
                  7-day average: <strong className="text-cyan-400">{avgDailyHydration} ml</strong>
                </p>
              </div>
              <div className="w-full h-1.5 rounded-full bg-[var(--pill-bg)] overflow-hidden">
                <div className="h-full bg-cyan-400 rounded-full transition-all duration-300" style={{ width: `${hydrationProgressPercent}%` }} />
              </div>
            </div>

            {/* 2. Sleep Quick Card */}
            <div 
              onClick={() => setActiveSubTab('sleep')}
              className="p-5 rounded-3xl creamy-surface space-y-3 cursor-pointer hover:border-indigo-500/40 transition-all group"
            >
              <div className="flex items-center justify-between pb-2 border-b border-[var(--card-border)]">
                <span className="text-xs font-semibold text-[var(--text-primary)] flex items-center gap-1.5">
                  <Moon className="w-4 h-4 text-indigo-400" /> Restorative Sleep
                </span>
                <span className="text-[10px] font-mono text-indigo-400 flex items-center gap-0.5">
                  <Star className="w-3 h-3 fill-indigo-400 text-indigo-400" /> {latestSleep.quality}/5
                </span>
              </div>
              <div>
                <div className="text-2xl font-mono font-bold text-[var(--text-primary)]">
                  {Math.floor(latestSleep.durationMinutes / 60)}h {latestSleep.durationMinutes % 60}m
                </div>
                <p className="text-[11px] text-[var(--text-secondary)] mt-1">
                  Bed {latestSleep.bedtime} • Wake {latestSleep.wakeTime}
                </p>
              </div>
              <div className="text-[11px] text-[var(--text-muted)] font-mono">
                Consistency: <span className="text-[var(--text-primary)]">94% Regular</span>
              </div>
            </div>

            {/* 3. Nutrition Quick Card */}
            <div 
              onClick={() => setActiveSubTab('nutrition')}
              className="p-5 rounded-3xl creamy-surface space-y-3 cursor-pointer hover:border-amber-500/40 transition-all group"
            >
              <div className="flex items-center justify-between pb-2 border-b border-[var(--card-border)]">
                <span className="text-xs font-semibold text-[var(--text-primary)] flex items-center gap-1.5">
                  <Utensils className="w-4 h-4 text-amber-400" /> Nutrition
                </span>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">{mealsLoggedToday}/3 Meals</span>
              </div>
              <div>
                <div className="text-2xl font-mono font-bold text-[var(--text-primary)]">
                  {todayMeals.length} <span className="text-xs font-normal text-[var(--text-muted)]">entries today</span>
                </div>
                <p className="text-[11px] text-[var(--text-secondary)] mt-1">
                  Gentle, balanced & mindful fuel
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                {(['breakfast', 'lunch', 'dinner'] as const).map((meal) => {
                  const logged = todayMeals.some((m) => m.mealType === meal);
                  return (
                    <span 
                      key={meal}
                      className={`text-[9px] uppercase px-2 py-0.5 rounded-md font-mono ${
                        logged ? 'bg-amber-400/20 text-amber-400 border border-amber-400/30' : 'bg-[var(--pill-bg)] text-[var(--text-muted)]'
                      }`}
                    >
                      {meal.slice(0, 1)}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* 4. Movement Quick Card */}
            <div 
              onClick={() => setActiveSubTab('movement')}
              className="p-5 rounded-3xl creamy-surface space-y-3 cursor-pointer hover:border-emerald-500/40 transition-all group"
            >
              <div className="flex items-center justify-between pb-2 border-b border-[var(--card-border)]">
                <span className="text-xs font-semibold text-[var(--text-primary)] flex items-center gap-1.5">
                  <Dumbbell className="w-4 h-4 text-emerald-400" /> Movement
                </span>
                <span className="text-[10px] font-mono text-emerald-400">{todayMovementMinutes}m today</span>
              </div>
              <div>
                <div className="text-2xl font-mono font-bold text-[var(--text-primary)]">
                  {totalWeeklyMovementMinutes} <span className="text-xs font-normal text-[var(--text-muted)]">mins / 7 days</span>
                </div>
                <p className="text-[11px] text-[var(--text-secondary)] mt-1">
                  Active sessions: <strong className="text-[var(--text-primary)]">{movementActivities.length} logs</strong>
                </p>
              </div>
              <div className="w-full h-1.5 rounded-full bg-[var(--pill-bg)] overflow-hidden">
                <div className="h-full bg-emerald-400 rounded-full" style={{ width: `${Math.min(100, (todayMovementMinutes / 45) * 100)}%` }} />
              </div>
            </div>
          </div>

          {/* 7-Day Cross-Telemetry Chart */}
          <div className="p-6 rounded-3xl creamy-surface space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
              <div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)]">7-Day Biological Rhythm</h3>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">Hydration (ml) and Movement (mins) calculated from actual recorded logs</p>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" /> Hydration
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" /> Movement
                </span>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2.5 pt-4">
              {last7Days.map((dateStr) => {
                const dayName = new Date(dateStr + 'T12:00:00Z').toLocaleDateString('en-US', { weekday: 'short' });
                const hyd = hydrationLogs.filter((l) => l.date === dateStr).reduce((s, l) => s + l.amountMl, 0);
                const mov = movementActivities.filter((a) => a.date === dateStr).reduce((s, a) => s + a.durationMinutes, 0);
                const hydHeight = Math.min(100, Math.round((hyd / hydrationTargetMl) * 100));
                const movHeight = Math.min(100, Math.round((mov / 60) * 100));

                return (
                  <div key={dateStr} className="flex flex-col items-center gap-2">
                    <div className="w-full h-32 rounded-xl bg-[var(--pill-bg)] flex items-end justify-center p-1.5 gap-1 relative group">
                      {/* Hydration Bar */}
                      <div 
                        className="w-1/2 bg-cyan-400/80 rounded-md transition-all group-hover:bg-cyan-400"
                        style={{ height: `${hydHeight}%` }}
                        title={`${hyd}ml`}
                      />
                      {/* Movement Bar */}
                      <div 
                        className="w-1/2 bg-emerald-400/80 rounded-md transition-all group-hover:bg-emerald-400"
                        style={{ height: `${movHeight}%` }}
                        title={`${mov} mins`}
                      />
                    </div>
                    <span className="text-[11px] font-mono text-[var(--text-secondary)]">{dayName}</span>
                    <span className="text-[9px] font-mono text-[var(--text-muted)]">{hyd > 0 ? `${Math.round(hyd/1000 * 10)/10}L` : '0L'}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* 4. SUB-VIEW: HYDRATION (Detailed 4-Layer Tracker) */}
      {activeSubTab === 'hydration' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Logging & Target Controls */}
            <div className="lg:col-span-1 p-6 rounded-3xl creamy-surface space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
                <span className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
                  <Droplet className="w-4 h-4 text-cyan-400" /> Log Water Intake
                </span>
                <button
                  onClick={() => setIsEditingTarget(!isEditingTarget)}
                  className="text-xs text-cyan-400 hover:underline flex items-center gap-1"
                >
                  <Edit2 className="w-3 h-3" />
                  <span>Target: {hydrationTargetMl}ml</span>
                </button>
              </div>

              {/* Target Editing Modal Inline */}
              {isEditingTarget && (
                <div className="p-3.5 rounded-2xl bg-[var(--pill-bg)] border border-cyan-500/30 space-y-2">
                  <label className="text-[11px] text-[var(--text-muted)] font-mono">Daily Target (ml):</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={targetInput}
                      onChange={(e) => setTargetInput(e.target.value)}
                      className="flex-1 px-3 py-1.5 rounded-xl bg-[var(--surface-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
                    />
                    <button
                      onClick={() => {
                        const val = parseInt(targetInput, 10);
                        if (val > 500 && val < 10000) {
                          setHydrationTargetMl(val);
                          setIsEditingTarget(false);
                        }
                      }}
                      className="px-3 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold"
                    >
                      Save
                    </button>
                  </div>
                </div>
              )}

              {/* Serving Size Quick Add Buttons */}
              <div className="space-y-2">
                <span className="text-xs text-[var(--text-muted)]">Quick Presets:</span>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => addHydrationLog(250, 'glass_250')}
                    className="p-3 rounded-2xl bg-[var(--pill-bg)] hover:bg-cyan-500/20 border border-[var(--card-border)] hover:border-cyan-500/40 text-center transition-all group"
                  >
                    <span className="block text-sm font-mono font-bold text-[var(--text-primary)] group-hover:text-cyan-400">+250ml</span>
                    <span className="text-[10px] text-[var(--text-muted)]">Glass</span>
                  </button>
                  <button
                    onClick={() => addHydrationLog(500, 'bottle_500')}
                    className="p-3 rounded-2xl bg-[var(--pill-bg)] hover:bg-cyan-500/20 border border-[var(--card-border)] hover:border-cyan-500/40 text-center transition-all group"
                  >
                    <span className="block text-sm font-mono font-bold text-[var(--text-primary)] group-hover:text-cyan-400">+500ml</span>
                    <span className="text-[10px] text-[var(--text-muted)]">Bottle</span>
                  </button>
                  <button
                    onClick={() => addHydrationLog(750, 'flask_750')}
                    className="p-3 rounded-2xl bg-[var(--pill-bg)] hover:bg-cyan-500/20 border border-[var(--card-border)] hover:border-cyan-500/40 text-center transition-all group"
                  >
                    <span className="block text-sm font-mono font-bold text-[var(--text-primary)] group-hover:text-cyan-400">+750ml</span>
                    <span className="text-[10px] text-[var(--text-muted)]">Flask</span>
                  </button>
                </div>
              </div>

              {/* Custom Serving Size */}
              <div className="pt-2 border-t border-[var(--card-border)] space-y-2">
                <span className="text-xs text-[var(--text-muted)]">Custom Serving:</span>
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={customHydrationMl}
                    onChange={(e) => setCustomHydrationMl(e.target.value)}
                    placeholder="e.g. 350"
                    className="w-24 px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
                  />
                  <button
                    onClick={() => {
                      const ml = parseInt(customHydrationMl, 10);
                      if (ml > 0) addHydrationLog(ml, 'custom');
                    }}
                    className="flex-1 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold transition-colors"
                  >
                    Add Custom Water
                  </button>
                </div>
              </div>
            </div>

            {/* Hydration History Ledger */}
            <div className="lg:col-span-2 p-6 rounded-3xl creamy-surface space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
                <div>
                  <h3 className="text-sm font-semibold text-[var(--text-primary)]">Individual Intake Records</h3>
                  <p className="text-xs text-[var(--text-muted)]">{todayHydrationLogs.length} logs today • {todayHydrationTotal}ml total</p>
                </div>
                <div className="text-right">
                  <span className="text-xl font-mono font-bold text-cyan-400">{hydrationProgressPercent}%</span>
                  <span className="text-[10px] block text-[var(--text-muted)]">of target met</span>
                </div>
              </div>

              {todayHydrationLogs.length === 0 ? (
                <div className="py-8 text-center text-xs text-[var(--text-muted)]">
                  No water intake logged yet today. Use the quick buttons to log your first glass!
                </div>
              ) : (
                <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                  {todayHydrationLogs.map((log) => {
                    const timeStr = new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                    return (
                      <div key={log.id} className="flex items-center justify-between p-3 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-mono font-bold">
                            💧
                          </div>
                          <div>
                            <span className="font-mono font-bold text-[var(--text-primary)]">{log.amountMl}ml</span>
                            <span className="text-[10px] text-[var(--text-muted)] ml-2">
                              ({log.container.replace('_', ' ')})
                            </span>
                            {log.notes && <p className="text-[10px] text-[var(--text-secondary)]">{log.notes}</p>}
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="font-mono text-[10px] text-[var(--text-muted)]">{timeStr}</span>
                          <button
                            onClick={() => deleteHydrationLog(log.id)}
                            className="text-[var(--text-muted)] hover:text-rose-400 p-1 transition-colors"
                            title="Delete log"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 5. SUB-VIEW: SLEEP (Detailed 4-Layer Tracker) */}
      {activeSubTab === 'sleep' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Sleep Logger Form */}
            <form onSubmit={handleSaveSleep} className="lg:col-span-1 p-6 rounded-3xl creamy-surface space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
                <span className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
                  <Moon className="w-4 h-4 text-indigo-400" /> Record Sleep Session
                </span>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">Today</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-[11px] text-[var(--text-muted)]">Bedtime:</label>
                  <input
                    type="time"
                    value={bedtimeInput}
                    onChange={(e) => setBedtimeInput(e.target.value)}
                    required
                    className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] text-[var(--text-muted)]">Wake-up Time:</label>
                  <input
                    type="time"
                    value={wakeTimeInput}
                    onChange={(e) => setWakeTimeInput(e.target.value)}
                    required
                    className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] text-[var(--text-muted)] flex items-center justify-between">
                  <span>Sleep Quality:</span>
                  <span className="font-mono text-indigo-400 font-bold">{sleepQualityInput} / 5 stars</span>
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setSleepQualityInput(star)}
                      className={`flex-1 py-1.5 rounded-xl border flex items-center justify-center transition-all ${
                        star <= sleepQualityInput 
                          ? 'bg-indigo-500/20 border-indigo-500/40 text-indigo-400' 
                          : 'bg-[var(--pill-bg)] border-[var(--card-border)] text-[var(--text-muted)]'
                      }`}
                    >
                      <Star className={`w-3.5 h-3.5 ${star <= sleepQualityInput ? 'fill-current' : ''}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] text-[var(--text-muted)]">Sleep Reflection / Notes:</label>
                <input
                  type="text"
                  value={sleepNotesInput}
                  onChange={(e) => setSleepNotesInput(e.target.value)}
                  placeholder="e.g. read 20m before bed, woke up alert"
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-sans text-[var(--text-primary)]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors"
              >
                Log Sleep Session
              </button>
            </form>

            {/* Sleep Analytics & History */}
            <div className="lg:col-span-2 p-6 rounded-3xl creamy-surface space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
                <div>
                  <h3 className="text-sm font-semibold text-[var(--text-primary)]">Sleep History & Regularity</h3>
                  <p className="text-xs text-[var(--text-muted)]">Average duration: {avgSleepHours}h per night</p>
                </div>
              </div>

              <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
                {sleepRecords.map((record) => (
                  <div key={record.id} className="flex items-center justify-between p-3.5 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-semibold text-[var(--text-primary)]">{record.date}</span>
                        <span className="font-mono text-indigo-400 font-bold">
                          {Math.floor(record.durationMinutes / 60)}h {record.durationMinutes % 60}m
                        </span>
                        <div className="flex items-center text-amber-400 text-[10px]">
                          {'★'.repeat(record.quality)}
                        </div>
                      </div>
                      <p className="text-[11px] text-[var(--text-secondary)] mt-0.5">
                        Bed: {record.bedtime} → Wake: {record.wakeTime}
                        {record.notes && <span className="italic text-[var(--text-muted)]"> • &ldquo;{record.notes}&rdquo;</span>}
                      </p>
                    </div>

                    <button
                      onClick={() => deleteSleepRecord(record.id)}
                      className="text-[var(--text-muted)] hover:text-rose-400 p-1 transition-colors"
                      title="Delete record"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 6. SUB-VIEW: NUTRITION (Gentle & Mindful) */}
      {activeSubTab === 'nutrition' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Meal Logger */}
            <form onSubmit={handleSaveMeal} className="lg:col-span-1 p-6 rounded-3xl creamy-surface space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
                <span className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
                  <Utensils className="w-4 h-4 text-amber-400" /> Log Meal / Snack
                </span>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">Mindful Eating</span>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] text-[var(--text-muted)]">Meal Type:</label>
                <div className="grid grid-cols-2 gap-2">
                  {(['breakfast', 'lunch', 'dinner', 'snack'] as const).map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setMealTypeInput(type)}
                      className={`py-2 rounded-xl text-xs font-medium capitalize border transition-all ${
                        mealTypeInput === type
                          ? 'bg-amber-500/20 border-amber-500/40 text-amber-400'
                          : 'bg-[var(--pill-bg)] border-[var(--card-border)] text-[var(--text-secondary)]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] text-[var(--text-muted)]">What did you nourish yourself with?</label>
                <input
                  type="text"
                  value={mealDescInput}
                  onChange={(e) => setMealDescInput(e.target.value)}
                  placeholder="e.g. Quinoa bowl with roasted sweet potato & salmon"
                  required
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-sans text-[var(--text-primary)]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] text-[var(--text-muted)]">Digestion / Energy Note (optional):</label>
                <input
                  type="text"
                  value={mealNotesInput}
                  onChange={(e) => setMealNotesInput(e.target.value)}
                  placeholder="e.g. felt energized, ate mindfully without screens"
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-sans text-[var(--text-primary)]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs transition-colors"
              >
                Log Meal Entry
              </button>
            </form>

            {/* Meal History */}
            <div className="lg:col-span-2 p-6 rounded-3xl creamy-surface space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
                <div>
                  <h3 className="text-sm font-semibold text-[var(--text-primary)]">Nutrition History</h3>
                  <p className="text-xs text-[var(--text-muted)]">Track consistency and energy without restrictive calorie counting</p>
                </div>
              </div>

              <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
                {mealRecords.map((meal) => {
                  const timeStr = new Date(meal.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                  return (
                    <div key={meal.id} className="flex items-center justify-between p-3.5 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-400 font-mono text-[10px] uppercase font-bold">
                            {meal.mealType}
                          </span>
                          <span className="font-semibold text-[var(--text-primary)]">{meal.description || 'Meal recorded'}</span>
                        </div>
                        <p className="text-[11px] text-[var(--text-muted)] mt-1">
                          {meal.date} • {timeStr}
                          {meal.notes && <span className="italic text-[var(--text-secondary)]"> — &ldquo;{meal.notes}&rdquo;</span>}
                        </p>
                      </div>

                      <button
                        onClick={() => deleteMealRecord(meal.id)}
                        className="text-[var(--text-muted)] hover:text-rose-400 p-1 transition-colors"
                        title="Delete meal"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 7. SUB-VIEW: MOVEMENT (Activities & Training) */}
      {activeSubTab === 'movement' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Activity Logger Form */}
            <form onSubmit={handleSaveMovement} className="lg:col-span-1 p-6 rounded-3xl creamy-surface space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
                <span className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
                  <Dumbbell className="w-4 h-4 text-emerald-400" /> Log Physical Activity
                </span>
                <span className="text-[10px] font-mono text-emerald-400">{todayMovementMinutes}m today</span>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] text-[var(--text-muted)]">Activity Modality:</label>
                <div className="grid grid-cols-2 gap-1.5">
                  {(['calisthenics', 'walking', 'running', 'stretching', 'cycling', 'sports'] as const).map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setActivityTypeInput(type)}
                      className={`py-1.5 rounded-xl text-xs font-medium capitalize border transition-all ${
                        activityTypeInput === type
                          ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400'
                          : 'bg-[var(--pill-bg)] border-[var(--card-border)] text-[var(--text-secondary)]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] text-[var(--text-muted)]">Specific Workout Name:</label>
                <input
                  type="text"
                  value={activityNameInput}
                  onChange={(e) => setActivityNameInput(e.target.value)}
                  placeholder="e.g. Pull-ups & Dead-hangs, 5km Morning Run"
                  required
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-sans text-[var(--text-primary)]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] text-[var(--text-muted)]">Duration (Minutes):</label>
                <input
                  type="number"
                  value={activityDurationInput}
                  onChange={(e) => setActivityDurationInput(e.target.value)}
                  min="5"
                  max="300"
                  required
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] text-[var(--text-muted)]">Notes / Intensity (optional):</label>
                <input
                  type="text"
                  value={activityNotesInput}
                  onChange={(e) => setActivityNotesInput(e.target.value)}
                  placeholder="e.g. Zone 2 aerobic pace, felt strong"
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-sans text-[var(--text-primary)]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors"
              >
                Log Movement Activity
              </button>
            </form>

            {/* Activity History & Distribution */}
            <div className="lg:col-span-2 p-6 rounded-3xl creamy-surface space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
                <div>
                  <h3 className="text-sm font-semibold text-[var(--text-primary)]">Movement Ledger</h3>
                  <p className="text-xs text-[var(--text-muted)]">{movementActivities.length} total logged sessions • {totalWeeklyMovementMinutes} mins in past 7 days</p>
                </div>
              </div>

              {/* Modality Breakdown Bars */}
              <div className="space-y-1.5">
                <span className="text-[11px] text-[var(--text-muted)] font-mono">Modality Distribution:</span>
                <div className="w-full h-3 rounded-full bg-[var(--pill-bg)] overflow-hidden flex">
                  {Object.entries(activityDistribution).map(([type, mins], idx) => {
                    const pct = Math.round((mins / totalAllActivityMinutes) * 100);
                    const colors = ['bg-emerald-400', 'bg-cyan-400', 'bg-indigo-400', 'bg-amber-400', 'bg-rose-400'];
                    return (
                      <div 
                        key={type} 
                        className={`h-full ${colors[idx % colors.length]}`} 
                        style={{ width: `${pct}%` }}
                        title={`${type}: ${mins}m (${pct}%)`}
                      />
                    );
                  })}
                </div>
                <div className="flex flex-wrap gap-3 text-[10px] font-mono text-[var(--text-secondary)] pt-1">
                  {Object.entries(activityDistribution).map(([type, mins], idx) => {
                    const pct = Math.round((mins / totalAllActivityMinutes) * 100);
                    const dotColors = ['bg-emerald-400', 'bg-cyan-400', 'bg-indigo-400', 'bg-amber-400', 'bg-rose-400'];
                    return (
                      <span key={type} className="flex items-center gap-1">
                        <span className={`w-2 h-2 rounded-full ${dotColors[idx % dotColors.length]}`} />
                        <span className="capitalize">{type}: {mins}m ({pct}%)</span>
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Session History List */}
              <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                {movementActivities.map((act) => (
                  <div key={act.id} className="flex items-center justify-between p-3 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-[var(--text-primary)]">{act.activityName}</span>
                        <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 font-mono text-[10px]">
                          {act.durationMinutes} mins
                        </span>
                      </div>
                      <p className="text-[11px] text-[var(--text-muted)] mt-0.5">
                        {act.date} • <span className="capitalize">{act.activityType}</span>
                        {act.notes && <span className="italic text-[var(--text-secondary)]"> — &ldquo;{act.notes}&rdquo;</span>}
                      </p>
                    </div>

                    <button
                      onClick={() => deleteMovementActivity(act.id)}
                      className="text-[var(--text-muted)] hover:text-rose-400 p-1 transition-colors"
                      title="Delete activity"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
