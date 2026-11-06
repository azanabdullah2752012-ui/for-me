import React, { useEffect, useRef } from 'react';
import { WallpaperTheme } from '../../types';
import { useData } from '../../context/DataContext';

interface StardustStar {
  x: number;
  y: number;
  size: number;
  alpha: number;
  speed: number;
  phase: number;
  color: string;
  isLargeCross?: boolean;
}

interface StardustCanvasProps {
  theme?: WallpaperTheme;
}

export const StardustCanvas: React.FC<StardustCanvasProps> = ({ theme: propTheme }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { wallpaperTheme, previewTheme } = useData();

  const rawTheme = propTheme || previewTheme || wallpaperTheme || 'deep-space';
  const currentTheme: WallpaperTheme = 
    rawTheme === 'cosmic-cliffs' || rawTheme === 'pillars-of-creation' 
      ? rawTheme 
      : 'deep-space';

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

    // ── 1. PALETTES BY THEME (MATCHING USER SCREENSHOT VIBE) ──
    const themePalettes = {
      'deep-space': {
        skyTop: '#070914',
        skyMid: '#0e0b1f',
        skyBottom: '#060710',
        wave1FillTop: 'rgba(58, 25, 92, 0.42)',
        wave1FillBottom: 'rgba(23, 14, 46, 0.15)',
        wave1Stroke: 'rgba(168, 85, 247, 0.55)',
        wave1Glow: 'rgba(147, 51, 234, 0.65)',
        wave2FillTop: 'rgba(38, 28, 77, 0.52)',
        wave2FillBottom: 'rgba(14, 11, 31, 0.35)',
        wave2Stroke: 'rgba(129, 140, 248, 0.50)',
        wave2Glow: 'rgba(99, 102, 241, 0.55)',
        wave3FillTop: 'rgba(25, 18, 54, 0.65)',
        wave3FillBottom: 'rgba(8, 7, 20, 0.85)',
        wave3Stroke: 'rgba(192, 132, 252, 0.40)',
        orbitStroke: 'rgba(168, 85, 247, 0.28)',
        orbitDashed: 'rgba(129, 140, 248, 0.20)',
        gridHairline: 'rgba(255, 255, 255, 0.04)',
        meridianLine: 'rgba(168, 85, 247, 0.18)',
        starColors: ['#ffffff', '#c084fc', '#a78bfa', '#818cf8', '#e0e7ff'],
        largeStarColor: '#ffffff',
        crossFlareColor: 'rgba(192, 132, 252, 0.85)',
      },
      'cosmic-cliffs': {
        skyTop: '#09070f',
        skyMid: '#1a0d18',
        skyBottom: '#0c0608',
        wave1FillTop: 'rgba(180, 83, 9, 0.38)',
        wave1FillBottom: 'rgba(69, 26, 3, 0.15)',
        wave1Stroke: 'rgba(245, 158, 11, 0.60)',
        wave1Glow: 'rgba(217, 119, 6, 0.70)',
        wave2FillTop: 'rgba(120, 53, 15, 0.48)',
        wave2FillBottom: 'rgba(45, 17, 3, 0.35)',
        wave2Stroke: 'rgba(251, 191, 36, 0.52)',
        wave2Glow: 'rgba(245, 158, 11, 0.55)',
        wave3FillTop: 'rgba(74, 28, 6, 0.65)',
        wave3FillBottom: 'rgba(15, 5, 2, 0.85)',
        wave3Stroke: 'rgba(252, 211, 77, 0.40)',
        orbitStroke: 'rgba(245, 158, 11, 0.30)',
        orbitDashed: 'rgba(251, 191, 36, 0.22)',
        gridHairline: 'rgba(255, 255, 255, 0.04)',
        meridianLine: 'rgba(245, 158, 11, 0.20)',
        starColors: ['#ffffff', '#fde047', '#f59e0b', '#fb923c', '#fed7aa'],
        largeStarColor: '#ffffff',
        crossFlareColor: 'rgba(253, 224, 71, 0.85)',
      },
      'pillars-of-creation': {
        skyTop: '#020b0e',
        skyMid: '#061d19',
        skyBottom: '#020d0a',
        wave1FillTop: 'rgba(13, 148, 136, 0.38)',
        wave1FillBottom: 'rgba(4, 47, 46, 0.15)',
        wave1Stroke: 'rgba(20, 184, 166, 0.60)',
        wave1Glow: 'rgba(13, 148, 136, 0.70)',
        wave2FillTop: 'rgba(5, 150, 105, 0.48)',
        wave2FillBottom: 'rgba(2, 44, 34, 0.35)',
        wave2Stroke: 'rgba(52, 211, 153, 0.52)',
        wave2Glow: 'rgba(16, 185, 129, 0.55)',
        wave3FillTop: 'rgba(4, 78, 60, 0.65)',
        wave3FillBottom: 'rgba(1, 18, 14, 0.85)',
        wave3Stroke: 'rgba(110, 231, 183, 0.40)',
        orbitStroke: 'rgba(20, 184, 166, 0.30)',
        orbitDashed: 'rgba(52, 211, 153, 0.22)',
        gridHairline: 'rgba(255, 255, 255, 0.04)',
        meridianLine: 'rgba(20, 184, 166, 0.20)',
        starColors: ['#ffffff', '#6ee7b7', '#67e8f9', '#a7f3d0', '#5eead4'],
        largeStarColor: '#ffffff',
        crossFlareColor: 'rgba(103, 232, 249, 0.85)',
      },
    };

    const palette = themePalettes[currentTheme];

    // ── 2. PARTICLES & PROMINENT 4-POINT CROSS STARS ──
    const starCount = width < 768 ? 85 : 140;
    const stars: StardustStar[] = [];

    // Specific fixed prominent stars (matching the signature stars in user's image)
    const fixedStarPositions = [
      { rx: 0.56, ry: 0.08, size: 5.5 },  // Top center prominent star
      { rx: 0.24, ry: 0.36, size: 4.8 },  // Left mid-wave star
      { rx: 0.34, ry: 0.65, size: 4.2 },  // Center-left lower star
      { rx: 0.69, ry: 0.08, size: 3.5 },  // Top right star
      { rx: 0.86, ry: 0.38, size: 4.5 },  // Right wave star
    ];

    for (const fp of fixedStarPositions) {
      stars.push({
        x: fp.rx * width,
        y: fp.ry * height,
        size: fp.size,
        alpha: 0.95,
        speed: 0.018,
        phase: Math.random() * Math.PI * 2,
        color: palette.largeStarColor,
        isLargeCross: true,
      });
    }

    // Ambient scattered micro-stars
    for (let i = 0; i < starCount; i++) {
      const isLargeCross = Math.random() > 0.94;
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: isLargeCross ? Math.random() * 2.0 + 3.2 : Math.random() * 1.3 + 0.6,
        alpha: Math.random() * 0.6 + 0.3,
        speed: Math.random() * 0.022 + 0.008,
        phase: Math.random() * Math.PI * 2,
        color: palette.starColors[Math.floor(Math.random() * palette.starColors.length)],
        isLargeCross,
      });
    }

    let time = 0;

    // ── 3. DRAW SIGNATURE 4-POINT CROSS STAR (FROM USER SCREENSHOT) ──
    const drawSignatureCrossStar = (cx: number, cy: number, size: number, alpha: number, flareColor: string) => {
      ctx.save();
      ctx.globalAlpha = Math.max(0.1, Math.min(1.0, alpha));

      // 1. Soft radial flare bloom
      const haloGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, size * 5.5);
      haloGrad.addColorStop(0, flareColor);
      haloGrad.addColorStop(0.35, 'rgba(168, 85, 247, 0.25)');
      haloGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = haloGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, size * 5.5, 0, Math.PI * 2);
      ctx.fill();

      // 2. Primary Horizontal & Vertical Beams (Sharp Tapered Cross)
      const beamLen = size * 6.5;
      const beamThick = Math.max(1.2, size * 0.4);

      // Horizontal Beam
      const hGrad = ctx.createLinearGradient(cx - beamLen, cy, cx + beamLen, cy);
      hGrad.addColorStop(0, 'rgba(255, 255, 255, 0)');
      hGrad.addColorStop(0.5, '#ffffff');
      hGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = hGrad;
      ctx.beginPath();
      ctx.moveTo(cx - beamLen, cy);
      ctx.lineTo(cx, cy - beamThick);
      ctx.lineTo(cx + beamLen, cy);
      ctx.lineTo(cx, cy + beamThick);
      ctx.closePath();
      ctx.fill();

      // Vertical Beam
      const vGrad = ctx.createLinearGradient(cx, cy - beamLen, cx, cy + beamLen);
      vGrad.addColorStop(0, 'rgba(255, 255, 255, 0)');
      vGrad.addColorStop(0.5, '#ffffff');
      vGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = vGrad;
      ctx.beginPath();
      ctx.moveTo(cx, cy - beamLen);
      ctx.lineTo(cx + beamThick, cy);
      ctx.lineTo(cx, cy + beamLen);
      ctx.lineTo(cx - beamThick, cy);
      ctx.closePath();
      ctx.fill();

      // 3. Diagonal 45-degree secondary diamond rays
      const diagLen = beamLen * 0.45;
      ctx.strokeStyle = flareColor;
      ctx.lineWidth = 1.0;
      ctx.beginPath();
      ctx.moveTo(cx - diagLen * 0.7, cy - diagLen * 0.7);
      ctx.lineTo(cx + diagLen * 0.7, cy + diagLen * 0.7);
      ctx.moveTo(cx - diagLen * 0.7, cy + diagLen * 0.7);
      ctx.lineTo(cx + diagLen * 0.7, cy - diagLen * 0.7);
      ctx.stroke();

      // 4. Brilliant White Center Core
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(cx, cy, Math.max(1.8, size * 0.5), 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    // ── 4. MAIN RENDER LOOP (FLOWING COSMIC CONTOUR WAVES & ORBITAL TRAJECTORY) ──
    const render = () => {
      time += 0.014;

      // 1. Deep Atmospheric Background
      const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
      skyGrad.addColorStop(0, palette.skyTop);
      skyGrad.addColorStop(0.45, palette.skyMid);
      skyGrad.addColorStop(1, palette.skyBottom);
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Astronomical Coordinate Hairline Grid (Faint & Precise)
      ctx.save();
      ctx.strokeStyle = palette.gridHairline;
      ctx.lineWidth = 1;
      const gridSpacingX = width * 0.18;
      for (let gx = gridSpacingX; gx < width; gx += gridSpacingX) {
        ctx.beginPath();
        ctx.moveTo(gx, 0);
        ctx.lineTo(gx, height);
        ctx.stroke();
      }
      ctx.restore();

      // 3. Vertical Celestial Meridian Line with Coordinate Ticks (At x ~ 0.92, from user image!)
      ctx.save();
      const meridianX = width * 0.93;
      ctx.strokeStyle = palette.meridianLine;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(meridianX, 0);
      ctx.lineTo(meridianX, height);
      ctx.stroke();

      // Small tick marks along meridian line
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 1;
      for (let my = 60; my < height; my += 80) {
        ctx.beginPath();
        ctx.moveTo(meridianX - 4, my);
        ctx.lineTo(meridianX + 4, my);
        ctx.stroke();
      }
      ctx.restore();

      // 4. Large Sweeping Orbital Trajectory Arcs (From user image!)
      ctx.save();
      const orbitCenterX = width * 0.65;
      const orbitCenterY = height * 0.85;
      const orbitRadiusX = Math.min(width, height) * 0.95;
      const orbitRadiusY = Math.min(width, height) * 0.55;

      // Primary solid orbital arc
      ctx.strokeStyle = palette.orbitStroke;
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.ellipse(orbitCenterX, orbitCenterY, orbitRadiusX, orbitRadiusY, -0.38, Math.PI * 0.8, Math.PI * 1.95);
      ctx.stroke();

      // Secondary dashed orbital trajectory
      ctx.setLineDash([4, 10]);
      ctx.strokeStyle = palette.orbitDashed;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.ellipse(orbitCenterX, orbitCenterY, orbitRadiusX * 1.06, orbitRadiusY * 1.06, -0.38, Math.PI * 0.75, Math.PI * 1.9);
      ctx.stroke();
      ctx.setLineDash([]);

      // Orbiting node markers on the arc
      const nodeAngles = [Math.PI * 1.15, Math.PI * 1.55, Math.PI * 1.82];
      for (const a of nodeAngles) {
        const nx = orbitCenterX + Math.cos(a - 0.38) * orbitRadiusX;
        const ny = orbitCenterY + Math.sin(a - 0.38) * orbitRadiusY;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(nx, ny, 2.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = palette.crossFlareColor;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(nx, ny, 5.5, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();

      // 5. WAVE LAYER 1: Upper-Mid Diagonal Flowing Cosmic Ribbon (Signature S-Curve)
      const sway1 = Math.sin(time * 0.3) * 12;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, height * 0.38 + sway1);
      ctx.bezierCurveTo(
        width * 0.28, height * 0.32 + sway1 * 0.8,
        width * 0.55, height * 0.56 - sway1 * 0.5,
        width * 0.82, height * 0.44 + sway1
      );
      ctx.bezierCurveTo(
        width * 0.94, height * 0.40 - sway1,
        width * 0.98, height * 0.45,
        width, height * 0.48
      );
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      const wave1Grad = ctx.createLinearGradient(0, height * 0.32, width, height);
      wave1Grad.addColorStop(0, palette.wave1FillTop);
      wave1Grad.addColorStop(0.65, palette.wave1FillBottom);
      wave1Grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = wave1Grad;
      ctx.fill();

      // Crisp glowing vector contour stroke on Wave 1 edge
      ctx.strokeStyle = palette.wave1Stroke;
      ctx.lineWidth = 1.8;
      ctx.shadowColor = palette.wave1Glow;
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.moveTo(0, height * 0.38 + sway1);
      ctx.bezierCurveTo(
        width * 0.28, height * 0.32 + sway1 * 0.8,
        width * 0.55, height * 0.56 - sway1 * 0.5,
        width * 0.82, height * 0.44 + sway1
      );
      ctx.bezierCurveTo(
        width * 0.94, height * 0.40 - sway1,
        width * 0.98, height * 0.45,
        width, height * 0.48
      );
      ctx.stroke();
      ctx.restore();

      // 6. WAVE LAYER 2: Lower Diagonal Undulating Cosmic Ribbon
      const sway2 = Math.cos(time * 0.26) * 14;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, height * 0.58 + sway2);
      ctx.bezierCurveTo(
        width * 0.22, height * 0.50 + sway2,
        width * 0.48, height * 0.72 - sway2 * 0.6,
        width * 0.76, height * 0.62 + sway2 * 0.8
      );
      ctx.bezierCurveTo(
        width * 0.88, height * 0.58 - sway2,
        width * 0.96, height * 0.66,
        width, height * 0.68
      );
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      const wave2Grad = ctx.createLinearGradient(0, height * 0.5, width, height);
      wave2Grad.addColorStop(0, palette.wave2FillTop);
      wave2Grad.addColorStop(0.5, palette.wave2FillBottom);
      wave2Grad.addColorStop(1, 'rgba(5, 5, 12, 0.95)');
      ctx.fillStyle = wave2Grad;
      ctx.fill();

      // Crisp glowing vector contour stroke on Wave 2 edge
      ctx.strokeStyle = palette.wave2Stroke;
      ctx.lineWidth = 1.6;
      ctx.shadowColor = palette.wave2Glow;
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.moveTo(0, height * 0.58 + sway2);
      ctx.bezierCurveTo(
        width * 0.22, height * 0.50 + sway2,
        width * 0.48, height * 0.72 - sway2 * 0.6,
        width * 0.76, height * 0.62 + sway2 * 0.8
      );
      ctx.bezierCurveTo(
        width * 0.88, height * 0.58 - sway2,
        width * 0.96, height * 0.66,
        width, height * 0.68
      );
      ctx.stroke();
      ctx.restore();

      // 7. WAVE LAYER 3: Deep Base Silhouette Wave
      const sway3 = Math.sin(time * 0.32) * 8;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, height * 0.76 + sway3);
      ctx.bezierCurveTo(
        width * 0.32, height * 0.68 + sway3,
        width * 0.62, height * 0.82 - sway3,
        width, height * 0.74 + sway3
      );
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      const wave3Grad = ctx.createLinearGradient(0, height * 0.7, 0, height);
      wave3Grad.addColorStop(0, palette.wave3FillTop);
      wave3Grad.addColorStop(1, palette.wave3FillBottom);
      ctx.fillStyle = wave3Grad;
      ctx.fill();

      ctx.strokeStyle = palette.wave3Stroke;
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(0, height * 0.76 + sway3);
      ctx.bezierCurveTo(
        width * 0.32, height * 0.68 + sway3,
        width * 0.62, height * 0.82 - sway3,
        width, height * 0.74 + sway3
      );
      ctx.stroke();
      ctx.restore();

      // 8. Faint Geometric Constellation Vector Lines
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.lineWidth = 0.9;
      // Connect 4 prominent stars in an elegant celestial asterism
      ctx.beginPath();
      ctx.moveTo(width * 0.56, height * 0.08);
      ctx.lineTo(width * 0.69, height * 0.08);
      ctx.lineTo(width * 0.86, height * 0.38);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(width * 0.24, height * 0.36);
      ctx.lineTo(width * 0.34, height * 0.65);
      ctx.stroke();
      ctx.restore();

      // 9. Twinkling Vector Stars & Signature 4-Point Diamond Crosses
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        if (!prefersReducedMotion) {
          s.phase += s.speed;
        }

        const twinkle = Math.sin(s.phase);
        const currentAlpha = Math.max(0.15, Math.min(1.0, s.alpha + twinkle * 0.35));

        if (s.isLargeCross) {
          drawSignatureCrossStar(s.x, s.y, s.size, currentAlpha, palette.crossFlareColor);
        } else {
          // Sharp micro diamond stardust
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
          ctx.fillStyle = s.color;
          ctx.globalAlpha = currentAlpha;
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1.0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
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
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ willChange: 'transform' }}
      />
    </div>
  );
};
