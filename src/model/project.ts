import TechnologiesIDs from "../data/technologiesIDs";

class Project {
  title: string;
  description: string;
  url: string;
  githubURL: string;
  figmaURL?: string;
  technologies: TechnologiesIDs[];

  constructor(
    title: string,
    description: string,
    url: string,
    githubURL: string,
    technologies: TechnologiesIDs[],
    figmaURL?: string
  ) {
    this.title = title;
    this.description = description;
    this.url = url;
    this.githubURL = githubURL;
    this.figmaURL = figmaURL;
    this.technologies = technologies;
  }
}

export default Project;
