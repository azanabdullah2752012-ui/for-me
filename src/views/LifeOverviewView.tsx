import React, { useState } from 'react';
import { 
  Compass, 
  ArrowRight, 
  GraduationCap, 
  Heart, 
  CheckSquare, 
  Clock, 
  Target, 
  Sparkles,
  ChevronRight,
  TrendingUp,
  Activity,
  Sliders,
  Droplet,
  Dumbbell
} from 'lucide-react';
import { useData } from '../context/DataContext';
import { NavTab } from '../types';

export const LifeOverviewView: React.FC = () => {
  const { 
    habits, 
    studySessions, 
    hydrationLogs,
    hydrationTargetMl,
    sleepRecords,
    movementActivities,
    timeRecords, 
    goals, 
    growthRatings,
    setActiveTab
  } = useData();

  const [showScoreBreakdown, setShowScoreBreakdown] = useState(false);

  const todayStr = new Date().toISOString().slice(0, 10);

  // 1. Authentic category metrics from actual recorded records
  const habitsDone = habits.filter((h) => h.completed).length;
  const habitRate = habits.length > 0 ? Math.round((habitsDone / habits.length) * 100) : 0;

  // Study hours past 7 days
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  const weekSessions = studySessions.filter((s) => new Date(s.timestamp) >= sevenDaysAgo);
  const weekStudyMinutes = weekSessions.reduce((acc, s) => acc + Math.round(s.durationSeconds / 60), 0);
  const weekStudyHours = (weekStudyMinutes / 60).toFixed(1);

  // Today's hydration & sleep
  const todayHydration = hydrationLogs.filter((l) => l.date === todayStr).reduce((s, l) => s + l.amountMl, 0);
  const hydrationPct = Math.min(100, Math.round((todayHydration / hydrationTargetMl) * 100));

  const latestSleep = sleepRecords[0] || null;
  const sleepHoursFormatted = latestSleep ? (latestSleep.durationMinutes / 60).toFixed(1) : '0.0';

  // Today's movement
  const todayMovement = movementActivities.filter((a) => a.date === todayStr).reduce((s, a) => s + a.durationMinutes, 0);

  // Goals
  const activeGoals = goals.filter((g) => g.status === 'active');
  const avgGoalProgress = activeGoals.length > 0 
    ? Math.round(activeGoals.reduce((acc, g) => acc + g.progressPercent, 0) / activeGoals.length)
    : 0;

  // Time allocation
  const latestTime = timeRecords[0] || null;
  const totalActiveTime = latestTime ? (latestTime.productiveMinutes + latestTime.neutralMinutes + latestTime.wastedMinutes) : 0;
  const focusEfficiency = totalActiveTime > 0 && latestTime ? Math.round((latestTime.productiveMinutes / totalActiveTime) * 100) : 0;

  // Transparent, non-arbitrary Composite Momentum Index
  const compositeIndex = Math.round(
    (habitRate * 0.25) + 
    (Math.min(100, (parseFloat(weekStudyHours) / 15) * 100) * 0.25) + 
    (hydrationPct * 0.15) + 
    (avgGoalProgress * 0.20) + 
    (focusEfficiency * 0.15)
  );

  const categories = [
    {
      id: 'studies' as NavTab,
      name: 'Academics & Study',
      metric: `${weekStudyHours}h past 7 days`,
      subtitle: `${studySessions.length} verified sessions logged`,
      icon: GraduationCap,
      color: 'text-violet-400',
      bgColor: 'bg-violet-500/10',
      progress: Math.min(100, Math.round((parseFloat(weekStudyHours) / 15) * 100)),
      status: parseFloat(weekStudyHours) >= 10 ? 'High Momentum' : 'Active Progress',
    },
    {
      id: 'health' as NavTab,
      name: 'Health & Vitality',
      metric: `${todayHydration}ml water · ${sleepHoursFormatted}h sleep`,
      subtitle: `${todayMovement}m movement logged today`,
      icon: Heart,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      progress: Math.round((hydrationPct * 0.5) + (Math.min(100, (parseFloat(sleepHoursFormatted) / 8) * 100) * 0.5)),
      status: todayMovement > 0 ? 'Nourished & Active' : 'Resting Baseline',
    },
    {
      id: 'tracker' as NavTab,
      name: 'Habits & Routine',
      metric: `${habitsDone} of ${habits.length} kept today`,
      subtitle: `${habitRate}% daily completion rate`,
      icon: CheckSquare,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      progress: habitRate,
      status: habitRate >= 60 ? 'Consistent Rhythm' : 'Building Rhythm',
    },
    {
      id: 'time' as NavTab,
      name: 'Time Allocation',
      metric: latestTime ? `${(latestTime.productiveMinutes / 60).toFixed(1)}h productive focus` : '0.0h productive focus',
      subtitle: `${focusEfficiency}% focus efficiency`,
      icon: Clock,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10',
      progress: focusEfficiency,
      status: focusEfficiency >= 70 ? 'High Efficiency' : 'Steady Output',
    },
    {
      id: 'goals' as NavTab,
      name: 'Goals & Milestones',
      metric: `${activeGoals.length} active initiatives`,
      subtitle: `${avgGoalProgress}% avg milestone completion`,
      icon: Target,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      progress: avgGoalProgress,
      status: avgGoalProgress >= 50 ? 'Strong Execution' : 'Active Progress',
    },
    {
      id: 'growth' as NavTab,
      name: 'Personal Growth',
      metric: `${growthRatings.length} reflections logged`,
      subtitle: growthRatings.length > 0 ? `Happiness: ${growthRatings[0].happinessRating}/10 · Agency: ${growthRatings[0].confidenceRating}/10` : 'No reflections logged yet',
      icon: Sparkles,
      color: 'text-rose-400',
      bgColor: 'bg-rose-500/10',
      progress: growthRatings.length > 0 ? (growthRatings[0].happinessRating * 10) : 0,
      status: growthRatings.length > 0 ? 'Introspective Flow' : 'Awaiting Reflection',
    },
  ];

  // Areas receiving less attention
  const areasNeedingAttention = [];
  if (todayHydration < 1000) {
    areasNeedingAttention.push({
      tab: 'health' as NavTab,
      title: 'Hydration Target',
      desc: `Only ${todayHydration}ml recorded today out of your ${hydrationTargetMl}ml target.`,
      action: 'Log Water',
    });
  }
  if (todayMovement === 0) {
    areasNeedingAttention.push({
      tab: 'health' as NavTab,
      title: 'Movement & Mobility',
      desc: 'No physical movement or mobility session recorded yet today.',
      action: 'Log Workout',
    });
  }
  if (habitsDone < Math.ceil(habits.length / 2)) {
    areasNeedingAttention.push({
      tab: 'tracker' as NavTab,
      title: 'Habit Non-Negotiables',
      desc: `${habits.length - habitsDone} habits remain unchecked for today.`,
      action: 'Check Habits',
    });
  }

  return (
    <div className="space-y-8 animate-fadeIn font-sans">
      {/* 1. Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--card-border)] pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">
            <Compass className="w-3.5 h-3.5 text-violet-400" />
            <span>Macro Life Telemetry</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Life Overview & Trajectory
          </h2>
          <p className="text-xs text-[var(--text-secondary)] mt-1">
            High-level telemetry synthesized directly from your verified logs across all categories.
          </p>
        </div>

        <button
          onClick={() => setActiveTab('today')}
          className="self-start sm:self-auto px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold flex items-center gap-2 shadow-sm transition-all cursor-pointer"
        >
          <span>Open Today Workspace</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 2. Transparent Composite Momentum Cockpit */}
      <div className="p-6 rounded-3xl creamy-surface space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] flex items-center justify-center font-mono font-bold text-2xl text-[var(--text-primary)] shadow-sm">
              {compositeIndex}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm text-[var(--text-primary)]">
                  Life Momentum Composite
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Calculated from Real Logs
                </span>
              </div>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">
                Multi-category weighted synthesis: habits (25%), studies (25%), goals (20%), time (15%), hydration (15%).
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowScoreBreakdown(!showScoreBreakdown)}
            className="text-xs text-violet-400 hover:underline flex items-center gap-1 font-mono self-start sm:self-auto cursor-pointer"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>{showScoreBreakdown ? 'Hide Formula' : 'View Formula'}</span>
          </button>
        </div>

        {/* Formula Breakdown Drawer */}
        {showScoreBreakdown && (
          <div className="p-4 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs font-mono text-[var(--text-secondary)]">
            <div>
              <span className="block text-[var(--text-muted)] text-[10px]">Habits (25%)</span>
              <strong className="text-emerald-400">{habitRate}%</strong>
            </div>
            <div>
              <span className="block text-[var(--text-muted)] text-[10px]">Academics (25%)</span>
              <strong className="text-violet-400">{weekStudyHours}h / 15h</strong>
            </div>
            <div>
              <span className="block text-[var(--text-muted)] text-[10px]">Goals (20%)</span>
              <strong className="text-indigo-400">{avgGoalProgress}%</strong>
            </div>
            <div>
              <span className="block text-[var(--text-muted)] text-[10px]">Time Focus (15%)</span>
              <strong className="text-amber-400">{focusEfficiency}%</strong>
            </div>
            <div>
              <span className="block text-[var(--text-muted)] text-[10px]">Hydration (15%)</span>
              <strong className="text-cyan-400">{hydrationPct}%</strong>
            </div>
          </div>
        )}
      </div>

      {/* 3. Category Momentum Cards (Click to Drill Down) */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[var(--text-muted)] font-mono gap-1">
          <span>CATEGORY PERFORMANCE & MOMENTUM</span>
          <span className="text-[11px] sm:text-xs">CLICK ANY CARD TO OPEN DEEP TRACKER →</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className="p-5 rounded-3xl creamy-surface space-y-4 cursor-pointer hover:border-violet-500/40 hover:scale-[1.01] transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-8 h-8 rounded-xl ${cat.bgColor} flex items-center justify-center ${cat.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-xs text-[var(--text-primary)]">{cat.name}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors" />
                </div>

                <div>
                  <div className="text-lg font-bold font-mono text-[var(--text-primary)]">{cat.metric}</div>
                  <div className="text-[11px] text-[var(--text-muted)] mt-0.5">{cat.subtitle}</div>
                </div>

                <div className="space-y-1.5 pt-1 border-t border-[var(--card-border)]">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-[var(--text-muted)]">Progress</span>
                    <span className="font-bold text-[var(--text-primary)]">{cat.progress}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-[var(--pill-bg)] overflow-hidden">
                    <div
                      className="h-full bg-violet-600 rounded-full transition-all duration-300"
                      style={{ width: `${cat.progress}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-mono text-violet-400 block pt-0.5">
                    Status: {cat.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Attention & Gentle Improvements */}
      {areasNeedingAttention.length > 0 && (
        <div className="p-6 rounded-3xl creamy-surface space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-cyan-400" />
              <h3 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider">
                Gentle Improvement Opportunities ({areasNeedingAttention.length})
              </h3>
            </div>
            <span className="text-[10px] font-mono text-[var(--text-muted)]">Constructive Recommendations</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {areasNeedingAttention.map((area, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] space-y-2">
                <span className="font-semibold text-xs text-[var(--text-primary)] block">{area.title}</span>
                <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">{area.desc}</p>
                <button
                  onClick={() => setActiveTab(area.tab)}
                  className="text-xs text-cyan-400 hover:underline font-medium pt-1 flex items-center gap-1 cursor-pointer"
                >
                  <span>{area.action}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. Recent Verified Activity Feed */}
      <div className="p-6 rounded-3xl creamy-surface space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <h3 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider">
              Recent Activity Feed (Interconnected Logs)
            </h3>
          </div>
          <span className="text-xs font-mono text-[var(--text-muted)]">Past 24 Hours</span>
        </div>

        <div className="space-y-2.5 text-xs">
          {hydrationLogs.slice(0, 2).map((h) => (
            <div key={h.id} className="flex items-center justify-between p-3 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)]">
              <span className="flex items-center gap-2">
                <Droplet className="w-3.5 h-3.5 text-cyan-400" />
                <span>Hydration logged: <strong>{h.amountMl}ml</strong> ({h.container})</span>
              </span>
              <span className="font-mono text-[10px] text-[var(--text-muted)]">{h.date}</span>
            </div>
          ))}

          {studySessions.slice(0, 2).map((s) => (
            <div key={s.id} className="flex items-center justify-between p-3 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)]">
              <span className="flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5 text-violet-400" />
                <span>Study block recorded: <strong>{s.subject}</strong> ({Math.round(s.durationSeconds / 60)} mins)</span>
              </span>
              <span className="font-mono text-[10px] text-[var(--text-muted)]">{s.timestamp.slice(0, 10)}</span>
            </div>
          ))}

          {movementActivities.slice(0, 1).map((m) => (
            <div key={m.id} className="flex items-center justify-between p-3 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)]">
              <span className="flex items-center gap-2">
                <Dumbbell className="w-3.5 h-3.5 text-emerald-400" />
                <span>Movement logged: <strong>{m.activityName}</strong> ({m.durationMinutes} mins)</span>
              </span>
              <span className="font-mono text-[10px] text-[var(--text-muted)]">{m.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
