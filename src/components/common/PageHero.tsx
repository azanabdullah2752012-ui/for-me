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
    <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-xl p-6 md:p-8 transition-colors duration-150 shadow-sm">
      <div className="relative flex flex-col md:flex-row md:items-start justify-between gap-6">
        {/* Left Column: Heading, kicker, subtitle */}
        <div className="space-y-2 max-w-2xl">
          {kicker && (
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 font-semibold">
              <span>{kicker}</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-500 normal-case tracking-normal font-sans">
                Private Offline Vault
              </span>
            </div>
          )}

          <h1 className="text-2xl md:text-3xl font-heading font-semibold text-white tracking-tight">
            {title}
          </h1>

          <p className="text-sm text-zinc-400 font-sans leading-relaxed max-w-xl">
            {subtitle}
          </p>

          {actions && <div className="pt-3 flex flex-wrap items-center gap-3">{actions}</div>}
        </div>

        {/* Right Column: Refined Archival Ledger Plaque */}
        <div className="hidden lg:flex flex-col items-start bg-white/[0.02] border border-white/[0.06] rounded-xl px-4 py-3 shrink-0 text-left space-y-1">
          <span className="text-[9px] uppercase font-mono tracking-[0.2em] text-zinc-500 font-medium">
            Standard
          </span>
          <div className="text-xs font-sans text-zinc-300 space-y-0.5 leading-snug">
            <p className="text-zinc-500">{badgeLines[0]}</p>
            <p className="text-zinc-400">{badgeLines[1]}</p>
            <p className="text-white font-medium">{badgeLines[2]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
