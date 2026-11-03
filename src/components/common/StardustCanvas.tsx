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
  const { wallpaperTheme } = useData();
  const currentTheme: WallpaperTheme = propTheme || wallpaperTheme || 'deep-nebula';

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
      'deep-nebula': [
        'rgba(255, 255, 255, ',
        'rgba(233, 213, 255, ',
        'rgba(192, 132, 252, ',
        'rgba(168, 85, 247, ',
      ],
      'sonoma-amber': [
        'rgba(255, 255, 255, ',
        'rgba(254, 243, 199, ',
        'rgba(251, 191, 36, ',
        'rgba(217, 119, 6, ',
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
      'graphite-titanium': [
        'rgba(255, 255, 255, ',
        'rgba(241, 245, 249, ',
        'rgba(203, 213, 225, ',
        'rgba(148, 163, 184, ',
      ],
    };

    const starColors = themeStarColors[currentTheme] || themeStarColors['deep-nebula'];

    const count = Math.min(85, Math.floor((width * height) / 16000));
    const particles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      const z = Math.random() > 0.8 ? 2 : Math.random() > 0.4 ? 1 : 0;
      const baseRadius = Math.random() * 0.9 + (z === 2 ? 1.4 : 0.4);
      const color = starColors[Math.floor(Math.random() * starColors.length)];

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z,
        radius: baseRadius,
        alpha: Math.random() * 0.4 + 0.15,
        alphaSpeed: Math.random() * 0.008 + 0.003,
        alphaPhase: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * 0.08,
        vy: (Math.random() - 0.5) * 0.08,
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

    let time = 0;

    const drawSparkle = (x: number, y: number, r: number, alpha: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.fillStyle = `rgba(220, 200, 255, ${alpha})`;
      ctx.beginPath();
      // 4-pointed cross star
      ctx.moveTo(0, -r);
      ctx.quadraticCurveTo(0, 0, r, 0);
      ctx.quadraticCurveTo(0, 0, 0, r);
      ctx.quadraticCurveTo(0, 0, -r, 0);
      ctx.quadraticCurveTo(0, 0, 0, -r);
      ctx.fill();

      // Center bright core
      ctx.beginPath();
      ctx.arc(0, 0, r * 0.25, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, alpha + 0.3)})`;
      ctx.fill();
      ctx.restore();
    };

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      time += prefersReducedMotion ? 0.002 : 0.006;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse lerp
      currentMouseX += (targetMouseX - currentMouseX) * 0.04;
      currentMouseY += (targetMouseY - currentMouseY) * 0.04;
      const mouseNormX = (currentMouseX - width / 2) / (width / 2);
      const mouseNormY = (currentMouseY - height / 2) / (height / 2);

      // 1. Deep cosmic gradient base
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, '#060814');
      bgGrad.addColorStop(0.5, '#0a0d20');
      bgGrad.addColorStop(1, '#0e1028');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Cosmic Ambient Radial Glows
      const radGlow1 = ctx.createRadialGradient(
        width * 0.85, height * 0.15, 0,
        width * 0.85, height * 0.15, width * 0.5
      );
      radGlow1.addColorStop(0, 'rgba(147, 51, 234, 0.18)');
      radGlow1.addColorStop(0.7, 'rgba(88, 28, 135, 0.05)');
      radGlow1.addColorStop(1, 'transparent');
      ctx.fillStyle = radGlow1;
      ctx.fillRect(0, 0, width, height);

      const radGlow2 = ctx.createRadialGradient(
        width * 0.15, height * 0.85, 0,
        width * 0.15, height * 0.85, width * 0.6
      );
      radGlow2.addColorStop(0, 'rgba(79, 70, 229, 0.14)');
      radGlow2.addColorStop(0.6, 'rgba(59, 130, 246, 0.03)');
      radGlow2.addColorStop(1, 'transparent');
      ctx.fillStyle = radGlow2;
      ctx.fillRect(0, 0, width, height);

      // 3. Ethereal Undulating Ribbon Waves (Matching the screenshot)
      const drawEtherealRibbon = (
        yBase: number,
        ribbonHeight: number,
        waveSpeed: number,
        colorCenter: string,
        colorEdge: string,
        yPhaseOffset: number = 0
      ) => {
        ctx.save();
        const waveT = time * waveSpeed + yPhaseOffset;
        const yTop = yBase;
        const yBot = yBase + ribbonHeight;

        ctx.beginPath();
        ctx.moveTo(0, yTop);

        // Top undulating wave
        ctx.bezierCurveTo(
          width * 0.28,
          yTop - 50 + Math.cos(waveT * 1.1) * 35,
          width * 0.68,
          yTop + 45 + Math.sin(waveT * 0.9) * 35,
          width,
          yTop - 20
        );

        // Bottom boundary line to close polygon
        ctx.lineTo(width, yBot - 20);
        ctx.bezierCurveTo(
          width * 0.68,
          yBot + 45 + Math.sin(waveT * 0.9) * 35,
          width * 0.28,
          yBot - 50 + Math.cos(waveT * 1.1) * 35,
          0,
          yBot
        );
        ctx.closePath();

        const ribbonGrad = ctx.createLinearGradient(0, yTop - 30, 0, yBot + 30);
        ribbonGrad.addColorStop(0, colorEdge);
        ribbonGrad.addColorStop(0.5, colorCenter);
        ribbonGrad.addColorStop(1, colorEdge);

        ctx.fillStyle = ribbonGrad;
        ctx.fill();
        ctx.restore();
      };

      if (currentTheme === 'deep-nebula') {
        drawEtherealRibbon(height * 0.44, 210, 0.6, 'rgba(147, 51, 234, 0.16)', 'rgba(147, 51, 234, 0)', 0);
        drawEtherealRibbon(height * 0.60, 240, 0.8, 'rgba(168, 85, 247, 0.13)', 'rgba(168, 85, 247, 0)', 2.1);
        drawEtherealRibbon(height * 0.75, 200, 1.0, 'rgba(99, 102, 241, 0.10)', 'rgba(99, 102, 241, 0)', 4.2);
      } else if (currentTheme === 'sonoma-amber') {
        drawEtherealRibbon(height * 0.46, 210, 0.6, 'rgba(245, 158, 11, 0.14)', 'rgba(245, 158, 11, 0)', 0);
        drawEtherealRibbon(height * 0.62, 230, 0.8, 'rgba(217, 119, 6, 0.11)', 'rgba(217, 119, 6, 0)', 2.1);
      } else if (currentTheme === 'nordic-aurora') {
        drawEtherealRibbon(height * 0.45, 220, 0.65, 'rgba(16, 185, 129, 0.14)', 'rgba(16, 185, 129, 0)', 0);
        drawEtherealRibbon(height * 0.62, 220, 0.85, 'rgba(52, 211, 153, 0.11)', 'rgba(52, 211, 153, 0)', 2.1);
      } else {
        drawEtherealRibbon(height * 0.46, 200, 0.7, 'rgba(168, 85, 247, 0.12)', 'rgba(168, 85, 247, 0)', 0);
        drawEtherealRibbon(height * 0.62, 220, 0.9, 'rgba(147, 51, 234, 0.09)', 'rgba(147, 51, 234, 0)', 2.1);
      }

      // 4. Prominent Sparkling Cross Stars (Matching astronomical glyphs in screenshot)
      const sparkleAlpha1 = 0.55 + Math.sin(time * 2.5) * 0.25;
      const sparkleAlpha2 = 0.50 + Math.sin(time * 2.1 + 1.5) * 0.25;
      const sparkleAlpha3 = 0.45 + Math.sin(time * 2.8 + 3.0) * 0.25;
      const sparkleAlpha4 = 0.50 + Math.sin(time * 2.3 + 4.2) * 0.25;

      drawSparkle(width * 0.68, height * 0.09, 8, sparkleAlpha1);
      drawSparkle(width * 0.08, height * 0.28, 6, sparkleAlpha2);
      drawSparkle(width * 0.13, height * 0.29, 5, sparkleAlpha3);
      drawSparkle(width * 0.92, height * 0.22, 7, sparkleAlpha4);
      drawSparkle(width * 0.65, height * 0.78, 5, sparkleAlpha2);

      // 5. Stardust Particles & Gentle Parallax
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
        const drawX = p.x + mouseNormX * 16 * depthFactor;
        const drawY = p.y + mouseNormY * 16 * depthFactor;

        const currentAlpha = Math.max(
          0.05,
          Math.min(0.7, p.alpha + Math.sin(p.alphaPhase) * 0.18)
        );

        ctx.beginPath();
        ctx.arc(drawX, drawY, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${currentAlpha.toFixed(3)})`;
        ctx.fill();

        // Soft halo on larger stardust
        if (p.radius > 1.1) {
          ctx.beginPath();
          ctx.arc(drawX, drawY, p.radius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${(currentAlpha * 0.25).toFixed(3)})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [currentTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};
