import React from "react";
import HeroSection from "../components/Spa/HeroSection";
import SpaCard from "../components/Spa/SpaCard";
import restaurant from '../optimized-assets/hotel.webp';
import banquet from '../optimized-assets/banquet.webp';
import spa from '../optimized-assets/spa.webp';
const Spa = () => {
  const spaServices = [
    {
      title: "SAUNA",
      description: "Experience the therapeutic benefits of our traditional Finnish sauna. Relax in our warm wooden sauna rooms, perfect for detoxification, stress relief, and muscle recovery. Our state-of-the-art facilities offer both dry and steam sauna options to enhance your wellness journey.",
      image: restaurant,
      imageAlt: "Sauna"
    },
    {
      title: "WELLNESS",
      description: "Comprehensive wellness programs designed to rejuvenate your mind, body, and spirit. Our holistic approach combines ancient healing traditions with modern wellness techniques. From personalized fitness programs to mindfulness sessions, discover a complete path to optimal health and vitality.",
      image: banquet,
      imageAlt: "Wellness"
    },
    {
      title: "OIL THERAPY",
      description: "Indulge in our signature oil therapy treatments using premium essential oils from around the world. Each session is customized to address your specific needs, promoting deep relaxation, stress reduction, and natural healing. Our expert therapists blend therapeutic oils to create unique, personalized experiences.",
      image: spa,
      imageAlt: "Oil Therapy"
    },
    {
      title: "MASSAGE",
      description: "Professional massage therapies ranging from Swedish and deep tissue to aromatherapy and hot stone. Our expert therapists will customize each session to your preferences, targeting tension, improving circulation, and promoting overall relaxation. Experience the perfect blend of traditional techniques and modern innovations.",
      image: spa,
      imageAlt: "Massage"
    },
    {
      title: "TREATMENTS",
      description: "A wide array of spa treatments including body wraps, scrubs, and therapeutic baths. Experience luxury skincare and body care treatments using premium products. From detoxifying body wraps to hydrating treatments, our comprehensive menu addresses all your beauty and wellness needs.",
      image: restaurant,
      imageAlt: "Treatments"
    },
    {
      title: "FACIALS",
      description: "Expert facial treatments tailored to your skin type. From deep cleansing and anti-aging to hydrating and brightening facials, restore your natural glow. Our aestheticians use advanced techniques and premium skincare products to deliver visible results and radiant, healthy-looking skin.",
      image: banquet,
      imageAlt: "Facials"
    }
  ];

  return (
    <>
      <HeroSection />
      {spaServices.map((service, index) => (
        <SpaCard
          key={index}
          title={service.title}
          description={service.description}
          image={service.image}
          imageAlt={service.imageAlt}
        />
      ))}
    </>
  );
};

export default Spa;
