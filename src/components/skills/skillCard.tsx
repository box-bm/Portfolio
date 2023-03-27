import { Card, Text } from "@nextui-org/react";
import { Box } from "../box";

type Props = {
  title: string;
  description?: string;
  children: any;
};

const SkillCard = ({ title, description, children }: Props) => {
  return (
    <Card variant="flat" borderWeight="bold" css={{ width: "100%" }}>
      <Card.Body>
        <Text h3 css={{ margin: 0 }}>
          {title}
        </Text>
        <Text css={{ lineHeight: 1.2 }}>{description}</Text>
        <Box css={{ marginTop: 16 }}>{children}</Box>
      </Card.Body>
    </Card>
  );
};

export default SkillCard;
