import styled from "styled-components";

type Props = {
  color?: string;
  backgroundColor?: string;
};

const Button = styled.button<Props>`
  padding: 8px 14px;
  border: none;
  background: none;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.theme.borderRadius};
  display: flex;
  gap: 5px;
  font-size: 1.6rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background 0.2s ease;
`;

export default Button;
