import { Text, Image } from "@nextui-org/react";
import { Box } from "../box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Framework from "../../../lib/models/framework";

type Props = {
  framework: Framework;
};

const Framework = ({ framework }: Props) => {
  const { icon, title, description } = framework;
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

export default Framework;
