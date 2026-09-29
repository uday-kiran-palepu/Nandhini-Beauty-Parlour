import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SERVICES, type Service } from "@/lib/services";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "@/components/site/BookingDialog";
import { Sparkles, HelpCircle, ChevronDown, MessageCircle, Calendar } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing | Nandhini Beauty Parlour, Kakinada" },
      {
        name: "description",
        content:
          "Official pricing for bridal makeup, reception styling, engagement makeover, hairstyling, mehndi, saree draping, facials & skincare at Nandhini Beauty Parlour, Kakinada.",
      },
      {
        property: "og:title",
        content: "Services & Pricing | Nandhini Beauty Parlour, Kakinada",
      },
      {
        property: "og:description",
        content:
          "Transparent pricing for bridal & beauty services. Available at parlour or doorstep across Kakinada.",
      },
    ],
  }),
  component: ServicesPage,
});

const CATEGORIES = [
  "All Services",
  "Special Packages",
  "Bridal & Makeover",
  "Hair & Styling",
  "Hands, Feet & Skin",
  "Essential Care",
];

const FAQS = [
  {
    q: "Do you provide at-home or venue makeover services?",
    a: "Yes, we provide doorstep and venue services across Kakinada for bridal, engagement, and party bookings. You can select 'At Home' when booking.",
  },
  {
    q: "How early should I book for wedding Muhurtham dates?",
    a: "We recommend reserving your date as early as possible once wedding dates are finalized to secure your preferred morning or evening timing.",
  },
  {
    q: "What brands of cosmetics and skincare do you use?",
    a: "We exclusively use authentic, salon-grade cosmetic products designed to photograph beautifully and hold up under warm ceremony lighting without feeling heavy.",
  },
  {
    q: "Can I choose different saree draping styles?",
    a: "Yes, we provide classic South Indian bridal draping, pleated perfection, Bengali, Gujarati, and contemporary party draping styles.",
  },
];

function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All Services");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredServices =
    activeCategory === "All Services"
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

  function getWhatsAppUrl(s: Service) {
    const text = encodeURIComponent(
      `Hi Nandhini Beauty Parlour, I would like to enquire about "${s.name}" (Discounted Price: ₹${s.discountedPrice}). Available at parlour or doorstep in Kakinada.`
    );
    return `https://wa.me/918688768911?text=${text}`;
  }

  return (
    <div className="space-y-14 md:space-y-18 py-8 md:py-14">
      {/* 1. Header */}
      <section className="mx-auto max-w-4xl px-6 text-center space-y-3">
        <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--burgundy)] font-semibold">
          Transparent Pricing & Special Offers
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[color:var(--charcoal)] font-normal leading-tight">
          Services & Special Packages
        </h1>
        <div className="w-16 h-0.5 bg-[color:var(--gold)] mx-auto" />
        <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed pt-1">
          Explore our complete service menu for bridal makeovers, special packages, hair styling, mehndi, and skin treatments in Kakinada.
        </p>

        {/* Category Filter Tabs */}
        <div className="pt-4 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium tracking-wide transition-all ${
                activeCategory === cat
                  ? "bg-[color:var(--burgundy)] text-white shadow-sm"
                  : "bg-white border border-[color:var(--border)] text-foreground/80 hover:bg-[color:var(--muted)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 2. Detailed Service Cards Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((s) => (
            <article
              key={s.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white shadow-sm hover:border-[color:var(--gold)] hover:shadow-md transition-all group"
            >
              {/* Photo Header */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[color:var(--muted)]">
                <img
                  src={s.image}
                  alt={s.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Price Pill */}
                <div className="absolute top-3 right-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[color:var(--burgundy)] backdrop-blur shadow-sm flex items-center gap-1.5">
                  <span className="text-[11px] text-muted-foreground line-through font-normal">
                    ₹{s.originalPrice}
                  </span>
                  <span>₹{s.discountedPrice}</span>
                </div>

                {s.isSpecialPackage && (
                  <div className="absolute top-3 left-3 rounded-full bg-[color:var(--burgundy)] text-white px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    Special Package
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-wider text-[color:var(--gold)] font-bold">
                      {s.category}
                    </span>
                    <span className="rounded-full bg-emerald-50 text-emerald-700 px-2 py-0.5 text-[10px] font-semibold border border-emerald-200">
                      Offer Active
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[color:var(--charcoal)]">
                    {s.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {s.description}
                  </p>
                </div>

                {/* Card Actions */}
                <div className="mt-5 pt-4 border-t border-[color:var(--border)]/70 flex items-center gap-2">
                  <BookingDialog
                    defaultService={s.name}
                    trigger={
                      <Button className="flex-1 rounded-full bg-[color:var(--burgundy)] text-white hover:bg-[color:var(--wine)] text-xs uppercase tracking-wider font-semibold shadow-sm">
                        <Calendar className="h-3 w-3 mr-1" />
                        Book Now
                      </Button>
                    }
                  />

                  {/* WhatsApp button */}
                  <a
                    href={getWhatsAppUrl(s)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Enquire about ${s.name} on WhatsApp`}
                    className="rounded-full bg-white border border-emerald-600 text-emerald-700 hover:bg-emerald-50 p-2 text-xs font-semibold shadow-sm transition-colors flex items-center justify-center shrink-0"
                  >
                    <MessageCircle className="h-4 w-4 text-emerald-600" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. Helpful Customer FAQ Section */}
      <section className="mx-auto max-w-4xl px-6">
        <div className="rounded-2xl border border-[color:var(--border)] bg-white p-6 sm:p-10 shadow-sm space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[color:var(--gold)] font-semibold">
              <HelpCircle className="h-3.5 w-3.5" />
              Frequently Asked Questions
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[color:var(--charcoal)] font-normal">
              Common Questions Before Booking
            </h2>
            <div className="w-12 h-0.5 bg-[color:var(--gold)] mx-auto" />
          </div>

          <div className="divide-y divide-[color:var(--border)] pt-2">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="py-4">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between text-left text-sm sm:text-base font-medium text-[color:var(--charcoal)] hover:text-[color:var(--burgundy)] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[color:var(--burgundy)]" : "text-muted-foreground"
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed pr-6">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA (Matching button text styles) */}
      <section className="mx-auto max-w-3xl px-6 text-center">
        <div className="rounded-2xl bg-[color:var(--burgundy)] text-white p-8 sm:p-10 space-y-4">
          <h2 className="font-serif text-3xl font-normal">
            Ready to Reserve Your Date?
          </h2>
          <p className="text-white/85 text-xs sm:text-sm max-w-md mx-auto">
            Book online or chat with our team on WhatsApp for custom Muhurtham schedules.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <BookingDialog
              trigger={
                <Button className="rounded-full bg-white text-[color:var(--burgundy)] hover:bg-[color:var(--ivory)] px-7 text-xs uppercase tracking-wider font-semibold shadow-md">
                  Book Appointment Now
                </Button>
              }
            />
            <Button
              asChild
              className="rounded-full bg-white text-[color:var(--burgundy)] hover:bg-[color:var(--ivory)] px-7 text-xs uppercase tracking-wider font-semibold shadow-md flex items-center gap-2"
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
    </div>
  );
}
