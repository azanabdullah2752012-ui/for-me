import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useData } from '../../context/DataContext';
import { CosmicPalette, CelestialBodyType } from '../../types';

/**
 * Procedural Texture Generator for High-Definition 3D Planetary Surfaces
 * Generates mathematically authentic multi-band gas giants, lunar crater maps, and ring systems.
 */
function createGasGiantTexture(palette: CosmicPalette, isLight: boolean): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d')!;

  // Color profiles per palette
  let colors: string[];
  if (isLight) {
    if (palette === 'celestial-cyan') {
      colors = ['#e0f2fe', '#bae6fd', '#7dd3fc', '#38bdf8', '#0284c7', '#0369a1', '#f0f9ff', '#dbeafe'];
    } else if (palette === 'supernova-sunset') {
      colors = ['#fff1f2', '#fecdd3', '#fda4af', '#fb7185', '#e11d48', '#9f1239', '#fff7ed', '#fed7aa'];
    } else if (palette === 'nocturne-silver') {
      colors = ['#fafafa', '#f4f4f5', '#e4e4e7', '#d4d4d8', '#a1a1aa', '#71717a', '#ffffff', '#e4e4e7'];
    } else {
      // Golden Sahara
      colors = ['#fffbeb', '#fef3c7', '#fde68a', '#fcd34d', '#f59e0b', '#d97706', '#fff7ed', '#ffedd5'];
    }
  } else {
    if (palette === 'celestial-cyan') {
      // Deep Abyss Sapphire to Electric Mint & Cyan Bands
      colors = ['#020b14', '#041d33', '#083358', '#0e4a7d', '#0284c7', '#38bdf8', '#075985', '#0c4a6e', '#06b6d4'];
    } else if (palette === 'supernova-sunset') {
      // Deep Velvet Crimson to Radiant Amber Bands
      colors = ['#12040d', '#2b061c', '#4a0a2f', '#771146', '#be123c', '#f43f5e', '#ea580c', '#fb923c', '#450a22'];
    } else if (palette === 'nocturne-silver') {
      // Obsidian Slate to Platinum White Bands
      colors = ['#060609', '#111119', '#1e1e2d', '#2f2f45', '#4d4d6e', '#7b7b9e', '#a6a6c7', '#252538', '#d4d4e8'];
    } else {
      // Cosmic Royal (Default): Midnight Obsidian to Luminous Amethyst & Lavender Bands
      colors = ['#080415', '#150933', '#270e59', '#3e1785', '#5b21b6', '#7c3aed', '#a855f7', '#c084fc', '#2e1065', '#d8b4fe'];
    }
  }

  // Draw background gradient
  const bgGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
  colors.forEach((c, idx) => {
    bgGrad.addColorStop(idx / (colors.length - 1), c);
  });
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Layered turbulent atmospheric bands
  const numBands = 72;
  for (let b = 0; b < numBands; b++) {
    const yRatio = b / numBands;
    const y = yRatio * canvas.height;
    const bandHeight = (canvas.height / numBands) * (1.2 + Math.sin(b * 0.7) * 0.5);

    const color = colors[(b * 3) % colors.length];
    ctx.fillStyle = color;
    ctx.globalAlpha = 0.25 + Math.sin(b * 0.9) * 0.20;

    ctx.beginPath();
    ctx.moveTo(0, y);

    const segments = 32;
    for (let s = 0; s <= segments; s++) {
      const x = (s / segments) * canvas.width;
      const wave = Math.sin(s * 0.8 + b * 1.5) * 7 + Math.cos(s * 1.6 + b * 2.1) * 4;
      ctx.lineTo(x, y + wave);
    }
    ctx.lineTo(canvas.width, y + bandHeight);
    ctx.lineTo(0, y + bandHeight);
    ctx.closePath();
    ctx.fill();
  }

  // Atmospheric Cirrus Wisps & Micro-Eddies
  ctx.globalAlpha = isLight ? 0.25 : 0.40;
  ctx.fillStyle = isLight ? '#ffffff' : '#ffffff';
  for (let w = 0; w < 48; w++) {
    const wx = Math.random() * canvas.width;
    const wy = Math.random() * canvas.height;
    const wLen = 60 + Math.random() * 180;
    const wThick = 1.5 + Math.random() * 3.5;

    ctx.beginPath();
    ctx.ellipse(wx, wy, wLen, wThick, Math.sin(wy * 0.05) * 0.15, 0, Math.PI * 2);
    ctx.fill();
  }

  // The Great Planetary Storm Vortex (Elliptical Cyclone)
  const spotX = canvas.width * 0.62;
  const spotY = canvas.height * 0.58;
  const spotR = 85;

  const stormGrad = ctx.createRadialGradient(spotX, spotY, 5, spotX, spotY, spotR);
  if (isLight) {
    stormGrad.addColorStop(0, '#ffffff');
    stormGrad.addColorStop(0.4, colors[colors.length - 2]);
    stormGrad.addColorStop(0.8, colors[colors.length - 1]);
    stormGrad.addColorStop(1, 'rgba(255,255,255,0)');
  } else {
    stormGrad.addColorStop(0, '#ffffff');
    stormGrad.addColorStop(0.3, colors[colors.length - 3] || '#c084fc');
    stormGrad.addColorStop(0.7, colors[colors.length - 1] || '#7c3aed');
    stormGrad.addColorStop(1, 'rgba(0,0,0,0)');
  }

  ctx.globalAlpha = 0.85;
  ctx.fillStyle = stormGrad;
  ctx.beginPath();
  ctx.ellipse(spotX, spotY, spotR * 1.6, spotR * 0.8, -0.15, 0, Math.PI * 2);
  ctx.fill();

  // Spiral swirl arms inside storm
  ctx.strokeStyle = isLight ? 'rgba(200, 150, 100, 0.45)' : 'rgba(255, 255, 255, 0.60)';
  ctx.lineWidth = 2.5;
  for (let a = 0; a < 3; a++) {
    ctx.beginPath();
    for (let theta = 0; theta < Math.PI * 2; theta += 0.2) {
      const r = (theta / (Math.PI * 2)) * spotR * 0.7;
      const sx = spotX + Math.cos(theta + a * 2.1) * r * 1.5;
      const sy = spotY + Math.sin(theta + a * 2.1) * r * 0.7;
      if (theta === 0) ctx.moveTo(sx, sy);
      else ctx.lineTo(sx, sy);
    }
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

/**
 * Procedural Cassini Ring Texture (High-Definition Concentric Ringlets)
 */
function createRingTexture(palette: CosmicPalette, isLight: boolean): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 64;
  const ctx = canvas.getContext('2d')!;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Palette ring colors
  let ringColor: string;
  let denseColor: string;
  if (isLight) {
    ringColor = 'rgba(217, 119, 6, 0.45)';
    denseColor = 'rgba(245, 158, 11, 0.85)';
  } else {
    if (palette === 'celestial-cyan') {
      ringColor = 'rgba(56, 189, 248, 0.45)';
      denseColor = 'rgba(186, 230, 253, 0.90)';
    } else if (palette === 'supernova-sunset') {
      ringColor = 'rgba(251, 146, 60, 0.45)';
      denseColor = 'rgba(254, 205, 211, 0.90)';
    } else if (palette === 'nocturne-silver') {
      ringColor = 'rgba(212, 212, 216, 0.45)';
      denseColor = 'rgba(255, 255, 255, 0.90)';
    } else {
      // Cosmic Royal
      ringColor = 'rgba(192, 132, 252, 0.50)';
      denseColor = 'rgba(243, 232, 255, 0.92)';
    }
  }

  // Draw radial rings from inner (x=0) to outer (x=1024)
  for (let x = 0; x < canvas.width; x++) {
    const rNorm = x / canvas.width; // 0 = inner radius, 1 = outer radius

    // Realistic Ring Divisions:
    // 0.00 - 0.22: C-Ring (Crepe Ring, faint)
    // 0.22 - 0.65: B-Ring (Main Dense Ring)
    // 0.65 - 0.72: Cassini Division (Gap with near zero opacity)
    // 0.72 - 0.95: A-Ring (Bright outer ring with Encke gap at 0.86)
    // 0.95 - 1.00: F-Ring & outer halo

    let opacity = 0;
    if (rNorm < 0.22) {
      opacity = 0.12 + Math.sin(rNorm * 60) * 0.08;
    } else if (rNorm >= 0.22 && rNorm < 0.65) {
      // Dense B-Ring
      opacity = 0.75 + Math.sin(rNorm * 120) * 0.18 + Math.cos(rNorm * 240) * 0.06;
    } else if (rNorm >= 0.65 && rNorm < 0.72) {
      // Cassini Division
      opacity = 0.02;
    } else if (rNorm >= 0.72 && rNorm < 0.95) {
      // A-Ring with Encke Gap
      if (rNorm > 0.85 && rNorm < 0.87) {
        opacity = 0.05; // Encke Gap
      } else {
        opacity = 0.55 + Math.sin(rNorm * 100) * 0.15;
      }
    } else {
      // F-Ring strand
      opacity = 0.20 + Math.sin(rNorm * 200) * 0.15;
    }

    ctx.fillStyle = opacity > 0.6 ? denseColor : ringColor;
    ctx.globalAlpha = Math.max(0, Math.min(1, opacity));
    ctx.fillRect(x, 0, 1, canvas.height);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

/**
 * Procedural Lunar Surface Texture (Authentic Craters & Basalt Maria)
 */
function createMoonTexture(isLight: boolean): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d')!;

  // Base lunar regolith tone
  ctx.fillStyle = isLight ? '#d6d3d1' : '#888899';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Basalt Maria (Dark patches: Mare Tranquillitatis, Oceanus Procellarum)
  ctx.fillStyle = isLight ? '#a8a29e' : '#474755';
  const mariaCenters = [
    { x: 0.35, y: 0.40, rx: 240, ry: 160 },
    { x: 0.55, y: 0.35, rx: 280, ry: 190 },
    { x: 0.70, y: 0.45, rx: 200, ry: 140 },
    { x: 0.40, y: 0.65, rx: 220, ry: 150 },
    { x: 0.60, y: 0.60, rx: 260, ry: 180 },
  ];

  mariaCenters.forEach(m => {
    ctx.globalAlpha = 0.65;
    ctx.beginPath();
    ctx.ellipse(m.x * canvas.width, m.y * canvas.height, m.rx, m.ry, 0.2, 0, Math.PI * 2);
    ctx.fill();
  });

  // Hundreds of Procedural Impact Craters with sunlit rims and shadowed floors
  const numCraters = 320;
  for (let i = 0; i < numCraters; i++) {
    const cx = Math.random() * canvas.width;
    const cy = Math.random() * canvas.height;
    const cr = 4 + Math.random() * 32;

    // Crater shadow
    ctx.globalAlpha = 0.55;
    ctx.fillStyle = isLight ? '#57534e' : '#22222a';
    ctx.beginPath();
    ctx.arc(cx, cy, cr, 0, Math.PI * 2);
    ctx.fill();

    // Crater illuminated rim (Sun from upper left)
    ctx.globalAlpha = 0.70;
    ctx.strokeStyle = isLight ? '#ffffff' : '#e2e8f0';
    ctx.lineWidth = Math.max(1, cr * 0.2);
    ctx.beginPath();
    ctx.arc(cx, cy, cr, Math.PI * 0.75, Math.PI * 1.75);
    ctx.stroke();

    // Tycho Ray streaks for prominent craters
    if (cr > 24) {
      ctx.globalAlpha = 0.25;
      ctx.strokeStyle = isLight ? '#ffffff' : '#cbd5e1';
      ctx.lineWidth = 1.0;
      for (let ray = 0; ray < 8; ray++) {
        const ang = (ray / 8) * Math.PI * 2;
        const rayLen = cr * (3 + Math.random() * 5);
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(ang) * cr, cy + Math.sin(ang) * cr);
        ctx.lineTo(cx + Math.cos(ang) * rayLen, cy + Math.sin(ang) * rayLen);
        ctx.stroke();
      }
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

export const Celestial3DCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { wallpaperSettings, appTheme } = useData();

  const cBody = (wallpaperSettings.celestialBody || 'ringed-planet') as CelestialBodyType;
  const palette = (wallpaperSettings.palette || 'cosmic-royal') as CosmicPalette;
  const isLight = appTheme === 'light';

  useEffect(() => {
    if (!containerRef.current) return;
    if (cBody === 'none') {
      // Clear container if void mode
      containerRef.current.innerHTML = '';
      return;
    }

    const container = containerRef.current;
    container.innerHTML = '';

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;
    const isMobile = width < 768;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 10);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // Lighting (Authentic Space Directional Sun Light)
    // Sunlight originates from the upper-left
    const sunLight = new THREE.DirectionalLight(
      isLight ? 0xfff7ed : 0xffffff,
      isLight ? 2.8 : 2.5
    );
    sunLight.position.set(-8, 5, 4);
    scene.add(sunLight);

    // Deep space soft ambient fill (earthshine / starlight on dark side)
    const ambientLight = new THREE.AmbientLight(
      isLight ? 0xe2e8f0 : (palette === 'celestial-cyan' ? 0x0a1d30 : 0x18122c),
      isLight ? 0.70 : 0.40
    );
    scene.add(ambientLight);

    // Main 3D Celestial Pivot Group
    const celestialGroup = new THREE.Group();
    scene.add(celestialGroup);

    // Position in upper sky area
    // Desktop: Upper right quadrant
    // Mobile: Upper right/center (scaled neatly to avoid clipping)
    if (isMobile) {
      celestialGroup.position.set(1.4, 2.4, 0);
      celestialGroup.scale.set(0.72, 0.72, 0.72);
    } else {
      celestialGroup.position.set(3.4, 1.8, 0);
      celestialGroup.scale.set(1.0, 1.0, 1.0);
    }

    // Interactive mouse tracking
    let targetTiltX = 0;
    let targetTiltY = 0;
    let currentTiltX = 0;
    let currentTiltY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      targetTiltX = normY * 0.18;
      targetTiltY = normX * 0.25;
    };
    window.addEventListener('mousemove', handlePointerMove, { passive: true });

    // ──────────────────────────────────────────────────────────────────────────
    // BUILD CHOSEN 3D CELESTIAL BODY
    // ──────────────────────────────────────────────────────────────────────────
    let planetMesh: THREE.Mesh | null = null;
    let ringMesh: THREE.Mesh | null = null;
    let moonletMesh: THREE.Mesh | null = null;
    let coronaMesh: THREE.Mesh | null = null;

    if (cBody === 'ringed-planet') {
      // 1. Gas Giant Sphere
      const sphereGeo = new THREE.SphereGeometry(1.6, 64, 64);
      const planetTexture = createGasGiantTexture(palette, isLight);
      const sphereMat = new THREE.MeshStandardMaterial({
        map: planetTexture,
        roughness: 0.55,
        metalness: 0.08,
      });
      planetMesh = new THREE.Mesh(sphereGeo, sphereMat);
      celestialGroup.add(planetMesh);

      // 2. Atmospheric Fresnel Rim Glow (Rayleigh Scattering Halo)
      const glowGeo = new THREE.SphereGeometry(1.66, 48, 48);
      const glowMat = new THREE.ShaderMaterial({
        vertexShader: `
          varying vec3 vNormal;
          varying vec3 vViewPosition;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            vViewPosition = -mvPosition.xyz;
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          varying vec3 vNormal;
          varying vec3 vViewPosition;
          uniform vec3 glowColor;
          void main() {
            vec3 normal = normalize(vNormal);
            vec3 viewDir = normalize(vViewPosition);
            float fresnel = pow(1.0 - max(0.0, dot(normal, viewDir)), 3.2);
            gl_FragColor = vec4(glowColor, fresnel * 0.88);
          }
        `,
        uniforms: {
          glowColor: {
            value: new THREE.Color(
              isLight
                ? (palette === 'celestial-cyan' ? 0x0284c7 : 0xd97706)
                : (palette === 'celestial-cyan' ? 0x38bdf8 : palette === 'supernova-sunset' ? 0xf43f5e : 0xa855f7)
            ),
          },
        },
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
      });
      const glowMesh = new THREE.Mesh(glowGeo, glowMat);
      celestialGroup.add(glowMesh);

      // 3. True 3D Cassini Rings
      const ringGeo = new THREE.RingGeometry(2.1, 4.4, 128);
      // Remap RingGeometry UVs so texture maps radially across ring
      const pos = ringGeo.attributes.position;
      const uvs = ringGeo.attributes.uv;
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const y = pos.getY(i);
        const radius = Math.sqrt(x * x + y * y);
        const u = (radius - 2.1) / (4.4 - 2.1);
        uvs.setXY(i, u, 0.5);
      }
      uvs.needsUpdate = true;

      const ringTexture = createRingTexture(palette, isLight);
      const ringMat = new THREE.MeshStandardMaterial({
        map: ringTexture,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.92,
        roughness: 0.45,
        metalness: 0.05,
      });
      ringMesh = new THREE.Mesh(ringGeo, ringMat);
      // Realistic planetary obliquity (26.7° tilt)
      ringMesh.rotation.x = Math.PI * 0.48;
      ringMesh.rotation.y = -0.15;
      celestialGroup.add(ringMesh);

      // 4. Orbiting 3D Moonlet
      const moonletGeo = new THREE.SphereGeometry(0.18, 24, 24);
      const moonletMat = new THREE.MeshStandardMaterial({
        color: isLight ? 0xd6d3d1 : 0xc7d2fe,
        roughness: 0.8,
      });
      moonletMesh = new THREE.Mesh(moonletGeo, moonletMat);
      celestialGroup.add(moonletMesh);

      // Initial natural planetary tilt
      celestialGroup.rotation.z = -0.42;

    } else if (cBody === 'crescent-moon') {
      // Photorealistic 3D Lunar Surface
      const moonGeo = new THREE.SphereGeometry(1.6, 64, 64);
      const moonTexture = createMoonTexture(isLight);
      const moonMat = new THREE.MeshStandardMaterial({
        map: moonTexture,
        roughness: 0.88,
        metalness: 0.04,
      });
      planetMesh = new THREE.Mesh(moonGeo, moonMat);
      celestialGroup.add(planetMesh);

      // Lunar crescent atmospheric limb glow
      const lunarGlowGeo = new THREE.SphereGeometry(1.64, 48, 48);
      const lunarGlowMat = new THREE.ShaderMaterial({
        vertexShader: `
          varying vec3 vNormal;
          varying vec3 vViewPosition;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            vViewPosition = -mvPosition.xyz;
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          varying vec3 vNormal;
          varying vec3 vViewPosition;
          void main() {
            vec3 normal = normalize(vNormal);
            vec3 viewDir = normalize(vViewPosition);
            float fresnel = pow(1.0 - max(0.0, dot(normal, viewDir)), 3.8);
            gl_FragColor = vec4(1.0, 0.95, 0.8, fresnel * 0.70);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
      });
      const lunarGlow = new THREE.Mesh(lunarGlowGeo, lunarGlowMat);
      celestialGroup.add(lunarGlow);

      // Position light to create an exquisite crescent phase
      sunLight.position.set(-6, 2, 2.5);
      celestialGroup.rotation.y = 0.85;
      celestialGroup.rotation.z = -0.25;

    } else if (cBody === 'eclipse-corona') {
      // 3D Solar Eclipse with Radiant Shader Corona
      const coronaGeo = new THREE.PlaneGeometry(6.0, 6.0);
      const coronaMat = new THREE.ShaderMaterial({
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          varying vec2 vUv;
          uniform float uTime;
          uniform vec3 uColor;
          void main() {
            vec2 p = vUv - 0.5;
            float r = length(p) * 2.0;
            float theta = atan(p.y, p.x);
            
            // Radiating magnetic coronal streamers
            float streamers = sin(theta * 12.0 + uTime * 0.8) * 0.15 + cos(theta * 24.0 - uTime * 1.2) * 0.08;
            float flare = 0.28 / (r - streamers);
            float alpha = smoothstep(1.0, 0.22, r) * flare;
            
            gl_FragColor = vec4(uColor, clamp(alpha, 0.0, 0.95));
          }
        `,
        uniforms: {
          uTime: { value: 0 },
          uColor: {
            value: new THREE.Color(isLight ? 0xd97706 : 0xfde047),
          },
        },
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      coronaMesh = new THREE.Mesh(coronaGeo, coronaMat);
      celestialGroup.add(coronaMesh);

      // Dark Occulting Moon Body
      const occultGeo = new THREE.SphereGeometry(1.48, 48, 48);
      const occultMat = new THREE.MeshBasicMaterial({
        color: isLight ? 0x18181b : 0x05050a,
      });
      planetMesh = new THREE.Mesh(occultGeo, occultMat);
      celestialGroup.add(planetMesh);
    }

    // ──────────────────────────────────────────────────────────────────────────
    // 60FPS ANIMATION LOOP
    // ──────────────────────────────────────────────────────────────────────────
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Smooth mouse parallax lerp
      currentTiltX += (targetTiltX - currentTiltX) * 0.06;
      currentTiltY += (targetTiltY - currentTiltY) * 0.06;

      celestialGroup.position.x = (isMobile ? 1.4 : 3.4) + currentTiltY * 0.8;
      celestialGroup.position.y = (isMobile ? 2.4 : 1.8) + currentTiltX * 0.8;

      // Axial Planet Rotation
      if (planetMesh) {
        planetMesh.rotation.y += 0.0012;
      }

      // Orbiting Moonlet Animation
      if (moonletMesh) {
        const orbitRadius = 4.8;
        const orbitSpeed = elapsedTime * 0.35;
        moonletMesh.position.x = Math.cos(orbitSpeed) * orbitRadius;
        moonletMesh.position.z = Math.sin(orbitSpeed) * orbitRadius * 0.4;
        moonletMesh.position.y = Math.sin(orbitSpeed * 1.5) * 0.6;
      }

      // Dynamic Corona Plasma Shader Update
      if (coronaMesh && (coronaMesh.material as THREE.ShaderMaterial).uniforms) {
        (coronaMesh.material as THREE.ShaderMaterial).uniforms.uTime.value = elapsedTime;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const newW = container.clientWidth || window.innerWidth;
      const newH = container.clientHeight || window.innerHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

      const newIsMobile = newW < 768;
      if (newIsMobile) {
        celestialGroup.position.set(1.4, 2.4, 0);
        celestialGroup.scale.set(0.72, 0.72, 0.72);
      } else {
        celestialGroup.position.set(3.4, 1.8, 0);
        celestialGroup.scale.set(1.0, 1.0, 1.0);
      }
    };
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [cBody, palette, isLight]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[1] select-none overflow-hidden"
      aria-hidden="true"
    />
  );
};
