import eyebrowThreadingImg from "@/assets/services/eyebrow-threading.jpg";
import facialsImg from "@/assets/services/facials.jpg";
import pedicureImg from "@/assets/services/pedicure.jpg";
import manicureImg from "@/assets/services/manicure.jpg";
import waxingImg from "@/assets/services/waxing.jpg";
import bridalMakeupImg from "@/assets/services/bridal-makeup.jpg";
import haircutsImg from "@/assets/services/haircuts.jpg";
import bridalHairstylesImg from "@/assets/services/bridal-hairstyles.jpg";
import bridalMehndiImg from "@/assets/services/bridal-mehndi.jpg";
import headMassageImg from "@/assets/services/head-massage.jpg";
import footMassageImg from "@/assets/services/foot-massage.jpg";
import hairSpaImg from "@/assets/services/hair-spa.jpg";
import receptionMakeoverImg from "@/assets/services/reception-makeover.jpg";
import christianBridalImg from "@/assets/services/christian-bridal-makeover.jpg";
import halfSareeImg from "@/assets/services/half-saree-ceremony.jpg";
import sareeDrapingImg from "@/assets/g6.jpg";

export type Service = {
  id: string;
  name: string;
  originalPrice: string;
  discountedPrice: string;
  price: string;
  description: string;
  category: "Bridal & Makeover" | "Hair & Styling" | "Hands, Feet & Skin" | "Special Packages" | "Essential Care";
  image: string;
  isSpecialPackage?: boolean;
};

export const SERVICES: Service[] = [
  {
    id: "eyebrow-threading",
    name: "Eyebrow Threading",
    originalPrice: "69/-",
    discountedPrice: "39/-",
    price: "₹39/- (was ₹69/-)",
    description: "Precise eyebrow shaping and gentle hair removal for clean, sharp, defined contours.",
    category: "Essential Care",
    image: eyebrowThreadingImg,
  },
  {
    id: "facials",
    name: "Facials & Glow Care",
    originalPrice: "899/-",
    discountedPrice: "499/-",
    price: "₹499/- (was ₹899/-)",
    description: "Deep cleansing, herbal steam, exfoliation and radiance pack for refreshed glowing skin.",
    category: "Hands, Feet & Skin",
    image: facialsImg,
  },
  {
    id: "pedicure",
    name: "Pedicure",
    originalPrice: "599/-",
    discountedPrice: "399/-",
    price: "₹399/- (was ₹599/-)",
    description: "Relaxing foot soak, scrub exfoliation, dead skin removal and soothing herbal massage.",
    category: "Hands, Feet & Skin",
    image: pedicureImg,
  },
  {
    id: "manicure",
    name: "Manicure",
    originalPrice: "499/-",
    discountedPrice: "399/-",
    price: "₹399/- (was ₹499/-)",
    description: "Detailed hand grooming, nail shaping, cuticle therapy and moisturizing hand massage.",
    category: "Hands, Feet & Skin",
    image: manicureImg,
  },
  {
    id: "waxing",
    name: "Waxing",
    originalPrice: "599/-",
    discountedPrice: "399/-",
    price: "₹399/- (was ₹599/-)",
    description: "Smooth, clean waxing using skin-friendly formulations designed for sensitive skin.",
    category: "Essential Care",
    image: waxingImg,
  },
  {
    id: "bridal-makeups",
    name: "Bridal Makeups",
    originalPrice: "11999/-",
    discountedPrice: "6999/-",
    price: "₹6,999/- (was ₹11,999/-)",
    description: "Full HD signature bridal makeover tailored to your skin tone, wedding saree and ceremony lighting.",
    category: "Bridal & Makeover",
    image: bridalMakeupImg,
  },
  {
    id: "haircuts",
    name: "Haircuts & Styling",
    originalPrice: "799/-",
    discountedPrice: "499/-",
    price: "₹499/- (was ₹799/-)",
    description: "Trendy layered, feather, blunt and personalized cuts finished with professional blow-dry.",
    category: "Hair & Styling",
    image: haircutsImg,
  },
  {
    id: "bridal-hairstyles",
    name: "Bridal Hairstyles",
    originalPrice: "1999/-",
    discountedPrice: "999/-",
    price: "₹999/- (was ₹1,999/-)",
    description: "Traditional poola jada, floral bridal buns, textured braids and modern party curls.",
    category: "Hair & Styling",
    image: bridalHairstylesImg,
  },
  {
    id: "bridal-mehndi",
    name: "Bridal Mehndi",
    originalPrice: "2999/-",
    discountedPrice: "1999/-",
    price: "₹1,999/- (was ₹2,999/-)",
    description: "Intricate, dark-staining bridal hand and feet mehndi crafted with natural henna paste.",
    category: "Bridal & Makeover",
    image: bridalMehndiImg,
  },
  {
    id: "head-massage",
    name: "Head Massage",
    originalPrice: "699/-",
    discountedPrice: "399/-",
    price: "₹399/- (was ₹699/-)",
    description: "Deeply relaxing Ayurvedic warm oil scalp massage to relieve stress and nourish roots.",
    category: "Hands, Feet & Skin",
    image: headMassageImg,
  },
  {
    id: "foot-massage",
    name: "Foot Massage",
    originalPrice: "599/-",
    discountedPrice: "399/-",
    price: "₹399/- (was ₹599/-)",
    description: "Targeted reflexology and soothing massage for tired feet after busy celebrations.",
    category: "Hands, Feet & Skin",
    image: footMassageImg,
  },
  {
    id: "hair-spa",
    name: "Hair Spa",
    originalPrice: "999/-",
    discountedPrice: "699/-",
    price: "₹699/- (was ₹999/-)",
    description: "Intense hair conditioning, scalp massage and steam infusion for soft, shiny, frizz-free hair.",
    category: "Hair & Styling",
    image: hairSpaImg,
  },
  {
    id: "reception-makeover",
    name: "Reception Makeover",
    originalPrice: "5999/-",
    discountedPrice: "3999/-",
    price: "₹3,999/- (was ₹5,999/-)",
    description: "Glamorous, camera-ready look designed for grand evening lights, lehengas and gowns.",
    category: "Special Packages",
    image: receptionMakeoverImg,
    isSpecialPackage: true,
  },
  {
    id: "christian-bridal-makeover",
    name: "Christian Bridal Makeover",
    originalPrice: "8999/-",
    discountedPrice: "6999/-",
    price: "₹6,999/- (was ₹8,999/-)",
    description: "Ethereal, luminous bridal makeup, delicate veil pinning and romantic hairstyling.",
    category: "Special Packages",
    image: christianBridalImg,
    isSpecialPackage: true,
  },
  {
    id: "half-saree-makeover",
    name: "Half Saree Ceremony Makeover",
    originalPrice: "8999/-",
    discountedPrice: "6999/-",
    price: "₹6,999/- (was ₹8,999/-)",
    description: "Youthful, radiant makeup, authentic Langa Voni draping, and traditional floral hair styling.",
    category: "Special Packages",
    image: halfSareeImg,
    isSpecialPackage: true,
  },
  {
    id: "saree-draping",
    name: "Saree Draping",
    originalPrice: "699/-",
    discountedPrice: "499/-",
    price: "₹499/- (was ₹699/-)",
    description: "Pleated perfection in South Indian bridal, Gujarati, Bengali and contemporary styles.",
    category: "Essential Care",
    image: sareeDrapingImg,
  },
];