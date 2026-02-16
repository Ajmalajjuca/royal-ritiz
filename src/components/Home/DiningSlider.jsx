import React, { useRef } from 'react';
import './DiningSlider.css';
import sevilla from '../../optimized-new-assets/Royal_Ritz-152_CAFE.webp';
import lutyens from '../../optimized-new-assets/Royal_Ritz-150_CAFE.webp';
import bakery from '../../optimized-new-assets/Royal_Ritz-151_CAFE.webp';

const diningData = [
    {
        image: sevilla,
        title: "SEVILLA",
        subtitle: "Spanish & Mediterranean Cuisine",
        description: "Sevilla, our Spanish-themed restaurant, is renowned for its authentic Mediterranean cuisine, similar to the ambience found in Mediterranean cities.",
        link: "/restaurant"
    },
    {
        image: lutyens,
        title: "LUTYENS DELI",
        subtitle: "Multi-Cuisine Buffet",
        description: "Established with a vision to provide a delightful dining experience, Lutyens Deli buffet spreads are a true culinary marvel focusing on serving exquisite spread cuisines from around the world.",
        link: "/restaurant"
    },
    {
        image: bakery,
        title: "YE OLD BAKERY",
        subtitle: "Oldest Bakery In Town",
        description: "Ye Old Bakery, one of the best bakeries in Hubli, has been a haven of sweet creations since 1983. As one of the oldest bakeries in the country, it offers guests a taste of history with its refined atmosphere and time-honoured recipes.",
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
