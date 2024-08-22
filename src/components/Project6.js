import React from 'react';
import styled from 'styled-components';

const StyledProjectPage = styled.main`
  background-color: #101810;
  color: #bdd2c5;
  padding: 20px;
  text-align: center;
  padding-bottom: 60px;
`;

function Project6() {
  return (
    <StyledProjectPage>
      <h2>Neurosurf</h2>
      <p>Uses the Muse 2 portable EEG headband to capture live brain waves from users and identify user mood.</p>
      <img src='./neurosurf.png' alt='Neurosurf' style={{ width: '80%', borderRadius: '10px' }} />
      <p>Neurosurf utilizes EEG data to analyze user mood in real-time, offering insights into mental well-being...</p>
      {/* Add more detailed content about the project here */}
    </StyledProjectPage>
  );
}

export default Project6;
