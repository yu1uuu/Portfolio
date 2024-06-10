import React from "react";
import styled from 'styled-components';

// Styled component for the text section
const TextSection = styled.div`
  flex: 1; // Takes up the remaining space
  padding: 20px 80px; // Padding to space out the text from the image
  color: #bdd2c5;
`;

const StyledAbout = styled.main`
  background-color: #101810; // Light green
`;

function About() {
  return (
    <StyledAbout>
    <TextSection>

    <h2> Electrical & Computer Engineering Student</h2>
    <p>
        Hi! My name is Yulu <i>/you-loo</i>; I've been playing tennis since I was 8, I'm an enormous bookworm, 
        and I possess a curiosity for everything that drives me to continuously learn and explore new things.
    </p>
    <p>The majority of my experiences are in the field of autonomous vehicles</p>
 
    </TextSection>
    </StyledAbout>
  );
}

export default About;