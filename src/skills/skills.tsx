import {FC} from 'react';
import {Container, Title} from './components';
import SkillList from './skillList';

const Skills: FC = () => {
  return (
    <Container>
      <Title>Skills</Title>
      <SkillList />
    </Container>
  );
};

export default Skills;
