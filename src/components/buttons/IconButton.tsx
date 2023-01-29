import styled from "styled-components";
import Button from "./Button";

const IconButton = styled(Button)`
  border-radius: 100%;
  width: 5rem;
  height: 5rem;
  padding: 12px;

  &:hover {
    background-color: #00000015;
  }
`;

export default IconButton;
