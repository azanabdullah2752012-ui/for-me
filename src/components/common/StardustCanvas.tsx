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
      'sonoma-amber': [
        'rgba(255, 255, 255, ',
        'rgba(254, 240, 138, ',
        'rgba(253, 224, 71, ',
        'rgba(251, 191, 36, ',
        'rgba(245, 158, 11, ',
      ],
      'nordic-aurora': [
        'rgba(255, 255, 255, ',
        'rgba(209, 250, 229, ',
        'rgba(167, 243, 208, ',
        'rgba(110, 231, 183, ',
        'rgba(52, 211, 153, ',
      ],
      'rose-eclipse': [
        'rgba(255, 255, 255, ',
        'rgba(255, 228, 230, ',
        'rgba(254, 205, 211, ',
        'rgba(251, 113, 133, ',
        'rgba(244, 63, 94, ',
      ],
      'graphite-titanium': [
        'rgba(255, 255, 255, ',
        'rgba(248, 250, 252, ',
        'rgba(241, 245, 249, ',
        'rgba(226, 232, 240, ',
        'rgba(203, 213, 225, ',
      ],
      'earth-horizon': [
        'rgba(255, 255, 255, ',
        'rgba(224, 242, 254, ',
        'rgba(186, 230, 253, ',
        'rgba(125, 211, 252, ',
        'rgba(147, 197, 253, ',
      ],
      'solar-flare': [
        'rgba(255, 255, 255, ',
        'rgba(254, 215, 170, ',
        'rgba(253, 186, 116, ',
        'rgba(251, 146, 60, ',
        'rgba(249, 115, 22, ',
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
      'abyssal-ocean': [
        'rgba(255, 255, 255, ',
        'rgba(224, 242, 254, ',
        'rgba(186, 230, 253, ',
        'rgba(56, 189, 248, ',
        'rgba(14, 165, 233, ',
      ],
    };

    const starColors = themeStarColors[currentTheme] || themeStarColors['deep-nebula'];

    // Multi-plane particle population
    const particles: Particle[] = [];
    const count = currentTheme === 'constellation'
      ? Math.min(180, Math.floor((width * height) / 9000))
      : currentTheme === 'cyber-obsidian'
      ? Math.min(110, Math.floor((width * height) / 15000))
      : Math.min(150, Math.floor((width * height) / 11000));

    for (let i = 0; i < count; i++) {
      const rand = Math.random();
      let z = 0;
      let baseRadius = Math.random() * 0.7 + 0.35;
      let hasSpikes = false;

      if (rand > 0.88 && currentTheme !== 'cyber-obsidian') {
        z = 2;
        baseRadius = Math.random() * 1.1 + 1.5;
        hasSpikes = true;
      } else if (rand > 0.60) {
        z = 1;
        baseRadius = Math.random() * 0.8 + 0.85;
      }

      // Drift velocities
      let vx = (Math.random() - 0.5) * (0.04 + z * 0.04);
      let vy = -Math.random() * (0.04 + z * 0.04) - 0.015;

      if (currentTheme === 'earth-horizon') {
        vx = Math.random() * 0.07 + 0.02 + z * 0.03;
        vy = -Math.random() * 0.025 - 0.01;
      } else if (currentTheme === 'constellation') {
        vx = (Math.random() - 0.5) * 0.025;
        vy = (Math.random() - 0.5) * 0.025;
      }

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z,
        radius: baseRadius,
        baseRadius,
        alpha: Math.random() * 0.6 + 0.3,
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
    let nextMeteorTime = performance.now() + 2500;

    const spawnMeteor = () => {
      const startX = Math.random() * width * 0.85 + width * 0.15;
      const startY = Math.random() * height * 0.3;
      const angle = (Math.PI / 180) * (215 + (Math.random() * 20 - 10));
      const speed = Math.random() * 9 + 12;
      const length = Math.random() * 120 + 90;

      const meteorColor =
        currentTheme === 'earth-horizon'
          ? 'rgba(186, 230, 253, '
          : currentTheme === 'cyber-obsidian'
          ? 'rgba(255, 255, 255, '
          : currentTheme === 'sonoma-amber' || currentTheme === 'solar-flare'
          ? 'rgba(253, 224, 71, '
          : currentTheme === 'nordic-aurora'
          ? 'rgba(110, 231, 183, '
          : currentTheme === 'rose-eclipse'
          ? 'rgba(253, 164, 175, '
          : currentTheme === 'graphite-titanium'
          ? 'rgba(226, 232, 240, '
          : currentTheme === 'abyssal-ocean'
          ? 'rgba(56, 189, 248, '
          : 'rgba(216, 180, 254, ';

      meteors.push({
        x: startX,
        y: startY,
        length,
        speed,
        angle,
        alpha: 0.95,
        decay: Math.random() * 0.018 + 0.012,
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
      const waveT = time * 0.00035;

      // ── 1. BACKGROUND BASE VOID FILL ──
      if (currentTheme === 'cyber-obsidian') {
        ctx.fillStyle = '#020306';
      } else if (currentTheme === 'sonoma-amber') {
        ctx.fillStyle = '#0a0604';
      } else if (currentTheme === 'nordic-aurora') {
        ctx.fillStyle = '#030807';
      } else if (currentTheme === 'rose-eclipse') {
        ctx.fillStyle = '#0a0306';
      } else if (currentTheme === 'graphite-titanium') {
        ctx.fillStyle = '#07080a';
      } else if (currentTheme === 'earth-horizon') {
        ctx.fillStyle = '#03050c';
      } else if (currentTheme === 'solar-flare') {
        ctx.fillStyle = '#0a0502';
      } else if (currentTheme === 'abyssal-ocean') {
        ctx.fillStyle = '#02070f';
      } else if (currentTheme === 'constellation') {
        ctx.fillStyle = '#050713';
      } else {
        ctx.fillStyle = '#060812';
      }
      ctx.fillRect(0, 0, width, height);

      // ── 2. SCULPTURAL ORGANIC RIBBON WAVES (Apple Sonoma/Ventura Dimensional Folds) ──
      const waveThemeStyles: Record<
        string,
        {
          grad1: [string, string, string, string];
          stroke1: string;
          grad2: [string, string, string, string];
          stroke2: string;
          grad3: [string, string, string];
          stroke3: string;
        }
      > = {
        'deep-nebula': {
          grad1: ['rgba(88, 28, 135, 0.22)', 'rgba(67, 56, 202, 0.14)', 'rgba(15, 23, 42, 0.28)', 'rgba(6, 8, 18, 0)'],
          stroke1: 'rgba(192, 132, 252, 0.18)',
          grad2: ['rgba(139, 92, 246, 0.25)', 'rgba(99, 102, 241, 0.16)', 'rgba(30, 27, 75, 0.35)', 'rgba(6, 8, 18, 0)'],
          stroke2: 'rgba(216, 180, 254, 0.32)',
          grad3: ['rgba(56, 189, 248, 0.12)', 'rgba(129, 140, 248, 0.10)', 'rgba(6, 8, 18, 0)'],
          stroke3: 'rgba(186, 230, 253, 0.22)',
        },
        'sonoma-amber': {
          grad1: ['rgba(180, 83, 9, 0.25)', 'rgba(120, 53, 15, 0.18)', 'rgba(69, 26, 3, 0.35)', 'rgba(10, 6, 4, 0)'],
          stroke1: 'rgba(251, 191, 36, 0.24)',
          grad2: ['rgba(217, 119, 6, 0.28)', 'rgba(245, 158, 11, 0.18)', 'rgba(67, 20, 7, 0.40)', 'rgba(10, 6, 4, 0)'],
          stroke2: 'rgba(252, 211, 77, 0.38)',
          grad3: ['rgba(245, 158, 11, 0.15)', 'rgba(251, 146, 60, 0.10)', 'rgba(10, 6, 4, 0)'],
          stroke3: 'rgba(254, 243, 199, 0.25)',
        },
        'nordic-aurora': {
          grad1: ['rgba(6, 78, 59, 0.28)', 'rgba(4, 47, 46, 0.20)', 'rgba(2, 44, 34, 0.38)', 'rgba(3, 8, 7, 0)'],
          stroke1: 'rgba(52, 211, 153, 0.22)',
          grad2: ['rgba(16, 185, 129, 0.26)', 'rgba(20, 184, 166, 0.18)', 'rgba(6, 78, 59, 0.36)', 'rgba(3, 8, 7, 0)'],
          stroke2: 'rgba(110, 231, 183, 0.38)',
          grad3: ['rgba(45, 212, 191, 0.15)', 'rgba(56, 189, 248, 0.10)', 'rgba(3, 8, 7, 0)'],
          stroke3: 'rgba(167, 243, 208, 0.25)',
        },
        'rose-eclipse': {
          grad1: ['rgba(136, 19, 55, 0.28)', 'rgba(76, 5, 25, 0.20)', 'rgba(38, 2, 13, 0.40)', 'rgba(10, 3, 6, 0)'],
          stroke1: 'rgba(251, 113, 133, 0.22)',
          grad2: ['rgba(225, 29, 72, 0.25)', 'rgba(190, 18, 60, 0.18)', 'rgba(136, 19, 55, 0.35)', 'rgba(10, 3, 6, 0)'],
          stroke2: 'rgba(253, 164, 175, 0.36)',
          grad3: ['rgba(244, 114, 182, 0.14)', 'rgba(251, 113, 133, 0.10)', 'rgba(10, 3, 6, 0)'],
          stroke3: 'rgba(254, 205, 211, 0.24)',
        },
        'graphite-titanium': {
          grad1: ['rgba(51, 65, 85, 0.24)', 'rgba(30, 41, 59, 0.18)', 'rgba(15, 23, 42, 0.38)', 'rgba(7, 8, 10, 0)'],
          stroke1: 'rgba(203, 213, 225, 0.20)',
          grad2: ['rgba(71, 85, 105, 0.22)', 'rgba(100, 116, 139, 0.15)', 'rgba(30, 41, 59, 0.35)', 'rgba(7, 8, 10, 0)'],
          stroke2: 'rgba(248, 250, 252, 0.32)',
          grad3: ['rgba(148, 163, 184, 0.12)', 'rgba(203, 213, 225, 0.08)', 'rgba(7, 8, 10, 0)'],
          stroke3: 'rgba(241, 245, 249, 0.22)',
        },
        'constellation': {
          grad1: ['rgba(49, 46, 129, 0.20)', 'rgba(30, 27, 75, 0.14)', 'rgba(15, 23, 42, 0.28)', 'rgba(5, 7, 19, 0)'],
          stroke1: 'rgba(165, 180, 252, 0.16)',
          grad2: ['rgba(99, 102, 241, 0.22)', 'rgba(79, 70, 229, 0.14)', 'rgba(30, 27, 75, 0.32)', 'rgba(5, 7, 19, 0)'],
          stroke2: 'rgba(199, 210, 254, 0.28)',
          grad3: ['rgba(56, 189, 248, 0.10)', 'rgba(129, 140, 248, 0.08)', 'rgba(5, 7, 19, 0)'],
          stroke3: 'rgba(186, 230, 253, 0.18)',
        },
      };

      const activeWaveStyle = waveThemeStyles[currentTheme];

      if (activeWaveStyle) {
        // Wave Layer 1: Deep Sculptural Base Fold (Back Flow)
        ctx.save();
        ctx.beginPath();
        const yOffset1 = height * 0.48 + Math.sin(waveT * 0.8) * 35 + mouseNormY * 25;
        ctx.moveTo(0, height);
        ctx.lineTo(0, yOffset1);
        ctx.bezierCurveTo(
          width * 0.28,
          yOffset1 - height * 0.28 + Math.cos(waveT * 0.9) * 25,
          width * 0.65,
          yOffset1 + height * 0.22 + Math.sin(waveT * 1.1) * 30,
          width,
          yOffset1 - height * 0.12
        );
        ctx.lineTo(width, height);
        ctx.closePath();

        const waveGrad1 = ctx.createLinearGradient(0, yOffset1 - 100, width, height);
        waveGrad1.addColorStop(0, activeWaveStyle.grad1[0]);
        waveGrad1.addColorStop(0.4, activeWaveStyle.grad1[1]);
        waveGrad1.addColorStop(0.8, activeWaveStyle.grad1[2]);
        waveGrad1.addColorStop(1, activeWaveStyle.grad1[3]);
        ctx.fillStyle = waveGrad1;
        ctx.fill();

        // Wave Layer 1 Crest Highlight
        ctx.strokeStyle = activeWaveStyle.stroke1;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.restore();

        // Wave Layer 2: Silky Flowing Dimensional Ribbon (Mid Flow)
        ctx.save();
        ctx.beginPath();
        const yOffset2 = height * 0.62 + Math.cos(waveT * 0.7) * 40 - mouseNormY * 30;
        ctx.moveTo(0, height);
        ctx.lineTo(0, yOffset2 + 40);
        ctx.bezierCurveTo(
          width * 0.32,
          yOffset2 + height * 0.18 + Math.sin(waveT * 0.85) * 35,
          width * 0.72,
          yOffset2 - height * 0.24 + Math.cos(waveT * 1.05) * 28,
          width,
          yOffset2 + 10
        );
        ctx.lineTo(width, height);
        ctx.closePath();

        const waveGrad2 = ctx.createLinearGradient(width * 0.2, yOffset2 - 80, width * 0.8, height);
        waveGrad2.addColorStop(0, activeWaveStyle.grad2[0]);
        waveGrad2.addColorStop(0.35, activeWaveStyle.grad2[1]);
        waveGrad2.addColorStop(0.75, activeWaveStyle.grad2[2]);
        waveGrad2.addColorStop(1, activeWaveStyle.grad2[3]);
        ctx.fillStyle = waveGrad2;
        ctx.fill();

        // Wave Layer 2 Luminous Crest Edge
        ctx.strokeStyle = activeWaveStyle.stroke2;
        ctx.lineWidth = 2.0;
        ctx.stroke();
        ctx.restore();

        // Wave Layer 3: Subtle Translucent Fore-Ribbon (Bottom Front)
        ctx.save();
        ctx.beginPath();
        const yOffset3 = height * 0.78 + Math.sin(waveT * 0.95) * 25 + mouseNormY * 15;
        ctx.moveTo(0, height);
        ctx.lineTo(0, yOffset3);
        ctx.bezierCurveTo(
          width * 0.38,
          yOffset3 - height * 0.14 + Math.cos(waveT * 1.2) * 20,
          width * 0.68,
          yOffset3 + height * 0.08 + Math.sin(waveT * 0.75) * 22,
          width,
          yOffset3 - 20
        );
        ctx.lineTo(width, height);
        ctx.closePath();

        const waveGrad3 = ctx.createLinearGradient(0, yOffset3, width, height);
        waveGrad3.addColorStop(0, activeWaveStyle.grad3[0]);
        waveGrad3.addColorStop(0.5, activeWaveStyle.grad3[1]);
        waveGrad3.addColorStop(1, activeWaveStyle.grad3[2]);
        ctx.fillStyle = waveGrad3;
        ctx.fill();

        // Wave Layer 3 Fine Edge
        ctx.strokeStyle = activeWaveStyle.stroke3;
        ctx.lineWidth = 1.0;
        ctx.stroke();
        ctx.restore();
      }

      // ── 3. VOLUMETRIC DIRECTIONAL CELESTIAL GLOW & LIGHT CORE ──
      if (currentTheme === 'deep-nebula') {
        // Major Radiant Starlight Core (Upper-Right directional rake)
        const nebAX = width * 0.82 + mouseNormX * 35;
        const nebAY = height * 0.15 + mouseNormY * 35;
        const gradA = ctx.createRadialGradient(nebAX, nebAY, 20, nebAX, nebAY, width * 0.65 * breathPulse);
        gradA.addColorStop(0, 'rgba(192, 132, 252, 0.22)');
        gradA.addColorStop(0.25, 'rgba(139, 92, 246, 0.14)');
        gradA.addColorStop(0.55, 'rgba(99, 102, 241, 0.06)');
        gradA.addColorStop(1, 'rgba(6, 8, 18, 0)');
        ctx.fillStyle = gradA;
        ctx.fillRect(0, 0, width, height);

        // Radiant Light Ray Sweep (Cosmic Dawn Beam)
        ctx.save();
        ctx.translate(nebAX, nebAY);
        ctx.rotate(-0.35 + Math.sin(waveT * 0.4) * 0.05);
        const rayGrad = ctx.createLinearGradient(0, 0, -width * 0.9, height * 0.8);
        rayGrad.addColorStop(0, 'rgba(216, 180, 254, 0.12)');
        rayGrad.addColorStop(0.3, 'rgba(168, 85, 247, 0.05)');
        rayGrad.addColorStop(0.7, 'rgba(99, 102, 241, 0.01)');
        rayGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = rayGrad;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-width * 0.9, height * 0.5);
        ctx.lineTo(-width * 0.9, height * 1.1);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        // Nebula Basin (Bottom-Left indigo warmth)
        const nebBX = width * 0.16 - mouseNormX * 25;
        const nebBY = height * 0.85 - mouseNormY * 25;
        const gradB = ctx.createRadialGradient(nebBX, nebBY, 20, nebBX, nebBY, width * 0.55);
        gradB.addColorStop(0, 'rgba(99, 102, 241, 0.16)');
        gradB.addColorStop(0.4, 'rgba(79, 70, 229, 0.08)');
        gradB.addColorStop(1, 'rgba(6, 8, 18, 0)');
        ctx.fillStyle = gradB;
        ctx.fillRect(0, 0, width, height);

      } else if (currentTheme === 'sonoma-amber') {
        // Golden-hour sunbeam rake sweeping down across the amber dunes
        const sunX = width * 0.85 + mouseNormX * 30;
        const sunY = height * 0.12 + mouseNormY * 30;
        const sunGrad = ctx.createRadialGradient(sunX, sunY, 20, sunX, sunY, width * 0.65 * breathPulse);
        sunGrad.addColorStop(0, 'rgba(251, 191, 36, 0.24)');
        sunGrad.addColorStop(0.3, 'rgba(245, 158, 11, 0.14)');
        sunGrad.addColorStop(0.65, 'rgba(180, 83, 9, 0.05)');
        sunGrad.addColorStop(1, 'rgba(10, 6, 4, 0)');
        ctx.fillStyle = sunGrad;
        ctx.fillRect(0, 0, width, height);

        // Volumetric Sunbeam Sweep
        ctx.save();
        ctx.translate(sunX, sunY);
        ctx.rotate(-0.40 + Math.sin(waveT * 0.35) * 0.04);
        const rayGrad = ctx.createLinearGradient(0, 0, -width * 0.95, height * 0.85);
        rayGrad.addColorStop(0, 'rgba(254, 243, 199, 0.14)');
        rayGrad.addColorStop(0.35, 'rgba(251, 191, 36, 0.06)');
        rayGrad.addColorStop(0.7, 'rgba(217, 119, 6, 0.02)');
        rayGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = rayGrad;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-width * 0.95, height * 0.45);
        ctx.lineTo(-width * 0.95, height * 1.05);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

      } else if (currentTheme === 'nordic-aurora') {
        // Polar Aurora Curtain across the upper sky
        const auroraX = width * 0.35 + mouseNormX * 25;
        const auroraY = height * 0.18 + mouseNormY * 25;
        const auroraGrad = ctx.createRadialGradient(auroraX, auroraY, 30, auroraX, auroraY, width * 0.7 * breathPulse);
        auroraGrad.addColorStop(0, 'rgba(52, 211, 153, 0.22)');
        auroraGrad.addColorStop(0.3, 'rgba(16, 185, 129, 0.14)');
        auroraGrad.addColorStop(0.6, 'rgba(4, 120, 87, 0.05)');
        auroraGrad.addColorStop(1, 'rgba(3, 8, 7, 0)');
        ctx.fillStyle = auroraGrad;
        ctx.fillRect(0, 0, width, height);

      } else if (currentTheme === 'rose-eclipse') {
        // Luxury Crimson & Rose Gold Corona
        const eclipseX = width * 0.75 + mouseNormX * 25;
        const eclipseY = height * 0.22 + mouseNormY * 25;
        const eclipseGrad = ctx.createRadialGradient(eclipseX, eclipseY, 20, eclipseX, eclipseY, width * 0.6 * breathPulse);
        eclipseGrad.addColorStop(0, 'rgba(251, 113, 133, 0.22)');
        eclipseGrad.addColorStop(0.3, 'rgba(225, 29, 72, 0.15)');
        eclipseGrad.addColorStop(0.6, 'rgba(136, 19, 55, 0.06)');
        eclipseGrad.addColorStop(1, 'rgba(10, 3, 6, 0)');
        ctx.fillStyle = eclipseGrad;
        ctx.fillRect(0, 0, width, height);

      } else if (currentTheme === 'graphite-titanium') {
        // Monochromatic Studio Top-Down Softbox Light
        const studioGrad = ctx.createLinearGradient(width / 2, 0, width / 2, height);
        studioGrad.addColorStop(0, 'rgba(248, 250, 252, 0.07)');
        studioGrad.addColorStop(0.4, 'rgba(148, 163, 184, 0.03)');
        studioGrad.addColorStop(1, 'rgba(7, 8, 10, 0)');
        ctx.fillStyle = studioGrad;
        ctx.fillRect(0, 0, width, height);

      } else if (currentTheme === 'solar-flare') {
        // Giant Solar Corona Arc & Flare Flare Core
        const sunCX = width * 0.15 + mouseNormX * 25;
        const sunCY = height * 0.15 + mouseNormY * 25;
        const sunR = Math.min(width, height) * 0.42;

        const solarGrad = ctx.createRadialGradient(sunCX, sunCY, sunR * 0.3, sunCX, sunCY, sunR * 1.6);
        solarGrad.addColorStop(0, 'rgba(255, 237, 213, 0.35)');
        solarGrad.addColorStop(0.2, 'rgba(251, 146, 60, 0.24)');
        solarGrad.addColorStop(0.5, 'rgba(234, 88, 12, 0.12)');
        solarGrad.addColorStop(1, 'rgba(10, 5, 2, 0)');
        ctx.fillStyle = solarGrad;
        ctx.fillRect(0, 0, width, height);

        // Radiant Solar Wind Rays
        ctx.save();
        ctx.translate(sunCX, sunCY);
        ctx.rotate(time * 0.0001);
        for (let a = 0; a < Math.PI * 2; a += Math.PI / 8) {
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(Math.cos(a) * width * 1.2, Math.sin(a) * width * 1.2);
          ctx.strokeStyle = 'rgba(251, 146, 60, 0.035)';
          ctx.lineWidth = 18;
          ctx.stroke();
        }
        ctx.restore();

      } else if (currentTheme === 'abyssal-ocean') {
        // Mariana Deep Oceanic Trench Caustics & Downward Light Shafts
        const oceanGrad = ctx.createLinearGradient(width / 2, 0, width / 2, height);
        oceanGrad.addColorStop(0, 'rgba(14, 165, 233, 0.18)');
        oceanGrad.addColorStop(0.35, 'rgba(2, 132, 199, 0.10)');
        oceanGrad.addColorStop(0.8, 'rgba(3, 105, 161, 0.04)');
        oceanGrad.addColorStop(1, 'rgba(2, 7, 15, 0)');
        ctx.fillStyle = oceanGrad;
        ctx.fillRect(0, 0, width, height);

        // Ambient bioluminescent light pool
        const bioGrad = ctx.createRadialGradient(width * 0.5 + mouseNormX * 20, height * 0.75, 40, width * 0.5, height * 0.75, width * 0.55);
        bioGrad.addColorStop(0, 'rgba(56, 189, 248, 0.12)');
        bioGrad.addColorStop(0.5, 'rgba(14, 165, 233, 0.04)');
        bioGrad.addColorStop(1, 'rgba(2, 7, 15, 0)');
        ctx.fillStyle = bioGrad;
        ctx.fillRect(0, 0, width, height);

      } else if (currentTheme === 'earth-horizon') {
        // Majestic Earth Atmospheric Limb / Horizon across the bottom
        const horizonCenterY = height * 1.32 - mouseNormY * 20;
        const horizonCenterX = width * 0.5 + mouseNormX * 20;
        const radius = height * 0.78;

        // Radiant electric cyan ozone rim
        const earthGrad = ctx.createRadialGradient(
          horizonCenterX,
          horizonCenterY,
          radius * 0.82,
          horizonCenterX,
          horizonCenterY,
          radius * 1.25
        );
        earthGrad.addColorStop(0, 'rgba(14, 165, 233, 0.32)'); // Electric Cyan Rim
        earthGrad.addColorStop(0.25, 'rgba(37, 99, 235, 0.20)'); // Sapphire Exosphere
        earthGrad.addColorStop(0.55, 'rgba(30, 58, 138, 0.08)'); // Deep Ocean Indigo
        earthGrad.addColorStop(1, 'rgba(3, 5, 12, 0)');
        ctx.fillStyle = earthGrad;
        ctx.fillRect(0, 0, width, height);

        // Orbital Solar Dawn Ray
        const rayGrad = ctx.createRadialGradient(
          width * 0.85 + mouseNormX * 30,
          height * 0.82,
          10,
          width * 0.85,
          height * 0.82,
          width * 0.55
        );
        rayGrad.addColorStop(0, 'rgba(186, 230, 253, 0.18)');
        rayGrad.addColorStop(0.5, 'rgba(56, 189, 248, 0.06)');
        rayGrad.addColorStop(1, 'rgba(3, 5, 12, 0)');
        ctx.fillStyle = rayGrad;
        ctx.fillRect(0, 0, width, height);

      } else if (currentTheme === 'cyber-obsidian') {
        // Minimal architectural grid coordinates & corner crosses
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.07)';
        ctx.lineWidth = 1;
        const m = 40;
        const s = 10;
        // Top Left
        ctx.beginPath(); ctx.moveTo(m - s, m); ctx.lineTo(m + s, m); ctx.moveTo(m, m - s); ctx.lineTo(m, m + s); ctx.stroke();
        // Top Right
        ctx.beginPath(); ctx.moveTo(width - m - s, m); ctx.lineTo(width - m + s, m); ctx.moveTo(width - m, m - s); ctx.lineTo(width - m, m + s); ctx.stroke();
        // Bottom Left
        ctx.beginPath(); ctx.moveTo(m - s, height - m); ctx.lineTo(m + s, height - m); ctx.moveTo(m, height - m - s); ctx.lineTo(m, height - m + s); ctx.stroke();
        // Bottom Right
        ctx.beginPath(); ctx.moveTo(width - m - s, height - m); ctx.lineTo(width - m + s, height - m); ctx.moveTo(width - m, height - m - s); ctx.lineTo(width - m, height - m + s); ctx.stroke();

        // Subtle center telemetry crosshair
        const cX = width / 2;
        const cY = height / 2;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
        ctx.beginPath();
        ctx.moveTo(cX - 30, cY); ctx.lineTo(cX + 30, cY);
        ctx.moveTo(cX, cY - 30); ctx.lineTo(cX, cY + 30);
        ctx.stroke();

      } else if (currentTheme === 'constellation') {
        // Astronomical Celestial Astrolabe / Coordinate Rings in the background
        const dialX = width * 0.5 + mouseNormX * 12;
        const dialY = height * 0.38 + mouseNormY * 12;
        const dialR = Math.min(width, height) * 0.36;

        ctx.strokeStyle = 'rgba(199, 210, 254, 0.06)';
        ctx.lineWidth = 0.75;

        // Outer Ring
        ctx.beginPath();
        ctx.arc(dialX, dialY, dialR, 0, Math.PI * 2);
        ctx.stroke();

        // Inner Dashed Orbit
        ctx.save();
        ctx.setLineDash([4, 8]);
        ctx.beginPath();
        ctx.arc(dialX, dialY, dialR * 0.72, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();

        // Core Center Ring
        ctx.beginPath();
        ctx.arc(dialX, dialY, dialR * 0.42, 0, Math.PI * 2);
        ctx.stroke();

        // Slow Revolving Celestial Orbit Marker
        const orbitAngle = time * 0.0002;
        const markerX = dialX + Math.cos(orbitAngle) * dialR * 0.72;
        const markerY = dialY + Math.sin(orbitAngle) * dialR * 0.72;
        ctx.beginPath();
        ctx.arc(markerX, markerY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(165, 180, 252, 0.6)';
        ctx.fill();

        // Degree tick marks on outer ring
        for (let a = 0; a < Math.PI * 2; a += Math.PI / 12) {
          const t1 = dialR - 4;
          const t2 = dialR + 4;
          ctx.beginPath();
          ctx.moveTo(dialX + Math.cos(a) * t1, dialY + Math.sin(a) * t1);
          ctx.lineTo(dialX + Math.cos(a) * t2, dialY + Math.sin(a) * t2);
          ctx.stroke();
        }
      }

      // Viewport Soft Ambient Vignette
      const vigGrad = ctx.createRadialGradient(width / 2, height / 2, width * 0.35, width / 2, height / 2, width * 0.75);
      vigGrad.addColorStop(0, 'rgba(6, 8, 18, 0)');
      vigGrad.addColorStop(1, 'rgba(2, 3, 8, 0.55)');
      ctx.fillStyle = vigGrad;
      ctx.fillRect(0, 0, width, height);

      // ── 4. LIVING STARS & DIFFRACTION SPIKES ──
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

        const parallaxFactor = p.z === 2 ? 28 : p.z === 1 ? 15 : 7;
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
          ctx.arc(drawX, drawY, p.radius * 3.0, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${(currentAlpha * 0.30).toFixed(3)})`;
          ctx.fill();
        }

        // 4-point cross diffraction spikes on radiant anchors
        if (p.hasSpikes && currentAlpha > 0.42 && currentTheme !== 'cyber-obsidian') {
          const spikeLen = p.radius * 7.0;
          ctx.strokeStyle = `rgba(255, 255, 255, ${(currentAlpha * 0.45).toFixed(3)})`;
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

      // Constellation link filaments
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

      // ── 5. METEORS / SHOOTING STARS ──
      if (!prefersReducedMotion && time > nextMeteorTime) {
        spawnMeteor();
        nextMeteorTime = time + Math.random() * 8000 + 9000;
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
        meteorGrad.addColorStop(0.7, `${meteor.color}${(meteor.alpha * 0.45).toFixed(3)})`);
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
