/**
 * FOR ME — Persistent Background Audio & Media Session Service
 * Manages HTML5 audio keepalive anchor, Media Session API (lockscreen/notification controls),
 * and prevents browser/OS throttling when the tab or app is in the background.
 */

class MediaSessionService {
  private keepAliveAudio: HTMLAudioElement | null = null;
  private isKeepAliveActive = false;

  constructor() {
    this.initKeepAlive();
  }

  private initKeepAlive() {
    try {
      // 1-second silent WAV base64 data URI
      const silentWav = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA==';
      this.keepAliveAudio = new Audio(silentWav);
      this.keepAliveAudio.loop = true;
      this.keepAliveAudio.volume = 0.01; // Low imperceptible volume to hold OS audio session
    } catch {
      // Audio not supported in environment
    }
  }

  /**
   * Activates the silent HTML5 audio anchor.
   * This signals the OS (Android, iOS, macOS, Windows) that this tab/app
   * is an active media player, keeping audio decoding running in the background.
   */
  public startKeepAlive() {
    if (this.isKeepAliveActive || !this.keepAliveAudio) return;
    try {
      const playPromise = this.keepAliveAudio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            this.isKeepAliveActive = true;
          })
          .catch(() => {
            // Autoplay policy may require user click; handled on next user interaction
          });
      }
    } catch {
      // Ignore
    }
  }

  /**
   * Suspends the keepalive anchor when music is paused.
   */
  public stopKeepAlive() {
    if (!this.keepAliveAudio) return;
    try {
      this.keepAliveAudio.pause();
      this.isKeepAliveActive = false;
    } catch {
      // Ignore
    }
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
