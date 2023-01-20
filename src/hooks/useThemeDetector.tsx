import React from "react";

const useThemeDetector = () => {
  const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, setIsDarkTheme] = React.useState(getCurrentTheme());

  const mqListener = (e: any) => {
    setIsDarkTheme(e.matches);
  };

  React.useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addEventListener("themeDetector", mqListener);
    return () => darkThemeMq.removeEventListener("themeDetector", mqListener);
  }, []);

  return isDarkTheme;
};

export default useThemeDetector;
