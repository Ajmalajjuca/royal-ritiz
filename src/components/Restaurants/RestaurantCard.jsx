import React from "react";
import "./RestaurantCard.css";

const RestaurantCard = ({ title, subtitle, description, image, details, index }) => {
  const isReverse = index % 2 !== 0;

  return (
    <section className={`restaurant-card-section ${isReverse ? "reverse" : ""}`}>
      <div className="container restaurant-card-container">

        {/* Content Side */}
        <div className="restaurant-card-content">
          <div className="restaurant-header-decorator">
            <div className="res-dec-line"></div>
            <div className="res-dec-diamond"></div>
          </div>

          <span className="restaurant-card-label">{subtitle || "DINING EXPERIENCE"}</span>
          <h2 className="restaurant-card-title">{title}</h2>

          <p className="restaurant-card-description">{description}</p>

          {details && details.length > 0 && (
            <div className="restaurant-card-details">
              {details.map((detail, idx) => (
                <div className="restaurant-detail-item" key={idx}>
                  <span className="detail-label">{detail.label}</span>
                  <span className="detail-value">{detail.value}</span>
                </div>
              ))}
            </div>
          )}

          <div className="restaurant-card-actions">
            {/* <button className="res-primary-btn">VIEW MENU</button>
            <button className="res-ghost-btn">RESERVE A TABLE</button> */}
          </div>
        </div>

        {/* Image Side */}
        <div className="restaurant-card-image-box">
          <img src={image} alt={title} className="restaurant-card-image-main" />
          <div className="restaurant-card-image-overlay"></div>
        </div>

      </div>
    </section>
  );
};

export default RestaurantCard;


