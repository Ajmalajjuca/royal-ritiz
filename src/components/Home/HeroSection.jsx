import React, { useEffect, useState } from "react";
import "./HeroSection.css";

import hero1 from '../../optimized-assets/hero.webp'
import hero2 from '../../optimized-assets/HDR3.webp';
import hero3 from '../../optimized-assets/Untitled_HDR-2 copy.webp';
const images =[hero1,hero2,hero3];


const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3200); // change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-images">
        {images.map((image, index) => (
          <div
            key={index}
            className={`hero-image ${index === currentImage ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>

      <div className="hero-overlay"></div>

      {/* Logo at top center */}
      <div className="hero-logo-container">
        <img src="/logo.png" alt="Royal Ritiz Logo" className="hero-logo" />
      </div>

      {/* Main Content - Centered */}
      <div className="hero-content">
        <h1 className="hero-title">Royal Ritiz</h1>
        <p className="hero-subtitle">The Art of Grand Hospitality</p>
      </div>

      {/* White Arrow at bottom center */}
      <div className="hero-arrow"></div>
    </section>
  );
};

export default HeroSection;
