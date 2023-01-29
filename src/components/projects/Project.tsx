import styled from "styled-components";
import ProjectModel from "../../model/project";
import { findTechnologies } from "../../utils/findTechnologies";
import { Card } from "../Card";
import { IconButton } from "../buttons";
import { UilGithubAlt, UilGlobe, UilPalette } from "@iconscout/react-unicons";
import useThemeDetector from "../../hooks/useThemeDetector";

type Props = ProjectModel;

const ProjectContainer = styled(Card)`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 20px 4px 20px;

  h3 {
    font-size: 2.4rem;
  }

  p {
    max-width: 500px;
  }

  .sites {
    display: flex;
    justify-content: flex-end;
  }

  .technologies {
    display: flex;

    .technology {
      display: flex;
      align-items: center;
      height: 35px;
      border-radius: 20px;

      & > .technology-logo {
        height: 50%;
      }

      & > span {
        margin-left: 10px;
      }
    }
  }
  hr {
    border-width: 0.2px;
    border-color: #686868;
  }
`;

const Project: React.FC<Props> = (props) => {
  const { title, technologies, description, githubURL, url, figmaURL } = props;
  const projectTechnologies = findTechnologies(technologies);

  const isDark = useThemeDetector();

  const redirectTo = (url: string) => window.open(url);

  return (
    <ProjectContainer>
      <div className="details">
        <h3>{title}</h3>
        <div className="technologies">
          {projectTechnologies.map((e) => (
            <div key={e.id} className="technology">
              <img src={e.website} alt={e.name} className="technology-logo" />
              <span>{e.name}</span>
            </div>
          ))}
        </div>
        <p>{description}</p>
      </div>
      <div className="sites">
        {githubURL && (
          <IconButton
            onClick={() => redirectTo(githubURL)}
            color={isDark ? "white" : "black"}
          >
            <UilGithubAlt />
          </IconButton>
        )}
        {url && (
          <IconButton
            onClick={() => redirectTo(url)}
            color={isDark ? "white" : "black"}
          >
            <UilGlobe />
          </IconButton>
        )}
        {figmaURL && (
          <IconButton
            onClick={() => redirectTo(figmaURL)}
            color={isDark ? "white" : "black"}
          >
            <UilPalette />
          </IconButton>
        )}
      </div>
    </ProjectContainer>
  );
};

export default Project;
