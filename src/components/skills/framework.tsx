import { Image } from "@heroui/react";
import { Box } from "../box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type Framework from "../../../lib/models/framework";

type Props = {
  framework: Framework;
};

const Framework = ({ framework }: Props) => {
  const { icon, title } = framework;
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
          className="mr-2"
        />
      ) : (
        <FontAwesomeIcon icon={icon} />
      )}
      <p>{title}</p>
    </Box>
  );
};

export default Framework;
