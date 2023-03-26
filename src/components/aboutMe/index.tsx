import AboutMeCard from "./aboutMeCard";
import { Section } from "../section";
import metrics from "../../../lib/data/metrics";
import Metrics from "./metrics";
import { Box } from "../box";

const AboutMe = () => {
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
      <Box css={{ maxWidth: 720, width: "100%", }}>
        <Metrics metrics={metrics.filter((metric) => metric.showHome)} />
      </Box>
    </Section>
  );
};

export default AboutMe;
