import { Phone, MessageCircle, Calendar } from "lucide-react";
import { BookingDialog } from "./BookingDialog";
import { Button } from "@/components/ui/button";

export function MobileStickyActionBar() {
  const whatsappUrl =
    "https://wa.me/918688768911?text=Hi%20Nandhini%20Beauty%20Parlour%2C%20I%20would%20like%20to%20enquire%20about%20an%20appointment.";

  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-around border-t border-[color:var(--gold-soft)] bg-white/95 px-4 py-2.5 backdrop-blur-md shadow-lg md:hidden"
    >
      {/* Call */}
      <a
        href="tel:8688768911"
        className="flex flex-col items-center gap-1 text-[11px] font-medium text-foreground hover:text-[color:var(--burgundy)] transition-colors"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--muted)] text-[color:var(--burgundy)]">
          <Phone className="h-4 w-4" />
        </div>
        <span>Call</span>
      </a>

      {/* WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 text-[11px] font-medium text-emerald-700 hover:text-emerald-800 transition-colors"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <MessageCircle className="h-4 w-4" />
        </div>
        <span>WhatsApp</span>
      </a>

      {/* Book */}
      <div className="flex flex-col items-center">
        <BookingDialog
          trigger={
            <Button
              size="sm"
              className="h-8 rounded-full bg-[color:var(--burgundy)] px-4 text-xs font-medium text-white shadow-sm hover:bg-[color:var(--wine)] flex items-center gap-1.5"
            >
              <Calendar className="h-3.5 w-3.5" />
              <span>Book</span>
            </Button>
          }
        />
      </div>
    </aside>
  );
}
