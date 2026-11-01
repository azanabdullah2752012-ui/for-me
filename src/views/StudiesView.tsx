import React, { useState, useEffect } from 'react';
import {
  Clock,
  Play,
  Pause,
  RotateCcw,
  Plus,
  BookOpen,
  Trash2,
  CheckCircle,
  Sparkles,
  Headphones,
} from 'lucide-react';
import { StudySession } from '../types';
import { useData, formatDateKey, getDisplayDate } from '../context/DataContext';
import { PageHero } from '../components/common/PageHero';
import { Modal } from '../components/common/Modal';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
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
    if (hrs > 0) {
      return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
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
    <div className="space-y-6 max-w-4xl mx-auto pb-16 animate-fadeIn select-none">
      {/* 1. EDITORIAL HEADER */}
      <PageHero
        title="Focus Studio"
        subtitle="Lock in for homework, study sessions, coding, or reading. Track your focus time with zero distractions."
        kicker="DEEP WORK • STUDY TIMER"
        badgeLines={['LOCK IN.', 'AVOID DISTRACTIONS.', 'GET IT DONE.']}
        actions={
          <Button
            variant="primary"
            size="sm"
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-1.5 text-xs font-sans font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-black shadow-[0_0_15px_rgba(6,182,212,0.35)]"
          >
            <Plus size={14} />
            <span>Log Study Block</span>
          </Button>
        }
      />

      {/* 2. COLORFUL METRICS ROW */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Metric 1: Weekly Quota (Cyan) */}
        <div className="bg-gradient-to-br from-cyan-950/30 via-zinc-900/50 to-transparent backdrop-blur-xl border border-cyan-500/35 rounded-2xl p-5 shadow-[0_0_20px_rgba(6,182,212,0.1)] flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-cyan-300 font-bold block">
              Weekly Quota
            </span>
            <p className="text-2xl font-heading font-extrabold tracking-tight text-white mt-1">
              {weeklyStudyHoursLogged} <span className="text-sm font-sans text-cyan-300/70 font-normal">/ {targetHours}h</span>
            </p>
          </div>
          <div className="pt-3 border-t border-cyan-500/15 mt-3">
            <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all shadow-[0_0_10px_rgba(6,182,212,0.5)]" style={{ width: `${weeklyPercent}%` }} />
            </div>
          </div>
        </div>

        {/* Metric 2: Today's Output (Purple) */}
        <div className="bg-gradient-to-br from-purple-950/30 via-zinc-900/50 to-transparent backdrop-blur-xl border border-purple-500/35 rounded-2xl p-5 shadow-[0_0_20px_rgba(168,85,247,0.1)] flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-purple-300 font-bold block">
              Today&apos;s Output
            </span>
            <p className="text-2xl font-heading font-extrabold tracking-tight text-white mt-1">
              {todayHours} <span className="text-sm font-sans text-purple-300/70 font-normal">hours logged</span>
            </p>
          </div>
          <div className="pt-3 border-t border-purple-500/15 mt-3">
            <span className="text-[11px] font-sans text-purple-300 font-semibold">
              {todaySessions.length} session{todaySessions.length === 1 ? '' : 's'} recorded
            </span>
          </div>
        </div>

        {/* Metric 3: Total Recorded (Emerald) */}
        <div className="bg-gradient-to-br from-emerald-950/30 via-zinc-900/50 to-transparent backdrop-blur-xl border border-emerald-500/35 rounded-2xl p-5 shadow-[0_0_20px_rgba(16,185,129,0.1)] flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-emerald-300 font-bold block">
              Total Sessions
            </span>
            <p className="text-2xl font-heading font-extrabold tracking-tight text-white mt-1">
              {studySessions.length} <span className="text-sm font-sans text-emerald-300/70 font-normal">blocks</span>
            </p>
          </div>
          <div className="pt-3 border-t border-emerald-500/15 mt-3">
            <span className="text-[11px] font-sans text-emerald-300 font-semibold">
              Total focus time recorded
            </span>
          </div>
        </div>
      </div>

      {/* 3. FOCUS TIMER CONSOLE (Vibrant Cyan Digital Readout) */}
      <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-cyan-950/35 via-zinc-900/60 to-[#0B0D13] backdrop-blur-xl border border-cyan-500/40 shadow-[0_0_40px_rgba(6,182,212,0.15)] space-y-6 text-center">
        <div className="max-w-md mx-auto space-y-1">
          <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-cyan-300 font-bold block">
            Focus Console
          </span>
          <h3 className="text-lg font-heading font-bold text-white">
            Active Study Stopwatch
          </h3>
        </div>

        {/* Big Radiant Digital Clock Display */}
        <div className="text-5xl md:text-7xl font-mono font-black tracking-wider text-cyan-400 drop-shadow-[0_0_35px_rgba(6,182,212,0.65)] my-4">
          {formatTimer(studyTimerElapsed)}
        </div>

        <div className="max-w-md mx-auto grid grid-cols-2 gap-3 text-left">
          <div>
            <label className="block text-[11px] font-sans text-cyan-300 uppercase tracking-wider mb-1 font-bold">
              Subject
            </label>
            <input
              type="text"
              value={studyTimer.subject}
              onChange={(e) => updateStudyTimerMeta(e.target.value, studyTimer.topic)}
              placeholder="e.g. Mathematics"
              className="w-full bg-cyan-950/20 border border-cyan-500/30 rounded-xl px-3 py-1.5 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
            />
          </div>

          <div>
            <label className="block text-[11px] font-sans text-cyan-300 uppercase tracking-wider mb-1 font-bold">
              Topic / Chapter
            </label>
            <input
              type="text"
              value={studyTimer.topic}
              onChange={(e) => updateStudyTimerMeta(studyTimer.subject, e.target.value)}
              placeholder="e.g. Calculus HW"
              className="w-full bg-cyan-950/20 border border-cyan-500/30 rounded-xl px-3 py-1.5 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
            />
          </div>
        </div>

        {/* Timer Actions: Vibrant Glowing CTAs */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={handleStartPause}
            className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl font-sans font-bold text-xs transition-all shadow-[0_0_20px_rgba(6,182,212,0.35)] focus:outline-none ${
              studyTimer.isRunning
                ? 'bg-amber-500 hover:bg-amber-400 text-black'
                : 'bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black'
            }`}
          >
            {studyTimer.isRunning ? <Pause size={14} /> : <Play size={14} fill="currentColor" />}
            <span>{studyTimer.isRunning ? 'Pause Focus' : 'Start Focus Block'}</span>
          </button>

          {studyTimerElapsed > 0 && (
            <>
              <button
                type="button"
                onClick={handleLogFromTimer}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-sans font-bold text-xs shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all focus:outline-none"
              >
                <CheckCircle size={14} />
                <span>Log to Journal</span>
              </button>

              <button
                type="button"
                onClick={resetStudyTimer}
                className="p-2.5 rounded-2xl bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/30 text-cyan-300 hover:text-white transition-colors focus:outline-none"
                title="Reset timer"
              >
                <RotateCcw size={14} />
              </button>
            </>
          )}
        </div>

        {/* Ambient & Focus Audio Shortcut */}
        <div className="pt-2 flex items-center justify-center">
          <button
            type="button"
            onClick={() => {
              sound.tick();
              setIsMusicDrawerOpen(true);
            }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 text-xs font-sans text-zinc-300 hover:text-white transition-all focus:outline-none focus:ring-1 focus:ring-white"
          >
            <Headphones size={13} className={activeMusicId ? 'text-emerald-400 animate-pulse' : 'text-zinc-400'} />
            <span>
              {activeMusicId ? 'Focus Soundtrack Active • Manage Audio' : 'Soundtrack This Session (Spotify / YouTube)'}
            </span>
          </button>
        </div>
      </div>

      {/* 4. COMPLETED STUDY SESSIONS LEDGER */}
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
          <h3 className="text-base font-heading font-semibold text-white">
            Completed Study Sessions ({todaySessions.length})
          </h3>
          <span className="text-xs font-sans text-zinc-500">
            Date: {getDisplayDate(selectedDate)}
          </span>
        </div>

        {todaySessions.length === 0 ? (
          <div className="bg-white/[0.02] border border-dashed border-white/[0.1] rounded-2xl p-8 text-center space-y-2">
            <p className="text-xs text-zinc-400 font-sans">
              No study sessions logged for this day.
            </p>
            <p className="text-[11px] font-sans text-zinc-500">
              Start the focus timer above or click &ldquo;Log Study Block&rdquo; to record manual study hours.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {todaySessions.map((session) => (
              <div
                key={session.id}
                className="p-4 rounded-2xl bg-white/[0.025] border border-white/[0.08] shadow-sm flex items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-heading font-semibold text-white">
                      {session.subject}
                    </span>
                    <Badge variant="neutral">{session.durationMinutes} mins</Badge>
                    <span className="text-xs font-sans text-zinc-500">
                      ({session.focusRating}/5 focus)
                    </span>
                  </div>
                  {session.topicCovered && (
                    <p className="text-xs font-sans text-zinc-400">
                      Topic: {session.topicCovered}
                    </p>
                  )}
                  {session.notes && (
                    <p className="text-xs font-sans text-zinc-500 italic">
                      &ldquo;{session.notes}&rdquo;
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => deleteStudySession(session.id)}
                  className="p-1.5 rounded-xl text-zinc-500 hover:text-rose-400 hover:bg-white/[0.06] border border-white/[0.08] transition-colors focus:outline-none focus:ring-1 focus:ring-white"
                  title="Delete Session"
                >
                  <Trash2 size={13} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

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
              placeholder="e.g. Systems Architecture"
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-2 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-white"
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
              placeholder="e.g. Distributed Consensus"
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-2 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-white"
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
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-2 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-white"
              />
            </div>

            <div>
              <label className="block text-xs font-sans text-zinc-400 mb-1">
                Focus Quality (1 to 5)
              </label>
              <select
                value={manualFocus}
                onChange={(e) => setManualFocus(Number(e.target.value))}
                className="w-full bg-[#15171C] border border-white/[0.08] rounded-xl px-3 py-2 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-white"
              >
                <option value={5}>5 — Flow state (Zero drift)</option>
                <option value={4}>4 — High concentration</option>
                <option value={3}>3 — Moderate focus</option>
                <option value={2}>2 — Frequent distractions</option>
                <option value={1}>1 — Poor / scattered</option>
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
              placeholder="What core concept was mastered? What needs review?"
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl p-3 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-white resize-none"
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
            <Button type="submit" variant="primary" size="sm">
              Record Session
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
