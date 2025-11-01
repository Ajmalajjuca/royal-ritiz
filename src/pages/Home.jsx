import React from "react";
import HeroSection from "../components/Home/HeroSection";
import AmenitiesSection from "../components/Home/AmenitiesSection";
import RoomsSection from "@/components/Home/RoomsSection";
import OurServices from "@/components/Home/OurServices";
import GoogleReviews from "@/components/Home/GoogleReviews";
import InstagramSection from "@/components/Home/InstagramSection";
const Home = () => {
  return (
    <>
      <HeroSection />
      <AmenitiesSection />
      <RoomsSection />
      <OurServices />
      <GoogleReviews />
      <InstagramSection />
    </>
  );
};

export default Home;
