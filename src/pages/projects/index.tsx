import { Box } from "@/components/box";
import Navbar from "@/components/navbar";
import RepositoriesTable from "@/components/projects/repositoriesTable";
import { Container, Divider, Text } from "@nextui-org/react";
import Head from "next/head";
import getGithubRepositories from "../../../lib/data/getGithubRepositories";
import { projectsText } from "../../../lib/data/strings";
import SocialMediaButton from "@/components/socialMediaButton";
import socialMedia from "../../../lib/data/socialMedia";

type Props = {
  repositories: GithubRepository[];
};

const Projects = ({ repositories }: Props) => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <Container>
        <Navbar />
        <main style={{ paddingTop: 100 }}>
          <Text h2 css={{ margin: 0 }}>
            Projects
          </Text>
          <Divider css={{ marginBottom: 10 }} />
          <Text>{projectsText}</Text>
          <Box css={{marginTop: 20}}>
            <SocialMediaButton
              socialMedia={
                socialMedia.find((social) => social.code === "github")!
              }
            />
          </Box>
          <Box css={{ marginTop: 20 }}>
            <Text h3>Repositories</Text>
            <RepositoriesTable repositories={repositories} />
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

export default Projects;