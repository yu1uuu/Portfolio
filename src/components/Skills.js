import React from 'react';
import styled from 'styled-components';
import { FaCog } from 'react-icons/fa';

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  padding: 20px;
`;

const SkillSection = styled.div`
  background-color: rgba(100, 120, 90, 0.4);
  color: #bdd2c5;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 30px;
  width: 70%;
  max-width: 800px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h3`
  text-align: center;
  margin-bottom: 30px;
  color: #bdd2c5;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  justify-items: center;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SkillIcon = styled(FaCog)`
  margin-bottom: 10px;
  font-size: 24px;
  color: #8B9E91;
`;

const SkillName = styled.p`
  font-weight: bold;
  margin: 0;
  font-size: 16px;
  color: #bdd2c5;
`;

const SkillLevel = styled.p`
  margin: 0;
  font-size: 14px;
  color: #777;
`;

const Skills = () => {
  return (
    <SkillsContainer>
      <SkillSection>
        <SectionTitle>Languages</SectionTitle>
        <SkillsGrid>
          <SkillItem>
            <SkillIcon />
            <SkillName>C/C++</SkillName>
            <SkillLevel>Advanced</SkillLevel>
          </SkillItem>
          <SkillItem>
            <SkillIcon />
            <SkillName>Python</SkillName>
            <SkillLevel>Advanced</SkillLevel>
          </SkillItem>
          <SkillItem>
            <SkillIcon />
            <SkillName>Javascript</SkillName>
            <SkillLevel>Advanced</SkillLevel>
          </SkillItem>
          <SkillItem>
            <SkillIcon />
            <SkillName>SQL</SkillName>
            <SkillLevel>Basic</SkillLevel>
          </SkillItem>
          <SkillItem>
            <SkillIcon />
            <SkillName>Verilog</SkillName>
            <SkillLevel>Intermediate</SkillLevel>
          </SkillItem>
          <SkillItem>
            <SkillIcon />
            <SkillName>Assembly</SkillName>
            <SkillLevel>Intermediate</SkillLevel>
          </SkillItem>
        </SkillsGrid>
      </SkillSection>

      <SkillSection>
        <SectionTitle> Tools & Technologies</SectionTitle>
        <SkillsGrid>
          <SkillItem>
            <SkillIcon />
            <SkillName>Machine Learning</SkillName>
            <SkillLevel>Intermediate</SkillLevel>
          </SkillItem>
          <SkillItem>
            <SkillIcon />
            <SkillName>React</SkillName>
            <SkillLevel>Intermediate</SkillLevel>
          </SkillItem>
          <SkillItem>
            <SkillIcon />
            <SkillName>ROS</SkillName>
            <SkillLevel>Advanced</SkillLevel>
          </SkillItem>
          <SkillItem>
            <SkillIcon />
            <SkillName>Soldering</SkillName>
            <SkillLevel>Basic</SkillLevel>
          </SkillItem>
          <SkillItem>
            <SkillIcon />
            <SkillName>Microsoft Suite</SkillName>
            <SkillLevel>Advanced</SkillLevel>
          </SkillItem>
          <SkillItem>
            <SkillIcon />
            <SkillName>Lab Equipment</SkillName>
            <SkillLevel>Advanced</SkillLevel>
          </SkillItem>
        </SkillsGrid>
      </SkillSection>
    </SkillsContainer>
  );
};

export default Skills;
