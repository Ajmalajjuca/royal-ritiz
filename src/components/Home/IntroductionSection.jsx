import React from "react";
import "./IntroductionSection.css";
const heritageImg = '/optimized-new-assets/Royal_Ritz-34.webp';

const IntroductionSection = () => {
  return (
    <section className="heritage-section">
      {/* Background Layer */}
      <div className="heritage-bg-wrapper">
        <img src={heritageImg} alt="Heritage Background" className="heritage-bg-image" />
        <div className="heritage-bg-overlay"></div>
      </div>

      <div className="container heritage-container">
        {/* Floating Frame Image */}
        <div className="heritage-frame-wrapper">
          <div className="heritage-frame-inner">
            <img src={heritageImg} alt="Majestic Room" className="heritage-frame-image" />
          </div>
        </div>

        {/* Text Content */}
        <div className="heritage-content">
          <h2 className="heritage-title">Heritage Stays With Contemporary Capabilities</h2>
          <h4 className="heritage-subtitle">Majestic Rooms</h4>
          <button className="heritage-btn">EXPLORE</button>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;


