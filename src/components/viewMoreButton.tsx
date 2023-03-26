import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@nextui-org/react";

type Props = {
  onClick: () => void;
};

const ViewMoreButton = ({ onClick }: Props) => {
  return (
    <Button
      flat
      iconRight={<FontAwesomeIcon icon={faArrowRight} />}
      onClick={onClick}
    >
      View More
    </Button>
  );
};

export default ViewMoreButton;
