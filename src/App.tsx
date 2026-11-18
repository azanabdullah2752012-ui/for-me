import React from 'react';
import { DataProvider, useData } from './context/DataContext';
import { StardustCanvas } from './components/common/StardustCanvas';
import { Celestial3DCanvas } from './components/common/Celestial3DCanvas';
import { GlobalYouTubePlayer } from './components/audio/GlobalYouTubePlayer';
import { WallpaperHUDView } from './views/WallpaperHUDView';

const SanctuaryLayout: React.FC = () => {
  const { 
    wallpaperTheme,
    appTheme
  } = useData();

  const isLight = appTheme === 'light';

  return (
    <div 
      data-theme={wallpaperTheme}
      className={`theme-${appTheme} relative w-screen h-screen max-h-screen overflow-hidden text-[var(--text-primary)] font-sans transition-colors duration-200 ${
        isLight ? 'bg-[#f7f5f0]/95' : 'bg-[#060814]'
      }`}
    >
      {/* Accessible Skip Link (WCAG 2.2 AA) */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--card-bg-elevated)] focus:text-[var(--text-primary)] focus:rounded-xl focus:border focus:border-[var(--card-border)] focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-violet-400 font-sans text-xs font-semibold"
      >
        Skip to main content
      </a>

      {/* ── LIVING STARDUST & COSMIC RIBBON WALLPAPER BACKGROUND ── */}
      <StardustCanvas />

      {/* ── INTERACTIVE 3D CELESTIAL ENGINE (THREE.JS SATURN / MOON / ECLIPSE) ── */}
      <Celestial3DCanvas />

      {/* ── GLOBAL PERSISTENT YOUTUBE AUDIO ENGINE & PREVIEW ── */}
      <GlobalYouTubePlayer />

      {/* ── DREAMY ANALOG FILM GRAIN OVERLAY ── */}
      <div className="pointer-events-none fixed inset-0 z-20 dreamy-grain opacity-40 mix-blend-overlay" />

      {/* ── WALLPAPER SANCTUARY INTERFACE ── */}
      <main id="main-content" className="w-full h-full overflow-y-auto lg:overflow-hidden relative z-10">
        <WallpaperHUDView />
      </main>
    </div>
  );
};

export default function App() {
  return (
    <DataProvider>
      <SanctuaryLayout />
    </DataProvider>
  );
}
