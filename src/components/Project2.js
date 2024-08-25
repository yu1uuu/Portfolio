import React from 'react';
import styled from 'styled-components';

const StyledProjectPage = styled.main`
  background-color: #101810; /* Dark green background */
  display: flex;
  flex-direction: column;
  height: 100vh; /* Full height of the viewport */
  margin: 0; /* Remove any default margin */
`;

const TextSection = styled.div`
  flex: 1; /* Takes up the remaining space */
  padding: 20px 80px; /* Padding to space out the text from the image */
  color: #bdd2c5;
  padding-top: 80px; 
`;



const Project2 = () => {
  return (
    <StyledProjectPage>
      <TextSection>
        <h2>ETG Commodities ML Optimization</h2>
        <p>This project focuses on optimizing ETG Commodity's exporting strategies using a custom neural network and training on parsed data.</p>
        <p>In Progress...</p>
    
      </TextSection>
    </StyledProjectPage>
  );
};

export default Project2;
