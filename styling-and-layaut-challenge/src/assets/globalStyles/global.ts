import { createGlobalStyle } from "styled-components";
import { Theme } from "./theme";

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: "Roboto", sans-serif;
    font-weight: normal;
  }

  ul, li {
    margin: 0;
    padding: 0;
  }

  button {
    outline: none;
    border: none;
    cursor: pointer;
  }

  .boxContent {
    width: calc(100% - 16.5rem - 18rem);
    margin: 0 18rem 0 16.5rem;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    font-weight: 400;
  }

  h4 {
    font-size: .95rem;
    color: ${props => props.theme.colors.dark};
  }

  h2 {
    color: ${props => props.theme.colors.dark};
    font-size: 1.4rem;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`