import { FunctionComponent } from "react";
import styled from "styled-components";
import { StyledProps } from "../../models/styledProps";
import ExperienceCube from "./experienceCube";

const Experience: FunctionComponent<StyledProps> = ({ className }) => {
  return (
    <div className={className}>
      <ExperienceCube
        icon="react"
        prefix="fab"
        hability="FullStack developer"
      />
      <ExperienceCube icon="tv" hability="Web Desing" />
      <ExperienceCube icon="database" hability="Base de Datos" />
    </div>
  );
};

const StyledExperience = styled(Experience)`
  position: absolute;
  top: 30rem;
  left: 20rem;
  display: flex;
  gap: 10px;
`;

export default StyledExperience;
