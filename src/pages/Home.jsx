import React from "react";
import HeroSection from "@/components/Home/HeroSection";
import WelcomeSection from "@/components/Home/WelcomeSection";
import IntroductionSection from "@/components/Home/IntroductionSection";
import DiningSlider from "@/components/Home/DiningSlider";
import BenefitsSection from "@/components/Home/BenefitsSection";
import EventsSection from "@/components/Home/EventsSection";
import NewsletterSection from "@/components/Home/NewsletterSection";
import InstagramSection from "@/components/Home/InstagramSection";
import RoomsSection from "@/components/Home/RoomsSection";
import GoogleReviews from "@/components/Home/GoogleReviews";

const Home = () => {
  return (
    <>
      <HeroSection />

      <WelcomeSection />

      <IntroductionSection />

      <DiningSlider />

      <BenefitsSection />

      <EventsSection />

      <RoomsSection />

      <GoogleReviews />

      {/* <NewsletterSection /> */}

      <InstagramSection />
    </>
  );
};

export default Home;
