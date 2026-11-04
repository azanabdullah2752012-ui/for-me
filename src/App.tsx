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
import { ThemeModal } from './components/common/ThemeModal';
import { 
  Menu, 
  X
} from 'lucide-react';

const SanctuaryLayout: React.FC = () => {
  const { 
    activeTab, 
    setActiveTab, 
    audioStations,
    activeStationId,
    isAudioPlaying,
    setIsAudioPlaying,
    wallpaperTheme
  } = useData();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);
  const [isAudioDockOpen, setIsAudioDockOpen] = useState(false);

  const isWallpaper = activeTab === 'wallpaper';
  const activeStation = audioStations.find((s) => s.id === activeStationId);

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

          {/* Live Preview Theme Modal */}
          <ThemeModal
            isOpen={isThemeModalOpen}
            onClose={() => setIsThemeModalOpen(false)}
          />

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
