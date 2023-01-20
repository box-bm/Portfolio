import styled from "styled-components";
import Button from "./button";

const IconButton = styled(Button)`
  border-radius: 100%;
  width: 3.4rem;
  height: 3.4rem;
  padding: 12px;

  ${({ theme }) => theme.screenSizes.minMediumDevices} {
    width: 4rem;
    height: 4rem;
  }
`;

export default IconButton;
