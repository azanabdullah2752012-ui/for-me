import React, { useEffect, useRef } from 'react';
import { WallpaperTheme } from '../../types';
import { useData } from '../../context/DataContext';

interface Particle {
  x: number;
  y: number;
  z: number; // 0 (deep field), 1 (mid field), 2 (foreground)
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
  const { settings } = useData();
  const currentTheme: WallpaperTheme = propTheme || settings.wallpaperTheme || 'deep-nebula';

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

    // Color palettes per theme
    const themeStarColors: Record<WallpaperTheme, string[]> = {
      'deep-nebula': [
        'rgba(255, 255, 255, ',
        'rgba(216, 180, 254, ',
        'rgba(168, 85, 247, ',
        'rgba(129, 140, 248, ',
        'rgba(147, 197, 253, ',
      ],
      'earth-horizon': [
        'rgba(255, 255, 255, ',
        'rgba(224, 242, 254, ',
        'rgba(186, 230, 253, ',
        'rgba(125, 211, 252, ',
        'rgba(147, 197, 253, ',
      ],
      'cyber-obsidian': [
        'rgba(255, 255, 255, ',
        'rgba(241, 245, 249, ',
        'rgba(226, 232, 240, ',
        'rgba(203, 213, 225, ',
      ],
      'constellation': [
        'rgba(255, 255, 255, ',
        'rgba(199, 210, 254, ',
        'rgba(165, 180, 252, ',
        'rgba(224, 231, 255, ',
      ],
    };

    const starColors = themeStarColors[currentTheme] || themeStarColors['deep-nebula'];

    // Multi-plane particle population
    const particles: Particle[] = [];
    const count = currentTheme === 'constellation'
      ? Math.min(160, Math.floor((width * height) / 9500))
      : currentTheme === 'cyber-obsidian'
      ? Math.min(95, Math.floor((width * height) / 16000))
      : Math.min(130, Math.floor((width * height) / 12000));

