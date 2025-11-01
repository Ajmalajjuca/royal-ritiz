import React from "react";
import "./SpaCard.css";

const SpaCard = ({ title, description, image, imageAlt }) => {
  return (
    <section className="spa-card">
      <div className="spa-card-image">
        <img
          src={image}
          alt={imageAlt || title}
        />
      </div>

      <div className="spa-card-content">
        <h2 className="spa-name">{title}</h2>
        <p className="spa-description">
          {description}
        </p>

        <div className="spa-actions">
          <button className="details-btn">MORE DETAILS</button>
          <a href="#" className="spa-menu-link">
            SPA MENU <span className="menu-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpaCard;
