import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { Play, Pause, RotateCcw, ArrowLeft, BookmarkCheck, Clock, GraduationCap } from 'lucide-react';

export const StudiesView: React.FC = () => {
  const { 
    studySeconds, 
    isStudyActive, 
    studySubject, 
    setStudySubject, 
    toggleStudyTimer, 
    resetStudyTimer,
    saveStudySession,
    studySessions,
    setActiveTab 
  } = useData();

  const [sessionSavedMsg, setSessionSavedMsg] = useState(false);

  const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Computer Science', 'Literature', 'History', 'Deep Work'];

  const formatTimer = (totalSecs: number) => {
    const hrs = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSaveSession = () => {
    if (studySeconds < 60) {
      alert('Focus session must be at least 1 minute long to log.');
      return;
    }
    saveStudySession();
    setSessionSavedMsg(true);
    setTimeout(() => setSessionSavedMsg(false), 2500);
  };

  // Calculate verifiable total study minutes from actual recorded sessions (Condition 5)
  const totalVerifiedMinutes = studySessions.reduce((acc, s) => acc + Math.round(s.durationSeconds / 60), 0);

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-8 space-y-8 select-none font-sans">
      {/* Header */}
      <div className="border-b border-white/[0.06] pb-4">
        <button
          onClick={() => setActiveTab('wallpaper')}
          className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors mb-2 font-sans"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Return to Wallpaper HUD
        </button>
        <div className="flex items-center gap-2.5">
          <GraduationCap className="w-5 h-5 text-violet-300" />
          <h2 className="font-sans text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            Deep Study Console & Vault
          </h2>
        </div>
        <p className="text-xs text-zinc-400 font-sans mt-1">
          Deep academic focus tracking and authentic session logging.
        </p>
      </div>

      {/* Live Focus Stopwatch (Frosted Glass Console matching Wallpaper HUD) */}
      <div className="p-6 sm:p-10 rounded-[2rem] bg-gradient-to-b from-[#181a33]/60 to-[#121326]/40 backdrop-blur-3xl border border-white/[0.08] border-t-white/[0.18] text-center space-y-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.45)]">
        <div className="flex items-center justify-center gap-2">
          <Clock className="w-4 h-4 text-violet-300" />
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-300">
            {isStudyActive ? 'Active Focus Session' : 'Background-Resilient Stopwatch'}
          </span>
        </div>

        {/* Big Digital Display */}
        <div className="font-mono text-5xl sm:text-6xl text-white font-light tracking-widest leading-none">
          {formatTimer(studySeconds)}
        </div>

        {/* Subject Dropdown */}
        <div className="flex items-center justify-center gap-2 text-xs font-sans">
          <span className="text-zinc-400">Subject:</span>
          <select
            value={studySubject}
            onChange={(e) => setStudySubject(e.target.value)}
            disabled={isStudyActive}
            className="bg-white/[0.04] border border-white/[0.1] rounded-xl px-3 py-1.5 text-xs text-zinc-200 focus:outline-none font-sans"
          >
            {subjects.map((sub) => (
              <option key={sub} value={sub} className="bg-[#0e1022]">
                {sub}
              </option>
            ))}
          </select>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            onClick={toggleStudyTimer}
            className="px-6 py-2.5 rounded-2xl bg-[#9333ea] hover:bg-[#a855f7] text-white font-sans font-bold text-xs flex items-center gap-2 shadow-[0_0_20px_rgba(147,51,234,0.35)] transition-all uppercase tracking-wider"
          >
            {isStudyActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5 fill-current" />}
            <span>{isStudyActive ? 'Pause Session' : 'Start Focus'}</span>
          </button>

          <button
            onClick={resetStudyTimer}
            className="px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 text-xs transition-colors border border-white/[0.08]"
            title="Reset timer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          {studySeconds >= 60 && !isStudyActive && (
            <button
              onClick={handleSaveSession}
              className="px-5 py-2.5 rounded-xl bg-emerald-600/30 border border-emerald-500/50 hover:bg-emerald-600/50 text-emerald-200 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all font-sans"
            >
              <BookmarkCheck className="w-4 h-4" />
              <span>Log Session</span>
            </button>
          )}
        </div>

        {sessionSavedMsg && (
          <p className="text-xs text-emerald-400 font-sans">
            ✓ Session saved to your verified study records.
          </p>
        )}

        {/* Visualizer Frequency Bars */}
        <div className="flex items-end justify-center gap-1 h-8 pt-3 border-t border-white/[0.06]">
          {[30, 50, 75, 40, 85, 60, 45, 95, 70, 55, 80, 50, 65, 40, 70].map((h, i) => (
            <div
              key={i}
              style={{ height: isStudyActive ? `${h}%` : '20%' }}
              className={`w-1 rounded-full transition-all duration-300 ${
                isStudyActive ? 'bg-violet-400' : 'bg-white/[0.06]'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Verified Study Records History */}
      <div className="p-6 sm:p-8 rounded-[2rem] bg-gradient-to-b from-[#181a33]/60 to-[#121326]/40 backdrop-blur-3xl border border-white/[0.08] border-t-white/[0.18] shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
          <h3 className="text-xs font-sans uppercase tracking-[0.16em] text-zinc-200 font-semibold">
            Verified Recorded Sessions
          </h3>
          <span className="text-xs font-mono text-zinc-400">
            Total logged: <strong className="text-violet-300">{totalVerifiedMinutes} mins</strong>
          </span>
        </div>

        {studySessions.length === 0 ? (
          <div className="p-8 text-center text-zinc-400 text-xs font-sans border border-white/[0.06] rounded-2xl bg-white/[0.015]">
            No verified study sessions recorded yet. Focus for at least 1 minute above and click Log Session.
          </div>
        ) : (
          <div className="space-y-2.5">
            {studySessions.map((session) => (
              <div
                key={session.id}
                className="p-3.5 rounded-xl border bg-white/[0.025] hover:bg-white/[0.05] border-white/[0.06] flex items-center justify-between text-xs text-zinc-300"
              >
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-violet-400" />
                  <div>
                    <p className="font-semibold text-zinc-100 font-sans">{session.subject}</p>
                    <p className="text-[10px] text-zinc-400 font-mono">{session.timestamp}</p>
                  </div>
                </div>

                <div className="font-mono text-violet-300">
                  {Math.round(session.durationSeconds / 60)} mins
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
