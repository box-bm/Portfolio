// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  interface fontTheme {
    color?: string;
    fontFamily?: string;
    fontWeight?: string;
  }

  interface cardTheme {
    backgroundColor: string;
    borderRaius: string;
  }

  export interface DefaultTheme {
    borderRadius: string;
    backgroundColor: string;
    card: cardTheme;
    screenSizes: {
      maxSmallDevices: string;
      minSmallDevices: string;
      minMediumDevices: string;
      minLargeDevices: string;
      minExtraLargeDevices: string;
    }
    colors: {
      primary: string;
      white: string;
      black: string;
    };
    fonts: {
      color: string;
      fontFamily: string;
      caption: fontTheme;
      title: fontTheme;
      description: fontTheme;
    };
  }
}
