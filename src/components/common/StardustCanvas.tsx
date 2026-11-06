import React, { useEffect, useRef } from 'react';
import { WallpaperTheme } from '../../types';
import { useData } from '../../context/DataContext';

interface VectorStar {
  x: number;
  y: number;
  size: number;
  alpha: number;
  speed: number;
  phase: number;
  color: string;
  isFourPoint?: boolean;
}

interface VectorShootingStar {
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

    // ── 1. VECTOR STARS INITIALIZATION ──
    const starCount = width < 768 ? 75 : 130;
    const stars: VectorStar[] = [];

    const starColorMap: Record<WallpaperTheme, string[]> = {
      'cosmic-cliffs': ['#ffffff', '#fde047', '#fb923c', '#fdba74', '#bae6fd'],
      'pillars-of-creation': ['#ffffff', '#6ee7b7', '#67e8f9', '#a7f3d0', '#38bdf8'],
      'deep-space': ['#ffffff', '#e2e8f0', '#cbd5e1', '#fef08a', '#c084fc'],
    };

    const currentPalette = starColorMap[currentTheme] || starColorMap['cosmic-cliffs'];

    for (let i = 0; i < starCount; i++) {
      const isFourPoint = Math.random() > 0.82;
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: isFourPoint ? Math.random() * 2.2 + 2.4 : Math.random() * 1.4 + 0.8,
        alpha: Math.random() * 0.6 + 0.3,
        speed: Math.random() * 0.025 + 0.01,
        phase: Math.random() * Math.PI * 2,
        color: currentPalette[Math.floor(Math.random() * currentPalette.length)],
        isFourPoint,
      });
    }

    // ── 2. VECTOR SHOOTING STARS ──
    const shootingStars: VectorShootingStar[] = [];
    let lastSpawnTime = Date.now();

    const spawnShootingStar = () => {
      const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.25;
      shootingStars.push({
        x: Math.random() * width * 0.75 + width * 0.1,
        y: Math.random() * height * 0.35,
        length: Math.random() * 80 + 70,
        speed: Math.random() * 9 + 8,
        angle,
        alpha: 1.0,
        decay: Math.random() * 0.025 + 0.015,
        color: currentTheme === 'pillars-of-creation' ? '#67e8f9' : currentTheme === 'deep-space' ? '#e2e8f0' : '#fde047',
      });
    };

    let time = 0;

    // ── 3. HELPER VECTOR DRAWING PRIMITIVES ──

    // Draw sharp 4-point vector star
    const drawFourPointVectorStar = (cx: number, cy: number, r: number, alpha: number, color: string) => {
      ctx.save();
      ctx.fillStyle = color;
      ctx.globalAlpha = Math.max(0.1, Math.min(1.0, alpha));
      ctx.beginPath();
      // 4-point diamond star polygon
      ctx.moveTo(cx, cy - r * 2.2);
      ctx.lineTo(cx + r * 0.45, cy - r * 0.45);
      ctx.lineTo(cx + r * 2.2, cy);
      ctx.lineTo(cx + r * 0.45, cy + r * 0.45);
      ctx.lineTo(cx, cy + r * 2.2);
      ctx.lineTo(cx - r * 0.45, cy + r * 0.45);
      ctx.lineTo(cx - r * 2.2, cy);
      ctx.lineTo(cx - r * 0.45, cy - r * 0.45);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    // Draw a faceted vector mountain peak with distinct Lit and Shadow facets
    const drawFacetedMountain = (
      baseX: number,
      baseY: number,
      peakX: number,
      peakY: number,
      leftWidth: number,
      rightWidth: number,
      litColor: string,
      shadowColor: string,
      rimColor?: string
    ) => {
      // Lit Left Facet
      ctx.fillStyle = litColor;
      ctx.beginPath();
      ctx.moveTo(peakX, peakY);
      ctx.lineTo(baseX - leftWidth, baseY);
      ctx.lineTo(baseX, baseY);
      ctx.closePath();
      ctx.fill();

      // Shadow Right Facet
      ctx.fillStyle = shadowColor;
      ctx.beginPath();
      ctx.moveTo(peakX, peakY);
      ctx.lineTo(baseX, baseY);
      ctx.lineTo(baseX + rightWidth, baseY);
      ctx.closePath();
      ctx.fill();

      // Sharp Vector Ridge Line
      if (rimColor) {
        ctx.strokeStyle = rimColor;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(peakX, peakY);
        ctx.lineTo(baseX, baseY);
        ctx.stroke();

        // Left illuminated edge stroke
        ctx.beginPath();
        ctx.moveTo(baseX - leftWidth, baseY);
        ctx.lineTo(peakX, peakY);
        ctx.stroke();
      }
    };

    // ── THEME 1: CARINA COSMIC CLIFFS (FACETED VECTOR MOUNTAIN SPIRES & RINGED CELESTIAL PLANET) ──
    const renderVectorCosmicCliffs = (t: number) => {
      // 1. Vector Sky Color Bands
      const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
      skyGrad.addColorStop(0, '#060a17');
      skyGrad.addColorStop(0.35, '#16122d');
      skyGrad.addColorStop(0.65, '#2b1022');
      skyGrad.addColorStop(0.85, '#451a03');
      skyGrad.addColorStop(1, '#1b0802');
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Crepuscular Vector Light Beams (Clean stylized vector rays)
      ctx.save();
      const rayOriginX = width * 0.25;
      const rayOriginY = height * 0.55;
      const rayCount = 5;
      for (let r = 0; r < rayCount; r++) {
        const spread = (r - 2) * (width * 0.14) + Math.sin(t * 0.25 + r) * 10;
        ctx.fillStyle = r % 2 === 0 ? 'rgba(251, 191, 36, 0.05)' : 'rgba(245, 158, 11, 0.03)';
        ctx.beginPath();
        ctx.moveTo(rayOriginX, rayOriginY);
        ctx.lineTo(rayOriginX + spread - width * 0.08, 0);
        ctx.lineTo(rayOriginX + spread + width * 0.08, 0);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();

      // 3. Giant Stylized Vector Ringed Planet (Upper Right)
      ctx.save();
      const planetX = width * 0.80;
      const planetY = height * 0.20;
      const planetR = Math.min(width, height) * 0.12;

      // Outer Back Ring
      ctx.strokeStyle = 'rgba(253, 224, 71, 0.35)';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.ellipse(planetX, planetY, planetR * 1.9, planetR * 0.45, -0.35, Math.PI, Math.PI * 2);
      ctx.stroke();

      // Planet Sphere Body
      const planetGrad = ctx.createLinearGradient(planetX - planetR, planetY - planetR, planetX + planetR, planetY + planetR);
      planetGrad.addColorStop(0, '#fde047');
      planetGrad.addColorStop(0.3, '#f59e0b');
      planetGrad.addColorStop(0.7, '#b45309');
      planetGrad.addColorStop(1, '#451a03');
      ctx.fillStyle = planetGrad;
      ctx.beginPath();
      ctx.arc(planetX, planetY, planetR, 0, Math.PI * 2);
      ctx.fill();

      // Atmospheric Limb Glow
      ctx.strokeStyle = 'rgba(254, 240, 138, 0.7)';
      ctx.lineWidth = 1.8;
      ctx.stroke();

      // Outer Front Ring (crosses over planet)
      ctx.strokeStyle = 'rgba(253, 224, 71, 0.75)';
      ctx.lineWidth = 4.5;
      ctx.beginPath();
      ctx.ellipse(planetX, planetY, planetR * 1.9, planetR * 0.45, -0.35, 0, Math.PI);
      ctx.stroke();

      // Inner Fine Accent Ring
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.ellipse(planetX, planetY, planetR * 2.2, planetR * 0.52, -0.35, 0, Math.PI);
      ctx.stroke();
      ctx.restore();

      // 4. Vector Horizon Haze Arc
      const hazeGrad = ctx.createLinearGradient(0, height * 0.35, 0, height * 0.65);
      hazeGrad.addColorStop(0, 'rgba(245, 158, 11, 0)');
      hazeGrad.addColorStop(0.5, 'rgba(217, 119, 6, 0.18)');
      hazeGrad.addColorStop(1, 'rgba(120, 53, 15, 0)');
      ctx.fillStyle = hazeGrad;
      ctx.fillRect(0, height * 0.35, width, height * 0.3);

      // 5. LAYER 1: Distant Stylized Vector Mountain Peaks (Deep Violet)
      const distPeaks = [
        { bx: width * 0.12, px: width * 0.10, py: height * 0.32, lw: width * 0.18, rw: width * 0.16 },
        { bx: width * 0.32, px: width * 0.34, py: height * 0.28, lw: width * 0.20, rw: width * 0.22 },
        { bx: width * 0.58, px: width * 0.56, py: height * 0.30, lw: width * 0.22, rw: width * 0.24 },
        { bx: width * 0.85, px: width * 0.88, py: height * 0.34, lw: width * 0.22, rw: width * 0.18 },
      ];
      for (const p of distPeaks) {
        drawFacetedMountain(p.bx, height * 0.7, p.px, p.py, p.lw, p.rw, '#261b40', '#18112b', '#4c3a70');
      }

      // 6. LAYER 2: Midground Faceted Amber Spire Peaks
      const midPeaks = [
        { bx: width * 0.05, px: width * 0.06, py: height * 0.38, lw: width * 0.14, rw: width * 0.18, lit: '#b45309', shadow: '#78350f', rim: '#f59e0b' },
        { bx: width * 0.24, px: width * 0.22, py: height * 0.30, lw: width * 0.20, rw: width * 0.22, lit: '#d97706', shadow: '#92400e', rim: '#fde047' },
        { bx: width * 0.48, px: width * 0.50, py: height * 0.24, lw: width * 0.22, rw: width * 0.26, lit: '#b45309', shadow: '#78350f', rim: '#f59e0b' },
        { bx: width * 0.76, px: width * 0.74, py: height * 0.32, lw: width * 0.24, rw: width * 0.22, lit: '#d97706', shadow: '#92400e', rim: '#fde047' },
        { bx: width * 0.96, px: width * 0.98, py: height * 0.36, lw: width * 0.18, rw: width * 0.14, lit: '#b45309', shadow: '#78350f', rim: '#f59e0b' },
      ];
      for (const p of midPeaks) {
        drawFacetedMountain(p.bx, height * 0.85, p.px, p.py, p.lw, p.rw, p.lit, p.shadow, p.rim);
      }

      // 7. LAYER 3: Foreground High-Contrast Vector Promontory with Astronomical Observatory Dome
      const fgBaseY = height;
      ctx.fillStyle = '#0f0814';
      ctx.beginPath();
      ctx.moveTo(0, height * 0.62);
      ctx.lineTo(width * 0.18, height * 0.54);
      ctx.lineTo(width * 0.36, height * 0.60);
      ctx.lineTo(width * 0.55, height * 0.52);
      ctx.lineTo(width * 0.78, height * 0.58);
      ctx.lineTo(width, height * 0.54);
      ctx.lineTo(width, fgBaseY);
      ctx.lineTo(0, fgBaseY);
      ctx.closePath();
      ctx.fill();

      // Foreground Crisp Vector Rim Line
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.moveTo(0, height * 0.62);
      ctx.lineTo(width * 0.18, height * 0.54);
      ctx.lineTo(width * 0.36, height * 0.60);
      ctx.lineTo(width * 0.55, height * 0.52);
      ctx.lineTo(width * 0.78, height * 0.58);
      ctx.lineTo(width, height * 0.54);
      ctx.stroke();

      // Stylized Vector Observatory Dome on Promontory Peak (width * 0.18)
      ctx.save();
      const obsX = width * 0.18;
      const obsY = height * 0.54;
      const domeR = 18;

      // Base cylinder
      ctx.fillStyle = '#1c192e';
      ctx.fillRect(obsX - domeR, obsY - 8, domeR * 2, 10);
      ctx.strokeStyle = '#fde047';
      ctx.lineWidth = 1;
      ctx.strokeRect(obsX - domeR, obsY - 8, domeR * 2, 10);

      // Half sphere dome
      ctx.fillStyle = '#2d274c';
      ctx.beginPath();
      ctx.arc(obsX, obsY - 8, domeR, Math.PI, 0);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Slotted telescope aperture
      ctx.fillStyle = '#fde047';
      ctx.fillRect(obsX - 2.5, obsY - 24, 5, 14);

      // Vector Guide Laser firing upward into space
      const laserGrad = ctx.createLinearGradient(obsX, obsY - 24, obsX, 0);
      laserGrad.addColorStop(0, 'rgba(253, 224, 71, 0.9)');
      laserGrad.addColorStop(0.6, 'rgba(245, 158, 11, 0.4)');
      laserGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.strokeStyle = laserGrad;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(obsX, obsY - 24);
      ctx.lineTo(obsX, 0);
      ctx.stroke();
      ctx.restore();
    };

    // ── THEME 2: PILLARS OF CREATION (FACETED VECTOR MONOLITHS & CELESTIAL COMPASS ASTROLABE) ──
    const renderVectorPillarsOfCreation = (t: number) => {
      // 1. Vector Sky Gradient (Cyan-Abyss to Deep Mint)
      const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
      skyGrad.addColorStop(0, '#020b0e');
      skyGrad.addColorStop(0.35, '#05221d');
      skyGrad.addColorStop(0.7, '#07362f');
      skyGrad.addColorStop(1, '#021815');
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Large Stylized Celestial Compass / Astrolabe Rings in Sky
      ctx.save();
      const compassX = width * 0.50;
      const compassY = height * 0.24;
      const compassR = Math.min(width, height) * 0.20;

      // Outer coordinate ring
      ctx.strokeStyle = 'rgba(110, 231, 183, 0.25)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(compassX, compassY, compassR, 0, Math.PI * 2);
      ctx.stroke();

      // Degree tick marks on outer ring
      for (let d = 0; d < 360; d += 30) {
        const rad = (d * Math.PI) / 180;
        const x1 = compassX + Math.cos(rad) * (compassR - 5);
        const y1 = compassY + Math.sin(rad) * (compassR - 5);
        const x2 = compassX + Math.cos(rad) * (compassR + 5);
        const y2 = compassY + Math.sin(rad) * (compassR + 5);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      // Middle rotating ring
      const rotAngle = t * 0.05;
      ctx.strokeStyle = 'rgba(103, 232, 249, 0.4)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(compassX, compassY, compassR * 0.65, 0, Math.PI * 2);
      ctx.stroke();

      // Orbiting satellite node marker
      const satX = compassX + Math.cos(rotAngle) * (compassR * 0.65);
      const satY = compassY + Math.sin(rotAngle) * (compassR * 0.65);
      ctx.fillStyle = '#67e8f9';
      ctx.beginPath();
      ctx.arc(satX, satY, 4, 0, Math.PI * 2);
      ctx.fill();

      // Cardinal Axis Hairlines
      ctx.strokeStyle = 'rgba(52, 211, 153, 0.2)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(compassX - compassR * 1.2, compassY);
      ctx.lineTo(compassX + compassR * 1.2, compassY);
      ctx.moveTo(compassX, compassY - compassR * 1.2);
      ctx.lineTo(compassX, compassY + compassR * 1.2);
      ctx.stroke();
      ctx.restore();

      // Helper to draw a single faceted polygonal vector monolith
      const drawFacetedMonolith = (
        centerX: number,
        peakY: number,
        baseW: number,
        peakW: number,
        litColor: string,
        shadowColor: string,
        rimColor: string,
        beamColor?: string
      ) => {
        ctx.save();
        const baseY = height;

        // Lit Left Facet
        ctx.fillStyle = litColor;
        ctx.beginPath();
        ctx.moveTo(centerX - peakW / 2, peakY);
        ctx.lineTo(centerX, peakY - 14); // Crown spire point
        ctx.lineTo(centerX, baseY);
        ctx.lineTo(centerX - baseW / 2, baseY);
        ctx.closePath();
        ctx.fill();

        // Shadow Right Facet
        ctx.fillStyle = shadowColor;
        ctx.beginPath();
        ctx.moveTo(centerX, peakY - 14);
        ctx.lineTo(centerX + peakW / 2, peakY);
        ctx.lineTo(centerX + baseW / 2, baseY);
        ctx.lineTo(centerX, baseY);
        ctx.closePath();
        ctx.fill();

        // Sharp Vector Rim Stroke
        ctx.strokeStyle = rimColor;
        ctx.lineWidth = 2.0;
        ctx.beginPath();
        ctx.moveTo(centerX - baseW / 2, baseY);
        ctx.lineTo(centerX - peakW / 2, peakY);
        ctx.lineTo(centerX, peakY - 14);
        ctx.lineTo(centerX + peakW / 2, peakY);
        ctx.lineTo(centerX + baseW / 2, baseY);
        ctx.stroke();

        // Center Spine Ridge Line
        ctx.beginPath();
        ctx.moveTo(centerX, peakY - 14);
        ctx.lineTo(centerX, baseY);
        ctx.stroke();

        // Upward Vector Laser Stream from Crown
        if (beamColor) {
          const streamGrad = ctx.createLinearGradient(centerX, peakY - 14, centerX, 0);
          streamGrad.addColorStop(0, beamColor);
          streamGrad.addColorStop(0.5, 'rgba(52, 211, 153, 0.3)');
          streamGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
          ctx.strokeStyle = streamGrad;
          ctx.lineWidth = 1.8;
          ctx.beginPath();
          ctx.moveTo(centerX, peakY - 14);
          ctx.lineTo(centerX, 0);
          ctx.stroke();
        }
        ctx.restore();
      };

      // 3. Background Monolith Silhouettes (Distant Haze)
      drawFacetedMonolith(width * 0.12, height * 0.28, width * 0.16, width * 0.08, '#042b26', '#021a17', '#065f46');
      drawFacetedMonolith(width * 0.38, height * 0.32, width * 0.14, width * 0.07, '#042b26', '#021a17', '#065f46');
      drawFacetedMonolith(width * 0.88, height * 0.36, width * 0.16, width * 0.08, '#042b26', '#021a17', '#065f46');

      // 4. MAIN MONOLITH 1: The Grand Colossus (Left/Center - Tallest)
      drawFacetedMonolith(
        width * 0.25,
        height * 0.16,
        Math.max(140, width * 0.18),
        Math.max(65, width * 0.08),
        '#059669',
        '#044e46',
        '#6ee7b7',
        'rgba(110, 231, 183, 0.85)'
      );

      // 5. MAIN MONOLITH 2: The Cathedral Center Column
      drawFacetedMonolith(
        width * 0.52,
        height * 0.24,
        Math.max(130, width * 0.16),
        Math.max(60, width * 0.07),
        '#0d9488',
        '#042f2e',
        '#67e8f9',
        'rgba(103, 232, 249, 0.8)'
      );

      // 6. MAIN MONOLITH 3: The Ascending Spire (Right)
      drawFacetedMonolith(
        width * 0.76,
        height * 0.30,
        Math.max(105, width * 0.13),
        Math.max(48, width * 0.06),
        '#059669',
        '#044e46',
        '#34d399',
        'rgba(52, 211, 153, 0.75)'
      );

      // 7. Foreground Stepped Geometric Vector Pedestals
      ctx.fillStyle = '#011613';
      ctx.beginPath();
      ctx.moveTo(0, height * 0.78);
      ctx.lineTo(width * 0.28, height * 0.72);
      ctx.lineTo(width * 0.55, height * 0.76);
      ctx.lineTo(width * 0.82, height * 0.70);
      ctx.lineTo(width, height * 0.74);
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.fill();

      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(0, height * 0.78);
      ctx.lineTo(width * 0.28, height * 0.72);
      ctx.lineTo(width * 0.55, height * 0.76);
      ctx.lineTo(width * 0.82, height * 0.70);
      ctx.lineTo(width, height * 0.74);
      ctx.stroke();
    };

    // ── THEME 3: PURE DEEP SPACE (GEOMETRIC SPIRAL GALAXY, CONSTELLATIONS & ASTROLABE CARTOGRAPHY) ──
    const renderVectorDeepSpace = (t: number) => {
      // 1. Deep Obsidian Void
      ctx.fillStyle = '#030409';
      ctx.fillRect(0, 0, width, height);

      // 2. Astronomical Celestial Coordinate Grid
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;

      // Latitude arcs
      for (let y = 0.15; y < 0.95; y += 0.2) {
        ctx.beginPath();
        ctx.moveTo(0, height * y);
        ctx.lineTo(width, height * y);
        ctx.stroke();
      }
      // Longitude lines
      for (let x = 0.15; x < 0.95; x += 0.2) {
        ctx.beginPath();
        ctx.moveTo(width * x, 0);
        ctx.lineTo(width * x, height);
        ctx.stroke();
      }
      ctx.restore();

      // 3. Sweeping Vector Einstein Gravitational Lensing Arc
      ctx.save();
      ctx.beginPath();
      const lensCenterX = width * 0.32;
      const lensCenterY = height * 0.52;
      const lensRadiusX = Math.min(width, height) * 0.65;
      const lensRadiusY = Math.min(width, height) * 0.40;
      ctx.ellipse(lensCenterX, lensCenterY, lensRadiusX, lensRadiusY, -0.32, 0.15, Math.PI * 0.92);

      const arcGrad = ctx.createLinearGradient(
        lensCenterX - lensRadiusX, lensCenterY - lensRadiusY,
        lensCenterX + lensRadiusX, lensCenterY + lensRadiusY
      );
      arcGrad.addColorStop(0, 'rgba(192, 132, 252, 0)');
      arcGrad.addColorStop(0.3, 'rgba(192, 132, 252, 0.85)');
      arcGrad.addColorStop(0.6, 'rgba(129, 140, 248, 0.95)');
      arcGrad.addColorStop(0.85, 'rgba(96, 165, 250, 0.7)');
      arcGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.strokeStyle = arcGrad;
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Outer concentric dashed coordinate arc
      ctx.setLineDash([6, 6]);
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.35)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.ellipse(lensCenterX, lensCenterY, lensRadiusX * 1.08, lensRadiusY * 1.08, -0.32, 0.15, Math.PI * 0.92);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // 4. Mathematical Vector Spiral Galaxy (Upper Right Quadrant)
      ctx.save();
      const galX = width * 0.78;
      const galY = height * 0.22;
      const galRot = t * 0.04;

      ctx.translate(galX, galY);
      ctx.rotate(0.42);

      // Multi-layer Vector Core
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(0, 0, 7, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#fef08a';
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.arc(0, 0, 16, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(251, 146, 60, 0.6)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.arc(0, 0, 28, 0, Math.PI * 2);
      ctx.stroke();

      // Four-point Core Flare
      drawFourPointVectorStar(0, 0, 8, 0.95, '#ffffff');

      // Logarithmic Spiral Arms
      const drawSpiralArm = (offsetAngle: number, armColor: string) => {
        ctx.beginPath();
        for (let theta = 0; theta < Math.PI * 3.2; theta += 0.1) {
          const r = Math.pow(theta, 1.8) * 14;
          const a = theta + offsetAngle + galRot;
          const sx = Math.cos(a) * r;
          const sy = Math.sin(a) * (r * 0.52);
          if (theta === 0) ctx.moveTo(sx, sy);
          else ctx.lineTo(sx, sy);
        }
        ctx.strokeStyle = armColor;
        ctx.lineWidth = 1.6;
        ctx.stroke();
      };

      drawSpiralArm(0, 'rgba(192, 132, 252, 0.75)');
      drawSpiralArm(Math.PI, 'rgba(129, 140, 248, 0.75)');
      drawSpiralArm(Math.PI / 2, 'rgba(253, 224, 71, 0.45)');
      drawSpiralArm((Math.PI * 3) / 2, 'rgba(96, 165, 250, 0.45)');
      ctx.restore();

      // 5. Authentic Vector Constellation Charts (Cassiopeia & Orion Vector Polygons)
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.22)';
      ctx.lineWidth = 1.2;

      // Constellation 1: "W" of Cassiopeia (Upper Left)
      const casNodes = [
        { x: width * 0.12, y: height * 0.16 },
        { x: width * 0.18, y: height * 0.22 },
        { x: width * 0.23, y: height * 0.15 },
        { x: width * 0.28, y: height * 0.24 },
        { x: width * 0.34, y: height * 0.18 },
      ];
      ctx.beginPath();
      ctx.moveTo(casNodes[0].x, casNodes[0].y);
      for (let i = 1; i < casNodes.length; i++) {
        ctx.lineTo(casNodes[i].x, casNodes[i].y);
      }
      ctx.stroke();

      for (const node of casNodes) {
        drawFourPointVectorStar(node.x, node.y, 2.8, 0.9, '#ffffff');
      }

      // Constellation Label
      ctx.fillStyle = 'rgba(203, 213, 225, 0.6)';
      ctx.font = '10px monospace';
      ctx.fillText('CASSIOPEIA • RA 01h 19m', width * 0.12, height * 0.13);
      ctx.restore();
    };

    // ── 4. MAIN 60FPS VECTOR ANIMATION LOOP ──
    const render = () => {
      time += 0.016;

      // 1. Render Iconic Vector Masterpiece
      if (currentTheme === 'cosmic-cliffs') {
        renderVectorCosmicCliffs(time);
      } else if (currentTheme === 'pillars-of-creation') {
        renderVectorPillarsOfCreation(time);
      } else {
        renderVectorDeepSpace(time);
      }

      // 2. Render Twinkling Vector Stars & Geometric 4-Point Diamonds
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        if (!prefersReducedMotion) {
          s.phase += s.speed;
        }

        const twinkle = Math.sin(s.phase);
        const currentAlpha = Math.max(0.15, Math.min(1.0, s.alpha + twinkle * 0.35));

        if (s.isFourPoint) {
          drawFourPointVectorStar(s.x, s.y, s.size, currentAlpha, s.color);
        } else {
          // Sharp vector circle node
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
          ctx.fillStyle = s.color;
          ctx.globalAlpha = currentAlpha;
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1.0;

      // 3. Render Vector Shooting Stars
      const now = Date.now();
      if (!prefersReducedMotion && now - lastSpawnTime > 4500 && Math.random() < 0.04) {
        spawnShootingStar();
        lastSpawnTime = now;
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const m = shootingStars[i];
        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;
        m.alpha -= m.decay;

        if (m.alpha <= 0) {
          shootingStars.splice(i, 1);
          continue;
        }

        const tailX = m.x - Math.cos(m.angle) * m.length;
        const tailY = m.y - Math.sin(m.angle) * m.length;

        // Sharp linear vector trail
        ctx.save();
        ctx.strokeStyle = m.color;
        ctx.globalAlpha = Math.max(0, m.alpha);
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(m.x, m.y);
        ctx.stroke();

        // Sharp diamond head on meteor
        drawFourPointVectorStar(m.x, m.y, 2.5, m.alpha, '#ffffff');
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        lastSpawnTime = Date.now();
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
      {/* Pristine 60fps Vector Art Canvas Engine */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ willChange: 'transform' }}
      />
    </div>
  );
};
