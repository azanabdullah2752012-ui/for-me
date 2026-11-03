import React, { useState, useEffect } from 'react';
import { NavView } from './types';
import { DataProvider } from './context/DataContext';
import { Sidebar } from './components/layout/Sidebar';
import { sound } from './audio/sound';

// Views
import { DashboardView } from './views/DashboardView';
import { DailyTrackerView } from './views/DailyTrackerView';
import { HabitsView } from './views/HabitsView';
import { StudiesView } from './views/StudiesView';
import { PromisesView } from './views/PromisesView';
import { ReflectionsView } from './views/ReflectionsView';
import { LifeAuditView } from './views/LifeAuditView';
import { MusicView } from './views/MusicView';
import { SettingsView } from './views/SettingsView';

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
  useEffect(() => {
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

  const handleNavigate = (view: NavView) => {
    setCurrentView(view);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (view === 'dashboard') {
        url.searchParams.delete('view');
      } else {
        url.searchParams.set('view', view);
      }
      window.history.replaceState(null, '', url.pathname + (url.search ? url.search : ''));
    }
  };

  const renderActiveView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardView onNavigate={handleNavigate} />;
      case 'daily-tracker':
        return <DailyTrackerView />;
      case 'promises':
        return <PromisesView />;
      case 'habits':
        return <HabitsView />;
      case 'studies':
        return <StudiesView />;
      case 'health':
        return <DashboardView onNavigate={handleNavigate} />;
      case 'reflections':
        return <ReflectionsView />;
      case 'life-audit':
        return <LifeAuditView />;
      case 'music':
        return <MusicView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <DashboardView onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="relative flex h-screen w-screen overflow-hidden bg-[#07080B] text-white">
      {/* Desktop Sidebar */}
      <Sidebar
        currentView={currentView}
        onSelectView={handleNavigate}
        className="hidden md:flex flex-shrink-0 z-20"
      />

      {/* Mobile Drawer */}
      {isMobileNavOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setIsMobileNavOpen(false)}
          />
          <div className="relative w-64 bg-[#07080B] h-full flex flex-col z-10 border-r border-white/[0.1]">
            <Sidebar
              currentView={currentView}
              onSelectView={handleNavigate}
              onCloseMobile={() => setIsMobileNavOpen(false)}
              className="w-full h-full border-r-0"
            />
          </div>
        </div>
      )}

      {/* Main Content Viewport */}
      <div className="flex-1 flex flex-col h-full overflow-hidden z-10 relative bg-[#07080B]">
        {/* Directional Atmospheric Illumination (Warm Terracotta / Amber Falloff) */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] pointer-events-none opacity-35"
          style={{
            background: 'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(229, 106, 56, 0.18), transparent 75%)',
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[700px] h-[350px] pointer-events-none opacity-15"
          style={{
            background: 'radial-gradient(circle at 100% 100%, rgba(245, 158, 11, 0.12), transparent 70%)',
          }}
        />

        {/* Mobile Top Bar */}
        <div className="md:hidden flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-black/40 z-20">
          <div className="flex items-center gap-2">
            <span className="text-[#E56A38] text-base">✦</span>
            <span className="font-serif font-bold text-white text-sm">FOR ME</span>
          </div>
          <button
            type="button"
            onClick={() => setIsMobileNavOpen(true)}
            className="p-2 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white"
            aria-label="Open Navigation Menu"
          >
            <span className="text-sm font-bold">☰</span>
          </button>
        </div>

        {/* Main View Scroll Area */}
        <main className="flex-1 overflow-y-auto px-4 md:px-8 py-6 max-w-7xl w-full mx-auto relative z-10">
          {renderActiveView()}
        </main>
      </div>
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
