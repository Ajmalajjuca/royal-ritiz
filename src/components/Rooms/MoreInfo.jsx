import React, { useState } from "react";
import "./MoreInfo.css";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

const MoreInfo = ({ room, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Temporary gallery images (can reuse the same one)
  const images = [room.image, room.image, room.image];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="moreinfo-overlay">
      <div className="moreinfo-container">
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        {/* Image Slider */}
        <div className="image-slider">
          <button className="arrow-btn left" onClick={prevSlide}>
            <FaArrowLeft />
          </button>
          <img
            src={images[currentIndex]}
            alt={`${room.title} view ${currentIndex + 1}`}
            className="slider-image"
          />
          <button className="arrow-btn right" onClick={nextSlide}>
            <FaArrowRight />
          </button>
        </div>

        {/* Room Info */}
        <div className="room-info">
          <h2>{room.title}</h2>
          <p className="room-desc">{room.description}</p>

          <div className="room-details">
            <span><strong>Size:</strong> {room.size}</span>
            <span><strong>Guests:</strong> {room.guests}</span>
            <span><strong>View:</strong> {room.view}</span>
          </div>

          <div className="extra-info">
            <h3>Room Amenities</h3>
            <ul>
              <li>Complimentary Wi-Fi</li>
              <li>Smart TV with Streaming</li>
              <li>Mini Bar & Coffee Maker</li>
              <li>24/7 Room Service</li>
              <li>Luxury Bathroom Essentials</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
