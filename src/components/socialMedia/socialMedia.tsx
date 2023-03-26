import { Box } from "../box";
import SocialMediaModel from "../../../lib/models/socialMedia";
import SocialMediaButton from "../socialMediaButton";

type Props = {
  socialMedia: SocialMediaModel[];
};

const SocialMedia = ({ socialMedia }: Props) => {
  return (
    <Box
      css={{
        display: "flex",
        gap: 10,
        justifyContent: "flex-start",
        "@smMax": {
          justifyContent: "center",
          flexDirection: "column",
        },
      }}
    >
      {socialMedia.map((socialMedia) => (
        <SocialMediaButton key={socialMedia.code} socialMedia={socialMedia} />
      ))}
    </Box>
  );
};

export default SocialMedia;
