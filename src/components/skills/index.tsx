import { Grid } from "@nextui-org/react";
import ProgrammingLanguages from "./programmingLanguages";
import Languages from "./languages";
import Frameworks from "./frameworks";
import Tools from "./tools";

const Skills = () => {
  return (
    <Grid.Container gap={1}>
      <Grid xs={12} sm={6} md={3}>
        <ProgrammingLanguages />
      </Grid>
      <Grid xs={12} sm={6} md={3}>
        <Frameworks />
      </Grid>
      <Grid xs={12} sm={6} md={3}>
        <Tools />
      </Grid>
      <Grid xs={12} sm={6} md={3}>
        <Languages />
      </Grid>
    </Grid.Container>
  );
};

export default Skills;
