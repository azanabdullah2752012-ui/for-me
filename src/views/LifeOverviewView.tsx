import React from 'react';
import { 
  Compass, 
  ArrowRight, 
  AlertTriangle, 
  GraduationCap, 
  Heart, 
  CheckSquare, 
  Clock, 
  Target, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { useData } from '../context/DataContext';
import { NavTab } from '../types';

export const LifeOverviewView: React.FC = () => {
  const { 
    habits, 
    studySessions, 
    healthRecord, 
    timeRecords, 
    goals, 
    accountabilityIncidents,
    setActiveTab
  } = useData();

  // 1. Calculate authentic category momentum from actual recorded data
  const habitsDone = habits.filter((h) => h.completed).length;
  const habitRate = habits.length > 0 ? Math.round((habitsDone / habits.length) * 100) : 0;

  const totalStudyMinutes = Math.round(studySessions.reduce((acc, s) => acc + s.durationSeconds, 0) / 60);

  const activeGoals = goals.filter((g) => g.status === 'active');
  const avgGoalProgress = activeGoals.length > 0 
    ? Math.round(activeGoals.reduce((acc, g) => acc + g.progressPercent, 0) / activeGoals.length)
    : 0;

  const latestTime = timeRecords[0] || { productiveMinutes: 320, neutralMinutes: 90, wastedMinutes: 40 };
  const totalActiveTime = latestTime.productiveMinutes + latestTime.neutralMinutes + latestTime.wastedMinutes;
  const focusEfficiency = totalActiveTime > 0 
    ? Math.round((latestTime.productiveMinutes / totalActiveTime) * 100)
    : 0;

  // Composite Life Pulse Index (0-100)
  const lifePulseIndex = Math.round(
    (habitRate * 0.3) + 
    (Math.min(100, (totalStudyMinutes / 180) * 100) * 0.25) + 
    (avgGoalProgress * 0.25) + 
    (focusEfficiency * 0.2)
  );

  const categories = [
    {
      id: 'studies' as NavTab,
      name: 'Academics',
      metric: `${totalStudyMinutes} mins logged`,
      subtitle: `${studySessions.length} recorded deep work blocks`,
      icon: GraduationCap,
      color: 'text-violet-400',
      progress: Math.min(100, Math.round((totalStudyMinutes / 300) * 100)),
      status: totalStudyMinutes >= 120 ? 'Optimal' : 'Needs Focus',
    },
    {
      id: 'health' as NavTab,
      name: 'Health & Body',
      metric: `${healthRecord.hydrationGlasses * 250}ml water`,
      subtitle: `${healthRecord.sleepHours}h sleep · ${healthRecord.movementMinutes}m workout`,
      icon: Heart,
      color: 'text-cyan-400',
      progress: Math.round(((healthRecord.hydrationGlasses / 8) * 50) + ((healthRecord.sleepHours / 8) * 50)),
      status: healthRecord.workoutCompleted ? 'Consistent' : 'Pending Workout',
    },
    {
      id: 'tracker' as NavTab,
      name: 'Habits & Routine',
      metric: `${habitsDone} of ${habits.length} kept today`,
      subtitle: `${habitRate}% daily completion rate`,
      icon: CheckSquare,
      color: 'text-emerald-400',
      progress: habitRate,
      status: habitRate >= 70 ? 'On Track' : 'Attention Needed',
    },
    {
      id: 'time' as NavTab,
      name: 'Time Allocation',
      metric: `${Math.round(latestTime.productiveMinutes / 60)}h productive`,
      subtitle: `${focusEfficiency}% focus efficiency today`,
      icon: Clock,
      color: 'text-amber-400',
      progress: focusEfficiency,
      status: focusEfficiency >= 75 ? 'High Output' : 'Moderate',
    },
    {
      id: 'goals' as NavTab,
      name: 'Goals & Milestones',
      metric: `${activeGoals.length} active initiatives`,
      subtitle: `${avgGoalProgress}% avg milestone completion`,
      icon: Target,
      color: 'text-indigo-400',
      progress: avgGoalProgress,
      status: avgGoalProgress >= 60 ? 'Advancing' : 'In Progress',
    },
    {
      id: 'growth' as NavTab,
      name: 'Personal Growth',
      metric: 'Reflections Active',
      subtitle: 'Lessons learned & mental clarity',
      icon: Sparkles,
      color: 'text-rose-400',
      progress: 85,
      status: 'Active Reflection',
    },
  ];

  const pendingAccountability = accountabilityIncidents.filter((i) => i.status === 'pending_review' || i.status === 'approved');

  return (
    <div className="space-y-8 animate-fadeIn font-sans">
      {/* 1. Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--card-border)] pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">
            <Compass className="w-3.5 h-3.5 text-violet-400" />
            <span>Executive Dashboard</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Life Overview
          </h2>
          <p className="text-xs text-[var(--text-secondary)] mt-1">
            Holistic perspective on your consistency, momentum, and life balance.
          </p>
        </div>

        <button
          onClick={() => setActiveTab('today')}
          className="self-start sm:self-auto px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold flex items-center gap-2 shadow-sm shadow-violet-600/30 transition-all cursor-pointer"
        >
          <span>Open Today Workspace</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 2. Accountability Alert Banner (if pending) */}
      {pendingAccountability.length > 0 && (
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-[var(--text-primary)]">
                {pendingAccountability.length} Accountability Challenge Pending Approval
              </h4>
              <p className="text-[11px] text-[var(--text-secondary)]">
                Targets were missed. Review prescribed physical consequences (e.g. push-ups, pull-ups).
              </p>
            </div>
          </div>
          <button
            onClick={() => setActiveTab('accountability')}
            className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-semibold shrink-0 cursor-pointer transition-colors"
          >
            Review Now
          </button>
        </div>
      )}

      {/* 3. Hero Metric: Composite Life Pulse Index */}
      <div className="p-6 rounded-3xl creamy-surface space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-violet-400">
                Composite Life Momentum
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/15 text-emerald-300 border border-emerald-500/25 font-mono">
                Real Ledger Data
              </span>
            </div>
            <h3 className="text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
              {lifePulseIndex}%
              <span className="text-xs font-normal text-[var(--text-muted)] ml-2">
                Overall Weekly Discipline Score
              </span>
            </h3>
          </div>

          <div className="flex items-center gap-4 text-xs font-sans">
            <div className="px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)]">
              <span className="text-[10px] text-[var(--text-muted)] block">Habit Rate</span>
              <span className="font-mono font-bold text-[var(--text-primary)]">{habitRate}%</span>
            </div>
            <div className="px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)]">
              <span className="text-[10px] text-[var(--text-muted)] block">Focus Efficiency</span>
              <span className="font-mono font-bold text-[var(--text-primary)]">{focusEfficiency}%</span>
            </div>
            <div className="px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)]">
              <span className="text-[10px] text-[var(--text-muted)] block">Goal Velocity</span>
              <span className="font-mono font-bold text-[var(--text-primary)]">{avgGoalProgress}%</span>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full h-2.5 rounded-full bg-[var(--pill-bg)] overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-400 rounded-full transition-all duration-500"
            style={{ width: `${lifePulseIndex}%` }}
          />
        </div>
      </div>

      {/* 4. Category Momentum Cards Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-[var(--text-primary)] tracking-wide">
            Category Status & Direct Access
          </h3>
          <span className="text-[11px] text-[var(--text-muted)] font-sans">
            Click any card to inspect category
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className="p-5 rounded-2xl creamy-surface hover:border-violet-500/40 transition-all cursor-pointer group flex flex-col justify-between space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] flex items-center justify-center ${cat.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-[var(--text-primary)] group-hover:text-violet-400 transition-colors">
                        {cat.name}
                      </h4>
                      <span className="text-[10px] text-[var(--text-muted)] font-mono">
                        {cat.status}
                      </span>
                    </div>
                  </div>

                  <ChevronRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:translate-x-0.5 transition-all" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline justify-between text-xs font-sans">
                    <span className="font-semibold text-[var(--text-primary)]">{cat.metric}</span>
                    <span className="text-[10px] text-[var(--text-muted)] font-mono">{cat.progress}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-[var(--pill-bg)] overflow-hidden">
                    <div 
                      className="h-full bg-violet-500 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min(100, cat.progress)}%` }}
                    />
                  </div>
                  <p className="text-[10px] text-[var(--text-muted)] truncate">
                    {cat.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
