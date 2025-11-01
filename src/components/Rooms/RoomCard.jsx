import React from "react";
import "./RoomCard.css";

const RoomCard = ({ title, size, guests, view, description, image, imageAlt }) => {
  return (
    <section className="room-card">
      <div className="room-card-image">
        <img
          src={image}
          alt={imageAlt || title}
        />
      </div>

      <div className="room-card-content">
        <h2 className="room-name">{title}</h2>
        
        <div className="room-specs">
          <span className="spec-item">{size}</span>
          <span className="spec-divider">|</span>
          <span className="spec-item">{guests}</span>
          <span className="spec-divider">|</span>
          <span className="spec-item">{view}</span>
        </div>

        <p className="room-description">
          {description}
        </p>

        <button className="details-btn">MORE DETAILS</button>
      </div>
    </section>
  );
};

export default RoomCard;

