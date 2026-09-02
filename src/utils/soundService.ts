/**
 * CATENERGY Audio Service
 * Provides ambient acoustic transitions & synthesized brand audio without external heavy audio assets.
 */

class SoundService {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;

  private initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
  }

  public getMuted() {
    return this.isMuted;
  }

  /**
   * Plays soft energetic hum representing electric substation transmission
   */
  public playSubstationHum(durationMs = 2500) {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      // 60 Hz fundamental electrical grid hum with harmonic
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(60, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + durationMs / 1000);

      gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.04, this.ctx.currentTime + 0.5);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + durationMs / 1000);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + durationMs / 1000);
    } catch {
      // Ignore audio autoplay restrictions gracefully
    }
  }

  /**
   * Plays crisp resonant power chime for brand reveal
   */
  public playBrandChime() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      // High-grade acoustic chime chord (C# Major / E5 - G#5 - C#6)
      const freqs = [523.25, 659.25, 783.99, 1046.5];

      freqs.forEach((f, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, now + idx * 0.08);

        gain.gain.setValueAtTime(0.001, now + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.05, now + idx * 0.08 + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 1.6);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 1.7);
      });
    } catch {
      // Handled
    }
  }

  /**
   * Speaks "CATENERGY" in a distinguished, executive voice
   */
  public speakBrandName() {
    if (this.isMuted) return;
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance('Cat Energy');
        utterance.lang = 'es-PE';
        utterance.rate = 0.92;
        utterance.pitch = 0.95;
        utterance.volume = 0.85;

        // Try selecting a natural Spanish or English voice if available
        const voices = window.speechSynthesis.getVoices();
        const preferredVoice = voices.find(v => (v.lang.includes('es') || v.lang.includes('en')) && (v.name.includes('Natural') || v.name.includes('Premium') || v.name.includes('Google')));
        if (preferredVoice) {
          utterance.voice = preferredVoice;
        }

        window.speechSynthesis.speak(utterance);
      } catch {
        this.playBrandChime();
      }
    } else {
      this.playBrandChime();
    }
  }
}

export const soundService = new SoundService();
