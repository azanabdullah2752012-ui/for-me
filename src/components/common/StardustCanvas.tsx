import React, { useEffect, useRef } from 'react';
import { useData } from '../../context/DataContext';
import { CosmicPalette, WaveGeometry, WaveLayerDensity } from '../../types';

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
  const { isHUDHidden, wallpaperSettings, appTheme } = useData();
  const isHUDHiddenRef = useRef(isHUDHidden);
  const wallpaperSettingsRef = useRef(wallpaperSettings);
  const appThemeRef = useRef(appTheme);

  useEffect(() => {
    isHUDHiddenRef.current = isHUDHidden;
  }, [isHUDHidden]);

  useEffect(() => {
    wallpaperSettingsRef.current = wallpaperSettings;
  }, [wallpaperSettings]);

  useEffect(() => {
    appThemeRef.current = appTheme;
  }, [appTheme]);

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
    // 2. ASTRONOMICAL CELESTIAL GLINTS & CROSS STARS
    // ──────────────────────────────────────────────────────────────────────────
    const drawCelestialGlint = (cx: number, cy: number, length: number, alpha: number) => {
      ctx.save();
      ctx.translate(cx, cy);

      const isLight = appThemeRef.current === 'light';
      const a = Math.max(0.15, Math.min(0.95, alpha));
      ctx.globalAlpha = a;

      // Soft optical Airy disc glow
      const glowGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, length * 0.9);
      if (isLight) {
        glowGrad.addColorStop(0, 'rgba(245, 158, 11, 0.75)');
        glowGrad.addColorStop(0.3, 'rgba(217, 119, 6, 0.28)');
        glowGrad.addColorStop(0.7, 'rgba(180, 83, 9, 0.06)');
        glowGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      } else {
        glowGrad.addColorStop(0, 'rgba(255, 255, 255, 0.85)');
        glowGrad.addColorStop(0.3, 'rgba(216, 180, 254, 0.35)');
        glowGrad.addColorStop(0.7, 'rgba(147, 51, 234, 0.08)');
        glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      }
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(0, 0, length * 0.9, 0, Math.PI * 2);
      ctx.fill();

      // Ultra-delicate tapered diffraction spikes
      const spikeGradH = ctx.createLinearGradient(-length, 0, length, 0);
      if (isLight) {
        spikeGradH.addColorStop(0, 'rgba(245, 158, 11, 0)');
        spikeGradH.addColorStop(0.35, 'rgba(217, 119, 6, 0.45)');
        spikeGradH.addColorStop(0.5, '#b45309');
        spikeGradH.addColorStop(0.65, 'rgba(217, 119, 6, 0.45)');
        spikeGradH.addColorStop(1, 'rgba(245, 158, 11, 0)');
      } else {
        spikeGradH.addColorStop(0, 'rgba(255, 255, 255, 0)');
        spikeGradH.addColorStop(0.35, 'rgba(233, 213, 255, 0.55)');
        spikeGradH.addColorStop(0.5, '#ffffff');
        spikeGradH.addColorStop(0.65, 'rgba(233, 213, 255, 0.55)');
        spikeGradH.addColorStop(1, 'rgba(255, 255, 255, 0)');
      }

      ctx.strokeStyle = spikeGradH;
      ctx.lineWidth = 0.75;
      ctx.beginPath();
      ctx.moveTo(-length, 0);
      ctx.lineTo(length, 0);
      ctx.stroke();

      const spikeGradV = ctx.createLinearGradient(0, -length, 0, length);
      if (isLight) {
        spikeGradV.addColorStop(0, 'rgba(245, 158, 11, 0)');
        spikeGradV.addColorStop(0.35, 'rgba(217, 119, 6, 0.45)');
        spikeGradV.addColorStop(0.5, '#b45309');
        spikeGradV.addColorStop(0.65, 'rgba(217, 119, 6, 0.45)');
        spikeGradV.addColorStop(1, 'rgba(245, 158, 11, 0)');
      } else {
        spikeGradV.addColorStop(0, 'rgba(255, 255, 255, 0)');
        spikeGradV.addColorStop(0.35, 'rgba(233, 213, 255, 0.55)');
        spikeGradV.addColorStop(0.5, '#ffffff');
        spikeGradV.addColorStop(0.65, 'rgba(233, 213, 255, 0.55)');
        spikeGradV.addColorStop(1, 'rgba(255, 255, 255, 0)');
      }

      ctx.strokeStyle = spikeGradV;
      ctx.lineWidth = 0.75;
      ctx.beginPath();
      ctx.moveTo(0, -length);
      ctx.lineTo(0, length);
      ctx.stroke();

      // Subtle 45° diagonal micro-rays
      const diagLen = length * 0.38;
      ctx.strokeStyle = isLight ? 'rgba(180, 83, 9, 0.35)' : 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(-diagLen, -diagLen); ctx.lineTo(diagLen, diagLen);
      ctx.moveTo(-diagLen, diagLen); ctx.lineTo(diagLen, -diagLen);
      ctx.stroke();

      // Brilliant pinpoint center core
      ctx.fillStyle = isLight ? '#d97706' : '#ffffff';
      ctx.beginPath();
      ctx.arc(0, 0, 1.2, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    // Up to 4 concurrent shooting stars for meteor shower mode
    const shootingStars: ShootingStar[] = [
      { x: -100, y: -100, length: 100, speed: 18, angle: Math.PI / 4 + 0.05, alpha: 0, active: false },
      { x: -100, y: -100, length: 80, speed: 16, angle: Math.PI / 4 - 0.08, alpha: 0, active: false },
      { x: -100, y: -100, length: 110, speed: 20, angle: Math.PI / 4 + 0.12, alpha: 0, active: false },
    ];

    let shootingCooldown = 120;

    const updateAndDrawShootingStars = (mode: 'off' | 'occasional' | 'meteor-shower') => {
      if (mode === 'off') return;

      shootingCooldown--;
      const spawnThreshold = mode === 'meteor-shower' ? 40 : 180;

      if (shootingCooldown <= 0 && !prefersReducedMotion) {
        shootingCooldown = Math.random() * (mode === 'meteor-shower' ? 60 : 200) + spawnThreshold;
        const availableStar = shootingStars.find(s => !s.active);
        if (availableStar) {
          availableStar.active = true;
          availableStar.x = Math.random() * (width * 0.70);
          availableStar.y = Math.random() * (height * 0.30);
          availableStar.alpha = 0.95;
          availableStar.length = Math.random() * 50 + 70;
        }
      }

      for (const star of shootingStars) {
        if (!star.active) continue;

        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        star.alpha -= mode === 'meteor-shower' ? 0.022 : 0.016;

        if (star.alpha <= 0 || star.x > width + 100 || star.y > height + 100) {
          star.active = false;
        } else {
          ctx.save();
          const tailX = star.x - Math.cos(star.angle) * star.length;
          const tailY = star.y - Math.sin(star.angle) * star.length;

          const bolideGrad = ctx.createLinearGradient(tailX, tailY, star.x, star.y);
          bolideGrad.addColorStop(0, 'rgba(255, 255, 255, 0)');
          bolideGrad.addColorStop(0.7, 'rgba(216, 180, 254, ' + star.alpha * 0.6 + ')');
          bolideGrad.addColorStop(1, '#ffffff');

          ctx.strokeStyle = bolideGrad;
          ctx.lineWidth = 1.3;
          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(star.x, star.y);
          ctx.stroke();

          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(star.x, star.y, 1.8, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }
    };

    // ──────────────────────────────────────────────────────────────────────────
    // 3. MAIN RENDER LOOP
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
      // PALETTE CONFIGURATIONS (Rich Tonal Depth & Topographic Contrast)
      // ────────────────────────────────────────────────────────────────────────
      const palette = settings.palette as CosmicPalette;
      const isLight = appThemeRef.current === 'light';

      let skyTop = '#030208';
      let skyMid = '#0b061c';
      let skyBot = '#170a32';
      let radGlowColor1 = 'rgba(168, 85, 247, 0.22)';
      let radGlowColor2 = 'rgba(99, 102, 241, 0.16)';
      let meridianColor = 'rgba(168, 85, 247, 0.30)';
      let orbitColor = 'rgba(192, 132, 252, 0.40)';

      // Dark Mode Default: Cosmic Royal (Stratified Deep Velvet to Luminous Amethyst)
      let dune1Colors = ['#05030e', '#090518', '#0e0824'];
      let dune1Stroke = 'rgba(168, 85, 247, 0.25)';

      let dune2Colors = ['#0a051d', '#110930', '#190c42'];
      let dune2Stroke = 'rgba(168, 85, 247, 0.35)';

      let dune3Colors = ['#11082e', '#1c0c4b', '#261063'];
      let dune3Stroke = 'rgba(192, 132, 252, 0.45)';

      let dune4Colors = ['#180b3d', '#260f64', '#341584'];
      let dune4Stroke = 'rgba(216, 180, 254, 0.55)';

      let dune5Colors = ['#0c0620', '#140833', '#1e0c4a', '#281061'];
      let dune5Stroke = 'rgba(233, 213, 255, 0.65)';

      if (isLight) {
        // ── CREAMY HIGH-CONTRAST LUMINOUS LIGHT PALETTES ──
        if (palette === 'celestial-cyan') {
          // Alpine Fjord Glacial Dawn
          skyTop = '#eef8ff';
          skyMid = '#d7effe';
          skyBot = '#b5e3fd';
          radGlowColor1 = 'rgba(14, 165, 233, 0.16)';
          radGlowColor2 = 'rgba(6, 182, 212, 0.12)';
          meridianColor = 'rgba(2, 132, 199, 0.12)';
          orbitColor = 'rgba(3, 105, 161, 0.20)';

          dune1Colors = ['#93c5fd', '#bfdbfe', '#dbeafe'];
          dune1Stroke = 'rgba(29, 78, 216, 0.35)';

          dune2Colors = ['#60a5fa', '#93c5fd', '#bfdbfe'];
          dune2Stroke = 'rgba(2, 132, 199, 0.42)';

          dune3Colors = ['#38bdf8', '#7dd3fc', '#bae6fd'];
          dune3Stroke = 'rgba(14, 165, 233, 0.50)';

          dune4Colors = ['#bae6fd', '#d7f0fd', '#f0f9ff'];
          dune4Stroke = 'rgba(56, 189, 248, 0.58)';

          dune5Colors = ['#f0f9ff', '#f8fcff', '#ffffff', '#ffffff'];
          dune5Stroke = 'rgba(2, 132, 199, 0.68)';
        } else if (palette === 'supernova-sunset') {
          // Velvet Peach & Crimson Dawn
          skyTop = '#fff1f2';
          skyMid = '#fecdd3';
          skyBot = '#fda4af';
          radGlowColor1 = 'rgba(244, 63, 94, 0.16)';
          radGlowColor2 = 'rgba(249, 115, 22, 0.12)';
          meridianColor = 'rgba(225, 29, 72, 0.12)';
          orbitColor = 'rgba(190, 18, 60, 0.20)';

          dune1Colors = ['#f43f5e', '#fb7185', '#fda4af'];
          dune1Stroke = 'rgba(159, 18, 57, 0.35)';

          dune2Colors = ['#fb7185', '#fda4af', '#fecdd3'];
          dune2Stroke = 'rgba(225, 29, 72, 0.42)';

          dune3Colors = ['#fda4af', '#fecdd3', '#ffe4e6'];
          dune3Stroke = 'rgba(244, 63, 94, 0.50)';

          dune4Colors = ['#fecdd3', '#ffe4e6', '#fff1f2'];
          dune4Stroke = 'rgba(251, 113, 133, 0.58)';

          dune5Colors = ['#fff5f6', '#fffafb', '#ffffff', '#ffffff'];
          dune5Stroke = 'rgba(225, 29, 72, 0.68)';
        } else if (palette === 'nocturne-silver') {
          // Architectural Mineral Platinum & Graphite
          skyTop = '#fafafa';
          skyMid = '#f4f4f6';
          skyBot = '#e4e4e7';
          radGlowColor1 = 'rgba(113, 113, 122, 0.14)';
          radGlowColor2 = 'rgba(82, 82, 91, 0.10)';
          meridianColor = 'rgba(82, 82, 91, 0.12)';
          orbitColor = 'rgba(63, 63, 70, 0.20)';

          dune1Colors = ['#a1a1aa', '#d4d4d8', '#e4e4e7'];
          dune1Stroke = 'rgba(63, 63, 70, 0.35)';

          dune2Colors = ['#d4d4d8', '#e4e4e7', '#f1f1f3'];
          dune2Stroke = 'rgba(82, 82, 91, 0.42)';

          dune3Colors = ['#e4e4e7', '#f1f1f3', '#f4f4f6'];
          dune3Stroke = 'rgba(113, 113, 122, 0.50)';

          dune4Colors = ['#f1f1f3', '#f6f6f8', '#fafafa'];
          dune4Stroke = 'rgba(161, 161, 170, 0.58)';

          dune5Colors = ['#f6f6f8', '#fcfcfc', '#ffffff', '#ffffff'];
          dune5Stroke = 'rgba(82, 82, 91, 0.68)';
        } else {
          // Default Light: Golden Sahara Dawn & Terraced Silk Dunes (Rich Warm Radiance)
          skyTop = '#fffbf3';
          skyMid = '#feeccd';
          skyBot = '#fad4a0';
          radGlowColor1 = 'rgba(245, 158, 11, 0.18)';
          radGlowColor2 = 'rgba(217, 119, 6, 0.12)';
          meridianColor = 'rgba(180, 83, 9, 0.12)';
          orbitColor = 'rgba(146, 64, 14, 0.20)';

          dune1Colors = ['#d4a373', '#bc8a5f', '#a47148'];
          dune1Stroke = 'rgba(146, 64, 14, 0.38)';

          dune2Colors = ['#e6ba8f', '#d4a373', '#bc8a5f'];
          dune2Stroke = 'rgba(180, 83, 9, 0.45)';

          dune3Colors = ['#f3d5b5', '#e6ba8f', '#d4a373'];
          dune3Stroke = 'rgba(217, 119, 6, 0.52)';

          dune4Colors = ['#faedcd', '#f3d5b5', '#fefae0'];
          dune4Stroke = 'rgba(245, 158, 11, 0.60)';

          dune5Colors = ['#fefae0', '#fffdfa', '#ffffff', '#ffffff'];
          dune5Stroke = 'rgba(217, 119, 6, 0.70)';
        }
      } else {
        // ── DARK MIDNIGHT COSMIC PALETTES ──
        if (palette === 'celestial-cyan') {
          skyTop = '#020712';
          skyMid = '#041322';
          skyBot = '#071f35';
          radGlowColor1 = 'rgba(14, 165, 233, 0.18)';
          radGlowColor2 = 'rgba(6, 182, 212, 0.12)';
          meridianColor = 'rgba(56, 189, 248, 0.12)';
          orbitColor = 'rgba(103, 232, 249, 0.20)';

          dune1Colors = ['#030914', '#051221', '#071c31'];
          dune1Stroke = 'rgba(56, 189, 248, 0.22)';

          dune2Colors = ['#040f1f', '#071b33', '#0a2646'];
          dune2Stroke = 'rgba(56, 189, 248, 0.32)';

          dune3Colors = ['#06152a', '#0a2544', '#0f345c'];
          dune3Stroke = 'rgba(56, 189, 248, 0.42)';

          dune4Colors = ['#081b34', '#0d2e54', '#134273'];
          dune4Stroke = 'rgba(125, 211, 252, 0.52)';

          dune5Colors = ['#051224', '#091c36', '#0e294d', '#133866'];
          dune5Stroke = 'rgba(186, 230, 253, 0.65)';
        } else if (palette === 'supernova-sunset') {
          skyTop = '#0a0208';
          skyMid = '#160412';
          skyBot = '#24061c';
          radGlowColor1 = 'rgba(244, 63, 94, 0.18)';
          radGlowColor2 = 'rgba(249, 115, 22, 0.12)';
          meridianColor = 'rgba(251, 113, 133, 0.12)';
          orbitColor = 'rgba(253, 186, 116, 0.20)';

          dune1Colors = ['#0d020a', '#170412', '#22061b'];
          dune1Stroke = 'rgba(244, 63, 94, 0.22)';

          dune2Colors = ['#150311', '#24061d', '#340929'];
          dune2Stroke = 'rgba(244, 63, 94, 0.32)';

          dune3Colors = ['#1e0518', '#320827', '#470c38'];
          dune3Stroke = 'rgba(251, 113, 133, 0.42)';

          dune4Colors = ['#280620', '#420b33', '#5c0f47'];
          dune4Stroke = 'rgba(251, 146, 60, 0.52)';

          dune5Colors = ['#180314', '#270620', '#3b0930', '#500d41'];
          dune5Stroke = 'rgba(254, 215, 170, 0.65)';
        } else if (palette === 'nocturne-silver') {
          skyTop = '#030306';
          skyMid = '#08080d';
          skyBot = '#101017';
          radGlowColor1 = 'rgba(161, 161, 170, 0.16)';
          radGlowColor2 = 'rgba(113, 113, 122, 0.10)';
          meridianColor = 'rgba(212, 212, 216, 0.12)';
          orbitColor = 'rgba(228, 228, 231, 0.18)';

          dune1Colors = ['#060609', '#0c0c12', '#13131c'];
          dune1Stroke = 'rgba(161, 161, 170, 0.20)';

          dune2Colors = ['#0a0a0f', '#12121b', '#1a1a27'];
          dune2Stroke = 'rgba(161, 161, 170, 0.30)';

          dune3Colors = ['#0e0e16', '#181824', '#232333'];
          dune3Stroke = 'rgba(212, 212, 216, 0.40)';

          dune4Colors = ['#13131e', '#1f1f30', '#2d2d42'];
          dune4Stroke = 'rgba(228, 228, 231, 0.50)';

          dune5Colors = ['#0c0c13', '#14141f', '#1d1d2b', '#272738'];
          dune5Stroke = 'rgba(244, 244, 245, 0.65)';
        }
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

      // ────────────────────────────────────────────────────────────────────────
      // 2. EXTRA CELESTIAL BACKGROUND ELEMENTS (WHAT THE USER CAN ADD)
      // ────────────────────────────────────────────────────────────────────────
      
      // A. Volumetric Nebula Dust Clouds
      if (settings.showNebulaDust) {
        ctx.save();
        const dustG1 = ctx.createRadialGradient(width * 0.35, height * 0.20, 0, width * 0.35, height * 0.20, width * 0.38);
        dustG1.addColorStop(0, radGlowColor1);
        dustG1.addColorStop(0.5, 'rgba(126, 34, 206, 0.04)');
        dustG1.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = dustG1;
        ctx.fillRect(0, 0, width, height);

        const dustG2 = ctx.createRadialGradient(width * 0.70, height * 0.14, 0, width * 0.70, height * 0.14, width * 0.32);
        dustG2.addColorStop(0, radGlowColor2);
        dustG2.addColorStop(0.6, 'rgba(14, 116, 144, 0.03)');
        dustG2.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = dustG2;
        ctx.fillRect(0, 0, width, height);
        ctx.restore();
      }

      // B. 3D Celestial Body (Planet / Moon / Eclipse) is rendered via Three.js in Celestial3DCanvas.tsx

      // C. Constellation Star Charts
      if (settings.showConstellations) {
        ctx.save();
        ctx.strokeStyle = isLight ? 'rgba(180, 130, 80, 0.28)' : 'rgba(255, 255, 255, 0.14)';
        ctx.lineWidth = 0.75;

        // Constellation 1: Ursa Major (Big Dipper) in upper right
        const starPoints1 = [
          { x: width * 0.68, y: height * 0.10 },
          { x: width * 0.72, y: height * 0.08 },
          { x: width * 0.76, y: height * 0.09 },
          { x: width * 0.78, y: height * 0.13 },
          { x: width * 0.83, y: height * 0.14 },
          { x: width * 0.84, y: height * 0.10 },
          { x: width * 0.78, y: height * 0.09 },
        ];
        ctx.beginPath();
        ctx.moveTo(starPoints1[0].x, starPoints1[0].y);
        for (let i = 1; i < starPoints1.length; i++) {
          ctx.lineTo(starPoints1[i].x, starPoints1[i].y);
        }
        ctx.stroke();

        ctx.fillStyle = isLight ? '#b45309' : '#ffffff';
        for (const pt of starPoints1) {
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 1.4, 0, Math.PI * 2);
          ctx.fill();
        }

        // Constellation 2: Cassiopeia (W-shape in upper left)
        const starPoints2 = [
          { x: width * 0.28, y: height * 0.08 },
          { x: width * 0.31, y: height * 0.12 },
          { x: width * 0.34, y: height * 0.09 },
          { x: width * 0.37, y: height * 0.13 },
          { x: width * 0.40, y: height * 0.10 },
        ];
        ctx.beginPath();
        ctx.moveTo(starPoints2[0].x, starPoints2[0].y);
        for (let i = 1; i < starPoints2.length; i++) {
          ctx.lineTo(starPoints2[i].x, starPoints2[i].y);
        }
        ctx.stroke();

        for (const pt of starPoints2) {
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 1.3, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      // D. Periodic Cosmic Comet with Ion Tail
      if (settings.showComet) {
        ctx.save();
        const cometCycle = (time * 0.04) % 1; // slow continuous pass
        const cStartX = width * 0.75;
        const cStartY = height * 0.04;
        const cEndX = width * 0.25;
        const cEndY = height * 0.22;

        const cometX = cStartX + (cEndX - cStartX) * cometCycle;
        const cometY = cStartY + (cEndY - cStartY) * cometCycle;
        const tailAngle = Math.atan2(cEndY - cStartY, cEndX - cStartX) + Math.PI;
        const tailLen = 140;

        const tX = cometX + Math.cos(tailAngle) * tailLen;
        const tY = cometY + Math.sin(tailAngle) * tailLen;

        const cometGrad = ctx.createLinearGradient(tX, tY, cometX, cometY);
        cometGrad.addColorStop(0, 'rgba(56, 189, 248, 0)');
        cometGrad.addColorStop(0.5, 'rgba(168, 85, 247, 0.25)');
        cometGrad.addColorStop(0.85, 'rgba(233, 213, 255, 0.65)');
        cometGrad.addColorStop(1, '#ffffff');

        ctx.strokeStyle = cometGrad;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(tX, tY);
        ctx.lineTo(cometX, cometY);
        ctx.stroke();

        // Comet nucleus
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = '#67e8f9';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(cometX, cometY, 2.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // ────────────────────────────────────────────────────────────────────────
      // 3. ASTRONOMICAL COORDINATE GRID & ORBITAL TRAJECTORY
      // ────────────────────────────────────────────────────────────────────────
      if (settings.showMeridian) {
        ctx.save();
        const meridianX = width * 0.91;
        ctx.strokeStyle = meridianColor;
        ctx.lineWidth = 1.0;
        ctx.beginPath();
        ctx.moveTo(meridianX, 0);
        ctx.lineTo(meridianX, height);
        ctx.stroke();

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.18)';
        ctx.lineWidth = 1;
        for (let my = 50; my < height; my += 70) {
          ctx.beginPath();
          ctx.moveTo(meridianX - 4, my);
          ctx.lineTo(meridianX + 4, my);
          ctx.stroke();
        }
        ctx.restore();
      }

      if (settings.showOrbitalTrack) {
        ctx.save();
        // Position graceful orbit in upper-right sky away from clock center
        const orbitCenterX = width * 0.78;
        const orbitCenterY = height * 0.18;
        const orbitRadiusX = Math.min(width, height) * 0.45;
        const orbitRadiusY = Math.min(width, height) * 0.22;

        ctx.shadowColor = orbitColor;
        ctx.shadowBlur = 6;
        ctx.strokeStyle = orbitColor;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.ellipse(orbitCenterX, orbitCenterY, orbitRadiusX, orbitRadiusY, -0.22, Math.PI * 0.1, Math.PI * 1.3);
        ctx.stroke();

        ctx.setLineDash([3, 8]);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.22)';
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.ellipse(orbitCenterX, orbitCenterY, orbitRadiusX * 1.08, orbitRadiusY * 1.08, -0.22, Math.PI * 0.05, Math.PI * 1.25);
        ctx.stroke();
        ctx.setLineDash([]);
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
          ctx.fillStyle = isLight
            ? `rgba(180, 130, 80, ${(currentAlpha * 0.65).toFixed(3)})`
            : `rgba(255, 255, 255, ${currentAlpha.toFixed(3)})`;
          ctx.fill();
        }
      }

      // ────────────────────────────────────────────────────────────────────────
      // 5. MULTI-GEOMETRY WAVE/DUNE RENDERER (DIFFERENT STYLES)
      // ────────────────────────────────────────────────────────────────────────
      const geom = settings.waveGeometry as WaveGeometry;
      const density = settings.waveLayerDensity as WaveLayerDensity;

      // Crest Glint helper
      const drawCrestGlint = (cx: number, cy: number, alpha: number, size: number = 2.0) => {
        ctx.save();
        ctx.translate(cx, cy);
        const g = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 2.5);
        if (isLight) {
          g.addColorStop(0, `rgba(245, 158, 11, ${alpha})`);
          g.addColorStop(0.35, `rgba(217, 119, 6, ${alpha * 0.7})`);
          g.addColorStop(1, 'rgba(255, 255, 255, 0)');
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(0, 0, size * 2.5, 0, Math.PI * 2);
          ctx.fill();

          ctx.strokeStyle = `rgba(180, 83, 9, ${alpha * 0.8})`;
          ctx.lineWidth = 0.75;
          ctx.beginPath();
          ctx.moveTo(-size * 2.0, 0); ctx.lineTo(size * 2.0, 0);
          ctx.moveTo(0, -size * 2.0); ctx.lineTo(0, size * 2.0);
          ctx.stroke();
        } else {
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
        }
        ctx.restore();
      };

      // A. Pure Catmull-Rom Continuous Cubic Spline for Ultra-Smooth Dunes
      const renderCatmullDune = (
        baseYPoints: [number, number, number, number],
        amp: number, spd: number, phase: number,
        grad: CanvasGradient, stroke: string, strokeW: number,
        sColor: string, sBlur: number, sOffY: number,
        glints: number[] = []
      ) => {
        const xCoords = [0, width * 0.32, width * 0.68, width];
        const pts: { x: number; y: number }[] = [];

        for (let i = 0; i < 4; i++) {
          const sway = Math.sin(time * spd + phase + i * 1.4) * (amp * 0.75) +
                       Math.cos(time * spd * 0.7 + phase * 1.2 + i * 2.1) * (amp * 0.35);
          pts.push({
            x: xCoords[i],
            y: height * baseYPoints[i] + sway
          });
        }

        // Catmull-Rom to Cubic Bézier conversion for mathematically guaranteed C1 continuity
        const p = [pts[0], ...pts, pts[pts.length - 1]];
        const beziers: { p1: { x: number; y: number }; cp1: { x: number; y: number }; cp2: { x: number; y: number }; p2: { x: number; y: number } }[] = [];
        const tension = 0.5;

        for (let i = 1; i < p.length - 2; i++) {
          const p0 = p[i - 1];
          const p1 = p[i];
          const p2 = p[i + 1];
          const p3 = p[i + 2];

          const t1x = (p2.x - p0.x) * tension;
          const t1y = (p2.y - p0.y) * tension;
          const t2x = (p3.x - p1.x) * tension;
          const t2y = (p3.y - p1.y) * tension;

          beziers.push({
            p1,
            cp1: { x: p1.x + t1x / 3, y: p1.y + t1y / 3 },
            cp2: { x: p2.x - t2x / 3, y: p2.y - t2y / 3 },
            p2
          });
        }

        ctx.save();
        if (sBlur > 0) {
          ctx.shadowColor = sColor;
          ctx.shadowBlur = sBlur;
          ctx.shadowOffsetY = sOffY;
        }

        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (const seg of beziers) {
          ctx.bezierCurveTo(seg.cp1.x, seg.cp1.y, seg.cp2.x, seg.cp2.y, seg.p2.x, seg.p2.y);
        }
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();

        ctx.fillStyle = grad;
        ctx.fill();

        // ── TOPOGRAPHIC DUNE DETAIL: CLIPPED INTERNAL STRATA & SHEEN ──
        ctx.save();
        ctx.clip();

        // 1. Directional Crest Sheen (Celestial Rim Light)
        const minY = Math.min(...pts.map(p => p.y));
        const sheen = ctx.createLinearGradient(0, minY, 0, minY + 140);
        if (isLight) {
          sheen.addColorStop(0, 'rgba(255, 255, 255, 0.40)');
          sheen.addColorStop(0.25, 'rgba(251, 191, 36, 0.14)');
          sheen.addColorStop(0.7, 'rgba(217, 119, 6, 0.04)');
          sheen.addColorStop(1, 'rgba(255, 255, 255, 0)');
        } else {
          sheen.addColorStop(0, 'rgba(255, 255, 255, 0.26)');
          sheen.addColorStop(0.25, 'rgba(216, 180, 254, 0.16)');
          sheen.addColorStop(0.7, 'rgba(147, 51, 234, 0.05)');
          sheen.addColorStop(1, 'rgba(0, 0, 0, 0)');
        }
        ctx.fillStyle = sheen;
        ctx.fillRect(0, minY, width, height);

        // 2. Secondary Topographic Dune Striation 1 (Wind-swept Ripple)
        ctx.beginPath();
        for (let si = 0; si < beziers.length; si++) {
          const seg = beziers[si];
          const off1 = 18 + Math.sin(time * 0.75 + si * 1.5) * 4;
          if (si === 0) ctx.moveTo(seg.p1.x, seg.p1.y + off1);
          ctx.bezierCurveTo(
            seg.cp1.x, seg.cp1.y + off1,
            seg.cp2.x, seg.cp2.y + off1,
            seg.p2.x, seg.p2.y + off1
          );
        }
        ctx.strokeStyle = isLight ? 'rgba(160, 90, 40, 0.16)' : 'rgba(255, 255, 255, 0.10)';
        ctx.lineWidth = 1.0;
        ctx.stroke();

        // 3. Secondary Topographic Dune Striation 2 (Deeper Contour Vein)
        ctx.beginPath();
        for (let si = 0; si < beziers.length; si++) {
          const seg = beziers[si];
          const off2 = 38 + Math.cos(time * 0.65 + si * 1.8) * 5;
          if (si === 0) ctx.moveTo(seg.p1.x, seg.p1.y + off2);
          ctx.bezierCurveTo(
            seg.cp1.x, seg.cp1.y + off2,
            seg.cp2.x, seg.cp2.y + off2,
            seg.p2.x, seg.p2.y + off2
          );
        }
        ctx.strokeStyle = isLight ? 'rgba(160, 90, 40, 0.10)' : 'rgba(255, 255, 255, 0.06)';
        ctx.lineWidth = 0.8;
        ctx.stroke();

        ctx.restore(); // restore clip

        // Top edge illuminated crest stroke
        ctx.strokeStyle = stroke;
        ctx.lineWidth = strokeW;
        ctx.stroke();
        ctx.restore();

        // Sample glints along segments
        for (const t of glints) {
          const segIdx = Math.min(beziers.length - 1, Math.floor(t * beziers.length));
          const localT = (t * beziers.length) - segIdx;
          const seg = beziers[segIdx];
          const omt = 1 - localT;

          const gx = omt * omt * omt * seg.p1.x + 3 * omt * omt * localT * seg.cp1.x + 3 * omt * localT * localT * seg.cp2.x + localT * localT * localT * seg.p2.x;
          const gy = omt * omt * omt * seg.p1.y + 3 * omt * omt * localT * seg.cp1.y + 3 * omt * localT * localT * seg.cp2.y + localT * localT * localT * seg.p2.y;

          const glintAlpha = 0.50 + Math.sin(time * 2.0 + t * 8) * 0.35;
          drawCrestGlint(gx, gy, glintAlpha, 2.0);
        }
      };

      // B. Angular Mountain Ridges (Faceted Peaks)
      const renderMountainRidge = (
        yBaseR: number, peakXRatios: number[], peakHeights: number[],
        amp: number, spd: number, phase: number,
        grad: CanvasGradient, stroke: string, strokeW: number,
        sColor: string, sBlur: number, sOffY: number
      ) => {
        const sway = Math.sin(time * spd + phase) * amp;
        const pts: { x: number; y: number }[] = [];
        pts.push({ x: 0, y: height * yBaseR + sway });

        for (let i = 0; i < peakXRatios.length; i++) {
          const px = width * peakXRatios[i];
          const py = height * (yBaseR - peakHeights[i]) + Math.cos(time * spd + i + phase) * (amp * 0.7);
          pts.push({ x: px, y: py });
        }
        pts.push({ x: width, y: height * (yBaseR + 0.03) + sway });

        ctx.save();
        if (sBlur > 0) {
          ctx.shadowColor = sColor;
          ctx.shadowBlur = sBlur;
          ctx.shadowOffsetY = sOffY;
        }

        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length; i++) {
          ctx.lineTo(pts[i].x, pts[i].y);
        }
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();

        ctx.fillStyle = grad;
        ctx.fill();

        ctx.strokeStyle = stroke;
        ctx.lineWidth = strokeW;
        ctx.stroke();
        ctx.restore();
      };

      // C. Aurora Ribbon Curtains
      const renderAuroraRibbon = (
        yBaseR: number, amp: number, spd: number, phase: number,
        grad: CanvasGradient, stroke: string
      ) => {
        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        ctx.beginPath();
        ctx.moveTo(0, height * yBaseR);

        const segments = 16;
        for (let i = 0; i <= segments; i++) {
          const px = (i / segments) * width;
          const py = height * yBaseR + Math.sin((i / segments) * Math.PI * 2 + time * spd + phase) * amp;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();

        ctx.fillStyle = grad;
        ctx.fill();

        ctx.strokeStyle = stroke;
        ctx.lineWidth = 1.8;
        ctx.shadowColor = stroke;
        ctx.shadowBlur = 14;
        ctx.stroke();
        ctx.restore();
      };

      // ────────────────────────────────────────────────────────────────────────
      // LAYER RENDERING DISPATCH (Lower-Half Landscape Foundation)
      // ────────────────────────────────────────────────────────────────────────
      // Atmospheric Horizon Mist (Soft volumetric transition between deep sky & terrain)
      const horizonMist = ctx.createLinearGradient(0, height * 0.46, 0, height * 0.68);
      horizonMist.addColorStop(0, 'rgba(0, 0, 0, 0)');
      if (isLight) {
        horizonMist.addColorStop(0.5, 'rgba(255, 255, 255, 0.25)');
      } else {
        const mistRgba = palette === 'celestial-cyan'
          ? 'rgba(7, 31, 53, 0.45)'
          : palette === 'supernova-sunset'
          ? 'rgba(36, 6, 28, 0.45)'
          : palette === 'nocturne-silver'
          ? 'rgba(16, 16, 23, 0.45)'
          : 'rgba(20, 10, 40, 0.45)';
        horizonMist.addColorStop(0.5, mistRgba);
      }
      horizonMist.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = horizonMist;
      ctx.fillRect(0, height * 0.46, width, height * 0.22);

      const grad1 = ctx.createLinearGradient(0, height * 0.55, 0, height);
      grad1.addColorStop(0, dune1Colors[0]);
      grad1.addColorStop(0.5, dune1Colors[1]);
      grad1.addColorStop(1, dune1Colors[2]);

      const grad2 = ctx.createLinearGradient(0, height * 0.63, 0, height);
      grad2.addColorStop(0, dune2Colors[0]);
      grad2.addColorStop(0.5, dune2Colors[1]);
      grad2.addColorStop(1, dune2Colors[2]);

      const grad3 = ctx.createLinearGradient(0, height * 0.71, 0, height);
      grad3.addColorStop(0, dune3Colors[0]);
      grad3.addColorStop(0.5, dune3Colors[1]);
      grad3.addColorStop(1, dune3Colors[2]);

      const grad4 = ctx.createLinearGradient(0, height * 0.79, 0, height);
      grad4.addColorStop(0, dune4Colors[0]);
      grad4.addColorStop(0.5, dune4Colors[1]);
      grad4.addColorStop(1, dune4Colors[2]);

      const grad5 = ctx.createLinearGradient(0, height * 0.86, 0, height);
      grad5.addColorStop(0, dune5Colors[0]);
      grad5.addColorStop(0.35, dune5Colors[1]);
      grad5.addColorStop(0.70, dune5Colors[2]);
      grad5.addColorStop(1, dune5Colors[3]);

      const sh1 = isLight ? 'rgba(160, 140, 120, 0.12)' : 'rgba(0,0,0,0.55)';
      const sh2 = isLight ? 'rgba(160, 140, 120, 0.16)' : 'rgba(0,0,0,0.65)';
      const sh3 = isLight ? 'rgba(160, 140, 120, 0.20)' : 'rgba(0,0,0,0.70)';
      const sh4 = isLight ? 'rgba(160, 140, 120, 0.22)' : 'rgba(0,0,0,0.75)';
      const sh5 = isLight ? 'rgba(160, 140, 120, 0.26)' : 'rgba(0,0,0,0.80)';

      if (geom === 'mountains') {
        // Angular Faceted Mountain Ridges (sitting gracefully in lower half)
        renderMountainRidge(0.60, [0.22, 0.54, 0.82], [0.08, 0.11, 0.07], 12 * ampMul, 0.35, 0, grad1, dune1Stroke, 0.8, sh1, 16, -6);
        if (density !== 'airy') {
          renderMountainRidge(0.68, [0.36, 0.68, 0.92], [0.09, 0.12, 0.08], 14 * ampMul, 0.40, 1.5, grad2, dune2Stroke, 0.9, sh2, 20, -7);
        }
        renderMountainRidge(0.76, [0.18, 0.48, 0.78], [0.10, 0.09, 0.11], 15 * ampMul, 0.45, 3.1, grad3, dune3Stroke, 1.0, sh3, 24, -8);
        if (density === 'dense') {
          renderMountainRidge(0.84, [0.30, 0.62, 0.88], [0.08, 0.10, 0.07], 14 * ampMul, 0.40, 4.4, grad4, dune4Stroke, 1.1, sh4, 28, -9);
        }
        renderMountainRidge(0.91, [0.42, 0.75], [0.07, 0.06], 12 * ampMul, 0.35, 5.8, grad5, dune5Stroke, 1.2, sh5, 32, -10);

      } else if (geom === 'aurora') {
        // Translucent Glowing Aurora Curtains
        renderAuroraRibbon(0.50, 24 * ampMul, 0.55, 0.0, grad1, dune1Stroke);
        if (density !== 'airy') {
          renderAuroraRibbon(0.60, 26 * ampMul, 0.60, 1.6, grad2, dune2Stroke);
        }
        renderAuroraRibbon(0.70, 24 * ampMul, 0.65, 3.2, grad3, dune3Stroke);
        if (density === 'dense') {
          renderAuroraRibbon(0.80, 20 * ampMul, 0.55, 4.8, grad4, dune4Stroke);
        }
        // Base foundation dune to ground the screen
        renderCatmullDune([0.88, 0.91, 0.87, 0.90], 12 * ampMul, 0.35, 6.2, grad5, dune5Stroke, 1.2, sh5, 28, -9);

      } else if (geom === 'ocean') {
        // Deep Rolling Ocean Swells
        renderCatmullDune([0.58, 0.55, 0.61, 0.57], 18 * ampMul, 0.60, 0.0, grad1, dune1Stroke, 0.8, sh1, 16, -6, [0.30]);
        if (density !== 'airy') {
          renderCatmullDune([0.66, 0.70, 0.64, 0.68], 20 * ampMul, 0.65, 1.8, grad2, dune2Stroke, 0.9, sh2, 20, -7, [0.55]);
        }
        renderCatmullDune([0.74, 0.71, 0.77, 0.73], 22 * ampMul, 0.70, 3.4, grad3, dune3Stroke, 1.0, sh3, 24, -8, [0.38, 0.82]);
        if (density === 'dense') {
          renderCatmullDune([0.82, 0.85, 0.80, 0.84], 18 * ampMul, 0.60, 4.9, grad4, dune4Stroke, 1.1, sh4, 28, -9, [0.65]);
        }
        renderCatmullDune([0.89, 0.87, 0.91, 0.88], 15 * ampMul, 0.50, 6.2, grad5, dune5Stroke, 1.2, sh5, 32, -10, [0.50]);

      } else {
        // Default: Silky Dunes (Mathematically continuous Catmull-Rom Bézier splines)
        renderCatmullDune([0.58, 0.62, 0.57, 0.60], 14 * ampMul, 0.40, 0.0, grad1, dune1Stroke, 0.8, sh1, 16, -6, [0.32, 0.78]);
        if (density !== 'airy') {
          renderCatmullDune([0.66, 0.63, 0.69, 0.65], 16 * ampMul, 0.45, 1.8, grad2, dune2Stroke, 0.9, sh2, 20, -7, [0.24, 0.72]);
        }
        renderCatmullDune([0.74, 0.77, 0.72, 0.75], 18 * ampMul, 0.48, 3.4, grad3, dune3Stroke, 1.0, sh3, 24, -8, [0.42, 0.86]);
        if (density === 'dense') {
          renderCatmullDune([0.82, 0.80, 0.85, 0.81], 15 * ampMul, 0.42, 4.9, grad4, dune4Stroke, 1.1, sh4, 28, -9, [0.18, 0.65]);
        }
        renderCatmullDune([0.89, 0.92, 0.88, 0.90], 12 * ampMul, 0.35, 6.2, grad5, dune5Stroke, 1.2, sh5, 32, -10, [0.35, 0.82]);
      }

      // ────────────────────────────────────────────────────────────────────────
      // 6. DELICATE CELESTIAL CROSS STARS
      // ────────────────────────────────────────────────────────────────────────
      if (settings.showCrossStars) {
        const p1 = 0.68 + Math.sin(time * 1.8) * 0.22;
        const p2 = 0.60 + Math.sin(time * 1.5 + 1.2) * 0.24;
        const p3 = 0.64 + Math.sin(time * 1.9 + 2.5) * 0.20;
        const p4 = 0.58 + Math.sin(time * 1.4 + 3.8) * 0.25;
        const p5 = 0.52 + Math.sin(time * 1.7 + 4.6) * 0.22;

        drawCelestialGlint(width * 0.50, height * 0.08, 11, p1);
        drawCelestialGlint(width * 0.18, height * 0.16, 9.5, p2);
        drawCelestialGlint(width * 0.84, height * 0.20, 10, p3);
        drawCelestialGlint(width * 0.72, height * 0.34, 8.5, p4);
        drawCelestialGlint(width * 0.08, height * 0.28, 8.0, p5);
      }

      // 7. Shooting Stars (Occasional or Meteor Shower)
      updateAndDrawShootingStars(settings.shootingStarMode || 'occasional');

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
