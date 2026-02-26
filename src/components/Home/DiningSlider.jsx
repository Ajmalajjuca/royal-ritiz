import React, { useRef } from 'react';
import './DiningSlider.css';
const tangerine = "/optimized-new-assets/Royal Ritz-87.webp";
const poolside = "/optimized-new-assets/Royal Ritz-79.webp";
const bunkerz = "/optimized-new-assets/Royal_Ritz-155_CAFE.webp";
const poolbar = "/optimized-new-assets/Royal Ritz-101.webp";

const diningData = [
    {
        image: tangerine,
        title: "Tangerine",
        subtitle: "ALL-DAY DINING",
        description: "A vibrant all-day dining destination where global flavors meet warm hospitality. Tangerine offers an eclectic menu inspired by world cuisines.",
        link: "/restaurant"
    },
    {
        image: poolside,
        title: "Pool Side",
        subtitle: "OPEN-AIR DINING",
        description: "Unwind by the shimmering poolside with refreshing bites and chilled beverages. Our open-air dining experience combines a relaxed ambiance.",
        link: "/restaurant"
    },
    {
        image: bunkerz,
        title: "Bunkerz",
        subtitle: "LOUNGE & NIGHTLIFE",
        description: "Descend into Bunkerz — our underground lounge where the night comes alive with pulsating music and craft cocktails.",
        link: "/restaurant"
    },
    {
        image: poolbar,
        title: "Pool Bar",
        subtitle: "SIPS BY THE WATER",
        description: "The perfect spot to cool down and sip in style, enjoyed with your feet near the water and the sun on your face.",
        link: "/restaurant"
    }
];

const DiningSlider = () => {
    const sliderRef = useRef(null);

    const scroll = (direction) => {
        if (sliderRef.current) {
            const scrollAmount = 400;
            sliderRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="dining-slider-section">
            {/* Header stays inside container for alignment */}
            <div className="container">

                {/* Header with Decorative Line */}
                <div className="dining-slider-header">
                    <div className="decorative-line-box">
                        <div className="vertical-line"></div>
                        <div className="diamond-decorator top"></div>
                        <div className="diamond-decorator bottom"></div>
                    </div>

                    <div className="header-text-content">
                        <h2 className="dining-main-title">Dine With Decadence</h2>
                        <h4 className="dining-main-subtitle">Offering 9 Exceptional Culinary Experiences</h4>
                        <button className="dining-explore-btn">EXPLORE</button>
                    </div>
                </div>
            </div>

            {/* Carousel moves outside for full width */}
            <div className="dining-carousel-container-full">
                <button className="slider-nav left" onClick={() => scroll('left')}>
                    <span className="arrow">‹</span>
                </button>

                <div className="dining-cards-slider" ref={sliderRef}>
                    {diningData.map((item, index) => (
                        <div className="dining-item-card" key={index}>
                            <div className="dining-card-image-wrapper">
                                <img src={item.image} alt={item.title} className="dining-card-img" />
                            </div>
                            <div className="dining-card-content">
                                <h3 className="dining-card-title">{item.title}</h3>
                                <h5 className="dining-card-subtitle">{item.subtitle}</h5>
                                <p className="dining-card-desc">{item.description}</p>
                                <a href={item.link} className="dining-card-link">EXPLORE</a>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="slider-nav right" onClick={() => scroll('right')}>
                    <span className="arrow">›</span>
                </button>
            </div>
        </section>

    );
};

export default DiningSlider;
