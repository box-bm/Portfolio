import Navbar from "@/components/navbar";
import RepositoriesTable from "@/components/projects/repositoriesTable";
import { Container, Text } from "@nextui-org/react";
import Head from "next/head";
import getGithubRepositories from "../../../lib/data/getGithubRepositories";
import { Box } from "@/components/box";
import SocialMediaButton from "@/components/socialMediaButton";
import socialMedia from "../../../lib/data/socialMedia";

type Props = {
  repositories: GithubRepository[];
};

const Repositories = ({ repositories }: Props) => {
  return (
    <>
      <Head>
        <title>Repositories</title>
      </Head>
      <Container>
        <Navbar />
        <main style={{ paddingTop: 100 }}>
          <Text h2>Repositories</Text>

          <RepositoriesTable repositories={repositories} />
          <Box css={{ marginTop: 20 }}>
            <SocialMediaButton
              socialMedia={
                socialMedia.find((social) => social.code === "github")!
              }
            />
          </Box>
        </main>
      </Container>
    </>
  );
};

export async function getStaticProps() {
  const repositories = await getGithubRepositories();

  return {
    props: {
      repositories,
    },
  };
}

export default Repositories;