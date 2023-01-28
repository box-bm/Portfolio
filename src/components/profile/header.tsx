import styled from "styled-components";
import { Name, Position } from "../fonts";
import Photo from "./Photo";
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
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    min-width: 200px;
    margin-top: 50px;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  ${({ theme }) => theme.screenSizes.minMediumDevices} {
    flex-direction: row;
    gap: 10px;

    #info {
      margin-left: 10px;
      text-align: start;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Photo src="https://media.licdn.com/dms/image/D4E03AQEAbVp077q_Ig/profile-displayphoto-shrink_400_400/0/1662251736991?e=1679529600&v=beta&t=HIJ_EAlLVUJpDIxpwjcPzFYSw1XdTJru9AWj8Mzu1E4" />
      <div id="info">
        <Name>Brandon Manzo</Name>
        <Position>Full-Stack Developer</Position>
        <p>I love to write solutions and create your idea to your screen.</p>
        <SocialMedia />
      </div>
    </HeaderContainer>
  );
};

export default Header;
