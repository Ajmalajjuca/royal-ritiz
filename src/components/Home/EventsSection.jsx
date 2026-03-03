import React from 'react';
import './EventsSection.css';
const eventImg1 = '/optimized-new-assets/BQT_Royal_Ritz-121.webp';
const eventImg2 = 'https://imgs.search.brave.com/RlyUJsRtLw5ZpSng551cCwm59HtumPVaYTRfpndRmWg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vbXlocS9pbWFn/ZS91cGxvYWQvcV9h/dXRvL3dfMTkyMC9m/X2F1dG8vdF9jcm9w/LTEvd2ViL3Nzci9w/YWdlcy9tZWV0aW5n/LXJvb21zL2hlcm8t/aW1hZ2U';

const EventsSection = () => {
    return (
        <section className="events-section">
            <div className="container">

                {/* Header with Decorative Line (Reusing design language) */}
                <div className="events-header">
                    <div className="decorative-line-box">
                        <div className="vertical-line"></div>
                        <div className="diamond-decorator top"></div>
                        <div className="diamond-decorator bottom"></div>
                    </div>

                    <div className="header-text-content">
                        <h2 className="events-main-title">Experience Elegance: Unforgettable Soirées at Royal Ritz</h2>
                        <h4 className="events-main-subtitle">Epic Event Spaces</h4>
                        <button className="events-explore-btn">EXPLORE</button>
                    </div>
                </div>

                {/* Event Cards Grid */}
                <div className="events-grid">

                    {/* Card 1 */}
                    <div className="event-item-card">
                        <div className="event-card-image-wrapper">
                            <img src={eventImg1} alt="Event Venues" className="event-card-img" />
                        </div>
                        <div className="event-card-content">
                            <h3 className="event-card-title">Event Venues</h3>
                            <p className="event-card-desc">
                                The Sugani Hall, adjacent to the lobby, offers a stunning pool view and can accommodate 300 people in various layouts across 316 sq. m. The Royal Ritz Garden, known for its legendary Sunday Brunch, is ideal for hosting small events, featuring delectable multi-cuisine meals and premium drinks.
                            </p>
                            <a href="/banquet" className="event-card-link">EXPLORE</a>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="event-item-card">
                        <div className="event-card-image-wrapper">
                            <img src={eventImg2} alt="Boardrooms" className="event-card-img" />
                        </div>
                        <div className="event-card-content">
                            <h3 className="event-card-title">Boardrooms</h3>
                            <p className="event-card-desc">
                                King George V, our opulent boardroom in Hubli, and The Senate offer top-notch amenities and facilities, ideal for business meetings, work lunches, and private conferences.
                            </p>
                            <a href="/banquet" className="event-card-link">EXPLORE</a>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default EventsSection;
