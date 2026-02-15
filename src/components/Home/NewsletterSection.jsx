import React from 'react';
import './NewsletterSection.css';

const NewsletterSection = () => {
    return (
        <section className="newsletter-section">
            <div className="container newsletter-container">

                <div className="newsletter-left">
                    <h2 className="newsletter-prompt">
                        Would You Like to Receive <br />
                        Our <span className="highlight-text">News and Special Offers?</span>
                    </h2>
                </div>

                <div className="newsletter-right">
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="input-group">
                            <input
                                type="email"
                                placeholder="Enter Your Email ID"
                                className="newsletter-input"
                                required
                            />
                            <button type="submit" className="newsletter-submit-btn">SUBMIT</button>
                        </div>
                    </form>
                </div>

            </div>
            {/* Decorative Wave Line SVG Placeholder or Border */}
            <div className="subtle-wave"></div>
        </section>
    );
};

export default NewsletterSection;
