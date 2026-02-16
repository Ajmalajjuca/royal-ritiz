import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/Rooms/HeroSection";
import "./Rooms.css";
import suite1 from "../optimized-new-assets/Suite_1.webp";
import suite2 from "../optimized-new-assets/Suite_7.webp";
import suite3 from "../optimized-new-assets/Suite_8.webp";
import deluxe1 from "../optimized-new-assets/Sup_2.webp";
import deluxe2 from "../optimized-new-assets/Sup_5.webp";
import deluxe3 from "../optimized-new-assets/SUP_1.webp";
import heroImage from "../optimized-new-assets/Suite_11.webp";

const Rooms = () => {
  const suitesSliderRef = React.useRef(null);
  const roomsSliderRef = React.useRef(null);

  const suiteRoomsDataset = [
    {
      category: "Suite",
      title: "EXECUTIVE SUITE",
      description: "Our pinnacle offering in Lutyens Hubli for the crème de la crème is this exquisite suite. An opulent living area precedes a luxurious bedroom adorned with handpicked artwork. Every detail reflects timeless elegance and thoughtful design, and all of which ensure your stay with us is paramount.",
      image: suite1,
      link: "/rooms/executive-suite"
    },
    {
      category: "Suite",
      title: "LUXURY SUITE",
      description: "A suite exuding old-school charm and luxury, nestled in the renowned Lutyens Hubli, synonymous with colonial elegance. This suite boasts aesthetically pleasing interiors and a large window offers calming views of the serene surroundings. Enhanced by an array of amenities and a spacious walk-in closet, they prepare you elegantly for the day ahead.",
      image: suite2,
      link: "/rooms/luxury-suite"
    },
    {
      category: "Suite",
      title: "LUXURY SUITE WITH WHIRLPOOL",
      description: "Exuding a classic and time-honoured ambience, this sprawling world-suite aims to elevate relaxation to its utmost pinnacle. With plush beds and high-speed wireless Internet, cable satellite and a private indulgent whirlpool, ensuring an unparalleled stay, presented within a colonial-inspired suite.",
      image: suite3,
      link: "/rooms/luxury-suite-whirlpool"
    },
  ];

  const deluxeRoomsDataset = [
    {
      category: "Deluxe",
      title: "DELUXE KING BED ROOM - POOL VIEW",
      description: "This room radiates colonial charm and elegance with ornamental side lamps and unique artwork that chronicles Hubli's rich history. Complemented by a sumptuous soft bed, luxurious amenities, and breathtaking views of a pristine pool, we provide a modern yet culturally enriched heritage stay option.",
      image: deluxe1,
      link: "/rooms/deluxe-pool-view"
    },
    {
      category: "Luxury",
      title: "LUXURY KING BED ROOM",
      description: "An elegant room aglow with sensor-activated lighting upon entry, designed to highlight its exceptional features: a sumptuous 400-thread count mattress, graceful rosewood furnishings, and expansive windows inviting the sun's gentle embrace.",
      image: deluxe2,
      link: "/rooms/luxury-king"
    },
    {
      category: "Luxury",
      title: "LUXURY TWIN BED ROOM WITH BALCONY",
      description: "Ideal for a guest to share a coffee while overlooking the stunning greenery or the pristine pool, our balcony room is your quintessential vintage-style retreat. Featuring modern amenities within timeless colonial décor, this room ensures your stay is both sophisticated and memorable.",
      image: deluxe3,
      link: "/rooms/luxury-twin-balcony"
    }
  ];

  const scrollSlider = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = 590; // 550px card width + 40px gap
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="rooms-page-wrapper">
      <HeroSection
        title="ROOMS & SUITES"
        image={heroImage}
      />

      {/* SUITES SECTION */}
      <section className="rooms-page-content suites-section">
        <div className="watermark suites-text">SUITES</div>
        <div className="watermark palm-leaf bottom-left"></div>
        <div className="watermark logo-mark top-right"></div>

        <div className="container">
          <div className="rooms-intro-section">
            <h2 className="rooms-intro-title">
              Enjoy High-end Hospitality <br />
              With Our Rooms in Ne
            </h2>
          </div>
        </div>

        <div className="rooms-slider-relative">
          <div className="rooms-nav-controls">
            <button className="rooms-nav-btn left" onClick={() => scrollSlider(suitesSliderRef, 'left')}>
              <span>‹</span>
            </button>
            <button className="rooms-nav-btn right" onClick={() => scrollSlider(suitesSliderRef, 'right')}>
              <span>›</span>
            </button>
          </div>

          <div className="rooms-premium-slider suites-slider" ref={suitesSliderRef}>
            {suiteRoomsDataset.map((room, index) => (
              <div className="room-card-premium" key={index}>
                <div className="room-card-img-box">
                  <img src={room.image} alt={room.title} className="room-card-image-main" />
                </div>
                <div className="room-card-info-box">
                  <span className="room-card-cat">{room.category}</span>
                  <h3 className="room-card-tit">{room.title}</h3>
                  <p className="room-card-desc-text">{room.description}</p>
                  <Link to={room.link} className="room-card-btn">EXPLORE</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROOMS SECTION */}
      <section className="rooms-page-content rooms-list-section">
        <div className="watermark rooms-text">ROOMS</div>
        <div className="watermark palm-leaf bottom-right"></div>
        <div className="watermark logo-mark top-left"></div>

        <div className="container">
          <div className="rooms-intro-section mirrored">
            <h2 className="rooms-intro-title">
              Exquisite Comfort <br />
              In Every Corner
            </h2>
          </div>
        </div>

        <div className="rooms-slider-relative mirrored">
          <div className="rooms-nav-controls">
            <button className="rooms-nav-btn left" onClick={() => scrollSlider(roomsSliderRef, 'left')}>
              <span>‹</span>
            </button>
            <button className="rooms-nav-btn right" onClick={() => scrollSlider(roomsSliderRef, 'right')}>
              <span>›</span>
            </button>
          </div>

          <div className="rooms-premium-slider rooms-slider" ref={roomsSliderRef}>
            {deluxeRoomsDataset.map((room, index) => (
              <div className="room-card-premium" key={index}>
                <div className="room-card-img-box">
                  <img src={room.image} alt={room.title} className="room-card-image-main" />
                </div>
                <div className="room-card-info-box">
                  <span className="room-card-cat">{room.category}</span>
                  <h3 className="room-card-tit">{room.title}</h3>
                  <p className="room-card-desc-text">{room.description}</p>
                  <Link to={room.link} className="room-card-btn">EXPLORE</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>

  );
};

export default Rooms;

