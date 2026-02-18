import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaChevronLeft } from "react-icons/fa";
import { roomsData } from "../data/roomsData";
import "./RoomDetails/RoomDetails.css";
import HeroSection from "../components/Rooms/HeroSection";

const RoomDetail = () => {
    const { roomId } = useParams();
    const room = roomsData[roomId];
    const [currentIndex, setCurrentIndex] = useState(0);

    // Reset index when room changes
    useEffect(() => {
        setCurrentIndex(0);
        window.scrollTo(0, 0);
    }, [roomId]);

    if (!room) {
        return (
            <div className="room-details-container" style={{ padding: "150px 20px", textAlign: "center" }}>
                <h1>Room Not Found</h1>
                <p>The room you are looking for does not exist.</p>
                <Link to="/rooms" className="book-btn" style={{ display: "inline-block", marginTop: "20px" }}>BACK TO ROOMS</Link>
            </div>
        );
    }

    const nextImage = () => setCurrentIndex((prev) => (prev + 1) % room.images.length);
    const prevImage = () =>
        setCurrentIndex((prev) => (prev === 0 ? room.images.length - 1 : prev - 1));

    return (
        <div className="room-detail-wrapper">
            <HeroSection title={room.name} image={room.images[1]} />

            <div className="room-details-container">
                {/* Background Watermarks */}
                <div className="watermark palm-leaf top-left"></div>
                <div className="watermark palm-leaf bottom-right"></div>
                <div className="watermark logo-mark center"></div>

                <Link to="/rooms" className="back-link">
                    <FaChevronLeft size={12} /> BACK TO ALL ROOMS
                </Link>

                {/* Header Section with Decorative Elements */}
                <div className="room-header-section">
                    <div className="decorative-line-container">
                        <div className="decorative-line"></div>
                        <div className="diamond-accent"></div>
                    </div>
                    <h1 className="room-title">{room.name}</h1>
                    <div className="room-category-tag">{room.category}</div>
                </div>

                {/* Image Gallery */}
                <div className="room-gallery">
                    <img
                        src={room.images[currentIndex]}
                        alt={`${room.name} ${currentIndex + 1}`}
                        className="gallery-image"
                    />
                    <button className="gallery-btn left" onClick={prevImage}>
                        <FaArrowLeft />
                    </button>
                    <button className="gallery-btn right" onClick={nextImage}>
                        <FaArrowRight />
                    </button>

                    <div className="gallery-dots">
                        {room.images.map((_, i) => (
                            <span
                                key={i}
                                className={`dot ${i === currentIndex ? "active" : ""}`}
                                onClick={() => setCurrentIndex(i)}
                            ></span>
                        ))}
                    </div>
                    <div className="room-scroll-arrow"></div>
                </div>

                {/* Info Content Grid */}
                <div className="room-content-grid">
                    {/* Main Info Column */}
                    <div className="room-main-info">
                        <div className="info-section">
                            <h2 className="section-title">Overview</h2>
                            <p className="room-description">{room.description}</p>
                        </div>

                        {room.highlights && (
                            <div className="info-section">
                                <h2 className="section-title">Room Highlights</h2>
                                <div className="highlights-grid">
                                    {room.highlights.map((highlight, index) => (
                                        <div key={index} className="highlight-item">
                                            <div className="highlight-dot"></div>
                                            <span>{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="info-section">
                            <h2 className="section-title">Amenities</h2>
                            <ul className="amenities-list">
                                {room.amenities.map((amenity, index) => (
                                    <li key={index}>{amenity}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Sidebar Info Column */}
                    <div className="room-sidebar">
                        <div className="sidebar-card">
                            <h3 className="sidebar-title">Specifications</h3>
                            <div className="spec-item">
                                <span className="spec-label">Size</span>
                                <span className="spec-value">{room.size}</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Capacity</span>
                                <span className="spec-value">{room.guests}</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Views</span>
                                <span className="spec-value">{room.view}</span>
                            </div>

                            <div className="sidebar-cta">
                                <button className="details-btn book-btn">BOOK NOW</button>
                                <p className="cta-note">Best price guaranteed on our website</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RoomDetail;
