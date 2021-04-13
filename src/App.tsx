import { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import { AboutMe } from "./components/aboutMe";
import Content from "./components/layout/content";
import { Navbar } from "./components/layout/navbar";
import { Services } from "./components/services";
import GlobalStyles from "./styles/globalStyle";
import myTheme from "./styles/theme";

const App: FunctionComponent = () => (
  <ThemeProvider theme={myTheme}>
    <GlobalStyles />
    <Content>
      <Navbar />
      <AboutMe />
      <Services />
    </Content>
  </ThemeProvider>
);

export default App;
