import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@nextui-org/react";

type Props = {
  auto?: boolean;
  onClick: () => void;
};

const ViewMoreButton = ({ onClick, auto = false }: Props) => {
  return (
    <Button
      flat
      auto={auto}
      iconRight={<FontAwesomeIcon icon={faArrowRight} />}
      onClick={onClick}
    >
      View More
    </Button>
  );
};

export default ViewMoreButton;
