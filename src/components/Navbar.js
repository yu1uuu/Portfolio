import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      position: 'fixed', // Makes the navbar overlap the content and stay at the top
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000, // Ensures the navbar stays on top of other content
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'rgba(126, 146, 120, 0.8)', // Semi-transparent background
      padding: '20px 80px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }}>Home</Link>
      <div style={{ display: 'flex' }}>
        <Link to="/about" style={{ textDecoration: 'none', color: 'white', marginLeft: '0px' , fontSize: '20px'}}>About</Link>
        <Link to="/experience" style={{ textDecoration: 'none', color: 'white', marginLeft: '50px', fontSize: '20px' }}>Experiences</Link>
        <Link to="/paintings" style={{ textDecoration: 'none', color: 'white', margin: '0 50px', fontSize: '20px'}}>Paintings</Link>
        <Link to="/contact" style={{ textDecoration: 'none', color: 'white', marginLeft: '50px', fontSize: '20px' }}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
