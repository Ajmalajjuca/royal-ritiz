import room1 from "../optimized-assets/rooms1.webp";
import room2 from "../optimized-assets/room1.webp";
import room3 from "../optimized-assets/rooms2.webp";

export const roomsData = {
  // Existing from Rooms.jsx
  "executive-suite": {
    name: "Executive Suite",
    category: "Suite",
    images: [room1, room2, room3],
    description: "Our pinnacle offering in Lutyens Hubli for the crème de la crème is this exquisite suite. An opulent living area precedes a luxurious bedroom adorned with handpicked artwork. Every detail reflects timeless elegance and thoughtful design, and all of which ensure your stay with us is paramount.",
    size: "85 m² / 915 ft²",
    guests: "Up to 3 Guests",
    view: "Garden & Pool View",
    highlights: [
      "Separate Living & Dining Areas",
      "Signature Lutyens Views",
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
    images: [room2, room1, room3],
    description: "A suite exuding old-school charm and luxury, nestled in the renowned Lutyens Hubli, synonymous with colonial elegance. This suite boasts aesthetically pleasing interiors and a large window offers calming views of the serene surroundings.",
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
    images: [room3, room2, room1],
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
    images: [room1, room3, room2],
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
    images: [room2, room1, room3],
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
    images: [room3, room1, room2],
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
    images: [room1, room2, room3],
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
    images: [room1, room2, room3],
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
    images: [room1, room2, room3],
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
    images: [room1, room2, room3],
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
  }
};
