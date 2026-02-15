import React from "react";
import { Link } from "react-router-dom";
import "./RoomCard.css";

const RoomCard = ({ title, size, guests, view, description, image, imageAlt, index, link }) => {
  // Determine alignment based on index (even = image left, odd = image right)
  const isReverse = index % 2 !== 0;

  return (
    <section className={`room-card-section ${isReverse ? "reverse" : ""}`}>
      <div className="container room-card-container">

        {/* Image Side */}
        <div className="room-card-image-wrapper">
          <img src={image} alt={imageAlt || title} className="room-card-image" />
        </div>

        {/* Content Side */}
        <div className="room-card-content">
          <h4 className="room-subtitle">ACCOMMODATION</h4>
          <h2 className="room-title">{title}</h2>

          <div className="room-specs">
            <div className="spec-item">
              <span className="spec-label">Size</span>
              <span className="spec-value">{size}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Occupancy</span>
              <span className="spec-value">{guests}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">View</span>
              <span className="spec-value">{view}</span>
            </div>
          </div>

          <p className="room-description">{description}</p>

          <div className="room-actions">
            <Link to={link || "#"} className="btn-primary">
              VIEW DETAILS
            </Link>
            <button className="btn-secondary">BOOK NOW</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RoomCard;

