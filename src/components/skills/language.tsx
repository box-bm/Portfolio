import { Progress, Text } from "@nextui-org/react";
import LanguageModel from "../../../lib/models/language";
import { Box } from "../box";

type Props = {
  language: LanguageModel;
};

const Language = ({ language }: Props) => {
  const { description, name, percent } = language;

  return (
    <>
      <Box>
        <Text b span>
          {name}{" "}
        </Text>
        <Text span css={{ fontWeight: "$light" }}>
          {description}
        </Text>
      </Box>
      <Progress color="primary" shadow size="sm" value={percent * 100} />
    </>
  );
};

export default Language;
