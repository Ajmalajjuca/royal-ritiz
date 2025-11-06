import React from "react";
import "./RoomsSection.css";
import room1 from '../../optimized-assets/rooms1.webp';
import room2 from '../../optimized-assets/room1.webp';
import room3 from '../../optimized-assets/rooms2.webp';
const rooms = [
  {
    title: "Deluxe Room",
    description:
      "Experience comfort and elegance in our Deluxe Room featuring modern interiors, a cozy queen-sized bed, and city views.",
    image:
      room1,
  },
  {
    title: "Executive Suite",
    description:
      "Enjoy the luxury of space and sophistication with a private lounge area, premium bedding, and a balcony overlooking the skyline.",
    image:
      room2,
  },
  {
    title: "Family Room",
    description:
      "Perfect for families or groups, our spacious Family Room includes multiple beds, ample storage, and warm, inviting décor.",
    image:
      room3,
  },
];

const OurServices = () => {
  return (
    <section className="our-services">
      <div className="services-header">
        <h2>OUR ROOMS</h2>
      </div>
      <div className="services-container">
        {rooms.map((room, index) => (
          <div className="service-card" key={index}>
            <div className="service-image-container">
              <img
                src={room.image}
                alt={room.title}
                className="service-image"
              />
              <div className="image-overlay"></div>
            </div>
            <div className="service-content">
              <h3>{room.title}</h3>
              <p>{room.description}</p>
              <button className="learn-more-btn">Check Availability</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
