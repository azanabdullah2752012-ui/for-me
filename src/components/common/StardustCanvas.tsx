import React, { useEffect, useRef } from 'react';

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
          shootingStarCooldown = Math.random() * 340 + 220;
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

      time += prefersReducedMotion ? 0.002 : 0.008;
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
      // 5. TRUE OVERLAPPING CELESTIAL DUNES & WAVES (DIAGONAL DEPTH & LAYERING)
      // ────────────────────────────────────────────────────────────────────────
      // Instead of parallel horizontal stripes, the waves are sculpted as sweeping
      // diagonal ridges that cross and overlap one another—just like dunes in a desert
      // or cosmic silk folds seen from an artistic perspective.

      // --- LAYER 1: Distant Twilight Ridge (Slopes from upper-right down to mid-left) ---
      const t1 = time * 0.5;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, height * 0.48 + Math.sin(t1) * 10);
      ctx.bezierCurveTo(
        width * 0.35, height * 0.42 + Math.cos(t1 * 0.8) * 12,
        width * 0.65, height * 0.28 + Math.sin(t1 * 1.1) * 14,
        width, height * 0.32 + Math.cos(t1 * 0.9) * 10
      );
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      const wave1Grad = ctx.createLinearGradient(0, height * 0.28, width, height);
      wave1Grad.addColorStop(0, 'rgba(58, 28, 105, 0.60)');
      wave1Grad.addColorStop(0.45, 'rgba(38, 22, 78, 0.75)');
      wave1Grad.addColorStop(1, 'rgba(12, 10, 28, 0.92)');
      ctx.fillStyle = wave1Grad;
      ctx.fill();

      // Silky illuminated crest rim
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.45)';
      ctx.lineWidth = 1.3;
      ctx.shadowColor = 'rgba(147, 51, 234, 0.50)';
      ctx.shadowBlur = 6;
      ctx.beginPath();
      ctx.moveTo(0, height * 0.48 + Math.sin(t1) * 10);
      ctx.bezierCurveTo(
        width * 0.35, height * 0.42 + Math.cos(t1 * 0.8) * 12,
        width * 0.65, height * 0.28 + Math.sin(t1 * 1.1) * 14,
        width, height * 0.32 + Math.cos(t1 * 0.9) * 10
      );
      ctx.stroke();
      ctx.restore();

      // --- LAYER 2: Middle Royal Purple Flow (Sweeps from mid-left down toward bottom-right) ---
      // Crosses diagonally over Layer 1, creating an organic overlapping intersection!
      const t2 = time * 0.65 + 1.2;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, height * 0.30 + Math.cos(t2 * 0.9) * 12);
      ctx.bezierCurveTo(
        width * 0.28, height * 0.36 + Math.sin(t2 * 1.1) * 14,
        width * 0.62, height * 0.52 + Math.cos(t2) * 16,
        width, height * 0.46 + Math.sin(t2 * 0.85) * 12
      );
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      const wave2Grad = ctx.createLinearGradient(0, height * 0.30, width, height);
      wave2Grad.addColorStop(0, 'rgba(92, 34, 155, 0.70)');
      wave2Grad.addColorStop(0.5, 'rgba(54, 24, 98, 0.82)');
      wave2Grad.addColorStop(1, 'rgba(10, 8, 24, 0.95)');
      ctx.fillStyle = wave2Grad;
      ctx.fill();

      // Glowing violet crest stroke
      ctx.strokeStyle = 'rgba(216, 180, 254, 0.65)';
      ctx.lineWidth = 1.5;
      ctx.shadowColor = 'rgba(192, 132, 252, 0.70)';
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.moveTo(0, height * 0.30 + Math.cos(t2 * 0.9) * 12);
      ctx.bezierCurveTo(
        width * 0.28, height * 0.36 + Math.sin(t2 * 1.1) * 14,
        width * 0.62, height * 0.52 + Math.cos(t2) * 16,
        width, height * 0.46 + Math.sin(t2 * 0.85) * 12
      );
      ctx.stroke();
      ctx.restore();

      // --- LAYER 3: Majestic Foreground Dune (Rises from center-left, OVERLAPPING both back layers) ---
      // Swells up from the left, cresting gracefully around x = 0.42, y = 0.44, then sweeping down
      const t3 = time * 0.58 + 2.5;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, height * 0.64 + Math.sin(t3 * 0.85) * 12);
      ctx.bezierCurveTo(
        width * 0.38, height * 0.44 + Math.cos(t3) * 15, // PROMINENT CREST OVERLAPPING LAYER 2!
        width * 0.72, height * 0.68 + Math.sin(t3 * 1.15) * 14,
        width, height * 0.58 + Math.cos(t3 * 0.75) * 10
      );
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      const wave3Grad = ctx.createLinearGradient(0, height * 0.44, 0, height);
      wave3Grad.addColorStop(0, 'rgba(76, 42, 142, 0.78)');
      wave3Grad.addColorStop(0.4, 'rgba(44, 26, 92, 0.88)');
      wave3Grad.addColorStop(1, 'rgba(8, 7, 20, 0.98)');
      ctx.fillStyle = wave3Grad;
      ctx.fill();

      // Glowing periwinkle/violet crest rim
      ctx.strokeStyle = 'rgba(192, 132, 252, 0.62)';
      ctx.lineWidth = 1.5;
      ctx.shadowColor = 'rgba(165, 180, 252, 0.65)';
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.moveTo(0, height * 0.64 + Math.sin(t3 * 0.85) * 12);
      ctx.bezierCurveTo(
        width * 0.38, height * 0.44 + Math.cos(t3) * 15,
        width * 0.72, height * 0.68 + Math.sin(t3 * 1.15) * 14,
        width, height * 0.58 + Math.cos(t3 * 0.75) * 10
      );
      ctx.stroke();
      ctx.restore();

      // --- LAYER 4: Deep Base Grounding Dune (Swells across the lower-right) ---
      const t4 = time * 0.40 + 3.8;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, height * 0.80 + Math.cos(t4 * 0.7) * 8);
      ctx.bezierCurveTo(
        width * 0.32, height * 0.78 + Math.sin(t4) * 10,
        width * 0.68, height * 0.66 + Math.cos(t4 * 0.9) * 10, // Swells in the right-center!
        width, height * 0.75 + Math.sin(t4 * 0.8) * 8
      );
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      const wave4Grad = ctx.createLinearGradient(0, height * 0.66, 0, height);
      wave4Grad.addColorStop(0, 'rgba(42, 24, 82, 0.88)');
      wave4Grad.addColorStop(0.45, 'rgba(24, 16, 52, 0.96)');
      wave4Grad.addColorStop(1, '#050612');
      ctx.fillStyle = wave4Grad;
      ctx.fill();

      ctx.strokeStyle = 'rgba(168, 85, 247, 0.40)';
      ctx.lineWidth = 1.2;
      ctx.shadowColor = 'rgba(147, 51, 234, 0.45)';
      ctx.shadowBlur = 6;
      ctx.beginPath();
      ctx.moveTo(0, height * 0.80 + Math.cos(t4 * 0.7) * 8);
      ctx.bezierCurveTo(
        width * 0.32, height * 0.78 + Math.sin(t4) * 10,
        width * 0.68, height * 0.66 + Math.cos(t4 * 0.9) * 10,
        width, height * 0.75 + Math.sin(t4 * 0.8) * 8
      );
      ctx.stroke();
      ctx.restore();

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
