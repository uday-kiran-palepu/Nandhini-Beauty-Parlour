import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "@/components/site/BookingDialog";
import { HeroSlideshow } from "@/components/site/HeroSlideshow";
import { SpecialOccasionsInteractive } from "@/components/site/SpecialOccasionsInteractive";
import { Lightbox, type LightboxImage } from "@/components/site/Lightbox";
import artistImg from "@/assets/services/artist.jpg";
import bridalMakeupImg from "@/assets/services/bridal-makeup.jpg";
import bridalHairstylesImg from "@/assets/services/bridal-hairstyles.jpg";
import bridalMehndiImg from "@/assets/services/bridal-mehndi.jpg";
import receptionMakeoverImg from "@/assets/services/reception-makeover.jpg";
import christianBridalImg from "@/assets/services/christian-bridal-makeover.jpg";
import halfSareeImg from "@/assets/services/half-saree-ceremony.jpg";
import haircutsImg from "@/assets/services/haircuts.jpg";
import hairSpaImg from "@/assets/services/hair-spa.jpg";
import sareeDrapingImg from "@/assets/g6.jpg";
import {
  Sparkles,
  Crown,
  Leaf,
  Clock,
  Home as HomeIcon,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nandhini Beauty Parlour & Makeovers | Bridal Makeup in Kakinada" },
      {
        name: "description",
        content:
          "Kakinada's trusted bridal makeup, hairstyling, mehndi, facials & skincare parlour on Wharf Road, Prasar Pet. Over 10 years experience & 1,000+ bridal makeovers.",
      },
      {
        property: "og:title",
        content: "Nandhini Beauty Parlour & Makeovers | Bridal Makeup in Kakinada",
      },
      {
        property: "og:description",
        content:
          "Enhancing natural beauty with elegance. Salon-grade bridal & beauty services at our parlour or at your doorstep in Kakinada.",
      },
    ],
  }),
  component: Index,
});

// Real gallery images updated with authentic client makeovers
const GALLERY_ITEMS: LightboxImage[] = [
  { src: bridalMakeupImg, title: "Signature Muhurtham Bridal Makeover", category: "Bridal" },
  { src: receptionMakeoverImg, title: "Grand Reception Evening Glamour", category: "Reception" },
  { src: christianBridalImg, title: "Christian Bridal Elegance & Veil Styling", category: "Bridal" },
  { src: halfSareeImg, title: "Half Saree Ceremony Langa Voni Makeover", category: "Ceremony" },
  { src: bridalHairstylesImg, title: "Intricate Bridal Floral Hair Artistry", category: "Hair" },
  { src: bridalMehndiImg, title: "Traditional Hand & Feet Bridal Mehndi", category: "Mehndi" },
  { src: sareeDrapingImg, title: "Royal Silk Saree Pleating & Draping", category: "Draping" },
  { src: hairSpaImg, title: "Nourishing Herbal Hair Spa & Therapy", category: "Care" },
  { src: haircutsImg, title: "Precision Layered Haircut & Blow-dry", category: "Hair" },
];

const GALLERY_CATEGORIES = ["All", "Bridal", "Reception", "Ceremony", "Hair", "Mehndi", "Draping"];

