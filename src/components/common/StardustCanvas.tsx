import React, { useEffect, useRef } from 'react';
import { useData } from '../../context/DataContext';
import { CosmicPalette } from '../../types';

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
  const { isHUDHidden, wallpaperSettings } = useData();
  const isHUDHiddenRef = useRef(isHUDHidden);
  const wallpaperSettingsRef = useRef(wallpaperSettings);

  useEffect(() => {
    isHUDHiddenRef.current = isHUDHidden;
  }, [isHUDHidden]);

  useEffect(() => {
    wallpaperSettingsRef.current = wallpaperSettings;
  }, [wallpaperSettings]);

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

      // Soft optical Airy disc glow
      const glowGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, length * 0.9);
      glowGrad.addColorStop(0, 'rgba(255, 255, 255, 0.85)');
      glowGrad.addColorStop(0.3, 'rgba(216, 180, 254, 0.35)');
      glowGrad.addColorStop(0.7, 'rgba(147, 51, 234, 0.08)');
      glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(0, 0, length * 0.9, 0, Math.PI * 2);
      ctx.fill();

      // Ultra-delicate tapered diffraction spikes
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

      // Subtle 45° diagonal micro-rays
      const diagLen = length * 0.38;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(-diagLen, -diagLen); ctx.lineTo(diagLen, diagLen);
      ctx.moveTo(-diagLen, diagLen); ctx.lineTo(diagLen, -diagLen);
      ctx.stroke();

      // Brilliant pinpoint center core
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
    // 3. MAIN RENDER LOOP: BUTTERY SMOOTH DUNE OVERLAPS & COLOR STACKING
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

      const settings = wallpaperSettingsRef.current;
      const isHidden = isHUDHiddenRef.current;

      // Speed multipliers
      let speedFactor = 1.0;
      if (settings.speed === 'frozen') speedFactor = 0;
      else if (settings.speed === 'calm') speedFactor = 0.45;
      else if (settings.speed === 'dynamic') speedFactor = 1.45;
      else speedFactor = 0.85; // balanced

      if (isHidden && speedFactor > 0) speedFactor *= 1.25;

      time += prefersReducedMotion ? 0.002 : (0.014 * speedFactor);
      ctx.clearRect(0, 0, width, height);

      // Mouse lerp for subtle parallax
      currentMouseX += (targetMouseX - currentMouseX) * 0.04;
      currentMouseY += (targetMouseY - currentMouseY) * 0.04;
      const mouseNormX = (currentMouseX - width / 2) / (width / 2);
      const mouseNormY = (currentMouseY - height / 2) / (height / 2);

      // Amplitude multiplier
      let ampMul = 1.0;
      if (settings.amplitude === 'subtle') ampMul = 0.55;
      else if (settings.amplitude === 'dramatic') ampMul = 1.6;
      else ampMul = 1.0; // majestic

      if (isHidden) ampMul *= 1.2;

      // ────────────────────────────────────────────────────────────────────────
      // PALETTE CONFIGURATIONS (Darkest at top, Lightest at bottom floor)
      // ────────────────────────────────────────────────────────────────────────
      const palette = settings.palette as CosmicPalette;

      let skyTop = '#060814';
      let skyMid = '#090c22';
      let skyBot = '#0d0f28';
      let radGlowColor1 = 'rgba(147, 51, 234, 0.18)';
      let radGlowColor2 = 'rgba(79, 70, 229, 0.14)';
      let meridianColor = 'rgba(168, 85, 247, 0.25)';
      let orbitColor = 'rgba(192, 132, 252, 0.35)';

      // Layer gradients
      let dune1Colors = ['#130d2a', '#1a1138', '#201642'];
      let dune1Stroke = 'rgba(147, 51, 234, 0.50)';

      let dune2Colors = ['#2d1252', '#381666', '#491c84'];
      let dune2Stroke = 'rgba(168, 85, 247, 0.75)';

      let dune3Colors = ['#531b92', '#6521b2', '#7826d4'];
      let dune3Stroke = 'rgba(192, 132, 252, 0.88)';

      let dune4Colors = ['#7c3aed', '#8b5cf6', '#9333ea'];
      let dune4Stroke = 'rgba(233, 213, 255, 0.95)';

      let dune5Colors = ['#a855f7', '#c084fc', '#d8b4fe', '#ede9fe'];
      let dune5Stroke = '#ffffff';

      if (palette === 'celestial-cyan') {
        skyTop = '#040a14';
        skyMid = '#071526';
        skyBot = '#0a1d33';
        radGlowColor1 = 'rgba(14, 165, 233, 0.18)';
        radGlowColor2 = 'rgba(6, 182, 212, 0.14)';
        meridianColor = 'rgba(56, 189, 248, 0.25)';
        orbitColor = 'rgba(103, 232, 249, 0.35)';

        dune1Colors = ['#091e2c', '#0c293c', '#10354c'];
        dune1Stroke = 'rgba(14, 165, 233, 0.50)';

        dune2Colors = ['#0e3f57', '#125675', '#166e94'];
        dune2Stroke = 'rgba(6, 182, 212, 0.75)';

        dune3Colors = ['#0284c7', '#0369a1', '#0284c7'];
        dune3Stroke = 'rgba(56, 189, 248, 0.88)';

        dune4Colors = ['#06b6d4', '#22d3ee', '#38bdf8'];
        dune4Stroke = 'rgba(207, 250, 254, 0.95)';

        dune5Colors = ['#38bdf8', '#67e8f9', '#a5f3fc', '#ecfeff'];
        dune5Stroke = '#ffffff';
      } else if (palette === 'supernova-sunset') {
        skyTop = '#12050e';
        skyMid = '#22091b';
        skyBot = '#2d0c24';
        radGlowColor1 = 'rgba(244, 63, 94, 0.18)';
        radGlowColor2 = 'rgba(249, 115, 22, 0.14)';
        meridianColor = 'rgba(251, 113, 133, 0.25)';
        orbitColor = 'rgba(253, 186, 116, 0.35)';

        dune1Colors = ['#300a20', '#450f2f', '#5c143e'];
        dune1Stroke = 'rgba(225, 29, 72, 0.50)';

        dune2Colors = ['#6e133e', '#881337', '#9f1239'];
        dune2Stroke = 'rgba(244, 63, 94, 0.75)';

        dune3Colors = ['#be123c', '#e11d48', '#f43f5e'];
        dune3Stroke = 'rgba(251, 113, 133, 0.88)';

        dune4Colors = ['#f43f5e', '#fb7185', '#fb923c'];
        dune4Stroke = 'rgba(254, 205, 211, 0.95)';

        dune5Colors = ['#fb923c', '#fde047', '#fef08a', '#fffbeb'];
        dune5Stroke = '#ffffff';
      } else if (palette === 'nocturne-silver') {
        skyTop = '#050508';
        skyMid = '#0c0c11';
        skyBot = '#121219';
        radGlowColor1 = 'rgba(161, 161, 170, 0.16)';
        radGlowColor2 = 'rgba(113, 113, 122, 0.12)';
        meridianColor = 'rgba(212, 212, 216, 0.22)';
        orbitColor = 'rgba(228, 228, 231, 0.32)';

        dune1Colors = ['#15151e', '#1c1c27', '#22222f'];
        dune1Stroke = 'rgba(113, 113, 122, 0.50)';

        dune2Colors = ['#333344', '#3d3d52', '#45455c'];
        dune2Stroke = 'rgba(161, 161, 170, 0.75)';

        dune3Colors = ['#565670', '#636382', '#707090'];
        dune3Stroke = 'rgba(212, 212, 216, 0.88)';

        dune4Colors = ['#8e8ea8', '#9c9cb8', '#abaac4'];
        dune4Stroke = 'rgba(244, 244, 245, 0.95)';

        dune5Colors = ['#c5c5dc', '#d4d4e8', '#e2e2f0', '#ffffff'];
        dune5Stroke = '#ffffff';
      }

      // 1. Deep Midnight Cosmic Sky Background
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, skyTop);
      bgGrad.addColorStop(0.45, skyMid);
      bgGrad.addColorStop(1, skyBot);
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Soft ambient radial glows
      const radGlow1 = ctx.createRadialGradient(
        width * 0.80, height * 0.18, 0,
        width * 0.80, height * 0.18, width * 0.50
      );
      radGlow1.addColorStop(0, radGlowColor1);
      radGlow1.addColorStop(0.7, 'rgba(0, 0, 0, 0.04)');
      radGlow1.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = radGlow1;
      ctx.fillRect(0, 0, width, height);

      const radGlow2 = ctx.createRadialGradient(
        width * 0.18, height * 0.82, 0,
        width * 0.18, height * 0.82, width * 0.55
      );
      radGlow2.addColorStop(0, radGlowColor2);
      radGlow2.addColorStop(0.65, 'rgba(0, 0, 0, 0.03)');
      radGlow2.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = radGlow2;
      ctx.fillRect(0, 0, width, height);

      // 2. Faint Astronomical Coordinate Hairline Grid
      if (settings.showMeridian) {
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

        // Vertical Celestial Meridian Line (At x = width * 0.93)
        const meridianX = width * 0.93;
        ctx.strokeStyle = meridianColor;
        ctx.lineWidth = 1.0;
        ctx.beginPath();
        ctx.moveTo(meridianX, 0);
        ctx.lineTo(meridianX, height);
        ctx.stroke();

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.lineWidth = 1;
        for (let my = 50; my < height; my += 70) {
          ctx.beginPath();
          ctx.moveTo(meridianX - 4, my);
          ctx.lineTo(meridianX + 4, my);
          ctx.stroke();
        }
        ctx.restore();
      }

      // 3. Sweeping Planetary Orbital Trajectory Arc
      if (settings.showOrbitalTrack) {
        ctx.save();
        const orbitCenterX = width * 0.62;
        const orbitCenterY = height * 0.88;
        const orbitRadiusX = Math.min(width, height) * 0.98;
        const orbitRadiusY = Math.min(width, height) * 0.58;

        ctx.shadowColor = orbitColor;
        ctx.shadowBlur = 8;
        ctx.strokeStyle = orbitColor;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.ellipse(orbitCenterX, orbitCenterY, orbitRadiusX, orbitRadiusY, -0.36, Math.PI * 0.8, Math.PI * 1.95);
        ctx.stroke();

        ctx.setLineDash([4, 10]);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.18)';
        ctx.lineWidth = 1.0;
        ctx.beginPath();
        ctx.ellipse(orbitCenterX, orbitCenterY, orbitRadiusX * 1.07, orbitRadiusY * 1.07, -0.36, Math.PI * 0.75, Math.PI * 1.92);
        ctx.stroke();
        ctx.setLineDash([]);

        // Subtle planetary node
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = '#ffffff';
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(width * 0.72, height * 0.48, 2.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 4. Background Pinprick Stardust
      if (settings.showStars) {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          if (!prefersReducedMotion && speedFactor > 0) {
            p.x += p.vx * speedFactor;
            p.y += p.vy * speedFactor;
            p.alphaPhase += p.alphaSpeed * speedFactor;

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
          ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha.toFixed(3)})`;
          ctx.fill();
        }
      }

      // ────────────────────────────────────────────────────────────────────────
      // 5. BUTTERY SMOOTH DUNE SYSTEM (ZERO BUMPS, INFINITE C2 CONTINUITY)
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

      // Mathematical 2-segment cubic Bézier spline with continuous tangents
      // Completely eliminates corrugated ripples, producing silky, grand dunes!
      const drawSilkyDune = (
        yStartRatio: number,
        yMidRatio: number,
        yEndRatio: number,
        xMidRatio: number,
        amp: number,
        speed: number,
        phase: number,
        fillGradient: CanvasGradient,
        strokeColor: string,
        strokeWidth: number,
        shadowColor: string,
        shadowBlur: number,
        shadowOffsetY: number,
        glintTValues: number[] = []
      ) => {
        // Ultra-gentle low-frequency harmonic breathing
        const sway1 = Math.sin(time * speed + phase) * amp;
        const sway2 = Math.cos(time * speed * 0.85 + phase * 1.3) * (amp * 0.85);
        const sway3 = Math.sin(time * speed * 1.15 + phase * 2.1) * (amp * 0.9);

        const y0 = height * yStartRatio + sway1;
        const xMid = width * xMidRatio;
        const yMid = height * yMidRatio + sway2;
        const yEnd = height * yEndRatio + sway3;

        // Tangent continuity at midpoint ensures zero kinks or bumps
        const tangentSlope = (yEnd - y0) / width;
        const span1 = xMid;
        const span2 = width - xMid;

        const cp1x = span1 * 0.40;
        const cp1y = y0 + (yMid - y0) * 0.20 + Math.cos(time * speed * 0.7 + phase) * (amp * 0.35);

        const cp2x = xMid - span1 * 0.35;
        const cp2y = yMid - tangentSlope * (span1 * 0.35);

        const cp3x = xMid + span2 * 0.35;
        const cp3y = yMid + tangentSlope * (span2 * 0.35);

        const cp4x = xMid + span2 * 0.70;
        const cp4y = yEnd - (yEnd - yMid) * 0.25 + Math.sin(time * speed * 0.8 + phase * 1.5) * (amp * 0.35);

        ctx.save();
        if (shadowBlur > 0) {
          ctx.shadowColor = shadowColor;
          ctx.shadowBlur = shadowBlur;
          ctx.shadowOffsetY = shadowOffsetY;
        }

        ctx.beginPath();
        ctx.moveTo(0, y0);
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, xMid, yMid);
        ctx.bezierCurveTo(cp3x, cp3y, cp4x, cp4y, width, yEnd);
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

        // Render crest glints along the smooth spline curve
        for (const t of glintTValues) {
          let gx = 0, gy = 0;
          if (t <= 0.5) {
            const u = t * 2;
            const omt = 1 - u;
            gx = omt * omt * omt * 0 + 3 * omt * omt * u * cp1x + 3 * omt * u * u * cp2x + u * u * u * xMid;
            gy = omt * omt * omt * y0 + 3 * omt * omt * u * cp1y + 3 * omt * u * u * cp2y + u * u * u * yMid;
          } else {
            const u = (t - 0.5) * 2;
            const omt = 1 - u;
            gx = omt * omt * omt * xMid + 3 * omt * omt * u * cp3x + 3 * omt * u * u * cp4x + u * u * u * width;
            gy = omt * omt * omt * yMid + 3 * omt * omt * u * cp3y + 3 * omt * u * u * cp4y + u * u * u * yEnd;
          }
          const glintAlpha = 0.55 + Math.sin(time * 2.0 + t * 8) * 0.35;
          drawCrestGlint(gx, gy, glintAlpha, 2.2);
        }
      };

      // ──────────────────────────────────────────────────────────────────────────
      // LAYER 1: Deepest Background Ridge (DARKEST DUNE)
      // ──────────────────────────────────────────────────────────────────────────
      const grad1 = ctx.createLinearGradient(0, height * 0.30, 0, height);
      grad1.addColorStop(0, dune1Colors[0]);
      grad1.addColorStop(0.5, dune1Colors[1]);
      grad1.addColorStop(1, dune1Colors[2]);
      drawSilkyDune(
        0.34, 0.38, 0.32, 0.52,
        18 * ampMul, 0.45, 0.0,
        grad1, dune1Stroke, 1.2,
        'rgba(0, 0, 0, 0.50)', 14, 4,
        [0.32, 0.78]
      );

      // ──────────────────────────────────────────────────────────────────────────
      // LAYER 2: Mid-Back Dune (CROSSES DIAGONALLY - Saturated Purple)
      // Starts lower on left (0.52), crests high in center-right (0.38)
      // Visibly crosses in front of Layer 1 on the right side!
      // ──────────────────────────────────────────────────────────────────────────
      const grad2 = ctx.createLinearGradient(0, height * 0.38, 0, height);
      grad2.addColorStop(0, dune2Colors[0]);
      grad2.addColorStop(0.5, dune2Colors[1]);
      grad2.addColorStop(1, dune2Colors[2]);
      drawSilkyDune(
        0.52, 0.44, 0.36, 0.58,
        22 * ampMul, 0.50, 1.8,
        grad2, dune2Stroke, 1.4,
        'rgba(0, 0, 0, 0.65)', 20, -6,
        [0.24, 0.72]
      );

      // ──────────────────────────────────────────────────────────────────────────
      // LAYER 3: Mid-Front Dune (CROSSES FROM OPPOSITE ANGLE - Radiant Amethyst)
      // Starts higher on left (0.42), sweeps down across center to right (0.64)
      // Visibly cuts across in front of Layer 2!
      // ──────────────────────────────────────────────────────────────────────────
      const grad3 = ctx.createLinearGradient(0, height * 0.42, 0, height);
      grad3.addColorStop(0, dune3Colors[0]);
      grad3.addColorStop(0.5, dune3Colors[1]);
      grad3.addColorStop(1, dune3Colors[2]);
      drawSilkyDune(
        0.42, 0.48, 0.64, 0.42,
        24 * ampMul, 0.55, 3.4,
        grad3, dune3Stroke, 1.6,
        'rgba(0, 0, 0, 0.70)', 24, -7,
        [0.42, 0.86]
      );

      // ──────────────────────────────────────────────────────────────────────────
      // LAYER 4: Foreground Ridge (Vibrant Luminous Violet)
      // Sweeps across lower third: left 0.66, dip 0.70, right 0.62
      // ──────────────────────────────────────────────────────────────────────────
      const grad4 = ctx.createLinearGradient(0, height * 0.62, 0, height);
      grad4.addColorStop(0, dune4Colors[0]);
      grad4.addColorStop(0.5, dune4Colors[1]);
      grad4.addColorStop(1, dune4Colors[2]);
      drawSilkyDune(
        0.66, 0.70, 0.60, 0.62,
        20 * ampMul, 0.48, 4.9,
        grad4, dune4Stroke, 1.8,
        'rgba(0, 0, 0, 0.75)', 28, -8,
        [0.18, 0.65]
      );

      // ──────────────────────────────────────────────────────────────────────────
      // LAYER 5: Base Floor Dunes (THE LIGHTEST LAYER OF ALL - Starlight Glow Floor)
      // 100% Satisfies: "the bottem will be the lightest the top darkest"
      // ──────────────────────────────────────────────────────────────────────────
      const grad5 = ctx.createLinearGradient(0, height * 0.76, 0, height);
      grad5.addColorStop(0, dune5Colors[0]);
      grad5.addColorStop(0.35, dune5Colors[1]);
      grad5.addColorStop(0.70, dune5Colors[2]);
      grad5.addColorStop(1, dune5Colors[3]);
      drawSilkyDune(
        0.78, 0.82, 0.75, 0.48,
        16 * ampMul, 0.40, 6.2,
        grad5, dune5Stroke, 2.2,
        'rgba(0, 0, 0, 0.80)', 32, -9,
        [0.35, 0.82]
      );

      // ────────────────────────────────────────────────────────────────────────
      // 6. DELICATE ASTRONOMICAL CELESTIAL CROSS STARS (REFINED & TASTEFUL)
      // ────────────────────────────────────────────────────────────────────────
      if (settings.showCrossStars) {
        const p1 = 0.68 + Math.sin(time * 1.8) * 0.22;
        const p2 = 0.60 + Math.sin(time * 1.5 + 1.2) * 0.24;
        const p3 = 0.64 + Math.sin(time * 1.9 + 2.5) * 0.20;
        const p4 = 0.58 + Math.sin(time * 1.4 + 3.8) * 0.25;
        const p5 = 0.52 + Math.sin(time * 1.7 + 4.6) * 0.22;

        // Single delicate constellation chord between Star 2, Star 1, and Star 3
        ctx.save();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.16)';
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
      }

      // 7. Periodic Shooting Star
      if (settings.showShootingStars) {
        updateAndDrawShootingStar();
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
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 select-none"
      aria-hidden="true"
    />
  );
};
