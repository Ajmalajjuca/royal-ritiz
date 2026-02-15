import React from "react";
import HeroSection from "../components/Rooms/HeroSection";
import BanquetCard from "../components/Banquet/BanquetCard";
import "./Banquet.css";

// Images
import banquetHero from '../optimized-assets/banquet.webp';
import viceroyImg from '../optimized-assets/banquet.webp';
import senateImg from '../optimized-assets/hotel.webp';
import gardenImg from '../optimized-assets/HDR3.webp';
import boardRoomImg from '../optimized-assets/spa.webp';

const Banquet = () => {
  const venues = [
    {
      subtitle: "ESTEEMED",
      title: "VICEROY HALL",
      description: "Steeped in history and regal splendor, Viceroy Hall is the jewel of Royal Ritz. Overlooking the lush gardens and pool, this grand hall features mammoth chandeliers and intricate colonial motifs, providing a majestic backdrop for weddings and high-profile galas for up to 500 guests.",
      image: viceroyImg,
      linkText: "VIEW PROPOSAL"
    },
    {
      subtitle: "SOPHISTICATED",
      title: "THE SENATE",
      description: "Designed for the modern executive, The Senate offers an atmosphere of refined professionalism. With its wood-paneled walls and state-of-the-art conferencing technology, it is the ideal venue for strategy sessions, intimate press conferences, and executive board meetings for up to 80 delegates.",
      image: senateImg,
      linkText: "ENQUIRE NOW"
    },
    {
      subtitle: "AL FRESCO",
      title: "THE ROYAL GARDENS",
      description: "Experience the charm of a vintage outdoor celebration in The Royal Gardens. Surrounded by centuries-old palms and manicured lawns, this versatile space transform into a magical venue for moonlit cocktails, sun-drenched brunches, or grand receptions under the stars.",
      image: gardenImg,
      linkText: "EXPLORE VENUE"
    },
    {
      subtitle: "EXECUTIVELY",
      title: "VICEREGAL BOARDROOM",
      description: "An exclusive space for the inner circle, the Viceregal Boardroom combines comfort with cutting-edge technology. Tailored for discrete discussions and high-stakes negotiations, this room accommodates up to 25 guests in a setting that reflects timeless power and prestige.",
      image: boardRoomImg,
      linkText: "BOOK NOW"
    }
  ];

  return (
    <div className="banquet-page-wrapper">
      <HeroSection
        title="MEETINGS & EVENTS"
        image={banquetHero}
      />

      <section className="banquet-page-content">
        {/* Background Watermarks */}
        {/* <div className="watermark events-text">EVENTS</div> */}
        {/* <div className="watermark venues-text">VENUES</div> */}
        <div className="watermark palm-leaf top-right"></div>
        <div className="watermark palm-leaf bottom-left"></div>
        <div className="watermark logo-mark center-right"></div>

        <div className="container">
          <div className="banquet-intro">
            <h2 className="banquet-intro-title">Host Unforgettable Moments</h2>
            <p className="banquet-intro-desc">
              From grand weddings steeped in tradition to high-stakes corporate summits,
              Royal Ritz offers a collection of distinguished venues that blend
              historical charm with modern luxury.
            </p>
          </div>
        </div>

        <div className="banquet-list">
          {venues.map((venue, index) => (
            <BanquetCard
              key={index}
              index={index}
              subtitle={venue.subtitle}
              title={venue.title}
              description={venue.description}
              image={venue.image}
              linkText={venue.linkText}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Banquet;


