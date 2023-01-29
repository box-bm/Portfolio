import styled from "styled-components";
import { SocialMedia } from "./profile";
import { UilLink } from "@iconscout/react-unicons";

const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;

  > div {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: column;
    padding: 20px 12px;

    div {
      margin-bottom: 12px;
    }

    ${({ theme }) => theme.screenSizes.minMediumDevices} {
      flex-direction: row;
    }

    .regards {
      max-width: 400px;
    }

    .more {
      h2 {
        margin-bottom: 10px
      }
    }
  }

  .appinfo {
    display: flex;
    background-color: #000000aa;
    padding: 20px 12px;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div>
        <div className="regards">
          <h2>Thanks</h2>
          <p>
            This is my website, I'm improving this site for you and share with
            you more information about myself.
            <br />
            Thanks for visit my site.
          </p>
        </div>
        <div className="social">
          <h2>Social</h2>
          <SocialMedia reduceColors />
        </div>
        <div className="more">
          <h2>More</h2>
          <a
            href="https://malachite-wanderer-866.notion.site/Engineering-Wiki-f5f66c6df5444b66b1aa4274168ce189"
            target="_blank"
            rel="noopener noreferrer"
          >
            <UilLink size="1.3rem" /> Notes on Notion
          </a>
        </div>
      </div>
      <div className="appinfo">© 2022, brandonmanzo.dev</div>
    </FooterContainer>
  );
};

export default Footer;
