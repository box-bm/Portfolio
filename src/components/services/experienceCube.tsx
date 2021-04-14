import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";
import { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { StyledProps } from "../../models/styledProps";
import { Cube } from "../figures";
import { Icon } from "../icons";

interface IProps extends StyledProps {
  icon: IconName;
  prefix?: IconPrefix;
  hability: string;
}

type Props = IProps;

const ExperienceCube: FunctionComponent<Props> = ({
  icon,
  prefix = "fas",
  hability,
  className,
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className={className} onClick={() => setActive(!active)}>
      <Cube
        dimensions={{ height: active ? "100vh" : "250px" }}
        color="gray"
        className={`cube ${active ? "active" : ""}`}
      >
        <div className="cubeContainer">
          <div>
            <Icon iconName={icon} prefix={prefix} size="2x" />
            <div>{hability}</div>
            <div className="cubeContent">
              <div className="cube-title">ver mas...</div>
              <Icon iconName="arrow-right" size="1x" />
            </div>
          </div>
        </div>
      </Cube>
    </div>
  );
};

const StyledExperienceCube = styled(ExperienceCube)`
  padding: 0px 10px;

  .cube {
    transition: all 350ms ease;
    height: 250px;
  }

  .cube:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0px 3px 3px 0px #4d4d4d;
  }

  .cube.active {
    height: 80vh;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .cubeContainer {
    padding: 10px;
    color: white;
    display: flex;
    height: calc(100% - 20px);
    align-items: flex-end;
  }
  .cubeContent {
    font-size: 15px;
    display: flex;
    align-items: center;
  }

  .cube-title {
    padding-right: 10px;
  }
`;

export default StyledExperienceCube;
