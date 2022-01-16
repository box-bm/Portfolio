import styled from 'styled-components';
import {ISkillCardProps} from '../interfaces';

export default styled.h3.attrs((props: ISkillCardProps) => props)`
  font-size: ${props => (props.active ? '2rem' : '1.6rem')};
  font-weight: 600;
  margin-bottom: ${props => (props.active ? '10px' : '0')};
`;
