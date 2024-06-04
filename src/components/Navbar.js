// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between', // This aligns items to the edges
      alignItems: 'center',
      backgroundColor: '#7e9278',
      padding: '10px 50px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
      <div style={{ display: 'flex' }}>
        <Link to="/about" style={{ textDecoration: 'none', color: 'white', marginLeft: '30px' }}>About</Link>
        <Link to="/paintings" style={{ textDecoration: 'none', color: 'white', margin: '0 30px' }}>Paintings</Link>
        <Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