    for (let i = 0; i < count; i++) {
      const rand = Math.random();
      let z = 0;
      let baseRadius = Math.random() * 0.7 + 0.3;
      let hasSpikes = false;

      if (rand > 0.90 && currentTheme !== 'cyber-obsidian') {
        z = 2;
        baseRadius = Math.random() * 1.0 + 1.4;
        hasSpikes = true;
      } else if (rand > 0.65) {
        z = 1;
        baseRadius = Math.random() * 0.8 + 0.8;
      }

      // Drift velocities based on theme
      let vx = (Math.random() - 0.5) * (0.04 + z * 0.05);
      let vy = -Math.random() * (0.04 + z * 0.05) - 0.02;

      if (currentTheme === 'earth-horizon') {
        // Slow orbital drift (eastward curve)
        vx = Math.random() * 0.08 + 0.02 + z * 0.03;
        vy = -Math.random() * 0.03 - 0.01;
      } else if (currentTheme === 'constellation') {
        // Very slow, majestic drift
        vx = (Math.random() - 0.5) * 0.03;
        vy = (Math.random() - 0.5) * 0.03;
      }

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z,
        radius: baseRadius,
        baseRadius,
        alpha: Math.random() * 0.6 + 0.25,
        alphaSpeed: Math.random() * 0.025 + 0.008,
        alphaPhase: Math.random() * Math.PI * 2,
        vx,
        vy,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        hasSpikes,
      });
    }

    // Meteors
    const meteors: Meteor[] = [];
    let nextMeteorTime = performance.now() + 3000;

    const spawnMeteor = () => {
      const startX = Math.random() * width * 0.8 + width * 0.2;
      const startY = Math.random() * height * 0.35;
      const angle = (Math.PI / 180) * (215 + (Math.random() * 20 - 10));
      const speed = Math.random() * 9 + 11;
      const length = Math.random() * 110 + 85;

      const meteorColor = currentTheme === 'earth-horizon'
        ? 'rgba(186, 230, 253, '
        : currentTheme === 'cyber-obsidian'
        ? 'rgba(255, 255, 255, '
        : 'rgba(216, 180, 254, ';

      meteors.push({
        x: startX,
        y: startY,
        length,
        speed,
        angle,
        alpha: 0.9,
        decay: Math.random() * 0.018 + 0.014,
        color: meteorColor,
      });
    };

    // Parallax
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;
    let currentMouseX = width / 2;
    let currentMouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let isVisible = true;
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    let lastTime = performance.now();

    const render = (time: number) => {
      animationFrameId = requestAnimationFrame(render);
      if (!isVisible) return;

      const delta = Math.min(time - lastTime, 50);
      lastTime = time;

      // Mouse lerp
      currentMouseX += (targetMouseX - currentMouseX) * 0.025;
      currentMouseY += (targetMouseY - currentMouseY) * 0.025;

      const mouseNormX = (currentMouseX - width / 2) / width;
      const mouseNormY = (currentMouseY - height / 2) / height;

      const breathTime = time * 0.0005;
      const breathPulse = Math.sin(breathTime) * 0.03 + 1.0;

      // ── BACKGROUND BASE FILL PER THEME ──
      if (currentTheme === 'cyber-obsidian') {
        ctx.fillStyle = '#020306';
      } else if (currentTheme === 'earth-horizon') {
        ctx.fillStyle = '#03050B';
      } else if (currentTheme === 'constellation') {
        ctx.fillStyle = '#050711';
      } else {
        ctx.fillStyle = '#05070E';
      }
      ctx.fillRect(0, 0, width, height);

      // ── 1. THEME-SPECIFIC ATMOSPHERIC LIGHTING & NEBULAE ──
      if (currentTheme === 'deep-nebula') {
        // Nebula A: Major Radiant Celestial Core (Top-Right violet)
        const nebAX = width * 0.82 + mouseNormX * 35;
        const nebAY = height * 0.18 + mouseNormY * 35;
        const gradA = ctx.createRadialGradient(nebAX, nebAY, 20, nebAX, nebAY, width * 0.65 * breathPulse);
        gradA.addColorStop(0, 'rgba(168, 85, 247, 0.18)');
        gradA.addColorStop(0.25, 'rgba(139, 92, 246, 0.12)');
        gradA.addColorStop(0.55, 'rgba(99, 102, 241, 0.06)');
        gradA.addColorStop(1, 'rgba(5, 7, 14, 0)');
        ctx.fillStyle = gradA;
        ctx.fillRect(0, 0, width, height);

        // Nebula B: Atmospheric Deep Basin (Bottom-Left indigo)
        const nebBX = width * 0.18 - mouseNormX * 25;
        const nebBY = height * 0.82 - mouseNormY * 25;
        const gradB = ctx.createRadialGradient(nebBX, nebBY, 20, nebBX, nebBY, width * 0.55);
        gradB.addColorStop(0, 'rgba(99, 102, 241, 0.14)');
        gradB.addColorStop(0.4, 'rgba(79, 70, 229, 0.07)');
        gradB.addColorStop(1, 'rgba(5, 7, 14, 0)');
        ctx.fillStyle = gradB;
        ctx.fillRect(0, 0, width, height);

        // Nebula C: Mid-Center Starlight Dust Vein
        const nebCX = width * 0.5 + mouseNormX * 15;
        const nebCY = height * 0.45 + mouseNormY * 15;
        const gradC = ctx.createRadialGradient(nebCX, nebCY, 10, nebCX, nebCY, width * 0.4);
        gradC.addColorStop(0, 'rgba(216, 180, 254, 0.05)');
        gradC.addColorStop(0.6, 'rgba(147, 197, 253, 0.02)');
        gradC.addColorStop(1, 'rgba(5, 7, 14, 0)');
        ctx.fillStyle = gradC;
        ctx.fillRect(0, 0, width, height);

      } else if (currentTheme === 'earth-horizon') {
        // Majestic Earth Atmospheric Limb / Horizon across the bottom
        const horizonCenterY = height * 1.35 - mouseNormY * 20;
        const horizonCenterX = width * 0.5 + mouseNormX * 20;
        const radius = height * 0.75;

        // Radiant cyan ozone crest
        const earthGrad = ctx.createRadialGradient(
          horizonCenterX,
          horizonCenterY,
          radius * 0.82,
          horizonCenterX,
          horizonCenterY,
          radius * 1.25
        );
        earthGrad.addColorStop(0, 'rgba(14, 165, 233, 0.28)'); // Electric Cyan Rim
        earthGrad.addColorStop(0.25, 'rgba(37, 99, 235, 0.18)'); // Sapphire Exosphere
        earthGrad.addColorStop(0.55, 'rgba(30, 58, 138, 0.08)'); // Deep Ocean Indigo
        earthGrad.addColorStop(1, 'rgba(3, 5, 11, 0)');
        ctx.fillStyle = earthGrad;
        ctx.fillRect(0, 0, width, height);

        // Atmospheric Solar Ray (Upper East Dawn)
        const rayGrad = ctx.createRadialGradient(
          width * 0.85 + mouseNormX * 30,
          height * 0.85,
          10,
          width * 0.85,
          height * 0.85,
          width * 0.5
        );
        rayGrad.addColorStop(0, 'rgba(186, 230, 253, 0.15)');
        rayGrad.addColorStop(0.5, 'rgba(56, 189, 248, 0.05)');
        rayGrad.addColorStop(1, 'rgba(3, 5, 11, 0)');
        ctx.fillStyle = rayGrad;
        ctx.fillRect(0, 0, width, height);

      } else if (currentTheme === 'cyber-obsidian') {
        // Zero color clutter - pure precision crosshairs in the 4 corners
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
        ctx.lineWidth = 1;
        const m = 36;
        const s = 8;
        // Top Left
        ctx.beginPath(); ctx.moveTo(m - s, m); ctx.lineTo(m + s, m); ctx.moveTo(m, m - s); ctx.lineTo(m, m + s); ctx.stroke();
        // Top Right
        ctx.beginPath(); ctx.moveTo(width - m - s, m); ctx.lineTo(width - m + s, m); ctx.moveTo(width - m, m - s); ctx.lineTo(width - m, m + s); ctx.stroke();
        // Bottom Left
        ctx.beginPath(); ctx.moveTo(m - s, height - m); ctx.lineTo(m + s, height - m); ctx.moveTo(m, height - m - s); ctx.lineTo(m, height - m + s); ctx.stroke();
        // Bottom Right
        ctx.beginPath(); ctx.moveTo(width - m - s, height - m); ctx.lineTo(width - m + s, height - m); ctx.moveTo(width - m, height - m - s); ctx.lineTo(width - m, height - m + s); ctx.stroke();

      } else if (currentTheme === 'constellation') {
        // Astronomical celestial coordinates dial in the background
        const dialX = width * 0.5 + mouseNormX * 12;
        const dialY = height * 0.45 + mouseNormY * 12;
        const dialR = Math.min(width, height) * 0.32;

        ctx.strokeStyle = 'rgba(199, 210, 254, 0.04)';
        ctx.lineWidth = 0.75;
        ctx.beginPath();
        ctx.arc(dialX, dialY, dialR, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(dialX, dialY, dialR * 0.65, 0, Math.PI * 2);
        ctx.stroke();

        // Cross axes
        ctx.beginPath();
        ctx.moveTo(dialX - dialR * 1.1, dialY);
        ctx.lineTo(dialX + dialR * 1.1, dialY);
        ctx.moveTo(dialX, dialY - dialR * 1.1);
        ctx.lineTo(dialX, dialY + dialR * 1.1);
        ctx.stroke();
      }

      // Subtle Viewport Vignette
      const vigGrad = ctx.createRadialGradient(width / 2, height / 2, width * 0.35, width / 2, height / 2, width * 0.75);
      vigGrad.addColorStop(0, 'rgba(5, 7, 14, 0)');
      vigGrad.addColorStop(1, 'rgba(3, 4, 9, 0.55)');
      ctx.fillStyle = vigGrad;
      ctx.fillRect(0, 0, width, height);

      // ── 2. LIVING STARS & CONSTELLATIONS ──
      const midStars: { x: number; y: number; alpha: number }[] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx * (delta / 16);
          p.y += p.vy * (delta / 16);
          p.alphaPhase += p.alphaSpeed * (delta / 16);

          if (p.x < -20) p.x = width + 20;
          if (p.x > width + 20) p.x = -20;
          if (p.y < -20) p.y = height + 20;
          if (p.y > height + 20) p.y = -20;
        }

        const parallaxFactor = p.z === 2 ? 26 : p.z === 1 ? 14 : 7;
        const drawX = p.x + mouseNormX * parallaxFactor;
        const drawY = p.y + mouseNormY * parallaxFactor;

        const twinkle = Math.sin(p.alphaPhase);
        const currentAlpha = Math.min(1, Math.max(0.12, p.alpha + twinkle * 0.35));

        if (p.z >= 1) {
          midStars.push({ x: drawX, y: drawY, alpha: currentAlpha });
        }

        ctx.beginPath();
        ctx.arc(drawX, drawY, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${currentAlpha.toFixed(3)})`;
        ctx.fill();

        if (p.radius > 1.0 && currentTheme !== 'cyber-obsidian') {
          ctx.beginPath();
          ctx.arc(drawX, drawY, p.radius * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${(currentAlpha * 0.28).toFixed(3)})`;
          ctx.fill();
        }

        // 4-point cross diffraction spikes on radiant anchors
        if (p.hasSpikes && currentAlpha > 0.45 && currentTheme !== 'cyber-obsidian') {
          const spikeLen = p.radius * 6.5;
          ctx.strokeStyle = `rgba(255, 255, 255, ${(currentAlpha * 0.42).toFixed(3)})`;
          ctx.lineWidth = 0.75;

          ctx.beginPath();
          ctx.moveTo(drawX - spikeLen, drawY);
          ctx.lineTo(drawX + spikeLen, drawY);
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(drawX, drawY - spikeLen);
          ctx.lineTo(drawX, drawY + spikeLen);
          ctx.stroke();
        }
      }

      // Constellation link filaments (prominent in constellation & deep-nebula)
      if (currentTheme === 'constellation' || currentTheme === 'deep-nebula') {
        const maxConnectDist = currentTheme === 'constellation' ? 140 : 110;
        const filamentColor = currentTheme === 'constellation' ? 'rgba(199, 210, 254, ' : 'rgba(196, 181, 253, ';

        for (let i = 0; i < midStars.length; i++) {
          for (let j = i + 1; j < midStars.length; j++) {
            const s1 = midStars[i];
            const s2 = midStars[j];
            const dx = s1.x - s2.x;
            const dy = s1.y - s2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < maxConnectDist) {
              const lineAlpha = (1 - dist / maxConnectDist) * 0.14 * Math.min(s1.alpha, s2.alpha);
              if (lineAlpha > 0.01) {
                ctx.beginPath();
                ctx.moveTo(s1.x, s1.y);
                ctx.lineTo(s2.x, s2.y);
                ctx.strokeStyle = `${filamentColor}${lineAlpha.toFixed(3)})`;
                ctx.lineWidth = 0.6;
                ctx.stroke();
              }
            }
          }
        }
      }

      // ── 3. METEORS / SHOOTING STARS ──
      if (!prefersReducedMotion && time > nextMeteorTime) {
        spawnMeteor();
        nextMeteorTime = time + Math.random() * 9000 + 11000;
      }

      for (let m = meteors.length - 1; m >= 0; m--) {
        const meteor = meteors[m];

        meteor.x += Math.cos(meteor.angle) * meteor.speed * (delta / 16);
        meteor.y += Math.sin(meteor.angle) * meteor.speed * (delta / 16);
        meteor.alpha -= meteor.decay * (delta / 16);

        if (meteor.alpha <= 0 || meteor.x < -100 || meteor.y > height + 100) {
          meteors.splice(m, 1);
          continue;
        }

        const tailX = meteor.x - Math.cos(meteor.angle) * meteor.length;
        const tailY = meteor.y - Math.sin(meteor.angle) * meteor.length;

        const meteorGrad = ctx.createLinearGradient(tailX, tailY, meteor.x, meteor.y);
        meteorGrad.addColorStop(0, 'rgba(255, 255, 255, 0)');
        meteorGrad.addColorStop(0.7, `${meteor.color}${(meteor.alpha * 0.4).toFixed(3)})`);
        meteorGrad.addColorStop(1, `rgba(255, 255, 255, ${meteor.alpha.toFixed(3)})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(meteor.x, meteor.y);
        ctx.strokeStyle = meteorGrad;
        ctx.lineWidth = 1.6;
        ctx.lineCap = 'round';
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(meteor.x, meteor.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${meteor.alpha.toFixed(3)})`;
        ctx.fill();
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [currentTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 1 }}
      aria-hidden="true"
    />
  );
};
