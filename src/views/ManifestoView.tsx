import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { ArrowLeft, Edit2, Check } from 'lucide-react';

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
    <div className="max-w-2xl mx-auto py-10 px-4 sm:px-6 space-y-10 select-none">
      {/* Header */}
      <div className="border-b border-white/[0.06] pb-6 flex items-center justify-between">
        <div>
          <button
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </button>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-wide">
            Personal Manifesto
          </h2>
          <p className="text-xs text-zinc-400 font-sans mt-1">
            Your personal declarations, principles, and standards in your own words.
          </p>
        </div>

        {hasContent && !isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="px-3.5 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-xs text-violet-200 flex items-center gap-1.5 border border-white/[0.08] transition-colors"
          >
            <Edit2 className="w-3.5 h-3.5" /> Edit
          </button>
        )}
      </div>

      {savedFeedback && (
        <div className="p-3 bg-violet-950/40 border border-violet-400/30 rounded-xl text-xs text-violet-200 flex items-center gap-2">
          <Check className="w-4 h-4 text-violet-300" />
          <span>Manifesto updated and saved to your ledger.</span>
        </div>
      )}

      {/* Content or Editable Surface (Condition 2: No invented principles) */}
      {isEditing || !hasContent ? (
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0c1022]/80 border border-[#c4b5fd]/[0.1] space-y-5 shadow-sanctuary">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-lg text-white font-normal">
              {hasContent ? 'Edit Your Manifesto' : 'Draft Your Personal Manifesto'}
            </h3>
            {hasContent && (
              <button
                onClick={() => {
                  setDraftText(profile.manifestoText || '');
                  setIsEditing(false);
                }}
                className="text-xs text-zinc-400 hover:text-white"
              >
                Cancel
              </button>
            )}
          </div>

          <p className="text-xs text-zinc-400 font-sans leading-relaxed">
            Write down your core tenets, rules of discipline, or what you demand of yourself.
          </p>

          <textarea
            value={draftText}
            onChange={(e) => setDraftText(e.target.value)}
            placeholder="Write your personal principles here..."
            rows={12}
            className="w-full bg-white/[0.02] border border-white/[0.08] rounded-2xl p-4 text-sm sm:text-base font-serif text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-violet-400/50 resize-none leading-relaxed"
          />

          <div className="flex justify-end pt-2">
            <button
              onClick={handleSave}
              className="px-6 py-2.5 bg-violet-600 hover:bg-violet-500 text-white rounded-xl text-xs font-semibold shadow-lavender-glow transition-all"
            >
              Save Manifesto
            </button>
          </div>
        </div>
      ) : (
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0c1022]/60 border border-[#c4b5fd]/[0.08] shadow-sanctuary">
          <div className="prose prose-invert max-w-none">
            <p className="font-serif text-base sm:text-lg text-zinc-200 leading-loose whitespace-pre-wrap">
              {profile.manifestoText}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
