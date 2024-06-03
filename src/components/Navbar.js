import React from 'react';

function Navbar() {
  return (
    <nav style={{
      display: 'flex', 
      justifyContent: 'space-evenly', 
      alignItems: 'right', 
      backgroundColor: '#f8f8f8', 
      padding: '10px 20px', // Adds padding around the navigation bar
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)' // Adds a subtle shadow for a touch of depth
    }}>
      <a href="#Home" style={{
        textDecoration: 'none', 
        color: '#333', 
        marginRight: '5px', 
        fontWeight: 'bold'
      }}>Home</a>
      <a href="#About" style={{
        textDecoration: 'none', 
        color: '#333', 
        marginRight: '5px', 
        fontWeight: 'bold'
      }}>About</a>
      <a href="#" style={{
        textDecoration: 'none', 
        color: '#333', 
        marginRight: '5px', 
        fontWeight: 'bold'
      }}>Paintings</a>
      <a href="#contact" style={{
        textDecoration: 'none', 
        color: '#333', 
        fontWeight: 'bold'
      }}>Contact</a>
    </nav>
  );
}

export default Navbar;
