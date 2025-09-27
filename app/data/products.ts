import { Product } from "@/app/types/product";

export const products: Product[] = [
  {
    id: "tassle-dija-001",
    name: "Tassle Dija Kaftan",
    category: "kaftan",
    collection: "SS25",
    price: 570,
    currency: "USD",
    description: "An exquisite kaftan with intricate tassel details and flowing silhouette. Handcrafted with premium materials for a luxurious feel.",
    images: [
      "https://ejiroamostafiri.com/wp-content/uploads/2025/08/OS_7629-680x1020.jpg",
      "https://ext.same-assets.com/2272108455/1581875077.jpeg",
      "https://ext.same-assets.com/2272108455/395474336.jpeg",
    ],
    sizes: [
      { name: "XS", measurements: { bust: 32, waist: 26, hips: 36, length: 58 }, available: true },
      { name: "S", measurements: { bust: 34, waist: 28, hips: 38, length: 58 }, available: true },
      { name: "M", measurements: { bust: 36, waist: 30, hips: 40, length: 59 }, available: true },
      { name: "L", measurements: { bust: 38, waist: 32, hips: 42, length: 59 }, available: true },
      { name: "XL", measurements: { bust: 40, waist: 34, hips: 44, length: 60 }, available: true },
    ],
    colors: [
      { name: "Wine", hex: "#722F37", available: true },
      { name: "Royal Blue", hex: "#4169E1", available: true },
      { name: "Emerald Green", hex: "#50C878", available: true },
    ],
    materials: ["100% Silk", "Hand-embroidered tassels", "Luxury lining"],
    careInstructions: ["Dry clean only", "Store hanging", "Avoid direct sunlight"],
    inStock: true,
    featured: true,
  },
  {
    id: "plum-tassle-002",
    name: "Plum Tassle Dija",
    category: "kaftan",
    collection: "SS25",
    price: 570,
    currency: "USD",
    description: "Elegant plum-colored kaftan featuring decorative tassels and sophisticated draping.",
    images: [
      "https://ejiroamostafiri.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-06-at-3.56.05-PM-680x1020.jpeg",
      "https://ext.same-assets.com/2272108455/395474336.jpeg",
      "https://ejiroamostafiri.com/wp-content/uploads/2025/09/OS_8714.jpg",
    ],
    sizes: [
      { name: "XS", measurements: { bust: 32, waist: 26, hips: 36, length: 58 }, available: true },
      { name: "S", measurements: { bust: 34, waist: 28, hips: 38, length: 58 }, available: true },
      { name: "M", measurements: { bust: 36, waist: 30, hips: 40, length: 59 }, available: true },
      { name: "L", measurements: { bust: 38, waist: 32, hips: 42, length: 59 }, available: false },
      { name: "XL", measurements: { bust: 40, waist: 34, hips: 44, length: 60 }, available: true },
    ],
    colors: [
      { name: "Plum", hex: "#8E4585", available: true },
      { name: "Deep Purple", hex: "#663399", available: true },
    ],
    materials: ["Premium chiffon", "Tassel embellishments", "Silk lining"],
    careInstructions: ["Dry clean only", "Handle with care", "Store flat"],
    inStock: true,
    featured: true,
  },
  {
    id: "green-tassle-003",
    name: "Green Tassle Dija Kaftan",
    category: "kaftan",
    collection: "SS25",
    price: 570,
    currency: "USD",
    description: "Vibrant green kaftan adorned with luxurious tassels and intricate embroidery.",
    images: [
      "https://ejiroamostafiri.com/wp-content/uploads/2025/08/OS_8299-680x1020.jpg",
      "https://ext.same-assets.com/2272108455/1581875077.jpeg",
      "https://ejiroamostafiri.com/wp-content/uploads/2025/09/OS_8714.jpg",
    ],
    sizes: [
      { name: "S", measurements: { bust: 34, waist: 28, hips: 38, length: 58 }, available: true },
      { name: "M", measurements: { bust: 36, waist: 30, hips: 40, length: 59 }, available: true },
      { name: "L", measurements: { bust: 38, waist: 32, hips: 42, length: 59 }, available: true },
      { name: "XL", measurements: { bust: 40, waist: 34, hips: 44, length: 60 }, available: true },
    ],
    colors: [
      { name: "Emerald Green", hex: "#50C878", available: true },
      { name: "Forest Green", hex: "#228B22", available: true },
    ],
    materials: ["100% Silk", "Hand-sewn tassels", "Premium finish"],
    careInstructions: ["Professional dry clean", "Store in garment bag", "Iron on low heat"],
    inStock: true,
    featured: false,
  },
  {
    id: "diarra-dress-004",
    name: "Diarra Dress with Tassels Deluxe",
    category: "dresses",
    collection: "SS25",
    price: 528,
    currency: "USD",
    description: "Stunning dress featuring deluxe tassel details and a flattering silhouette perfect for special occasions.",
    images: [
      "https://ejiroamostafiri.com/wp-content/uploads/2025/08/OS_7849-680x1020.jpg",
      "https://ext.same-assets.com/2272108455/395474336.jpeg",
      "https://ejiroamostafiri.com/wp-content/uploads/2025/09/OS_8714.jpg",
    ],
    sizes: [
      { name: "XS", measurements: { bust: 30, waist: 24, hips: 34, length: 45 }, available: true },
      { name: "S", measurements: { bust: 32, waist: 26, hips: 36, length: 45 }, available: true },
      { name: "M", measurements: { bust: 34, waist: 28, hips: 38, length: 46 }, available: true },
      { name: "L", measurements: { bust: 36, waist: 30, hips: 40, length: 46 }, available: true },
    ],
    colors: [
      { name: "Black", hex: "#000000", available: true },
      { name: "Navy", hex: "#000080", available: true },
    ],
    materials: ["Premium crepe", "Tassel embellishments", "Hidden zipper"],
    careInstructions: ["Dry clean recommended", "Steam iron only", "Store hanging"],
    inStock: true,
    featured: true,
  },
  {
    id: "deiyna-dress-005",
    name: "Deiyna Dress",
    category: "dresses",
    collection: "SS25",
    price: 570,
    currency: "USD",
    description: "Contemporary dress with modern African design elements and sophisticated detailing.",
    images: [
      "https://ejiroamostafiri.com/wp-content/uploads/2025/08/OS_8240-680x1020.jpg",
      "https://ext.same-assets.com/2272108455/1581875077.jpeg",
      "https://ext.same-assets.com/2272108455/395474336.jpeg",
    ],
    sizes: [
      { name: "S", measurements: { bust: 32, waist: 26, hips: 36, length: 45 }, available: true },
      { name: "M", measurements: { bust: 34, waist: 28, hips: 38, length: 46 }, available: true },
      { name: "L", measurements: { bust: 36, waist: 30, hips: 40, length: 46 }, available: false },
      { name: "XL", measurements: { bust: 38, waist: 32, hips: 42, length: 47 }, available: true },
    ],
    colors: [
      { name: "Coral", hex: "#FF7F50", available: true },
      { name: "Peach", hex: "#FFDAB9", available: true },
    ],
    materials: ["Silk blend", "Structured bodice", "Decorative elements"],
    careInstructions: ["Professional clean", "Low heat iron", "Store flat"],
    inStock: true,
    featured: false,
  },
  {
    id: "lia-dress-006",
    name: "Lia Dress",
    category: "dresses",
    collection: "SS25",
    price: 528,
    currency: "USD",
    description: "Elegant dress with flowing lines and contemporary African aesthetics.",
    images: [
      "https://ejiroamostafiri.com/wp-content/uploads/2025/08/TMWSTUDIOS20254100-680x1020.jpg",
      "https://ejiroamostafiri.com/wp-content/uploads/2025/09/OS_8714.jpg",
      "https://ext.same-assets.com/2272108455/395474336.jpeg",
    ],
    sizes: [
      { name: "XS", measurements: { bust: 30, waist: 24, hips: 34, length: 45 }, available: true },
      { name: "S", measurements: { bust: 32, waist: 26, hips: 36, length: 45 }, available: true },
      { name: "M", measurements: { bust: 34, waist: 28, hips: 38, length: 46 }, available: true },
      { name: "L", measurements: { bust: 36, waist: 30, hips: 40, length: 46 }, available: true },
    ],
    colors: [
      { name: "Black", hex: "#000000", available: true },
      { name: "Midnight Blue", hex: "#191970", available: true },
    ],
    materials: ["Cotton blend", "Breathable fabric", "Quality finish"],
    careInstructions: ["Machine wash cold", "Hang to dry", "Medium iron"],
    inStock: true,
    featured: true,
  },
  {
    id: "onion-lia-007",
    name: "Onion Lia Dress",
    category: "dresses",
    collection: "SS25",
    price: 528,
    currency: "USD",
    description: "Unique onion-colored variation of the popular Lia dress design.",
    images: [
      "https://ejiroamostafiri.com/wp-content/uploads/2025/08/OS_8421-680x1020.jpg",
      "https://ext.same-assets.com/2272108455/1581875077.jpeg",
      "https://ejiroamostafiri.com/wp-content/uploads/2025/09/OS_8714.jpg",
    ],
    sizes: [
      { name: "S", measurements: { bust: 32, waist: 26, hips: 36, length: 45 }, available: true },
      { name: "M", measurements: { bust: 34, waist: 28, hips: 38, length: 46 }, available: true },
      { name: "L", measurements: { bust: 36, waist: 30, hips: 40, length: 46 }, available: true },
    ],
    colors: [
      { name: "Onion", hex: "#C4B5A0", available: true },
      { name: "Beige", hex: "#F5F5DC", available: true },
    ],
    materials: ["Linen blend", "Natural fibers", "Comfortable fit"],
    careInstructions: ["Gentle wash", "Air dry", "Steam iron"],
    inStock: true,
    featured: false,
  },
  {
    id: "counma-set-008",
    name: "Counma Set",
    category: "sets",
    collection: "SS25",
    price: 484,
    currency: "USD",
    description: "Coordinated two-piece set featuring traditional design elements with modern styling.",
    images: [
      "https://ejiroamostafiri.com/wp-content/uploads/2025/08/E.A.T-PRODUCTS045-680x1020.jpg",
      "https://ext.same-assets.com/2272108455/395474336.jpeg",
      "https://ejiroamostafiri.com/wp-content/uploads/2025/09/OS_8714.jpg",
    ],
    sizes: [
      { name: "S", measurements: { bust: 34, waist: 28, hips: 38, length: 52 }, available: true },
      { name: "M", measurements: { bust: 36, waist: 30, hips: 40, length: 52 }, available: true },
      { name: "L", measurements: { bust: 38, waist: 32, hips: 42, length: 53 }, available: true },
      { name: "XL", measurements: { bust: 40, waist: 34, hips: 44, length: 53 }, available: true },
    ],
    colors: [
      { name: "Multi-color", hex: "#FF69B4", available: true },
      { name: "Earth Tones", hex: "#8B7355", available: true },
    ],
    materials: ["Cotton blend", "Embroidered details", "Quality construction"],
    careInstructions: ["Wash separately", "Hang dry", "Low heat iron"],
    inStock: true,
    featured: true,
  },
  {
    id: "adire-counma-009",
    name: "Adire Counma Dress",
    category: "dresses",
    collection: "SS25",
    price: 242,
    currency: "USD",
    description: "Traditional Adire tie-dye pattern dress with contemporary silhouette.",
    images: [
      "https://ejiroamostafiri.com/wp-content/uploads/2025/08/E.A.T-PRODUCTS001-Copy-680x1020.jpg",
      "https://ext.same-assets.com/2272108455/1581875077.jpeg",
      "https://ext.same-assets.com/2272108455/395474336.jpeg",
    ],
    sizes: [
      { name: "XS", measurements: { bust: 30, waist: 24, hips: 34, length: 45 }, available: true },
      { name: "S", measurements: { bust: 32, waist: 26, hips: 36, length: 45 }, available: true },
      { name: "M", measurements: { bust: 34, waist: 28, hips: 38, length: 46 }, available: true },
      { name: "L", measurements: { bust: 36, waist: 30, hips: 40, length: 46 }, available: true },
    ],
    colors: [
      { name: "Indigo", hex: "#4B0082", available: true },
      { name: "Blue Pattern", hex: "#0000FF", available: true },
    ],
    materials: ["100% Cotton", "Hand-dyed Adire", "Traditional technique"],
    careInstructions: ["Cold wash only", "Air dry", "Do not bleach"],
    inStock: true,
    featured: false,
  },
  {
    id: "arida-dress-010",
    name: "Arida Dress",
    category: "dresses",
    collection: "SS25",
    price: 528,
    currency: "USD",
    description: "Sophisticated dress with clean lines and elegant draping.",
    images: [
      "https://ejiroamostafiri.com/wp-content/uploads/2025/08/OS_0614-680x1020.jpg",
      "https://ejiroamostafiri.com/wp-content/uploads/2025/09/OS_8714.jpg",
      "https://ext.same-assets.com/2272108455/395474336.jpeg",
    ],
    sizes: [
      { name: "S", measurements: { bust: 32, waist: 26, hips: 36, length: 45 }, available: true },
      { name: "M", measurements: { bust: 34, waist: 28, hips: 38, length: 46 }, available: true },
      { name: "L", measurements: { bust: 36, waist: 30, hips: 40, length: 46 }, available: true },
    ],
    colors: [
      { name: "Cream", hex: "#FFFDD0", available: true },
      { name: "White", hex: "#FFFFFF", available: true },
    ],
    materials: ["Silk blend", "Premium lining", "Delicate finish"],
    careInstructions: ["Dry clean only", "Store carefully", "Avoid water"],
    inStock: true,
    featured: false,
  },
  {
    id: "arida-reki-set-011",
    name: "Arida Dress & Reki Embroidery Skirt",
    category: "sets",
    collection: "SS25",
    price: 770,
    currency: "USD",
    description: "Luxurious two-piece set featuring embroidered skirt and matching dress.",
    images: [
      "https://ejiroamostafiri.com/wp-content/uploads/2025/08/E.A.T-PRODUCTS036-680x1020.jpg",
      "https://ext.same-assets.com/2272108455/1581875077.jpeg",
      "https://ejiroamostafiri.com/wp-content/uploads/2025/09/OS_8714.jpg",
    ],
    sizes: [
      { name: "S", measurements: { bust: 34, waist: 28, hips: 38, length: 52 }, available: true },
      { name: "M", measurements: { bust: 36, waist: 30, hips: 40, length: 52 }, available: true },
      { name: "L", measurements: { bust: 38, waist: 32, hips: 42, length: 53 }, available: false },
      { name: "XL", measurements: { bust: 40, waist: 34, hips: 44, length: 53 }, available: true },
    ],
    colors: [
      { name: "Gold", hex: "#FFD700", available: true },
      { name: "Champagne", hex: "#F7E7CE", available: true },
    ],
    materials: ["Embroidered fabric", "Silk blend", "Hand-finished details"],
    careInstructions: ["Professional clean only", "Store separately", "Handle with care"],
    inStock: true,
    featured: true,
  },
  {
    id: "diamilla-dress-012",
    name: "Diamilla Dress",
    category: "dresses",
    collection: "SS25",
    price: 638,
    currency: "USD",
    description: "Statement dress with dramatic silhouette and artistic design elements.",
    images: [
      "https://ejiroamostafiri.com/wp-content/uploads/2025/08/OS_7766-680x1020.jpg",
      "https://ext.same-assets.com/2272108455/395474336.jpeg",
      "https://ejiroamostafiri.com/wp-content/uploads/2025/09/OS_8714.jpg",
    ],
    sizes: [
      { name: "XS", measurements: { bust: 30, waist: 24, hips: 34, length: 45 }, available: true },
      { name: "S", measurements: { bust: 32, waist: 26, hips: 36, length: 45 }, available: true },
      { name: "M", measurements: { bust: 34, waist: 28, hips: 38, length: 46 }, available: true },
      { name: "L", measurements: { bust: 36, waist: 30, hips: 40, length: 46 }, available: true },
    ],
    colors: [
      { name: "Rose Gold", hex: "#E8B4B8", available: true },
      { name: "Pink", hex: "#FFC0CB", available: true },
    ],
    materials: ["Structured fabric", "Premium construction", "Designer finish"],
    careInstructions: ["Specialist clean", "Maintain shape", "Avoid folding"],
    inStock: true,
    featured: false,
  },
];

// Currency conversion rate
export const CURRENCY_RATES = {
  USD_TO_NGN: 1500, // 1 USD = 1500 NGN (approximate rate)
};

// Helper function to convert price
export function convertPrice(price: number, fromCurrency: 'USD' | 'NGN', toCurrency: 'USD' | 'NGN'): number {
  if (fromCurrency === toCurrency) return price;
  
  if (fromCurrency === 'USD' && toCurrency === 'NGN') {
    return Math.round(price * CURRENCY_RATES.USD_TO_NGN);
  }
  
  if (fromCurrency === 'NGN' && toCurrency === 'USD') {
    return Math.round(price / CURRENCY_RATES.USD_TO_NGN);
  }
  
  return price;
}

// Helper function to format price with currency
export function formatPrice(price: number, currency: 'USD' | 'NGN'): string {
  if (currency === 'NGN') {
    return `₦ ${price.toLocaleString()}`;
  }
  return `$${price.toLocaleString()}`;
}
