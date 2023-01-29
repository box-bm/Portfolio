import technologies from "../data/technologies";
import TechnologiesIDs from "../data/technologiesIDs";

export const findTechnologies = (technologiesIDs: TechnologiesIDs[]) =>
  technologies.filter((technology) => technologiesIDs.includes(technology.id));
