import React from 'react';
import styled from 'styled-components';

const StyledProjectPage = styled.main`
  background-color: #101810;
  color: #bdd2c5;
  padding: 20px;
  text-align: center;
  padding-bottom: 60px;
`;

function Project3() {
  return (
    <StyledProjectPage>
      <h2>EcoNibbles</h2>
      <p>Web application that estimates the carbon emission from food images using machine learning.</p>
      <img src='./econibbles.jpeg' alt='EcoNibbles' style={{ width: '80%', borderRadius: '10px' }} />
      <p>This project focuses on estimating the environmental impact of food consumption using advanced image recognition and carbon footprint calculation algorithms...</p>
      {/* Add more detailed content about the project here */}
    </StyledProjectPage>
  );
}

export default Project3;
