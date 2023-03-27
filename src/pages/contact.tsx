import { Box } from "@/components/box";
import Navbar from "@/components/navbar";
import { Container, Divider, Text } from "@nextui-org/react";
import Head from "next/head";
import SocialMedia from "@/components/socialMedia/socialMedia";
import { Main } from "@/components/main";

import socialMedia from "../../lib/data/socialMedia";
import {
  contactInstagram,
  contactLinkedIn,
  contactTwitter,
} from "../../lib/data/strings";
import Footer from "@/components/footer";
import Link from "next/link";
import { getSites } from "../../lib/getSites";
import SitesProps from "../../lib/models/navbarProps";

type Props = {
  sites: SitesProps;
};

const AboutMe = ({ sites }: Props) => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar {...sites} />
      <Container>
        <Main>
          <Text h2 css={{ margin: 0 }}>
            Contact
          </Text>
          <Divider css={{ marginBottom: 10 }} />
          <Text>
            Thank you for your interest in my services! If you have any
            questions or would like to discuss your project requirements, please
            don't hesitate to contact me at{" "}
            <Link href="mailto: brandong.manzog@gmail.com">
              <Text b>brandong.manzog@gmail.com</Text>
            </Link>
            . You can also connect with me on social media to stay up-to-date on
            my latest projects and industry insights.
          </Text>
          <br />
          <Text>
            {contactLinkedIn}
            <Link
              href={
                socialMedia.find((social) => social.code === "linkedin")?.url!
              }
              target="_blank"
              style={{ fontWeight: "bold" }}
            >
              Brandon Manzo
            </Link>
          </Text>
          <br />
          <Text>
            {contactTwitter}
            <Link
              href={
                socialMedia.find((social) => social.code === "twitter")?.url!
              }
              target="_blank"
              style={{ fontWeight: "bold" }}
            >
              @BoxBMG
            </Link>
          </Text>
          <br />
          <Text>
            {contactInstagram}
            <Link
              href={
                socialMedia.find((social) => social.code === "instagram")?.url!
              }
              target="_blank"
              style={{ fontWeight: "bold" }}
            >
              @bgManzo
            </Link>
          </Text>
          <Box css={{ marginTop: 20 }}>
            <SocialMedia
              socialMedia={socialMedia.filter((social) =>
                ["twitter", "instagram", "linkedin"].includes(social.code)
              )}
            />
          </Box>
        </Main>
      </Container>
      <Footer {...sites} />
    </>
  );
};

export async function getStaticProps() {
  const sites = getSites();
  return {
    props: {
      sites,
    },
  };
}

export default AboutMe;
