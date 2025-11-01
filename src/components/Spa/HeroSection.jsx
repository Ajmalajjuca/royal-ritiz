import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>

      {/* Logo at top center */}
      <div className="hero-logo-container">
        <img src="/logo.png" alt="Royal Ritiz Logo" className="hero-logo" />
      </div>

      {/* Main Content - Centered */}
      <div className="hero-content">
        <h1 className="hero-title">Luxury Spa</h1>
        <p className="hero-subtitle">
          Explore a whole world of beauty, health and well-being in our expansive Spa & Fitness centre. 
          Take your time browsing our extensive treatment menu to find your perfect method of relaxation.
        </p>
      </div>

      {/* White Arrow at bottom center */}
      <div className="hero-arrow"></div>
    </section>
  );
};

export default HeroSection;

