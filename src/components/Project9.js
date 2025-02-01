import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

const StyledProjectPage = styled.main`
  background-color: #101810; /* Dark green background */
  display: flex;
  flex-direction: column;
  height: 100vh; 
  margin: 0; 
`;

const TextSection = styled.div`
  flex: 1; /* Takes up the remaining space */
  padding: 20px 80px; /* Padding to space out the text from the image */
  color: #bdd2c5;
  padding-top: 80px; 
`;

const GithubButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 16px;
  color: #fff;
  background-color: #333; /* Dark button color */
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #555; /* Slightly lighter color on hover */
  }
`;

const GithubIcon = styled(FaGithub)`
  margin-right: 8px; /* Space between the icon and text */
  font-size: 20px;
`;

function Project9() {
  return (
    <StyledProjectPage>
      <TextSection>
      <h2>Autolanes</h2>
      <p>An autonomous lane detection dataset targeted at adverse weather conditions.</p>
      <img src='./autolane.png' alt='autolane' style={{ width: '40%', borderRadius: '10px' }} />
      <ul>
          <li>Developed a lane detection dataset for self-driving cars in adverse weather conditions using Python.</li>
          <li>Mapped 3D lane points to 2D frames using precise coordinate transformations and camera matrix calculations.</li>
          <li>Applied preprocessing techniques (HLS color space, adaptive thresholding, histogram equalization) and integrated hood/ROI masking to improve annotation accuracy.</li>
          <li>Leveraged classical computer vision algorithms, such as the Hough Transform, edge detection, and slope filtering, to correct annotation errors caused by satellite stitching and misaligned labels.</li>
        </ul>
      </TextSection>
    </StyledProjectPage>
  );
}

export default Project9;
