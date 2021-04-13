import { FunctionComponent } from "react";
import styled from "styled-components";
import { StyledProps } from "../../models/styledProps";
import { Button } from "../button";
import Background from "./background";
import ButtonGroup from "./buttons";
import Information from "./information";
import Photo from "./photo";

const ContentAboutMe: FunctionComponent<StyledProps> = ({
  className,
}: StyledProps) => {
  return (
    <div className={className}>
      <Background />
      <div className="information-container">
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
  );
};
const AboutMe = styled(ContentAboutMe)`
  height: 100vh;
  display: flex;
  justify-content: start;
  align-items: center;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    justify-content: center;

    .information-container {
      padding-top: 40px;
      justify-content: center;
      display: flex;
      flex-direction: column;
      align-content: center;
      align-items: center;
      text-align: center;
    }
  }
`;

export default AboutMe;
