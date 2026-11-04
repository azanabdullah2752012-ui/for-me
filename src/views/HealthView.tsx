import React from 'react';
import { useData } from '../context/DataContext';
import { 
  Droplet, 
  Moon, 
  Dumbbell, 
  Plus, 
  Minus, 
  Heart, 
  Utensils, 
  Check, 
  Star
} from 'lucide-react';

export const HealthView: React.FC = () => {
  const { 
    hydration, 
    setHydration, 
    sleepHours, 
    sleepMinutes, 
    setSleep, 
    healthRecord,
    updateHealthRecord
  } = useData();

  const handleMealToggle = (meal: 'breakfast' | 'lunch' | 'dinner' | 'mindfulEating') => {
    updateHealthRecord({
      meals: {
        ...healthRecord.meals,
        [meal]: !healthRecord.meals[meal],
      }
    });
  };

  const mealsCount = [
    healthRecord.meals.breakfast, 
    healthRecord.meals.lunch, 
    healthRecord.meals.dinner
  ].filter(Boolean).length;

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
            Daily physical telemetry: restorative sleep, hydration, clean nutrition, and movement.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-3.5 py-1.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-sans">
            <span className="text-[var(--text-muted)]">Water: </span>
            <span className="font-bold text-cyan-400 font-mono">{hydration * 250}ml</span>
          </div>
          <div className="px-3.5 py-1.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-sans">
            <span className="text-[var(--text-muted)]">Sleep: </span>
            <span className="font-bold text-indigo-400 font-mono">{sleepHours}h {sleepMinutes}m</span>
          </div>
        </div>
      </div>

      {/* 2. Core Pillars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Hydration */}
        <div className="p-6 rounded-3xl creamy-surface space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[var(--card-border)]">
            <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)]">
              <Droplet className="w-4 h-4 text-cyan-400" />
              <span>Hydration</span>
            </div>
            <span className="text-[10px] font-mono text-[var(--text-muted)]">Target: 2,000ml</span>
          </div>

          <div>
            <div className="text-4xl font-mono font-bold text-[var(--text-primary)] leading-none">
              {hydration} <span className="text-sm font-normal text-[var(--text-muted)]">/ 8 glasses</span>
            </div>
            <div className="text-xs text-cyan-400 font-mono mt-1.5">
              {hydration * 250}ml logged today
            </div>
          </div>

          {/* Visual progress bar */}
          <div className="w-full h-2 rounded-full bg-[var(--pill-bg)] overflow-hidden">
            <div 
              className="h-full bg-cyan-400 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(100, (hydration / 8) * 100)}%` }}
            />
          </div>

          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={() => setHydration((prev) => Math.max(0, prev - 1))}
              className="p-2.5 bg-[var(--pill-bg)] hover:bg-white/[0.08] text-[var(--text-primary)] rounded-xl border border-[var(--card-border)] transition-colors cursor-pointer"
              title="Decrease"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setHydration((prev) => prev + 1)}
              className="flex-1 py-2.5 bg-cyan-500/20 border border-cyan-400/30 hover:bg-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 transition-all font-sans cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" /> Add Glass (250ml)
            </button>
          </div>
        </div>

        {/* Sleep Architecture */}
        <div className="p-6 rounded-3xl creamy-surface space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[var(--card-border)]">
            <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)]">
              <Moon className="w-4 h-4 text-indigo-400" />
              <span>Sleep Duration & Quality</span>
            </div>
            <span className="text-[10px] font-mono text-[var(--text-muted)]">Target: 7.5h</span>
          </div>

          <div>
            <div className="text-4xl font-mono font-bold text-[var(--text-primary)] leading-none">
              {sleepHours}h {sleepMinutes}m
            </div>
            <div className="flex items-center gap-1 mt-2">
              <span className="text-xs text-[var(--text-muted)] mr-1">Quality:</span>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => updateHealthRecord({ sleepQuality: star })}
                  className="p-0.5 cursor-pointer"
                >
                  <Star 
                    className={`w-3.5 h-3.5 ${star <= healthRecord.sleepQuality ? 'text-amber-400 fill-amber-400' : 'text-zinc-500'}`} 
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={() => setSleep(Math.max(4, sleepHours - 1), sleepMinutes)}
              className="p-2.5 bg-[var(--pill-bg)] hover:bg-white/[0.08] text-[var(--text-primary)] rounded-xl border border-[var(--card-border)] transition-colors cursor-pointer"
              title="Minus 1 hour"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setSleep(Math.min(12, sleepHours + 1), sleepMinutes)}
              className="flex-1 py-2.5 bg-indigo-500/20 border border-indigo-400/30 hover:bg-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 transition-all font-sans cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" /> Add Hour
            </button>
          </div>
        </div>

        {/* Physical Movement & Workouts */}
        <div className="p-6 rounded-3xl creamy-surface space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[var(--card-border)]">
            <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)]">
              <Dumbbell className="w-4 h-4 text-emerald-400" />
              <span>Movement & Training</span>
            </div>
            <span className="text-[10px] font-mono text-[var(--text-muted)]">Target: 45m+</span>
          </div>

          <div>
            <div className="text-4xl font-mono font-bold text-[var(--text-primary)] leading-none">
              {healthRecord.movementMinutes}m
            </div>
            <div className="text-xs text-[var(--text-muted)] font-sans mt-1.5 truncate">
              {healthRecord.workoutType || 'Calisthenics / Movement'}
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={() => updateHealthRecord({ movementMinutes: Math.max(0, healthRecord.movementMinutes - 15) })}
              className="p-2.5 bg-[var(--pill-bg)] hover:bg-white/[0.08] text-[var(--text-primary)] rounded-xl border border-[var(--card-border)] transition-colors cursor-pointer"
            >
              -15m
            </button>
            <button
              onClick={() => updateHealthRecord({ 
                movementMinutes: healthRecord.movementMinutes + 15,
                workoutCompleted: true 
              })}
              className="flex-1 py-2.5 bg-emerald-500/20 border border-emerald-400/30 hover:bg-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 transition-all font-sans cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" /> +15m Session
            </button>
          </div>
        </div>
      </div>

      {/* 3. Nutrition & Clean Fuel Tracker */}
      <div className="p-6 rounded-3xl creamy-surface space-y-4">
        <div className="flex items-center justify-between border-b border-[var(--card-border)] pb-3">
          <div className="flex items-center gap-2">
            <Utensils className="w-4 h-4 text-amber-400" />
            <h3 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider">
              Daily Nutrition & Meal Consistency
            </h3>
          </div>
          <span className="text-xs font-mono font-bold text-amber-400">
            {mealsCount}/3 Meals Consistently Fuelled
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
          <button
            onClick={() => handleMealToggle('breakfast')}
            className={`p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
              healthRecord.meals.breakfast
                ? 'bg-amber-500/15 border-amber-500/30 text-[var(--text-primary)]'
                : 'bg-[var(--pill-bg)] border-[var(--card-border)] text-[var(--text-secondary)]'
            }`}
          >
            <div>
              <span className="text-xs font-semibold block">Breakfast</span>
              <span className="text-[10px] text-[var(--text-muted)] font-mono">Nutrient dense</span>
            </div>
            {healthRecord.meals.breakfast && <Check className="w-4 h-4 text-amber-400" />}
          </button>

          <button
            onClick={() => handleMealToggle('lunch')}
            className={`p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
              healthRecord.meals.lunch
                ? 'bg-amber-500/15 border-amber-500/30 text-[var(--text-primary)]'
                : 'bg-[var(--pill-bg)] border-[var(--card-border)] text-[var(--text-secondary)]'
            }`}
          >
            <div>
              <span className="text-xs font-semibold block">Lunch</span>
              <span className="text-[10px] text-[var(--text-muted)] font-mono">Midday sustain</span>
            </div>
            {healthRecord.meals.lunch && <Check className="w-4 h-4 text-amber-400" />}
          </button>

          <button
            onClick={() => handleMealToggle('dinner')}
            className={`p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
              healthRecord.meals.dinner
                ? 'bg-amber-500/15 border-amber-500/30 text-[var(--text-primary)]'
                : 'bg-[var(--pill-bg)] border-[var(--card-border)] text-[var(--text-secondary)]'
            }`}
          >
            <div>
              <span className="text-xs font-semibold block">Dinner</span>
              <span className="text-[10px] text-[var(--text-muted)] font-mono">Recovery meal</span>
            </div>
            {healthRecord.meals.dinner && <Check className="w-4 h-4 text-amber-400" />}
          </button>

          <button
            onClick={() => handleMealToggle('mindfulEating')}
            className={`p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
              healthRecord.meals.mindfulEating
                ? 'bg-emerald-500/15 border-emerald-500/30 text-[var(--text-primary)]'
                : 'bg-[var(--pill-bg)] border-[var(--card-border)] text-[var(--text-secondary)]'
            }`}
          >
            <div>
              <span className="text-xs font-semibold block">Mindful Fasting / Fuel</span>
              <span className="text-[10px] text-[var(--text-muted)] font-mono">No junk / binge</span>
            </div>
            {healthRecord.meals.mindfulEating && <Check className="w-4 h-4 text-emerald-400" />}
          </button>
        </div>
      </div>
    </div>
  );
};
