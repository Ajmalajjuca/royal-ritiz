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
        <h1 className="hero-title">Restaurants & Bars</h1>
        <p className="hero-subtitle">Discover fine dining, signature cocktails, and global cuisines</p>
      </div>

      {/* White Arrow at bottom center */}
      <div className="hero-arrow"></div>
    </section>
  );
};

export default HeroSection;
