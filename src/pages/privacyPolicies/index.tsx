import { Container, Text } from "@nextui-org/react";
import Head from "next/head";
import { Main } from "@/components/main";
import Link from "next/link";

const Policies = () => {
  return (
    <>
      <Head>
        <title>TicTacToe Policies - Box Dev</title>
        <meta name="description" content="Tik tak toe policies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container>
        <Main>
          <Text h2 css={{ margin: 0 }}>
            Politics
          </Text>
          <Link href="/privacyPolicies/minimalTicTacToe">
            Minimal Tik Tak Toe
          </Link>
        </Main>
      </Container>
    </>
  );
};

export default Policies;
