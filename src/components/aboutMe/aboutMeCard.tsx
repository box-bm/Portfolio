import { aboutMeText } from "../../../lib/data/strings";
import { Card, CardBody, CardFooter } from "@heroui/react";
import { useRouter } from "next/router";
import ViewMoreButton from "@/components/buttons/viewMoreButton";

const AboutMeCard = () => {
  const router = useRouter();

  return (
    <Card shadow="none" className="max-w-3xl border-1 border-gray-200">
      <CardBody>
        <h2>About Me</h2>
        <p>{aboutMeText}</p>
      </CardBody>
      <CardFooter>
        <ViewMoreButton onPress={() => router.push("/aboutMe")} />
      </CardFooter>
    </Card>
  );
};

export default AboutMeCard;
