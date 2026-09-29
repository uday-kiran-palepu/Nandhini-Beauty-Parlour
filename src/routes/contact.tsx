import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SERVICES } from "@/lib/services";
import { submitContact } from "@/lib/sheets.functions";
import { MapPin, Phone, Clock, MessageCircle, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Nandhini Beauty Parlour & Makeovers, Kakinada" },
      {
        name: "description",
        content:
          "Visit Nandhini Beauty Parlour on Wharf Road, Prasar Pet, Kakinada. Call 86887 68911 or 93900 59551. Open 9:00 AM – 8:00 PM everyday for bridal bookings & beauty enquiries.",
      },
      {
        property: "og:title",
        content: "Contact Us | Nandhini Beauty Parlour, Kakinada",
      },
      {
        property: "og:description",
        content:
          "Find our location on Wharf Road, Prasar Pet, Kakinada. Call, WhatsApp, or send an enquiry directly.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [service, setService] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const submit = useServerFn(submitContact);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setLoading(true);
    try {
      await submit({
        data: {
          name: String(fd.get("name") ?? "").trim(),
          phone: String(fd.get("phone") ?? "").trim(),
          email: "",
          service,
          message: String(fd.get("message") ?? "").trim(),
        },
      });
      toast.success("Thank you! Your enquiry has been received. We will contact you shortly.");
      (e.target as HTMLFormElement).reset();
      setService("");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong. Please call us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-14 md:space-y-18 py-10 md:py-16">
      {/* 1. Header */}
      <section className="mx-auto max-w-4xl px-6 text-center space-y-3">
        <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--burgundy)] font-semibold">
          Reach Our Parlour
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl text-[color:var(--charcoal)] font-normal leading-tight">
          Contact & Location
        </h1>
        <div className="w-16 h-0.5 bg-[color:var(--gold)] mx-auto" />
        <p className="text-base text-muted-foreground max-w-lg mx-auto leading-relaxed pt-2">
          We welcome walk-ins and bridal consultations at our parlour on Wharf Road, Prasar Pet, Kakinada.
        </p>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Verified Details & Quick Actions */}
          <div className="md:col-span-5 space-y-6">
            <div className="space-y-4">
              {/* Address */}
              <div className="rounded-xl border border-[color:var(--border)] bg-white p-5 shadow-sm flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[color:var(--muted)] text-[color:var(--burgundy)]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--gold)]">
                    Parlour Address
                  </div>
                  <div className="mt-1 text-sm font-medium text-[color:var(--charcoal)] leading-relaxed">
                    Wharf Road, Prasar Pet, Kakinada, Andhra Pradesh
                  </div>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="rounded-xl border border-[color:var(--border)] bg-white p-5 shadow-sm flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[color:var(--muted)] text-[color:var(--burgundy)]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--gold)]">
                    Phone & Bookings
                  </div>
                  <div className="mt-1 text-sm font-medium text-[color:var(--charcoal)] space-x-2">
                    <a href="tel:8688768911" className="hover:text-[color:var(--burgundy)] underline">
                      86887 68911
                    </a>
                    <span>·</span>
                    <a href="tel:9390059551" className="hover:text-[color:var(--burgundy)] underline">
                      93900 59551
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="rounded-xl border border-[color:var(--border)] bg-white p-5 shadow-sm flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[color:var(--muted)] text-[color:var(--burgundy)]">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--gold)]">
                    Opening Hours
                  </div>
                  <div className="mt-1 text-sm font-medium text-[color:var(--charcoal)]">
                    9:00 AM – 8:00 PM (Everyday)
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="tel:8688768911"
                className="flex-1 rounded-full bg-[color:var(--burgundy)] text-white hover:bg-[color:var(--wine)] py-3 px-4 text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <Phone className="h-4 w-4" />
                Call 86887 68911
              </a>
              <a
                href="https://wa.me/918688768911?text=Hi%20Nandhini%20Beauty%20Parlour%2C%20I%20would%20like%20to%20enquire%20about%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>

            {/* Google Maps Embed */}
            <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white shadow-sm aspect-[16/10] w-full">
              <iframe
                title="Nandhini Beauty Parlour Location Map"
                src="https://maps.google.com/maps?q=Wharf+Road,+Prasar+Pet,+Kakinada,+Andhra+Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Practical Enquiry Form */}
          <div className="md:col-span-7">
            <div className="rounded-2xl border border-[color:var(--border)] bg-white p-6 sm:p-8 shadow-sm space-y-6">
              <div className="space-y-1">
                <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[color:var(--charcoal)]">
                  Send Us an Enquiry
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Leave your details and event dates below. We will get back to you with availability and details.
                </p>
              </div>

              <form onSubmit={onSubmit} className="grid gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="grid gap-1.5">
                    <Label htmlFor="contact-name" className="text-xs font-medium">Your Name *</Label>
                    <Input
                      id="contact-name"
                      name="name"
                      required
                      maxLength={100}
                      placeholder="e.g. Anusha Rao"
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor="contact-phone" className="text-xs font-medium">Phone Number *</Label>
                    <Input
                      id="contact-phone"
                      name="phone"
                      required
                      type="tel"
                      maxLength={20}
                      placeholder="e.g. 98765 43210"
                    />
                  </div>
                </div>

                <div className="grid gap-1.5">
                  <Label className="text-xs font-medium">Service Interested In</Label>
                  <Select value={service} onValueChange={setService}>
                    <SelectTrigger id="contact-service">
                      <SelectValue placeholder="Select a service (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      {SERVICES.map((s) => (
                        <SelectItem key={s.id} value={s.name}>
                          {s.name} ({s.price})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="grid gap-1.5">
                    <Label htmlFor="contact-date" className="text-xs font-medium">Tentative Event Date</Label>
                    <Input
                      id="contact-date"
                      name="date"
                      type="date"
                      min={new Date().toISOString().slice(0, 10)}
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor="contact-time" className="text-xs font-medium">Preferred Time</Label>
                    <Input
                      id="contact-time"
                      name="time"
                      type="time"
                    />
                  </div>
                </div>

                <div className="grid gap-1.5">
                  <Label htmlFor="contact-message" className="text-xs font-medium">Your Message or Requirements *</Label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    maxLength={1000}
                    placeholder="Tell us about your event (Muhurtham timing, reception look, home visit requirement, etc.)..."
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="rounded-full bg-[color:var(--burgundy)] text-white hover:bg-[color:var(--wine)] px-8 text-xs uppercase tracking-wider font-semibold shadow-sm flex items-center gap-2"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>{loading ? "Sending..." : "Submit Enquiry"}</span>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
