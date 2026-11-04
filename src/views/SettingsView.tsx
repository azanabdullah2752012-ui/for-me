import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { 
  Download, 
  Upload, 
  Check, 
  Settings, 
  Sliders, 
  Plus, 
  Trash2, 
  Sun, 
  Moon
} from 'lucide-react';
import { CustomTracker } from '../types';

export const SettingsView: React.FC = () => {
  const { 
    profile, 
    setProfile, 
    exportDataBackup, 
    importDataBackup,
    appTheme,
    setAppTheme,
    customTrackers,
    customTrackerRecords,
    addCustomTracker,
    deleteCustomTracker,
    updateCustomTracker,
    logCustomTrackerValue
  } = useData();

  const [name, setName] = useState(profile.name);
  const [motto, setMotto] = useState(profile.motto);
  const [importJson, setImportJson] = useState('');
  const [showImportBox, setShowImportBox] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState('');

  // Custom Tracker Form state
  const [trackerName, setTrackerName] = useState('');
  const [trackerCategory, setTrackerCategory] = useState<CustomTracker['category']>('health');
  const [trackerUnit, setTrackerUnit] = useState('reps');
  const [trackerTarget, setTrackerTarget] = useState(50);
  const [trackerInputType, setTrackerInputType] = useState<CustomTracker['inputType']>('number');
  const [trackerFrequency, setTrackerFrequency] = useState<'daily' | 'weekly'>('daily');
  const [showTrackerModal, setShowTrackerModal] = useState(false);

  const handleSaveProfile = () => {
    setProfile((prev) => ({
      ...prev,
      name: name.trim() || 'Azan',
      motto: motto.trim() || 'Discipline today. Freedom tomorrow.',
    }));
    setFeedbackMsg('Profile preferences updated.');
    setTimeout(() => setFeedbackMsg(''), 2500);
  };

  const handleCreateTracker = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackerName.trim()) {
      addCustomTracker({
        name: trackerName.trim(),
        category: trackerCategory,
        unit: trackerUnit.trim() || 'units',
        target: Number(trackerTarget),
        inputType: trackerInputType,
        frequency: trackerFrequency,
        enabled: true,
      });
      setTrackerName('');
      setShowTrackerModal(false);
      setFeedbackMsg('Custom tracker successfully created.');
      setTimeout(() => setFeedbackMsg(''), 2500);
    }
  };

  const handleExport = () => {
    const jsonStr = exportDataBackup();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `for-me-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setFeedbackMsg('Ledger backup downloaded successfully.');
    setTimeout(() => setFeedbackMsg(''), 2500);
  };

  const handleImport = () => {
    if (!importJson.trim()) return;
    const success = importDataBackup(importJson.trim());
    if (success) {
      setFeedbackMsg('Ledger state successfully restored from backup.');
      setShowImportBox(false);
      setImportJson('');
    } else {
      alert('Invalid backup JSON format. Please verify the file contents.');
    }
    setTimeout(() => setFeedbackMsg(''), 2500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn font-sans">
      {/* 1. Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--card-border)] pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">
            <Settings className="w-3.5 h-3.5 text-violet-400" />
            <span>System Governance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Settings & Custom Tracker Studio
          </h2>
          <p className="text-xs text-[var(--text-secondary)] mt-1">
            Personal identity, custom metric creation, theme selection, and non-destructive backups.
          </p>
        </div>

        <button
          onClick={() => setShowTrackerModal(true)}
          className="self-start sm:self-auto px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold flex items-center gap-2 shadow-sm transition-all cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>New Custom Tracker</span>
        </button>
      </div>

      {feedbackMsg && (
        <div className="p-3 bg-emerald-500/15 border border-emerald-500/30 rounded-xl text-xs text-emerald-300 flex items-center gap-2 font-sans">
          <Check className="w-4 h-4 text-emerald-400" /> {feedbackMsg}
        </div>
      )}

      {/* 2. Theme Selection (Light vs Dark) */}
      <div className="p-6 rounded-3xl creamy-surface space-y-4">
        <div className="flex items-center justify-between border-b border-[var(--card-border)] pb-3">
          <h3 className="text-xs font-sans uppercase tracking-[0.16em] text-[var(--text-primary)] font-semibold">
            Interface Theme Engine
          </h3>
          <span className="text-xs font-mono text-violet-400 font-bold capitalize">
            {appTheme === 'light' ? 'Creamy Light' : 'Obsidian Dark'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={() => setAppTheme('dark')}
            className={`p-4 rounded-2xl border text-left flex items-start gap-3.5 transition-all cursor-pointer ${
              appTheme === 'dark'
                ? 'bg-violet-600/20 border-violet-500 text-white shadow-lg shadow-violet-600/15 ring-1 ring-violet-400'
                : 'bg-[var(--pill-bg)] border-[var(--card-border)] text-[var(--text-secondary)] hover:bg-white/[0.04]'
            }`}
          >
            <div className="w-9 h-9 rounded-xl bg-black/60 border border-white/[0.15] flex items-center justify-center text-violet-300 shrink-0">
              <Moon className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold block text-white">Obsidian Dark Theme</span>
              <span className="text-[11px] text-zinc-400 block mt-0.5 leading-relaxed">
                Deep space charcoal, starlight frosted glass, and low-fatigue night telemetry.
              </span>
            </div>
          </button>

          <button
            onClick={() => setAppTheme('light')}
            className={`p-4 rounded-2xl border text-left flex items-start gap-3.5 transition-all cursor-pointer ${
              appTheme === 'light'
                ? 'bg-violet-600/20 border-violet-500 text-zinc-900 shadow-lg shadow-violet-600/15 ring-1 ring-violet-400'
                : 'bg-[var(--pill-bg)] border-[var(--card-border)] text-[var(--text-secondary)] hover:bg-white/[0.04]'
            }`}
          >
            <div className="w-9 h-9 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-600 shrink-0">
              <Sun className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold block text-[var(--text-primary)]">Creamy Light Theme</span>
              <span className="text-[11px] text-[var(--text-muted)] block mt-0.5 leading-relaxed">
                Warm cream alabaster surfaces, refined milk-glass panels, and crisp legible slate text.
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* 3. Custom Trackers Studio */}
      <div className="p-6 rounded-3xl creamy-surface space-y-4">
        <div className="flex items-center justify-between border-b border-[var(--card-border)] pb-3">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-violet-400" />
            <h3 className="text-xs font-sans uppercase tracking-[0.16em] text-[var(--text-primary)] font-semibold">
              Custom Tracker Pool ({customTrackers.length})
            </h3>
          </div>
          <span className="text-xs text-[var(--text-muted)] font-mono">User-Defined Metrics</span>
        </div>

        <div className="space-y-3">
          {customTrackers.map((ct) => {
            const trackerRecords = customTrackerRecords.filter((r) => r.trackerId === ct.id);
            return (
              <div
                key={ct.id}
                className="p-4 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] space-y-3 text-xs"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1 truncate">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[var(--text-primary)]">{ct.name}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--surface-bg)] text-[var(--text-muted)] uppercase border border-[var(--card-border)]">
                        {ct.category}
                      </span>
                      <span className="text-[10px] font-mono text-violet-400 font-bold">
                        Target: {ct.target} {ct.unit} ({ct.frequency})
                      </span>
                    </div>
                    <p className="text-[11px] text-[var(--text-muted)]">
                      Current Value: <strong className="text-[var(--text-primary)] font-mono">{ct.currentValue} {ct.unit}</strong> · Control: {ct.inputType} · Status: {ct.enabled ? 'Active' : 'Disabled'}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => updateCustomTracker(ct.id, { enabled: !ct.enabled })}
                      className={`px-3 py-1 rounded-xl text-[11px] font-semibold border transition-colors cursor-pointer ${
                        ct.enabled
                          ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                          : 'bg-zinc-500/15 text-zinc-400 border-zinc-500/30'
                      }`}
                    >
                      {ct.enabled ? 'Enabled' : 'Disabled'}
                    </button>
                    <button
                      onClick={() => deleteCustomTracker(ct.id)}
                      className="p-1.5 text-[var(--text-muted)] hover:text-rose-400 transition-colors cursor-pointer"
                      title="Delete tracker"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Inline Quick Log */}
                <div className="flex items-center gap-2 pt-2 border-t border-[var(--card-border)]">
                  <span className="text-[11px] text-[var(--text-muted)]">Log Entry:</span>
                  <input
                    type="number"
                    placeholder={`Val (${ct.unit})`}
                    defaultValue={ct.currentValue}
                    id={`log_input_${ct.id}`}
                    className="w-24 px-2.5 py-1 rounded-lg bg-[var(--surface-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
                  />
                  <button
                    onClick={() => {
                      const input = document.getElementById(`log_input_${ct.id}`) as HTMLInputElement;
                      if (input && input.value) {
                        logCustomTrackerValue(ct.id, Number(input.value));
                      }
                    }}
                    className="px-3 py-1 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-[11px] font-semibold"
                  >
                    Record
                  </button>
                  {trackerRecords.length > 0 && (
                    <span className="text-[10px] font-mono text-[var(--text-muted)] ml-auto">
                      {trackerRecords.length} historical logs
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Profile Details */}
      <div className="p-6 rounded-3xl creamy-surface space-y-4">
        <h3 className="text-xs font-sans uppercase tracking-[0.16em] text-[var(--text-primary)] font-semibold pb-2 border-b border-[var(--card-border)]">
          Profile & Presence
        </h3>

        <div className="space-y-3 font-sans text-xs">
          <div>
            <label className="block text-[var(--text-muted)] mb-1">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[var(--pill-bg)] border border-[var(--card-border)] rounded-xl px-3.5 py-2 text-[var(--text-primary)] focus:outline-none focus:border-violet-400 font-sans"
            />
          </div>

          <div>
            <label className="block text-[var(--text-muted)] mb-1">Guiding Motto / Core Intention</label>
            <input
              type="text"
              value={motto}
              onChange={(e) => setMotto(e.target.value)}
              className="w-full bg-[var(--pill-bg)] border border-[var(--card-border)] rounded-xl px-3.5 py-2 text-[var(--text-primary)] focus:outline-none focus:border-violet-400 font-sans"
            />
          </div>

          <button
            onClick={handleSaveProfile}
            className="px-5 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-all shadow-sm cursor-pointer"
          >
            Save Profile
          </button>
        </div>
      </div>

      {/* 5. Data Backup Export & Safe Import (Conditions 3 & 4) */}
      <div className="p-6 rounded-3xl creamy-surface space-y-4">
        <h3 className="text-xs font-sans uppercase tracking-[0.16em] text-[var(--text-primary)] font-semibold pb-2 border-b border-[var(--card-border)]">
          Data Ledger Integrity & Migration
        </h3>

        <div className="space-y-3 font-sans text-xs">
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Your data is saved safely in local storage under key <code className="text-violet-400 font-mono">for_me_ledger_state_v2</code>. You can export a full JSON snapshot at any time or restore an existing backup file.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={handleExport}
              className="px-4 py-2 bg-[var(--pill-bg)] hover:bg-white/[0.08] text-[var(--text-primary)] rounded-xl border border-[var(--card-border)] flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-violet-400" /> Export JSON Backup
            </button>

            <button
              onClick={() => setShowImportBox(!showImportBox)}
              className="px-4 py-2 bg-[var(--pill-bg)] hover:bg-white/[0.08] text-[var(--text-primary)] rounded-xl border border-[var(--card-border)] flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Upload className="w-3.5 h-3.5 text-cyan-400" /> Restore from JSON
            </button>
          </div>

          {showImportBox && (
            <div className="space-y-3 pt-3 border-t border-[var(--card-border)]">
              <label className="block text-[var(--text-muted)]">Paste JSON Backup Content Below:</label>
              <textarea
                rows={5}
                value={importJson}
                onChange={(e) => setImportJson(e.target.value)}
                placeholder='{"version": "3.0.0", "profile": { ... }}'
                className="w-full bg-[var(--pill-bg)] border border-[var(--card-border)] rounded-xl p-3 font-mono text-[11px] text-[var(--text-primary)] focus:outline-none focus:border-cyan-400"
              />
              <button
                onClick={handleImport}
                className="px-5 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-bold uppercase tracking-wider text-[11px] transition-all cursor-pointer"
              >
                Execute Safe Restore
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal: Create Custom Tracker */}
      {showTrackerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowTrackerModal(false)} />
          <div className="relative z-10 w-full max-w-md p-6 rounded-3xl creamy-surface space-y-4 shadow-2xl">
            <h3 className="text-base font-semibold text-[var(--text-primary)]">Create Custom Tracker</h3>
            <form onSubmit={handleCreateTracker} className="space-y-3 text-xs">
              <div>
                <label className="text-[var(--text-muted)] block mb-1">Tracker Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Pull-ups, Pages Read, Meditation, Cold Showers..."
                  value={trackerName}
                  onChange={(e) => setTrackerName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-[var(--text-primary)]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[var(--text-muted)] block mb-1">Category</label>
                  <select
                    value={trackerCategory}
                    onChange={(e) => setTrackerCategory(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-[var(--text-primary)]"
                  >
                    <option value="health" className="bg-[#121326] text-white">Health & Body</option>
                    <option value="academics" className="bg-[#121326] text-white">Academics</option>
                    <option value="habits" className="bg-[#121326] text-white">Habits</option>
                    <option value="growth" className="bg-[#121326] text-white">Personal Growth</option>
                    <option value="time" className="bg-[#121326] text-white">Time</option>
                    <option value="goals" className="bg-[#121326] text-white">Goals</option>
                  </select>
                </div>
                <div>
                  <label className="text-[var(--text-muted)] block mb-1">Unit of Measurement</label>
                  <input
                    type="text"
                    required
                    placeholder="reps, pages, mins, km..."
                    value={trackerUnit}
                    onChange={(e) => setTrackerUnit(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-[var(--text-primary)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-[var(--text-muted)] block mb-1">Target</label>
                  <input
                    type="number"
                    min="1"
                    required
                    value={trackerTarget}
                    onChange={(e) => setTrackerTarget(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-[var(--text-primary)]"
                  />
                </div>
                <div>
                  <label className="text-[var(--text-muted)] block mb-1">Frequency</label>
                  <select
                    value={trackerFrequency}
                    onChange={(e) => setTrackerFrequency(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-[var(--text-primary)]"
                  >
                    <option value="daily" className="bg-[#121326] text-white">Daily</option>
                    <option value="weekly" className="bg-[#121326] text-white">Weekly</option>
                  </select>
                </div>
                <div>
                  <label className="text-[var(--text-muted)] block mb-1">Input Control</label>
                  <select
                    value={trackerInputType}
                    onChange={(e) => setTrackerInputType(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-[var(--text-primary)]"
                  >
                    <option value="number" className="bg-[#121326] text-white">Number</option>
                    <option value="stepper" className="bg-[#121326] text-white">Stepper (+/-)</option>
                    <option value="slider" className="bg-[#121326] text-white">Slider</option>
                    <option value="boolean" className="bg-[#121326] text-white">Toggle</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowTrackerModal(false)}
                  className="flex-1 py-2 rounded-xl bg-[var(--pill-bg)] text-[var(--text-secondary)] font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium shadow-sm"
                >
                  Create Tracker
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
