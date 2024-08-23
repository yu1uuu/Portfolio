import React from 'react';
import styled from 'styled-components';
import { FaCalendarAlt } from 'react-icons/fa';

const StyledExperiencesPage = styled.main`
  background-color: #041202;
  color: #bdd2c5;
  padding: 40px 20px;
  text-align: center;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 20px 0;
  padding-left: 20px;
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #bdd2c5;
  }
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: ${({ alignRight }) => (alignRight ? 'flex-end' : 'flex-start')};
  align-items: center; /* Center the items vertically */
  width: 100%;
  max-width: 400px;
  margin: 30px 0;
  position: relative;
  
`;

const ExperienceDetails = styled.div`
  text-align: left;
  width: 40%; /* Half width for each side */
  padding-right: ${({ alignRight }) => (alignRight ? '0' : '30px')}; /* Reduce the padding for right */
  padding-left: ${({ alignRight }) => (alignRight ? '30px' : '0')}; /* Reduce the padding for left */
  display: flex;
  justify-content: ${({ alignRight }) => (alignRight ? 'flex-end' : 'flex-start')};
  flex-direction: column;
  #align-items: ${({ alignRight }) => (alignRight ? 'flex-end' : 'flex-start')}; /* Align text accordingly */
`;

const ExperienceTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  color: white;
`;

const ExperienceCompany = styled.p`
  margin: 0;
  font-size: 16px;
  color: #bdd2c5;
`;

const ExperienceDate = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Ensure alignment to the left */
  font-size: 14px;
  color: #bdd2c5;
  margin: 10px 0 0 0;
  text-align: left; /* Ensure the text inside is aligned left */
  svg {
    margin-right: 8px;
  }
`;


const TimelineCircle = styled.div`
  width: 14px;
  height: 14px;
  background: #bdd2c5;
  border-radius: 50%;
  position: absolute;
  left: 47.8%;
  transform: translateX(-50%);
  z-index: 1;
`;

const Experiences = () => {
  return (
    <StyledExperiencesPage>
      <h2>Experiences</h2>
      <Timeline>
        <TimelineItem>
          <ExperienceDetails>
            <ExperienceTitle>ML Developer & Cofounder</ExperienceTitle>
            <ExperienceCompany>Sequova Consulting Group</ExperienceCompany>
            <ExperienceDate>
              <FaCalendarAlt /> 2024 - Present
            </ExperienceDate>
          </ExperienceDetails>
          <TimelineCircle />
        </TimelineItem>

        <TimelineItem alignRight>
          <TimelineCircle />
          <ExperienceDetails alignRight>
            <ExperienceTitle>AI Researcher</ExperienceTitle>
            <ExperienceCompany>UTFR</ExperienceCompany>
            <ExperienceDate alignRight>
              <FaCalendarAlt /> 2024 - Present
            </ExperienceDate>
          </ExperienceDetails>
        </TimelineItem>

        <TimelineItem>
          <ExperienceDetails>
            <ExperienceTitle>Mapping Lead</ExperienceTitle>
            <ExperienceCompany>UofT Formula Racing</ExperienceCompany>
            <ExperienceDate>
              <FaCalendarAlt /> 2022 - Present
            </ExperienceDate>
          </ExperienceDetails>
          <TimelineCircle />
        </TimelineItem>

        <TimelineItem alignRight>
          <TimelineCircle />
          <ExperienceDetails alignRight>
            <ExperienceTitle>Mobility Innovation Lead</ExperienceTitle>
            <ExperienceCompany>UofT Autodrive</ExperienceCompany>
            <ExperienceDate alignRight>
              <FaCalendarAlt /> 2023 - 2024
            </ExperienceDate>
          </ExperienceDetails>
        </TimelineItem>

        <TimelineItem>
          <ExperienceDetails>
            <ExperienceTitle>Engineering Intern</ExperienceTitle>
            <ExperienceCompany>Supratec Membrane</ExperienceCompany>
            <ExperienceDate>
              <FaCalendarAlt /> 2023
            </ExperienceDate>
          </ExperienceDetails>
          <TimelineCircle />
        </TimelineItem>
        
      </Timeline>
    </StyledExperiencesPage>
  );
};

export default Experiences;
