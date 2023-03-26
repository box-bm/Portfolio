import { Text, Image } from "@nextui-org/react";
import ProgrammingLanguageModel from "../../../lib/models/programmingLanguage";
import { Box } from "../box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  programmingLanguage: ProgrammingLanguageModel;
};

const ProgrammingLanguage = ({ programmingLanguage }: Props) => {
  const { icon, title, description } = programmingLanguage;
  return (
    <Box
      css={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      {typeof icon === "string" ? (
        <Image
          src={icon}
          alt={title}
          width={20}
          height={20}
          containerCss={{ margin: 0, marginRight: 10 }}
        />
      ) : (
        <FontAwesomeIcon icon={icon} />
      )}
      <Text>{title}</Text>
    </Box>
  );
};

export default ProgrammingLanguage;
