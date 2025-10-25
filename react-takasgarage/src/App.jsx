import { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css';
import { NavBar } from "../components/Navbar"
import { HomePage } from "../pages/HomePage"
import { BrowsePage } from "../pages/BrowsePage";
import { AboutPage } from "../pages/AboutPage";
import { ContactPage } from "../pages/ContactPage";
import { Footer } from "../components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <Router>
        <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/browse" element={<BrowsePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
