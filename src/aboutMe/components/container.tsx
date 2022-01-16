import styled from 'styled-components';
import {Container} from '../../components';

export default styled(Container)`
  margin: -18px auto 0 auto;
  max-width: 1024px;
  padding: 36px 22px;
  border-radius: 18px;
  box-shadow: 0px 0px 18px ${({theme}) => theme.colors.shadow};
  background-color: ${({theme}) => theme.colors.white};
`;
