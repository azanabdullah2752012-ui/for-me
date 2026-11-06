import React, { useEffect, useRef } from 'react';
import { WallpaperTheme } from '../../types';
import { useData } from '../../context/DataContext';

interface Particle {
  x: number;
  y: number;
  z: number; // 0: faint background dust, 1: mid-field stars, 2: foreground bright stars
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
  const { wallpaperTheme, previewTheme } = useData();

  // Active theme (supports real-time live preview during theme modal selection)
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
    const particleCount = width < 768 ? 90 : 160;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const rand = Math.random();
      let z = 0;
      let baseRadius = Math.random() * 0.7 + 0.4;
      let hasSpikes = false;

      if (rand > 0.88) {
        z = 2; // Bright foreground star with cross diffraction spikes
        baseRadius = Math.random() * 1.3 + 1.4;
        hasSpikes = true;
      } else if (rand > 0.55) {
        z = 1; // Mid-field shimmering star
        baseRadius = Math.random() * 0.7 + 0.8;
      }

      const vx = (Math.random() - 0.5) * (0.025 + z * 0.03);
      const vy = -Math.random() * (0.025 + z * 0.03) - 0.012;

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z,
        radius: baseRadius,
        baseRadius,
        alpha: Math.random() * 0.6 + 0.3,
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
      const speed = Math.random() * 7 + 8;
      const length = Math.random() * 80 + 70;

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
        alpha: 0.9,
        decay: Math.random() * 0.025 + 0.015,
        color: meteorPalette,
      });
    };

    // ── 3. SPIRAL GALAXY PRECOMPUTED CLUSTERS (FOR DEEP SPACE) ──
    const galaxyStars: { r: number; theta: number; size: number; alpha: number; color: string }[] = [];
    for (let i = 0; i < 280; i++) {
      const arm = Math.random() > 0.5 ? 0 : Math.PI;
      const dist = Math.pow(Math.random(), 1.4) * 160;
      const theta = arm + dist * 0.045 + (Math.random() - 0.5) * 0.45;
      const size = Math.random() * 1.1 + 0.4;
      const alpha = Math.random() * 0.6 + 0.3;
      const color = Math.random() > 0.4 ? 'rgba(255,255,255,' : 'rgba(254,215,170,';
      galaxyStars.push({ r: dist, theta, size, alpha, color });
    }

    let time = 0;

    // ── 4. RENDERERS PER THEME ──

    // ── THEME 1: CARINA COSMIC CLIFFS (AUTHENTIC JAGGED GASEOUS MOUNTAIN WALL) ──
    const renderCosmicCliffs = (t: number) => {
      // Atmospheric base: Deep sapphire stellar nursery sky
      const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
      skyGrad.addColorStop(0, '#030712');
      skyGrad.addColorStop(0.4, '#070f26');
      skyGrad.addColorStop(0.7, '#150f1f');
      skyGrad.addColorStop(1, '#08040b');
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, width, height);

      // Angled Volumetric Crepuscular Rays (God Rays from behind the peaks)
      ctx.save();
      const rayAngle = -0.42;
      const rayOriginX = width * 0.25;
      const rayOriginY = height * 0.75;
      const rayCount = 5;
      for (let r = 0; r < rayCount; r++) {
        const rayOffset = (r - 2) * (width * 0.12) + Math.sin(t * 0.2 + r) * 15;
        const rayGrad = ctx.createLinearGradient(
          rayOriginX + rayOffset,
          rayOriginY,
          rayOriginX + rayOffset + Math.cos(rayAngle) * height,
          rayOriginY + Math.sin(rayAngle) * height
        );
        rayGrad.addColorStop(0, 'rgba(245, 158, 11, 0.14)');
        rayGrad.addColorStop(0.5, 'rgba(217, 119, 6, 0.05)');
        rayGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = rayGrad;
        ctx.beginPath();
        ctx.moveTo(rayOriginX + rayOffset - 30, rayOriginY);
        ctx.lineTo(rayOriginX + rayOffset + 40, rayOriginY);
        ctx.lineTo(rayOriginX + rayOffset + 140 + Math.cos(rayAngle) * height, 0);
        ctx.lineTo(rayOriginX + rayOffset - 60 + Math.cos(rayAngle) * height, 0);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();

      // Atmospheric Upper Nebular Bloom
      const bloomGrad = ctx.createRadialGradient(width * 0.78, height * 0.22, 0, width * 0.78, height * 0.22, width * 0.55);
      bloomGrad.addColorStop(0, 'rgba(245, 158, 11, 0.12)');
      bloomGrad.addColorStop(0.4, 'rgba(180, 83, 9, 0.05)');
      bloomGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = bloomGrad;
      ctx.fillRect(0, 0, width, height);

      // ── CLIFF LAYER 1: DISTANT HIGH BACKGROUND RIDGES ──
      const wave1 = Math.sin(t * 0.3) * 4;
      ctx.beginPath();
      ctx.moveTo(0, height * 0.48 + wave1);
      ctx.bezierCurveTo(
        width * 0.25, height * 0.42 + wave1,
        width * 0.45, height * 0.54 - wave1,
        width * 0.65, height * 0.46 + wave1
      );
      ctx.bezierCurveTo(
        width * 0.85, height * 0.38 - wave1,
        width * 0.95, height * 0.50 + wave1,
        width, height * 0.47
      );
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      const ridgeGrad1 = ctx.createLinearGradient(0, height * 0.4, 0, height);
      ridgeGrad1.addColorStop(0, 'rgba(120, 53, 15, 0.45)');
      ridgeGrad1.addColorStop(0.4, 'rgba(69, 26, 3, 0.65)');
      ridgeGrad1.addColorStop(1, 'rgba(18, 6, 2, 0.9)');
      ctx.fillStyle = ridgeGrad1;
      ctx.fill();

      // ── CLIFF LAYER 2: MAIN MIDGROUND JAGGED VOLUMETRIC MOUNTAIN WALL ──
      const wave2 = Math.cos(t * 0.25) * 5;
      ctx.beginPath();
      // Left cliff baseline
      ctx.moveTo(0, height * 0.58 + wave2);
      // Peak 1: Left Promontory
      ctx.bezierCurveTo(
        width * 0.08, height * 0.50 + wave2,
        width * 0.14, height * 0.44 - wave2,
        width * 0.22, height * 0.46 + wave2
      );
      // Valley & Jagged Spire 1
      ctx.bezierCurveTo(
        width * 0.28, height * 0.48 + wave2,
        width * 0.33, height * 0.39 - wave2,
        width * 0.42, height * 0.43 + wave2
      );
      // Main Massive Center Crest (The Carina Ridge Wall)
      ctx.bezierCurveTo(
        width * 0.52, height * 0.48 + wave2,
        width * 0.60, height * 0.36 - wave2,
        width * 0.72, height * 0.44 + wave2
      );
      // Right Descending Escarpment
      ctx.bezierCurveTo(
        width * 0.82, height * 0.52 - wave2,
        width * 0.92, height * 0.45 + wave2,
        width, height * 0.56
      );
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      const ridgeGrad2 = ctx.createLinearGradient(0, height * 0.36, 0, height);
      ridgeGrad2.addColorStop(0, 'rgba(217, 119, 6, 0.82)');
      ridgeGrad2.addColorStop(0.18, 'rgba(180, 83, 9, 0.88)');
      ridgeGrad2.addColorStop(0.45, 'rgba(120, 53, 15, 0.95)');
      ridgeGrad2.addColorStop(1, 'rgba(15, 5, 2, 0.98)');
      ctx.fillStyle = ridgeGrad2;
      ctx.fill();

      // Luminous Golden Ionization Rim Lighting along the Cliff Edge
      ctx.save();
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = 'rgba(253, 224, 71, 0.88)';
      ctx.shadowColor = 'rgba(245, 158, 11, 0.95)';
      ctx.shadowBlur = 14;
      ctx.stroke();
      ctx.restore();

      // ── CLIFF LAYER 3: FOREGROUND CRAGS & PILLARS ──
      const wave3 = Math.sin(t * 0.35) * 3;
      ctx.beginPath();
      ctx.moveTo(0, height * 0.74 + wave3);
      ctx.bezierCurveTo(
        width * 0.16, height * 0.64 + wave3,
        width * 0.30, height * 0.72 - wave3,
        width * 0.48, height * 0.66 + wave3
      );
      ctx.bezierCurveTo(
        width * 0.65, height * 0.60 - wave3,
        width * 0.84, height * 0.70 + wave3,
        width, height * 0.68
      );
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      const ridgeGrad3 = ctx.createLinearGradient(0, height * 0.6, 0, height);
      ridgeGrad3.addColorStop(0, 'rgba(180, 83, 9, 0.92)');
      ridgeGrad3.addColorStop(0.3, 'rgba(120, 53, 15, 0.98)');
      ridgeGrad3.addColorStop(1, 'rgba(6, 2, 1, 1)');
      ctx.fillStyle = ridgeGrad3;
      ctx.fill();

      // Foreground edge rim glow
      ctx.save();
      ctx.lineWidth = 1.8;
      ctx.strokeStyle = 'rgba(251, 191, 36, 0.75)';
      ctx.shadowColor = 'rgba(245, 158, 11, 0.7)';
      ctx.shadowBlur = 10;
      ctx.stroke();
      ctx.restore();

      // Embedded Proto-Star Cores in the Valleys
      const protoStars = [
        { x: width * 0.33, y: height * 0.40, r: 28, glow: 'rgba(254, 240, 138, 0.45)' },
        { x: width * 0.60, y: height * 0.37, r: 35, glow: 'rgba(251, 191, 36, 0.5)' },
        { x: width * 0.48, y: height * 0.66, r: 24, glow: 'rgba(253, 186, 116, 0.4)' },
      ];
      for (const ps of protoStars) {
        const psGrad = ctx.createRadialGradient(ps.x, ps.y, 0, ps.x, ps.y, ps.r);
        psGrad.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
        psGrad.addColorStop(0.2, ps.glow);
        psGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = psGrad;
        ctx.beginPath();
        ctx.arc(ps.x, ps.y, ps.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // ── THEME 2: PILLARS OF CREATION (EAGLE NEBULA M16 TOWERING MONOLITHS) ──
    const renderPillarsOfCreation = (t: number) => {
      // Atmospheric base: Deep interstellar cyan-abyssal dark void
      const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
      skyGrad.addColorStop(0, '#010609');
      skyGrad.addColorStop(0.4, '#04151b');
      skyGrad.addColorStop(0.75, '#072423');
      skyGrad.addColorStop(1, '#020b0c');
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, width, height);

      // Ambient Interstellar Ionization Haze (Upper Mint-Cyan Plumes)
      const hazeGrad = ctx.createRadialGradient(width * 0.35, height * 0.28, 0, width * 0.35, height * 0.28, width * 0.6);
      hazeGrad.addColorStop(0, 'rgba(16, 185, 129, 0.18)');
      hazeGrad.addColorStop(0.45, 'rgba(20, 184, 166, 0.08)');
      hazeGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = hazeGrad;
      ctx.fillRect(0, 0, width, height);

      // Helper function to draw a single organic vertical pillar column
      const drawPillar = (
        baseCenterX: number,
        peakY: number,
        widthAtBase: number,
        widthAtPeak: number,
        headSway: number,
        ionizationColor: string,
        glowColor: string
      ) => {
        ctx.save();
        ctx.beginPath();
        // Base Left
        ctx.moveTo(baseCenterX - widthAtBase / 2, height);
        // Ascending Left Edge with organic undulations
        ctx.bezierCurveTo(
          baseCenterX - widthAtBase * 0.45, height * 0.75,
          baseCenterX - widthAtPeak * 0.8 + headSway * 0.5, height * 0.45,
          baseCenterX - widthAtPeak * 0.5 + headSway, peakY + 25
        );
        // Billowing "Eagle Finger" Head at the Top
        ctx.bezierCurveTo(
          baseCenterX - widthAtPeak * 0.8 + headSway, peakY,
          baseCenterX - widthAtPeak * 0.2 + headSway, peakY - 18,
          baseCenterX + headSway, peakY - 12
        );
        ctx.bezierCurveTo(
          baseCenterX + widthAtPeak * 0.3 + headSway, peakY - 16,
          baseCenterX + widthAtPeak * 0.8 + headSway, peakY + 2,
          baseCenterX + widthAtPeak * 0.5 + headSway, peakY + 30
        );
        // Descending Right Edge
        ctx.bezierCurveTo(
          baseCenterX + widthAtPeak * 0.7 + headSway * 0.5, height * 0.5,
          baseCenterX + widthAtBase * 0.45, height * 0.78,
          baseCenterX + widthAtBase / 2, height
        );
        ctx.closePath();

        // Pillar interior: Deep organic interstellar dust core
        const pillarGrad = ctx.createLinearGradient(baseCenterX - widthAtBase / 2, peakY, baseCenterX + widthAtBase / 2, height);
        pillarGrad.addColorStop(0, 'rgba(4, 47, 46, 0.92)');
        pillarGrad.addColorStop(0.25, 'rgba(6, 78, 59, 0.88)');
        pillarGrad.addColorStop(0.65, 'rgba(2, 44, 34, 0.96)');
        pillarGrad.addColorStop(1, 'rgba(1, 18, 14, 1)');
        ctx.fillStyle = pillarGrad;
        ctx.fill();

        // Ionization Rim Stroke on the illuminated crest and left flank
        ctx.lineWidth = 2.2;
        ctx.strokeStyle = ionizationColor;
        ctx.shadowColor = glowColor;
        ctx.shadowBlur = 12;
        ctx.stroke();
        ctx.restore();

        // Protostellar Ejection Jet firing upward from the pillar fingertip
        ctx.save();
        const jetGrad = ctx.createLinearGradient(
          baseCenterX + headSway, peakY - 12,
          baseCenterX + headSway + 10, peakY - 60
        );
        jetGrad.addColorStop(0, 'rgba(103, 232, 249, 0.85)');
        jetGrad.addColorStop(0.4, 'rgba(52, 211, 153, 0.45)');
        jetGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.strokeStyle = jetGrad;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(baseCenterX + headSway, peakY - 12);
        ctx.lineTo(baseCenterX + headSway + 12, peakY - 65);
        ctx.stroke();
        ctx.restore();
      };

      const sway = Math.sin(t * 0.25) * 6;

      // 1. Pillar 1: The Grand Colossus (Left/Center - Tallest)
      drawPillar(
        width * 0.28,
        height * 0.22,
        Math.max(160, width * 0.22),
        Math.max(85, width * 0.11),
        sway,
        'rgba(110, 231, 183, 0.85)',
        'rgba(16, 185, 129, 0.9)'
      );

      // 2. Pillar 2: The Mid Cathedral Column (Center - Medium)
      drawPillar(
        width * 0.52,
        height * 0.38,
        Math.max(140, width * 0.19),
        Math.max(75, width * 0.09),
        -sway * 0.8,
        'rgba(103, 232, 249, 0.82)',
        'rgba(20, 184, 166, 0.85)'
      );

      // 3. Pillar 3: The Ascending Spire (Right - Needle)
      drawPillar(
        width * 0.74,
        height * 0.49,
        Math.max(110, width * 0.15),
        Math.max(55, width * 0.07),
        sway * 0.6,
        'rgba(52, 211, 153, 0.8)',
        'rgba(5, 150, 105, 0.8)'
      );

      // Atmospheric Hydrogen Base Glow along bottom
      const baseGlow = ctx.createLinearGradient(0, height * 0.75, 0, height);
      baseGlow.addColorStop(0, 'rgba(4, 120, 87, 0)');
      baseGlow.addColorStop(1, 'rgba(6, 78, 59, 0.35)');
      ctx.fillStyle = baseGlow;
      ctx.fillRect(0, height * 0.75, width, height * 0.25);
    };

    // ── THEME 3: PURE DEEP SPACE (JWST DEEP FIELD, ROTATING SPIRAL GALAXY & GRAVITATIONAL LENSING ARC) ──
    const renderDeepSpace = (t: number) => {
      // Atmospheric base: Inky deep obsidian space
      const bgGrad = ctx.createRadialGradient(width * 0.5, height * 0.5, 0, width * 0.5, height * 0.5, Math.max(width, height) * 0.85);
      bgGrad.addColorStop(0, '#04050b');
      bgGrad.addColorStop(0.65, '#020306');
      bgGrad.addColorStop(1, '#000000');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // 1. Sweeping Gravitational Lensing Arc (Einstein Ring Warpage)
      ctx.save();
      ctx.beginPath();
      const arcCenterX = width * 0.38;
      const arcCenterY = height * 0.62;
      const arcRadiusX = Math.min(width, height) * 0.55;
      const arcRadiusY = Math.min(width, height) * 0.35;
      ctx.ellipse(arcCenterX, arcCenterY, arcRadiusX, arcRadiusY, -0.32, 0.2, Math.PI * 0.95);
      
      const lensGrad = ctx.createLinearGradient(
        arcCenterX - arcRadiusX, arcCenterY - arcRadiusY,
        arcCenterX + arcRadiusX, arcCenterY + arcRadiusY
      );
      lensGrad.addColorStop(0, 'rgba(168, 85, 247, 0)');
      lensGrad.addColorStop(0.3, 'rgba(192, 132, 252, 0.42)');
      lensGrad.addColorStop(0.6, 'rgba(129, 140, 248, 0.55)');
      lensGrad.addColorStop(0.85, 'rgba(96, 165, 250, 0.35)');
      lensGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.strokeStyle = lensGrad;
      ctx.lineWidth = 2.2;
      ctx.shadowColor = 'rgba(168, 85, 247, 0.6)';
      ctx.shadowBlur = 16;
      ctx.stroke();

      // Gravitationally sheared galaxy slivers along the arc
      const arcPoints = [0.35, 0.52, 0.72];
      for (const ratio of arcPoints) {
        const angle = 0.2 + (Math.PI * 0.75) * ratio;
        const px = arcCenterX + Math.cos(angle - 0.32) * arcRadiusX;
        const py = arcCenterY + Math.sin(angle - 0.32) * arcRadiusY;

        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(angle + 0.3);
        const sliverGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, 16);
        sliverGrad.addColorStop(0, 'rgba(254, 215, 170, 0.9)');
        sliverGrad.addColorStop(0.4, 'rgba(251, 146, 60, 0.4)');
        sliverGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = sliverGrad;
        ctx.beginPath();
        ctx.ellipse(0, 0, 14, 3, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      ctx.restore();

      // 2. Majestic Parametric Rotating Spiral Galaxy (Upper-Right Quadrant)
      ctx.save();
      const galaxyCenterX = width * 0.72;
      const galaxyCenterY = height * 0.28;
      const galaxyRotation = t * 0.04;

      ctx.translate(galaxyCenterX, galaxyCenterY);
      ctx.rotate(0.45); // Galaxy inclination tilt

      // Luminous Galactic Core
      const coreGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, 42);
      coreGrad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
      coreGrad.addColorStop(0.2, 'rgba(254, 243, 199, 0.85)');
      coreGrad.addColorStop(0.5, 'rgba(251, 191, 36, 0.35)');
      coreGrad.addColorStop(0.8, 'rgba(217, 119, 6, 0.12)');
      coreGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.ellipse(0, 0, 42, 22, 0, 0, Math.PI * 2);
      ctx.fill();

      // Dense Logarithmic Spiral Arms Clusters
      for (let s = 0; s < galaxyStars.length; s++) {
        const star = galaxyStars[s];
        const rotTheta = star.theta + galaxyRotation;
        const sx = Math.cos(rotTheta) * star.r;
        const sy = Math.sin(rotTheta) * (star.r * 0.52); // Flattened elliptical perspective

        ctx.fillStyle = `${star.color}${star.alpha})`;
        ctx.beginPath();
        ctx.arc(sx, sy, star.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // 3. Subtle Astrolabe Celestial Coordinate Rings
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(width * 0.5, height * 0.5, Math.min(width, height) * 0.42, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(width * 0.5, height * 0.5, Math.min(width, height) * 0.28, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    };

    // ── 5. MAIN ANIMATION LOOP (60FPS RETINA RENDERER) ──
    const render = () => {
      time += 0.016;

      // 1. Render Iconic Signature Celestial Realm Artwork
      if (currentTheme === 'cosmic-cliffs') {
        renderCosmicCliffs(time);
      } else if (currentTheme === 'pillars-of-creation') {
        renderPillarsOfCreation(time);
      } else {
        renderDeepSpace(time);
      }

      // 2. Render Drifting Multi-Depth Star Particles & JWST Hexagonal Diffraction Spikes
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
          ctx.strokeStyle = `${p.color}${currentAlpha * 0.65})`;
          ctx.lineWidth = 0.9;
          const spikeLen = currentRadius * 6.5;

          // Vertical beam
          ctx.beginPath();
          ctx.moveTo(p.x, p.y - spikeLen);
          ctx.lineTo(p.x, p.y + spikeLen);
          ctx.stroke();

          // Horizontal beam
          ctx.beginPath();
          ctx.moveTo(p.x - spikeLen, p.y);
          ctx.lineTo(p.x + spikeLen, p.y);
          ctx.stroke();

          // Diagonal 60-degree secondary cross
          ctx.lineWidth = 0.5;
          const diagLen = spikeLen * 0.65;
          ctx.beginPath();
          ctx.moveTo(p.x - diagLen * 0.7, p.y - diagLen * 0.7);
          ctx.lineTo(p.x + diagLen * 0.7, p.y + diagLen * 0.7);
          ctx.stroke();

          ctx.restore();
        }
      }

      // 3. Render Shooting Meteors
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
        grad.addColorStop(0.7, `${m.color}${m.alpha * 0.4})`);
        grad.addColorStop(1, `${m.color}${m.alpha})`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(m.x, m.y);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Pre-seed first frame instantly
    render();

    // Battery saver: pause animation loop when page or app is hidden/minimized
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
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ willChange: 'transform' }}
      aria-hidden="true"
    />
  );
};
