import { Box } from "../box";
import moment from "moment";

type Props = {
  number: string;
  title: string;
  description: string;
};

const Metric = ({ number, title, description }: Props) => {
  return (
    <Box className="max-w-[200px] text-start sm:max-w-[400px] sm:text-center">
      <h1 className="text-4xl font-bold m-0">{number}</h1>
      <h4 className="text-lg font-semibold mb-[-5px]">{title}</h4>
      <p className="leading-[1.2]">{description}</p>
    </Box>
  );
};

export default Metric;
