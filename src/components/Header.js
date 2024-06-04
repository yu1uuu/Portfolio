import React from "react";
// Remove if not using any specific styles from Header.css
// import "../styles/Header.css";

const StyledHeader = styled.header`
  background-color: #7e9278;
  color: white;
  padding: 10px;
  text-align: center;
`;

function Header() {
    
    return (
        <header className="Header">
            <nav className="Nav">
                <a href="#hero" className="menu-link">Home</a>
                <a href="#about" className="menu-link">About Me</a>
                <a href="#experience" className="menu-link">Experience</a>
                <a href="#education" className="menu-link">Education</a>
                <a href="#skills" className="menu-link">Skills</a>
                <a href="#projects" className="menu-link">Projects</a>
                <a href="#certifications" className="menu-link">Certifications</a>
                <a href="#blog" className="menu-link">Blog</a>
                <a href="#contact" className="menu-link">Contact</a>
            </nav>
        </header>
    );
}
