import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SERVICES } from "@/lib/services";
import { submitBooking } from "@/lib/sheets.functions";
import { MessageCircle } from "lucide-react";

type Props = {
  trigger: React.ReactNode;
  defaultService?: string;
  defaultLocation?: "At Parlour" | "At Home";
};

export function BookingDialog({ trigger, defaultService, defaultLocation = "At Parlour" }: Props) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState(defaultService ?? "");
  const [location, setLocation] = useState<"At Parlour" | "At Home">(defaultLocation);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const submit = useServerFn(submitBooking);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      await submit({
        data: {
          name: name.trim(),
          phone: phone.trim(),
          email: "",
          service,
          date,
          time,
          location,
          address: location === "At Home" ? address.trim() : "",
          notes: notes.trim(),
        },
      });
      toast.success("Appointment request submitted! We will call/WhatsApp you shortly to confirm.");
      setOpen(false);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong. Please call or WhatsApp us.");
    } finally {
      setLoading(false);
    }
  }

  function handleWhatsAppDirect() {
    const text = encodeURIComponent(
      `Hi Nandhini Beauty Parlour, I would like to book an appointment:\n` +
      `• Name: ${name || "Client"}\n` +
      `• Service: ${service || "Bridal/Occasion Makeover"}\n` +
      `• Date: ${date || "Flexible"}\n` +
      `• Location: ${location}\n` +
      (location === "At Home" && address ? `• Address: ${address}\n` : "") +
      (notes ? `• Notes: ${notes}` : "")
    );
    window.open(`https://wa.me/918688768911?text=${text}`, "_blank");
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        setOpen(o);
        if (o) {
          if (defaultService) setService(defaultService);
          if (defaultLocation) setLocation(defaultLocation);
        }
      }}
    >
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-lg max-h-[92vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-[color:var(--burgundy)]">
            Book Your Appointment
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-xs sm:text-sm">
            Fill in your preferred date and service. We will confirm your slot via call or WhatsApp.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={onSubmit} className="grid gap-4 mt-2">
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="grid gap-1.5">
              <Label htmlFor="booking-name" className="text-xs font-medium">Full Name *</Label>
              <Input
                id="booking-name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                maxLength={100}
                placeholder="e.g. Priya Sharma"
              />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="booking-phone" className="text-xs font-medium">Phone Number *</Label>
              <Input
                id="booking-phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                type="tel"
                maxLength={20}
                placeholder="e.g. 98765 43210"
              />
            </div>
          </div>

          <div className="grid gap-1.5">
            <Label className="text-xs font-medium">Select Service *</Label>
            <Select value={service} onValueChange={setService} required>
              <SelectTrigger id="booking-service">
                <SelectValue placeholder="Choose a service" />
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

          <div className="grid sm:grid-cols-2 gap-3">
            <div className="grid gap-1.5">
              <Label htmlFor="booking-date" className="text-xs font-medium">Event Date *</Label>
              <Input
                id="booking-date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                type="date"
                min={new Date().toISOString().slice(0, 10)}
              />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="booking-time" className="text-xs font-medium">Preferred Time *</Label>
              <Input
                id="booking-time"
                name="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                type="time"
              />
            </div>
          </div>

          <div className="grid gap-1.5">
            <Label className="text-xs font-medium">Service Location *</Label>
            <RadioGroup
              value={location}
              onValueChange={(v) => setLocation(v as "At Parlour" | "At Home")}
              className="flex gap-6 mt-1"
            >
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <RadioGroupItem value="At Parlour" id="loc-parlour" />
                <span>At Parlour (Wharf Road)</span>
              </label>
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <RadioGroupItem value="At Home" id="loc-home" />
                <span>At Home (Doorstep)</span>
              </label>
            </RadioGroup>
          </div>

          {location === "At Home" && (
            <div className="grid gap-1.5">
              <Label htmlFor="booking-address" className="text-xs font-medium">Full Address in Kakinada *</Label>
              <Textarea
                id="booking-address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required={location === "At Home"}
                maxLength={300}
                rows={2}
                placeholder="Door no., street, landmark in Kakinada"
              />
            </div>
          )}

          <div className="grid gap-1.5">
            <Label htmlFor="booking-notes" className="text-xs font-medium">Special Requests or Notes (Optional)</Label>
            <Textarea
              id="booking-notes"
              name="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              maxLength={500}
              rows={2}
              placeholder="e.g. Saree draping style, morning muhurtham timing..."
            />
          </div>

          <DialogFooter className="flex flex-col sm:flex-row gap-2 pt-2">
            <Button
              type="submit"
              disabled={loading || !service}
              className="w-full sm:w-auto flex-1 rounded-full bg-[color:var(--burgundy)] text-white hover:bg-[color:var(--wine)] shadow-sm"
            >
              {loading ? "Submitting..." : "Request Appointment"}
            </Button>
            <Button
              type="button"
              onClick={handleWhatsAppDirect}
              className="w-full sm:w-auto rounded-full bg-emerald-600 text-white hover:bg-emerald-700 flex items-center justify-center gap-2 font-medium shadow-sm transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}