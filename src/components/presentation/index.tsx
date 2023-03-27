import { Box } from "../box";
import SocialMedia from "../socialMedia/socialMedia";
import ProfilePicture from "./profilePicture";
import NameTitle from "./nameTitle";
import { Section } from "../section";
import SocialMediaModel from "../../../lib/models/socialMedia";

type Props = {
  socialMedia: SocialMediaModel[]
}

const Presentation = ({socialMedia}: Props) => {
  return (
    <Section
      css={{
        minHeight: "63vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "@xsMax": {
          flexDirection: "column",
          justifyContent: "center",
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
