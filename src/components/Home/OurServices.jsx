import React from "react";
import "./OurServices.css";

import restaurant from '../../optimized-assets/hotel.webp';
import banquet from '../../optimized-assets/banquet.webp';
import spa from '../../optimized-assets/spa.webp';
const services = [
  {
    title: "Spa",
    description:
      "Rejuvenate your body and soul with our professional spa therapies and wellness treatments designed to relax and refresh you.",
    image:
      spa
  },
  {
    title: "Banquet",
    description:
      "Host your special occasions in our luxurious banquet halls equipped with modern amenities and elegant decor for unforgettable events.",
    image:
      banquet
  },
  {
    title: "Restaurant",
    description:
      "Savor exquisite cuisines prepared by our expert chefs. Experience fine dining with an ambiance that delights all your senses.",
    image:
      restaurant,
  },
];

const OurServices = () => {
  return (
    <section className="our-services">
      <div className="services-header">
        <h2>OUR SERVICES</h2>
      </div>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-image-container">
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />
              <div className="image-overlay"></div>
            </div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="learn-more-btn">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
