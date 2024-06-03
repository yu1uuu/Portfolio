import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Define the styled component targeting an HTML element
const StyledHomePage = styled.main`
  background-color: #aabda0; // Light olive green
  color: white;
  padding: 10px;
  text-align: center;
`;

// Style for the grid container
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // Creates a three-column layout
  gap: 10px; // Space between grid items
  padding: 20px;
`;

// Style for each grid item
const GridItem = styled.div`
  background-color: #333; // Dark background for each grid item
  height: 200px; // Fixed height for each item
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; // Ensures the image does not overflow the container
`;

// Style for the image
const StyledImage = styled.img`
  width: 100%; // Makes the image fill the container
  height: 100%; // Stretches the image to fill the container height
  object-fit: cover; // Ensures the image covers the area without distortion
  transition: transform 0.3s ease; // Smooth transformation on hover

  &:hover {
    transform: scale(1.1); // Scales the image on hover
  }
`;

function HomePage() {
  const projects = [
    { id: 1, name: 'Project 1', imagePath: '/path/to/image1.jpg' },
    { id: 2, name: 'Project 2', imagePath: '/path/to/image2.jpg' },
    { id: 3, name: 'Project 3', imagePath: '/path/to/image3.jpg' },
    { id: 4, name: 'Project 4', imagePath: '/path/to/image4.jpg' },
    { id: 5, name: 'Project 5', imagePath: '/path/to/image5.jpg' },
    { id: 6, name: 'Project 6', imagePath: '/path/to/image6.jpg' },
  ];

  return (
    <StyledHomePage>
      <section>
        <h2>Welcome!</h2>
        <p>Hey! Welcome to Yulu's Engineering Portfolio. Here you can learn more about me, my projects, and lifestyle;)</p>
      </section>
      <GridContainer>
        {projects.map(project => (
          <GridItem key={project.id}>
            <Link to={`/project${project.id}`} style={{ textDecoration: 'none' }}>
              <StyledImage src={project.imagePath} alt={project.name} />
            </Link>
          </GridItem>
        ))}
      </GridContainer>
    </StyledHomePage>
  );
}

export default HomePage;
