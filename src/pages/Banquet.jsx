import React from "react";
import HeroSection from "../components/Banquet/HeroSection";
import BanquetCard from "../components/Banquet/BanquetCard";

const Banquet = () => {
  const banquetHalls = [
    {
      title: "ROYALE",
      description: "Our grandest banquet hall, perfect for large-scale events, conferences, and celebrations. The Royale features elegant décor, state-of-the-art audio-visual equipment, and can accommodate up to 500 guests in style and comfort.",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Royale Banquet Hall"
    },
    {
      title: "OPULENCE",
      description: "An intimate yet sophisticated venue ideal for corporate meetings, seminars, and social gatherings. The Opulence hall combines modern amenities with classic elegance, accommodating up to 150 guests in a warm, inviting atmosphere.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Opulence Banquet Hall"
    },
    {
      title: "ELEGANCE",
      description: "Experience refined luxury in our Elegance hall, designed for premium events and exclusive gatherings. With its sophisticated design and premium facilities, this space is perfect for high-end celebrations and corporate functions for up to 200 guests.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Elegance Banquet Hall"
    },
    {
      title: "BOARD ROOM",
      description: "Our exclusive Board Room is perfect for executive meetings, strategic planning sessions, and intimate business gatherings. Equipped with cutting-edge technology and premium furnishings, it accommodates up to 30 guests in an atmosphere of professionalism and sophistication.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
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
