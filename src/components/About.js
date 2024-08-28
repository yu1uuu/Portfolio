import React from "react";
import styled from 'styled-components';

// Styled component for the image
const ImageSection = styled.div`
  flex: 0 0 auto; // Prevents the image from shrinking
  # padding: 30px; // Padding around the image
  padding-left: 100px;
  display: flex;
  align-items: center; // Centers the image vertically
`;

const TextSection = styled.div`
  flex: 1; // Takes up the remaining space
  padding:  90px; // Padding to space out the text from the image
  padding-right: 100px;
  color: #bdd2c5;
  display: flex;
  flex-direction: column; // Ensures that paragraphs are stacked vertically
  justify-content: center; // Centers the text vertically
  line-height: 2;
`;

const StyledAbout = styled.main`
  background-color: #041202; 
  display: flex; 
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 100px; /* Adjust the position */
    left: 520px; /* Adjust the position */
    width: 1300px; /* Adjust the size */
    height: 600px; /* Adjust the size */
    background: url('/blob2.svg') no-repeat center center;
    background-size: cover;
    filter: blur(15px); /* Adds blur to the edges */
    opacity: 0.2; /* Slightly transparent */
    z-index: 1;
  }
`;
 
function About() {
  return (
    <StyledAbout>
      <ImageSection>
        <img src="/yulu.jpg" alt="Yulu's portrait" style={{ width: '350px'}} />
      </ImageSection>
      <TextSection>
        <h2>About</h2>
        <p>
          Hi! My name is Yulu <i>/you-loo</i>; A Electrical and Computer Engineering student at the Univeristy of Toronto. 
          I'm an enormous bookworm with a curiosity for everything, driving me to continuously learn and explore new things.
        </p>
        <p>
          Intrigued by the concepts behind autonomous driving, I joined the driverless section of the University of Toronto's formula racing team, where I quickly immersed myself in learning all I could about the mapping section, becoming the lead in my third year. To further expand my knowledge, I am currently pursuing a research opportunity concerning lane detection using unsupervised machine learning.
        </p>
        <p>
          In addition to my work in autonomous vehicles, I am working on a research project, focusing on detecting the use of AI like ChatGPT in published papers. I have also developed an interest in front-end development recently, as there is immense satisfaction in immediate tangible results. 
           </p>
        <p>
        My goal is to push the boundaries and explore new technologies in the field of SWE. I am always looking for opportunities to learn. Feel free to contact me, I'd love to chat!.
    
        </p>
      </TextSection>
    </StyledAbout>
  );
}

export default About;
