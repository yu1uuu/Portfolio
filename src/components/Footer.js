import React from 'react';
import styled from 'styled-components';

// Define the styled component with proper capitalization
const StyledFooter = styled.footer`
  background-color: #7e9278;
  color: white;
  padding: 10px;
  text-align: center;
`;

// Use the StyledFooter component in your Footer component
function Footer() {
  return (
    <StyledFooter>
      <p>Copyright © 2024 Yulu Jiang. All rights reserved.</p>
    </StyledFooter>
  );
}

export default Footer;
