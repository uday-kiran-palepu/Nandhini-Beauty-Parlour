import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "./BookingDialog";
import { Menu, X } from "lucide-react";
import { useState } from "react";

type NavRouteItem = {
  to: "/" | "/about" | "/services" | "/contact";
  label: string;
  isHash?: false;
};

type NavHashItem = {
  to: string;
  label: string;
  isHash: true;
};

type NavItem = NavRouteItem | NavHashItem;

const NAV: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/#gallery", label: "Gallery", isHash: true },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[color:var(--border)] bg-[color:var(--background)]/95 backdrop-blur-md transition-shadow">
      {/* Main Navbar */}
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 md:px-8 py-3">
        <Link to="/" className="flex items-center" aria-label="Nandhini Beauty Parlour & Makeovers Home">
          <img
            src={logo}
            alt="Nandhini Beauty Parlour & Makeovers"
            className="h-11 sm:h-12 md:h-13 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Primary navigation">
          {NAV.map((n) => {
            if (n.isHash) {
              return (
                <a
                  key={n.to}
                  href={n.to}
                  className="text-xs uppercase tracking-widest text-foreground/80 hover:text-[color:var(--burgundy)] transition-colors font-medium py-1"
                >
                  {n.label}
                </a>
              );
            }
            return (
              <Link
                key={n.to}
                to={n.to}
                className="text-xs uppercase tracking-widest text-foreground/80 hover:text-[color:var(--burgundy)] transition-colors font-medium py-1 border-b-2 border-transparent"
                activeProps={{ className: "text-[color:var(--burgundy)] border-[color:var(--burgundy)] font-semibold" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Primary CTA */}
        <div className="hidden md:block">
          <BookingDialog
            trigger={
              <Button className="rounded-full bg-[color:var(--burgundy)] text-white hover:bg-[color:var(--wine)] px-6 text-xs uppercase tracking-wider font-medium shadow-sm transition-all">
                Book Appointment
              </Button>
            }
          />
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden rounded-lg p-2 text-foreground hover:bg-[color:var(--muted)] transition-colors focus:outline-none focus:ring-2 focus:ring-[color:var(--burgundy)]"
          aria-expanded={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="md:hidden border-t border-[color:var(--border)] bg-white px-6 py-5 shadow-lg flex flex-col gap-4">
          <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
            {NAV.map((n) => {
              if (n.isHash) {
                return (
                  <a
                    key={n.to}
                    href={n.to}
                    onClick={() => setOpen(false)}
                    className="py-1 text-sm font-medium uppercase tracking-wider text-foreground hover:text-[color:var(--burgundy)]"
                  >
                    {n.label}
                  </a>
                );
              }
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="py-1 text-sm font-medium uppercase tracking-wider text-foreground hover:text-[color:var(--burgundy)]"
                  activeProps={{ className: "text-[color:var(--burgundy)] font-semibold" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>
          <div className="pt-2 border-t border-[color:var(--border)] flex flex-col gap-3">
            <BookingDialog
              trigger={
                <Button
                  onClick={() => setOpen(false)}
                  className="w-full rounded-full bg-[color:var(--burgundy)] text-white hover:bg-[color:var(--wine)] text-xs uppercase tracking-wider font-medium"
                >
                  Book Appointment
                </Button>
              }
            />
            <div className="text-center text-xs text-muted-foreground pt-1">
              Wharf Road, Prasar Pet, Kakinada · 9 AM – 8 PM
            </div>
          </div>
        </div>
      )}
    </header>
  );
}