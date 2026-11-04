import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { 
  Sparkles, 
  Smile, 
  Shield, 
  BookMarked, 
  Plus, 
  Trash2
} from 'lucide-react';

export const PersonalGrowthView: React.FC = () => {
  const { 
    growthRatings, 
    logGrowthRating, 
    lessonsLearned, 
    addLessonLearned, 
    deleteLessonLearned 
  } = useData();

  const [happyScore, setHappyScore] = useState(8);
  const [confidenceScore, setConfidenceScore] = useState(8);
  const [reflectionNote, setReflectionNote] = useState('');
  const [savedFeedback, setSavedFeedback] = useState(false);

  const [lessonTitle, setLessonTitle] = useState('');
  const [lessonText, setLessonText] = useState('');
  const [lessonCategory, setLessonCategory] = useState('Discipline');
  const [showLessonModal, setShowLessonModal] = useState(false);

  const handleLogRatings = (e: React.FormEvent) => {
    e.preventDefault();
    logGrowthRating({
      happinessRating: happyScore,
      confidenceRating: confidenceScore,
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
            Subjective reflections on mental clarity, inner state, and principles learned along the way.
          </p>
        </div>

        <button
          onClick={() => setShowLessonModal(true)}
          className="self-start sm:self-auto px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold flex items-center gap-2 shadow-sm transition-all cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Record Lesson</span>
        </button>
      </div>

      {/* 2. Today's State of Mind Reflection (Ratings as Personal Reflections, Not Worth Assessment) */}
      <div className="p-6 rounded-3xl creamy-surface space-y-6">
        <div className="flex items-center justify-between border-b border-[var(--card-border)] pb-3">
          <div>
            <h3 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider">
              State of Mind & Self-Perception
            </h3>
            <p className="text-[11px] text-[var(--text-muted)]">
              Subjective personal check-in. Treat these ratings as quiet reflections, not objective scores.
            </p>
          </div>
          <span className="text-xs font-mono text-rose-400 font-bold">
            Happiness: {happyScore}/10 · Confidence: {confidenceScore}/10
          </span>
        </div>

        <form onSubmit={handleLogRatings} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Happiness Slider */}
            <div className="space-y-2 p-4 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-[var(--text-primary)] flex items-center gap-1.5">
                  <Smile className="w-4 h-4 text-rose-400" />
                  Inner Contentment & Joy
                </span>
                <span className="font-mono font-bold text-rose-400 text-sm">{happyScore}/10</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={happyScore}
                onChange={(e) => setHappyScore(Number(e.target.value))}
                className="w-full accent-rose-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[var(--text-muted)] font-mono">
                <span>1 - Foggy / Heavy</span>
                <span>10 - Deeply Grateful</span>
              </div>
            </div>

            {/* Confidence Slider */}
            <div className="space-y-2 p-4 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-[var(--text-primary)] flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-violet-400" />
                  Inner Confidence & Conviction
                </span>
                <span className="font-mono font-bold text-violet-400 text-sm">{confidenceScore}/10</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={confidenceScore}
                onChange={(e) => setConfidenceScore(Number(e.target.value))}
                className="w-full accent-violet-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[var(--text-muted)] font-mono">
                <span>1 - Hesitant / Uncertain</span>
                <span>10 - Resolute & Clear</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs text-[var(--text-muted)] block">
              Quick Observation / Why do you feel this way today?
            </label>
            <input
              type="text"
              placeholder="e.g. Cleared my physical workout early and focused on key deliverables without distraction."
              value={reflectionNote}
              onChange={(e) => setReflectionNote(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-rose-400"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-[11px] text-emerald-400 font-sans">
              {savedFeedback && '✓ Reflection saved to ledger.'}
            </span>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
            >
              Log State of Mind
            </button>
          </div>
        </form>

        {/* Recent State of Mind History */}
        {growthRatings.length > 0 && (
          <div className="pt-4 border-t border-[var(--card-border)] space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] block">
              Recent Reflection Logs
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {growthRatings.slice(0, 4).map((gr) => (
                <div key={gr.date} className="p-2.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-xs flex items-center justify-between">
                  <div>
                    <span className="font-mono text-[10px] text-[var(--text-muted)] block">{gr.date}</span>
                    {gr.note && <p className="text-[11px] text-[var(--text-secondary)] truncate max-w-[200px]">{gr.note}</p>}
                  </div>
                  <div className="text-right font-mono text-[11px] font-bold">
                    <span className="text-rose-400">H: {gr.happinessRating}</span> · <span className="text-violet-400">C: {gr.confidenceRating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 3. Lessons Learned Archive */}
      <div className="p-6 rounded-3xl creamy-surface space-y-4">
        <div className="flex items-center justify-between border-b border-[var(--card-border)] pb-3">
          <div className="flex items-center gap-2">
            <BookMarked className="w-4 h-4 text-violet-400" />
            <h3 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider">
              Lessons Learned & Wisdom Ledger
            </h3>
          </div>
          <span className="text-xs font-mono text-[var(--text-muted)]">
            {lessonsLearned.length} Key Realizations
          </span>
        </div>

        <div className="space-y-3">
          {lessonsLearned.map((lesson) => (
            <div
              key={lesson.id}
              className="p-4 rounded-2xl bg-[var(--pill-bg)] border border-[var(--card-border)] space-y-2 relative group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-violet-500/15 text-violet-300 border border-violet-500/30">
                    {lesson.category}
                  </span>
                  <h4 className="text-xs font-semibold text-[var(--text-primary)] mt-1.5">
                    {lesson.title}
                  </h4>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">
                    {lesson.date}
                  </span>
                  <button
                    onClick={() => deleteLessonLearned(lesson.id)}
                    className="text-[var(--text-muted)] hover:text-rose-400 transition-colors p-1 cursor-pointer opacity-70 group-hover:opacity-100"
                    title="Delete lesson"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                "{lesson.reflection}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Lesson Modal */}
      {showLessonModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowLessonModal(false)} />
          <div className="relative z-10 w-full max-w-md p-6 rounded-3xl creamy-surface space-y-4 shadow-2xl">
            <h3 className="text-base font-semibold text-[var(--text-primary)]">Record a Lesson Learned</h3>
            <form onSubmit={handleAddLesson} className="space-y-3 text-xs">
              <div>
                <label className="text-[var(--text-muted)] block mb-1">Core Principle / Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Energy precedes momentum"
                  value={lessonTitle}
                  onChange={(e) => setLessonTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-[var(--text-primary)]"
                />
              </div>

              <div>
                <label className="text-[var(--text-muted)] block mb-1">Category</label>
                <select
                  value={lessonCategory}
                  onChange={(e) => setLessonCategory(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-[var(--text-primary)]"
                >
                  <option value="Discipline" className="bg-[#121326] text-white">Discipline</option>
                  <option value="Focus" className="bg-[#121326] text-white">Focus</option>
                  <option value="Health" className="bg-[#121326] text-white">Health</option>
                  <option value="Relationships" className="bg-[#121326] text-white">Relationships</option>
                  <option value="Mindset" className="bg-[#121326] text-white">Mindset</option>
                </select>
              </div>

              <div>
                <label className="text-[var(--text-muted)] block mb-1">Reflection & Context</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Describe what occurred, what you learned, and how to apply it..."
                  value={lessonText}
                  onChange={(e) => setLessonText(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--pill-bg)] border border-[var(--card-border)] text-[var(--text-primary)]"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowLessonModal(false)}
                  className="flex-1 py-2 rounded-xl bg-[var(--pill-bg)] text-[var(--text-secondary)] font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium shadow-sm"
                >
                  Save Lesson
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
