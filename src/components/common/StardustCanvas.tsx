import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number; // 0 (deep field), 1 (mid field), 2 (foreground)
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

export const StardustCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Handle screen resize smoothly
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Starlight palette: pure white core, starlight lavender, deep electric violet, celestial indigo
    const starColors = [
      'rgba(255, 255, 255, ',    // Diamond White
      'rgba(216, 180, 254, ',    // Starlight Lavender
      'rgba(168, 85, 247, ',     // Vivid Violet
      'rgba(129, 140, 248, ',    // Ethereal Indigo
      'rgba(147, 197, 253, ',    // Cosmic Blue
    ];

    // Multi-plane particle population
    const particles: Particle[] = [];
    const count = Math.min(130, Math.floor((width * height) / 12000));

    for (let i = 0; i < count; i++) {
      // Depth classification: 60% deep micro-stars, 30% midground twinkling, 10% radiant anchors
      const rand = Math.random();
      let z = 0;
      let baseRadius = Math.random() * 0.7 + 0.3;
      let hasSpikes = false;

      if (rand > 0.90) {
        // Radiant anchor stars with 4-point cross diffraction flares
        z = 2;
        baseRadius = Math.random() * 1.0 + 1.4;
        hasSpikes = true;
      } else if (rand > 0.60) {
        // Midground constellation stars
        z = 1;
        baseRadius = Math.random() * 0.8 + 0.8;
      }

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z,
        radius: baseRadius,
        baseRadius,
        alpha: Math.random() * 0.6 + 0.25,
        alphaSpeed: Math.random() * 0.025 + 0.008,
        alphaPhase: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * (0.04 + z * 0.06),
        vy: -Math.random() * (0.04 + z * 0.06) - 0.02, // slow, gentle upward drift
        color: starColors[Math.floor(Math.random() * starColors.length)],
        hasSpikes,
      });
    }

    // Active meteors / shooting stars
    const meteors: Meteor[] = [];
    let nextMeteorTime = performance.now() + 4000;

    const spawnMeteor = () => {
      // Spawn from top or top-right, shooting downward-left
      const startX = Math.random() * width * 0.8 + width * 0.2;
      const startY = Math.random() * height * 0.4;
      const angle = (Math.PI / 180) * (215 + (Math.random() * 20 - 10)); // ~215 degrees (down-left)
      const speed = Math.random() * 9 + 11; // swift and smooth
      const length = Math.random() * 100 + 80;

      meteors.push({
        x: startX,
        y: startY,
        length,
        speed,
        angle,
        alpha: 0.9,
        decay: Math.random() * 0.018 + 0.014,
        color: Math.random() > 0.5 ? 'rgba(238, 242, 255, ' : 'rgba(216, 180, 254, ',
      });
    };

    // Parallax tracking
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;
    let currentMouseX = width / 2;
    let currentMouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let isVisible = true;
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    let lastTime = performance.now();

    // Main render loop
    const render = (time: number) => {
      animationFrameId = requestAnimationFrame(render);
      if (!isVisible) return;

      const delta = Math.min(time - lastTime, 50);
      lastTime = time;

      // Smooth mouse lerp
      currentMouseX += (targetMouseX - currentMouseX) * 0.025;
      currentMouseY += (targetMouseY - currentMouseY) * 0.025;

      const mouseNormX = (currentMouseX - width / 2) / width;
      const mouseNormY = (currentMouseY - height / 2) / height;

      // Breathing ambient cycle (~12s full breath)
      const breathTime = time * 0.0005;
      const breathPulse = Math.sin(breathTime) * 0.03 + 1.0;

      // Clear with base void
      ctx.fillStyle = '#05070E';
      ctx.fillRect(0, 0, width, height);

      // ── 1. CINEMATIC DIRECTIONAL NEBULAE ──
      // Nebula A: Major Radiant Celestial Core (Top-Right rake, violet & lavender)
      const nebAX = width * 0.82 + mouseNormX * 35;
      const nebAY = height * 0.18 + mouseNormY * 35;
      const gradA = ctx.createRadialGradient(nebAX, nebAY, 20, nebAX, nebAY, width * 0.65 * breathPulse);
      gradA.addColorStop(0, 'rgba(168, 85, 247, 0.18)'); // Vivid Violet Core
      gradA.addColorStop(0.25, 'rgba(139, 92, 246, 0.12)'); // Radiant Violet
      gradA.addColorStop(0.55, 'rgba(99, 102, 241, 0.06)'); // Indigo Falloff
      gradA.addColorStop(1, 'rgba(5, 7, 14, 0)');
      ctx.fillStyle = gradA;
      ctx.fillRect(0, 0, width, height);

      // Nebula B: Atmospheric Deep Basin (Bottom-Left indigo & celestial blue)
      const nebBX = width * 0.18 - mouseNormX * 25;
      const nebBY = height * 0.82 - mouseNormY * 25;
      const gradB = ctx.createRadialGradient(nebBX, nebBY, 20, nebBX, nebBY, width * 0.55);
      gradB.addColorStop(0, 'rgba(99, 102, 241, 0.14)'); // Indigo Ambient
      gradB.addColorStop(0.4, 'rgba(79, 70, 229, 0.07)'); // Deep Violet
      gradB.addColorStop(1, 'rgba(5, 7, 14, 0)');
      ctx.fillStyle = gradB;
      ctx.fillRect(0, 0, width, height);

      // Nebula C: Mid-Center Starlight Dust Vein
      const nebCX = width * 0.5 + mouseNormX * 15;
      const nebCY = height * 0.45 + mouseNormY * 15;
      const gradC = ctx.createRadialGradient(nebCX, nebCY, 10, nebCX, nebCY, width * 0.4);
      gradC.addColorStop(0, 'rgba(216, 180, 254, 0.05)'); // Soft Lavender Vein
      gradC.addColorStop(0.6, 'rgba(147, 197, 253, 0.02)');
      gradC.addColorStop(1, 'rgba(5, 7, 14, 0)');
      ctx.fillStyle = gradC;
      ctx.fillRect(0, 0, width, height);

      // Subtle Vignette around the viewport edges to draw focus inward
      const vigGrad = ctx.createRadialGradient(width / 2, height / 2, width * 0.35, width / 2, height / 2, width * 0.75);
      vigGrad.addColorStop(0, 'rgba(5, 7, 14, 0)');
      vigGrad.addColorStop(1, 'rgba(3, 4, 9, 0.55)');
      ctx.fillStyle = vigGrad;
      ctx.fillRect(0, 0, width, height);

      // ── 2. LIVING CONSTELLATION FILAMENTS (MIDGROUND STARS) ──
      const midStars: { x: number; y: number; alpha: number }[] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx * (delta / 16);
          p.y += p.vy * (delta / 16);
          p.alphaPhase += p.alphaSpeed * (delta / 16);

          // Wrap edges with buffer
          if (p.x < -20) p.x = width + 20;
          if (p.x > width + 20) p.x = -20;
          if (p.y < -20) p.y = height + 20;
          if (p.y > height + 20) p.y = -20;
        }

        const parallaxFactor = p.z === 2 ? 28 : p.z === 1 ? 16 : 8;
        const drawX = p.x + mouseNormX * parallaxFactor;
        const drawY = p.y + mouseNormY * parallaxFactor;

        // Twinkle calculation
        const twinkle = Math.sin(p.alphaPhase);
        const currentAlpha = Math.min(1, Math.max(0.12, p.alpha + twinkle * 0.35));

        if (p.z >= 1) {
          midStars.push({ x: drawX, y: drawY, alpha: currentAlpha });
        }

        // Draw star core
        ctx.beginPath();
        ctx.arc(drawX, drawY, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${currentAlpha.toFixed(3)})`;
        ctx.fill();

        // Soft halo on luminous stars
        if (p.radius > 1.0) {
          ctx.beginPath();
          ctx.arc(drawX, drawY, p.radius * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${(currentAlpha * 0.3).toFixed(3)})`;
          ctx.fill();
        }

        // 4-Point Optical Cross Flare on Radiant Anchor Stars
        if (p.hasSpikes && currentAlpha > 0.45) {
          const spikeLen = p.radius * 6.5;
          ctx.strokeStyle = `rgba(255, 255, 255, ${(currentAlpha * 0.45).toFixed(3)})`;
          ctx.lineWidth = 0.75;

          // Horizontal spike
          ctx.beginPath();
          ctx.moveTo(drawX - spikeLen, drawY);
          ctx.lineTo(drawX + spikeLen, drawY);
          ctx.stroke();

          // Vertical spike
          ctx.beginPath();
          ctx.moveTo(drawX, drawY - spikeLen);
          ctx.lineTo(drawX, drawY + spikeLen);
          ctx.stroke();
        }
      }

      // Draw delicate constellation links between nearby midground stars
      const maxConnectDist = 110;
      for (let i = 0; i < midStars.length; i++) {
        for (let j = i + 1; j < midStars.length; j++) {
          const s1 = midStars[i];
          const s2 = midStars[j];
          const dx = s1.x - s2.x;
          const dy = s1.y - s2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            const lineAlpha = (1 - dist / maxConnectDist) * 0.12 * Math.min(s1.alpha, s2.alpha);
            if (lineAlpha > 0.01) {
              ctx.beginPath();
              ctx.moveTo(s1.x, s1.y);
              ctx.lineTo(s2.x, s2.y);
              ctx.strokeStyle = `rgba(196, 181, 253, ${lineAlpha.toFixed(3)})`;
              ctx.lineWidth = 0.6;
              ctx.stroke();
            }
          }
        }
      }

      // ── 3. METEORS / SHOOTING STARS ──
      if (!prefersReducedMotion && time > nextMeteorTime) {
        spawnMeteor();
        nextMeteorTime = time + Math.random() * 9000 + 11000; // Next in 11–20 seconds
      }

      for (let m = meteors.length - 1; m >= 0; m--) {
        const meteor = meteors[m];

        // Move meteor
        meteor.x += Math.cos(meteor.angle) * meteor.speed * (delta / 16);
        meteor.y += Math.sin(meteor.angle) * meteor.speed * (delta / 16);
        meteor.alpha -= meteor.decay * (delta / 16);

        if (meteor.alpha <= 0 || meteor.x < -100 || meteor.y > height + 100) {
          meteors.splice(m, 1);
          continue;
        }

        // Draw meteor trail
        const tailX = meteor.x - Math.cos(meteor.angle) * meteor.length;
        const tailY = meteor.y - Math.sin(meteor.angle) * meteor.length;

        const meteorGrad = ctx.createLinearGradient(tailX, tailY, meteor.x, meteor.y);
        meteorGrad.addColorStop(0, 'rgba(255, 255, 255, 0)');
        meteorGrad.addColorStop(0.7, `${meteor.color}${(meteor.alpha * 0.4).toFixed(3)})`);
        meteorGrad.addColorStop(1, `rgba(255, 255, 255, ${meteor.alpha.toFixed(3)})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(meteor.x, meteor.y);
        ctx.strokeStyle = meteorGrad;
        ctx.lineWidth = 1.6;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Meteor glowing head
        ctx.beginPath();
        ctx.arc(meteor.x, meteor.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${meteor.alpha.toFixed(3)})`;
        ctx.fill();
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 1 }}
      aria-hidden="true"
    />
  );
};
