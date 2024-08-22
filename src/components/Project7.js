// In src/components/Project2.js
import React from 'react';
import styled from 'styled-components';

// Define the styled component targeting an HTML element
const StyledProjectPage = styled.main`
  background-color: #101810; // Light green
  color: #bdd2c5;
  padding: 20px;
  text-align: center;
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

function Project7() {
  return (
    <StyledProjectPage>
      <Content>
        <Heading>Project 2: Klotski</Heading>
        <Paragraph>
          Klotski is a sliding block game developed using embedded C. Use can control and move the pieces on the VGA display using a PS2 keyboard. 
          The project demonstrates practical applications of hardware programming and real-time interaction handling in gaming.
        </Paragraph>
   
      </Content>
    </StyledProjectPage>
  );
}

export default Project7;
