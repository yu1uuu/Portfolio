import React from 'react';
import styled from 'styled-components';


const TextSection = styled.div`
  flex: 1; /* Takes up the remaining space */
  padding: 20px 80px; /* Padding to space out the text from the image */
  color: #bdd2c5;
  padding-top: 80px; 
`;

const StyledProject1 = styled.main`
  background-color: #101810; /* Dark green background */
  display: flex;
  flex-direction: column;
  height: 100vh; 
  margin: 0; 
`;

function Project1() {
  return (
    <StyledProject1>
      <TextSection>
        <div className="project-details">
          <h1>Cone Map</h1>
          <p>
            As the mapping lead of the driverless section of University of Toronto's formula racing team, my team and I work to produce a cone map that informs
            our path planning algorithms of the vehicle and obstacles whereabouts.
          </p>

          <section>
            <h2>Technical Information</h2>
            <p>Mapping mainly consists of 3 nodes: EKF node, build graph node, and compute graph node.</p>
            <ul>
              <li>
                <strong>EKF:</strong> The EKF performs localization of the car, taking in both error values of GPS and IMU. The sensors are fused using the
                extended Kalman filter, as the name suggests.
              </li>
              <li>
                <strong>Build Graph:</strong> The build graph node does three main things. It first uses a KD tree and data association to locate and label the 
                nearest cone. Then it performs loop closure to gain an absolute ground truth point and correct all the past errors. Lastly, 
                it stores all edges and vertices for graphSLAM.
              </li>
              <li>
                <strong>Compute Graph:</strong> This node converts everything in build graph into G2O types and adds them to the G2O optimizer. Finally,
                it publishes the cone map and the updated pose.
              </li>
            </ul>
          </section>
        </div>
      </TextSection>
    </StyledProject1>
  );
}

export default Project1;
