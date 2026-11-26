import React from 'react';
import { useData } from '../../context/DataContext';
import { getWallpaperPaletteConfig } from '../../utils/paletteTheme';

interface HUDNotificationBannerProps {
  onActionClick?: (target?: 'tasks' | 'routine' | 'timer' | 'report' | 'habits') => void;
}

export const HUDNotificationBanner: React.FC<HUDNotificationBannerProps> = ({ onActionClick }) => {
  const {
    activeHUDNotification,
    dismissHUDNotification,
    wallpaperSettings,
    wallpaperTheme,
  } = useData();

  if (!activeHUDNotification) return null;

  const theme = getWallpaperPaletteConfig(wallpaperSettings?.palette, wallpaperTheme);

  const handleAction = () => {
    if (onActionClick && activeHUDNotification.actionTarget) {
      onActionClick(activeHUDNotification.actionTarget);
    }
    dismissHUDNotification();
  };

  const isWrapUp = activeHUDNotification.type === 'routine_end';

  return (
    <div
      role="alert"
      aria-live="assertive"
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full max-w-lg px-4 pointer-events-auto transition-all duration-300 animate-in fade-in slide-in-from-top-4"
    >
      <div
        className="relative overflow-hidden rounded-2xl border backdrop-blur-xl shadow-2xl p-4 transition-all"
        style={{
          borderColor: theme.borderRgba,
          backgroundColor: 'rgba(10, 11, 15, 0.88)',
          boxShadow: `0 12px 36px -4px rgba(0, 0, 0, 0.7), 0 0 20px -2px ${theme.glowRgba}`,
        }}
      >
        {/* Ambient Top Glow Line */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] opacity-80"
          style={{
            background: `linear-gradient(90deg, transparent, ${theme.accent}, transparent)`,
          }}
        />

        <div className="flex items-start gap-3.5">
          {/* Icon Badge */}
          <div
            className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center border text-base"
            style={{
              backgroundColor: isWrapUp ? 'rgba(245, 158, 11, 0.15)' : theme.bgSoftRgba,
              borderColor: isWrapUp ? 'rgba(245, 158, 11, 0.35)' : theme.borderRgba,
              color: isWrapUp ? '#fbbf24' : theme.accentLight,
            }}
          >
            {isWrapUp ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            )}
          </div>

          {/* Text Content */}
          <div className="flex-1 min-w-0 pr-2">
            <div className="flex items-center gap-2 mb-1">
              <span
                className="text-[10px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded border"
                style={{
                  backgroundColor: isWrapUp ? 'rgba(245, 158, 11, 0.12)' : 'rgba(255, 255, 255, 0.05)',
                  borderColor: isWrapUp ? 'rgba(245, 158, 11, 0.3)' : 'rgba(255, 255, 255, 0.1)',
                  color: isWrapUp ? '#fbbf24' : theme.accentLight,
                }}
              >
                {isWrapUp ? 'Wrap-Up Nudge' : 'Circadian Pulse'}
              </span>
              <span className="text-[11px] text-zinc-400 font-mono">
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>

            <h4 className="text-sm font-medium text-zinc-100 truncate">
              {activeHUDNotification.title}
            </h4>

            <p className="text-xs text-zinc-300 mt-0.5 leading-relaxed">
              {activeHUDNotification.message}
            </p>

            {/* Quick Action Button */}
            {activeHUDNotification.actionLabel && (
              <div className="mt-2.5 flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleAction}
                  className="px-3 py-1 rounded-lg text-xs font-medium border transition-colors inline-flex items-center gap-1.5"
                  style={{
                    backgroundColor: theme.bgSoftRgba,
                    borderColor: theme.borderRgba,
                    color: theme.accentLight,
                  }}
                >
                  <span>{activeHUDNotification.actionLabel}</span>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Dismiss Button */}
          <button
            type="button"
            onClick={dismissHUDNotification}
            aria-label="Dismiss notification"
            className="flex-shrink-0 p-1.5 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
