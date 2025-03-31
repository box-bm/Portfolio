import { Button } from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialMedia from "../../../lib/models/socialMedia";

type Props = {
  socialMedia: SocialMedia;
};

const SocialMediaButton = ({ socialMedia }: Props) => {
  return (
    <Button
      key={socialMedia.url}
      icon={<FontAwesomeIcon icon={socialMedia.icon} />}
      css={{ backgroundColor: socialMedia.color, minWidth: 150 }}
      onPress={() => {
        window.open(socialMedia.url);
      }}
    >
      {socialMedia.name}
    </Button>
  );
};

export default SocialMediaButton;
