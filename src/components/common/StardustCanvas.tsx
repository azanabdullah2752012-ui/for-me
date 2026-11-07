import React, { useEffect, useRef } from 'react';
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
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  alpha: number;
  active: boolean;
}

export const StardustCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { isHUDHidden } = useData();
  const isHUDHiddenRef = useRef(isHUDHidden);

  useEffect(() => {
    isHUDHiddenRef.current = isHUDHidden;
  }, [isHUDHidden]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ──────────────────────────────────────────────────────────────────────────
    // 1. PARTICLES & PARALLAX
    // ──────────────────────────────────────────────────────────────────────────
    let particles: Particle[] = [];
    const initParticles = () => {
      particles = [];
      const count = width < 768 ? 85 : 160;

      for (let i = 0; i < count; i++) {
        const z = Math.random() > 0.85 ? 2 : Math.random() > 0.45 ? 1 : 0;
        const radius = Math.random() * 0.65 + (z === 2 ? 0.85 : 0.35);

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z,
          radius,
          alpha: Math.random() * 0.55 + 0.25,
          alphaSpeed: Math.random() * 0.015 + 0.005,
          alphaPhase: Math.random() * Math.PI * 2,
          vx: (Math.random() - 0.5) * 0.06,
          vy: (Math.random() - 0.5) * 0.06,
        });
      }
    };

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
      initParticles();
    };
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    // Mouse parallax
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;
    let currentMouseX = width / 2;
    let currentMouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // ──────────────────────────────────────────────────────────────────────────
    // 2. AUTHENTIC ASTRONOMICAL CELESTIAL GLINT (DELICATE, SHARP, ZERO UGLY STICKS)
    // ──────────────────────────────────────────────────────────────────────────
    const drawCelestialGlint = (cx: number, cy: number, length: number, alpha: number) => {
      ctx.save();
      ctx.translate(cx, cy);

      const a = Math.max(0.15, Math.min(0.95, alpha));
      ctx.globalAlpha = a;

      // 1. Soft optical Airy disc glow (tight, smooth, delicate white-violet falloff)
      const glowGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, length * 0.9);
      glowGrad.addColorStop(0, 'rgba(255, 255, 255, 0.85)');
      glowGrad.addColorStop(0.3, 'rgba(216, 180, 254, 0.35)');
      glowGrad.addColorStop(0.7, 'rgba(147, 51, 234, 0.08)');
      glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(0, 0, length * 0.9, 0, Math.PI * 2);
      ctx.fill();

      // 2. Ultra-delicate tapered diffraction spikes (pure white fading smoothly to 0)
      const spikeGradH = ctx.createLinearGradient(-length, 0, length, 0);
      spikeGradH.addColorStop(0, 'rgba(255, 255, 255, 0)');
      spikeGradH.addColorStop(0.35, 'rgba(233, 213, 255, 0.55)');
      spikeGradH.addColorStop(0.5, '#ffffff');
      spikeGradH.addColorStop(0.65, 'rgba(233, 213, 255, 0.55)');
      spikeGradH.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.strokeStyle = spikeGradH;
      ctx.lineWidth = 0.75;
      ctx.beginPath();
      ctx.moveTo(-length, 0);
      ctx.lineTo(length, 0);
      ctx.stroke();

      const spikeGradV = ctx.createLinearGradient(0, -length, 0, length);
      spikeGradV.addColorStop(0, 'rgba(255, 255, 255, 0)');
      spikeGradV.addColorStop(0.35, 'rgba(233, 213, 255, 0.55)');
      spikeGradV.addColorStop(0.5, '#ffffff');
      spikeGradV.addColorStop(0.65, 'rgba(233, 213, 255, 0.55)');
      spikeGradV.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.strokeStyle = spikeGradV;
      ctx.lineWidth = 0.75;
      ctx.beginPath();
      ctx.moveTo(0, -length);
      ctx.lineTo(0, length);
      ctx.stroke();

      // 3. Subtle 45° diagonal micro-rays
      const diagLen = length * 0.38;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(-diagLen, -diagLen); ctx.lineTo(diagLen, diagLen);
      ctx.moveTo(-diagLen, diagLen); ctx.lineTo(diagLen, -diagLen);
      ctx.stroke();

      // 4. Brilliant pinpoint center core
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(0, 0, 1.2, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    // Occasional subtle shooting star
    const shootingStar: ShootingStar = {
      x: -100,
      y: -100,
      length: 100,
      speed: 16,
      angle: Math.PI / 4 + 0.05,
      alpha: 0,
      active: false,
    };

    let shootingStarCooldown = Math.random() * 200 + 150;

    const updateAndDrawShootingStar = () => {
      if (!shootingStar.active) {
        shootingStarCooldown--;
        if (shootingStarCooldown <= 0 && !prefersReducedMotion) {
          shootingStar.active = true;
          shootingStar.x = Math.random() * (width * 0.65);
          shootingStar.y = Math.random() * (height * 0.28);
          shootingStar.alpha = 0.9;
          shootingStar.length = Math.random() * 60 + 75;
          const isHidden = isHUDHiddenRef.current;
          shootingStarCooldown = Math.random() * (isHidden ? 160 : 280) + (isHidden ? 60 : 150);
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
          bolideGrad.addColorStop(0.7, 'rgba(192, 132, 252, ' + shootingStar.alpha * 0.5 + ')');
          bolideGrad.addColorStop(1, '#ffffff');

          ctx.strokeStyle = bolideGrad;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(shootingStar.x, shootingStar.y);
          ctx.stroke();

          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(shootingStar.x, shootingStar.y, 1.8, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }
    };

    // ──────────────────────────────────────────────────────────────────────────
    // 3. MAIN RENDER LOOP: DEEP SPACE & OVERLAPPING LAYERED WAVES
    // ──────────────────────────────────────────────────────────────────────────
    let time = 0;
    let isVisible = true;

    const handleVisibility = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibility);

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const isHidden = isHUDHiddenRef.current;
      time += prefersReducedMotion ? 0.003 : (isHidden ? 0.022 : 0.016);
      ctx.clearRect(0, 0, width, height);

      // Mouse lerp for subtle parallax
      currentMouseX += (targetMouseX - currentMouseX) * 0.04;
      currentMouseY += (targetMouseY - currentMouseY) * 0.04;
      const mouseNormX = (currentMouseX - width / 2) / (width / 2);
      const mouseNormY = (currentMouseY - height / 2) / (height / 2);

      // 1. Deep Midnight Cosmic Sky Background
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, '#060814');
      bgGrad.addColorStop(0.38, '#090c22');
      bgGrad.addColorStop(0.72, '#0c0f2a');
      bgGrad.addColorStop(1, '#070918');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Soft ambient radial glows
      const radGlow1 = ctx.createRadialGradient(
        width * 0.80, height * 0.18, 0,
        width * 0.80, height * 0.18, width * 0.50
      );
      radGlow1.addColorStop(0, 'rgba(147, 51, 234, 0.18)');
      radGlow1.addColorStop(0.7, 'rgba(88, 28, 135, 0.04)');
      radGlow1.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = radGlow1;
      ctx.fillRect(0, 0, width, height);

      const radGlow2 = ctx.createRadialGradient(
        width * 0.18, height * 0.82, 0,
        width * 0.18, height * 0.82, width * 0.55
      );
      radGlow2.addColorStop(0, 'rgba(79, 70, 229, 0.14)');
      radGlow2.addColorStop(0.65, 'rgba(59, 130, 246, 0.03)');
      radGlow2.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = radGlow2;
      ctx.fillRect(0, 0, width, height);

      // 2. Faint Astronomical Coordinate Hairline Grid
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)';
      ctx.lineWidth = 1;
      const gridSpacingX = width * 0.16;
      for (let gx = gridSpacingX; gx < width; gx += gridSpacingX) {
        ctx.beginPath();
        ctx.moveTo(gx, 0);
        ctx.lineTo(gx, height);
        ctx.stroke();
      }
      ctx.restore();

      // 3. Vertical Celestial Meridian Line (At x = width * 0.93, matching reference image)
      ctx.save();
      const meridianX = width * 0.93;
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.26)';
      ctx.lineWidth = 1.0;
      ctx.beginPath();
      ctx.moveTo(meridianX, 0);
      ctx.lineTo(meridianX, height);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(216, 180, 254, 0.20)';
      ctx.lineWidth = 1;
      for (let my = 50; my < height; my += 70) {
        ctx.beginPath();
        ctx.moveTo(meridianX - 4, my);
        ctx.lineTo(meridianX + 4, my);
        ctx.stroke();
      }
      ctx.restore();

      // 4. Sweeping Planetary Orbital Trajectory Arc (Exact reference geometry)
      ctx.save();
      const orbitCenterX = width * 0.62;
      const orbitCenterY = height * 0.88;
      const orbitRadiusX = Math.min(width, height) * 0.98;
      const orbitRadiusY = Math.min(width, height) * 0.58;

      ctx.shadowColor = 'rgba(168, 85, 247, 0.40)';
      ctx.shadowBlur = 8;
      ctx.strokeStyle = 'rgba(192, 132, 252, 0.36)';
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.ellipse(orbitCenterX, orbitCenterY, orbitRadiusX, orbitRadiusY, -0.36, Math.PI * 0.8, Math.PI * 1.95);
      ctx.stroke();

      ctx.setLineDash([4, 10]);
      ctx.strokeStyle = 'rgba(147, 51, 234, 0.22)';
      ctx.lineWidth = 1.0;
      ctx.beginPath();
      ctx.ellipse(orbitCenterX, orbitCenterY, orbitRadiusX * 1.07, orbitRadiusY * 1.07, -0.36, Math.PI * 0.75, Math.PI * 1.92);
      ctx.stroke();
      ctx.setLineDash([]);

      // Subtle planetary orbital nodes
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = 'rgba(216, 180, 254, 0.9)';
      ctx.shadowBlur = 6;
      ctx.beginPath();
      ctx.arc(width * 0.72, height * 0.48, 2.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // 5. BACKGROUND PINPRICK STARDUST (Shows through translucent wave silk)
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
        const drawX = p.x + mouseNormX * 12 * depthFactor;
        const drawY = p.y + mouseNormY * 12 * depthFactor;

        const currentAlpha = Math.max(
          0.12,
          Math.min(0.85, p.alpha + Math.sin(p.alphaPhase) * 0.22)
        );

        ctx.beginPath();
        ctx.arc(drawX, drawY, p.radius, 0, Math.PI * 2);
        if (p.z === 2) {
          ctx.fillStyle = `rgba(233, 213, 255, ${currentAlpha.toFixed(3)})`;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha.toFixed(3)})`;
        }
        ctx.fill();
      }

      // ────────────────────────────────────────────────────────────────────────
      // 6. TRUE PHYSICAL OVERLAPPING DUNES (TOP DARKEST, BOTTOM LIGHTEST)
      // ────────────────────────────────────────────────────────────────────────
      // Helper to paint delicate stardust diamond glints along wave crests
      const drawCrestGlint = (cx: number, cy: number, alpha: number, size: number = 2.0) => {
        ctx.save();
        ctx.translate(cx, cy);
        const g = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 2.5);
        g.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
        g.addColorStop(0.35, `rgba(233, 213, 255, ${alpha * 0.7})`);
        g.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(0, 0, size * 2.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.9})`;
        ctx.lineWidth = 0.75;
        ctx.beginPath();
        ctx.moveTo(-size * 2.0, 0); ctx.lineTo(size * 2.0, 0);
        ctx.moveTo(0, -size * 2.0); ctx.lineTo(0, size * 2.0);
        ctx.stroke();
        ctx.restore();
      };

      // Multi-sample traveling wave renderer for organic, rolling fluid motion
      const drawRollingWave = (
        baseYRatio: number,
        amp1: number,
        amp2: number,
        freq1: number,
        freq2: number,
        speed1: number,
        speed2: number,
        phaseOffset: number,
        fillGradient: CanvasGradient,
        strokeColor: string,
        strokeWidth: number,
        shadowColor: string,
        shadowBlur: number,
        shadowOffsetY: number,
        glintXFractions: number[] = []
      ) => {
        const segments = 24;
        const step = width / segments;
        const points: { x: number; y: number }[] = [];

        for (let i = 0; i <= segments; i++) {
          const px = i * step;
          const normX = px / width;
          // Organic traveling wave equation combining lateral drift & vertical harmonics
          const waveY = height * baseYRatio +
            Math.sin(normX * Math.PI * 2 * freq1 + time * speed1 + phaseOffset) * amp1 +
            Math.cos(normX * Math.PI * 2 * freq2 - time * speed2 + phaseOffset * 1.3) * amp2;
          points.push({ x: px, y: waveY });
        }

        ctx.save();
        if (shadowBlur > 0) {
          ctx.shadowColor = shadowColor;
          ctx.shadowBlur = shadowBlur;
          ctx.shadowOffsetY = shadowOffsetY;
        }

        ctx.beginPath();
        ctx.moveTo(0, points[0].y);

        // Smooth cubic Bézier spline interpolation through all sampled wave points
        for (let i = 0; i < points.length - 1; i++) {
          const pCurrent = points[i];
          const pNext = points[i + 1];
          const cpX = (pCurrent.x + pNext.x) / 2;
          ctx.bezierCurveTo(cpX, pCurrent.y, cpX, pNext.y, pNext.x, pNext.y);
        }

        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();

        ctx.fillStyle = fillGradient;
        ctx.fill();

        // Crisp luminous crest rim
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = strokeWidth;
        ctx.stroke();
        ctx.restore();

        // Render crest glints at specified horizontal positions
        for (const gFrac of glintXFractions) {
          const gIndex = Math.min(segments, Math.max(0, Math.round(gFrac * segments)));
          const pt = points[gIndex];
          if (pt) {
            const glintAlpha = 0.55 + Math.sin(time * 2.2 + gFrac * 10) * 0.35;
            drawCrestGlint(pt.x, pt.y, glintAlpha, 2.2);
          }
        }
      };

      const motionSpeedMul = isHidden ? 1.25 : 1.0;
      const motionAmpMul = isHidden ? 1.25 : 1.0;

      // ──────────────────────────────────────────────────────────────────────────
      // LAYER 1: Deepest Background Ridge (DARKEST WAVE - Deep Midnight Violet)
      // ──────────────────────────────────────────────────────────────────────────
      const grad1 = ctx.createLinearGradient(0, height * 0.30, 0, height);
      grad1.addColorStop(0, '#130d2a');    // Deepest midnight obsidian violet
      grad1.addColorStop(0.5, '#191136');
      grad1.addColorStop(1, '#201642');
      drawRollingWave(
        0.36,
        18 * motionAmpMul, 12 * motionAmpMul,
        1.1, 1.8,
        0.8 * motionSpeedMul, 0.6 * motionSpeedMul,
        0.0,
        grad1,
        'rgba(147, 51, 234, 0.45)', 1.2,
        'rgba(0, 0, 0, 0.5)', 12, 4
      );

      // ──────────────────────────────────────────────────────────────────────────
      // LAYER 2: Mid-Back Dune (CROSSES DIAGONALLY - Saturated Royal Purple)
      // ──────────────────────────────────────────────────────────────────────────
      const grad2 = ctx.createLinearGradient(0, height * 0.40, 0, height);
      grad2.addColorStop(0, '#2d1252');    // Rich royal purple
      grad2.addColorStop(0.5, '#3b176c');
      grad2.addColorStop(1, '#491c84');
      drawRollingWave(
        0.48,
        22 * motionAmpMul, 15 * motionAmpMul,
        0.9, 1.4,
        -0.7 * motionSpeedMul, 0.85 * motionSpeedMul,
        1.8,
        grad2,
        'rgba(168, 85, 247, 0.70)', 1.4,
        'rgba(0, 0, 0, 0.65)', 20, -6,
        [0.28, 0.74]
      );

      // ──────────────────────────────────────────────────────────────────────────
      // LAYER 3: Mid-Front Dune (CROSSES OVER IN OPPOSITE ANGLE - Radiant Amethyst)
      // ──────────────────────────────────────────────────────────────────────────
      const grad3 = ctx.createLinearGradient(0, height * 0.52, 0, height);
      grad3.addColorStop(0, '#531b92');    // Radiant royal amethyst
      grad3.addColorStop(0.5, '#6521b2');
      grad3.addColorStop(1, '#7826d4');
      drawRollingWave(
        0.60,
        24 * motionAmpMul, 16 * motionAmpMul,
        1.2, 0.8,
        0.9 * motionSpeedMul, -0.75 * motionSpeedMul,
        3.4,
        grad3,
        'rgba(192, 132, 252, 0.85)', 1.5,
        'rgba(0, 0, 0, 0.70)', 24, -7,
        [0.45, 0.88]
      );

      // ──────────────────────────────────────────────────────────────────────────
      // LAYER 4: Foreground Ridge (Vibrant Luminous Violet)
      // ──────────────────────────────────────────────────────────────────────────
      const grad4 = ctx.createLinearGradient(0, height * 0.66, 0, height);
      grad4.addColorStop(0, '#7c3aed');    // Vibrant electric violet
      grad4.addColorStop(0.5, '#8b5cf6');
      grad4.addColorStop(1, '#9333ea');
      drawRollingWave(
        0.72,
        20 * motionAmpMul, 14 * motionAmpMul,
        0.8, 1.6,
        -0.8 * motionSpeedMul, 0.9 * motionSpeedMul,
        4.9,
        grad4,
        'rgba(233, 213, 255, 0.95)', 1.8,
        'rgba(0, 0, 0, 0.75)', 28, -8,
        [0.18, 0.62]
      );

      // ──────────────────────────────────────────────────────────────────────────
      // LAYER 5: Base Floor Dunes (THE LIGHTEST LAYER OF ALL - Luminous Lavender Glow)
      // Satisfies 100%: "the bottem will be the lightest the top darkest"
      // ──────────────────────────────────────────────────────────────────────────
      const grad5 = ctx.createLinearGradient(0, height * 0.80, 0, height);
      grad5.addColorStop(0, '#a855f7');    // Luminous bright violet crest
      grad5.addColorStop(0.35, '#c084fc'); // Glowing lavender silk
      grad5.addColorStop(0.70, '#d8b4fe'); // Soft radiant lilac
      grad5.addColorStop(1, '#ede9fe');    // Brilliant ethereal starlight lavender floor!
      drawRollingWave(
        0.84,
        16 * motionAmpMul, 10 * motionAmpMul,
        1.0, 1.3,
        0.75 * motionSpeedMul, -0.6 * motionSpeedMul,
        6.1,
        grad5,
        '#ffffff', 2.2,
        'rgba(0, 0, 0, 0.80)', 30, -9,
        [0.36, 0.82]
      );

      // ────────────────────────────────────────────────────────────────────────
      // 7. DELICATE ASTRONOMICAL CELESTIAL CROSS STARS (REFINED & TASTEFUL)
      // ────────────────────────────────────────────────────────────────────────
      const p1 = 0.68 + Math.sin(time * 1.8) * 0.22;
      const p2 = 0.60 + Math.sin(time * 1.5 + 1.2) * 0.24;
      const p3 = 0.64 + Math.sin(time * 1.9 + 2.5) * 0.20;
      const p4 = 0.58 + Math.sin(time * 1.4 + 3.8) * 0.25;
      const p5 = 0.52 + Math.sin(time * 1.7 + 4.6) * 0.22;

      // Single delicate constellation chord between Star 2, Star 1, and Star 3
      ctx.save();
      ctx.strokeStyle = 'rgba(216, 180, 254, 0.16)';
      ctx.lineWidth = 0.75;
      ctx.beginPath();
      ctx.moveTo(width * 0.18, height * 0.16);
      ctx.lineTo(width * 0.50, height * 0.08);
      ctx.lineTo(width * 0.84, height * 0.20);
      ctx.stroke();
      ctx.restore();

      // 1. Grand Zenith Cross Star (Above center header/clock)
      drawCelestialGlint(width * 0.50, height * 0.08, 11, p1);
      // 2. Upper-Left Sky Cross Star
      drawCelestialGlint(width * 0.18, height * 0.16, 9.5, p2);
      // 3. Orbital Arc Apex Cross Star (Right sky)
      drawCelestialGlint(width * 0.84, height * 0.20, 10, p3);
      // 4. Mid-Right Horizon Star
      drawCelestialGlint(width * 0.72, height * 0.34, 8.5, p4);
      // 5. Far-Left Sky Star
      drawCelestialGlint(width * 0.08, height * 0.28, 8.0, p5);

      // 8. Periodic Shooting Star
      updateAndDrawShootingStar();

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 select-none"
      aria-hidden="true"
    />
  );
};
