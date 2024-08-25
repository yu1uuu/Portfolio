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

const ProjectImage = styled.img`
  width: 80%;
  border-radius: 10px;
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
     
      <p>The Heartbeat Monitor project involves designing a convolutional neural network (CNN) to identify anomalies in cardiac heartbeat signals. This project aims to improve early detection of heart conditions by analyzing ECG data...</p>
      <p>The system processes raw ECG data, applies filters, and uses machine learning to classify heartbeats into normal and abnormal categories. The results are visualized to help clinicians make informed decisions...</p>
      <GithubButton href="https://github.com/yu1uuu/Audio-Heartbeat-Monitor" target="_blank" rel="noopener noreferrer">
          <GithubIcon />
          View GitHub
      </GithubButton>
      </TextSection>
    </StyledProjectPage>
  );
};

export default Project3;
