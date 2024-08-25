import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

const StyledProjectPage = styled.main`
  background-color: #101810; /* Dark green background */
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensures it takes full height of the viewport */
  margin: 0; 
`;

const TextSection = styled.div`
  flex: 1; /* Takes up the remaining space */
  padding: 20px 80px; /* Padding to space out the text from the image */
  color: #bdd2c5;
  padding-top: 80px; 
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  margin-top: 20px;
  margin-right: 0px;
`;

const StyledImage = styled.img`
  width: 40%;
  border-radius: 8px;
  margin-bottom: 20px;
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

const Project3 = () => {
  return (
    <StyledProjectPage>
      <TextSection>
        <h2>Heartbeat Monitor</h2>
        <p>The Heartbeat Monitor involves designing a convolutional neural network (CNN) to identify anomalies in cardiac heartbeat signals. 
          It takes in an audio input of heartbeat signals, where data processing is used to convert the sounds into electrocardiograms (ECG).
          The model then uses filters to extract features of the diagram, identifies the patterns, then outputs a binary classification of irregular or normal heartbeat.
          This project aims to improve early detection of heart conditions by analyzing heartbeat data.</p>

        <ImageContainer>
          <StyledImage src='./outline.png' alt='Outline' />
          <StyledImage src='./modelArchitecture.png' alt='Model Architecture' />
        </ImageContainer>

        <GithubButton href="https://github.com/yu1uuu/Audio-Heartbeat-Monitor" target="_blank" rel="noopener noreferrer">
          <GithubIcon />
          View GitHub
        </GithubButton>
      </TextSection>
 
    </StyledProjectPage>
  );
};

export default Project3;
