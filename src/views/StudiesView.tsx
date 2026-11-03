import React, { useState } from 'react';
import {
  Clock,
  Play,
  Pause,
  RotateCcw,
  Plus,
  BookOpen,
  Trash2,
  CheckCircle,
  Headphones,
  Calendar as CalendarIcon,
  Flame,
  Award,
} from 'lucide-react';
import { StudySession } from '../types';
import { useData, getDisplayDate } from '../context/DataContext';
import { Modal } from '../components/common/Modal';
import { Button } from '../components/common/Button';
import { sound } from '../audio/sound';

export const StudiesView: React.FC = () => {
  const {
    selectedDate,
    studySessions,
    addStudySession,
    deleteStudySession,
    weeklyStudyHoursLogged,
    settings,
    studyTimer,
    studyTimerElapsed,
    startStudyTimer,
    pauseStudyTimer,
    resetStudyTimer,
    updateStudyTimerMeta,
    setIsMusicDrawerOpen,
    activeMusicId,
  } = useData();

  // Manual modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [manualSubject, setManualSubject] = useState('');
  const [manualTopic, setManualTopic] = useState('');
  const [manualDuration, setManualDuration] = useState(60);
  const [manualFocus, setManualFocus] = useState(5);
  const [manualNotes, setManualNotes] = useState('');

  const formatTimer = (totalSec: number) => {
    const hrs = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleStartPause = () => {
    if (studyTimer.isRunning) {
      pauseStudyTimer();
      sound.tick();
    } else {
      startStudyTimer();
      sound.complete();
    }
  };

  const handleLogFromTimer = () => {
    if (studyTimerElapsed < 60) {
      alert('Focus timer must run for at least 1 minute to record a study block.');
      return;
    }

    const durationMinutes = Math.round(studyTimerElapsed / 60);
    addStudySession({
      date: selectedDate,
      subject: studyTimer.subject || 'Independent Focus',
      topicCovered: studyTimer.topic || '',
      durationMinutes,
      focusRating: 5,
      notes: 'Logged directly from live Focus Stopwatch.',
    });

    resetStudyTimer();
    sound.complete();
  };

  const handleSaveManual = (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualSubject.trim()) return;

    addStudySession({
      date: selectedDate,
      subject: manualSubject.trim(),
      topicCovered: manualTopic.trim(),
      durationMinutes: Number(manualDuration) || 60,
      focusRating: manualFocus,
      notes: manualNotes.trim(),
    });

    setIsModalOpen(false);
    setManualSubject('');
    setManualTopic('');
    setManualDuration(60);
    setManualFocus(5);
    setManualNotes('');
    sound.complete();
  };

  const todaySessions = studySessions.filter((s) => s.date === selectedDate);
  const todayMinutes = todaySessions.reduce((acc, s) => acc + s.durationMinutes, 0);
  const todayHours = (todayMinutes / 60).toFixed(1);

  const targetHours = settings.weeklyStudyTargetHours || 15;
  const weeklyPercent = Math.min(100, Math.round((weeklyStudyHoursLogged / targetHours) * 100));

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-16 animate-fadeIn select-none">
      {/* ================================================================ */}
      {/* 1. CELESTIAL HEADER                                              */}
      {/* ================================================================ */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-white/[0.06]">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[#E56A38] text-base">✦</span>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">
              Focus Studio
            </h1>
          </div>
          <p className="text-xs font-sans text-zinc-400 mt-1 max-w-lg">
            Lock in for deep study, homework, code, and reading. Zero distractions, pure progress.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              sound.tick();
              setIsMusicDrawerOpen(true);
            }}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-sans text-zinc-300 hover:text-white transition-all shadow-sm"
          >
            <Headphones size={13} className={activeMusicId ? 'text-[#E56A38] animate-pulse' : 'text-zinc-400'} />
            <span>Focus Music</span>
          </button>

          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              sound.tick();
              setIsModalOpen(true);
            }}
            className="flex items-center gap-1.5 text-xs font-sans font-bold bg-[#E56A38] hover:bg-[#D9531E] text-white shadow-[0_0_15px_rgba(229,106,56,0.35)] transition-all"
          >
            <Plus size={14} />
            <span>Log Study Block</span>
          </Button>
        </div>
      </header>

      {/* ================================================================ */}
      {/* 2. MAIN BENTO GRID: FOCUS CONSOLE & TELEMETRY HUD                */}
      {/* ================================================================ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* LEFT / CENTER: FOCUS TIMER CONSOLE (8 Cols) */}
        <section className="lg:col-span-8 p-6 md:p-8 rounded-3xl bg-[#0D0F16]/90 border border-white/[0.08] shadow-2xl backdrop-blur-xl relative overflow-hidden flex flex-col justify-between space-y-6">
          {/* Subtle directional background warm glow */}
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#E56A38]/10 blur-[90px] pointer-events-none" />

          {/* Top Status */}
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-2">
              <BookOpen size={15} className="text-[#E56A38]" />
              <span className="text-xs font-sans font-bold text-white tracking-wide">
                Live Focus Stopwatch
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#E56A38] font-bold px-2.5 py-1 rounded-full bg-[#E56A38]/15 border border-[#E56A38]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E56A38] animate-pulse" />
                <span>{studyTimer.isRunning ? 'FOCUSING' : 'READY'}</span>
              </span>
            </div>
          </div>

          {/* Digital Timer Display & Soundwaves */}
          <div className="text-center py-4 relative z-10 space-y-3">
            <div className="text-6xl md:text-8xl font-mono font-black tracking-tight text-white drop-shadow-[0_0_35px_rgba(229,106,56,0.25)]">
              {formatTimer(studyTimerElapsed)}
            </div>

            {/* Smooth Equalizer Frequency Waves */}
            <div className="flex items-end justify-center gap-1 h-4 pt-1" title="Equalizer telemetry">
              <span className="w-1 h-full bg-[#E56A38] rounded-full animate-eq-1" />
              <span className="w-1 h-full bg-[#E56A38] rounded-full animate-eq-2" />
              <span className="w-1 h-full bg-amber-400 rounded-full animate-eq-3" />
              <span className="w-1 h-full bg-[#E56A38] rounded-full animate-eq-4" />
              <span className="w-1 h-full bg-amber-500 rounded-full animate-eq-5" />
            </div>
          </div>

          {/* Inputs for Subject & Topic */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
            <div>
              <label className="block text-[11px] font-sans text-zinc-400 uppercase tracking-wider mb-1 font-medium">
                Subject
              </label>
              <input
                type="text"
                value={studyTimer.subject}
                onChange={(e) => updateStudyTimerMeta(e.target.value, studyTimer.topic)}
                placeholder="e.g. Mathematics"
                className="w-full bg-black/40 border border-white/[0.1] rounded-xl px-3.5 py-2 text-xs font-sans text-white placeholder-zinc-600 focus:outline-none focus:border-[#E56A38]/60 focus:ring-1 focus:ring-[#E56A38]/40 transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-sans text-zinc-400 uppercase tracking-wider mb-1 font-medium">
                Topic / Problem Set
              </label>
              <input
                type="text"
                value={studyTimer.topic}
                onChange={(e) => updateStudyTimerMeta(studyTimer.subject, e.target.value)}
                placeholder="e.g. Chapter 4 Practice"
                className="w-full bg-black/40 border border-white/[0.1] rounded-xl px-3.5 py-2 text-xs font-sans text-white placeholder-zinc-600 focus:outline-none focus:border-[#E56A38]/60 focus:ring-1 focus:ring-[#E56A38]/40 transition-colors"
              />
            </div>
          </div>

          {/* Timer Action Controls */}
          <div className="flex items-center justify-center gap-3 pt-2 relative z-10">
            <button
              type="button"
              onClick={handleStartPause}
              className={`inline-flex items-center gap-2 px-8 py-3 rounded-full font-sans font-bold text-xs transition-all focus:outline-none shadow-lg ${
                studyTimer.isRunning
                  ? 'bg-amber-500 hover:bg-amber-400 text-black shadow-[0_0_20px_rgba(245,158,11,0.35)]'
                  : 'bg-[#E56A38] hover:bg-[#D9531E] text-white shadow-[0_0_20px_rgba(229,106,56,0.35)]'
              }`}
            >
              {studyTimer.isRunning ? <Pause size={14} /> : <Play size={14} fill="currentColor" />}
              <span>{studyTimer.isRunning ? 'Pause Session' : 'Start Focus Block'}</span>
            </button>

            {studyTimerElapsed > 0 && (
              <>
                <button
                  type="button"
                  onClick={handleLogFromTimer}
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/[0.12] text-white font-sans font-bold text-xs transition-all focus:outline-none shadow-sm"
                >
                  <CheckCircle size={14} className="text-[#E56A38]" />
                  <span>Log Block</span>
                </button>

                <button
                  type="button"
                  onClick={resetStudyTimer}
                  className="p-3 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-zinc-400 hover:text-white transition-colors focus:outline-none"
                  title="Reset stopwatch"
                >
                  <RotateCcw size={14} />
                </button>
              </>
            )}
          </div>
        </section>

        {/* RIGHT: TELEMETRY & STUDY STATS HUD (4 Cols) */}
        <div className="lg:col-span-4 space-y-4 flex flex-col justify-between">
          {/* Card 1: Weekly Quota Gauge */}
          <section className="p-5 rounded-3xl bg-[#0D0F16]/90 border border-white/[0.08] shadow-xl backdrop-blur-xl space-y-3">
            <div className="flex items-center justify-between pb-1">
              <span className="text-xs font-sans font-bold text-white tracking-wide">
                Weekly Quota
              </span>
              <span className="text-xs font-mono font-bold text-[#E56A38]">
                {weeklyPercent}%
              </span>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-mono font-black text-white">
                {weeklyStudyHoursLogged}h
              </span>
              <span className="text-xs font-sans text-zinc-500">
                / {targetHours}h target
              </span>
            </div>

            <div className="w-full h-2 bg-white/[0.06] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#E56A38] to-amber-500 rounded-full transition-all shadow-[0_0_10px_rgba(229,106,56,0.4)]"
                style={{ width: `${weeklyPercent}%` }}
              />
            </div>
          </section>

          {/* Card 2: Today's Focus Ledger */}
          <section className="p-5 rounded-3xl bg-[#0D0F16]/90 border border-white/[0.08] shadow-xl backdrop-blur-xl space-y-3">
            <div className="flex items-center justify-between pb-1">
              <div className="flex items-center gap-1.5 text-zinc-400">
                <Clock size={13} />
                <span className="text-xs font-sans font-bold text-white tracking-wide">
                  Today&apos;s Focus
                </span>
              </div>
              <span className="text-[10px] font-mono text-zinc-400">
                {todaySessions.length} block{todaySessions.length === 1 ? '' : 's'}
              </span>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-mono font-black text-white">
                {todayHours}h
              </span>
              <span className="text-xs font-sans text-zinc-500">
                logged today
              </span>
            </div>

            <p className="text-[11px] font-sans text-zinc-400">
              {todaySessions.length > 0
                ? 'Consistency compounds. Great job staying focused today.'
                : 'No blocks logged yet today. Ready to begin?'}
            </p>
          </section>

          {/* Card 3: Deep Work Mindset */}
          <section className="p-5 rounded-3xl bg-gradient-to-br from-[#E56A38]/10 via-[#0D0F16]/90 to-[#07080B] border border-[#E56A38]/25 shadow-xl backdrop-blur-xl space-y-2">
            <div className="flex items-center gap-1.5 text-[#E56A38]">
              <Flame size={14} />
              <span className="text-xs font-serif font-bold text-white">
                Daily Principle
              </span>
            </div>
            <p className="text-xs font-serif italic text-zinc-300 leading-relaxed">
              &ldquo;The ability to perform deep work is becoming increasingly rare at exactly the same time it is becoming increasingly valuable.&rdquo;
            </p>
          </section>
        </div>
      </div>

      {/* ================================================================ */}
      {/* 3. RECORDED STUDY SESSIONS LEDGER                                */}
      {/* ================================================================ */}
      <section className="p-6 rounded-3xl bg-[#0D0F16]/85 border border-white/[0.07] shadow-xl backdrop-blur-xl space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <span className="text-[#E56A38] text-sm">✦</span>
            <h2 className="text-sm font-sans font-bold text-white tracking-wide">
              Logged Study Sessions ({todaySessions.length})
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-400">
            {getDisplayDate(selectedDate)}
          </span>
        </div>

        {todaySessions.length === 0 ? (
          <div className="p-8 text-center rounded-2xl border border-dashed border-white/[0.08] bg-black/20 space-y-2">
            <p className="text-xs text-zinc-400 font-sans">
              No study blocks recorded for this date.
            </p>
            <p className="text-[11px] font-sans text-zinc-500">
              Run the Focus Stopwatch above or click &ldquo;Log Study Block&rdquo; to add a completed session.
            </p>
          </div>
        ) : (
          <div className="space-y-2.5">
            {todaySessions.map((session) => (
              <div
                key={session.id}
                className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] hover:border-white/[0.12] transition-colors flex items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-serif font-bold text-white">
                      {session.subject}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#E56A38]/15 text-[#E56A38] border border-[#E56A38]/30 font-bold">
                      {session.durationMinutes} mins
                    </span>
                    <span className="text-[10px] font-sans text-zinc-400">
                      • {session.focusRating}/5 flow state
                    </span>
                  </div>

                  {session.topicCovered && (
                    <p className="text-xs font-sans text-zinc-400">
                      Topic: <span className="text-zinc-300">{session.topicCovered}</span>
                    </p>
                  )}

                  {session.notes && (
                    <p className="text-xs font-serif italic text-zinc-500">
                      &ldquo;{session.notes}&rdquo;
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => deleteStudySession(session.id)}
                  className="p-2 rounded-xl text-zinc-500 hover:text-rose-400 hover:bg-white/[0.05] border border-white/[0.06] transition-colors focus:outline-none"
                  title="Delete Session"
                >
                  <Trash2 size={13} />
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Manual Entry Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Log Completed Study Block"
      >
        <form onSubmit={handleSaveManual} className="space-y-4">
          <div>
            <label className="block text-xs font-sans text-zinc-400 mb-1">
              Subject Name *
            </label>
            <input
              type="text"
              required
              value={manualSubject}
              onChange={(e) => setManualSubject(e.target.value)}
              placeholder="e.g. Mathematics"
              className="w-full bg-black/40 border border-white/[0.1] rounded-xl px-3 py-2 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-[#E56A38]"
            />
          </div>

          <div>
            <label className="block text-xs font-sans text-zinc-400 mb-1">
              Topic / Chapter
            </label>
            <input
              type="text"
              value={manualTopic}
              onChange={(e) => setManualTopic(e.target.value)}
              placeholder="e.g. Calculus Practice"
              className="w-full bg-black/40 border border-white/[0.1] rounded-xl px-3 py-2 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-[#E56A38]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-sans text-zinc-400 mb-1">
                Duration (minutes)
              </label>
              <input
                type="number"
                min="5"
                max="720"
                value={manualDuration}
                onChange={(e) => setManualDuration(Number(e.target.value))}
                className="w-full bg-black/40 border border-white/[0.1] rounded-xl px-3 py-2 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-[#E56A38]"
              />
            </div>

            <div>
              <label className="block text-xs font-sans text-zinc-400 mb-1">
                Focus Quality (1 to 5)
              </label>
              <select
                value={manualFocus}
                onChange={(e) => setManualFocus(Number(e.target.value))}
                className="w-full bg-[#111319] border border-white/[0.1] rounded-xl px-3 py-2 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-[#E56A38]"
              >
                <option value={5}>5 — Pure Flow State</option>
                <option value={4}>4 — High Concentration</option>
                <option value={3}>3 — Moderate Focus</option>
                <option value={2}>2 — Frequent Distractions</option>
                <option value={1}>1 — Scattered</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-sans text-zinc-400 mb-1">
              Key Insights / Notes
            </label>
            <textarea
              rows={3}
              value={manualNotes}
              onChange={(e) => setManualNotes(e.target.value)}
              placeholder="What core concept was mastered?"
              className="w-full bg-black/40 border border-white/[0.1] rounded-xl p-3 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-[#E56A38] resize-none"
            />
          </div>

          <div className="flex items-center justify-end gap-2 pt-2 border-t border-white/[0.08]">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              size="sm"
              className="bg-[#E56A38] hover:bg-[#D9531E] text-white"
            >
              Record Session
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
