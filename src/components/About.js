import React from "react";
import styled from 'styled-components';

// Styled component for the text section
const TextSection = styled.div`
  flex: 1; // Takes up the remaining space
  padding: 20px 80px; // Padding to space out the text from the image
  color: #bdd2c5;
`;

const StyledAbout = styled.main`
  background-color: #101810; // Light green
`;

function About() {
  return (
    <StyledAbout>
    <TextSection>

    <h2> Electrical & Computer Engineering Student</h2>
    <p>
    Hi! My name is Yulu <i>/you-loo</i>; I'm an enormous bookworm with a curiosity for everything, driving me to continuously learn and explore new things.
</p>
<p>
    Intrigued by the concepts behind autonomous driving, I joined the driverless section of the University of Toronto's formula racing team. I quickly immersed myself in learning all I could about the mapping section and became the lead the next year. To further expand my knowledge, I pursued a research opportunity concerning lane detection using machine learning.
</p>
<p>
    In addition to my work in autonomous vehicles, I am starting a new project in cybersecurity, focusing on detecting the use of AI like ChatGPT in published papers. I have also developed an interest in front-end development, as it is a field that demonstrates immediate results. 
    My goal is to push the boundaries in areas like autonomous vehicles, cybersecurity, and front-end development, leveraging my diverse interests and skills to create impactful solutions.
</p>

 
    </TextSection>
    </StyledAbout>
  );
}

export default About;