import React from "react";
import "./AmenitiesSection.css";

const AmenitiesSection = () => {
  return (
    <section className="amenities-hero">
      <div className="amenities-container">
        {/* Left Side - Overlapping Images */}
        <div className="amenities-images">
          <div className="image-stack">
            <div className="image-wrapper image-top">
              <img
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=600&q=80"
                alt="Luxury spa and wellness facilities"
                className="amenity-image"
              />
            </div>
            <div className="image-wrapper image-bottom">
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80"
                alt="Premium hotel amenities"
                className="amenity-image"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="amenities-content">
          <h2 className="amenities-heading">World-Class Amenities</h2>
          <p className="amenities-description">
            Royal Ritiz offers an exceptional collection of premium amenities designed 
            to elevate your stay. From state-of-the-art facilities to personalized 
            services, we ensure every moment is a testament to luxury.
          </p>
          <p className="amenities-description">
            Indulge in our exclusive spa, fine dining restaurants, modern fitness center, 
            and elegant banquet halls. Experience unmatched comfort and sophistication 
            that sets a new standard in hospitality.
          </p>
          <button className="amenities-cta">
            Explore Amenities →
          </button>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
