import React, { useState } from 'react';
import styled from 'styled-components';

// Styled component for the container
const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #101810;
  min-height: 100vh;
  position: relative;
`;

// Styled component for the image container with buttons
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

// Styled component for the image
const StyledImage = styled.img`
  width: 700px;
  height: 500px;
  margin-top: 15px;
  object-fit: cover;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  border: 3mm solid rgba(126, 146, 120, 0.5);
`;

// Styled component for the text section
const TextSection = styled.div`
  text-align: center;
  margin-top: 50px;
  color: #7e9278;
  margin-left: 330px;
  margin-right: 330px;
`;

// Styled component for the buttons
const NavButton = styled.button`
  background-color: rgba(126, 146, 120, 0.8);
  color: #fff;
  border: none;
  padding: 30px 10px;
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ left }) => (left ? 'left: -35px;' : 'right: -35px;')} // Adjust the position of the buttons
  border-radius: 5px;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.5);
  &:hover {
    background-color: rgba(126, 146, 120, 1);
  }
`;

function Paintings() {
  const paintings = [
    { title: 'Winter Fantasy', description: 'My first real attempt at painting after stopping art lessons in grade 7. This was a birthday gift for my mom, also marking the time where I fell in love with painting snow.', imagePath: '/winter_fantasy.jpeg' },
    { title: 'Sunset Waves', description: 'Something about the dynamity of waves even in a static image have always intrigued me deeply. Here I referenced another painting and compared the two.', imagePath: '/sunset_beach.jpg' },
    { title: 'Daisy Beach', description: 'Continuing my love of waves and the flower my mom loves: daisies, the painting came to be.', imagePath: '/daisy_beach.jpg' },
    { title: 'Snowy Village', description: 'Something about this image mesmerizes me til this day, each stroke of the snowy mountains were insanely healing to me.', imagePath: '/snowy_village.jpg' },
    { title: 'Mountain Town', description: 'Other than snow and waves, I was looking for something different. Sunset in this small town is absolutely gorgeous.', imagePath: '/mountain_town.jpg' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % paintings.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + paintings.length) % paintings.length);
  };

  const currentPainting = paintings[currentIndex];

  return (
    <GalleryContainer>
      <TextSection>
        <h1>{currentPainting.title}</h1>
      </TextSection>
      <ImageContainer>
        <NavButton left onClick={handlePrevious}>◀</NavButton>
        <StyledImage src={currentPainting.imagePath} alt={currentPainting.title} />
        <NavButton onClick={handleNext}>▶</NavButton>
      </ImageContainer>
      <TextSection>
        <p>{currentPainting.description}</p>
      </TextSection>
    </GalleryContainer>
  );
}

export default Paintings;
