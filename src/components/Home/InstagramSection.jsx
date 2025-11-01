import React from "react";
import "./InstagramSection.css";

const InstagramSection = () => {
  return (
    <section className="instagram-section">
      <div className="insta-left">
        <p className="insta-subtitle">Follow us on Instagram</p>
        <h2 className="insta-handle">@royalritiz</h2>
        <a
          href="https://www.instagram.com/royalritiz/"
          target="_blank"
          rel="noopener noreferrer"
          className="insta-button"
        >
          Visit Page ↗
        </a>
      </div>

      <div className="insta-right">
        <img
          src="https://images.unsplash.com/photo-1606787366850-de6330128bfc"
          alt="Royal Ritiz Instagram Preview"
          className="insta-image"
        />
      </div>
    </section>
  );
};

export default InstagramSection;
