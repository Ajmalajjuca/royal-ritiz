import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./RoomDetails.css";

import room1 from "../../optimized-assets/rooms1.webp";
import room2 from "../../optimized-assets/room1.webp";
import room3 from "../../optimized-assets/rooms2.webp";

const PremiumKingRoom = () => {
  const images = [room1, room2, room3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="room-details-container">
      {/* Image Carousel */}
      <div className="room-gallery">
        <img
          src={images[currentIndex]}
          alt={`Premium King Bed Room ${currentIndex + 1}`}
          className="gallery-image"
        />
        <button className="gallery-btn left" onClick={prevImage}>
          <FaArrowLeft />
        </button>
        <button className="gallery-btn right" onClick={nextImage}>
          <FaArrowRight />
        </button>

        {/* Carousel Dots */}
        <div className="gallery-dots">
          {images.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(i)}
            ></span>
          ))}
        </div>

        {/* White Arrow Below */}
        <div className="down-arrow"></div>
      </div>

      {/* Info Section */}
      <div className="room-info">
        <h1 className="room-title">Premium King Bed Room</h1>
        <p className="room-description">
          Experience ultimate comfort in our <strong>Premium King Bed Rooms</strong> featuring elegant interiors,
          premium furnishings, and luxurious amenities. Perfect for a romantic getaway or business travel with stunning
          city views.
        </p>

        <div className="room-details">
          <p><strong>Size:</strong> 35 m² / 377 ft²</p>
          <p><strong>Guests:</strong> Up to 2 Guests</p>
          <p><strong>View:</strong> City view</p>
        </div>

        <div className="room-amenities">
          <h2>Room Amenities</h2>
          <ul>
            <li>Complimentary Wi-Fi</li>
            <li>Smart TV with Streaming</li>
            <li>Mini Bar & Coffee Maker</li>
            <li>Luxury Bathroom Amenities</li>
            <li>24-Hour Room Service</li>
            <li>King-size Bed with Premium Linens</li>
            <li>Work Desk & Lounge Area</li>
          </ul>
        </div>

        <button className="details-btn book-btn">BOOK NOW</button>
      </div>
    </div>
  );
};

export default PremiumKingRoom;
