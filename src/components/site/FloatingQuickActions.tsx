import { PhoneCall, MessageCircle } from "lucide-react";

export function FloatingQuickActions() {
  const whatsappUrl =
    "https://wa.me/918688768911?text=Hi%20Nandhini%20Beauty%20Parlour%2C%20I%20would%20like%20to%20enquire%20about%20an%20appointment.";
  const phoneUrl = "tel:8688768911";

  return (
    <div
      aria-label="Quick contact floating actions"
      className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-center gap-3 print:hidden"
    >
      {/* WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Nandhini Beauty Parlour on WhatsApp"
        className="group relative flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl active:scale-95"
      >
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-[#128C7E]"></span>
        </span>
        <MessageCircle className="h-6 w-6" />
        {/* Tooltip on Desktop hover */}
        <span className="pointer-events-none absolute right-16 hidden rounded-lg bg-[color:var(--charcoal)] px-3 py-1.5 text-xs font-medium text-white shadow-lg opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:block whitespace-nowrap">
          WhatsApp Us
        </span>
      </a>

      {/* Caller Floating Button */}
      <a
        href={phoneUrl}
        aria-label="Call Nandhini Beauty Parlour on dial pad"
        className="group relative flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-[color:var(--burgundy)] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[color:var(--wine)] hover:shadow-2xl active:scale-95"
      >
        <PhoneCall className="h-5 w-5" />
        {/* Tooltip on Desktop hover */}
        <span className="pointer-events-none absolute right-16 hidden rounded-lg bg-[color:var(--charcoal)] px-3 py-1.5 text-xs font-medium text-white shadow-lg opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:block whitespace-nowrap">
          Call 86887 68911
        </span>
      </a>
    </div>
  );
}
