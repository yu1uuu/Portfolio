import React from "react";
import styled from 'styled-components';

// Styled component for the text section
const TextSection = styled.div`
  flex: 1; // Takes up the remaining space
  padding: 20px 80px; // Padding to space out the text from the image
  color: #7e9278; // Soft green text color
`;


function About() {
  return (
    <TextSection>

    <h2> Electrical & Computer Engineering Student</h2>
    <p>
        Hi! My name is Yulu <i>/you-loo</i>; I was born in Shenzhen, China but have been living in Canada for more than half my life now.
        
    </p>
 
    </TextSection>
  );
}

export default About;