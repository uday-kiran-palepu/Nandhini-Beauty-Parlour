import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { Instagram, MessageCircle, Phone, MapPin, Clock } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--muted)]/50 pt-16 pb-20 md:pb-12 text-foreground">
      <div className="mx-auto max-w-7xl px-6 md:px-8 grid gap-10 md:grid-cols-4">
        {/* Brand Column */}
        <div className="space-y-4">
          <Link to="/" className="inline-block" aria-label="Nandhini Beauty Parlour & Makeovers Home">
            <img
              src={logo}
              alt="Nandhini Beauty Parlour & Makeovers"
              className="h-12 md:h-14 w-auto object-contain"
              loading="lazy"
            />
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Enhancing your natural beauty with elegance. Over 10 years of trusted bridal makeup, hairstyling, mehndi and skincare artistry in Kakinada.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-[color:var(--burgundy)] font-semibold mb-4">
            Explore
          </h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-[color:var(--burgundy)] transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-[color:var(--burgundy)] transition-colors">About Story</Link></li>
            <li><Link to="/services" className="hover:text-[color:var(--burgundy)] transition-colors">Services & Pricing</Link></li>
            <li><a href="/#gallery" className="hover:text-[color:var(--burgundy)] transition-colors">Gallery</a></li>
            <li><Link to="/contact" className="hover:text-[color:var(--burgundy)] transition-colors">Contact & Location</Link></li>
          </ul>
        </div>

        {/* Verified Contact Details */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-[color:var(--burgundy)] font-semibold mb-4">
            Visit & Contact
          </h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2.5 items-start">
              <MapPin className="h-4 w-4 text-[color:var(--burgundy)] shrink-0 mt-0.5" />
              <span>Wharf Road, Prasar Pet, Kakinada</span>
            </li>
            <li className="flex gap-2.5 items-center">
              <Phone className="h-4 w-4 text-[color:var(--burgundy)] shrink-0" />
              <div className="space-x-1">
                <a href="tel:8688768911" className="hover:underline">86887 68911</a>
                <span>·</span>
                <a href="tel:9390059551" className="hover:underline">93900 59551</a>
              </div>
            </li>
            <li className="flex gap-2.5 items-center">
              <Clock className="h-4 w-4 text-[color:var(--burgundy)] shrink-0" />
              <span>9:00 AM – 8:00 PM (Everyday)</span>
            </li>
          </ul>
        </div>

        {/* Connect & Social */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-[color:var(--burgundy)] font-semibold mb-4">
            Connect
          </h4>
          <p className="text-sm text-muted-foreground mb-4">
            Follow our latest bridal transformations and enquire directly via WhatsApp.
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/nandhinibeautyparlour3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Nandhini Beauty Parlour on Instagram"
              className="h-10 w-10 rounded-full border border-[color:var(--border)] bg-white text-[color:var(--burgundy)] flex items-center justify-center hover:bg-[color:var(--burgundy)] hover:text-white transition-colors shadow-sm"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/918688768911?text=Hi%20Nandhini%20Beauty%20Parlour%2C%20I%20would%20like%20to%20enquire%20about%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Nandhini Beauty Parlour on WhatsApp"
              className="h-10 w-10 rounded-full border border-[color:var(--border)] bg-white text-emerald-600 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors shadow-sm"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href="tel:8688768911"
              aria-label="Call Nandhini Beauty Parlour"
              className="h-10 w-10 rounded-full border border-[color:var(--border)] bg-white text-[color:var(--burgundy)] flex items-center justify-center hover:bg-[color:var(--burgundy)] hover:text-white transition-colors shadow-sm"
            >
              <Phone className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-[color:var(--border)] pt-6 text-center text-xs text-muted-foreground space-y-1.5">
        <div>
          © {new Date().getFullYear()} Nandhini Beauty Parlour & Makeovers. All Rights Reserved. Wharf Road, Prasar Pet, Kakinada.
        </div>
        <div>
          Designed and Developed by{" "}
          <a
            href="https://udayantra.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[color:var(--burgundy)] hover:underline"
          >
            Uday Kiran Palepu
          </a>
        </div>
      </div>
    </footer>
  );
}
