import styled from "styled-components";
import Skill from "./Skill";
import { Title } from "../fonts";
import skills from "../../data/skills";

const SkillsContainer = styled.section`
  padding: 50px 40px;
  text-align: center;

  .skill-list {
    gap: 20px;
    margin-top: 30px;
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const Skills: React.FC = () => {
  return (
    <SkillsContainer>
      <Title>Skills</Title>
      <div className="skill-list">
        {skills.map((skill) => (
          <Skill key={skill.title} {...skill} />
        ))}
      </div>
    </SkillsContainer>
  );
};

export default Skills;
