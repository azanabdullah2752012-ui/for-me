import React, { useState, useEffect } from 'react';
import {
  Moon,
  Clock,
  Sparkles,
  Save,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Play,
  Pause,
  RotateCcw,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';
import { FiveMinuteNightlyReview, SingleDailyPromise } from '../../types';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { sound } from '../../audio/sound';

interface NightlyReviewCardProps {
  review: FiveMinuteNightlyReview;
  dailyPromise: SingleDailyPromise;
  selectedDate: string;
  onSaveReview: (review: FiveMinuteNightlyReview) => void;
}

export const NightlyReviewCard: React.FC<NightlyReviewCardProps> = ({
  review,
  dailyPromise,
  selectedDate,
  onSaveReview,
}) => {
  const [highlights, setHighlights] = useState(review.highlights || '');
  const [difficulties, setDifficulties] = useState(review.difficulties || '');
  const [promiseReview, setPromiseReview] = useState(review.dailyPromiseReview || '');
  const [lessonLearned, setLessonLearned] = useState(review.lessonLearned || '');
  const [nextAction, setNextAction] = useState(review.nextAction || '');

  // Optional extra prompts
  const [showExtras, setShowExtras] = useState(false);
  const [energyGiver, setEnergyGiver] = useState(review.extraPrompts?.whatGaveEnergy || '');
  const [energyDrainer, setEnergyDrainer] = useState(review.extraPrompts?.whatDrainedEnergy || '');
  const [unspokenThought, setUnspokenThought] = useState(review.extraPrompts?.unspokenThought || '');

  // 5-Minute Timer helper (Timestamp-resilient for background tabs)
  const [timerSeconds, setTimerSeconds] = useState(300); // 5 mins = 300 sec
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerEndTime, setTimerEndTime] = useState<number | null>(null);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Sync state if date or review changes
  useEffect(() => {
    setHighlights(review.highlights || '');
    setDifficulties(review.difficulties || '');
    setPromiseReview(review.dailyPromiseReview || '');
    setLessonLearned(review.lessonLearned || '');
    setNextAction(review.nextAction || '');
    setEnergyGiver(review.extraPrompts?.whatGaveEnergy || '');
    setEnergyDrainer(review.extraPrompts?.whatDrainedEnergy || '');
    setUnspokenThought(review.extraPrompts?.unspokenThought || '');
  }, [review, selectedDate]);

  // Timestamp-based countdown loop
  useEffect(() => {
    if (!timerRunning || !timerEndTime) return;

    const syncCountdown = () => {
      const now = Date.now();
      const remaining = Math.max(0, Math.ceil((timerEndTime - now) / 1000));
      setTimerSeconds(remaining);

      if (remaining === 0) {
        sound.complete();
        setTimerRunning(false);
        setTimerEndTime(null);
      }
    };

    syncCountdown();
    const interval = setInterval(syncCountdown, 250);

    const onVisibility = () => {
      if (!document.hidden) syncCountdown();
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [timerRunning, timerEndTime]);

  const formatTimer = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const remainder = sec % 60;
    return `${mins}:${remainder < 10 ? '0' : ''}${remainder}`;
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    sound.complete();

    const updated: FiveMinuteNightlyReview = {
      ...review,
      completed: true,
      highlights: highlights.trim(),
      difficulties: difficulties.trim(),
      dailyPromiseReview: promiseReview.trim(),
      lessonLearned: lessonLearned.trim(),
      nextAction: nextAction.trim(),
      extraPrompts: {
        whatGaveEnergy: energyGiver.trim() || undefined,
        whatDrainedEnergy: energyDrainer.trim() || undefined,
        unspokenThought: unspokenThought.trim() || undefined,
      },
    };

    onSaveReview(updated);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <Card className="p-6 space-y-6">
      {/* Header and 5-min timer */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.06]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent/20 border border-accent/35 flex items-center justify-center text-starlight-lavender shrink-0 shadow-cosmic-glow">
            <Moon size={20} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-heading font-semibold text-paper-ink">
                5-Minute Nightly Debrief
              </h3>
              <Badge variant={review.completed ? 'success' : 'neutral'}>
                {review.completed ? 'Reviewed' : 'Pending'}
              </Badge>
            </div>
            <p className="text-xs text-paper-muted font-sans mt-0.5">
              Designed to take strictly under 5 minutes. Clear the slate before resting.
            </p>
          </div>
        </div>

        {/* 5-Min Timer Quick Controller */}
        <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] px-3 py-1.5 rounded-xl font-mono self-end sm:self-auto backdrop-blur-md">
          <Clock size={14} className="text-starlight-lavender" />
          <span className={`text-xs font-bold ${timerSeconds <= 60 ? 'text-rose-400 animate-pulse' : 'text-paper-ink'}`}>
            {formatTimer(timerSeconds)}
          </span>
          <button
            type="button"
            onClick={() => {
              sound.tick();
              if (timerRunning) {
                setTimerRunning(false);
                setTimerEndTime(null);
              } else {
                setTimerRunning(true);
                setTimerEndTime(Date.now() + timerSeconds * 1000);
              }
            }}
            className="p-1 rounded text-paper-muted hover:text-paper-ink transition-colors"
            title={timerRunning ? 'Pause 5m timer' : 'Start 5m timer'}
          >
            {timerRunning ? <Pause size={13} /> : <Play size={13} />}
          </button>
          <button
            type="button"
            onClick={() => {
              sound.tick();
              setTimerRunning(false);
              setTimerEndTime(null);
              setTimerSeconds(300);
            }}
            className="p-1 rounded text-paper-muted hover:text-paper-ink transition-colors"
            title="Reset timer"
          >
            <RotateCcw size={13} />
          </button>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-4">
        {/* Row 1: Highlights & Difficulties */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-sans uppercase text-emerald-300 font-semibold mb-1">
              1. Day’s Highlights (Wins &amp; Momentum)
            </label>
            <textarea
              rows={3}
              placeholder="What went exceptionally well? What tangible progress was locked in?"
              value={highlights}
              onChange={(e) => setHighlights(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl p-3 text-xs text-paper-ink font-sans focus:outline-none focus:border-emerald-400 leading-relaxed"
            />
          </div>

          <div>
            <label className="block text-xs font-sans uppercase text-rose-300 font-semibold mb-1">
              2. Day’s Difficulties (Friction &amp; Resistance)
            </label>
            <textarea
              rows={3}
              placeholder="What was difficult or where was energy leaked?"
              value={difficulties}
              onChange={(e) => setDifficulties(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl p-3 text-xs text-paper-ink font-sans focus:outline-none focus:border-rose-400 leading-relaxed"
            />
          </div>
        </div>

        {/* Row 2: Daily Promise Review */}
        <div>
          <label className="block text-xs font-sans uppercase text-starlight-lavender font-semibold mb-1">
            3. Daily Promise Review
          </label>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] mb-1.5 text-xs font-sans text-paper-muted flex items-center justify-between">
            <span>Commitment: <strong className="text-paper-ink">{dailyPromise.text || 'None set'}</strong></span>
            <Badge variant={dailyPromise.status === 'kept' ? 'success' : dailyPromise.status === 'missed' ? 'danger' : 'neutral'}>
              {dailyPromise.status}
            </Badge>
          </div>
          <input
            type="text"
            placeholder="Unvarnished assessment of how the finish line was handled..."
            value={promiseReview}
            onChange={(e) => setPromiseReview(e.target.value)}
            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-2 text-xs text-paper-ink font-sans focus:outline-none focus:border-accent"
          />
        </div>

        {/* Row 3: One Lesson & One Next Action */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-sans uppercase text-paper-secondary font-semibold mb-1">
              4. One Primary Lesson
            </label>
            <input
              type="text"
              placeholder="The single behavioral principle extracted..."
              value={lessonLearned}
              onChange={(e) => setLessonLearned(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-2 text-xs text-paper-ink font-sans focus:outline-none focus:border-accent"
            />
          </div>

          <div>
            <label className="block text-xs font-sans uppercase text-starlight-lavender font-semibold mb-1">
              5. Immediate Next Action
            </label>
            <input
              type="text"
              placeholder="First priority for tomorrow..."
              value={nextAction}
              onChange={(e) => setNextAction(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-2 text-xs text-paper-ink font-sans focus:outline-none focus:border-accent"
            />
          </div>
        </div>

        {/* Collapsible Deep Reflection Questions */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setShowExtras(!showExtras)}
            className="flex items-center gap-1.5 text-xs text-paper-muted hover:text-paper-ink transition-colors"
          >
            {showExtras ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            <span>{showExtras ? 'Hide deep reflection inquiries' : 'Expand optional inquiries (energy, unsaid thoughts)'}</span>
          </button>

          {showExtras && (
            <div className="mt-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-3 animate-fadeIn">
              <div>
                <label className="block text-xs font-sans text-paper-muted mb-1">
                  What gave you energy today?
                </label>
                <input
                  type="text"
                  value={energyGiver}
                  onChange={(e) => setEnergyGiver(e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-1.5 text-xs text-paper-ink font-sans focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-sans text-paper-muted mb-1">
                  What drained energy unnecessarily?
                </label>
                <input
                  type="text"
                  value={energyDrainer}
                  onChange={(e) => setEnergyDrainer(e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-1.5 text-xs text-paper-ink font-sans focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-sans text-paper-muted mb-1">
                  Any unspoken thought or intuition to put to rest?
                </label>
                <input
                  type="text"
                  value={unspokenThought}
                  onChange={(e) => setUnspokenThought(e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-1.5 text-xs text-paper-ink font-sans focus:outline-none focus:border-accent"
                />
              </div>
            </div>
          )}
        </div>

        {/* Submit Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
          {savedSuccess ? (
            <span className="text-xs text-emerald-300 flex items-center gap-1.5">
              <CheckCircle2 size={14} />
              Nightly Debrief recorded. Rest with a clear slate.
            </span>
          ) : (
            <span className="text-xs text-paper-muted">
              Honest closing reflection creates clear mornings.
            </span>
          )}

          <Button type="submit" variant="starlight" size="sm" className="gap-1.5">
            <Save size={13} />
            <span>Complete Nightly Debrief</span>
          </Button>
        </div>
      </form>
    </Card>
  );
};
