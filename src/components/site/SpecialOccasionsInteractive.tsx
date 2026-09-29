import { useState, useRef, useEffect, useCallback } from "react";
import { SERVICES, type Service } from "@/lib/services";
import { BookingDialog } from "./BookingDialog";
import { Button } from "@/components/ui/button";
import { Sparkles, MessageCircle, Calendar, ArrowRight } from "lucide-react";

export function SpecialOccasionsInteractive() {
  const [activeId, setActiveId] = useState<string>(SERVICES[0]?.id || "bridal-makeups");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const categories = [
    "All",
    "Special Packages",
    "Bridal & Makeover",
    "Hair & Styling",
    "Hands, Feet & Skin",
    "Essential Care",
  ];

  const filteredServices =
    selectedCategory === "All"
      ? SERVICES
      : SERVICES.filter((s) => s.category === selectedCategory);

  const activeService: Service =
    SERVICES.find((s) => s.id === activeId) || SERVICES[0];

  // Helper to smoothly scroll a specific card into container center
  const scrollToCard = useCallback((id: string, smooth = true) => {
    const container = containerRef.current;
    const cardEl = cardRefs.current.get(id);
    if (!container || !cardEl) return;

    const containerRect = container.getBoundingClientRect();
    const cardRect = cardEl.getBoundingClientRect();
    const cardCenter = cardRect.top + cardRect.height / 2;
    const contCenter = containerRect.top + containerRect.height / 2;
    const offset = cardCenter - contCenter;

    if (Math.abs(offset) > 2) {
      container.scrollBy({
        top: offset,
        behavior: smooth ? "smooth" : "auto",
      });
    }
  }, []);

  // Detect which card is centered in the scroll container
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId: number | null = null;
    let scrollTimeout: NodeJS.Timeout | null = null;

    const checkCenteredCard = () => {
      const containerRect = container.getBoundingClientRect();
      const contCenter = containerRect.top + containerRect.height / 2;

      let closestId = activeId;
      let minDistance = Infinity;

      cardRefs.current.forEach((el, id) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - contCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestId = id;
        }
      });

      // Only update when the closest card is within the center alignment threshold
      if (closestId && closestId !== activeId && minDistance < 55) {
        setActiveId(closestId);
      }
    };

    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(checkCenteredCard);

      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(checkCenteredCard, 60);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      container.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [activeId]);

  // Click card to center it and set active
  function handleCardClick(service: Service) {
    setActiveId(service.id);
    scrollToCard(service.id, true);
  }

  function getWhatsAppUrl(service: Service) {
    const text = encodeURIComponent(
      `Hi Nandhini Beauty Parlour, I would like to book "${service.name}" (Discounted Price: ₹${service.discountedPrice}). Please let me know available slots.`
    );
    return `https://wa.me/918688768911?text=${text}`;
  }

  return (
    <div className="space-y-6">
      {/* Category Pills Filter */}
      <div className="flex flex-wrap items-center justify-center gap-2 pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              const firstInCat =
                cat === "All"
                  ? SERVICES[0]
                  : SERVICES.find((s) => s.category === cat);
              if (firstInCat) {
                setActiveId(firstInCat.id);
                if (containerRef.current) {
                  containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
                }
              }
            }}
            className={`rounded-full px-4 py-1.5 text-xs font-medium tracking-wide transition-all ${
              selectedCategory === cat
                ? "bg-[color:var(--burgundy)] text-white shadow-sm"
                : "border border-[color:var(--border)] bg-white text-foreground/80 hover:bg-[color:var(--muted)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main 2-Section Interactive Layout */}
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Section: Round Circle Service Image (Sticky on Desktop) */}
        <div className="lg:col-span-6 lg:sticky lg:top-28 flex flex-col items-center justify-center">
          {/* Circular Frame */}
          <div className="relative flex items-center justify-center">
            {/* Subtle luxury ambient gold glow */}
            <div className="absolute inset-0 rounded-full bg-[color:var(--gold-soft)]/40 blur-3xl pointer-events-none" />

            <div className="relative h-60 w-60 sm:h-76 sm:w-76 lg:h-80 lg:w-80 xl:h-96 xl:w-96 rounded-full border-4 sm:border-[6px] border-[color:var(--gold)] p-1.5 shadow-2xl bg-white overflow-hidden transition-all duration-500">
              <img
                key={activeService.image}
                src={activeService.image}
                alt={activeService.name}
                className="h-full w-full rounded-full object-cover object-center transition-all duration-700 ease-in-out scale-100 hover:scale-105 animate-in fade-in zoom-in-95"
              />
            </div>

            {/* Special package badge on circle */}
            {activeService.isSpecialPackage && (
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 rounded-full bg-[color:var(--burgundy)] text-white px-3 py-1 text-[11px] font-semibold tracking-wider uppercase shadow-md flex items-center gap-1">
                <Sparkles className="h-3 w-3 text-[color:var(--gold)]" />
                Special Package
              </div>
            )}
          </div>

          {/* Active Service Title & Pricing Preview Under Circle (Updates ONLY with fully visible centered card) */}
          <div className="mt-4 text-center space-y-1 max-w-sm px-2">
            <span className="text-[11px] uppercase tracking-widest text-[color:var(--gold)] font-semibold">
              {activeService.category}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[color:var(--charcoal)] font-medium leading-tight">
              {activeService.name}
            </h3>
            <div className="flex items-center justify-center gap-2.5 pt-1">
              <span className="text-sm text-muted-foreground line-through">
                ₹{activeService.originalPrice}
              </span>
              <span className="font-serif text-2xl font-bold text-[color:var(--burgundy)]">
                ₹{activeService.discountedPrice}
              </span>
              <span className="rounded-full bg-emerald-50 text-emerald-700 px-2 py-0.5 text-[10px] font-bold border border-emerald-200">
                Special Offer
              </span>
            </div>
            <p className="text-xs text-muted-foreground line-clamp-2 pt-1">
              {activeService.description}
            </p>
          </div>
        </div>

        {/* Right Section: 3-Card Visible Viewport (Half Top Card, Full Center Card, Top Half Upcoming Card) */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start w-full">
          <div className="w-full max-w-[420px] mx-auto lg:mx-0 text-xs text-muted-foreground pb-2 flex items-center justify-between">
            <span>Showing {filteredServices.length} Services & Packages</span>
            <span>Scroll or tap to center card</span>
          </div>

          {/* 
            Scrollable Cards Viewport:
            - Card height = 220px, Gap = 16px (gap-4)
            - Container height = (0.5 * 220) + 16 + 220 + 16 + (0.5 * 220) = 472px
            - Padding top & bottom = (0.5 * 220) + 16 = 126px
            - CSS Snap ensures centered alignment
          */}
          <div
            ref={containerRef}
            className="w-full max-w-[420px] mx-auto lg:mx-0 h-[472px] overflow-y-auto pt-[126px] pb-[126px] flex flex-col gap-4 snap-y snap-mandatory scroll-smooth pr-1.5 focus:outline-none"
            style={{ scrollbarWidth: "thin" }}
          >
            {filteredServices.map((service) => {
              const isSelected = service.id === activeId;
              return (
                <div
                  key={service.id}
                  ref={(el) => {
                    if (el) cardRefs.current.set(service.id, el);
                    else cardRefs.current.delete(service.id);
                  }}
                  onClick={() => handleCardClick(service)}
                  className={`group cursor-pointer rounded-2xl border p-4 sm:p-5 transition-all duration-300 relative flex flex-col justify-between h-[220px] shrink-0 snap-center snap-always ${
                    isSelected
                      ? "border-2 border-[color:var(--burgundy)] bg-white shadow-xl ring-2 ring-[color:var(--burgundy)]/20 scale-100 opacity-100 z-10"
                      : "border-[color:var(--border)] bg-white/80 opacity-60 hover:opacity-85 scale-[0.97] shadow-sm hover:border-[color:var(--gold)]"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-0.5 flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[10px] uppercase tracking-wider text-[color:var(--gold)] font-bold">
                            {service.category}
                          </span>
                          {service.isSpecialPackage && (
                            <span className="rounded-full bg-[color:var(--burgundy)]/10 text-[color:var(--burgundy)] text-[9px] font-semibold px-2 py-0.5">
                              Special Package
                            </span>
                          )}
                        </div>

                        <h4 className="font-serif text-lg sm:text-xl text-[color:var(--charcoal)] font-medium leading-snug line-clamp-1">
                          {service.name}
                        </h4>
                      </div>

                      {/* Price Block */}
                      <div className="text-right shrink-0">
                        <div className="text-xs text-muted-foreground line-through">
                          ₹{service.originalPrice}
                        </div>
                        <div className="font-serif text-lg sm:text-xl font-bold text-[color:var(--burgundy)]">
                          ₹{service.discountedPrice}
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Action Buttons Row */}
                  <div className="pt-2.5 border-t border-[color:var(--border)]/60 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 text-xs text-[color:var(--burgundy)] font-medium">
                      <span className={isSelected ? "font-semibold" : "opacity-80"}>
                        {isSelected ? "Active Card" : "Tap to view"}
                      </span>
                      <ArrowRight className={`h-3 w-3 transition-transform ${isSelected ? "translate-x-0.5" : "group-hover:translate-x-1"}`} />
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={getWhatsAppUrl(service)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="rounded-full bg-white border border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-3 py-1 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
                      >
                        <MessageCircle className="h-3.5 w-3.5 text-emerald-600" />
                        <span>WhatsApp Us</span>
                      </a>

                      <BookingDialog
                        defaultService={service.name}
                        trigger={
                          <Button
                            size="sm"
                            onClick={(e) => e.stopPropagation()}
                            className="rounded-full bg-[color:var(--burgundy)] text-white hover:bg-[color:var(--wine)] px-3.5 py-1 text-xs font-medium uppercase tracking-wider shadow-sm"
                          >
                            <Calendar className="h-3 w-3 mr-1" />
                            Book
                          </Button>
                        }
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

