import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('\n========================================');
console.log('🧪 VERIFYING FRESH "FOR ME" ARCHITECTURE');
console.log('========================================\n');

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`  ✓ PASS: ${name}`);
    passed++;
  } catch (err) {
    console.error(`  ✗ FAIL: ${name} -> ${err.message}`);
    failed++;
  }
}

// Group 1: Structure & Configuration
test('Vite config exists with GitHub Pages base', () => {
  const p = path.join(rootDir, 'vite.config.ts');
  assert(fs.existsSync(p));
  const c = fs.readFileSync(p, 'utf8');
  assert(c.includes("base: '/for-me/'"));
});

test('Tailwind configuration defines terracotta and obsidian palette', () => {
  const p = path.join(rootDir, 'tailwind.config.js');
  assert(fs.existsSync(p));
  const c = fs.readFileSync(p, 'utf8');
  assert(c.includes('#E56A38'));
  assert(c.includes('#07080B'));
});

// Group 2: Core Views & Components
test('DashboardView renders celestial wanderer and bento components', () => {
  const p = path.join(rootDir, 'src/views/DashboardView.tsx');
  assert(fs.existsSync(p));
  const c = fs.readFileSync(p, 'utf8');
  assert(c.includes('Good Morning'));
  assert(c.includes('Study Focus'));
  assert(c.includes('Your Biometrics'));
  assert(c.includes('Quick Journal'));
});

test('DataContext provides state hydration and 1-click water logger', () => {
  const p = path.join(rootDir, 'src/context/DataContext.tsx');
  assert(fs.existsSync(p));
  const c = fs.readFileSync(p, 'utf8');
  assert(c.includes('incrementWater'));
  assert(c.includes('toggleChecklist'));
  assert(c.includes('forme_sanctuary_v3'));
});

test('SoundController synthesizes audio with Web Audio API', () => {
  const p = path.join(rootDir, 'src/audio/sound.ts');
  assert(fs.existsSync(p));
  const c = fs.readFileSync(p, 'utf8');
  assert(c.includes('createOscillator'));
  assert(c.includes('startSoundscape'));
});

test('Anti-slop check: zero reflexive blue-to-purple gradients', () => {
  const css = fs.readFileSync(path.join(rootDir, 'src/index.css'), 'utf8');
  assert(!css.includes('#6366f1'));
  assert(!css.includes('#8b5cf6'));
});

console.log('\n========================================');
console.log(`📊 RESULTS: ${passed}/${passed + failed} Tests Passed`);
console.log('========================================\n');

if (failed > 0) process.exit(1);
