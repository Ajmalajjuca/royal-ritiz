import React from "react";
import "./EnquiryForm.css";

const EnquiryForm = () => {
  return (
    <section className="enquiry-section">
      <div className="enquiry-container">
        <h2 className="enquiry-title">Enquiry Form</h2>
        <p className="enquiry-subtitle">
          Have questions or want to make a reservation? Fill out the form below and our team will get back to you promptly.
        </p>

        <form className="enquiry-form">
          <div className="form-group">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
          </div>

          <div className="form-group">
            <input type="text" placeholder="Phone Number" required />
            <input type="text" placeholder="Subject" />
          </div>

          <textarea rows="5" placeholder="Your Message" required></textarea>

          <button type="submit" className="submit-btn">Send Enquiry</button>
        </form>
      </div>
    </section>
  );
};

export default EnquiryForm;
