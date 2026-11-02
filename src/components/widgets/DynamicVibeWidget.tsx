import React, { useState, useEffect, useRef } from 'react';
import { Headphones, Play, Pause, Volume2, Sparkles, Radio } from 'lucide-react';
import { sound } from '../../audio/sound';

interface Soundscape {
  id: string;
  name: string;
  genre: string;
  frequency: number;
  color: string;
  glowColor: string;
}

const SOUNDSCAPES: Soundscape[] = [
  {
    id: 'lofi',
    name: 'Late Night Lofi',
    genre: 'Chillhop & Vinyl',
    frequency: 180,
    color: '#A855F7',
    glowColor: 'rgba(168, 85, 247, 0.4)',
  },
  {
    id: 'deep-focus',
    name: 'Binaural Alpha Wave',
    genre: '14Hz Deep Focus',
    frequency: 220,
    color: '#06B6D4',
    glowColor: 'rgba(6, 182, 212, 0.4)',
  },
  {
    id: 'cyber-synth',
    name: 'Cyber Horizon',
    genre: 'Ambient Synthwave',
    frequency: 260,
    color: '#EC4899',
    glowColor: 'rgba(236, 72, 153, 0.4)',
  },
  {
    id: 'rain',
    name: 'Tokyo Rainstorm',
    genre: 'Cozy Rain & Thunder',
    frequency: 140,
    color: '#38BDF8',
    glowColor: 'rgba(56, 189, 248, 0.4)',
  },
];

interface DynamicVibeWidgetProps {
  currentVibe?: string;
  onVibeChange?: (vibe: string) => void;
  className?: string;
}

