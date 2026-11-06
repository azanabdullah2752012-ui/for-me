import React, { useEffect, useRef } from 'react';
import { WallpaperTheme } from '../../types';
import { useData } from '../../context/DataContext';

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
    const particleCount = width < 768 ? 95 : 170;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const rand = Math.random();
      let z = 0;
      let baseRadius = Math.random() * 0.7 + 0.45;
      let hasSpikes = false;

      if (rand > 0.86) {
        z = 2; // Bright foreground star with cross diffraction spikes
        baseRadius = Math.random() * 1.3 + 1.5;
        hasSpikes = true;
      } else if (rand > 0.52) {
        z = 1; // Mid-field shimmering star
        baseRadius = Math.random() * 0.7 + 0.85;
      }

      const vx = (Math.random() - 0.5) * (0.025 + z * 0.03);
      const vy = -Math.random() * (0.025 + z * 0.03) - 0.012;

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
      const speed = Math.random() * 7 + 8;
      const length = Math.random() * 85 + 75;

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

    // ── 3. SPIRAL GALAXY PRECOMPUTED CLUSTERS (FOR DEEP SPACE) ──
    const galaxyStars: { r: number; theta: number; size: number; alpha: number; color: string }[] = [];
    for (let i = 0; i < 320; i++) {
      const arm = Math.random() > 0.5 ? 0 : Math.PI;
      const dist = Math.pow(Math.random(), 1.35) * 180;
      const theta = arm + dist * 0.042 + (Math.random() - 0.5) * 0.42;
      const size = Math.random() * 1.2 + 0.4;
      const alpha = Math.random() * 0.65 + 0.35;
      const color = Math.random() > 0.35 ? 'rgba(255,255,255,' : 'rgba(254,215,170,';
      galaxyStars.push({ r: dist, theta, size, alpha, color });
    }

    let time = 0;

    // ── 4. RENDERERS PER THEME ──

    // ── THEME 1: CARINA COSMIC CLIFFS (VISIBLE TOWERING GASEOUS MOUNTAIN SPIRES & IONIZATION WALL) ──
    const renderCosmicCliffs = (t: number) => {
      // Atmospheric base: Deep sapphire stellar nursery sky
      const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
      skyGrad.addColorStop(0, '#02050f');
      skyGrad.addColorStop(0.3, '#060e24');
      skyGrad.addColorStop(0.65, '#160d1d');
      skyGrad.addColorStop(1, '#090408');
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, width, height);

      // Angled Volumetric Crepuscular Light Beams (God Rays emanating across upper sky)
      ctx.save();
      const rayAngle = -0.42;
      const rayOriginX = width * 0.15;
      const rayOriginY = height * 0.45;
      const rayCount = 6;
      for (let r = 0; r < rayCount; r++) {
        const rayOffset = (r - 2.5) * (width * 0.14) + Math.sin(t * 0.2 + r) * 16;
        const rayGrad = ctx.createLinearGradient(
          rayOriginX + rayOffset,
          rayOriginY,
          rayOriginX + rayOffset + Math.cos(rayAngle) * height,
          0
        );
        rayGrad.addColorStop(0, 'rgba(251, 191, 36, 0.18)');
        rayGrad.addColorStop(0.45, 'rgba(217, 119, 6, 0.08)');
        rayGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = rayGrad;
        ctx.beginPath();
        ctx.moveTo(rayOriginX + rayOffset - 35, rayOriginY);
        ctx.lineTo(rayOriginX + rayOffset + 45, rayOriginY);
        ctx.lineTo(rayOriginX + rayOffset + 160 + Math.cos(rayAngle) * height, 0);
        ctx.lineTo(rayOriginX + rayOffset - 70 + Math.cos(rayAngle) * height, 0);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();

      // Atmospheric Upper Nebular Dust Bloom
      const bloomGrad = ctx.createRadialGradient(width * 0.82, height * 0.16, 0, width * 0.82, height * 0.16, width * 0.55);
      bloomGrad.addColorStop(0, 'rgba(245, 158, 11, 0.20)');
      bloomGrad.addColorStop(0.45, 'rgba(180, 83, 9, 0.08)');
      bloomGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = bloomGrad;
      ctx.fillRect(0, 0, width, height);

      // ── CLIFF LAYER 1: TOWERING PROMONTORY PEAKS (UPPER HORIZON, PROMINENTLY VISIBLE) ──
      // This layer peaks high around y = 0.22 - 0.35, ensuring it is 100% visible on both mobile and desktop!
      const wave1 = Math.sin(t * 0.3) * 5;
      ctx.beginPath();
      ctx.moveTo(0, height * 0.32 + wave1);
      // Left Spire Promontory
      ctx.bezierCurveTo(
        width * 0.10, height * 0.22 + wave1,
        width * 0.18, height * 0.15 - wave1,
        width * 0.28, height * 0.26 + wave1
      );
      // Valley & Center Massive Carina Ridge
      ctx.bezierCurveTo(
        width * 0.38, height * 0.35 + wave1,
        width * 0.48, height * 0.18 - wave1,
        width * 0.62, height * 0.24 + wave1
      );
      // Right Escarpment & High Peak
      ctx.bezierCurveTo(
        width * 0.74, height * 0.32 - wave1,
        width * 0.88, height * 0.16 + wave1,
        width, height * 0.28
      );
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      const ridgeGrad1 = ctx.createLinearGradient(0, height * 0.15, 0, height);
      ridgeGrad1.addColorStop(0, 'rgba(217, 119, 6, 0.88)');
      ridgeGrad1.addColorStop(0.15, 'rgba(180, 83, 9, 0.92)');
      ridgeGrad1.addColorStop(0.45, 'rgba(120, 53, 15, 0.96)');
      ridgeGrad1.addColorStop(1, 'rgba(12, 4, 2, 1)');
      ctx.fillStyle = ridgeGrad1;
      ctx.fill();

      // Laser-sharp Golden Ionization Rim Lighting along the Cliff Crest
      ctx.save();
      ctx.lineWidth = 3.0;
      ctx.strokeStyle = 'rgba(253, 224, 71, 0.95)';
      ctx.shadowColor = 'rgba(245, 158, 11, 1)';
      ctx.shadowBlur = 18;
      ctx.stroke();
      ctx.restore();

      // ── CLIFF LAYER 2: MIDGROUND ESCARPMENT & JAGGED SPIRES ──
      const wave2 = Math.cos(t * 0.25) * 5;
      ctx.beginPath();
      ctx.moveTo(0, height * 0.48 + wave2);
      ctx.bezierCurveTo(
        width * 0.15, height * 0.40 + wave2,
        width * 0.26, height * 0.33 - wave2,
        width * 0.40, height * 0.42 + wave2
      );
      ctx.bezierCurveTo(
        width * 0.55, height * 0.49 + wave2,
        width * 0.68, height * 0.34 - wave2,
        width * 0.82, height * 0.44 + wave2
      );
      ctx.bezierCurveTo(
        width * 0.92, height * 0.40 - wave2,
        width * 0.96, height * 0.46 + wave2,
        width, height * 0.44
      );
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      const ridgeGrad2 = ctx.createLinearGradient(0, height * 0.32, 0, height);
      ridgeGrad2.addColorStop(0, 'rgba(245, 158, 11, 0.82)');
      ridgeGrad2.addColorStop(0.25, 'rgba(146, 64, 14, 0.92)');
      ridgeGrad2.addColorStop(1, 'rgba(8, 2, 1, 1)');
      ctx.fillStyle = ridgeGrad2;
      ctx.fill();

      // Midground edge rim glow
      ctx.save();
      ctx.lineWidth = 2.0;
      ctx.strokeStyle = 'rgba(251, 191, 36, 0.82)';
      ctx.shadowColor = 'rgba(245, 158, 11, 0.8)';
      ctx.shadowBlur = 12;
      ctx.stroke();
      ctx.restore();

      // ── CLIFF LAYER 3: FOREGROUND ROLLING CRAGS ──
      const wave3 = Math.sin(t * 0.35) * 4;
      ctx.beginPath();
      ctx.moveTo(0, height * 0.68 + wave3);
      ctx.bezierCurveTo(
        width * 0.20, height * 0.60 + wave3,
        width * 0.38, height * 0.66 - wave3,
        width * 0.58, height * 0.58 + wave3
      );
      ctx.bezierCurveTo(
        width * 0.76, height * 0.52 - wave3,
        width * 0.90, height * 0.62 + wave3,
        width, height * 0.60
      );
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      const ridgeGrad3 = ctx.createLinearGradient(0, height * 0.52, 0, height);
      ridgeGrad3.addColorStop(0, 'rgba(180, 83, 9, 0.94)');
      ridgeGrad3.addColorStop(0.4, 'rgba(120, 53, 15, 0.98)');
      ridgeGrad3.addColorStop(1, 'rgba(5, 1, 1, 1)');
      ctx.fillStyle = ridgeGrad3;
      ctx.fill();

      // Luminous Proto-Star Cores in the Upper Peaks
      const protoStars = [
        { x: width * 0.18, y: height * 0.15, r: 38, glow: 'rgba(254, 240, 138, 0.7)' },
        { x: width * 0.48, y: height * 0.18, r: 44, glow: 'rgba(251, 191, 36, 0.75)' },
        { x: width * 0.88, y: height * 0.16, r: 40, glow: 'rgba(253, 186, 116, 0.65)' },
      ];
      for (const ps of protoStars) {
        const psGrad = ctx.createRadialGradient(ps.x, ps.y, 0, ps.x, ps.y, ps.r);
        psGrad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
        psGrad.addColorStop(0.25, ps.glow);
        psGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = psGrad;
        ctx.beginPath();
        ctx.arc(ps.x, ps.y, ps.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // ── THEME 2: PILLARS OF CREATION (TOWERING COLUMNS RISING HIGH INTO UPPER VIEWPORT) ──
    const renderPillarsOfCreation = (t: number) => {
      // Atmospheric base: Deep interstellar cyan-abyssal dark void
      const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
      skyGrad.addColorStop(0, '#010508');
      skyGrad.addColorStop(0.35, '#03141a');
      skyGrad.addColorStop(0.7, '#062624');
      skyGrad.addColorStop(1, '#020b0c');
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, width, height);

      // Ambient Interstellar Ionization Cloud Plumes
      const hazeGrad = ctx.createRadialGradient(width * 0.5, height * 0.22, 0, width * 0.5, height * 0.22, Math.max(width, height) * 0.65);
      hazeGrad.addColorStop(0, 'rgba(16, 185, 129, 0.22)');
      hazeGrad.addColorStop(0.4, 'rgba(20, 184, 166, 0.10)');
      hazeGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = hazeGrad;
      ctx.fillRect(0, 0, width, height);

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
        ctx.moveTo(baseCenterX - widthAtBase / 2, height);
        // Ascending Left Flank with organic curvature
        ctx.bezierCurveTo(
          baseCenterX - widthAtBase * 0.45, height * 0.68,
          baseCenterX - widthAtPeak * 0.8 + headSway * 0.5, height * 0.35,
          baseCenterX - widthAtPeak * 0.5 + headSway, peakY + 28
        );
        // Billowing "Eagle Finger" Head
        ctx.bezierCurveTo(
          baseCenterX - widthAtPeak * 0.85 + headSway, peakY,
          baseCenterX - widthAtPeak * 0.2 + headSway, peakY - 22,
          baseCenterX + headSway, peakY - 14
        );
        ctx.bezierCurveTo(
          baseCenterX + widthAtPeak * 0.35 + headSway, peakY - 18,
          baseCenterX + widthAtPeak * 0.85 + headSway, peakY + 4,
          baseCenterX + widthAtPeak * 0.5 + headSway, peakY + 34
        );
        // Descending Right Flank
        ctx.bezierCurveTo(
          baseCenterX + widthAtPeak * 0.75 + headSway * 0.5, height * 0.45,
          baseCenterX + widthAtBase * 0.45, height * 0.72,
          baseCenterX + widthAtBase / 2, height
        );
        ctx.closePath();

        const pillarGrad = ctx.createLinearGradient(baseCenterX - widthAtBase / 2, peakY, baseCenterX + widthAtBase / 2, height);
        pillarGrad.addColorStop(0, 'rgba(4, 47, 46, 0.94)');
        pillarGrad.addColorStop(0.25, 'rgba(6, 78, 59, 0.90)');
        pillarGrad.addColorStop(0.65, 'rgba(2, 44, 34, 0.96)');
        pillarGrad.addColorStop(1, 'rgba(1, 16, 13, 1)');
        ctx.fillStyle = pillarGrad;
        ctx.fill();

        // Glowing Ionization Rim Highlight
        ctx.lineWidth = 2.6;
        ctx.strokeStyle = ionizationColor;
        ctx.shadowColor = glowColor;
        ctx.shadowBlur = 16;
        ctx.stroke();
        ctx.restore();

        // Protostellar Ejection Jet firing upward
        ctx.save();
        const jetGrad = ctx.createLinearGradient(
          baseCenterX + headSway, peakY - 14,
          baseCenterX + headSway + 12, peakY - 80
        );
        jetGrad.addColorStop(0, 'rgba(103, 232, 249, 0.95)');
        jetGrad.addColorStop(0.4, 'rgba(52, 211, 153, 0.55)');
        jetGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.strokeStyle = jetGrad;
        ctx.lineWidth = 2.4;
        ctx.beginPath();
        ctx.moveTo(baseCenterX + headSway, peakY - 14);
        ctx.lineTo(baseCenterX + headSway + 14, peakY - 80);
        ctx.stroke();
        ctx.restore();
      };

      const sway = Math.sin(t * 0.25) * 6;

      // 1. Left Pillar: The Grand Colossus (Towering high into upper left viewport: peakY = height * 0.11!)
      drawPillar(
        width * 0.22,
        height * 0.11,
        Math.max(170, width * 0.22),
        Math.max(90, width * 0.10),
        sway,
        'rgba(110, 231, 183, 0.92)',
        'rgba(16, 185, 129, 0.95)'
      );

      // 2. Center Pillar: The Cathedral Finger (peakY = height * 0.20)
      drawPillar(
        width * 0.50,
        height * 0.20,
        Math.max(150, width * 0.19),
        Math.max(80, width * 0.09),
        -sway * 0.8,
        'rgba(103, 232, 249, 0.88)',
        'rgba(20, 184, 166, 0.90)'
      );

      // 3. Right Pillar: The Ascending Spire (peakY = height * 0.28)
      drawPillar(
        width * 0.78,
        height * 0.28,
        Math.max(120, width * 0.15),
        Math.max(60, width * 0.07),
        sway * 0.6,
        'rgba(52, 211, 153, 0.85)',
        'rgba(5, 150, 105, 0.85)'
      );

      // Hydrogen Base Glow
      const baseGlow = ctx.createLinearGradient(0, height * 0.65, 0, height);
      baseGlow.addColorStop(0, 'rgba(4, 120, 87, 0)');
      baseGlow.addColorStop(1, 'rgba(6, 78, 59, 0.45)');
      ctx.fillStyle = baseGlow;
      ctx.fillRect(0, height * 0.65, width, height * 0.35);
    };

    // ── THEME 3: PURE DEEP SPACE (ROTATING SPIRAL GALAXY & EINSTEIN LENSING RING) ──
    const renderDeepSpace = (t: number) => {
      // Atmospheric base: Inky deep obsidian space
      const bgGrad = ctx.createRadialGradient(width * 0.5, height * 0.4, 0, width * 0.5, height * 0.4, Math.max(width, height) * 0.85);
      bgGrad.addColorStop(0, '#04050c');
      bgGrad.addColorStop(0.65, '#020306');
      bgGrad.addColorStop(1, '#000000');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // 1. Sweeping Gravitational Lensing Arc (Einstein Ring Warpage in Upper Sky)
      ctx.save();
      ctx.beginPath();
      const arcCenterX = width * 0.35;
      const arcCenterY = height * 0.45;
      const arcRadiusX = Math.min(width, height) * 0.65;
      const arcRadiusY = Math.min(width, height) * 0.42;
      ctx.ellipse(arcCenterX, arcCenterY, arcRadiusX, arcRadiusY, -0.28, 0.1, Math.PI * 0.98);
      
      const lensGrad = ctx.createLinearGradient(
        arcCenterX - arcRadiusX, arcCenterY - arcRadiusY,
        arcCenterX + arcRadiusX, arcCenterY + arcRadiusY
      );
      lensGrad.addColorStop(0, 'rgba(168, 85, 247, 0)');
      lensGrad.addColorStop(0.3, 'rgba(192, 132, 252, 0.55)');
      lensGrad.addColorStop(0.6, 'rgba(129, 140, 248, 0.68)');
      lensGrad.addColorStop(0.85, 'rgba(96, 165, 250, 0.45)');
      lensGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.strokeStyle = lensGrad;
      ctx.lineWidth = 2.6;
      ctx.shadowColor = 'rgba(168, 85, 247, 0.75)';
      ctx.shadowBlur = 18;
      ctx.stroke();

      // Gravitationally sheared galaxy slivers
      const arcPoints = [0.32, 0.50, 0.70];
      for (const ratio of arcPoints) {
        const angle = 0.1 + (Math.PI * 0.88) * ratio;
        const px = arcCenterX + Math.cos(angle - 0.28) * arcRadiusX;
        const py = arcCenterY + Math.sin(angle - 0.28) * arcRadiusY;

        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(angle + 0.3);
        const sliverGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, 18);
        sliverGrad.addColorStop(0, 'rgba(254, 215, 170, 0.95)');
        sliverGrad.addColorStop(0.4, 'rgba(251, 146, 60, 0.5)');
        sliverGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = sliverGrad;
        ctx.beginPath();
        ctx.ellipse(0, 0, 16, 4, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      ctx.restore();

      // 2. Majestic Rotating Spiral Galaxy (Positioned Prominently in Upper-Right: y = height * 0.18!)
      ctx.save();
      const galaxyCenterX = width * 0.78;
      const galaxyCenterY = height * 0.18;
      const galaxyRotation = t * 0.04;

      ctx.translate(galaxyCenterX, galaxyCenterY);
      ctx.rotate(0.45);

      // Luminous Galactic Core
      const coreGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, 48);
      coreGrad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      coreGrad.addColorStop(0.2, 'rgba(254, 243, 199, 0.9)');
      coreGrad.addColorStop(0.5, 'rgba(251, 191, 36, 0.45)');
      coreGrad.addColorStop(0.8, 'rgba(217, 119, 6, 0.15)');
      coreGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.ellipse(0, 0, 48, 26, 0, 0, Math.PI * 2);
      ctx.fill();

      // Dense Logarithmic Spiral Arms
      for (let s = 0; s < galaxyStars.length; s++) {
        const star = galaxyStars[s];
        const rotTheta = star.theta + galaxyRotation;
        const sx = Math.cos(rotTheta) * star.r;
        const sy = Math.sin(rotTheta) * (star.r * 0.52);

        ctx.fillStyle = `${star.color}${star.alpha})`;
        ctx.beginPath();
        ctx.arc(sx, sy, star.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // 3. Astrolabe Celestial Coordinate Rings
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(width * 0.5, height * 0.4, Math.min(width, height) * 0.45, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(width * 0.5, height * 0.4, Math.min(width, height) * 0.30, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    };

    // ── 5. MAIN ANIMATION LOOP (60FPS RETINA RENDERER) ──
    const render = () => {
      time += 0.016;

      if (currentTheme === 'cosmic-cliffs') {
        renderCosmicCliffs(time);
      } else if (currentTheme === 'pillars-of-creation') {
        renderPillarsOfCreation(time);
      } else {
        renderDeepSpace(time);
      }

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
        const currentAlpha = Math.max(0.14, Math.min(1.0, p.alpha + twinkle * 0.28));
        const currentRadius = Math.max(0.35, p.baseRadius + twinkle * 0.25);

        // Star Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${currentAlpha})`;
        ctx.fill();

        // James Webb Hexagonal / Cross Diffraction Spikes
        if (p.hasSpikes && currentAlpha > 0.45) {
          ctx.save();
          ctx.strokeStyle = `${p.color}${currentAlpha * 0.7})`;
          ctx.lineWidth = 1.0;
          const spikeLen = currentRadius * 6.8;

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
      if (!prefersReducedMotion && now - lastMeteorSpawn > 4500 && Math.random() < 0.04) {
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
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ willChange: 'transform' }}
      aria-hidden="true"
    />
  );
};
