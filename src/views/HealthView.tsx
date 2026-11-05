import React, { useState, useMemo } from 'react';
import { useData } from '../context/DataContext';
import { 
  Droplet, 
  Moon, 
  Dumbbell, 
  Trash2, 
  Heart, 
  Utensils, 
  Star,
  Zap,
  Info,
  Sliders,
  TrendingUp,
  BarChart3
} from 'lucide-react';
import { DailyVitalityObservation } from '../types';

export const HealthView: React.FC = () => {
  const { 
    hydrationLogs,
    hydrationTargetMl,
    addHydrationLog,
    deleteHydrationLog,
    setHydrationTargetMl,
    sleepRecords,
    sleepTargetHours,
    setSleepTargetHours,
    addSleepRecord,
    deleteSleepRecord,
    mealRecords,
    logMealRecord,
    deleteMealRecord,
    movementActivities,
    movementWeeklyTargetMinutes,
    setMovementWeeklyTargetMinutes,
    addMovementActivity,
    deleteMovementActivity,
    vitalityObservations,
    addVitalityObservation,
    deleteVitalityObservation
  } = useData();

  const [activeSubTab, setActiveSubTab] = useState<'overview' | 'hydration' | 'sleep' | 'nutrition' | 'movement' | 'energy'>('overview');
  const [timeframe, setTimeframe] = useState<'7d' | '30d'>('7d');
  const [showTargetsDrawer, setShowTargetsDrawer] = useState(false);

  const todayStr = useMemo(() => new Date().toISOString().slice(0, 10), []);

  // ── TARGETS CONFIG STATE ──
  const [targetHydrationInput, setTargetHydrationInput] = useState(hydrationTargetMl.toString());
  const [targetSleepInput, setTargetSleepInput] = useState(sleepTargetHours.toString());
  const [targetMovementInput, setTargetMovementInput] = useState(movementWeeklyTargetMinutes.toString());

  // ── HYDRATION INPUT STATE ──
  const [customHydrationMl, setCustomHydrationMl] = useState('250');
  const [hydrationNotesInput, setHydrationNotesInput] = useState('');

  // ── SLEEP INPUT STATE ──
  const [sleepDateInput, setSleepDateInput] = useState(todayStr);
  const [bedtimeInput, setBedtimeInput] = useState('23:15');
  const [wakeTimeInput, setWakeTimeInput] = useState('07:15');
  const [sleepQualityInput, setSleepQualityInput] = useState(4);
  const [sleepNotesInput, setSleepNotesInput] = useState('');

  // ── NUTRITION INPUT STATE ──
  const [mealDateInput, setMealDateInput] = useState(todayStr);
  const [mealTimeInput, setMealTimeInput] = useState(
    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
  );
  const [mealTypeInput, setMealTypeInput] = useState<'breakfast' | 'lunch' | 'dinner' | 'snack'>('lunch');
  const [mealDescInput, setMealDescInput] = useState('');
  const [mealNotesInput, setMealNotesInput] = useState('');
  const [mealFilter, setMealFilter] = useState<'all' | 'breakfast' | 'lunch' | 'dinner' | 'snack'>('all');

  // ── MOVEMENT INPUT STATE ──
  const [movementDateInput, setMovementDateInput] = useState(todayStr);
  const [movementTimeInput, setMovementTimeInput] = useState('17:00');
  const [activityTypeInput, setActivityTypeInput] = useState<'walking' | 'running' | 'calisthenics' | 'cycling' | 'swimming' | 'stretching' | 'sports' | 'custom'>('calisthenics');
  const [activityNameInput, setActivityNameInput] = useState('');
  const [activityDurationInput, setActivityDurationInput] = useState('45');
  const [activityIntensityInput, setActivityIntensityInput] = useState<'light' | 'moderate' | 'high'>('moderate');
  const [activityNotesInput, setActivityNotesInput] = useState('');

  // ── VITALITY & WELLBEING INPUT STATE ──
  const [vitalityDateInput, setVitalityDateInput] = useState(todayStr);
  const [energyLevelInput, setEnergyLevelInput] = useState(8);
  const [wellbeingInput, setWellbeingInput] = useState(8);
  const [restRecoveryInput, setRestRecoveryInput] = useState(8);
  const [readinessInput, setReadinessInput] = useState(8);
  const [moodStateInput, setMoodStateInput] = useState<DailyVitalityObservation['moodState']>('energized');
  const [vitalityNotesInput, setVitalityNotesInput] = useState('');

  // ── TIMEFRAME DAYS GENERATOR ──
  const timeframeDays = useMemo(() => {
    const daysCount = timeframe === '7d' ? 7 : 30;
    return Array.from({ length: daysCount }).map((_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - (daysCount - 1 - i));
      return d.toISOString().slice(0, 10);
    });
  }, [timeframe]);

  // ── HYDRATION CALCULATIONS ──
  const todayHydrationLogs = useMemo(() => 
    hydrationLogs.filter((l) => l.date === todayStr),
    [hydrationLogs, todayStr]
  );
  const todayHydrationTotal = useMemo(() => 
    todayHydrationLogs.reduce((sum, l) => sum + l.amountMl, 0),
    [todayHydrationLogs]
  );
  const hydrationProgressPercent = Math.min(100, Math.round((todayHydrationTotal / hydrationTargetMl) * 100));

  const hydrationTrend = useMemo(() => {
    return timeframeDays.map((date) => {
      const total = hydrationLogs.filter((l) => l.date === date).reduce((sum, l) => sum + l.amountMl, 0);
      return { date, total };
    });
  }, [timeframeDays, hydrationLogs]);

  const avgDailyHydration = useMemo(() => {
    const nonZero = hydrationTrend.filter((d) => d.total > 0);
    if (nonZero.length === 0) return 0;
    return Math.round(nonZero.reduce((sum, d) => sum + d.total, 0) / nonZero.length);
  }, [hydrationTrend]);

  // ── SLEEP CALCULATIONS ──
  const latestSleep = useMemo(() => {
    return sleepRecords[0] || null;
  }, [sleepRecords]);

  const sleepTrend = useMemo(() => {
    return timeframeDays.map((date) => {
      const rec = sleepRecords.find((r) => r.date === date);
      return {
        date,
        durationMinutes: rec ? rec.durationMinutes : 0,
        hours: rec ? +(rec.durationMinutes / 60).toFixed(1) : 0,
        quality: rec ? rec.quality : 0,
        bedtime: rec ? rec.bedtime : null
      };
    });
  }, [timeframeDays, sleepRecords]);

  const avgSleepHours = useMemo(() => {
    const recorded = sleepTrend.filter((d) => d.durationMinutes > 0);
    if (recorded.length === 0) return 0.0;
    const totalMinutes = recorded.reduce((sum, d) => sum + d.durationMinutes, 0);
    return +(totalMinutes / (recorded.length * 60)).toFixed(1);
  }, [sleepTrend]);

  // Sleep Bedtime Regularity / Consistency Metric
  const sleepConsistency = useMemo(() => {
    const recordedWithBedtime = sleepRecords.filter((r) => r.bedtime);
    if (recordedWithBedtime.length < 2) return null;
    // Calculate variance in bedtime minutes from target 23:15 (1395 mins)
    const targetMin = 23 * 60 + 15;
    let deviationSum = 0;
    recordedWithBedtime.forEach((r) => {
      const [h, m] = r.bedtime.split(':').map(Number);
      let bedtimeMin = h * 60 + m;
      if (h < 6) bedtimeMin += 24 * 60; // past midnight
      deviationSum += Math.abs(bedtimeMin - targetMin);
    });
    const avgDeviation = deviationSum / recordedWithBedtime.length;
    // 0 dev = 100%, 60m dev = 70%, 120m dev = 40%
    const score = Math.max(50, Math.min(100, Math.round(100 - (avgDeviation * 0.5))));
    return score;
  }, [sleepRecords]);

  // ── NUTRITION CALCULATIONS ──
  const todayMeals = useMemo(() => 
    mealRecords.filter((m) => m.date === todayStr),
    [mealRecords, todayStr]
  );
  const mealsLoggedToday = useMemo(() => {
    return (['breakfast', 'lunch', 'dinner'] as const).filter((type) => 
      todayMeals.some((m) => m.mealType === type)
    ).length;
  }, [todayMeals]);

  const filteredMeals = useMemo(() => {
    if (mealFilter === 'all') return mealRecords;
    return mealRecords.filter((m) => m.mealType === mealFilter);
  }, [mealRecords, mealFilter]);

  // ── MOVEMENT CALCULATIONS ──
  const todayMovement = useMemo(() => 
    movementActivities.filter((m) => m.date === todayStr),
    [movementActivities, todayStr]
  );
  const todayMovementMinutes = useMemo(() => 
    todayMovement.reduce((sum, m) => sum + m.durationMinutes, 0),
    [todayMovement]
  );

  const movementTrend = useMemo(() => {
    return timeframeDays.map((date) => {
      const totalMins = movementActivities
        .filter((a) => a.date === date)
        .reduce((sum, a) => sum + a.durationMinutes, 0);
      return { date, minutes: totalMins };
    });
  }, [timeframeDays, movementActivities]);

  const totalTimeframeMovementMinutes = useMemo(() => 
    movementTrend.reduce((sum, d) => sum + d.minutes, 0),
    [movementTrend]
  );

  const weeklyMovementMinutes = useMemo(() => {
    const last7 = Array.from({ length: 7 }).map((_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - (6 - i));
      return d.toISOString().slice(0, 10);
    });
    return movementActivities
      .filter((a) => last7.includes(a.date))
      .reduce((sum, a) => sum + a.durationMinutes, 0);
  }, [movementActivities]);

  // Activity modality distribution
  const activityDistribution = useMemo(() => {
    return movementActivities.reduce<Record<string, number>>((acc, act) => {
      acc[act.activityType] = (acc[act.activityType] || 0) + act.durationMinutes;
      return acc;
    }, {});
  }, [movementActivities]);

  const totalAllActivityMinutes = useMemo(() => 
    Object.values(activityDistribution).reduce((a, b) => a + b, 0) || 1,
    [activityDistribution]
  );

  // ── VITALITY & WELLBEING CALCULATIONS ──
  const latestVitality = useMemo(() => {
    return vitalityObservations[0] || null;
  }, [vitalityObservations]);

  const avgVitalityEnergy = useMemo(() => {
    if (vitalityObservations.length === 0) return 0.0;
    const sum = vitalityObservations.reduce((acc, v) => acc + v.energyLevel, 0);
    return +(sum / vitalityObservations.length).toFixed(1);
  }, [vitalityObservations]);

  // ── BIOLOGICAL CORRELATION CALCULATIONS ──
  // 1. Sleep Duration vs Next-Day Energy
  const sleepEnergyCorrelation = useMemo(() => {
    const paired: { sleepHours: number; energy: number }[] = [];
    vitalityObservations.forEach((vo) => {
      // Find sleep from night before
      const prevDate = new Date(vo.date);
      prevDate.setDate(prevDate.getDate() - 1);
      const prevDateStr = prevDate.toISOString().slice(0, 10);
      const sleepRec = sleepRecords.find((s) => s.date === prevDateStr || s.date === vo.date);
      if (sleepRec) {
        paired.push({ sleepHours: sleepRec.durationMinutes / 60, energy: vo.energyLevel });
      }
    });

    if (paired.length < 2) {
      return { hasData: false, optimalSleepEnergy: null, suboptimalSleepEnergy: null, pairedCount: paired.length };
    }
    const highSleep = paired.filter((p) => p.sleepHours >= 7.5);
    const lowSleep = paired.filter((p) => p.sleepHours < 7.5);
    const optimalSleepEnergy = highSleep.length > 0 
      ? +(highSleep.reduce((s, p) => s + p.energy, 0) / highSleep.length).toFixed(1)
      : null;
    const suboptimalSleepEnergy = lowSleep.length > 0 
      ? +(lowSleep.reduce((s, p) => s + p.energy, 0) / lowSleep.length).toFixed(1)
      : null;
    return { hasData: true, optimalSleepEnergy, suboptimalSleepEnergy, pairedCount: paired.length };
  }, [vitalityObservations, sleepRecords]);

  // 2. Hydration vs Wellbeing
  const hydrationWellbeingCorrelation = useMemo(() => {
    const paired: { hydMl: number; wellbeing: number }[] = [];
    vitalityObservations.forEach((vo) => {
      const dayHyd = hydrationLogs.filter((l) => l.date === vo.date).reduce((s, l) => s + l.amountMl, 0);
      if (dayHyd > 0) {
        paired.push({ hydMl: dayHyd, wellbeing: vo.wellbeing });
      }
    });
    if (paired.length < 2) {
      return { hasData: false, hydratedWellbeing: null, dehydratedWellbeing: null };
    }
    const highHyd = paired.filter((p) => p.hydMl >= 2000);
    const lowHyd = paired.filter((p) => p.hydMl < 2000);
    const hydratedWellbeing = highHyd.length > 0
      ? +(highHyd.reduce((s, p) => s + p.wellbeing, 0) / highHyd.length).toFixed(1)
      : null;
    const dehydratedWellbeing = lowHyd.length > 0
      ? +(lowHyd.reduce((s, p) => s + p.wellbeing, 0) / lowHyd.length).toFixed(1)
      : null;
    return { hasData: true, hydratedWellbeing, dehydratedWellbeing };
  }, [vitalityObservations, hydrationLogs]);

  // ── HANDLERS ──
  const handleSaveSleep = (e: React.FormEvent) => {
    e.preventDefault();
    addSleepRecord({
      date: sleepDateInput,
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
    logMealRecord(
      mealTypeInput, 
      mealDescInput.trim(), 
      mealNotesInput.trim() || undefined,
      mealDateInput,
      mealTimeInput
    );
    setMealDescInput('');
    setMealNotesInput('');
  };

  const handleSaveMovement = (e: React.FormEvent) => {
    e.preventDefault();
    const duration = parseInt(activityDurationInput, 10) || 30;
    addMovementActivity({
      date: movementDateInput,
      time: movementTimeInput,
      activityType: activityTypeInput,
      activityName: activityNameInput.trim() || `${activityTypeInput.charAt(0).toUpperCase() + activityTypeInput.slice(1)} Session`,
      durationMinutes: duration,
      intensity: activityIntensityInput,
      notes: activityNotesInput.trim() || undefined,
    });
    setActivityNameInput('');
    setActivityNotesInput('');
  };

  const handleSaveVitality = (e: React.FormEvent) => {
    e.preventDefault();
    addVitalityObservation({
      date: vitalityDateInput,
      energyLevel: energyLevelInput,
      wellbeing: wellbeingInput,
      restRecovery: restRecoveryInput,
      physicalReadiness: readinessInput,
      moodState: moodStateInput,
      notes: vitalityNotesInput.trim() || undefined
    });
    setVitalityNotesInput('');
  };

  const handleSaveTargets = () => {
    const hyd = parseInt(targetHydrationInput, 10);
    const slp = parseFloat(targetSleepInput);
    const mov = parseInt(targetMovementInput, 10);
    if (hyd >= 500 && hyd <= 10000) setHydrationTargetMl(hyd);
    if (slp >= 4 && slp <= 14) setSleepTargetHours(slp);
    if (mov >= 30 && mov <= 2000) setMovementWeeklyTargetMinutes(mov);
    setShowTargetsDrawer(false);
  };

  // Preview Sleep Duration
  const previewSleepDuration = useMemo(() => {
    const [bH, bM] = bedtimeInput.split(':').map(Number);
    const [wH, wM] = wakeTimeInput.split(':').map(Number);
    let startMin = bH * 60 + bM;
    let endMin = wH * 60 + wM;
    if (endMin <= startMin) endMin += 24 * 60;
    const diff = endMin - startMin;
    const hours = Math.floor(diff / 60);
    const mins = diff % 60;
    return `${hours}h ${mins}m`;
  }, [bedtimeInput, wakeTimeInput]);

  return (
    <div className="space-y-8 animate-fadeIn font-sans">
      {/* 1. Header & Safeguard Notice */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--card-border)] pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">
            <Heart className="w-3.5 h-3.5 text-cyan-400" />
            <span>Biological Foundation & Vitality</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Health & Vitality
          </h2>
          <p className="text-xs text-[var(--text-secondary)] mt-1">
            Gentle, non-restrictive biological telemetry: Restorative Sleep, Hydration, Mindful Nutrition, Movement & Energy.
          </p>
        </div>

        {/* Action Controls & Telemetry Badges */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => setShowTargetsDrawer(!showTargetsDrawer)}
            className="px-3 py-1.5 rounded-xl bg-[var(--pill-bg)] hover:bg-[var(--surface-bg)] border border-[var(--card-border)] text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center gap-1.5 transition-all"
          >
            <Sliders className="w-3.5 h-3.5 text-cyan-400" />
            <span>Edit Targets</span>
          </button>

          <div className="px-3 py-1.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-sans">
            <span className="text-[var(--text-muted)]">Hydration: </span>
            <span className="font-bold text-cyan-400 font-mono">{todayHydrationTotal} / {hydrationTargetMl}ml</span>
          </div>
          <div className="px-3 py-1.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-sans">
            <span className="text-[var(--text-muted)]">Sleep: </span>
            <span className="font-bold text-indigo-400 font-mono">
              {latestSleep ? `${Math.floor(latestSleep.durationMinutes / 60)}h ${latestSleep.durationMinutes % 60}m` : '0h 0m'}
            </span>
          </div>
          <div className="px-3 py-1.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-sans">
            <span className="text-[var(--text-muted)]">Energy: </span>
            <span className="font-bold text-amber-400 font-mono">
              {latestVitality ? `${latestVitality.energyLevel}/10` : '—'}
            </span>
          </div>
        </div>
      </div>

      {/* Medical Disclaimer Safeguard Banner */}
      <div className="p-3.5 rounded-2xl bg-cyan-950/20 border border-cyan-800/30 text-xs text-[var(--text-secondary)] flex items-start gap-3">
        <Info className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
        <div className="leading-relaxed">
          <strong className="text-[var(--text-primary)] font-medium">Personal Vitality Protocol: </strong>
          This system is an observational environment designed for personal self-attunement and habit consistency. It does not provide medical diagnoses or compulsory targets. All values, goals, and nutrition records are entirely optional and customizable.
        </div>
      </div>

      {/* Target Configuration Drawer / Panel */}
      {showTargetsDrawer && (
        <div className="p-5 rounded-3xl creamy-surface border border-cyan-500/30 space-y-4 animate-fadeIn">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-cyan-400" />
              <h3 className="text-sm font-semibold text-[var(--text-primary)]">Customizable Vitality Targets</h3>
            </div>
            <span className="text-xs text-[var(--text-muted)]">Personalized Baseline</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs text-[var(--text-muted)]">Daily Hydration Target (ml):</label>
              <input
                type="number"
                value={targetHydrationInput}
                onChange={(e) => setTargetHydrationInput(e.target.value)}
                min="500"
                max="10000"
                step="50"
                className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs text-[var(--text-muted)]">Daily Sleep Target (hours):</label>
              <input
                type="number"
                value={targetSleepInput}
                onChange={(e) => setTargetSleepInput(e.target.value)}
                min="4"
                max="14"
                step="0.25"
                className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs text-[var(--text-muted)]">Weekly Movement Target (mins):</label>
              <input
                type="number"
                value={targetMovementInput}
                onChange={(e) => setTargetMovementInput(e.target.value)}
                min="30"
                max="1500"
                step="15"
                className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              onClick={() => setShowTargetsDrawer(false)}
              className="px-4 py-1.5 rounded-xl text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveTargets}
              className="px-4 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition-colors"
            >
              Update Targets
            </button>
          </div>
        </div>
      )}

      {/* 2. System Sub-Navigation Tabs */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
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
          <button
            onClick={() => setActiveSubTab('energy')}
            className={`px-4 py-2 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all ${
              activeSubTab === 'energy'
                ? 'bg-[var(--surface-bg)] text-rose-400 shadow-sm'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Vitality & Energy</span>
          </button>
        </div>

        {/* Global Timeframe Toggle (7 Days vs 30 Days) */}
        <div className="flex items-center gap-1 p-1 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono">
          <button
            onClick={() => setTimeframe('7d')}
            className={`px-3 py-1 rounded-lg transition-all ${
              timeframe === '7d' 
                ? 'bg-[var(--surface-bg)] text-[var(--text-primary)] font-bold shadow-sm' 
                : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]'
            }`}
          >
            7 Days
          </button>
          <button
            onClick={() => setTimeframe('30d')}
            className={`px-3 py-1 rounded-lg transition-all ${
              timeframe === '30d' 
                ? 'bg-[var(--surface-bg)] text-[var(--text-primary)] font-bold shadow-sm' 
                : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]'
            }`}
          >
            30 Days
          </button>
        </div>
      </div>

      {/* 3. SUB-VIEW: OVERVIEW (Unified Vitality Cockpit) */}
      {activeSubTab === 'overview' && (
        <div className="space-y-6">
          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* 1. Sleep Quick Card */}
            <div 
              onClick={() => setActiveSubTab('sleep')}
              className="p-5 rounded-3xl creamy-surface space-y-3 cursor-pointer hover:border-indigo-500/40 transition-all group"
            >
              <div className="flex items-center justify-between pb-2 border-b border-[var(--card-border)]">
                <span className="text-xs font-semibold text-[var(--text-primary)] flex items-center gap-1.5">
                  <Moon className="w-4 h-4 text-indigo-400" /> Restorative Sleep
                </span>
                <span className="text-[10px] font-mono text-indigo-400 flex items-center gap-0.5">
                  <Star className="w-3 h-3 fill-indigo-400 text-indigo-400" /> {latestSleep ? `${latestSleep.quality}/5` : '—'}
                </span>
              </div>
              <div>
                <div className="text-2xl font-mono font-bold text-[var(--text-primary)]">
                  {latestSleep ? `${Math.floor(latestSleep.durationMinutes / 60)}h ${latestSleep.durationMinutes % 60}m` : '0h 0m'}
                </div>
                <p className="text-[11px] text-[var(--text-secondary)] mt-1">
                  {latestSleep ? `Bed ${latestSleep.bedtime} • Wake ${latestSleep.wakeTime}` : 'No sleep logged yet'}
                </p>
              </div>
              <div className="text-[11px] text-[var(--text-muted)] font-mono flex items-center justify-between">
                <span>Consistency:</span>
                <span className="text-indigo-400 font-bold">{sleepConsistency !== null ? `${sleepConsistency}% Regular` : 'Awaiting data'}</span>
              </div>
            </div>

            {/* 2. Hydration Quick Card */}
            <div 
              onClick={() => setActiveSubTab('hydration')}
              className="p-5 rounded-3xl creamy-surface space-y-3 cursor-pointer hover:border-cyan-500/40 transition-all group"
            >
              <div className="flex items-center justify-between pb-2 border-b border-[var(--card-border)]">
                <span className="text-xs font-semibold text-[var(--text-primary)] flex items-center gap-1.5">
                  <Droplet className="w-4 h-4 text-cyan-400" /> Cellular Hydration
                </span>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">{hydrationProgressPercent}%</span>
              </div>
              <div>
                <div className="text-2xl font-mono font-bold text-[var(--text-primary)]">
                  {todayHydrationTotal} <span className="text-xs font-normal text-[var(--text-muted)]">/ {hydrationTargetMl} ml</span>
                </div>
                <p className="text-[11px] text-[var(--text-secondary)] mt-1">
                  {timeframe === '7d' ? '7-day' : '30-day'} average: <strong className="text-cyan-400">{avgDailyHydration} ml</strong>
                </p>
              </div>
              <div className="w-full h-1.5 rounded-full bg-[var(--pill-bg)] overflow-hidden">
                <div className="h-full bg-cyan-400 rounded-full transition-all duration-300" style={{ width: `${hydrationProgressPercent}%` }} />
              </div>
            </div>

            {/* 3. Nutrition Quick Card */}
            <div 
              onClick={() => setActiveSubTab('nutrition')}
              className="p-5 rounded-3xl creamy-surface space-y-3 cursor-pointer hover:border-amber-500/40 transition-all group"
            >
              <div className="flex items-center justify-between pb-2 border-b border-[var(--card-border)]">
                <span className="text-xs font-semibold text-[var(--text-primary)] flex items-center gap-1.5">
                  <Utensils className="w-4 h-4 text-amber-400" /> Mindful Fuel
                </span>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">{mealsLoggedToday}/3 Main</span>
              </div>
              <div>
                <div className="text-2xl font-mono font-bold text-[var(--text-primary)]">
                  {todayMeals.length} <span className="text-xs font-normal text-[var(--text-muted)]">entries today</span>
                </div>
                <p className="text-[11px] text-[var(--text-secondary)] mt-1">
                  Gentle, nourishing & calorie-pressure-free
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                {(['breakfast', 'lunch', 'dinner', 'snack'] as const).map((meal) => {
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
                  <Dumbbell className="w-4 h-4 text-emerald-400" /> Physical Movement
                </span>
                <span className="text-[10px] font-mono text-emerald-400">{todayMovementMinutes}m today</span>
              </div>
              <div>
                <div className="text-2xl font-mono font-bold text-[var(--text-primary)]">
                  {weeklyMovementMinutes} <span className="text-xs font-normal text-[var(--text-muted)]">/ {movementWeeklyTargetMinutes}m week</span>
                </div>
                <p className="text-[11px] text-[var(--text-secondary)] mt-1">
                  Active sessions: <strong className="text-[var(--text-primary)]">{movementActivities.length} logs</strong>
                </p>
              </div>
              <div className="w-full h-1.5 rounded-full bg-[var(--pill-bg)] overflow-hidden">
                <div 
                  className="h-full bg-emerald-400 rounded-full" 
                  style={{ width: `${Math.min(100, (weeklyMovementMinutes / movementWeeklyTargetMinutes) * 100)}%` }} 
                />
              </div>
            </div>
          </div>

          {/* Cross-Telemetry Biological Rhythm Chart */}
          <div className="p-6 rounded-3xl creamy-surface space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)] flex-wrap gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-cyan-400" />
                  <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                    {timeframe === '7d' ? '7-Day' : '30-Day'} Biological Telemetry Rhythm
                  </h3>
                </div>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">
                  Hydration (ml), Sleep Duration (hours) and Movement (mins) calculated from verified logs
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" /> Hydration
                </span>
                <span className="flex items-center gap-1.5 text-indigo-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-400" /> Sleep
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" /> Movement
                </span>
              </div>
            </div>

            <div className={`grid ${timeframe === '7d' ? 'grid-cols-7' : 'grid-cols-10 sm:grid-cols-15 md:grid-cols-30'} gap-2 pt-4 overflow-x-auto`}>
              {timeframeDays.map((dateStr) => {
                const dayName = new Date(dateStr + 'T12:00:00Z').toLocaleDateString('en-US', { 
                  weekday: timeframe === '7d' ? 'short' : 'narrow' 
                });
                const dayNum = dateStr.slice(8);
                const hyd = hydrationLogs.filter((l) => l.date === dateStr).reduce((s, l) => s + l.amountMl, 0);
                const slp = sleepRecords.find((s) => s.date === dateStr);
                const slpHours = slp ? slp.durationMinutes / 60 : 0;
                const mov = movementActivities.filter((a) => a.date === dateStr).reduce((s, a) => s + a.durationMinutes, 0);

                const hydHeight = Math.min(100, Math.round((hyd / hydrationTargetMl) * 100));
                const slpHeight = Math.min(100, Math.round((slpHours / sleepTargetHours) * 100));
                const movHeight = Math.min(100, Math.round((mov / 60) * 100));

                return (
                  <div key={dateStr} className="flex flex-col items-center gap-1.5 min-w-[28px]">
                    <div className="w-full h-32 rounded-xl bg-[var(--pill-bg)] flex items-end justify-center p-1 gap-0.5 relative group">
                      {/* Hydration Bar */}
                      <div 
                        className="w-1/3 bg-cyan-400/80 rounded-sm transition-all group-hover:bg-cyan-400"
                        style={{ height: `${hydHeight}%` }}
                        title={`${dateStr} Hydration: ${hyd}ml`}
                      />
                      {/* Sleep Bar */}
                      <div 
                        className="w-1/3 bg-indigo-400/80 rounded-sm transition-all group-hover:bg-indigo-400"
                        style={{ height: `${slpHeight}%` }}
                        title={`${dateStr} Sleep: ${slpHours.toFixed(1)}h`}
                      />
                      {/* Movement Bar */}
                      <div 
                        className="w-1/3 bg-emerald-400/80 rounded-sm transition-all group-hover:bg-emerald-400"
                        style={{ height: `${movHeight}%` }}
                        title={`${dateStr} Movement: ${mov} mins`}
                      />
                    </div>
                    <span className="text-[10px] font-mono text-[var(--text-secondary)]">
                      {timeframe === '7d' ? dayName : dayNum}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cross-Metric Biological Correlations */}
          <div className="p-6 rounded-3xl creamy-surface space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
              <div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-amber-400" />
                  <h3 className="text-sm font-semibold text-[var(--text-primary)]">Biological Attunement & Correlation Matrix</h3>
                </div>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">
                  Calculated linkages between Rest, Cellular Hydration, and Daily Vitality
                </p>
              </div>
              <span className="text-xs font-mono text-[var(--text-secondary)]">Verified Insights</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Correlation 1: Sleep vs Energy */}
              <div className="p-4 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-[var(--text-primary)] flex items-center gap-1.5">
                    <Moon className="w-3.5 h-3.5 text-indigo-400" /> Sleep Duration → Next-Day Energy
                  </span>
                  <span className="text-[10px] font-mono text-indigo-400 uppercase font-bold">
                    {sleepEnergyCorrelation.hasData ? 'Strong Link' : 'Awaiting Data'}
                  </span>
                </div>
                {sleepEnergyCorrelation.hasData ? (
                  <>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      When you achieve <strong className="text-[var(--text-primary)]">&ge; 7.5 hours</strong> of sleep, your reported cognitive energy averages <strong className="text-indigo-400 font-mono">{sleepEnergyCorrelation.optimalSleepEnergy ?? '—'} / 10</strong> compared to <strong className="text-[var(--text-muted)] font-mono">{sleepEnergyCorrelation.suboptimalSleepEnergy ?? '—'} / 10</strong> on shorter nights.
                    </p>
                    <div className="flex items-center gap-3 pt-1 text-[11px] font-mono">
                      <div className="flex-1 p-2 rounded-xl bg-[var(--surface-bg)] border border-[var(--card-border)]">
                        <span className="text-[var(--text-muted)] block text-[10px]">Adequate Sleep (&ge;7.5h):</span>
                        <span className="text-indigo-400 font-bold">{sleepEnergyCorrelation.optimalSleepEnergy ?? '—'} / 10 Energy</span>
                      </div>
                      <div className="flex-1 p-2 rounded-xl bg-[var(--surface-bg)] border border-[var(--card-border)]">
                        <span className="text-[var(--text-muted)] block text-[10px]">Shorter Sleep (&lt;7.5h):</span>
                        <span className="text-[var(--text-secondary)] font-bold">{sleepEnergyCorrelation.suboptimalSleepEnergy ?? '—'} / 10 Energy</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed py-2">
                    Log at least 2 days of sleep records and vitality observations to unlock calculated biological correlations.
                  </p>
                )}
              </div>

              {/* Correlation 2: Hydration vs Wellbeing */}
              <div className="p-4 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-[var(--text-primary)] flex items-center gap-1.5">
                    <Droplet className="w-3.5 h-3.5 text-cyan-400" /> Hydration → General Wellbeing
                  </span>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold">
                    {hydrationWellbeingCorrelation.hasData ? 'Vital Attunement' : 'Awaiting Data'}
                  </span>
                </div>
                {hydrationWellbeingCorrelation.hasData ? (
                  <>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      Days with <strong className="text-[var(--text-primary)]">&ge; 2,000ml</strong> water intake correlate with a wellbeing rating of <strong className="text-cyan-400 font-mono">{hydrationWellbeingCorrelation.hydratedWellbeing ?? '—'} / 10</strong> versus <strong className="text-[var(--text-muted)] font-mono">{hydrationWellbeingCorrelation.dehydratedWellbeing ?? '—'} / 10</strong> during lower hydration days.
                    </p>
                    <div className="flex items-center gap-3 pt-1 text-[11px] font-mono">
                      <div className="flex-1 p-2 rounded-xl bg-[var(--surface-bg)] border border-[var(--card-border)]">
                        <span className="text-[var(--text-muted)] block text-[10px]">Optimal Water (&ge;2L):</span>
                        <span className="text-cyan-400 font-bold">{hydrationWellbeingCorrelation.hydratedWellbeing ?? '—'} / 10 Wellbeing</span>
                      </div>
                      <div className="flex-1 p-2 rounded-xl bg-[var(--surface-bg)] border border-[var(--card-border)]">
                        <span className="text-[var(--text-muted)] block text-[10px]">Low Water (&lt;2L):</span>
                        <span className="text-[var(--text-secondary)] font-bold">{hydrationWellbeingCorrelation.dehydratedWellbeing ?? '—'} / 10 Wellbeing</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed py-2">
                    Log at least 2 days of hydration entries and daily wellbeing check-ins to compute genuine hydration correlation.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. SUB-VIEW: SLEEP (Restorative Sleep Architecture) */}
      {activeSubTab === 'sleep' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Sleep Logger Form */}
            <form onSubmit={handleSaveSleep} className="lg:col-span-1 p-6 rounded-3xl creamy-surface space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
                <span className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
                  <Moon className="w-4 h-4 text-indigo-400" /> Log Sleep Session
                </span>
                <span className="text-xs font-mono text-indigo-400 font-bold">{previewSleepDuration}</span>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] text-[var(--text-muted)]">Date:</label>
                <input
                  type="date"
                  value={sleepDateInput}
                  onChange={(e) => setSleepDateInput(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
                />
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
                Save Sleep Record
              </button>
            </form>

            {/* Sleep Analytics & History */}
            <div className="lg:col-span-2 p-6 rounded-3xl creamy-surface space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)] flex-wrap gap-2">
                <div>
                  <h3 className="text-sm font-semibold text-[var(--text-primary)]">Sleep Regularity & Trends</h3>
                  <p className="text-xs text-[var(--text-muted)]">
                    {timeframe === '7d' ? '7-day' : '30-day'} average: <strong className="text-indigo-400">{avgSleepHours}h</strong> per night • Consistency: <strong className="text-indigo-400">{sleepConsistency !== null ? `${sleepConsistency}%` : '—'}</strong>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[var(--text-muted)]">Target: {sleepTargetHours}h</span>
                </div>
              </div>

              {/* Sleep Duration Bar Trend */}
              <div className="space-y-2">
                <span className="text-[11px] text-[var(--text-muted)] font-mono">Recent Sleep Duration (Hours):</span>
                <div className="flex items-end gap-1.5 h-24 bg-[var(--pill-bg)] p-2 rounded-2xl overflow-x-auto">
                  {sleepTrend.map((d) => {
                    const heightPct = Math.min(100, Math.round((d.hours / (sleepTargetHours * 1.25)) * 100));
                    return (
                      <div key={d.date} className="flex-1 flex flex-col items-center gap-1 group relative min-w-[20px]">
                        <div 
                          className="w-full bg-indigo-400/80 group-hover:bg-indigo-400 rounded-md transition-all"
                          style={{ height: `${heightPct}%` }}
                          title={`${d.date}: ${d.hours}h (${d.quality}★)`}
                        />
                        <span className="text-[9px] font-mono text-[var(--text-muted)]">{d.date.slice(8)}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Sleep History Ledger */}
              <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
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
                      className="text-[var(--text-muted)] hover:text-rose-400 p-1.5 transition-colors"
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

      {/* 5. SUB-VIEW: HYDRATION (Cellular Hydration Engine) */}
      {activeSubTab === 'hydration' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Quick Add Controls */}
            <div className="lg:col-span-1 p-6 rounded-3xl creamy-surface space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
                <span className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
                  <Droplet className="w-4 h-4 text-cyan-400" /> Log Water Intake
                </span>
                <span className="text-xs font-mono text-cyan-400 font-bold">Target: {hydrationTargetMl}ml</span>
              </div>

              {/* Serving Size Presets */}
              <div className="space-y-2">
                <span className="text-xs text-[var(--text-muted)]">Serving Size Presets:</span>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => addHydrationLog(250, 'glass_250', hydrationNotesInput || undefined)}
                    className="p-3 rounded-2xl bg-[var(--pill-bg)] hover:bg-cyan-500/20 border border-[var(--card-border)] hover:border-cyan-500/40 text-center transition-all group"
                  >
                    <span className="block text-sm font-mono font-bold text-[var(--text-primary)] group-hover:text-cyan-400">+250ml</span>
                    <span className="text-[10px] text-[var(--text-muted)]">Glass</span>
                  </button>
                  <button
                    onClick={() => addHydrationLog(500, 'bottle_500', hydrationNotesInput || undefined)}
                    className="p-3 rounded-2xl bg-[var(--pill-bg)] hover:bg-cyan-500/20 border border-[var(--card-border)] hover:border-cyan-500/40 text-center transition-all group"
                  >
                    <span className="block text-sm font-mono font-bold text-[var(--text-primary)] group-hover:text-cyan-400">+500ml</span>
                    <span className="text-[10px] text-[var(--text-muted)]">Bottle</span>
                  </button>
                  <button
                    onClick={() => addHydrationLog(750, 'flask_750', hydrationNotesInput || undefined)}
                    className="p-3 rounded-2xl bg-[var(--pill-bg)] hover:bg-cyan-500/20 border border-[var(--card-border)] hover:border-cyan-500/40 text-center transition-all group"
                  >
                    <span className="block text-sm font-mono font-bold text-[var(--text-primary)] group-hover:text-cyan-400">+750ml</span>
                    <span className="text-[10px] text-[var(--text-muted)]">Flask</span>
                  </button>
                </div>
              </div>

              {/* Custom Serving Size */}
              <div className="space-y-2 pt-2 border-t border-[var(--card-border)]">
                <span className="text-xs text-[var(--text-muted)]">Custom Serving Size:</span>
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={customHydrationMl}
                    onChange={(e) => setCustomHydrationMl(e.target.value)}
                    placeholder="e.g. 350"
                    step="50"
                    min="50"
                    className="w-24 px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
                  />
                  <button
                    onClick={() => {
                      const ml = parseInt(customHydrationMl, 10);
                      if (ml > 0) addHydrationLog(ml, 'custom', hydrationNotesInput || undefined);
                    }}
                    className="flex-1 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold transition-colors"
                  >
                    Add Custom Water
                  </button>
                </div>
              </div>

              {/* Optional Notes */}
              <div className="space-y-1.5 pt-2 border-t border-[var(--card-border)]">
                <label className="text-[11px] text-[var(--text-muted)]">Drink Notes (optional):</label>
                <input
                  type="text"
                  value={hydrationNotesInput}
                  onChange={(e) => setHydrationNotesInput(e.target.value)}
                  placeholder="e.g. Added electrolyte salt, lemon water"
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-sans text-[var(--text-primary)]"
                />
              </div>
            </div>

            {/* Hydration History Ledger & Trend */}
            <div className="lg:col-span-2 p-6 rounded-3xl creamy-surface space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)] flex-wrap gap-2">
                <div>
                  <h3 className="text-sm font-semibold text-[var(--text-primary)]">Intake Ledger & Progress</h3>
                  <p className="text-xs text-[var(--text-muted)]">
                    Today: {todayHydrationTotal}ml ({hydrationProgressPercent}% of target) • {timeframe === '7d' ? '7-day' : '30-day'} average: {avgDailyHydration}ml
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xl font-mono font-bold text-cyan-400">{todayHydrationTotal} ml</span>
                </div>
              </div>

              {todayHydrationLogs.length === 0 ? (
                <div className="py-8 text-center text-xs text-[var(--text-muted)]">
                  No water intake logged yet today. Use the presets on the left to record your hydration!
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
                            <span className="text-[10px] text-[var(--text-muted)] ml-2 capitalize">
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

      {/* 6. SUB-VIEW: NUTRITION (Mindful & Gentle Fuel) */}
      {activeSubTab === 'nutrition' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Meal Logger Form */}
            <form onSubmit={handleSaveMeal} className="lg:col-span-1 p-6 rounded-3xl creamy-surface space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
                <span className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
                  <Utensils className="w-4 h-4 text-amber-400" /> Log Meal / Snack
                </span>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">Gentle Tracking</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-[11px] text-[var(--text-muted)]">Date:</label>
                  <input
                    type="date"
                    value={mealDateInput}
                    onChange={(e) => setMealDateInput(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] text-[var(--text-muted)]">Time:</label>
                  <input
                    type="time"
                    value={mealTimeInput}
                    onChange={(e) => setMealTimeInput(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] text-[var(--text-muted)]">Meal Slot:</label>
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
                  placeholder="e.g. Quinoa bowl with roasted vegetables & salmon"
                  required
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-sans text-[var(--text-primary)]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] text-[var(--text-muted)]">Energy / Feeling Note (optional):</label>
                <input
                  type="text"
                  value={mealNotesInput}
                  onChange={(e) => setMealNotesInput(e.target.value)}
                  placeholder="e.g. Light, sustained afternoon focus, ate mindfully"
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

            {/* Meal History Ledger with Slot Filter */}
            <div className="lg:col-span-2 p-6 rounded-3xl creamy-surface space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)] flex-wrap gap-2">
                <div>
                  <h3 className="text-sm font-semibold text-[var(--text-primary)]">Mindful Food Ledger</h3>
                  <p className="text-xs text-[var(--text-muted)]">Zero calorie counting, zero compulsory restrictions</p>
                </div>

                {/* Slot Filter */}
                <div className="flex items-center gap-1">
                  {(['all', 'breakfast', 'lunch', 'dinner', 'snack'] as const).map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setMealFilter(filter)}
                      className={`px-2.5 py-1 rounded-lg text-[10px] capitalize font-mono transition-all ${
                        mealFilter === filter
                          ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                          : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
                {filteredMeals.map((meal) => {
                  const displayTime = meal.time || (meal.timestamp ? new Date(meal.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '');
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
                          {meal.date} • {displayTime}
                          {meal.notes && <span className="italic text-[var(--text-secondary)]"> — &ldquo;{meal.notes}&rdquo;</span>}
                        </p>
                      </div>

                      <button
                        onClick={() => deleteMealRecord(meal.id)}
                        className="text-[var(--text-muted)] hover:text-rose-400 p-1.5 transition-colors"
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

      {/* 7. SUB-VIEW: MOVEMENT (Physical Training & Activities) */}
      {activeSubTab === 'movement' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Activity Logger Form */}
            <form onSubmit={handleSaveMovement} className="lg:col-span-1 p-6 rounded-3xl creamy-surface space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
                <span className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
                  <Dumbbell className="w-4 h-4 text-emerald-400" /> Log Physical Activity
                </span>
                <span className="text-xs font-mono text-emerald-400 font-bold">{todayMovementMinutes}m today</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-[11px] text-[var(--text-muted)]">Date:</label>
                  <input
                    type="date"
                    value={movementDateInput}
                    onChange={(e) => setMovementDateInput(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] text-[var(--text-muted)]">Time:</label>
                  <input
                    type="time"
                    value={movementTimeInput}
                    onChange={(e) => setMovementTimeInput(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
                  />
                </div>
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
                <label className="text-[11px] text-[var(--text-muted)]">Workout / Session Name:</label>
                <input
                  type="text"
                  value={activityNameInput}
                  onChange={(e) => setActivityNameInput(e.target.value)}
                  placeholder="e.g. Pull-ups & Core, 5km Aerobic Run"
                  required
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-sans text-[var(--text-primary)]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-[11px] text-[var(--text-muted)]">Duration (Mins):</label>
                  <input
                    type="number"
                    value={activityDurationInput}
                    onChange={(e) => setActivityDurationInput(e.target.value)}
                    min="5"
                    max="360"
                    required
                    className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] text-[var(--text-muted)]">Intensity:</label>
                  <select
                    value={activityIntensityInput}
                    onChange={(e) => setActivityIntensityInput(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)] capitalize"
                  >
                    <option value="light">Light</option>
                    <option value="moderate">Moderate</option>
                    <option value="high">High</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] text-[var(--text-muted)]">Notes (optional):</label>
                <input
                  type="text"
                  value={activityNotesInput}
                  onChange={(e) => setActivityNotesInput(e.target.value)}
                  placeholder="e.g. Felt powerful, zone 2 aerobic breathing"
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
              <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)] flex-wrap gap-2">
                <div>
                  <h3 className="text-sm font-semibold text-[var(--text-primary)]">Movement Ledger & Modality</h3>
                  <p className="text-xs text-[var(--text-muted)]">
                    Total: {totalTimeframeMovementMinutes} mins in {timeframe === '7d' ? '7 days' : '30 days'} • Target: {movementWeeklyTargetMinutes}m/week
                  </p>
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
                        {act.intensity && (
                          <span className="px-2 py-0.5 rounded-md bg-[var(--surface-bg)] text-[var(--text-muted)] font-mono text-[10px] capitalize">
                            {act.intensity}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-[var(--text-muted)] mt-0.5">
                        {act.date} {act.time ? `• ${act.time}` : ''} • <span className="capitalize">{act.activityType}</span>
                        {act.notes && <span className="italic text-[var(--text-secondary)]"> — &ldquo;{act.notes}&rdquo;</span>}
                      </p>
                    </div>

                    <button
                      onClick={() => deleteMovementActivity(act.id)}
                      className="text-[var(--text-muted)] hover:text-rose-400 p-1.5 transition-colors"
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

      {/* 8. SUB-VIEW: ENERGY & VITALITY (Observations & Daily Check-In) */}
      {activeSubTab === 'energy' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Daily Check-In Form */}
            <form onSubmit={handleSaveVitality} className="lg:col-span-1 p-6 rounded-3xl creamy-surface space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
                <span className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" /> Daily Vitality Check-In
                </span>
                <span className="text-xs font-mono text-amber-400 font-bold">{energyLevelInput}/10 Energy</span>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] text-[var(--text-muted)]">Date:</label>
                <input
                  type="date"
                  value={vitalityDateInput}
                  onChange={(e) => setVitalityDateInput(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
                />
              </div>

              {/* Sliders for Vitality Metrics */}
              <div className="space-y-3 pt-1">
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-[var(--text-muted)]">Cognitive Energy Level:</span>
                    <span className="font-mono text-amber-400 font-bold">{energyLevelInput} / 10</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={energyLevelInput}
                    onChange={(e) => setEnergyLevelInput(Number(e.target.value))}
                    className="w-full accent-amber-400"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-[var(--text-muted)]">General Wellbeing:</span>
                    <span className="font-mono text-cyan-400 font-bold">{wellbeingInput} / 10</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={wellbeingInput}
                    onChange={(e) => setWellbeingInput(Number(e.target.value))}
                    className="w-full accent-cyan-400"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-[var(--text-muted)]">Rest & Recovery Attunement:</span>
                    <span className="font-mono text-indigo-400 font-bold">{restRecoveryInput} / 10</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={restRecoveryInput}
                    onChange={(e) => setRestRecoveryInput(Number(e.target.value))}
                    className="w-full accent-indigo-400"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-[var(--text-muted)]">Physical Readiness:</span>
                    <span className="font-mono text-emerald-400 font-bold">{readinessInput} / 10</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={readinessInput}
                    onChange={(e) => setReadinessInput(Number(e.target.value))}
                    className="w-full accent-emerald-400"
                  />
                </div>
              </div>

              {/* Mood State Pills */}
              <div className="space-y-1.5 pt-2 border-t border-[var(--card-border)]">
                <label className="text-[11px] text-[var(--text-muted)]">Predominant Mental State:</label>
                <div className="grid grid-cols-3 gap-1.5">
                  {(['energized', 'focused', 'calm', 'balanced', 'tired', 'stressed'] as const).map((mood) => (
                    <button
                      type="button"
                      key={mood}
                      onClick={() => setMoodStateInput(mood)}
                      className={`py-1.5 rounded-xl text-xs font-medium capitalize border transition-all ${
                        moodStateInput === mood
                          ? 'bg-amber-500/20 border-amber-500/40 text-amber-400'
                          : 'bg-[var(--pill-bg)] border-[var(--card-border)] text-[var(--text-secondary)]'
                      }`}
                    >
                      {mood}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] text-[var(--text-muted)]">Daily Observations & Attunement:</label>
                <input
                  type="text"
                  value={vitalityNotesInput}
                  onChange={(e) => setVitalityNotesInput(e.target.value)}
                  placeholder="e.g. Sharp morning clarity, felt refreshed after sunrise walk"
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-sans text-[var(--text-primary)]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs transition-colors"
              >
                Log Vitality Check-In
              </button>
            </form>

            {/* Vitality Observations Ledger */}
            <div className="lg:col-span-2 p-6 rounded-3xl creamy-surface space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
                <div>
                  <h3 className="text-sm font-semibold text-[var(--text-primary)]">Vitality & State Ledger</h3>
                  <p className="text-xs text-[var(--text-muted)]">Average reported cognitive energy: {avgVitalityEnergy} / 10</p>
                </div>
                <span className="text-xs font-mono text-[var(--text-muted)]">{vitalityObservations.length} logs recorded</span>
              </div>

              <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
                {vitalityObservations.length === 0 ? (
                  <div className="py-8 text-center text-xs text-[var(--text-muted)] font-mono">
                    No vitality observations logged yet. Submit a check-in on the left to track energy and wellbeing.
                  </div>
                ) : (
                  vitalityObservations.map((obs) => (
                    <div key={obs.id} className="p-4 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-semibold text-[var(--text-primary)] text-xs">{obs.date}</span>
                        <span className="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-400 font-mono text-[10px] uppercase font-bold">
                          {obs.moodState}
                        </span>
                      </div>
                      <button
                        onClick={() => deleteVitalityObservation(obs.id)}
                        className="text-[var(--text-muted)] hover:text-rose-400 p-1 transition-colors"
                        title="Delete log"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-4 gap-2 text-center text-xs">
                      <div className="p-2 rounded-xl bg-[var(--surface-bg)] border border-[var(--card-border)]">
                        <span className="text-[10px] text-[var(--text-muted)] block">Energy</span>
                        <span className="font-mono font-bold text-amber-400">{obs.energyLevel}/10</span>
                      </div>
                      <div className="p-2 rounded-xl bg-[var(--surface-bg)] border border-[var(--card-border)]">
                        <span className="text-[10px] text-[var(--text-muted)] block">Wellbeing</span>
                        <span className="font-mono font-bold text-cyan-400">{obs.wellbeing}/10</span>
                      </div>
                      <div className="p-2 rounded-xl bg-[var(--surface-bg)] border border-[var(--card-border)]">
                        <span className="text-[10px] text-[var(--text-muted)] block">Recovery</span>
                        <span className="font-mono font-bold text-indigo-400">{obs.restRecovery}/10</span>
                      </div>
                      <div className="p-2 rounded-xl bg-[var(--surface-bg)] border border-[var(--card-border)]">
                        <span className="text-[10px] text-[var(--text-muted)] block">Readiness</span>
                        <span className="font-mono font-bold text-emerald-400">{obs.physicalReadiness}/10</span>
                      </div>
                    </div>

                    {obs.notes && (
                      <p className="text-xs text-[var(--text-secondary)] italic pt-1">
                        &ldquo;{obs.notes}&rdquo;
                      </p>
                    )}
                  </div>
                ))
              )}
            </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
