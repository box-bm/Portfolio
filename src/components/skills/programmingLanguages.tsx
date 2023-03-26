import programmingLanguages from "../../../lib/data/programmingLanguages";
import ProgrammingLanguage from "./programmingLanguage";
import SkillCard from "./skillCard";

const ProgrammingLanguages = () => {
  return (
    <SkillCard
      title="Programming Languages"
      description="Those are some programming language what I use for build, mobile apps,
    frontend and backend."
    >
      {programmingLanguages.map((programmingLanguage) => (
        <ProgrammingLanguage programmingLanguage={programmingLanguage} />
      ))}
    </SkillCard>
  );
};

export default ProgrammingLanguages;
