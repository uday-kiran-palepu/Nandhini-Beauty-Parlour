import { useState, useEffect } from "react";
import hero from "@/assets/hero.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import about from "@/assets/about.jpg";

export const HERO_SLIDES = [
  { src: hero, alt: "Nandhini Signature Bridal Makeup, Kakinada", label: "Bridal Makeup" },
  { src: g1, alt: "Bridal Elegance and Makeover Artistry", label: "Bridal Elegance" },
  { src: g2, alt: "Intricate Bridal Hairstyling with Florals", label: "Bridal Hair Artistry" },
  { src: g3, alt: "Traditional Hand Mehndi Design", label: "Bridal Mehndi" },
  { src: g5, alt: "Glamorous Party and Occasion Makeup", label: "Party Glamour" },
  { src: g6, alt: "Royal Saree Draping & Styling", label: "Saree Draping" },
  { src: about, alt: "Professional Bridal Makeover Styling", label: "Signature Artistry" },
];

export function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Preload all slideshow images on mount
  useEffect(() => {
    HERO_SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = slide.src;
    });
  }, []);

  // Smooth slideshow changing approximately every 1.2 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 1300);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <div
      className="relative mx-auto w-full max-w-[270px] sm:max-w-[304px] lg:max-w-[336px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Bridal makeovers gallery slideshow"
    >
      {/* Subtle warm glow behind container */}
      <div
        className="pointer-events-none absolute -inset-3 rounded-3xl bg-[color:var(--gold-soft)]/30 blur-2xl transition-opacity duration-700"
        aria-hidden="true"
      />

      {/* Fixed aspect ratio container preventing any layout shift */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border-2 border-[color:var(--gold-soft)] bg-[color:var(--muted)] shadow-xl">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                width={800}
                height={1000}
                className={`h-full w-full object-cover object-center transition-transform duration-1000 ease-out ${
                  isActive ? "scale-100" : "scale-[1.03]"
                }`}
                loading={idx === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          );
        })}

        {/* Minimal pill overlay */}
        <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between rounded-lg bg-black/50 px-3 py-1.5 backdrop-blur-md border border-white/20 text-white">
          <div className="text-xs font-medium tracking-wide">
            {HERO_SLIDES[currentIndex].label}
          </div>
          <div className="flex items-center gap-1 text-[10px] text-white/80">
            <span>{currentIndex + 1}</span>
            <span>/</span>
            <span>{HERO_SLIDES.length}</span>
          </div>
        </div>
      </div>

      {/* Ornate corner accent pill */}
      <div className="absolute -top-3 -right-3 z-20 rounded-full border border-[color:var(--gold-soft)] bg-white px-3.5 py-1 shadow-md">
        <span className="font-serif text-xs font-medium text-[color:var(--burgundy)] tracking-wide">
          100% Real Work
        </span>
      </div>
    </div>
  );
}
