import React, { useState, useEffect } from "react";
import "./Gallery.css";

import { galleryImages } from "../../data/galleryImages";

const categories = ["ALL PHOTOS", "EXTERIOR, INTERIOR & LOBBY", "ROOMS", "RESTAURANTS & BARS", "FOOD & DRINKS", "WELLNESS", "EVENT SPACES"];

const Gallery = () => {
    const [filter, setFilter] = useState("ALL PHOTOS");
    const [filteredImages, setFilteredImages] = useState(galleryImages);

    useEffect(() => {
        if (filter === "ALL PHOTOS") {
            setFilteredImages(galleryImages);
        } else {
            // Map the new labels back to the internal categories if necessary, 
            // but for now I'll just adjust the internal categories to match.
            setFilteredImages(galleryImages.filter((img) => {
                if (filter === "EXTERIOR, INTERIOR & LOBBY") return img.category === "Exterior";
                if (filter === "ROOMS") return img.category === "Rooms";
                if (filter === "RESTAURANTS & BARS" || filter === "FOOD & DRINKS") return img.category === "Dining";
                if (filter === "EVENT SPACES") return img.category === "Banquets";
                if (filter === "WELLNESS") return img.category === "Wellness"; // We don't have wellness images yet, but keep placeholder
                return false;
            }));
        }
    }, [filter]);

    return (
        <div className="gallery-page">
            <section className="gallery-hero">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">GALLERY</h1>
                    <div className="breadcrumbs">
                        <span>HOME</span> / <span>ROYAL RITZ</span> / <span>GALLERY</span>
                    </div>
                </div>
            </section>

            <div className="gallery-container">
                <div className="gallery-header">
                    <h2 className="refined-gallery-title">Bask in the Beauty of Our Property</h2>
                </div>

                <div className="gallery-filters">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? "active" : ""}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="gallery-grid">
                    {filteredImages.map((img) => (
                        <div key={img.id} className="gallery-item">
                            <div className="gallery-image-wrapper">
                                <img src={img.src} alt={img.title} loading="lazy" />
                                <div className="gallery-overlay">
                                    <span className="image-category">{img.category}</span>
                                    {/* <h3 className="image-title">{img.title}</h3> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
