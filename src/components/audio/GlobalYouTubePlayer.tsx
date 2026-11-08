import React, { useEffect, useRef, useState } from 'react';
import { useData } from '../../context/DataContext';
import { ExternalLink, AlertCircle } from 'lucide-react';
import { YouTubeItem } from '../../services/youtubeAudioService';

declare global {
  interface Window {
    __forMeSendYouTubeCommand?: (command: string, args?: any[]) => void;
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
  } = useData();

  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [currentSrc, setCurrentSrc] = useState<string>(() => {
    return 'https://www.youtube-nocookie.com/embed/jfKfPfyJRdk?enablejsapi=1&playsinline=1&rel=0&modestbranding=1';
  });
  const [embedError, setEmbedError] = useState<string | null>(null);
  const prevItemIdRef = useRef<string | null>(null);

  // Helper to send postMessage commands directly to YouTube iframe
  const sendCommand = (func: string, args: any[] = []) => {
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
  };

  // Expose command sender globally for DataContext controls
  useEffect(() => {
    window.__forMeSendYouTubeCommand = sendCommand;
    setYouTubePlayerReady(true);
    return () => {
      delete window.__forMeSendYouTubeCommand;
    };
  }, []);

  // Compute embed URL for item
  const buildEmbedUrl = (item: YouTubeItem | null, autoplay: boolean) => {
    const auto = autoplay ? '1' : '0';
    if (!item) {
      return `https://www.youtube-nocookie.com/embed/jfKfPfyJRdk?autoplay=${auto}&enablejsapi=1&playsinline=1&rel=0&modestbranding=1`;
    }

    if (item.type === 'playlist' && item.playlistId) {
      return `https://www.youtube-nocookie.com/embed?listType=playlist&list=${encodeURIComponent(item.playlistId)}&autoplay=${auto}&enablejsapi=1&playsinline=1&rel=0&modestbranding=1`;
    }

    if (item.type === 'video_in_playlist' && item.videoId && item.playlistId) {
      return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(item.videoId)}?list=${encodeURIComponent(item.playlistId)}&autoplay=${auto}&enablejsapi=1&playsinline=1&rel=0&modestbranding=1`;
    }

    const vid = item.videoId || 'jfKfPfyJRdk';
    return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(vid)}?autoplay=${auto}&enablejsapi=1&playsinline=1&rel=0&modestbranding=1`;
  };

  // When active item changes: update iframe src and play immediately
  useEffect(() => {
    if (!activeYouTubeItem) return;

    setEmbedError(null);
    const newSrc = buildEmbedUrl(activeYouTubeItem, true);

    if (activeYouTubeItem.id !== prevItemIdRef.current || currentSrc !== newSrc) {
      prevItemIdRef.current = activeYouTubeItem.id;
      setCurrentSrc(newSrc);
      setYouTubeIsPlaying(true);
    }
  }, [activeYouTubeItem]);

  // Sync Play/Pause via postMessage
  useEffect(() => {
    if (isYouTubePlaying) {
      sendCommand('playVideo');
    } else {
      sendCommand('pauseVideo');
    }
  }, [isYouTubePlaying]);

  // Sync Volume
  useEffect(() => {
    sendCommand('setVolume', [youtubeVolume]);
  }, [youtubeVolume]);

  // Sync Mute
  useEffect(() => {
    if (isYouTubeMuted) {
      sendCommand('mute');
    } else {
      sendCommand('unMute');
    }
  }, [isYouTubeMuted]);

  // Listen to postMessage callbacks from YouTube iframe for state updates
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // YouTube iframe sends postMessage events with JSON string
      if (!event.data || typeof event.data !== 'string') return;
      try {
        const payload = JSON.parse(event.data);
        if (payload.event === 'onStateChange') {
          // 1: playing, 2: paused, 0: ended
          if (payload.info === 1) {
            setYouTubeIsPlaying(true);
            setEmbedError(null);
          } else if (payload.info === 2 || payload.info === 0) {
            setYouTubeIsPlaying(false);
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
  }, [setYouTubeIsPlaying]);

  return (
    <>
      {/* 
        Persistent Viewport-Anchored YouTube Frame
        - Kept within the rendered viewport (bottom: 0, right: 0)
        - Sized at 240px x 135px (satisfies YouTube's 200px minimum dimension requirement so it is NEVER throttled)
        - Opacity 0.001 with pointer-events: none when backgrounded
        - Smoothly elevates to PiP floating window (z-index 50, opacity 1) when preview is opened
      */}
      <div 
        aria-hidden={!showYouTubePreview}
        style={{
          position: 'fixed',
          bottom: showYouTubePreview ? '84px' : '0px',
          right: showYouTubePreview ? '24px' : '0px',
          width: showYouTubePreview ? '360px' : '240px',
          height: showYouTubePreview ? '202px' : '135px',
          zIndex: showYouTubePreview ? 50 : -50,
          opacity: showYouTubePreview ? 1 : 0.001,
          pointerEvents: showYouTubePreview ? 'auto' : 'none',
          borderRadius: showYouTubePreview ? '1.25rem' : '0px',
          overflow: 'hidden',
          boxShadow: showYouTubePreview ? '0 25px 60px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.15)' : 'none',
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className={showYouTubePreview ? 'backdrop-blur-xl bg-black/95' : ''}
      >
        {/* Floating preview top bar */}
        {showYouTubePreview && (
          <div className="absolute top-2 left-2 right-2 z-20 flex items-center justify-between pointer-events-auto">
            <span className="px-2.5 py-1 rounded-lg bg-black/75 text-white/95 text-[11px] font-sans font-medium backdrop-blur-md border border-white/10 truncate max-w-[210px] shadow-sm">
              {activeYouTubeItem?.title || 'YouTube Stream'}
            </span>
            <div className="flex items-center gap-1.5">
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
    </>
  );
};
