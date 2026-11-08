import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useData } from '../../context/DataContext';
import { ExternalLink, AlertCircle, Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { YouTubeItem } from '../../services/youtubeAudioService';
import { mediaSessionService } from '../../services/mediaSessionService';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
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
  const ytPlayerRef = useRef<any>(null);
  const [currentSrc, setCurrentSrc] = useState<string>(() => {
    return 'https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1';
  });
  const [embedError, setEmbedError] = useState<string | null>(null);
  const [isAudioMutedInPlayer, setIsAudioMutedInPlayer] = useState(false);
  const prevItemIdRef = useRef<string | null>(null);

  // Helper to send postMessage commands directly to YouTube iframe
  const sendCommand = useCallback((func: string, args: any = '') => {
    try {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        // Send both empty string args and array format for universal compatibility
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func, args }),
          '*'
        );
      }
      // Also invoke on official YT.Player instance if initialized
      if (ytPlayerRef.current && typeof ytPlayerRef.current[func] === 'function') {
        if (args !== '' && args !== undefined) {
          if (Array.isArray(args)) ytPlayerRef.current[func](...args);
          else ytPlayerRef.current[func](args);
        } else {
          ytPlayerRef.current[func]();
        }
      }
    } catch (e) {
      console.warn('[YouTube Audio] Command dispatch error:', e);
    }
  }, []);

  // Aggressive unmute and volume booster
  const forceUnmute = useCallback(() => {
    try {
      sendCommand('unMute', '');
      sendCommand('setVolume', [100]);
      if (ytPlayerRef.current) {
        if (typeof ytPlayerRef.current.unMute === 'function') ytPlayerRef.current.unMute();
        if (typeof ytPlayerRef.current.setVolume === 'function') ytPlayerRef.current.setVolume(100);
      }
      if (isYouTubeMuted) {
        toggleYouTubeMute();
      }
      setYouTubeVolume(100);
      setIsAudioMutedInPlayer(false);
    } catch {}
  }, [sendCommand, isYouTubeMuted, toggleYouTubeMute, setYouTubeVolume]);

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

  // Load YouTube IFrame API script & bind YT.Player to the existing iframe
  useEffect(() => {
    const attachYTPlayer = () => {
      if (!window.YT || !window.YT.Player) return;
      if (ytPlayerRef.current) return;

      try {
        ytPlayerRef.current = new window.YT.Player('global-youtube-audio-iframe', {
          events: {
            onReady: (event: any) => {
              try {
                event.target.unMute();
                event.target.setVolume(youtubeVolume || 100);
                if (isYouTubePlaying) {
                  event.target.playVideo();
                }
              } catch {}
            },
            onStateChange: (event: any) => {
              if (event.data === 1) {
                setYouTubeIsPlaying(true);
                setEmbedError(null);
                mediaSessionService.setPlaybackState('playing');
                // Force unmute on transition to PLAYING
                try {
                  event.target.unMute();
                  event.target.setVolume(youtubeVolume || 100);
                } catch {}
              } else if (event.data === 2) {
                if (!document.hidden) {
                  setYouTubeIsPlaying(false);
                  mediaSessionService.setPlaybackState('paused');
                }
              } else if (event.data === 0) {
                setYouTubeIsPlaying(false);
                mediaSessionService.setPlaybackState('none');
              }
            },
            onError: (event: any) => {
              console.warn('[YouTube Audio Player Error]', event.data);
              if (event.data === 101 || event.data === 150) {
                setEmbedError('The owner of this video restricts playback outside of YouTube.');
              }
            },
          },
        });
      } catch (err) {
        console.warn('[YouTube Audio] YT.Player attach notice:', err);
      }
    };

    if (window.YT && window.YT.Player) {
      attachYTPlayer();
    } else {
      const prevCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (prevCallback) prevCallback();
        attachYTPlayer();
      };

      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const first = document.getElementsByTagName('script')[0];
        first?.parentNode?.insertBefore(tag, first);
      }
    }
  }, [youtubeVolume, isYouTubePlaying, setYouTubeIsPlaying]);

  // Compute embed URL for item (controls=1 is MANDATORY for volume slider & native controls)
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

  // When active item changes: update iframe src and trigger playback
  useEffect(() => {
    if (!activeYouTubeItem) return;

    setEmbedError(null);
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
  useEffect(() => {
    if (!isYouTubePlaying) {
      sendCommand('pauseVideo', '');
      mediaSessionService.setPlaybackState('paused');
      return;
    }

    sendCommand('playVideo', '');
    mediaSessionService.setPlaybackState('playing');

    // Staggered unmute pulses while buffering completes
    const t1 = setTimeout(() => forceUnmute(), 250);
    const t2 = setTimeout(() => forceUnmute(), 700);
    const t3 = setTimeout(() => forceUnmute(), 1500);
    const t4 = setTimeout(() => forceUnmute(), 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [isYouTubePlaying, currentSrc, forceUnmute, sendCommand]);

  // Background Persistence Enforcer:
  // When user switches tabs or locks screen, re-assert playback and volume
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden && isYouTubePlaying) {
        setTimeout(() => {
          sendCommand('playVideo', '');
          forceUnmute();
        }, 100);
        setTimeout(() => {
          sendCommand('playVideo', '');
          forceUnmute();
        }, 350);
      }
    };

    const handleWindowBlur = () => {
      if (isYouTubePlaying) {
        setTimeout(() => {
          sendCommand('playVideo', '');
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
      sendCommand('mute', '');
    } else {
      sendCommand('unMute', '');
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
          if (payload.info === 1) {
            setYouTubeIsPlaying(true);
            setEmbedError(null);
            mediaSessionService.setPlaybackState('playing');
            forceUnmute();
          } else if (payload.info === 2) {
            if (!document.hidden) {
              setYouTubeIsPlaying(false);
              mediaSessionService.setPlaybackState('paused');
            } else if (isYouTubePlaying) {
              sendCommand('playVideo', '');
              forceUnmute();
            }
          } else if (payload.info === 0) {
            setYouTubeIsPlaying(false);
            mediaSessionService.setPlaybackState('none');
          }
        } else if (payload.event === 'infoDelivery' && payload.info) {
          if (payload.info.muted === true) {
            setIsAudioMutedInPlayer(true);
          } else if (payload.info.muted === false) {
            setIsAudioMutedInPlayer(false);
          }
        }
      } catch {}
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [setYouTubeIsPlaying, isYouTubePlaying, forceUnmute, sendCommand]);

  return (
    <>
      {/* 
        Persistent Viewport-Anchored YouTube Frame
        - Positioned fixed in bottom-right corner
        - When preview is hidden: stays at z-index 10, opacity 0.08, width 200px, height 112px.
        - When preview is open: raises to z-index 50, opacity 1, width 380px, height 285px.
          Structured with a distinct top header, full 16:9 player with native controls, and bottom action bar!
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
        {/* Floating preview top bar (Clean distinct header above the video) */}
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
                title="Force Unmute Sound & Max Volume"
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

        {/* Embedded error banner if video owner restricted embedding */}
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

        {/* Floating preview bottom bar (Quick Volume Presets & Action) */}
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

      {/* 
        Instant Unmute Overlay Badge:
        If browser policy loaded video muted, this floating pill lets user unmute in 1 tap
      */}
      {isAudioMutedInPlayer && isYouTubePlaying && !showYouTubePreview && (
        <button
          type="button"
          onClick={forceUnmute}
          className="fixed bottom-20 right-4 z-50 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-red-600 to-amber-500 text-white text-xs font-display font-bold shadow-2xl flex items-center gap-2 border border-white/30 animate-bounce cursor-pointer"
        >
          <VolumeX className="w-4 h-4 text-white animate-pulse" />
          <span>Tap to Unmute Audio 🔊</span>
        </button>
      )}
    </>
  );
};
