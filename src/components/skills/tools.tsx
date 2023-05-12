import tools from "../../../lib/data/tools";
import tols from "../../../lib/data/tools";
import Framework from "./framework";
import SkillCard from "./skillCard";
import Tool from "./tool";

const Tools = () => {
  return (
    <SkillCard
      title="Tools"
      description="I every day use this tools to write and build code. Or somethimes to do other else"
    >
      {tools.map((tool) => (
        <Tool key={tool.code} tool={tool} />
      ))}
    </SkillCard>
  );
};

export default Tools;
