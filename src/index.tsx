import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { RecoilRoot } from "recoil";
import GlobalStyle from "./assets/styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
