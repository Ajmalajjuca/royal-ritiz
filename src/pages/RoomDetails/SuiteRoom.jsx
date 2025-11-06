import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./RoomDetails.css";

import room1 from "../../optimized-assets/room1.webp";
import room2 from "../../optimized-assets/rooms1.webp";
import room3 from "../../optimized-assets/rooms2.webp";

const SuiteRoom = () => {
  const images = [room1, room2, room3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="room-details-container">
      <div className="room-gallery">
        <img src={images[currentIndex]} alt={`Suite ${currentIndex + 1}`} className="gallery-image" />
        <button className="gallery-btn left" onClick={prev}><FaArrowLeft /></button>
        <button className="gallery-btn right" onClick={next}><FaArrowRight /></button>
        <div className="gallery-dots">
          {images.map((_, i) => (
            <span key={i} className={`dot ${i === currentIndex ? "active" : ""}`} onClick={() => setCurrentIndex(i)}></span>
          ))}
        </div>
        <div className="down-arrow"></div>
      </div>

      <div className="room-info">
        <h1 className="room-title">Suite Room</h1>
        <p className="room-description">
          Indulge in our <strong>Suite Rooms</strong> with separate living areas, elegant décor, and premium amenities.
          Ideal for extended stays or families seeking extra comfort and panoramic city vistas.
        </p>
        <div className="room-details">
          <p><strong>Size:</strong> 50 m² / 538 ft²</p>
          <p><strong>Guests:</strong> Up to 3 Guests</p>
          <p><strong>View:</strong> City view</p>
        </div>
        <div className="room-amenities">
          <h2>Room Amenities</h2>
          <ul>
            <li>Spacious Living Area</li>
            <li>Complimentary Wi-Fi</li>
            <li>Mini Bar & Coffee Maker</li>
            <li>Luxury Bath Amenities</li>
            <li>24-Hour Concierge Service</li>
          </ul>
        </div>
        <button className="details-btn book-btn">BOOK NOW</button>
      </div>
    </div>
  );
};

export default SuiteRoom;
