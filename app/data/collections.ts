export interface Look {
  id: string;
  imageUrl: string;
  title: string;
  description?: string;
}

export interface Collection {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  description: string;
  imageUrl: string;
  lookCount: number;
  looks: Look[];
  credits?: {
    photographer?: string;
    stylist?: string;
    model?: string;
    location?: string;
  };
}

export const collections: Collection[] = [
  {
    id: "resort-2024",
    title: "Resort 2024",
    subtitle: "Coastal Elegance",
    year: "2024",
    description:
      "A collection inspired by the serene beauty of coastal landscapes and timeless resort wear. Each piece embodies the effortless sophistication of seaside luxury, combining flowing silhouettes with structured elements that capture the essence of modern elegance.",
    imageUrl:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=1200&fit=crop&crop=center",
    lookCount: 12,
    credits: {
      photographer: "Marina Santos",
      stylist: "Elena Rodriguez",
      model: "Aria Thompson",
      location: "Santorini, Greece",
    },
    looks: [
      {
        id: "look-01",
        imageUrl:
          "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=900&fit=crop&crop=center",
        title: "Look 01",
        description: "Flowing white silk dress with architectural neckline",
      },
      {
        id: "look-02",
        imageUrl:
          "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=900&fit=crop&crop=center",
        title: "Look 02",
        description: "Minimalist black ensemble with clean lines",
      },
      {
        id: "look-03",
        imageUrl:
          "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=900&fit=crop&crop=center",
        title: "Look 03",
        description: "Structured blazer with fluid trousers",
      },
      {
        id: "look-04",
        imageUrl:
          "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=900&fit=crop&crop=center",
        title: "Look 04",
        description: "Ethereal white dress with delicate draping",
      },
      {
        id: "look-05",
        imageUrl:
          "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&h=900&fit=crop&crop=center",
        title: "Look 05",
        description: "Monochromatic separates in charcoal grey",
      },
      {
        id: "look-06",
        imageUrl:
          "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=900&fit=crop&crop=center",
        title: "Look 06",
        description: "Oversized coat with minimalist silhouette",
      },
    ],
  },
  {
    id: "ss-2024",
    title: "Spring Summer 2024",
    subtitle: "Urban Minimalism",
    year: "2024",
    description:
      "Clean lines and architectural silhouettes define this contemporary collection. Drawing inspiration from modern urban landscapes, each piece represents a perfect balance between functionality and high fashion aesthetics.",
    imageUrl:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=1200&fit=crop&crop=center",
    lookCount: 18,
    credits: {
      photographer: "James Mitchell",
      stylist: "Sofia Chen",
      model: "Luna Nakamura",
      location: "Tokyo, Japan",
    },
    looks: [
      {
        id: "look-01",
        imageUrl:
          "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=900&fit=crop&crop=center",
        title: "Look 01",
        description: "Sharp tailoring meets soft femininity",
      },
      {
        id: "look-02",
        imageUrl:
          "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=900&fit=crop&crop=center",
        title: "Look 02",
        description: "Geometric patterns in monochrome palette",
      },
      {
        id: "look-03",
        imageUrl:
          "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=900&fit=crop&crop=center",
        title: "Look 03",
        description: "Deconstructed blazer with asymmetric details",
      },
      {
        id: "look-04",
        imageUrl:
          "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=900&fit=crop&crop=center",
        title: "Look 04",
        description: "Flowing midi dress in pristine white",
      },
    ],
  },
  {
    id: "fw-2023",
    title: "Fall Winter 2023",
    subtitle: "Monochrome Dreams",
    year: "2023",
    description:
      "Exploring the power of black and white through luxurious fabrics and bold shapes. This collection celebrates the timeless elegance of monochromatic dressing while pushing boundaries with innovative textures and unexpected proportions.",
    imageUrl:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=1200&fit=crop&crop=center",
    lookCount: 15,
    credits: {
      photographer: "Dimitri Volkov",
      stylist: "Isabella Fontaine",
      model: "Zara Williams",
      location: "Paris, France",
    },
    looks: [
      {
        id: "look-01",
        imageUrl:
          "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=900&fit=crop&crop=center",
        title: "Look 01",
        description: "Dramatic black coat with sculptural shoulders",
      },
      {
        id: "look-02",
        imageUrl:
          "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=900&fit=crop&crop=center",
        title: "Look 02",
        description: "White wool dress with architectural neckline",
      },
      {
        id: "look-03",
        imageUrl:
          "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=900&fit=crop&crop=center",
        title: "Look 03",
        description: "Layered ensemble in contrasting textures",
      },
    ],
  },
  {
    id: "ss-2023",
    title: "Spring Summer 2023",
    subtitle: "Modern Looks",
    year: "2023",
    description:
      'A celebration of femininity through flowing silhouettes and delicate textures. "Modern Looks" explores the duality of strength and softness, creating pieces that empower while maintaining an air of graceful elegance.',
    imageUrl:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=1200&fit=crop&crop=center",
    lookCount: 20,
    credits: {
      photographer: "Amara Johnson",
      stylist: "Lucinda Vale",
      model: "Nia Okafor",
      location: "Lagos, Nigeria",
    },
    looks: [
      {
        id: "look-01",
        imageUrl:
          "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=900&fit=crop&crop=center",
        title: "Look 01",
        description: "Ethereal white gown with flowing fabric",
      },
      {
        id: "look-02",
        imageUrl:
          "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=900&fit=crop&crop=center",
        title: "Look 02",
        description: "Delicate silk dress with subtle details",
      },
      {
        id: "look-03",
        imageUrl:
          "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=900&fit=crop&crop=center",
        title: "Look 03",
        description: "Structured piece with soft finishing",
      },
    ],
  },
];

export function getCollectionById(id: string): Collection | undefined {
  return collections.find(collection => collection.id === id);
}

export function getAllCollections(): Collection[] {
  return collections;
}
