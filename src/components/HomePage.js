import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHomePage = styled.main`
  background-color: #041202; /* Dark green background */
  color: #bdd2c5;
  padding: 20px;
  text-align: center;
  padding-bottom: 60px;
  padding-top: 80px; 
  #margin-top: 80px; 
`;

const SectionTitle = styled.h2`
  color: #bdd2c5;
  margin-top: 40px;
  text-align: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Ensures items are centered */
  gap: 25px;
  justify-content: center; /* Centers the items in the grid */
  padding: 20px;
  margin-right: 80px;
  margin-left: 80px;
`;

const GridContainerEmbedded = styled(GridContainer)`
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); /* Less width */
  max-width: 700px; /* Maximum width of the container */
  margin: 0 auto; /* Center the container */
`;

const GridItem = styled.div`
  background-color: #333;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  height: 240px; /* Adjusted height to create a landscape shape */
  position: relative;
  border-radius: 10px;
  width: 100%; /* Ensure it takes full width of the grid column */
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the entire grid item without distortion */
  object-position: center; /* Centers the image within the grid item */
`;

const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: #fff;
  background: rgba(0, 0, 0, 0.7); /* Semi-transparent black background for the text */
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 60px; 
  padding: 10px 0;
`;

const ItemHeading = styled.h3`
  margin: 0;
  font-size: 16px; 
`;

const ItemDescription = styled.p`
  margin: 0;
  font-size: 12px; 
`;

function HomePage() {
  const softwareProjects = [
    { id: 1, name: 'Cone Map', description: 'Generated a cone map from mapping and localization using GraphSlam, EKF, KD tree, for the driverless system', imagePath: '/cone_map.png' },
    { id: 2, name: 'ETG Commodities ML optimization', description: 'Optimizing commodity trading strategies using machine learning techniques', imagePath: './etg.jpeg' }, 
    { id: 3, name: 'Heartbeat Monitor', description: 'Designed a convolutional neural network that identifies anomalies in cardiac heartbeat signals', imagePath: '/heartbeat.png' },
    { id: 4, name: 'UNIverse', description: 'Mapping software with specific functions designed for university students', imagePath: '/map.png' },
    { id: 5, name: 'EcoNibbles', description: 'Web application that estimates the carbon emission from food images using machine learning', imagePath: '/econibbles.jpeg' },
    { id: 6, name: 'Neurosurf', description: 'Uses the Muse 2 portable EEG headband to capture live brain waves from users and identify user mood', imagePath: '/neurosurf.png' }
  ];

  const embeddedProjects = [
    { id: 7, name: 'Klotski', description: 'Sliding block game using embedded C, PS2 keyboard, FPGA board, and VGA display', imagePath: '/klotski.png' },
    { id: 8, name: 'Flappy Bird', description: 'An interactive game of Flappy Bird using Verilog, FPGA board, and the VGA display', imagePath: '/flappy_bird.jpg' },
  ];

  return (
    <StyledHomePage>
      <section>
        <h2>Welcome!</h2>
        <p>Hey! Welcome to Yulu's Engineering Portfolio. Below you can find some stuff I've been working on recently;)</p>
      </section>

      <SectionTitle>Software</SectionTitle>
      <GridContainer>
        {softwareProjects.map(project => (
          <GridItem key={project.id}>
            <Link to={`/project${project.id}`} style={{ textDecoration: 'none' }}>
              <StyledImage src={project.imagePath} alt={project.name} />
              <ItemText>
                <ItemHeading>{project.name}</ItemHeading>
                <ItemDescription>{project.description}</ItemDescription>
              </ItemText>
            </Link>
          </GridItem>
        ))}
      </GridContainer>

      <SectionTitle>Embedded Software</SectionTitle>
      <GridContainerEmbedded>
        {embeddedProjects.map(project => (
          <GridItem key={project.id}>
            <Link to={`/project${project.id}`} style={{ textDecoration: 'none' }}>
              <StyledImage src={project.imagePath} alt={project.name} />
              <ItemText>
                <ItemHeading>{project.name}</ItemHeading>
                <ItemDescription>{project.description}</ItemDescription>
              </ItemText>
            </Link>
          </GridItem>
        ))}
      </GridContainerEmbedded>
    </StyledHomePage>
  );
}

export default HomePage;
