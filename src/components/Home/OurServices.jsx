import React from "react";
import "./OurServices.css";

const services = [
  {
    title: "Spa",
    description:
      "Rejuvenate your body and soul with our professional spa therapies and wellness treatments designed to relax and refresh you.",
    image:
      "https://images.unsplash.com/photo-1600431521340-491eca880813?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Banquet",
    description:
      "Host your special occasions in our luxurious banquet halls equipped with modern amenities and elegant decor for unforgettable events.",
    image:
      "https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Restaurant",
    description:
      "Savor exquisite cuisines prepared by our expert chefs. Experience fine dining with an ambiance that delights all your senses.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
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
