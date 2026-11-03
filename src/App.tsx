import React, { useState } from 'react';
import { DataProvider, useData } from './context/DataContext';
import { Sidebar } from './components/layout/Sidebar';
import { FooterBar } from './components/layout/FooterBar';
import { DashboardView } from './views/DashboardView';
import { SubViews } from './views/SubViews';
import { Menu, X } from 'lucide-react';

const MainLayout: React.FC = () => {
  const { activeTab } = useData();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#090a0f] text-[#eceff4] selection:bg-[#ff6b35] selection:text-white">
      {/* Top Mobile Bar */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-[#0c0d12] border-b border-white/[0.06] sticky top-0 z-30">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
            ✧
          </div>
          <span className="font-serif font-bold text-sm tracking-widest uppercase">FOR ME</span>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-1.5 text-zinc-400 hover:text-white rounded-lg bg-white/[0.05]"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Desktop Sidebar */}
        <Sidebar className="hidden lg:flex" />

        {/* Mobile Slide-in Sidebar */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 lg:hidden flex">
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div className="relative z-50 w-72 bg-[#0c0d12] h-full shadow-2xl flex flex-col">
              <Sidebar />
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 pt-6">
          <div className="max-w-[1600px] mx-auto">
            {activeTab === 'dashboard' ? <DashboardView /> : <SubViews />}
          </div>
        </main>
      </div>

      {/* Persistent Master Footer */}
      <FooterBar />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <DataProvider>
      <MainLayout />
    </DataProvider>
  );
};

export default App;
