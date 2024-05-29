import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      text: string;
      grayText: string;
    };
    size: {
      barHeight: string;
    };
  }
}
