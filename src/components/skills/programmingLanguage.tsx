import { Image } from "@heroui/react";
import ProgrammingLanguageModel from "../../../lib/models/programmingLanguage";
import { Box } from "../box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  programmingLanguage: ProgrammingLanguageModel;
};

const ProgrammingLanguage = ({ programmingLanguage }: Props) => {
  const { icon, title } = programmingLanguage;
  return (
    <Box className="flex justify-start items-center">
      {typeof icon === "string" ? (
      <Image
        src={icon}
        alt={title}
        width={20}
        height={20}
        className="mr-2"
      />
      ) : (
      <FontAwesomeIcon icon={icon} />
      )}
      <p>{title}</p>
    </Box>
  );
};

export default ProgrammingLanguage;
