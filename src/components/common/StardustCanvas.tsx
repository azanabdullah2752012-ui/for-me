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
  isWallpaperMode?: boolean;
}

export const StardustCanvas: React.FC<StardustCanvasProps> = ({
  theme: propTheme,
  isWallpaperMode = true,
}) => {
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
        'rgba(251, 191, 36, ',
        'rgba(226, 90, 56, ',
      ],
      'nordic-aurora': [
        'rgba(255, 255, 255, ',
        'rgba(167, 243, 208, ',
        'rgba(110, 231, 183, ',
        'rgba(52, 211, 153, ',
      ],
      'rose-eclipse': [
        'rgba(255, 255, 255, ',
        'rgba(254, 205, 211, ',
        'rgba(251, 113, 133, ',
        'rgba(225, 29, 72, ',
      ],
      'earth-horizon': [
        'rgba(255, 255, 255, ',
        'rgba(224, 242, 254, ',
        'rgba(186, 230, 253, ',
        'rgba(14, 165, 233, ',
      ],
      'solar-flare': [
        'rgba(255, 255, 255, ',
        'rgba(254, 240, 138, ',
        'rgba(251, 146, 60, ',
        'rgba(234, 88, 12, ',
      ],
      'deep-nebula': [
        'rgba(255, 255, 255, ',
        'rgba(233, 213, 255, ',
        'rgba(192, 132, 252, ',
        'rgba(168, 85, 247, ',
      ],
      'graphite-titanium': [
        'rgba(255, 255, 255, ',
        'rgba(241, 245, 249, ',
        'rgba(203, 213, 225, ',
        'rgba(148, 163, 184, ',
      ],
      'cyber-obsidian': [
        'rgba(255, 255, 255, ',
        'rgba(226, 232, 240, ',
        'rgba(148, 163, 184, ',
      ],
      'constellation': [
        'rgba(255, 255, 255, ',
        'rgba(224, 231, 255, ',
        'rgba(199, 210, 254, ',
      ],
      'abyssal-ocean': [
        'rgba(255, 255, 255, ',
        'rgba(186, 230, 253, ',
        'rgba(56, 189, 248, ',
        'rgba(14, 165, 233, ',
      ],
    };

    const starColors = themeStarColors[currentTheme] || themeStarColors['sonoma-amber'];

    // Particles population (quieter in app mode, richer in wallpaper mode)
    const particleDensity = isWallpaperMode ? 14000 : 22000;
    const maxParticles = isWallpaperMode ? 100 : 50;
    const count = Math.min(maxParticles, Math.floor((width * height) / particleDensity));
    const particles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      const z = Math.random() > 0.8 ? 2 : Math.random() > 0.4 ? 1 : 0;
      const baseRadius = Math.random() * 0.8 + (z === 2 ? 1.2 : 0.4);
      const color = starColors[Math.floor(Math.random() * starColors.length)];

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z,
        radius: baseRadius,
        alpha: Math.random() * 0.4 + 0.15,
        alphaSpeed: Math.random() * 0.01 + 0.004,
        alphaPhase: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
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
    const handleVisibility = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibility);

    let lastTime = 0;

    const render = (time: number) => {
      animationFrameId = requestAnimationFrame(render);
      if (!isVisible) return;

      const delta = Math.min(time - lastTime, 50);
      lastTime = time;

      currentMouseX += (targetMouseX - currentMouseX) * 0.02;
      currentMouseY += (targetMouseY - currentMouseY) * 0.02;

      const mouseNormX = (currentMouseX - width / 2) / width;
      const mouseNormY = (currentMouseY - height / 2) / height;
      const waveT = time * 0.0003;

      // ── 1. LUXURY FOUNDATION ATMOSPHERIC CANVAS ──
      // Pure optical depth: deep obsidian with calibrated directional ambient glow
      let baseGrad = ctx.createRadialGradient(
        width * 0.5 + mouseNormX * 30,
        height * 0.38 + mouseNormY * 20,
        30,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.85
      );

      if (currentTheme === 'sonoma-amber') {
        baseGrad.addColorStop(0, '#12141C');
        baseGrad.addColorStop(0.4, '#0D0F14');
        baseGrad.addColorStop(0.75, '#08090D');
        baseGrad.addColorStop(1, '#050608');
      } else if (currentTheme === 'nordic-aurora') {
        baseGrad.addColorStop(0, '#0C1714');
        baseGrad.addColorStop(0.4, '#08110E');
        baseGrad.addColorStop(0.75, '#050B09');
        baseGrad.addColorStop(1, '#030605');
      } else if (currentTheme === 'rose-eclipse') {
        baseGrad.addColorStop(0, '#170D12');
        baseGrad.addColorStop(0.4, '#10080C');
        baseGrad.addColorStop(0.75, '#0A0508');
        baseGrad.addColorStop(1, '#050304');
      } else if (currentTheme === 'earth-horizon') {
        baseGrad.addColorStop(0, '#0C1424');
        baseGrad.addColorStop(0.4, '#080E18');
        baseGrad.addColorStop(0.75, '#05080E');
        baseGrad.addColorStop(1, '#030508');
      } else if (currentTheme === 'solar-flare') {
        baseGrad.addColorStop(0, '#18120B');
        baseGrad.addColorStop(0.4, '#100C07');
        baseGrad.addColorStop(0.75, '#090704');
        baseGrad.addColorStop(1, '#050402');
      } else if (currentTheme === 'deep-nebula') {
        baseGrad.addColorStop(0, '#140D22');
        baseGrad.addColorStop(0.4, '#0D0817');
        baseGrad.addColorStop(0.75, '#08050E');
        baseGrad.addColorStop(1, '#040307');
      } else if (currentTheme === 'abyssal-ocean') {
        baseGrad.addColorStop(0, '#081622');
        baseGrad.addColorStop(0.4, '#050E17');
        baseGrad.addColorStop(0.75, '#03090F');
        baseGrad.addColorStop(1, '#020508');
      } else {
        // graphite-titanium & cyber-obsidian
        baseGrad.addColorStop(0, '#151820');
        baseGrad.addColorStop(0.4, '#0E1015');
        baseGrad.addColorStop(0.75, '#090A0D');
        baseGrad.addColorStop(1, '#050608');
      }

      ctx.fillStyle = baseGrad;
      ctx.fillRect(0, 0, width, height);

      // ── 2. ETHEREAL CHROMATIC GLOWS (Wallpaper Mode Only) ──
      // In application views (Journal/Habits), we maintain clean calm space so cards are legible.
      if (isWallpaperMode) {
        // Upper center clock backlight aura
        const auraGrad = ctx.createRadialGradient(
          width * 0.5 + mouseNormX * 25,
          height * 0.30 + mouseNormY * 15,
          20,
          width * 0.5,
          height * 0.35,
          Math.max(width, height) * 0.45
        );

        if (currentTheme === 'sonoma-amber') {
          auraGrad.addColorStop(0, 'rgba(226, 90, 56, 0.20)');
          auraGrad.addColorStop(0.45, 'rgba(245, 158, 11, 0.08)');
          auraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        } else if (currentTheme === 'nordic-aurora') {
          auraGrad.addColorStop(0, 'rgba(16, 185, 129, 0.18)');
          auraGrad.addColorStop(0.45, 'rgba(5, 150, 105, 0.06)');
          auraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        } else if (currentTheme === 'rose-eclipse') {
          auraGrad.addColorStop(0, 'rgba(225, 29, 72, 0.17)');
          auraGrad.addColorStop(0.45, 'rgba(190, 18, 60, 0.05)');
          auraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        } else if (currentTheme === 'earth-horizon') {
          auraGrad.addColorStop(0, 'rgba(14, 165, 233, 0.20)');
          auraGrad.addColorStop(0.45, 'rgba(37, 99, 235, 0.06)');
          auraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        } else if (currentTheme === 'solar-flare') {
          auraGrad.addColorStop(0, 'rgba(251, 146, 60, 0.20)');
          auraGrad.addColorStop(0.45, 'rgba(234, 88, 12, 0.06)');
          auraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        } else if (currentTheme === 'deep-nebula') {
          auraGrad.addColorStop(0, 'rgba(168, 85, 247, 0.18)');
          auraGrad.addColorStop(0.45, 'rgba(126, 34, 206, 0.05)');
          auraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        } else if (currentTheme === 'abyssal-ocean') {
          auraGrad.addColorStop(0, 'rgba(14, 165, 233, 0.17)');
          auraGrad.addColorStop(0.45, 'rgba(3, 105, 161, 0.05)');
          auraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        } else {
          auraGrad.addColorStop(0, 'rgba(148, 163, 184, 0.14)');
          auraGrad.addColorStop(0.45, 'rgba(71, 85, 105, 0.04)');
          auraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        }

        ctx.fillStyle = auraGrad;
        ctx.fillRect(0, 0, width, height);

        // ── 3. VOLUMETRIC SOFT SILK RIBBONS (No hard strokes!) ──
        // Drawn as floating luminous bands with natural zero-alpha edges
        const drawEtherealRibbon = (
          yBase: number,
          heightSpan: number,
          waveSpeed: number,
          colorCenter: string,
          colorEdge: string
        ) => {
          ctx.save();
          ctx.beginPath();

          const yTop = yBase + Math.sin(waveT * waveSpeed) * 35 + mouseNormY * 25;
          const yBot = yTop + heightSpan;

          // Top boundary curve
          ctx.moveTo(0, yTop);
          ctx.bezierCurveTo(
            width * 0.3,
            yTop - 45 + Math.cos(waveT * waveSpeed * 1.1) * 30,
            width * 0.7,
            yTop + 40 + Math.sin(waveT * waveSpeed * 0.9) * 30,
            width,
            yTop - 15
          );

          // Bottom boundary curve (drawn in reverse to close the ribbon loop)
          ctx.lineTo(width, yBot - 15);
          ctx.bezierCurveTo(
            width * 0.7,
            yBot + 40 + Math.sin(waveT * waveSpeed * 0.9) * 30,
            width * 0.3,
            yBot - 45 + Math.cos(waveT * waveSpeed * 1.1) * 30,
            0,
            yBot
          );
          ctx.closePath();

          const ribbonGrad = ctx.createLinearGradient(0, yTop - 20, 0, yBot + 20);
          ribbonGrad.addColorStop(0, colorEdge);
          ribbonGrad.addColorStop(0.5, colorCenter);
          ribbonGrad.addColorStop(1, colorEdge);

          ctx.fillStyle = ribbonGrad;
          ctx.fill();
          ctx.restore();
        };

        if (currentTheme === 'sonoma-amber') {
          drawEtherealRibbon(height * 0.48, 180, 0.7, 'rgba(226, 90, 56, 0.16)', 'rgba(226, 90, 56, 0)');
          drawEtherealRibbon(height * 0.62, 160, 0.9, 'rgba(245, 158, 11, 0.13)', 'rgba(245, 158, 11, 0)');
        } else if (currentTheme === 'nordic-aurora') {
          drawEtherealRibbon(height * 0.45, 190, 0.65, 'rgba(16, 185, 129, 0.14)', 'rgba(16, 185, 129, 0)');
          drawEtherealRibbon(height * 0.60, 160, 0.85, 'rgba(52, 211, 153, 0.12)', 'rgba(52, 211, 153, 0)');
        } else if (currentTheme === 'rose-eclipse') {
          drawEtherealRibbon(height * 0.46, 180, 0.7, 'rgba(225, 29, 72, 0.13)', 'rgba(225, 29, 72, 0)');
          drawEtherealRibbon(height * 0.62, 150, 0.9, 'rgba(244, 63, 94, 0.10)', 'rgba(244, 63, 94, 0)');
        } else if (currentTheme === 'earth-horizon') {
          drawEtherealRibbon(height * 0.50, 180, 0.6, 'rgba(14, 165, 233, 0.15)', 'rgba(14, 165, 233, 0)');
          drawEtherealRibbon(height * 0.65, 150, 0.8, 'rgba(37, 99, 235, 0.12)', 'rgba(37, 99, 235, 0)');
        } else if (currentTheme === 'solar-flare') {
          drawEtherealRibbon(height * 0.46, 180, 0.75, 'rgba(251, 146, 60, 0.15)', 'rgba(251, 146, 60, 0)');
          drawEtherealRibbon(height * 0.62, 150, 0.95, 'rgba(234, 88, 12, 0.12)', 'rgba(234, 88, 12, 0)');
        } else if (currentTheme === 'deep-nebula') {
          drawEtherealRibbon(height * 0.48, 180, 0.7, 'rgba(168, 85, 247, 0.14)', 'rgba(168, 85, 247, 0)');
          drawEtherealRibbon(height * 0.64, 160, 0.9, 'rgba(147, 51, 234, 0.11)', 'rgba(147, 51, 234, 0)');
        } else if (currentTheme === 'abyssal-ocean') {
          drawEtherealRibbon(height * 0.48, 180, 0.65, 'rgba(14, 165, 233, 0.13)', 'rgba(14, 165, 233, 0)');
          drawEtherealRibbon(height * 0.64, 160, 0.85, 'rgba(3, 105, 161, 0.10)', 'rgba(3, 105, 161, 0)');
        } else if (currentTheme === 'graphite-titanium') {
          drawEtherealRibbon(height * 0.48, 170, 0.7, 'rgba(148, 163, 184, 0.11)', 'rgba(148, 163, 184, 0)');
          drawEtherealRibbon(height * 0.64, 150, 0.9, 'rgba(100, 116, 139, 0.08)', 'rgba(100, 116, 139, 0)');
        }
      }

      // ── 4. STARDUST PARTICLES & PARALLAX ──
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          p.alphaPhase += p.alphaSpeed;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        const depthFactor = (p.z + 1) * 0.35;
        const drawX = p.x + mouseNormX * 18 * depthFactor;
        const drawY = p.y + mouseNormY * 18 * depthFactor;

        const currentAlpha = Math.max(
          0.05,
          Math.min(0.7, p.alpha + Math.sin(p.alphaPhase) * 0.18)
        );

        ctx.beginPath();
        ctx.arc(drawX, drawY, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${currentAlpha.toFixed(3)})`;
        ctx.fill();

        // Subtle soft halo on brighter stardust
        if (p.radius > 1.0 && isWallpaperMode) {
          ctx.beginPath();
          ctx.arc(drawX, drawY, p.radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${(currentAlpha * 0.22).toFixed(3)})`;
          ctx.fill();
        }
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [currentTheme, isWallpaperMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700"
      style={{ opacity: 1 }}
      aria-hidden="true"
    />
  );
};
