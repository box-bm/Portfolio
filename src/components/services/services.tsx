import { FunctionComponent } from "react";
import styled from "styled-components";
import { StyledProps } from "../../models/styledProps";
import { Cube } from "../figures";
import { Icon } from "../icons";

const Services: FunctionComponent<StyledProps> = ({ className }) => {
  return (
    <>
      <Background />
      <div className={className}>
        <div className="years-of-experience">
          <div>3+</div>
          <div>Años de experiencia</div>
        </div>
        <div className="description">
          Desarrollador y diseñador web, autodicata. Especializado en React y
          Typescript.
        </div>
        <div className="experience">
          <div style={{ margin: "0px 10px" }}>
            <Cube dimensions={{ height: "300px" }} color="skyblue">
              <div
                style={{
                  padding: "10px",
                  color: "white",
                  display: "flex",
                  height: "calc(100% - 20px)",
                  alignItems: "flex-end",
                }}
              >
                <div>
                  <Icon iconName="react" prefix="fab" size="3x" />
                  <div>Desarrollo</div>
                  <div
                    style={{
                      fontSize: "15px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    ver mas...
                    <Icon iconName="arrow-right" size="1x" />
                  </div>
                </div>
              </div>
            </Cube>
          </div>
        </div>
      </div>
    </>
  );
};

const Background = styled.div`
  width: 100vw;
  position: absolute;
  height: 85vh;
  background-color: ${(props) => props.theme.backgroundColor};
  left: 0;
  z-index: 1;
`;

const StyledServices = styled(Services)`
  position: absolute;
  height: 100vh;
  z-index: 2;
  padding-top: 70px;
  background-color: white;

  .experience {
    position: absolute;
    top: 40rem;
    left: 20rem;
    display: flex;
    gap: 10px;
  }

  .description {
    position: absolute;
    width: 45rem;
    top: 20rem;
    left: 17rem;
  }

  .years-of-experience {
    position: absolute;
    top: 27rem;
    color: ${(props) => props.theme.colors.primary};
    font-weight: bold;
    font-size: 50px;
  }
`;

export default StyledServices;
