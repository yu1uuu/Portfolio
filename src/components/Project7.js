// In src/components/Project2.js
import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

const StyledProjectPage = styled.main`
  background-color: #101810; /* Dark green background */
  display: flex;
  flex-direction: column;
  height: 120vh; 
  margin: 0; 
  min-height: 120vh;
`;

const TextSection = styled.div`
  flex: 1; 
  padding: 20px 80px; 
  color: #bdd2c5;
  padding-top: 80px; 
  text-align: left; /* Align text to the left */
`;

const Content = styled.div`
  margin: 50px 0;
  max-width: 600px;
  text-align: left;
  margin-left: 0;
  display: block;
  flex-grow: 1;
`;

const Heading = styled.h1`
  font-size: 24px; 
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6; 
`;

const GithubButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 16px;
  color: #fff;
  background-color: #333;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const GithubIcon = styled(FaGithub)`
  margin-right: 8px;
  font-size: 20px;
`;


function Project2() {
  return (
    <StyledProjectPage>
      <TextSection>
        <Content>
          <Heading>Project 2: Klotski</Heading>
          <Paragraph>
            Klotski is a sliding block puzzle game developed in Embedded C, 
            where users control block movements via a PS2 keyboard. The project 
            runs on an FPGA, displaying the game on a VGA monitor. The game leverages 
            hardware-level control, PS2 communication protocols, and VGA interfacing to 
            provide smooth gameplay, demonstrating both digital systems and embedded software 
            integration. The project required efficient management of hardware resources to 
            ensure real-time interaction.
          </Paragraph>
          
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/M9HdbMhlPrM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>


          
        </Content>
        <GithubButton href="https://github.com/yu1uuu/Klotski" target="_blank" rel="noopener noreferrer">
          <GithubIcon />
          View GitHub
        </GithubButton>
      </TextSection>
    </StyledProjectPage>
  );
}

export default Project2;
