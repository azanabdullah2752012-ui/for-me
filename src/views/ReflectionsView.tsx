import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Sun,
  Moon,
  Sparkles,
  CheckCircle2,
  Save,
  Calendar,
  Eye,
  EyeOff,
  Feather,
  Check,
  Search,
} from 'lucide-react';
import { ExtendedReflectionPrompts } from '../types';
import { useData, getDisplayDate, formatDateKey } from '../context/DataContext';
import { PageHero } from '../components/common/PageHero';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { sound } from '../audio/sound';

export const ReflectionsView: React.FC = () => {
  const {
    selectedDate,
    setSelectedDate,
    currentLog,
    dailyLogs,
    updateDailyLog,
  } = useData();

  // Mode switcher
  const [activeTab, setActiveTab] = useState<'daily' | 'extended' | 'archive'>('daily');
  const [isPrivacyMasked, setIsPrivacyMasked] = useState(false);

  // Daily Core States
  const [morningText, setMorningText] = useState(currentLog.morningPriming || '');
  const [win, setWin] = useState(currentLog.eveningDebrief?.biggestWin || '');
  const [obstacle, setObstacle] = useState(currentLog.eveningDebrief?.hesitationOrObstacle || '');
  const [lesson, setLesson] = useState(currentLog.eveningDebrief?.lessonLearned || '');
  const [livedStandard, setLivedStandard] = useState(currentLog.eveningDebrief?.livedUpToStandard ?? true);
  const [journalText, setJournalText] = useState(currentLog.dailyNotes || '');

  // Extended Prompts States
  const initialExtended = currentLog.extendedReflections || {
    emotions: '',
    triggers: '',
    gratitude: '',
    happiness: '',
    decisions: '',
    mistakes: '',
    lessons: '',
  };

  const [emotions, setEmotions] = useState(initialExtended.emotions || '');
  const [triggers, setTriggers] = useState(initialExtended.triggers || '');
  const [gratitude, setGratitude] = useState(initialExtended.gratitude || '');
  const [happiness, setHappiness] = useState(initialExtended.happiness || '');
  const [decisions, setDecisions] = useState(initialExtended.decisions || '');
  const [mistakes, setMistakes] = useState(initialExtended.mistakes || '');
  const [lessons, setLessons] = useState(initialExtended.lessons || '');

  const [saved, setSaved] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Sync state when selectedDate or currentLog changes
  useEffect(() => {
    setMorningText(currentLog.morningPriming || '');
    setWin(currentLog.eveningDebrief?.biggestWin || '');
    setObstacle(currentLog.eveningDebrief?.hesitationOrObstacle || '');
    setLesson(currentLog.eveningDebrief?.lessonLearned || '');
    setLivedStandard(currentLog.eveningDebrief?.livedUpToStandard ?? true);
    setJournalText(currentLog.dailyNotes || '');

    const ext = currentLog.extendedReflections;
    setEmotions(ext?.emotions || '');
    setTriggers(ext?.triggers || '');
    setGratitude(ext?.gratitude || '');
    setHappiness(ext?.happiness || '');
    setDecisions(ext?.decisions || '');
    setMistakes(ext?.mistakes || '');
    setLessons(ext?.lessons || '');
  }, [currentLog, selectedDate]);

  const handleSave = () => {
    const extendedPayload: ExtendedReflectionPrompts = {
      emotions: emotions.trim(),
      triggers: triggers.trim(),
      gratitude: gratitude.trim(),
      happiness: happiness.trim(),
      decisions: decisions.trim(),
      mistakes: mistakes.trim(),
      lessons: lessons.trim(),
    };

    updateDailyLog({
      morningPriming: morningText,
      dailyNotes: journalText,
      eveningDebrief: {
        biggestWin: win,
        hesitationOrObstacle: obstacle,
        lessonLearned: lesson,
        livedUpToStandard: livedStandard,
      },
      extendedReflections: extendedPayload,
    });

    sound.complete();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  // Recent logs with reflections for archive
  const archivedLogs = Object.keys(dailyLogs)
    .sort()
    .reverse()
    .filter((k) => {
      const log = dailyLogs[k];
      const hasContent = Boolean(
        log.morningPriming ||
        log.dailyNotes ||
        log.eveningDebrief?.biggestWin ||
        log.eveningDebrief?.lessonLearned ||
        log.extendedReflections?.gratitude ||
        log.extendedReflections?.emotions
      );
      if (!hasContent) return false;
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      const combined = `${log.morningPriming || ''} ${log.dailyNotes || ''} ${log.eveningDebrief?.lessonLearned || ''} ${log.extendedReflections?.gratitude || ''}`.toLowerCase();
      return combined.includes(q);
    });

  return (
    <div
      className={`space-y-8 max-w-4xl mx-auto pb-16 animate-fadeIn ${
        isPrivacyMasked ? 'select-none filter blur-[6px] transition-all duration-300' : ''
      }`}
    >
      {/* 1. EDITORIAL HEADER */}
      <PageHero
        title="Reflections &amp; Inquiries"
        subtitle="An unexamined life produces unexamined patterns. Morning clarity, evening debrief, and deep quiet inquiries."
        kicker="MY JOURNAL • CONTEMPLATION"
        badgeLines={['EXAMINE HONESTLY.', 'EXTRACT THE LESSON.', 'ACT WITHOUT GUILT.']}
        actions={
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPrivacyMasked(!isPrivacyMasked)}
              className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-paper-muted hover:text-paper-ink transition-colors"
              title={isPrivacyMasked ? 'Reveal private entries' : 'Mask entries for privacy'}
              aria-label="Toggle Privacy Mask"
            >
              {isPrivacyMasked ? <EyeOff size={15} className="text-starlight-lavender" /> : <Eye size={15} />}
            </button>

            <Button
              variant="starlight"
              size="sm"
              onClick={handleSave}
              className="flex items-center gap-1.5 text-xs font-sans"
            >
              <Save size={13} />
              <span>Save Reflection</span>
            </Button>
          </div>
        }
      />

      {/* 2. TAB CONTROLS & PRIVACY STATUS */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-white/[0.06]">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 text-xs font-sans">
          <button
            onClick={() => {
              sound.tick();
              setActiveTab('daily');
            }}
            className={`px-3.5 py-1.5 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'daily'
                ? 'bg-accent/20 text-starlight-lavender font-semibold border border-accent/40 shadow-cosmic-glow'
                : 'text-paper-secondary hover:text-paper-ink hover:bg-white/[0.04]'
            }`}
          >
            <Sun size={13} className="text-starlight-lavender" />
            <span>Daily Priming &amp; Debrief</span>
          </button>

          <button
            onClick={() => {
              sound.tick();
              setActiveTab('extended');
            }}
            className={`px-3.5 py-1.5 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'extended'
                ? 'bg-accent/20 text-starlight-lavender font-semibold border border-accent/40 shadow-cosmic-glow'
                : 'text-paper-secondary hover:text-paper-ink hover:bg-white/[0.04]'
            }`}
          >
            <Sparkles size={13} className="text-starlight-lavender" />
            <span>Deep Inquiries</span>
          </button>

          <button
            onClick={() => {
              sound.tick();
              setActiveTab('archive');
            }}
            className={`px-3.5 py-1.5 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'archive'
                ? 'bg-accent/20 text-starlight-lavender font-semibold border border-accent/40 shadow-cosmic-glow'
                : 'text-paper-secondary hover:text-paper-ink hover:bg-white/[0.04]'
            }`}
          >
            <BookOpen size={13} className="text-starlight-lavender" />
            <span>Reflection Archive ({archivedLogs.length})</span>
          </button>
        </div>

        {saved && (
          <span className="text-xs font-sans text-emerald-300 flex items-center gap-1">
            <Check size={13} />
            Reflection Saved
          </span>
        )}
      </div>

      {/* ======================================================== */}
      {/* TAB 1: DAILY CORE (MORNING PRIMING & EVENING DEBRIEF) */}
      {/* ======================================================== */}
      {activeTab === 'daily' && (
        <div className="space-y-6">
          {/* Morning Priming */}
          <div className="p-6 rounded-2xl bg-cosmic-surface/75 backdrop-blur-xl border border-white/[0.08] shadow-journal space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sun size={16} className="text-starlight-lavender" />
                <h3 className="text-sm font-heading font-semibold text-paper-ink">
                  Morning Priming: Intention &amp; Posture
                </h3>
              </div>
              <span className="text-[11px] font-sans text-paper-muted">
                First thoughts upon waking
              </span>
            </div>

            <textarea
              rows={4}
              value={morningText}
              onChange={(e) => setMorningText(e.target.value)}
              placeholder="What standard will I hold myself to today? What is the main battle?"
              className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-accent rounded-xl p-4 text-xs font-sans text-paper-ink focus:outline-none resize-none leading-relaxed"
            />
          </div>

          {/* Evening Debrief */}
          <div className="p-6 rounded-2xl bg-cosmic-surface/75 backdrop-blur-xl border border-white/[0.08] shadow-journal space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Moon size={16} className="text-starlight-lavender" />
                <h3 className="text-sm font-heading font-semibold text-paper-ink">
                  Evening Debrief: The Day in Review
                </h3>
              </div>
              <span className="text-[11px] font-sans text-paper-muted">
                Close of day accounting
              </span>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-sans text-paper-muted block mb-1">
                  Single biggest win / moment of discipline:
                </label>
                <input
                  type="text"
                  value={win}
                  onChange={(e) => setWin(e.target.value)}
                  placeholder="e.g. Completed scheduled study block without checking phone."
                  className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-accent rounded-xl px-3 py-2 text-xs font-sans text-paper-ink focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-sans text-paper-muted block mb-1">
                  Point of hesitation or obstacle encountered:
                </label>
                <input
                  type="text"
                  value={obstacle}
                  onChange={(e) => setObstacle(e.target.value)}
                  placeholder="e.g. Delayed starting deep work by 30 minutes due to mindless scrolling."
                  className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-accent rounded-xl px-3 py-2 text-xs font-sans text-paper-ink focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-sans text-paper-muted block mb-1">
                  The lesson or adjustment extracted:
                </label>
                <input
                  type="text"
                  value={lesson}
                  onChange={(e) => setLesson(e.target.value)}
                  placeholder="e.g. Put phone in separate room before opening laptop."
                  className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-accent rounded-xl px-3 py-2 text-xs font-sans text-paper-ink focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Freeform Journal Notes */}
          <div className="p-6 rounded-2xl bg-cosmic-surface/75 backdrop-blur-xl border border-white/[0.08] shadow-journal space-y-3">
            <div className="flex items-center gap-2">
              <Feather size={16} className="text-starlight-lavender" />
              <h3 className="text-sm font-heading font-semibold text-paper-ink">
                Freeform Journal Notes
              </h3>
            </div>
            <textarea
              rows={5}
              value={journalText}
              onChange={(e) => setJournalText(e.target.value)}
              placeholder="Record ideas, observations, conversations, or open thoughts..."
              className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-accent rounded-xl p-4 text-xs font-sans text-paper-ink focus:outline-none resize-none leading-relaxed"
            />
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 2: EXTENDED INQUIRIES (OPTIONAL DEEP PROMPTS) */}
      {/* ======================================================== */}
      {activeTab === 'extended' && (
        <div className="space-y-5">
          <p className="text-xs text-paper-muted font-sans leading-relaxed">
            Optional inquiry prompts designed to explore emotional state, triggers, decisions, and lessons learned. Fill any prompt that feels relevant today.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-cosmic-surface/75 backdrop-blur-xl border border-white/[0.08] shadow-journal space-y-2">
              <span className="text-xs font-heading font-semibold text-starlight-lavender block">
                1. Emotional Temperature &amp; Triggers
              </span>
              <p className="text-[11px] text-paper-muted font-sans">
                What emotions dominated? What triggered impatience or doubt?
              </p>
              <textarea
                rows={3}
                value={emotions}
                onChange={(e) => setEmotions(e.target.value)}
                placeholder="Examine without guilt..."
                className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-accent rounded-xl p-3 text-xs font-sans text-paper-ink focus:outline-none resize-none"
              />
            </div>

            <div className="p-5 rounded-2xl bg-cosmic-surface/75 backdrop-blur-xl border border-white/[0.08] shadow-journal space-y-2">
              <span className="text-xs font-heading font-semibold text-starlight-lavender block">
                2. Gratitude &amp; Peace
              </span>
              <p className="text-[11px] text-paper-muted font-sans">
                Three things or moments I am genuinely grateful for today:
              </p>
              <textarea
                rows={3}
                value={gratitude}
                onChange={(e) => setGratitude(e.target.value)}
                placeholder="1. ... 2. ... 3. ..."
                className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-accent rounded-xl p-3 text-xs font-sans text-paper-ink focus:outline-none resize-none"
              />
            </div>

            <div className="p-5 rounded-2xl bg-cosmic-surface/75 backdrop-blur-xl border border-white/[0.08] shadow-journal space-y-2">
              <span className="text-xs font-heading font-semibold text-starlight-lavender block">
                3. Significant Decision Made
              </span>
              <p className="text-[11px] text-paper-muted font-sans">
                What choice did I face today? Did I choose out of fear or discipline?
              </p>
              <textarea
                rows={3}
                value={decisions}
                onChange={(e) => setDecisions(e.target.value)}
                placeholder="Record the reasoning..."
                className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-accent rounded-xl p-3 text-xs font-sans text-paper-ink focus:outline-none resize-none"
              />
            </div>

            <div className="p-5 rounded-2xl bg-cosmic-surface/75 backdrop-blur-xl border border-white/[0.08] shadow-journal space-y-2">
              <span className="text-xs font-heading font-semibold text-starlight-lavender block">
                4. Mistakes &amp; Course Correction
              </span>
              <p className="text-[11px] text-paper-muted font-sans">
                Where did I slip? How will I prevent this exact slip tomorrow?
              </p>
              <textarea
                rows={3}
                value={mistakes}
                onChange={(e) => setMistakes(e.target.value)}
                placeholder="Own it cleanly, then adjust..."
                className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-accent rounded-xl p-3 text-xs font-sans text-paper-ink focus:outline-none resize-none"
              />
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 3: REFLECTION ARCHIVE & SEARCH */}
      {/* ======================================================== */}
      {activeTab === 'archive' && (
        <div className="space-y-4">
          <div className="relative">
            <Search size={14} className="absolute left-3.5 top-3 text-paper-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search previous reflections, wins, lessons, and thoughts..."
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl pl-9 pr-4 py-2 text-xs font-sans text-paper-ink focus:outline-none focus:border-accent"
            />
          </div>

          {archivedLogs.length > 0 ? (
            <div className="space-y-3">
              {archivedLogs.map((dateKey) => {
                const log = dailyLogs[dateKey];
                return (
                  <div
                    key={dateKey}
                    onClick={() => {
                      sound.tick();
                      setSelectedDate(dateKey);
                      setActiveTab('daily');
                    }}
                    className="p-5 rounded-2xl bg-cosmic-surface/75 hover:bg-cosmic-surface/95 backdrop-blur-xl border border-white/[0.08] hover:border-accent/40 shadow-journal transition-all cursor-pointer space-y-2"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-sans font-medium text-starlight-lavender">
                        {dateKey}
                      </span>
                      {log.ratingOutOfTen && (
                        <Badge variant="neutral">{log.ratingOutOfTen} / 10</Badge>
                      )}
                    </div>

                    {log.dailyNotes && (
                      <p className="text-xs font-sans text-paper-ink line-clamp-2 leading-relaxed">
                        {log.dailyNotes}
                      </p>
                    )}

                    {log.eveningDebrief?.lessonLearned && (
                      <p className="text-xs font-sans text-paper-muted italic line-clamp-1">
                        Lesson: &ldquo;{log.eveningDebrief.lessonLearned}&rdquo;
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="p-8 text-center text-xs text-paper-muted bg-cosmic-surface/40 rounded-2xl border border-white/[0.06]">
              No matching reflection entries found.
            </div>
          )}
        </div>
      )}
    </div>
  );
};
