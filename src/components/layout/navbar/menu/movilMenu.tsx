import { FunctionComponent } from "react";
import styled from "styled-components";
import { StyledProps } from "../../../../models/styledProps";
import { Button } from "../../../button";

interface IProps extends StyledProps {
  isActive: boolean;
  onClose(): void;
}

type Props = IProps;

const MovilMenu: FunctionComponent<Props> = ({ onClose, className }) => {
  return (
    <div className={className}>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h4>Menu</h4>
          <Button onClick={onClose} iconName="times" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "20px",
            gap: "10px",
          }}
        >
          <span className="link">Aplicaciones</span>
          <span className="link">Servicios</span>
          <span className="link">Contacto</span>
        </div>
      </div>
    </div>
  );
};

const StyledMovilMenu = styled(MovilMenu)<IProps>`
  position: absolute;
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor};
  top: 0;
  right: ${(props) => (props.isActive ? "0px" : "-30rem")};
  color: black;
  width: 75%;
  padding: 20px 25px;
  transition: right 350ms ease;
  z-index: 2;
`;

export default StyledMovilMenu;
