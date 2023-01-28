import styled from "styled-components";
import { Name, Position } from "../fonts";
import icon from "../../assets/img/programmer.svg";
import SocialMedia from "./SocialMedia";

const HeaderContainer = styled.main`
  display: flex;
  height: calc(100vh - 100px);
  max-height: 900px;
  padding: 0px 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  #info {
    flex: 2;
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  img {
    flex: 2;
    height: calc(100% - 100px);
    width: 70%;
    max-width: 800px;
    display: none;
  }

  ${({ theme }) => theme.screenSizes.minMediumDevices} {
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;

    #info {
      text-align: start;
      justify-content: space-between;
      align-items: flex-start;
    }
    img {
      display: block;
    }
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div id="info">
        <Name>Brandon Manzo</Name>
        <Position>Full-Stack Developer</Position>
        <p>I love to write solutions and create your idea to your screen.</p>
        <SocialMedia />
      </div>
      <img src={icon} alt="header_image" />
    </HeaderContainer>
  );
};

export default Header;
