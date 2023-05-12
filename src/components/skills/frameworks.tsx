import frameworks from "../../../lib/data/frameworks";
import Framework from "./framework";
import ProgrammingLanguage from "./programmingLanguage";
import SkillCard from "./skillCard";

const Frameworks = () => {
  return (
    <SkillCard
      title="Frameworks and Libraries"
      description="Some frameworks what I use in my career. Powerful tools to transform ideas to a real product"
    >
      {frameworks.map((framework) => (
        <Framework key={framework.code} framework={framework} />
      ))}
    </SkillCard>
  );
};

export default Frameworks;
