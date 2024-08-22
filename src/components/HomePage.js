import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHomePage = styled.main`
  background-color: #101810; /* Dark green background */
  color: #bdd2c5;
  padding: 20px;
  text-align: center;
  padding-bottom: 60px;
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

const GridItem = styled.div`
  background-color: #333;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  overflow: hidden;
  height: 310px;
  position: relative;
  padding-bottom: 50px; 
  border-radius: 10px;
`;

const StyledImage = styled.img`
  width: 100%;
  flex-grow: 1;
  object-fit: cover;
`;

const ItemText = styled.div`
  text-align: center;
  color: #fff;
  background: #7e9278;
  width: 100%;
  position: absolute;
  bottom: 0px;
  padding: 6px 0;
`;

function HomePage() {
  const softwareProjects = [
    { id: 1, name: 'Cone Map', description: 'Generated a cone map from mapping and localization using GraphSlam, EKF, KD tree, for the driverless system', imagePath: '/cone_map.png' },
    { id: 2, name: 'Heartbeat Monitor', description: 'Designed a convolutional neural network that identifies anomalies in cardiac heartbeat signals', imagePath: '/heartbeat.png' },
    { id: 3, name: 'EcoNibbles', description: 'Web application that estimates the carbon emission from food images using machine learning', imagePath: '/econibbles.jpeg' },
    { id: 4, name: 'UNIverse', description: 'Mapping software with specific functions designed for university students', imagePath: '/map.png' },
    { id: 5, name: 'Neurosurf', description: 'Uses the Muse 2 portable EEG headband to capture live brain waves from users and identify user mood', imagePath: '/neurosurf.png' },
    { id: 6, name: 'Project 6', description: 'Description of your sixth software project', imagePath: './project6_image.png' }, // New software project
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
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </ItemText>
            </Link>
          </GridItem>
        ))}
      </GridContainer>

      <SectionTitle>Embedded Software</SectionTitle>
      <GridContainer>
        {embeddedProjects.map(project => (
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
