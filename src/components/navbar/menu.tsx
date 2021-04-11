import { FunctionComponent } from "react";
import styled from "styled-components";

const StyledMenu = styled.div`
  width: auto;
  gap: 30px;
  font-size: large;
  font-weight: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`;

const Menu: FunctionComponent = () => (
  <StyledMenu>
    <span>Aplicaciones</span>
    <span>Servicios</span>
    <span>Contacto</span>
  </StyledMenu>
);

export default Menu;
