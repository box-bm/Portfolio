import Footer from "../components/Footer";
import { Aboutme, Header } from "../components/profile";
import { Projects } from "../components/projects";
import Skills from "../components/skills/Skills";

const Main: React.FC = () => {
  return (
    <>
      <main>
        <Header />
        <Aboutme />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  );
};

export default Main;
