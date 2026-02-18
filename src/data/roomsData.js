const suite1 = "/optimized-new-assets/Suite_1.webp";
const suite2 = "/optimized-new-assets/Suite2.webp";
const suite3 = "/optimized-new-assets/Suite_3.webp";
const suite4 = "/optimized-new-assets/Suite_4.webp";
const suite6 = "/optimized-new-assets/Suite_6.webp";
const suite7 = "/optimized-new-assets/Suite_7.webp";
const suite8 = "/optimized-new-assets/Suite_8.webp";
const suite9 = "/optimized-new-assets/Suite_9.webp";
const suite10 = "/optimized-new-assets/Suite_10.webp";
const suite11 = "/optimized-new-assets/Suite_11.webp";
const suite12 = "/optimized-new-assets/Suite_12.webp";

const sup1 = "/optimized-new-assets/SUP_1.webp";
const sup2 = "/optimized-new-assets/Sup_2.webp";
const sup3 = "/optimized-new-assets/Sup_3.webp";
const sup4 = "/optimized-new-assets/Sup_4.webp";
const sup5 = "/optimized-new-assets/Sup_5.webp";
const sup6 = "/optimized-new-assets/Sup_6.webp";
const sup7 = "/optimized-new-assets/Sup_7.webp";
const sup8 = "/optimized-new-assets/Sup_8.webp";

const cottage1 = "/optimized-new-assets/Royal_Ritz-163_Cottage.webp";
const cottage2 = "/optimized-new-assets/Royal_Ritz-180_Cottage.webp";
const cottage3 = "/optimized-new-assets/Royal_Ritz-194_Cottage.webp";

