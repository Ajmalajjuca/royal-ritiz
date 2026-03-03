import React, { useState, useEffect, useRef } from "react";
import "./Gallery.css";

import { galleryImages } from "../../data/galleryImages";

const categories = ["ALL PHOTOS", "EXTERIOR, INTERIOR & LOBBY", "ROOMS", "RESTAURANTS & BARS", "FOOD & DRINKS", "WELLNESS", "EVENT SPACES"];

const IMAGES_PER_PAGE = 12;

const Gallery = () => {
    const [filter, setFilter] = useState("ALL PHOTOS");
    const [filteredImages, setFilteredImages] = useState(galleryImages);
    const [currentPage, setCurrentPage] = useState(1);
    const gridRef = useRef(null);

    useEffect(() => {
        let result;
        if (filter === "ALL PHOTOS") {
            result = galleryImages;
        } else {
            result = galleryImages.filter((img) => {
                if (filter === "EXTERIOR, INTERIOR & LOBBY") return img.category === "Exterior";
                if (filter === "ROOMS") return img.category === "Rooms";
                if (filter === "RESTAURANTS & BARS" || filter === "FOOD & DRINKS") return img.category === "Dining";
                if (filter === "EVENT SPACES") return img.category === "Banquets";
                if (filter === "WELLNESS") return img.category === "Wellness";
                return false;
            });
        }
        setFilteredImages(result);
        setCurrentPage(1); // Reset to first page on filter change
    }, [filter]);

    const totalPages = Math.ceil(filteredImages.length / IMAGES_PER_PAGE);
    const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
    const currentImages = filteredImages.slice(startIndex, startIndex + IMAGES_PER_PAGE);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        if (gridRef.current) {
            gridRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const getPageNumbers = () => {
        const pages = [];
        const maxVisible = 5;
        let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
        let end = Math.min(totalPages, start + maxVisible - 1);
        if (end - start < maxVisible - 1) {
            start = Math.max(1, end - maxVisible + 1);
        }
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        return pages;
    };

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

                <div className="gallery-count">
                    Showing {startIndex + 1}–{Math.min(startIndex + IMAGES_PER_PAGE, filteredImages.length)} of {filteredImages.length} photos
                </div>

                <div className="gallery-grid" ref={gridRef}>
                    {currentImages.map((img) => (
                        <div key={img.id} className="gallery-item">
                            <div className="gallery-image-wrapper">
                                <img src={img.src} alt={img.title} loading="lazy" />
                                <div className="gallery-overlay">
                                    <span className="image-category">{img.category}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {totalPages > 1 && (
                    <div className="gallery-pagination">
                        <button
                            className="page-btn page-nav"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            aria-label="Previous page"
                        >
                            &#8592;
                        </button>

                        {getPageNumbers()[0] > 1 && (
                            <>
                                <button className="page-btn" onClick={() => handlePageChange(1)}>1</button>
                                {getPageNumbers()[0] > 2 && <span className="page-ellipsis">…</span>}
                            </>
                        )}

                        {getPageNumbers().map((page) => (
                            <button
                                key={page}
                                className={`page-btn ${currentPage === page ? "active" : ""}`}
                                onClick={() => handlePageChange(page)}
                            >
                                {page}
                            </button>
                        ))}

                        {getPageNumbers()[getPageNumbers().length - 1] < totalPages && (
                            <>
                                {getPageNumbers()[getPageNumbers().length - 1] < totalPages - 1 && (
                                    <span className="page-ellipsis">…</span>
                                )}
                                <button className="page-btn" onClick={() => handlePageChange(totalPages)}>{totalPages}</button>
                            </>
                        )}

                        <button
                            className="page-btn page-nav"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            aria-label="Next page"
                        >
                            &#8594;
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Gallery;
