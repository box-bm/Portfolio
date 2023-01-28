import { ThemeProvider } from "styled-components";
import { GlobalStyles, darkTheme, lightTheme } from "./themes";
import useThemeDetector from "./hooks/useThemeDetector";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const darkMode = useThemeDetector();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("home");
    }
  }, [location, navigate]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
