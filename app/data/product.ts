import { Product } from "@/app/types/product";

export const sampleProducts: Product[] = [
  {
    id: "boubou-001",
    name: "Royal Blue Boubou Ensemble",
    category: "boubou",
    collection: "SS25",
    price: 1250,
    currency: "USD",
    description:
      "An exquisite royal blue boubou crafted from premium silk with intricate hand-embroidered details. This timeless piece embodies elegance and sophistication, perfect for special occasions and cultural celebrations.",
    images: [
      "https://ext.same-assets.com/2272108455/1581875077.jpeg",
      "https://ejiroamostafiri.com/wp-content/uploads/2025/09/OS_8714.jpg",
      "https://ext.same-assets.com/2272108455/395474336.jpeg",
    ],
    sizes: [
      {
        name: "XS",
        measurements: { bust: 32, waist: 26, hips: 36, length: 58 },
        available: true,
      },
      {
        name: "S",
        measurements: { bust: 34, waist: 28, hips: 38, length: 58 },
        available: true,
      },
      {
        name: "M",
        measurements: { bust: 36, waist: 30, hips: 40, length: 59 },
        available: true,
      },
      {
        name: "L",
        measurements: { bust: 38, waist: 32, hips: 42, length: 59 },
        available: false,
      },
      {
        name: "XL",
        measurements: { bust: 40, waist: 34, hips: 44, length: 60 },
        available: true,
      },
    ],
    colors: [
      { name: "Royal Blue", hex: "#4169E1", available: true },
      { name: "Emerald Green", hex: "#50C878", available: true },
      { name: "Deep Purple", hex: "#663399", available: false },
    ],
    materials: ["100% Silk", "Hand-embroidered details", "Luxury lining"],
    careInstructions: [
      "Dry clean only",
      "Store hanging",
      "Avoid direct sunlight",
    ],
    inStock: true,
    featured: true,
  },
  {
    id: "classics-001",
    name: "Elegant White Classic Dress",
    category: "classics",
    collection: "SS24",
    price: 850,
    currency: "USD",
    description:
      "A sophisticated white classic dress featuring clean lines and timeless silhouette. Crafted from premium cotton blend with subtle textural details that enhance the feminine form.",
    images: [
      "https://ejiroamostafiri.com/wp-content/uploads/2025/09/OS_8714.jpg",
      "https://ext.same-assets.com/2272108455/1581875077.jpeg",
      "https://ext.same-assets.com/2272108455/395474336.jpeg",
    ],
    sizes: [
      {
        name: "XS",
        measurements: { bust: 30, waist: 24, hips: 34, length: 45 },
        available: true,
      },
      {
        name: "S",
        measurements: { bust: 32, waist: 26, hips: 36, length: 45 },
        available: true,
      },
      {
        name: "M",
        measurements: { bust: 34, waist: 28, hips: 38, length: 46 },
        available: true,
      },
      {
        name: "L",
        measurements: { bust: 36, waist: 30, hips: 40, length: 46 },
        available: true,
      },
    ],
    colors: [
      { name: "Pure White", hex: "#FFFFFF", available: true },
      { name: "Cream", hex: "#F5F5DC", available: true },
      { name: "Off White", hex: "#FAF0E6", available: true },
    ],
    materials: ["Cotton blend", "Structured bodice", "Hidden zipper"],
    careInstructions: ["Machine wash cold", "Hang to dry", "Iron on low heat"],
    inStock: true,
    featured: true,
  },
  {
    id: "sets-001",
    name: "Pink Ceremonial Set",
    category: "sets",
    collection: "SS25",
    price: 1450,
    currency: "USD",
    description:
      "A stunning pink ceremonial set featuring flowing silhouettes and intricate pattern work. This ensemble combines traditional craftsmanship with contemporary design sensibilities.",
    images: [
      "https://ext.same-assets.com/2272108455/395474336.jpeg",
      "https://ejiroamostafiri.com/wp-content/uploads/2025/09/OS_8714.jpg",
      "https://ext.same-assets.com/2272108455/1581875077.jpeg",
    ],
    sizes: [
      {
        name: "S",
        measurements: { bust: 34, waist: 28, hips: 38, length: 52 },
        available: true,
      },
      {
        name: "M",
        measurements: { bust: 36, waist: 30, hips: 40, length: 52 },
        available: true,
      },
      {
        name: "L",
        measurements: { bust: 38, waist: 32, hips: 42, length: 53 },
        available: false,
      },
      {
        name: "XL",
        measurements: { bust: 40, waist: 34, hips: 44, length: 53 },
        available: true,
      },
    ],
    colors: [
      { name: "Coral Pink", hex: "#FF7F7F", available: true },
      { name: "Rose Gold", hex: "#E8B4B8", available: true },
      { name: "Burgundy", hex: "#800020", available: true },
    ],
    materials: ["Premium chiffon", "Embellished details", "Silk lining"],
    careInstructions: ["Dry clean only", "Handle with care", "Store flat"],
    inStock: true,
    featured: true,
  },
];

export function getProductById(id: string): Product | undefined {
  return sampleProducts.find((product) => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return sampleProducts.filter((product) => product.category === category);
}

export function getFeaturedProducts(): Product[] {
  return sampleProducts.filter((product) => product.featured);
}
