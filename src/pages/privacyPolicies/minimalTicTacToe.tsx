import { Container } from "@nextui-org/react";
import Head from "next/head";
import { Main } from "@/components/main";
import PoliticsProps from "../../../lib/models/politicsProps";
import PolicyContent from "@/components/policy/policyContent";
import readFiles from "../../../lib/utils/readFiles";

type Props = {
  politic: PoliticsProps;
};

const TicTactToe = ({ politic }: Props) => {
  return (
    <>
      <Head>
        <title>TicTacToe Policies - Box Dev</title>
        <meta name="description" content="Minimal Tik Tak Toe policies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container>
        <Main>
          <PolicyContent content={politic.content} />
        </Main>
      </Container>
    </>
  );
};

export async function getStaticProps() {
  const fileContents = readFiles("/static/ticTacToePolicy.md");

  var content = fileContents.replaceAll(
    "[contact]",
    "[brandong.manzog@gmail.com](mailto:brandong.manzog@gmail.com)"
  );

  content = content.replaceAll(
    "[adMobPrivacyPolicyLink]",
    "[AdMob Privacy Policy](https://policies.google.com/privacy)"
  );

  content = content.replaceAll(
    "[website]",
    "[brandonmanzo.dev](https://www.brandonmanzo.dev/contact)"
  );

  return {
    props: {
      politic: { content: content } as PoliticsProps,
    },
  };
}

export default TicTactToe;
