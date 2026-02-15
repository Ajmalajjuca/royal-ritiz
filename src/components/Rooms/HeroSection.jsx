import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = ({ title, subtitle, image }) => {
  return (
    <section className="inner-hero-section">
      <div
        className="inner-hero-background"
        style={image ? { backgroundImage: `url(${image})` } : {}}
      ></div>
      <div className="inner-hero-overlay"></div>

      <div className="inner-hero-content">
        <h1 className="inner-hero-title">{title}</h1>
        <div className="hero-breadcrumbs">
          <Link to="/">HOME</Link>
          <span>&gt;</span>
          <Link to="/">ROYAL RITIZ NEW DELHI</Link>
          <span>&gt;</span>
          <span className="current">ROOMS</span>
        </div>
      </div>

    </section>

  );
};

export default HeroSection;


