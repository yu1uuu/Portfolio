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
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import Project4 from './components/Project4';
import Project5 from './components/Project5';
import Project6 from './components/Project6';

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
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project2 />} />
        <Route path="/project4" element={<Project2 />} />
        <Route path="/project5" element={<Project2 />} />
        <Route path="/project6" element={<Project2 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
