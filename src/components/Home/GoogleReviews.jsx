import React from "react";
import "./GoogleReviews.css";

const GoogleReviews = () => {
  const reviews = [
    {
      name: "Aarav Mehta",
      rating: 5,
      text: "Had an amazing stay! The rooms were clean and the service was exceptional. Highly recommend Royal Ritiz!",
    },
    {
      name: "Priya Sharma",
      rating: 5,
      text: "Loved the ambiance and the food at the restaurant. The staff was super courteous and helpful.",
    },
    {
      name: "Rahul Verma",
      rating: 5,
      text: "The spa experience was heavenly! Definitely one of the best resorts I've been to in a long time.",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span key={index} className={index < rating ? "star filled" : "star"}>
        ★
      </span>
    ));
  };

  return (
    <section className="google-reviews">
      <div className="container">

        {/* Decorative Header */}
        <div className="reviews-header-premium">
          <div className="decorative-line-box">
            <div className="vertical-line"></div>
            <div className="diamond-decorator top"></div>
            <div className="diamond-decorator bottom"></div>
          </div>

          <div className="header-text-content">
            <h2 className="reviews-main-title">Google Reviews</h2>
            <h4 className="reviews-main-subtitle">Voice of Our Valued Guests</h4>
            <button className="all-reviews-btn-premium">ALL REVIEWS</button>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div className="review-card-premium" key={index}>
              <div className="review-card-body">
                <div className="review-stars-gold">{renderStars(review.rating)}</div>
                <p className="review-quote">"{review.text}"</p>
                <div className="review-author">
                  <h4 className="author-name">{review.name}</h4>
                  <span className="google-branding">Google Review</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

  );
};

export default GoogleReviews;
