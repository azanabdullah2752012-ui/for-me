class SoundController {
  private ctx: AudioContext | null = null;
  private ambientGain: GainNode | null = null;
  private activeOscillators: (OscillatorNode | AudioNode)[] = [];
  private activeSoundscapeId: string | null = null;

  private init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  public unlockAudio() {
    this.init();
  }

  public tick() {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch {
      // Audio autoplay policy fallback
    }
  }

  public complete() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.05);
        gain.gain.setValueAtTime(0.06, now + i * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.05 + 0.4);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.05);
        osc.stop(now + i * 0.05 + 0.4);
      });
    } catch {
      // Audio fallback
    }
  }

  public strike() {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(140, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(60, this.ctx.currentTime + 0.25);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.25);
    } catch {
      // Audio fallback
    }
  }

  public startSoundscape(type: string, volume: number = 0.5) {
    try {
      this.stopSoundscape();
      this.init();
      if (!this.ctx) return;

      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.ambientGain.gain.linearRampToValueAtTime(volume * 0.15, this.ctx.currentTime + 1.5);
      this.ambientGain.connect(this.ctx.destination);

      if (type === 'deep-work' || type === 'binaural') {
        // Binaural Alpha (108Hz + 118Hz = 10Hz Alpha beat)
        const osc1 = this.ctx.createOscillator();
        const osc2 = this.ctx.createOscillator();
        osc1.type = 'sine';
        osc2.type = 'sine';
        osc1.frequency.setValueAtTime(108, this.ctx.currentTime);
        osc2.frequency.setValueAtTime(118, this.ctx.currentTime);
        osc1.connect(this.ambientGain);
        osc2.connect(this.ambientGain);
        osc1.start();
        osc2.start();
        this.activeOscillators = [osc1, osc2];
      } else if (type === 'rain') {
        // Synthesized Gentle Rain (Pink Noise Buffer)
        const bufferSize = this.ctx.sampleRate * 2;
        const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          output[i] = (b0 + b1 + b2) * 0.08;
        }
        const whiteNoise = this.ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, this.ctx.currentTime);
        whiteNoise.connect(filter);
        filter.connect(this.ambientGain);
        whiteNoise.start();
        this.activeOscillators = [whiteNoise];
      } else {
        // Cosmic Ambient Drone (Harmonic Fifth: 130.81Hz & 196Hz)
        const osc1 = this.ctx.createOscillator();
        const osc2 = this.ctx.createOscillator();
        osc1.type = 'triangle';
        osc2.type = 'sine';
        osc1.frequency.setValueAtTime(130.81, this.ctx.currentTime);
        osc2.frequency.setValueAtTime(196.00, this.ctx.currentTime);
        osc1.connect(this.ambientGain);
        osc2.connect(this.ambientGain);
        osc1.start();
        osc2.start();
        this.activeOscillators = [osc1, osc2];
      }

      this.activeSoundscapeId = type;
    } catch {
      // Audio fallback
    }
  }

  public setSoundscapeVolume(volume: number) {
    if (this.ambientGain && this.ctx) {
      this.ambientGain.gain.setValueAtTime(volume * 0.15, this.ctx.currentTime);
    }
  }

  public stopSoundscape() {
    try {
      if (this.ambientGain && this.ctx) {
        this.ambientGain.gain.linearRampToValueAtTime(0.0001, this.ctx.currentTime + 0.5);
      }
      setTimeout(() => {
        this.activeOscillators.forEach((node) => {
          if ('stop' in node && typeof node.stop === 'function') {
            try { node.stop(); } catch {}
          }
        });
        this.activeOscillators = [];
        this.ambientGain = null;
        this.activeSoundscapeId = null;
      }, 500);
    } catch {
      this.activeOscillators = [];
      this.ambientGain = null;
      this.activeSoundscapeId = null;
    }
  }

  public getActiveSoundscapeId() {
    return this.activeSoundscapeId;
  }
}

export const sound = new SoundController();
