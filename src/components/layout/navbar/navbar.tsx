import { FunctionComponent } from "react";
import Styled from "styled-components";
import { StyledProps } from "../../../models/styledProps";
import Menu from "./menu";
import Title from "./title";

const ContentNavbar: FunctionComponent<StyledProps> = ({
  className,
}: StyledProps) => {
  return (
    <nav className={className}>
      <div className="nav-content">
        <Title>Sobre Mi</Title>
        <Menu />
      </div>
    </nav>
  );
};

const Navbar = Styled(ContentNavbar)`
  color: black;
  display: flex;
  position: fixed;
  width: calc(100vw - 20%);
  padding: 20px 0px;
  z-index: 100;

  .nav-content{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    .nav-content {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
`;

export default Navbar;
