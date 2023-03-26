import { Button, Card, Text } from "@nextui-org/react";
import { Box } from "../box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

type Props = {
  title: string;
  description: string;
  children: any;
};

const SkillCard = ({ title, description, children }: Props) => {
  return (
    <Card
      variant="flat"
      css={{ maxWidth: 420, minWidth: 290 }}
      borderWeight="bold"
    >
      <Card.Body>
        <Text h3 css={{ margin: 0 }}>
          {title}
        </Text>
        <Text css={{ lineHeight: 1.2 }}>{description}</Text>
        <Box css={{ marginTop: 16 }}>{children}</Box>
      </Card.Body>
      <Card.Footer>
        <Button flat auto iconRight={<FontAwesomeIcon icon={faArrowRight} />}>
          View more
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default SkillCard;
