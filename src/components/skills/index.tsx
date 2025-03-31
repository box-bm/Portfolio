import ProgrammingLanguages from "./programmingLanguages";
import Languages from "./languages";
import Frameworks from "./frameworks";
import Tools from "./tools";

const Skills = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <div>
        <ProgrammingLanguages />
      </div>
      <div>
        <Frameworks />
      </div>
      <div>
        <Tools />
      </div>
      <div>
        <Languages />
      </div>
    </div>
  );
};

export default Skills;
