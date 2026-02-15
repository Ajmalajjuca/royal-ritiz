import React from "react";
import HeroSection from "../components/Rooms/HeroSection"; // Reusing reusable Hero
import AboutCard from "../components/About/AboutCard";
import EnquiryForm from "../components/About/EnquiryForm";
import MapSection from "../components/About/MapSection";
import ScrollingLogos from "@/components/About/ScrollingLogos";

// Images
import hotel from '../optimized-assets/Untitled_HDR-2 copy.webp';

const About = () => {
  return (
    <>
      <HeroSection
        title="ABOUT US"
        subtitle="Discover the heritage and hospitality that define Royal Ritiz."
        image={hotel}
      />

      <AboutCard
        title="Welcome to Royal Ritiz"
        description="Step into a world of luxury at the premier 5-star hotel in Hubballi. Royal Ritiz offers the perfect fusion of European elegance and warm Indian hospitality. Whether you are here for business or leisure, our commitment to excellence ensures a stay that is truly unforgettable."
        image={hotel}
      />

      {/* <ScrollingLogos /> */}

      <EnquiryForm />

      <MapSection />
    </>
  );
};

export default About;

