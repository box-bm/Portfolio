import { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import { AboutMe } from "./components/aboutMe";
import { Navbar } from "./components/navbar";
import GlobalStyles from "./styles/globalStyle";
import myTheme from "./styles/theme";

const App: FunctionComponent = () => (
  <ThemeProvider theme={myTheme}>
    <GlobalStyles />
    <Navbar />
    <AboutMe />
  </ThemeProvider>
);

export default App;
