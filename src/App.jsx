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

import RoomDetail from "./pages/RoomDetail";

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

            {/* Dynamic Room Details */}
            <Route path="/rooms/:roomId" element={<RoomDetail />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
