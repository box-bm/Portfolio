import { Card, CardBody } from "@heroui/react";
import { Box } from "../box";

type Props = {
  title: string;
  description?: string;
  children: any;
};

const SkillCard = ({ title, description, children }: Props) => {
  return (
    <Card shadow="none" className="w-full border-1 border-gray-200">
      <CardBody>
        <h3 className="text-lg font-bold m-0">{title}</h3>
        <p className="leading-tight text-gray-700">{description}</p>
        <Box className="mt-4">{children}</Box>
      </CardBody>
    </Card>
  );
};

export default SkillCard;
