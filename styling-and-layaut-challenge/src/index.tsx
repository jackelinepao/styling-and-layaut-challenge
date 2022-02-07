import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from './assets/globalStyles';
import { Theme } from './assets/globalStyles/theme';
import { BrowserRouter as Router } from "react-router-dom";


ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <React.StrictMode>
      <GlobalStyle />
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
