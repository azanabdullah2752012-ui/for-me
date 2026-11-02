import React, { useState } from 'react';
import { NavView } from './types';
import { DataProvider } from './context/DataContext';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { MobileNav } from './components/layout/MobileNav';
import { StardustCanvas } from './components/common/StardustCanvas';
import { MusicHub } from './components/music/MusicHub';
import { sound } from './audio/sound';

// Views
import { WallpaperView } from './views/WallpaperView';
import { DashboardView } from './views/DashboardView';
import { DailyTrackerView } from './views/DailyTrackerView';
import { PromisesView } from './views/PromisesView';
import { HabitsView } from './views/HabitsView';
import { StudiesView } from './views/StudiesView';
import { HealthView } from './views/HealthView';
import { ReflectionsView } from './views/ReflectionsView';
import { GoalsView } from './views/GoalsView';
import { WeeklyAuditView } from './views/WeeklyAuditView';
import { MonthlyReviewView } from './views/MonthlyReviewView';
import { LifeAuditView } from './views/LifeAuditView';
import { AnalyticsView } from './views/AnalyticsView';
import { SettingsView } from './views/SettingsView';
import { ManifestoView } from './views/ManifestoView';

const getInitialView = (): NavView => {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    const viewParam = params.get('view');
    if (viewParam) {
      return viewParam as NavView;
    }
  }
  return 'dashboard';
};

const AppContent: React.FC = () => {
  const [currentView, setCurrentView] = useState<NavView>(getInitialView);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // Global Audio Unlock on first user gesture
  React.useEffect(() => {
    const handleFirstGesture = () => {
      sound.unlockAudio();
    };
    window.addEventListener('pointerdown', handleFirstGesture, { once: true });
    window.addEventListener('keydown', handleFirstGesture, { once: true });
    return () => {
      window.removeEventListener('pointerdown', handleFirstGesture);
      window.removeEventListener('keydown', handleFirstGesture);
    };
  }, []);

  // Sync wallpaper view query parameter with URL
  const handleNavigate = (view: NavView) => {
    setCurrentView(view);
    if (typeof window !== 'undefined') {
      if (view === 'wallpaper') {
        const url = new URL(window.location.href);
        url.searchParams.set('view', 'wallpaper');
        window.history.replaceState(null, '', url.toString());
      } else {
        const url = new URL(window.location.href);
        url.searchParams.delete('view');
        window.history.replaceState(null, '', url.pathname + (url.search ? url.search : ''));
      }
    }
  };

  const renderActiveView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardView onNavigate={handleNavigate} />;
      case 'manifesto':
        return <ManifestoView />;
      case 'daily-tracker':
        return <DailyTrackerView />;
      case 'promises':
        return <PromisesView />;
      case 'habits':
        return <HabitsView />;
      case 'studies':
        return <StudiesView />;
      case 'health':
        return <HealthView />;
      case 'reflections':
        return <ReflectionsView />;
      case 'goals':
        return <GoalsView />;
      case 'weekly-audit':
        return <WeeklyAuditView />;
      case 'monthly-review':
        return <MonthlyReviewView />;
      case 'life-audit':
        return <LifeAuditView />;
      case 'analytics':
        return <AnalyticsView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <DashboardView onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="relative flex h-screen w-screen overflow-hidden bg-cosmic-void text-white selection:bg-accent/25 selection:text-white">
      {/* Signature Living Stardust Background - Wallpaper View Exclusive */}
      {currentView === 'wallpaper' && <StardustCanvas />}

      {currentView === 'wallpaper' ? (
        <WallpaperView onNavigate={handleNavigate} />
      ) : (
        <>
          {/* Desktop / Tablet Sidebar */}
          <Sidebar
            currentView={currentView}
            onSelectView={handleNavigate}
            className="hidden md:flex flex-shrink-0 z-20"
          />

          {/* Mobile Drawer */}
          <MobileNav
            isOpen={isMobileNavOpen}
            onClose={() => setIsMobileNavOpen(false)}
            currentView={currentView}
            onSelectView={handleNavigate}
          />

          {/* Main Content Area with Elegant Directional Illumination */}
          <div className="flex-1 flex flex-col h-full overflow-hidden z-10 relative bg-[#07090E]">
            {/* Directional Top Atmospheric Illumination */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] pointer-events-none opacity-40"
              style={{
                background: 'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(139, 92, 246, 0.22), transparent 75%)',
              }}
            />
            {/* Subtle subtle secondary floor illumination */}
            <div
              className="absolute bottom-0 right-0 w-[600px] h-[300px] pointer-events-none opacity-20"
              style={{
                background: 'radial-gradient(circle at 100% 100%, rgba(6, 182, 212, 0.15), transparent 70%)',
              }}
            />

            <Header
              currentView={currentView}
              onOpenMobileNav={() => setIsMobileNavOpen(true)}
              onNavigate={handleNavigate}
            />

            <main className="flex-1 overflow-y-auto px-4 md:px-8 py-6 max-w-5xl w-full mx-auto relative z-10">
              {renderActiveView()}
            </main>
          </div>
        </>
      )}

      {/* Persistent Audio Hub & Floating Mini-Dock (Uninterrupted across all views) */}
      <MusicHub />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <DataProvider>
      <AppContent />
    </DataProvider>
  );
};

export default App;

