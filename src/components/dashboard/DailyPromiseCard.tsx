import React, { useState } from 'react';
import { Star, Check, Edit2 } from 'lucide-react';
import { useData } from '../../context/DataContext';

export const DailyPromiseCard: React.FC = () => {
  const { promise, incrementPromise, updatePromiseText } = useData();
  const [isEditing, setIsEditing] = useState(false);
  const [inputText, setInputText] = useState(promise.text);

  const percent = Math.min(100, Math.round((promise.current / promise.target) * 100));

  const handleSaveText = () => {
    updatePromiseText(inputText);
    setIsEditing(false);
  };

  return (
    <div className="bg-[#0f1118]/80 backdrop-blur-md rounded-2xl border border-white/[0.07] p-5 flex flex-col justify-between hover:border-white/[0.12] transition-all duration-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-orange-400 fill-orange-400/20" />
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
            Daily Promise
          </h3>
        </div>
        <button
          onClick={() => setIsEditing(!isEditing)}
          aria-label="Edit promise"
          className="text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          <Edit2 className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Promise Text & Deadline */}
      <div className="my-auto py-1">
        {isEditing ? (
          <div className="flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="w-full bg-white/[0.05] border border-white/[0.1] rounded-lg px-2.5 py-1 text-xs text-white focus:outline-none focus:border-orange-500"
            />
            <button
              onClick={handleSaveText}
              className="px-2.5 py-1 bg-orange-500 text-white rounded-lg text-xs hover:bg-orange-600 transition-colors"
            >
              <Check className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <p className="text-sm font-serif italic text-zinc-200 leading-snug">
            "{promise.text}"
          </p>
        )}
        <div className="text-[11px] text-zinc-400 font-sans tracking-wide mt-2">
          — {promise.deadline}
        </div>
      </div>

      {/* Progress Bar & Telemetry */}
      <div className="pt-2 border-t border-white/[0.04]">
        <div className="flex items-center justify-between text-[11px] font-medium text-zinc-400 mb-1.5">
          <span>Target Progress</span>
          <button
            onClick={incrementPromise}
            title="Click to advance progress"
            className="text-orange-400 font-mono hover:underline cursor-pointer"
          >
            {promise.current} / {promise.target} {promise.unit}
          </button>
        </div>
        <div
          onClick={incrementPromise}
          className="w-full h-2 rounded-full bg-white/[0.06] overflow-hidden cursor-pointer group"
          title="Click to increment"
        >
          <div
            className="h-full rounded-full bg-gradient-to-r from-orange-600 to-amber-500 transition-all duration-500 group-hover:brightness-110"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );
};
