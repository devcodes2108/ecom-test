export type Product = {
  id: string;
  title: string;
  category: "Sarees" | "Kurtis" | "Kurtas" | "Kids Wear";
  size: string[];
  colors: { name: string; hex: string }[];
  price: number;
  mrp: number;
  rating: number;
  ageGroup: "Kids" | "Youth" | "Adults" | "Elders";
  occasion: "Festive" | "Casual" | "Bridal";
  badge: string;
  images: string[];
};

const img = (id: string, w = 1200, h = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=82`;

export const heroSlides = [
  {
    title: "Festive Sarees Woven for the Spotlight",
    subtitle: "Kanjivaram-inspired silks, zari borders, and modern drapes for wedding season.",
    cta: "Explore Collection",
    badge: "Up to 35% off",
    image: img("photo-1753981031189-27bb7bd1c079", 1800, 980)
  },
  {
    title: "Everyday Kurtis With Heritage Detail",
    subtitle: "Breathable cottons, fine motifs, and sizes for youth, adults, and elders.",
    cta: "Shop New Arrivals",
    badge: "New festive edits",
    image: img("photo-1743090834072-4f70339bc917", 1800, 980)
  },
  {
    title: "Ethnic Wear for the Whole Family",
    subtitle: "Bright kids wear, graceful elder classics, and coordinated occasion looks.",
    cta: "View Family Picks",
    badge: "Family sets live",
    image: img("photo-1774437896972-0cbe3d967e69", 1800, 980)
  }
];

export const products: Product[] = [
  {
    id: "saree-kanjivaram-green",
    title: "Mayura Green Zari Silk Saree",
    category: "Sarees",
    size: ["Free Size"],
    colors: [
      { name: "Emerald", hex: "#166534" },
      { name: "Gold", hex: "#d97706" }
    ],
    price: 3299,
    mrp: 4999,
    rating: 4.8,
    ageGroup: "Adults",
    occasion: "Bridal",
    badge: "Bestseller",
    images: [
      img("photo-1753981031189-27bb7bd1c079"),
      img("photo-1743090834072-4f70339bc917"),
      img("photo-1763361735358-f296c926ecdb")
    ]
  },
  {
    id: "saree-silver-heritage",
    title: "Chandrika Silver Banarasi Saree",
    category: "Sarees",
    size: ["Free Size"],
    colors: [
      { name: "Silver", hex: "#cbd5e1" },
      { name: "Rose", hex: "#e11d48" }
    ],
    price: 2899,
    mrp: 4299,
    rating: 4.7,
    ageGroup: "Youth",
    occasion: "Festive",
    badge: "New",
    images: [
      img("photo-1743090834072-4f70339bc917"),
      img("photo-1753981031189-27bb7bd1c079"),
      img("photo-1774437896972-0cbe3d967e69")
    ]
  },
  {
    id: "kurta-cream-men",
    title: "Aarav Cream Festive Kurta",
    category: "Kurtas",
    size: ["S", "M", "L", "XL"],
    colors: [
      { name: "Cream", hex: "#f8fafc" },
      { name: "Maroon", hex: "#7f1d1d" }
    ],
    price: 1499,
    mrp: 2299,
    rating: 4.5,
    ageGroup: "Adults",
    occasion: "Festive",
    badge: "Limited",
    images: [
      img("photo-1774437677567-4c3d354daf39"),
      img("photo-1774437556038-bca8bc991b2c"),
      img("photo-1774437678744-0be33717c4f2")
    ]
  },
  {
    id: "kids-paatola-set",
    title: "Little Utsav Paithani Set",
    category: "Kids Wear",
    size: ["2-4Y", "5-7Y", "8-10Y"],
    colors: [
      { name: "Saffron", hex: "#f97316" },
      { name: "Purple", hex: "#7e22ce" }
    ],
    price: 1199,
    mrp: 1899,
    rating: 4.6,
    ageGroup: "Kids",
    occasion: "Festive",
    badge: "Kids edit",
    images: [
      img("photo-1774437896972-0cbe3d967e69"),
      img("photo-1744807561461-00bbe2419a65"),
      img("photo-1769773650757-0c92db57d9ca")
    ]
  },
  {
    id: "kurti-rose-cotton",
    title: "Gulabi Block Print Cotton Kurti",
    category: "Kurtis",
    size: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Rose", hex: "#e63946" },
      { name: "Indigo", hex: "#3730a3" }
    ],
    price: 899,
    mrp: 1499,
    rating: 4.4,
    ageGroup: "Youth",
    occasion: "Casual",
    badge: "Daily comfort",
    images: [
      img("photo-1743090834072-4f70339bc917"),
      img("photo-1753981031189-27bb7bd1c079"),
      img("photo-1749189516333-168cfd97de0b")
    ]
  },
  {
    id: "elder-linen-saree",
    title: "Prerna Soft Linen Saree",
    category: "Sarees",
    size: ["Free Size"],
    colors: [
      { name: "Ivory", hex: "#f8fafc" },
      { name: "Sky", hex: "#93c5fd" }
    ],
    price: 1799,
    mrp: 2499,
    rating: 4.9,
    ageGroup: "Elders",
    occasion: "Casual",
    badge: "Soft drape",
    images: [
      img("photo-1749189516333-168cfd97de0b"),
      img("photo-1743090834072-4f70339bc917"),
      img("photo-1763361735358-f296c926ecdb")
    ]
  }
];

export const ageGroups = [
  {
    title: "Kids",
    copy: "Playful festive sets",
    image: img("photo-1774437896972-0cbe3d967e69", 600, 600)
  },
  {
    title: "Youth",
    copy: "Fresh drapes and kurtis",
    image: img("photo-1743090834072-4f70339bc917", 600, 600)
  },
  {
    title: "Adults",
    copy: "Occasion-ready classics",
    image: img("photo-1753981031189-27bb7bd1c079", 600, 600)
  },
  {
    title: "Elders",
    copy: "Soft, graceful staples",
    image: img("photo-1749189516333-168cfd97de0b", 600, 600)
  }
];

export const categories = ["Sarees", "Kurtis", "Kurtas", "Kids Wear"] as const;
export const sizes = ["XS", "S", "M", "L", "XL", "XXL", "Free Size", "2-4Y", "5-7Y", "8-10Y"];
export const occasions = ["Festive", "Casual", "Bridal"] as const;
export const ageOptions = ["Kids", "Youth", "Adults", "Elders"] as const;
