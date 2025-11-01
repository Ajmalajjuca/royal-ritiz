import React from "react";
import "./AboutCard.css";

const AboutCard = ({ title, description, image, imageAlt }) => {
  return (
    <section className="about-card">
      <div className="about-card-image">
        <img
          src={image}
          alt={imageAlt || title}
        />
      </div>

      <div className="about-card-content">
        <h2 className="about-heading">{title}</h2>
        <p className="about-description">
          {description}
        </p>

        <button className="more-details-btn">MORE DETAILS</button>
      </div>
    </section>
  );
};

export default AboutCard;


