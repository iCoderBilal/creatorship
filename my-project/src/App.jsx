import React, { useEffect } from "react";
import Homepage from "./pages/Homepage/Homepage";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Creator from "./pages/Creator/Creator";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900, // Animation duration (default is 1200ms)
      once: true, // Whether animation should happen only once (on scroll)
    });
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/creator" element={<Creator />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
