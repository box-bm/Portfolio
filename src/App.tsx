import { ThemeProvider } from "styled-components";
import { GlobalStyles, darkTheme, lightTheme } from "./themes";
import useThemeDetector from "./hooks/useThemeDetector";
import { Outlet } from "react-router-dom";

function App() {
  const darkMode = useThemeDetector();
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
