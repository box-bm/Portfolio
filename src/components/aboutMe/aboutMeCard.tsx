import { aboutMeText } from "../../../lib/data/strings";
import { Button, Card, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

const AboutMeCard = () => {
  const router = useRouter();

  return (
    <Card variant="flat" css={{ maxWidth: 720 }}>
      <Card.Body>
        <Text h2>About Me</Text>
        <Text>{aboutMeText}</Text>
      </Card.Body>
      <Card.Footer>
        <Button flat auto onPress={() => router.push("/aboutMe")}>
          View More
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default AboutMeCard;
