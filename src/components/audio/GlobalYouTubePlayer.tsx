import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useData } from '../../context/DataContext';
import { 
  ExternalLink, 
  AlertCircle, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  Maximize2, 
  Minimize2, 
  SkipForward, 
  SkipBack,
  X,
  Headphones
} from 'lucide-react';
import { YouTubeItem } from '../../services/youtubeAudioService';
import { mediaSessionService } from '../../services/mediaSessionService';

declare global {
  interface Window {
    __forMeSendYouTubeCommand?: (command: string, args?: any) => void;
    __forMeForceUnmute?: () => void;
  }
}

export const GlobalYouTubePlayer: React.FC = () => {
  const { 
    activeYouTubeItem, 
    isYouTubePlaying, 
    youtubeVolume, 
    isYouTubeMuted, 
    setYouTubeIsPlaying,
    setYouTubePlayerReady,
    showYouTubePreview,
    setShowYouTubePreview,
    toggleYouTubePlay,
    nextYouTubeTrack,
    prevYouTubeTrack,
    toggleYouTubeMute,
    setYouTubeVolume,
    audioSource,
  } = useData();

  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [embedError, setEmbedError] = useState<string | null>(null);
  
  // Track previous item to detect actual user track changes (NOT on mount)
  const prevItemIdRef = useRef<string | null>(activeYouTubeItem?.id || null);
  const prevSrcRef = useRef<string | null>(null);

  // Audio-only mode hides the video frame while keeping audio playing
  const [isAudioOnly, setIsAudioOnly] = useState<boolean>(false);

  // Guards against echo feedback loops between YouTube onStateChange and local state
  const isIncomingStateChangeRef = useRef<boolean>(false);

  // Clean postMessage sender
  const sendCommand = useCallback((func: string, args: any = '') => {
    try {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func, args }),
          '*'
        );
      }
    } catch (e) {
      console.warn('[YouTube Audio] Command error:', e);
    }
  }, []);

  // Compute embed URL with proper playlist support and origin parameter
  // CRITICAL: autoplay is false unless explicitly called during active playback
  const buildEmbedUrl = useCallback((item: YouTubeItem | null, autoplay: boolean) => {
    const auto = autoplay ? '1' : '0';
    const originParam = typeof window !== 'undefined' && window.location.origin
      ? `&origin=${encodeURIComponent(window.location.origin)}`
      : '';

    if (!item) {
      return `https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=${auto}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${originParam}`;
    }

    // Playlists without specific video ID: use official /embed/videoseries?list=
    if (item.type === 'playlist' && item.playlistId) {
      return `https://www.youtube.com/embed/videoseries?list=${encodeURIComponent(item.playlistId)}&autoplay=${auto}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${originParam}`;
    }

    // Specific video inside a playlist
    if (item.type === 'video_in_playlist' && item.videoId && item.playlistId) {
      return `https://www.youtube.com/embed/${encodeURIComponent(item.videoId)}?list=${encodeURIComponent(item.playlistId)}&autoplay=${auto}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${originParam}`;
    }

    // Single video or live stream
    const vid = item.videoId || 'jfKfPfyJRdk';
    return `https://www.youtube.com/embed/${encodeURIComponent(vid)}?autoplay=${auto}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${originParam}`;
  }, []);

  // Initial src: NEVER autoplay on page load
  const [currentSrc, setCurrentSrc] = useState<string>(() => {
    return buildEmbedUrl(activeYouTubeItem, false);
  });

  // Direct user-gesture unmute booster
  const forceUnmute = useCallback(() => {
    sendCommand('unMute', '');
    sendCommand('setVolume', [youtubeVolume || 75]);
    if (isYouTubeMuted) {
      toggleYouTubeMute();
    }
  }, [sendCommand, youtubeVolume, isYouTubeMuted, toggleYouTubeMute]);

  // Expose command sender globally for DataContext controls
  useEffect(() => {
    window.__forMeSendYouTubeCommand = sendCommand;
    window.__forMeForceUnmute = forceUnmute;
    setYouTubePlayerReady(true);
    return () => {
      delete window.__forMeSendYouTubeCommand;
      delete window.__forMeForceUnmute;
    };
  }, [sendCommand, forceUnmute, setYouTubePlayerReady]);

  // When active item actually changes to a different track (not on mount)
  useEffect(() => {
    if (!activeYouTubeItem) return;

    if (prevItemIdRef.current === activeYouTubeItem.id) {
      return;
    }

    prevItemIdRef.current = activeYouTubeItem.id;
    setEmbedError(null);

    // Only set autoplay=true if the user was already actively playing music
    const newSrc = buildEmbedUrl(activeYouTubeItem, isYouTubePlaying);
    prevSrcRef.current = newSrc;
    setCurrentSrc(newSrc);

    // Register Media Session metadata with explicit play/pause actions
    mediaSessionService.updateMetadata({
      title: activeYouTubeItem.title,
      artist: activeYouTubeItem.channel || 'FOR ME Sanctuary',
      album: activeYouTubeItem.type === 'playlist' ? 'YouTube Playlist' : 'YouTube Stream',
      artworkUrl: activeYouTubeItem.thumbnailUrl,
      onPlay: () => {
        setYouTubeIsPlaying(true);
        sendCommand('playVideo', '');
        forceUnmute();
      },
      onPause: () => {
        setYouTubeIsPlaying(false);
        sendCommand('pauseVideo', '');
      },
      onNext: (activeYouTubeItem.type === 'playlist' || activeYouTubeItem.type === 'video_in_playlist') ? nextYouTubeTrack : undefined,
      onPrev: (activeYouTubeItem.type === 'playlist' || activeYouTubeItem.type === 'video_in_playlist') ? prevYouTubeTrack : undefined,
    });
  }, [activeYouTubeItem, buildEmbedUrl, isYouTubePlaying, nextYouTubeTrack, prevYouTubeTrack, sendCommand, setYouTubeIsPlaying, forceUnmute]);

  // Handle Play/Pause state changes — ONLY fires on user/app-level state changes
  useEffect(() => {
    if (isIncomingStateChangeRef.current) {
      isIncomingStateChangeRef.current = false;
      return;
    }

    if (isYouTubePlaying) {
      sendCommand('playVideo', '');
      // When user starts playing, immediately request unmute & restore volume
      setTimeout(() => {
        sendCommand('unMute', '');
        sendCommand('setVolume', [youtubeVolume || 75]);
      }, 50);
      mediaSessionService.setPlaybackState('playing');
    } else {
      sendCommand('pauseVideo', '');
      mediaSessionService.setPlaybackState('paused');
    }
  }, [isYouTubePlaying, sendCommand, youtubeVolume]);

  // Sync Volume
  useEffect(() => {
    sendCommand('setVolume', [youtubeVolume || 75]);
  }, [youtubeVolume, sendCommand]);

  // Sync Mute
  useEffect(() => {
    if (isYouTubeMuted) {
      sendCommand('mute', '');
    } else {
      sendCommand('unMute', '');
      sendCommand('setVolume', [youtubeVolume || 75]);
    }
  }, [isYouTubeMuted, youtubeVolume, sendCommand]);

  // Status listener for YouTube Iframe events
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (!event.data || typeof event.data !== 'string') return;
      try {
        const payload = JSON.parse(event.data);

        // State changes: -1=unstarted, 0=ended, 1=playing, 2=paused, 3=buffering, 5=cued
        if (payload.event === 'onStateChange') {
          if (payload.info === 1) {
            // Video is actively playing
            isIncomingStateChangeRef.current = true;
            setYouTubeIsPlaying(true);
            setEmbedError(null);
            mediaSessionService.setPlaybackState('playing');

            // Ensure sound is audible and unmuted
            if (!isYouTubeMuted) {
              sendCommand('unMute', '');
              sendCommand('setVolume', [youtubeVolume || 75]);
            }
          } else if (payload.info === 2) {
            // Video paused. Update UI state without triggering destructive pause echo
            if (!document.hidden) {
              isIncomingStateChangeRef.current = true;
              setYouTubeIsPlaying(false);
              mediaSessionService.setPlaybackState('paused');
            }
          } else if (payload.info === 0) {
            // Track ended: if playing a playlist, allow natural transition to next track
            const isPlaylist = activeYouTubeItem?.type === 'playlist' || activeYouTubeItem?.type === 'video_in_playlist';
            if (!isPlaylist) {
              isIncomingStateChangeRef.current = true;
              setYouTubeIsPlaying(false);
              mediaSessionService.setPlaybackState('none');
            } else {
              mediaSessionService.setPlaybackState('playing');
            }
          }
        } else if (payload.event === 'infoDelivery' && payload.info) {
          // If YouTube reports muted=true but user desires unmuted audio, unmute!
          if (typeof payload.info.muted === 'boolean' && payload.info.muted && !isYouTubeMuted && isYouTubePlaying) {
            sendCommand('unMute', '');
            sendCommand('setVolume', [youtubeVolume || 75]);
          }
        } else if (payload.event === 'onError') {
          console.warn('[YouTube Audio Player Error]', payload.info);
          if (payload.info === 101 || payload.info === 150) {
            setEmbedError('The owner of this video restricts playback outside of YouTube.');
          }
        }
      } catch {}
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [setYouTubeIsPlaying, isYouTubeMuted, youtubeVolume, sendCommand, activeYouTubeItem, isYouTubePlaying]);

  // ONLY render if the user is playing YouTube OR has opened preview
  // If nothing is playing, the player remains completely off-screen and silent!
  const isPlayerActive = (audioSource === 'youtube' && isYouTubePlaying) || showYouTubePreview;

  const isPlaylist = activeYouTubeItem?.type === 'playlist' || activeYouTubeItem?.type === 'video_in_playlist';

  return (
    <>
      {/* 
        Persistent Viewport-Anchored YouTube Player:
        - When preview is expanded (showYouTubePreview === true):
          Full 380px x 285px card with controls, volume bar, and external links.
        - When preview is compact (showYouTubePreview === false && !isAudioOnly):
          Discreet 240px x 145px Mini-Player card.
        - When audio-only (isAudioOnly === true):
          Shrunk to a 2px invisible anchor at the bottom-right so audio keeps streaming
          without any video obstructing the wallpaper.
        - When not active (!isPlayerActive):
          Off-screen 1px x 1px silent standby.
      */}
      <div 
        role="region"
        aria-label="YouTube Audio Player"
        style={{
          position: 'fixed',
          bottom: !isPlayerActive || isAudioOnly ? '0px' : (showYouTubePreview ? '84px' : '16px'),
          right: !isPlayerActive || isAudioOnly ? '0px' : (showYouTubePreview ? '24px' : '16px'),
          width: !isPlayerActive || isAudioOnly ? '2px' : (showYouTubePreview ? '380px' : '250px'),
          height: !isPlayerActive || isAudioOnly ? '2px' : (showYouTubePreview ? '285px' : '150px'),
          zIndex: !isPlayerActive || isAudioOnly ? -1 : (showYouTubePreview ? 50 : 30),
          opacity: !isPlayerActive || isAudioOnly ? 0.01 : 1,
          pointerEvents: !isPlayerActive || isAudioOnly ? 'none' : 'auto',
          borderRadius: '1.25rem',
          overflow: 'hidden',
          boxShadow: showYouTubePreview 
            ? '0 30px 70px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.18)' 
            : '0 15px 35px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.12)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="backdrop-blur-2xl bg-[#090b14]/95 flex flex-col border border-white/15"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-3 py-1.5 border-b border-white/10 bg-black/60 shrink-0 select-none">
          <div className="flex items-center gap-2 min-w-0">
            <span className={`w-2 h-2 rounded-full shrink-0 ${isYouTubePlaying ? 'bg-red-500 animate-pulse' : 'bg-zinc-500'}`} />
            <span className="text-white text-xs font-display font-semibold truncate max-w-[110px] sm:max-w-[160px]" title={activeYouTubeItem?.title}>
              {activeYouTubeItem?.title || 'YouTube Audio'}
            </span>
          </div>
          
          <div className="flex items-center gap-1 shrink-0">
            {/* Quick Unmute Booster */}
            <button
              type="button"
              onClick={forceUnmute}
              className={`px-1.5 py-0.5 rounded-md text-[10px] font-sans font-bold flex items-center gap-1 transition-colors cursor-pointer ${
                isYouTubeMuted 
                  ? 'bg-amber-500 text-black hover:bg-amber-400 animate-pulse' 
                  : 'bg-emerald-600/80 text-white hover:bg-emerald-500'
              }`}
              title="Force Unmute & Restore Volume"
            >
              {isYouTubeMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
              <span className="hidden sm:inline">{isYouTubeMuted ? 'UNMUTE' : `${youtubeVolume}%`}</span>
            </button>

            {/* Audio Only (Hide Video Box) */}
            <button
              type="button"
              onClick={() => setIsAudioOnly(true)}
              className="p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white text-[10px] transition-colors cursor-pointer"
              title="Audio Only (Hide Video Frame)"
            >
              <Headphones className="w-3 h-3" />
            </button>

            {/* Expand / Minimize Video Preview */}
            <button
              type="button"
              onClick={() => setShowYouTubePreview(!showYouTubePreview)}
              className="p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white text-[10px] transition-colors cursor-pointer"
              title={showYouTubePreview ? 'Collapse to Mini Player' : 'Expand Video Preview'}
            >
              {showYouTubePreview ? <Minimize2 className="w-3 h-3" /> : <Maximize2 className="w-3 h-3" />}
            </button>

            {/* Stop & Close Player */}
            <button
              type="button"
              onClick={() => {
                setYouTubeIsPlaying(false);
                setShowYouTubePreview(false);
                sendCommand('pauseVideo', '');
              }}
              className="p-1 rounded-md bg-white/10 hover:bg-red-500/80 text-zinc-300 hover:text-white text-[10px] transition-colors cursor-pointer"
              title="Stop playback & close"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Embedded error banner if restricted */}
        {embedError && (
          <div className="absolute inset-0 z-30 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 text-center space-y-2 pointer-events-auto">
            <AlertCircle className="w-6 h-6 text-amber-400" />
            <p className="text-xs text-white/95 font-sans leading-relaxed max-w-xs">{embedError}</p>
            {activeYouTubeItem?.url && (
              <a
                href={activeYouTubeItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-semibold transition-colors shadow-md"
              >
                <ExternalLink className="w-3 h-3" />
                <span>Open in YouTube</span>
              </a>
            )}
          </div>
        )}

        {/* 16:9 Video Canvas Frame */}
        <div className="flex-1 w-full bg-black relative min-h-0">
          <iframe
            ref={iframeRef}
            id="global-youtube-audio-iframe"
            title="FOR ME Sanctuary Audio Stream"
            src={currentSrc}
            className="w-full h-full border-0 absolute inset-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Bottom Control Bar */}
        <div className="flex items-center justify-between px-3 py-1.5 border-t border-white/10 bg-black/60 shrink-0 text-xs">
          {/* Playlist Controls or Volume presets */}
          {showYouTubePreview ? (
            <div className="flex items-center gap-1">
              <span className="text-[10px] font-sans text-zinc-400 mr-1">Vol:</span>
              {[25, 50, 75, 100].map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => {
                    setYouTubeVolume(v);
                    sendCommand('setVolume', [v]);
                    forceUnmute();
                  }}
                  className={`px-1.5 py-0.5 rounded text-[10px] font-mono transition-colors cursor-pointer ${
                    youtubeVolume === v 
                      ? 'bg-red-600 text-white font-bold' 
                      : 'bg-white/10 text-zinc-300 hover:bg-white/20'
                  }`}
                >
                  {v}%
                </button>
              ))}
            </div>
          ) : (
            <div className="flex items-center gap-1">
              {isPlaylist && (
                <>
                  <button
                    type="button"
                    onClick={prevYouTubeTrack}
                    className="p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                    title="Previous track in playlist"
                  >
                    <SkipBack className="w-3 h-3" />
                  </button>
                  <button
                    type="button"
                    onClick={nextYouTubeTrack}
                    className="p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                    title="Next track in playlist"
                  >
                    <SkipForward className="w-3 h-3" />
                  </button>
                </>
              )}
              <span className="text-[10px] font-mono text-zinc-400">
                {isYouTubeMuted ? 'Muted' : `${youtubeVolume}%`}
              </span>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex items-center gap-1.5">
            {showYouTubePreview && isPlaylist && (
              <>
                <button
                  type="button"
                  onClick={prevYouTubeTrack}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-zinc-200 hover:text-white transition-colors cursor-pointer"
                  title="Previous track"
                >
                  <SkipBack className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={nextYouTubeTrack}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-zinc-200 hover:text-white transition-colors cursor-pointer"
                  title="Next track"
                >
                  <SkipForward className="w-3.5 h-3.5" />
                </button>
              </>
            )}

            <button
              type="button"
              onClick={() => {
                toggleYouTubePlay();
                forceUnmute();
              }}
              className={`px-3 py-1 rounded-lg text-white text-[11px] font-display font-semibold flex items-center gap-1 shadow-sm transition-all cursor-pointer ${
                isYouTubePlaying ? 'bg-red-600 hover:bg-red-500' : 'bg-emerald-600 hover:bg-emerald-500'
              }`}
            >
              {isYouTubePlaying ? (
                <>
                  <Pause className="w-3 h-3 fill-current" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                  <span>Play</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Floating Audio-Only Restoration Pill (appears when user hid video frame but music is playing) */}
      {isPlayerActive && isAudioOnly && (
        <button
          type="button"
          onClick={() => setIsAudioOnly(false)}
          className="fixed bottom-4 right-4 z-40 px-3 py-1.5 rounded-xl cosmic-dock text-xs flex items-center gap-2 border border-white/15 text-white hover:border-violet-400/50 shadow-xl cursor-pointer transition-all animate-fadeIn"
          title="Restore Video Frame"
        >
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="font-display text-[11px] font-medium">Show Video</span>
          <Maximize2 className="w-3 h-3 text-zinc-400" />
        </button>
      )}
    </>
  );
};
