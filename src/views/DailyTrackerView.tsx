import React, { useState } from 'react';
import {
  Save,
  Feather,
  Copy,
  Check,
  Calendar,
} from 'lucide-react';
import { useData } from '../context/DataContext';
import { sound } from '../audio/sound';

export const DailyTrackerView: React.FC = () => {
  const { selectedDate, currentLog, updateDailyLog } = useData();
  const [notes, setNotes] = useState(currentLog.quickJournal || '');
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    sound.complete();
    updateDailyLog({ quickJournal: notes });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(notes).then(() => {
      sound.tick();
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-16 animate-fadeIn select-none">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-white/[0.06]">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[#E56A38] text-base">✦</span>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">
              Daily Sanctuary &amp; Ledger
            </h1>
          </div>
          <p className="text-xs font-sans text-zinc-400 mt-1">
            Distraction-free personal writing canvas for thoughts, ideas, and reflections.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopy}
            className="px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-sans text-zinc-300 hover:text-white transition-all flex items-center gap-1.5"
          >
            {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="px-4 py-1.5 rounded-xl bg-[#E56A38] hover:bg-[#D9531E] text-white text-xs font-sans font-bold shadow-[0_0_12px_rgba(229,106,56,0.35)] transition-all flex items-center gap-1.5"
          >
            <Save size={13} />
            <span>{saved ? 'Saved ✓' : 'Save Entry'}</span>
          </button>
        </div>
      </header>

      {/* Writing Surface */}
      <div className="p-8 rounded-3xl bg-[#0D0F16]/90 border border-white/[0.08] shadow-2xl backdrop-blur-xl space-y-4">
        <div className="flex items-center justify-between text-xs font-mono text-zinc-500 pb-2 border-b border-white/[0.05]">
          <span className="flex items-center gap-2">
            <Calendar size={13} className="text-[#E56A38]" />
            <span>Date: {selectedDate}</span>
          </span>
          <span>{notes.split(/\s+/).filter(Boolean).length} words</span>
        </div>

        <textarea
          rows={14}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="What occupied your mind today? Write unhindered..."
          className="w-full bg-transparent border-0 text-sm font-serif italic text-zinc-200 placeholder-zinc-600 focus:outline-none resize-none leading-relaxed"
        />
      </div>
    </div>
  );
};
