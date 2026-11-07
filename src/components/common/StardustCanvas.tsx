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
  color: string;
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
    // 1. PARTICLES & PARALLAX ENGINE
    // ──────────────────────────────────────────────────────────────────────────
    const starColors = [
      'rgba(255, 255, 255, ',
      'rgba(233, 213, 255, ',
      'rgba(192, 132, 252, ',
      'rgba(168, 85, 247, ',
      'rgba(224, 231, 255, ',
    ];

    let particles: Particle[] = [];
    const initParticles = () => {
      particles = [];
      const count = width < 768 ? 75 : 140;

      for (let i = 0; i < count; i++) {
        const z = Math.random() > 0.8 ? 2 : Math.random() > 0.4 ? 1 : 0;
        const baseRadius = Math.random() * 0.9 + (z === 2 ? 1.4 : 0.4);
        const color = starColors[Math.floor(Math.random() * starColors.length)];

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z,
          radius: baseRadius,
          alpha: Math.random() * 0.5 + 0.25,
          alphaSpeed: Math.random() * 0.012 + 0.005,
          alphaPhase: Math.random() * Math.PI * 2,
          vx: (Math.random() - 0.5) * 0.08,
          vy: (Math.random() - 0.5) * 0.08,
          color,
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
    initParticles();

    // Mouse parallax tracking
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;
    let currentMouseX = width / 2;
    let currentMouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Shooting star / bolide
    const shootingStar: ShootingStar = {
      x: -100,
      y: -100,
      length: 120,
      speed: 15,
      angle: Math.PI / 4 + 0.08,
      alpha: 0,
      active: false,
    };

    let shootingStarCooldown = Math.random() * 180 + 120;

    const updateAndDrawShootingStar = () => {
      if (!shootingStar.active) {
        shootingStarCooldown--;
        if (shootingStarCooldown <= 0 && !prefersReducedMotion) {
          shootingStar.active = true;
          shootingStar.x = Math.random() * (width * 0.65);
          shootingStar.y = Math.random() * (height * 0.30);
          shootingStar.alpha = 1.0;
          shootingStar.length = Math.random() * 70 + 85;
          shootingStarCooldown = Math.random() * 300 + 200;
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
          bolideGrad.addColorStop(0.7, 'rgba(192, 132, 252, ' + shootingStar.alpha * 0.6 + ')');
          bolideGrad.addColorStop(1, '#ffffff');

          ctx.strokeStyle = bolideGrad;
          ctx.lineWidth = 1.8;
          ctx.shadowColor = '#c084fc';
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
    // 2. SIGNATURE 4-POINT CROSS SPARKLE STAR (FROM REFERENCE IMAGE)
    // ──────────────────────────────────────────────────────────────────────────
    const drawSignatureSparkle = (cx: number, cy: number, size: number, alpha: number) => {
      ctx.save();
      const a = Math.max(0.12, Math.min(1.0, alpha));
      ctx.globalAlpha = a;

      // 1. Soft radial flare bloom
      const haloGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, size * 5.5);
      haloGrad.addColorStop(0, 'rgba(192, 132, 252, 0.85)');
      haloGrad.addColorStop(0.35, 'rgba(147, 51, 234, 0.25)');
      haloGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = haloGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, size * 5.5, 0, Math.PI * 2);
      ctx.fill();

      // 2. Horizontal & Vertical Tapered Beams
      const beamLen = size * 6.5;
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

      // 3. Diagonal 45° secondary diamond rays
      const diagLen = beamLen * 0.42;
      ctx.strokeStyle = 'rgba(192, 132, 252, 0.75)';
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

    // ──────────────────────────────────────────────────────────────────────────
    // 3. MAIN RENDER LOOP: LIVING, MOVING COSMIC RIBBONS & WAVES
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

      time += prefersReducedMotion ? 0.003 : 0.012;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse lerp for subtle interactive parallax
      currentMouseX += (targetMouseX - currentMouseX) * 0.04;
      currentMouseY += (targetMouseY - currentMouseY) * 0.04;
      const mouseNormX = (currentMouseX - width / 2) / (width / 2);
      const mouseNormY = (currentMouseY - height / 2) / (height / 2);

      // 1. Deep Space Midnight Indigo Canvas Base
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, '#060814');
      bgGrad.addColorStop(0.48, '#0a0d22');
      bgGrad.addColorStop(1, '#0e1028');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Cosmic Ambient Radial Glows (Deep Volumetric Purple/Blue)
      const radGlow1 = ctx.createRadialGradient(
        width * 0.82, height * 0.18, 0,
        width * 0.82, height * 0.18, width * 0.55
      );
      radGlow1.addColorStop(0, 'rgba(147, 51, 234, 0.20)');
      radGlow1.addColorStop(0.65, 'rgba(88, 28, 135, 0.06)');
      radGlow1.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = radGlow1;
      ctx.fillRect(0, 0, width, height);

      const radGlow2 = ctx.createRadialGradient(
        width * 0.18, height * 0.82, 0,
        width * 0.18, height * 0.82, width * 0.60
      );
      radGlow2.addColorStop(0, 'rgba(79, 70, 229, 0.16)');
      radGlow2.addColorStop(0.6, 'rgba(59, 130, 246, 0.04)');
      radGlow2.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = radGlow2;
      ctx.fillRect(0, 0, width, height);

      // 3. Faint Astronomical Coordinate Hairline Grid (Etched Cartography)
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

      // 4. Vertical Celestial Meridian Line (At x = width * 0.93, from reference image!)
      ctx.save();
      const meridianX = width * 0.93;
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.25)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(meridianX, 0);
      ctx.lineTo(meridianX, height);
      ctx.stroke();

      // Horizontal coordinate ticks along the meridian line
      ctx.strokeStyle = 'rgba(216, 180, 254, 0.20)';
      ctx.lineWidth = 1;
      for (let my = 50; my < height; my += 70) {
        ctx.beginPath();
        ctx.moveTo(meridianX - 4, my);
        ctx.lineTo(meridianX + 4, my);
        ctx.stroke();
      }
      ctx.restore();

      // 5. Sweeping Planetary Orbital Trajectory Arc (From reference image!)
      ctx.save();
      const orbitCenterX = width * 0.62;
      const orbitCenterY = height * 0.88;
      const orbitRadiusX = Math.min(width, height) * 0.98;
      const orbitRadiusY = Math.min(width, height) * 0.58;

      // Primary solid orbital trajectory
      ctx.strokeStyle = 'rgba(192, 132, 252, 0.38)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.ellipse(orbitCenterX, orbitCenterY, orbitRadiusX, orbitRadiusY, -0.36, Math.PI * 0.8, Math.PI * 1.95);
      ctx.stroke();

      // Secondary concentric dashed transfer trajectory
      ctx.setLineDash([4, 10]);
      ctx.strokeStyle = 'rgba(147, 51, 234, 0.22)';
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

        ctx.strokeStyle = 'rgba(192, 132, 252, 0.75)';
        ctx.lineWidth = 1.0;
        ctx.beginPath();
        ctx.arc(nx, ny, 5.5, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();

      // 6. LIVING, MOVING ETHEREAL COSMIC WAVE RIBBONS (From reference image!)
      // Ribbon 1: Upper-Mid Diagonal Flowing Cosmic Ribbon (Signature S-Curve)
      const sway1 = Math.sin(time * 0.35) * 14;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, height * 0.38 + sway1);
      ctx.bezierCurveTo(
        width * 0.28, height * 0.32 + sway1 * 0.8,
        width * 0.55, height * 0.56 - sway1 * 0.6,
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
      wave1Grad.addColorStop(0, 'rgba(88, 28, 135, 0.42)');
      wave1Grad.addColorStop(0.65, 'rgba(30, 27, 75, 0.14)');
      wave1Grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = wave1Grad;
      ctx.fill();

      // Glowing vector contour stroke on Wave 1 crest
      ctx.strokeStyle = 'rgba(192, 132, 252, 0.65)';
      ctx.lineWidth = 1.8;
      ctx.shadowColor = 'rgba(168, 85, 247, 0.75)';
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.moveTo(0, height * 0.38 + sway1);
      ctx.bezierCurveTo(
        width * 0.28, height * 0.32 + sway1 * 0.8,
        width * 0.55, height * 0.56 - sway1 * 0.6,
        width * 0.82, height * 0.44 + sway1
      );
      ctx.bezierCurveTo(
        width * 0.94, height * 0.40 - sway1,
        width * 0.98, height * 0.45,
        width, height * 0.48
      );
      ctx.stroke();
      ctx.restore();

      // Ribbon 2: Mid-Lower Diagonal Undulating Ribbon
      const sway2 = Math.cos(time * 0.28) * 16;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, height * 0.56 + sway2);
      ctx.bezierCurveTo(
        width * 0.24, height * 0.48 + sway2,
        width * 0.50, height * 0.70 - sway2 * 0.6,
        width * 0.78, height * 0.60 + sway2 * 0.8
      );
      ctx.bezierCurveTo(
        width * 0.90, height * 0.56 - sway2,
        width * 0.96, height * 0.64,
        width, height * 0.66
      );
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      const wave2Grad = ctx.createLinearGradient(0, height * 0.48, width, height);
      wave2Grad.addColorStop(0, 'rgba(67, 56, 202, 0.45)');
      wave2Grad.addColorStop(0.55, 'rgba(15, 23, 42, 0.28)');
      wave2Grad.addColorStop(1, 'rgba(4, 5, 14, 0.95)');
      ctx.fillStyle = wave2Grad;
      ctx.fill();

      // Glowing vector contour stroke on Wave 2 crest
      ctx.strokeStyle = 'rgba(165, 180, 252, 0.55)';
      ctx.lineWidth = 1.6;
      ctx.shadowColor = 'rgba(129, 140, 248, 0.60)';
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.moveTo(0, height * 0.56 + sway2);
      ctx.bezierCurveTo(
        width * 0.24, height * 0.48 + sway2,
        width * 0.50, height * 0.70 - sway2 * 0.6,
        width * 0.78, height * 0.60 + sway2 * 0.8
      );
      ctx.bezierCurveTo(
        width * 0.90, height * 0.56 - sway2,
        width * 0.96, height * 0.64,
        width, height * 0.66
      );
      ctx.stroke();
      ctx.restore();

      // Ribbon 3: Deep Base Silhouette Wave
      const sway3 = Math.sin(time * 0.32) * 10;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, height * 0.74 + sway3);
      ctx.bezierCurveTo(
        width * 0.32, height * 0.66 + sway3,
        width * 0.62, height * 0.80 - sway3,
        width, height * 0.72 + sway3
      );
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      const wave3Grad = ctx.createLinearGradient(0, height * 0.70, 0, height);
      wave3Grad.addColorStop(0, 'rgba(49, 46, 129, 0.55)');
      wave3Grad.addColorStop(1, 'rgba(6, 7, 18, 0.92)');
      ctx.fillStyle = wave3Grad;
      ctx.fill();

      ctx.strokeStyle = 'rgba(147, 51, 234, 0.42)';
      ctx.lineWidth = 1.4;
      ctx.shadowColor = 'rgba(126, 34, 206, 0.45)';
      ctx.shadowBlur = 6;
      ctx.beginPath();
      ctx.moveTo(0, height * 0.74 + sway3);
      ctx.bezierCurveTo(
        width * 0.32, height * 0.66 + sway3,
        width * 0.62, height * 0.80 - sway3,
        width, height * 0.72 + sway3
      );
      ctx.stroke();
      ctx.restore();

      // 7. SIGNATURE PROMINENT 4-POINT SPARKLE STARS (Exact positions from reference image)
      const sparkleAlpha1 = 0.70 + Math.sin(time * 2.5) * 0.25;
      const sparkleAlpha2 = 0.65 + Math.sin(time * 2.1 + 1.5) * 0.25;
      const sparkleAlpha3 = 0.60 + Math.sin(time * 2.8 + 3.0) * 0.25;
      const sparkleAlpha4 = 0.65 + Math.sin(time * 2.3 + 4.2) * 0.25;
      const sparkleAlpha5 = 0.58 + Math.sin(time * 1.9 + 2.1) * 0.25;

      // Top center prominent star
      drawSignatureSparkle(width * 0.56, height * 0.08, 5.8, sparkleAlpha1);
      // Mid-left wave star
      drawSignatureSparkle(width * 0.25, height * 0.36, 5.0, sparkleAlpha2);
      // Center-left lower star
      drawSignatureSparkle(width * 0.35, height * 0.65, 4.4, sparkleAlpha3);
      // Top right star
      drawSignatureSparkle(width * 0.69, height * 0.08, 3.8, sparkleAlpha4);
      // Right wave star
      drawSignatureSparkle(width * 0.88, height * 0.38, 4.8, sparkleAlpha5);
      // Secondary ambient sparkle stars
      drawSignatureSparkle(width * 0.14, height * 0.18, 3.6, sparkleAlpha2);
      drawSignatureSparkle(width * 0.82, height * 0.72, 4.0, sparkleAlpha3);

      // 8. LIVING STARDUST PARTICLES (With gentle floating velocity & mouse parallax)
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
        const drawX = p.x + mouseNormX * 18 * depthFactor;
        const drawY = p.y + mouseNormY * 18 * depthFactor;

        const currentAlpha = Math.max(
          0.08,
          Math.min(0.85, p.alpha + Math.sin(p.alphaPhase) * 0.25)
        );

        ctx.beginPath();
        ctx.arc(drawX, drawY, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${currentAlpha.toFixed(3)})`;
        ctx.fill();

        // Soft halo on larger stardust
        if (p.radius > 1.1) {
          ctx.beginPath();
          ctx.arc(drawX, drawY, p.radius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${(currentAlpha * 0.25).toFixed(3)})`;
          ctx.fill();
        }
      }

      // 9. Periodic Cosmic Shooting Star / Bolide
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
