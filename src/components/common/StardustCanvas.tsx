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
      initStars();
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // ──────────────────────────────────────────────────────────────────────────
    // 1. PALETTES BY THEME (MATCHING EXACT USER SCREENSHOT AESTHETIC)
    // ──────────────────────────────────────────────────────────────────────────
    const themePalettes = {
      'deep-space': {
        // Signature Midnight Indigo & Royal Violet (from user's screenshot)
        skyTop: '#060714',
        skyMid: '#0e102b',
        skyBottom: '#070814',
        nebulaGlow: 'rgba(126, 34, 206, 0.12)',
        
        // Ribbon 1 (Upper-Mid Floating Ribbon)
        wave1FillTop: 'rgba(88, 28, 135, 0.40)',
        wave1FillBottom: 'rgba(30, 27, 75, 0.12)',
        wave1Stroke: 'rgba(192, 132, 252, 0.65)',
        wave1Glow: 'rgba(168, 85, 247, 0.75)',

        // Ribbon 2 (Mid-Lower Body Ribbon)
        wave2FillTop: 'rgba(67, 56, 202, 0.45)',
        wave2FillBottom: 'rgba(15, 23, 42, 0.28)',
        wave2Stroke: 'rgba(165, 180, 252, 0.55)',
        wave2Glow: 'rgba(129, 140, 248, 0.60)',

        // Ribbon 3 (Lower Base Strata)
        wave3FillTop: 'rgba(49, 46, 129, 0.55)',
        wave3FillBottom: 'rgba(7, 8, 20, 0.88)',
        wave3Stroke: 'rgba(147, 51, 234, 0.45)',
        wave3Glow: 'rgba(126, 34, 206, 0.40)',

        // Ribbon 4 (Deep Horizon Floor)
        wave4FillTop: 'rgba(23, 14, 46, 0.70)',
        wave4FillBottom: 'rgba(4, 5, 12, 0.98)',
        wave4Stroke: 'rgba(216, 180, 254, 0.30)',

        // Orbital mechanics & astronomical cartography
        orbitStroke: 'rgba(192, 132, 252, 0.38)',
        orbitDashed: 'rgba(147, 51, 234, 0.24)',
        meridianLine: 'rgba(168, 85, 247, 0.25)',
        meridianTick: 'rgba(216, 180, 254, 0.22)',
        gridHairline: 'rgba(255, 255, 255, 0.04)',
        constellationLine: 'rgba(168, 85, 247, 0.16)',

        // Starfield
        starColors: ['#ffffff', '#e0e7ff', '#c084fc', '#a78bfa', '#818cf8', '#fef08a'],
        largeStarColor: '#ffffff',
        crossFlareColor: 'rgba(192, 132, 252, 0.90)',
        shootingStarColor: '#c084fc',
      },
      'cosmic-cliffs': {
        // Carina Amber-Copper & Crimson Dawn
        skyTop: '#08050e',
        skyMid: '#1a0d18',
        skyBottom: '#0c0507',
        nebulaGlow: 'rgba(245, 158, 11, 0.14)',

        wave1FillTop: 'rgba(180, 83, 9, 0.38)',
        wave1FillBottom: 'rgba(69, 26, 3, 0.12)',
        wave1Stroke: 'rgba(251, 191, 36, 0.65)',
        wave1Glow: 'rgba(245, 158, 11, 0.75)',

        wave2FillTop: 'rgba(159, 18, 57, 0.42)',
        wave2FillBottom: 'rgba(45, 10, 18, 0.28)',
        wave2Stroke: 'rgba(251, 113, 133, 0.55)',
        wave2Glow: 'rgba(244, 63, 94, 0.60)',

        wave3FillTop: 'rgba(120, 53, 15, 0.55)',
        wave3FillBottom: 'rgba(15, 5, 2, 0.88)',
        wave3Stroke: 'rgba(245, 158, 11, 0.45)',
        wave3Glow: 'rgba(217, 119, 6, 0.40)',

        wave4FillTop: 'rgba(38, 16, 4, 0.70)',
        wave4FillBottom: 'rgba(5, 2, 2, 0.98)',
        wave4Stroke: 'rgba(252, 211, 77, 0.30)',

        orbitStroke: 'rgba(251, 191, 36, 0.38)',
        orbitDashed: 'rgba(245, 158, 11, 0.24)',
        meridianLine: 'rgba(245, 158, 11, 0.25)',
        meridianTick: 'rgba(253, 230, 138, 0.22)',
        gridHairline: 'rgba(255, 255, 255, 0.04)',
        constellationLine: 'rgba(245, 158, 11, 0.16)',

        starColors: ['#ffffff', '#fef08a', '#fde047', '#f59e0b', '#fed7aa', '#fca5a5'],
        largeStarColor: '#ffffff',
        crossFlareColor: 'rgba(251, 191, 36, 0.90)',
        shootingStarColor: '#fbbf24',
      },
      'pillars-of-creation': {
        // Cygnus Aurora Abyss (Teal, Cyan & Emerald)
        skyTop: '#02090e',
        skyMid: '#05181c',
        skyBottom: '#020b0c',
        nebulaGlow: 'rgba(20, 184, 166, 0.14)',

        wave1FillTop: 'rgba(13, 148, 136, 0.38)',
        wave1FillBottom: 'rgba(4, 47, 46, 0.12)',
        wave1Stroke: 'rgba(45, 212, 191, 0.65)',
        wave1Glow: 'rgba(20, 184, 166, 0.75)',

        wave2FillTop: 'rgba(6, 182, 212, 0.42)',
        wave2FillBottom: 'rgba(8, 47, 73, 0.28)',
        wave2Stroke: 'rgba(103, 232, 249, 0.55)',
        wave2Glow: 'rgba(6, 182, 212, 0.60)',

        wave3FillTop: 'rgba(5, 150, 105, 0.55)',
        wave3FillBottom: 'rgba(2, 44, 34, 0.88)',
        wave3Stroke: 'rgba(52, 211, 153, 0.45)',
        wave3Glow: 'rgba(16, 185, 129, 0.40)',

        wave4FillTop: 'rgba(2, 32, 26, 0.70)',
        wave4FillBottom: 'rgba(1, 14, 11, 0.98)',
        wave4Stroke: 'rgba(110, 231, 183, 0.30)',

        orbitStroke: 'rgba(45, 212, 191, 0.38)',
        orbitDashed: 'rgba(20, 184, 166, 0.24)',
        meridianLine: 'rgba(20, 184, 166, 0.25)',
        meridianTick: 'rgba(153, 246, 228, 0.22)',
        gridHairline: 'rgba(255, 255, 255, 0.04)',
        constellationLine: 'rgba(20, 184, 166, 0.16)',

        starColors: ['#ffffff', '#e0f2fe', '#67e8f9', '#2dd4bf', '#a7f3d0', '#fef08a'],
        largeStarColor: '#ffffff',
        crossFlareColor: 'rgba(103, 232, 249, 0.90)',
        shootingStarColor: '#2dd4bf',
      },
    };

    const palette = themePalettes[currentTheme];

    // ──────────────────────────────────────────────────────────────────────────
    // 2. PARTICLES & SIGNATURE 4-POINT CROSS STARS (FROM USER SCREENSHOT)
    // ──────────────────────────────────────────────────────────────────────────
    let stars: StardustStar[] = [];

    // Signature prominent stars calibrated directly to the positions in user's image
    const fixedStarPositions = [
      { rx: 0.56, ry: 0.08, size: 5.8 },  // Top center primary star
      { rx: 0.25, ry: 0.36, size: 5.0 },  // Left mid-wave star
      { rx: 0.35, ry: 0.65, size: 4.4 },  // Lower-left wave star
      { rx: 0.69, ry: 0.08, size: 3.8 },  // Top right star
      { rx: 0.88, ry: 0.38, size: 4.8 },  // Right wave star
      { rx: 0.15, ry: 0.18, size: 3.6 },  // Upper left star
      { rx: 0.82, ry: 0.72, size: 4.0 },  // Lower right star
    ];

    const initStars = () => {
      stars = [];
      for (const fp of fixedStarPositions) {
        stars.push({
          x: fp.rx * width,
          y: fp.ry * height,
          size: fp.size,
          alpha: 0.95,
          speed: 0.016,
          phase: Math.random() * Math.PI * 2,
          color: palette.largeStarColor,
          isLargeCross: true,
        });
      }

      // Ambient scattered micro-stars
      const count = width < 768 ? 95 : 180;
      for (let i = 0; i < count; i++) {
        const isLargeCross = Math.random() > 0.92;
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: isLargeCross ? Math.random() * 1.8 + 2.8 : Math.random() * 1.3 + 0.6,
          alpha: Math.random() * 0.6 + 0.3,
          speed: Math.random() * 0.02 + 0.008,
          phase: Math.random() * Math.PI * 2,
          color: palette.starColors[Math.floor(Math.random() * palette.starColors.length)],
          isLargeCross,
        });
      }
    };
    initStars();

    // Occasional cosmic shooting star / bolide
    interface ShootingStar {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      alpha: number;
      active: boolean;
    }

    const shootingStar: ShootingStar = {
      x: -100,
      y: -100,
      length: 130,
      speed: 16,
      angle: Math.PI / 4 + 0.08,
      alpha: 0,
      active: false,
    };

    let shootingStarCooldown = Math.random() * 160 + 100;

    const updateAndDrawShootingStar = () => {
      if (!shootingStar.active) {
        shootingStarCooldown--;
        if (shootingStarCooldown <= 0 && !prefersReducedMotion) {
          shootingStar.active = true;
          shootingStar.x = Math.random() * (width * 0.65);
          shootingStar.y = Math.random() * (height * 0.30);
          shootingStar.alpha = 1.0;
          shootingStar.length = Math.random() * 70 + 90;
          shootingStarCooldown = Math.random() * 320 + 220;
        }
      } else {
        shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
        shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
        shootingStar.alpha -= 0.016;

        if (shootingStar.alpha <= 0 || shootingStar.x > width + 100 || shootingStar.y > height + 100) {
          shootingStar.active = false;
        } else {
          ctx.save();
          const tailX = shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length;
          const tailY = shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length;

          const bolideGrad = ctx.createLinearGradient(tailX, tailY, shootingStar.x, shootingStar.y);
          bolideGrad.addColorStop(0, 'rgba(255, 255, 255, 0)');
          bolideGrad.addColorStop(0.7, palette.crossFlareColor);
          bolideGrad.addColorStop(1, '#ffffff');

          ctx.strokeStyle = bolideGrad;
          ctx.lineWidth = 1.8;
          ctx.shadowColor = palette.shootingStarColor;
          ctx.shadowBlur = 12;
          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(shootingStar.x, shootingStar.y);
          ctx.stroke();

          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(shootingStar.x, shootingStar.y, 2.2, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }
    };

    // ──────────────────────────────────────────────────────────────────────────
    // 3. DRAW SIGNATURE 4-POINT CROSS STAR (FROM USER SCREENSHOT)
    // ──────────────────────────────────────────────────────────────────────────
    const drawSignatureCrossStar = (cx: number, cy: number, size: number, alpha: number, flareColor: string) => {
      ctx.save();
      ctx.globalAlpha = Math.max(0.12, Math.min(1.0, alpha));

      // 1. Soft radial flare bloom
      const haloGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, size * 5.8);
      haloGrad.addColorStop(0, flareColor);
      haloGrad.addColorStop(0.40, 'rgba(168, 85, 247, 0.22)');
      haloGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = haloGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, size * 5.8, 0, Math.PI * 2);
      ctx.fill();

      // 2. Primary Horizontal & Vertical Beams (Sharp Tapered Cross)
      const beamLen = size * 6.8;
      const beamThick = Math.max(1.2, size * 0.38);

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
      const diagLen = beamLen * 0.42;
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

    let time = 0;

    // ──────────────────────────────────────────────────────────────────────────
    // 4. MAIN RENDER LOOP: FLOWING COSMIC RIBBONS & ORBITAL TRAJECTORIES
    // ──────────────────────────────────────────────────────────────────────────
    const render = () => {
      time += 0.012;

      // 1. Deep Atmospheric Background Sky
      const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
      skyGrad.addColorStop(0, palette.skyTop);
      skyGrad.addColorStop(0.48, palette.skyMid);
      skyGrad.addColorStop(1, palette.skyBottom);
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, width, height);

      // Subtle Galactic Core Glow in the upper cosmos
      const coreGlow = ctx.createRadialGradient(width * 0.72, height * 0.25, 0, width * 0.72, height * 0.25, width * 0.65);
      coreGlow.addColorStop(0, palette.nebulaGlow);
      coreGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = coreGlow;
      ctx.fillRect(0, 0, width, height);

      // 2. Faint Astronomical Coordinate Hairline Grid (Cartography)
      ctx.save();
      ctx.strokeStyle = palette.gridHairline;
      ctx.lineWidth = 1;
      const gridSpacingX = width * 0.16;
      for (let gx = gridSpacingX; gx < width; gx += gridSpacingX) {
        ctx.beginPath();
        ctx.moveTo(gx, 0);
        ctx.lineTo(gx, height);
        ctx.stroke();
      }
      ctx.restore();

      // 3. Vertical Celestial Meridian Line with Degree Ticks (At x ~ 0.93, directly from user screenshot!)
      ctx.save();
      const meridianX = width * 0.93;
      ctx.strokeStyle = palette.meridianLine;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(meridianX, 0);
      ctx.lineTo(meridianX, height);
      ctx.stroke();

      // Coordinate tick marks along meridian line
      ctx.strokeStyle = palette.meridianTick;
      ctx.lineWidth = 1;
      for (let my = 50; my < height; my += 70) {
        ctx.beginPath();
        ctx.moveTo(meridianX - 4, my);
        ctx.lineTo(meridianX + 4, my);
        ctx.stroke();
      }
      ctx.restore();

      // 4. Sweeping Planetary Orbital Trajectory Arcs (From user screenshot!)
      ctx.save();
      const orbitCenterX = width * 0.62;
      const orbitCenterY = height * 0.88;
      const orbitRadiusX = Math.min(width, height) * 0.98;
      const orbitRadiusY = Math.min(width, height) * 0.58;

      // Primary solid orbital arc
      ctx.strokeStyle = palette.orbitStroke;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.ellipse(orbitCenterX, orbitCenterY, orbitRadiusX, orbitRadiusY, -0.36, Math.PI * 0.8, Math.PI * 1.95);
      ctx.stroke();

      // Secondary concentric dashed orbital trajectory
      ctx.setLineDash([4, 10]);
      ctx.strokeStyle = palette.orbitDashed;
      ctx.lineWidth = 1.1;
      ctx.beginPath();
      ctx.ellipse(orbitCenterX, orbitCenterY, orbitRadiusX * 1.07, orbitRadiusY * 1.07, -0.36, Math.PI * 0.75, Math.PI * 1.92);
      ctx.stroke();
      ctx.setLineDash([]);

      // Orbiting beacon nodes along the trajectory
      const nodeAngles = [Math.PI * 1.12, Math.PI * 1.52, Math.PI * 1.84];
      for (const a of nodeAngles) {
        const nx = orbitCenterX + Math.cos(a - 0.36) * orbitRadiusX;
        const ny = orbitCenterY + Math.sin(a - 0.36) * orbitRadiusY;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(nx, ny, 2.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = palette.crossFlareColor;
        ctx.lineWidth = 1.0;
        ctx.beginPath();
        ctx.arc(nx, ny, 5.5, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();

      // 5. Constellation Guide Lines (Connecting prominent cross stars with fine hairline dashes)
      ctx.save();
      ctx.setLineDash([3, 8]);
      ctx.strokeStyle = palette.constellationLine;
      ctx.lineWidth = 0.9;
      ctx.beginPath();
      if (stars.length >= 5) {
        ctx.moveTo(stars[0].x, stars[0].y);
        ctx.lineTo(stars[3].x, stars[3].y);
        ctx.lineTo(stars[4].x, stars[4].y);
        ctx.moveTo(stars[1].x, stars[1].y);
        ctx.lineTo(stars[2].x, stars[2].y);
      }
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // 6. MULTI-LAYERED FLOWING COSMIC CONTOUR WAVES (BILLOWING RIBBONS)
      // Wave 1: Upper-Mid Diagonal Flowing Cosmic Ribbon (Signature S-Curve)
      const sway1 = Math.sin(time * 0.28) * 12;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, height * 0.36 + sway1);
      ctx.bezierCurveTo(
        width * 0.26, height * 0.30 + sway1 * 0.8,
        width * 0.54, height * 0.54 - sway1 * 0.6,
        width * 0.80, height * 0.42 + sway1
      );
      ctx.bezierCurveTo(
        width * 0.92, height * 0.38 - sway1,
        width * 0.98, height * 0.44,
        width, height * 0.46
      );
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      const wave1Grad = ctx.createLinearGradient(0, height * 0.30, width, height);
      wave1Grad.addColorStop(0, palette.wave1FillTop);
      wave1Grad.addColorStop(0.65, palette.wave1FillBottom);
      wave1Grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = wave1Grad;
      ctx.fill();

      // Glowing vector contour stroke on Wave 1 edge
      ctx.strokeStyle = palette.wave1Stroke;
      ctx.lineWidth = 1.8;
      ctx.shadowColor = palette.wave1Glow;
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.moveTo(0, height * 0.36 + sway1);
      ctx.bezierCurveTo(
        width * 0.26, height * 0.30 + sway1 * 0.8,
        width * 0.54, height * 0.54 - sway1 * 0.6,
        width * 0.80, height * 0.42 + sway1
      );
      ctx.bezierCurveTo(
        width * 0.92, height * 0.38 - sway1,
        width * 0.98, height * 0.44,
        width, height * 0.46
      );
      ctx.stroke();
      ctx.restore();

      // Wave 2: Mid Diagonal Undulating Cosmic Ribbon
      const sway2 = Math.cos(time * 0.24) * 14;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, height * 0.54 + sway2);
      ctx.bezierCurveTo(
        width * 0.24, height * 0.48 + sway2,
        width * 0.50, height * 0.68 - sway2 * 0.6,
        width * 0.78, height * 0.58 + sway2 * 0.8
      );
      ctx.bezierCurveTo(
        width * 0.90, height * 0.54 - sway2,
        width * 0.96, height * 0.62,
        width, height * 0.64
      );
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      const wave2Grad = ctx.createLinearGradient(0, height * 0.48, width, height);
      wave2Grad.addColorStop(0, palette.wave2FillTop);
      wave2Grad.addColorStop(0.55, palette.wave2FillBottom);
      wave2Grad.addColorStop(1, 'rgba(4, 5, 12, 0.95)');
      ctx.fillStyle = wave2Grad;
      ctx.fill();

      // Glowing vector contour stroke on Wave 2 edge
      ctx.strokeStyle = palette.wave2Stroke;
      ctx.lineWidth = 1.6;
      ctx.shadowColor = palette.wave2Glow;
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.moveTo(0, height * 0.54 + sway2);
      ctx.bezierCurveTo(
        width * 0.24, height * 0.48 + sway2,
        width * 0.50, height * 0.68 - sway2 * 0.6,
        width * 0.78, height * 0.58 + sway2 * 0.8
      );
      ctx.bezierCurveTo(
        width * 0.90, height * 0.54 - sway2,
        width * 0.96, height * 0.62,
        width, height * 0.64
      );
      ctx.stroke();
      ctx.restore();

      // Wave 3: Lower Deep Cosmic Silk Ribbon
      const sway3 = Math.sin(time * 0.30) * 10;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, height * 0.72 + sway3);
      ctx.bezierCurveTo(
        width * 0.30, height * 0.65 + sway3,
        width * 0.60, height * 0.78 - sway3,
        width, height * 0.70 + sway3
      );
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      const wave3Grad = ctx.createLinearGradient(0, height * 0.68, 0, height);
      wave3Grad.addColorStop(0, palette.wave3FillTop);
      wave3Grad.addColorStop(1, palette.wave3FillBottom);
      ctx.fillStyle = wave3Grad;
      ctx.fill();

      ctx.strokeStyle = palette.wave3Stroke;
      ctx.lineWidth = 1.4;
      ctx.shadowColor = palette.wave3Glow;
      ctx.shadowBlur = 6;
      ctx.beginPath();
      ctx.moveTo(0, height * 0.72 + sway3);
      ctx.bezierCurveTo(
        width * 0.30, height * 0.65 + sway3,
        width * 0.60, height * 0.78 - sway3,
        width, height * 0.70 + sway3
      );
      ctx.stroke();
      ctx.restore();

      // Wave 4: Base Stratosphere Silhouette
      const sway4 = Math.cos(time * 0.20) * 6;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, height * 0.86 + sway4);
      ctx.bezierCurveTo(
        width * 0.38, height * 0.82 + sway4,
        width * 0.72, height * 0.90 - sway4,
        width, height * 0.84 + sway4
      );
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      const wave4Grad = ctx.createLinearGradient(0, height * 0.84, 0, height);
      wave4Grad.addColorStop(0, palette.wave4FillTop);
      wave4Grad.addColorStop(1, palette.wave4FillBottom);
      ctx.fillStyle = wave4Grad;
      ctx.fill();

      ctx.strokeStyle = palette.wave4Stroke;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(0, height * 0.86 + sway4);
      ctx.bezierCurveTo(
        width * 0.38, height * 0.82 + sway4,
        width * 0.72, height * 0.90 - sway4,
        width, height * 0.84 + sway4
      );
      ctx.stroke();
      ctx.restore();

      // 7. RENDER PARTICLES & SIGNATURE 4-POINT CROSS STARS
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        if (!prefersReducedMotion) {
          s.phase += s.speed;
        }
        const tw = Math.sin(s.phase) * 0.35 + s.alpha;
        const currentAlpha = Math.max(0.12, Math.min(1.0, tw));

        if (s.isLargeCross) {
          drawSignatureCrossStar(s.x, s.y, s.size, currentAlpha, palette.crossFlareColor);
        } else {
          ctx.save();
          ctx.fillStyle = s.color;
          ctx.globalAlpha = currentAlpha;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      // 8. Bolide / Shooting Star
      updateAndDrawShootingStar();

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
