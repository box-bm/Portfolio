import { Aboutme, Header } from "../components/profile";
import Skills from "../components/skills/Skills";

const Main: React.FC = () => {
  return (
    <>
      <Header />
      <Aboutme />
      <Skills />
    </>
  );
};

export default Main;
