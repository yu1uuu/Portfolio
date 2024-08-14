import React from 'react';
import styled from 'styled-components';

// Styled component for the container
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column; // Ensures vertical layout
  padding: 10px;
  background-color: #101810; // Light gray background
`;

// Styled component for each painting section
const PaintingSection = styled.div`
  display: flex;
  align-items: center;
  min-height: 100vh;
  flex-direction: ${props => props.isOdd ? 'row-reverse' : 'row'};
  padding: 10px 250px; // Adjust padding as needed
`;

// Styled component for the text section
const TextSection = styled.div`
  flex: 1; // Takes up the remaining space
  padding: 20px 80px; 
  color: #7e9278; 
`;

// Styled component for the image
const StyledImage = styled.img`
  width: 500px; 
  height: 350px;
  object-fit: cover; // Ensures the image covers the defined area without distortion
  box-shadow: 5px 5px 10px rgba(0,0,0,0.5); // Drop shadow for style
`;

function Paintings() {
  const paintings = [
    { title: 'Winter Fantasy', description: 'My first real attempt at painting after stopping art lessons in grade 7. This was a birthday gift for my mom, also marking the time where I fell in love with painting snow.', imagePath: './winter_fantasy.jpeg' },
    { title: 'Golden Waves', description: 'Something about the dynamity of waves even in a static image have always intrigued me deeply. Here I referenced another painting and compared the two.', imagePath: '/Portfolio/sunset_beach.jpg' },
    { title: 'Daisy Beach', description: 'Continuing my love of waves and the flower my mom loves: daisies, the painting came to be.', imagePath: 'https://raw.githubusercontent.com/yu1uuu/Portfolio/main/docs/daisy_beach.jpg' },
    { title: 'Snowy Village', description: 'Soemthing about this image mesmerizes me til this day, each stroke of the snowy mountains were insaenly healing to me.', imagePath: 'snowy_village.jpg' },
    { title: 'Mountain Town', description: 'Other than snow and waves, I was looking for something different. Sunset in this small town is absolutely gorgesous', imagePath: 'mountain_town.jpg' }
  ];

  return (
    <ContentContainer>
      {paintings.map((painting, index) => (
        <PaintingSection key={index} isOdd={index % 2 !== 0}>
          <TextSection>
            <h1>{painting.title}</h1>
            <p>{painting.description}</p>
          </TextSection>
          <StyledImage src={painting.imagePath} alt={painting.title} />
        </PaintingSection>
      ))}
    </ContentContainer>

  );
}

export default Paintings;
