import { FunctionComponent } from "react";
import Styled from "styled-components";
import { StyledProps } from "../../models/styledProps";
import Title from "./title";
import Menu from "./menu";

const ContentNavbar: FunctionComponent<StyledProps> = ({
  className,
}: StyledProps) => (
  <div className={className}>
    <Title>Sobre Mi</Title>
    <Menu />
  </div>
);

const Navbar = Styled(ContentNavbar)`
  color: black;
  margin: 20px 140px;
  display: flex;
  position: fixed;
  width: -webkit-fill-available;
  max-width: 100vw;
  justify-content: space-between;
`;

export default Navbar;
