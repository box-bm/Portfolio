import { Text } from "@nextui-org/react";
import { Section } from "../section";
import ProgrammingLanguages from "./programmingLanguages";
import Languages from "./languages";
import Frameworks from "./frameworks";
import { Box } from "../box";
import Tools from "./tools";

const Skills = () => {
  return (
    <Section
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Text h2 css={{textAlign: "center"}}>Skills</Text>
      <Box
        css={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "stretch",
          justifyContent: "center",
          gap: 12,
        }}
      >
        <ProgrammingLanguages />
        <Frameworks />
        <Tools />
      </Box>
      <Languages />
    </Section>
  );
};

export default Skills;
