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
    // 2. AUTHENTIC ASTRONOMICAL CELESTIAL GLINT (SUBTLE & SOFT, ZERO UGLY HALOS)
    // ──────────────────────────────────────────────────────────────────────────
    const drawCelestialGlint = (cx: number, cy: number, length: number, alpha: number) => {
      ctx.save();
      ctx.translate(cx, cy);

      const a = Math.max(0.1, Math.min(0.9, alpha));
      ctx.globalAlpha = a;

      // 1. Soft optical Airy disc glow (tight, smooth, no square compression artifacts)
      const glowGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, length * 1.4);
      glowGrad.addColorStop(0, 'rgba(255, 255, 255, 0.6)');
      glowGrad.addColorStop(0.25, 'rgba(216, 180, 254, 0.22)');
      glowGrad.addColorStop(0.7, 'rgba(168, 85, 247, 0.05)');
      glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(0, 0, length * 1.4, 0, Math.PI * 2);
      ctx.fill();

      // 2. Ultra-delicate tapered diffraction spikes (soft, hairline, fades naturally to zero)
      const spikeGradH = ctx.createLinearGradient(-length, 0, length, 0);
      spikeGradH.addColorStop(0, 'rgba(255, 255, 255, 0)');
      spikeGradH.addColorStop(0.35, 'rgba(233, 213, 255, 0.5)');
      spikeGradH.addColorStop(0.5, '#ffffff');
      spikeGradH.addColorStop(0.65, 'rgba(233, 213, 255, 0.5)');
      spikeGradH.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.strokeStyle = spikeGradH;
      ctx.lineWidth = 0.7;
      ctx.beginPath();
      ctx.moveTo(-length, 0);
      ctx.lineTo(length, 0);
      ctx.stroke();

      const spikeGradV = ctx.createLinearGradient(0, -length, 0, length);
      spikeGradV.addColorStop(0, 'rgba(255, 255, 255, 0)');
      spikeGradV.addColorStop(0.35, 'rgba(233, 213, 255, 0.5)');
      spikeGradV.addColorStop(0.5, '#ffffff');
      spikeGradV.addColorStop(0.65, 'rgba(233, 213, 255, 0.5)');
      spikeGradV.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.strokeStyle = spikeGradV;
      ctx.lineWidth = 0.7;
      ctx.beginPath();
      ctx.moveTo(0, -length);
      ctx.lineTo(0, length);
      ctx.stroke();

      // 3. Brilliant pinpoint center core
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(0, 0, 1.1, 0, Math.PI * 2);
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
      bgGrad.addColorStop(0.48, '#0a0d22');
      bgGrad.addColorStop(1, '#0e1028');
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
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      const gridSpacingX = width * 0.16;
      for (let gx = gridSpacingX; gx < width; gx += gridSpacingX) {
        ctx.beginPath();
        ctx.moveTo(gx, 0);
        ctx.lineTo(gx, height);
        ctx.stroke();
      }
      ctx.restore();

      // 3. Vertical Celestial Meridian Line (At x = width * 0.93)
      ctx.save();
      const meridianX = width * 0.93;
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.22)';
      ctx.lineWidth = 1.0;
      ctx.beginPath();
      ctx.moveTo(meridianX, 0);
      ctx.lineTo(meridianX, height);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(216, 180, 254, 0.18)';
      ctx.lineWidth = 1;
      for (let my = 50; my < height; my += 70) {
        ctx.beginPath();
        ctx.moveTo(meridianX - 4, my);
        ctx.lineTo(meridianX + 4, my);
        ctx.stroke();
      }
      ctx.restore();

      // 4. Sweeping Planetary Orbital Trajectory Arc
      ctx.save();
      const orbitCenterX = width * 0.62;
      const orbitCenterY = height * 0.88;
      const orbitRadiusX = Math.min(width, height) * 0.98;
      const orbitRadiusY = Math.min(width, height) * 0.58;

      ctx.strokeStyle = 'rgba(192, 132, 252, 0.32)';
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.ellipse(orbitCenterX, orbitCenterY, orbitRadiusX, orbitRadiusY, -0.36, Math.PI * 0.8, Math.PI * 1.95);
      ctx.stroke();

      ctx.setLineDash([4, 10]);
      ctx.strokeStyle = 'rgba(147, 51, 234, 0.18)';
      ctx.lineWidth = 1.0;
      ctx.beginPath();
      ctx.ellipse(orbitCenterX, orbitCenterY, orbitRadiusX * 1.07, orbitRadiusY * 1.07, -0.36, Math.PI * 0.75, Math.PI * 1.92);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // ────────────────────────────────────────────────────────────────────────
      // 5. TRUE OVERLAPPING CROSSING WAVES (TOP DARKEST, BOTTOM LIGHTEST)
      // ────────────────────────────────────────────────────────────────────────
      // Explicit design law:
      // 1. The layers physically CROSS and WEAVE over one another (crests overlap valleys).
      // 2. The layers stack so the TOP is the DARKEST and the BOTTOM is the LIGHTEST.
      // 3. Drop shadows under each crest edge give unmistakable physical 3D separation.
      // 4. Multi-segment cubic beziers create organic, fluid silk swells.

      // Helper to paint delicate stardust glints riding along wave crests
      const drawCrestGlint = (cx: number, cy: number, alpha: number, size: number = 2.4) => {
        ctx.save();
        ctx.translate(cx, cy);
        const g = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 2.5);
        g.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
        g.addColorStop(0.35, `rgba(216, 180, 254, ${alpha * 0.7})`);
        g.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(0, 0, size * 2.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.85})`;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(-size * 2.2, 0); ctx.lineTo(size * 2.2, 0);
        ctx.moveTo(0, -size * 2.2); ctx.lineTo(0, size * 2.2);
        ctx.stroke();
        ctx.restore();
      };

      // --- LAYER 1: Deepest Background Strata (Top - Darkest Wave) ---
      const t1 = time * 0.95;
      const amp1 = isHidden ? 28 : 20;
      const w1_y0 = height * 0.36 + Math.sin(t1 * 0.8) * amp1;
      const w1_cp1x = width * (0.20 + Math.sin(t1 * 0.5) * 0.035);
      const w1_cp1y = height * 0.46 + Math.cos(t1 * 0.9) * (amp1 * 1.1);
      const w1_cp2x = width * (0.45 + Math.cos(t1 * 0.6) * 0.04);
      const w1_cp2y = height * 0.44 + Math.sin(t1 * 1.05) * (amp1 * 1.15);
      const w1_p1x = width * (0.65 + Math.sin(t1 * 0.7) * 0.035);
      const w1_p1y = height * 0.28 + Math.cos(t1 * 0.85) * (amp1 * 1.2);
      const w1_cp3x = width * (0.82 + Math.cos(t1 * 0.55) * 0.03);
      const w1_cp3y = height * 0.24 + Math.sin(t1 * 0.95) * amp1;
      const w1_cp4x = width * (0.92 + Math.sin(t1 * 0.65) * 0.025);
      const w1_cp4y = height * 0.32 + Math.cos(t1 * 0.8) * (amp1 * 0.9);
      const w1_endY = height * 0.35 + Math.sin(t1 * 0.75) * (amp1 * 0.85);

      ctx.save();
      ctx.shadowColor = 'rgba(0, 0, 0, 0.45)';
      ctx.shadowBlur = 14;
      ctx.shadowOffsetY = 4;
      ctx.beginPath();
      ctx.moveTo(0, w1_y0);
      ctx.bezierCurveTo(w1_cp1x, w1_cp1y, w1_cp2x, w1_cp2y, w1_p1x, w1_p1y);
      ctx.bezierCurveTo(w1_cp3x, w1_cp3y, w1_cp4x, w1_cp4y, width, w1_endY);
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      const wave1Grad = ctx.createLinearGradient(0, height * 0.24, 0, height);
      wave1Grad.addColorStop(0, '#1c133a');  // Darkest deep midnight indigo
      wave1Grad.addColorStop(0.5, '#150d2e');
      wave1Grad.addColorStop(1, '#0e0720');
      ctx.fillStyle = wave1Grad;
      ctx.fill();

      // Delicate crest hairline
      ctx.shadowColor = 'transparent';
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.50)';
      ctx.lineWidth = 1.3;
      ctx.stroke();
      ctx.restore();

      // --- LAYER 2: Middle Swell (LIGHTER than Layer 1, CROSSES OVER in center) ---
      const t2 = time * 1.15 + 1.3;
      const amp2 = isHidden ? 32 : 24;
      const w2_y0 = height * 0.52 + Math.cos(t2 * 0.85) * amp2;
      const w2_cp1x = width * (0.22 + Math.cos(t2 * 0.6) * 0.035);
      const w2_cp1y = height * 0.48 + Math.sin(t2 * 1.1) * (amp2 * 1.15);
      const w2_cp2x = width * (0.38 + Math.sin(t2 * 0.75) * 0.04);
      const w2_cp2y = height * 0.29 + Math.cos(t2 * 0.95) * (amp2 * 1.25); // PEAK RISES ABOVE LAYER 1!
      const w2_p1x = width * (0.58 + Math.cos(t2 * 0.5) * 0.035);
      const w2_p1y = height * 0.34 + Math.sin(t2 * 0.85) * amp2;
      const w2_cp3x = width * (0.76 + Math.sin(t2 * 0.65) * 0.03);
      const w2_cp3y = height * 0.48 + Math.cos(t2 * 0.9) * (amp2 * 1.1);
      const w2_cp4x = width * (0.88 + Math.cos(t2 * 0.7) * 0.025);
      const w2_cp4y = height * 0.54 + Math.sin(t2 * 0.8) * amp2;
      const w2_endY = height * 0.48 + Math.cos(t2 * 0.85) * (amp2 * 0.9);

      ctx.save();
      ctx.shadowColor = 'rgba(0, 0, 0, 0.65)';
      ctx.shadowBlur = 20;
      ctx.shadowOffsetY = -6; // Casts shadow onto Layer 1 where it overlaps!
      ctx.beginPath();
      ctx.moveTo(0, w2_y0);
      ctx.bezierCurveTo(w2_cp1x, w2_cp1y, w2_cp2x, w2_cp2y, w2_p1x, w2_p1y);
      ctx.bezierCurveTo(w2_cp3x, w2_cp3y, w2_cp4x, w2_cp4y, width, w2_endY);
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      const wave2Grad = ctx.createLinearGradient(0, height * 0.29, 0, height);
      wave2Grad.addColorStop(0, '#3e1b76');  // Lighter rich royal violet
      wave2Grad.addColorStop(0.5, '#30135e');
      wave2Grad.addColorStop(1, '#220b44');
      ctx.fillStyle = wave2Grad;
      ctx.fill();

      // Glowing violet crest rim
      ctx.shadowColor = 'rgba(192, 132, 252, 0.6)';
      ctx.shadowBlur = 8;
      ctx.strokeStyle = 'rgba(216, 180, 254, 0.72)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();

      // Crest Glint on Wave 2 Peak
      const crest2Alpha = 0.55 + Math.sin(t2 * 1.5) * 0.35;
      drawCrestGlint(w2_cp2x, w2_cp2y, crest2Alpha, 2.2);

      // --- LAYER 3: Foreground Silk Wave (LIGHTER than Layer 2, CROSSES OVER Layer 2) ---
      const t3 = time * 1.05 + 2.7;
      const amp3 = isHidden ? 34 : 26;
      const w3_y0 = height * 0.42 + Math.sin(t3 * 0.8) * amp3;
      const w3_cp1x = width * (0.26 + Math.sin(t3 * 0.65) * 0.04);
      const w3_cp1y = height * 0.58 + Math.cos(t3 * 0.95) * (amp3 * 1.15);
      const w3_cp2x = width * (0.48 + Math.cos(t3 * 0.7) * 0.045);
      const w3_cp2y = height * 0.64 + Math.sin(t3 * 1.1) * (amp3 * 1.1);
      const w3_p1x = width * (0.68 + Math.sin(t3 * 0.55) * 0.04);
      const w3_p1y = height * 0.44 + Math.cos(t3 * 0.9) * (amp3 * 1.25); // OVERLAPS LAYER 2 ON RIGHT!
      const w3_cp3x = width * (0.82 + Math.cos(t3 * 0.6) * 0.035);
      const w3_cp3y = height * 0.38 + Math.sin(t3 * 1.15) * amp3;
      const w3_cp4x = width * (0.92 + Math.sin(t3 * 0.75) * 0.025);
      const w3_cp4y = height * 0.52 + Math.cos(t3 * 0.8) * amp3;
      const w3_endY = height * 0.58 + Math.sin(t3 * 0.85) * (amp3 * 0.9);

      ctx.save();
      ctx.shadowColor = 'rgba(0, 0, 0, 0.70)';
      ctx.shadowBlur = 22;
      ctx.shadowOffsetY = -6; // Casts shadow onto Layer 2
      ctx.beginPath();
      ctx.moveTo(0, w3_y0);
      ctx.bezierCurveTo(w3_cp1x, w3_cp1y, w3_cp2x, w3_cp2y, w3_p1x, w3_p1y);
      ctx.bezierCurveTo(w3_cp3x, w3_cp3y, w3_cp4x, w3_cp4y, width, w3_endY);
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      const wave3Grad = ctx.createLinearGradient(0, height * 0.38, 0, height);
      wave3Grad.addColorStop(0, '#6626b8');  // Lighter still: vibrant luminous amethyst
      wave3Grad.addColorStop(0.5, '#521d96');
      wave3Grad.addColorStop(1, '#3e1374');
      ctx.fillStyle = wave3Grad;
      ctx.fill();

      // Glowing amethyst crest rim
      ctx.shadowColor = 'rgba(233, 213, 255, 0.7)';
      ctx.shadowBlur = 8;
      ctx.strokeStyle = 'rgba(233, 213, 255, 0.85)';
      ctx.lineWidth = 1.6;
      ctx.stroke();
      ctx.restore();

      // Crest Glints on Wave 3 Crests
      const crest3AlphaA = 0.6 + Math.sin(t3 * 1.8) * 0.3;
      const crest3AlphaB = 0.55 + Math.cos(t3 * 1.4) * 0.35;
      drawCrestGlint(w3_p1x, w3_p1y, crest3AlphaA, 2.5);
      drawCrestGlint(w3_cp3x, w3_cp3y, crest3AlphaB, 2.0);

      // --- LAYER 4: Base Foundation Wave (THE LIGHTEST LAYER OF ALL) ---
      const t4 = time * 0.85 + 4.0;
      const amp4 = isHidden ? 30 : 22;
      const w4_y0 = height * 0.68 + Math.cos(t4 * 0.75) * amp4;
      const w4_cp1x = width * (0.18 + Math.cos(t4 * 0.5) * 0.035);
      const w4_cp1y = height * 0.62 + Math.sin(t4 * 0.95) * (amp4 * 1.1);
      const w4_cp2x = width * (0.36 + Math.sin(t4 * 0.65) * 0.04);
      const w4_cp2y = height * 0.54 + Math.cos(t4 * 0.9) * (amp4 * 1.25); // SWELLS HIGH OVER LAYER 3!
      const w4_p1x = width * (0.58 + Math.cos(t4 * 0.6) * 0.035);
      const w4_p1y = height * 0.68 + Math.sin(t4 * 0.85) * amp4;
      const w4_cp3x = width * (0.75 + Math.sin(t4 * 0.55) * 0.03);
      const w4_cp3y = height * 0.74 + Math.cos(t4 * 0.8) * (amp4 * 1.1);
      const w4_cp4x = width * (0.88 + Math.cos(t4 * 0.7) * 0.025);
      const w4_cp4y = height * 0.66 + Math.sin(t4 * 1.05) * amp4;
      const w4_endY = height * 0.64 + Math.cos(t4 * 0.75) * (amp4 * 0.85);

      ctx.save();
      ctx.shadowColor = 'rgba(0, 0, 0, 0.75)';
      ctx.shadowBlur = 26;
      ctx.shadowOffsetY = -8; // Prominent drop shadow onto Layer 3
      ctx.beginPath();
      ctx.moveTo(0, w4_y0);
      ctx.bezierCurveTo(w4_cp1x, w4_cp1y, w4_cp2x, w4_cp2y, w4_p1x, w4_p1y);
      ctx.bezierCurveTo(w4_cp3x, w4_cp3y, w4_cp4x, w4_cp4y, width, w4_endY);
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      const wave4Grad = ctx.createLinearGradient(0, height * 0.54, 0, height);
      wave4Grad.addColorStop(0, '#9a3ee8');     // THE LIGHTEST: bright, radiant, luminous violet
      wave4Grad.addColorStop(0.4, '#802bcc');   // Vibrant royal amethyst
      wave4Grad.addColorStop(1, '#5e199c');     // Deep luminous foundation
      ctx.fillStyle = wave4Grad;
      ctx.fill();

      // Brilliant white-lavender crest rim with radiant bloom
      ctx.shadowColor = 'rgba(255, 255, 255, 0.9)';
      ctx.shadowBlur = 10;
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.8;
      ctx.stroke();
      ctx.restore();

      // Crest Glints on Wave 4 Peak
      const crest4Alpha = 0.7 + Math.sin(t4 * 1.6) * 0.25;
      drawCrestGlint(w4_cp2x, w4_cp2y, crest4Alpha, 2.8);

      // ────────────────────────────────────────────────────────────────────────
      // 6. DELICATE ASTRONOMICAL STARDUST & CELESTIAL FOCAL GLINTS
      // ────────────────────────────────────────────────────────────────────────
      // A. Natural Pinprick Stardust Void (Clean, organic points of light)
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
        // Vary slightly between pure diamond white and delicate ice lavender
        if (p.z === 2) {
          ctx.fillStyle = `rgba(233, 213, 255, ${currentAlpha.toFixed(3)})`;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha.toFixed(3)})`;
        }
        ctx.fill();
      }

      // B. Subtle, Authentic Astronomical Glints (Only 2 in entire sky, matching reference)
      const glintPulse1 = 0.65 + Math.sin(time * 2.0) * 0.20;
      const glintPulse2 = 0.55 + Math.sin(time * 1.6 + 1.8) * 0.18;

      // 1. Primary Zenith Glint above center-top header
      drawCelestialGlint(width * 0.54, height * 0.08, 9, glintPulse1);
      // 2. Secondary Celestial Glint near the upper-right meridian
      drawCelestialGlint(width * 0.88, height * 0.16, 7, glintPulse2);

      // 7. Periodic Shooting Star
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
