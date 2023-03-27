import languages from "../../../lib/data/languages";
import { Box } from "../box";
import Language from "./language";
import SkillCard from "./skillCard";

const Languages = () => {
  return (
    <SkillCard title="Languages" description="Working improving my languages, I am learning a lot.">
      <Box css={{ gap: 10, display: "flex", flexDirection: "column" }}>
        {languages.map((language) => (
          <Box key={language.name}>
            <Language language={language} />
          </Box>
        ))}
      </Box>
    </SkillCard>
  );
};

export default Languages;
