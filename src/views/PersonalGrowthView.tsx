import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { 
  Sparkles, 
  Smile, 
  Shield, 
  BookMarked, 
  Plus, 
  Trash2,
  TrendingUp,
  Target
} from 'lucide-react';

export const PersonalGrowthView: React.FC = () => {
  const { 
    growthRatings, 
    logGrowthRating, 
    lessonsLearned, 
    addLessonLearned, 
    deleteLessonLearned,
    objectives,
    addObjective,
    updateObjective,
    deleteObjective
  } = useData();

  const [happyScore, setHappyScore] = useState(8);
  const [confidenceScore, setConfidenceScore] = useState(8);
  const [developmentScore, setDevelopmentScore] = useState(8);
  const [reflectionNote, setReflectionNote] = useState('');
  const [savedFeedback, setSavedFeedback] = useState(false);

  const [lessonTitle, setLessonTitle] = useState('');
  const [lessonText, setLessonText] = useState('');
  const [lessonCategory, setLessonCategory] = useState('Discipline');
  const [showLessonModal, setShowLessonModal] = useState(false);

  // Objective state
  const [objTitle, setObjTitle] = useState('');
  const [objCategory, setObjCategory] = useState('Mindset');
  const [objTargetDate, setObjTargetDate] = useState('2026-11-30');
  const [showObjModal, setShowObjModal] = useState(false);

  const handleLogRatings = (e: React.FormEvent) => {
    e.preventDefault();
    logGrowthRating({
      happinessRating: happyScore,
      confidenceRating: confidenceScore,
      developmentRating: developmentScore,
      note: reflectionNote.trim() || undefined,
    });
    setSavedFeedback(true);
    setTimeout(() => setSavedFeedback(false), 2000);
  };

  const handleAddLesson = (e: React.FormEvent) => {
    e.preventDefault();
    if (lessonTitle.trim() && lessonText.trim()) {
      addLessonLearned({
        title: lessonTitle.trim(),
        reflection: lessonText.trim(),
        category: lessonCategory,
      });
      setLessonTitle('');
      setLessonText('');
      setShowLessonModal(false);
    }
  };

  const handleAddObjective = (e: React.FormEvent) => {
    e.preventDefault();
    if (objTitle.trim()) {
      addObjective({
        title: objTitle.trim(),
        category: objCategory,
        targetDate: objTargetDate,
        progressPercent: 50,
      });
      setObjTitle('');
      setShowObjModal(false);
    }
  };



  return (
    <div className="space-y-8 animate-fadeIn font-sans">
      {/* 1. Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--card-border)] pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>Introspective Calibration</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Personal Growth & Wisdom
          </h2>
          <p className="text-xs text-[var(--text-secondary)] mt-1">
            Subjective personal check-in: state of mind, principles learned, and self-mastery objectives.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setShowObjModal(true)}
            className="px-3.5 py-2 rounded-xl bg-[var(--pill-bg)] hover:bg-[var(--card-border)] text-xs text-[var(--text-primary)] font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Target className="w-3.5 h-3.5 text-cyan-400" />
            <span>New Objective</span>
          </button>
          <button
            onClick={() => setShowLessonModal(true)}
            className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold flex items-center gap-2 shadow-sm transition-all cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Record Lesson</span>
          </button>
        </div>
      </div>

      {/* 2. Today's State of Mind Reflection */}
      <div className="p-6 rounded-3xl creamy-surface space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--card-border)] pb-3">
          <div>
            <h3 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider">
              State of Mind & Self-Perception
            </h3>
            <p className="text-[11px] text-[var(--text-muted)] mt-0.5">
              Reflections to understand changes over time — NOT objective measurements of your worth.
            </p>
          </div>
          <span className="text-xs font-mono text-rose-400 font-bold">
            Happiness: {happyScore}/10 · Confidence: {confidenceScore}/10 · Development: {developmentScore}/10
          </span>
        </div>

        <form onSubmit={handleLogRatings} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Happiness */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[var(--text-secondary)] flex items-center gap-1.5 font-medium">
                  <Smile className="w-4 h-4 text-amber-400" /> Subjective Well-being
                </span>
                <span className="font-mono font-bold text-[var(--text-primary)]">{happyScore}/10</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={happyScore}
                onChange={(e) => setHappyScore(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer"
              />
              <span className="text-[10px] text-[var(--text-muted)] block">Calmness & contentedness</span>
            </div>

            {/* Confidence */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[var(--text-secondary)] flex items-center gap-1.5 font-medium">
                  <Shield className="w-4 h-4 text-indigo-400" /> Self-Efficacy / Agency
                </span>
                <span className="font-mono font-bold text-[var(--text-primary)]">{confidenceScore}/10</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={confidenceScore}
                onChange={(e) => setConfidenceScore(Number(e.target.value))}
                className="w-full accent-indigo-400 cursor-pointer"
              />
              <span className="text-[10px] text-[var(--text-muted)] block">Confidence to handle challenges</span>
            </div>

            {/* Development */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[var(--text-secondary)] flex items-center gap-1.5 font-medium">
                  <TrendingUp className="w-4 h-4 text-emerald-400" /> Growth Trajectory
                </span>
                <span className="font-mono font-bold text-[var(--text-primary)]">{developmentScore}/10</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={developmentScore}
                onChange={(e) => setDevelopmentScore(Number(e.target.value))}
                className="w-full accent-emerald-400 cursor-pointer"
              />
              <span className="text-[10px] text-[var(--text-muted)] block">Perceived clarity of progress</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[11px] text-[var(--text-muted)]">Reflection / Context Note:</label>
            <input
              type="text"
              value={reflectionNote}
              onChange={(e) => setReflectionNote(e.target.value)}
              placeholder="e.g. Cleared difficult engineering blocker, felt deep relief and momentum"
              className="w-full px-3.5 py-2.5 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="text-[11px] text-[var(--text-muted)]">
              Last saved: {growthRatings[0]?.date || 'Today'}
            </span>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold transition-all cursor-pointer"
            >
              Log Daily Reflection
            </button>
          </div>

          {savedFeedback && (
            <div className="text-center text-xs font-medium text-emerald-400 animate-fadeIn">
              ✓ State of mind logged to growthRatings ledger.
            </div>
          )}
        </form>
      </div>

      {/* 3. Personal Objectives & Self-Mastery */}
      <div className="p-6 rounded-3xl creamy-surface space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
              <Target className="w-4 h-4 text-cyan-400" /> Personal Objectives & Self-Mastery
            </h3>
            <p className="text-xs text-[var(--text-muted)]">Non-academic, character and habit objectives</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {objectives.map((obj) => (
            <div key={obj.id} className="p-4 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="font-semibold text-xs text-[var(--text-primary)] block">{obj.title}</span>
                  <span className="text-[10px] text-cyan-400 font-mono">{obj.category} • Target {obj.targetDate}</span>
                </div>
                <button
                  onClick={() => deleteObjective(obj.id)}
                  className="text-[var(--text-muted)] hover:text-rose-400 p-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-mono text-[var(--text-muted)]">
                  <span>Progress</span>
                  <span>{obj.progressPercent}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-[var(--surface-bg)] overflow-hidden">
                  <div className="h-full bg-cyan-400 rounded-full" style={{ width: `${obj.progressPercent}%` }} />
                </div>
              </div>

              <div className="flex gap-1 pt-1">
                {[25, 50, 75, 100].map((step) => (
                  <button
                    key={step}
                    onClick={() => updateObjective(obj.id, { progressPercent: step })}
                    className={`flex-1 py-1 text-[10px] rounded-lg font-mono transition-all ${
                      obj.progressPercent >= step ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'bg-[var(--surface-bg)] text-[var(--text-muted)]'
                    }`}
                  >
                    {step}%
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Lessons Learned Ledger */}
      <div className="p-6 rounded-3xl creamy-surface space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
              <BookMarked className="w-4 h-4 text-violet-400" /> Wisdom & Lessons Learned
            </h3>
            <p className="text-xs text-[var(--text-muted)]">
              Principles extracted from daily experience to avoid repeating past mistakes
            </p>
          </div>
          <span className="text-xs font-mono text-[var(--text-muted)]">{lessonsLearned.length} principles recorded</span>
        </div>

        <div className="space-y-3">
          {lessonsLearned.map((lesson) => (
            <div 
              key={lesson.id}
              className="p-4 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] space-y-1.5 hover:border-[var(--text-muted)]/30 transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-xs text-[var(--text-primary)]">{lesson.title}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[var(--surface-bg)] text-violet-400 border border-violet-500/20">
                    {lesson.category}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">{lesson.date}</span>
                  <button
                    onClick={() => deleteLessonLearned(lesson.id)}
                    className="text-[var(--text-muted)] hover:text-rose-400 p-1 transition-colors cursor-pointer"
                    title="Delete lesson"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                &ldquo;{lesson.reflection}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Add Lesson Modal */}
      {showLessonModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowLessonModal(false)} />
          <form onSubmit={handleAddLesson} className="relative z-10 w-full max-w-lg p-6 rounded-3xl creamy-surface shadow-2xl space-y-4">
            <h3 className="text-base font-semibold text-[var(--text-primary)] pb-2 border-b border-[var(--card-border)]">
              Record Lesson / Insight
            </h3>

            <div className="space-y-1.5">
              <label className="text-[11px] text-[var(--text-muted)]">Principle / Title:</label>
              <input
                type="text"
                placeholder="e.g. Energy precedes momentum, Sleep is a multiplier"
                value={lessonTitle}
                onChange={(e) => setLessonTitle(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] text-[var(--text-muted)]">Category:</label>
              <select
                value={lessonCategory}
                onChange={(e) => setLessonCategory(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
              >
                <option value="Discipline">Discipline</option>
                <option value="Systems">Systems</option>
                <option value="Mindset">Mindset</option>
                <option value="Health">Health</option>
                <option value="Relationships">Relationships</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] text-[var(--text-muted)]">Observation & Reflection:</label>
              <textarea
                rows={3}
                placeholder="What did you experience, what pattern did you notice, and what should you do going forward?"
                value={lessonText}
                onChange={(e) => setLessonText(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
              />
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowLessonModal(false)}
                className="flex-1 py-2.5 rounded-xl bg-[var(--pill-bg)] text-[var(--text-secondary)] text-xs font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold"
              >
                Save Principle
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Add Objective Modal */}
      {showObjModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowObjModal(false)} />
          <form onSubmit={handleAddObjective} className="relative z-10 w-full max-w-md p-6 rounded-3xl creamy-surface shadow-2xl space-y-4">
            <h3 className="text-base font-semibold text-[var(--text-primary)] pb-2 border-b border-[var(--card-border)]">
              Create Personal Objective
            </h3>

            <div className="space-y-1.5">
              <label className="text-[11px] text-[var(--text-muted)]">Objective Title:</label>
              <input
                type="text"
                placeholder="e.g. Read 20 physical books this year"
                value={objTitle}
                onChange={(e) => setObjTitle(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <label className="text-[11px] text-[var(--text-muted)]">Category:</label>
                <select
                  value={objCategory}
                  onChange={(e) => setObjCategory(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)]"
                >
                  <option value="Mindset">Mindset</option>
                  <option value="Health">Health</option>
                  <option value="Discipline">Discipline</option>
                  <option value="Reading">Reading</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] text-[var(--text-muted)]">Target Date:</label>
                <input
                  type="date"
                  value={objTargetDate}
                  onChange={(e) => setObjTargetDate(e.target.value)}
                  required
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs font-mono text-[var(--text-primary)]"
                />
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowObjModal(false)}
                className="flex-1 py-2.5 rounded-xl bg-[var(--pill-bg)] text-[var(--text-secondary)] text-xs font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold"
              >
                Save Objective
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
