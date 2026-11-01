import React, { useState, useEffect, useRef } from 'react';
import { Plus, Trash2, GripHorizontal, Palette, Pin, Check } from 'lucide-react';
import { sound } from '../../audio/sound';

export type StickyColor = 'yellow' | 'purple' | 'mint' | 'blue' | 'peach' | 'dark';

export interface StickyNoteItem {
  id: string;
  text: string;
  color: StickyColor;
  x: number; // px from left
  y: number; // px from top
  rotation: number; // slight degree tilt
  pinned?: boolean;
}

const STORAGE_KEY = 'forme_wallpaper_sticky_notes';

const COLOR_CONFIGS: Record<
  StickyColor,
  {
    bg: string;
    text: string;
    border: string;
    shadow: string;
    header: string;
    placeholder: string;
    badge: string;
  }
> = {
  yellow: {
    bg: 'bg-[#FEF9C3]',
    text: 'text-[#422006]',
    border: 'border-[#FDE047]/60',
    shadow: 'shadow-[0_12px_32px_rgba(234,179,8,0.22)]',
    header: 'bg-[#FEF08A]/60',
    placeholder: 'placeholder-[#422006]/40',
    badge: 'bg-[#EAB308]',
  },
  purple: {
    bg: 'bg-[#F3E8FF]',
    text: 'text-[#3B0764]',
    border: 'border-[#D8B4FE]/60',
    shadow: 'shadow-[0_12px_32px_rgba(192,132,252,0.22)]',
    header: 'bg-[#E9D5FF]/60',
    placeholder: 'placeholder-[#3B0764]/40',
    badge: 'bg-[#A855F7]',
  },
  mint: {
    bg: 'bg-[#DCFCE7]',
    text: 'text-[#052E16]',
    border: 'border-[#86EFAC]/60',
    shadow: 'shadow-[0_12px_32px_rgba(74,222,128,0.22)]',
    header: 'bg-[#BBF7D0]/60',
    placeholder: 'placeholder-[#052E16]/40',
    badge: 'bg-[#22C55E]',
  },
  blue: {
    bg: 'bg-[#E0F2FE]',
    text: 'text-[#082F49]',
    border: 'border-[#7DD3FC]/60',
    shadow: 'shadow-[0_12px_32px_rgba(56,189,248,0.22)]',
    header: 'bg-[#BAE6FD]/60',
    placeholder: 'placeholder-[#082F49]/40',
    badge: 'bg-[#0EA5E9]',
  },
  peach: {
    bg: 'bg-[#FFE4E6]',
    text: 'text-[#4C0519]',
    border: 'border-[#FDA4AF]/60',
    shadow: 'shadow-[0_12px_32px_rgba(251,113,133,0.22)]',
    header: 'bg-[#FECDD3]/60',
    placeholder: 'placeholder-[#4C0519]/40',
    badge: 'bg-[#F43F5E]',
  },
  dark: {
    bg: 'bg-[#121624]/90 backdrop-blur-2xl',
    text: 'text-[#F1F5F9]',
    border: 'border-white/[0.12]',
    shadow: 'shadow-[0_12px_36px_rgba(0,0,0,0.6)]',
    header: 'bg-white/[0.04]',
    placeholder: 'placeholder-white/40',
    badge: 'bg-white/20',
  },
};

const COLOR_KEYS: StickyColor[] = ['yellow', 'purple', 'mint', 'blue', 'peach', 'dark'];

interface StickyNotesLayerProps {
  onRegisterAddNoteTrigger?: (trigger: () => void) => void;
}

