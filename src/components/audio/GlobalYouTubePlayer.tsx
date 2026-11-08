import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useData } from '../../context/DataContext';
import { ExternalLink, AlertCircle, Volume2, VolumeX } from 'lucide-react';
import { YouTubeItem } from '../../services/youtubeAudioService';
import { mediaSessionService } from '../../services/mediaSessionService';

declare global {
  interface Window {
    __forMeSendYouTubeCommand?: (command: string, args?: any[]) => void;
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
  } = useData();

  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [currentSrc, setCurrentSrc] = useState<string>(() => {
    return 'https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1';
  });
  const [embedError, setEmbedError] = useState<string | null>(null);
  const [needsUserUnmute, setNeedsUserUnmute] = useState(false);
  const prevItemIdRef = useRef<string | null>(null);

  // Helper to send postMessage commands directly to YouTube iframe
  const sendCommand = useCallback((func: string, args: any[] = []) => {
    try {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func, args }),
          '*'
        );
      }
    } catch (e) {
      console.warn('[YouTube Audio] postMessage error:', e);
    }
  }, []);

  // Aggressive unmute and volume booster
  const forceUnmute = useCallback(() => {
    try {
      sendCommand('unMute');
      sendCommand('setVolume', [youtubeVolume || 100]);
      if (isYouTubeMuted) {
        toggleYouTubeMute();
      }
      setNeedsUserUnmute(false);
    } catch {}
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

  // Compute embed URL for item (using www.youtube.com to prevent ContentID restriction on nocookie domain)
  const buildEmbedUrl = (item: YouTubeItem | null, autoplay: boolean) => {
    const auto = autoplay ? '1' : '0';
    if (!item) {
      return `https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=${auto}&enablejsapi=1&playsinline=1&rel=0&modestbranding=1`;
    }

    if (item.type === 'playlist' && item.playlistId) {
      return `https://www.youtube.com/embed?listType=playlist&list=${encodeURIComponent(item.playlistId)}&autoplay=${auto}&enablejsapi=1&playsinline=1&rel=0&modestbranding=1`;
    }

    if (item.type === 'video_in_playlist' && item.videoId && item.playlistId) {
      return `https://www.youtube.com/embed/${encodeURIComponent(item.videoId)}?list=${encodeURIComponent(item.playlistId)}&autoplay=${auto}&enablejsapi=1&playsinline=1&rel=0&modestbranding=1`;
    }

    const vid = item.videoId || 'jfKfPfyJRdk';
    return `https://www.youtube.com/embed/${encodeURIComponent(vid)}?autoplay=${auto}&enablejsapi=1&playsinline=1&rel=0&modestbranding=1`;
  };

  // When active item changes: update iframe src and trigger playback
  useEffect(() => {
    if (!activeYouTubeItem) return;

    setEmbedError(null);
    setNeedsUserUnmute(false);
    const newSrc = buildEmbedUrl(activeYouTubeItem, true);

    if (activeYouTubeItem.id !== prevItemIdRef.current || currentSrc !== newSrc) {
      prevItemIdRef.current = activeYouTubeItem.id;
      setCurrentSrc(newSrc);
      setYouTubeIsPlaying(true);
    }

    // Register Media Session for lockscreen & notification controls
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

  // Multi-stage Unmute Sequence on Load & Play
  // As the iframe boots up and transitions through buffering and playing,
  // we continuously enforce unMute and volume restoration.
  useEffect(() => {
    if (!isYouTubePlaying) {
      sendCommand('pauseVideo');
      mediaSessionService.setPlaybackState('paused');
      return;
    }

    sendCommand('playVideo');
    mediaSessionService.setPlaybackState('playing');

    // Send immediate unmute attempts at staggered milestones as YouTube finishes loading
    const t1 = setTimeout(() => forceUnmute(), 300);
    const t2 = setTimeout(() => forceUnmute(), 800);
    const t3 = setTimeout(() => forceUnmute(), 1600);
    const t4 = setTimeout(() => forceUnmute(), 2500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [isYouTubePlaying, currentSrc, forceUnmute, sendCommand]);

  // Background Persistence Enforcer:
  // When user switches tabs, minimizes browser, or locks screen,
  // YouTube internally attempts to trigger pauseVideo() on visibilitychange.
  // We intercept visibility changes and re-assert playback and volume.
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden && isYouTubePlaying) {
        setTimeout(() => {
          sendCommand('playVideo');
          forceUnmute();
        }, 80);
        setTimeout(() => {
          sendCommand('playVideo');
          forceUnmute();
        }, 350);
      }
    };

    const handleWindowBlur = () => {
      if (isYouTubePlaying) {
        setTimeout(() => {
          sendCommand('playVideo');
          forceUnmute();
        }, 120);
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('blur', handleWindowBlur);
    window.addEventListener('pagehide', handleVisibility);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('blur', handleWindowBlur);
      window.removeEventListener('pagehide', handleVisibility);
    };
  }, [isYouTubePlaying, forceUnmute, sendCommand]);

  // Sync Volume
  useEffect(() => {
    sendCommand('setVolume', [youtubeVolume]);
  }, [youtubeVolume, sendCommand]);

  // Sync Mute
  useEffect(() => {
    if (isYouTubeMuted) {
      sendCommand('mute');
    } else {
      sendCommand('unMute');
      sendCommand('setVolume', [youtubeVolume]);
    }
  }, [isYouTubeMuted, youtubeVolume, sendCommand]);

  // Listen to postMessage callbacks from YouTube iframe
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
            // Crucial: Send unmute as soon as video state turns to PLAYING!
            forceUnmute();
          } else if (payload.info === 2) {
            if (!document.hidden) {
              setYouTubeIsPlaying(false);
              mediaSessionService.setPlaybackState('paused');
            } else if (isYouTubePlaying) {
              sendCommand('playVideo');
              forceUnmute();
            }
          } else if (payload.info === 0) {
            setYouTubeIsPlaying(false);
            mediaSessionService.setPlaybackState('none');
          }
        } else if (payload.event === 'infoDelivery' && payload.info) {
          // If YouTube reports muted state while user wanted sound
          if (payload.info.muted === true && !isYouTubeMuted && isYouTubePlaying) {
            setNeedsUserUnmute(true);
          } else if (payload.info.muted === false) {
            setNeedsUserUnmute(false);
          }
        } else if (payload.event === 'onError') {
          console.warn('[YouTube Audio Event Error]', payload.info);
          if (payload.info === 101 || payload.info === 150) {
            setEmbedError('The owner of this video restricts playback outside of YouTube.');
          } else if (payload.info === 100) {
            setEmbedError('Video or playlist not found or removed.');
          } else if (payload.info === 2) {
            setEmbedError('Invalid YouTube video or playlist link.');
          }
          setYouTubeIsPlaying(false);
        }
      } catch {
        // Not a JSON message or not from YouTube
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [setYouTubeIsPlaying, isYouTubePlaying, isYouTubeMuted, forceUnmute, sendCommand]);

  return (
    <>
      {/* 
        Persistent Viewport-Anchored YouTube Frame
        - Positioned fixed in bottom-right corner
        - When preview is hidden: stays at z-index 10, opacity 0.08, width 200px, height 112px.
        - When preview is open: raises to z-index 50, opacity 1, width 360px, height 202px.
      */}
      <div 
        aria-hidden={!showYouTubePreview}
        style={{
          position: 'fixed',
          bottom: showYouTubePreview ? '84px' : '8px',
          right: showYouTubePreview ? '24px' : '8px',
          width: showYouTubePreview ? '360px' : '200px',
          height: showYouTubePreview ? '202px' : '112px',
          zIndex: showYouTubePreview ? 50 : 10,
          opacity: showYouTubePreview ? 1 : 0.08,
          pointerEvents: showYouTubePreview ? 'auto' : 'none',
          borderRadius: showYouTubePreview ? '1.25rem' : '0.75rem',
          overflow: 'hidden',
          boxShadow: showYouTubePreview ? '0 25px 60px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.15)' : 'none',
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className={showYouTubePreview ? 'backdrop-blur-xl bg-black/95' : ''}
      >
        {/* Floating preview top bar */}
        {showYouTubePreview && (
          <div className="absolute top-2 left-2 right-2 z-20 flex items-center justify-between pointer-events-auto">
            <span className="px-2.5 py-1 rounded-lg bg-black/75 text-white/95 text-[11px] font-sans font-medium backdrop-blur-md border border-white/10 truncate max-w-[190px] shadow-sm">
              {activeYouTubeItem?.title || 'YouTube Stream'}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={forceUnmute}
                className="p-1.5 rounded-lg bg-emerald-600/80 hover:bg-emerald-600 text-white text-[10px] font-sans font-medium backdrop-blur-md border border-emerald-400/30 shadow-sm flex items-center justify-center transition-colors cursor-pointer"
                title="Force Unmute Sound"
              >
                <Volume2 className="w-3 h-3" />
              </button>
              {activeYouTubeItem?.url && (
                <a
                  href={activeYouTubeItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-black/75 hover:bg-black text-white text-[10px] font-sans font-medium backdrop-blur-md border border-white/20 shadow-sm flex items-center justify-center transition-colors"
                  title="Open in YouTube"
                >
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              <button
                type="button"
                onClick={() => setShowYouTubePreview(false)}
                className="px-2.5 py-1 rounded-lg bg-black/75 hover:bg-black text-white text-[11px] font-sans font-medium backdrop-blur-md border border-white/20 cursor-pointer shadow-sm transition-colors"
                title="Minimize to background audio"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Embedded error banner if video owner restricted embedding */}
        {showYouTubePreview && embedError && (
          <div className="absolute inset-0 z-15 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 text-center space-y-2.5 pointer-events-auto">
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

        {/* High-fidelity responsive iframe */}
        <iframe
          ref={iframeRef}
          id="global-youtube-audio-iframe"
          title="FOR ME Sanctuary Audio Stream"
          src={currentSrc}
          className="w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      {/* 
        Instant Unmute Overlay Badge:
        If browser policy loaded video muted, this floating pill lets user unmute in 1 tap
      */}
      {needsUserUnmute && isYouTubePlaying && !showYouTubePreview && (
        <button
          type="button"
          onClick={forceUnmute}
          className="fixed bottom-20 right-4 z-50 px-3.5 py-2 rounded-2xl bg-gradient-to-r from-red-600 to-amber-600 text-white text-xs font-display font-bold shadow-2xl flex items-center gap-2 border border-white/20 animate-bounce cursor-pointer"
        >
          <VolumeX className="w-4 h-4 text-white animate-pulse" />
          <span>Tap to Unmute Sound 🔊</span>
        </button>
      )}
    </>
  );
};
