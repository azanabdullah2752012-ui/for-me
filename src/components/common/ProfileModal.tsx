import React, { useState, useEffect } from 'react';
import { 
  X, 
  User, 
  Sparkles, 
  Check, 
  Target, 
  Flame, 
  RotateCcw,
  Smile,
  Quote,
  Trash2,
  Calendar
} from 'lucide-react';
import { useData } from '../../context/DataContext';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  const { 
    profile, 
    updateProfile, 
    appTheme, 
    setStudySubject,
    lastActiveDate,
    resetDayProgress,
    factoryReset
  } = useData();
  const isLight = appTheme === 'light';

  const [nameInput, setNameInput] = useState(profile.name || 'Azan');
  const [mottoInput, setMottoInput] = useState(profile.motto || 'Remember, you are here for you.');
  const [topicInput, setTopicInput] = useState(profile.defaultFocusTopic || 'Engineering');
  const [modeInput, setModeInput] = useState(profile.defaultFocusMode || 'Deep Work');
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [resetMessage, setResetMessage] = useState<string | null>(null);

  useEffect(() => {
    setNameInput(profile.name || 'Azan');
    setMottoInput(profile.motto || 'Remember, you are here for you.');
    setTopicInput(profile.defaultFocusTopic || 'Engineering');
    setModeInput(profile.defaultFocusMode || 'Deep Work');
  }, [profile, isOpen]);

  // Accessible keyboard shortcuts (Escape closes)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = nameInput.trim() || 'Azan';
    const cleanMotto = mottoInput.trim() || 'Remember, you are here for you.';
    const cleanTopic = topicInput.trim() || 'Engineering';
    const cleanMode = modeInput.trim() || 'Deep Work';

    updateProfile({
      name: cleanName,
      motto: cleanMotto,
      defaultFocusTopic: cleanTopic,
      defaultFocusMode: cleanMode,
    });
    setStudySubject(cleanTopic);

    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 500);
  };

  const handleResetDefaults = () => {
    setNameInput('Azan');
    setMottoInput('Remember, you are here for you.');
    setTopicInput('Engineering');
    setModeInput('Deep Work');
    updateProfile({
      name: 'Azan',
      motto: 'Remember, you are here for you.',
      defaultFocusTopic: 'Engineering',
      defaultFocusMode: 'Deep Work',
    });
    setStudySubject('Engineering');
  };

  const handleStartFreshDay = () => {
    if (window.confirm("Start a fresh day? This will uncheck today's tasks & habits, reset hydration to 0%, and reset focus timer.")) {
      resetDayProgress();
      setResetMessage("Today's progress has been reset!");
      setTimeout(() => setResetMessage(null), 3000);
    }
  };

  const handleFactoryReset = () => {
    if (window.confirm("WARNING: Are you sure you want to perform a factory reset? All saved tasks, habits, focus history, and settings will be permanently wiped and restored to default.")) {
      factoryReset();
      setResetMessage("All app data restored to factory defaults.");
      setTimeout(() => {
        setResetMessage(null);
        onClose();
      }, 1500);
    }
  };

  // Dynamic time-based preview
  const getGreetingWord = () => {
    const h = new Date().getHours();
    if (h >= 5 && h < 12) return 'Good morning';
    if (h >= 12 && h < 17) return 'Good afternoon';
    if (h >= 17 && h < 22) return 'Good evening';
    return 'Late night focus';
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md animate-fadeIn select-none ${
      isLight ? 'bg-black/35' : 'bg-black/80'
    }`}>
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="profile-modal-title"
        className={`relative w-full max-w-lg overflow-hidden rounded-3xl border shadow-2xl flex flex-col z-10 ${
          isLight 
            ? 'bg-white/95 border-zinc-200 text-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.15)]' 
            : 'cosmic-card border-white/[0.14] text-white shadow-2xl'
        }`}
      >
        {/* Header */}
        <div className={`flex items-center justify-between p-5 pb-3 border-b shrink-0 ${
          isLight ? 'border-zinc-200' : 'border-white/[0.08]'
        }`}>
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-xl border flex items-center justify-center ${
              isLight 
                ? 'bg-amber-50 border-amber-200 text-amber-700' 
                : 'bg-amber-500/20 border-amber-400/30 text-amber-300'
            }`}>
              <User className="w-4 h-4" />
            </div>
            <div>
              <h2 id="profile-modal-title" className={`text-sm font-display uppercase tracking-widest font-bold ${
                isLight ? 'text-zinc-900' : 'text-white'
              }`}>
                Personal Sanctuary Profile
              </h2>
              <p className={`text-[11px] font-sans ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                Tailor your name, daily motto & focus targets
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handleResetDefaults}
              aria-label="Reset profile to defaults"
              title="Reset to defaults"
              className={`p-2 rounded-xl transition-colors cursor-pointer ${
                isLight ? 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600' : 'bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white'
              }`}
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close Profile Modal"
              className={`p-2 rounded-xl transition-colors cursor-pointer ${
                isLight ? 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600' : 'bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white'
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="p-6 space-y-4">
          {/* Live Preview Pill */}
          <div className={`p-4 rounded-2xl border text-center space-y-1 transition-all ${
            isLight
              ? 'bg-zinc-50 border-zinc-200 text-zinc-800'
              : 'bg-white/[0.03] border-white/[0.08] text-zinc-200'
          }`}>
            <span className={`text-[10px] font-mono uppercase tracking-widest ${
              isLight ? 'text-zinc-500' : 'text-zinc-400'
            }`}>
              Live Greeting Preview
            </span>
            <p className="text-xs sm:text-sm font-sans leading-relaxed">
              {getGreetingWord()},{' '}
              <strong className={isLight ? 'text-zinc-950' : 'text-white'}>
                {nameInput.trim() || 'Azan'}
              </strong>
              . •{' '}
              <span className={`italic ${isLight ? 'text-zinc-700 font-medium' : 'text-zinc-300'}`}>
                &ldquo;{mottoInput.trim() || 'Remember, you are here for you.'}&rdquo;
              </span>
            </p>
          </div>

          {/* Name Field */}
          <div className="space-y-1.5">
            <label className={`text-xs font-semibold flex items-center justify-between ${
              isLight ? 'text-zinc-800' : 'text-zinc-200'
            }`}>
              <span className="flex items-center gap-1.5">
                <Smile className="w-3.5 h-3.5 text-amber-500" />
                <span>Your Name</span>
              </span>
              <span className={`text-[10px] font-normal ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                Used in greetings & daily focus
              </span>
            </label>
            <input
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              placeholder="e.g. Azan"
              className="w-full cosmic-input rounded-xl px-3.5 py-2.5 text-xs font-medium"
            />
          </div>

          {/* Motto / Daily Mantra Field */}
          <div className="space-y-1.5">
            <label className={`text-xs font-semibold flex items-center justify-between ${
              isLight ? 'text-zinc-800' : 'text-zinc-200'
            }`}>
              <span className="flex items-center gap-1.5">
                <Quote className="w-3.5 h-3.5 text-violet-400" />
                <span>Daily Mantra / Motto</span>
              </span>
              <span className={`text-[10px] font-normal ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                Displayed on your wallpaper
              </span>
            </label>
            <input
              type="text"
              value={mottoInput}
              onChange={(e) => setMottoInput(e.target.value)}
              placeholder="e.g. Remember, you are here for you."
              className="w-full cosmic-input rounded-xl px-3.5 py-2.5 text-xs font-medium"
            />
          </div>

          {/* Focus Topic & Mode */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="space-y-1.5">
              <label className={`text-xs font-semibold flex items-center gap-1.5 ${
                isLight ? 'text-zinc-800' : 'text-zinc-200'
              }`}>
                <Target className="w-3.5 h-3.5 text-emerald-400" />
                <span>Primary Focus Topic</span>
              </label>
              <input
                type="text"
                value={topicInput}
                onChange={(e) => setTopicInput(e.target.value)}
                placeholder="e.g. Engineering"
                className="w-full cosmic-input rounded-xl px-3.5 py-2 text-xs"
              />
            </div>

            <div className="space-y-1.5">
              <label className={`text-xs font-semibold flex items-center gap-1.5 ${
                isLight ? 'text-zinc-800' : 'text-zinc-200'
              }`}>
                <Flame className="w-3.5 h-3.5 text-amber-500" />
                <span>Default Focus Mode</span>
              </label>
              <input
                type="text"
                value={modeInput}
                onChange={(e) => setModeInput(e.target.value)}
                placeholder="e.g. Deep Work"
                className="w-full cosmic-input rounded-xl px-3.5 py-2 text-xs"
              />
            </div>
          </div>

          {/* Quick Presets */}
          <div className="pt-2">
            <span className={`text-[10px] font-mono uppercase tracking-wider block mb-1.5 ${
              isLight ? 'text-zinc-500' : 'text-zinc-400'
            }`}>
              Quick Mantras
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[
                'Remember, you are here for you.',
                'Discipline equals true freedom.',
                'Deep focus over scattered noise.',
                'Build with relentless craft.'
              ].map((mantra) => (
                <button
                  key={mantra}
                  type="button"
                  onClick={() => setMottoInput(mantra)}
                  className={`text-[11px] px-2.5 py-1 rounded-lg border transition-all text-left cursor-pointer ${
                    mottoInput === mantra
                      ? isLight ? 'bg-violet-100 border-violet-300 text-violet-900 font-medium' : 'bg-violet-600/30 border-violet-400/50 text-violet-200 font-medium'
                      : isLight ? 'bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700' : 'bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300'
                  }`}
                >
                  &ldquo;{mantra}&rdquo;
                </button>
              ))}
            </div>
          </div>

          {/* Daily Rollover & System Resets */}
          <div className={`p-3.5 rounded-2xl border space-y-2.5 ${
            isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-white/[0.02] border-white/[0.08]'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Calendar className={`w-3.5 h-3.5 ${isLight ? 'text-violet-700' : 'text-violet-400'}`} />
                <span className={`text-xs font-semibold ${isLight ? 'text-zinc-800' : 'text-zinc-200'}`}>
                  Daily Rollover & Data Control
                </span>
              </div>
              <span className={`text-[10px] font-mono ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                Date: {lastActiveDate}
              </span>
            </div>

            {resetMessage && (
              <div className="p-2 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs flex items-center gap-2">
                <Check className="w-3.5 h-3.5 shrink-0" />
                <span>{resetMessage}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              <button
                type="button"
                onClick={handleStartFreshDay}
                className={`px-3 py-2 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  isLight
                    ? 'bg-white hover:bg-zinc-100 text-zinc-800 border-zinc-200'
                    : 'bg-white/[0.04] hover:bg-white/[0.08] text-zinc-200 border-white/[0.10]'
                }`}
                title="Uncheck today's tasks & habits, reset hydration"
              >
                <RotateCcw className="w-3.5 h-3.5 text-violet-400" />
                <span>Start Fresh Day</span>
              </button>

              <button
                type="button"
                onClick={handleFactoryReset}
                className={`px-3 py-2 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  isLight
                    ? 'bg-rose-50 hover:bg-rose-100 text-rose-700 border-rose-200'
                    : 'bg-rose-950/20 hover:bg-rose-900/40 text-rose-300 border-rose-500/20 hover:border-rose-500/40'
                }`}
                title="Wipe data and restore factory defaults"
              >
                <Trash2 className="w-3.5 h-3.5 text-rose-400" />
                <span>Factory Reset</span>
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex items-center justify-end gap-2.5">
            <button
              type="button"
              onClick={onClose}
              className={`px-4 py-2.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                isLight ? 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700' : 'bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300'
              }`}
            >
              Cancel
            </button>

            <button
              type="submit"
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-md transition-all cursor-pointer ${
                savedSuccess
                  ? 'bg-emerald-500 text-white'
                  : isLight
                    ? 'bg-zinc-900 hover:bg-zinc-800 text-white'
                    : 'bg-violet-600 hover:bg-violet-500 text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]'
              }`}
            >
              {savedSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Saved!</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Save Profile</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
