import React, { useState } from 'react';
import { Headphones, Play, Pause, SkipBack, SkipForward, Volume2, Link as LinkIcon, Radio } from 'lucide-react';
import { useData } from '../../context/DataContext';

export const FocusAudioCard: React.FC = () => {
  const {
    audioStations,
    activeStationId,
    setActiveStationId,
    isAudioPlaying,
    setIsAudioPlaying,
    customAudioUrl,
    setCustomAudioUrl,
    loadCustomAudioUrl,
    setActiveTab,
  } = useData();

  const [showUrlInput, setShowUrlInput] = useState(false);
  const [volume, setVolume] = useState(80);

  const activeStation = audioStations.find((s) => s.id === activeStationId) || audioStations[0];
  const currentIndex = audioStations.findIndex((s) => s.id === activeStationId);

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % audioStations.length;
    setActiveStationId(audioStations[nextIdx].id);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + audioStations.length) % audioStations.length;
    setActiveStationId(audioStations[prevIdx].id);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customAudioUrl.trim()) {
      loadCustomAudioUrl(customAudioUrl);
      setShowUrlInput(false);
    }
  };

  return (
    <div className="bg-[#0f1118]/80 backdrop-blur-md rounded-2xl border border-white/[0.07] p-5 flex flex-col justify-between hover:border-white/[0.12] transition-all duration-200 relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Headphones className="w-4 h-4 text-orange-400" />
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
            Focus Audio
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowUrlInput(!showUrlInput)}
            className="text-zinc-400 hover:text-white transition-colors"
            title="Paste YouTube / Spotify URL"
          >
            <LinkIcon className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setActiveTab('music')}
            className="text-[11px] text-zinc-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
          >
            View All →
          </button>
        </div>
      </div>

      {/* Custom URL Input modal/bar */}
      {showUrlInput && (
        <form onSubmit={handleCustomSubmit} className="mb-3 p-2 bg-white/[0.04] rounded-xl border border-white/[0.08] flex gap-2">
          <input
            type="text"
            placeholder="Paste YouTube or Spotify URL..."
            value={customAudioUrl}
            onChange={(e) => setCustomAudioUrl(e.target.value)}
            className="flex-1 bg-transparent text-xs text-white placeholder-zinc-500 focus:outline-none"
            autoFocus
          />
          <button
            type="submit"
            className="px-2.5 py-1 bg-orange-500 text-white rounded-lg text-xs hover:bg-orange-600 transition-colors"
          >
            Load
          </button>
        </form>
      )}

      {/* Main Content: Player on Left, Station List on Right */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
        {/* Left: Player Banner & Controls (7 cols) */}
        <div className="sm:col-span-7 space-y-3">
          {/* Artwork & Track details */}
          <div className="relative rounded-xl overflow-hidden h-24 border border-white/[0.08] bg-[#151722] flex items-center p-3 group">
            {/* Cosmic artwork backdrop */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-950/40 via-purple-950/40 to-black/80" />
            
            {/* Orbit / Galaxy mini graphic */}
            <div className="relative z-10 w-16 h-16 rounded-lg overflow-hidden border border-white/[0.1] bg-black/50 flex-shrink-0 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full border border-amber-500/40 flex items-center justify-center">
                <Radio className={`w-5 h-5 text-orange-400 ${isAudioPlaying ? 'animate-pulse' : ''}`} />
              </div>
            </div>

            <div className="relative z-10 ml-3 flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 px-1.5 py-0.5 rounded">
                  {activeStation.type.toUpperCase()}
                </span>
                <span className="text-[11px] text-zinc-400 truncate">
                  {activeStation.genre}
                </span>
              </div>
              <h4 className="text-sm font-semibold text-white truncate mt-0.5">
                {activeStation.name}
              </h4>
              <p className="text-[10px] text-zinc-400 font-sans">
                {activeStation.duration}
              </p>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-1 text-zinc-400 hover:text-white transition-colors"
                title="Previous Station"
              >
                <SkipBack className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsAudioPlaying(!isAudioPlaying)}
                className="w-8 h-8 rounded-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center transition-all shadow-amber-glow"
                title={isAudioPlaying ? 'Pause Stream' : 'Play Stream'}
              >
                {isAudioPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
              </button>

              <button
                onClick={handleNext}
                className="p-1 text-zinc-400 hover:text-white transition-colors"
                title="Next Station"
              >
                <SkipForward className="w-4 h-4" />
              </button>
            </div>

            {/* Volume slider */}
            <div className="flex items-center gap-1.5">
              <Volume2 className="w-3.5 h-3.5 text-zinc-400" />
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-16 h-1 bg-white/[0.1] rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
            </div>
          </div>
        </div>

        {/* Right: Station Radio List (5 cols) */}
        <div className="sm:col-span-5 space-y-1.5 max-h-36 overflow-y-auto pr-1">
          {audioStations.slice(0, 5).map((station) => {
            const isCurrent = station.id === activeStationId;
            return (
              <button
                key={station.id}
                onClick={() => {
                  setActiveStationId(station.id);
                  setIsAudioPlaying(true);
                }}
                className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left text-xs transition-colors ${
                  isCurrent
                    ? 'bg-orange-500/15 text-orange-300 border border-orange-500/30'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.03]'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full border ${
                    isCurrent
                      ? 'bg-orange-500 border-orange-500 shadow-[0_0_6px_rgba(249,115,22,0.8)]'
                      : 'border-zinc-500'
                  }`}
                />
                <span className="truncate flex-1 font-sans font-medium">
                  {station.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Embedded Real Player (Visible when playing, hidden offscreen/compact) */}
      {isAudioPlaying && activeStation && (
        <div className="mt-3 pt-3 border-t border-white/[0.06] rounded-xl overflow-hidden bg-black/60">
          <div className="text-[10px] text-zinc-400 px-2 pb-1.5 flex items-center justify-between">
            <span>Live Stream Playback Active</span>
            <button
              onClick={() => setIsAudioPlaying(false)}
              className="text-orange-400 hover:underline"
            >
              Stop
            </button>
          </div>
          <div className="w-full h-24 rounded-lg overflow-hidden border border-white/[0.08]">
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
  );
};
