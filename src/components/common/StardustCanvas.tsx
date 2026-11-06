import React, { useEffect, useRef } from 'react';
import { WallpaperTheme } from '../../types';
import { useData } from '../../context/DataContext';

interface Particle {
  x: number;
  y: number;
  z: number; // 0: deep-field diamond dust, 1: mid-field stars, 2: foreground bright stars
  radius: number;
  baseRadius: number;
  alpha: number;
  alphaSpeed: number;
  alphaPhase: number;
  vx: number;
  vy: number;
  color: string;
  hasSpikes?: boolean;
}

interface Meteor {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  alpha: number;
  decay: number;
  color: string;
}

interface StardustCanvasProps {
  theme?: WallpaperTheme;
}

export const StardustCanvas: React.FC<StardustCanvasProps> = ({ theme: propTheme }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { wallpaperTheme, previewTheme } = useData();

  // Active theme (supports real-time live preview during theme selection)
  const rawTheme = propTheme || previewTheme || wallpaperTheme || 'cosmic-cliffs';
  const currentTheme: WallpaperTheme = 
    rawTheme === 'pillars-of-creation' || rawTheme === 'deep-space' 
      ? rawTheme 
      : 'cosmic-cliffs';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // ── 1. PALETTES PER THEME ──
    const starColorsByTheme: Record<WallpaperTheme, string[]> = {
      'cosmic-cliffs': [
        'rgba(255, 255, 255, ',   // Pure Diamond
        'rgba(254, 240, 138, ',   // Warm Gold
        'rgba(251, 146, 60, ',    // Amber Stardust
        'rgba(253, 186, 116, ',   // Peach Dust
        'rgba(186, 230, 253, ',   // Sapphire Accent
      ],
      'pillars-of-creation': [
        'rgba(255, 255, 255, ',   // Pure Diamond
        'rgba(167, 243, 208, ',   // Mint
        'rgba(103, 232, 249, ',   // Cyan Protostar
        'rgba(52, 211, 153, ',    // Emerald Ion
        'rgba(186, 230, 253, ',   // Ice Blue
      ],
      'deep-space': [
        'rgba(255, 255, 255, ',   // Pure Diamond
        'rgba(241, 245, 249, ',   // Crisp Silver
        'rgba(224, 242, 254, ',   // Cold Titanium
        'rgba(254, 243, 199, ',   // Ancient Galaxy Bronze
        'rgba(255, 255, 255, ',   // Bright White
      ],
    };

    const currentStarColors = starColorsByTheme[currentTheme] || starColorsByTheme['cosmic-cliffs'];

    // ── 2. PARTICLES INITIALIZATION ──
    // Responsive count: balanced for 60fps on mobile (Samsung Galaxy F13) and desktop
    const particleCount = width < 768 ? 95 : 175;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const rand = Math.random();
      let z = 0;
      let baseRadius = Math.random() * 0.7 + 0.45;
      let hasSpikes = false;

      if (rand > 0.88) {
        z = 2; // Bright foreground star with cross diffraction spikes
        baseRadius = Math.random() * 1.2 + 1.4;
        hasSpikes = true;
      } else if (rand > 0.55) {
        z = 1; // Mid-field shimmering star
        baseRadius = Math.random() * 0.7 + 0.8;
      }

      // Gentle organic drift velocities
      const vx = (Math.random() - 0.5) * (0.03 + z * 0.035);
      const vy = -Math.random() * (0.03 + z * 0.035) - 0.015;

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z,
        radius: baseRadius,
        baseRadius,
        alpha: Math.random() * 0.6 + 0.35,
        alphaSpeed: Math.random() * 0.02 + 0.008,
        alphaPhase: Math.random() * Math.PI * 2,
        vx,
        vy,
        color: currentStarColors[Math.floor(Math.random() * currentStarColors.length)],
        hasSpikes,
      });
    }

    // ── 3. METEORS (SHOOTING STARS) ──
    const meteors: Meteor[] = [];
    let nextMeteorTime = performance.now() + 3000;

    const spawnMeteor = () => {
      const startX = Math.random() * width * 0.8 + width * 0.15;
      const startY = Math.random() * height * 0.25;
      const angle = (Math.PI / 180) * (215 + (Math.random() * 16 - 8));
      const speed = Math.random() * 8 + 11;
      const length = Math.random() * 110 + 80;

      const meteorColor =
        currentTheme === 'cosmic-cliffs'
          ? 'rgba(251, 191, 36, '
          : currentTheme === 'pillars-of-creation'
          ? 'rgba(45, 212, 191, '
          : 'rgba(255, 255, 255, ';

      meteors.push({
        x: startX,
        y: startY,
        length,
        speed,
        angle,
        alpha: 0.95,
        decay: Math.random() * 0.016 + 0.012,
        color: meteorColor,
      });
    };

    let isVisible = true;
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // ── 4. 60FPS FRAME LOOP ──
    const render = (time: number) => {
      animationFrameId = requestAnimationFrame(render);
      if (!isVisible) return;

      const tSec = time * 0.001;
      const waveSlow = Math.sin(tSec * 0.15);
      const waveMid = Math.cos(tSec * 0.25);

      // ── A. VOID BASE FILL ──
      if (currentTheme === 'cosmic-cliffs') {
        const bgGrad = ctx.createLinearGradient(0, 0, width, height);
        bgGrad.addColorStop(0, '#06040a');
        bgGrad.addColorStop(0.5, '#0a0610');
        bgGrad.addColorStop(1, '#040207');
        ctx.fillStyle = bgGrad;
      } else if (currentTheme === 'pillars-of-creation') {
        const bgGrad = ctx.createLinearGradient(0, 0, width, height);
        bgGrad.addColorStop(0, '#02070c');
        bgGrad.addColorStop(0.5, '#040b12');
        bgGrad.addColorStop(1, '#020408');
        ctx.fillStyle = bgGrad;
      } else {
        // Deep Space
        const bgGrad = ctx.createLinearGradient(0, 0, width, height);
        bgGrad.addColorStop(0, '#030408');
        bgGrad.addColorStop(0.5, '#04050b');
        bgGrad.addColorStop(1, '#020205');
        ctx.fillStyle = bgGrad;
      }
      ctx.fillRect(0, 0, width, height);

      // ── B. VOLUMETRIC GASEOUS NEBULA PLUMES ──
      if (currentTheme === 'cosmic-cliffs') {
        // 1. Warm Amber Dust Ridge (Center-Left)
        const cx1 = width * (0.32 + waveSlow * 0.03);
        const cy1 = height * (0.62 + waveMid * 0.02);
        const r1 = Math.max(width, height) * 0.52;
        const grad1 = ctx.createRadialGradient(cx1, cy1, 0, cx1, cy1, r1);
        grad1.addColorStop(0, 'rgba(217, 119, 6, 0.20)');
        grad1.addColorStop(0.4, 'rgba(180, 83, 9, 0.11)');
        grad1.addColorStop(0.75, 'rgba(120, 53, 15, 0.04)');
        grad1.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = grad1;
        ctx.fillRect(0, 0, width, height);

        // 2. Golden Ionization Plume (Upper-Right)
        const cx2 = width * (0.68 - waveMid * 0.025);
        const cy2 = height * (0.35 + waveSlow * 0.02);
        const r2 = Math.max(width, height) * 0.46;
        const grad2 = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, r2);
        grad2.addColorStop(0, 'rgba(245, 158, 11, 0.16)');
        grad2.addColorStop(0.45, 'rgba(217, 119, 6, 0.07)');
        grad2.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = grad2;
        ctx.fillRect(0, 0, width, height);

        // 3. Deep Sapphire Cradle (Top-Left)
        const cx3 = width * (0.2 + waveMid * 0.02);
        const cy3 = height * (0.2 - waveSlow * 0.02);
        const r3 = Math.max(width, height) * 0.40;
        const grad3 = ctx.createRadialGradient(cx3, cy3, 0, cx3, cy3, r3);
        grad3.addColorStop(0, 'rgba(30, 58, 138, 0.16)');
        grad3.addColorStop(0.5, 'rgba(59, 130, 246, 0.05)');
        grad3.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = grad3;
        ctx.fillRect(0, 0, width, height);
      } else if (currentTheme === 'pillars-of-creation') {
        // 1. Central Emerald Pillar (Bottom-Center towering upward)
        const cx1 = width * (0.48 + waveSlow * 0.025);
        const cy1 = height * (0.58 + waveMid * 0.02);
        const r1 = Math.max(width, height) * 0.55;
        const grad1 = ctx.createRadialGradient(cx1, cy1, 0, cx1, cy1, r1);
        grad1.addColorStop(0, 'rgba(16, 185, 129, 0.20)');
        grad1.addColorStop(0.35, 'rgba(5, 150, 105, 0.11)');
        grad1.addColorStop(0.7, 'rgba(4, 120, 87, 0.04)');
        grad1.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = grad1;
        ctx.fillRect(0, 0, width, height);

        // 2. Aquamarine Protostar Nursery (Left Flank)
        const cx2 = width * (0.24 - waveMid * 0.02);
        const cy2 = height * (0.42 + waveSlow * 0.02);
        const r2 = Math.max(width, height) * 0.45;
        const grad2 = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, r2);
        grad2.addColorStop(0, 'rgba(20, 184, 166, 0.17)');
        grad2.addColorStop(0.45, 'rgba(13, 148, 136, 0.07)');
        grad2.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = grad2;
        ctx.fillRect(0, 0, width, height);

        // 3. Ultraviolet Interstellar Haze (Upper-Right)
        const cx3 = width * (0.76 + waveMid * 0.02);
        const cy3 = height * (0.26 - waveSlow * 0.02);
        const r3 = Math.max(width, height) * 0.42;
        const grad3 = ctx.createRadialGradient(cx3, cy3, 0, cx3, cy3, r3);
        grad3.addColorStop(0, 'rgba(79, 70, 229, 0.14)');
        grad3.addColorStop(0.5, 'rgba(99, 102, 241, 0.05)');
        grad3.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = grad3;
        ctx.fillRect(0, 0, width, height);
      } else {
        // Deep Space: Faint gravitational lensing and distant galactic smudges
        const cx1 = width * (0.7 + waveSlow * 0.015);
        const cy1 = height * (0.32 + waveMid * 0.015);
        const r1 = Math.max(width, height) * 0.38;
        const grad1 = ctx.createRadialGradient(cx1, cy1, 0, cx1, cy1, r1);
        grad1.addColorStop(0, 'rgba(146, 64, 14, 0.07)');
        grad1.addColorStop(0.5, 'rgba(120, 53, 15, 0.02)');
        grad1.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = grad1;
        ctx.fillRect(0, 0, width, height);

        const cx2 = width * (0.28 - waveMid * 0.015);
        const cy2 = height * (0.68 + waveSlow * 0.015);
        const r2 = Math.max(width, height) * 0.42;
        const grad2 = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, r2);
        grad2.addColorStop(0, 'rgba(76, 29, 149, 0.08)');
        grad2.addColorStop(0.5, 'rgba(91, 33, 182, 0.02)');
        grad2.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = grad2;
        ctx.fillRect(0, 0, width, height);
      }

      // ── C. PARTICLES (MULTI-DEPTH DRIFT & TWINKLE) ──
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          p.alphaPhase += p.alphaSpeed;
        }

        // Wrap around screen boundaries with margin
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // Twinkle calculation
        const twinkle = Math.sin(p.alphaPhase);
        const currentAlpha = Math.max(0.12, Math.min(1.0, p.alpha + twinkle * 0.28));
        const currentRadius = Math.max(0.3, p.baseRadius + twinkle * 0.25);

        // Render Star Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${currentAlpha})`;
        ctx.fill();

        // Foreground Bright Stars: Render James Webb Optical Diffraction Cross-Spikes
        if (p.hasSpikes && currentAlpha > 0.45) {
          const spikeLen = currentRadius * 4.2;
          ctx.strokeStyle = `${p.color}${currentAlpha * 0.55})`;
          ctx.lineWidth = 0.75;

          ctx.beginPath();
          // Horizontal spike
          ctx.moveTo(p.x - spikeLen, p.y);
          ctx.lineTo(p.x + spikeLen, p.y);
          // Vertical spike
          ctx.moveTo(p.x, p.y - spikeLen);
          ctx.lineTo(p.x, p.y + spikeLen);
          ctx.stroke();

          // Subtle central halo glow
          ctx.beginPath();
          ctx.arc(p.x, p.y, currentRadius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${currentAlpha * 0.15})`;
          ctx.fill();
        }
      }

      // ── D. METEORS (SHOOTING STARS) ──
      if (!prefersReducedMotion && time > nextMeteorTime) {
        spawnMeteor();
        nextMeteorTime = time + Math.random() * 4500 + 3500;
      }

      for (let m = meteors.length - 1; m >= 0; m--) {
        const meteor = meteors[m];
        meteor.x += Math.cos(meteor.angle) * meteor.speed;
        meteor.y += Math.sin(meteor.angle) * meteor.speed;
        meteor.alpha -= meteor.decay;

        if (meteor.alpha <= 0 || meteor.x < -150 || meteor.y > height + 150) {
          meteors.splice(m, 1);
          continue;
        }

        const tailX = meteor.x - Math.cos(meteor.angle) * meteor.length;
        const tailY = meteor.y - Math.sin(meteor.angle) * meteor.length;

        const mGrad = ctx.createLinearGradient(meteor.x, meteor.y, tailX, tailY);
        mGrad.addColorStop(0, `${meteor.color}${meteor.alpha})`);
        mGrad.addColorStop(0.3, `${meteor.color}${meteor.alpha * 0.45})`);
        mGrad.addColorStop(1, `${meteor.color}0)`);

        ctx.strokeStyle = mGrad;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(meteor.x, meteor.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        // Glowing meteor head
        ctx.fillStyle = `rgba(255, 255, 255, ${meteor.alpha})`;
        ctx.beginPath();
        ctx.arc(meteor.x, meteor.y, 1.4, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [currentTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        display: 'block',
        width: '100vw',
        height: '100vh',
      }}
      aria-hidden="true"
    />
  );
};
