/**
 * FOR ME — Sanctuary YouTube Audio Service & Parser
 * Handles YouTube video and playlist URL parsing, ID extraction,
 * metadata curation, and persistent library management.
 */

export interface YouTubeItem {
  id: string;
  title: string;
  type: 'video' | 'playlist' | 'video_in_playlist';
  videoId?: string;
  playlistId?: string;
  url: string;
  channel?: string;
  thumbnailUrl?: string;
  isCurated?: boolean;
  createdAt: string;
}

export interface ParsedYouTubeInput {
  type: 'video' | 'playlist' | 'video_in_playlist';
  videoId?: string;
  playlistId?: string;
  cleanUrl: string;
}

/**
 * Extracts video ID and/or playlist ID from virtually any YouTube URL format:
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://youtu.be/VIDEO_ID
 * - https://www.youtube.com/playlist?list=PLAYLIST_ID
 * - https://www.youtube.com/watch?v=VIDEO_ID&list=PLAYLIST_ID
 * - https://www.youtube.com/live/VIDEO_ID
 * - https://www.youtube.com/embed/VIDEO_ID
 * - Direct IDs
 */
export function parseYouTubeUrl(input: string): ParsedYouTubeInput | null {
  if (!input || typeof input !== 'string') return null;
  const trimmed = input.trim();

  let videoId: string | undefined;
  let playlistId: string | undefined;

  // 1. Check for list= parameter
  const listMatch = trimmed.match(/[?&]list=([a-zA-Z0-9_-]+)/);
  if (listMatch && listMatch[1]) {
    playlistId = listMatch[1];
  }

  // 2. Check for video ID patterns
  // Pattern A: standard watch?v= or watch?.*&v=
  const vMatch = trimmed.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (vMatch && vMatch[1]) {
    videoId = vMatch[1];
  }

  // Pattern B: youtu.be/VIDEO_ID
  if (!videoId) {
    const shortMatch = trimmed.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
    if (shortMatch && shortMatch[1]) {
      videoId = shortMatch[1];
    }
  }

  // Pattern C: youtube.com/live/VIDEO_ID, /embed/VIDEO_ID, /v/VIDEO_ID, /shorts/VIDEO_ID
  if (!videoId) {
    const pathMatch = trimmed.match(/youtube\.com\/(?:live|embed|v|shorts)\/([a-zA-Z0-9_-]{11})/);
    if (pathMatch && pathMatch[1]) {
      videoId = pathMatch[1];
    }
  }

  // Pattern D: Direct 11-char ID (if user just pasted ID)
  if (!videoId && !playlistId && /^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    videoId = trimmed;
  }

  // Pattern E: Direct playlist ID (e.g. starts with PL, RD, UU, etc.)
  if (!videoId && !playlistId && /^(?:PL|RD|UU|FL|OLAK5uy_)[a-zA-Z0-9_-]+$/.test(trimmed)) {
    playlistId = trimmed;
  }

  if (!videoId && !playlistId) {
    return null;
  }

  let type: 'video' | 'playlist' | 'video_in_playlist' = 'video';
  if (playlistId && videoId) {
    type = 'video_in_playlist';
  } else if (playlistId) {
    type = 'playlist';
  }

  return {
    type,
    videoId,
    playlistId,
    cleanUrl: trimmed,
  };
}

/**
 * Standard thumbnail URL generator for YouTube videos
 */
export function getYouTubeThumbnail(videoId?: string): string {
  if (!videoId) {
    return 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=600&auto=format&fit=crop';
  }
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

/**
 * Curated high-vibe focus streams & playlists (Ready out of the box)
 */
export const CURATED_YOUTUBE_STREAMS: YouTubeItem[] = [
  {
    id: 'lofi-girl-main',
    title: 'Lofi Girl — Beats to Relax / Study to',
    type: 'video',
    videoId: 'jfKfPfyJRdk',
    url: 'https://www.youtube.com/watch?v=jfKfPfyJRdk',
    channel: 'Lofi Girl',
    thumbnailUrl: 'https://img.youtube.com/vi/jfKfPfyJRdk/hqdefault.jpg',
    isCurated: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'synthwave-chilledcow',
    title: 'Synthwave Radio — Chill Beats to Code & Chill',
    type: 'video',
    videoId: '4xDzrJKXOOY',
    url: 'https://www.youtube.com/watch?v=4xDzrJKXOOY',
    channel: 'Lofi Girl / Synthwave Boy',
    thumbnailUrl: 'https://img.youtube.com/vi/4xDzrJKXOOY/hqdefault.jpg',
    isCurated: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'deep-focus-ambient',
    title: 'Deep Focus Ambient — Flow State Alpha Waves',
    type: 'video',
    videoId: 'lTRiuFIWV54',
    url: 'https://www.youtube.com/watch?v=lTRiuFIWV54',
    channel: 'Greenred Productions',
    thumbnailUrl: 'https://img.youtube.com/vi/lTRiuFIWV54/hqdefault.jpg',
    isCurated: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'peaceful-piano-solitude',
    title: 'Peaceful Piano & Soft Rain — Gentle Solitude',
    type: 'video',
    videoId: '1WUEk0R79_Q',
    url: 'https://www.youtube.com/watch?v=1WUEk0R79_Q',
    channel: 'Quiet Quest',
    thumbnailUrl: 'https://img.youtube.com/vi/1WUEk0R79_Q/hqdefault.jpg',
    isCurated: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'classical-focus-mozart',
    title: 'Classical Focus — Mozart, Beethoven, Bach',
    type: 'video',
    videoId: 'WPni755-Krg',
    url: 'https://www.youtube.com/watch?v=WPni755-Krg',
    channel: 'HALIDONMUSIC',
    thumbnailUrl: 'https://img.youtube.com/vi/WPni755-Krg/hqdefault.jpg',
    isCurated: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'cozy-coffee-shop-lofi',
    title: 'Cozy Coffee Shop Lofi — Rainy Night Ambience',
    type: 'video',
    videoId: '-5KAN9_CzSA',
    url: 'https://www.youtube.com/watch?v=-5KAN9_CzSA',
    channel: 'Calmed by Nature',
    thumbnailUrl: 'https://img.youtube.com/vi/-5KAN9_CzSA/hqdefault.jpg',
    isCurated: true,
    createdAt: new Date().toISOString(),
  },
];
