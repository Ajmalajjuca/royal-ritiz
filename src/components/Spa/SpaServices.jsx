import React from "react";
import "./SpaServices.css";

const SpaServices = () => {
  const services = [
    {
      id: 1,
      title: "SAUNA",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      description: "Experience the therapeutic benefits of our traditional Finnish sauna. Relax in our warm wooden sauna rooms, perfect for detoxification, stress relief, and muscle recovery."
    },
    {
      id: 2,
      title: "WELLNESS",
      image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=800&q=80",
      description: "Comprehensive wellness programs designed to rejuvenate your mind, body, and spirit. Our holistic approach combines ancient healing traditions with modern wellness techniques."
    },
    {
      id: 3,
      title: "OIL THERAPY",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d1da?auto=format&fit=crop&w=800&q=80",
      description: "Indulge in our signature oil therapy treatments using premium essential oils. Each session is customized to address your specific needs, promoting deep relaxation and healing."
    },
    {
      id: 4,
      title: "MASSAGE",
      image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=800&q=80",
      description: "Professional massage therapies ranging from Swedish and deep tissue to aromatherapy and hot stone. Our expert therapists will customize each session to your preferences."
    },
    {
      id: 5,
      title: "TREATMENTS",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d1da?auto=format&fit=crop&w=800&q=80",
      description: "A wide array of spa treatments including body wraps, scrubs, and therapeutic baths. Experience luxury skincare and body care treatments using premium products."
    },
    {
      id: 6,
      title: "FACIALS",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d1da?auto=format&fit=crop&w=800&q=80",
      description: "Expert facial treatments tailored to your skin type. From deep cleansing and anti-aging to hydrating and brightening facials, restore your natural glow."
    }
  ];

  return (
    <section className="spa-services">
      <div className="spa-services-container">
        {services.map((service) => (
          <div key={service.id} className="spa-service-card">
            <div className="spa-service-image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="spa-service-content">
              <h3 className="spa-service-title">{service.title}</h3>
              <p className="spa-service-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpaServices;

