import { FunctionComponent } from "react";
import styled from "styled-components";
import { Circle } from "../figures";

const StyledBackground = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 0;
  z-index: -1;
`;

const Background: FunctionComponent = () => (
  <StyledBackground>
    <Circle
      diameter="50vh"
      xyPosition={{ bottom: "-15%", right: "-5%" }}
      color="info"
      position="fixed"
    />
    <Circle
      diameter="50vh"
      xyPosition={{ top: "-10rem", right: "200px" }}
      color="info"
      position="fixed"
    />
    <Circle
      diameter="50vh"
      xyPosition={{ bottom: "10%", left: "-200px" }}
      color="secondary"
      position="fixed"
    />
  </StyledBackground>
);

export default Background;
