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

function Project6() {
  return (
    <StyledProjectPage>
      <TextSection>
      <h2>Neurosurf</h2>
      <p>Uses the Muse 2 portable EEG headband to capture live brain waves from users and identify user mood.</p>
      <img src='./neurosurf.png' alt='Neurosurf' style={{ width: '40%', borderRadius: '10px' }} />
      <p>Neurosurf utilizes EEG data to analyze user mood in real-time, offering insights into mental well-being of the user.
        The program includes Fourier transform in Python to display real time brainwave data and an attention directing game where it directs user's focus level real time,
      </p>
      <GithubButton href="https://github.com/aryanthomare/Neurosurf" target="_blank" rel="noopener noreferrer">
          <GithubIcon />
          View GitHub
        </GithubButton>
      </TextSection>
    </StyledProjectPage>
  );
}

export default Project6;
