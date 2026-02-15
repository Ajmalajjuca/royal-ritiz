import React from "react";
import "./BanquetCard.css";

const BanquetCard = ({ subtitle, title, description, image, imageAlt, linkText, index }) => {
  const isReverse = index % 2 !== 0;

  return (
    <section className={`banquet-card-section ${isReverse ? "reverse" : ""}`}>
      <div className="container banquet-card-container">

        {/* Content Side with Decoration */}
        <div className="banquet-card-content">
          <div className="banquet-header-decorator">
            <div className="dec-line"></div>
            <div className="dec-diamond"></div>
          </div>

          <span className="banquet-card-subtitle">{subtitle || "CELEBRATE"}</span>
          <h2 className="banquet-card-title">{title}</h2>
          <p className="banquet-card-description">
            {description}
          </p>

          <div className="banquet-card-actions">
            {/* <button className="banquet-primary-btn">ENQUIRE NOW</button>
            <button className="banquet-ghost-btn">{linkText || "EXPLORE MORE"}</button> */}
          </div>
        </div>

        {/* Image Side */}
        <div className="banquet-card-image-box">
          <img
            src={image}
            alt={imageAlt || title}
            className="banquet-card-image-main"
          />
          <div className="banquet-card-image-overlay"></div>
        </div>

      </div>
    </section>
  );
};

export default BanquetCard;



