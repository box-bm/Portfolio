import MetricModel from "../../../lib/models/metric";
import { Box } from "@/components/box";
import Metric from "@/components/aboutMe/metric";

type Props = {
  metrics: MetricModel[];
};

const Metrics = ({ metrics }: Props) => {
  return (
    <Box
      css={{
        width: "100%",
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        flexDirection: "row",
        maxWidth: 720,
        gap: 12,
        "@smMax": {
          flexDirection: "column",
          alignItems: "center",
        },
      }}
    >
      {metrics.map((metric) => (
        <Metric
          number={metric.number}
          title={metric.title}
          description={metric.description}
        />
      ))}
    </Box>
  );
};

export default Metrics;
