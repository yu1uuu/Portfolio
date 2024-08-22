import React from 'react';
import styled from 'styled-components';

const StyledProjectPage = styled.main`
  background-color: #101810;
  color: #bdd2c5;
  padding: 20px;
  text-align: center;
  padding-bottom: 60px;
`;

function Project8() {
  return (
    <StyledProjectPage>
      <h2>Flappy Bird</h2>
      <p>An interactive game of Flappy Bird using Verilog, FPGA board, and VGA display.</p>
      <img src='./flappy_bird.jpg' alt='Flappy Bird' style={{ width: '80%', borderRadius: '10px' }} />
      <p>This project implements the popular game Flappy Bird using hardware description language (Verilog) and FPGA technology...</p>
      {/* Add more detailed content about the project here */}
    </StyledProjectPage>
  );
}

export default Project8;
