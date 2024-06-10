// In src/components/Project1.js
import React from 'react';
import styled from 'styled-components';

const TextSection = styled.div`
  flex: 1; // Takes up the remaining space
  padding: 20px 80px; // Padding to space out the text from the image
  color: #bdd2c5;
`;

const StyledProject1 = styled.main`
  background-color: #101810; // Light green
`;

function Project1() {
  return (
    <StyledProject1>
    <TextSection>
    <div className="project-details">
      <h1>Project 1</h1>
      <p>This is the detail page for Project 1. Here, you can find comprehensive information about the project.</p>
      <section>
        <h2>Project Description</h2>
        <p>Provide a detailed description of what the project entails, its scope, and its objectives.</p>
      </section>
      <section>
        <h2>Project Features</h2>
        <ul>
          <li>Feature 1: Description of feature 1.</li>
          <li>Feature 2: Description of feature 2.</li>
          <li>Feature 3: Description of feature 3.</li>
        </ul>
      </section>
      <section>
        <h2>Technical Information</h2>
        <p>Discuss the technologies used in the project, libraries, frameworks, and any technical challenges overcome.</p>
      </section>
      <section>
        <h2>Conclusion and Future Work</h2>
        <p>Talk about the project outcomes, results, and future enhancements or expansions planned.</p>
      </section>
    </div>
    </TextSection>
    </StyledProject1>
  );
}

export default Project1;
