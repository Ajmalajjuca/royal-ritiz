import React from 'react';
import './InstagramSection.css';
import insta1 from '../../optimized-assets/hotel.webp';
import insta2 from '../../optimized-assets/hero.webp';
import insta3 from '../../optimized-assets/banquet.webp';
import insta4 from '../../optimized-assets/HDR3.webp';

const InstagramSection = () => {
  const instaImages = [insta1, insta2, insta3, insta4];

  return (
    <section className="instagram-section">
      <div className="container">
        <div className="insta-header">
          <h2 className="insta-hashtag">#royalritiznewdelhi</h2>
          <p className="insta-subtext">
            Visit <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">@royalritiznewdelhi</a> on @ to discover unforgettable guest experiences at Royal Ritiz New Delhi.
          </p>
        </div>

        <div className="insta-grid">
          {instaImages.map((img, index) => (
            <div className="insta-item" key={index}>
              <img src={img} alt={`Instagram ${index + 1}`} className="insta-img" />
              <div className="insta-overlay">
                <span className="insta-icon">📷</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
