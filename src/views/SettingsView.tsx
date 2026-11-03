import React, { useState } from 'react';
import {
  Download,
  Upload,
  RotateCcw,
  User,
  Shield,
} from 'lucide-react';
import { useData } from '../context/DataContext';

export const SettingsView: React.FC = () => {
  const { userName, setUserName, exportDataJSON, importDataJSON, resetAllData } = useData();
  const [nameInput, setNameInput] = useState(userName);
  const [importStatus, setImportStatus] = useState<string | null>(null);

  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault();
    if (nameInput.trim()) {
      setUserName(nameInput.trim());
    }
  };

  const handleExport = () => {
    const json = exportDataJSON();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `forme-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        const ok = importDataJSON(content);
        setImportStatus(ok ? 'Imported successfully!' : 'Failed to import JSON file.');
        setTimeout(() => setImportStatus(null), 3000);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-16 animate-fadeIn select-none">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-white/[0.06]">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[#E56A38] text-base">✦</span>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">
              Settings &amp; Sanctuary Data
            </h1>
          </div>
          <p className="text-xs font-sans text-zinc-400 mt-1">
            Personalization, local backup, and ledger sovereignty.
          </p>
        </div>
      </header>

      {/* User Persona */}
      <section className="p-6 rounded-3xl bg-[#0D0F16]/90 border border-white/[0.08] shadow-xl space-y-4">
        <div className="flex items-center gap-2 text-[#E56A38]">
          <User size={16} />
          <h2 className="text-sm font-sans font-bold text-white tracking-wide">
            User Persona / Call-Sign
          </h2>
        </div>
        <form onSubmit={handleSaveName} className="flex items-center gap-3 max-w-md">
          <input
            type="text"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            className="flex-1 bg-black/40 border border-white/[0.08] rounded-xl px-3.5 py-2 text-xs font-sans text-white focus:outline-none focus:border-[#E56A38]"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-xl bg-[#E56A38] hover:bg-[#D9531E] text-white text-xs font-sans font-bold transition-all shadow-sm"
          >
            Save
          </button>
        </form>
      </section>

      {/* Backup & Import */}
      <section className="p-6 rounded-3xl bg-[#0D0F16]/90 border border-white/[0.08] shadow-xl space-y-4">
        <div className="flex items-center gap-2 text-amber-400">
          <Shield size={16} />
          <h2 className="text-sm font-sans font-bold text-white tracking-wide">
            Data Sovereignty (Local JSON Backup)
          </h2>
        </div>
        <p className="text-xs font-sans text-zinc-400 leading-relaxed max-w-xl">
          All your habits, study sessions, promises, and journal logs live 100% locally on your device. Export a backup or restore an existing file anytime.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            type="button"
            onClick={handleExport}
            className="px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] text-xs font-sans text-white flex items-center gap-2 transition-all"
          >
            <Download size={13} />
            <span>Export JSON Backup</span>
          </button>

          <label className="px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] text-xs font-sans text-white flex items-center gap-2 cursor-pointer transition-all">
            <Upload size={13} />
            <span>Import JSON</span>
            <input type="file" accept=".json" onChange={handleImportFile} className="hidden" />
          </label>

          {importStatus && (
            <span className="text-xs font-mono text-[#E56A38]">{importStatus}</span>
          )}
        </div>
      </section>

      {/* Danger Zone */}
      <section className="p-6 rounded-3xl bg-rose-500/5 border border-rose-500/20 space-y-3">
        <div className="flex items-center gap-2 text-rose-400">
          <RotateCcw size={16} />
          <h2 className="text-sm font-sans font-bold text-rose-300 tracking-wide">
            Reset All Local Data
          </h2>
        </div>
        <p className="text-xs font-sans text-zinc-400">
          Clear all logged entries, habits, and reset to original clean defaults.
        </p>
        <button
          type="button"
          onClick={() => {
            if (confirm('Are you sure you want to reset all sanctuary data?')) {
              resetAllData();
            }
          }}
          className="px-4 py-2 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/30 text-xs font-sans font-bold transition-all"
        >
          Reset Local Database
        </button>
      </section>
    </div>
  );
};
