import React from 'react';
import './WelcomeSection.css';
import hotelExterier from '../../optimized-assets/hotel.webp';

const WelcomeSection = () => {
    return (
        <section className="welcome-section">
            <div className="welcome-container">

                {/* Left Side: Image */}
                <div className="welcome-image-side">
                    <img
                        src={hotelExterier}
                        alt="The Capitol of Luxury"
                        className="welcome-main-image"
                    />
                </div>

                {/* Right Side: Content */}
                <div className="welcome-content-side">
                    <div className="welcome-text-wrapper">
                        <h2 className="welcome-title">
                            The Capitol of Luxury in India's Capital
                        </h2>
                        <h4 className="welcome-subtitle">
                            Royal Ritz Hubli
                        </h4>

                        <div className="welcome-body">
                            <p>
                                Our flagship hotel in Hubli epitomises exceptional
                                hospitality by seamlessly blending timeless elegance with
                                modern luxury, crafting memorable experiences in the
                                heart of the capital city. Established in 1955, our esteemed
                                luxury establishment has stood as a beacon of excellence
                                in Hubli from its inception.
                            </p>
                            <p>
                                From rooms that exude old-world charm to event spaces of
                                unparalleled grandeur, dining experiences fit for royalty,
                                and facilities designed for the discerning, we prioritise
                                your experience above all else and assure you a stay that
                                will be truly extraordinary, with every moment
                                characterised by magnificence.
                            </p>
                        </div>

                        <a href="/about" className="our-story-link">OUR STORY</a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WelcomeSection;
