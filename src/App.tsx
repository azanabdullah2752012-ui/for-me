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
import { Menu, X } from 'lucide-react';

const SanctuaryLayout: React.FC = () => {
  const { activeTab, setActiveTab } = useData();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isWallpaper = activeTab === 'wallpaper';

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
    <div className="relative w-screen h-screen max-h-screen overflow-hidden bg-[#060814] text-[#f5f3ff] selection:bg-violet-600 selection:text-white">
      {/* ── LIVING STARDUST & COSMIC RIBBON WALLPAPER BACKGROUND ── */}
      <StardustCanvas />

      {/* When on Wallpaper View: Render the edge-to-edge Wallpaper HUD */}
      {isWallpaper ? (
        <main className="w-full h-full overflow-hidden relative z-10">
          {renderActiveView()}
        </main>
      ) : (
        /* When on Sub-views: Render the standard Sidebar Layout */
        <div className="flex-1 flex flex-col h-full overflow-hidden relative z-10">
          {/* Mobile Top Bar */}
          <div className="lg:hidden flex items-center justify-between p-4 bg-[#090b16]/80 backdrop-blur-md border-b border-[#c4b5fd]/[0.08] shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-violet-950/60 border border-violet-400/30 flex items-center justify-center text-violet-300">
                ✧
              </div>
              <span className="font-serif font-bold text-sm tracking-widest uppercase">FOR ME</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="p-1.5 text-zinc-300 hover:text-white rounded-lg bg-white/[0.04]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          <div className="flex-1 flex overflow-hidden">
            {/* Desktop Sidebar */}
            <NavigationSidebar className="hidden lg:flex" />

            {/* Mobile Drawer */}
            {mobileMenuOpen && (
              <div className="fixed inset-0 z-40 lg:hidden flex">
                <div
                  className="fixed inset-0 bg-black/80 backdrop-blur-sm"
                  onClick={() => setMobileMenuOpen(false)}
                />
                <div className="relative z-50 w-64 bg-[#090b16] h-full shadow-2xl flex flex-col">
                  <NavigationSidebar onNavigate={() => setMobileMenuOpen(false)} />
                </div>
              </div>
            )}

            {/* Sub-view Scroll Area */}
            <main className="flex-1 overflow-y-auto">
              {renderActiveView()}
            </main>
          </div>

          {/* Master Footer on Sub-views */}
          <footer className="w-full py-3 px-6 border-t border-white/[0.05] bg-[#060811]/90 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400 select-none shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-violet-400 font-serif">✧</span>
              <span className="font-serif italic tracking-wide text-zinc-400">
                "In the stillness of the cosmos, the mind finds its clarity."
              </span>
            </div>

            <div className="flex items-center gap-3 text-[11px] tracking-wider uppercase font-sans text-zinc-400">
              <button onClick={() => setActiveTab('wallpaper')} className="text-violet-300 hover:text-white transition-colors">
                ← Return to Wallpaper
              </button>
              <span className="text-zinc-600">•</span>
              <span>Plan</span>
              <span className="text-zinc-600">•</span>
              <span>Execute</span>
            </div>
          </footer>
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
