import React from "react";
import HeroSection from "../components/About/HeroSection";
import AboutCard from "../components/About/AboutCard";
import EnquiryForm from "../components/About/EnquiryForm";
import MapSection from "../components/About/MapSection";
import hotel from '../optimized-assets/Untitled_HDR-2 copy.webp';


const About = () => {
  return (
    <>
      <HeroSection />
      <AboutCard
        title="Our Hotel"
        description="Step into a world of luxury at the premier 5-star hotel in Indore. Royal Ritiz offers the perfect fusion of European style and Indian hospitality for leisure and business travel."
        image={hotel}
        
      />
      <EnquiryForm />
      <MapSection />
    </>
  );
};

export default About;
