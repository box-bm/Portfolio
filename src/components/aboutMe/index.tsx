import AboutMeCard from "./aboutMeCard";
import { Section } from "../section";
import Metric from "../../../lib/models/metric";
import Metrics from "./metrics";
import { Box } from "../box";

type Props = { metrics: Metric[] };

const AboutMe = ({ metrics }: Props) => {
  return (
    <Section
      css={{
        display: "flex",
        alignItems: "center",
        gap: 30,
        flexDirection: "row",
        padding: "20px 0",
        justifyContent: "space-evenly",
        "@smMax": {
          flexDirection: "column",
        },
      }}
    >
      <AboutMeCard />
      <Box css={{ maxWidth: 720, width: "100%" }}>
        <Metrics metrics={metrics} />
      </Box>
    </Section>
  );
};

export default AboutMe;