export const DynamicVibeWidget: React.FC<DynamicVibeWidgetProps> = ({
  currentVibe = 'Locked In',
  onVibeChange,
  className = '',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedSoundscape, setSelectedSoundscape] = useState<Soundscape>(SOUNDSCAPES[0]);
  const [volume, setVolume] = useState(0.5);

  // Web Audio synth generator
  const audioCtxRef = useRef<AudioContext | null>(null);
  const osc1Ref = useRef<OscillatorNode | null>(null);
  const osc2Ref = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const filterNodeRef = useRef<BiquadFilterNode | null>(null);

  const startSound = (soundscape: Soundscape) => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;

      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      // Stop existing oscillators
      if (osc1Ref.current) {
        try {
          osc1Ref.current.stop();
          osc1Ref.current.disconnect();
        } catch {}
      }
      if (osc2Ref.current) {
        try {
          osc2Ref.current.stop();
          osc2Ref.current.disconnect();
        } catch {}
      }

      const ctx = audioCtxRef.current;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(volume * 0.15, ctx.currentTime);
      gainNodeRef.current = gain;

      // Filter for lush warm sound
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, ctx.currentTime);
      filterNodeRef.current = filter;

      // Main harmonic drone
      const osc1 = ctx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(soundscape.frequency, ctx.currentTime);

      // Binaural beat offset (+7Hz for alpha waves)
      const osc2 = ctx.createOscillator();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(soundscape.frequency + 7, ctx.currentTime);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc1.start();
      osc2.start();

      osc1Ref.current = osc1;
      osc2Ref.current = osc2;
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const stopSound = () => {
    if (osc1Ref.current) {
      try {
        osc1Ref.current.stop();
        osc1Ref.current.disconnect();
      } catch {}
      osc1Ref.current = null;
    }
    if (osc2Ref.current) {
      try {
        osc2Ref.current.stop();
        osc2Ref.current.disconnect();
      } catch {}
      osc2Ref.current = null;
    }
    setIsPlaying(false);
  };

  const togglePlayback = () => {
    sound.tick();
    if (isPlaying) {
      stopSound();
    } else {
      startSound(selectedSoundscape);
    }
  };

  const handleSelectSoundscape = (s: Soundscape) => {
    sound.tick();
    setSelectedSoundscape(s);
    if (isPlaying) {
      startSound(s);
    }
  };

  // Adjust volume
  useEffect(() => {
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(volume * 0.15, audioCtxRef.current.currentTime);
    }
  }, [volume]);

  // Clean up audio on unmount
  useEffect(() => {
    return () => {
      stopSound();
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div
      className={`p-5 rounded-3xl bg-gradient-to-br from-purple-950/30 via-zinc-900/70 to-[#0A0D18] backdrop-blur-2xl border border-purple-500/35 shadow-[0_0_30px_rgba(168,85,247,0.14)] space-y-4 ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-purple-500/20 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300">
            <Radio size={14} className={isPlaying ? 'animate-pulse text-pink-400' : ''} />
          </div>
          <div>
            <h3 className="text-sm font-heading font-extrabold text-white">
              Atmospheric Soundscape &amp; Equalizer
            </h3>
            <p className="text-[11px] font-sans text-zinc-400">
              Harmonic soundscapes for study flow
            </p>
          </div>
        </div>
        <span
          className={`text-[10px] font-mono px-2 py-0.5 rounded-full border font-bold ${
            isPlaying
              ? 'bg-pink-500/20 border-pink-500/40 text-pink-300 shadow-[0_0_10px_rgba(236,72,153,0.4)]'
              : 'bg-zinc-800 border-white/10 text-zinc-400'
          }`}
        >
          {isPlaying ? 'Live Playing' : 'Idle'}
        </span>
      </div>

      {/* Live Equalizer Visualizer Bars */}
      <div className="p-3.5 rounded-2xl bg-zinc-950/60 border border-purple-500/20 flex items-end justify-center gap-1.5 h-16 overflow-hidden">
        {Array.from({ length: 24 }).map((_, idx) => {
          // Dynamic height calculation
          const animDelay = (idx * 0.08).toFixed(2);
          const barHeight = isPlaying ? `${Math.max(20, Math.sin(idx + 1) * 80 + 30)}%` : '15%';

          return (
            <div
              key={idx}
              style={{
                height: barHeight,
                backgroundColor: selectedSoundscape.color,
                boxShadow: isPlaying ? `0 0 8px ${selectedSoundscape.glowColor}` : 'none',
                transition: 'height 0.25s ease-in-out',
                animation: isPlaying
                  ? `pulse 1.2s infinite alternate ease-in-out ${animDelay}s`
                  : 'none',
              }}
              className="w-1.5 rounded-full"
            />
          );
        })}
      </div>

      {/* Preset Soundscapes Pills */}
      <div className="grid grid-cols-2 gap-2">
        {SOUNDSCAPES.map((s) => {
          const isSelected = selectedSoundscape.id === s.id;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => handleSelectSoundscape(s)}
              className={`p-2.5 rounded-xl border text-left transition-all ${
                isSelected
                  ? 'bg-purple-950/40 border-purple-400 text-white shadow-sm'
                  : 'bg-zinc-900/40 hover:bg-zinc-900/70 border-white/10 text-zinc-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-sans font-bold">{s.name}</span>
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: s.color }}
                />
              </div>
              <span className="text-[10px] font-mono text-zinc-400 block pt-0.5">
                {s.genre}
              </span>
            </button>
          );
        })}
      </div>

      {/* Play/Pause CTA & Volume Slider */}
      <div className="flex items-center justify-between gap-4 pt-1">
        <button
          type="button"
          onClick={togglePlayback}
          className={`flex-1 py-2 rounded-2xl font-sans font-bold text-xs flex items-center justify-center gap-2 transition-all ${
            isPlaying
              ? 'bg-rose-500 hover:bg-rose-400 text-white shadow-[0_0_15px_rgba(244,63,94,0.4)]'
              : 'bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]'
          }`}
        >
          {isPlaying ? <Pause size={14} /> : <Play size={14} fill="currentColor" />}
          <span>{isPlaying ? 'Pause Audio' : `Play ${selectedSoundscape.name}`}</span>
        </button>

        <div className="flex items-center gap-2 shrink-0">
          <Volume2 size={13} className="text-zinc-400" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-20 accent-purple-500 cursor-pointer h-1 rounded-lg bg-zinc-800"
          />
        </div>
      </div>
    </div>
  );
};
