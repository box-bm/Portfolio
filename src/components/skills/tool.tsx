import { Image } from "@heroui/react";
import { Box } from "../box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ToolModel from "../../../lib/models/tool";

type Props = {
  tool: ToolModel;
};

const Tool = ({ tool }: Props) => {
  const { icon, title } = tool;
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

export default Tool;
