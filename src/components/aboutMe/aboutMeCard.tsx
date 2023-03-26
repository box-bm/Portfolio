import { aboutMeText } from "../../../lib/data/strings";
import { Button, Card, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import ViewMoreButton from "../viewMoreButton";

const AboutMeCard = () => {
  const router = useRouter();

  return (
    <Card variant="flat" css={{ maxWidth: 720 }}>
      <Card.Body>
        <Text h2>About Me</Text>
        <Text>{aboutMeText}</Text>
      </Card.Body>
      <Card.Footer>
        <ViewMoreButton onClick={() => router.push("/aboutMe")} />
      </Card.Footer>
    </Card>
  );
};

export default AboutMeCard;
