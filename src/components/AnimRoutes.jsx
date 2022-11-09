import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';

const AnimRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;
