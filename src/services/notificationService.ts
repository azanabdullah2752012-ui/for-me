import { soundEngine } from './soundEngine';

class NotificationService {
  /**
   * Check if the browser supports notifications
   */
  public isSupported(): boolean {
    return typeof window !== 'undefined' && 'Notification' in window;
  }

  /**
   * Check if permission is currently granted
   */
  public hasPermission(): boolean {
    if (!this.isSupported()) return false;
    return Notification.permission === 'granted';
  }

  /**
   * Request browser permission to send system desktop notifications
   */
  public async requestPermission(): Promise<boolean> {
    if (!this.isSupported()) return false;
    try {
      const result = await Notification.requestPermission();
      return result === 'granted';
    } catch (err) {
      console.warn('Failed to request notification permission:', err);
      return false;
    }
  }

  /**
   * Send a native browser / desktop notification
   */
  public sendSystemNotification(title: string, body: string, tag?: string): void {
    if (!this.hasPermission()) return;

    try {
      const notif = new Notification(title, {
        body,
        icon: '/favicon.ico',
        tag: tag || `for_me_${Date.now()}`,
        silent: true, // We handle the sanctuary crystal chime ourselves through Web Audio
      });

      notif.onclick = () => {
        window.focus();
        notif.close();
      };
    } catch (err) {
      console.warn('Could not spawn system notification:', err);
    }
  }

  /**
   * Play the sanctuary chime sound
   */
  public playChime(type: 'start' | 'wrap_up' | 'break' = 'start'): void {
    try {
      if (type === 'wrap_up' || type === 'break') {
        soundEngine.playBreakChime();
      } else {
        soundEngine.playFocusChime();
      }
    } catch (err) {
      console.warn('Chime playback error:', err);
    }
  }
}

export const notificationService = new NotificationService();
