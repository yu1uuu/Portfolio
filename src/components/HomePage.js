import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Define the styled component targeting an HTML element
const StyledHomePage = styled.main`
  background-color: #fffbf7; // Light green
  color: #7e9278;
  padding: 10px;
  text-align: center;
`;

// Style for the grid container
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // Creates a three-column layout
  gap: 20px; // Space between grid items
  padding: 20px;
  margin-right: 80px;
  margin-left: 80px;
`;
// Style for each grid item
const GridItem = styled.div`
  background-color: #333; // Provides a dark background, visible only if image doesn't cover
  height: 250px; // Fixed height for each grid item
  width: 100%; // Ensures the grid item takes full width given by grid template
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; // Critical to ensure images don't spill out
  position: relative; // Allows absolute positioning within
`;

// Style for the image
const StyledImage = styled.img`
  width: 100%; // Ensures the image takes the full width of the GridItem
  height: 100%; // Ensures the image takes the full height of the GridItem
  object-fit: cover; // Ensures the image covers the area, cropping it if necessary
  transition: transform 0.3s ease; // Adds a zoom effect on hover

  &:hover {
    transform: scale(1.1); // Scales the image up when hovered
  }
`;


// Style for text below each grid item
const ItemText = styled.div`
  text-align: center; // Center the text below the image
  padding: 10px; // Padding around the text
  color: #fffbf7; // Set the text color
  background: #7e9278; // Optional: a slight overlay background for text readability
  width: 100%; // Ensures text container fills grid item width
`;
function HomePage() {
  const projects = [
    { id: 1, name: 'Project 1', description: 'Description of Project 1', imagePath: '/flappy_bird.jpg' },
    { id: 2, name: 'Project 2', description: 'Description of Project 2', imagePath: '/klotski.png' },
    { id: 3, name: 'Project 3', description: 'Description of Project 1', imagePath: '/sunset_beach.jpg' },
    { id: 4, name: 'Project 4', description: 'Description of Project 2', imagePath: '/path' },
    { id: 5, name: 'Project 5', description: 'Description of Project 1', imagePath: '/path' },
    { id: 6, name: 'Project 6', description: 'Description of Project 2', imagePath: '/path' },
    // Additional projects...
  ];

  return (
    <StyledHomePage>
      <section>
        <h2>Welcome!</h2>
        <p>Hey! Welcome to Yulu's Engineering Portfolio. Below you can find some stuff I've been working on recently;)</p>
      </section>
      <GridContainer>
        {projects.map(project => (
          <GridItem key={project.id}>
            <Link to={`/project${project.id}`} style={{ textDecoration: 'none' }}>
              <StyledImage src={project.imagePath} alt={project.name} />
              <ItemText>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </ItemText>
            </Link>
          </GridItem>
        ))}
      </GridContainer>
    </StyledHomePage>
  );
}

export default HomePage;
