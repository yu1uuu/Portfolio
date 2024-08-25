import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Importing icons

// Define the styled component with proper capitalization
const StyledFooter = styled.footer`
  background-color: #7e9278;
  color: white;
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconContainer = styled.div`
  margin: 10px 0; /* Space between the icons and the copyright text */
`;

const IconLink = styled.a`
  color: white;
  margin: 0 10px;
  font-size: 24px;
  text-decoration: none;

  &:hover {
    color: #ddd; /* Slight color change on hover */
  }
`;

// Use the StyledFooter component in your Footer component
function Footer() {
  return (
    <StyledFooter>
      <IconContainer>
        <IconLink href="https://www.linkedin.com/in/yul-jiang/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </IconLink>
        <IconLink href="https://github.com/yu1uuu" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </IconLink>
        <IconLink href="mailto:yulujiang00@gmail.com">
          <FaEnvelope />
        </IconLink>
      </IconContainer>
      <p>Copyright © 2024 Yulu Jiang. All rights reserved.</p>
    </StyledFooter>
  );
}

export default Footer;
