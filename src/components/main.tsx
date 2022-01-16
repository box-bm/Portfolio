import styled from 'styled-components';

export default styled.main`
  display: flex;
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.background};
`;
