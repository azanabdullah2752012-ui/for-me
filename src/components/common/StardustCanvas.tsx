import React, { useEffect, useRef } from 'react';
import { WallpaperTheme } from '../../types';
import { useData } from '../../context/DataContext';

interface AmbientParticle {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  alphaSpeed: number;
  alphaPhase: number;
  vx: number;
  vy: number;
}

interface StardustCanvasProps {
  theme?: WallpaperTheme;
}

export const StardustCanvas: React.FC<StardustCanvasProps> = ({ theme: propTheme }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { settings } = useData();
  const currentTheme: WallpaperTheme = propTheme || settings.wallpaperTheme || 'graphite-titanium';

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

    // Calm, high-craft ambient dust particles (like quiet atmospheric dust in a library)
    const particleCount = prefersReducedMotion ? 0 : Math.min(65, Math.floor((width * height) / 25000));
    const particles: AmbientParticle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 0.9 + 0.4,
        alpha: Math.random() * 0.25 + 0.05,
        alphaSpeed: Math.random() * 0.006 + 0.003,
        alphaPhase: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
      });
    }

    // Parallax tracking
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

    const render = (time: number) => {
      animationFrameId = requestAnimationFrame(render);
      if (!isVisible) return;

      currentMouseX += (targetMouseX - currentMouseX) * 0.02;
      currentMouseY += (targetMouseY - currentMouseY) * 0.02;

      const mouseNormX = (currentMouseX - width / 2) / width;
      const mouseNormY = (currentMouseY - height / 2) / height;

      // ── 1. SOLID ARCHIVAL BASE CANVAS ──
      // Calibrated deep basalt, warm bistre, or obsidian
      let baseColor = '#0C0D0F';
      let ambientColor = 'rgba(255, 255, 255, 0.025)';
      let accentGlowColor = 'rgba(226, 90, 56, 0.04)';

      switch (currentTheme) {
        case 'sonoma-amber':
          baseColor = '#0E0B08';
          ambientColor = 'rgba(217, 119, 6, 0.03)';
          accentGlowColor = 'rgba(217, 119, 6, 0.06)';
          break;
        case 'nordic-aurora':
          baseColor = '#0A0E0C';
          ambientColor = 'rgba(61, 122, 93, 0.035)';
          accentGlowColor = 'rgba(61, 122, 93, 0.05)';
          break;
        case 'rose-eclipse':
          baseColor = '#0E090A';
          ambientColor = 'rgba(190, 24, 93, 0.03)';
          accentGlowColor = 'rgba(225, 29, 72, 0.05)';
          break;
        case 'graphite-titanium':
          baseColor = '#0C0D0F';
          ambientColor = 'rgba(255, 255, 255, 0.02)';
          accentGlowColor = 'rgba(226, 90, 56, 0.035)';
          break;
        case 'earth-horizon':
          baseColor = '#080A0E';
          ambientColor = 'rgba(56, 189, 248, 0.025)';
          accentGlowColor = 'rgba(14, 165, 233, 0.04)';
          break;
        case 'cyber-obsidian':
          baseColor = '#09090B';
          ambientColor = 'rgba(255, 255, 255, 0.015)';
          accentGlowColor = 'rgba(255, 255, 255, 0.025)';
          break;
        default:
          baseColor = '#0C0D0F';
          ambientColor = 'rgba(255, 255, 255, 0.02)';
          accentGlowColor = 'rgba(226, 90, 56, 0.03)';
          break;
      }

      ctx.fillStyle = baseColor;
      ctx.fillRect(0, 0, width, height);

      // ── 2. DIRECTIONAL TOP-LEFT ARCHITECTURAL RAKE LIGHT ──
      // Single intentional beam with calm falloff (No concentric halo blobs)
      const rakeX = width * 0.15 + mouseNormX * 30;
      const rakeY = height * 0.10 + mouseNormY * 30;
      const rakeRadius = Math.max(width, height) * 0.75;

      const rakeGrad = ctx.createRadialGradient(rakeX, rakeY, 20, rakeX, rakeY, rakeRadius);
      rakeGrad.addColorStop(0, ambientColor);
      rakeGrad.addColorStop(0.5, accentGlowColor);
      rakeGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = rakeGrad;
      ctx.fillRect(0, 0, width, height);

      // ── 3. SUBTLE TACTILE HORIZON HAIRLINE (Architectural Grid Element) ──
      if (currentTheme === 'cyber-obsidian' || currentTheme === 'graphite-titanium') {
        const horizonY = height * 0.68 + mouseNormY * 15;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(width * 0.08, horizonY);
        ctx.lineTo(width * 0.92, horizonY);
        ctx.stroke();
      }

      // ── 4. CALM, HIGH-CRAFT FLOATING DUST MOTES ──
      if (!prefersReducedMotion) {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          p.x += p.vx;
          p.y += p.vy;
          p.alphaPhase += p.alphaSpeed;

          // Wrap edges smoothly
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          const currentAlpha = p.alpha * (0.6 + 0.4 * Math.sin(p.alphaPhase));
          if (currentAlpha <= 0.01) continue;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(242, 242, 244, ${currentAlpha.toFixed(3)})`;
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