export const roomsData = {
  // Existing from Rooms.jsx
  "executive-suite": {
    name: "Executive Suite",
    category: "Suite",
    images: [suite1, suite12, suite6],
    description: "Our pinnacle offering in Hubli for the crème de la crème is this exquisite suite. An opulent living area precedes a luxurious bedroom adorned with handpicked artwork. Every detail reflects timeless elegance and thoughtful design, and all of which ensure your stay with us is paramount.",
    size: "85 m² / 915 ft²",
    guests: "Up to 3 Guests",
    view: "Garden & Pool View",
    highlights: [
      "Separate Living & Dining Areas",
      "Signature Hubli Views",
      "Handpicked Art Collection",
      "Private Butler Pantry"
    ],
    amenities: [
      "Complimentary Wi-Fi",
      "Smart TV with Streaming",
      "Mini Bar & Coffee Maker",
      "Premium Whirlpool",
      "Executive Lounge Access",
      "24-Hour Butler Service",
      "King-size Bed with 600 Thread Count"
    ]
  },
  "luxury-suite": {
    name: "Luxury Suite",
    category: "Suite",
    images: [suite7, suite3, suite4],
    description: "A suite exuding old-school charm and luxury, nestled in the renowned Hubli, synonymous with colonial elegance. This suite boasts aesthetically pleasing interiors and a large window offers calming views of the serene surroundings.",
    size: "65 m² / 700 ft²",
    guests: "Up to 2 Guests",
    view: "City & Garden View",
    highlights: [
      "Colonial Heritage Design",
      "Spacious Walk-in Closet",
      "Expansive City Overlook",
      "Rosewood Furnishings"
    ],
    amenities: [
      "Complimentary Wi-Fi",
      "Smart TV with Streaming",
      "Mini Bar & Coffee Maker",
      "Walk-in Closet",
      "Luxury Bathroom Amenities",
      "24-Hour Room Service"
    ]
  },
  "luxury-suite-whirlpool": {
    name: "Luxury Suite with Whirlpool",
    category: "Suite",
    images: [suite8, suite11, suite10],
    description: "Exuding a classic and time-honoured ambience, this sprawling world-suite aims to elevate relaxation to its utmost pinnacle. With plush beds and high-speed wireless Internet, cable satellite and a private indulgent whirlpool.",
    size: "75 m² / 807 ft²",
    guests: "Up to 2 Guests",
    view: "Pool View",
    amenities: [
      "Private Whirlpool",
      "Complimentary Wi-Fi",
      "Smart TV with Streaming",
      "Mini Bar & Coffee Maker",
      "Colonial-inspired Decor",
      "King-size Bed"
    ]
  },
  "deluxe-pool-view": {
    name: "Deluxe King Bed Room - Pool View",
    category: "Deluxe",
    images: [sup2, sup3, sup4],
    description: "This room radiates colonial charm and elegance with ornamental side lamps and unique artwork that chronicles Hubli's rich history. Complemented by a sumptuous soft bed, luxurious amenities, and breathtaking views of a pristine pool.",
    size: "35 m² / 377 ft²",
    guests: "Up to 2 Guests",
    view: "Pool View",
    amenities: [
      "Complimentary Wi-Fi",
      "Pool View",
      "Smart TV",
      "Mini Bar",
      "Luxury Bathroom",
      "King-size Bed"
    ]
  },
  "luxury-king": {
    name: "Luxury King Bed Room",
    category: "Luxury",
    images: [sup5, sup6, sup8],
    description: "An elegant room aglow with sensor-activated lighting upon entry, designed to highlight its exceptional features: a sumptuous 400-thread count mattress, graceful rosewood furnishings, and expansive windows.",
    size: "40 m² / 430 ft²",
    guests: "Up to 2 Guests",
    view: "City View",
    highlights: [
      "Intuitive Smart Lighting",
      "Authentic Rosewood Decor",
      "400 Thread Count Comfort",
      "Panoramic Skyline Vistas"
    ],
    amenities: [
      "Sensor-activated Lighting",
      "400-thread count mattress",
      "Rosewood Furnishings",
      "Complimentary Wi-Fi",
      "Coffee Maker",
      "Smart TV"
    ]
  },
  "luxury-twin-balcony": {
    name: "Luxury Twin Bed Room with Balcony",
    category: "Luxury",
    images: [sup1, sup7, suite9],
    description: "Ideal for a guest to share a coffee while overlooking the stunning greenery or the pristine pool, our balcony room is your quintessential vintage-style retreat.",
    size: "40 m² / 430 ft²",
    guests: "Up to 2 Guests",
    view: "Greenery & Pool View",
    highlights: [
      "Private Coffee Balcony",
      "Classic Vintage Retreat",
      "Dual View Experience",
      "Colonial Heritage Charm"
    ],
    amenities: [
      "Private Balcony",
      "Twin Beds",
      "Complimentary Wi-Fi",
      "Mini Bar",
      "Colonial Decor",
      "Smart TV"
    ]
  },
  // Added from hardcoded components
  "premium-king-room": {
    name: "Premium King Bed Room",
    category: "Premium",
    images: [sup3, sup4, sup2],
    description: "Experience ultimate comfort in our Premium King Bed Rooms featuring elegant interiors, premium furnishings, and luxurious amenities. Perfect for a romantic getaway or business travel with stunning city views.",
    size: "35 m² / 377 ft²",
    guests: "Up to 2 Guests",
    view: "City view",
    amenities: [
      "Complimentary Wi-Fi",
      "Smart TV with Streaming",
      "Mini Bar & Coffee Maker",
      "Luxury Bathroom Amenities",
      "24-Hour Room Service",
      "King-size Bed with Premium Linens",
      "Work Desk & Lounge Area"
    ]
  },
  "suite-room": {
    name: "Suite Room",
    category: "Suite",
    images: [suite2, suite4, suite6],
    description: "Indulge in our Suite Rooms with separate living areas, elegant décor, and premium amenities. Ideal for extended stays or families seeking extra comfort and panoramic city vistas.",
    size: "50 m² / 538 ft²",
    guests: "Up to 3 Guests",
    view: "City view",
    amenities: [
      "Spacious Living Area",
      "Complimentary Wi-Fi",
      "Mini Bar & Coffee Maker",
      "Luxury Bath Amenities",
      "24-Hour Concierge Service"
    ]
  },
  "cottage-room": {
    name: "Cottage Room",
    category: "Villa",
    images: [cottage1, cottage2, cottage3],
    description: "Escape to our Cottage Rooms with private pool access and tranquil garden views. These intimate accommodations offer the perfect blend of comfort and serenity in a unique, secluded setting.",
    size: "45 m² / 484 ft²",
    guests: "Up to 2 Guests",
    view: "Garden view",
    amenities: [
      "Private Pool Access",
      "Complimentary Wi-Fi",
      "Mini Bar",
      "Garden View",
      "Luxury Bedding"
    ]
  },
  "superior-twin-room": {
    name: "Superior Twin Room",
    category: "Superior",
    images: [sup6, sup8, sup5],
    description: "Our Superior Twin Rooms feature two comfortable beds, elegant furnishings, and modern amenities — perfect for friends or colleagues traveling together, with stunning city views.",
    size: "32 m² / 344 ft²",
    guests: "Up to 2 Guests",
    view: "City view",
    amenities: [
      "Two Comfortable Beds",
      "Complimentary Wi-Fi",
      "Smart TV",
      "Mini Bar",
      "Work Desk"
    ]
  },

  // ── New top-level room type pages ──────────────────────────────────────────
  "premium": {
    name: "Premium Rooms",
    category: "Premium",
    images: [
      "/optimized-new-assets/Royal Ritz-231.webp",
      "/optimized-new-assets/Royal Ritz-219.webp",
      "/optimized-new-assets/Royal Ritz-220.webp",
      "/optimized-new-assets/Royal Ritz-229.webp"
    ],
    description: "Experience refined comfort in our Premium rooms, thoughtfully designed with warm tones, plush bedding, and modern amenities. Ideal for the discerning traveller seeking a perfect balance of style and value in the heart of the city.",
    size: "35 m² / 377 ft²",
    guests: "Up to 2 Guests",
    view: "City View",
    highlights: [
      "Plush Premium Bedding",
      "Warm Contemporary Interiors",
      "Modern In-room Amenities",
      "City & Garden Views"
    ],
    amenities: [
      "Complimentary Wi-Fi",
      "Smart TV with Streaming",
      "Mini Bar & Coffee Maker",
      "Luxury Bathroom Amenities",
      "24-Hour Room Service",
      "King-size Bed with Premium Linens",
      "Work Desk & Lounge Area"
    ]
  },

  "superior": {
    name: "Superior Rooms",
    category: "Superior",
    images: [sup1, sup2, sup3, sup4, sup5, sup6, sup7, sup8],
    description: "Step into our Superior rooms, where colonial-era charm meets modern luxury. Featuring sensor-activated lighting, a sumptuous 400-thread count mattress, rosewood furnishings, and expansive windows that invite the sun's gentle embrace.",
    size: "40 m² / 430 ft²",
    guests: "Up to 2 Guests",
    view: "City & Pool View",
    highlights: [
      "Intuitive Smart Lighting",
      "Authentic Rosewood Décor",
      "400 Thread Count Comfort",
      "Panoramic City & Pool Vistas"
    ],
    amenities: [
      "Sensor-activated Lighting",
      "400-thread count mattress",
      "Rosewood Furnishings",
      "Complimentary Wi-Fi",
      "Coffee Maker",
      "Smart TV",
      "Mini Bar",
      "24-Hour Room Service"
    ]
  },

  "suite": {
    name: "Suites",
    category: "Suite",
    images: [suite1, suite7, suite8, suite3, suite4, suite6, suite9, suite10, suite11, suite12],
    description: "Our pinnacle offering for the crème de la crème. An opulent living area precedes a luxurious bedroom adorned with handpicked artwork. Every detail reflects timeless elegance and thoughtful design, ensuring your stay is paramount.",
    size: "65–85 m² / 700–915 ft²",
    guests: "Up to 3 Guests",
    view: "Garden & Pool View",
    highlights: [
      "Separate Living & Dining Areas",
      "Signature Hubli Views",
      "Handpicked Art Collection",
      "Private Butler Pantry"
    ],
    amenities: [
      "Complimentary Wi-Fi",
      "Smart TV with Streaming",
      "Mini Bar & Coffee Maker",
      "Premium Whirlpool (select suites)",
      "Executive Lounge Access",
      "24-Hour Butler Service",
      "King-size Bed with 600 Thread Count"
    ]
  },

  "cottage": {
    name: "Cottages",
    category: "Cottage",
    images: [
      "/optimized-new-assets/Royal Ritz-164 Cottage.webp",
      "/optimized-new-assets/Royal Ritz-64.webp",
      "/optimized-new-assets/Royal Ritz-169 Cottage.webp",
      "/optimized-new-assets/Royal Ritz-174 Cottage.webp",
      "/optimized-new-assets/Royal Ritz-177 Cottage.webp",
      "/optimized-new-assets/Royal Ritz-180 Cottage.webp",
      "/optimized-new-assets/Royal Ritz-181 Cottage.webp",
      "/optimized-new-assets/Royal Ritz-185 Cottage.webp",
      "/optimized-new-assets/Royal Ritz-191 Cottage.webp",
      "/optimized-new-assets/Royal Ritz-194 Cottage.webp",
      "/optimized-new-assets/Royal Ritz-200.webp"
    ],
    description: "Nestled amidst lush greenery, our Cottages offer an intimate and secluded escape. With private sit-out areas, serene garden views, and bespoke butler service, they are the perfect retreat for a truly private getaway.",
    size: "45 m² / 484 ft²",
    guests: "Up to 2 Guests",
    view: "Garden & Pool View",
    highlights: [
      "Private Sit-out & Terrace",
      "Lush Garden Surroundings",
      "Bespoke Butler Service",
      "Secluded & Intimate Setting"
    ],
    amenities: [
      "Private Pool Access",
      "Complimentary Wi-Fi",
      "Mini Bar & Coffee Maker",
      "Garden & Pool View",
      "Luxury Bedding",
      "24-Hour Butler Service",
      "Smart TV"
    ]
  }
};

