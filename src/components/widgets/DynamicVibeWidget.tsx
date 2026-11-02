import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, Radio, VolumeX } from 'lucide-react';
import { sound } from '../../audio/sound';

interface Soundscape {
  id: string;
  name: string;
  genre: string;
  type: 'rain' | 'lofi' | 'binaural' | 'synth';
  color: string;
  glowColor: string;
}

const SOUNDSCAPES: Soundscape[] = [
  {
    id: 'lofi',
    name: 'Late Night Lofi',
    genre: 'Mellow Rhodes Chords',
    type: 'lofi',
    color: '#A855F7',
    glowColor: 'rgba(168, 85, 247, 0.4)',
  },
  {
    id: 'rain',
    name: 'Tokyo Rainstorm',
    genre: 'Cozy Rain & Noise Sweep',
    type: 'rain',
    color: '#38BDF8',
    glowColor: 'rgba(56, 189, 248, 0.4)',
  },
  {
    id: 'deep-focus',
    name: 'Binaural Alpha (432Hz)',
    genre: 'Deep Focus Meditation',
    type: 'binaural',
    color: '#06B6D4',
    glowColor: 'rgba(6, 182, 212, 0.4)',
  },
  {
    id: 'cyber-synth',
    name: 'Cyber Horizon',
    genre: 'Pulsing Synthwave Arp',
    type: 'synth',
    color: '#EC4899',
    glowColor: 'rgba(236, 72, 153, 0.4)',
  },
];

interface DynamicVibeWidgetProps {
  currentVibe?: string;
  onVibeChange?: (vibe: string) => void;
  className?: string;
}

