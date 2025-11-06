import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./RoomDetails.css";

import room1 from "../../optimized-assets/rooms1.webp";
import room2 from "../../optimized-assets/room1.webp";
import room3 from "../../optimized-assets/rooms2.webp";

const SuperiorTwinRoom = () => {
  const images = [room1, room2, room3];
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % images.length);
  const prev = () => setI((p) => (p === 0 ? images.length - 1 : p - 1));

  return (
    <div className="room-details-container">
      <div className="room-gallery">
        <img src={images[i]} alt={`Superior Twin ${i + 1}`} className="gallery-image" />
        <button className="gallery-btn left" onClick={prev}><FaArrowLeft /></button>
        <button className="gallery-btn right" onClick={next}><FaArrowRight /></button>
        <div className="gallery-dots">
          {images.map((_, x) => (
            <span key={x} className={`dot ${x === i ? "active" : ""}`} onClick={() => setI(x)}></span>
          ))}
        </div>
        <div className="down-arrow"></div>
      </div>

      <div className="room-info">
        <h1 className="room-title">Superior Twin Room</h1>
        <p className="room-description">
          Our <strong>Superior Twin Rooms</strong> feature two comfortable beds, elegant furnishings, and modern amenities —
          perfect for friends or colleagues traveling together, with stunning city views.
        </p>
        <div className="room-details">
          <p><strong>Size:</strong> 32 m² / 344 ft²</p>
          <p><strong>Guests:</strong> Up to 2 Guests</p>
          <p><strong>View:</strong> City view</p>
        </div>
        <button className="details-btn book-btn">BOOK NOW</button>
      </div>
    </div>
  );
};

export default SuperiorTwinRoom;
