import React, { useEffect, useRef } from 'react';
import { useData } from '../../context/DataContext';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export const GlobalYouTubePlayer: React.FC = () => {
  const { 
    activeYouTubeItem, 
    isYouTubePlaying, 
    youtubeVolume, 
    isYouTubeMuted, 
    setYouTubeIsPlaying,
    isYouTubePlayerReady,
    setYouTubePlayerReady,
    showYouTubePreview,
    setShowYouTubePreview
  } = useData();

  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const activeItemRef = useRef(activeYouTubeItem);
  const isPlayingRef = useRef(isYouTubePlaying);
  const volumeRef = useRef(youtubeVolume);
  const isMutedRef = useRef(isYouTubeMuted);

  useEffect(() => {
    activeItemRef.current = activeYouTubeItem;
  }, [activeYouTubeItem]);

  useEffect(() => {
    isPlayingRef.current = isYouTubePlaying;
  }, [isYouTubePlaying]);

  useEffect(() => {
    volumeRef.current = youtubeVolume;
    if (playerRef.current && typeof playerRef.current.setVolume === 'function') {
      try {
        playerRef.current.setVolume(youtubeVolume);
      } catch {
        // ignore
      }
    }
  }, [youtubeVolume]);

  useEffect(() => {
    isMutedRef.current = isYouTubeMuted;
    if (playerRef.current) {
      try {
        if (isYouTubeMuted && typeof playerRef.current.mute === 'function') {
          playerRef.current.mute();
        } else if (!isYouTubeMuted && typeof playerRef.current.unMute === 'function') {
          playerRef.current.unMute();
        }
      } catch {
        // ignore
      }
    }
  }, [isYouTubeMuted]);

  // Load YouTube IFrame API script
  useEffect(() => {
    const initPlayer = () => {
      if (!window.YT || !window.YT.Player) return;

      if (playerRef.current) return;

      playerRef.current = new window.YT.Player('global-youtube-audio-iframe', {
        height: '100%',
        width: '100%',
        playerVars: {
          autoplay: 1,
          controls: 1,
          enablejsapi: 1,
          origin: window.location.origin,
          playsinline: 1,
          rel: 0,
          modestbranding: 1,
          iv_load_policy: 3,
        },
        events: {
          onReady: (event: any) => {
            setYouTubePlayerReady(true);
            try {
              event.target.setVolume(volumeRef.current);
              if (isMutedRef.current) {
                event.target.mute();
              }
              // If an item was active before ready, play it
              if (activeItemRef.current && isPlayingRef.current) {
                if (activeItemRef.current.type === 'playlist' && activeItemRef.current.playlistId) {
                  event.target.loadPlaylist({
                    list: activeItemRef.current.playlistId,
                    listType: 'playlist',
                  });
                } else if (activeItemRef.current.videoId) {
                  event.target.loadVideoById(activeItemRef.current.videoId);
                }
              }
            } catch (err) {
              console.warn('[YouTube Audio] onReady event handling:', err);
            }
          },
          onStateChange: (event: any) => {
            // YT.PlayerState: -1 unstarted, 0 ended, 1 playing, 2 paused, 3 buffering, 5 cued
            if (event.data === 1) {
              setYouTubeIsPlaying(true);
            } else if (event.data === 2) {
              setYouTubeIsPlaying(false);
            } else if (event.data === 0) {
              // Ended - if loop or playlist, continue
              setYouTubeIsPlaying(false);
            }
          },
          onError: (event: any) => {
            console.warn('[YouTube Audio Player Error]', event.data);
            setYouTubeIsPlaying(false);
          },
        },
      });

      // Expose globally for next/prev operations
      (window as any).__forMeYouTubePlayer = playerRef.current;
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      const prevCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (prevCallback) prevCallback();
        initPlayer();
      };

      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
      }
    }

    return () => {
      // Do NOT destroy on component unmount to maintain background music!
    };
  }, [setYouTubeIsPlaying, setYouTubePlayerReady]);

  // Handle active item changes
  useEffect(() => {
    if (!playerRef.current || !isYouTubePlayerReady || !activeYouTubeItem) return;

    try {
      if (activeYouTubeItem.type === 'playlist' && activeYouTubeItem.playlistId) {
        if (typeof playerRef.current.loadPlaylist === 'function') {
          playerRef.current.loadPlaylist({
            list: activeYouTubeItem.playlistId,
            listType: 'playlist',
          });
        }
      } else if (activeYouTubeItem.videoId) {
        if (typeof playerRef.current.loadVideoById === 'function') {
          playerRef.current.loadVideoById(activeYouTubeItem.videoId);
        }
      }
      setYouTubeIsPlaying(true);
    } catch (err) {
      console.warn('[YouTube Audio] Load item error:', err);
    }
  }, [activeYouTubeItem, isYouTubePlayerReady, setYouTubeIsPlaying]);

  // Handle Play/Pause sync
  useEffect(() => {
    if (!playerRef.current || !isYouTubePlayerReady) return;

    try {
      const state = typeof playerRef.current.getPlayerState === 'function' 
        ? playerRef.current.getPlayerState() 
        : null;

      if (isYouTubePlaying && state !== 1 && state !== 3) {
        if (typeof playerRef.current.playVideo === 'function') {
          playerRef.current.playVideo();
        }
      } else if (!isYouTubePlaying && state === 1) {
        if (typeof playerRef.current.pauseVideo === 'function') {
          playerRef.current.pauseVideo();
        }
      }
    } catch {
      // ignore
    }
  }, [isYouTubePlaying, isYouTubePlayerReady]);

  return (
    <>
      {/* 1. Global Persistent Audio Host (Hidden / Background) */}
      <div 
        ref={containerRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: showYouTubePreview ? undefined : '-9999px',
          left: showYouTubePreview ? undefined : '-9999px',
          right: showYouTubePreview ? '24px' : undefined,
          bottom: showYouTubePreview ? '84px' : undefined,
          width: showYouTubePreview ? '340px' : '1px',
          height: showYouTubePreview ? '200px' : '1px',
          zIndex: showYouTubePreview ? 50 : -100,
          opacity: showYouTubePreview ? 1 : 0.01,
          pointerEvents: showYouTubePreview ? 'auto' : 'none',
          borderRadius: '1.25rem',
          overflow: 'hidden',
          boxShadow: showYouTubePreview ? '0 20px 50px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.15)' : 'none',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className={showYouTubePreview ? 'backdrop-blur-xl bg-black/90' : ''}
      >
        {showYouTubePreview && (
          <div className="absolute top-2 right-2 z-10">
            <button
              type="button"
              onClick={() => setShowYouTubePreview(false)}
              className="px-2 py-1 rounded-lg bg-black/70 hover:bg-black text-white text-[10px] font-sans font-medium backdrop-blur-md border border-white/20 cursor-pointer shadow-sm"
              title="Minimize to background audio"
            >
              Minimize ✕
            </button>
          </div>
        )}
        <div id="global-youtube-audio-iframe" className="w-full h-full" />
      </div>
    </>
  );
};
