import React, { useEffect } from 'react';
import './InstagramSection.css';

const InstagramSection = () => {
  useEffect(() => {
    // Load Elfsight platform script if not already loaded
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="instagram-section">
      <div className="container">
        <div className="insta-header">
          <h2 className="insta-hashtag">#royalritzofficial</h2>
          <p className="insta-subtext">
            Visit{' '}
            <a
              href="https://www.instagram.com/royalritzofficial/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @royalritzofficial
            </a>{' '}
            on Instagram to discover unforgettable guest experiences at Royal Ritz Hubli.
          </p>
        </div>

        {/* Elfsight Instagram Feed */}
        <div class="elfsight-app-93a39593-40d7-4033-b114-8d31ba17c0ce" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
};

export default InstagramSection;
