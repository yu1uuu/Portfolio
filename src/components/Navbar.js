import React from 'react';
// import './Navbar.css';  // Make sure to create and import a CSS file for styles

function Navbar() {
  return (
    <nav className="navbar">
      <h1>My Personal Website</h1>
      <div className="menu">
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#about-me">About Me</a>
      </div>
    </nav>
  );
}

export default Navbar;
