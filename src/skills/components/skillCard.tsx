import styled from 'styled-components';
import {ISkillCardProps} from '../interfaces';

export default styled.div.attrs((props: ISkillCardProps) => props)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props =>
    props.active ? `0px 0px 18px ${props.theme.colors.shadow}` : 'none'};
  padding: 20px 18px;
`;
