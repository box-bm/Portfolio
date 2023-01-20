import styled from "styled-components";
import Button from "./button";

const IconButton = styled(Button)`
  border-radius: 100%;
  width: ${(props) =>
    props.size === "sm" ? "2rem" : props.size === "lg" ? "5rem" : "3rem"};
  height: ${(props) =>
    props.size === "sm" ? "2rem" : props.size === "lg" ? "5rem" : "3rem"};
`;

export default IconButton;
