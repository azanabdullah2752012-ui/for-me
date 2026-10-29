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
    } else {
      startStudyTimer();
    }
  };

  const handleLogFromTimer = () => {
    if (studyTimerElapsed < 10) return;
    const durationMinutes = Math.max(1, Math.round(studyTimerElapsed / 60));

    sound.complete();
    addStudySession({
      date: selectedDate,
      subject: studyTimer.subject.trim() || 'Deep Work',
      topicCovered: studyTimer.topic.trim() || 'Cognitive Focus Block',
      durationMinutes,
      focusRating: 5,
      notes: `Logged via active focus session (${durationMinutes}m).`,
    });

    resetStudyTimer();
  };

  const handleManualAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualSubject.trim() || manualDuration <= 0) return;

    sound.complete();
    addStudySession({
      date: selectedDate,
      subject: manualSubject.trim(),
      topicCovered: manualTopic.trim() || 'Topic Study',
      durationMinutes: Number(manualDuration),
      focusRating: Number(manualFocus),
      notes: manualNotes.trim(),
    });

    setManualSubject('');
    setManualTopic('');
    setManualDuration(60);
    setManualNotes('');
    setIsModalOpen(false);
  };

  // Sessions for today
  const todaySessions = studySessions.filter((s) => s.date === selectedDate);
  const todayMinutes = todaySessions.reduce((acc, s) => acc + s.durationMinutes, 0);
  const todayHours = Math.round((todayMinutes / 60) * 10) / 10;

  const targetHours = settings.weeklyStudyTargetHours || 15;
  const weeklyPercent = Math.min(100, Math.round((weeklyStudyHoursLogged / targetHours) * 100));

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-16 animate-fadeIn">
      {/* 1. EDITORIAL HEADER */}
      <PageHero
        title="Deep Studies & Intellectual Craft"
        subtitle="Quiet, concentrated attention is the forge of mastery. Track deep work sessions, focus ratings, and weekly quotas."
        kicker="MY OBSERVATORY • INTELLECTUAL WORK"
        badgeLines={['UNBROKEN FOCUS.', 'DISTRACTION PURGED.', 'MASTERY ACCUMULATED.']}
        actions={
          <Button
            variant="starlight"
            size="sm"
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-1.5 text-xs font-sans"
          >
            <Plus size={14} />
            <span>Log Study Block</span>
          </Button>
        }
      />

      {/* 2. RESTRAINED METRICS ROW */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Metric 1: Weekly Quota */}
        <div className="bg-cosmic-surface/75 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 shadow-journal flex flex-col justify-between">
          <div>
            <span className="text-xs font-sans uppercase tracking-[0.16em] text-starlight-lavender font-semibold block">
              Weekly Quota
            </span>
            <p className="text-2xl font-heading font-bold tracking-tight text-paper-ink mt-1">
              {weeklyStudyHoursLogged} <span className="text-sm font-sans text-paper-muted font-normal">/ {targetHours}h</span>
            </p>
          </div>
          <div className="pt-3 border-t border-white/[0.06] mt-3">
            <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
              <div className="h-full bg-accent rounded-full transition-all" style={{ width: `${weeklyPercent}%` }} />
            </div>
          </div>
        </div>

        {/* Metric 2: Today's Output */}
        <div className="bg-cosmic-surface/75 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 shadow-journal flex flex-col justify-between">
          <div>
            <span className="text-xs font-sans uppercase tracking-[0.16em] text-starlight-lavender font-semibold block">
              Today&apos;s Output
            </span>
            <p className="text-2xl font-heading font-bold tracking-tight text-paper-ink mt-1">
              {todayHours} <span className="text-sm font-sans text-paper-muted font-normal">hours logged</span>
            </p>
          </div>
          <div className="pt-3 border-t border-white/[0.06] mt-3">
            <span className="text-[11px] font-sans text-paper-muted">
              {todaySessions.length} session{todaySessions.length === 1 ? '' : 's'} recorded
            </span>
          </div>
        </div>

        {/* Metric 3: Total Recorded */}
        <div className="bg-cosmic-surface/75 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 shadow-journal flex flex-col justify-between">
          <div>
            <span className="text-xs font-sans uppercase tracking-[0.16em] text-starlight-lavender font-semibold block">
              Total Sessions
            </span>
            <p className="text-2xl font-heading font-bold tracking-tight text-paper-ink mt-1">
              {studySessions.length} <span className="text-sm font-sans text-paper-muted font-normal">blocks</span>
            </p>
          </div>
          <div className="pt-3 border-t border-white/[0.06] mt-3">
            <span className="text-[11px] font-sans text-paper-muted">
              Lifetime cognitive output
            </span>
          </div>
        </div>
      </div>

      {/* 3. FOCUS TIMER CONSOLE */}
      <div className="p-6 md:p-8 rounded-2xl bg-cosmic-surface/75 backdrop-blur-xl border border-white/[0.08] shadow-journal space-y-6 text-center">
        <div className="max-w-md mx-auto space-y-1">
          <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-starlight-lavender font-semibold block">
            Focus Console
          </span>
          <h3 className="text-lg font-heading font-semibold text-paper-ink">
            Active Study Stopwatch
          </h3>
        </div>

        {/* Big Serene Clock Display */}
        <div className="text-5xl md:text-6xl font-mono font-light tracking-wider text-paper-ink my-4">
          {formatTimer(studyTimerElapsed)}
        </div>

        <div className="max-w-md mx-auto grid grid-cols-2 gap-3 text-left">
          <div>
            <label className="block text-[11px] font-sans text-paper-muted uppercase tracking-wider mb-1">
              Subject
            </label>
            <input
              type="text"
              value={studyTimer.subject}
              onChange={(e) => updateStudyTimerMeta(e.target.value, studyTimer.topic)}
              placeholder="e.g. Mathematics"
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-1.5 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent"
            />
          </div>

          <div>
            <label className="block text-[11px] font-sans text-paper-muted uppercase tracking-wider mb-1">
              Topic / Chapter
            </label>
            <input
              type="text"
              value={studyTimer.topic}
              onChange={(e) => updateStudyTimerMeta(studyTimer.subject, e.target.value)}
              placeholder="e.g. Linear Algebra"
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-1.5 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent"
            />
          </div>
        </div>

        {/* Timer Actions */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={handleStartPause}
            className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-sans font-medium text-xs text-white shadow-cosmic-glow transition-all ${
              studyTimer.isRunning ? 'bg-amber-500 hover:bg-amber-600' : 'bg-accent hover:bg-accent-hover'
            }`}
          >
            {studyTimer.isRunning ? <Pause size={14} /> : <Play size={14} />}
            <span>{studyTimer.isRunning ? 'Pause Focus' : 'Start Focus Block'}</span>
          </button>

          {studyTimerElapsed > 0 && (
            <>
              <button
                type="button"
                onClick={handleLogFromTimer}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-sans text-xs shadow-sm transition-all"
              >
                <CheckCircle size={14} />
                <span>Log to Journal</span>
              </button>

              <button
                type="button"
                onClick={resetStudyTimer}
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-paper-muted hover:text-paper-ink transition-colors"
                title="Reset timer"
              >
                <RotateCcw size={14} />
              </button>
            </>
          )}
        </div>
      </div>

      {/* 4. COMPLETED STUDY SESSIONS LEDGER */}
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
          <h3 className="text-base font-heading font-semibold text-paper-ink">
            Completed Study Sessions ({todaySessions.length})
          </h3>
          <span className="text-xs font-sans text-paper-muted">
            Date: {getDisplayDate(selectedDate)}
          </span>
        </div>

        {todaySessions.length === 0 ? (
          <div className="bg-cosmic-surface/60 backdrop-blur-xl border border-dashed border-white/[0.12] rounded-2xl p-8 text-center space-y-2">
            <p className="text-xs text-paper-muted font-sans">
              No study sessions logged for this day.
            </p>
            <p className="text-[11px] font-sans text-paper-muted">
              Start the focus timer above or click &ldquo;Log Study Block&rdquo; to record manual study hours.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {todaySessions.map((session) => (
              <div
                key={session.id}
                className="p-4 rounded-2xl bg-cosmic-surface/75 backdrop-blur-xl border border-white/[0.08] shadow-journal flex items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-heading font-semibold text-paper-ink">
                      {session.subject}
                    </span>
                    <Badge variant="starlight">{session.durationMinutes} mins</Badge>
                    <span className="text-xs font-sans text-paper-muted">
                      ({session.focusRating}/5 focus)
                    </span>
                  </div>
                  {session.topicCovered && (
                    <p className="text-xs font-sans text-paper-secondary">
                      Topic: {session.topicCovered}
                    </p>
                  )}
                  {session.notes && (
                    <p className="text-xs font-sans text-paper-muted italic">
                      &ldquo;{session.notes}&rdquo;
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => deleteStudySession(session.id)}
                  className="p-1.5 rounded-lg text-paper-muted hover:text-rose-400 hover:bg-white/[0.06] border border-white/[0.08] transition-colors"
                  title="Delete Session"
                >
                  <Trash2 size={13} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* MANUAL LOG STUDY MODAL */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Log Completed Study Block"
        subtitle="Manually enter focused academic work."
      >
        <form onSubmit={handleManualAdd} className="space-y-4">
          <div>
            <label className="block text-xs font-sans uppercase tracking-wider text-starlight-lavender mb-1">
              Subject Name <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              required
              value={manualSubject}
              onChange={(e) => setManualSubject(e.target.value)}
              placeholder="e.g. Computer Science / Operating Systems"
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-2 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent"
            />
          </div>

          <div>
            <label className="block text-xs font-sans uppercase tracking-wider text-starlight-lavender mb-1">
              Topic or Chapter
            </label>
            <input
              type="text"
              value={manualTopic}
              onChange={(e) => setManualTopic(e.target.value)}
              placeholder="e.g. Memory Virtualization"
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-2 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-sans uppercase tracking-wider text-starlight-lavender mb-1">
                Duration (minutes) <span className="text-accent">*</span>
              </label>
              <input
                type="number"
                min="1"
                required
                value={manualDuration}
                onChange={(e) => setManualDuration(Number(e.target.value))}
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-2 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-sans uppercase tracking-wider text-starlight-lavender mb-1">
                Focus Quality (1 - 5)
              </label>
              <select
                value={manualFocus}
                onChange={(e) => setManualFocus(Number(e.target.value))}
                className="w-full bg-cosmic-surface border border-white/[0.08] rounded-xl px-3 py-2 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent"
              >
                <option value={5}>5 - Flow State / Zero Distraction</option>
                <option value={4}>4 - High Focus / Minor Pauses</option>
                <option value={3}>3 - Moderate Focus</option>
                <option value={2}>2 - Heavy Friction / Restless</option>
                <option value={1}>1 - Broken Focus / Scattered</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-sans uppercase tracking-wider text-starlight-lavender mb-1">
              Key Insights / Concept Mastered
            </label>
            <textarea
              rows={2}
              value={manualNotes}
              onChange={(e) => setManualNotes(e.target.value)}
              placeholder="What core concept was solidified?"
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl p-2.5 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent"
            />
          </div>

          <div className="flex justify-end gap-2 pt-3 border-t border-white/[0.06]">
            <Button variant="ghost" size="sm" type="button" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="starlight" size="sm" type="submit">
              Save Study Block
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
