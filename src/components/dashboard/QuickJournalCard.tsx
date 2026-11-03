import React, { useState } from 'react';
import { Edit3, Image, Link2, Smile, Check } from 'lucide-react';
import { useData } from '../../context/DataContext';

export const QuickJournalCard: React.FC = () => {
  const { journalDraft, setJournalDraft, saveJournalEntry, journalEntries } = useData();
  const [justSaved, setJustSaved] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const emojis = ['⚡', '🎯', '🔥', '🌊', '🧠', '✨', '📖', '🚀'];

  const handleSave = () => {
    if (!journalDraft.trim()) return;
    saveJournalEntry();
    setJustSaved(true);
    setTimeout(() => setJustSaved(false), 2000);
  };

  const addEmoji = (emoji: string) => {
    setJournalDraft((prev: string) => prev + emoji);
    setShowEmojiPicker(false);
  };

  return (
    <div className="bg-[#0f1118]/80 backdrop-blur-md rounded-2xl border border-white/[0.07] p-5 flex flex-col justify-between hover:border-white/[0.12] transition-all duration-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Edit3 className="w-4 h-4 text-orange-400" />
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
            Quick Journal
          </h3>
        </div>
        {journalEntries.length > 0 && (
          <span className="text-[11px] text-zinc-400">
            {journalEntries.length} entries
          </span>
        )}
      </div>

      {/* Text Area */}
      <div className="relative my-1">
        <textarea
          value={journalDraft}
          onChange={(e) => setJournalDraft(e.target.value)}
          placeholder="What's on your mind?"
          rows={3}
          className="w-full bg-transparent border-0 text-xs sm:text-sm font-serif italic text-zinc-200 placeholder-zinc-500 focus:outline-none resize-none leading-relaxed"
        />
      </div>

      {/* Toolbar & Save */}
      <div className="flex items-center justify-between pt-2 border-t border-white/[0.04] relative">
        <div className="flex items-center gap-2 text-zinc-500">
          <button 
            type="button"
            title="Attach Image"
            onClick={() => alert('Image attachment ready in rich reflections journal view.')}
            className="p-1 hover:text-zinc-300 transition-colors"
          >
            <Image className="w-4 h-4" />
          </button>
          <button 
            type="button"
            title="Insert Link"
            onClick={() => {
              const url = prompt('Enter reference URL:');
              if (url) setJournalDraft((prev: string) => `${prev} [Link](${url})`);
            }}
            className="p-1 hover:text-zinc-300 transition-colors"
          >
            <Link2 className="w-4 h-4" />
          </button>
          <div className="relative">
            <button 
              type="button"
              title="Insert Emoji"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              className="p-1 hover:text-zinc-300 transition-colors"
            >
              <Smile className="w-4 h-4" />
            </button>
            {showEmojiPicker && (
              <div className="absolute left-0 bottom-full mb-2 p-2 bg-[#141724] border border-white/[0.1] rounded-xl shadow-xl flex gap-1 z-30">
                {emojis.map((em) => (
                  <button
                    key={em}
                    onClick={() => addEmoji(em)}
                    className="p-1 hover:bg-white/[0.1] rounded text-sm"
                  >
                    {em}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <button
          onClick={handleSave}
          disabled={!journalDraft.trim()}
          className={`px-4 py-1.5 rounded-xl text-xs font-medium tracking-wide transition-all duration-200 flex items-center gap-1.5 ${
            journalDraft.trim()
              ? 'bg-[#ff6b35] hover:bg-[#ff7b47] text-white shadow-amber-glow'
              : 'bg-white/[0.05] text-zinc-500 cursor-not-allowed'
          }`}
        >
          {justSaved ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>Saved</span>
            </>
          ) : (
            <span>Save</span>
          )}
        </button>
      </div>
    </div>
  );
};
