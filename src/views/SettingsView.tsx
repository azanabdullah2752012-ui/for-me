import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { ArrowLeft, Download, Upload, RotateCcw, Check } from 'lucide-react';

export const SettingsView: React.FC = () => {
  const { 
    profile, 
    setProfile, 
    exportDataBackup, 
    importDataBackup,
    setActiveTab 
  } = useData();

  const [name, setName] = useState(profile.name);
  const [motto, setMotto] = useState(profile.motto);
  const [importJson, setImportJson] = useState('');
  const [showImportBox, setShowImportBox] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const handleSaveProfile = () => {
    setProfile((prev) => ({
      ...prev,
      name: name.trim() || 'Azan',
      motto: motto.trim() || 'Discipline today. Freedom tomorrow.',
    }));
    setFeedbackMsg('Profile preferences updated.');
    setTimeout(() => setFeedbackMsg(''), 2500);
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
    <div className="max-w-2xl mx-auto py-10 px-4 sm:px-6 space-y-10 select-none">
      {/* Header */}
      <div className="border-b border-white/[0.06] pb-6">
        <button
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors mb-2"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </button>
        <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-wide">
          Settings & Data Protection
        </h2>
        <p className="text-xs text-zinc-400 font-sans mt-1">
          Personal identity, data backups, and private ledger controls.
        </p>
      </div>

      {feedbackMsg && (
        <div className="p-3 bg-violet-950/40 border border-violet-400/30 rounded-xl text-xs text-violet-200 flex items-center gap-2">
          <Check className="w-4 h-4 text-violet-300" />
          <span>{feedbackMsg}</span>
        </div>
      )}

      {/* Identity Form */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#0c1022]/80 border border-[#c4b5fd]/[0.1] space-y-5 shadow-sanctuary">
        <h3 className="font-serif text-lg text-white font-normal">
          Personal Identity
        </h3>

        <div className="space-y-4 text-xs">
          <div>
            <label className="text-zinc-300 block mb-1.5 font-medium">Display Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-3.5 py-2 text-white focus:outline-none focus:border-violet-400"
            />
          </div>

          <div>
            <label className="text-zinc-300 block mb-1.5 font-medium">Personal Motto / Subtitle</label>
            <input
              type="text"
              value={motto}
              onChange={(e) => setMotto(e.target.value)}
              className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-3.5 py-2 text-white focus:outline-none focus:border-violet-400"
            />
          </div>

          <button
            onClick={handleSaveProfile}
            className="px-5 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-semibold shadow-lavender-glow transition-all"
          >
            Save Changes
          </button>
        </div>
      </div>

      {/* Data Backup & Export (Condition 3: Complete data safety) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#0c1022]/80 border border-[#c4b5fd]/[0.1] space-y-5 shadow-sanctuary">
        <h3 className="font-serif text-lg text-white font-normal">
          Data Preservation & Backups
        </h3>
        <p className="text-xs text-zinc-400 font-sans leading-relaxed">
          Your ledger stores all habits, reflections, promises, and study records locally in your browser. Download a full JSON backup to keep your records permanently safe.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <button
            onClick={handleExport}
            className="px-4 py-2.5 rounded-xl bg-violet-600/30 border border-violet-400/30 hover:bg-violet-600/50 text-violet-200 text-xs font-semibold flex items-center gap-2 transition-colors"
          >
            <Download className="w-4 h-4" /> Download Backup JSON
          </button>

          <button
            onClick={() => setShowImportBox(!showImportBox)}
            className="px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 text-xs font-semibold flex items-center gap-2 transition-colors"
          >
            <Upload className="w-4 h-4" /> Restore from Backup
          </button>
        </div>

        {showImportBox && (
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-3 pt-3">
            <label className="text-[11px] text-zinc-300 block font-mono">
              Paste Backup JSON below:
            </label>
            <textarea
              rows={4}
              value={importJson}
              onChange={(e) => setImportJson(e.target.value)}
              placeholder="Paste JSON contents here..."
              className="w-full bg-black/40 border border-white/[0.1] rounded-xl p-3 text-xs font-mono text-zinc-200 focus:outline-none"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowImportBox(false)}
                className="px-3 py-1.5 text-xs text-zinc-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleImport}
                className="px-4 py-1.5 bg-violet-600 text-white rounded-lg text-xs font-semibold"
              >
                Apply Restore
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Danger Zone */}
      <div className="p-6 rounded-2xl bg-red-950/20 border border-red-500/20 flex items-center justify-between">
        <div>
          <h4 className="text-xs font-semibold text-red-200">Reset Local Storage Ledger</h4>
          <p className="text-[11px] text-zinc-400">Restores application state to factory defaults.</p>
        </div>
        <button
          onClick={() => {
            if (confirm('Warning: This will clear your locally stored habits and reflections. Download a backup first if you want to keep them. Proceed?')) {
              localStorage.removeItem('for_me_ledger_state_v2');
              window.location.reload();
            }
          }}
          className="px-3 py-1.5 border border-red-500/40 text-red-300 hover:bg-red-500/20 rounded-xl text-xs flex items-center gap-1.5 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset Data
        </button>
      </div>
    </div>
  );
};
