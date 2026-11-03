import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { Play, Pause, RotateCcw, ArrowLeft, BookmarkCheck, Clock } from 'lucide-react';

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

  const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Computer Science', 'Literature', 'History'];

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

  // Calculate verifiable total study minutes from actual recorded sessions
  const totalVerifiedMinutes = studySessions.reduce((acc, s) => acc + Math.round(s.durationSeconds / 60), 0);

  return (
    <div className="max-w-3xl mx-auto py-10 px-4 sm:px-6 space-y-12 select-none">
      {/* Header */}
      <div className="border-b border-white/[0.06] pb-6">
        <button
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors mb-2"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </button>
        <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-wide">
          Study Vault
        </h2>
        <p className="text-xs text-zinc-400 font-sans mt-1">
          Deep academic focus tracking and authentic session logging.
        </p>
      </div>

      {/* Live Focus Stopwatch */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#0c1022]/80 border border-[#c4b5fd]/[0.1] text-center space-y-6 shadow-sanctuary backdrop-blur-md">
        <div className="flex items-center justify-center gap-2">
          <Clock className="w-4 h-4 text-violet-300" />
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-violet-300/80">
            {isStudyActive ? 'Active Focus Session' : 'Ready to Focus'}
          </span>
        </div>

        {/* Big Digital Display */}
        <div className="font-mono text-5xl sm:text-6xl text-white font-normal tracking-tight">
          {formatTimer(studySeconds)}
        </div>

        {/* Subject Dropdown */}
        <div className="flex items-center justify-center gap-2">
          <span className="text-xs text-zinc-400">Subject:</span>
          <select
            value={studySubject}
            onChange={(e) => setStudySubject(e.target.value)}
            disabled={isStudyActive}
            className="bg-white/[0.04] border border-white/[0.1] rounded-xl px-3 py-1.5 text-xs text-violet-200 focus:outline-none"
          >
            {subjects.map((sub) => (
              <option key={sub} value={sub} className="bg-[#0b0f1d]">
                {sub}
              </option>
            ))}
          </select>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            onClick={toggleStudyTimer}
            className="px-6 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium text-xs flex items-center gap-2 shadow-lavender-glow transition-all"
          >
            {isStudyActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
            <span>{isStudyActive ? 'Pause Session' : 'Start Focus'}</span>
          </button>

          <button
            onClick={resetStudyTimer}
            className="px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 text-xs transition-colors"
            title="Reset timer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          {studySeconds >= 60 && !isStudyActive && (
            <button
              onClick={handleSaveSession}
              className="px-5 py-2.5 rounded-xl bg-emerald-600/30 border border-emerald-500/50 hover:bg-emerald-600/50 text-emerald-200 text-xs font-semibold flex items-center gap-1.5 transition-all"
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

        {/* Animated Visualizer Frequency Bars */}
        <div className="flex items-end justify-center gap-1 h-8 pt-3 border-t border-white/[0.04]">
          {[30, 50, 75, 40, 85, 60, 45, 95, 70, 55, 80, 50, 65, 40, 70].map((h, i) => (
            <div
              key={i}
              className="w-1 rounded-full bg-violet-400 transition-all duration-300"
              style={{
                height: isStudyActive ? `${Math.max(20, (h * (0.5 + (i % 3) * 0.25)))}%` : '15%',
                opacity: isStudyActive ? 0.9 : 0.2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Verified Study Records (Condition 5: Never fabricate historical study data) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-xl text-white font-normal">
            Verified Study Records
          </h3>
          <span className="text-xs text-zinc-400 font-mono">
            {totalVerifiedMinutes} total minutes logged
          </span>
        </div>

        <p className="text-[11px] text-zinc-400 font-sans">
          Study history displays only verified sessions logged by you during this and previous sessions.
        </p>

        {studySessions.length === 0 ? (
          <div className="p-8 text-center text-zinc-400 text-xs font-serif italic border border-white/[0.04] rounded-2xl">
            No study sessions logged yet. Run the stopwatch above and click "Log Session" to record your focus time.
          </div>
        ) : (
          <div className="space-y-2.5">
            {studySessions.map((session) => (
              <div
                key={session.id}
                className="p-4 rounded-xl bg-[#0c1022]/60 border border-[#c4b5fd]/[0.08] flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-violet-400" />
                  <span className="font-medium text-white">{session.subject}</span>
                  <span className="text-zinc-400 text-[11px]">{session.timestamp}</span>
                </div>
                <div className="font-mono text-violet-300">
                  {Math.round(session.durationSeconds / 60)} minutes
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
