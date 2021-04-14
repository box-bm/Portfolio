import { FunctionComponent } from "react";
import styled from "styled-components";
import { StyledProps } from "../../models/styledProps";

const Description: FunctionComponent<StyledProps> = ({ className }) => {
  return (
    <div className={className}>
      Desarrollador y diseñador web, autodicata. Especializado en React y
      Typescript.
    </div>
  );
};

const StyledDescription = styled(Description)`
  position: absolute;
  width: 45rem;
  top: 20rem;
  left: 17rem;
`;

export default StyledDescription;
