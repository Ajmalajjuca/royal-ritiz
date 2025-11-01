import React from "react";
import "./RoomsSection.css";

const rooms = [
  {
    id: 1,
    title: "Royal Deluxe Suite",
    details: "70 m² • 2 beds • 1 bathroom • balcony",
    price: "$1500/NIGHT",
    image: "/images/room1.png", // ✅ fixed path
  },
  {
    id: 2,
    title: "Luxury King Room",
    details: "60 m² • 1 king bed • 1 bathroom • city view",
    price: "$1200/NIGHT",
    image: "/images/room2.png", // ✅ fixed path
  },
  {
    id: 3,
    title: "Presidential Suite",
    details: "90 m² • 2 beds • 2 bathrooms • terrace",
    price: "$2000/NIGHT",
    image: "/images/room3.png", // ✅ fixed path
  },
];

const RoomsSection = () => {
  return (
    <section className="rooms-section">
      <div className="rooms-header">
        <h2>ROOMS AVAILABILITY</h2>
        <button className="all-rooms-btn">ALL ROOMS</button>
      </div>

      <div className="rooms-grid">
        {rooms.map((room) => (
          <div className="room-card" key={room.id}>
            <div className="room-image-container">
              <img src={room.image} alt={room.title} className="room-image" />
              <div className="room-overlay"></div>
            </div>
            <div className="room-info">
              <h3>{room.title}</h3>
              <p className="room-details">{room.details}</p>
              <p className="room-link">SEE DETAIL</p>
              <div className="room-footer">
                <div className="room-price">
                  <span className="start-text">Start from</span>
                  <span className="price">{room.price}</span>
                </div>
                <button className="availability-btn">CHECK AVAILABILITY</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoomsSection;
