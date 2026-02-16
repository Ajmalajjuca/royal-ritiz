import React from 'react';
import './InstagramSection.css';
import insta1 from '../../optimized-new-assets/Royal_Ritz-233.webp';
import insta2 from '../../optimized-new-assets/DJI_0164.webp';
import insta3 from '../../optimized-new-assets/Royal_Ritz-199.webp';
import insta4 from '../../optimized-new-assets/Royal_Ritz-197.webp';

const InstagramSection = () => {
  const instaImages = [insta1, insta2, insta3, insta4];

  return (
    <section className="instagram-section">
      <div className="container">
        <div className="insta-header">
          <h2 className="insta-hashtag">#royalRitznewHubli</h2>
          <p className="insta-subtext">
            Visit <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">@royalRitznewHubli</a> on @ to discover unforgettable guest experiences at Royal Ritz Hubli.
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
