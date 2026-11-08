/**
 * FOR ME — Media Session Service
 * Provides OS status bar, lockscreen, and Notification controls via navigator.mediaSession.
 */

class MediaSessionService {
  /**
   * Safe no-op keep-alive anchors to prevent cross-origin audio ducking
   */
  public startKeepAlive() {
    // Intentionally no-op to avoid audio ducking against YouTube iframes
  }

  public stopKeepAlive() {
    // Intentionally no-op
  }

  /**
   * Updates OS Media Session notification & lockscreen controls.
   */
  public updateMetadata(options: {
    title: string;
    artist: string;
    album?: string;
    artworkUrl?: string;
    onPlay: () => void;
    onPause: () => void;
    onNext?: () => void;
    onPrev?: () => void;
  }) {
    if (typeof window === 'undefined' || !('mediaSession' in navigator)) return;

    try {
      const artwork = options.artworkUrl
        ? [
            { src: options.artworkUrl, sizes: '96x96', type: 'image/jpeg' },
            { src: options.artworkUrl, sizes: '128x128', type: 'image/jpeg' },
            { src: options.artworkUrl, sizes: '192x192', type: 'image/jpeg' },
            { src: options.artworkUrl, sizes: '256x256', type: 'image/jpeg' },
            { src: options.artworkUrl, sizes: '512x512', type: 'image/jpeg' },
          ]
        : [];

      navigator.mediaSession.metadata = new MediaMetadata({
        title: options.title || 'FOR ME Sanctuary',
        artist: options.artist || 'Private Life Ledger',
        album: options.album || 'Sanctuary Audio',
        artwork,
      });

      navigator.mediaSession.playbackState = 'playing';

      navigator.mediaSession.setActionHandler('play', () => {
        options.onPlay();
        navigator.mediaSession.playbackState = 'playing';
      });

      navigator.mediaSession.setActionHandler('pause', () => {
        options.onPause();
        navigator.mediaSession.playbackState = 'paused';
      });

      if (options.onNext) {
        navigator.mediaSession.setActionHandler('nexttrack', options.onNext);
      } else {
        navigator.mediaSession.setActionHandler('nexttrack', null);
      }

      if (options.onPrev) {
        navigator.mediaSession.setActionHandler('previoustrack', options.onPrev);
      } else {
        navigator.mediaSession.setActionHandler('previoustrack', null);
      }
    } catch (e) {
      console.warn('[MediaSession] Metadata update error:', e);
    }
  }

  public setPlaybackState(state: 'playing' | 'paused' | 'none') {
    if (typeof window === 'undefined' || !('mediaSession' in navigator)) return;
    try {
      navigator.mediaSession.playbackState = state;
    } catch {}
  }
}

export const mediaSessionService = new MediaSessionService();
