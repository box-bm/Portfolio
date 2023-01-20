import styled from "styled-components";

type Props = {
  color?: string;
  backgroundColor?: string;
  size?: "sm" | "md" | "lg";
};

const Button = styled.button<Props>`
  padding: 0;
  border: none;
  background: none;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.theme.borderRadius};
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

export default Button;
