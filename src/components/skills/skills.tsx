import styled from "styled-components";
import skills from "../../data/skills";
import { Title } from "../fonts";
import SkillCard from "./skillCard";

const SkillsContainer = styled.section`
  padding: 50px 40px;
  .skills-list {
    padding: 20px 0px;
    gap: 20px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
`;

const Skills: React.FC = () => {
  return (
    <SkillsContainer>
      <Title>Skills</Title>
      <div className="content"></div>
      <div className="skills-list">
        {skills.map((skill) => (
          <SkillCard {...skill} />
        ))}
      </div>
    </SkillsContainer>
  );
};

export default Skills;
