import { MusicSourceType, MusicItemType } from '../types';

export interface ParsedMusicResult {
  sourceType: MusicSourceType;
  itemType: MusicItemType;
  embedUrl: string;
  defaultTitle: string;
}

/**
 * Parses raw Spotify or YouTube URLs into playable embed structures
 */
export function parseMusicUrl(rawUrl: string): ParsedMusicResult | null {
  if (!rawUrl || typeof rawUrl !== 'string') return null;
  const trimmed = rawUrl.trim();
  if (!trimmed) return null;

  // 1. Spotify parsing
  // Matches:
  // - https://open.spotify.com/(track|playlist|album|artist|episode|show)/ID
  // - spotify:(track|playlist|album|artist|episode|show):ID
  const spotifyWebMatch = trimmed.match(
    /(?:https?:\/\/)?open\.spotify\.com\/(track|playlist|album|artist|episode|show)\/([a-zA-Z0-9]+)/i
  );
  if (spotifyWebMatch) {
    const rawType = spotifyWebMatch[1].toLowerCase();
    const type = (rawType === 'show' ? 'episode' : rawType) as MusicItemType;
    const id = spotifyWebMatch[2];
    const capitalized = type.charAt(0).toUpperCase() + type.slice(1);
    return {
      sourceType: 'spotify',
      itemType: type,
      embedUrl: `https://open.spotify.com/embed/${rawType}/${id}?utm_source=generator&theme=0`,
      defaultTitle: `Spotify ${capitalized}`,
    };
  }

  const spotifyUriMatch = trimmed.match(
    /^spotify:(track|playlist|album|artist|episode|show):([a-zA-Z0-9]+)/i
  );
  if (spotifyUriMatch) {
    const rawType = spotifyUriMatch[1].toLowerCase();
    const type = (rawType === 'show' ? 'episode' : rawType) as MusicItemType;
    const id = spotifyUriMatch[2];
    const capitalized = type.charAt(0).toUpperCase() + type.slice(1);
    return {
      sourceType: 'spotify',
      itemType: type,
      embedUrl: `https://open.spotify.com/embed/${rawType}/${id}?utm_source=generator&theme=0`,
      defaultTitle: `Spotify ${capitalized}`,
    };
  }

  // 2. YouTube parsing
  try {
    const fullUrl = trimmed.startsWith('http://') || trimmed.startsWith('https://')
      ? trimmed
      : `https://${trimmed}`;
    const parsed = new URL(fullUrl);
    const host = parsed.hostname.toLowerCase();

    if (
      host === 'youtube.com' ||
      host === 'www.youtube.com' ||
      host === 'm.youtube.com' ||
      host === 'music.youtube.com' ||
      host === 'youtu.be'
    ) {
      const listId = parsed.searchParams.get('list');

      // Short URL: youtu.be/VIDEO_ID
      if (host === 'youtu.be') {
        const videoId = parsed.pathname.replace(/^\//, '').split('/')[0];
        if (videoId) {
          const embedUrl = listId
            ? `https://www.youtube.com/embed/${videoId}?list=${encodeURIComponent(listId)}&autoplay=1`
            : `https://www.youtube.com/embed/${videoId}?autoplay=1`;
          return {
            sourceType: 'youtube',
            itemType: listId ? 'playlist' : 'video',
            embedUrl,
            defaultTitle: listId ? 'YouTube Playlist' : 'YouTube Video',
          };
        }
      }

      // Standalone Playlist: youtube.com/playlist?list=LIST_ID
      if (parsed.pathname.includes('/playlist') && listId) {
        return {
          sourceType: 'youtube',
          itemType: 'playlist',
          embedUrl: `https://www.youtube.com/embed/videoseries?list=${encodeURIComponent(listId)}&autoplay=1`,
          defaultTitle: 'YouTube Playlist',
        };
      }

      // Shorts: youtube.com/shorts/VIDEO_ID
      if (parsed.pathname.includes('/shorts/')) {
        const videoId = parsed.pathname.split('/shorts/')[1]?.split('/')[0]?.split('?')[0];
        if (videoId) {
          return {
            sourceType: 'youtube',
            itemType: 'video',
            embedUrl: `https://www.youtube.com/embed/${videoId}?autoplay=1`,
            defaultTitle: 'YouTube Short',
          };
        }
      }

      // Live: youtube.com/live/VIDEO_ID
      if (parsed.pathname.includes('/live/')) {
        const videoId = parsed.pathname.split('/live/')[1]?.split('/')[0]?.split('?')[0];
        if (videoId) {
          return {
            sourceType: 'youtube',
            itemType: 'video',
            embedUrl: `https://www.youtube.com/embed/${videoId}?autoplay=1`,
            defaultTitle: 'YouTube Live Stream',
          };
        }
      }

      // Standard Watch: youtube.com/watch?v=VIDEO_ID
      const videoId = parsed.searchParams.get('v');
      if (videoId) {
        const embedUrl = listId
          ? `https://www.youtube.com/embed/${videoId}?list=${encodeURIComponent(listId)}&autoplay=1`
          : `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        return {
          sourceType: 'youtube',
          itemType: listId ? 'playlist' : 'video',
          embedUrl,
          defaultTitle: listId ? 'YouTube Playlist' : 'YouTube Video',
        };
      }

      // Already an embed link: youtube.com/embed/VIDEO_ID
      if (parsed.pathname.includes('/embed/')) {
        return {
          sourceType: 'youtube',
          itemType: 'video',
          embedUrl: trimmed,
          defaultTitle: 'YouTube Video',
        };
      }
    }

    // 3. Direct Audio Stream / Custom Audio URL (.mp3, .wav, .ogg, .m4a, .aac, .flac)
    const audioExtensions = ['.mp3', '.wav', '.ogg', '.m4a', '.aac', '.flac'];
    const lowerPath = parsed.pathname.toLowerCase();
    const isDirectAudio = audioExtensions.some((ext) => lowerPath.endsWith(ext)) || lowerPath.includes('/audio') || lowerPath.includes('/stream');

    if (isDirectAudio || trimmed.startsWith('blob:') || trimmed.startsWith('data:audio/')) {
      const fileName = parsed.pathname.split('/').filter(Boolean).pop() || 'Custom Audio';
      const cleanTitle = decodeURIComponent(fileName).replace(/\.[^/.]+$/, '');
      return {
        sourceType: trimmed.startsWith('blob:') ? 'file' : 'custom',
        itemType: 'track',
        embedUrl: trimmed,
        defaultTitle: cleanTitle || 'Custom Audio Track',
      };
    }
  } catch {
    return null;
  }

  // Fallback for direct audio file URLs without protocol
  if (/\.(mp3|wav|ogg|m4a|aac|flac)($|\?)/i.test(trimmed)) {
    const full = trimmed.startsWith('http') ? trimmed : `https://${trimmed}`;
    return {
      sourceType: 'custom',
      itemType: 'track',
      embedUrl: full,
      defaultTitle: 'Custom Audio Track',
    };
  }

  return null;
}
