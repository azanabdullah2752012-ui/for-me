import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  X, 
  Headphones, 
  Clock, 
  Radio,
  Plus,
  SkipForward,
  SkipBack,
  Trash2,
  Tv,
  ListMusic,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { SOUNDSCAPE_PRESETS } from '../../services/soundEngine';
import { CURATED_YOUTUBE_STREAMS } from '../../services/youtubeAudioService';
import { YouTubeIcon } from './YouTubeIcon';
import { SoundVisualizer } from './SoundVisualizer';

interface FocusAudioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type AudioTab = 'youtube' | 'ambient';

export const FocusAudioModal: React.FC<FocusAudioModalProps> = ({ isOpen, onClose }) => {
  const { 
    appTheme,
    audioSource,
    // Ambient Web Audio
    isAudioPlaying, 
    activeSoundscapeId, 
    audioVolume, 
    isAudioMuted, 
    playSoundscape, 
    stopSoundscape, 
    setAudioVolume, 
    toggleAudioMute,
    // YouTube Audio
    isYouTubePlaying,
    activeYouTubeItem,
    youtubeVolume,
    isYouTubeMuted,
    savedYouTubeItems,
    showYouTubePreview,
    setShowYouTubePreview,
    playYouTubeItem,
    toggleYouTubePlay,
    stopYouTube,
    nextYouTubeTrack,
    prevYouTubeTrack,
    setYouTubeVolume,
    toggleYouTubeMute,
    addYouTubeToLibrary,
    removeYouTubeFromLibrary,
  } = useData();

  const isLight = appTheme === 'light';
  const [activeTab, setActiveTab] = useState<AudioTab>(audioSource || 'youtube');

  // Input state for adding YouTube link
  const [inputUrl, setInputUrl] = useState('');
  const [inputTitle, setInputTitle] = useState('');
  const [inputError, setInputError] = useState<string | null>(null);
  const [inputSuccess, setInputSuccess] = useState<string | null>(null);

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
          stopYouTube();
          setTimerMinutes(null);
          return null;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timerMinutes, stopSoundscape, stopYouTube]);

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

  const handleAddYouTubeLink = (e: React.FormEvent) => {
    e.preventDefault();
    setInputError(null);
    setInputSuccess(null);

    if (!inputUrl.trim()) {
      setInputError('Please enter a YouTube video or playlist link.');
      return;
    }

    const res = addYouTubeToLibrary(inputUrl.trim(), inputTitle.trim() || undefined);
    if (!res.success || !res.item) {
      setInputError(res.error || 'Failed to parse YouTube link.');
      return;
    }

    // Play immediately and clear input
    playYouTubeItem(res.item);
    setInputUrl('');
    setInputTitle('');
    setInputSuccess(`Playing: ${res.item.title}`);
    setTimeout(() => setInputSuccess(null), 4000);
  };

  const currentPlayingTitle = 
    activeTab === 'youtube'
      ? (activeYouTubeItem ? activeYouTubeItem.title : 'No YouTube stream selected')
      : activePreset.title;

  const isCurrentAudioActive = 
    activeTab === 'youtube' ? isYouTubePlaying : isAudioPlaying;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 backdrop-blur-xl animate-fadeIn select-none ${
        isLight ? 'bg-black/45' : 'bg-black/85'
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="audio-modal-title"
    >
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div className={`relative z-10 w-full max-w-2xl border rounded-3xl shadow-[0_20px_70px_rgba(0,0,0,0.85)] flex flex-col max-h-[90vh] overflow-hidden ${
        isLight 
          ? 'bg-white/95 border-zinc-200 text-zinc-900 shadow-2xl' 
          : 'bg-[#0b0d1e] border-white/[0.12] text-white shadow-2xl'
      }`}>
        {/* Modal Header */}
        <div className={`flex items-center justify-between px-6 py-4 border-b shrink-0 ${
          isLight ? 'border-zinc-200 bg-zinc-50/80' : 'border-white/[0.08] bg-white/[0.02]'
        }`}>
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-2xl border flex items-center justify-center ${
              isLight 
                ? 'bg-rose-50 border-rose-200 text-red-600' 
                : 'bg-red-500/20 border-red-400/40 text-red-400'
            }`}>
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h2 id="audio-modal-title" className={`text-sm sm:text-base font-display font-semibold tracking-wide flex items-center gap-2 ${
                isLight ? 'text-zinc-900' : 'text-white'
              }`}>
                Focus Audio Sanctuary
                <span className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded-full border ${
                  activeTab === 'youtube'
                    ? isLight ? 'bg-red-50 text-red-700 border-red-200' : 'bg-red-500/15 text-red-300 border-red-500/30'
                    : isLight ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                }`}>
                  {activeTab === 'youtube' ? 'YouTube Online • Infinite Audio' : 'Web Audio • Offline'}
                </span>
              </h2>
              <p className={`text-xs font-sans mt-0.5 ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                {activeTab === 'youtube'
                  ? 'Paste any YouTube video or playlist link or choose curated study streams'
                  : 'Procedurally synthesized ambient soundscapes. Zero network required.'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors cursor-pointer border ${
              isLight 
                ? 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600 border-zinc-200' 
                : 'bg-white/[0.05] hover:bg-white/[0.12] text-zinc-400 hover:text-white border-white/[0.08]'
            }`}
            aria-label="Close sound sanctuary"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 2 Sanctuary Tabs: YouTube vs Ambient */}
        <div className={`flex items-center gap-2 px-6 pt-3 border-b shrink-0 ${
          isLight ? 'border-zinc-200 bg-zinc-50/50' : 'border-white/[0.06] bg-black/20'
        }`}>
          <button
            type="button"
            onClick={() => setActiveTab('youtube')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-display font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === 'youtube'
                ? isLight 
                  ? 'border-red-600 text-red-700' 
                  : 'border-red-500 text-white'
                : isLight 
                  ? 'border-transparent text-zinc-500 hover:text-zinc-900' 
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <YouTubeIcon className="w-4 h-4 text-red-500" />
            <span>YouTube Audio &amp; Playlists</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('ambient')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-display font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === 'ambient'
                ? isLight 
                  ? 'border-violet-600 text-violet-700' 
                  : 'border-violet-400 text-white'
                : isLight 
                  ? 'border-transparent text-zinc-500 hover:text-zinc-900' 
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Radio className="w-4 h-4 text-violet-500" />
            <span>Procedural Soundscapes (Offline)</span>
          </button>
        </div>

        {/* ═════════════════════════════════════════════════════════ */}
        {/* TAB 1: YOUTUBE STREAMS & PLAYLISTS                       */}
        {/* ═════════════════════════════════════════════════════════ */}
        {activeTab === 'youtube' && (
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5 animate-fadeIn">
            {/* Input Form to paste custom link */}
            <form onSubmit={handleAddYouTubeLink} className="space-y-2">
              <div className="flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold">
                <span className={isLight ? 'text-zinc-800' : 'text-zinc-300'}>
                  Play YouTube Link or Playlist
                </span>
                <span className={`text-[10px] font-sans font-normal ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                  Supports videos, live streams &amp; playlists
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="Paste YouTube link (e.g. https://www.youtube.com/watch?v=... or playlist?list=...)"
                  value={inputUrl}
                  onChange={(e) => {
                    setInputUrl(e.target.value);
                    if (inputError) setInputError(null);
                  }}
                  className={`flex-1 px-3.5 py-2.5 text-xs rounded-xl border focus:outline-none focus:ring-2 ${
                    isLight 
                      ? 'bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:ring-red-500/20 focus:border-red-500' 
                      : 'bg-white/[0.04] border-white/[0.1] text-white placeholder-zinc-500 focus:ring-red-400/30 focus:border-red-400'
                  }`}
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-display font-semibold flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer shrink-0"
                >
                  <Plus className="w-4 h-4" />
                  <span>Load &amp; Play</span>
                </button>
              </div>

              {/* Error / Success alert messages */}
              {inputError && (
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-sans">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{inputError}</span>
                </div>
              )}
              {inputSuccess && (
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-sans">
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <span>{inputSuccess}</span>
                </div>
              )}
            </form>

            {/* Currently Active YouTube Track Banner */}
            {activeYouTubeItem && (
              <div className={`p-4 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                isLight 
                  ? 'bg-red-50/70 border-red-200 text-zinc-900 shadow-sm' 
                  : 'bg-red-950/20 border-red-500/30 text-white'
              }`}>
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-12 h-12 rounded-xl overflow-hidden bg-black/40 shrink-0 border border-white/10 relative">
                    <img 
                      src={activeYouTubeItem.thumbnailUrl || CURATED_YOUTUBE_STREAMS[0].thumbnailUrl} 
                      alt="" 
                      className="w-full h-full object-cover"
                    />
                    {isYouTubePlaying && (
                      <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                      </div>
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-red-600 font-bold">
                        {activeYouTubeItem.type === 'playlist' ? 'PLAYLIST' : 'NOW STREAMING'}
                      </span>
                    </div>
                    <h3 className={`text-xs sm:text-sm font-display font-semibold truncate ${isLight ? 'text-zinc-900' : 'text-white'}`}>
                      {activeYouTubeItem.title}
                    </h3>
                    <p className={`text-[11px] font-sans truncate ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                      {activeYouTubeItem.channel || 'YouTube'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end">
                  {/* Playlist navigation buttons */}
                  {activeYouTubeItem.type === 'playlist' && (
                    <>
                      <button
                        type="button"
                        onClick={prevYouTubeTrack}
                        className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                          isLight ? 'bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700' : 'bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-white'
                        }`}
                        title="Previous Track in Playlist"
                      >
                        <SkipBack className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={nextYouTubeTrack}
                        className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                          isLight ? 'bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700' : 'bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-white'
                        }`}
                        title="Next Track in Playlist"
                      >
                        <SkipForward className="w-3.5 h-3.5" />
                      </button>
                    </>
                  )}

                  {/* Video preview popup toggle */}
                  <button
                    type="button"
                    onClick={() => setShowYouTubePreview(!showYouTubePreview)}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-sans flex items-center gap-1.5 transition-colors cursor-pointer ${
                      showYouTubePreview
                        ? 'bg-red-600 text-white border-red-600 font-medium'
                        : isLight 
                          ? 'bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700' 
                          : 'bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-zinc-300'
                    }`}
                    title="Toggle Floating Video Preview"
                  >
                    <Tv className="w-3.5 h-3.5" />
                    <span>{showYouTubePreview ? 'Hide Video' : 'View Video'}</span>
                  </button>
                </div>
              </div>
            )}

            {/* Curated Channels & Live Streams */}
            <div className="space-y-2.5">
              <div className={`flex items-center gap-2 text-xs font-display uppercase tracking-wider font-semibold ${
                isLight ? 'text-zinc-800' : 'text-zinc-300'
              }`}>
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Curated Focus &amp; Lo-Fi Streams</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {CURATED_YOUTUBE_STREAMS.map((item) => {
                  const isSelected = activeYouTubeItem?.id === item.id || (activeYouTubeItem?.videoId === item.videoId && item.videoId);
                  const isThisPlaying = isSelected && isYouTubePlaying;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        if (isThisPlaying) {
                          toggleYouTubePlay();
                        } else {
                          playYouTubeItem(item);
                        }
                      }}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isSelected
                          ? isLight 
                            ? 'bg-red-50 border-red-500 ring-2 ring-red-500/20 shadow-sm' 
                            : 'bg-red-500/15 border-red-400 shadow-[0_0_20px_rgba(239,68,68,0.2)]'
                          : isLight 
                            ? 'bg-zinc-50 hover:bg-zinc-100 border-zinc-200/90 text-zinc-900' 
                            : 'bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06]'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-9 h-9 rounded-xl overflow-hidden bg-black/40 shrink-0 border border-white/10">
                          <img 
                            src={item.thumbnailUrl} 
                            alt="" 
                            onError={(e) => {
                              (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=400&auto=format&fit=crop';
                            }}
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <div className="min-w-0">
                          <div className={`text-xs font-display font-semibold truncate ${
                            isSelected 
                              ? isLight ? 'text-red-950 font-bold' : 'text-white' 
                              : isLight ? 'text-zinc-900' : 'text-zinc-200'
                          }`}>
                            {item.title}
                          </div>
                          <div className={`text-[10px] font-sans truncate ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                            {item.channel}
                          </div>
                        </div>
                      </div>

                      <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${
                        isThisPlaying 
                          ? 'bg-red-600 text-white shadow-sm' 
                          : isLight ? 'bg-zinc-200 text-zinc-700' : 'bg-white/10 text-white'
                      }`}>
                        {isThisPlaying ? (
                          <Pause className="w-3.5 h-3.5 fill-current" />
                        ) : (
                          <Play className="w-3.5 h-3.5 ml-0.5 fill-current" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* User's Custom Saved Library */}
            {savedYouTubeItems.filter((i) => !i.isCurated).length > 0 && (
              <div className="space-y-2.5">
                <div className={`flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold ${
                  isLight ? 'text-zinc-800' : 'text-zinc-300'
                }`}>
                  <div className="flex items-center gap-2">
                    <ListMusic className="w-3.5 h-3.5 text-red-500" />
                    <span>My Saved YouTube Library</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {savedYouTubeItems.filter((i) => !i.isCurated).map((item) => {
                    const isSelected = activeYouTubeItem?.id === item.id;
                    const isThisPlaying = isSelected && isYouTubePlaying;

                    return (
                      <div
                        key={item.id}
                        className={`p-3 rounded-2xl border flex items-center justify-between gap-3 transition-all ${
                          isSelected
                            ? isLight 
                              ? 'bg-red-50 border-red-500 ring-2 ring-red-500/20' 
                              : 'bg-red-500/15 border-red-400'
                            : isLight 
                              ? 'bg-zinc-50 border-zinc-200' 
                              : 'bg-white/[0.03] border-white/[0.06]'
                        }`}
                      >
                        <div 
                          onClick={() => playYouTubeItem(item)}
                          className="flex items-center gap-3 min-w-0 flex-1 cursor-pointer"
                        >
                          <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                            item.type === 'playlist' ? 'bg-purple-600/20 text-purple-400' : 'bg-red-600/20 text-red-400'
                          }`}>
                            {item.type === 'playlist' ? <ListMusic className="w-4 h-4" /> : <YouTubeIcon className="w-4 h-4" />}
                          </div>
                          <div className="min-w-0">
                            <div className={`text-xs font-display font-semibold truncate ${
                              isLight ? 'text-zinc-900' : 'text-white'
                            }`}>
                              {item.title}
                            </div>
                            <div className={`text-[10px] font-sans truncate ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                              {item.type === 'playlist' ? 'Playlist' : 'Single Stream'} • {item.url}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            type="button"
                            onClick={() => {
                              if (isThisPlaying) toggleYouTubePlay();
                              else playYouTubeItem(item);
                            }}
                            className={`p-2 rounded-xl transition-colors cursor-pointer ${
                              isThisPlaying
                                ? 'bg-red-600 text-white'
                                : isLight ? 'bg-zinc-200 text-zinc-800 hover:bg-zinc-300' : 'bg-white/10 text-white hover:bg-white/20'
                            }`}
                          >
                            {isThisPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                          </button>
                          <button
                            type="button"
                            onClick={() => removeYouTubeFromLibrary(item.id)}
                            className={`p-2 rounded-xl transition-colors cursor-pointer ${
                              isLight ? 'text-zinc-400 hover:text-red-600' : 'text-zinc-500 hover:text-red-400'
                            }`}
                            title="Remove from library"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ═════════════════════════════════════════════════════════ */}
        {/* TAB 2: PROCEDURAL SOUNDSCAPES (OFFLINE WEB AUDIO)        */}
        {/* ═════════════════════════════════════════════════════════ */}
        {activeTab === 'ambient' && (
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4 animate-fadeIn">
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
                        ? isLight 
                          ? 'bg-violet-50 border-violet-500 ring-2 ring-violet-500/20 shadow-sm' 
                          : 'bg-violet-950/35 border-violet-500/50 shadow-[0_0_25px_rgba(168,85,247,0.18)]'
                        : isLight 
                          ? 'bg-zinc-50 hover:bg-zinc-100 border-zinc-200/90 text-zinc-900' 
                          : 'bg-white/[0.025] hover:bg-white/[0.05] border-white/[0.08] hover:border-white/[0.18]'
                    }`}
                  >
                    <div>
                      {/* Top row: Category tag & play badge */}
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md border ${
                          isLight ? 'bg-zinc-200/60 text-zinc-700 border-zinc-300' : 'text-zinc-400 bg-white/[0.05] border-white/[0.06]'
                        }`}>
                          {preset.category}
                        </span>

                        <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                          isThisPlaying
                            ? 'bg-violet-600 text-white shadow-[0_0_12px_rgba(168,85,247,0.6)]'
                            : isLight ? 'bg-zinc-200 text-zinc-700 group-hover:bg-zinc-300' : 'bg-white/[0.06] text-zinc-300 group-hover:bg-white/[0.15] group-hover:text-white'
                        }`}>
                          {isThisPlaying ? (
                            <Pause className="w-3.5 h-3.5 fill-current" />
                          ) : (
                            <Play className="w-3.5 h-3.5 ml-0.5 fill-current" />
                          )}
                        </div>
                      </div>

                      <h3 className={`text-sm font-display font-semibold tracking-wide transition-colors ${
                        isLight ? 'text-zinc-900' : 'text-white'
                      }`}>
                        {preset.title}
                      </h3>
                      <p className={`text-xs font-sans mt-1 leading-snug line-clamp-2 ${
                        isLight ? 'text-zinc-600' : 'text-zinc-400'
                      }`}>
                        {preset.tagline}
                      </p>
                    </div>

                    {/* Bottom telemetry */}
                    <div className={`mt-3 pt-2.5 border-t flex items-center justify-between text-[10px] font-mono ${
                      isLight ? 'border-zinc-200 text-zinc-500' : 'border-white/[0.06] text-zinc-400'
                    }`}>
                      <span className="truncate pr-2">{preset.frequency}</span>
                      {isThisPlaying && (
                        <span className="flex items-center gap-1 text-emerald-500 font-semibold shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                          PLAYING
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Sleep / Focus Session Timer */}
        <div className={`px-5 py-3 border-t flex flex-wrap items-center justify-between gap-3 shrink-0 ${
          isLight ? 'border-zinc-200 bg-zinc-50/60' : 'border-white/[0.06] bg-white/[0.01]'
        }`}>
          <div className="flex items-center gap-2">
            <Clock className={`w-4 h-4 ${isLight ? 'text-zinc-600' : 'text-violet-400'}`} />
            <span className={`text-xs font-display font-medium ${isLight ? 'text-zinc-800' : 'text-zinc-300'}`}>
              Auto-Stop Timer:
            </span>
            {remainingSeconds !== null && (
              <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md border ${
                isLight ? 'bg-amber-100 text-amber-900 border-amber-300' : 'text-amber-300 bg-amber-500/15 border-amber-500/30'
              }`}>
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
                    ? isLight ? 'bg-zinc-900 text-white font-bold shadow-sm' : 'bg-violet-600 text-white font-bold shadow-sm'
                    : isLight 
                      ? 'bg-zinc-200/80 text-zinc-700 hover:bg-zinc-300' 
                      : 'bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Master Audio Controller Bottom Bar */}
        <div className={`p-4 sm:p-5 border-t flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0 ${
          isLight ? 'border-zinc-200 bg-zinc-100/90' : 'border-white/[0.08] bg-[#070914]/90 backdrop-blur-xl'
        }`}>
          {/* Active Audio Badge & Visualizer */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${
              activeTab === 'youtube'
                ? isLight ? 'bg-red-50 border-red-200 text-red-600' : 'bg-red-500/20 border-red-400/40 text-red-300'
                : isLight ? 'bg-violet-50 border-violet-200 text-violet-700' : 'bg-violet-600/30 border-violet-400/40 text-violet-200'
            }`}>
              {activeTab === 'youtube' ? (
                <YouTubeIcon className={`w-5 h-5 ${isYouTubePlaying ? 'animate-pulse text-red-500' : 'text-zinc-400'}`} />
              ) : (
                <Radio className={`w-5 h-5 ${isAudioPlaying ? 'text-violet-500 animate-pulse' : 'text-zinc-400'}`} />
              )}
            </div>

            <div className="min-w-0 flex-1">
              <p className={`text-xs font-display font-medium truncate ${isLight ? 'text-zinc-900' : 'text-white'}`}>
                {currentPlayingTitle}
              </p>
              <div className="flex items-center gap-2 mt-0.5">
                <SoundVisualizer 
                  isPlaying={isCurrentAudioActive} 
                  color={activeTab === 'youtube' ? '#ef4444' : isLight ? '#7c3aed' : activePreset.accentColor} 
                  className="w-16 h-4" 
                />
                <span className={`text-[10px] font-mono ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                  {isCurrentAudioActive 
                    ? activeTab === 'youtube' ? 'Streaming YouTube...' : 'Synthesizing...' 
                    : 'Audio Paused'}
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
                onClick={activeTab === 'youtube' ? toggleYouTubeMute : toggleAudioMute}
                className={`transition-colors cursor-pointer ${isLight ? 'text-zinc-600 hover:text-black' : 'text-zinc-400 hover:text-white'}`}
                title="Toggle Mute"
              >
                {(activeTab === 'youtube' ? isYouTubeMuted : isAudioMuted) ? (
                  <VolumeX className="w-4 h-4 text-red-500" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max={activeTab === 'youtube' ? 100 : 1}
                step={activeTab === 'youtube' ? 1 : 0.01}
                value={
                  activeTab === 'youtube'
                    ? (isYouTubeMuted ? 0 : youtubeVolume)
                    : (isAudioMuted ? 0 : audioVolume)
                }
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  if (activeTab === 'youtube') setYouTubeVolume(val);
                  else setAudioVolume(val);
                }}
                className="w-20 sm:w-24 h-1.5 bg-zinc-300 rounded-lg appearance-none cursor-pointer accent-red-600"
                aria-label="Volume slider"
              />
              <span className={`text-[10px] font-mono w-8 tabular-nums ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                {activeTab === 'youtube'
                  ? `${isYouTubeMuted ? 0 : Math.round(youtubeVolume)}%`
                  : `${isAudioMuted ? 0 : Math.round(audioVolume * 100)}%`}
              </span>
            </div>

            {/* Big Action Button */}
            <button
              type="button"
              onClick={() => {
                if (activeTab === 'youtube') {
                  toggleYouTubePlay();
                } else {
                  if (isAudioPlaying) stopSoundscape();
                  else playSoundscape(activeSoundscapeId);
                }
              }}
              className={`px-5 py-2.5 rounded-xl text-white text-xs font-display font-semibold tracking-wider uppercase flex items-center gap-2 shadow-md transition-all cursor-pointer ${
                activeTab === 'youtube'
                  ? 'bg-red-600 hover:bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.35)]'
                  : 'bg-violet-600 hover:bg-violet-500 shadow-[0_0_20px_rgba(147,51,234,0.35)]'
              }`}
            >
              {isCurrentAudioActive ? (
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
