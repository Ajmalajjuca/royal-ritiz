import React from "react";
import "./AboutCard.css";

const AboutCard = ({ title, description, image, imageAlt }) => {
  return (
    <section className="about-card-section">
      <div className="container about-card-container">

        {/* Image Side */}
        <div className="about-card-image-wrapper">
          <img
            src={image}
            alt={imageAlt || title}
            className="about-card-image"
          />
        </div>

        {/* Content Side */}
        <div className="about-card-content">
          <h4 className="about-subtitle">OUR LEGACY</h4>
          <h2 className="about-title">{title}</h2>
          <p className="about-description">
            {description}
          </p>

          <button className="btn-secondary">READ MORE</button>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;



