import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/Rooms/HeroSection";
import "./Rooms.css";

const heroImage = "/optimized-new-assets/Suite_11.webp";

const Rooms = () => {
  const sliderRef = React.useRef(null);

  const roomsDataset = [
    {
      category: "Premium",
      title: "PREMIUM ROOMS",
      description: "Experience refined comfort in our Premium rooms, thoughtfully designed with warm tones, plush bedding, and modern amenities. Ideal for the discerning traveller seeking a perfect balance of style and value in the heart of the city.",
      image: "/optimized-new-assets/Royal Ritz-231.webp",
      link: "/rooms/premium"
    },
    {
      category: "Superior",
      title: "SUPERIOR ROOMS",
      description: "Step into our Superior rooms, where colonial-era charm meets modern luxury. Featuring sensor-activated lighting, a sumptuous 400-thread count mattress, rosewood furnishings, and expansive windows that invite the sun's gentle embrace.",
      image: "/optimized-new-assets/SUP_1.webp",
      link: "/rooms/superior"
    },
    {
      category: "Suite",
      title: "SUITES",
      description: "Our pinnacle offering for the crème de la crème. An opulent living area precedes a luxurious bedroom adorned with handpicked artwork. Every detail reflects timeless elegance and thoughtful design, ensuring your stay is paramount.",
      image: "/optimized-new-assets/Suite_1.webp",
      link: "/rooms/suite"
    },
    {
      category: "Cottage",
      title: "COTTAGES",
      description: "Nestled amidst lush greenery, our Cottages offer an intimate and secluded escape. With private sit-out areas, serene garden views, and bespoke butler service, they are the perfect retreat for a truly private getaway.",
      image: "/optimized-new-assets/Royal Ritz-164 Cottage.webp",
      link: "/rooms/cottage"
    },
  ];

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 590;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="rooms-page-wrapper">
      <HeroSection
        title="ROOMS & SUITES"
        image={heroImage}
      />

      <section className="rooms-page-content suites-section">
        <div className="watermark suites-text">ROOMS</div>
        <div className="watermark palm-leaf bottom-left"></div>
        <div className="watermark logo-mark top-right"></div>

        <div className="container">
          <div className="rooms-intro-section">
            <h2 className="rooms-intro-title">
              Enjoy High-end Hospitality <br />
              With Our Rooms in Hubli
            </h2>
          </div>
        </div>

        <div className="rooms-slider-relative">
          <div className="rooms-nav-controls">
            <button className="rooms-nav-btn left" onClick={() => scrollSlider('left')}>
              <span>‹</span>
            </button>
            <button className="rooms-nav-btn right" onClick={() => scrollSlider('right')}>
              <span>›</span>
            </button>
          </div>

          <div className="rooms-premium-slider suites-slider" ref={sliderRef}>
            {roomsDataset.map((room, index) => (
              <div className="room-card-premium" key={index}>
                <div className="room-card-img-box">
                  <img src={room.image} alt={room.title} className="room-card-image-main" />
                </div>
                <div className="room-card-info-box">
                  <span className="room-card-cat">{room.category}</span>
                  <h3 className="room-card-tit">{room.title}</h3>
                  <p className="room-card-desc-text">{room.description}</p>
                  <Link to={room.link} className="room-card-btn">EXPLORE</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Rooms;
