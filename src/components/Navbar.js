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
      padding: '20px 80px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }}>Home</Link>
      <div style={{ display: 'flex' }}>
        <Link to="/about" style={{ textDecoration: 'none', color: 'white', marginLeft: '0px' , fontSize: '20px'}}>About</Link>
        <Link to="/paintings" style={{ textDecoration: 'none', color: 'white', margin: '0 80px' , fontSize: '20px'}}>Paintings</Link>
        <Link to="/contact" style={{ textDecoration: 'none', color: 'white',  marginLeft: '0 90px', fontSize: '20px' }}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
