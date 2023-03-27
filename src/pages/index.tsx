"use client";

import Head from "next/head";
import { Container, Text } from "@nextui-org/react";
import Navbar from "@/components/navbar";
import Presentation from "@/components/presentation";
import AboutMe from "@/components/aboutMe";
import Skills from "@/components/skills";
import { Box } from "@/components/box";
import ViewMoreButton from "@/components/buttons/viewMoreButton";
import { useRouter } from "next/router";
import { Main } from "@/components/main";
import Footer from "@/components/footer";
import { getSites } from "../../lib/getSites";
import SitesProps from "../../lib/models/navbarProps";

type Props = {
  sites: SitesProps;
};

export default function Home({ sites }: Props) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Box Dev</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar {...sites} />
      <Container>
        <Main>
          <Presentation />
          <AboutMe />
          <Box
            css={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              css={{
                marginTop: 20,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text h2 css={{ margin: 0 }}>
                Skills
              </Text>
              <ViewMoreButton
                auto
                onClick={() => {
                  router.push("/skills");
                }}
              />
            </Box>

            <Skills />
          </Box>
        </Main>
      </Container>
      <Footer {...sites} />
    </>
  );
}

export async function getStaticProps() {
  const sites = getSites();
  return {
    props: {
      sites,
    },
  };
}
