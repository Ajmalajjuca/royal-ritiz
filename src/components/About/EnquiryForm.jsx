import React from "react";
import "./EnquiryForm.css";

const EnquiryForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const subjectInput = formData.get("subject");
    const message = formData.get("message");

    const subject = subjectInput || `New Enquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=reservation@royalritz.in&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailLink, "_blank");
  };

  return (
    <section className="enquiry-section">
      {/* Background Watermarks */}
      <div className="watermark palm-leaf top-right"></div>
      <div className="watermark palm-leaf bottom-left"></div>

      <div className="enquiry-container">
        <div className="decorative-line-container">
          <div className="decorative-line"></div>
          <div className="diamond-accent"></div>
        </div>
        <h2 className="enquiry-title">Enquiry Form</h2>
        <p className="enquiry-subtitle">
          Have questions or want to make a reservation? Fill out the form below and our team will get back to you promptly.
        </p>

        <form className="enquiry-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" name="name" placeholder="Full Name" required />
            <input type="email" name="email" placeholder="Email Address" required />
          </div>

          <div className="form-group">
            <input type="text" name="phone" placeholder="Phone Number" required />
            <input type="text" name="subject" placeholder="Subject" />
          </div>

          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>

          <button type="submit" className="submit-btn">Send Enquiry</button>
        </form>
      </div>
    </section>
  );
};

export default EnquiryForm;
