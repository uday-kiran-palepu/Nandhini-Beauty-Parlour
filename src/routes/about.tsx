import { createFileRoute, Link } from "@tanstack/react-router";
import artistImg from "@/assets/services/artist.jpg";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "@/components/site/BookingDialog";
import { Crown, Sparkles, Leaf, MapPin, CheckCircle2, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Nandhini Beauty Parlour & Makeovers, Kakinada" },
      {
        name: "description",
        content:
          "Learn about Nandhini Beauty Parlour & Makeovers in Kakinada. Over 10 years of hands-on experience and 1,000+ bridal makeovers on Wharf Road, Prasar Pet.",
      },
      {
        property: "og:title",
        content: "About Us | Nandhini Beauty Parlour & Makeovers, Kakinada",
      },
      {
        property: "og:description",
        content:
          "Kakinada's trusted destination for bridal makeup, hairstyling, mehndi, facials and skincare.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="space-y-16 md:space-y-20 py-10 md:py-16">
      {/* 1. Header Banner */}
      <section className="mx-auto max-w-4xl px-6 text-center space-y-3">
        <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--burgundy)] font-semibold">
          About Nandhini
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl text-[color:var(--charcoal)] font-normal leading-tight">
          A Decade of Celebrating Indian Bridal Grace
        </h1>
        <div className="w-16 h-0.5 bg-[color:var(--gold)] mx-auto" />
        <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed pt-2">
          Kakinada's trusted destination for bridal makeup, hairstyling, mehndi, facials and skincare — established on Wharf Road, Prasar Pet.
        </p>
      </section>

      {/* 2. Story Section with Real Photography */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white shadow-lg aspect-[4/5] max-w-md mx-auto">
              <img
                src={artistImg}
                alt="Nandhini Beauty Parlour lead makeover artist and studio"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            {/* Small experience badge */}
            <div className="absolute -bottom-4 right-4 sm:right-10 rounded-xl border border-[color:var(--gold-soft)] bg-white px-4 py-2.5 shadow-md">
              <div className="font-serif text-xl font-bold text-[color:var(--burgundy)] leading-none">
                10+ Years
              </div>
              <div className="text-[11px] text-muted-foreground uppercase tracking-wider mt-1">
                in Kakinada
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <h2 className="font-serif text-3xl text-[color:var(--charcoal)] font-normal">
              Our Story & Approach
            </h2>
            <div className="w-12 h-0.5 bg-[color:var(--gold)]" />

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Nandhini Beauty Parlour & Makeovers is Kakinada's trusted destination for bridal makeup, hairstyling, mehndi, facials and skincare. With over a decade of hands-on experience and more than 1,000 bridal makeovers, we blend traditional artistry with modern techniques.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Every look we craft is personal — matched to your skin, features, outfit and the moment you're preparing for. From your engagement day to your grand reception, we're honoured to be part of your story.
            </p>

            <ul className="space-y-2.5 pt-2 text-sm text-[color:var(--charcoal)]">
              {[
                "Carefully chosen salon-grade cosmetics suitable for sensitive Indian skin",
                "Personalized consultations for Muhurtham, Sangeet, and Reception looks",
                "Doorstep home visits across Kakinada for bridal parties and families",
                "Warm, respectful, and punctual service on your most important day",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[color:var(--burgundy)] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Three Pillars of Beauty Philosophy */}
      <section className="bg-white py-16 border-y border-[color:var(--border)]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-10">
            <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold)] font-semibold">
              Our Core Principles
            </p>
            <h2 className="font-serif text-3xl text-[color:var(--charcoal)] font-normal">
              Beauty Philosophy
            </h2>
            <div className="w-16 h-0.5 bg-[color:var(--gold)] mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--ivory)]/40 p-6 text-center space-y-3">
              <div className="h-12 w-12 rounded-full bg-[color:var(--muted)] text-[color:var(--burgundy)] flex items-center justify-center mx-auto">
                <Crown className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[color:var(--charcoal)]">
                Premium
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Only authentic, reputable cosmetic formulations that look natural under photography and withstand long wedding ceremonies.
              </p>
            </div>

            <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--ivory)]/40 p-6 text-center space-y-3">
              <div className="h-12 w-12 rounded-full bg-[color:var(--muted)] text-[color:var(--burgundy)] flex items-center justify-center mx-auto">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[color:var(--charcoal)]">
                Personal
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                No cookie-cutter looks. We analyze skin tone, facial contours, saree color, and jewelry to design your bespoke signature look.
              </p>
            </div>

            <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--ivory)]/40 p-6 text-center space-y-3">
              <div className="h-12 w-12 rounded-full bg-[color:var(--muted)] text-[color:var(--burgundy)] flex items-center justify-center mx-auto">
                <Leaf className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[color:var(--charcoal)]">
                Skin-Safe
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Every application begins with skin hydration and protective prep, ensuring a radiant finish that feels light and comfortable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Experience & Parlour Location Info */}
      <section className="mx-auto max-w-5xl px-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-[color:var(--border)] bg-white p-8 space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[color:var(--burgundy)] font-semibold">
              <MapPin className="h-4 w-4" />
              Our Location in Kakinada
            </div>
            <h3 className="font-serif text-2xl text-[color:var(--charcoal)] font-medium">
              Wharf Road, Prasar Pet
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Centrally situated in Prasar Pet, Kakinada. Our studio offers a calm, private, and hygienic environment for bridal pre-grooming, trial discussions, and celebration styling.
            </p>
            <div className="pt-2">
              <Button asChild variant="outline" size="sm" className="rounded-full border-[color:var(--border)] text-xs">
                <Link to="/contact">Get Directions & Contact Details</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-[color:var(--border)] bg-white p-8 space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[color:var(--burgundy)] font-semibold">
              <Crown className="h-4 w-4" />
              1000+ Bridal Makeovers
            </div>
            <h3 className="font-serif text-2xl text-[color:var(--charcoal)] font-medium">
              Serving Kakinada Families
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Over the last decade, we have had the privilege to style generations of brides, mothers, sisters, and bridal parties for life's most cherished milestones.
            </p>
            <div className="pt-2">
              <Button asChild variant="outline" size="sm" className="rounded-full border-[color:var(--border)] text-xs">
                <Link to="/services">Explore Our Service Menu</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Clear CTAs */}
      <section className="mx-auto max-w-4xl px-6 text-center">
        <div className="rounded-2xl bg-[color:var(--burgundy)] text-white p-8 sm:p-12 space-y-4">
          <h2 className="font-serif text-3xl font-normal">
            Planning Your Special Event?
          </h2>
          <p className="text-white/80 text-sm max-w-md mx-auto">
            Reach out to discuss your wedding dates, schedule a parlour trial, or book doorstep service.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <BookingDialog
              trigger={
                <Button className="rounded-full bg-white text-[color:var(--burgundy)] hover:bg-[color:var(--ivory)] px-7 text-xs uppercase tracking-wider font-semibold shadow-md">
                  Book an Appointment
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
