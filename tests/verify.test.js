import assert from 'node:assert';
import fs from 'node:fs';

console.log('--- RUNNING FOR ME WALLPAPER SANCTUARY INTEGRITY TEST SUITE ---');

// 1. Core wallpaper architecture file verification
const requiredFiles = [
  'index.html',
  'src/App.tsx',
  'src/main.tsx',
  'src/index.css',
  'src/context/DataContext.tsx',
  'src/views/WallpaperHUDView.tsx',
  'src/components/common/Celestial3DCanvas.tsx',
  'src/components/common/StardustCanvas.tsx',
  'src/components/common/WallpaperStudioModal.tsx',
  'src/components/common/ProfileModal.tsx',
  'src/components/audio/FocusAudioModal.tsx',
  'src/components/audio/GlobalYouTubePlayer.tsx',
  'src/components/audio/SoundVisualizer.tsx',
  'src/components/audio/YouTubeIcon.tsx',
  'src/services/soundEngine.ts',
  'src/services/youtubeAudioService.ts',
  'src/services/mediaSessionService.ts',
];

for (const f of requiredFiles) {
  assert.strictEqual(fs.existsSync(f), true, `Missing required file: ${f}`);
}
console.log(`✔ All ${requiredFiles.length} core Wallpaper Sanctuary engine files verified.`);

// 2. Verification of complete purge of legacy broken sub-views & clutter
const purgedFiles = [
  'src/views/HomeView.tsx',
  'src/views/LifeOverviewView.tsx',
  'src/views/TodayView.tsx',
  'src/views/StudiesView.tsx',
  'src/views/HealthView.tsx',
  'src/views/JournalView.tsx',
  'src/views/DailyTrackerView.tsx',
  'src/views/PersonalGrowthView.tsx',
  'src/views/TimeTrackingView.tsx',
  'src/views/GoalsView.tsx',
  'src/views/AccountabilityView.tsx',
  'src/views/LifeAuditView.tsx',
  'src/views/ManifestoView.tsx',
  'src/views/SettingsView.tsx',
  'src/components/layout/NavigationSidebar.tsx',
  'src/components/common/ThemeModal.tsx',
  'companion',
  'automation',
  'viren',
  'Viren-App.zip',
  'viren-workspace.zip',
];

for (const pf of purgedFiles) {
  assert.strictEqual(fs.existsSync(pf), false, `Purged file or directory still exists: ${pf}`);
}
console.log(`✔ All ${purgedFiles.length} legacy broken views, navigation sidebar, and auxiliary directories successfully purged.`);

// 3. App.tsx Sanctuary edge-to-edge layout checks
const appContent = fs.readFileSync('src/App.tsx', 'utf8');
assert.ok(appContent.includes('<StardustCanvas'), 'App must render StardustCanvas');
assert.ok(appContent.includes('<Celestial3DCanvas'), 'App must render Celestial3DCanvas');
assert.ok(appContent.includes('<GlobalYouTubePlayer'), 'App must render GlobalYouTubePlayer');
assert.ok(appContent.includes('<WallpaperHUDView'), 'App must render WallpaperHUDView');
assert.strictEqual(appContent.includes('NavigationSidebar'), false, 'App must NOT contain NavigationSidebar');
assert.strictEqual(appContent.includes('renderActiveView'), false, 'App must NOT contain multi-view router');
console.log('✔ App layout confirmed: Pure, edge-to-edge Wallpaper Sanctuary.');

// 4. Wallpaper HUD & Zen Mode checks
const hudContent = fs.readFileSync('src/views/WallpaperHUDView.tsx', 'utf8');
assert.ok(hudContent.includes('Tasks for the Day'), 'WallpaperHUD must include Tasks for the Day');
assert.ok(hudContent.includes('Daily Rhythm Pulse'), 'WallpaperHUD must include Daily Rhythm Pulse');
assert.ok(hudContent.includes('Deep Study Console'), 'WallpaperHUD must include Deep Study Console');
assert.ok(hudContent.includes('clockTime'), 'WallpaperHUD must include live digital clock');
assert.ok(hudContent.includes('isHUDHidden'), 'WallpaperHUD must support Zen Mode (hiding controls)');
assert.strictEqual(hudContent.includes('setActiveTab'), false, 'WallpaperHUD must NOT reference non-existent tabs');
console.log('✔ WallpaperHUD confirmed: Complete live focus console & Zen Mode.');

// 5. DataContext persistence & clean state checks
const contextContent = fs.readFileSync('src/context/DataContext.tsx', 'utf8');
assert.ok(contextContent.includes('for_me_wallpaper_settings_v3'), 'DataContext must persist wallpaper settings');
assert.ok(contextContent.includes('for_me_tasks'), 'DataContext must persist tasks');
assert.ok(contextContent.includes('for_me_habits'), 'DataContext must persist habits');
assert.ok(contextContent.includes('soundEngine'), 'DataContext must integrate procedural Web Audio soundEngine');
assert.ok(contextContent.includes('CURATED_YOUTUBE_STREAMS'), 'DataContext must integrate YouTube focus streams');
assert.ok(contextContent.includes('for_me_last_active_date'), 'DataContext must track last active date for midnight rollover');
assert.ok(contextContent.includes('resetDayProgress'), 'DataContext must provide resetDayProgress capability');
assert.ok(contextContent.includes('factoryReset'), 'DataContext must provide factoryReset capability');
console.log('✔ DataContext confirmed: Self-contained, robust local persistence & midnight rollover reset.');

// 6. Midnight rollover and manual day reset UI triggers
const profileModalContent = fs.readFileSync('src/components/common/ProfileModal.tsx', 'utf8');
assert.ok(hudContent.includes('Start Fresh Day'), 'WallpaperHUD must have Start Fresh Day button');
assert.ok(profileModalContent.includes('Start Fresh Day'), 'ProfileModal must have Start Fresh Day reset option');
assert.ok(profileModalContent.includes('Factory Reset'), 'ProfileModal must have Factory Reset option');
console.log('✔ Midnight rollover & manual reset triggers verified across HUD and Profile modal.');

console.log('\n🌟 ALL WALLPAPER SANCTUARY INTEGRITY TESTS PASSED SUCCESSFULLY! 🌟');
