import { TechnologyCard } from "./technologyCard";
import "./technologies.css"

const technologiesList = [
  { text: "React", description: "" },
  { text: "Flutter", description: "" },
  { text: ".Net Core", description: "" },
];

const Technologies = () => {
  return (
    <div className="Technologies">
      {technologiesList.map((technology) => (
        <TechnologyCard key={technology.text} {...technology} />
      ))}
    </div>
  );
};

export { Technologies };
