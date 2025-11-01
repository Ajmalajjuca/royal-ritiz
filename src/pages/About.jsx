import React from "react";
import HeroSection from "../components/About/HeroSection";
import AboutCard from "../components/About/AboutCard";
import EnquiryForm from "../components/About/EnquiryForm";
import MapSection from "../components/About/MapSection";

const About = () => {
  return (
    <>
      <HeroSection />
      <AboutCard
        title="Our Hotel"
        description="Step into a world of luxury at the premier 5-star hotel in Indore. Royal Ritiz offers the perfect fusion of European style and Indian hospitality for leisure and business travel."
        image="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Royal Ritiz Hotel"
      />
      <EnquiryForm />
      <MapSection />
    </>
  );
};

export default About;
