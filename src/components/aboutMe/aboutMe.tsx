import { FunctionComponent } from "react";
import styled from "styled-components";
import { StyledProps } from "../../models/styledProps";
import { Button } from "../button/indext";
import { Circle } from "../figures";
import ButtonGroup from "./buttons";
import Information from "./information";
import Photo from "./photo";

const ContentAboutMe: FunctionComponent<StyledProps> = ({
  className,
}: StyledProps) => {
  return (
    <>
      <Circle
        height="689px"
        width="689px"
        position={{ bottom: "-250px", right: "-150px" }}
        color="primary"
      />
      <Circle
        height="689px"
        width="689px"
        position={{ top: "-250px", right: "25%" }}
        color="secondary"
      />
      <Circle
        height="600px"
        width="600px"
        position={{ bottom: "10%", left: "-200px" }}
        color="secondary"
      />
      <div className={`${className} content`}>
        <div>
          <Photo url="https://www.facebook.com/brandon.manzo.587" />
          <Information />
          <ButtonGroup>
            <Button
              iconName="github-alt"
              iconPrefix="fab"
              bgColor="black"
              color="white"
            >
              Github
            </Button>
            <Button
              bgColor="#0e76a8"
              color="white"
              iconName="linkedin"
              iconPrefix="fab"
            >
              LinkedIn
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </>
  );
};
const AboutMe = styled(ContentAboutMe)`
  height: 100vh;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 15px;
  width: 60rem;
`;

export default AboutMe;
