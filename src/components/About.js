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
          Hi! My name is Yulu <i>/you-loo</i>; I'm an enormous bookworm with a curiosity for everything, driving me to continuously learn and explore new things.
        </p>
        <p>
          Intrigued by the concepts behind autonomous driving, I joined the driverless section of the University of Toronto's formula racing team, where I quickly immersed myself in learning all I could about the mapping section, becoming the lead the next year. To further expand my knowledge, I pursued a research opportunity concerning lane detection using machine learning.
        </p>
        <p>
          In addition to my work in autonomous vehicles, I am starting a new project in cybersecurity, focusing on detecting the use of AI like ChatGPT in published papers. I have also developed an interest in front-end development recently, as it is a field that provided immediate tangible results. 
          My goal is to push the boundaries in areas like autonomous vehicles, cybersecurity, and front-end development, leveraging my diverse interests and skills to create impactful solutions.
        </p>
      </TextSection>
    </StyledAbout>
  );
}

export default About;
