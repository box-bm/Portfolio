import styled from "styled-components";
import { Title } from "../fonts";
import { UilChatBubbleUser } from "@iconscout/react-unicons";

const AboutMeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 50px 10px 40px 10px;

  #content {
    margin-top: 20px;
    max-width: 500px;
    text-align: center;
  }
`;

const AboutMe: React.FC = () => {
  return (
    <AboutMeContainer>
      <UilChatBubbleUser size="100px" />
      <Title>About Me</Title>
      <div id="content">
        I'm a fullStack developer, using recently technologies using good
        practices of development. Currently I am working harder on my own
        company, to improve my skills like learn english or take courses of
        technologies. My dream is to be a mobile developer because it's a big
        area for work and it's so different world.
      </div>
    </AboutMeContainer>
  );
};

export default AboutMe;
