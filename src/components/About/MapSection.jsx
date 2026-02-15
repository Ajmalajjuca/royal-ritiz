import React from "react";
import "./MapSection.css";

const MapSection = () => {
  return (
    <section className="map-section">
      {/* Background Watermarks */}
      <div className="watermark palm-leaf top-left"></div>

      <div className="map-container-wrapper">
        <div className="map-header">
          <div className="decorative-line-container about-decorator">
            <div className="decorative-line"></div>
            <div className="diamond-accent"></div>
          </div>
          <h2 className="map-title">Find Us</h2>
          <p className="map-subtitle">
            We're located in the heart of Karnataka — experience the elegance and comfort of Royal Ritis.
          </p>
        </div>

        <div className="map-frame">
          <iframe
            title="Royal Ritz Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1168.2007114559226!2d75.0907897!3d15.4077087!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d1216deef77d%3A0xe37d602b18dff817!2sRoyal%20Ritz%20Resort!5e1!3m2!1sen!2sin!4v1771180495888!5m2!1sen!2sin"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
