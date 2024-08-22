import React from 'react';
import styled from 'styled-components';

const StyledProjectPage = styled.main`
  background-color: #101810;
  color: #bdd2c5;
  padding: 20px;
  text-align: center;
  padding-bottom: 60px;
`;

function Project4() {
  return (
    <StyledProjectPage>
      <h2>UNIverse</h2>
      <p>Mapping software with specific functions designed for university students.</p>
      <img src='/docs/map.png' alt='UNIverse' style={{ width: '80%', borderRadius: '10px' }} />
      <p>UNIverse is a comprehensive mapping tool tailored to university campuses, providing detailed maps, navigation, and point-of-interest data...</p>
      {/* Add more detailed content about the project here */}
    </StyledProjectPage>
  );
}

export default Project4;
