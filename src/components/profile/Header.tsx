import styled from "styled-components";
import { Name, Position } from "../fonts";
import icon from "../../assets/img/header.svg";
import SocialMedia from "./SocialMedia";

const HeaderContainer = styled.main`
  display: flex;
  
  max-height: 900px;
  padding: 40px 12px;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .info {
    order: 2;
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  img {
    order: 1;
    height: calc(100% - 100px);
    width: 70%;
    max-width: 700px;
  }

  ${({ theme }) => theme.screenSizes.minMediumDevices} {
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    height: calc(100vh - 100px);

    .info {
      padding-left: 40px;
      text-align: start;
      justify-content: space-between;
      align-items: flex-start;
    }
    img {
      order: 2;
    }
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div className="info">
        <Name>Brandon Manzo</Name>
        <Position>Full-Stack Developer</Position>
        <p>I love to write solutions and create your idea to your screen.</p>
        <SocialMedia />
      </div>
      <img src={icon} alt="icon" />
    </HeaderContainer>
  );
};

export default Header;
