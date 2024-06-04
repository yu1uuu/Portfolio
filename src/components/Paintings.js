import React from 'react';
import styled from 'styled-components';

// Styled component for the container
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column; // Ensures vertical layout
  padding: 10px;
  background-color: #f4f4f4; // Light gray background
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
  padding: 20px 80px; // Padding to space out the text from the image
  color: #7e9278; // Soft green text color
`;

// Styled component for the image
const StyledImage = styled.img`
  width: 500px; // Fixed width for images
  height: 350px; // Fixed height for images
  object-fit: cover; // Ensures the image covers the defined area without distortion
  box-shadow: 5px 5px 10px rgba(0,0,0,0.5); // Drop shadow for style
`;

function Paintings() {
  const paintings = [
    { title: 'Winter Fantasy', description: 'My first real attempt at painting after stopping art lessons in grade 7. This is when I fell in love with painting snow.', imagePath: '/winter_fantasy.jpeg' },
    { title: 'Golden Waves', description: 'A vibrant depiction of a summer scene, full of life and color.', imagePath: '/sunset_beach.jpg' },
    { title: 'Daisy Beach', description: 'The mysteries of autumn captured in shades of orange and brown.', imagePath: '/daisy_beach.jpg' },
    { title: 'Snowy Village', description: 'The fresh feeling of spring beautifully represented through blossoming flowers.', imagePath: '/snowy_village.jpg' },
    { title: 'Mountain Town', description: 'Starry night and the tranquility it brings, painted on canvas.', imagePath: '/mountain_town.jpg' }
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
