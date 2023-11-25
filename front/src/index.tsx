import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GlobalStyle } from "./GlobalStyle";
import { DeviceThemeProvider } from "@salutejs/plasma-ui";

const root = ReactDOM.createRoot(
   document.getElementById("root") as HTMLElement
);
root.render(
   <React.StrictMode>
      <DeviceThemeProvider>
         <App />
         <GlobalStyle />
      </DeviceThemeProvider>
   </React.StrictMode>
);