export const StickyNotesLayer: React.FC<StickyNotesLayerProps> = ({ onRegisterAddNoteTrigger }) => {
  const [notes, setNotes] = useState<StickyNoteItem[]>(() => {
    try {
      if (typeof window !== 'undefined') {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) return parsed;
        }
      }
    } catch {}
    return [];
  });

  const [activePaletteId, setActivePaletteId] = useState<string | null>(null);
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const dragOffsetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Save notes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    } catch {}
  }, [notes]);

  // Create a new note
  const addNote = () => {
    sound.tick();
    const colors: StickyColor[] = ['yellow', 'purple', 'mint', 'blue', 'peach'];
    const chosenColor = colors[notes.length % colors.length];

    // Compute spawn position: offset cascade
    const cascadeOffset = (notes.length % 5) * 35;
    const spawnX = Math.min(window.innerWidth - 260, Math.max(40, 60 + cascadeOffset));
    const spawnY = Math.min(window.innerHeight - 280, Math.max(120, 160 + cascadeOffset));
    const randomTilt = Math.round((Math.random() * 3 - 1.5) * 10) / 10; // -1.5deg to 1.5deg

    const newNote: StickyNoteItem = {
      id: `sticky_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      text: '',
      color: chosenColor,
      x: spawnX,
      y: spawnY,
      rotation: randomTilt,
    };

    setNotes((prev) => [...prev, newNote]);
  };

  // Expose trigger to parent
  useEffect(() => {
    if (onRegisterAddNoteTrigger) {
      onRegisterAddNoteTrigger(addNote);
    }
  }, [notes.length]);

  const updateText = (id: string, text: string) => {
    setNotes((prev) =>
      prev.map((note) => (note.id === id ? { ...note, text } : note))
    );
  };

  const updateColor = (id: string, color: StickyColor) => {
    sound.tick();
    setNotes((prev) =>
      prev.map((note) => (note.id === id ? { ...note, color } : note))
    );
    setActivePaletteId(null);
  };

  const deleteNote = (id: string) => {
    sound.strike();
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  // Dragging logic
  const handlePointerDown = (e: React.PointerEvent, id: string) => {
    // Bring note to front
    setNotes((prev) => {
      const target = prev.find((n) => n.id === id);
      if (!target) return prev;
      return [...prev.filter((n) => n.id !== id), target];
    });

    const note = notes.find((n) => n.id === id);
    if (!note) return;

    dragOffsetRef.current = {
      x: e.clientX - note.x,
      y: e.clientY - note.y,
    };
    setDraggingId(id);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!draggingId) return;

    const newX = Math.max(10, Math.min(window.innerWidth - 240, e.clientX - dragOffsetRef.current.x));
    const newY = Math.max(60, Math.min(window.innerHeight - 200, e.clientY - dragOffsetRef.current.y));

    setNotes((prev) =>
      prev.map((note) => (note.id === draggingId ? { ...note, x: newX, y: newY } : note))
    );
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (draggingId) {
      try {
        (e.target as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {}
      setDraggingId(null);
    }
  };

  return (
    <div
      className="fixed inset-0 pointer-events-none z-20 overflow-hidden"
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      {notes.map((note) => {
        const cfg = COLOR_CONFIGS[note.color] || COLOR_CONFIGS.yellow;
        const isDragging = draggingId === note.id;

        return (
          <div
            key={note.id}
            style={{
              transform: `translate3d(${note.x}px, ${note.y}px, 0px) rotate(${isDragging ? 0 : note.rotation}deg)`,
              transition: isDragging ? 'none' : 'transform 150ms ease-out',
            }}
            className={`absolute top-0 left-0 w-60 sm:w-64 min-h-[180px] rounded-2xl border ${cfg.bg} ${cfg.border} ${cfg.shadow} pointer-events-auto flex flex-col overflow-hidden select-none group`}
          >
            {/* Top Drag & Action Bar */}
            <div
              onPointerDown={(e) => handlePointerDown(e, note.id)}
              className={`px-3 py-2 flex items-center justify-between cursor-grab active:cursor-grabbing ${cfg.header} border-b border-black/[0.04]`}
            >
              <div className="flex items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                <GripHorizontal size={14} className={cfg.text} />
                <span className={`text-[10px] font-mono uppercase font-semibold tracking-wider ${cfg.text}`}>
                  Note
                </span>
              </div>

              <div className="flex items-center gap-1">
                {/* Palette Dropdown Toggle */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActivePaletteId(activePaletteId === note.id ? null : note.id);
                    }}
                    className={`p-1 rounded-md hover:bg-black/10 transition-colors opacity-70 hover:opacity-100 ${cfg.text}`}
                    title="Change note color"
                  >
                    <Palette size={13} />
                  </button>

                  {/* Palette Dot Picker */}
                  {activePaletteId === note.id && (
                    <div className="absolute right-0 top-6 z-30 p-1.5 rounded-xl bg-white/95 backdrop-blur-xl border border-black/10 shadow-xl flex items-center gap-1">
                      {COLOR_KEYS.map((c) => (
                        <button
                          key={c}
                          type="button"
                          onClick={() => updateColor(note.id, c)}
                          className={`w-4 h-4 rounded-full border border-black/10 transition-colors hover:brightness-110 ${
                            COLOR_CONFIGS[c].badge
                          } ${note.color === c ? 'ring-2 ring-black/40' : ''}`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Delete Note Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteNote(note.id);
                  }}
                  className={`p-1 rounded-md hover:bg-rose-500/20 hover:text-rose-600 transition-colors opacity-70 hover:opacity-100 ${cfg.text}`}
                  title="Delete note"
                >
                  <Trash2 size={13} />
                </button>
              </div>
            </div>

            {/* Note Content Area */}
            <div className="flex-1 p-3 flex flex-col">
              <textarea
                value={note.text}
                onChange={(e) => updateText(note.id, e.target.value)}
                placeholder="Type a thought, reminder, or quick note..."
                rows={5}
                className={`w-full flex-1 bg-transparent resize-none focus:outline-none focus:ring-1 focus:ring-accent text-xs sm:text-sm font-sans leading-relaxed ${cfg.text} ${cfg.placeholder}`}
              />
            </div>

            {/* Bottom Subtle Corner Fold / Status */}
            <div className="px-3 pb-2 flex items-center justify-between text-[10px] font-sans opacity-40">
              <span className={cfg.text}>
                {note.text.trim() ? `${note.text.trim().split(/\s+/).length} words` : 'Empty note'}
              </span>
              <span className="text-[9px] font-mono">⌘ Sticky</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
