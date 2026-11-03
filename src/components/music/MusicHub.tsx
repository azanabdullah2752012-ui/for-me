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
  Upload,
  FolderOpen,
  FileAudio,
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { MusicItem, MusicSourceType } from '../../types';
import { parseMusicUrl } from '../../utils/musicParser';
import { sound } from '../../audio/sound';

const QUICK_CATEGORIES = [
  'Deep Work',
  'Lofi & Chill',
  'Custom Audio',
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
  const [addMode, setAddMode] = useState<'url' | 'upload'>('url');
  const [inputUrl, setInputUrl] = useState('');
  const [inputTitle, setInputTitle] = useState('');
  const [inputCategory, setInputCategory] = useState('Deep Work');
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [urlDetection, setUrlDetection] = useState<{
    valid: boolean;
    sourceType?: MusicSourceType;
    defaultTitle?: string;
    itemType?: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Hidden file input ref
  const fileInputRef = useRef<HTMLInputElement | null>(null);

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
      setErrorMessage('Please enter a valid Spotify, YouTube, or direct audio link (.mp3, .wav, .m4a, stream)');
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

  // Handle local file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const blobUrl = URL.createObjectURL(file);
    const cleanTitle = file.name.replace(/\.[^/.]+$/, '');
    const sizeMb = (file.size / (1024 * 1024)).toFixed(2);

    const res = addMusicItem({
      url: blobUrl,
      title: cleanTitle,
      category: inputCategory || 'Custom Audio',
      notes: `Uploaded file: ${file.name} (${sizeMb} MB)`,
    });

    if (res.success) {
      sound.complete();
      setUploadedFileName(file.name);
      setIsAddFormOpen(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
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
                  ) : activeItem.sourceType === 'youtube' ? (
                    <span className="text-[#FF0000] font-bold text-xs">▶</span>
                  ) : (
                    <span className="text-purple-400 font-bold text-xs">🎵</span>
                  )
                ) : (
                  <Headphones size={14} className="text-zinc-300" />
                )}
              </div>

              {/* Live animated audio waves when active */}
              {activeItem && (
                <div className="flex items-end gap-0.5 h-3.5 px-0.5" title="Playing">
                  <span className="w-0.5 h-full bg-[#E56A38] rounded-full animate-eq-1" />
                  <span className="w-0.5 h-full bg-[#E56A38] rounded-full animate-eq-2" />
                  <span className="w-0.5 h-full bg-amber-400 rounded-full animate-eq-3" />
                  <span className="w-0.5 h-full bg-[#E56A38] rounded-full animate-eq-4" />
                </div>
              )}

              {/* Title & Category Info */}
              <div className="max-w-[130px] sm:max-w-[170px] truncate text-left">
                <p className="text-xs font-medium text-white truncate">
                  {activeItem ? activeItem.title : 'Focus Audio'}
                </p>
                <p className="text-[10px] text-zinc-400 truncate">
                  {activeItem ? (activeItem.category || 'Soundtrack') : 'Add Custom Audio / Stream'}
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
      {/* 2. PERSISTENT SLIDE-OVER DRAWER (Never unmounts iframe/audio)   */}
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
            <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 shadow-sm">
              <Headphones size={18} />
            </div>
            <div>
              <h2 className="text-sm font-heading font-semibold text-white flex items-center gap-2">
                Focus Audio &amp; Soundtracks
              </h2>
              <p className="text-[11px] text-zinc-400 font-sans">
                Custom Audio, MP3s, Spotify &amp; YouTube
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
                <Radio size={14} className="text-purple-400 animate-pulse" />
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
                        : activeItem.sourceType === 'youtube'
                        ? 'bg-[#FF0000]/20 text-[#FF4444] border border-[#FF0000]/30'
                        : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                    }`}
                  >
                    {activeItem.sourceType === 'file' ? 'Local MP3' : activeItem.sourceType}
                  </span>

                  {activeItem.url.startsWith('http') && (
                    <a
                      href={activeItem.url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1 text-zinc-400 hover:text-zinc-300 transition-colors"
                      title="Open in native app / browser"
                    >
                      <ExternalLink size={13} />
                    </a>
                  )}

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

            {/* Embed / Audio Container (Kept in DOM so audio never reloads on toggle) */}
            {activeItem ? (
              <div className="w-full">
                {activeItem.sourceType === 'spotify' ? (
                  <div className="space-y-2">
                    <iframe
                      title={activeItem.title}
                      src={activeItem.embedUrl}
                      width="100%"
                      height={activeItem.itemType === 'track' ? '152' : '352'}
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      className="rounded-xl shadow-lg border border-white/[0.12]"
                    />
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[11px]">
                      <span className="text-zinc-300 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#1DB954] animate-pulse" />
                        <span>Tap <b>Play</b> inside Spotify player</span>
                      </span>
                      <a
                        href={activeItem.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#1DB954]/20 hover:bg-[#1DB954]/30 border border-[#1DB954]/40 text-[#1DB954] font-bold transition-all shrink-0"
                      >
                        <span>Open on Spotify</span>
                        <ExternalLink size={11} />
                      </a>
                    </div>
                  </div>
                ) : activeItem.sourceType === 'youtube' ? (
                  <div className="space-y-2">
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/[0.12] shadow-lg bg-black">
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
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[11px]">
                      <span className="text-zinc-300 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span>Tap <b>Play</b> on video above to start stream</span>
                      </span>
                      <a
                        href={activeItem.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-red-600/20 hover:bg-red-600/30 border border-red-500/40 text-red-300 font-bold transition-all shrink-0"
                      >
                        <span>Open on YouTube</span>
                        <ExternalLink size={11} />
                      </a>
                    </div>
                  </div>
                ) : (
                  /* Custom Audio & Local File HTML5 Player */
                  <div className="p-4 rounded-xl bg-gradient-to-br from-purple-950/40 via-zinc-900/80 to-zinc-950 border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.18)] space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 text-lg shadow-sm">
                        🎵
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-white truncate">
                          {activeItem.title}
                        </p>
                        <p className="text-[10px] text-purple-300/80 font-mono">
                          {activeItem.sourceType === 'file' ? 'Local Custom Audio (Browser Native)' : 'Direct Audio Stream'}
                        </p>
                      </div>
                    </div>

                    <div className="pt-1">
                      <audio
                        key={activeItem.embedUrl}
                        controls
                        autoPlay
                        loop
                        src={activeItem.embedUrl}
                        className="w-full h-10 rounded-lg accent-[#E56A38] bg-zinc-900"
                      />
                    </div>

                    <div className="flex items-center justify-between pt-1 text-[10px] text-zinc-400">
                      <div className="flex items-end gap-1 h-3.5">
                        <span className="w-1 h-full bg-[#E56A38] rounded-full animate-eq-1" />
                        <span className="w-1 h-full bg-[#E56A38] rounded-full animate-eq-2" />
                        <span className="w-1 h-full bg-amber-400 rounded-full animate-eq-3" />
                        <span className="w-1 h-full bg-[#E56A38] rounded-full animate-eq-4" />
                        <span className="w-1 h-full bg-amber-500 rounded-full animate-eq-5" />
                      </div>
                      <span className="font-mono text-amber-400/90">Continuous Loop Active</span>
                    </div>
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
                  Select a saved soundtrack below, upload your own MP3, or paste a link to set your vibe.
                </p>
              </div>
            )}
          </div>

          {/* Add New Soundtrack / Upload Custom Audio Section */}
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
                  <Plus size={14} className="text-purple-400" />
                  <span>Add Custom Audio, MP3, or Stream</span>
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
              <div className="pt-2 space-y-3 border-t border-white/[0.06]">
                {/* Mode Selector Tabs */}
                <div className="flex items-center gap-2 p-1 bg-zinc-900/80 rounded-xl border border-white/10">
                  <button
                    type="button"
                    onClick={() => {
                      sound.tick();
                      setAddMode('url');
                    }}
                    className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all ${
                      addMode === 'url'
                        ? 'bg-purple-600 text-white shadow-sm'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Paste URL / Stream
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      sound.tick();
                      setAddMode('upload');
                    }}
                    className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                      addMode === 'upload'
                        ? 'bg-purple-600 text-white shadow-sm'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Upload size={13} />
                    <span>Upload Local MP3</span>
                  </button>
                </div>

                {addMode === 'upload' ? (
                  /* Local File Upload Dropzone */
                  <div className="space-y-3">
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-purple-500/40 hover:border-purple-400 bg-purple-950/20 hover:bg-purple-950/30 rounded-2xl p-6 text-center cursor-pointer transition-all group"
                    >
                      <div className="w-12 h-12 mx-auto rounded-2xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 group-hover:scale-105 transition-transform mb-2">
                        <FileAudio size={22} />
                      </div>
                      <p className="text-xs font-bold text-white">
                        Click to select an audio file from your computer
                      </p>
                      <p className="text-[11px] text-zinc-400 mt-1">
                        Supports MP3, WAV, M4A, OGG, AAC, FLAC (Immediate browser playback)
                      </p>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="audio/*"
                        className="hidden"
                        onChange={handleFileUpload}
                      />
                    </div>

                    {uploadedFileName && (
                      <div className="flex items-center gap-2 p-2.5 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs">
                        <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                        <span className="truncate">Loaded: {uploadedFileName}</span>
                      </div>
                    )}
                  </div>
                ) : (
                  /* URL Input Form */
                  <form onSubmit={handleSaveTrack} className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-sans text-zinc-400 mb-1">
                        Audio Link (Spotify, YouTube, or Direct .mp3 Stream) <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={inputUrl}
                        onChange={(e) => setInputUrl(e.target.value)}
                        placeholder="e.g. https://files.com/song.mp3 or Spotify/YouTube URL"
                        className="w-full px-3 py-2 text-xs rounded-xl bg-white/[0.04] border border-white/[0.1] text-white placeholder:text-paper-faint focus:outline-none focus:ring-1 focus:ring-purple-400 focus:border-purple-500/60"
                      />

                      {/* Realtime detection status */}
                      {urlDetection && (
                        <div className="mt-1.5 flex items-center gap-1.5 text-[11px]">
                          {urlDetection.valid ? (
                            <>
                              <CheckCircle2 size={12} className="text-forest" />
                              <span className="text-forest font-medium">
                                {urlDetection.sourceType === 'spotify'
                                  ? `Spotify ${urlDetection.itemType || 'Audio'} detected`
                                  : urlDetection.sourceType === 'youtube'
                                  ? `YouTube ${urlDetection.itemType || 'Video'} detected`
                                  : `Direct Audio Stream / Track detected`}
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
                        placeholder="e.g. My Chill Flow, Deep Coding Beat"
                        className="w-full px-3 py-2 text-xs rounded-xl bg-white/[0.04] border border-white/[0.1] text-white placeholder:text-paper-faint focus:outline-none focus:ring-1 focus:ring-purple-400 focus:border-purple-500/60"
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
                                ? 'bg-purple-600/30 border-purple-400 text-purple-300 font-semibold'
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
                        className="w-full px-3 py-1.5 text-xs rounded-xl bg-white/[0.04] border border-white/[0.1] text-white placeholder:text-paper-faint focus:outline-none focus:ring-1 focus:ring-purple-400"
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
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-sans font-medium text-white bg-purple-600 hover:bg-purple-500 font-semibold shadow-md disabled:opacity-40 disabled:cursor-not-allowed rounded-xl transition-all"
                      >
                        <Plus size={13} />
                        <span>Save &amp; Play</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
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
                        ? 'bg-purple-600/30 border border-purple-400 text-purple-300 font-semibold'
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
                          ? 'bg-purple-600/30 border border-purple-400 text-purple-300 font-semibold'
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
                      ? 'Upload your own MP3 or paste Spotify/YouTube study streams above to build your sanctuary audio.'
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
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans text-purple-300 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/40 rounded-xl transition-all font-semibold"
                  >
                    <Plus size={13} />
                    <span>Add First Audio</span>
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
                          ? 'bg-purple-950/40 border-purple-500/40 shadow-sm'
                          : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.12]'
                      }`}
                    >
                      <div
                        onClick={() => {
                          sound.tick();
                          setActiveMusicId(item.id);
                          setIsMusicDrawerOpen(true);
                        }}
                        className="flex items-center gap-3 min-w-0 flex-1 cursor-pointer"
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs flex-shrink-0 ${
                            item.sourceType === 'spotify'
                              ? 'bg-[#1DB954]/15 text-[#1DB954] border border-[#1DB954]/25'
                              : item.sourceType === 'youtube'
                              ? 'bg-[#FF0000]/15 text-[#FF4444] border border-[#FF0000]/25'
                              : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                          }`}
                        >
                          {isActive ? (
                            <Play size={13} className="text-emerald-400 fill-current animate-pulse" />
                          ) : item.sourceType === 'spotify' ? (
                            '♫'
                          ) : item.sourceType === 'youtube' ? (
                            '▶'
                          ) : (
                            '🎵'
                          )}
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className={`text-xs font-medium truncate ${
                            isActive ? 'text-purple-300 font-bold' : 'text-white'
                          }`}>
                            {item.title}
                          </p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[10px] text-zinc-400">
                              {item.category || 'Focus'}
                            </span>
                            <span className="text-[9px] text-purple-400/80 uppercase font-mono font-bold">
                              • {item.sourceType === 'file' ? 'Local MP3' : item.sourceType}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 pl-2">
                        {item.url.startsWith('http') && (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 text-zinc-400 hover:text-zinc-300 rounded-lg transition-colors"
                            title="Open original link"
                          >
                            <ExternalLink size={13} />
                          </a>
                        )}

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
            <Volume2 size={13} className="text-purple-400" />
            <span>Persistent Playback Enabled</span>
          </div>
          <span className="text-[10px] font-mono text-purple-300 font-semibold">
            Custom Audio Ready
          </span>
        </div>
      </aside>
    </>
  );
};

