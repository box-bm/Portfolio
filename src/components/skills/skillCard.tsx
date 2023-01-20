import styled from "styled-components";
import { Card } from "../card";
import Skill from "../../model/skill";

type Props = Skill;

const SkillCardContainer = styled(Card)<Props>`
  max-width: 400px;
  min-width: 300px;
  &:hover {
    background-color: ${(props) => `${props.theme.card.backgroundColor}85`};
  }
`;

const SkillCard: React.FC<Props> = (props) => {
  const { name, url } = props;

  const navigateTo = () => {
    window.open(url);
  };

  return (
    <SkillCardContainer {...props} onClick={navigateTo}>
      {name}
    </SkillCardContainer>
  );
};

export default SkillCard;
