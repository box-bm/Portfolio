import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {FC, useState} from 'react';
import Icon from '../components/icon';
import {SkillCard, SkillTitle, Text} from './components';
import {ISkill} from './interfaces';

const Skill: FC<ISkill> = props => {
  const {name, description, proyects} = props;
  const [active, setActive] = useState(false);

  const toggleActive = () => setActive(!active);

  return (
    <SkillCard active={active} onClick={!active ? toggleActive : undefined}>
      <div>
        <SkillTitle active={active}>{name}</SkillTitle>
        {active && (
          <>
            <Text>{description}</Text>
            <div>
              {proyects.map((proyect, index) => (
                <div key={`${proyect.name}-${index}`}>
                  <h5>{proyect.name}</h5>
                  <p>{proyect.description}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <Icon
        icon={faChevronRight}
        rotate={!active ? 'horizontal' : 0}
        size={'2x'}
      />
    </SkillCard>
  );
};

export default Skill;
