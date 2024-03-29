import { createTheme } from "@nextui-org/react";

const lightTheme = createTheme({
  type: "light",
  className: 'light-modern',
  theme: {
    colors: {
      primary: "#2364AA",
      secondary: "#243E36",
      error: "#FE5F55",
    },
  },
});

export default lightTheme;
