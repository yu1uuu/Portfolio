import React from 'react';
import styled from 'styled-components';

const StyledProjectPage = styled.main`
  background-color: #101810;
  color: #bdd2c5;
  padding: 20px;
  text-align: center;
  padding-bottom: 60px;
`;

const ProjectImage = styled.img`
  width: 80%;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Project3 = () => {
  return (
    <StyledProjectPage>
      <h2>Heartbeat Monitor</h2>
      <ProjectImage src="/heartbeat.png" alt="Heartbeat Monitor" />
      <p>The Heartbeat Monitor project involves designing a convolutional neural network (CNN) to identify anomalies in cardiac heartbeat signals. This project aims to improve early detection of heart conditions by analyzing ECG data...</p>
      <p>The system processes raw ECG data, applies filters, and uses machine learning to classify heartbeats into normal and abnormal categories. The results are visualized to help clinicians make informed decisions...</p>
      {/* Add more detailed content about the project here */}
    </StyledProjectPage>
  );
};

export default Project3;
