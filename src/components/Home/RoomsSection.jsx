import React from "react";
import "./RoomsSection.css";
import { Link } from "react-router-dom";
import room1 from '../../optimized-assets/rooms1.webp';
import room2 from '../../optimized-assets/room1.webp';
import room3 from '../../optimized-assets/rooms2.webp';

const rooms = [
  {
    title: "Premium King",
    description: "Experience ultimate comfort in our Premium King Bed Rooms featuring elegant interiors.",
    image: room1,
    link: "/rooms/premium-king-room"
  },
  {
    title: "The Suite",
    description: "Indulge in our spacious Suite Rooms with separate living areas and panoramic views.",
    image: room2,
    link: "/rooms/suite-room"
  },
  {
    title: "The Villa",
    description: "Escape to our charming Villa with private garden access and tranquil surroundings.",
    image: room3,
    link: "/rooms/cottage-room"
  }
];

const RoomsSection = () => {
  return (
    <section className="rooms-section">
      <div className="container">

        <div className="rooms-header-premium">
          <div className="decorative-line-box">
            <div className="vertical-line"></div>
            <div className="diamond-decorator top"></div>
            <div className="diamond-decorator bottom"></div>
          </div>

          <div className="header-text-content">
            <h2 className="rooms-main-title">Stay With Us</h2>
            <h4 className="rooms-main-subtitle">Curated Accommodation for Every Need</h4>
            <Link to="/rooms" className="rooms-all-btn">VIEW ALL ROOMS</Link>
          </div>
        </div>

        <div className="rooms-grid">
          {rooms.map((room, index) => (
            <Link to={room.link} className="room-item-card" key={index}>
              <div className="room-card-image-wrapper">
                <img src={room.image} alt={room.title} className="room-card-img" />
                <div className="room-card-overlay">
                  <span className="room-explore">EXPLORE</span>
                </div>
              </div>
              <div className="room-card-content">
                <h3 className="room-card-title">{room.title}</h3>
                <p className="room-card-desc">{room.description}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RoomsSection;
