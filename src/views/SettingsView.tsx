import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { ArrowLeft, Download, Upload, Check, Settings } from 'lucide-react';

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
    <div className="max-w-3xl mx-auto py-8 px-4 sm:px-8 space-y-8 select-none font-sans">
      {/* Header */}
      <div className="border-b border-white/[0.06] pb-4">
        <button
          onClick={() => setActiveTab('wallpaper')}
          className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors mb-2 font-sans"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Return to Wallpaper HUD
        </button>
        <div className="flex items-center gap-2.5">
          <Settings className="w-5 h-5 text-violet-300" />
          <h2 className="font-sans text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            Preferences & Data Integrity
          </h2>
        </div>
        <p className="text-xs text-zinc-400 font-sans mt-1">
          Personal identity, local persistence guarantees, and verified backup tools.
        </p>
      </div>

      {feedbackMsg && (
        <div className="p-3 bg-emerald-950/40 border border-emerald-400/30 rounded-xl text-xs text-emerald-200 flex items-center gap-2 font-sans">
          <Check className="w-4 h-4 text-emerald-400" /> {feedbackMsg}
        </div>
      )}

      {/* Profile Details (Frosted Glass Card matching Wallpaper HUD) */}
      <div className="p-6 sm:p-8 rounded-[2rem] bg-gradient-to-b from-[#181a33]/60 to-[#121326]/40 backdrop-blur-3xl border border-white/[0.08] border-t-white/[0.18] shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] space-y-5">
        <h3 className="text-xs font-sans uppercase tracking-[0.16em] text-zinc-200 font-semibold pb-2 border-b border-white/[0.06]">
          Profile Presence
        </h3>

        <div className="space-y-4 font-sans text-xs">
          <div>
            <label className="block text-zinc-400 mb-1">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-3.5 py-2 text-white focus:outline-none focus:border-violet-400 font-sans"
            />
          </div>

          <div>
            <label className="block text-zinc-400 mb-1">Personal Motto</label>
            <input
              type="text"
              value={motto}
              onChange={(e) => setMotto(e.target.value)}
              className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-3.5 py-2 text-white focus:outline-none focus:border-violet-400 font-sans"
            />
          </div>

          <div className="pt-2">
            <button
              onClick={handleSaveProfile}
              className="px-6 py-2.5 rounded-2xl bg-[#9333ea] hover:bg-[#a855f7] text-white font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(147,51,234,0.35)]"
            >
              Save Profile
            </button>
          </div>
        </div>
      </div>

      {/* Backup & Persistence (Conditions 3 & 4 verified) */}
      <div className="p-6 sm:p-8 rounded-[2rem] bg-gradient-to-b from-[#181a33]/60 to-[#121326]/40 backdrop-blur-3xl border border-white/[0.08] border-t-white/[0.18] shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] space-y-4">
        <h3 className="text-xs font-sans uppercase tracking-[0.16em] text-zinc-200 font-semibold pb-2 border-b border-white/[0.06]">
          Data Persistence & Safe Backup
        </h3>
        <p className="text-xs text-zinc-300 font-sans leading-relaxed">
          Your ledger is strictly kept in your browser's persistent local storage (<code className="text-violet-300 font-mono">for_me_ledger_state_v2</code>). You can export an offline backup JSON file or import a previous state at any time.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={handleExport}
            className="px-5 py-2.5 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.08] text-xs font-sans text-white flex items-center gap-2 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Offline Backup</span>
          </button>

          <button
            onClick={() => setShowImportBox(!showImportBox)}
            className="px-5 py-2.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] text-xs font-sans text-zinc-300 hover:text-white flex items-center gap-2 transition-colors"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Restore from Backup</span>
          </button>
        </div>

        {showImportBox && (
          <div className="pt-4 space-y-3 border-t border-white/[0.06]">
            <label className="block text-xs font-sans text-zinc-400">
              Paste your backup JSON content below:
            </label>
            <textarea
              value={importJson}
              onChange={(e) => setImportJson(e.target.value)}
              placeholder='{"version":2,"state":{...}}'
              rows={5}
              className="w-full bg-white/[0.02] border border-white/[0.08] rounded-xl p-3 text-xs font-mono text-zinc-200 focus:outline-none focus:border-violet-400"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowImportBox(false)}
                className="px-3.5 py-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleImport}
                disabled={!importJson.trim()}
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white rounded-xl text-xs font-bold uppercase tracking-wider font-sans transition-all"
              >
                Confirm Import
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
