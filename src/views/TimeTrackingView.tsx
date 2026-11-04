import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { 
  Clock, 
  Zap, 
  AlertCircle, 
  Plus, 
  Trash2, 
  PieChart, 
  ListFilter
} from 'lucide-react';
import { TimeLogEntry } from '../types';

export const TimeTrackingView: React.FC = () => {
  const { 
    timeRecords, 
    timeLogs, 
    addTimeLog, 
    deleteTimeLog, 
    logTimeRecord 
  } = useData();

  const [activeTab, setActiveTab] = useState<'cockpit' | 'log_activity' | 'ledger' | 'screen_time'>('cockpit');

  // Form states for adding individual activity block
  const [actName, setActName] = useState('');
  const [actCategory, setActCategory] = useState<TimeLogEntry['category']>('productive');
  const [actDurationMins, setActDurationMins] = useState('60');
  const [actNotes, setActNotes] = useState('');

  // Daily screen time update
  const [screenTimeInput, setScreenTimeInput] = useState('6.5');
  const [screenNoteInput, setScreenNoteInput] = useState('');

  const todayStr = new Date().toISOString().slice(0, 10);
  const todayRecord = timeRecords.find((r) => r.date === todayStr) || {
    date: todayStr,
    productiveMinutes: 320,
    neutralMinutes: 90,
    wastedMinutes: 40,
    screenTimeHours: 6.5,
    distractionNotes: 'Brief distraction in afternoon'
  };

  const totalActiveMinutes = todayRecord.productiveMinutes + todayRecord.neutralMinutes + todayRecord.wastedMinutes || 1;
  const productivePct = Math.round((todayRecord.productiveMinutes / totalActiveMinutes) * 100);
  const neutralPct = Math.round((todayRecord.neutralMinutes / totalActiveMinutes) * 100);
  const wastedPct = Math.round((todayRecord.wastedMinutes / totalActiveMinutes) * 100);
  const focusEfficiency = productivePct;

  // 7-day average calculations
  const past7DaysRecords = timeRecords.slice(0, 7);
  const avgProductiveHours = past7DaysRecords.length > 0 
    ? +(past7DaysRecords.reduce((sum, r) => sum + r.productiveMinutes, 0) / (past7DaysRecords.length * 60)).toFixed(1)
    : 5.5;

  const avgScreenTimeHours = past7DaysRecords.length > 0
    ? +(past7DaysRecords.reduce((sum, r) => sum + r.screenTimeHours, 0) / past7DaysRecords.length).toFixed(1)
    : 6.5;

  const handleAddLog = (e: React.FormEvent) => {
    e.preventDefault();
    const mins = parseInt(actDurationMins, 10);
    if (!actName.trim() || !mins) return;
    addTimeLog({
      date: todayStr,
      activityName: actName.trim(),
      category: actCategory,
      durationMinutes: mins,
      notes: actNotes.trim() || undefined,
    });
    setActName('');
    setActNotes('');
    setActiveTab('cockpit');
  };

  const handleUpdateScreenTime = (e: React.FormEvent) => {
    e.preventDefault();
    const hrs = parseFloat(screenTimeInput);
    if (isNaN(hrs)) return;
    logTimeRecord({
      ...todayRecord,
      screenTimeHours: hrs,
      distractionNotes: screenNoteInput.trim() || todayRecord.distractionNotes,
    });
    setActiveTab('cockpit');
  };

  return (
    <div className="space-y-8 animate-fadeIn font-sans">
      {/* 1. Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--card-border)] pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Resource Accounting</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Time Audit & Allocation
          </h2>
          <p className="text-xs text-[var(--text-secondary)] mt-1">
            Transparent resource telemetry: productive focus, maintenance, idle leakage, and screen time.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-3.5 py-1.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-sans">
            <span className="text-[var(--text-muted)]">Focus Efficiency: </span>
            <span className="font-bold font-mono text-emerald-400">{focusEfficiency}%</span>
          </div>
          <div className="px-3.5 py-1.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-sans">
            <span className="text-[var(--text-muted)]">Screen: </span>
            <span className="font-bold font-mono text-amber-400">{todayRecord.screenTimeHours}h</span>
          </div>
        </div>
      </div>

      {/* 2. Sub-Tabs */}
      <div className="flex items-center gap-2 p-1 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)]">
        <button
          onClick={() => setActiveTab('cockpit')}
          className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
            activeTab === 'cockpit' ? 'bg-[var(--surface-bg)] text-amber-400 shadow-sm' : 'text-[var(--text-secondary)]'
          }`}
        >
          Daily Cockpit
        </button>
        <button
          onClick={() => setActiveTab('log_activity')}
          className={`px-4 py-2 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all ${
            activeTab === 'log_activity' ? 'bg-[var(--surface-bg)] text-emerald-400 shadow-sm' : 'text-[var(--text-secondary)]'
          }`}
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Log Activity Block</span>
        </button>
        <button
          onClick={() => setActiveTab('ledger')}
          className={`px-4 py-2 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all ${
            activeTab === 'ledger' ? 'bg-[var(--surface-bg)] text-cyan-400 shadow-sm' : 'text-[var(--text-secondary)]'
          }`}
        >
          <ListFilter className="w-3.5 h-3.5" />
          <span>Activity Ledger ({timeLogs.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('screen_time')}
          className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
            activeTab === 'screen_time' ? 'bg-[var(--surface-bg)] text-amber-400 shadow-sm' : 'text-[var(--text-secondary)]'
          }`}
        >
          Screen Time & Notes
        </button>
      </div>

      {/* 3. SUB-TAB: COCKPIT */}
      {activeTab === 'cockpit' && (
        <div className="space-y-6">
          {/* Top Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="p-6 rounded-3xl creamy-surface space-y-2">
              <div className="flex items-center justify-between text-xs font-medium text-[var(--text-muted)]">
                <span>Productive Focus</span>
                <Zap className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-3xl font-bold font-mono text-emerald-400">
                {(todayRecord.productiveMinutes / 60).toFixed(1)}h
              </div>
              <span className="text-xs text-[var(--text-secondary)] font-mono">
                {productivePct}% of active day • 7d avg {avgProductiveHours}h
              </span>
            </div>

            <div className="p-6 rounded-3xl creamy-surface space-y-2">
              <div className="flex items-center justify-between text-xs font-medium text-[var(--text-muted)]">
                <span>Neutral Maintenance</span>
                <Clock className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="text-3xl font-bold font-mono text-cyan-400">
                {(todayRecord.neutralMinutes / 60).toFixed(1)}h
              </div>
              <span className="text-xs text-[var(--text-secondary)] font-mono">
                {neutralPct}% of active day
              </span>
            </div>

            <div className="p-6 rounded-3xl creamy-surface space-y-2">
              <div className="flex items-center justify-between text-xs font-medium text-[var(--text-muted)]">
                <span>Unproductive Leakage</span>
                <AlertCircle className="w-4 h-4 text-rose-400" />
              </div>
              <div className="text-3xl font-bold font-mono text-rose-400">
                {todayRecord.wastedMinutes}m
              </div>
              <span className="text-xs text-[var(--text-secondary)] font-mono">
                {wastedPct}% of active day
              </span>
            </div>
          </div>

          {/* Allocation Spectrum Bar */}
          <div className="p-6 rounded-3xl creamy-surface space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
              <span className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
                <PieChart className="w-4 h-4 text-amber-400" /> Today&apos;s Allocation Distribution
              </span>
              <span className="text-xs font-mono text-[var(--text-muted)]">
                Total Accounted: {Math.floor(totalActiveMinutes / 60)}h {totalActiveMinutes % 60}m
              </span>
            </div>

            <div className="w-full h-4 rounded-full bg-[var(--pill-bg)] overflow-hidden flex">
              <div className="h-full bg-emerald-400 transition-all duration-300" style={{ width: `${productivePct}%` }} title={`Productive: ${productivePct}%`} />
              <div className="h-full bg-cyan-400 transition-all duration-300" style={{ width: `${neutralPct}%` }} title={`Neutral: ${neutralPct}%`} />
              <div className="h-full bg-rose-400 transition-all duration-300" style={{ width: `${wastedPct}%` }} title={`Unproductive: ${wastedPct}%`} />
            </div>

            <div className="flex items-center justify-between text-xs font-mono pt-1">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" /> Productive ({productivePct}%)
              </span>
              <span className="flex items-center gap-1.5 text-cyan-400">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" /> Neutral ({neutralPct}%)
              </span>
              <span className="flex items-center gap-1.5 text-rose-400">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400" /> Unproductive ({wastedPct}%)
              </span>
            </div>

            {todayRecord.distractionNotes && (
              <div className="p-3.5 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-secondary)]">
                <span className="font-semibold text-rose-400">Distraction Record: </span>
                <span>&ldquo;{todayRecord.distractionNotes}&rdquo;</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 4. SUB-TAB: LOG ACTIVITY BLOCK */}
      {activeTab === 'log_activity' && (
        <form onSubmit={handleAddLog} className="max-w-xl p-6 rounded-3xl creamy-surface space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
            <h3 className="text-sm font-semibold text-[var(--text-primary)]">Log Specific Time Block</h3>
            <span className="text-[10px] font-mono text-[var(--text-muted)]">Automatic Day Total Sync</span>
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] text-[var(--text-muted)]">Activity Description:</label>
            <input
              type="text"
              value={actName}
              onChange={(e) => setActName(e.target.value)}
              placeholder="e.g. Distributed Consensus Architecture Design, Social Media Drift"
              required
              className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-[11px] text-[var(--text-muted)]">Classification:</label>
              <select
                value={actCategory}
                onChange={(e) => setActCategory(e.target.value as any)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
              >
                <option value="productive">Productive Focus</option>
                <option value="neutral">Neutral / Maintenance</option>
                <option value="unproductive">Unproductive / Distraction</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] text-[var(--text-muted)]">Duration (Minutes):</label>
              <input
                type="number"
                value={actDurationMins}
                onChange={(e) => setActDurationMins(e.target.value)}
                min="5"
                max="480"
                required
                className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] text-[var(--text-muted)]">Notes (optional):</label>
            <input
              type="text"
              value={actNotes}
              onChange={(e) => setActNotes(e.target.value)}
              placeholder="e.g. Uninterrupted state, phone in another room"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs transition-colors"
          >
            Add Time Block
          </button>
        </form>
      )}

      {/* 5. SUB-TAB: ACTIVITY LEDGER */}
      {activeTab === 'ledger' && (
        <div className="p-6 rounded-3xl creamy-surface space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
            <div>
              <h3 className="text-sm font-semibold text-[var(--text-primary)]">Individual Activity Ledger</h3>
              <p className="text-xs text-[var(--text-muted)]">{timeLogs.length} logged time blocks</p>
            </div>
          </div>

          <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
            {timeLogs.map((log) => {
              const timeStr = new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
              const catColors = {
                productive: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
                neutral: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
                unproductive: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
              };

              return (
                <div key={log.id} className="flex items-center justify-between p-3.5 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[var(--text-primary)]">{log.activityName}</span>
                      <span className={`px-2 py-0.5 rounded-md border font-mono text-[10px] uppercase font-bold ${catColors[log.category]}`}>
                        {log.category}
                      </span>
                      <span className="font-mono text-[var(--text-muted)] text-[11px]">{log.durationMinutes}m</span>
                    </div>
                    <p className="text-[11px] text-[var(--text-muted)] mt-1">
                      {log.date} • {timeStr}
                      {log.notes && <span className="italic text-[var(--text-secondary)]"> — &ldquo;{log.notes}&rdquo;</span>}
                    </p>
                  </div>

                  <button
                    onClick={() => deleteTimeLog(log.id)}
                    className="text-[var(--text-muted)] hover:text-rose-400 p-1 transition-colors"
                    title="Delete log"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 6. SUB-TAB: SCREEN TIME & DISTRACTIONS */}
      {activeTab === 'screen_time' && (
        <form onSubmit={handleUpdateScreenTime} className="max-w-xl p-6 rounded-3xl creamy-surface space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
            <h3 className="text-sm font-semibold text-[var(--text-primary)]">Update Daily Screen Time</h3>
            <span className="text-[10px] font-mono text-[var(--text-muted)]">7-Day Avg: {avgScreenTimeHours}h</span>
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] text-[var(--text-muted)]">Screen Time Hours (Today):</label>
            <input
              type="number"
              step="0.1"
              value={screenTimeInput}
              onChange={(e) => setScreenTimeInput(e.target.value)}
              required
              className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] text-[var(--text-muted)]">Distraction Notes / Triggers:</label>
            <input
              type="text"
              value={screenNoteInput}
              onChange={(e) => setScreenNoteInput(e.target.value)}
              placeholder="e.g. Lost focus during news check, improved after putting phone away"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs transition-colors"
          >
            Save Screen Time
          </button>
        </form>
      )}
    </div>
  );
};
