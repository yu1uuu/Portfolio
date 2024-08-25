// In src/components/Project2.js
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

const Content = styled.div`
  margin: 50px auto;
  max-width: 600px; // Limit the width of the content for better readability
`;

const Heading = styled.h1`
  font-size: 24px; // Larger text for the project title
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6; // More readable line spacing
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

function Project7() {
  return (
    <StyledProjectPage>
      <TextSection>
      <Content>
        <Heading>Project 2: Klotski</Heading>
        <Paragraph>
          Klotski is a sliding block game developed using embedded C. Use can control and move the pieces on the VGA display using a PS2 keyboard. 
          The project demonstrates practical applications of hardware programming and real-time interaction handling in gaming.
        </Paragraph>
   
      </Content>
      <GithubButton href="https://github.com/yu1uuu/Klotski" target="_blank" rel="noopener noreferrer">
          <GithubIcon />
          View GitHub
        </GithubButton>
      </TextSection>
    </StyledProjectPage>
  );
}

export default Project7;
