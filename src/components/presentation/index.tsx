import { Box } from "../box";
import SocialMedia from "../socialMedia/socialMedia";
import ProfilePicture from "./profilePicture";
import NameTitle from "./nameTitle";
import { Section } from "../section";
import socialMedia from "../../../lib/data/socialMedia";

const Presentation = () => {
  return (
    <Section
      css={{
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 0px",
        "@xsMax": {
          flexDirection: "column",
          justifyContent: "center",
          marginTop: 60,
        },
      }}
    >
      <Box
        css={{
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          flexDirection: "column",
          order: 1,
          "@xsMax": {
            order: 2,
            textAlign: "center",
            alignItems: "center",
            marginTop: 20,
          },
        }}
      >
        <NameTitle />
        <SocialMedia
          socialMedia={socialMedia.filter(
            ({ hideOnHeading }) => !hideOnHeading
          )}
        />
      </Box>
      <Box
        css={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          order: 2,
          "@xsMax": {
            order: 1,
          },
        }}
      >
        <ProfilePicture />
      </Box>
    </Section>
  );
};

export default Presentation;
