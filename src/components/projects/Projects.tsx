import styled from "styled-components";
import { Title } from "../fonts";
import projects from "../../data/projects";
import Project from "./Project";
import { Button } from "../buttons";
import { UilGithubAlt } from "@iconscout/react-unicons";
import useThemeDetector from "../../hooks/useThemeDetector";

const ProjectContainer = styled.section`
  padding: 0 12px;
  text-align: center;

  .projects {
    display: flex;
    align-items: stretch;
    justify-content: center;
    text-align: start;
    flex-wrap: wrap;
    gap: 20px;
  }

  .more {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Projects: React.FC = () => {
  const isDark = useThemeDetector();
  return (
    <ProjectContainer id="projects">
      <Title>Projects</Title>
      <div className="projects">
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
      <div className="more">
        <p>You can access to my github profile to find more.</p>
        <Button
          color={isDark ? "black" : "white"}
          backgroundColor={isDark ? "white" : "black"}
          onClick={() => window.open("https://github.com/box-bm")}
        >
          <UilGithubAlt />
          Github
        </Button>
      </div>
    </ProjectContainer>
  );
};

export default Projects;
