import React, { useState } from 'react';
import { Calendar, Plus, X } from 'lucide-react';
import { useData } from '../../context/DataContext';

export const UpcomingCard: React.FC = () => {
  const { upcomingEvents, addUpcomingEvent, removeUpcomingEvent, setActiveTab } = useData();
  const [showAdd, setShowAdd] = useState(false);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addUpcomingEvent({
        title: title.trim(),
        date: date.trim() || 'Upcoming',
        color: '#ff6b35',
      });
      setTitle('');
      setDate('');
      setShowAdd(false);
    }
  };

  return (
    <div className="bg-[#0f1118]/80 backdrop-blur-md rounded-2xl border border-white/[0.07] p-5 flex flex-col justify-between hover:border-white/[0.12] transition-all duration-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-orange-400" />
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
            Upcoming
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowAdd(!showAdd)}
            className="text-zinc-400 hover:text-white transition-colors"
            title="Add reminder"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setActiveTab('tracker')}
            className="text-[11px] text-zinc-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
          >
            View All →
          </button>
        </div>
      </div>

      {/* Add Form */}
      {showAdd && (
        <form onSubmit={handleAdd} className="mb-3 p-2 bg-white/[0.03] rounded-xl border border-white/[0.08] space-y-1.5">
          <input
            type="text"
            placeholder="Event title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-transparent text-xs text-white placeholder-zinc-500 focus:outline-none"
            autoFocus
          />
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="e.g. Mon, 3 Nov"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-transparent text-[11px] text-zinc-300 placeholder-zinc-600 focus:outline-none"
            />
            <button
              type="submit"
              className="px-2 py-0.5 bg-orange-500 text-white rounded text-[11px]"
            >
              Add
            </button>
          </div>
        </form>
      )}

      {/* List */}
      <div className="space-y-2.5 my-auto">
        {upcomingEvents.map((event) => (
          <div
            key={event.id}
            className="flex items-center justify-between group text-xs transition-colors hover:bg-white/[0.02] p-1.5 rounded-lg"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_6px_rgba(249,115,22,0.6)]" />
              <span className="text-zinc-200 font-sans tracking-wide">
                {event.title}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-zinc-400 font-sans">
                {event.date}
              </span>
              <button
                onClick={() => removeUpcomingEvent(event.id)}
                className="opacity-0 group-hover:opacity-100 text-zinc-600 hover:text-zinc-300 transition-opacity"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
