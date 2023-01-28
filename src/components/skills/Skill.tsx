import styled from "styled-components";
import { Title } from "../fonts";
import { Card } from "../Card";

import SkillModel from "../../model/skill";
import Tool from "./Tool";

const SkillContainer = styled(Card)`
  padding: 0px;
  border-radius: 20px;
  flex: 1 1;
  max-width: 380px;
  min-width: 300px;
  text-align: center;

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 12px;
    min-height: 200px;

    .icon-bg {
      border-radius: 100%;
      background-color: ${(props) => props.theme.colors.primary};
      padding: 16px;
      height: 80px;
      width: 80px;
      color: white;
      margin-bottom: 12px;
    }
  }
  .content {
    padding: 10px 12px;
  }
`;

type Props = SkillModel;

const Skill: React.FC<Props> = (props) => {
  const { descritpion, title, icon: Icon, tools } = props;
  return (
    <SkillContainer>
      <div className="header">
        <div className="icon-bg">
          <Icon className="icon" size="100%" />
        </div>
        <Title>{title}</Title>
      </div>
      <div className="content">
        <p>{descritpion}</p>
        {tools.map((tool) => (
          <Tool key={tool.title} {...tool} />
        ))}
      </div>
    </SkillContainer>
  );
};

export default Skill;
