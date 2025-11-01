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
      <div className="reviews-header">
        <h2>GOOGLE REVIEWS</h2>
        <button className="all-reviews-btn">ALL REVIEWS</button>
      </div>

      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="review-info">
              <h3 className="review-name">{review.name}</h3>
              <p className="review-stars">{renderStars(review.rating)}</p>
              <p className="review-text">"{review.text}"</p>
              <p className="review-link">SEE MORE</p>
              <div className="review-footer">
                <div className="review-badge">
                  <span className="google-text">Google</span>
                </div>
                <button className="verify-btn">VERIFIED</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GoogleReviews;
