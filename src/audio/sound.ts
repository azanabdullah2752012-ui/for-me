// Bulletproof Synthesized Web Audio Sound Engine for "FOR ME"
// Provides crisp, high-fidelity tactile audio feedback with zero external assets

class SoundEngine {
  private ctx: AudioContext | null = null;
  private enabled: boolean = true;
  private unlocked: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      const unlockHandler = () => {
        this.unlockAudio();
      };
      window.addEventListener('click', unlockHandler, { passive: true });
      window.addEventListener('pointerdown', unlockHandler, { passive: true });
      window.addEventListener('keydown', unlockHandler, { passive: true });
    }
  }

  public setEnabled(val: boolean) {
    this.enabled = val;
  }

  public isEnabled(): boolean {
    return this.enabled;
  }

  /**
   * Guarantees an active, running AudioContext inside user gestures
   */
  public getOrCreateContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;

    try {
      if (!this.ctx || this.ctx.state === 'closed') {
        const AudioCtx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      }

      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume().then(() => {
          this.unlocked = true;
        }).catch(() => {});
      } else if (this.ctx && this.ctx.state === 'running') {
        this.unlocked = true;
      }
    } catch {}

    return this.ctx;
  }

  public unlockAudio() {
    const ctx = this.getOrCreateContext();
    if (ctx && ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }
  }

  /**
   * Crisp, audible mechanical tactile click on interactions
   */
  public tick() {
    if (!this.enabled) return;
    try {
      const ctx = this.getOrCreateContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(440, now + 0.05);

      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.06);
    } catch {}
  }

  /**
   * Rich, radiant triumphant completion chime (Level-up / Task Done)
   */
  public complete() {
    if (!this.enabled) return;
    try {
      const ctx = this.getOrCreateContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6

      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.07);

        gain.gain.setValueAtTime(0.001, now + idx * 0.07);
        gain.gain.linearRampToValueAtTime(0.4, now + idx * 0.07 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.45);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.07);
        osc.stop(now + idx * 0.07 + 0.5);
      });
    } catch {}
  }

  /**
   * Resonant accomplishment chord (Deep Major 9)
   */
  public success() {
    if (!this.enabled) return;
    try {
      const ctx = this.getOrCreateContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const chord = [440, 554.37, 659.25, 830.61]; // A4, C#5, E5, G#5 (Warm Lush Major 7)

      chord.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.04);

        gain.gain.setValueAtTime(0.001, now + idx * 0.04);
        gain.gain.linearRampToValueAtTime(0.35, now + idx * 0.04 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.04);
        osc.stop(now + 0.75);
      });
    } catch {}
  }

  /**
   * Subtle alert strike for deletes or resets
   */
  public strike() {
    if (!this.enabled) return;
    try {
      const ctx = this.getOrCreateContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.16);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.2);
    } catch {}
  }

  /**
   * Guaranteed Loud Test Sound Chime
   * Clearly audible across any laptop, monitor, or phone speakers
   */
  public playLoudChime() {
    try {
      const ctx = this.getOrCreateContext();
      if (!ctx) return;

      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const now = ctx.currentTime;
      // High-energy 3-note melodic sequence
      const chords = [659.25, 783.99, 987.77, 1318.51]; // E5, G5, B5, E6
      chords.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.09);

        gain.gain.setValueAtTime(0.01, now + idx * 0.09);
        gain.gain.linearRampToValueAtTime(0.5, now + idx * 0.09 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.09 + 0.5);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.09);
        osc.stop(now + idx * 0.09 + 0.55);
      });
    } catch {}
  }
}

export const sound = new SoundEngine();
