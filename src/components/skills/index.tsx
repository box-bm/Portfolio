import { Button, Grid, Text } from "@nextui-org/react";
import { Section } from "../section";
import ProgrammingLanguages from "./programmingLanguages";
import Languages from "./languages";
import Frameworks from "./frameworks";
import Tools from "./tools";
import { Box } from "../box";
import ViewMoreButton from "../viewMoreButton";
import { useRouter } from "next/router";

const Skills = () => {
  const router = useRouter();

  return (
    <Section
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text h2 css={{ textAlign: "center" }}>
        Skills
      </Text>
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
      <Box css={{ marginTop: 20 }}>
        <ViewMoreButton
          onClick={() => {
            router.push("/skills");
          }}
        />
      </Box>
    </Section>
  );
};

export default Skills;
