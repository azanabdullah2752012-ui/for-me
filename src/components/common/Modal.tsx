import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { sound } from '../../audio/sound';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  maxWidth?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = 'max-w-lg',
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with heavy blur */}
      <div
        className="fixed inset-0 bg-cosmic-void/80 backdrop-blur-md transition-opacity"
        onClick={() => {
          sound.tick();
          onClose();
        }}
      />

      {/* Modal Dialog */}
      <div
        className={`relative w-full ${maxWidth} bg-cosmic-surface/95 backdrop-blur-2xl border border-white/[0.12] rounded-2xl shadow-modal overflow-hidden z-10 transition-all text-paper-ink`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-cosmic-elevated/40">
          <div>
            <h3 className="text-base font-heading font-semibold text-paper-ink tracking-tight">
              {title}
            </h3>
            {subtitle && <p className="text-xs text-paper-muted font-sans mt-0.5">{subtitle}</p>}
          </div>
          <button
            onClick={() => {
              sound.tick();
              onClose();
            }}
            className="p-1.5 rounded-lg text-paper-muted hover:text-paper-ink hover:bg-white/[0.08] transition-colors"
            title="Close"
          >
            <X size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};
