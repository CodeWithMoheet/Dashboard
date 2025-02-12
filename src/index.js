import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";

ReactDOM.render(
    //wrap your app in the context provider to use the  Context provider in the app
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
