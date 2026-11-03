import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Sun,
  Moon,
  Sparkles,
  CheckCircle2,
  Save,
  Eye,
  EyeOff,
  Feather,
  Check,
  Search,
  Copy,
  Quote,
} from 'lucide-react';
import { ExtendedReflectionPrompts } from '../types';
import { useData } from '../context/DataContext';
import { Button } from '../components/common/Button';
import { sound } from '../audio/sound';

const INSPIRATIONAL_PROMPTS = [
  {
    author: 'Marcus Aurelius',
    source: 'Meditations II.1',
    text: 'When you wake up in the morning, tell yourself: The people I deal with today will be meddling, ungrateful, arrogant, dishonest, jealous, and surly. They are like this because they cannot distinguish good from evil. But I have seen the beauty of good...',
  },
  {
    author: 'Seneca',
    source: 'Letters from a Stoic',
    text: 'We suffer more often in imagination than in reality. What is quite unendurable is only so when you make it so by giving in to it.',
  },
  {
    author: 'Epictetus',
    source: 'Enchiridion',
    text: 'Some things are in our control and others not. Things in our control are opinion, pursuit, desire, aversion, and, in a word, whatever are our own actions.',
  },
  {
    author: 'Miyamoto Musashi',
    source: 'The Dokkodo',
    text: 'Do not regret what you have done. Be detached from desire your whole life long. Never let yourself be saddened by a separation.',
  },
];

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
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showPromptHelper, setShowPromptHelper] = useState(false);

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

  // Sync state when selectedDate or currentLog changes
  useEffect(() => {
    setMorningText(currentLog.morningPriming || '');
    setWin(currentLog.eveningDebrief?.biggestWin || '');
    setObstacle(currentLog.eveningDebrief?.hesitationOrObstacle || '');
    setLesson(currentLog.eveningDebrief?.lessonLearned || '');
    setLivedStandard(currentLog.eveningDebrief?.livedUpToStandard ?? true);
    setJournalText(currentLog.dailyNotes || '');

    const ext = currentLog.extendedReflections || {
      emotions: '',
      triggers: '',
      gratitude: '',
      happiness: '',
      decisions: '',
      mistakes: '',
      lessons: '',
    };
    setEmotions(ext.emotions || '');
    setTriggers(ext.triggers || '');
    setGratitude(ext.gratitude || '');
    setHappiness(ext.happiness || '');
    setDecisions(ext.decisions || '');
    setMistakes(ext.mistakes || '');
    setLessons(ext.lessons || '');
  }, [selectedDate, currentLog]);

  // Save handler
  const handleSave = () => {
    const extendedPayload: ExtendedReflectionPrompts = {
      emotions,
      triggers,
      gratitude,
      happiness,
      decisions,
      mistakes,
      lessons,
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

  // Keyboard shortcut Ctrl/Cmd+S to save
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 's') {
        e.preventDefault();
        handleSave();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [morningText, journalText, win, obstacle, lesson, livedStandard, emotions, triggers, gratitude, happiness, decisions, mistakes, lessons]);

  // Copy Markdown Entry
  const handleCopyMarkdown = () => {
    const lines = [
      `# Reflection & Inquiries — ${selectedDate}`,
      `## Morning Priming`,
      morningText || '_No morning entry recorded._',
      '',
      `## Freeform Notes`,
      journalText || '_No freeform notes recorded._',
      '',
      `## Evening Debrief`,
      `- **Win:** ${win || '—'}`,
      `- **Obstacle:** ${obstacle || '—'}`,
      `- **Lesson:** ${lesson || '—'}`,
      `- **Standard Upheld:** ${livedStandard ? 'Yes' : 'No'}`,
    ].join('\n');

    navigator.clipboard.writeText(lines).then(() => {
      setCopied(true);
      sound.tick();
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Insert prompt into journal notes
  const handleInsertPrompt = (quoteText: string, author: string) => {
    const insertion = `\n\n> "${quoteText}" — ${author}\n\n`;
    setJournalText((prev) => (prev ? prev + insertion : insertion.trimStart()));
    sound.tick();
    setShowPromptHelper(false);
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
      className={`space-y-6 max-w-5xl mx-auto pb-16 animate-fadeIn select-none ${
        isPrivacyMasked ? 'select-none filter blur-[6px] transition-all duration-300' : ''
      }`}
    >
      {/* ================================================================ */}
      {/* 1. CELESTIAL HEADER                                              */}
      {/* ================================================================ */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-white/[0.06]">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[#E56A38] text-base">✦</span>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">
              Reflections &amp; Inquiries
            </h1>
          </div>
          <p className="text-xs font-sans text-zinc-400 mt-1 max-w-lg">
            An unexamined life produces unexamined patterns. Morning clarity, evening debrief, and deep quiet inquiries.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => {
              sound.tick();
              setIsPrivacyMasked(!isPrivacyMasked);
            }}
            className="p-2 rounded-xl bg-black/40 border border-white/[0.08] text-zinc-400 hover:text-white transition-colors"
            title={isPrivacyMasked ? 'Reveal private entries' : 'Mask entries for privacy'}
            aria-label="Toggle Privacy Mask"
          >
            {isPrivacyMasked ? <EyeOff size={15} className="text-[#E56A38]" /> : <Eye size={15} />}
          </button>

          <button
            type="button"
            onClick={handleCopyMarkdown}
            className="p-2 rounded-xl bg-black/40 border border-white/[0.08] text-zinc-400 hover:text-white transition-colors hidden sm:flex items-center gap-1.5 text-xs font-sans"
            title="Copy entry as Markdown"
          >
            {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>

          <Button
            variant="primary"
            size="sm"
            onClick={handleSave}
            className="flex items-center gap-1.5 text-xs font-sans font-bold bg-[#E56A38] hover:bg-[#D9531E] text-white shadow-[0_0_15px_rgba(229,106,56,0.35)] transition-all"
          >
            <Save size={13} />
            <span>{saved ? 'Saved ✓' : 'Save Reflection'}</span>
          </Button>
        </div>
      </header>

      {/* ================================================================ */}
      {/* 2. TAB CONTROLS                                                  */}
      {/* ================================================================ */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-white/[0.06]">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 text-xs font-sans">
          <button
            type="button"
            onClick={() => {
              sound.tick();
              setActiveTab('daily');
            }}
            className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'daily'
                ? 'bg-[#E56A38]/20 text-[#E56A38] font-bold border border-[#E56A38]/40 shadow-sm'
                : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            <Sun size={13} className={activeTab === 'daily' ? 'text-[#E56A38]' : 'text-zinc-400'} />
            <span>Daily Priming &amp; Debrief</span>
          </button>

          <button
            type="button"
            onClick={() => {
              sound.tick();
              setActiveTab('extended');
            }}
            className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'extended'
                ? 'bg-[#E56A38]/20 text-[#E56A38] font-bold border border-[#E56A38]/40 shadow-sm'
                : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            <Sparkles size={13} className={activeTab === 'extended' ? 'text-[#E56A38]' : 'text-zinc-400'} />
            <span>Deep Inquiries</span>
          </button>

          <button
            type="button"
            onClick={() => {
              sound.tick();
              setActiveTab('archive');
            }}
            className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'archive'
                ? 'bg-[#E56A38]/20 text-[#E56A38] font-bold border border-[#E56A38]/40 shadow-sm'
                : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            <BookOpen size={13} className={activeTab === 'archive' ? 'text-[#E56A38]' : 'text-zinc-400'} />
            <span>Archive ({archivedLogs.length})</span>
          </button>
        </div>

        {saved && (
          <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
            <Check size={13} />
            Reflection Saved
          </span>
        )}
      </div>

      {/* ================================================================ */}
      {/* TAB 1: DAILY CORE (MORNING PRIMING & EVENING DEBRIEF)            */}
      {/* ================================================================ */}
      {activeTab === 'daily' && (
        <div className="space-y-6">
          {/* Morning Priming */}
          <div className="p-6 rounded-3xl bg-[#0D0F16]/90 backdrop-blur-xl border border-white/[0.08] shadow-xl space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sun size={15} className="text-[#E56A38]" />
                <h3 className="text-sm font-serif font-bold text-white tracking-wide">
                  Morning Priming: Intention &amp; Posture
                </h3>
              </div>
              <span className="text-[11px] font-sans text-zinc-500">
                First thoughts upon waking
              </span>
            </div>

            <textarea
              rows={4}
              value={morningText}
              onChange={(e) => setMorningText(e.target.value)}
              placeholder="What standard will I hold myself to today? What is the main battle to conquer?"
              className="w-full bg-black/40 border border-white/[0.08] focus:border-[#E56A38]/60 rounded-2xl p-4 text-xs font-sans text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[#E56A38]/40 resize-none leading-relaxed transition-colors"
            />
          </div>

          {/* Evening Debrief */}
          <div className="p-6 rounded-3xl bg-[#0D0F16]/90 backdrop-blur-xl border border-white/[0.08] shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Moon size={15} className="text-amber-400" />
                <h3 className="text-sm font-serif font-bold text-white tracking-wide">
                  Evening Debrief: The Day in Review
                </h3>
              </div>
              <span className="text-[11px] font-sans text-zinc-500">
                Close of day honest accounting
              </span>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-sans text-zinc-400 block mb-1">
                  Single biggest win / moment of discipline:
                </label>
                <input
                  type="text"
                  value={win}
                  onChange={(e) => setWin(e.target.value)}
                  placeholder="e.g. Completed scheduled study block without checking phone."
                  className="w-full bg-black/40 border border-white/[0.08] focus:border-[#E56A38]/60 rounded-xl px-3.5 py-2 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-[#E56A38]/40 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-sans text-zinc-400 block mb-1">
                  Point of hesitation or obstacle encountered:
                </label>
                <input
                  type="text"
                  value={obstacle}
                  onChange={(e) => setObstacle(e.target.value)}
                  placeholder="e.g. Delayed starting deep work by 20 minutes due to mindless distraction."
                  className="w-full bg-black/40 border border-white/[0.08] focus:border-[#E56A38]/60 rounded-xl px-3.5 py-2 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-[#E56A38]/40 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-sans text-zinc-400 block mb-1">
                  The lesson or adjustment extracted:
                </label>
                <input
                  type="text"
                  value={lesson}
                  onChange={(e) => setLesson(e.target.value)}
                  placeholder="e.g. Put phone in separate room before opening laptop."
                  className="w-full bg-black/40 border border-white/[0.08] focus:border-[#E56A38]/60 rounded-xl px-3.5 py-2 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-[#E56A38]/40 transition-colors"
                />
              </div>

              <div className="pt-3 flex items-center justify-between border-t border-white/[0.06]">
                <span className="text-xs font-sans text-zinc-300">
                  Did I live up to my personal standard today?
                </span>
                <button
                  type="button"
                  onClick={() => {
                    sound.tick();
                    setLivedStandard(!livedStandard);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-bold transition-all flex items-center gap-1.5 ${
                    livedStandard
                      ? 'bg-[#E56A38]/20 text-[#E56A38] border border-[#E56A38]/40 shadow-[0_0_10px_rgba(229,106,56,0.25)]'
                      : 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                  }`}
                >
                  <CheckCircle2 size={13} />
                  <span>{livedStandard ? 'Standard Upheld' : 'Fell Short — Reset Tomorrow'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Freeform Journal Notes */}
          <div className="p-6 rounded-3xl bg-[#0D0F16]/90 backdrop-blur-xl border border-white/[0.08] shadow-xl space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Feather size={15} className="text-[#E56A38]" />
                <h3 className="text-sm font-serif font-bold text-white tracking-wide">
                  Freeform Journal Notes
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowPromptHelper(!showPromptHelper)}
                className="text-xs text-zinc-400 hover:text-white font-sans flex items-center gap-1 transition-colors"
              >
                <Quote size={12} className="text-[#E56A38]" />
                <span>Stoic Prompts</span>
              </button>
            </div>

            {showPromptHelper && (
              <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.08] space-y-2">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Click quote to insert:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {INSPIRATIONAL_PROMPTS.map((p, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleInsertPrompt(p.text, p.author)}
                      className="p-3 text-left rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] text-xs font-serif italic text-zinc-300 hover:text-white transition-colors"
                    >
                      &ldquo;{p.text.slice(0, 80)}...&rdquo; — <span className="text-[#E56A38] not-italic font-sans text-[10px]">{p.author}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <textarea
              rows={5}
              value={journalText}
              onChange={(e) => setJournalText(e.target.value)}
              placeholder="Record ideas, observations, feelings, or whatever occurred today..."
              className="w-full bg-black/40 border border-white/[0.08] focus:border-[#E56A38]/60 rounded-2xl p-4 text-xs font-sans text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[#E56A38]/40 resize-none leading-relaxed transition-colors"
            />
          </div>
        </div>
      )}

      {/* ================================================================ */}
      {/* TAB 2: EXTENDED INQUIRIES                                        */}
      {/* ================================================================ */}
      {activeTab === 'extended' && (
        <div className="space-y-4">
          <p className="text-xs text-zinc-400 font-sans leading-relaxed">
            Deep inquiry prompts exploring emotions, triggers, gratitude, and courses of correction.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-3xl bg-[#0D0F16]/90 backdrop-blur-xl border border-white/[0.08] shadow-xl space-y-2">
              <span className="text-xs font-serif font-bold text-white block">
                1. Emotional Temperature &amp; Triggers
              </span>
              <p className="text-[11px] text-zinc-500 font-sans">
                What emotions dominated? What triggered impatience or doubt?
              </p>
              <textarea
                rows={3}
                value={emotions}
                onChange={(e) => setEmotions(e.target.value)}
                placeholder="Examine calmly without guilt..."
                className="w-full bg-black/40 border border-white/[0.08] rounded-xl p-3 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-[#E56A38] resize-none"
              />
            </div>

            <div className="p-5 rounded-3xl bg-[#0D0F16]/90 backdrop-blur-xl border border-white/[0.08] shadow-xl space-y-2">
              <span className="text-xs font-serif font-bold text-white block">
                2. Gratitude &amp; Peace
              </span>
              <p className="text-[11px] text-zinc-500 font-sans">
                Three things or moments I am genuinely grateful for today:
              </p>
              <textarea
                rows={3}
                value={gratitude}
                onChange={(e) => setGratitude(e.target.value)}
                placeholder="1. ... 2. ... 3. ..."
                className="w-full bg-black/40 border border-white/[0.08] rounded-xl p-3 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-[#E56A38] resize-none"
              />
            </div>

            <div className="p-5 rounded-3xl bg-[#0D0F16]/90 backdrop-blur-xl border border-white/[0.08] shadow-xl space-y-2">
              <span className="text-xs font-serif font-bold text-white block">
                3. Significant Decision Made
              </span>
              <p className="text-[11px] text-zinc-500 font-sans">
                What choice did I face today? Did I choose out of discipline or avoidance?
              </p>
              <textarea
                rows={3}
                value={decisions}
                onChange={(e) => setDecisions(e.target.value)}
                placeholder="Record the reasoning..."
                className="w-full bg-black/40 border border-white/[0.08] rounded-xl p-3 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-[#E56A38] resize-none"
              />
            </div>

            <div className="p-5 rounded-3xl bg-[#0D0F16]/90 backdrop-blur-xl border border-white/[0.08] shadow-xl space-y-2">
              <span className="text-xs font-serif font-bold text-white block">
                4. Mistakes &amp; Course Correction
              </span>
              <p className="text-[11px] text-zinc-500 font-sans">
                Where did I slip? How will I prevent this exact slip tomorrow?
              </p>
              <textarea
                rows={3}
                value={mistakes}
                onChange={(e) => setMistakes(e.target.value)}
                placeholder="Own it cleanly, then adjust..."
                className="w-full bg-black/40 border border-white/[0.08] rounded-xl p-3 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-[#E56A38] resize-none"
              />
            </div>
          </div>
        </div>
      )}

      {/* ================================================================ */}
      {/* TAB 3: REFLECTION ARCHIVE & SEARCH                               */}
      {/* ================================================================ */}
      {activeTab === 'archive' && (
        <div className="space-y-4">
          <div className="relative">
            <Search size={14} className="absolute left-3.5 top-3 text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search previous reflections, wins, lessons, and thoughts..."
              className="w-full bg-black/40 border border-white/[0.08] rounded-2xl pl-9 pr-4 py-2 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-[#E56A38]"
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
                    className="p-5 rounded-3xl bg-[#0D0F16]/90 hover:bg-[#0D0F16] backdrop-blur-xl border border-white/[0.08] hover:border-[#E56A38]/40 shadow-xl transition-all cursor-pointer space-y-2"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-zinc-400">
                        {dateKey}
                      </span>
                      {log.ratingOutOfTen && (
                        <span className="px-2 py-0.5 rounded-full bg-[#E56A38]/15 text-[#E56A38] border border-[#E56A38]/30 font-mono text-[10px] font-bold">
                          {log.ratingOutOfTen} / 10
                        </span>
                      )}
                    </div>

                    {log.dailyNotes && (
                      <p className="text-xs font-sans text-white line-clamp-2 leading-relaxed">
                        {log.dailyNotes}
                      </p>
                    )}

                    {log.eveningDebrief?.lessonLearned && (
                      <p className="text-xs font-serif italic text-zinc-400 line-clamp-1">
                        Lesson: &ldquo;{log.eveningDebrief.lessonLearned}&rdquo;
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="p-8 text-center text-xs text-zinc-400 bg-black/20 rounded-3xl border border-dashed border-white/[0.08]">
              No matching reflection entries found.
            </div>
          )}
        </div>
      )}
    </div>
  );
};
