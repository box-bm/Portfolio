import styled from 'styled-components';

const Text = styled.p`
  font-size: 1.6rem;
  color: ${props => props.theme.colors.text};
  font-weight: 400;
  line-height: 1.4;
`;

export default Text;
