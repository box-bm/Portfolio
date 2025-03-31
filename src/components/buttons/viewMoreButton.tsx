import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@heroui/react";

type Props = {
  auto?: boolean;
  onPress: () => void;
};

const ViewMoreButton = ({ onPress, auto = false }: Props) => {
  return (
    <Button
      variant="flat"
      iconRight={<FontAwesomeIcon icon={faArrowRight} />}
      onPress={onPress}
    >
      View More
    </Button>
  );
};

export default ViewMoreButton;
