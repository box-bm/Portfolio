import { Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Box } from "../box";
import socialMedia from "../../../lib/data/socialMedia";

const SocialMedia = () => {
  return (
    <Box
      css={{
        display: "flex",
        gap: 12,
        flexWrap: "wrap",
        justifyContent: "flex-start",
        maxWidth: 360,
        minWidth: 200,
        "@xsMax": {
          justifyContent: "center",
        },
      }}
    >
      {socialMedia.map((socialMedia) => (
        <Button
          auto
          icon={<FontAwesomeIcon icon={socialMedia.icon} />}
          css={{ backgroundColor: socialMedia.color }}
          onClick={() => {
            window.open(socialMedia.url);
          }}
        >
          {socialMedia.name}
        </Button>
      ))}
    </Box>
  );
};

export default SocialMedia;
