import { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { useWindowSize } from "../../../../hooks";
import { Button } from "../../../button";
import { Icon } from "../../../icons";
import MovilMenu from "./movilMenu";

const StyledBackgroundOpacity = styled.div`
  width: 100vw;
  opacity: 0.5;
  height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  background-color: black;
`;

const StyledMenu = styled.div`
  font-weight: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;

  & > .link {
    padding: 0px 15px;
    font-size: 30px;
  }

  .menu-icon-button {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const Menu: FunctionComponent = () => {
  const { width } = useWindowSize();
  const [isActive, setActive] = useState(false);

  const handleClick = () => setActive(!isActive);
  return (
    <StyledMenu>
      {width > 320 && width < 480 ? (
        <>
          <Button onClick={handleClick} className="menu-icon-button">
            <Icon iconName="ellipsis-v" />
          </Button>
          <MovilMenu isActive={isActive} onClose={handleClick} />
          {isActive && <StyledBackgroundOpacity />}
        </>
      ) : (
        <>
          <span className="link">Aplicaciones</span>
          <span className="link">Servicios</span>
          <span className="link">Contacto</span>
        </>
      )}
    </StyledMenu>
  );
};

export default Menu;
