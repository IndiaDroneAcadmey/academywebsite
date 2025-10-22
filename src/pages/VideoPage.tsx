import React, { useState } from 'react';

interface VideoItem {
  url: string;
  title: string;
}

const videos: VideoItem[] = [
  { url: 'https://youtu.be/gJgU3C2lRBQ?si=vRvV4lx77AbFU-Wf', title: 'Video 1: Drone Training Overview' },
  { url: 'https://youtu.be/rTvNj8a1za0?si=_MruX5d81SqC6oUB', title: 'Video 2: UAV Technology in Action' },
  { url: 'https://youtu.be/HpzQq4Eb_Uo?si=VLnwmtyI0WGlf0_7', title: 'Video 3: Future of Drone Services' },
  { url: 'https://youtu.be/nv0KfNWg9v8', title: 'Video 4: Drone Pilots Training Session' },
  { url: 'https://youtu.be/nsOzmDQBMKU', title: 'Video 5: How Drones are Transforming Industries' },
  { url: 'https://youtu.be/ecpXVrm-YiQ', title: 'Video 6: Introduction to Drone Technology' },
  { url: '5Jm8A3aw6O4', title: 'Video 7: Drone Applications in Agriculture' },
];

// Extract a YouTube video ID from various URL formats or return the input if it's already an ID
const getYouTubeId = (input: string): string => {
  try {
    // If it's already a clean ID (11 chars common), return as-is
    if (/^[a-zA-Z0-9_-]{10,}$/.test(input) && !input.includes('http')) {
      return input;
    }

    const url = new URL(input);
    // youtu.be/<id>
    if (url.hostname.includes('youtu.be')) {
      return url.pathname.replace('/', '').split('/')[0];
    }
    // youtube.com/watch?v=<id>
    const v = url.searchParams.get('v');
    if (v) return v;
    // youtube.com/embed/<id>
    const parts = url.pathname.split('/');
    const embedIndex = parts.indexOf('embed');
    if (embedIndex !== -1 && parts[embedIndex + 1]) {
      return parts[embedIndex + 1];
    }
  } catch {
    // If constructing URL fails, fall through and return input trimmed of extra params
  }
  // Remove common extra params if present
  return input.split('?')[0].split('&')[0];
};

const VideoPage: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleVideoSelect = (url: string) => {
    setSelectedVideo(getYouTubeId(url));
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10 md:px-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">India Drone Academy - Video Gallery</h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          Watch informative videos on drone training, technology, and more. Stay updated with the latest in UAV education.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map((video, idx) => (
          <div key={idx} className="relative cursor-pointer group" onClick={() => handleVideoSelect(video.url)}>
            <div className="aspect-video w-full overflow-hidden rounded-lg bg-black">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${getYouTubeId(video.url)}?rel=0&modestbranding=1`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <span className="pointer-events-none absolute bottom-2 left-2 bg-black/60 text-white font-semibold text-[10px] xs:text-xs sm:text-sm px-2 py-1 rounded">
              {video.title}
            </span>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={() => setSelectedVideo(null)}>
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <iframe
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0&modestbranding=1`}
              title="Selected Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setSelectedVideo(null)}
              className="inline-block bg-white text-black px-3 py-1 rounded text-sm mt-3"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPage;
