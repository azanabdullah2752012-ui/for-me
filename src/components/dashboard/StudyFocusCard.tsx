import React, { useState } from 'react';
import { BookOpen, Play, Pause, RotateCcw, ChevronDown } from 'lucide-react';
import { useData } from '../../context/DataContext';

export const StudyFocusCard: React.FC = () => {
  const { studySeconds, isStudyActive, studySubject, setStudySubject, toggleStudyTimer, resetStudyTimer } = useData();
  const [showSubjectMenu, setShowSubjectMenu] = useState(false);

  const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Computer Science', 'Literature', 'History'];

  // Format seconds to HH:MM:SS
  const formatTimer = (totalSecs: number) => {
    const hrs = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-[#0f1118]/80 backdrop-blur-md rounded-2xl border border-white/[0.07] p-5 flex flex-col justify-between hover:border-white/[0.12] transition-all duration-200 relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-orange-400" />
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
            Study Focus
          </h3>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-bold tracking-wider uppercase">
          <span className={`w-1.5 h-1.5 rounded-full bg-red-500 ${isStudyActive ? 'animate-ping' : ''}`} />
          <span>LIVE</span>
        </div>
      </div>

      {/* Timer readout & Subject */}
      <div className="my-auto py-2">
        <div className="flex items-center justify-between">
          <div className="text-3xl lg:text-4xl font-mono font-medium tracking-tight text-white">
            {formatTimer(studySeconds)}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleStudyTimer}
              aria-label={isStudyActive ? 'Pause study session' : 'Start study session'}
              className="w-9 h-9 rounded-xl bg-orange-500/20 hover:bg-orange-500/30 border border-orange-500/50 flex items-center justify-center text-orange-400 hover:text-white transition-all shadow-amber-glow"
            >
              {isStudyActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
            </button>
            <button
              onClick={resetStudyTimer}
              aria-label="Reset timer"
              className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Subject selector */}
        <div className="relative mt-2">
          <button
            onClick={() => setShowSubjectMenu(!showSubjectMenu)}
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-200 font-medium transition-colors"
          >
            <span>{studySubject}</span>
            <ChevronDown className="w-3.5 h-3.5 text-zinc-500" />
          </button>

          {showSubjectMenu && (
            <div className="absolute left-0 top-full mt-1.5 w-44 bg-[#141724] border border-white/[0.1] rounded-xl shadow-2xl py-1.5 z-30">
              {subjects.map((sub) => (
                <button
                  key={sub}
                  onClick={() => {
                    setStudySubject(sub);
                    setShowSubjectMenu(false);
                  }}
                  className={`w-full text-left px-3 py-1.5 text-xs transition-colors ${
                    studySubject === sub ? 'text-amber-400 bg-white/[0.06] font-medium' : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.03]'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Animated visualizer waveform bars */}
      <div className="flex items-end gap-1 h-6 pt-2 border-t border-white/[0.04]">
        {[40, 65, 85, 30, 95, 70, 50, 100, 75, 45, 90, 60, 35, 80, 55, 90, 40, 70, 30, 85, 60].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-full bg-gradient-to-t from-orange-600/30 to-amber-500/70 transition-all duration-300"
            style={{
              height: isStudyActive ? `${Math.max(15, (h * (0.4 + (i % 3) * 0.3)))}%` : '20%',
              opacity: isStudyActive ? 0.9 : 0.25,
            }}
          />
        ))}
      </div>
    </div>
  );
};
