import React from 'react';
import {
  Headphones,
  Play,
  Pause,
  Volume2,
} from 'lucide-react';
import { useData, AUDIO_TRACKS } from '../context/DataContext';
import { sound } from '../audio/sound';

export const MusicView: React.FC = () => {
  const { activeTrackIndex, setActiveTrackIndex, isPlayingAudio, toggleAudioPlayback } = useData();

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-16 animate-fadeIn select-none">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-white/[0.06]">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[#E56A38] text-base">✦</span>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">
              Focus Audio Studio
            </h1>
          </div>
          <p className="text-xs font-sans text-zinc-400 mt-1">
            Generative ambient frequencies and soundscapes synthesized directly for deep work.
          </p>
        </div>
      </header>

      {/* Main Player Card */}
      <section className="p-8 rounded-3xl bg-[#0D0F16]/90 border border-white/[0.08] shadow-2xl backdrop-blur-xl space-y-6 text-center">
        <div className="w-20 h-20 mx-auto rounded-full bg-[#E56A38]/10 border border-[#E56A38]/30 flex items-center justify-center text-[#E56A38] shadow-[0_0_25px_rgba(229,106,56,0.25)]">
          <Headphones size={32} />
        </div>

        <div>
          <h2 className="text-xl font-serif font-bold text-white">
            {AUDIO_TRACKS[activeTrackIndex]?.title || 'Deep Work'}
          </h2>
          <p className="text-xs font-mono text-[#E56A38] mt-1">
            {AUDIO_TRACKS[activeTrackIndex]?.genre}
          </p>
        </div>

        {/* Master Play Button */}
        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={toggleAudioPlayback}
            className="px-8 py-3 rounded-full bg-[#E56A38] hover:bg-[#D9531E] text-white text-xs font-sans font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(229,106,56,0.4)] transition-all"
          >
            {isPlayingAudio ? <Pause size={14} /> : <Play size={14} fill="currentColor" />}
            <span>{isPlayingAudio ? 'Pause Soundscape' : 'Play Soundscape'}</span>
          </button>
        </div>
      </section>

      {/* Preset Soundscapes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {AUDIO_TRACKS.map((track, idx) => {
          const isSelected = activeTrackIndex === idx;
          return (
            <button
              key={track.id}
              type="button"
              onClick={() => {
                sound.tick();
                setActiveTrackIndex(idx);
                if (isPlayingAudio) {
                  sound.startSoundscape(track.id);
                }
              }}
              className={`p-5 rounded-3xl text-left border transition-all flex items-center justify-between ${
                isSelected
                  ? 'bg-[#E56A38]/15 border-[#E56A38]/40 shadow-sm'
                  : 'bg-[#0D0F16]/90 border-white/[0.08] hover:border-white/[0.15]'
              }`}
            >
              <div>
                <h3 className={`text-sm font-sans font-bold ${isSelected ? 'text-white' : 'text-zinc-300'}`}>
                  {track.title}
                </h3>
                <span className="text-[10px] font-mono text-zinc-500">{track.genre}</span>
              </div>
              <span className={`text-xs ${isSelected ? 'text-[#E56A38]' : 'text-zinc-500'}`}>
                {isSelected ? 'Active' : 'Select'}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
