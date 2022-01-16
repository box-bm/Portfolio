import styled from 'styled-components';

export default styled.a`
  color: ${({theme}) => theme.colors.primary};
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 400;
  transition: color 0.2s ease-in-out;
  margin-top: 12px;
`;
