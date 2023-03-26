import { Button } from "@nextui-org/react";
import SocialMedia from "../../lib/models/socialMedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  socialMedia: SocialMedia;
};

const SocialMediaButton = ({ socialMedia }: Props) => {
  return (
    <Button
      key={socialMedia.url}
      icon={<FontAwesomeIcon icon={socialMedia.icon} />}
      css={{ backgroundColor: socialMedia.color, minWidth: 150 }}
      onClick={() => {
        window.open(socialMedia.url);
      }}
    >
      {socialMedia.name}
    </Button>
  );
};

export default SocialMediaButton;
