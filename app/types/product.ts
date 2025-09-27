export interface Product {
  id: string;
  name: string;
  category: "boubou" | "classics" | "sets" | "kaftan" | "dresses";
  gender?: "male" | "female" | "unisex";
  collection: string;
  price: number;
  currency: "USD" | "NGN";
  description: string;
  images: string[];
  sizes: Size[];
  colors: Color[];
  materials: string[];
  careInstructions: string[];
  inStock: boolean;
  featured: boolean;
}

export interface Size {
  name: string;
  measurements: {
    bust?: number;
    waist?: number;
    hips?: number;
    length?: number;
    chest?: number;
    shoulder?: number;
  };
  available: boolean;
}

export interface Color {
  name: string;
  hex: string;
  available: boolean;
}

export interface CartItem {
  product: Product;
  selectedSize: Size;
  selectedColor: Color;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  total: number;
  currency: "USD" | "NGN";
}
