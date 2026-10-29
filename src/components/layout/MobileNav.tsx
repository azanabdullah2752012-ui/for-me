import React from 'react';
import { X } from 'lucide-react';
import { NavView } from '../../types';
import { Sidebar } from './Sidebar';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  currentView: NavView;
  onSelectView: (view: NavView) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  currentView,
  onSelectView,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-cosmic-void/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-72 max-w-[85vw] bg-cosmic-surface/95 backdrop-blur-2xl h-full flex flex-col z-10 shadow-modal border-r border-white/[0.1]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-paper-muted hover:text-paper-ink rounded-lg hover:bg-white/[0.08] z-20 transition-colors"
          aria-label="Close menu"
        >
          <X size={18} />
        </button>

        <Sidebar
          currentView={currentView}
          onSelectView={onSelectView}
          onCloseMobile={onClose}
          className="w-full h-full border-r-0"
        />
      </div>
    </div>
  );
};
