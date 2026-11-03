import React, { useState } from 'react';
import {
  Sun,
  Moon,
  Save,
  Check,
} from 'lucide-react';
import { useData } from '../context/DataContext';
import { sound } from '../audio/sound';

export const ReflectionsView: React.FC = () => {
  const { currentLog, updateDailyLog } = useData();
  const [morning, setMorning] = useState(currentLog.morningPriming || '');
  const [win, setWin] = useState(currentLog.eveningWin || '');
  const [obstacle, setObstacle] = useState(currentLog.eveningObstacle || '');
  const [lesson, setLesson] = useState(currentLog.eveningLesson || '');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    sound.complete();
    updateDailyLog({
      morningPriming: morning,
      eveningWin: win,
      eveningObstacle: obstacle,
      eveningLesson: lesson,
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-16 animate-fadeIn select-none">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-white/[0.06]">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[#E56A38] text-base">✦</span>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">
              Reflections &amp; Inquiries
            </h1>
          </div>
          <p className="text-xs font-sans text-zinc-400 mt-1">
            Morning clarity, evening debrief, and deep quiet contemplation.
          </p>
        </div>

        <button
          type="button"
          onClick={handleSave}
          className="px-5 py-2 rounded-xl bg-[#E56A38] hover:bg-[#D9531E] text-white text-xs font-sans font-bold flex items-center gap-1.5 shadow-[0_0_12px_rgba(229,106,56,0.35)] transition-all"
        >
          <Save size={13} />
          <span>{saved ? 'Saved ✓' : 'Save Reflection'}</span>
        </button>
      </header>

      {/* Morning Priming */}
      <section className="p-6 rounded-3xl bg-[#0D0F16]/90 border border-white/[0.08] shadow-xl space-y-3">
        <div className="flex items-center gap-2 text-[#E56A38]">
          <Sun size={15} />
          <h2 className="text-sm font-serif font-bold text-white tracking-wide">
            Morning Priming: Intention &amp; Posture
          </h2>
        </div>
        <textarea
          rows={3}
          value={morning}
          onChange={(e) => setMorning(e.target.value)}
          placeholder="What standard will I hold myself to today? What is the main battle to conquer?"
          className="w-full bg-black/40 border border-white/[0.08] rounded-xl p-3.5 text-xs font-sans text-white focus:outline-none focus:border-[#E56A38] resize-none leading-relaxed"
        />
      </section>

      {/* Evening Debrief */}
      <section className="p-6 rounded-3xl bg-[#0D0F16]/90 border border-white/[0.08] shadow-xl space-y-4">
        <div className="flex items-center gap-2 text-amber-400">
          <Moon size={15} />
          <h2 className="text-sm font-serif font-bold text-white tracking-wide">
            Evening Debrief: The Day in Review
          </h2>
        </div>

        <div className="space-y-3 text-xs font-sans">
          <div>
            <label className="block text-zinc-400 mb-1">Single biggest win / moment of discipline:</label>
            <input
              type="text"
              value={win}
              onChange={(e) => setWin(e.target.value)}
              placeholder="e.g. Completed scheduled study block without checking phone."
              className="w-full bg-black/40 border border-white/[0.08] rounded-xl px-3.5 py-2 text-white focus:outline-none focus:border-[#E56A38]"
            />
          </div>

          <div>
            <label className="block text-zinc-400 mb-1">Point of hesitation or obstacle encountered:</label>
            <input
              type="text"
              value={obstacle}
              onChange={(e) => setObstacle(e.target.value)}
              placeholder="e.g. Delayed starting deep work due to distraction."
              className="w-full bg-black/40 border border-white/[0.08] rounded-xl px-3.5 py-2 text-white focus:outline-none focus:border-[#E56A38]"
            />
          </div>

          <div>
            <label className="block text-zinc-400 mb-1">The lesson or adjustment extracted:</label>
            <input
              type="text"
              value={lesson}
              onChange={(e) => setLesson(e.target.value)}
              placeholder="e.g. Put phone in separate room before opening laptop."
              className="w-full bg-black/40 border border-white/[0.08] rounded-xl px-3.5 py-2 text-white focus:outline-none focus:border-[#E56A38]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
