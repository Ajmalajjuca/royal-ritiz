import React, { useState, useEffect } from "react";
import "./Gallery.css";

const galleryImages = [
    // Exterior / Aerial
    { id: 1, src: "/src/optimized-new-assets/DJI_0090.webp", category: "Exterior", title: "Aerial View" },
    { id: 2, src: "/src/optimized-new-assets/DJI_0103.webp", category: "Exterior", title: "Aerial Property Shot" },
    { id: 3, src: "/src/optimized-new-assets/DJI_0163.webp", category: "Exterior", title: "Aerial Entrance" },
    { id: 4, src: "/src/optimized-new-assets/DJI_0164.webp", category: "Exterior", title: "Property Overview" },
    { id: 5, src: "/src/optimized-new-assets/DSC02000.webp", category: "Exterior", title: "Evening View" },

    // Rooms & Suites
    { id: 6, src: "/src/optimized-new-assets/Royal_Ritz-10.webp", category: "Rooms", title: "Royal Suite" },
    { id: 7, src: "/src/optimized-new-assets/Royal_Ritz-34.webp", category: "Rooms", title: "Luxury Room" },
    { id: 8, src: "/src/optimized-new-assets/Royal_Ritz-40.webp", category: "Rooms", title: "Premium Suite" },
    { id: 9, src: "/src/optimized-new-assets/Royal_Ritz-50.webp", category: "Rooms", title: "Executive Room" },
    { id: 10, src: "/src/optimized-new-assets/Royal_Ritz-69.webp", category: "Rooms", title: "Suite Bedroom" },
    { id: 11, src: "/src/optimized-new-assets/Suite_1.webp", category: "Rooms", title: "Master Suite" },
    { id: 12, src: "/src/optimized-new-assets/Suite_8.webp", category: "Rooms", title: "Grand Suite" },
    { id: 13, src: "/src/optimized-new-assets/SUP_1.webp", category: "Rooms", title: "Superior Room" },

    // Dining
    { id: 14, src: "/src/optimized-new-assets/Royal_Ritz-150_CAFE.webp", category: "Dining", title: "Gourmet Cafe" },
    { id: 15, src: "/src/optimized-new-assets/Royal_Ritz-151_CAFE.webp", category: "Dining", title: "Cafe Interior" },
    { id: 16, src: "/src/optimized-new-assets/Royal_Ritz-155_CAFE.webp", category: "Dining", title: "Dining Area" },
    { id: 17, src: "/src/optimized-new-assets/Royal_Ritz-159_CAFE.webp", category: "Dining", title: "Restaurant View" },

    // Banquets
    { id: 18, src: "/src/optimized-new-assets/BQT_Royal_Ritz-121.webp", category: "Banquets", title: "Grand Ballroom" },
    { id: 19, src: "/src/optimized-new-assets/BQT_Royal_Ritz-122.webp", category: "Banquets", title: "Event Space" },
    { id: 20, src: "/src/optimized-new-assets/Royal_Ritz-125_BQT.webp", category: "Banquets", title: "Banquet Hall" },
    { id: 21, src: "/src/optimized-new-assets/Royal_Ritz-133_BQT.webp", category: "Banquets", title: "Meeting Room" },

    // Cottages
    { id: 22, src: "/src/optimized-new-assets/Royal_Ritz-163_Cottage.webp", category: "Cottages", title: "Private Cottage" },
    { id: 23, src: "/src/optimized-new-assets/Royal_Ritz-172_Cottage.webp", category: "Cottages", title: "Poolside Cottage" },
    { id: 24, src: "/src/optimized-new-assets/Royal_Ritz-180_Cottage.webp", category: "Cottages", title: "Cozy Retreat" },
    { id: 25, src: "/src/optimized-new-assets/Royal_Ritz-188_Cottage.webp", category: "Cottages", title: "Cottage Interior" },
];

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
                                    <h3 className="image-title">{img.title}</h3>
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
