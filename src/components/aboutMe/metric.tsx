import { Text } from "@nextui-org/react";
import { Box } from "../box";
import moment from "moment";

type Props = {
  number: string;
  title: string;
  description: string;
};

const Metric = ({ number, title, description }: Props) => {
  return (
    <Box
      css={{
        maxWidth: 200,
        textAlign: "start",
        "@smMax": {
          maxWidth: 400,
          textAlign: "center"
        },
      }}
    >
      <Text h1 css={{ margin: 0 }}>
        {number}
      </Text>
      <Text h4 css={{ marginBottom: -5 }}>
        {title}
      </Text>
      <Text css={{ lineHeight: 1.2 }}>{description}</Text>
    </Box>
  );
};

export default Metric;
