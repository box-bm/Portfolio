import { Box } from "../box";
import socialMedia from "../../../lib/data/socialMedia";
import SocialMediaButton from "../socialMediaButton";

const SocialMedia = () => {
  return (
    <Box
      css={{
        display: "flex",
        gap: 12,
        justifyContent: "flex-start",
        maxWidth: 280,
        minWidth: 140,
        "@smMax": {
          justifyContent: "center",
          flexDirection: "column",
        },
      }}
    >
      {socialMedia.map((socialMedia) => (
        <SocialMediaButton socialMedia={socialMedia} />
      ))}
    </Box>
  );
};

export default SocialMedia;
