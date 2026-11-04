import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack, 
  Radio, 
  Link as LinkIcon 
} from 'lucide-react';
import { useData } from '../context/DataContext';

export const MusicView: React.FC = () => {
  const { 
    audioStations, 
    activeStationId, 
    setActiveStationId, 
    isAudioPlaying, 
    setIsAudioPlaying,
    loadCustomAudioUrl,
    setActiveTab 
  } = useData();

  const [urlInput, setUrlInput] = useState('');

  const activeStation = audioStations.find((s) => s.id === activeStationId) || audioStations[0];

  const handleNext = () => {
    const currentIndex = audioStations.findIndex((s) => s.id === activeStationId);
    const nextIndex = (currentIndex + 1) % audioStations.length;
    setActiveStationId(audioStations[nextIndex].id);
  };

  const handlePrev = () => {
    const currentIndex = audioStations.findIndex((s) => s.id === activeStationId);
    const prevIndex = (currentIndex - 1 + audioStations.length) % audioStations.length;
    setActiveStationId(audioStations[prevIndex].id);
  };

  const handleLoadCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (urlInput.trim()) {
      loadCustomAudioUrl(urlInput.trim());
      setUrlInput('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-8 space-y-8 select-none font-sans">
      {/* Header */}
      <div className="border-b border-white/[0.06] pb-4">
        <button
          onClick={() => setActiveTab('wallpaper')}
          className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors mb-2 font-sans"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Return to Wallpaper HUD
        </button>
        <div className="flex items-center gap-2.5">
          <Radio className="w-5 h-5 text-violet-300" />
          <h2 className="font-sans text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            Focus Audio & Ambient Soundscapes
          </h2>
        </div>
        <p className="text-xs text-zinc-400 font-sans mt-1">
          Distraction-free ambient frequencies, lo-fi beats, and custom streams.
        </p>
      </div>

      {/* Main Player Display (Frosted Glass Card matching Wallpaper HUD) */}
      <div className="p-6 sm:p-10 rounded-[2rem] bg-gradient-to-b from-[#181a33]/60 to-[#121326]/40 backdrop-blur-3xl border border-white/[0.08] border-t-white/[0.18] shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-[11px] font-mono text-zinc-400">
              {activeStation.genre} • {activeStation.type.toUpperCase()}
            </div>
            <h3 className="font-sans text-xl sm:text-2xl text-white font-medium">
              {activeStation.name}
            </h3>
            <p className="text-xs text-zinc-400 font-sans">
              Continuous background focus stream
            </p>
          </div>

          {/* Transport Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white transition-colors border border-white/[0.08]"
              title="Previous station"
            >
              <SkipBack className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsAudioPlaying(!isAudioPlaying)}
              className="p-4 rounded-2xl bg-[#9333ea] hover:bg-[#a855f7] text-white shadow-[0_0_20px_rgba(147,51,234,0.35)] transition-all"
              title={isAudioPlaying ? 'Pause audio' : 'Play audio'}
            >
              {isAudioPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5 fill-current" />}
            </button>

            <button
              onClick={handleNext}
              className="p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white transition-colors border border-white/[0.08]"
              title="Next station"
            >
              <SkipForward className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Embedded Iframe Player */}
        {isAudioPlaying && (
          <div className="w-full h-44 rounded-xl overflow-hidden border border-white/[0.1] bg-black">
            <iframe
              title="Focus Audio Player"
              src={activeStation.embedSrc}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>

      {/* Custom Stream Input Form */}
      <form onSubmit={handleLoadCustom} className="p-6 rounded-[2rem] bg-gradient-to-b from-[#181a33]/60 to-[#121326]/40 backdrop-blur-3xl border border-white/[0.08] border-t-white/[0.18] shadow-md space-y-3">
        <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-[0.16em] text-zinc-200 font-semibold">
          <LinkIcon className="w-4 h-4 text-violet-300" />
          <span>Load Custom Focus Stream</span>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Paste YouTube or Spotify URL (e.g. https://www.youtube.com/watch?v=...)..."
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            className="flex-1 bg-white/[0.04] border border-white/[0.1] rounded-xl px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-violet-400 font-sans"
          />
          <button
            type="submit"
            disabled={!urlInput.trim()}
            className="px-5 py-2 bg-[#9333ea] hover:bg-[#a855f7] disabled:opacity-40 text-white rounded-xl text-xs font-bold uppercase tracking-wider font-sans transition-all"
          >
            Load
          </button>
        </div>
      </form>

      {/* Available Stations Gallery */}
      <div className="space-y-3">
        <h3 className="text-xs font-sans uppercase tracking-[0.16em] text-zinc-200 font-semibold pb-1 border-b border-white/[0.06]">
          Curated Soundscapes ({audioStations.length})
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {audioStations.map((station) => (
            <div
              key={station.id}
              onClick={() => {
                setActiveStationId(station.id);
                setIsAudioPlaying(true);
              }}
              className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                activeStationId === station.id
                  ? 'bg-white/[0.08] border-violet-400/50 shadow-md'
                  : 'bg-white/[0.025] hover:bg-white/[0.05] border-white/[0.06]'
              }`}
            >
              <div>
                <p className="font-semibold text-xs text-zinc-100 font-sans">{station.name}</p>
                <p className="text-[10px] text-zinc-400 font-mono mt-0.5">
                  {station.genre} • {station.type.toUpperCase()}
                </p>
              </div>

              {activeStationId === station.id && isAudioPlaying && (
                <span className="w-2 h-2 rounded-full bg-violet-400 animate-ping" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
