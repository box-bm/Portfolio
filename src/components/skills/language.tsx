import { Progress, Text } from "@nextui-org/react";
import LanguageModel from "../../../lib/models/language";
import { Box } from "../box";

type Props = {
  language: LanguageModel;
};

const Language = ({ language }: Props) => {
  const { description, name, percent } = language;

  return (
    <Box>
      <Text b>
        {name} <Text span css={{fontWeight: "$light"}}>{description}</Text>
      </Text>
      <Progress color="primary" value={percent * 100} size="sm" />
    </Box>
  );
};

export default Language;
