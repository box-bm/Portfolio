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
        display: "flex",
        alignItems: "start",
        justifyContent: "space-between",
        flexDirection: "row",
        gap: 10,
        "@smMax": {
          flexDirection: "column",
          alignItems: "center",
        },
      }}
    >
      {metrics.map((metric) => (
        <Metric
          key={metric.title}
          number={metric.number}
          title={metric.title}
          description={metric.description}
        />
      ))}
    </Box>
  );
};

export default Metrics;
