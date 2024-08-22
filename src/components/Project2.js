import React from 'react';
import styled from 'styled-components';

const StyledProjectPage = styled.main`
  background-color: #101810;
  color: #bdd2c5;
  padding: 20px;
  text-align: center;
  padding-bottom: 60px;
`;

const ProjectImage = styled.img`
  width: 80%;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Project2 = () => {
  return (
    <StyledProjectPage>
      <h2>ETG Commodities ML Optimization</h2>
      <ProjectImage src="./project6_image.png" alt="ETG Commodities ML Optimization" />
      <p>This project focuses on optimizing commodity trading strategies using machine learning techniques. The ETG Commodities ML Optimization project involves analyzing large datasets to predict market trends and optimize trading decisions.</p>
      <p>The main objectives of this project are to enhance trading efficiency, reduce risks, and increase profitability by leveraging advanced machine learning models...</p>
      {/* Add more detailed content about the project here */}
    </StyledProjectPage>
  );
};

export default Project2;
