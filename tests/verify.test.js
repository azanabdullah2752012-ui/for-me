import assert from 'node:assert';
import fs from 'node:fs';

console.log('--- RUNNING FOR ME LEDGER VERIFICATION SUITE ---');

// 1. Verify critical files exist
const criticalFiles = [
  'index.html',
  'src/App.tsx',
  'src/main.tsx',
  'src/index.css',
  'src/context/DataContext.tsx',
  'src/components/layout/Sidebar.tsx',
  'src/components/layout/HeaderHero.tsx',
  'src/components/layout/FooterBar.tsx',
  'src/components/dashboard/BiometricsCard.tsx',
  'src/components/dashboard/StudyFocusCard.tsx',
  'src/components/dashboard/StreakHeatmapCard.tsx',
  'src/components/dashboard/DailyPromiseCard.tsx',
  'src/components/dashboard/TodayOverviewCard.tsx',
  'src/components/dashboard/QuickJournalCard.tsx',
  'src/components/dashboard/UpcomingCard.tsx',
  'src/components/dashboard/LifeRadarCard.tsx',
  'src/components/dashboard/FocusAudioCard.tsx',
  'src/components/dashboard/LifeAuditCard.tsx',
  'src/views/DashboardView.tsx',
  'src/views/SubViews.tsx'
];

for (const file of criticalFiles) {
  assert.strictEqual(fs.existsSync(file), true, `File must exist: ${file}`);
  const content = fs.readFileSync(file, 'utf8');
  assert.ok(content.length > 50, `File should have substantial content: ${file}`);
}

console.log('✔ All 20 core application files verified successfully.');

// 2. Verify YouTube and Spotify streaming embed support in Audio Card
const audioContent = fs.readFileSync('src/components/dashboard/FocusAudioCard.tsx', 'utf8');
assert.ok(audioContent.includes('iframe'), 'FocusAudioCard must include iframe player embed');
assert.ok(audioContent.includes('embedSrc'), 'FocusAudioCard must support streaming embed sources');
console.log('✔ Audio streaming embed confirmed.');

// 3. Verify Radar chart and Life metrics
const radarContent = fs.readFileSync('src/components/dashboard/LifeRadarCard.tsx', 'utf8');
assert.ok(radarContent.includes('polygon'), 'LifeRadarCard must render SVG polygon chart');
console.log('✔ Spider / Radar chart confirmed.');

console.log('--- ALL VERIFICATIONS PASSED ---');
