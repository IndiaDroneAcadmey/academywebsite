import React, { useEffect, useMemo, useState } from 'react';

interface ImageItem {
  src: string;
  alt: string;
}

const images: ImageItem[] = [
  { src: 'https://indiadroneacademy.s3.ap-south-1.amazonaws.com/IMG_4132.jpg', alt: 'Why IDA - 1' },
  { src: 'https://indiadroneacademy.s3.ap-south-1.amazonaws.com/DSC07447.JPG', alt: 'Why IDA - 2' },
  { src: '/whyida2.jpg', alt: 'Why IDA - 3' },
  { src: 'https://indiadroneacademy.s3.ap-south-1.amazonaws.com/DSC07433.JPG', alt: 'Why IDA - 4' },
  { src: '/whyida4.jpg', alt: 'Why IDA - 5' },
  { src: '/whyida5.jpg', alt: 'Why IDA - 6' },
  { src: 'https://indiadroneacademy.s3.ap-south-1.amazonaws.com/DSC07510.JPG', alt: 'Why IDA - 7' },
  { src: 'https://indiadroneacademy.s3.ap-south-1.amazonaws.com/Screenshot+2025-10-22+125732.png', alt: 'Workshop - 1' },
  { src: 'https://indiadroneacademy.s3.ap-south-1.amazonaws.com/Screenshot+2025-10-22+125919.png', alt: 'Workshop - 2' },
  { src: '/training-intern.jpg', alt: 'Training Intern' },
  { src: 'https://indiadroneacademy.s3.ap-south-1.amazonaws.com/Screenshot+2025-10-22+130015.png', alt: 'Team' },
  { src: '/school.png', alt: 'school' },
  { src: 'https://indiadroneacademy.s3.ap-south-1.amazonaws.com/IMG_3853.JPG', alt: '' },
  { src: 'https://indiadroneacademy.s3.ap-south-1.amazonaws.com/IMG_3959.JPG', alt: '' },
  { src: 'https://indiadroneacademy.s3.ap-south-1.amazonaws.com/IMG_4006.JPG', alt: '' },
  { src: 'https://indiadroneacademy.s3.ap-south-1.amazonaws.com/IMG_9921.JPG', alt: '' },
  { src: 'https://indiadroneacademy.s3.ap-south-1.amazonaws.com/IMG_9925.JPG', alt: '' },
  { src: 'https://indiadroneacademy.s3.ap-south-1.amazonaws.com/IMG_9942.JPG', alt: '' },
  { src: 'https://indiadroneacademy.s3.ap-south-1.amazonaws.com/IMG_20250920_103005.jpg', alt: '' },
  { src: 'https://indiadroneacademy.s3.ap-south-1.amazonaws.com/IMG_9966.JPG', alt: '' },
  { src: 'https://indiadroneacademy.s3.ap-south-1.amazonaws.com/IMG_9952.JPG', alt: '' },
  { src: 'https://indiadroneacademy.s3.ap-south-1.amazonaws.com/IMG_9949.JPG', alt: '' },
   { src: 'https://indiadroneacademy.s3.ap-south-1.amazonaws.com/MM089.jpg', alt: '' },
   { src: 'https://indiadroneacademy.s3.ap-south-1.amazonaws.com/MM082.jpg', alt: '' },
   { src: 'https://indiadroneacademy.s3.ap-south-1.amazonaws.com/MM033.jpg', alt: '' },
   { src: 'https://indiadroneacademy.s3.ap-south-1.amazonaws.com/MM009.jpg', alt: '' },
   { src: 'https://indiadroneacademy.s3.ap-south-1.amazonaws.com/IMG_20250920_104623.jpg', alt: '' },
   { src: 'https://indiadroneacademy.s3.ap-south-1.amazonaws.com/IMG_20250920_104443.jpg', alt: '' },
   { src: 'https://indiadroneacademy.s3.ap-south-1.amazonaws.com/MM036.jpg', alt: '' },
];

/* ---------- helpers ---------- */
async function bakeThumbWatermark(
  src: string,
  targetW = 1200,
  targetH = 675,
  logoSrc = '/logonew.png'  // Path to your logo image for watermark
): Promise<string> {
  const res = await fetch(src, { mode: 'cors', cache: 'force-cache' });
  if (!res.ok || res.type === 'opaque') throw new Error('CORS blocked');
  const bmp = await createImageBitmap(await res.blob());

  // Cover scaling
  const scale = Math.max(targetW / bmp.width, targetH / bmp.height);
  const drawW = Math.round(bmp.width * scale);
  const drawH = Math.round(bmp.height * scale);
  const dx = Math.round((targetW - drawW) / 2); // center crop
  const dy = Math.round((targetH - drawH) / 2);

  const c = document.createElement('canvas'); c.width = targetW; c.height = targetH;
  const ctx = c.getContext('2d')!;

  // Draw the image
  ctx.drawImage(bmp, dx, dy, drawW, drawH);

  // Add watermark (logo image)
  const logo = new Image();
  logo.src = logoSrc;
  await new Promise((resolve) => {
    logo.onload = resolve;
  });

  // Calculate watermark size (20% of image width)
  const logoWidth = Math.min(targetW * 0.2, logo.width);
  const logoHeight = (logoWidth / logo.width) * logo.height;

  // Position watermark at bottom-right corner with margin
  const margin = 16;
  const x = targetW - logoWidth - margin;
  const y = targetH - logoHeight - margin;

  ctx.globalAlpha = 0.65;
  ctx.drawImage(logo, x, y, logoWidth, logoHeight);  // Draw watermark logo

  return c.toDataURL('image/png');
}

