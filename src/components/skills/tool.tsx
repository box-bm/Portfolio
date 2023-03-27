import { Text, Image } from "@nextui-org/react";
import { Box } from "../box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ToolModel from "../../../lib/models/tool";

type Props = {
  tool: ToolModel;
};

const Tool = ({ tool }: Props) => {
  const { icon, title, description } = tool;
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

export default Tool;
