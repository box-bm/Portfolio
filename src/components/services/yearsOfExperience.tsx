import { FunctionComponent } from "react";
import styled from "styled-components";
import { StyledProps } from "../../models/styledProps";

const YearsOfExperience: FunctionComponent<StyledProps> = ({ className }) => (
  <div className={className}>
    <div>3+</div>
    <div>Años de experiencia</div>
  </div>
);

const StyledYearsOfExperience = styled(YearsOfExperience)`
  position: absolute;
  top: 27rem;
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
  font-size: 50px;
`;

export default StyledYearsOfExperience;
