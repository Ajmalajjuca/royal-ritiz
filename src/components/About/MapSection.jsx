import React from "react";
import "./MapSection.css";

const MapSection = () => {
  return (
    <section className="map-section">
      <div className="map-header">
        <h2 className="map-title">Find Us</h2>
        <p className="map-subtitle">
          We're located in the heart of Karnataka — experience the elegance and comfort of Royal Ritis.
        </p>
      </div>

      <div className="map-container">
        <iframe
          title="Royal Ritiz Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.430261081542!2d75.0680395!3d15.353167099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d75cd8bc527f%3A0x4714a4274483e461!2sRoyal%20Ritis%20Hotel!5e0!3m2!1sen!2sin!4v1763017191822!5m2!1sen!2sin"
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
