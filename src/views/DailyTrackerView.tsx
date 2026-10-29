import React, { useState } from 'react';
import {
  Calendar,
  Save,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  BookOpen,
  Feather,
  Check,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Flame,
  Wind,
  Compass,
  Sliders,
} from 'lucide-react';
import {
  useData,
  formatDateKey,
  getDisplayDate,
  getDefaultDailyPromise,
  getDefaultNightlyReview,
  getDefaultTrackers,
} from '../context/DataContext';
import { PageHero } from '../components/common/PageHero';
import { DailyPromiseCard } from '../components/daily-tracker/DailyPromiseCard';
import { NightlyReviewCard } from '../components/daily-tracker/NightlyReviewCard';
import { TrackersGrid } from '../components/daily-tracker/TrackersGrid';
import { ScoringRulesModal } from '../components/daily-tracker/ScoringRulesModal';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { sound } from '../audio/sound';

type JournalPosture = 'vent' | 'reflect' | 'clarity';

export const DailyTrackerView: React.FC = () => {
  const {
    selectedDate,
    setSelectedDate,
    currentLog,
    updateDailyLog,
    saveDailyPromise,
    updateDailyPromiseStatus,
    saveNightlyReview,
    updateTrackers,
    trackerMetrics,
    settings,
  } = useData();

  const [isScoringModalOpen, setIsScoringModalOpen] = useState(false);
  const [dayTheme, setDayTheme] = useState(currentLog.dayTheme || '');
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Journal Chamber Posture State
  const [activePosture, setActivePosture] = useState<JournalPosture>('reflect');
  const [ventText, setVentText] = useState(currentLog.dailyNotes || '');
  const [isBurning, setIsBurning] = useState(false);
  const [burnNotice, setBurnNotice] = useState(false);

  // Quiet Mind Reflection State
  const [reflectionText, setReflectionText] = useState(
    currentLog.eveningDebrief?.lessonLearned || currentLog.morningPriming || ''
  );
  const [gratitudeSnippet, setGratitudeSnippet] = useState(
    currentLog.extendedReflections?.gratitude || ''
  );

  // Clarity 3-Step State
  const [obstacleText, setObstacleText] = useState(
    currentLog.eveningDebrief?.hesitationOrObstacle || ''
  );
  const [controlText, setControlText] = useState(
    currentLog.nightlyReview?.difficulties || ''
  );
  const [actionText, setActionText] = useState(
    currentLog.nightlyReview?.nextAction || ''
  );

  // Collapsible drawers
  const [isPromiseOpen, setIsPromiseOpen] = useState(true);
  const [isJournalChamberOpen, setIsJournalChamberOpen] = useState(true);
  const [isNightlyReviewOpen, setIsNightlyReviewOpen] = useState(true);
  const [isBiometricsDrawerOpen, setIsBiometricsDrawerOpen] = useState(false);

  const [y, m, d] = selectedDate.split('-').map(Number);
  const dateObj = new Date(y, m - 1, d);
  const formattedFullDate = dateObj.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const todayKey = formatDateKey(new Date());
  const isToday = selectedDate === todayKey;

  const handlePrevDay = () => {
    sound.tick();
    const prev = new Date(y, m - 1, d - 1);
    setSelectedDate(formatDateKey(prev));
  };

  const handleNextDay = () => {
    sound.tick();
    const next = new Date(y, m - 1, d + 1);
    setSelectedDate(formatDateKey(next));
  };

  const promise = currentLog.dailyPromise || getDefaultDailyPromise();
  const nightlyReview = currentLog.nightlyReview || getDefaultNightlyReview();
  const trackers = currentLog.trackers || getDefaultTrackers();

  const handleSaveTheme = () => {
    updateDailyLog({ dayTheme });
    sound.complete();
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  // Burn to Stardust: dissolves transient venting text into the cosmos
  const handleBurnToStardust = () => {
    if (!ventText.trim() || isBurning) return;
    sound.tick();
    setIsBurning(true);

    setTimeout(() => {
      setVentText('');
      updateDailyLog({ dailyNotes: '' });
      setIsBurning(false);
      setBurnNotice(true);
      sound.complete();
      setTimeout(() => setBurnNotice(false), 3000);
    }, 1100);
  };

  const handleSaveVent = () => {
    updateDailyLog({ dailyNotes: ventText });
    sound.complete();
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  const handleSaveReflection = () => {
    const existing = currentLog.extendedReflections || {
      emotions: '',
      triggers: '',
      gratitude: '',
      happiness: '',
      decisions: '',
      mistakes: '',
      lessons: '',
    };

    updateDailyLog({
      morningPriming: reflectionText,
      extendedReflections: {
        ...existing,
        gratitude: gratitudeSnippet,
      },
    });
    sound.complete();
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  const handleSaveClarity = () => {
    updateDailyLog({
      eveningDebrief: {
        ...(currentLog.eveningDebrief || {
          biggestWin: '',
          hesitationOrObstacle: '',
          lessonLearned: '',
          livedUpToStandard: true,
        }),
        hesitationOrObstacle: obstacleText,
      },
      nightlyReview: {
        ...nightlyReview,
        difficulties: controlText,
        nextAction: actionText,
      },
    });
    sound.complete();
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-16 animate-fadeIn">
      {/* Editorial Journal Page Header */}
      <PageHero
        title="Today's Journal Chamber"
        subtitle="A private sanctuary for your sacred promise, honest writing, and evening clarity. Everything you need in under two minutes."
        kicker="MY JOURNAL • DAILY SANCTUARY"
        badgeLines={['HONEST RECORDS.', 'UNCOMPROMISING DUTY.', 'PEACE OF MIND.']}
        actions={
          <div className="flex flex-wrap items-center gap-3">
            {/* Quick date navigator */}
            <div className="flex items-center bg-white/[0.04] border border-white/[0.08] rounded-xl text-xs backdrop-blur-md">
              <button
                onClick={handlePrevDay}
                className="p-1.5 text-paper-muted hover:text-paper-ink rounded-l-xl transition-colors"
                title="Previous Day"
              >
                <ChevronLeft size={14} />
              </button>
              <span className="px-3 py-1 font-sans font-medium text-xs text-paper-ink">
                {formattedFullDate}
              </span>
              <button
                onClick={handleNextDay}
                className="p-1.5 text-paper-muted hover:text-paper-ink rounded-r-xl transition-colors"
                title="Next Day"
              >
                <ChevronRight size={14} />
              </button>
            </div>

            {!isToday && (
              <button
                onClick={() => setSelectedDate(todayKey)}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-sans text-starlight-lavender bg-accent/15 border border-accent/30 rounded-lg hover:bg-accent/25 transition-colors"
              >
                <RotateCcw size={11} />
                <span>Jump to Today</span>
              </button>
            )}
          </div>
        }
      />

      {/* TOP STRIP: DAY DIRECTIVE / THEME */}
      <div className="p-4 rounded-2xl bg-cosmic-surface/65 backdrop-blur-xl border border-white/[0.08] shadow-journal flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 w-full sm:w-auto flex-1">
          <label className="text-xs font-sans uppercase tracking-wider text-starlight-lavender shrink-0 font-medium">
            Day Directive:
          </label>
          <input
            type="text"
            value={dayTheme}
            onChange={(e) => setDayTheme(e.target.value)}
            onBlur={handleSaveTheme}
            onKeyDown={(e) => e.key === 'Enter' && handleSaveTheme()}
            placeholder="e.g. Relentless Focus & Deep Study"
            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-1.5 text-xs text-paper-ink font-sans focus:outline-none focus:border-accent"
          />
        </div>

        {saveSuccess && (
          <span className="text-xs font-sans text-emerald-300 flex items-center gap-1 shrink-0 animate-fadeIn">
            <Check size={13} />
            Saved to Journal
          </span>
        )}
      </div>

      {/* ======================================================== */}
      {/* SECTION I: TODAY'S SACRED PROMISE */}
      {/* ======================================================== */}
      <section className="space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-starlight-lavender" />
            <h2 className="text-sm font-heading font-semibold text-paper-ink">
              I. Today&apos;s Sacred Promise
            </h2>
          </div>
          <button
            onClick={() => setIsPromiseOpen(!isPromiseOpen)}
            className="p-1 text-paper-muted hover:text-paper-ink transition-colors"
          >
            {isPromiseOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        {isPromiseOpen && (
          <DailyPromiseCard
            promise={promise}
            selectedDate={selectedDate}
            onSavePromise={(updated) => saveDailyPromise(updated, selectedDate)}
            onUpdateStatus={(status, details) =>
              updateDailyPromiseStatus(status, details, selectedDate)
            }
          />
        )}
      </section>

      {/* ======================================================== */}
      {/* SECTION II: THE 3-POSTURE STARLIGHT JOURNAL CHAMBER */}
      {/* ======================================================== */}
      <section className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <BookOpen size={18} className="text-starlight-lavender" />
            <h2 className="text-sm font-heading font-semibold text-paper-ink">
              II. Starlight Journal Chamber
            </h2>
          </div>
          <button
            onClick={() => setIsJournalChamberOpen(!isJournalChamberOpen)}
            className="p-1 text-paper-muted hover:text-paper-ink transition-colors"
          >
            {isJournalChamberOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        {isJournalChamberOpen && (
          <div className="p-6 rounded-2xl bg-cosmic-surface/75 backdrop-blur-xl border border-white/[0.08] shadow-journal space-y-5">
            {/* Posture Switcher Pills */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.06] pb-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    sound.tick();
                    setActivePosture('reflect');
                  }}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-sans transition-all ${
                    activePosture === 'reflect'
                      ? 'bg-accent/20 text-starlight-lavender border border-accent/40 shadow-sm font-medium'
                      : 'bg-white/[0.04] text-paper-secondary hover:text-paper-ink border border-white/[0.06]'
                  }`}
                >
                  <Sparkles size={13} />
                  <span>Quiet Mind (Reflect)</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    sound.tick();
                    setActivePosture('vent');
                  }}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-sans transition-all ${
                    activePosture === 'vent'
                      ? 'bg-accent/20 text-starlight-lavender border border-accent/40 shadow-sm font-medium'
                      : 'bg-white/[0.04] text-paper-secondary hover:text-paper-ink border border-white/[0.06]'
                  }`}
                >
                  <Wind size={13} />
                  <span>Release (Vent)</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    sound.tick();
                    setActivePosture('clarity');
                  }}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-sans transition-all ${
                    activePosture === 'clarity'
                      ? 'bg-accent/20 text-starlight-lavender border border-accent/40 shadow-sm font-medium'
                      : 'bg-white/[0.04] text-paper-secondary hover:text-paper-ink border border-white/[0.06]'
                  }`}
                >
                  <Compass size={13} />
                  <span>Clarity (Action)</span>
                </button>
              </div>

              <span className="text-[11px] font-sans text-paper-muted">
                {activePosture === 'vent' && 'Unfiltered thought space. Save or burn away.'}
                {activePosture === 'reflect' && 'Gentle evening grounding.'}
                {activePosture === 'clarity' && '3-step problem solving.'}
              </span>
            </div>

            {/* Posture 1: Vent / Release */}
            {activePosture === 'vent' && (
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-xs font-sans text-paper-muted leading-relaxed">
                    Write without hesitation or fear of judgment. Whatever is frustrating, heavy, or nagging you—get it out of your head onto the page.
                  </p>
                </div>

                <div className="relative">
                  <textarea
                    rows={6}
                    value={ventText}
                    onChange={(e) => setVentText(e.target.value)}
                    placeholder="Speak your mind completely unedited..."
                    className={`w-full bg-white/[0.03] border border-white/[0.08] focus:border-accent rounded-xl p-4 text-sm font-sans text-paper-ink leading-relaxed focus:outline-none resize-none transition-all ${
                      isBurning ? 'animate-burn' : ''
                    }`}
                  />
                </div>

                {burnNotice && (
                  <div className="p-3 rounded-xl bg-violet-500/15 border border-violet-500/30 text-starlight-lavender text-xs text-center animate-fadeIn">
                    ✨ Your words have dissolved into stardust. Lightness returned.
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleBurnToStardust}
                    disabled={!ventText.trim() || isBurning}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-sans text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/25 transition-all disabled:opacity-40"
                    title="Dissolves these words into the cosmic canvas without saving them"
                  >
                    <Flame size={13} />
                    <span>Burn to Stardust</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={handleSaveVent}
                      disabled={!ventText.trim()}
                    >
                      <Save size={13} />
                      <span>Preserve in Journal</span>
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Posture 2: Quiet Mind / Reflect */}
            {activePosture === 'reflect' && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-sans font-medium text-starlight-lavender block">
                    What was real for you today? What gave you energy or taught you something?
                  </label>
                  <textarea
                    rows={4}
                    value={reflectionText}
                    onChange={(e) => setReflectionText(e.target.value)}
                    placeholder="Even a single honest sentence is enough..."
                    className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-accent rounded-xl p-4 text-sm font-sans text-paper-ink leading-relaxed focus:outline-none resize-none"
                  />
                </div>

                <div className="space-y-2 pt-2 border-t border-white/[0.04]">
                  <label className="text-xs font-sans font-medium text-paper-muted block">
                    One quiet spark of gratitude:
                  </label>
                  <input
                    type="text"
                    value={gratitudeSnippet}
                    onChange={(e) => setGratitudeSnippet(e.target.value)}
                    placeholder="e.g. Quiet morning coffee, a focused study block, family call..."
                    className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-accent rounded-xl px-3 py-2 text-xs font-sans text-paper-ink focus:outline-none"
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <Button variant="starlight" size="sm" onClick={handleSaveReflection}>
                    <Save size={13} />
                    <span>Save Reflection</span>
                  </Button>
                </div>
              </div>
            )}

            {/* Posture 3: Clarity / Problem Solving */}
            {activePosture === 'clarity' && (
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-sans text-paper-muted uppercase tracking-wider block">
                    Step 1: The Situation
                  </span>
                  <input
                    type="text"
                    value={obstacleText}
                    onChange={(e) => setObstacleText(e.target.value)}
                    placeholder="What specific friction, hesitation, or obstacle occurred?"
                    className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-accent rounded-xl px-3 py-2 text-xs font-sans text-paper-ink focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-sans text-paper-muted uppercase tracking-wider block">
                    Step 2: Ownership &amp; Control
                  </span>
                  <input
                    type="text"
                    value={controlText}
                    onChange={(e) => setControlText(e.target.value)}
                    placeholder="What part was within my control? What was external?"
                    className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-accent rounded-xl px-3 py-2 text-xs font-sans text-paper-ink focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-sans text-starlight-lavender uppercase tracking-wider block font-semibold">
                    Step 3: Immediate Next Action
                  </span>
                  <input
                    type="text"
                    value={actionText}
                    onChange={(e) => setActionText(e.target.value)}
                    placeholder="What is the single corrective action I will take next?"
                    className="w-full bg-white/[0.03] border border-accent/40 focus:border-accent rounded-xl px-3 py-2 text-xs font-sans text-paper-ink focus:outline-none"
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <Button variant="starlight" size="sm" onClick={handleSaveClarity}>
                    <CheckCircle2 size={13} />
                    <span>Lock In Clarity Plan</span>
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </section>

      {/* ======================================================== */}
      {/* SECTION III: 5-MINUTE NIGHTLY REVIEW */}
      {/* ======================================================== */}
      <section className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <Feather size={18} className="text-starlight-lavender" />
            <h2 className="text-sm font-heading font-semibold text-paper-ink">
              III. Five-Minute Nightly Debrief
            </h2>
          </div>
          <button
            onClick={() => setIsNightlyReviewOpen(!isNightlyReviewOpen)}
            className="p-1 text-paper-muted hover:text-paper-ink transition-colors"
          >
            {isNightlyReviewOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        {isNightlyReviewOpen && (
          <NightlyReviewCard
            review={nightlyReview}
            dailyPromise={promise}
            selectedDate={selectedDate}
            onSaveReview={(updated) => saveNightlyReview(updated, selectedDate)}
          />
        )}
      </section>

      {/* ======================================================== */}
      {/* SECTION IV: OPTIONAL BIOMETRICS & IN-DEPTH HORIZON DRAWER */}
      {/* ======================================================== */}
      <section className="space-y-3 pt-2">
        <button
          type="button"
          onClick={() => {
            sound.tick();
            setIsBiometricsDrawerOpen(!isBiometricsDrawerOpen);
          }}
          className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.08] transition-all text-xs font-sans"
        >
          <div className="flex items-center gap-2.5">
            <Sliders size={15} className="text-starlight-lavender" />
            <span className="font-heading font-semibold text-paper-ink">
              Biometrics &amp; In-Depth Observatory Trackers
            </span>
            <Badge variant="neutral">Optional on-demand</Badge>
          </div>

          <div className="flex items-center gap-1.5 text-starlight-lavender">
            <span>{isBiometricsDrawerOpen ? 'Collapse Trackers' : 'Expand Trackers (11 Domains)'}</span>
            {isBiometricsDrawerOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </div>
        </button>

        {isBiometricsDrawerOpen && (
          <div className="p-6 rounded-2xl bg-cosmic-surface/60 backdrop-blur-xl border border-white/[0.08] shadow-journal animate-fadeIn">
            <TrackersGrid
              trackers={trackers}
              onUpdateTrackers={(updater) => updateTrackers(updater, selectedDate)}
            />
          </div>
        )}
      </section>

      {/* Scoring Rules Explanation Modal */}
      <ScoringRulesModal
        isOpen={isScoringModalOpen}
        onClose={() => setIsScoringModalOpen(false)}
        metrics={trackerMetrics}
        ratingOutOfTen={currentLog?.ratingOutOfTen || 0}
      />
    </div>
  );
};
