import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

const StyledProjectPage = styled.main`
  background-color: #101810; /* Dark green background */
  display: flex;
  flex-direction: column;
  height: 100vh; 
  margin: 0; 
`;

const TextSection = styled.div`
  flex: 1; /* Takes up the remaining space */
  padding: 20px 80px; /* Padding to space out the text from the image */
  color: #bdd2c5;
  padding-top: 80px; 
`;

const GithubButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 16px;
  color: #fff;
  background-color: #333; /* Dark button color */
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #555; /* Slightly lighter color on hover */
  }
`;

const GithubIcon = styled(FaGithub)`
  margin-right: 8px; /* Space between the icon and text */
  font-size: 20px;
`;

function Project5() {
  return (
    <StyledProjectPage>
      <TextSection>
      <h2>EcoNibbles</h2>
      <p>Web application that estimates the carbon emission from food images using machine learning.</p>
      <img src='./econibbles.jpeg' alt='EcoNibbles' style={{ width: '40%', borderRadius: '10px' }} />
      <p>This project focuses on estimating the environmental impact of food consumption using advanced image recognition and carbon footprint calculation algorithms...</p>
      <GithubButton href="https://github.com/Miekale/NewHacks2023" target="_blank" rel="noopener noreferrer">
          <GithubIcon />
          View GitHub
        </GithubButton>
      </TextSection>
    </StyledProjectPage>
  );
}

export default Project5;
