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
  kicker = 'MY JOURNAL',
}) => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-cosmic-surface/60 backdrop-blur-xl p-6 md:p-8 transition-colors duration-150 shadow-journal">
      {/* Directional ambient starlight beam top-left */}
      <div 
        className="absolute -top-24 -left-24 w-72 h-72 rounded-full pointer-events-none opacity-20 bg-gradient-to-br from-violet-500 to-indigo-500 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Left Column: Heading, kicker, subtitle */}
        <div className="space-y-2.5 max-w-2xl">
          {kicker && (
            <div className="flex items-center gap-2 text-[11px] font-sans uppercase tracking-[0.2em] text-starlight-lavender font-semibold">
              <span>{kicker}</span>
              <span className="text-paper-muted">•</span>
              <span className="text-paper-muted normal-case tracking-normal font-sans">
                &ldquo;Remember, you are here for you.&rdquo;
              </span>
            </div>
          )}

          <h1 className="text-2xl md:text-3xl font-heading font-semibold text-paper-ink tracking-tight">
            {title}
          </h1>

          <p className="text-sm text-paper-secondary font-sans leading-relaxed">
            {subtitle}
          </p>

          {actions && <div className="pt-2 flex flex-wrap items-center gap-3">{actions}</div>}
        </div>

        {/* Right Column: Quiet Editorial Quote Plaque */}
        <div className="hidden lg:flex flex-col items-start bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 shrink-0 text-left space-y-1.5 backdrop-blur-md">
          <span className="text-[10px] uppercase font-sans tracking-[0.18em] text-starlight-lavender/80 font-medium">
            Core Philosophy
          </span>
          <div className="text-xs font-sans text-paper-ink space-y-0.5 leading-snug font-medium">
            <p className="text-paper-secondary">{badgeLines[0]}</p>
            <p className="text-paper-secondary">{badgeLines[1]}</p>
            <p className="text-accent font-semibold">{badgeLines[2]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
