import React from 'react';
import styled from 'styled-components';

// Define the styled component targeting an HTML element
const StyledHomePage = styled.main`
  background-color: #aabda0; // Light olive green
  color: white;
  padding: 10px;
  text-align: center;
`;

function HomePage() {
  return (
    <StyledHomePage>
      <section>
        <h2>Welcome!</h2>
        <p>Hello, I'm Yulu Jiang. Welcome to my personal website. Here you can learn more about me, my projects, and how to contact me.</p>
      </section>
    </StyledHomePage>
  );
}

export default HomePage;
