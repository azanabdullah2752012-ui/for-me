import React, { useState } from 'react';
import { DataProvider, useData } from './context/DataContext';
import { NavigationSidebar, NavigationTopBar } from './components/layout/NavigationSidebar';
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
  X, 
  Droplet, 
  Moon, 
  Sparkles, 
  Headphones, 
  Plus, 
  Minus 
} from 'lucide-react';
import { WallpaperTheme } from './types';

const SanctuaryLayout: React.FC = () => {
  const { 
    activeTab, 
    setActiveTab, 
    sleepHours, 
    setSleep, 
    hydration, 
    setHydration, 
    dailyRating, 
    setDailyRating,
    audioStations,
    activeStationId,
    isAudioPlaying,
    setIsAudioPlaying,
    wallpaperTheme,
    setWallpaperTheme
  } = useData();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);
  const [isAudioDockOpen, setIsAudioDockOpen] = useState(false);

  const isWallpaper = activeTab === 'wallpaper';
  const activeStation = audioStations.find((s) => s.id === activeStationId);

  const themeOptions: { id: WallpaperTheme; label: string; swatch: string }[] = [
    { id: 'deep-nebula', label: 'Deep Nebula', swatch: 'from-violet-900 to-indigo-950' },
    { id: 'sonoma-amber', label: 'Sonoma Amber', swatch: 'from-amber-900 to-orange-950' },
    { id: 'nordic-aurora', label: 'Nordic Aurora', swatch: 'from-emerald-900 to-teal-950' },
    { id: 'rose-eclipse', label: 'Rose Eclipse', swatch: 'from-rose-900 to-pink-950' },
    { id: 'graphite-titanium', label: 'Graphite Titanium', swatch: 'from-zinc-800 to-zinc-950' },
    { id: 'earth-horizon', label: 'Earth Horizon', swatch: 'from-sky-900 to-blue-950' },
    { id: 'constellation', label: 'Star Map & Astrolabe', swatch: 'from-indigo-900 to-slate-950' },
    { id: 'solar-flare', label: 'Solar Flare', swatch: 'from-amber-800 to-orange-950' },
    { id: 'cyber-obsidian', label: 'Cyber Obsidian', swatch: 'from-zinc-900 to-black' },
    { id: 'abyssal-ocean', label: 'Abyssal Ocean', swatch: 'from-cyan-950 to-slate-950' },
  ];

  const cycleSleep = () => {
    const nextHours = sleepHours >= 10 ? 5 : sleepHours + 0.5;
    setSleep(nextHours, 0);
  };

  const cycleRating = () => {
    const nextRating = dailyRating >= 10 ? 1 : dailyRating + 1;
    setDailyRating(nextRating);
  };

  const incrementWater = (e: React.MouseEvent) => {
    e.stopPropagation();
    setHydration((prev) => Math.min(100, prev + 12.5));
  };

  const decrementWater = (e: React.MouseEvent) => {
    e.stopPropagation();
    setHydration((prev) => Math.max(0, prev - 12.5));
  };

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
    <div className="relative w-screen h-screen max-h-screen overflow-hidden bg-[#060814] text-[#f5f3ff] selection:bg-violet-600 selection:text-white font-sans">
      {/* ── LIVING STARDUST & COSMIC RIBBON WALLPAPER BACKGROUND ── */}
      <StardustCanvas />

      {/* When on Wallpaper View: Render the edge-to-edge Wallpaper HUD */}
      {isWallpaper ? (
        <main className="w-full h-full overflow-hidden relative z-10">
          {renderActiveView()}
        </main>
      ) : (
        /* When on Sub-views: Full-bleed canvas with floating top utility bar & bottom dock matching the Wallpaper HUD */
        <div className="flex flex-col h-full overflow-hidden relative z-10">
          {/* Top Floating Glass Navigation Island */}
          <NavigationTopBar onOpenThemes={() => setIsThemeModalOpen(true)} />

          {/* Mobile Menu Button (Small Screens Only) */}
          <div className="md:hidden flex items-center justify-between px-4 py-2 border-b border-white/[0.06] bg-black/20 backdrop-blur-md">
            <span className="text-xs font-sans text-zinc-300 capitalize">{activeTab}</span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg bg-white/[0.06] text-zinc-300 hover:text-white flex items-center gap-1.5 text-xs font-sans"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              <span>Menu</span>
            </button>
          </div>

          {/* Mobile Drawer */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 z-50 md:hidden flex">
              <div
                className="fixed inset-0 bg-black/80 backdrop-blur-sm"
                onClick={() => setMobileMenuOpen(false)}
              />
              <div className="relative z-50 w-64 bg-[#090b16] h-full shadow-2xl flex flex-col">
                <NavigationSidebar onNavigate={() => setMobileMenuOpen(false)} />
              </div>
            </div>
          )}

          {/* Sub-view Scroll Area (Spacious, breathing canvas) */}
          <main className="flex-1 overflow-y-auto w-full relative z-10 scroll-smooth">
            {renderActiveView()}
          </main>

          {/* Floating Bottom Dock (Identical to Wallpaper HUD Dock) */}
          <footer className="relative w-full shrink-0 z-20 pb-4 px-6 md:px-14 flex items-center justify-center pointer-events-none select-none">
            {/* Center Quick Health & Mood Telemetry Pill */}
            <div className="pointer-events-auto flex items-center gap-5 px-6 py-2 rounded-full bg-white/[0.035] backdrop-blur-2xl border border-white/[0.08] border-t-white/[0.16] text-xs font-sans text-zinc-300 shadow-md">
              {/* Sleep Quick Cycle */}
              <div 
                onClick={cycleSleep}
                className="flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors group"
                title="Click to cycle sleep hours"
              >
                <Moon className="w-3.5 h-3.5 text-violet-300 group-hover:scale-110 transition-transform" />
                <span className="text-zinc-400 group-hover:text-zinc-200">
                  Sleep: <strong className="text-white font-mono">{sleepHours}h</strong>
                </span>
              </div>

              <span className="text-zinc-600">•</span>

              {/* Water Glasses Quick Counter */}
              <div className="flex items-center gap-1.5">
                <Droplet className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-zinc-400">
                  Water: <strong className="text-white font-mono">{Math.round((hydration / 100) * 8)}/8</strong>
                </span>
                <div className="flex items-center gap-1 ml-1">
                  <button
                    onClick={decrementWater}
                    className="w-4 h-4 rounded-full bg-white/[0.06] hover:bg-white/[0.15] text-zinc-300 hover:text-white flex items-center justify-center text-[10px] transition-colors"
                  >
                    <Minus className="w-2.5 h-2.5" />
                  </button>
                  <button
                    onClick={incrementWater}
                    className="w-4 h-4 rounded-full bg-white/[0.06] hover:bg-white/[0.15] text-zinc-300 hover:text-white flex items-center justify-center text-[10px] transition-colors"
                  >
                    <Plus className="w-2.5 h-2.5" />
                  </button>
                </div>
              </div>

              <span className="text-zinc-600">•</span>

              {/* Day Rating Quick Cycle */}
              <div 
                onClick={cycleRating}
                className="flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors group"
                title="Click to cycle rating"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300 group-hover:scale-110 transition-transform" />
                <span className="text-zinc-400 group-hover:text-zinc-200">
                  Day Rating: <strong className="text-amber-300 font-mono">{dailyRating}/10</strong>
                </span>
              </div>
            </div>

            {/* Right Mini Audio Capsule */}
            <div 
              onClick={() => setIsAudioDockOpen(true)}
              className="pointer-events-auto absolute right-6 md:right-14 bottom-4 hidden md:flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white/[0.035] backdrop-blur-2xl border border-white/[0.08] hover:border-white/[0.2] text-xs font-sans text-white shadow-md cursor-pointer group transition-all"
            >
              <div className={`w-2 h-2 rounded-full ${isAudioPlaying ? 'bg-violet-400 animate-pulse' : 'bg-zinc-600'}`} />
              <div className="w-7 h-7 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-violet-300 group-hover:bg-violet-600/30 transition-colors">
                <Headphones className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-medium text-white group-hover:text-violet-200 leading-tight">Focus Audio</p>
                <p className="text-[10px] text-zinc-400 font-sans truncate max-w-[120px]">
                  {activeStation ? activeStation.name : 'Add Spotify/YouTube'}
                </p>
              </div>
            </div>
          </footer>

          {/* Theme Modal */}
          {isThemeModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div className="fixed inset-0 bg-black/75 backdrop-blur-md" onClick={() => setIsThemeModalOpen(false)} />
              <div className="relative z-10 w-full max-w-md p-6 rounded-[2rem] bg-gradient-to-b from-[#181a33]/95 to-[#121326]/90 backdrop-blur-3xl border border-white/[0.1] shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <h3 className="font-sans text-base text-white font-semibold">Atmosphere & Wallpaper</h3>
                  <button onClick={() => setIsThemeModalOpen(false)} className="text-zinc-400 hover:text-white">
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  {themeOptions.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        setWallpaperTheme(t.id);
                        setIsThemeModalOpen(false);
                      }}
                      className={`p-3 rounded-2xl border text-left flex items-center gap-2.5 transition-all ${
                        wallpaperTheme === t.id
                          ? 'bg-violet-600/20 border-violet-400 text-white shadow-lavender-glow'
                          : 'bg-white/[0.02] border-white/[0.06] text-zinc-300 hover:bg-white/[0.05]'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${t.swatch} border border-white/[0.1]`} />
                      <span className="text-xs font-medium">{t.label}</span>
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