/** Full-size bake (used in popup/download) */
async function bakeFullWatermark(src: string, logoSrc = '/logonew.png'): Promise<string> {
  const res = await fetch(src, { mode: 'cors', cache: 'force-cache' });
  if (!res.ok || res.type === 'opaque') throw new Error('CORS blocked');
  const bmp = await createImageBitmap(await res.blob());

  const W = bmp.width, H = bmp.height;
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const ctx = c.getContext('2d')!;

  // Draw the image
  ctx.drawImage(bmp, 0, 0, W, H);

  // Add watermark (logo image)
  const logo = new Image();
  logo.src = logoSrc;
  await new Promise((resolve) => {
    logo.onload = resolve;
  });

  // Calculate watermark size (20% of image width)
  const logoWidth = Math.min(W * 0.2, logo.width);
  const logoHeight = (logoWidth / logo.width) * logo.height;

  // Position watermark at bottom-right corner with margin
  const margin = 16;
  const x = W - logoWidth - margin;
  const y = H - logoHeight - margin;

  ctx.globalAlpha = 0.65;
  ctx.drawImage(logo, x, y, logoWidth, logoHeight);  // Draw watermark logo

  return c.toDataURL('image/png');
}

/* ---------- thumb card ---------- */
const Thumb: React.FC<{ item: ImageItem; onOpen: (src: string, alt: string, index: number) => void }> = ({ item, onOpen }) => {
  const [thumbSrc, setThumbSrc] = useState<string>(''); // 16:9 baked
  const [fullSrc, setFullSrc] = useState<string>('');   // original aspect baked
  const [fallback, setFallback] = useState<boolean>(false);

  useEffect(() => {
    let cancelled = false;
    bakeThumbWatermark(item.src, 1200, 675)
      .then((url) => !cancelled && setThumbSrc(url))
      .catch(() => { if (!cancelled) { setThumbSrc(item.src); setFallback(true); } });
    bakeFullWatermark(item.src)
      .then((url) => !cancelled && setFullSrc(url))
      .catch(() => !cancelled && setFullSrc(''));
    return () => { cancelled = true; };
  }, [item.src]);

  return (
    <div className="relative cursor-pointer group" onClick={() => onOpen(fullSrc || thumbSrc || item.src, item.alt, 0)}>
      {/* Keep a consistent visible shape (16:9) */}
      <div className="aspect-video w-full overflow-hidden rounded-lg">
        <img
          src={thumbSrc || item.src}
          alt={item.alt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      {/* If baking failed (CORS), show overlay so at least it’s visible in-grid */}
      {fallback && (
        <span className="pointer-events-none absolute bottom-2 right-2 bg-black/60 text-white font-semibold text-[10px] xs:text-xs sm:text-sm px-2 py-1 rounded">
          India Drone Academy
        </span>
      )}
    </div>
  );
};

const GalleryPage: React.FC = () => {
  const [selected, setSelected] = useState<{ src: string; alt: string } | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const downloadName = useMemo(
    () => (selected?.alt ? selected.alt.replace(/\s+/g, '_') + '.png' : 'image.png'),
    [selected]
  );

  const openImage = (src: string, alt: string, index: number) => {
    setSelected({ src, alt });
    setCurrentIndex(index);
  };

  const goToNext = () => {
    if (currentIndex < images.length - 1) {
      const newIndex = currentIndex + 1;
      const newImage = images[newIndex];

      setCurrentIndex(newIndex);
      setSelected({ src: newImage.src, alt: newImage.alt });

      // Apply watermark immediately after navigating
      bakeFullWatermark(newImage.src).then((url) => {
        setSelected((prevSelected) => ({
          ...prevSelected!,
          src: url, // Update src with watermarked version
        }));
      });
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      const newImage = images[newIndex];

      setCurrentIndex(newIndex);
      setSelected({ src: newImage.src, alt: newImage.alt });

      // Apply watermark immediately after navigating
      bakeFullWatermark(newImage.src).then((url) => {
        setSelected((prevSelected) => ({
          ...prevSelected!,
          src: url, // Update src with watermarked version
        }));
      });
    }
  };

  // Handle keyboard arrow navigation
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      }
    };

    // Add event listener for keydown
    window.addEventListener('keydown', handleKeydown);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [currentIndex]);

  return (
    <div className="min-h-screen bg-white px-4 py-10 md:px-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">India Drone Academy Gallery</h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          Explore memorable moments from our drone training sessions, workshops, and campus activities.
          Each image reflects our commitment to hands-on learning and excellence in UAV education.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <Thumb key={idx} item={img} onOpen={(src, alt, index) => openImage(src, alt, index)} />
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img src={selected.src} alt={selected.alt} className="max-w-full max-h-[80vh] rounded-lg border-4 border-white shadow-xl" />
            <div className="mt-3 flex gap-3">
              <a href={selected.src} download={downloadName} className="inline-block bg-black text-white px-3 py-1 rounded text-sm">
                Download
              </a>
              <button onClick={() => setSelected(null)} className="inline-block bg-white text-black px-3 py-1 rounded text-sm">
                Close
              </button>
            </div>

            <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4">
              <button onClick={goToPrevious} className="text-white text-3xl">&#10094;</button>
              <button onClick={goToNext} className="text-white text-3xl">&#10095;</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
