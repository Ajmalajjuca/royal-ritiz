import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./RoomDetails.css";

import room1 from "../../optimized-assets/rooms2.webp";
import room2 from "../../optimized-assets/rooms1.webp";
import room3 from "../../optimized-assets/room1.webp";

const CottageRoom = () => {
  const images = [room1, room2, room3];
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  return (
    <div className="room-details-container">
      <div className="room-gallery">
        <img src={images[index]} alt={`Cottage ${index + 1}`} className="gallery-image" />
        <button className="gallery-btn left" onClick={prev}><FaArrowLeft /></button>
        <button className="gallery-btn right" onClick={next}><FaArrowRight /></button>
        <div className="gallery-dots">
          {images.map((_, i) => (
            <span key={i} className={`dot ${i === index ? "active" : ""}`} onClick={() => setIndex(i)}></span>
          ))}
        </div>
        <div className="down-arrow"></div>
      </div>

      <div className="room-info">
        <h1 className="room-title">Cottage Room</h1>
        <p className="room-description">
          Escape to our <strong>Cottage Rooms</strong> with private pool access and tranquil garden views. These intimate
          accommodations offer the perfect blend of comfort and serenity in a unique, secluded setting.
        </p>
        <div className="room-details">
          <p><strong>Size:</strong> 45 m² / 484 ft²</p>
          <p><strong>Guests:</strong> Up to 2 Guests</p>
          <p><strong>View:</strong> Garden view</p>
        </div>
        <button className="details-btn book-btn">BOOK NOW</button>
      </div>
    </div>
  );
};

export default CottageRoom;
