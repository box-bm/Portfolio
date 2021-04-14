import { FunctionComponent } from "react";
import styled from "styled-components";
import { StyledProps } from "../../models/styledProps";
import Experience from "./experience";
import Background from "./background";
import Description from "./description";
import YearsOfExperience from "./yearsOfExperience";

const Services: FunctionComponent<StyledProps> = ({ className }) => {
  return (
    <>
      <Background />
      <div className={className}>
        <YearsOfExperience />
        <Description />
        <Experience />
      </div>
    </>
  );
};

const StyledServices = styled(Services)`
  position: absolute;
  height: 100vh;
  z-index: 2;
  padding-top: 70px;
  background-color: white;
`;

export default StyledServices;
