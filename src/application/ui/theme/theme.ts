import { DefaultTheme } from "styled-components";
import { Colors } from "./colors";

export const defaultTheme: DefaultTheme = {
  borderRadius: '8px',
  palette: {
    common: {
      black: Colors.black,
      white: Colors.white
    }
  },
  breakPoints: {
    xs: '480px',
    sm: '720px',
    md: '1024px',
    lg: '1240px',
    xl: '1600px',
  }
}