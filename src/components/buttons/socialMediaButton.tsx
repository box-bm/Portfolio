import { Button } from "@nextui-org/react";
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
      onClick={() => {
        window.open(socialMedia.url);
      }}
    >
      {socialMedia.name}
    </Button>
  );
};

export default SocialMediaButton;
