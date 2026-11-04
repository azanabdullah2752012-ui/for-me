import React, { useState } from 'react';
import { DataProvider, useData } from './context/DataContext';
import { NavigationSidebar } from './components/layout/NavigationSidebar';
import { StardustCanvas } from './components/common/StardustCanvas';
import { WallpaperHUDView } from './views/WallpaperHUDView';
import { HomeView } from './views/HomeView';
import { LifeOverviewView } from './views/LifeOverviewView';
import { TodayView } from './views/TodayView';
import { JournalView } from './views/JournalView';
import { DailyTrackerView } from './views/DailyTrackerView';
import { StudiesView } from './views/StudiesView';
import { HealthView } from './views/HealthView';
import { PersonalGrowthView } from './views/PersonalGrowthView';
import { TimeTrackingView } from './views/TimeTrackingView';
import { GoalsView } from './views/GoalsView';
import { AccountabilityView } from './views/AccountabilityView';
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
    wallpaperTheme,
    appTheme
  } = useData();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);

  const isWallpaper = activeTab === 'wallpaper';
  const isLight = appTheme === 'light';

  const renderActiveView = () => {
    switch (activeTab) {
      case 'wallpaper':
        return <WallpaperHUDView />;
      case 'overview':
        return <LifeOverviewView />;
      case 'today':
        return <TodayView />;
      case 'home':
        return <HomeView />;
      case 'studies':
        return <StudiesView />;
      case 'health':
        return <HealthView />;
      case 'tracker':
        return <DailyTrackerView />;
      case 'growth':
        return <PersonalGrowthView />;
      case 'time':
        return <TimeTrackingView />;
      case 'goals':
        return <GoalsView />;
      case 'accountability':
        return <AccountabilityView />;
      case 'journal':
        return <JournalView />;
      case 'life_audit':
        return <LifeAuditView />;
      case 'manifesto':
        return <ManifestoView />;
      case 'music':
        return <MusicView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <LifeOverviewView />;
    }
  };

  return (
    <div 
      data-theme={wallpaperTheme}
      className={`theme-${appTheme} relative w-screen h-screen max-h-screen overflow-hidden text-[var(--text-primary)] selection:bg-violet-600 selection:text-white font-sans transition-colors duration-200 ${
        isLight ? 'bg-[#f7f5f0]/95' : 'bg-[#060814]'
      }`}
    >
      {/* ── LIVING STARDUST & COSMIC RIBBON WALLPAPER BACKGROUND (LOCKED & PRESERVED) ── */}
      <StardustCanvas />

      {/* Creamy Light Mode Surface Scrim (Sub-views only; leaves Wallpaper HUD 100% untouched) */}
      {isLight && !isWallpaper && (
        <div className="fixed inset-0 bg-[#f7f5f0]/95 backdrop-blur-2xl z-[5] pointer-events-none transition-opacity duration-300" />
      )}

      {/* ── DREAMY ANALOG FILM GRAIN OVERLAY ── */}
      <div className="pointer-events-none fixed inset-0 z-20 dreamy-grain opacity-40 mix-blend-overlay" />

      {/* When on Wallpaper View: Render the edge-to-edge Wallpaper HUD */}
      {isWallpaper ? (
        <main className="w-full h-full overflow-hidden relative z-10">
          {renderActiveView()}
        </main>
      ) : (
        /* When on Sub-views: Floating sidebar layout with comfortable breathing room from top of screen */
        <div className="flex h-screen w-screen overflow-hidden relative z-10 p-4 md:p-6 lg:p-7 gap-6">
          {/* Floating Frosted Glass Sidebar (Left Navigation) */}
          <NavigationSidebar 
            className="hidden md:flex" 
            onOpenThemes={() => setIsThemeModalOpen(true)}
          />

          {/* Mobile Top Header (Small Screens Only) */}
          <div className="md:hidden fixed top-3 left-3 right-3 z-40 flex items-center justify-between p-3.5 rounded-2xl creamy-surface shadow-xl">
            <button 
              onClick={() => setActiveTab('wallpaper')}
              className="flex items-center gap-2.5 cursor-pointer text-left"
            >
              <div className="w-7 h-7 rounded-full border border-violet-500/30 bg-violet-600/10 flex items-center justify-center text-violet-400 text-xs font-mono font-medium">
                FM
              </div>
              <span className="font-sans font-bold text-xs tracking-[0.2em] text-[var(--text-primary)] uppercase">
                FOR ME
              </span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-xl bg-[var(--pill-bg)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center gap-1.5 text-xs font-sans cursor-pointer"
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
          <main className="flex-1 h-full overflow-y-auto w-full relative z-10 scroll-smooth pr-1 md:pr-3 pt-14 md:pt-0">
            <div className="max-w-4xl mx-auto space-y-8 pb-16">
              {renderActiveView()}
            </div>
          </main>

          {/* Live Preview Theme Modal */}
          <ThemeModal
            isOpen={isThemeModalOpen}
            onClose={() => setIsThemeModalOpen(false)}
          />
        </div>
      )}
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
