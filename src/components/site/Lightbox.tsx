import { useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type LightboxImage = {
  src: string;
  title: string;
  category: string;
};

type Props = {
  images: LightboxImage[];
  activeIndex: number | null;
  onClose: () => void;
  onChangeIndex: (newIndex: number) => void;
};

export function Lightbox({ images, activeIndex, onClose, onChangeIndex }: Props) {
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") {
        onChangeIndex((activeIndex! - 1 + images.length) % images.length);
      } else if (e.key === "ArrowRight") {
        onChangeIndex((activeIndex! + 1) % images.length);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeIndex, images.length, onChangeIndex, onClose]);

  if (activeIndex === null || !images[activeIndex]) return null;

  const current = images[activeIndex];

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      // Swiped left -> next
      onChangeIndex((activeIndex + 1) % images.length);
    } else if (diff < -50) {
      // Swiped right -> prev
      onChangeIndex((activeIndex - 1 + images.length) % images.length);
    }
    touchStartX.current = null;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top action bar */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 text-white">
        <div className="text-sm font-light text-white/80">
          <span className="font-medium text-white">{current.category}</span> ·{" "}
          <span>{current.title}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-white/70">
            {activeIndex + 1} / {images.length}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close lightbox"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Prev button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onChangeIndex((activeIndex - 1 + images.length) % images.length);
        }}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/40 p-2 text-white hover:bg-white/20 transition-colors focus:outline-none"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Main Image */}
      <div
        className="relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={current.src}
          alt={current.title}
          className="max-h-[85vh] max-w-[90vw] object-contain shadow-2xl"
        />
      </div>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onChangeIndex((activeIndex + 1) % images.length);
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/40 p-2 text-white hover:bg-white/20 transition-colors focus:outline-none"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}
