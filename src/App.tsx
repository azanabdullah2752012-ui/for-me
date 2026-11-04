import React, { useState } from 'react';
import { DataProvider, useData } from './context/DataContext';
import { NavigationSidebar } from './components/layout/NavigationSidebar';
import { StardustCanvas } from './components/common/StardustCanvas';
import { WallpaperHUDView } from './views/WallpaperHUDView';
import { HomeView } from './views/HomeView';
import { JournalView } from './views/JournalView';
import { DailyTrackerView } from './views/DailyTrackerView';
import { StudiesView } from './views/StudiesView';
import { HealthView } from './views/HealthView';
import { LifeAuditView } from './views/LifeAuditView';
import { ManifestoView } from './views/ManifestoView';
import { MusicView } from './views/MusicView';
import { SettingsView } from './views/SettingsView';
import { 
  Menu, 
  X
} from 'lucide-react';
import { WallpaperTheme } from './types';

const SanctuaryLayout: React.FC = () => {
  const { 
    activeTab, 
    setActiveTab, 
    audioStations,
    activeStationId,
    isAudioPlaying,
    setIsAudioPlaying,
    wallpaperTheme,
    setWallpaperTheme
  } = useData();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);
  const [themeCategory, setThemeCategory] = useState<'nextgen' | 'classic'>('nextgen');
  const [isAudioDockOpen, setIsAudioDockOpen] = useState(false);

  const isWallpaper = activeTab === 'wallpaper';
  const activeStation = audioStations.find((s) => s.id === activeStationId);

  const nextGenThemes: { id: WallpaperTheme; label: string; swatch: string; tag: string }[] = [
    { id: 'andromeda-galaxy', label: 'Andromeda Spiral Galaxy', swatch: 'from-purple-900 via-violet-700 to-indigo-950', tag: 'Rotating Cosmic Core' },
    { id: 'lunar-horizon', label: 'Luminous Lunar Eclipse', swatch: 'from-sky-900 via-cyan-700 to-slate-950', tag: 'Atmospheric Horizon Arc' },
    { id: 'orion-sanctuary', label: 'Orion Nebula Sanctuary', swatch: 'from-rose-900 via-pink-700 to-purple-950', tag: 'Volumetric Stellar Clouds' },
    { id: 'bioluminescent-void', label: 'Bioluminescent Abyss', swatch: 'from-teal-900 via-cyan-700 to-slate-950', tag: 'Deep Ocean Aurora Reef' },
  ];

  const classicThemes: { id: WallpaperTheme; label: string; swatch: string; tag: string }[] = [
    { id: 'deep-nebula', label: 'Cosmic Violet (Original)', swatch: 'from-purple-900 to-indigo-950', tag: 'Classic Living Canvas' },
    { id: 'pastel-twilight', label: 'Pastel Twilight Nebula', swatch: 'from-fuchsia-800 via-pink-700 to-indigo-950', tag: 'Soft Lilac & Rose Dust' },
    { id: 'bioluminescent-cyan', label: 'Bioluminescent Cyan', swatch: 'from-cyan-800 via-teal-700 to-blue-950', tag: 'Cyan Aurora & Mint' },
    { id: 'celestial-rose', label: 'Celestial Rose Eclipse', swatch: 'from-rose-800 via-pink-700 to-purple-950', tag: 'Rose Gold & Champagne' },
    { id: 'sonoma-amber', label: 'Sonoma Amber', swatch: 'from-amber-900 to-orange-950', tag: 'Warm Golden Hour' },
    { id: 'nordic-aurora', label: 'Nordic Aurora', swatch: 'from-emerald-900 to-teal-950', tag: 'Northern Lights Curtain' },
    { id: 'rose-eclipse', label: 'Rose Eclipse', swatch: 'from-rose-900 to-pink-950', tag: 'Velvet Crimson Corona' },
    { id: 'earth-horizon', label: 'Earth Horizon', swatch: 'from-sky-900 to-blue-950', tag: 'Orbital Curvature' },
    { id: 'constellation', label: 'Star Map & Astrolabe', swatch: 'from-indigo-900 to-slate-950', tag: 'Astronomical Rings' },
    { id: 'solar-flare', label: 'Solar Flare', swatch: 'from-amber-800 to-orange-950', tag: 'Radiant Solar Corona' },
    { id: 'cyber-obsidian', label: 'Cyber Obsidian', swatch: 'from-zinc-900 to-black', tag: 'Monochrome Void' },
    { id: 'graphite-titanium', label: 'Graphite Titanium', swatch: 'from-zinc-800 to-zinc-950', tag: 'Studio Softbox' },
    { id: 'abyssal-ocean', label: 'Abyssal Ocean', swatch: 'from-cyan-950 to-slate-950', tag: 'Deep Oceanic Abyss' },
  ];

  const renderActiveView = () => {
    switch (activeTab) {
      case 'wallpaper':
        return <WallpaperHUDView />;
      case 'home':
        return <HomeView />;
      case 'journal':
        return <JournalView />;
      case 'tracker':
        return <DailyTrackerView />;
      case 'studies':
        return <StudiesView />;
      case 'health':
        return <HealthView />;
      case 'life_audit':
        return <LifeAuditView />;
      case 'manifesto':
        return <ManifestoView />;
      case 'music':
        return <MusicView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <WallpaperHUDView />;
    }
  };

  return (
    <div 
      data-theme={wallpaperTheme}
      className="relative w-screen h-screen max-h-screen overflow-hidden bg-[#060814] text-[#f5f3ff] selection:bg-violet-600 selection:text-white font-sans"
    >
      {/* ── LIVING STARDUST & COSMIC RIBBON WALLPAPER BACKGROUND ── */}
      <StardustCanvas />

      {/* ── DREAMY ANALOG FILM GRAIN OVERLAY ── */}
      <div className="pointer-events-none fixed inset-0 z-20 dreamy-grain opacity-40 mix-blend-overlay" />

      {/* When on Wallpaper View: Render the edge-to-edge Wallpaper HUD */}
      {isWallpaper ? (
        <main className="w-full h-full overflow-hidden relative z-10">
          {renderActiveView()}
        </main>
      ) : (
        /* When on Sub-views: Floating sidebar layout with comfortable breathing room from top of screen */
        <div className="flex h-screen w-screen overflow-hidden relative z-10 p-5 md:p-6 lg:p-7 gap-6">
          {/* Floating Frosted Glass Sidebar (Left Navigation) */}
          <NavigationSidebar 
            className="hidden md:flex" 
            onOpenThemes={() => setIsThemeModalOpen(true)}
          />

          {/* Mobile Top Header (Small Screens Only) */}
          <div className="md:hidden fixed top-4 left-4 right-4 z-40 flex items-center justify-between p-3.5 rounded-2xl bg-[#14162e]/90 backdrop-blur-xl border border-white/[0.1] shadow-xl">
            <button 
              onClick={() => setActiveTab('wallpaper')}
              className="flex items-center gap-2.5 cursor-pointer text-left"
            >
              <div className="w-7 h-7 rounded-full border border-white/20 bg-white/[0.04] flex items-center justify-center text-white text-xs font-mono font-medium">
                FM
              </div>
              <span className="font-sans font-bold text-xs tracking-[0.2em] text-white uppercase">
                FOR ME
              </span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-xl bg-white/[0.06] text-zinc-300 hover:text-white flex items-center gap-1.5 text-xs font-sans"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              <span>Menu</span>
            </button>
          </div>

          {/* Mobile Drawer */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 z-50 md:hidden flex p-4">
              <div
                className="fixed inset-0 bg-black/80 backdrop-blur-sm"
                onClick={() => setMobileMenuOpen(false)}
              />
              <div className="relative z-50 w-64 max-w-[85vw] h-full shadow-2xl flex flex-col">
                <NavigationSidebar 
                  onNavigate={() => setMobileMenuOpen(false)} 
                  onOpenThemes={() => {
                    setMobileMenuOpen(false);
                    setIsThemeModalOpen(true);
                  }}
                />
              </div>
            </div>
          )}

          {/* Sub-view Main Content Scroll Area */}
          <main className="flex-1 h-full overflow-y-auto w-full relative z-10 scroll-smooth pr-1 md:pr-2 pt-12 md:pt-0">
            <div className="max-w-4xl mx-auto space-y-8 pb-16">
              {renderActiveView()}
            </div>
          </main>

          {/* Theme Modal */}
          {isThemeModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div className="fixed inset-0 bg-black/75 backdrop-blur-md" onClick={() => setIsThemeModalOpen(false)} />
              <div className="relative z-10 w-full max-w-lg p-6 rounded-[2rem] bg-gradient-to-b from-[#181a33]/95 to-[#121326]/90 backdrop-blur-3xl border border-white/[0.1] shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <div>
                    <h3 className="font-sans text-base text-white font-semibold">Atmosphere & Wallpaper</h3>
                    <p className="text-[11px] text-zinc-400 font-sans">Choose between the new next-gen celestial realms or original classic designs.</p>
                  </div>
                  <button onClick={() => setIsThemeModalOpen(false)} className="text-zinc-400 hover:text-white">
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Category Toggle: Next-Gen (New) vs Classic (Old Preserved) */}
                <div className="flex p-1 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-xs font-sans">
                  <button
                    onClick={() => setThemeCategory('nextgen')}
                    className={`flex-1 py-1.5 px-3 rounded-xl font-medium transition-all ${
                      themeCategory === 'nextgen'
                        ? 'bg-violet-600 text-white shadow-sm'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    ✦ Next-Gen Realms (New)
                  </button>
                  <button
                    onClick={() => setThemeCategory('classic')}
                    className={`flex-1 py-1.5 px-3 rounded-xl font-medium transition-all ${
                      themeCategory === 'classic'
                        ? 'bg-white/[0.1] text-white shadow-sm'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Classic Sanctuary (Original)
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2.5 max-h-[50vh] overflow-y-auto pr-1">
                  {(themeCategory === 'nextgen' ? nextGenThemes : classicThemes).map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        setWallpaperTheme(t.id);
                        setIsThemeModalOpen(false);
                      }}
                      className={`p-3 rounded-2xl border text-left flex items-start gap-2.5 transition-all ${
                        wallpaperTheme === t.id
                          ? 'bg-violet-600/25 border-violet-400 text-white shadow-lavender-glow'
                          : 'bg-white/[0.02] border-white/[0.06] text-zinc-300 hover:bg-white/[0.05]'
                      }`}
                    >
                      <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${t.swatch} border border-white/[0.15] shrink-0 mt-0.5`} />
                      <div className="truncate">
                        <span className="text-xs font-medium block truncate text-white">{t.label}</span>
                        <span className="text-[10px] text-zinc-400 block truncate font-sans">{t.tag}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Audio Stream Dock Modal */}
          {isAudioDockOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div className="fixed inset-0 bg-black/75 backdrop-blur-md" onClick={() => setIsAudioDockOpen(false)} />
              <div className="relative z-10 w-full max-w-md p-6 rounded-[2rem] bg-gradient-to-b from-[#181a33]/95 to-[#121326]/90 backdrop-blur-3xl border border-white/[0.1] shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <h3 className="font-sans text-base text-white font-semibold">Focus Audio Stream</h3>
                  <button onClick={() => setIsAudioDockOpen(false)} className="text-zinc-400 hover:text-white">
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {isAudioPlaying && activeStation && (
                  <div className="w-full h-32 rounded-xl overflow-hidden border border-white/[0.1] bg-black">
                    <iframe
                      src={activeStation.embedSrc}
                      title={activeStation.name}
                      className="w-full h-full"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  </div>
                )}

                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => {
                      setIsAudioDockOpen(false);
                      setActiveTab('music');
                    }}
                    className="text-xs text-violet-300 hover:underline font-sans"
                  >
                    Open Full Audio Sanctuary →
                  </button>
                  <button
                    onClick={() => setIsAudioPlaying(!isAudioPlaying)}
                    className="px-5 py-2 bg-[#9333ea] hover:bg-[#a855f7] text-white rounded-xl text-xs font-semibold font-sans transition-all"
                  >
                    {isAudioPlaying ? 'Pause Stream' : 'Play Stream'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <DataProvider>
      <SanctuaryLayout />
    </DataProvider>
  );
};

export default App;
