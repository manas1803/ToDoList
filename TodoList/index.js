import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = ReactDOM.createRoot(document.querySelector("#root"));

rootElement.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
