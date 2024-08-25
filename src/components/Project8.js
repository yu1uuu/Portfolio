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

function Project8() {
  return (
    <StyledProjectPage>
      <TextSection>
      <h2>Flappy Bird</h2>
      <p>An interactive game of Flappy Bird using Verilog, FPGA board, and VGA display.</p>
      <img src='./flappy_bird.jpg' alt='Flappy Bird' style={{ width: '40%', borderRadius: '10px' }} />
      <p>This project implements the popular game Flappy Bird using Verilog, leveraging FPGA keys, and the VGA display.
      Utilized on chip memory, clock and reset characteristics, finite state machines, and data paths to provide a dynamic and visually pleasing user experience</p>
      <GithubButton href="https://github.com/yu1uuu/FlappyBird" target="_blank" rel="noopener noreferrer">
          <GithubIcon />
          View GitHub
        </GithubButton>
      </TextSection>
    </StyledProjectPage>
  );
}

export default Project8;
