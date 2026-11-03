import React, { useState } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  BookOpen,
  Trash2,
  CheckCircle,
} from 'lucide-react';
import { useData } from '../context/DataContext';
import { sound } from '../audio/sound';

export const StudiesView: React.FC = () => {
  const {
    selectedDate,
    studySessions,
    addStudySession,
    deleteStudySession,
    studyTimer,
    startStudyTimer,
    pauseStudyTimer,
    resetStudyTimer,
    updateStudyTimerMeta,
  } = useData();

  const [subject, setSubject] = useState(studyTimer.subject || 'Mathematics');
  const [topic, setTopic] = useState(studyTimer.topic || '');

  const formatTimer = (totalSec: number) => {
    const hrs = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleLog = () => {
    if (studyTimer.seconds < 30) {
      alert('Focus timer must run for at least 30 seconds to log a study block.');
      return;
    }
    const mins = Math.max(1, Math.round(studyTimer.seconds / 60));
    addStudySession({
      date: selectedDate,
      subject,
      topic,
      durationMinutes: mins,
      focusRating: 5,
      notes: 'Recorded from live study console.',
    });
    resetStudyTimer();
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-16 animate-fadeIn select-none">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-white/[0.06]">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[#E56A38] text-base">✦</span>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">
              Focus Studio
            </h1>
          </div>
          <p className="text-xs font-sans text-zinc-400 mt-1">
            Lock in for deep study, problem solving, homework, and coding.
          </p>
        </div>
      </header>

      {/* Focus Console */}
      <section className="p-8 rounded-3xl bg-[#0D0F16]/90 border border-white/[0.08] shadow-2xl backdrop-blur-xl text-center space-y-6">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-[#E56A38] font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E56A38] animate-pulse" />
            <span>{studyTimer.isRunning ? 'FOCUSING' : 'READY'}</span>
          </span>
          <span className="text-zinc-500">Live Stopwatch</span>
        </div>

        {/* Big Timer */}
        <div className="text-6xl md:text-8xl font-mono font-black text-white tracking-tight drop-shadow-[0_0_35px_rgba(229,106,56,0.3)]">
          {formatTimer(studyTimer.seconds)}
        </div>

        {/* Inputs */}
        <div className="max-w-md mx-auto grid grid-cols-2 gap-3 text-left text-xs font-sans">
          <div>
            <label className="block text-zinc-400 mb-1">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
                updateStudyTimerMeta(e.target.value, topic);
              }}
              placeholder="e.g. Mathematics"
              className="w-full bg-black/40 border border-white/[0.08] rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#E56A38]"
            />
          </div>
          <div>
            <label className="block text-zinc-400 mb-1">Topic</label>
            <input
              type="text"
              value={topic}
              onChange={(e) => {
                setTopic(e.target.value);
                updateStudyTimerMeta(subject, e.target.value);
              }}
              placeholder="e.g. Calculus Practice"
              className="w-full bg-black/40 border border-white/[0.08] rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#E56A38]"
            />
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => {
              if (studyTimer.isRunning) pauseStudyTimer();
              else startStudyTimer(subject, topic);
            }}
            className="px-8 py-3 rounded-full bg-[#E56A38] hover:bg-[#D9531E] text-white text-xs font-sans font-bold shadow-[0_0_20px_rgba(229,106,56,0.35)] transition-all flex items-center gap-2"
          >
            {studyTimer.isRunning ? <Pause size={14} /> : <Play size={14} fill="currentColor" />}
            <span>{studyTimer.isRunning ? 'Pause Session' : 'Start Focus Block'}</span>
          </button>

          {studyTimer.seconds > 0 && (
            <>
              <button
                type="button"
                onClick={handleLog}
                className="px-5 py-3 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/[0.1] text-white text-xs font-sans font-bold flex items-center gap-1.5 transition-all"
              >
                <CheckCircle size={14} className="text-[#E56A38]" />
                <span>Log Block</span>
              </button>
              <button
                type="button"
                onClick={resetStudyTimer}
                className="p-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors"
                title="Reset stopwatch"
              >
                <RotateCcw size={14} />
              </button>
            </>
          )}
        </div>
      </section>

      {/* Logged Sessions */}
      <section className="space-y-3">
        <h3 className="text-sm font-sans font-bold text-white tracking-wide">
          Recorded Study Sessions ({studySessions.length})
        </h3>
        {studySessions.length === 0 ? (
          <div className="p-8 text-center rounded-2xl border border-dashed border-white/[0.08] bg-black/20 text-xs text-zinc-500">
            No study sessions logged yet.
          </div>
        ) : (
          studySessions.map((session) => (
            <div
              key={session.id}
              className="p-4 rounded-2xl bg-[#0D0F16]/85 border border-white/[0.08] flex items-center justify-between"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-serif font-bold text-white">{session.subject}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#E56A38]/15 text-[#E56A38] border border-[#E56A38]/30 font-bold">
                    {session.durationMinutes} mins
                  </span>
                </div>
                {session.topic && <p className="text-xs text-zinc-400 mt-0.5">{session.topic}</p>}
              </div>
              <button
                type="button"
                onClick={() => deleteStudySession(session.id)}
                className="p-1.5 text-zinc-500 hover:text-rose-400 transition-colors"
              >
                <Trash2 size={13} />
              </button>
            </div>
          ))
        )}
      </section>
    </div>
  );
};
