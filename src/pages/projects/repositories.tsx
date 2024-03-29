import Navbar from "@/components/navbar";
import RepositoriesTable from "@/components/projects/repositoriesTable";
import { Container, Text } from "@nextui-org/react";
import Head from "next/head";
import { Box } from "@/components/box";
import SocialMediaButton from "@/components/buttons/socialMediaButton";
import socialMedia from "../../../lib/data/socialMedia";
import { getSites } from "../../../lib/getSites";
import SitesProps from "../../../lib/models/sitesProps";
import Footer from "@/components/footer";

type Props = {
  sites: SitesProps;
};

const Repositories = ({ sites }: Props) => {
  return (
    <>
      <Head>
        <title>Repositories - Box Dev</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container>
        <Navbar {...sites} />
        <main style={{ paddingTop: 100 }}>
          <Text h2>Repositories</Text>

          <RepositoriesTable />
          <Box css={{ marginTop: 20 }}>
            <SocialMediaButton
              socialMedia={
                socialMedia.find((social) => social.code === "github")!
              }
            />
          </Box>
        </main>
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

export default Repositories;
