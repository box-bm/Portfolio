import { ThemeProvider } from "styled-components";
import { Technologies } from "./components/technologies";
import { GlobalStyles, darkTheme, lightTheme } from "./themes";
import useThemeDetector from "./hooks/useThemeDetector";

function App() {
  const darkMode = useThemeDetector();
  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Technologies />
      </ThemeProvider>
    </>
  );
}

export default App;
