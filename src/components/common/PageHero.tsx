import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  badgeLines?: [string, string, string];
  actions?: React.ReactNode;
  kicker?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  badgeLines = ['FOR ME', 'PRIVATE JOURNAL', 'DISCIPLINE & GRACE'],
  actions,
  kicker = 'LEDGER',
}) => {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-cosmic-surface p-6 md:p-8 transition-colors duration-150 shadow-sm">
      <div className="relative flex flex-col md:flex-row md:items-start justify-between gap-6">
        {/* Left Column: Heading, kicker, subtitle */}
        <div className="space-y-2 max-w-2xl">
          {kicker && (
            <div className="flex items-center gap-2 text-[10px] font-sans uppercase tracking-[0.18em] text-accent font-semibold">
              <span>{kicker}</span>
              <span className="text-paper-muted">•</span>
              <span className="text-paper-muted normal-case tracking-normal font-sans">
                Private Offline Vault
              </span>
            </div>
          )}

          <h1 className="text-2xl md:text-3xl font-heading font-semibold text-paper-ink tracking-tight">
            {title}
          </h1>

          <p className="text-sm text-paper-secondary font-sans leading-relaxed max-w-xl">
            {subtitle}
          </p>

          {actions && <div className="pt-3 flex flex-wrap items-center gap-3">{actions}</div>}
        </div>

        {/* Right Column: Refined Archival Ledger Plaque */}
        <div className="hidden lg:flex flex-col items-start bg-white/[0.02] border border-white/[0.06] rounded-lg px-4 py-3 shrink-0 text-left space-y-1">
          <span className="text-[9px] uppercase font-mono tracking-[0.2em] text-paper-muted font-medium">
            Standard
          </span>
          <div className="text-xs font-sans text-paper-ink space-y-0.5 leading-snug">
            <p className="text-paper-muted">{badgeLines[0]}</p>
            <p className="text-paper-muted">{badgeLines[1]}</p>
            <p className="text-accent font-medium">{badgeLines[2]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
