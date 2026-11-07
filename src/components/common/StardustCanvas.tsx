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
      const count = width < 768 ? 65 : 120;

      for (let i = 0; i < count; i++) {
        const z = Math.random() > 0.8 ? 2 : Math.random() > 0.4 ? 1 : 0;
        const radius = Math.random() * 0.8 + (z === 2 ? 1.0 : 0.4);

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
    // 2. DELICATE 4-POINT DIAMOND SPARKLE STAR (ELEGANT ASTROID MATHEMATICS)
    // ──────────────────────────────────────────────────────────────────────────
    const drawSparkle = (cx: number, cy: number, r: number, alpha: number) => {
      ctx.save();
      ctx.translate(cx, cy);

      const a = Math.max(0.15, Math.min(1.0, alpha));
      ctx.globalAlpha = a;

      // Subtle, gentle radial flare glow (tight & natural, no blocky halo)
      const glowGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, r * 2.2);
      glowGrad.addColorStop(0, 'rgba(216, 180, 254, 0.45)');
      glowGrad.addColorStop(0.5, 'rgba(168, 85, 247, 0.15)');
      glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(0, 0, r * 2.2, 0, Math.PI * 2);
      ctx.fill();

      // Slender concave 4-point diamond sparkle star
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = 'rgba(216, 180, 254, 0.9)';
      ctx.shadowBlur = 4;

      ctx.beginPath();
      ctx.moveTo(0, -r);
      ctx.quadraticCurveTo(0, 0, r, 0);
      ctx.quadraticCurveTo(0, 0, 0, r);
      ctx.quadraticCurveTo(0, 0, -r, 0);
      ctx.quadraticCurveTo(0, 0, 0, -r);
      ctx.closePath();
      ctx.fill();

      // Sharp hairline needle rays extending slightly along the 4 axes
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(0, -r * 1.35);
      ctx.lineTo(0, r * 1.35);
      ctx.moveTo(-r * 1.35, 0);
      ctx.lineTo(r * 1.35, 0);
      ctx.stroke();

      // Brilliant white center core
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(0, 0, Math.max(0.8, r * 0.22), 0, Math.PI * 2);
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
      // 5. OVERLAPPING, LAYERED COSMIC WAVES (TRUE INTERSECTING TRANSLUCENCY)
      // ────────────────────────────────────────────────────────────────────────
      // Each wave is an organic, floating ribbon or layered wave that overlaps
      // and crosses over other waves, creating luminous layered depth.

      // --- LAYER 1: Back Deep Indigo Flow (Starts high-left, slopes down-right) ---
      const t1 = time * 0.6;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, height * 0.35 + Math.sin(t1) * 12);
      ctx.bezierCurveTo(
        width * 0.25, height * 0.28 + Math.cos(t1 * 0.8) * 14,
        width * 0.58, height * 0.52 + Math.sin(t1 * 1.1) * 15,
        width, height * 0.42 + Math.cos(t1 * 0.9) * 10
      );
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      const wave1Grad = ctx.createLinearGradient(0, height * 0.28, width, height);
      wave1Grad.addColorStop(0, 'rgba(49, 46, 129, 0.30)');
      wave1Grad.addColorStop(0.5, 'rgba(23, 14, 46, 0.18)');
      wave1Grad.addColorStop(1, 'rgba(6, 8, 20, 0.92)');
      ctx.fillStyle = wave1Grad;
      ctx.fill();

      // Luminous crest hairline
      ctx.strokeStyle = 'rgba(147, 51, 234, 0.45)';
      ctx.lineWidth = 1.4;
      ctx.shadowColor = 'rgba(126, 34, 206, 0.40)';
      ctx.shadowBlur = 6;
      ctx.beginPath();
      ctx.moveTo(0, height * 0.35 + Math.sin(t1) * 12);
      ctx.bezierCurveTo(
        width * 0.25, height * 0.28 + Math.cos(t1 * 0.8) * 14,
        width * 0.58, height * 0.52 + Math.sin(t1 * 1.1) * 15,
        width, height * 0.42 + Math.cos(t1 * 0.9) * 10
      );
      ctx.stroke();
      ctx.restore();

      // --- LAYER 2: Middle Royal Purple Wave (CROSSES OVER Layer 1 in the middle) ---
      // Rises in the center, overlapping in front of Layer 1 to create rich purple/indigo intersection!
      const t2 = time * 0.75 + 1.2;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, height * 0.46 + Math.cos(t2 * 0.9) * 12);
      ctx.bezierCurveTo(
        width * 0.30, height * 0.52 + Math.sin(t2 * 1.1) * 16,
        width * 0.62, height * 0.36 + Math.cos(t2) * 18, // Swells UP in the right-center!
        width, height * 0.54 + Math.sin(t2 * 0.8) * 14
      );
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      const wave2Grad = ctx.createLinearGradient(0, height * 0.35, width, height);
      wave2Grad.addColorStop(0, 'rgba(88, 28, 135, 0.38)');
      wave2Grad.addColorStop(0.55, 'rgba(30, 27, 75, 0.22)');
      wave2Grad.addColorStop(1, 'rgba(4, 5, 14, 0.95)');
      ctx.fillStyle = wave2Grad;
      ctx.fill();

      // Glowing violet crest stroke
      ctx.strokeStyle = 'rgba(192, 132, 252, 0.60)';
      ctx.lineWidth = 1.6;
      ctx.shadowColor = 'rgba(168, 85, 247, 0.65)';
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.moveTo(0, height * 0.46 + Math.cos(t2 * 0.9) * 12);
      ctx.bezierCurveTo(
        width * 0.30, height * 0.52 + Math.sin(t2 * 1.1) * 16,
        width * 0.62, height * 0.36 + Math.cos(t2) * 18,
        width, height * 0.54 + Math.sin(t2 * 0.8) * 14
      );
      ctx.stroke();
      ctx.restore();

      // --- LAYER 3: Foreground Amethyst Silk Ribbon (Overlaps both previous layers) ---
      // Sweeps across the lower-mid region, creating a multi-plane layered crest
      const t3 = time * 0.55 + 2.4;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, height * 0.60 + Math.sin(t3 * 0.8) * 14);
      ctx.bezierCurveTo(
        width * 0.28, height * 0.48 + Math.cos(t3) * 16, // Curves upward over Layer 2!
        width * 0.68, height * 0.68 + Math.sin(t3 * 1.2) * 14,
        width, height * 0.58 + Math.cos(t3 * 0.7) * 12
      );
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      const wave3Grad = ctx.createLinearGradient(0, height * 0.46, width, height);
      wave3Grad.addColorStop(0, 'rgba(67, 56, 202, 0.36)');
      wave3Grad.addColorStop(0.5, 'rgba(49, 46, 129, 0.24)');
      wave3Grad.addColorStop(1, 'rgba(6, 7, 18, 0.95)');
      ctx.fillStyle = wave3Grad;
      ctx.fill();

      // Glowing periwinkle crest stroke
      ctx.strokeStyle = 'rgba(165, 180, 252, 0.52)';
      ctx.lineWidth = 1.5;
      ctx.shadowColor = 'rgba(129, 140, 248, 0.55)';
      ctx.shadowBlur = 6;
      ctx.beginPath();
      ctx.moveTo(0, height * 0.60 + Math.sin(t3 * 0.8) * 14);
      ctx.bezierCurveTo(
        width * 0.28, height * 0.48 + Math.cos(t3) * 16,
        width * 0.68, height * 0.68 + Math.sin(t3 * 1.2) * 14,
        width, height * 0.58 + Math.cos(t3 * 0.7) * 12
      );
      ctx.stroke();
      ctx.restore();

      // --- LAYER 4: Deep Base Grounding Wave (Smooth lower foundation) ---
      const t4 = time * 0.4 + 3.8;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, height * 0.76 + Math.cos(t4 * 0.7) * 8);
      ctx.bezierCurveTo(
        width * 0.34, height * 0.70 + Math.sin(t4) * 10,
        width * 0.70, height * 0.82 + Math.cos(t4 * 0.9) * 10,
        width, height * 0.74 + Math.sin(t4 * 0.8) * 8
      );
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      const wave4Grad = ctx.createLinearGradient(0, height * 0.70, 0, height);
      wave4Grad.addColorStop(0, 'rgba(30, 27, 75, 0.55)');
      wave4Grad.addColorStop(1, 'rgba(3, 4, 10, 0.98)');
      ctx.fillStyle = wave4Grad;
      ctx.fill();

      ctx.strokeStyle = 'rgba(147, 51, 234, 0.35)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(0, height * 0.76 + Math.cos(t4 * 0.7) * 8);
      ctx.bezierCurveTo(
        width * 0.34, height * 0.70 + Math.sin(t4) * 10,
        width * 0.70, height * 0.82 + Math.cos(t4 * 0.9) * 10,
        width, height * 0.74 + Math.sin(t4 * 0.8) * 8
      );
      ctx.stroke();
      ctx.restore();

      // ────────────────────────────────────────────────────────────────────────
      // 6. DELICATE, CRISP ASTRONOMICAL STARS (NO UGLY HALOS)
      // ────────────────────────────────────────────────────────────────────────
      // Ambient micro-stars (clean, delicate pinpricks that twinkle softly)
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
        const drawX = p.x + mouseNormX * 14 * depthFactor;
        const drawY = p.y + mouseNormY * 14 * depthFactor;

        const currentAlpha = Math.max(
          0.12,
          Math.min(0.85, p.alpha + Math.sin(p.alphaPhase) * 0.22)
        );

        ctx.beginPath();
        ctx.arc(drawX, drawY, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha.toFixed(3)})`;
        ctx.fill();
      }

      // Handful of signature 4-point diamond sparkle stars (delicate & slender)
      const sp1 = 0.75 + Math.sin(time * 2.2) * 0.22;
      const sp2 = 0.70 + Math.sin(time * 1.8 + 1.2) * 0.22;
      const sp3 = 0.65 + Math.sin(time * 2.5 + 2.4) * 0.22;
      const sp4 = 0.70 + Math.sin(time * 2.0 + 3.6) * 0.22;
      const sp5 = 0.60 + Math.sin(time * 1.7 + 4.8) * 0.22;

      // Signature focal stars (calibrated directly to reference layout)
      drawSparkle(width * 0.56, height * 0.08, 6.5, sp1);  // Top center primary sparkle
      drawSparkle(width * 0.24, height * 0.36, 5.5, sp2);  // Mid-left wave sparkle
      drawSparkle(width * 0.34, height * 0.65, 5.0, sp3);  // Lower-left wave sparkle
      drawSparkle(width * 0.69, height * 0.08, 4.5, sp4);  // Top right sparkle
      drawSparkle(width * 0.88, height * 0.38, 5.5, sp5);  // Right wave sparkle
      drawSparkle(width * 0.82, height * 0.72, 4.5, sp2);  // Lower right sparkle

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
