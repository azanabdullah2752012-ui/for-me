import React, { useEffect, useRef } from 'react';
import { WallpaperTheme } from '../../types';
import { useData } from '../../context/DataContext';

interface Particle {
  x: number;
  y: number;
  z: number;
  radius: number;
  alpha: number;
  alphaSpeed: number;
  alphaPhase: number;
  vx: number;
  vy: number;
  color: string;
}

interface StardustCanvasProps {
  theme?: WallpaperTheme;
}

export const StardustCanvas: React.FC<StardustCanvasProps> = ({ theme: propTheme }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { settings } = useData();
  const currentTheme: WallpaperTheme = propTheme || settings.wallpaperTheme || 'sonoma-amber';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    // Palette per theme
    const themeStarColors: Record<WallpaperTheme, string[]> = {
      'sonoma-amber': [
        'rgba(255, 255, 255, ',
        'rgba(254, 240, 138, ',
        'rgba(253, 224, 71, ',
        'rgba(251, 191, 36, ',
        'rgba(245, 158, 11, ',
      ],
      'deep-nebula': [
        'rgba(255, 255, 255, ',
        'rgba(216, 180, 254, ',
        'rgba(168, 85, 247, ',
        'rgba(129, 140, 248, ',
        'rgba(147, 197, 253, ',
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

    const starColors = themeStarColors[currentTheme] || themeStarColors['sonoma-amber'];

    // Particles population
    const particles: Particle[] = [];
    const count = Math.min(110, Math.floor((width * height) / 12000));

    for (let i = 0; i < count; i++) {
      const z = Math.random() > 0.8 ? 2 : Math.random() > 0.4 ? 1 : 0;
      const baseRadius = Math.random() * 0.9 + (z === 2 ? 1.3 : 0.4);
      const color = starColors[Math.floor(Math.random() * starColors.length)];

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z,
        radius: baseRadius,
        alpha: Math.random() * 0.45 + 0.15,
        alphaSpeed: Math.random() * 0.012 + 0.005,
        alphaPhase: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        color,
      });
    }

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

      currentMouseX += (targetMouseX - currentMouseX) * 0.025;
      currentMouseY += (targetMouseY - currentMouseY) * 0.025;

      const mouseNormX = (currentMouseX - width / 2) / width;
      const mouseNormY = (currentMouseY - height / 2) / height;

      const waveT = time * 0.00035;
      const breathPulse = Math.sin(time * 0.0005) * 0.04 + 1.0;

      // ── 1. RICH ATMOSPHERIC FULL-SCREEN GRADIENT BASE ──
      // Deep, luminous photographic ambient space
      let bgGrad = ctx.createRadialGradient(width * 0.5, height * 0.38, 40, width * 0.5, height * 0.5, Math.max(width, height) * 0.85);

      if (currentTheme === 'sonoma-amber') {
        bgGrad.addColorStop(0, '#361D0C');
        bgGrad.addColorStop(0.35, '#221207');
        bgGrad.addColorStop(0.7, '#140A04');
        bgGrad.addColorStop(1, '#0B0502');
      } else if (currentTheme === 'nordic-aurora') {
        bgGrad.addColorStop(0, '#103325');
        bgGrad.addColorStop(0.35, '#0B2017');
        bgGrad.addColorStop(0.7, '#06130E');
        bgGrad.addColorStop(1, '#030A07');
      } else if (currentTheme === 'rose-eclipse') {
        bgGrad.addColorStop(0, '#380E1C');
        bgGrad.addColorStop(0.35, '#240812');
        bgGrad.addColorStop(0.7, '#14040A');
        bgGrad.addColorStop(1, '#0A0205');
      } else if (currentTheme === 'earth-horizon') {
        bgGrad.addColorStop(0, '#102A52');
        bgGrad.addColorStop(0.35, '#0A1B35');
        bgGrad.addColorStop(0.7, '#060F1E');
        bgGrad.addColorStop(1, '#030810');
      } else if (currentTheme === 'solar-flare') {
        bgGrad.addColorStop(0, '#421B07');
        bgGrad.addColorStop(0.35, '#291004');
        bgGrad.addColorStop(0.7, '#160802');
        bgGrad.addColorStop(1, '#0C0401');
      } else if (currentTheme === 'deep-nebula') {
        bgGrad.addColorStop(0, '#2E1748');
        bgGrad.addColorStop(0.35, '#1B0D2C');
        bgGrad.addColorStop(0.7, '#10071B');
        bgGrad.addColorStop(1, '#08030E');
      } else if (currentTheme === 'abyssal-ocean') {
        bgGrad.addColorStop(0, '#0C304A');
        bgGrad.addColorStop(0.35, '#071F30');
        bgGrad.addColorStop(0.7, '#04111B');
        bgGrad.addColorStop(1, '#02090E');
      } else {
        // Graphite Titanium & Cyber Obsidian
        bgGrad.addColorStop(0, '#282F3A');
        bgGrad.addColorStop(0.35, '#191D24');
        bgGrad.addColorStop(0.7, '#101317');
        bgGrad.addColorStop(1, '#0A0B0E');
      }

      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // ── 1B. LUMINOUS CLOCK BACKLIGHT (Apple Lockscreen Aura) ──
      const auraGrad = ctx.createRadialGradient(
        width * 0.5 + mouseNormX * 30,
        height * 0.32 + mouseNormY * 20,
        20,
        width * 0.5,
        height * 0.35,
        Math.max(width, height) * 0.42
      );

      if (currentTheme === 'sonoma-amber') {
        auraGrad.addColorStop(0, 'rgba(245, 158, 11, 0.22)');
        auraGrad.addColorStop(0.45, 'rgba(217, 119, 6, 0.08)');
        auraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else if (currentTheme === 'nordic-aurora') {
        auraGrad.addColorStop(0, 'rgba(16, 185, 129, 0.22)');
        auraGrad.addColorStop(0.45, 'rgba(5, 150, 105, 0.08)');
        auraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else if (currentTheme === 'rose-eclipse') {
        auraGrad.addColorStop(0, 'rgba(225, 29, 72, 0.20)');
        auraGrad.addColorStop(0.45, 'rgba(190, 18, 60, 0.07)');
        auraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else if (currentTheme === 'earth-horizon') {
        auraGrad.addColorStop(0, 'rgba(14, 165, 233, 0.24)');
        auraGrad.addColorStop(0.45, 'rgba(37, 99, 235, 0.08)');
        auraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else if (currentTheme === 'solar-flare') {
        auraGrad.addColorStop(0, 'rgba(251, 146, 60, 0.25)');
        auraGrad.addColorStop(0.45, 'rgba(234, 88, 12, 0.09)');
        auraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else if (currentTheme === 'deep-nebula') {
        auraGrad.addColorStop(0, 'rgba(168, 85, 247, 0.22)');
        auraGrad.addColorStop(0.45, 'rgba(126, 34, 206, 0.08)');
        auraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else if (currentTheme === 'abyssal-ocean') {
        auraGrad.addColorStop(0, 'rgba(14, 165, 233, 0.20)');
        auraGrad.addColorStop(0.45, 'rgba(3, 105, 161, 0.07)');
        auraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else {
        auraGrad.addColorStop(0, 'rgba(148, 163, 184, 0.16)');
        auraGrad.addColorStop(0.45, 'rgba(71, 85, 105, 0.05)');
        auraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      }

      ctx.fillStyle = auraGrad;
      ctx.fillRect(0, 0, width, height);

      // ── 2. SCULPTURAL APPLE-STYLE RIBBON WAVES ──
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
        'sonoma-amber': {
          grad1: ['rgba(245, 158, 11, 0.55)', 'rgba(217, 119, 6, 0.40)', 'rgba(180, 83, 9, 0.25)', 'rgba(15, 10, 6, 0)'],
          stroke1: 'rgba(252, 211, 77, 0.65)',
          grad2: ['rgba(251, 191, 36, 0.48)', 'rgba(245, 158, 11, 0.35)', 'rgba(146, 64, 14, 0.18)', 'rgba(15, 10, 6, 0)'],
          stroke2: 'rgba(254, 240, 138, 0.75)',
          grad3: ['rgba(253, 224, 71, 0.35)', 'rgba(251, 191, 36, 0.22)', 'rgba(15, 10, 6, 0)'],
          stroke3: 'rgba(255, 255, 255, 0.60)',
        },
        'nordic-aurora': {
          grad1: ['rgba(16, 185, 129, 0.50)', 'rgba(5, 150, 105, 0.35)', 'rgba(4, 120, 87, 0.20)', 'rgba(5, 15, 12, 0)'],
          stroke1: 'rgba(110, 231, 183, 0.60)',
          grad2: ['rgba(52, 211, 153, 0.45)', 'rgba(16, 185, 129, 0.30)', 'rgba(6, 95, 70, 0.15)', 'rgba(5, 15, 12, 0)'],
          stroke2: 'rgba(167, 243, 208, 0.75)',
          grad3: ['rgba(110, 231, 183, 0.32)', 'rgba(52, 211, 153, 0.20)', 'rgba(5, 15, 12, 0)'],
          stroke3: 'rgba(255, 255, 255, 0.60)',
        },
        'rose-eclipse': {
          grad1: ['rgba(225, 29, 72, 0.50)', 'rgba(190, 18, 60, 0.35)', 'rgba(136, 19, 55, 0.20)', 'rgba(15, 5, 10, 0)'],
          stroke1: 'rgba(251, 113, 133, 0.60)',
          grad2: ['rgba(244, 63, 94, 0.45)', 'rgba(225, 29, 72, 0.30)', 'rgba(159, 18, 57, 0.15)', 'rgba(15, 5, 10, 0)'],
          stroke2: 'rgba(253, 164, 175, 0.75)',
          grad3: ['rgba(251, 113, 133, 0.32)', 'rgba(244, 114, 182, 0.20)', 'rgba(15, 5, 10, 0)'],
          stroke3: 'rgba(255, 255, 255, 0.60)',
        },
        'graphite-titanium': {
          grad1: ['rgba(100, 116, 139, 0.48)', 'rgba(71, 85, 105, 0.35)', 'rgba(51, 65, 85, 0.20)', 'rgba(15, 17, 21, 0)'],
          stroke1: 'rgba(203, 213, 225, 0.55)',
          grad2: ['rgba(148, 163, 184, 0.42)', 'rgba(100, 116, 139, 0.28)', 'rgba(71, 85, 105, 0.15)', 'rgba(15, 17, 21, 0)'],
          stroke2: 'rgba(248, 250, 252, 0.70)',
          grad3: ['rgba(203, 213, 225, 0.30)', 'rgba(148, 163, 184, 0.18)', 'rgba(15, 17, 21, 0)'],
          stroke3: 'rgba(255, 255, 255, 0.55)',
        },
        'deep-nebula': {
          grad1: ['rgba(147, 51, 234, 0.50)', 'rgba(109, 40, 217, 0.35)', 'rgba(88, 28, 135, 0.20)', 'rgba(12, 8, 22, 0)'],
          stroke1: 'rgba(216, 180, 254, 0.60)',
          grad2: ['rgba(168, 85, 247, 0.45)', 'rgba(147, 51, 234, 0.30)', 'rgba(67, 56, 202, 0.15)', 'rgba(12, 8, 22, 0)'],
          stroke2: 'rgba(233, 213, 255, 0.75)',
          grad3: ['rgba(192, 132, 252, 0.32)', 'rgba(168, 85, 247, 0.20)', 'rgba(12, 8, 22, 0)'],
          stroke3: 'rgba(255, 255, 255, 0.60)',
        },
        'constellation': {
          grad1: ['rgba(99, 102, 241, 0.45)', 'rgba(79, 70, 229, 0.32)', 'rgba(49, 46, 129, 0.18)', 'rgba(8, 10, 24, 0)'],
          stroke1: 'rgba(199, 210, 254, 0.55)',
          grad2: ['rgba(129, 140, 248, 0.38)', 'rgba(99, 102, 241, 0.25)', 'rgba(30, 27, 75, 0.12)', 'rgba(8, 10, 24, 0)'],
          stroke2: 'rgba(224, 231, 255, 0.70)',
          grad3: ['rgba(165, 180, 252, 0.28)', 'rgba(129, 140, 248, 0.16)', 'rgba(8, 10, 24, 0)'],
          stroke3: 'rgba(255, 255, 255, 0.55)',
        },
      };

      const activeWaveStyle = waveThemeStyles[currentTheme];

      if (activeWaveStyle) {
        // Wave 1: Base Sculptural Flow
        ctx.save();
        ctx.beginPath();
        const yOffset1 = height * 0.40 + Math.sin(waveT * 0.8) * 45 + mouseNormY * 30;
        ctx.moveTo(0, height);
        ctx.lineTo(0, yOffset1);
        ctx.bezierCurveTo(
          width * 0.28,
          yOffset1 - height * 0.28 + Math.cos(waveT * 0.9) * 35,
          width * 0.65,
          yOffset1 + height * 0.24 + Math.sin(waveT * 1.1) * 40,
          width,
          yOffset1 - height * 0.12
        );
        ctx.lineTo(width, height);
        ctx.closePath();

        const waveGrad1 = ctx.createLinearGradient(0, yOffset1 - 100, width, height);
        waveGrad1.addColorStop(0, activeWaveStyle.grad1[0]);
        waveGrad1.addColorStop(0.35, activeWaveStyle.grad1[1]);
        waveGrad1.addColorStop(0.75, activeWaveStyle.grad1[2]);
        waveGrad1.addColorStop(1, activeWaveStyle.grad1[3]);
        ctx.fillStyle = waveGrad1;
        ctx.fill();

        ctx.strokeStyle = activeWaveStyle.stroke1;
        ctx.lineWidth = 2.0;
        ctx.stroke();
        ctx.restore();

        // Wave 2: Mid Dynamic Flow
        ctx.save();
        ctx.beginPath();
        const yOffset2 = height * 0.55 + Math.cos(waveT * 0.7) * 50 - mouseNormY * 35;
        ctx.moveTo(0, height);
        ctx.lineTo(0, yOffset2 + 35);
        ctx.bezierCurveTo(
          width * 0.32,
          yOffset2 + height * 0.20 + Math.sin(waveT * 0.85) * 45,
          width * 0.72,
          yOffset2 - height * 0.24 + Math.cos(waveT * 1.05) * 35,
          width,
          yOffset2 + 15
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

        ctx.strokeStyle = activeWaveStyle.stroke2;
        ctx.lineWidth = 2.5;
        ctx.stroke();
        ctx.restore();

        // Wave 3: Translucent Fore-Ribbon
        ctx.save();
        ctx.beginPath();
        const yOffset3 = height * 0.72 + Math.sin(waveT * 0.95) * 35 + mouseNormY * 20;
        ctx.moveTo(0, height);
        ctx.lineTo(0, yOffset3);
        ctx.bezierCurveTo(
          width * 0.38,
          yOffset3 - height * 0.16 + Math.cos(waveT * 1.2) * 28,
          width * 0.68,
          yOffset3 + height * 0.10 + Math.sin(waveT * 0.75) * 30,
          width,
          yOffset3 - 20
        );
        ctx.lineTo(width, height);
        ctx.closePath();

        const waveGrad3 = ctx.createLinearGradient(0, yOffset3 - 40, width, height);
        waveGrad3.addColorStop(0, activeWaveStyle.grad3[0]);
        waveGrad3.addColorStop(0.5, activeWaveStyle.grad3[1]);
        waveGrad3.addColorStop(1, activeWaveStyle.grad3[2]);
        ctx.fillStyle = waveGrad3;
        ctx.fill();

        ctx.strokeStyle = activeWaveStyle.stroke3;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.restore();
      }

      // ── 3. CELESTIAL VOLUMETRIC LIGHT & PLANETARY HORIZONS ──
      if (currentTheme === 'sonoma-amber') {
        const sunX = width * 0.80 + mouseNormX * 35;
        const sunY = height * 0.15 + mouseNormY * 35;
        const sunGrad = ctx.createRadialGradient(sunX, sunY, 30, sunX, sunY, width * 0.75 * breathPulse);
        sunGrad.addColorStop(0, 'rgba(251, 191, 36, 0.45)');
        sunGrad.addColorStop(0.3, 'rgba(245, 158, 11, 0.25)');
        sunGrad.addColorStop(0.65, 'rgba(180, 83, 9, 0.08)');
        sunGrad.addColorStop(1, 'rgba(10, 6, 4, 0)');
        ctx.fillStyle = sunGrad;
        ctx.fillRect(0, 0, width, height);

        // Volumetric Sunbeam Sweep
        ctx.save();
        ctx.translate(sunX, sunY);
        ctx.rotate(-0.40 + Math.sin(waveT * 0.35) * 0.05);
        const rayGrad = ctx.createLinearGradient(0, 0, -width * 0.95, height * 0.85);
        rayGrad.addColorStop(0, 'rgba(254, 243, 199, 0.28)');
        rayGrad.addColorStop(0.35, 'rgba(251, 191, 36, 0.12)');
        rayGrad.addColorStop(0.7, 'rgba(217, 119, 6, 0.04)');
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
        const auroraX = width * 0.35 + mouseNormX * 30;
        const auroraY = height * 0.20 + mouseNormY * 30;
        const auroraGrad = ctx.createRadialGradient(auroraX, auroraY, 40, auroraX, auroraY, width * 0.75 * breathPulse);
        auroraGrad.addColorStop(0, 'rgba(52, 211, 153, 0.42)');
        auroraGrad.addColorStop(0.3, 'rgba(16, 185, 129, 0.25)');
        auroraGrad.addColorStop(0.65, 'rgba(4, 120, 87, 0.08)');
        auroraGrad.addColorStop(1, 'rgba(4, 11, 8, 0)');
        ctx.fillStyle = auroraGrad;
        ctx.fillRect(0, 0, width, height);

      } else if (currentTheme === 'rose-eclipse') {
        const eclipseX = width * 0.75 + mouseNormX * 30;
        const eclipseY = height * 0.22 + mouseNormY * 30;
        const eclipseGrad = ctx.createRadialGradient(eclipseX, eclipseY, 30, eclipseX, eclipseY, width * 0.70 * breathPulse);
        eclipseGrad.addColorStop(0, 'rgba(251, 113, 133, 0.40)');
        eclipseGrad.addColorStop(0.3, 'rgba(225, 29, 72, 0.24)');
        eclipseGrad.addColorStop(0.65, 'rgba(136, 19, 55, 0.08)');
        eclipseGrad.addColorStop(1, 'rgba(11, 3, 6, 0)');
        ctx.fillStyle = eclipseGrad;
        ctx.fillRect(0, 0, width, height);

      } else if (currentTheme === 'earth-horizon') {
        const horizonCenterY = height * 1.25 - mouseNormY * 25;
        const horizonCenterX = width * 0.5 + mouseNormX * 25;
        const radius = height * 0.85;

        const earthGrad = ctx.createRadialGradient(
          horizonCenterX,
          horizonCenterY,
          radius * 0.78,
          horizonCenterX,
          horizonCenterY,
          radius * 1.30
        );
        earthGrad.addColorStop(0, 'rgba(14, 165, 233, 0.55)');
        earthGrad.addColorStop(0.25, 'rgba(37, 99, 235, 0.35)');
        earthGrad.addColorStop(0.55, 'rgba(30, 58, 138, 0.16)');
        earthGrad.addColorStop(1, 'rgba(3, 7, 16, 0)');
        ctx.fillStyle = earthGrad;
        ctx.fillRect(0, 0, width, height);

        const rayGrad = ctx.createRadialGradient(
          width * 0.85 + mouseNormX * 35,
          height * 0.78,
          15,
          width * 0.85,
          height * 0.78,
          width * 0.65
        );
        rayGrad.addColorStop(0, 'rgba(186, 230, 253, 0.32)');
        rayGrad.addColorStop(0.5, 'rgba(56, 189, 248, 0.12)');
        rayGrad.addColorStop(1, 'rgba(3, 7, 16, 0)');
        ctx.fillStyle = rayGrad;
        ctx.fillRect(0, 0, width, height);

      } else if (currentTheme === 'solar-flare') {
        const sunCX = width * 0.15 + mouseNormX * 30;
        const sunCY = height * 0.15 + mouseNormY * 30;
        const sunR = Math.min(width, height) * 0.50;

        const solarGrad = ctx.createRadialGradient(sunCX, sunCY, sunR * 0.25, sunCX, sunCY, sunR * 1.6);
        solarGrad.addColorStop(0, 'rgba(255, 237, 213, 0.55)');
        solarGrad.addColorStop(0.2, 'rgba(251, 146, 60, 0.38)');
        solarGrad.addColorStop(0.5, 'rgba(234, 88, 12, 0.18)');
        solarGrad.addColorStop(1, 'rgba(11, 4, 2, 0)');
        ctx.fillStyle = solarGrad;
        ctx.fillRect(0, 0, width, height);

        ctx.save();
        ctx.translate(sunCX, sunCY);
        ctx.rotate(time * 0.0001);
        for (let a = 0; a < Math.PI * 2; a += Math.PI / 8) {
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(Math.cos(a) * width * 1.2, Math.sin(a) * width * 1.2);
          ctx.strokeStyle = 'rgba(251, 146, 60, 0.06)';
          ctx.lineWidth = 20;
          ctx.stroke();
        }
        ctx.restore();

      } else if (currentTheme === 'cyber-obsidian') {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
        ctx.lineWidth = 1;
        const m = 40;
        const s = 12;
        ctx.beginPath(); ctx.moveTo(m - s, m); ctx.lineTo(m + s, m); ctx.moveTo(m, m - s); ctx.lineTo(m, m + s); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(width - m - s, m); ctx.lineTo(width - m + s, m); ctx.moveTo(width - m, m - s); ctx.lineTo(width - m, m + s); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(m - s, height - m); ctx.lineTo(m + s, height - m); ctx.moveTo(m, height - m - s); ctx.lineTo(m, height - m + s); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(width - m - s, height - m); ctx.lineTo(width - m + s, height - m); ctx.moveTo(width - m, height - m - s); ctx.lineTo(width - m, height - m + s); ctx.stroke();
      }

      // Vignette
      const vigGrad = ctx.createRadialGradient(width / 2, height / 2, width * 0.35, width / 2, height / 2, width * 0.80);
      vigGrad.addColorStop(0, 'rgba(0, 0, 0, 0)');
      vigGrad.addColorStop(1, 'rgba(0, 0, 0, 0.45)');
      ctx.fillStyle = vigGrad;
      ctx.fillRect(0, 0, width, height);

      // ── 4. LIVING STARLIGHT & MICRO PARTICLES ──
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

        const parallaxFactor = p.z === 2 ? 22 : p.z === 1 ? 12 : 5;
        const drawX = p.x + mouseNormX * parallaxFactor;
        const drawY = p.y + mouseNormY * parallaxFactor;

        const twinkle = Math.sin(p.alphaPhase);
        const currentAlpha = Math.min(1, Math.max(0.12, p.alpha + twinkle * 0.35));

        ctx.beginPath();
        ctx.arc(drawX, drawY, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${currentAlpha.toFixed(3)})`;
        ctx.fill();

        if (p.radius > 1.1 && currentTheme !== 'cyber-obsidian') {
          ctx.beginPath();
          ctx.arc(drawX, drawY, p.radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${(currentAlpha * 0.28).toFixed(3)})`;
          ctx.fill();
        }
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
