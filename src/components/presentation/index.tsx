import { Box } from "../box";
import SocialMedia from "../socialMedia/socialMedia";
import ProfilePicture from "./profilePicture";
import NameTitle from "./nameTitle";
import { Section } from "../section";

const Presentation = () => {
  return (
    <Section
      css={{
        minHeight: "calc(100vh - var(--nextui--navbarHeight))",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 0px",
        "@xsMax": {
          flexDirection: "column",
          justifyContent: "center",
          marginTop: 60
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
        <SocialMedia />
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