export const DynamicVibeWidget: React.FC<DynamicVibeWidgetProps> = ({
  className = '',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedSoundscape, setSelectedSoundscape] = useState<Soundscape>(SOUNDSCAPES[0]);
  const [volume, setVolume] = useState(0.7);

  // Audio nodes refs
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const timerLoopRef = useRef<number | null>(null);
  const activeNodesRef = useRef<any[]>([]);

  const getAudioContext = (): AudioContext | null => {
    if (typeof window === 'undefined') return null;
    if (!audioCtxRef.current) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    return audioCtxRef.current;
  };

  const stopCurrentAudio = () => {
    if (timerLoopRef.current) {
      clearInterval(timerLoopRef.current);
      timerLoopRef.current = null;
    }
    activeNodesRef.current.forEach((node) => {
      try {
        if (node.stop) node.stop();
        if (node.disconnect) node.disconnect();
      } catch {}
    });
    activeNodesRef.current = [];
  };

  const playSoundscape = async (s: Soundscape) => {
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      if (ctx.state === 'suspended') {
        await ctx.resume();
      }

      stopCurrentAudio();

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(volume * 0.4, ctx.currentTime);
      masterGain.connect(ctx.destination);
      masterGainRef.current = masterGain;

      if (s.type === 'rain') {
        // --- TOKYO RAINSTORM SYNTHESIZER ---
        // Pink / Brown filtered noise buffer
        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          output[i] = (b0 + b1 + b2 + white * 0.5362) * 0.11;
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        const rainFilter = ctx.createBiquadFilter();
        rainFilter.type = 'lowpass';
        rainFilter.frequency.setValueAtTime(1100, ctx.currentTime);

        whiteNoise.connect(rainFilter);
        rainFilter.connect(masterGain);
        whiteNoise.start();
        activeNodesRef.current.push(whiteNoise, rainFilter);
      } else if (s.type === 'binaural') {
        // --- 432Hz BINAURAL ALPHA DRONE ---
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const osc3 = ctx.createOscillator();

        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(432, ctx.currentTime);

        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(442, ctx.currentTime); // 10Hz Alpha beat

        osc3.type = 'triangle';
        osc3.frequency.setValueAtTime(216, ctx.currentTime); // Warm sub octave

        const subGain = ctx.createGain();
        subGain.gain.setValueAtTime(0.3, ctx.currentTime);
        osc3.connect(subGain);
        subGain.connect(masterGain);

        osc1.connect(masterGain);
        osc2.connect(masterGain);

        osc1.start();
        osc2.start();
        osc3.start();
        activeNodesRef.current.push(osc1, osc2, osc3, subGain);
      } else if (s.type === 'lofi') {
        // --- LATE NIGHT LOFI (Rhodes Chord Progression) ---
        const chords = [
          [261.63, 329.63, 392.0, 493.88], // Cmaj7
          [220.0, 261.63, 329.63, 392.0],  // Am7
          [293.66, 349.23, 440.0, 523.25], // Dm7
          [196.0, 246.94, 293.66, 349.23], // G7
        ];
        let chordIdx = 0;

        const triggerChord = () => {
          if (!audioCtxRef.current || audioCtxRef.current.state !== 'running') return;
          const now = audioCtxRef.current.currentTime;
          const currentChord = chords[chordIdx % chords.length];
          chordIdx++;

          currentChord.forEach((freq, noteIdx) => {
            const osc = ctx.createOscillator();
            const noteGain = ctx.createGain();

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, now + noteIdx * 0.04);

            noteGain.gain.setValueAtTime(0.001, now + noteIdx * 0.04);
            noteGain.gain.linearRampToValueAtTime(0.18, now + noteIdx * 0.04 + 0.08);
            noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.7);

            osc.connect(noteGain);
            noteGain.connect(masterGain);

            osc.start(now + noteIdx * 0.04);
            osc.stop(now + 2.8);
          });
        };

        triggerChord();
        timerLoopRef.current = window.setInterval(triggerChord, 2800);
      } else if (s.type === 'synth') {
        // --- CYBER HORIZON (Pulsing Arpeggiator) ---
        const scale = [220.0, 261.63, 293.66, 329.63, 392.0, 440.0]; // A Minor Pentatonic
        let noteStep = 0;

        const triggerArp = () => {
          if (!audioCtxRef.current || audioCtxRef.current.state !== 'running') return;
          const now = audioCtxRef.current.currentTime;
          const freq = scale[noteStep % scale.length];
          noteStep++;

          const osc = ctx.createOscillator();
          const filter = ctx.createBiquadFilter();
          const noteGain = ctx.createGain();

          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(freq, now);

          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(800 + (noteStep % 4) * 200, now);

          noteGain.gain.setValueAtTime(0.001, now);
          noteGain.gain.linearRampToValueAtTime(0.15, now + 0.02);
          noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);

          osc.connect(filter);
          filter.connect(noteGain);
          noteGain.connect(masterGain);

          osc.start(now);
          osc.stop(now + 0.38);
        };

        triggerArp();
        timerLoopRef.current = window.setInterval(triggerArp, 300);
      }

      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const handleTogglePlay = async () => {
    sound.tick();
    if (isPlaying) {
      stopCurrentAudio();
      setIsPlaying(false);
    } else {
      await playSoundscape(selectedSoundscape);
    }
  };

  const handleSelect = async (s: Soundscape) => {
    sound.tick();
    setSelectedSoundscape(s);
    if (isPlaying) {
      await playSoundscape(s);
    }
  };

  // Immediate Sound Test Chime
  const handleTestChime = () => {
    sound.complete();
  };

  // Sync volume changes
  useEffect(() => {
    if (masterGainRef.current && audioCtxRef.current) {
      masterGainRef.current.gain.setValueAtTime(
        volume * 0.4,
        audioCtxRef.current.currentTime
      );
    }
  }, [volume]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopCurrentAudio();
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
              Live harmonic study flow generator
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Quick Sound Check Button */}
          <button
            type="button"
            onClick={handleTestChime}
            className="text-[10px] font-mono px-2.5 py-1 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/40 text-purple-300 transition-all font-bold"
            title="Play an instant audio test chime"
          >
            🔊 Test Chime
          </button>
          <span
            className={`text-[10px] font-mono px-2 py-0.5 rounded-full border font-bold ${
              isPlaying
                ? 'bg-pink-500/20 border-pink-500/40 text-pink-300 shadow-[0_0_10px_rgba(236,72,153,0.4)]'
                : 'bg-zinc-800 border-white/10 text-zinc-400'
            }`}
          >
            {isPlaying ? 'Live' : 'Off'}
          </span>
        </div>
      </div>

      {/* Live Equalizer Visualizer Bars */}
      <div className="p-3.5 rounded-2xl bg-zinc-950/70 border border-purple-500/25 flex items-end justify-center gap-1.5 h-16 overflow-hidden">
        {Array.from({ length: 24 }).map((_, idx) => {
          const animDelay = (idx * 0.08).toFixed(2);
          const barHeight = isPlaying ? `${Math.max(25, Math.sin(idx + 1) * 75 + 30)}%` : '15%';

          return (
            <div
              key={idx}
              style={{
                height: barHeight,
                backgroundColor: selectedSoundscape.color,
                boxShadow: isPlaying ? `0 0 10px ${selectedSoundscape.glowColor}` : 'none',
                transition: 'height 0.25s ease-in-out',
                animation: isPlaying
                  ? `pulse 1.1s infinite alternate ease-in-out ${animDelay}s`
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
              onClick={() => handleSelect(s)}
              className={`p-2.5 rounded-xl border text-left transition-all ${
                isSelected
                  ? 'bg-purple-950/50 border-purple-400 text-white shadow-sm'
                  : 'bg-zinc-900/40 hover:bg-zinc-900/70 border-white/10 text-zinc-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-sans font-bold">{s.name}</span>
                <span
                  className="w-2.5 h-2.5 rounded-full"
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
          onClick={handleTogglePlay}
          className={`flex-1 py-2.5 rounded-2xl font-sans font-bold text-xs flex items-center justify-center gap-2 transition-all ${
            isPlaying
              ? 'bg-rose-500 hover:bg-rose-400 text-white shadow-[0_0_20px_rgba(244,63,94,0.45)]'
              : 'bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]'
          }`}
        >
          {isPlaying ? <Pause size={14} /> : <Play size={14} fill="currentColor" />}
          <span>{isPlaying ? 'Pause Audio' : `Play ${selectedSoundscape.name}`}</span>
        </button>

        <div className="flex items-center gap-2 shrink-0">
          {volume === 0 ? (
            <VolumeX size={14} className="text-zinc-500" />
          ) : (
            <Volume2 size={14} className="text-purple-300" />
          )}
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-20 accent-purple-400 cursor-pointer h-1.5 rounded-lg bg-zinc-800"
          />
        </div>
      </div>
    </div>
  );
};
