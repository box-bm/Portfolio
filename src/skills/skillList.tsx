import {FC} from 'react';
import styled from 'styled-components';
import Skill from './skill';

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillList: FC = () => {
  return (
    <Content>
      <Skill
        name="React"
        description="I have worked on react JS 2 years ago, I create some apps with that and using many UI Frameworks, for example: Fluent UI, Material UI, Ant Design, etc."
        proyects={[
          {
            name: 'Halcon',
            description:
              'A project for my last work, this proyect calculate extra hours for a company, and send them to the company, using a API created with .Net Core and SQL Server.',
          },
        ]}
      />
    </Content>
  );
};

export default SkillList;
