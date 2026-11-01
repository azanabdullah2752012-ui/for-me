import React, { useState } from 'react';
import { NavView } from './types';
import { DataProvider } from './context/DataContext';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { MobileNav } from './components/layout/MobileNav';
import { StardustCanvas } from './components/common/StardustCanvas';
import { MusicHub } from './components/music/MusicHub';

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
    if (params.get('view') === 'wallpaper') {
      return 'wallpaper';
    }
  }
  return 'daily-tracker';
};

const AppContent: React.FC = () => {
  const [currentView, setCurrentView] = useState<NavView>(getInitialView);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

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
    <div className="relative flex h-screen w-screen overflow-hidden bg-cosmic-void text-paper-ink selection:bg-accent/25 selection:text-white">
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

          {/* Main Content Area with Layered Glass Elevation */}
          <div className="flex-1 flex flex-col h-full overflow-hidden z-10 relative">
            <Header
              currentView={currentView}
              onOpenMobileNav={() => setIsMobileNavOpen(true)}
              onNavigate={handleNavigate}
            />

            <main className="flex-1 overflow-y-auto px-4 md:px-8 py-6 max-w-5xl w-full mx-auto relative">
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

