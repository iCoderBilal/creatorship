import React, { useEffect } from "react";
import Homepage from "./pages/Homepage/Homepage";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Creator from "./pages/Creator/Creator";
import Business from "./pages/Business/Business";
import ScrollToTop from "./Components/ScrollToTop";
import Contact from "./pages/Contact/Contact";
import Meeting from "./pages/Meeting/Meeting";
import usePageTracking from "./Components/usePageTracking";

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
        <ScrollToTop />
        <usePageTracking />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/creator" element={<Creator />} />
          <Route path="/business" element={<Business />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bookameeting" element={<Meeting />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
