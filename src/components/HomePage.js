import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


// Define the styled component targeting an HTML element
const StyledHomePage = styled.main`
  background-color: #101810; // Light green
  color: #bdd2c5;
  padding: 20px;
  text-align: center;
  padding-bottom: 60px;
`;

// Style for the grid container
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // Creates a three-column layout
  gap: 25px; // Space between grid items
  padding: 20px;
  margin-right: 80px;
  margin-left: 80px;
`;
// Style for each grid item
const GridItem = styled.div`
  background-color: #333; // Dark background for each grid item
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  overflow: hidden;
  height: 310px; // Fixed height accommodating image and text
  position: relative;
  padding-bottom: 50px; 
  border-radius: 10px;
`;

// Style for the image
const StyledImage = styled.img`
  width: 100%; // Ensures the image fills the width
  flex-grow: 1; // Allows the image to fill the available space
  object-fit: cover; // Ensures the image covers the area without distorting
`;

// Style for text below each grid item
const ItemText = styled.div`
  text-align: center; // Center the text
  color: #fff; // Text color
  background: #7e9278; // Semi-transparent background for readability
  width: 100%; // Match width to the grid item
  position: absolute;
  bottom: 0px; // Position text at the bottom of the grid item
  padding: 6px 0; // Padding for the text
`;

function HomePage() {
  const projects = [
    { id: 1, name: 'Cone Map', description: 'Generated a cone map from mapping and localization usingGraphSlam, EKF, KD tree, for the driverless system ', imagePath: 'cone_map.PNG' },
    { id: 2, name: 'Klotski', description: 'Sliding block game using embedded C, PS2 keyboard, FPGA board and VGA display', imagePath: 'klotski.png' },
    { id: 3, name: 'EcoNibbles', description: 'Web application that estimate the carbon emission from food images using machine learning    ', imagePath: '/docs/econibbles.jpeg' },
    { id: 4, name: 'UNIverse', description: 'Mapping software with specific functions designed for university students', imagePath: '/docs/map.png' },
    { id: 5, name: 'Neurosurf', description: 'Uses the Muse 2 portable EEG headband to capture live brain waves from users and identify user mood  ', imagePath: '/docs/neurosurf.png' },
    { id: 6, name: 'Flappy Bird', description: 'An interactive game of Flappy bird using Verilog, FPGA board, and the VGA display', imagePath: '/docs/flappy_bird.jpg' },
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
