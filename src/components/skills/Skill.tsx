import styled from "styled-components";
import { Title } from "../fonts";
import { Card } from "../Card";

import SkillModel from "../../model/skill";
import Tool from "./Tool";

const SkillContainer = styled(Card)<{ color: string }>`
  padding: 0px;
  border-radius: 20px;
  flex: 1 1;
  max-width: 380px;
  min-width: 300px;
  text-align: center;

  .header {
    height: 260px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    & > * {
      position: absolute;
    }

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .bg-obscure {
      border-radius: 20px 20px 0 0;
      background-color: ${(props) => props.color};
      height: 100%;
      width: 100%;
    }

    img {
      border-radius: 20px 20px 0 0;
      background-color: #00000080;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .icon {
    font-size: 4rem;
  }

  .content {
    padding: 10px 12px;
  }
`;

type Props = SkillModel;

const Skill: React.FC<Props> = (props) => {
  const { descritpion, title, color, icon: Icon, tools } = props;
  return (
    <SkillContainer color={color}>
      <div className="header">
        <div className="title bg-obscure">
          <Icon className="icon" size="70px" />
          <Title>{title}</Title>
        </div>
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
