import { Text } from "@nextui-org/react";
import languages from "../../../lib/data/languages";
import { Box } from "../box";
import Language from "./language";

const Languages = () => {
  return (
    <Box
      css={{ gap: 10, display: "flex", flexDirection: "column", maxWidth: 320 }}
    >
      <Text h2 css={{ margin: 0 }}>
        Languages
      </Text>
      {languages.map((language) => (
        <Language language={language} key={language.name} />
      ))}
    </Box>
  );
};

export default Languages;
