import AboutMeCard from "./aboutMeCard";
import { Section } from "../section";
import metrics from "../../../lib/data/metrics";
import Metrics from "./metrics";

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
      <Metrics metrics={metrics.filter((metric) => metric.showHome)} />
    </Section>
  );
};

export default AboutMe;
