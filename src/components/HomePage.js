import React from 'react';
import styled from 'styled-components';

// Define the styled component targeting an HTML element
const StyledHomePage = styled.main`
  background-color: #aabda0; // Light olive green
  color: white;
  padding: 10px;
  text-align: center;
`;

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

function HomePage() {
  return (
    <StyledHomePage>
      <section>
        <h2>Welcome!</h2>
        <p>Hey! Welcome to Yulu's Engineering Portfolio. Here you can learn more about me, my projects, and lifestyle;) </p>
      </section>
    </StyledHomePage>
  );
}

export default HomePage;
