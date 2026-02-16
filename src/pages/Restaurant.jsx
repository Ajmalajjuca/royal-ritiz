import React from "react";
import HeroSection from "../components/Rooms/HeroSection";
import RestaurantCard from "../components/Restaurants/RestaurantCard";
import "./Restaurant.css";

// Images
import pickwicksImg from "../optimized-new-assets/Royal_Ritz-150_CAFE.webp";
import sevillaImg from "../optimized-new-assets/Royal_Ritz-152_CAFE.webp";
import jadeImg from "../optimized-new-assets/Royal_Ritz-155_CAFE.webp";
import dhabaImg from "../optimized-new-assets/Royal_Ritz-159_CAFE.webp";
import atriumImg from "../optimized-new-assets/Royal_Ritz-151_CAFE.webp";

const Restaurant = () => {
  const restaurants = [
    {
      title: "Pickwicks",
      subtitle: "CUISINE WITHOUT BORDERS",
      description: "Inspired by Charles Dickens' 'The Pickwick Papers', our all-day dining destination offers a quaint English colonial charm. Savor a versatile selection ranging from British classics to authentic Japanese and European cuisines.",
      image: pickwicksImg,
      details: [
        { label: "Cuisine", value: "Global Fusion" },
        { label: "Hours", value: "7:00 AM - 11:30 PM" },
        { label: "Dress Code", value: "Smart Casual" }
      ]
    },
    {
      title: "Sevilla",
      subtitle: "MEDITERRANEAN ROMANCE",
      description: "Step into our Spanish sanctuary, an award-winning destination set amidst lush gardens. With open-air canopies and the smoky aromas of our Josper oven, Sevilla brings the soul of the Mediterranean to the heart of Hubli.",
      image: sevillaImg,
      details: [
        { label: "Cuisine", value: "Spanish & Mediterranean" },
        { label: "Setting", value: "Garden Dining" },
        { label: "Atmosphere", value: "Romantic" }
      ]
    },
    {
      title: "Jade",
      subtitle: "CANTONESE REFINEMENT",
      description: "Discover a vibrant journey into authentic Cantonese cuisine. Adorned with malachite pillars and brass accents, Jade expertly balances traditional recipes with modern presentations, featuring our signature Dim Sums and Peking Duck.",
      image: jadeImg,
      details: [
        { label: "Cuisine", value: "Authentic Cantonese" },
        { label: "Specialty", value: "Peking Duck" },
        { label: "Hours", value: "12:30 PM - 11:00 PM" }
      ]
    },
    {
      title: "Dhaba",
      subtitle: "RUSTIC PUNJABI SOUL",
      description: "A nostalgic journey to a traditional North Indian village. With its iconic truck decor and thatched roof, Dhaba celebrates robust Punjabi flavors and 80s-inspired kitsch in a lively, spirited atmosphere.",
      image: dhabaImg,
      details: [
        { label: "Cuisine", value: "North Indian / Punjabi" },
        { label: "Experience", value: "Themed Dining" },
        { label: "Must Try", value: "Balti Meat" }
      ]
    },
    {
      title: "The Atrium",
      subtitle: "ELEGANT HIGH TEA",
      description: "A serene, sunlit sanctuary perfect for afternoon rituals. Enjoy a curated selection of premium teas, artisan coffees, and exquisite pastries in a refined turquoise and white setting.",
      image: atriumImg,
      details: [
        { label: "Specialty", value: "High Tea & Pastries" },
        { label: "Hours", value: "10:00 AM - 8:00 PM" },
        { label: "Dress Code", value: "Casual Elegance" }
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


