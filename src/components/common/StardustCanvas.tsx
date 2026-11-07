import React, { useEffect, useRef } from 'react';
import { WallpaperTheme } from '../../types';
import { useData } from '../../context/DataContext';

interface StardustCanvasProps {
  theme?: WallpaperTheme;
}

export const StardustCanvas: React.FC<StardustCanvasProps> = ({ theme: propTheme }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { wallpaperTheme, previewTheme } = useData();

  const rawTheme = propTheme || previewTheme || wallpaperTheme || 'deep-space';
  const currentTheme: WallpaperTheme = 
    rawTheme === 'cosmic-cliffs' || rawTheme === 'pillars-of-creation' 
      ? rawTheme 
      : 'deep-space';

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

    let time = 0;

    // ──────────────────────────────────────────────────────────────────────────
    // 1. REALM 1: XENO-BASALT CHASMS (COSMIC-CLIFFS)
    // Alien basalt planet, anti-gravity floating crystal monoliths, molten veins, twin moons & rising thermal embers
    // ──────────────────────────────────────────────────────────────────────────
    interface Embers {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      alpha: number;
      phase: number;
    }

    const emberCount = width < 768 ? 60 : 110;
    const embers: Embers[] = [];
    for (let i = 0; i < emberCount; i++) {
      embers.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.2 + 1.0,
        speedY: -(Math.random() * 0.45 + 0.25), // Rising upward against gravity
        speedX: (Math.random() - 0.5) * 0.2,
        alpha: Math.random() * 0.7 + 0.3,
        phase: Math.random() * Math.PI * 2,
      });
    }

    // Floating anti-gravity crystal monolith definitions
    const floatingMonoliths = [
      { rx: 0.16, ry: 0.42, w: 75, h: 140, bobSpeed: 0.8, bobAmp: 14, phase: 0 },
      { rx: 0.38, ry: 0.32, w: 55, h: 110, bobSpeed: 1.1, bobAmp: 11, phase: 1.5 },
      { rx: 0.62, ry: 0.36, w: 90, h: 165, bobSpeed: 0.7, bobAmp: 16, phase: 3.2 },
      { rx: 0.84, ry: 0.46, w: 65, h: 125, bobSpeed: 1.0, bobAmp: 12, phase: 4.8 },
      { rx: 0.94, ry: 0.28, w: 45, h: 90,  bobSpeed: 1.3, bobAmp: 9,  phase: 2.1 },
    ];

    const renderXenoBasaltRealm = (t: number) => {
      // Atmospheric alien sky gradient: Deep scorched obsidian to crimson twilight
      const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
      skyGrad.addColorStop(0, '#090408');
      skyGrad.addColorStop(0.35, '#1b0712');
      skyGrad.addColorStop(0.70, '#2e0e16');
      skyGrad.addColorStop(1, '#110306');
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, width, height);

      // Distant atmospheric volcanic glow in the lower stratosphere
      const ventGlow = ctx.createRadialGradient(width * 0.5, height * 0.85, 0, width * 0.5, height * 0.85, width * 0.65);
      ventGlow.addColorStop(0, 'rgba(239, 68, 68, 0.25)');
      ventGlow.addColorStop(0.4, 'rgba(245, 158, 11, 0.12)');
      ventGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = ventGlow;
      ctx.fillRect(0, 0, width, height);

      // ── TWIN BINARY ALIEN MOONS (Upper Sky) ──
      ctx.save();
      const moon1X = width * 0.78;
      const moon1Y = height * 0.18;
      const moon1R = Math.min(width, height) * 0.085;

      // Primary Alien Moon (Eclipsed Crescent with Volcanic Cracks)
      ctx.fillStyle = '#1e0c15';
      ctx.beginPath();
      ctx.arc(moon1X, moon1Y, moon1R, 0, Math.PI * 2);
      ctx.fill();

      // Coronal Solar Rim Light on Moon 1
      ctx.strokeStyle = 'rgba(251, 146, 60, 0.85)';
      ctx.lineWidth = 2.4;
      ctx.shadowColor = '#f97316';
      ctx.shadowBlur = 18;
      ctx.beginPath();
      ctx.arc(moon1X, moon1Y, moon1R, Math.PI * 0.6, Math.PI * 1.8);
      ctx.stroke();

      // Secondary Dwarf Moon orbiting nearby
      const dwarfAngle = t * 0.25;
      const dwarfX = moon1X + Math.cos(dwarfAngle) * (moon1R * 2.2);
      const dwarfY = moon1Y + Math.sin(dwarfAngle) * (moon1R * 1.4);
      const dwarfR = moon1R * 0.32;

      ctx.fillStyle = '#31101e';
      ctx.beginPath();
      ctx.arc(dwarfX, dwarfY, dwarfR, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = 'rgba(245, 158, 11, 0.9)';
      ctx.lineWidth = 1.6;
      ctx.shadowColor = '#fbbf24';
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(dwarfX, dwarfY, dwarfR, Math.PI * 0.4, Math.PI * 1.6);
      ctx.stroke();

      // Gravitational Tidal Filament stream between the twin moons
      ctx.strokeStyle = 'rgba(249, 115, 22, 0.35)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 6]);
      ctx.beginPath();
      ctx.moveTo(moon1X, moon1Y);
      ctx.lineTo(dwarfX, dwarfY);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // ── ANTI-GRAVITY FLOATING BASALT MONOLITHS ──
      for (const m of floatingMonoliths) {
        ctx.save();
        const bob = Math.sin(t * m.bobSpeed + m.phase) * m.bobAmp;
        const cx = m.rx * width;
        const cy = m.ry * height + bob;
        const hw = m.w / 2;
        const hh = m.h / 2;

        // Faceted Angular Basalt Crystal Silhouette
        ctx.beginPath();
        ctx.moveTo(cx, cy - hh); // Top point
        ctx.lineTo(cx + hw, cy - hh * 0.35); // Right upper
        ctx.lineTo(cx + hw * 0.7, cy + hh); // Right lower
        ctx.lineTo(cx, cy + hh * 0.85); // Bottom center
        ctx.lineTo(cx - hw * 0.7, cy + hh); // Left lower
        ctx.lineTo(cx - hw, cy - hh * 0.35); // Left upper
        ctx.closePath();

        const crystalGrad = ctx.createLinearGradient(cx - hw, cy - hh, cx + hw, cy + hh);
        crystalGrad.addColorStop(0, '#2d111d');
        crystalGrad.addColorStop(0.5, '#190810');
        crystalGrad.addColorStop(1, '#0c0307');
        ctx.fillStyle = crystalGrad;
        ctx.fill();

        // Molten glowing runic cracks through the monolith
        ctx.strokeStyle = 'rgba(249, 115, 22, 0.85)';
        ctx.lineWidth = 1.4;
        ctx.shadowColor = '#ea580c';
        ctx.shadowBlur = 12;

        // Vertical spine crack
        ctx.beginPath();
        ctx.moveTo(cx, cy - hh);
        ctx.lineTo(cx + Math.sin(t + m.phase) * 6, cy);
        ctx.lineTo(cx, cy + hh * 0.85);
        ctx.stroke();

        // Angular facet edges
        ctx.strokeStyle = 'rgba(239, 68, 68, 0.55)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(cx - hw, cy - hh * 0.35);
        ctx.lineTo(cx, cy);
        ctx.lineTo(cx + hw, cy - hh * 0.35);
        ctx.stroke();

        // Anti-gravity repulsion field ring under the monolith
        ctx.strokeStyle = 'rgba(251, 146, 60, 0.45)';
        ctx.lineWidth = 1.2;
        ctx.shadowColor = '#f97316';
        ctx.shadowBlur = 14;
        ctx.beginPath();
        ctx.ellipse(cx, cy + hh + 8, hw * 0.85, 5, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      // ── JAGGED ALIEN BASALT CANYON & MOLTEN FISSURE (BOTTOM STRATA) ──
      ctx.save();
      ctx.fillStyle = '#0f0407';
      ctx.beginPath();
      ctx.moveTo(0, height * 0.72);
      ctx.lineTo(width * 0.18, height * 0.64);
      ctx.lineTo(width * 0.35, height * 0.70);
      ctx.lineTo(width * 0.58, height * 0.61);
      ctx.lineTo(width * 0.82, height * 0.68);
      ctx.lineTo(width, height * 0.63);
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.fill();

      // Glowing magma crevasse line running along the canyon rim
      ctx.strokeStyle = 'rgba(249, 115, 22, 0.9)';
      ctx.lineWidth = 2.4;
      ctx.shadowColor = '#ef4444';
      ctx.shadowBlur = 16;
      ctx.beginPath();
      ctx.moveTo(0, height * 0.72);
      ctx.lineTo(width * 0.18, height * 0.64);
      ctx.lineTo(width * 0.35, height * 0.70);
      ctx.lineTo(width * 0.58, height * 0.61);
      ctx.lineTo(width * 0.82, height * 0.68);
      ctx.lineTo(width, height * 0.63);
      ctx.stroke();

      // Magma river glowing in the lower crevasse
      const magmaGrad = ctx.createLinearGradient(0, height * 0.75, width, height);
      magmaGrad.addColorStop(0, 'rgba(239, 68, 68, 0.35)');
      magmaGrad.addColorStop(0.5, 'rgba(245, 158, 11, 0.25)');
      magmaGrad.addColorStop(1, 'rgba(185, 28, 28, 0.40)');
      ctx.fillStyle = magmaGrad;
      ctx.fillRect(0, height * 0.78, width, height * 0.22);
      ctx.restore();

      // ── UPWARD RISING THERMAL PLASMATIC EMBERS ──
      for (let i = 0; i < embers.length; i++) {
        const e = embers[i];
        if (!prefersReducedMotion) {
          e.y += e.speedY;
          e.x += e.speedX + Math.sin(t * 1.2 + e.phase) * 0.3;
          e.phase += 0.03;
        }

        if (e.y < -10) {
          e.y = height + 10;
          e.x = Math.random() * width;
        }

        const alphaPulse = Math.sin(e.phase) * 0.25 + e.alpha;
        ctx.fillStyle = e.size > 2.0 ? 'rgba(251, 146, 60, ' + Math.min(1.0, alphaPulse) + ')' : 'rgba(239, 68, 68, ' + Math.min(1.0, alphaPulse) + ')';
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // ──────────────────────────────────────────────────────────────────────────
    // 2. REALM 2: BIOLUMINESCENT XENOBIOLOGY (PILLARS-OF-CREATION)
    // Sentient cosmic mycelium, neural synapse web with firing axon sparks, drifting jellyfish-spore entities
    // ──────────────────────────────────────────────────────────────────────────
    interface NeuralNode {
      x: number;
      y: number;
      baseRadius: number;
      pulseSpeed: number;
      phase: number;
    }

    interface SynapseSpark {
      fromIndex: number;
      toIndex: number;
      progress: number;
      speed: number;
    }

    interface AlienSpore {
      x: number;
      y: number;
      radius: number;
      tentacleCount: number;
      swimSpeed: number;
      phase: number;
    }

    // 14 organic neural synapse nodes
    const neuralNodeCount = 14;
    const neuralNodes: NeuralNode[] = [];
    for (let i = 0; i < neuralNodeCount; i++) {
      neuralNodes.push({
        x: (0.10 + (i % 5) * 0.20 + (Math.random() - 0.5) * 0.08) * width,
        y: (0.15 + Math.floor(i / 5) * 0.28 + (Math.random() - 0.5) * 0.08) * height,
        baseRadius: Math.random() * 3.5 + 4.5,
        pulseSpeed: Math.random() * 0.04 + 0.02,
        phase: Math.random() * Math.PI * 2,
      });
    }

    // Synapse axon links between adjacent nodes
    const axonLinks: [number, number][] = [
      [0, 1], [1, 2], [2, 3], [3, 4],
      [0, 5], [1, 6], [2, 7], [3, 8], [4, 9],
      [5, 6], [6, 7], [7, 8], [8, 9],
      [5, 10], [6, 11], [7, 12], [8, 13],
      [10, 11], [11, 12], [12, 13],
    ];

    // Travelling synaptic electrical action potential sparks
    const sparks: SynapseSpark[] = [];
    for (let i = 0; i < 6; i++) {
      const link = axonLinks[Math.floor(Math.random() * axonLinks.length)];
      sparks.push({
        fromIndex: link[0],
        toIndex: link[1],
        progress: Math.random(),
        speed: Math.random() * 0.012 + 0.008,
      });
    }

    // 4 drifting bioluminescent spore / jellyfish organisms
    const alienSpores: AlienSpore[] = [
      { x: width * 0.22, y: height * 0.35, radius: 28, tentacleCount: 4, swimSpeed: 0.6, phase: 0 },
      { x: width * 0.72, y: height * 0.26, radius: 36, tentacleCount: 5, swimSpeed: 0.5, phase: 2 },
      { x: width * 0.48, y: height * 0.62, radius: 24, tentacleCount: 4, swimSpeed: 0.7, phase: 4 },
      { x: width * 0.86, y: height * 0.58, radius: 30, tentacleCount: 4, swimSpeed: 0.55, phase: 1.2 },
    ];

    const renderXenobiologyRealm = (t: number) => {
      // Deep abyssal oceanic cyan-black void
      const bgGrad = ctx.createRadialGradient(width * 0.5, height * 0.45, 0, width * 0.5, height * 0.45, Math.max(width, height) * 0.85);
      bgGrad.addColorStop(0, '#041c19');
      bgGrad.addColorStop(0.5, '#021210');
      bgGrad.addColorStop(1, '#010706');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // ── LIVING AURORA MEMBRANE SILK (Cellular ripples) ──
      ctx.save();
      for (let layer = 0; layer < 2; layer++) {
        const offset = layer * 80;
        ctx.beginPath();
        ctx.moveTo(0, height * 0.25 + offset);
        for (let x = 0; x <= width; x += 40) {
          const wave = Math.sin(x * 0.004 + t * 0.8 + layer) * 35 + Math.cos(x * 0.008 - t * 0.5) * 20;
          ctx.lineTo(x, height * 0.25 + offset + wave);
        }
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();

        const silkGrad = ctx.createLinearGradient(0, height * 0.2, width, height);
        silkGrad.addColorStop(0, layer === 0 ? 'rgba(16, 185, 129, 0.12)' : 'rgba(6, 182, 212, 0.08)');
        silkGrad.addColorStop(0.5, 'rgba(4, 47, 46, 0.15)');
        silkGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = silkGrad;
        ctx.fill();
      }
      ctx.restore();

      // ── NEURAL SYNAPSE NETWORK (Branching Axon Tendrils) ──
      ctx.save();
      for (const [fromIdx, toIdx] of axonLinks) {
        if (!neuralNodes[fromIdx] || !neuralNodes[toIdx]) continue;
        const nA = neuralNodes[fromIdx];
        const nB = neuralNodes[toIdx];

        // Organic curved axon tendril
        const midX = (nA.x + nB.x) / 2 + Math.sin(t * 0.8 + fromIdx) * 12;
        const midY = (nA.y + nB.y) / 2 + Math.cos(t * 0.8 + toIdx) * 12;

        ctx.strokeStyle = 'rgba(20, 184, 166, 0.25)';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(nA.x, nA.y);
        ctx.quadraticCurveTo(midX, midY, nB.x, nB.y);
        ctx.stroke();
      }

      // Action potential electrical sparks travelling through axons
      for (const sp of sparks) {
        if (!prefersReducedMotion) {
          sp.progress += sp.speed;
          if (sp.progress >= 1.0) {
            sp.progress = 0;
            const newLink = axonLinks[Math.floor(Math.random() * axonLinks.length)];
            sp.fromIndex = newLink[0];
            sp.toIndex = newLink[1];
          }
        }

        const nA = neuralNodes[sp.fromIndex];
        const nB = neuralNodes[sp.toIndex];
        if (nA && nB) {
          const midX = (nA.x + nB.x) / 2 + Math.sin(t * 0.8 + sp.fromIndex) * 12;
          const midY = (nA.y + nB.y) / 2 + Math.cos(t * 0.8 + sp.toIndex) * 12;
          // Quadratic bezier interpolation
          const p = sp.progress;
          const sx = (1 - p) * (1 - p) * nA.x + 2 * (1 - p) * p * midX + p * p * nB.x;
          const sy = (1 - p) * (1 - p) * nA.y + 2 * (1 - p) * p * midY + p * p * nB.y;

          // Glowing cyan action potential spark
          ctx.fillStyle = '#67e8f9';
          ctx.shadowColor = '#06b6d4';
          ctx.shadowBlur = 12;
          ctx.beginPath();
          ctx.arc(sx, sy, 3.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Neural Nodes (Pulsing Bioluminescent Ganglia)
      for (const n of neuralNodes) {
        const pulse = Math.sin(t * 2.0 + n.phase) * 0.35 + 0.65;
        const currentR = n.baseRadius * (0.85 + pulse * 0.25);

        // Core
        ctx.fillStyle = '#34d399';
        ctx.shadowColor = '#10b981';
        ctx.shadowBlur = 16;
        ctx.beginPath();
        ctx.arc(n.x, n.y, currentR, 0, Math.PI * 2);
        ctx.fill();

        // Outer membrane ring
        ctx.strokeStyle = 'rgba(103, 232, 249, ' + (pulse * 0.7) + ')';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(n.x, n.y, currentR * 1.9, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();

      // ── DRIFTING BIOLUMINESCENT ALIEN SPORES (JELLYFISH ENTITIES) ──
      for (const sp of alienSpores) {
        ctx.save();
        const swimY = Math.sin(t * sp.swimSpeed + sp.phase) * 16;
        const swimX = Math.cos(t * sp.swimSpeed * 0.6 + sp.phase) * 12;
        const cx = sp.x + swimX;
        const cy = sp.y + swimY;
        const r = sp.radius;

        // Translucent Dome / Bell Head
        const bellGrad = ctx.createRadialGradient(cx, cy - r * 0.2, 0, cx, cy, r);
        bellGrad.addColorStop(0, 'rgba(52, 211, 153, 0.45)');
        bellGrad.addColorStop(0.6, 'rgba(6, 182, 212, 0.20)');
        bellGrad.addColorStop(1, 'rgba(2, 44, 34, 0.02)');
        ctx.fillStyle = bellGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, r, Math.PI, 0);
        ctx.bezierCurveTo(cx + r, cy + r * 0.3, cx + r * 0.4, cy + r * 0.15, cx, cy + r * 0.2);
        ctx.bezierCurveTo(cx - r * 0.4, cy + r * 0.15, cx - r, cy + r * 0.3, cx - r, cy);
        ctx.closePath();
        ctx.fill();

        // Glowing Bioluminescent Bell Rim
        ctx.strokeStyle = 'rgba(110, 231, 183, 0.85)';
        ctx.lineWidth = 1.6;
        ctx.shadowColor = '#10b981';
        ctx.shadowBlur = 14;
        ctx.stroke();

        // Undulating Trailing Flagella / Tentacles
        ctx.strokeStyle = 'rgba(103, 232, 249, 0.55)';
        ctx.lineWidth = 1.2;
        ctx.shadowBlur = 8;
        for (let ti = 0; ti < sp.tentacleCount; ti++) {
          const tX = cx - r * 0.65 + (ti / (sp.tentacleCount - 1)) * (r * 1.3);
          const tStartY = cy + r * 0.2;
          ctx.beginPath();
          ctx.moveTo(tX, tStartY);
          const tLen = r * 2.4;
          const wave1 = Math.sin(t * 2.2 + ti * 1.2) * 10;
          const wave2 = Math.cos(t * 1.8 + ti * 1.5) * 14;
          ctx.bezierCurveTo(
            tX + wave1, tStartY + tLen * 0.35,
            tX - wave2, tStartY + tLen * 0.70,
            tX + wave1 * 0.5, tStartY + tLen
          );
          ctx.stroke();
        }
        ctx.restore();
      }
    };

    // ──────────────────────────────────────────────────────────────────────────
    // 3. REALM 3: ANCIENT DYSON MEGASTRUCTURE & QUANTUM WARP (DEEP-SPACE)
    // Segmented rotating Dyson Ring, black hole event horizon, sacred geometric alien runes & tachyon guide lasers
    // ──────────────────────────────────────────────────────────────────────────
    interface TachyonStar {
      x: number;
      y: number;
      size: number;
      alpha: number;
      speed: number;
      phase: number;
    }

    const tachyonCount = width < 768 ? 70 : 120;
    const tachyonStars: TachyonStar[] = [];
    for (let i = 0; i < tachyonCount; i++) {
      tachyonStars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() > 0.88 ? Math.random() * 2.0 + 2.5 : Math.random() * 1.2 + 0.6,
        alpha: Math.random() * 0.6 + 0.3,
        speed: Math.random() * 0.02 + 0.01,
        phase: Math.random() * Math.PI * 2,
      });
    }

    const renderDysonRelicRealm = (t: number) => {
      // Ultra-deep space obsidian void
      ctx.fillStyle = '#020306';
      ctx.fillRect(0, 0, width, height);

      // ── ACCRETION WARP & BLACK HOLE EVENT HORIZON (Center Upper-Right) ──
      ctx.save();
      const singX = width * 0.68;
      const singY = height * 0.32;
      const singR = Math.min(width, height) * 0.12;

      // Photon Ring Accretion Disk (Gravitational light bending around singularity)
      const accretionGrad = ctx.createRadialGradient(singX, singY, singR * 0.85, singX, singY, singR * 2.4);
      accretionGrad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
      accretionGrad.addColorStop(0.18, 'rgba(192, 132, 252, 0.75)');
      accretionGrad.addColorStop(0.45, 'rgba(99, 102, 241, 0.35)');
      accretionGrad.addColorStop(0.80, 'rgba(147, 51, 234, 0.08)');
      accretionGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = accretionGrad;
      ctx.beginPath();
      ctx.arc(singX, singY, singR * 2.4, 0, Math.PI * 2);
      ctx.fill();

      // Pure Black Hole Shadow (Absolute event horizon)
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.arc(singX, singY, singR, 0, Math.PI * 2);
      ctx.fill();

      // Sharp Photon Ring Edge
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2.0;
      ctx.shadowColor = '#c084fc';
      ctx.shadowBlur = 18;
      ctx.beginPath();
      ctx.arc(singX, singY, singR, 0, Math.PI * 2);
      ctx.stroke();

      // Relativistic Plasma Jet firing perpendicularly through singularity
      const jetGrad = ctx.createLinearGradient(singX - singR * 0.2, 0, singX + singR * 0.2, height);
      jetGrad.addColorStop(0, 'rgba(192, 132, 252, 0)');
      jetGrad.addColorStop(0.3, 'rgba(255, 255, 255, 0.7)');
      jetGrad.addColorStop(0.5, 'rgba(168, 85, 247, 0.9)');
      jetGrad.addColorStop(0.7, 'rgba(255, 255, 255, 0.7)');
      jetGrad.addColorStop(1, 'rgba(192, 132, 252, 0)');

      ctx.strokeStyle = jetGrad;
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(singX - 30, 0);
      ctx.lineTo(singX + 30, height);
      ctx.stroke();
      ctx.restore();

      // ── COLOSSAL ROTATING DYSON MEGASTRUCTURE RING ──
      ctx.save();
      const ringCenterX = width * 0.52;
      const ringCenterY = height * 0.48;
      const ringRadiusX = Math.min(width, height) * 0.85;
      const ringRadiusY = Math.min(width, height) * 0.38;
      const ringTilt = -0.32;
      const ringRot = t * 0.02;

      // 1. Primary Outer Megastructure Hull
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.35)';
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.ellipse(ringCenterX, ringCenterY, ringRadiusX, ringRadiusY, ringTilt, 0, Math.PI * 2);
      ctx.stroke();

      // 2. Glowing Power Conduit Line through the ring
      ctx.strokeStyle = 'rgba(216, 180, 254, 0.75)';
      ctx.lineWidth = 1.5;
      ctx.shadowColor = '#a855f7';
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.ellipse(ringCenterX, ringCenterY, ringRadiusX, ringRadiusY, ringTilt, 0, Math.PI * 2);
      ctx.stroke();

      // 3. 32 Geometrically Segmented Habitat Modules rotating along the Dyson Ring
      const segmentCount = 32;
      for (let s = 0; s < segmentCount; s++) {
        const segAngle = (s / segmentCount) * Math.PI * 2 + ringRot;
        const px = ringCenterX + Math.cos(segAngle + ringTilt) * ringRadiusX;
        const py = ringCenterY + Math.sin(segAngle + ringTilt) * ringRadiusY;

        // Habitat module node block
        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(segAngle + ringTilt + Math.PI / 2);

        // Rectangular structural module
        ctx.fillStyle = s % 4 === 0 ? '#c084fc' : '#1e1136';
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.lineWidth = 1;
        ctx.fillRect(-6, -3, 12, 6);
        ctx.strokeRect(-6, -3, 12, 6);

        // Sub-orbital antenna node
        if (s % 2 === 0) {
          ctx.strokeStyle = 'rgba(192, 132, 252, 0.8)';
          ctx.beginPath();
          ctx.moveTo(0, -3);
          ctx.lineTo(0, -9);
          ctx.stroke();
        }
        ctx.restore();
      }

      // 4. Secondary Concentric Docking Armature
      ctx.setLineDash([6, 10]);
      ctx.strokeStyle = 'rgba(129, 140, 248, 0.25)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.ellipse(ringCenterX, ringCenterY, ringRadiusX * 1.12, ringRadiusY * 1.12, ringTilt, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // ── ALIEN GLYPHIC TELEMETRY & RUNIC HUDS ──
      ctx.save();
      ctx.fillStyle = 'rgba(216, 180, 254, 0.7)';
      ctx.font = '10px monospace';
      ctx.fillText('⟁ SECTOR 09-XENO // DYSON ARRAY ACTIVE', width * 0.08, height * 0.12);
      ctx.fillText('∇ QUANTUM SINGULARITY: STABLE [4.82 TeV]', width * 0.08, height * 0.15);

      // Sacred Alien Geometric Glyphs (Geometric Rune Sigils)
      const drawAlienSigil = (gx: number, gy: number, gr: number) => {
        ctx.strokeStyle = 'rgba(192, 132, 252, 0.55)';
        ctx.lineWidth = 1.2;
        // Outer hexagon
        ctx.beginPath();
        for (let a = 0; a < 6; a++) {
          const angle = (a * Math.PI) / 3;
          const hx = gx + Math.cos(angle) * gr;
          const hy = gy + Math.sin(angle) * gr;
          if (a === 0) ctx.moveTo(hx, hy);
          else ctx.lineTo(hx, hy);
        }
        ctx.closePath();
        ctx.stroke();

        // Inner inverted triangle & central node
        ctx.beginPath();
        for (let a = 0; a < 3; a++) {
          const angle = (a * 2 * Math.PI) / 3 + Math.PI;
          const tx = gx + Math.cos(angle) * (gr * 0.65);
          const ty = gy + Math.sin(angle) * (gr * 0.65);
          if (a === 0) ctx.moveTo(tx, ty);
          else ctx.lineTo(tx, ty);
        }
        ctx.closePath();
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(gx, gy, 2.5, 0, Math.PI * 2);
        ctx.fill();
      };

      drawAlienSigil(width * 0.12, height * 0.22, 18);
      drawAlienSigil(width * 0.88, height * 0.72, 22);

      // Faint Tachyon Guide Laser Line linking the sigils
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.18)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(width * 0.12, height * 0.22);
      ctx.lineTo(ringCenterX, ringCenterY);
      ctx.lineTo(width * 0.88, height * 0.72);
      ctx.stroke();
      ctx.restore();

      // ── TACHYON DIAMOND STARS ──
      for (const st of tachyonStars) {
        if (!prefersReducedMotion) {
          st.phase += st.speed;
        }
        const tw = Math.sin(st.phase) * 0.35 + st.alpha;
        const currentA = Math.max(0.12, Math.min(1.0, tw));

        if (st.size > 2.2) {
          // 4-point tachyon diamond flare
          ctx.save();
          ctx.globalAlpha = currentA;
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.moveTo(st.x, st.y - st.size * 2);
          ctx.lineTo(st.x + st.size * 0.4, st.y);
          ctx.lineTo(st.x, st.y + st.size * 2);
          ctx.lineTo(st.x - st.size * 0.4, st.y);
          ctx.closePath();
          ctx.fill();

          ctx.beginPath();
          ctx.moveTo(st.x - st.size * 2, st.y);
          ctx.lineTo(st.x, st.y - st.size * 0.4);
          ctx.lineTo(st.x + st.size * 2, st.y);
          ctx.lineTo(st.x, st.y + st.size * 0.4);
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        } else {
          ctx.fillStyle = 'rgba(224, 231, 255, ' + currentA + ')';
          ctx.beginPath();
          ctx.arc(st.x, st.y, st.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    // ── MAIN ANIMATION LOOP ──
    const render = () => {
      time += 0.016;

      if (currentTheme === 'cosmic-cliffs') {
        renderXenoBasaltRealm(time);
      } else if (currentTheme === 'pillars-of-creation') {
        renderXenobiologyRealm(time);
      } else {
        renderDysonRelicRealm(time);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
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
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ willChange: 'transform' }}
      />
    </div>
  );
};
