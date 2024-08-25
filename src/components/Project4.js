import React from 'react';
import styled from 'styled-components';

const StyledProjectPage = styled.div`
  background-color: #101810; /* Dark green background */
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensures it takes full height of the viewport */
`;

const ContentWrapper = styled.div`
  flex: 1; 
  padding: 20px 80px; 
  color: #bdd2c5;
  padding-top: 80px; 
`;


const ImageContainer = styled.div`
  display: flex;
  justify-content:  center; 
  margin-top: 20px;
  margin-right: 0px;
`;


const StyledImage = styled.img`
  width: 30%;
  border-radius: 8px;
  margin-right: 30px;
`;


function Project4() {
  return (
    <StyledProjectPage>
      <ContentWrapper>
        <h2>UNIverse</h2>
        <p>UNIverse is a student-friendly map application that displays information specifically designed for students in various cities around the world. 
        Written using C++, this software retrieves data using the OpenStreetMap Database API. The graphical user interface (GUI) is designed using GTK.</p>
        
        <h2>Main Features</h2>

        <ul>
          <li>Point of interest locator</li>
          <li>Route finder</li>
          <li>Public transportation displays</li>
          <li>Street intersection finder</li>
          <li>Zooming and panning</li>
          <li>Night Mode</li>
          <li>Autocomplete Search</li>
        </ul>
        
        <h2>Accessibility Buttons</h2>

        <p>Quick access POI selectors customized for student use</p>

        <ImageContainer>
          <StyledImage src='/POIselect.png' alt='UNIverse' />
          <StyledImage src='/POImarkers.png' alt='Feature 2' />
          <StyledImage src='/POInames.png' alt='Feature 3' />
        </ImageContainer>

        <h2>Modes</h2>
        <p>Night mode increases usability, implementing colours easy on the eyes in low light conditions
        </p>

        <ImageContainer>
          <StyledImage src='/lightMode.png' alt='UNIverse' />
          <StyledImage src='/darkMode.png' alt='Feature 2' />
        </ImageContainer>

        <h2>Public Transportation</h2>
        <p>Public transport routes are available where stops are indicated with icons and names, 
        and data are seperated by layers</p>
        <ImageContainer>
          <StyledImage src='/subway.png' alt='UNIverse' />
          <StyledImage src='/bus.png' alt='Feature 2' />
        </ImageContainer>

        <ImageContainer>
          <StyledImage src='/subwayName.png' alt='UNIverse' />
          <StyledImage src='/busName.png' alt='Feature 2' />
        </ImageContainer>

        <p></p>
        <p></p>
        <b>NOTE: This project was made for the course ECE297 at the University of Toronto, and therefore, the source code is not available to the public.</b>

  
      </ContentWrapper>
     
    </StyledProjectPage>
  );
}

export default Project4;
