import React from "react";
import HeroSection from "../components/Banquet/HeroSection";
import BanquetCard from "../components/Banquet/BanquetCard";
import restaurant from '../optimized-assets/hotel.webp';
import banquet from '../optimized-assets/banquet.webp';
import spa from '../optimized-assets/spa.webp';
const Banquet = () => {
  const banquetHalls = [
    {
      title: "ROYALE",
      description: "Our grandest banquet hall, perfect for large-scale events, conferences, and celebrations. The Royale features elegant décor, state-of-the-art audio-visual equipment, and can accommodate up to 500 guests in style and comfort.",
      image: banquet,
      imageAlt: "Royale Banquet Hall"
    },
    {
      title: "OPULENCE",
      description: "An intimate yet sophisticated venue ideal for corporate meetings, seminars, and social gatherings. The Opulence hall combines modern amenities with classic elegance, accommodating up to 150 guests in a warm, inviting atmosphere.",
      image: spa,
      imageAlt: "Opulence Banquet Hall"
    },
    {
      title: "ELEGANCE",
      description: "Experience refined luxury in our Elegance hall, designed for premium events and exclusive gatherings. With its sophisticated design and premium facilities, this space is perfect for high-end celebrations and corporate functions for up to 200 guests.",
      image:restaurant,
      imageAlt: "Elegance Banquet Hall"
    },
    {
      title: "BOARD ROOM",
      description: "Our exclusive Board Room is perfect for executive meetings, strategic planning sessions, and intimate business gatherings. Equipped with cutting-edge technology and premium furnishings, it accommodates up to 30 guests in an atmosphere of professionalism and sophistication.",
      image: spa,
      imageAlt: "Board Room"
    }
  ];

  return (
    <>
      <HeroSection />
      {banquetHalls.map((hall, index) => (
        <BanquetCard
          key={index}
          title={hall.title}
          description={hall.description}
          image={hall.image}
          imageAlt={hall.imageAlt}
        />
      ))}
    </>
  );
};

export default Banquet;
