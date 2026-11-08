import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useData } from '../../context/DataContext';
import { ExternalLink, AlertCircle, Volume2, Play, Pause } from 'lucide-react';
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
  } = useData();

  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [currentSrc, setCurrentSrc] = useState<string>(() => {
    return 'https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1';
  });
  const [embedError, setEmbedError] = useState<string | null>(null);
  const prevItemIdRef = useRef<string | null>(null);

  // Clean, deterministic postMessage sender (no loops, no spamming)
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

  // Direct user-gesture unmute
  const forceUnmute = useCallback(() => {
    sendCommand('unMute', '');
    sendCommand('setVolume', [youtubeVolume || 100]);
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

  // Compute embed URL with controls=1 and enablejsapi=1
  const buildEmbedUrl = (item: YouTubeItem | null, autoplay: boolean) => {
    const auto = autoplay ? '1' : '0';
    if (!item) {
      return `https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=${auto}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1`;
    }

    if (item.type === 'playlist' && item.playlistId) {
      return `https://www.youtube.com/embed?listType=playlist&list=${encodeURIComponent(item.playlistId)}&autoplay=${auto}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1`;
    }

    if (item.type === 'video_in_playlist' && item.videoId && item.playlistId) {
      return `https://www.youtube.com/embed/${encodeURIComponent(item.videoId)}?list=${encodeURIComponent(item.playlistId)}&autoplay=${auto}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1`;
    }

    const vid = item.videoId || 'jfKfPfyJRdk';
    return `https://www.youtube.com/embed/${encodeURIComponent(vid)}?autoplay=${auto}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1`;
  };

  // When active item changes: update iframe src ONCE
  useEffect(() => {
    if (!activeYouTubeItem) return;

    setEmbedError(null);
    const newSrc = buildEmbedUrl(activeYouTubeItem, true);

    if (activeYouTubeItem.id !== prevItemIdRef.current || currentSrc !== newSrc) {
      prevItemIdRef.current = activeYouTubeItem.id;
      setCurrentSrc(newSrc);
      setYouTubeIsPlaying(true);
    }

    // Register Media Session metadata
    mediaSessionService.updateMetadata({
      title: activeYouTubeItem.title,
      artist: activeYouTubeItem.channel || 'FOR ME Sanctuary',
      album: activeYouTubeItem.type === 'playlist' ? 'YouTube Playlist' : 'YouTube Stream',
      artworkUrl: activeYouTubeItem.thumbnailUrl,
      onPlay: toggleYouTubePlay,
      onPause: toggleYouTubePlay,
      onNext: activeYouTubeItem.type === 'playlist' ? nextYouTubeTrack : undefined,
      onPrev: activeYouTubeItem.type === 'playlist' ? prevYouTubeTrack : undefined,
    });
  }, [activeYouTubeItem]);

  // Handle Play/Pause changes (fires strictly on user state toggle)
  useEffect(() => {
    if (isYouTubePlaying) {
      sendCommand('playVideo', '');
      mediaSessionService.setPlaybackState('playing');
    } else {
      sendCommand('pauseVideo', '');
      mediaSessionService.setPlaybackState('paused');
    }
  }, [isYouTubePlaying, sendCommand]);

  // Sync Volume
  useEffect(() => {
    sendCommand('setVolume', [youtubeVolume]);
  }, [youtubeVolume, sendCommand]);

  // Sync Mute
  useEffect(() => {
    if (isYouTubeMuted) {
      sendCommand('mute', '');
    } else {
      sendCommand('unMute', '');
      sendCommand('setVolume', [youtubeVolume]);
    }
  }, [isYouTubeMuted, youtubeVolume, sendCommand]);

  // Passive status listener (DOES NOT call state mutators or dispatch commands)
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (!event.data || typeof event.data !== 'string') return;
      try {
        const payload = JSON.parse(event.data);
        if (payload.event === 'onStateChange') {
          // 1: playing, 2: paused, 0: ended
          if (payload.info === 1) {
            setYouTubeIsPlaying(true);
            setEmbedError(null);
            mediaSessionService.setPlaybackState('playing');
          } else if (payload.info === 2) {
            // Only update paused state if document is visible (prevents background auto-pause from dropping state)
            if (!document.hidden) {
              setYouTubeIsPlaying(false);
              mediaSessionService.setPlaybackState('paused');
            }
          } else if (payload.info === 0) {
            setYouTubeIsPlaying(false);
            mediaSessionService.setPlaybackState('none');
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
  }, [setYouTubeIsPlaying]);

  return (
    <>
      {/* 
        Persistent Viewport-Anchored YouTube Frame
        - When preview is hidden: stays at z-index 10, opacity 0.08, width 200px, height 112px.
          Zero occlusion, continuous background audio.
        - When preview is open: raises to z-index 50, opacity 1, width 380px, height 285px.
          Structured cleanly with top header, unobstructed 16:9 video with native controls, and volume bar.
      */}
      <div 
        aria-hidden={!showYouTubePreview}
        style={{
          position: 'fixed',
          bottom: showYouTubePreview ? '84px' : '8px',
          right: showYouTubePreview ? '24px' : '8px',
          width: showYouTubePreview ? '380px' : '200px',
          height: showYouTubePreview ? '285px' : '112px',
          zIndex: showYouTubePreview ? 50 : 10,
          opacity: showYouTubePreview ? 1 : 0.08,
          pointerEvents: showYouTubePreview ? 'auto' : 'none',
          borderRadius: '1.25rem',
          overflow: 'hidden',
          boxShadow: showYouTubePreview ? '0 30px 70px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.18)' : 'none',
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className={showYouTubePreview ? 'backdrop-blur-2xl bg-[#0a0c16]/98 flex flex-col border border-white/15' : ''}
      >
        {/* Floating preview top bar */}
        {showYouTubePreview && (
          <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 bg-black/40 shrink-0">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0" />
              <span className="text-white text-xs font-display font-semibold truncate max-w-[190px]">
                {activeYouTubeItem?.title || 'YouTube Stream'}
              </span>
            </div>
            
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={forceUnmute}
                className="px-2 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-sans font-bold flex items-center gap-1 shadow-sm transition-colors cursor-pointer"
                title="Unmute & Max Volume"
              >
                <Volume2 className="w-3 h-3" />
                <span>UNMUTE</span>
              </button>
              {activeYouTubeItem?.url && (
                <a
                  href={activeYouTubeItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[10px] font-sans font-medium shadow-sm flex items-center justify-center transition-colors"
                  title="Open in YouTube"
                >
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              <button
                type="button"
                onClick={() => setShowYouTubePreview(false)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[10px] font-sans font-medium cursor-pointer shadow-sm transition-colors"
                title="Minimize to background audio"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Embedded error banner if restricted */}
        {showYouTubePreview && embedError && (
          <div className="absolute inset-0 z-30 bg-black/92 backdrop-blur-md flex flex-col items-center justify-center p-4 text-center space-y-2.5 pointer-events-auto">
            <AlertCircle className="w-7 h-7 text-amber-400" />
            <p className="text-xs text-white/95 font-sans leading-relaxed max-w-xs">{embedError}</p>
            {activeYouTubeItem?.url && (
              <a
                href={activeYouTubeItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-sans font-semibold transition-colors shadow-md"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open Video in YouTube</span>
              </a>
            )}
          </div>
        )}

        {/* 16:9 Video Canvas Frame with Full Native Controls */}
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

        {/* Floating preview bottom bar */}
        {showYouTubePreview && (
          <div className="flex items-center justify-between px-3 py-2 border-t border-white/10 bg-black/50 shrink-0 text-xs">
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

            <button
              type="button"
              onClick={toggleYouTubePlay}
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
        )}
      </div>
    </>
  );
};
