import { DefaultTheme } from "styled-components";

const darkTheme: DefaultTheme = {
  borderRadius: "20px",
  backgroundColor: "#181818",
  card: {
    backgroundColor: "#2D2D2D",
    borderRaius: "20px",
  },
  colors: {
    primary: "#AC555F",
    white: "#000000",
    black: "#ffffff",
  },
  screenSizes: {
    maxSmallDevices: "@media only screen and (max-width: 600px)",
    minSmallDevices: "@media only screen and (min-width: 600px)",
    minMediumDevices: "@media only screen and (min-width: 768px)",
    minLargeDevices: "@media only screen and (min-width: 992px)",
    minExtraLargeDevices: "@media only screen and (min-width: 1200px)",
  },
  fonts: {
    color: "#ffffff",
    fontFamily: "Arial, Helvetica, sans-serif",
    caption: {
      color: "#676767",
    },
    title: {
      color: "#000000",
    },
    description: {
      color: "#000000",
    },
  },
};

export default darkTheme;
