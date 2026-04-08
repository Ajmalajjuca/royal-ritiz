import React from "react";
import HeroSection from "../components/Rooms/HeroSection";
import RestaurantCard from "../components/Restaurants/RestaurantCard";
import "./Restaurant.css";

// Images
const pickwicksImg = "/optimized-new-assets/Royal Ritz-87.webp";
const sevillaImg = "/optimized-new-assets/Royal_Ritz-79.webp";
const jadeImg = "/optimized-new-assets/bunkerz.jpeg";
const dhabaImg = "/optimized-new-assets/Royal Ritz-78.webp";

const Restaurant = () => {
  const restaurants = [
    {
      title: "Tangerine",
      subtitle: "Best Restaurant in Hubli for Veg & Non-Veg Delights",
      description: (
        <>
          <strong>Tangerine – Best Restaurant in Hubli for Veg & Non-Veg Delights</strong>
          
          <p>Welcome to Tangerine, a vibrant all-day dining destination where global flavors meet warm hospitality. Recognized as one of the best restaurants in Hubli, Tangerine is the perfect place for food lovers seeking a memorable dining experience. Whether you're searching for a restaurant near me, planning a family outing, or a business lunch, we offer the ideal ambiance and flavors for every occasion.</p>
          
          <strong>A Hubli Restaurant Serving Global Cuisines</strong>
          
          <p>At Tangerine, we bring together an eclectic mix of cuisines to satisfy every palate. From rich Indian spices to international favorites, our menu is thoughtfully curated to make us one of the top restaurants in Hubli.</p>
          
          <strong>Our Specialties Include:</strong>
          <ul>
            <li>Authentic Indian Cuisine</li>
            <li>Flavorful Chinese Dishes</li>
            <li>Premium Continental Restaurant in Hubli Experience</li>
            <li>Zesty Mexican Food – One of the Best Mexican Hotels in Hubli</li>
            <li>Delicious Tandoor Specialties</li>
            <li>Wide range of Veg & Non-Veg Options</li>
          </ul>
          
          <p>Every dish is prepared with fresh ingredients, expert techniques, and a passion for delivering taste that makes us a famous restaurant in Hubli.</p>
          
          <strong>Perfect Ambiance for Every Occasion</strong>
          
          <p>Tangerine offers a bright, welcoming, and modern dining atmosphere that suits:</p>
          <ul>
            <li>Family dinners</li>
            <li>Casual meetups</li>
            <li>Business lunches</li>
            <li>Celebrations & special occasions</li>
          </ul>
          
          <p>Our warm hospitality and elegant interiors make us a preferred Hubli restaurant for locals and visitors alike.</p>
          
          <strong>Timings</strong>
          <p>🕒 Open Daily: 11:00 AM – 11:30 PM</p>
          
          <strong>Reserve a Table</strong>
          <p>Make your dining experience hassle-free by reserving your table in advance. Enjoy seamless service and avoid waiting time at one of the top restaurants in Hubli.</p>
          
          <strong>Call Us</strong>
          <p>📞 Get in touch with us for reservations, inquiries, or special requests. Our team is always ready to assist you.</p>
          
          <strong>Why Choose Tangerine?</strong>
          <ul>
            <li>One of the best restaurants in Hubli</li>
            <li>Wide variety of veg & non-veg cuisines</li>
            <li>Known as a famous restaurant with great ambiance</li>
            <li>Perfect mix of Indian, Chinese, Continental & Mexican</li>
            <li>Ideal restaurant near me for all occasions</li>
          </ul>
        </>
      ),
      image: pickwicksImg,
      details: [
        { label: "Cuisine", value: "Global Fusion" },
        { label: "Hours", value: "11:00 AM - 11:30 PM" },
        { label: "Dress Code", value: "Smart Casual" }
      ]
    },
    {
      title: "Pool Side",
      subtitle: "OPEN-AIR DINING",
      description: "Unwind by the shimmering poolside with refreshing bites and chilled beverages. Our open-air dining experience combines a relaxed ambiance with a curated menu of light meals, grills, and tropical cocktails.",
      image: sevillaImg,
      details: [
        { label: "Cuisine", value: "Continental & Grills" },
        { label: "Setting", value: "Outdoor Pool Deck" },
        { label: "Atmosphere", value: "Relaxed & Breezy" }
      ]
    },
    {
      title: "Bunkerz",
      subtitle: "LOUNGE & NIGHTLIFE",
      description: "Descend into Bunkerz — our underground lounge where the night comes alive. With pulsating music, craft cocktails, and an electric atmosphere, Bunkerz is the ultimate destination for those who seek an unforgettable evening.",
      image: jadeImg,
      details: [
        { label: "Type", value: "Lounge & Bar" },
        { label: "Specialty", value: "Craft Cocktails" },
        { label: "Hours", value: "6:00 PM - 2:00 AM" }
      ]
    },
    {
      title: "Pool Bar",
      subtitle: "SIPS BY THE WATER",
      description: "The perfect spot to cool down and sip in style. Pool Bar offers an extensive selection of handcrafted cocktails, mocktails, and premium spirits, all enjoyed with your feet near the water and the sun on your face.",
      image: dhabaImg,
      details: [
        { label: "Type", value: "Poolside Bar" },
        { label: "Specialty", value: "Cocktails & Mocktails" },
        { label: "Hours", value: "10:00 AM - 10:00 PM" }
      ]
    }
  ];

  return (
    <div className="restaurant-page-wrapper">
      <HeroSection
        title="RESTAURANTS & BARS"
        image={sevillaImg}
      />

      <section className="restaurant-page-content">
        {/* Background Watermarks */}
        {/* <div className="watermark dining-text">DINING</div> */}
        {/* <div className="watermark culinary-text">CULINARY</div> */}
        <div className="watermark palm-leaf top-right"></div>
        <div className="watermark palm-leaf bottom-left"></div>
        <div className="watermark logo-mark center-right"></div>

        <div className="container">
          <div className="restaurant-intro">
            <span className="restaurant-intro-subtitle">A Gastronomic Odyssey</span>
            <h2 className="restaurant-intro-title">Dining at Royal Ritz</h2>
            <p className="restaurant-intro-desc">
              From the colonial charm of an English deli to the romantic allure of a Spanish garden,
              our award-winning restaurants offer a tapestry of global flavors.
              Every meal is a curated celebration of heritage and innovation.
            </p>
          </div>
        </div>

        <div className="restaurants-list">
          {restaurants.map((item, index) => (
            <RestaurantCard
              key={index}
              index={index}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              image={item.image}
              details={item.details}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Restaurant;


