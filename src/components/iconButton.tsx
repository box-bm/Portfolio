import styled from 'styled-components';

// create icon button
const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

export default IconButton;
