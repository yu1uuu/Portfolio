import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/About';
import PaintingsPage from './components/Paintings';
import ContactPage from './components/Contact';
import Footer from './components/Footer';
import Project1 from './components/Project1';

function App() {
  return (
    <Router>
      <nav style={{
        display: 'flex', 
        justifyContent: 'space-evenly', 
        backgroundColor: '#f8f8f8',
        padding: '10px 20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>Home</Link>
        <Link to="/about" style={{ textDecoration: 'none', color: '#333' }}>About</Link>
        <Link to="/paintings" style={{ textDecoration: 'none', color: '#333' }}>Paintings</Link>
        <Link to="/contact" style={{ textDecoration: 'none', color: '#333' }}>Contact</Link>
      </nav>
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
