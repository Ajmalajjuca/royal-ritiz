import React from "react";
import "./MapSection.css";

const MapSection = () => {
  return (
    <section className="map-section">
      <div className="map-header">
        <h2 className="map-title">Find Us</h2>
        <p className="map-subtitle">
          We're located in the heart of Karnataka — experience the elegance and comfort of Royal Ritiz.
        </p>
      </div>

      <div className="map-container">
        <iframe
          title="Royal Ritiz Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.874007485723!2d74.52623547116394!3d15.86321792024989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf670009e3598b%3A0x3eec6ff9b77e9fa7!2sRoyal%20Ritis!5e0!3m2!1sen!2sin!4v1761946801750!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
