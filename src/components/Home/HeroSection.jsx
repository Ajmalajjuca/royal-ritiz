import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import BookingBar from "./BookingBar";

const hero1 = '/optimized-new-assets/DJI_0163.webp';
const hero2 = '/optimized-new-assets/Royal_Ritz-101.webp';
const hero3 = '/optimized-new-assets/DSC01348.webp';

const images = [hero1, hero2, hero3];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
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

      <div className="hero-content">
        <h2 className="hero-subtitle">HUBLI</h2>
        <h1 className="hero-title">ROYAL Ritz</h1>
        <div className="hero-divider"></div>
        {/* <p className="hero-description">Since 1955</p> */}
      </div>

      {/* <BookingBar /> */}
    </section>
  );
};

export default HeroSection;


