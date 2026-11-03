import React from 'react';

export const FooterBar: React.FC = () => {
  return (
    <footer className="w-full py-4 px-6 border-t border-white/[0.06] bg-[#090a0f]/90 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400 select-none">
      <div className="flex items-center gap-2">
        <span className="text-orange-400 font-serif text-sm">✧</span>
        <span className="font-serif italic tracking-wide text-zinc-300">
          "A disciplined mind builds a free life."
        </span>
      </div>

      <div className="flex items-center gap-3 text-[11px] tracking-wider uppercase font-sans text-zinc-400">
        <span className="hover:text-zinc-200 transition-colors">Plan</span>
        <span className="text-zinc-600">•</span>
        <span className="hover:text-zinc-200 transition-colors">Execute</span>
        <span className="text-zinc-600">•</span>
        <span className="hover:text-zinc-200 transition-colors">Reflect</span>
        <span className="text-zinc-600">•</span>
        <span className="hover:text-zinc-200 transition-colors">Improve</span>
      </div>
    </footer>
  );
};
