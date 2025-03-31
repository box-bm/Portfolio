import { Progress } from "@heroui/react";
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
        <span className="font-bold">
          {name}{" "}
        </span>
        <span className="font-light">
          {description}
        </span>
      </Box>
      <Progress color="primary" size="sm" value={percent * 100} />
    </>
  );
};

export default Language;
