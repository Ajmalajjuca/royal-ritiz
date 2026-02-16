import suite1 from "../optimized-new-assets/Suite_1.webp";
import suite2 from "../optimized-new-assets/Suite2.webp";
import suite3 from "../optimized-new-assets/Suite_3.webp";
import suite4 from "../optimized-new-assets/Suite_4.webp";
import suite6 from "../optimized-new-assets/Suite_6.webp";
import suite7 from "../optimized-new-assets/Suite_7.webp";
import suite8 from "../optimized-new-assets/Suite_8.webp";
import suite9 from "../optimized-new-assets/Suite_9.webp";
import suite10 from "../optimized-new-assets/Suite_10.webp";
import suite11 from "../optimized-new-assets/Suite_11.webp";
import suite12 from "../optimized-new-assets/Suite_12.webp";

import sup1 from "../optimized-new-assets/SUP_1.webp";
import sup2 from "../optimized-new-assets/Sup_2.webp";
import sup3 from "../optimized-new-assets/Sup_3.webp";
import sup4 from "../optimized-new-assets/Sup_4.webp";
import sup5 from "../optimized-new-assets/Sup_5.webp";
import sup6 from "../optimized-new-assets/Sup_6.webp";
import sup7 from "../optimized-new-assets/Sup_7.webp";
import sup8 from "../optimized-new-assets/Sup_8.webp";

import cottage1 from "../optimized-new-assets/Royal_Ritz-163_Cottage.webp";
import cottage2 from "../optimized-new-assets/Royal_Ritz-180_Cottage.webp";
import cottage3 from "../optimized-new-assets/Royal_Ritz-194_Cottage.webp";

export const roomsData = {
  // Existing from Rooms.jsx
  "executive-suite": {
    name: "Executive Suite",
    category: "Suite",
    images: [suite1, suite12, suite6],
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
    images: [suite7, suite3, suite4],
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
  }
};
