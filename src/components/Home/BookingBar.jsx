import React from 'react';
import './BookingBar.css';

const BookingBar = () => {
    return (
        <div className="booking-bar-wrapper">
            <div className="booking-bar">
                <div className="booking-field">
                    <label>CHECK IN</label>
                    <input type="date" className="booking-input" />
                </div>

                <div className="booking-divider"></div>

                <div className="booking-field">
                    <label>CHECK OUT</label>
                    <input type="date" className="booking-input" />
                </div>

                <div className="booking-divider"></div>

                <div className="booking-field">
                    <label>GUESTS</label>
                    <select className="booking-select">
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4+ Guests</option>
                    </select>
                </div>

                <div className="booking-divider"></div>

                <div className="booking-field">
                    <label>PROMO CODE</label>
                    <input type="text" placeholder="Optional" className="booking-input" />
                </div>

                <button className="check-availability-btn">
                    CHECK AVAILABILITY
                </button>
            </div>
        </div>
    );
};

export default BookingBar;
