import React from "react";
import "./DiningSection.css";
const restaurant = '/optimized-new-assets/Royal_Ritz-150_CAFE.webp';
const deck = '/optimized-new-assets/Royal_Ritz-152_CAFE.webp';
import { Link } from "react-router-dom";

const diningOptions = [
  {
    title: "The Royal Kitchen",
    subtitle: "All Day Dining",
    description: "Savor exquisite cuisines prepared by our expert chefs in an ambiance of refined elegance.",
    image: restaurant,
    link: "/restaurant"
  },
  {
    title: "Sky Deck",
    subtitle: "Rooftop Bar & Lounge",
    description: "Experience breathtaking city views while enjoying signature cocktails and gourmet tapas.",
    image: deck,
    link: "/restaurant"
  },
  {
    title: "The Atrium",
    subtitle: "Coffee & High Tea",
    description: "A perfect setting for casual meetings or relaxing evenings with premium blends and pastries.",
    image: restaurant,
    link: "/restaurant"
  }
];

const DiningSection = () => {
  return (
    <section className="dining-section section">
      <div className="container">
        <div className="dining-header text-center">
          <h4 className="section-subtitle">CULINARY DELIGHTS</h4>
          <h2 className="section-title">DINE WITH DECADENCE</h2>
          <div className="title-separator mx-auto"></div>
          <p className="section-desc">
            Embark on a gastronomic journey with our award-winning restaurants,
            each offering a unique flavor palette and setting.
          </p>
        </div>

        <div className="dining-grid">
          {diningOptions.map((item, index) => (
            <div className="dining-card" key={index}>
              <div className="dining-image-wrapper">
                <img src={item.image} alt={item.title} className="dining-image" />
              </div>
              <div className="dining-content text-center">
                <h3 className="dining-title">{item.title}</h3>
                <h5 className="dining-subtitle">{item.subtitle}</h5>
                <p className="dining-desc">{item.description}</p>
                <Link to={item.link} className="btn-link">DISCOVER MORE</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiningSection;

