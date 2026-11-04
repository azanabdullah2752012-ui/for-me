import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Clock, 
  GraduationCap, 
  Plus, 
  Trash2, 
  Award,
  BookOpen,
  CheckCircle2,
  FolderPlus
} from 'lucide-react';

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
    addStudySession,
    deleteStudySession,
    subjects,
    addSubject,
    deleteSubject,
    grades,
    addGradeItem,
    deleteGradeItem
  } = useData();

  const [sessionSavedMsg, setSessionSavedMsg] = useState(false);
  const [activeTab, setActiveTab] = useState<'timer' | 'manual' | 'subjects' | 'grades'>('timer');

  // Manual logging state
  const [manualSubject, setManualSubject] = useState(subjects[0]?.name || 'Computer Science');
  const [manualDurationMinutes, setManualDurationMinutes] = useState('45');
  const [manualNotes, setManualNotes] = useState('');
  const [manualDate, setManualDate] = useState(new Date().toISOString().slice(0, 10));

  // Subject management state
  const [newSubjName, setNewSubjName] = useState('');
  const [newSubjTargetHours, setNewSubjTargetHours] = useState('8');
  const [newSubjColor, setNewSubjColor] = useState('#8b5cf6');

  // Grade state
  const [showGradeModal, setShowGradeModal] = useState(false);
  const [gradeSubject, setGradeSubject] = useState(subjects[0]?.name || 'Computer Science');
  const [gradeTitle, setGradeTitle] = useState('');
  const [gradeScore, setGradeScore] = useState(95);
  const [gradeTotal, setGradeTotal] = useState(100);
  const [gradeTarget, setGradeTarget] = useState(90);
  const [gradeNotes, setGradeNotes] = useState('');

  const formatTimer = (totalSecs: number) => {
    const hrs = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSaveTimerSession = () => {
    if (studySeconds < 30) {
      alert('Focus session must be at least 30 seconds to log.');
      return;
    }
    saveStudySession();
    setSessionSavedMsg(true);
    setTimeout(() => setSessionSavedMsg(false), 2500);
  };

  const handleSaveManualSession = (e: React.FormEvent) => {
    e.preventDefault();
    const mins = parseInt(manualDurationMinutes, 10);
    if (!mins || mins <= 0) return;
    addStudySession({
      subject: manualSubject,
      durationSeconds: mins * 60,
      timestamp: `${manualDate}T12:00:00Z`,
      notes: manualNotes.trim() || undefined,
      sessionType: 'manual',
    });
    setManualNotes('');
    setSessionSavedMsg(true);
    setTimeout(() => setSessionSavedMsg(false), 2500);
  };

  const handleAddSubject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSubjName.trim()) return;
    addSubject({
      name: newSubjName.trim(),
      targetWeeklyHours: parseInt(newSubjTargetHours, 10) || 8,
      color: newSubjColor,
    });
    setNewSubjName('');
  };

  const handleAddGrade = (e: React.FormEvent) => {
    e.preventDefault();
    if (gradeTitle.trim()) {
      addGradeItem({
        subject: gradeSubject,
        title: gradeTitle.trim(),
        score: Number(gradeScore),
        total: Number(gradeTotal),
        date: new Date().toISOString().slice(0, 10),
        targetGrade: Number(gradeTarget),
        notes: gradeNotes.trim() || undefined,
      });
      setGradeTitle('');
      setGradeNotes('');
      setShowGradeModal(false);
    }
  };

  // Calculate verifiable total study minutes from actual recorded sessions (Condition 5)
  const totalVerifiedMinutes = studySessions.reduce((acc, s) => acc + Math.round(s.durationSeconds / 60), 0);
  const totalVerifiedHours = (totalVerifiedMinutes / 60).toFixed(1);

  // 7-day study totals
  const todayObj = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(todayObj.getDate() - 7);
  const past7DaysSessions = studySessions.filter((s) => new Date(s.timestamp) >= sevenDaysAgo);
  const past7DaysMinutes = past7DaysSessions.reduce((acc, s) => acc + Math.round(s.durationSeconds / 60), 0);
  const past7DaysHours = (past7DaysMinutes / 60).toFixed(1);

  // Subject distribution from actual recorded sessions
  const subjectMinutesMap: Record<string, number> = {};
  studySessions.forEach((s) => {
    subjectMinutesMap[s.subject] = (subjectMinutesMap[s.subject] || 0) + Math.round(s.durationSeconds / 60);
  });

  const subjectBreakdown = Object.entries(subjectMinutesMap).map(([subj, mins]) => ({
    subject: subj,
    minutes: mins,
    hours: (mins / 60).toFixed(1),
    percentage: totalVerifiedMinutes > 0 ? Math.round((mins / totalVerifiedMinutes) * 100) : 0,
  }));

  // Average grade calculation
  const averageGrade = grades.length > 0 
    ? Math.round(grades.reduce((acc, g) => acc + (g.score / g.total) * 100, 0) / grades.length)
    : 0;

  return (
    <div className="space-y-8 animate-fadeIn font-sans">
      {/* 1. Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--card-border)] pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">
            <GraduationCap className="w-3.5 h-3.5 text-violet-400" />
            <span>Academic Performance Engine</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Studies & Knowledge Ledger
          </h2>
          <p className="text-xs text-[var(--text-secondary)] mt-1">
            Verified study session records, custom subject quotas, and assessment grade telemetry.
          </p>
        </div>

        {/* Telemetry Pills */}
        <div className="flex items-center gap-3">
          <div className="px-3.5 py-1.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-sans">
            <span className="text-[var(--text-muted)]">7-Day Study: </span>
            <span className="font-bold text-violet-400 font-mono">{past7DaysHours}h</span>
          </div>
          <div className="px-3.5 py-1.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-sans">
            <span className="text-[var(--text-muted)]">Verified Total: </span>
            <span className="font-bold text-[var(--text-primary)] font-mono">{totalVerifiedHours}h</span>
          </div>
          <div className="px-3.5 py-1.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-sans">
            <span className="text-[var(--text-muted)]">Grade Avg: </span>
            <span className="font-bold text-emerald-400 font-mono">{averageGrade}%</span>
          </div>
        </div>
      </div>

      {/* 2. Sub-Tabs */}
      <div className="flex items-center gap-2 p-1 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)]">
        <button
          onClick={() => setActiveTab('timer')}
          className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
            activeTab === 'timer'
              ? 'bg-[var(--surface-bg)] text-violet-400 shadow-sm'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          }`}
        >
          Live Stopwatch ({isStudyActive ? 'Active' : 'Idle'})
        </button>
        <button
          onClick={() => setActiveTab('manual')}
          className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
            activeTab === 'manual'
              ? 'bg-[var(--surface-bg)] text-violet-400 shadow-sm'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          }`}
        >
          Manual Session Entry
        </button>
        <button
          onClick={() => setActiveTab('subjects')}
          className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
            activeTab === 'subjects'
              ? 'bg-[var(--surface-bg)] text-violet-400 shadow-sm'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          }`}
        >
          Subject Targets ({subjects.length})
        </button>
        <button
          onClick={() => setActiveTab('grades')}
          className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
            activeTab === 'grades'
              ? 'bg-[var(--surface-bg)] text-violet-400 shadow-sm'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          }`}
        >
          Assessments & Grades ({grades.length})
        </button>
      </div>

      {/* 3. SUB-TAB: LIVE STOPWATCH TIMER */}
      {activeTab === 'timer' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 p-6 rounded-3xl creamy-surface space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
              <span className="text-xs font-semibold text-[var(--text-primary)] flex items-center gap-2">
                <Clock className="w-4 h-4 text-violet-400" /> Precision Stopwatch
              </span>
              <span className="text-[10px] font-mono text-[var(--text-muted)]">Verified Persistence</span>
            </div>

            {/* Subject Selector */}
            <div className="space-y-2">
              <label className="text-xs text-[var(--text-muted)]">Active Subject:</label>
              <select
                value={studySubject}
                onChange={(e) => setStudySubject(e.target.value)}
                disabled={isStudyActive}
                className="w-full px-3.5 py-2.5 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-sans text-[var(--text-primary)] cursor-pointer"
              >
                {subjects.map((s) => (
                  <option key={s.id} value={s.name}>
                    {s.name} ({s.targetWeeklyHours}h/wk target)
                  </option>
                ))}
              </select>
            </div>

            {/* Big Timer Display */}
            <div className="py-4 text-center">
              <div className="text-5xl font-mono font-light text-[var(--text-primary)] tracking-tight">
                {formatTimer(studySeconds)}
              </div>
              <div className="text-xs font-sans text-[var(--text-muted)] mt-2">
                {isStudyActive ? 'Session in progress...' : 'Ready to start'}
              </div>
            </div>

            {/* Timer Controls */}
            <div className="space-y-3">
              <div className="flex gap-2">
                <button
                  onClick={toggleStudyTimer}
                  className="flex-1 py-3 rounded-2xl bg-violet-600 hover:bg-violet-500 text-white font-sans text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-violet-600/20 transition-all cursor-pointer"
                >
                  {isStudyActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                  <span>{isStudyActive ? 'Pause Session' : 'Start Focus'}</span>
                </button>

                <button
                  onClick={resetStudyTimer}
                  disabled={studySeconds === 0}
                  className="px-4 py-3 rounded-2xl bg-[var(--pill-bg)] hover:bg-[var(--card-border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer disabled:opacity-40"
                  title="Reset timer"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={handleSaveTimerSession}
                disabled={studySeconds < 30}
                className="w-full py-2.5 rounded-2xl border border-violet-500/30 bg-violet-500/10 hover:bg-violet-500/20 text-violet-300 font-sans text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Save Session to Verified Ledger</span>
              </button>

              {sessionSavedMsg && (
                <div className="text-center text-xs font-medium text-emerald-400 animate-fadeIn">
                  ✓ Session verified and written to studySessions!
                </div>
              )}
            </div>
          </div>

          {/* Real Verified Study Sessions Table (Condition 5) */}
          <div className="lg:col-span-2 p-6 rounded-3xl creamy-surface space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
              <div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)]">Verified Session History</h3>
                <p className="text-xs text-[var(--text-muted)]">
                  {studySessions.length} total verified sessions recorded • {totalVerifiedHours}h all-time
                </p>
              </div>
            </div>

            {studySessions.length === 0 ? (
              <div className="py-12 text-center text-xs text-[var(--text-muted)]">
                No recorded study sessions yet. Start the stopwatch or manually log a session to establish your verified ledger.
              </div>
            ) : (
              <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
                {studySessions.map((session) => {
                  const mins = Math.round(session.durationSeconds / 60);
                  const hrs = (mins / 60).toFixed(1);
                  const timeFormatted = new Date(session.timestamp).toLocaleDateString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });

                  return (
                    <div 
                      key={session.id}
                      className="flex items-center justify-between p-3.5 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 font-mono font-bold">
                          📖
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-[var(--text-primary)]">{session.subject}</span>
                            <span className="px-2 py-0.5 rounded-md bg-violet-500/20 text-violet-300 font-mono text-[10px]">
                              {mins} mins ({hrs}h)
                            </span>
                          </div>
                          <p className="text-[11px] text-[var(--text-muted)] mt-0.5">
                            {timeFormatted}
                            {session.notes && <span className="italic text-[var(--text-secondary)]"> — &ldquo;{session.notes}&rdquo;</span>}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => deleteStudySession(session.id)}
                        className="text-[var(--text-muted)] hover:text-rose-400 p-1 transition-colors"
                        title="Delete session"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}

      {/* 4. SUB-TAB: MANUAL SESSION ENTRY */}
      {activeTab === 'manual' && (
        <form onSubmit={handleSaveManualSession} className="max-w-xl p-6 rounded-3xl creamy-surface space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
            <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-violet-400" /> Log Offline or External Study Session
            </h3>
            <span className="text-[10px] font-mono text-[var(--text-muted)]">Direct Ledger Entry</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-[11px] text-[var(--text-muted)]">Subject:</label>
              <select
                value={manualSubject}
                onChange={(e) => setManualSubject(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
              >
                {subjects.map((s) => (
                  <option key={s.id} value={s.name}>{s.name}</option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] text-[var(--text-muted)]">Duration (Minutes):</label>
              <input
                type="number"
                value={manualDurationMinutes}
                onChange={(e) => setManualDurationMinutes(e.target.value)}
                min="5"
                max="600"
                required
                className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] text-[var(--text-muted)]">Session Date:</label>
            <input
              type="date"
              value={manualDate}
              onChange={(e) => setManualDate(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] text-[var(--text-muted)]">Topic / Notes (optional):</label>
            <input
              type="text"
              value={manualNotes}
              onChange={(e) => setManualNotes(e.target.value)}
              placeholder="e.g. Graph algorithm problem set, chapter 4 review"
              className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-sans text-[var(--text-primary)]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs transition-colors"
          >
            Record Study Session
          </button>
        </form>
      )}

      {/* 5. SUB-TAB: SUBJECT TARGETS & DISTRIBUTION */}
      {activeTab === 'subjects' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Create Subject Form */}
            <form onSubmit={handleAddSubject} className="lg:col-span-1 p-6 rounded-3xl creamy-surface space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
                <span className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
                  <FolderPlus className="w-4 h-4 text-violet-400" /> Manage Subjects
                </span>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">Weekly Targets</span>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] text-[var(--text-muted)]">Subject Name:</label>
                <input
                  type="text"
                  value={newSubjName}
                  onChange={(e) => setNewSubjName(e.target.value)}
                  placeholder="e.g. Organic Chemistry, Greek Philosophy"
                  required
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-sans text-[var(--text-primary)]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] text-[var(--text-muted)]">Target Weekly Hours:</label>
                <input
                  type="number"
                  value={newSubjTargetHours}
                  onChange={(e) => setNewSubjTargetHours(e.target.value)}
                  min="1"
                  max="40"
                  required
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] text-[var(--text-muted)]">Color Tag:</label>
                <div className="flex gap-2">
                  {['#8b5cf6', '#3b82f6', '#06b6d4', '#10b981', '#f59e0b', '#ec4899'].map((c) => (
                    <button
                      type="button"
                      key={c}
                      onClick={() => setNewSubjColor(c)}
                      className={`w-6 h-6 rounded-full border-2 transition-all ${newSubjColor === c ? 'scale-110 border-white' : 'border-transparent'}`}
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs transition-colors"
              >
                Add Subject
              </button>
            </form>

            {/* Subject Breakdown & Progress */}
            <div className="lg:col-span-2 p-6 rounded-3xl creamy-surface space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
                <div>
                  <h3 className="text-sm font-semibold text-[var(--text-primary)]">Subject Distribution (Actual Logs)</h3>
                  <p className="text-xs text-[var(--text-muted)]">Derived dynamically from verified studySessions</p>
                </div>
              </div>

              <div className="space-y-3">
                {subjects.map((s) => {
                  const recorded = subjectBreakdown.find((b) => b.subject === s.name);
                  const recordedHours = recorded ? parseFloat(recorded.hours) : 0;
                  const progressPct = Math.min(100, Math.round((recordedHours / s.targetWeeklyHours) * 100));

                  return (
                    <div key={s.id} className="p-3.5 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.color || '#8b5cf6' }} />
                          <span className="font-semibold text-xs text-[var(--text-primary)]">{s.name}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs text-[var(--text-secondary)]">
                            {recordedHours}h / {s.targetWeeklyHours}h weekly
                          </span>
                          <button
                            onClick={() => deleteSubject(s.id)}
                            className="text-[var(--text-muted)] hover:text-rose-400 transition-colors p-1"
                            title="Delete subject"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <div className="w-full h-1.5 rounded-full bg-[var(--surface-bg)] overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-300" 
                          style={{ width: `${progressPct}%`, backgroundColor: s.color || '#8b5cf6' }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 6. SUB-TAB: ASSESSMENTS & GRADES */}
      {activeTab === 'grades' && (
        <div className="space-y-6">
          <div className="p-6 rounded-3xl creamy-surface space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
              <div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" /> Assessment & Examination Ledger
                </h3>
                <p className="text-xs text-[var(--text-muted)]">Track academic marks against targets over time</p>
              </div>

              <button
                onClick={() => setShowGradeModal(true)}
                className="px-3.5 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Log Assessment</span>
              </button>
            </div>

            {/* Assessment Ledger List */}
            {grades.length === 0 ? (
              <div className="py-8 text-center text-xs text-[var(--text-muted)]">
                No grades recorded yet. Log your quizzes, examinations, or assignments.
              </div>
            ) : (
              <div className="space-y-2.5">
                {grades.map((g) => {
                  const pct = Math.round((g.score / g.total) * 100);
                  const metTarget = g.targetGrade ? pct >= g.targetGrade : true;

                  return (
                    <div key={g.id} className="flex items-center justify-between p-3.5 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-[var(--text-primary)]">{g.title}</span>
                          <span className="px-2 py-0.5 rounded-md bg-[var(--surface-bg)] text-[var(--text-secondary)] font-mono text-[10px]">
                            {g.subject}
                          </span>
                        </div>
                        <p className="text-[11px] text-[var(--text-muted)] mt-0.5">
                          {g.date} • Score: {g.score}/{g.total}
                          {g.targetGrade && (
                            <span className={`ml-2 font-mono ${metTarget ? 'text-emerald-400' : 'text-amber-400'}`}>
                              (Target: {g.targetGrade}%)
                            </span>
                          )}
                          {g.notes && <span className="italic text-[var(--text-secondary)]"> — &ldquo;{g.notes}&rdquo;</span>}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className={`font-mono font-bold text-sm ${pct >= 90 ? 'text-emerald-400' : pct >= 80 ? 'text-violet-400' : 'text-amber-400'}`}>
                          {pct}%
                        </span>
                        <button
                          onClick={() => deleteGradeItem(g.id)}
                          className="text-[var(--text-muted)] hover:text-rose-400 p-1 transition-colors"
                          title="Delete assessment"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Grade Logging Modal */}
      {showGradeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowGradeModal(false)} />
          <form onSubmit={handleAddGrade} className="relative z-10 w-full max-w-md p-6 rounded-3xl creamy-surface shadow-2xl space-y-4">
            <h3 className="text-base font-semibold text-[var(--text-primary)] pb-2 border-b border-[var(--card-border)]">
              Log Assessment Grade
            </h3>

            <div className="space-y-1.5">
              <label className="text-[11px] text-[var(--text-muted)]">Subject:</label>
              <select
                value={gradeSubject}
                onChange={(e) => setGradeSubject(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
              >
                {subjects.map((s) => (
                  <option key={s.id} value={s.name}>{s.name}</option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] text-[var(--text-muted)]">Assessment Title:</label>
              <input
                type="text"
                value={gradeTitle}
                onChange={(e) => setGradeTitle(e.target.value)}
                placeholder="e.g. Midterm Examination"
                required
                className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
              />
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="space-y-1">
                <label className="text-[11px] text-[var(--text-muted)]">Score:</label>
                <input
                  type="number"
                  value={gradeScore}
                  onChange={(e) => setGradeScore(Number(e.target.value))}
                  required
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] text-[var(--text-muted)]">Total:</label>
                <input
                  type="number"
                  value={gradeTotal}
                  onChange={(e) => setGradeTotal(Number(e.target.value))}
                  required
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] text-[var(--text-muted)]">Target %:</label>
                <input
                  type="number"
                  value={gradeTarget}
                  onChange={(e) => setGradeTarget(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] text-[var(--text-muted)]">Notes (optional):</label>
              <input
                type="text"
                value={gradeNotes}
                onChange={(e) => setGradeNotes(e.target.value)}
                placeholder="e.g. Aced graph questions, review proof 3"
                className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
              />
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowGradeModal(false)}
                className="flex-1 py-2.5 rounded-xl bg-[var(--pill-bg)] text-[var(--text-secondary)] text-xs font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold"
              >
                Save Assessment
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
