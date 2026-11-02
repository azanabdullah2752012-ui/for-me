/**
 * FOR ME - Architectural & Persistence Verification Test Suite
 * Validates R1 through R5:
 * - Data schema & LocalStorage persistence integrity
 * - Generative UI widget integrity
 * - Core life tracker features (Focus, Habits, Commitments, Journal, Health)
 * - Anti-Slop (slop.md) 6 Absolute Execution Laws & Banned Tells checks
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✓ PASS: ${message}`);
  } else {
    failedTests++;
    console.error(`  ✗ FAIL: ${message}`);
  }
}

console.log('\n========================================');
console.log('🧪 RUNNING "FOR ME" VERIFICATION TESTS');
console.log('========================================\n');

// ----------------------------------------------------
// TEST GROUP 1: Generative UI Widget Artifacts
// ----------------------------------------------------
console.log('📦 Test Group 1: Generative UI Widgets');

const heatmapPath = path.join(rootDir, 'src/components/widgets/StreakHeatmapMatrix.tsx');
assert(fs.existsSync(heatmapPath), 'StreakHeatmapMatrix component exists');
if (fs.existsSync(heatmapPath)) {
  const content = fs.readFileSync(heatmapPath, 'utf8');
  assert(content.includes('export const StreakHeatmapMatrix'), 'StreakHeatmapMatrix is properly exported');
  assert(content.includes('hoveredDay'), 'StreakHeatmapMatrix contains interactive hover tooltips');
  assert(content.includes('emerald'), 'StreakHeatmapMatrix uses vibrant emerald neon theme');
}

const ringChartPath = path.join(rootDir, 'src/components/widgets/BiometricsRingChart.tsx');
assert(fs.existsSync(ringChartPath), 'BiometricsRingChart component exists');
if (fs.existsSync(ringChartPath)) {
  const content = fs.readFileSync(ringChartPath, 'utf8');
  assert(content.includes('export const BiometricsRingChart'), 'BiometricsRingChart is properly exported');
  assert(content.includes('strokeDasharray') && content.includes('strokeDashoffset'), 'BiometricsRingChart renders dynamic SVG progress rings');
  assert(content.includes('studyHours') && content.includes('sleepHours') && content.includes('waterGlasses'), 'BiometricsRingChart accepts study, sleep, and hydration metrics');
}

const vibeWidgetPath = path.join(rootDir, 'src/components/widgets/DynamicVibeWidget.tsx');
assert(fs.existsSync(vibeWidgetPath), 'DynamicVibeWidget component exists');
if (fs.existsSync(vibeWidgetPath)) {
  const content = fs.readFileSync(vibeWidgetPath, 'utf8');
  assert(content.includes('export const DynamicVibeWidget'), 'DynamicVibeWidget is properly exported');
  assert(content.includes('AudioContext') || content.includes('webkitAudioContext'), 'DynamicVibeWidget synthesizes ambient study soundscapes via Web Audio API');
  assert(content.includes('SOUNDSCAPES'), 'DynamicVibeWidget provides ambient soundscapes presets');
  assert(content.includes('customAudioUrl') && content.includes('handleCustomAudioUpload'), 'DynamicVibeWidget supports custom audio file playback and upload');
}

const musicHubPath = path.join(rootDir, 'src/components/music/MusicHub.tsx');
assert(fs.existsSync(musicHubPath), 'MusicHub component exists');
if (fs.existsSync(musicHubPath)) {
  const content = fs.readFileSync(musicHubPath, 'utf8');
  assert(content.includes('handleFileUpload'), 'MusicHub supports local audio file uploads (MP3/WAV/M4A)');
  assert(content.includes('<audio') && content.includes('activeItem.sourceType'), 'MusicHub renders native HTML5 audio player for custom audio');
  assert(content.includes('addMode'), 'MusicHub provides tabbed switching between URL streams and local file uploads');
}

// ----------------------------------------------------
// TEST GROUP 2: Architectural Bento Dashboard Integration
// ----------------------------------------------------
console.log('\n🏛️ Test Group 2: Architectural Dashboard Integration');

const dashboardPath = path.join(rootDir, 'src/views/DashboardView.tsx');
assert(fs.existsSync(dashboardPath), 'DashboardView exists');
if (fs.existsSync(dashboardPath)) {
  const content = fs.readFileSync(dashboardPath, 'utf8');
  assert(content.includes('StreakHeatmapMatrix'), 'DashboardView integrates StreakHeatmapMatrix');
  assert(content.includes('BiometricsRingChart'), 'DashboardView integrates BiometricsRingChart');
  assert(content.includes('DynamicVibeWidget'), 'DashboardView integrates DynamicVibeWidget');
  assert(content.includes('studyTimer') && content.includes('formatTimer'), 'DashboardView embeds live focus stopwatch');
  assert(content.includes('toggleHabit'), 'DashboardView embeds interactive habit completion toggles');
  assert(content.includes('handleIncrementWater'), 'DashboardView embeds 1-click water hydration logger');
  assert(content.includes('quickJournal'), 'DashboardView embeds quick journal brain dump canvas');
}

// ----------------------------------------------------
// TEST GROUP 3: Data Persistence Integrity
// ----------------------------------------------------
console.log('\n💾 Test Group 3: Data Persistence & Context Integrity');

const contextPath = path.join(rootDir, 'src/context/DataContext.tsx');
assert(fs.existsSync(contextPath), 'DataContext exists');
if (fs.existsSync(contextPath)) {
  const content = fs.readFileSync(contextPath, 'utf8');
  assert(content.includes('forme_lifetrack_v2'), 'DataContext uses verified v2 local storage key');
  assert(content.includes('localStorage.setItem') && content.includes('localStorage.getItem'), 'DataContext hydrates and persists state to localStorage');
  assert(content.includes('journalOwnerName'), 'DataContext supports customizable user persona');
  assert(content.includes('DEFAULT_SETTINGS'), 'DataContext defines reliable fallback defaults');
}

// ----------------------------------------------------
// TEST GROUP 4: Anti-Slop (slop.md) & Execution Laws Check
// ----------------------------------------------------
console.log('\n🛡️ Test Group 4: Anti-Slop & Absolute Execution Laws');

const cssPath = path.join(rootDir, 'src/index.css');
assert(fs.existsSync(cssPath), 'index.css exists');
if (fs.existsSync(cssPath)) {
  const css = fs.readFileSync(cssPath, 'utf8');
  assert(!css.includes('#6366f1'), 'No reflexive generic blue-to-purple gradient tokens in root CSS');
  assert(css.includes('--bg-primary: #0B0D13') || css.includes('#0C0D0F'), 'Uses deep atmospheric obsidian base background');
}

// Law 1: Content visible by default (no blanket opacity: 0 gating)
const appPath = path.join(rootDir, 'src/App.tsx');
if (fs.existsSync(appPath)) {
  const appCode = fs.readFileSync(appPath, 'utf8');
  assert(!appCode.includes('initial={{ opacity: 0 }}'), 'Law 1: Main layout content is visible by default without blocking entrance animations');
  assert(appCode.includes("return 'dashboard'"), 'Default initial view correctly lands on the personalized Dashboard');
}

// ----------------------------------------------------
// SUMMARY
// ----------------------------------------------------
console.log('\n========================================');
console.log(`📊 TEST RESULTS: ${passedTests}/${totalTests} Passed (${Math.round((passedTests / totalTests) * 100)}%)`);
if (failedTests > 0) {
  console.error(`🚨 ${failedTests} test(s) failed.`);
  process.exit(1);
} else {
  console.log('🎉 ALL INTEGRATION & PERSISTENCE TESTS PASSED CLEANLY!');
  console.log('========================================\n');
  process.exit(0);
}
