import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { ArrowLeft, Edit2, Check, ScrollText } from 'lucide-react';

export const ManifestoView: React.FC = () => {
  const { profile, updateManifesto, setActiveTab } = useData();
  const [isEditing, setIsEditing] = useState(false);
  const [draftText, setDraftText] = useState(profile.manifestoText || '');
  const [savedFeedback, setSavedFeedback] = useState(false);

  const handleSave = () => {
    updateManifesto(draftText);
    setIsEditing(false);
    setSavedFeedback(true);
    setTimeout(() => setSavedFeedback(false), 2200);
  };

  const hasContent = Boolean(profile.manifestoText && profile.manifestoText.trim().length > 0);

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 sm:px-8 space-y-8 select-none font-sans">
      {/* Header */}
      <div className="border-b border-white/[0.06] pb-4 flex items-center justify-between">
        <div>
          <button
            onClick={() => setActiveTab('wallpaper')}
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors mb-2 font-sans"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Return to Wallpaper HUD
          </button>
          <div className="flex items-center gap-2.5">
            <ScrollText className="w-5 h-5 text-violet-300" />
            <h2 className="font-sans text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              Personal Manifesto
            </h2>
          </div>
          <p className="text-xs text-zinc-400 font-sans mt-1">
            Your personal declarations, principles, and standards in your own words.
          </p>
        </div>

        {hasContent && !isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="px-3.5 py-1.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-xs text-zinc-200 hover:text-white flex items-center gap-1.5 border border-white/[0.08] transition-colors font-sans"
          >
            <Edit2 className="w-3.5 h-3.5" /> Edit
          </button>
        )}
      </div>

      {savedFeedback && (
        <div className="p-3 bg-emerald-950/40 border border-emerald-400/30 rounded-xl text-xs text-emerald-200 flex items-center gap-2 font-sans">
          <Check className="w-4 h-4 text-emerald-400" /> Saved to your personal record.
        </div>
      )}

      {/* Content Canvas (Matching Wallpaper HUD Frosted Glass) */}
      <div className="p-6 sm:p-10 rounded-[2rem] bg-gradient-to-b from-[#181a33]/60 to-[#121326]/40 backdrop-blur-3xl border border-white/[0.08] border-t-white/[0.18] shadow-[0_8px_32px_0_rgba(0,0,0,0.45)]">
        {isEditing || !hasContent ? (
          <div className="space-y-4">
            <div className="border-b border-white/[0.06] pb-2">
              <span className="text-xs font-sans uppercase tracking-[0.16em] text-zinc-300 font-semibold">
                Compose Your Declarations
              </span>
            </div>

            <textarea
              value={draftText}
              onChange={(e) => setDraftText(e.target.value)}
              placeholder="State your personal code, core values, and life principles in your authentic voice..."
              rows={12}
              className="w-full bg-transparent border-0 text-base font-sans text-zinc-100 placeholder-zinc-500 focus:outline-none resize-none leading-relaxed"
            />

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-white/[0.06]">
              {hasContent && (
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 text-xs text-zinc-400 hover:text-white transition-colors font-sans"
                >
                  Cancel
                </button>
              )}
              <button
                onClick={handleSave}
                className="px-6 py-2.5 rounded-2xl bg-[#9333ea] hover:bg-[#a855f7] text-white text-xs font-bold uppercase tracking-wider font-sans transition-all shadow-[0_0_20px_rgba(147,51,234,0.35)]"
              >
                Save Manifesto
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="border-b border-white/[0.06] pb-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">
                Authored by {profile.name}
              </span>
            </div>

            <div className="font-sans text-base sm:text-lg text-zinc-100 leading-relaxed whitespace-pre-wrap">
              {profile.manifestoText}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
