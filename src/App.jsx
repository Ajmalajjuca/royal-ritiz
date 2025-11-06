import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Restaurant from "./pages/Restaurant";
import Banquet from "./pages/Banquet";
import Spa from "./pages/Spa";
import About from "./pages/About";

// Room detail pages
import PremiumKingRoom from "./pages/RoomDetails/PremiumKingRoom";
import SuiteRoom from "./pages/RoomDetails/SuiteRoom";
import CottageRoom from "./pages/RoomDetails/CottageRoom";
import SuperiorTwinRoom from "./pages/RoomDetails/SuperiorTwinRoom";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <main className="main-content">
          <Routes>
            {/* Main pages */}
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/banquet" element={<Banquet />} />
            <Route path="/spa" element={<Spa />} />
            <Route path="/about" element={<About />} />

            {/* Room detail pages — consistent with slug logic */}
            <Route path="/rooms/premium-king-bed-room" element={<PremiumKingRoom />} />
            <Route path="/rooms/suite-room" element={<SuiteRoom />} />
            <Route path="/rooms/cottage-room" element={<CottageRoom />} />
            <Route path="/rooms/superior-twin-room" element={<SuperiorTwinRoom />} />

            {/* <Route path="/book-online" element={<BookOnline />} /> */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
