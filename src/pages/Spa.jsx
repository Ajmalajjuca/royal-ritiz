import React from "react";
import HeroSection from "../components/Rooms/HeroSection";
import SpaCard from "../components/Spa/SpaCard";
import "./Spa.css";

// Images
import spaHero from '../optimized-new-assets/Royal_Ritz-10.webp';
import therapyImg from '../optimized-new-assets/Royal_Ritz-10.webp';
import poolImg from '../optimized-new-assets/DJI_0103.webp';
import massageImg from '../optimized-new-assets/Royal_Ritz-114.webp';
import yogaImg from '../optimized-new-assets/Royal_Ritz-108.webp';

const Spa = () => {
  const services = [
    {
      subtitle: "Cinqtuair Signature",
      title: "ROYAL INDULGENCE MASSAGE",
      description: "Our signature therapy combines ancient Indian healing traditions with contemporary wellness techniques. Experience a rhythmic massage using herb-infused oils tailored to your dosha, followed by a personalized steam session in our private spa suite.",
      image: therapyImg,
      linkText: "VIEW SPA MENU"
    },
    {
      subtitle: "Element: Water",
      title: "WAVES (ROOFTOP POOL)",
      description: "Ascend to our rooftop sanctuary, where the pristine pool meets the Hubli skyline. A tranquil oasis for a refreshing morning swim or a sunset lounge, offering breathtaking city views and a feeling of being 'at one with the sky' within elegant glass-walled surroundings.",
      image: poolImg,
      linkText: "EXPLORE POOL"
    },
    {
      subtitle: "Holistic Wellness",
      title: "AYURVEDIC RITUALS",
      description: "Journey through time with our authentic Ayurvedic treatments. From Shirodhara to Kizhi Potali, our expert therapists use hand-pounded herbs and precious oils to restore your body's natural balance and rejuvenate your soul.",
      image: massageImg,
      linkText: "BOOK RITUAL"
    },
    {
      subtitle: "Mind & Spirit",
      title: "YOGA & MINDFULNESS",
      description: "Find your center in our serene yoga studio. We offer personalized sessions in Hatha, Vinyasa, and Nidra yoga, along with guided meditation practices designed to soothe the mind and invigorate the spirit in the heart of the city.",
      image: yogaImg,
      linkText: "CLASS SCHEDULE"
    }
  ];

  return (
    <div className="spa-page-wrapper">
      <HeroSection
        title="SPA & WELLNESS"
        image={spaHero}
      />

      <section className="spa-page-content">
        {/* Background Watermarks */}
        {/* <div className="watermark wellness-text">WELLNESS</div> */}
        {/* <div className="watermark sanctuary-text">SANCTUARY</div> */}
        <div className="watermark palm-leaf top-left"></div>
        <div className="watermark palm-leaf bottom-right"></div>
        <div className="watermark logo-mark center-left"></div>

        <div className="container">
          <div className="spa-intro">
            <span className="spa-intro-subtitle">A Sanctuary of Refinement</span>
            <h2 className="spa-intro-title">Cinqtuair at Royal Ritz</h2>
            <p className="spa-intro-desc">
              Inspired by the five basic elements of nature—earth, water, air, fire, and space—
              Cinqtuair Spa offers an immersive journey into tranquility.
              Our sanctuary blends timeless architectural elegance with pioneering wellness innovations.
            </p>
          </div>
        </div>

        <div className="spa-list">
          {services.map((service, index) => (
            <SpaCard
              key={index}
              index={index}
              subtitle={service.subtitle}
              title={service.title}
              description={service.description}
              image={service.image}
              linkText={service.linkText}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Spa;


