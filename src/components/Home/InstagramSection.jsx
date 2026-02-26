import React from 'react';
import './InstagramSection.css';
const insta1 = '/optimized-new-assets/Royal_Ritz-233.webp';
const insta2 = '/optimized-new-assets/DJI_0164.webp';
const insta3 = '/optimized-new-assets/Royal_Ritz-199.webp';
const insta4 = '/optimized-new-assets/Royal_Ritz-197.webp';

const InstagramSection = () => {
  const instaImages = [insta1, insta2, insta3, insta4];

  return (
    <section className="instagram-section">
      <div className="container">
        <div className="insta-header">
          <h2 className="insta-hashtag">#royalritzofficial</h2>
          <p className="insta-subtext">
            Visit <a href="https://www.instagram.com/royalritzofficial/" target="_blank" rel="noopener noreferrer">@royalritzofficial</a> on @ to discover unforgettable guest experiences at Royal Ritz Hubli.
          </p>
        </div>

        <div className="insta-grid">
          {instaImages.map((img, index) => (
            <div className="insta-item" key={index}>
              <img src={img} alt={`Instagram ${index + 1}`} className="insta-img" />
              <div className="insta-overlay">
                <span className="insta-icon"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
