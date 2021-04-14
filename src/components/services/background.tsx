import styled from "styled-components";

export default styled.div`
  width: 100vw;
  position: absolute;
  height: 85vh;
  background-color: ${(props) => props.theme.backgroundColor};
  left: 0;
  z-index: 1;
`;
