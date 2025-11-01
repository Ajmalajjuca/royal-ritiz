import React from "react";
import HeroSection from "../components/Rooms/HeroSection";
import RoomCard from "../components/Rooms/RoomCard";

const Rooms = () => {
  const rooms = [
    {
      title: "Premium King Bed Room",
      size: "35 m² / 377 ft²",
      guests: "Up to 2 Guests",
      view: "City view",
      description: "Experience ultimate comfort in our Premium King Bed Rooms featuring elegant interiors, premium furnishings, and luxurious amenities. Perfect for a romantic getaway or business travel with stunning city views.",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Premium King Bed Room"
    },
    {
      title: "Suite Room",
      size: "50 m² / 538 ft²",
      guests: "Up to 3 Guests",
      view: "City view",
      description: "Indulge in our spacious Suite Rooms with separate living areas, elegant décor, and premium amenities. Ideal for extended stays or families seeking extra comfort and space with panoramic city vistas.",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Suite Room"
    },
    {
      title: "Cottage Room",
      size: "45 m² / 484 ft²",
      guests: "Up to 2 Guests",
      view: "Garden view",
      description: "Escape to our charming Cottage Rooms with private pool access and tranquil garden views. These intimate accommodations offer a perfect blend of comfort and serenity in a unique, secluded setting.",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Cottage Room"
    },
    {
      title: "Superior Twin Room",
      size: "32 m² / 344 ft²",
      guests: "Up to 2 Guests",
      view: "City view",
      description: "Our Superior Twin Rooms feature two comfortable beds, elegant furnishings, and all modern amenities. Perfect for friends or colleagues traveling together, with beautiful city views and spacious accommodations.",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Superior Twin Room"
    }
  ];

  return (
    <>
      <HeroSection />
      {rooms.map((room, index) => (
        <RoomCard
          key={index}
          title={room.title}
          size={room.size}
          guests={room.guests}
          view={room.view}
          description={room.description}
          image={room.image}
          imageAlt={room.imageAlt}
        />
      ))}
    </>
  );
};

export default Rooms;
