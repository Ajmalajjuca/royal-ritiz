import React from "react";
import "./BanquetCard.css";

const BanquetCard = ({ title, description, image, imageAlt }) => {
  return (
    <section className="banquet-card">
      <div className="banquet-card-image">
        <img
          src={image}
          alt={imageAlt || title}
        />
      </div>

      <div className="banquet-card-content">
        <h2 className="banquet-name">{title}</h2>
        <p className="banquet-description">
          {description}
        </p>

        <button className="details-btn">VIEW DETAILS</button>
      </div>
    </section>
  );
};

export default BanquetCard;

