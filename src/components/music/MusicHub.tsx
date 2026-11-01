import React, { useState, useEffect, useRef } from 'react';
import {
  Headphones,
  Plus,
  Trash2,
  ExternalLink,
  X,
  Play,
  Square,
  ChevronRight,
  ChevronDown,
  Sparkles,
  Music,
  CheckCircle2,
  AlertCircle,
  Minimize2,
  Maximize2,
  Radio,
  Volume2,
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { MusicItem, MusicSourceType } from '../../types';
import { parseMusicUrl } from '../../utils/musicParser';
import { sound } from '../../audio/sound';

const QUICK_CATEGORIES = [
  'Deep Work',
  'Lofi & Chill',
  'Ambient & Drone',
  'Coding Flow',
  'Binaural & Alpha',
  'Night Wind-down',
];

export const MusicHub: React.FC = () => {
  const {
    musicItems,
    activeMusicId,
    setActiveMusicId,
    addMusicItem,
    deleteMusicItem,
    isMusicDrawerOpen,
    setIsMusicDrawerOpen,
  } = useData();

  // Add form state
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState('');
  const [inputTitle, setInputTitle] = useState('');
  const [inputCategory, setInputCategory] = useState('Deep Work');
  const [urlDetection, setUrlDetection] = useState<{
    valid: boolean;
    sourceType?: MusicSourceType;
    defaultTitle?: string;
    itemType?: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Filter state
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  // Floating dock collapsed / minimized state
  const [isMiniDockHidden, setIsMiniDockHidden] = useState(false);

  const activeItem = musicItems.find((item) => item.id === activeMusicId) || null;

  // Real-time URL validation and parsing
  useEffect(() => {
    if (!inputUrl.trim()) {
      setUrlDetection(null);
      setErrorMessage(null);
      return;
    }
    const parsed = parseMusicUrl(inputUrl);
    if (parsed) {
      setUrlDetection({
        valid: true,
        sourceType: parsed.sourceType,
        defaultTitle: parsed.defaultTitle,
        itemType: parsed.itemType,
      });
      setErrorMessage(null);
      if (!inputTitle.trim()) {
        setInputTitle(parsed.defaultTitle);
      }
    } else {
      setUrlDetection({ valid: false });
      setErrorMessage('Please enter a valid Spotify or YouTube URL');
    }
  }, [inputUrl]);

  // Handle escape key to close drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMusicDrawerOpen) {
        setIsMusicDrawerOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMusicDrawerOpen, setIsMusicDrawerOpen]);

  const handleOpenDrawer = () => {
    sound.tick();
    setIsMusicDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    sound.tick();
    setIsMusicDrawerOpen(false);
  };

  const handleSaveTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputUrl.trim()) return;

    const res = addMusicItem({
      url: inputUrl,
      title: inputTitle.trim() || undefined,
      category: inputCategory.trim() || 'General',
    });

    if (res.success) {
      setInputUrl('');
      setInputTitle('');
      setIsAddFormOpen(false);
      setErrorMessage(null);
    } else if (res.error) {
      setErrorMessage(res.error);
    }
  };

  const categories = Array.from(
    new Set(musicItems.map((item) => item.category || 'General'))
  );

  const filteredItems = selectedFilter === 'all'
    ? musicItems
    : musicItems.filter((item) => (item.category || 'General') === selectedFilter);

  return (
    <>
      {/* ============================================================== */}
      {/* 1. PERSISTENT FLOATING MINI-DOCK (Bottom-Right)                */}
      {/* ============================================================== */}
      <aside
        aria-label="Audio player mini dock"
        className={`fixed bottom-5 right-5 z-40 transition-all duration-300 ${
          isMusicDrawerOpen ? 'opacity-0 pointer-events-none translate-y-3' : 'opacity-100'
        }`}
      >
        {isMiniDockHidden ? (
          /* Minimized circular trigger */
          <button
            type="button"
            onClick={() => {
              sound.tick();
              setIsMiniDockHidden(false);
            }}
            className="w-11 h-11 rounded-2xl bg-cosmic-surface/90 backdrop-blur-xl border border-white/[0.08] text-white hover:text-white shadow-sm flex items-center justify-center transition-all group"
            title="Show Audio Mini Dock"
          >
            <Headphones size={18} className="text-zinc-300 group-hover:text-zinc-300 transition-colors" />
            {activeItem && (
              <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-forest animate-pulse" />
            )}
          </button>
        ) : (
          /* Sleek horizontal glass dock */
          <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-cosmic-surface/90 backdrop-blur-2xl border border-white/[0.08] shadow-sm text-white">
            {/* Visualizer / Source Indicator */}
            <div
              onClick={handleOpenDrawer}
              className="flex items-center gap-2 cursor-pointer group"
              title="Click to open Focus Audio Hub"
            >
              <div className="w-8 h-8 rounded-xl bg-white/[0.08] border border-white/[0.15] flex items-center justify-center text-zinc-300 group-hover:border-white/[0.2]/60 transition-colors">
                {activeItem ? (
                  activeItem.sourceType === 'spotify' ? (
                    <span className="text-[#1DB954] font-bold text-xs">♫</span>
                  ) : (
                    <span className="text-[#FF0000] font-bold text-xs">▶</span>
                  )
                ) : (
                  <Headphones size={14} className="text-zinc-300" />
                )}
              </div>

              {/* Live animated audio waves when active */}
              {activeItem && (
                <div className="flex items-end gap-0.5 h-3.5 px-0.5" title="Playing">
                  <span className="w-0.5 h-full bg-forest rounded-full animate-bounce [animation-duration:800ms]" />
                  <span className="w-0.5 h-2.5 bg-forest rounded-full animate-bounce [animation-duration:550ms]" />
                  <span className="w-0.5 h-3 bg-forest rounded-full animate-bounce [animation-duration:950ms]" />
                  <span className="w-0.5 h-1.5 bg-forest rounded-full animate-bounce [animation-duration:650ms]" />
                </div>
              )}

              {/* Title & Category Info */}
              <div className="max-w-[130px] sm:max-w-[170px] truncate text-left">
                <p className="text-xs font-medium text-white truncate">
                  {activeItem ? activeItem.title : 'Focus Audio'}
                </p>
                <p className="text-[10px] text-zinc-400 truncate">
                  {activeItem ? (activeItem.category || 'Soundtrack') : 'Add Spotify / YouTube'}
                </p>
              </div>
            </div>

            {/* Quick Action Controls */}
            <div className="flex items-center gap-1 pl-1 border-l border-white/[0.08]">
              {activeItem && (
                <button
                  type="button"
                  onClick={() => setActiveMusicId(null)}
                  className="p-1.5 text-zinc-400 hover:text-rose-400 hover:bg-white/[0.06] rounded-lg transition-colors"
                  title="Stop playback"
                >
                  <Square size={12} fill="currentColor" />
                </button>
              )}

              <button
                type="button"
                onClick={handleOpenDrawer}
                className="p-1.5 text-zinc-300 hover:text-white hover:bg-white/[0.08] rounded-lg transition-colors"
                title="Expand Audio Hub"
              >
                <Maximize2 size={13} />
              </button>

              <button
                type="button"
                onClick={() => {
                  sound.tick();
                  setIsMiniDockHidden(true);
                }}
                className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors"
                title="Minimize Mini Dock"
              >
                <Minimize2 size={13} />
              </button>
            </div>
          </div>
        )}
      </aside>

      {/* ============================================================== */}
      {/* 2. PERSISTENT SLIDE-OVER DRAWER (Never unmounts iframe!)       */}
      {/* ============================================================== */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-cosmic-void/70 backdrop-blur-sm transition-opacity duration-300 ${
          isMusicDrawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleCloseDrawer}
      />

      {/* Drawer Container */}
      <aside
        aria-label="Focus Audio & Playlists Drawer"
        className={`fixed inset-y-0 right-0 z-50 w-full sm:w-[480px] bg-cosmic-surface/95 backdrop-blur-2xl border-l border-white/10 shadow-modal flex flex-col transition-transform duration-300 ease-out ${
          isMusicDrawerOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
      >
        {/* Drawer Header */}
        <div className="px-6 pt-7 md:pt-8 pb-4 border-b border-white/[0.08] flex items-center justify-between flex-shrink-0 bg-cosmic-void/40">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/[0.08] border border-white/[0.2] flex items-center justify-center text-zinc-300 shadow-sm">
              <Headphones size={18} />
            </div>
            <div>
              <h2 className="text-sm font-heading font-semibold text-white flex items-center gap-2">
                Focus Audio &amp; Soundtracks
              </h2>
              <p className="text-[11px] text-zinc-400 font-sans">
                Spotify &amp; YouTube Embed Sanctuary
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handleCloseDrawer}
              className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/[0.08] rounded-xl transition-colors"
              title="Close drawer (Esc)"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
          {/* Active Player Card */}
          <div className="rounded-2xl bg-cosmic-deep/80 border border-white/[0.08] p-4 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-3">
              <div className="flex items-center gap-2">
                <Radio size={14} className="text-zinc-300 animate-pulse" />
                <span className="text-xs font-semibold text-white tracking-wide uppercase font-mono">
                  {activeItem ? 'Now Playing' : 'Player Inactive'}
                </span>
              </div>

              {activeItem && (
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-mono uppercase font-bold ${
                      activeItem.sourceType === 'spotify'
                        ? 'bg-[#1DB954]/20 text-[#1DB954] border border-[#1DB954]/30'
                        : 'bg-[#FF0000]/20 text-[#FF4444] border border-[#FF0000]/30'
                    }`}
                  >
                    {activeItem.sourceType}
                  </span>

                  <a
                    href={activeItem.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1 text-zinc-400 hover:text-zinc-300 transition-colors"
                    title="Open in native app / browser"
                  >
                    <ExternalLink size={13} />
                  </a>

                  <button
                    type="button"
                    onClick={() => setActiveMusicId(null)}
                    className="p-1 text-zinc-400 hover:text-rose-400 transition-colors"
                    title="Stop playback"
                  >
                    <Square size={13} fill="currentColor" />
                  </button>
                </div>
              )}
            </div>

            {/* Embed Container (Kept in DOM so audio never reloads on toggle) */}
            {activeItem ? (
              <div className="w-full">
                {activeItem.sourceType === 'spotify' ? (
                  <iframe
                    title={activeItem.title}
                    src={activeItem.embedUrl}
                    width="100%"
                    height={activeItem.itemType === 'track' ? '152' : '352'}
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="rounded-xl shadow-sm border border-white/[0.08]"
                  />
                ) : (
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/[0.08] shadow-sm bg-black">
                    <iframe
                      title={activeItem.title}
                      src={activeItem.embedUrl}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                )}

                <div className="mt-3 flex items-center justify-between text-xs text-zinc-400">
                  <span className="truncate font-medium text-white">
                    {activeItem.title}
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-zinc-300 flex-shrink-0 ml-2">
                    {activeItem.category || 'Focus'}
                  </span>
                </div>
              </div>
            ) : (
              <div className="py-8 text-center space-y-2">
                <div className="w-12 h-12 mx-auto rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-400">
                  <Music size={20} />
                </div>
                <p className="text-xs font-medium text-white">
                  No Soundtrack Playing
                </p>
                <p className="text-[11px] text-zinc-400 max-w-xs mx-auto">
                  Select a saved soundtrack below or add a new Spotify/YouTube link to set your vibe.
                </p>
              </div>
            )}
          </div>

          {/* Add New Soundtrack Section */}
          <div className="rounded-2xl bg-cosmic-deep/50 border border-white/[0.08] p-4 space-y-3">
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => {
                  sound.tick();
                  setIsAddFormOpen(!isAddFormOpen);
                }}
                className="w-full flex items-center justify-between text-xs font-semibold text-white hover:text-white transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Plus size={14} className="text-zinc-300" />
                  <span>Add Soundtrack or Playlist</span>
                </span>
                <ChevronDown
                  size={14}
                  className={`text-zinc-400 transition-transform duration-200 ${
                    isAddFormOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>

            {isAddFormOpen && (
              <form onSubmit={handleSaveTrack} className="pt-2 space-y-3 border-t border-white/[0.06]">
                <div>
                  <label className="block text-[11px] font-sans text-zinc-400 mb-1">
                    Spotify or YouTube URL <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={inputUrl}
                    onChange={(e) => setInputUrl(e.target.value)}
                    placeholder="e.g. https://open.spotify.com/playlist/... or https://youtu.be/..."
                    className="w-full px-3 py-2 text-xs rounded-xl bg-white/[0.04] border border-white/[0.1] text-white placeholder:text-paper-faint focus:outline-none focus:ring-1 focus:ring-white focus:border-white/60"
                  />

                  {/* Realtime detection status */}
                  {urlDetection && (
                    <div className="mt-1.5 flex items-center gap-1.5 text-[11px]">
                      {urlDetection.valid ? (
                        <>
                          <CheckCircle2 size={12} className="text-forest" />
                          <span className="text-forest">
                            {urlDetection.sourceType === 'spotify'
                              ? `Spotify ${urlDetection.itemType || 'Audio'} detected`
                              : `YouTube ${urlDetection.itemType || 'Video'} detected`}
                          </span>
                        </>
                      ) : (
                        <>
                          <AlertCircle size={12} className="text-rose-400" />
                          <span className="text-rose-400">{errorMessage || 'Invalid URL'}</span>
                        </>
                      )}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-sans text-zinc-400 mb-1">
                    Custom Title (Optional)
                  </label>
                  <input
                    type="text"
                    value={inputTitle}
                    onChange={(e) => setInputTitle(e.target.value)}
                    placeholder="e.g. Deep Coding Flow, Lofi Beats, Binaural Study"
                    className="w-full px-3 py-2 text-xs rounded-xl bg-white/[0.04] border border-white/[0.1] text-white placeholder:text-paper-faint focus:outline-none focus:ring-1 focus:ring-white focus:border-white/60"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-sans text-zinc-400 mb-1.5">
                    Category Tag
                  </label>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {QUICK_CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => {
                          sound.tick();
                          setInputCategory(cat);
                        }}
                        className={`text-[10px] px-2 py-1 rounded-lg border transition-all ${
                          inputCategory === cat
                            ? 'bg-accent/25 border-white/[0.2] text-zinc-300 font-medium'
                            : 'bg-white/[0.03] border-white/[0.08] text-zinc-400 hover:text-white'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                  <input
                    type="text"
                    value={inputCategory}
                    onChange={(e) => setInputCategory(e.target.value)}
                    placeholder="Or type custom category..."
                    className="w-full px-3 py-1.5 text-xs rounded-xl bg-white/[0.04] border border-white/[0.1] text-white placeholder:text-paper-faint focus:outline-none focus:ring-1 focus:ring-white focus:border-white/60"
                  />
                </div>

                <div className="pt-1 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      sound.tick();
                      setIsAddFormOpen(false);
                      setInputUrl('');
                      setInputTitle('');
                    }}
                    className="px-3 py-1.5 text-xs font-sans text-zinc-400 hover:text-white"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={!urlDetection?.valid}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-sans font-medium text-white bg-white text-zinc-950 hover:bg-zinc-200 font-semibold shadow-md disabled:opacity-40 disabled:cursor-not-allowed rounded-xl shadow-sm transition-all"
                  >
                    <Plus size={13} />
                    <span>Save &amp; Play</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Saved Soundtracks Library */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-semibold text-white font-heading flex items-center gap-1.5">
                <span>Soundtrack Library</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.06] text-zinc-400 font-mono">
                  {musicItems.length}
                </span>
              </h3>

              {categories.length > 1 && (
                <div className="flex items-center gap-1 overflow-x-auto max-w-[200px] no-scrollbar">
                  <button
                    type="button"
                    onClick={() => {
                      sound.tick();
                      setSelectedFilter('all');
                    }}
                    className={`text-[10px] px-2 py-0.5 rounded-full transition-colors ${
                      selectedFilter === 'all'
                        ? 'bg-accent/25 text-zinc-300 font-medium'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        sound.tick();
                        setSelectedFilter(cat);
                      }}
                      className={`text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap transition-colors ${
                        selectedFilter === cat
                          ? 'bg-accent/25 text-zinc-300 font-medium'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* List or Empty State */}
            {filteredItems.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-white/[0.1] p-8 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-zinc-300">
                  <Sparkles size={20} />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-white">
                    {musicItems.length === 0
                      ? 'No soundtracks added yet'
                      : 'No soundtracks in this category'}
                  </p>
                  <p className="text-[11px] text-zinc-400 max-w-xs mx-auto">
                    {musicItems.length === 0
                      ? 'Paste your favorite Spotify playlist or YouTube study stream above to build your focus soundtrack.'
                      : 'Select another filter above or add a new track to this category.'}
                  </p>
                </div>

                {musicItems.length === 0 && (
                  <button
                    type="button"
                    onClick={() => {
                      sound.tick();
                      setIsAddFormOpen(true);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans text-zinc-300 bg-white/[0.08] hover:bg-accent/30 border border-white/[0.2] rounded-xl transition-all"
                  >
                    <Plus size={13} />
                    <span>Add First Link</span>
                  </button>
                )}
              </div>
            ) : (
              <div className="space-y-2">
                {filteredItems.map((item) => {
                  const isActive = item.id === activeMusicId;
                  return (
                    <div
                      key={item.id}
                      className={`group flex items-center justify-between p-3 rounded-xl border transition-all ${
                        isActive
                          ? 'bg-accent/15 border-white/[0.2] shadow-sm'
                          : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.12]'
                      }`}
                    >
                      <div
                        onClick={() => {
                          sound.tick();
                          setActiveMusicId(item.id);
                        }}
                        className="flex items-center gap-3 min-w-0 flex-1 cursor-pointer"
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs flex-shrink-0 ${
                            item.sourceType === 'spotify'
                              ? 'bg-[#1DB954]/15 text-[#1DB954] border border-[#1DB954]/25'
                              : 'bg-[#FF0000]/15 text-[#FF4444] border border-[#FF0000]/25'
                          }`}
                        >
                          {isActive ? (
                            <Play size={13} className="text-forest fill-current animate-pulse" />
                          ) : (
                            item.sourceType === 'spotify' ? '♫' : '▶'
                          )}
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className={`text-xs font-medium truncate ${
                            isActive ? 'text-zinc-300 font-semibold' : 'text-white'
                          }`}>
                            {item.title}
                          </p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[10px] text-zinc-400">
                              {item.category || 'Focus'}
                            </span>
                            <span className="text-[9px] text-paper-faint uppercase font-mono">
                              • {item.sourceType}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 pl-2">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 text-zinc-400 hover:text-zinc-300 rounded-lg transition-colors"
                          title="Open original link"
                        >
                          <ExternalLink size={13} />
                        </a>

                        <button
                          type="button"
                          onClick={() => {
                            if (window.confirm(`Delete "${item.title}" from your library?`)) {
                              deleteMusicItem(item.id);
                            }
                          }}
                          className="p-1.5 text-zinc-400 hover:text-rose-400 rounded-lg transition-colors"
                          title="Delete soundtrack"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-white/[0.08] bg-cosmic-void/40 flex items-center justify-between text-[11px] text-zinc-400">
          <div className="flex items-center gap-1.5">
            <Volume2 size={13} className="text-zinc-300" />
            <span>Persistent Playback Enabled</span>
          </div>
          <span className="text-[10px] font-mono text-paper-faint">
            Private &amp; Offline-Ready
          </span>
        </div>
      </aside>
    </>
  );
};
