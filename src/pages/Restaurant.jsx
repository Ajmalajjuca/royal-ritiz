import React from "react";
import HeroSection from "../components/Rooms/HeroSection";
import RestaurantCard from "../components/Restaurants/RestaurantCard";
import "./Restaurant.css";

// Images
const pickwicksImg = "/optimized-new-assets/Royal Ritz-87.webp";
const sevillaImg = "/optimized-new-assets/Royal_Ritz-79.webp";
const jadeImg = "/optimized-new-assets/Royal_Ritz-155_CAFE.webp";
const dhabaImg = "/optimized-new-assets/Royal Ritz-101.webp";

const Restaurant = () => {
  const restaurants = [
    {
      title: "Tangerine",
      subtitle: "ALL-DAY DINING",
      description: "A vibrant all-day dining destination where global flavors meet warm hospitality. Tangerine offers an eclectic menu inspired by world cuisines, served in a bright and welcoming atmosphere perfect for every occasion.",
      image: pickwicksImg,
      details: [
        { label: "Cuisine", value: "Global Fusion" },
        { label: "Hours", value: "7:00 AM - 11:30 PM" },
        { label: "Dress Code", value: "Smart Casual" }
      ]
    },
    {
      title: "Pool Side",
      subtitle: "OPEN-AIR DINING",
      description: "Unwind by the shimmering poolside with refreshing bites and chilled beverages. Our open-air dining experience combines a relaxed ambiance with a curated menu of light meals, grills, and tropical cocktails.",
      image: sevillaImg,
      details: [
        { label: "Cuisine", value: "Continental & Grills" },
        { label: "Setting", value: "Outdoor Pool Deck" },
        { label: "Atmosphere", value: "Relaxed & Breezy" }
      ]
    },
    {
      title: "Bunkerz",
      subtitle: "LOUNGE & NIGHTLIFE",
      description: "Descend into Bunkerz — our underground lounge where the night comes alive. With pulsating music, craft cocktails, and an electric atmosphere, Bunkerz is the ultimate destination for those who seek an unforgettable evening.",
      image: jadeImg,
      details: [
        { label: "Type", value: "Lounge & Bar" },
        { label: "Specialty", value: "Craft Cocktails" },
        { label: "Hours", value: "6:00 PM - 2:00 AM" }
      ]
    },
    {
      title: "Pool Bar",
      subtitle: "SIPS BY THE WATER",
      description: "The perfect spot to cool down and sip in style. Pool Bar offers an extensive selection of handcrafted cocktails, mocktails, and premium spirits, all enjoyed with your feet near the water and the sun on your face.",
      image: dhabaImg,
      details: [
        { label: "Type", value: "Poolside Bar" },
        { label: "Specialty", value: "Cocktails & Mocktails" },
        { label: "Hours", value: "10:00 AM - 10:00 PM" }
      ]
    }
  ];

  return (
    <div className="restaurant-page-wrapper">
      <HeroSection
        title="RESTAURANTS & BARS"
        image={pickwicksImg}
      />

      <section className="restaurant-page-content">
        {/* Background Watermarks */}
        {/* <div className="watermark dining-text">DINING</div> */}
        {/* <div className="watermark culinary-text">CULINARY</div> */}
        <div className="watermark palm-leaf top-right"></div>
        <div className="watermark palm-leaf bottom-left"></div>
        <div className="watermark logo-mark center-right"></div>

        <div className="container">
          <div className="restaurant-intro">
            <span className="restaurant-intro-subtitle">A Gastronomic Odyssey</span>
            <h2 className="restaurant-intro-title">Dining at Royal Ritz</h2>
            <p className="restaurant-intro-desc">
              From the colonial charm of an English deli to the romantic allure of a Spanish garden,
              our award-winning restaurants offer a tapestry of global flavors.
              Every meal is a curated celebration of heritage and innovation.
            </p>
          </div>
        </div>

        <div className="restaurants-list">
          {restaurants.map((item, index) => (
            <RestaurantCard
              key={index}
              index={index}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              image={item.image}
              details={item.details}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Restaurant;


