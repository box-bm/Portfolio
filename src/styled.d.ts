// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  interface fontTheme {
    color?: string;
    fontFamily?: string;
    fontWeight?: string;
  }

  export interface DefaultTheme {
    borderRadius: string;
    backgroundColor: string;
    colors: {
      primary: string;
    };
    fonts: {
      fontFamily: string;
      caption: fontTheme;
      title: fontTheme;
      description: fontTheme;
    };
    socialColors: {
      linkedin: string;
      twitter: string;
      github: string;
      mail: string;
    };
  }
}
