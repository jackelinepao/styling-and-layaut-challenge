import baseStyled, { ThemedStyledInterface } from "styled-components";

export const Theme = {
  colors: {
    white: "#ffffff",
    darkBlue: "#858A9D",
    lightGray: "#BEC0C8",
    gray: "#464C61",
    dark: "#343951",
    orange: "#FF9F00",
    lightOrange: "#FFB233",
    ligherOrange: "#FFD999",
  },
  fonts: "'Roboto Regular', 'sans-serif'",
};

export type Theme = typeof Theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;