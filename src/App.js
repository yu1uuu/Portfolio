// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/About';
import PaintingsPage from './components/Paintings';
import ContactPage from './components/Contact';
import Footer from './components/Footer';
import Project1 from './components/Project1';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/paintings" element={<PaintingsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/project1" element={<Project1 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