function Index() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredGallery =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="space-y-10 md:space-y-16">
      {/* 1. HERO SECTION (Tightened gaps & 20% reduced image container) */}
      <section className="relative overflow-hidden bg-[color:var(--ivory)] pt-4 pb-6 md:py-8 border-b border-[color:var(--border)]/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-center">
            {/* Left Column: Text (desktop ~60% of grid) */}
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold-soft)] bg-white px-3.5 py-1 text-[11px] font-semibold tracking-[0.25em] uppercase text-[color:var(--burgundy)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--burgundy)]" />
                EST. KAKINADA
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] text-[color:var(--charcoal)] tracking-tight">
                Enhancing your{" "}
                <span className="italic font-medium text-[color:var(--burgundy)]">
                  natural beauty
                </span>{" "}
                with elegance
              </h1>

              <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed">
                Bridal makeup · Hairstyling · Mehndi · Facials · Skincare — crafted
                with premium products and a personal touch.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <BookingDialog
                  trigger={
                    <Button
                      size="lg"
                      className="rounded-full bg-[color:var(--burgundy)] text-white hover:bg-[color:var(--wine)] px-6 py-2.5 text-xs uppercase tracking-wider font-semibold shadow-md transition-all"
                    >
                      Book Appointment
                    </Button>
                  }
                />
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-[color:var(--gold)] text-[color:var(--charcoal)] hover:bg-[color:var(--gold-soft)]/40 px-6 py-2.5 text-xs uppercase tracking-wider font-semibold"
                >
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>

              {/* Desktop Trust Snippet (Restored to previous size and stacked style) */}
              <div className="mt-8 flex items-center gap-8 text-sm text-muted-foreground pt-3 border-t border-[color:var(--border)]">
                <div>
                  <div className="font-serif text-2xl text-[color:var(--burgundy)] leading-tight">10+</div>
                  <span className="text-xs sm:text-sm">Years in Kakinada</span>
                </div>
                <div>
                  <div className="font-serif text-2xl text-[color:var(--burgundy)] leading-tight">1000+</div>
                  <span className="text-xs sm:text-sm">Bridal Makeovers</span>
                </div>
                <div>
                  <div className="font-serif text-2xl text-[color:var(--burgundy)] leading-tight">5000+</div>
                  <span className="text-xs sm:text-sm">Happy Clients</span>
                </div>
              </div>
            </div>

            {/* Right Column: Balanced Hero Image Slideshow (20% reduced) */}
            <div className="md:col-span-5 flex justify-center">
              <HeroSlideshow />
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP (Reduced margin as requested) */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 my-2 md:my-4" aria-label="Experience and Client Trust">
        <div className="grid grid-cols-3 divide-x divide-[color:var(--border)] rounded-2xl border border-[color:var(--border)] bg-white py-4 px-3 sm:py-5 sm:px-6 shadow-sm text-center">
          <div className="px-2">
            <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[color:var(--burgundy)]">
              10+
            </div>
            <div className="mt-0.5 text-xs sm:text-sm text-muted-foreground font-medium">
              Years Experience
            </div>
          </div>
          <div className="px-2">
            <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[color:var(--burgundy)]">
              5000+
            </div>
            <div className="mt-0.5 text-xs sm:text-sm text-muted-foreground font-medium">
              Happy Clients
            </div>
          </div>
          <div className="px-2">
            <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[color:var(--burgundy)]">
              1000+
            </div>
            <div className="mt-0.5 text-xs sm:text-sm text-muted-foreground font-medium">
              Bridal Makeovers
            </div>
          </div>
        </div>
      </section>

      {/* 3. SHORT BRAND INTRODUCTION (Featuring Real Artist Photo in Portrait Mode) */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white shadow-lg aspect-[4/5] max-w-[350px] sm:max-w-[380px] mx-auto relative group">
              <img
                src={artistImg}
                alt="Nandhini Beauty Parlour lead artist and founder"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 rounded-lg bg-black/60 backdrop-blur-md px-3 py-1 text-white text-[11px] font-medium border border-white/20">
                Nandhini Makeover Studio · Kakinada
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-3.5">
            <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold)] font-semibold">
              Our Artistry
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[color:var(--charcoal)] font-normal leading-snug">
              Beauty, Personalised for You
            </h2>
            <div className="w-14 h-0.5 bg-[color:var(--gold)]" />
            <p className="text-sm text-muted-foreground leading-relaxed pt-1">
              At Nandhini Beauty Parlour & Makeovers in Kakinada, we specialize in
              bringing out your natural elegance with precision, high-quality salon products,
              and a warm personal touch.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              From bridal makeup and customized hairstyles to intricate mehndi, facials, and
              skincare, every service is tailored to your unique skin and celebration.
            </p>
            <div className="pt-1">
              <Button
                asChild
                variant="link"
                className="p-0 text-[color:var(--burgundy)] font-medium hover:text-[color:var(--wine)] flex items-center gap-1.5 text-xs uppercase tracking-wider"
              >
                <Link to="/about">
                  <span>Learn More About Us</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. “CRAFTED FOR SPECIAL OCCASIONS” (Interactive Left Circle Image + Right Scrolling Cards) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto space-y-2 mb-8">
          <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold)] font-semibold">
            All Services & Pricing
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[color:var(--charcoal)] font-normal">
            Crafted for Special Occasions
          </h2>
          <div className="w-16 h-0.5 bg-[color:var(--gold)] mx-auto" />
          <p className="text-sm text-muted-foreground pt-1">
            Tap or scroll any service card on the right to preview its authentic styling in the circle on the left.
          </p>
        </div>

        {/* 2-Section Interactive Showcase */}
        <SpecialOccasionsInteractive />

        <div className="mt-8 text-center">
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[color:var(--burgundy)] text-[color:var(--burgundy)] hover:bg-[color:var(--burgundy)] hover:text-white px-8 text-xs uppercase tracking-wider font-semibold"
          >
            <Link to="/services">View Detailed Menu & Packages</Link>
          </Button>
        </div>
      </section>

      {/* 5. FEATURED WORK (Visual Gallery Preview with Lightbox) */}
      <section id="gallery" className="scroll-mt-24 bg-white py-12 md:py-16 border-y border-[color:var(--border)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold)] font-semibold">
              Real Transformations
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[color:var(--charcoal)] font-normal">
              A Glimpse of Our Work
            </h2>
            <div className="w-16 h-0.5 bg-[color:var(--gold)] mx-auto" />
            <p className="text-sm text-muted-foreground pt-1">
              Authentic bridal makeovers, reception looks, hairstyles, mehndi, and draping photographed at our parlour.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium tracking-wide transition-all ${
                  activeCategory === cat
                    ? "bg-[color:var(--burgundy)] text-white shadow-sm"
                    : "bg-[color:var(--muted)] text-foreground/70 hover:bg-[color:var(--gold-soft)]/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Responsive Gallery Grid */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredGallery.map((item, idx) => (
              <div
                key={item.src}
                onClick={() => setLightboxIndex(idx)}
                className="group relative cursor-pointer overflow-hidden rounded-xl border border-[color:var(--border)] bg-[color:var(--muted)] aspect-square shadow-sm"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <div className="text-white text-xs">
                    <span className="font-semibold block">{item.title}</span>
                    <span className="text-[10px] text-white/80">{item.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center text-xs text-muted-foreground">
            Click any photo to view in full resolution.
          </div>
        </div>
      </section>

      {/* 6. WHY NANDHINI (4 Verified Pillars) */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold)] font-semibold">
            The Nandhini Promise
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[color:var(--charcoal)] font-normal">
            Why Brides Choose Us
          </h2>
          <div className="w-16 h-0.5 bg-[color:var(--gold)] mx-auto" />
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 text-center">
          {[
            {
              icon: Crown,
              title: "Premium Products",
              description: "We use trusted, salon-grade makeup and skincare suited for Indian wedding rituals.",
            },
            {
              icon: Sparkles,
              title: "Personalised Look",
              description: "Every makeover is customized to match your face structure, outfit, and event lighting.",
            },
            {
              icon: Leaf,
              title: "Skin-Safe Care",
              description: "Dermatologically conscious products selected carefully for sensitive and delicate skin.",
            },
            {
              icon: Clock,
              title: "10+ Years Experience",
              description: "Over a decade of punctual, calm, and dedicated makeover experience in Kakinada.",
            },
          ].map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-xl border border-[color:var(--border)] bg-white p-5 shadow-sm flex flex-col items-center"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--muted)] text-[color:var(--burgundy)] mb-3">
                <pillar.icon className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-base font-medium text-[color:var(--charcoal)]">
                {pillar.title}
              </h3>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. HOME SERVICE SECTION */}
      <section className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl border border-[color:var(--border)] bg-white p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[color:var(--muted)] text-[color:var(--burgundy)]">
              <HomeIcon className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-serif text-xl sm:text-2xl text-[color:var(--charcoal)] font-medium">
                Beauty Services at Your Doorstep
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-lg">
                Bridal and party bookings at your doorstep across Kakinada. Get ready in the comfort of your home or venue without rush.
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <BookingDialog
              defaultLocation="At Home"
              trigger={
                <Button className="w-full md:w-auto rounded-full bg-[color:var(--burgundy)] text-white hover:bg-[color:var(--wine)] px-6 py-2 text-xs uppercase tracking-wider font-semibold shadow-sm">
                  Enquire for Home Service
                </Button>
              }
            />
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA (WhatsApp text color matches Book Appointment button) */}
      <section className="bg-[color:var(--burgundy)] text-white py-14">
        <div className="mx-auto max-w-3xl px-6 text-center space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal">
            Ready for Your Signature Look?
          </h2>
          <p className="text-white/85 text-xs sm:text-sm max-w-lg mx-auto">
            Book your appointment with Nandhini Beauty Parlour & Makeovers. Available at parlour or at your home in Kakinada.
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-3 sm:gap-4">
            <BookingDialog
              trigger={
                <Button
                  size="lg"
                  className="rounded-full bg-white text-[color:var(--burgundy)] hover:bg-[color:var(--ivory)] px-7 text-xs uppercase tracking-wider font-semibold shadow-md transition-all"
                >
                  Book Appointment
                </Button>
              }
            />
            {/* WhatsApp Us button text matches Book Appointment button text color and readability */}
            <Button
              asChild
              size="lg"
              className="rounded-full bg-white text-[color:var(--burgundy)] hover:bg-[color:var(--ivory)] px-7 text-xs uppercase tracking-wider font-semibold shadow-md flex items-center gap-2 transition-all"
            >
              <a
                href="https://wa.me/918688768911?text=Hi%20Nandhini%20Beauty%20Parlour%2C%20I%20would%20like%20to%20enquire%20about%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4 text-emerald-600" />
                <span>WhatsApp Us</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        images={filteredGallery}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChangeIndex={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  );
}
