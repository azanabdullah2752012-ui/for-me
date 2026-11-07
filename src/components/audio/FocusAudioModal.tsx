import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  X, 
  Headphones, 
  Clock, 
  Radio
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { SOUNDSCAPE_PRESETS } from '../../services/soundEngine';
import { SoundVisualizer } from './SoundVisualizer';

interface FocusAudioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FocusAudioModal: React.FC<FocusAudioModalProps> = ({ isOpen, onClose }) => {
  const { 
    isAudioPlaying, 
    activeSoundscapeId, 
    audioVolume, 
    isAudioMuted, 
    playSoundscape, 
    stopSoundscape, 
    setAudioVolume, 
    toggleAudioMute 
  } = useData();

  // Sleep Timer state
  const [timerMinutes, setTimerMinutes] = useState<number | null>(null);
  const [remainingSeconds, setRemainingSeconds] = useState<number | null>(null);

  useEffect(() => {
    if (!timerMinutes) {
      setRemainingSeconds(null);
      return;
    }

    setRemainingSeconds(timerMinutes * 60);
    const interval = setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev === null || prev <= 1) {
          stopSoundscape();
          setTimerMinutes(null);
          return null;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timerMinutes, stopSoundscape]);

  // Keyboard shortcut: Escape closes modal
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

  const activePreset = SOUNDSCAPE_PRESETS.find((p) => p.id === activeSoundscapeId) || SOUNDSCAPE_PRESETS[0];

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-xl animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="audio-modal-title"
    >
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div className="relative z-10 w-full max-w-2xl bg-[#0b0d1e] border border-white/[0.12] rounded-3xl shadow-[0_20px_70px_rgba(0,0,0,0.85)] flex flex-col max-h-[90vh] overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.08] bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-violet-600/25 border border-violet-400/40 flex items-center justify-center text-violet-300">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h2 id="audio-modal-title" className="text-sm sm:text-base font-display font-semibold text-white tracking-wide flex items-center gap-2">
                Focus Audio Sanctuary
                <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  Web Audio • Offline
                </span>
              </h2>
              <p className="text-xs text-zinc-400 font-sans mt-0.5">
                Scientifically synthesized procedural soundscapes. Zero streaming lag.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-white/[0.05] hover:bg-white/[0.12] text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-white/[0.08]"
            aria-label="Close sound sanctuary"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Presets Grid */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {SOUNDSCAPE_PRESETS.map((preset) => {
              const isSelected = activeSoundscapeId === preset.id;
              const isThisPlaying = isSelected && isAudioPlaying;

              return (
                <div
                  key={preset.id}
                  onClick={() => {
                    if (isThisPlaying) {
                      stopSoundscape();
                    } else {
                      playSoundscape(preset.id);
                    }
                  }}
                  className={`relative p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between select-none group ${
                    isSelected
                      ? 'bg-violet-950/35 border-violet-500/50 shadow-[0_0_25px_rgba(168,85,247,0.18)]'
                      : 'bg-white/[0.025] hover:bg-white/[0.05] border-white/[0.08] hover:border-white/[0.18]'
                  }`}
                >
                  <div>
                    {/* Top row: Category tag & play badge */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 bg-white/[0.05] px-2 py-0.5 rounded-md border border-white/[0.06]">
                        {preset.category}
                      </span>

                      <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                        isThisPlaying
                          ? 'bg-violet-500 text-white shadow-[0_0_12px_rgba(168,85,247,0.6)]'
                          : 'bg-white/[0.06] text-zinc-300 group-hover:bg-white/[0.15] group-hover:text-white'
                      }`}>
                        {isThisPlaying ? (
                          <Pause className="w-3.5 h-3.5 fill-current" />
                        ) : (
                          <Play className="w-3.5 h-3.5 ml-0.5 fill-current" />
                        )}
                      </div>
                    </div>

                    <h3 className="text-sm font-display font-semibold text-white tracking-wide group-hover:text-violet-200 transition-colors">
                      {preset.title}
                    </h3>
                    <p className="text-xs text-zinc-400 font-sans mt-1 leading-snug line-clamp-2">
                      {preset.tagline}
                    </p>
                  </div>

                  {/* Bottom telemetry */}
                  <div className="mt-3 pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-zinc-400">
                    <span className="truncate pr-2">{preset.frequency}</span>
                    {isThisPlaying && (
                      <span className="flex items-center gap-1 text-emerald-400 font-semibold shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        PLAYING
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sleep / Focus Session Timer */}
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-violet-400" />
              <span className="text-xs font-display text-zinc-300 font-medium">Auto-Stop Timer:</span>
              {remainingSeconds !== null && (
                <span className="text-xs font-mono font-bold text-amber-300 bg-amber-500/15 px-2 py-0.5 rounded-md border border-amber-500/30">
                  {formatTimer(remainingSeconds)} left
                </span>
              )}
            </div>

            <div className="flex items-center gap-1.5">
              {[
                { label: 'Off', val: null },
                { label: '15m', val: 15 },
                { label: '25m', val: 25 },
                { label: '45m', val: 45 },
                { label: '60m', val: 60 },
              ].map((t) => (
                <button
                  key={t.label}
                  type="button"
                  onClick={() => setTimerMinutes(t.val)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                    timerMinutes === t.val
                      ? 'bg-violet-600 text-white font-bold shadow-sm'
                      : 'bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08]'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Master Audio Controller Bottom Bar */}
        <div className="p-5 border-t border-white/[0.08] bg-[#070914]/90 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Active Soundscape Badge & Visualizer */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="w-10 h-10 rounded-xl bg-violet-600/30 border border-violet-400/40 flex items-center justify-center text-violet-200 shrink-0">
              <Radio className={`w-5 h-5 ${isAudioPlaying ? 'text-violet-300 animate-pulse' : 'text-zinc-500'}`} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-xs font-display font-medium text-white truncate">
                {isAudioPlaying ? activePreset.title : 'Audio Paused'}
              </p>
              <div className="flex items-center gap-2 mt-0.5">
                <SoundVisualizer isPlaying={isAudioPlaying} color={activePreset.accentColor} className="w-16 h-4" />
                <span className="text-[10px] font-mono text-zinc-400">
                  {isAudioPlaying ? 'Synthesizing...' : 'Select soundscape'}
                </span>
              </div>
            </div>
          </div>

          {/* Volume Slider & Play/Pause Button */}
          <div className="flex items-center gap-4 w-full sm:w-auto justify-end">
            {/* Volume */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleAudioMute}
                className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
                title={isAudioMuted ? 'Unmute' : 'Mute'}
                aria-label={isAudioMuted ? 'Unmute focus audio' : 'Mute focus audio'}
              >
                {isAudioMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isAudioMuted ? 0 : audioVolume}
                onChange={(e) => setAudioVolume(parseFloat(e.target.value))}
                className="w-20 sm:w-24 h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-violet-500"
                aria-label="Volume slider"
              />
              <span className="text-[10px] font-mono text-zinc-400 w-8 tabular-nums">
                {isAudioMuted ? '0%' : `${Math.round(audioVolume * 100)}%`}
              </span>
            </div>

            {/* Big Action Button */}
            <button
              type="button"
              onClick={() => {
                if (isAudioPlaying) {
                  stopSoundscape();
                } else {
                  playSoundscape(activeSoundscapeId);
                }
              }}
              className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-display font-semibold tracking-wider uppercase flex items-center gap-2 shadow-[0_0_20px_rgba(147,51,234,0.35)] transition-all cursor-pointer"
            >
              {isAudioPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-current" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Play</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
