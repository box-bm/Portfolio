import { DefaultTheme } from "styled-components";

const lightTheme: DefaultTheme = {
  borderRadius: "20px",
  backgroundColor: "#F0F0F0",
  card: {
    backgroundColor: "#FFFFFF",
    borderRaius: "20px",
  },
  colors: {
    primary: "#1E3C87",
    black: "#000000",
    white: "#ffffff",
  },
  screenSizes: {
    maxSmallDevices: "@media only screen and (max-width: 600px)",
    minSmallDevices: "@media only screen and (min-width: 600px)",
    minMediumDevices: "@media only screen and (min-width: 768px)",
    minLargeDevices: "@media only screen and (min-width: 992px)",
    minExtraLargeDevices: "@media only screen and (min-width: 1200px)",
  },
  fonts: {
    color: "#000000",
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

export default lightTheme;
