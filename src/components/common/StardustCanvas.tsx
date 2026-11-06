import React, { useEffect, useRef, useState } from 'react';
import { WallpaperTheme } from '../../types';
import { useData } from '../../context/DataContext';

import cosmicCliffsImg from '../../assets/wallpapers/cosmic-cliffs.jpg';
import pillarsImg from '../../assets/wallpapers/pillars-of-creation.jpg';
import deepSpaceImg from '../../assets/wallpapers/deep-space.jpg';

interface Particle {
  x: number;
  y: number;
  z: number;
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

const WALLPAPER_IMAGES: Record<WallpaperTheme, string> = {
  'cosmic-cliffs': cosmicCliffsImg,
  'pillars-of-creation': pillarsImg,
  'deep-space': deepSpaceImg,
};

export const StardustCanvas: React.FC<StardustCanvasProps> = ({ theme: propTheme }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { wallpaperTheme, previewTheme } = useData();

  const rawTheme = propTheme || previewTheme || wallpaperTheme || 'cosmic-cliffs';
  const currentTheme: WallpaperTheme = 
    rawTheme === 'pillars-of-creation' || rawTheme === 'deep-space' 
      ? rawTheme 
      : 'cosmic-cliffs';

  const [activeImg, setActiveImg] = useState<string>(WALLPAPER_IMAGES[currentTheme]);

  useEffect(() => {
    setActiveImg(WALLPAPER_IMAGES[currentTheme]);
  }, [currentTheme]);

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

    // ── 1. STAR PARTICLES INITIALIZATION ──
    const starColorsByTheme: Record<WallpaperTheme, string[]> = {
      'cosmic-cliffs': [
        'rgba(255, 255, 255, ',
        'rgba(254, 240, 138, ',
        'rgba(251, 146, 60, ',
        'rgba(253, 186, 116, ',
        'rgba(186, 230, 253, ',
      ],
      'pillars-of-creation': [
        'rgba(255, 255, 255, ',
        'rgba(167, 243, 208, ',
        'rgba(103, 232, 249, ',
        'rgba(52, 211, 153, ',
        'rgba(186, 230, 253, ',
      ],
      'deep-space': [
        'rgba(255, 255, 255, ',
        'rgba(241, 245, 249, ',
        'rgba(224, 242, 254, ',
        'rgba(254, 243, 199, ',
        'rgba(255, 255, 255, ',
      ],
    };

    const currentStarColors = starColorsByTheme[currentTheme] || starColorsByTheme['cosmic-cliffs'];
    const particleCount = width < 768 ? 70 : 120;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const rand = Math.random();
      let z = 0;
      let baseRadius = Math.random() * 0.7 + 0.45;
      let hasSpikes = false;

      if (rand > 0.88) {
        z = 2; // Bright foreground star with cross diffraction spikes
        baseRadius = Math.random() * 1.3 + 1.4;
        hasSpikes = true;
      } else if (rand > 0.55) {
        z = 1; // Mid-field shimmering star
        baseRadius = Math.random() * 0.7 + 0.8;
      }

      const vx = (Math.random() - 0.5) * (0.02 + z * 0.025);
      const vy = -Math.random() * (0.02 + z * 0.025) - 0.01;

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z,
        radius: baseRadius,
        baseRadius,
        alpha: Math.random() * 0.6 + 0.35,
        alphaSpeed: (Math.random() * 0.02 + 0.008) * (Math.random() > 0.5 ? 1 : -1),
        alphaPhase: Math.random() * Math.PI * 2,
        vx,
        vy,
        color: currentStarColors[Math.floor(Math.random() * currentStarColors.length)],
        hasSpikes,
      });
    }

    // ── 2. METEORS ──
    const meteors: Meteor[] = [];
    let lastMeteorSpawn = Date.now();

    const spawnMeteor = () => {
      const startX = Math.random() * width * 0.85 + width * 0.15;
      const startY = Math.random() * (height * 0.35);
      const angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.35;
      const speed = Math.random() * 8 + 8;
      const length = Math.random() * 90 + 75;

      const meteorPalette =
        currentTheme === 'pillars-of-creation'
          ? 'rgba(103, 232, 249, '
          : currentTheme === 'deep-space'
          ? 'rgba(241, 245, 249, '
          : 'rgba(251, 191, 36, ';

      meteors.push({
        x: startX,
        y: startY,
        length,
        speed,
        angle,
        alpha: 0.95,
        decay: Math.random() * 0.025 + 0.015,
        color: meteorPalette,
      });
    };

    // ── 3. MAIN ANIMATION LOOP (LIVING STARDUST & METEORS OVER REAL HIGH-RES PHOTOGRAPHY) ──
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Star particles & JWST 6-point diffraction spikes
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          p.alphaPhase += p.alphaSpeed;
        }

        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        const twinkle = Math.sin(p.alphaPhase);
        const currentAlpha = Math.max(0.12, Math.min(1.0, p.alpha + twinkle * 0.28));
        const currentRadius = Math.max(0.35, p.baseRadius + twinkle * 0.25);

        // Star Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${currentAlpha})`;
        ctx.fill();

        // Authentic James Webb Optical 6-Point Diffraction Spikes on Bright Foreground Stars
        if (p.hasSpikes && currentAlpha > 0.45) {
          ctx.save();
          ctx.strokeStyle = `${p.color}${currentAlpha * 0.75})`;
          ctx.lineWidth = 1.0;
          const spikeLen = currentRadius * 6.5;

          ctx.beginPath();
          ctx.moveTo(p.x, p.y - spikeLen);
          ctx.lineTo(p.x, p.y + spikeLen);
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(p.x - spikeLen, p.y);
          ctx.lineTo(p.x + spikeLen, p.y);
          ctx.stroke();

          ctx.lineWidth = 0.55;
          const diagLen = spikeLen * 0.65;
          ctx.beginPath();
          ctx.moveTo(p.x - diagLen * 0.7, p.y - diagLen * 0.7);
          ctx.lineTo(p.x + diagLen * 0.7, p.y + diagLen * 0.7);
          ctx.stroke();

          ctx.restore();
        }
      }

      // Shooting Meteors
      const now = Date.now();
      if (!prefersReducedMotion && now - lastMeteorSpawn > 5000 && Math.random() < 0.04) {
        spawnMeteor();
        lastMeteorSpawn = now;
      }

      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;
        m.alpha -= m.decay;

        if (m.alpha <= 0) {
          meteors.splice(i, 1);
          continue;
        }

        const tailX = m.x - Math.cos(m.angle) * m.length;
        const tailY = m.y - Math.sin(m.angle) * m.length;

        const grad = ctx.createLinearGradient(tailX, tailY, m.x, m.y);
        grad.addColorStop(0, `${m.color}0)`);
        grad.addColorStop(0.7, `${m.color}${m.alpha * 0.45})`);
        grad.addColorStop(1, `${m.color}${m.alpha})`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 2.0;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(m.x, m.y);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        lastMeteorSpawn = Date.now();
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [currentTheme]);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
      {/* 1. Real High-Resolution NASA Astrophotography Plate */}
      <img
        src={activeImg}
        alt=""
        className="fixed inset-0 w-full h-full object-cover object-center scale-[1.02] transition-opacity duration-700 ease-in-out"
        style={{ willChange: 'opacity, transform' }}
      />

      {/* 2. Calibrated Palmkvist Dark Scrim & Directional Gradient Overlay */}
      <div 
        className="fixed inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/70 mix-blend-multiply" 
      />
      <div 
        className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.65)_100%)]" 
      />

      {/* 3. Living 60fps Stardust & Shooting Meteor Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-[1]"
        style={{ willChange: 'transform' }}
      />
    </div>
  );
};
