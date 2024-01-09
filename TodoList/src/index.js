import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App/App";

const rootId = document.querySelector("#root");

const rootElement = ReactDOM.createRoot(rootId);

rootElement.render(
  <>
    <App />
  </>
);