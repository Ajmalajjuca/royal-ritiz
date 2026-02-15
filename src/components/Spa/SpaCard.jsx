import React from "react";
import "./SpaCard.css";

const SpaCard = ({ subtitle, title, description, image, imageAlt, linkText, index }) => {
  const isReverse = index % 2 !== 0;

  return (
    <section className={`spa-card-section ${isReverse ? "reverse" : ""}`}>
      <div className="container spa-card-container">

        {/* Content Side */}
        <div className="spa-card-content">
          <div className="spa-card-header-decorator">
            <div className="spa-dec-line"></div>
            <div className="spa-dec-diamond"></div>
          </div>

          <span className="spa-card-label">{subtitle || "REJUVENATE"}</span>
          <h2 className="spa-card-title">{title}</h2>
          <p className="spa-card-description">
            {description}
          </p>

          <div className="spa-card-actions">
            {/* <button className="spa-primary-btn">ENQUIRE NOW</button>
            <button className="spa-ghost-btn">{linkText || "SPA MENU"}</button> */}
          </div>
        </div>

        {/* Image Side */}
        <div className="spa-card-image-box">
          <img
            src={image}
            alt={imageAlt || title}
            className="spa-card-image-main"
          />
          <div className="spa-card-image-overlay"></div>
        </div>

      </div>
    </section>
  );
};

export default SpaCard;


