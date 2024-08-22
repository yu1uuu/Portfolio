import React from 'react';
import styled from 'styled-components';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const StyledExperiencesPage = styled.main`
  background-color: #101810;
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
  justify-content: space-between;
  align-items: flex-start;
  width: 80%;
  margin: 20px 0;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 10px;
    transform: translateX(-50%);
    width: 14px;
    height: 14px;
    background: #bdd2c5;
    border-radius: 50%;
  }
`;

const ExperienceDetails = styled.div`
  text-align: left;
  width: 45%;
`;

const ExperienceTitle = styled.h3`
  margin: 0;
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
  font-size: 14px;
  color: #bdd2c5;
  margin: 10px 0 0 0;
  svg {
    margin-right: 8px;
  }
`;

const Experiences = () => {
  return (
    <StyledExperiencesPage>
      <h2>Experience</h2>
      <Timeline>
        <TimelineItem>
          <ExperienceDetails>
            <ExperienceTitle>ML Developer & Cofounder</ExperienceTitle>
            <ExperienceCompany>Sequova Consulting Group</ExperienceCompany>
            <ExperienceDate>
              <FaCalendarAlt /> 2024 - Present
            </ExperienceDate>
          </ExperienceDetails>
        </TimelineItem>
        <TimelineItem>
          <ExperienceDetails>
            <ExperienceTitle>AI Researcher</ExperienceTitle>
            <ExperienceCompany>UTFR</ExperienceCompany>
            <ExperienceDate>
              <FaCalendarAlt /> 2024 - Present
            </ExperienceDate>
          </ExperienceDetails>
          <ExperienceDetails>
            <ExperienceTitle>Mapping Lead</ExperienceTitle>
            <ExperienceCompany>UofT Formula Racing</ExperienceCompany>
            <ExperienceDate>
              <FaCalendarAlt /> 2022 - Present
            </ExperienceDate>
          </ExperienceDetails>
          <ExperienceDetails>
            <ExperienceTitle>Mobility Innovation Lead</ExperienceTitle>
            <ExperienceCompany>UofT Autodrive</ExperienceCompany>
            <ExperienceDate>
              <FaCalendarAlt /> 2023 - 2024
            </ExperienceDate>
          </ExperienceDetails>
          <ExperienceDetails>
            <ExperienceTitle>Engineering Intern</ExperienceTitle>
            <ExperienceCompany>Supratec Membrane</ExperienceCompany>
            <ExperienceDate>
              <FaCalendarAlt /> 2023
            </ExperienceDate>
          </ExperienceDetails>
        </TimelineItem>
      </Timeline>
    </StyledExperiencesPage>
  );
};

export default Experiences;
