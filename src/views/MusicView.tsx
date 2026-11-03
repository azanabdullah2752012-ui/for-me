import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { Play, Pause, SkipBack, SkipForward, ArrowLeft, Radio, Link as LinkIcon } from 'lucide-react';

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
  const activeIndex = audioStations.findIndex((s) => s.id === activeStationId);

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % audioStations.length;
    setActiveStationId(audioStations[nextIdx].id);
  };

  const handlePrev = () => {
    const prevIdx = (activeIndex - 1 + audioStations.length) % audioStations.length;
    setActiveStationId(audioStations[prevIdx].id);
  };

  const handleLoadCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (urlInput.trim()) {
      loadCustomAudioUrl(urlInput.trim());
      setUrlInput('');
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4 sm:px-6 space-y-12 select-none">
      {/* Header */}
      <div className="border-b border-white/[0.06] pb-6">
        <button
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors mb-2"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </button>
        <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-wide">
          Focus Audio
        </h2>
        <p className="text-xs text-zinc-400 font-sans mt-1">
          Background YouTube and Spotify focus streams that play continuously across the workspace.
        </p>
      </div>

      {/* Active Player Card */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#0c1022]/80 border border-[#c4b5fd]/[0.1] space-y-6 shadow-sanctuary backdrop-blur-md">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="w-20 h-20 rounded-2xl bg-violet-950/60 border border-violet-400/30 flex items-center justify-center flex-shrink-0">
            <Radio className={`w-8 h-8 text-violet-300 ${isAudioPlaying ? 'animate-pulse' : ''}`} />
          </div>

          <div className="flex-1 text-center sm:text-left space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-violet-300 bg-violet-500/10 px-2 py-0.5 rounded">
                {activeStation.type.toUpperCase()}
              </span>
              <span className="text-xs text-zinc-400">{activeStation.genre}</span>
            </div>
            <h3 className="font-serif text-2xl text-white font-medium">
              {activeStation.name}
            </h3>
            <p className="text-xs text-zinc-400 font-mono">
              {activeStation.duration}
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-2 text-zinc-400 hover:text-white transition-colors"
              title="Previous stream"
            >
              <SkipBack className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsAudioPlaying(!isAudioPlaying)}
              className="w-12 h-12 rounded-2xl bg-violet-600 hover:bg-violet-500 text-white flex items-center justify-center shadow-lavender-glow transition-all"
            >
              {isAudioPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
            </button>

            <button
              onClick={handleNext}
              className="p-2 text-zinc-400 hover:text-white transition-colors"
              title="Next stream"
            >
              <SkipForward className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Embedded Iframe Player (Runs stream seamlessly) */}
        {isAudioPlaying && (
          <div className="pt-4 border-t border-white/[0.06]">
            <p className="text-[10px] text-zinc-400 mb-2">
              Stream actively playing in background:
            </p>
            <div className="w-full h-28 rounded-xl overflow-hidden border border-white/[0.08] bg-black">
              <iframe
                src={activeStation.embedSrc}
                title={activeStation.name}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>

      {/* Load Custom YouTube or Spotify Link */}
      <form onSubmit={handleLoadCustom} className="p-6 rounded-2xl bg-[#0c1022]/60 border border-[#c4b5fd]/[0.08] space-y-3">
        <div className="flex items-center gap-2 text-xs text-zinc-300 font-medium">
          <LinkIcon className="w-3.5 h-3.5 text-violet-300" />
          <span>Load Any YouTube Video or Spotify Album/Playlist URL</span>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Paste link (e.g. https://www.youtube.com/watch?v=... or Spotify link)..."
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            className="flex-1 bg-white/[0.04] border border-white/[0.1] rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-violet-400"
          />
          <button
            type="submit"
            className="px-5 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-xl text-xs font-semibold"
          >
            Load
          </button>
        </div>
      </form>

      {/* Curated Stations List */}
      <div className="space-y-4">
        <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
          Curated Soundtracks
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {audioStations.map((station) => {
            const isCurrent = station.id === activeStationId;
            return (
              <div
                key={station.id}
                onClick={() => {
                  setActiveStationId(station.id);
                  setIsAudioPlaying(true);
                }}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  isCurrent
                    ? 'bg-violet-500/15 border-violet-400 text-white shadow-sm'
                    : 'bg-[#0c1022]/40 border-white/[0.06] hover:border-white/[0.15] text-zinc-300'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] text-zinc-400 font-mono mb-1">
                  <span>{station.type.toUpperCase()}</span>
                  <span>{station.duration}</span>
                </div>
                <h5 className="font-serif text-base text-white">{station.name}</h5>
                <p className="text-xs text-zinc-400 mt-0.5">{station.genre}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
