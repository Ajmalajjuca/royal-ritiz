import React from "react";
import "./RestaurantCard.css";
import img from '../../optimized-assets/hotel.webp';
const RestaurantCard = () => {
  return (
    <section className="restaurant-card">
      <div className="restaurant-card-image">
        <img
          src={img}
          alt="Tangerine Restaurant"
        />
      </div>

      <div className="restaurant-card-content">
        <h2 className="restaurant-name">Tangerine</h2>
        <p className="restaurant-description">
          Welcome to <strong>Tangerine</strong> — a fine dining experience offering
          exquisite flavors and an indulgent buffet spread. Enjoy gourmet creations
          made from the freshest ingredients in a luxurious ambience.
        </p>

        <div className="restaurant-details">
          <div className="restaurant-detail">
            <span className="label">Style</span>
            <span className="value">Buffet</span>
          </div>
          <div className="restaurant-detail">
            <span className="label">Cuisine</span>
            <span className="value">International</span>
          </div>
          <div className="restaurant-detail">
            <span className="label">Dress code</span>
            <span className="value">Smart Casual</span>
          </div>
        </div>

        <div className="restaurant-actions">
          <button className="visit-btn">VISIT RESTAURANT</button>
          <a href="#" className="menu-link">
            MENU <span className="menu-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default RestaurantCard;
