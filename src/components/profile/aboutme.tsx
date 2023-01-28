import styled from "styled-components";
import { Title } from "../fonts";
import { UilChatBubbleUser } from "@iconscout/react-unicons";
import moment from "moment";

const AboutMeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 50px 10px 40px 10px;

  #content {
    max-width: 450px;
    margin-top: 20px;
    text-align: center;
  }

  hr {
    color: white;
    border-width: 2px;
    width: 100%;
  }
`;

const AboutMe: React.FC = () => {
  return (
    <AboutMeContainer>
      <div id="content">
        <UilChatBubbleUser size="100px" />
        <Title>About Me</Title>
        I'm a fullStack developer, I'm{" "}
        {moment(new Date(2000, 2, 28)).fromNow(false)} old. When I started this
        path, I always have the think of learn more, upgrading my skills.
        Started with simple apps and with the time, I build multiple strong
        systems using recently technologies and good practices of development.
        Currently, I am working harder on my own projects, to improve my skills
        and learn english and other thinks of my life. Always taking a cup of
        coffee.
      </div>
    </AboutMeContainer>
  );
};

export default AboutMe;
