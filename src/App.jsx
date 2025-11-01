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

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/banquet" element={<Banquet />} />
            <Route path="/spa" element={<Spa />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/book-online" element={<BookOnline />} /> */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
